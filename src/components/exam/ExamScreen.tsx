import React, { useState, useEffect, useRef } from 'react';
import { ExamSession, QuestionResponse, SectionType, GMATQuestion } from '../../types/gmat';
import { ExamHeader } from './ExamHeader';
import { QuestionRenderer } from './QuestionRenderer';
import { Calculator } from './Calculator';
import { Whiteboard } from './Whiteboard';
import { ReviewScreen } from './ReviewScreen';
import { BreakScreen } from './BreakScreen';
import { estimateAbilityEAP, selectNextAdaptiveItem, mapDifficultyToB, buildScoreReport } from '../../lib/irt';
import { Storage } from '../../lib/storage';
import { ArrowRight, AlertTriangle, CheckCircle, Flag } from 'lucide-react';

interface ExamScreenProps {
  session: ExamSession;
  onExamComplete: (session: ExamSession) => void;
  onExitToMenu: () => void;
}

export const ExamScreen: React.FC<ExamScreenProps> = ({ session: initialSession, onExamComplete, onExitToMenu }) => {
  const [session, setSession] = useState<ExamSession>(initialSession);
  const [currentAnswer, setCurrentAnswer] = useState<any>(null);
  const [isWhiteboardOpen, setIsWhiteboardOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isBreakActive, setIsBreakActive] = useState(false);
  const [showUnansweredWarning, setShowUnansweredWarning] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [editsExhaustedWarning, setEditsExhaustedWarning] = useState(false);
  const [isSubmittingSection, setIsSubmittingSection] = useState(false);

  // Time tracking for current question
  const questionStartTimeRef = useRef<number>(Date.now());
  const timerIntervalRef = useRef<any>(null);

  const currentSection = session.sections[session.currentSectionIndex];
  const currentQuestion = currentSection?.questions[currentSection.currentIndex];
  const currentResponse = currentQuestion ? currentSection.responses[currentQuestion.id] : undefined;

  // Sync currentAnswer when question changes
  useEffect(() => {
    if (currentResponse && currentResponse.userAnswer !== undefined) {
      setCurrentAnswer(currentResponse.userAnswer);
    } else {
      setCurrentAnswer(null);
    }
    questionStartTimeRef.current = Date.now();
  }, [currentSection?.currentIndex, currentSection?.section]);

  // Section 45:00 countdown timer
  useEffect(() => {
    if (currentSection?.status === 'completed' || isBreakActive) return;

    timerIntervalRef.current = setInterval(() => {
      setSession(prev => {
        const secIndex = prev.currentSectionIndex;
        const activeSec = prev.sections[secIndex];
        if (!activeSec || activeSec.timeRemainingSec <= 0) return prev;

        const updatedSec = {
          ...activeSec,
          timeRemainingSec: activeSec.timeRemainingSec - 1,
        };

        const newSections = [...prev.sections];
        newSections[secIndex] = updatedSec;
        const newSession = { ...prev, sections: newSections };
        Storage.saveActiveSession(newSession);
        return newSession;
      });
    }, 1000);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [session.currentSectionIndex, currentSection?.status, isBreakActive]);

  // Handle time expired in section
  const handleTimeExpired = () => {
    handleEndSection();
  };

  // Toggle bookmark on current question
  const handleToggleBookmark = () => {
    if (!currentQuestion) return;
    setSession(prev => {
      const secIndex = prev.currentSectionIndex;
      const activeSec = prev.sections[secIndex];
      const existing = activeSec.responses[currentQuestion.id] || {
        questionId: currentQuestion.id,
        userAnswer: currentAnswer,
        isCorrect: false,
        timeSpentSec: 0,
        bookmarked: false,
        wasEditedInReview: false,
      };

      const updatedResp: QuestionResponse = {
        ...existing,
        bookmarked: !existing.bookmarked,
      };

      const updatedSec = {
        ...activeSec,
        responses: {
          ...activeSec.responses,
          [currentQuestion.id]: updatedResp,
        },
      };

      const newSections = [...prev.sections];
      newSections[secIndex] = updatedSec;
      const newSession = { ...prev, sections: newSections };
      Storage.saveActiveSession(newSession);
      return newSession;
    });
  };

  // Official GMAT Keyboard shortcuts: A-E for standard multiple choice, N for Next, B for Bookmark
  useEffect(() => {
    if (isBreakActive || showExitModal || showUnansweredWarning || editsExhaustedWarning) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input, textarea, or contentEditable
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      const key = e.key.toUpperCase();

      // Bookmark shortcut (B)
      if (key === 'B') {
        e.preventDefault();
        handleToggleBookmark();
        return;
      }

      // Next question shortcut (N)
      if (key === 'N') {
        e.preventDefault();
        handleNext();
        return;
      }

      // Answer selection shortcuts (A, B, C, D, E) for standard options
      if (['A', 'B', 'C', 'D', 'E'].includes(key) && currentQuestion) {
        if (!currentQuestion.type || ['PROBLEM_SOLVING', 'DATA_SUFFICIENCY', 'CRITICAL_REASONING', 'READING_COMPREHENSION'].includes(currentQuestion.type)) {
          e.preventDefault();
          setCurrentAnswer(key);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBreakActive, showExitModal, showUnansweredWarning, editsExhaustedWarning, currentQuestion, currentAnswer, handleToggleBookmark, handleNext]);

  // Verify answer correctness
  const checkIsCorrect = (q: GMATQuestion, answer: any): boolean => {
    if (answer === null || answer === undefined) return false;

    if (q.type === 'TABLE_ANALYSIS' && q.tableData) {
      if (typeof answer !== 'object') return false;
      return q.tableData.statements.every(stmt => answer[stmt.id] === stmt.correctOption);
    }

    if (q.type === 'GRAPHICS_INTERPRETATION' && q.graphicsData) {
      if (typeof answer !== 'object') return false;
      return q.graphicsData.dropdownPrompts.every(dp => answer[dp.id] === dp.correctAnswer);
    }

    if (q.type === 'TWO_PART_ANALYSIS' && q.twoPartData) {
      if (typeof answer !== 'object') return false;
      return answer.col1 === q.twoPartData.correctCol1Id && answer.col2 === q.twoPartData.correctCol2Id;
    }

    return String(answer).trim().toUpperCase() === String(q.correctAnswer).trim().toUpperCase();
  };

  // Move to Next Question
  const handleNext = () => {
    if (currentAnswer === null || currentAnswer === undefined) {
      setShowUnansweredWarning(true);
      return;
    }
    setShowUnansweredWarning(false);

    const timeSpent = Math.max(1, Math.round((Date.now() - questionStartTimeRef.current) / 1000));
    const isCorrect = checkIsCorrect(currentQuestion, currentAnswer);

    setSession(prev => {
      const secIndex = prev.currentSectionIndex;
      const activeSec = prev.sections[secIndex];
      const existingResp = activeSec.responses[currentQuestion.id];

      // Check if this is an edit in review
      let wasEdited = false;
      let newEditsRemaining = activeSec.editsRemaining;
      if (activeSec.status === 'review' && existingResp && existingResp.userAnswer !== currentAnswer) {
        if (newEditsRemaining > 0) {
          wasEdited = true;
          newEditsRemaining -= 1;
        } else {
          // No edits remaining
          setEditsExhaustedWarning(true);
          return prev;
        }
      }

      const updatedResp: QuestionResponse = {
        questionId: currentQuestion.id,
        userAnswer: currentAnswer,
        isCorrect,
        timeSpentSec: (existingResp?.timeSpentSec || 0) + timeSpent,
        bookmarked: existingResp?.bookmarked || false,
        wasEditedInReview: wasEdited || existingResp?.wasEditedInReview || false,
        originalAnswer: existingResp ? existingResp.originalAnswer || existingResp.userAnswer : currentAnswer,
      };

      const newResponses = {
        ...activeSec.responses,
        [currentQuestion.id]: updatedResp,
      };

      // IRT: Update ability theta estimate
      const responseItems = Object.entries(newResponses).map(([qId, r]) => {
        const q = activeSec.questions.find(x => x.id === qId) || currentQuestion;
        return {
          b: mapDifficultyToB(q.difficulty),
          a: q.discrimination ?? 1.2,
          isCorrect: r.isCorrect,
        };
      });
      const updatedTheta = estimateAbilityEAP(responseItems, activeSec.currentAbilityEstimate);

      // Check if we reached the end of the section questions
      const nextIndex = activeSec.currentIndex + 1;
      const totalQ = activeSec.questions.length;

      let newStatus = activeSec.status;
      let finalIndex = nextIndex;

      if (nextIndex >= totalQ) {
        // Section complete -> enter Review Screen!
        newStatus = 'review';
        finalIndex = totalQ - 1;
      }

      const updatedSec = {
        ...activeSec,
        responses: newResponses,
        currentIndex: finalIndex,
        status: newStatus,
        editsRemaining: newEditsRemaining,
        currentAbilityEstimate: updatedTheta,
      };

      const newSections = [...prev.sections];
      newSections[secIndex] = updatedSec;
      const newSession = { ...prev, sections: newSections };
      Storage.saveActiveSession(newSession);
      return newSession;
    });
  };

  // End Section from Review Screen
  const handleEndSection = () => {
    const secIndex = session.currentSectionIndex;
    const isLastSection = secIndex >= session.sections.length - 1;

    if (isLastSection) {
      // Exam Finished! Compile psychometric score report
      const responsesBySection: Record<SectionType, { question: GMATQuestion; response: QuestionResponse }[]> = {
        QUANT: [],
        VERBAL: [],
        DATA_INSIGHTS: [],
      };

      session.sections.forEach(sec => {
        sec.questions.forEach(q => {
          const resp = sec.responses[q.id] || {
            questionId: q.id,
            userAnswer: null,
            isCorrect: false,
            timeSpentSec: 0,
            bookmarked: false,
            wasEditedInReview: false,
          };
          responsesBySection[sec.section].push({ question: q, response: resp });
        });
      });

      const calibrationState = Storage.getCalibrationState();
      const finalReport = buildScoreReport(responsesBySection, calibrationState);

      // Save to history & error log
      Storage.saveScoreReport(finalReport);
      session.sections.forEach(sec => {
        sec.questions.forEach(q => {
          const resp = sec.responses[q.id];
          if (resp && !resp.isCorrect) {
            Storage.addErrorLogItem({
              question: q,
              lastAttempted: new Date().toISOString(),
              userAnswer: resp.userAnswer,
              timesMissed: 1,
              consecutiveCorrect: 0,
              errorClassification: resp.errorClassification || 'CONCEPT_GAP',
            });
          }
        });
      });

      const completedSession: ExamSession = {
        ...session,
        isCompleted: true,
        scoreReport: finalReport,
      };

      Storage.clearActiveSession();
      onExamComplete(completedSession);
    } else {
      // Transition to Break
      setSession(prev => {
        const nextSecIndex = prev.currentSectionIndex + 1;
        const newSections = [...prev.sections];
        newSections[secIndex] = { ...newSections[secIndex], status: 'completed' };
        newSections[nextSecIndex] = { ...newSections[nextSecIndex], status: 'in_progress', currentIndex: 0 };

        const newSession = {
          ...prev,
          currentSectionIndex: nextSecIndex,
          sections: newSections,
        };
        Storage.saveActiveSession(newSession);
        return newSession;
      });
      setIsBreakActive(true);
    }
  };

  // Resume after break
  const handleEndBreak = () => {
    setIsBreakActive(false);
  };

  // Jump to question from Review Screen
  const handleSelectQuestionFromReview = (index: number) => {
    setSession(prev => {
      const secIndex = prev.currentSectionIndex;
      const activeSec = prev.sections[secIndex];
      const updatedSec = { ...activeSec, currentIndex: index };
      const newSections = [...prev.sections];
      newSections[secIndex] = updatedSec;
      return { ...prev, sections: newSections };
    });
  };

  // Shared Exit Modal Component
  const renderExitModal = () => {
    if (!showExitModal) return null;
    return (
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-300 space-y-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle size={24} />
          </div>
          <div className="text-center space-y-1">
            <h3 className="text-lg font-bold text-slate-900">Pause & Exit to Menu?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your current exam progress, section timer, and all recorded responses are saved. You can resume this simulation at any time from the dashboard.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowExitModal(false)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition cursor-pointer"
              >
                Resume Exam
              </button>
              <button
                onClick={() => {
                  Storage.saveActiveSession(session);
                  setShowExitModal(false);
                  onExitToMenu();
                }}
                className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition cursor-pointer"
              >
                Save & Exit to Menu
              </button>
            </div>
            <button
              onClick={() => {
                Storage.clearActiveSession();
                setShowExitModal(false);
                onExitToMenu();
              }}
              className="w-full py-2 text-slate-500 hover:text-red-600 font-semibold text-xs transition cursor-pointer text-center"
            >
              Discard this exam and exit to menu
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (isBreakActive) {
    const nextSectionType = session.sections[session.currentSectionIndex]?.section || 'VERBAL';
    return (
      <>
        <BreakScreen
          nextSection={nextSectionType}
          onEndBreak={handleEndBreak}
          onExitToMenu={() => setShowExitModal(true)}
        />
        {renderExitModal()}
      </>
    );
  }

  // If section is in review state and user is looking at review dashboard
  if (currentSection?.status === 'review' && currentSection.currentIndex >= currentSection.questions.length) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
        <ReviewScreen
          questions={currentSection.questions}
          responses={currentSection.responses}
          editsRemaining={currentSection.editsRemaining}
          timeRemainingSec={currentSection.timeRemainingSec}
          onSelectQuestion={handleSelectQuestionFromReview}
          onSubmitSection={handleEndSection}
          onExitToMenu={() => setShowExitModal(true)}
        />
        {renderExitModal()}
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="p-8 bg-white rounded-xl shadow text-center">
          <p className="text-slate-600 mb-4">Loading question data...</p>
        </div>
      </div>
    );
  }

  const isCurrentBookmarked = Boolean(currentSection.responses[currentQuestion.id]?.bookmarked);
  const isInReviewMode = currentSection.status === 'review';

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans select-none">
      {/* Official Exam Header */}
      <ExamHeader
        section={currentSection.section}
        questionNumber={currentSection.currentIndex + 1}
        totalQuestions={currentSection.questions.length}
        timeRemainingSec={currentSection.timeRemainingSec}
        isBookmarked={isCurrentBookmarked}
        onToggleBookmark={handleToggleBookmark}
        onToggleWhiteboard={() => setIsWhiteboardOpen(!isWhiteboardOpen)}
        onToggleCalculator={() => setIsCalculatorOpen(!isCalculatorOpen)}
        isWhiteboardOpen={isWhiteboardOpen}
        isCalculatorOpen={isCalculatorOpen}
        onTimeExpired={handleTimeExpired}
        onExitToMenu={() => setShowExitModal(true)}
      />

      {/* Main Testing Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 flex flex-col">
        {/* In Review Mode Banner */}
        {isInReviewMode && (
          <div className="mb-4 bg-amber-500/10 border border-amber-500/30 text-amber-900 px-4 py-2 rounded-lg flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center space-x-2">
              <AlertTriangle size={15} className="text-amber-600" />
              <span>Review Mode: You may review or edit answers ({currentSection.editsRemaining} edits remaining).</span>
            </div>
            <button
              onClick={() => handleSelectQuestionFromReview(currentSection.questions.length)}
              className="text-blue-700 underline hover:text-blue-900"
            >
              Return to Review Screen
            </button>
          </div>
        )}

        {/* Question Area */}
        <div className="flex-1">
          <QuestionRenderer
            question={currentQuestion}
            userAnswer={currentAnswer}
            onAnswerChange={setCurrentAnswer}
          />
        </div>

        {/* Unanswered Modal Warning */}
        {showUnansweredWarning && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-300 text-center space-y-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle size={26} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Answer Required</h3>
              <p className="text-sm text-slate-600">
                On the GMAT Focus Edition, you cannot skip questions without recording an answer.
                Please select an answer to proceed.
              </p>
              <button
                onClick={() => setShowUnansweredWarning(false)}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition"
              >
                Return to Question
              </button>
            </div>
          </div>
        )}

        {/* Edits Exhausted Warning Modal */}
        {editsExhaustedWarning && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-300 text-center space-y-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle size={26} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Review Edits Exhausted</h3>
              <p className="text-sm text-slate-600">
                You have already used all 3 allowed answer edits for this section. You may review your other questions, but cannot alter another answer.
              </p>
              <button
                onClick={() => setEditsExhaustedWarning(false)}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition"
              >
                Continue Review
              </button>
            </div>
          </div>
        )}

        {/* In-App Pause & Exit to Menu Confirmation Modal */}
        {renderExitModal()}

        {/* Bottom Exam Navigation Footer */}
        <footer className="mt-4 pt-4 border-t border-slate-300 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowExitModal(true)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition"
            >
              Exit to Menu
            </button>

            {isInReviewMode && (
              <button
                onClick={() => handleSelectQuestionFromReview(currentSection.questions.length)}
                className="px-4 py-2 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition"
              >
                Review Summary Table
              </button>
            )}
          </div>

          <button
            onClick={handleNext}
            className="px-8 py-2.5 bg-[#1b365d] hover:bg-blue-900 text-white font-bold rounded-lg shadow-md hover:shadow-lg flex items-center space-x-2 transition text-sm tracking-wide"
          >
            <span>{currentSection.currentIndex === currentSection.questions.length - 1 ? 'Review Section' : 'Next'}</span>
            <ArrowRight size={16} />
          </button>
        </footer>
      </main>

      {/* Floating Interactive Tools */}
      <Calculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
      <Whiteboard isOpen={isWhiteboardOpen} onClose={() => setIsWhiteboardOpen(false)} />
    </div>
  );
};
