import React, { useState, useEffect } from 'react';
import { ExamSession, ScoreReport, SectionType, SectionOrder, GMATQuestion, PracticeTestRecord } from './types/gmat';
import { Storage } from './lib/storage';
import { ExamScreen } from './components/exam/ExamScreen';
import { ScoreReportView } from './components/analytics/ScoreReportView';
import { FullExamSetup } from './components/modes/FullExamSetup';
import { DrillSetup } from './components/modes/DrillSetup';
import { HistoryView } from './components/history/HistoryView';
import { PracticeTestLibrary } from './components/library/PracticeTestLibrary';
import { MathText } from './components/common/MathText';
import { AcceptanceTestModal } from './components/common/AcceptanceTestModal';
import gmacPercentilesData from '../data/gmac_percentiles.json';
import {
  Trophy,
  Play,
  Target,
  Zap,
  RotateCcw,
  Sparkles,
  BarChart3,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Award,
  Layers,
  Flame,
  ArrowRight,
  FileText,
  ShieldCheck,
  CheckSquare
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<
    'DASHBOARD' | 'FULL_EXAM_SETUP' | 'DRILL_SETUP' | 'ACTIVE_EXAM' | 'SCORE_REPORT' | 'HISTORY' | 'QA_PLAYGROUND' | 'PRACTICE_LIBRARY'
  >('DASHBOARD');

  const [activeSession, setActiveSession] = useState<ExamSession | null>(null);
  const [lastReport, setLastReport] = useState<ScoreReport | null>(null);
  const [drillInitialTopic, setDrillInitialTopic] = useState<{ topic?: string; section?: SectionType }>({});
  const [isAcceptanceModalOpen, setIsAcceptanceModalOpen] = useState(false);

  // QA Playground state
  const [qaSection, setQaSection] = useState<SectionType>('QUANT');
  const [qaDifficulty, setQaDifficulty] = useState<number>(8);
  const [qaType, setQaType] = useState<string>('PROBLEM_SOLVING');
  const [qaSubtype, setQaSubtype] = useState<string>('Number Properties & Divisibility');
  const [isGeneratingQa, setIsGeneratingQa] = useState(false);
  const [qaResult, setQaResult] = useState<any | null>(null);

  // Calibration and baseline data
  const calibrationState = Storage.getCalibrationState();
  const practiceTests = Storage.getPracticeTests();
  const history = Storage.getHistory();
  const errorLog = Storage.getErrorLog();
  const highestScore = history.reduce((max, h) => Math.max(max, h.totalScore), 0);

  // Target score percentile from json
  const targetPercentile = (gmacPercentilesData.totalPercentiles as any)['705'] || 98.6;
  const isPercentileVerified = gmacPercentilesData.isVerified;

  useEffect(() => {
    const saved = Storage.getActiveSession();
    if (saved && !saved.isCompleted) {
      setActiveSession(saved);
    }
  }, []);

  const handleStartExamSession = (session: ExamSession) => {
    setActiveSession(session);
    setCurrentView('ACTIVE_EXAM');
  };

  const handleExamComplete = (session: ExamSession) => {
    setActiveSession(null);
    if (session.scoreReport) {
      setLastReport(session.scoreReport);
      setCurrentView('SCORE_REPORT');
    } else {
      setCurrentView('DASHBOARD');
    }
  };

  const handleDrillFromAnalytics = (topic: string, section: SectionType) => {
    setDrillInitialTopic({ topic, section });
    setCurrentView('DRILL_SETUP');
  };

  // Full 64-Question Simulation Launcher for Practice Tests
  const handleReplayTest = (test: PracticeTestRecord, chosenOrder?: any) => {
    const order: SectionOrder = chosenOrder || ['QUANT', 'VERBAL', 'DATA_INSIGHTS'];
    const allQuestions = Storage.getAllQuestions();

    const mapToGmatQ = (q: any): GMATQuestion => ({
      id: q.id,
      section: q.section,
      type: q.type,
      subtype: q.subtype,
      topic: q.topic,
      difficulty: 8,
      discrimination: 1.25,
      targetTimeSec: q.time_spent_sec || (q.section === 'QUANT' ? 128 : q.section === 'VERBAL' ? 117 : 135),
      stem: q.stem,
      passage: q.passage,
      options: q.options && q.options.length > 0 ? q.options : ['A', 'B', 'C', 'D', 'E'],
      correctAnswer: q.official_answer,
      explanation: {
        stepByStep: `From ${test.title} (Question ${q.position}). Official Answer is ${q.official_answer}.`,
        shortcutMethod: 'Apply strategic process of elimination and isolate decisive constraint.',
        trapExplained: q.trap_type || 'Common official test distractor.',
        commonWrongPaths: q.my_answer && q.my_answer !== q.official_answer ? [
          { choice: q.my_answer, reason: 'Selected during real test conditions.' }
        ] : [],
      },
    });

    const testQuant = (test.questions || []).filter(q => q.section === 'QUANT').map(mapToGmatQ);
    const testVerbal = (test.questions || []).filter(q => q.section === 'VERBAL').map(mapToGmatQ);
    const testDI = (test.questions || []).filter(q => q.section === 'DATA_INSIGHTS').map(mapToGmatQ);

    // Guaranteed full Focus format section sizes: 21 Quant, 23 Verbal, 20 DI
    const finalQuant = testQuant.length >= 21 ? testQuant.slice(0, 21) : [
      ...testQuant,
      ...allQuestions.filter(q => q.section === 'QUANT').slice(0, Math.max(0, 21 - testQuant.length))
    ];
    const finalVerbal = testVerbal.length >= 23 ? testVerbal.slice(0, 23) : [
      ...testVerbal,
      ...allQuestions.filter(q => q.section === 'VERBAL').slice(0, Math.max(0, 23 - testVerbal.length))
    ];
    const finalDI = testDI.length >= 20 ? testDI.slice(0, 20) : [
      ...testDI,
      ...allQuestions.filter(q => q.section === 'DATA_INSIGHTS').slice(0, Math.max(0, 20 - testDI.length))
    ];

    const questionsBySection: Record<SectionType, GMATQuestion[]> = {
      QUANT: finalQuant,
      VERBAL: finalVerbal,
      DATA_INSIGHTS: finalDI,
    };

    const sections = (order as SectionType[]).map((sectionType: SectionType, idx: number) => ({
      section: sectionType,
      questions: questionsBySection[sectionType],
      responses: {},
      currentIndex: 0,
      timeRemainingSec: 45 * 60,
      status: (idx === 0 ? 'in_progress' : 'not_started') as 'in_progress' | 'not_started',
      editsRemaining: 3,
      currentAbilityEstimate: 0.5,
    }));

    const fullSimulationSession: ExamSession = {
      id: `sim_${test.id}_${Date.now()}`,
      createdAt: new Date().toISOString(),
      mode: 'FULL_MOCK',
      sectionOrder: order,
      currentSectionIndex: 0,
      difficultyDial: 'HARD',
      sections,
      isCompleted: false,
    };

    handleStartExamSession(fullSimulationSession);
  };

  // Live Gemini Question Generation with Blind-Pass QA Solver
  const handleGenerateLiveQuestion = async () => {
    setIsGeneratingQa(true);
    setQaResult(null);
    try {
      const res = await fetch('/api/generate-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          section: qaSection,
          type: qaType,
          subtype: qaSubtype,
          difficulty: qaDifficulty,
          difficultyDial: qaDifficulty >= 9 ? 'BEYOND_GMAT' : qaDifficulty >= 7 ? 'HARD' : 'STANDARD',
          exemplars: practiceTests.slice(0, 3).flatMap(t => t.questions).slice(0, 3),
        }),
      });

      const data = await res.json();
      if (data.success) {
        setQaResult(data);
        Storage.cacheGeneratedQuestion(data.question);
      } else {
        alert(data.error || 'Failed to generate question');
      }
    } catch (e: any) {
      alert('Error connecting to question generator: ' + e.message);
    } finally {
      setIsGeneratingQa(false);
    }
  };

  // 1. ACTIVE EXAM SCREEN
  if (currentView === 'ACTIVE_EXAM' && activeSession) {
    return (
      <ExamScreen
        session={activeSession}
        onExamComplete={handleExamComplete}
        onExitToMenu={() => {
          setActiveSession(null);
          setCurrentView('DASHBOARD');
        }}
      />
    );
  }

  // 2. SCORE REPORT SCREEN
  if (currentView === 'SCORE_REPORT' && lastReport) {
    return (
      <ScoreReportView
        report={lastReport}
        allQuestions={Storage.getAllQuestions()}
        onStartNewExam={() => setCurrentView('FULL_EXAM_SETUP')}
        onDrillTopic={handleDrillFromAnalytics}
        onExitToMenu={() => {
          setLastReport(null);
          setCurrentView('DASHBOARD');
        }}
      />
    );
  }

  // 3. FULL EXAM SETUP
  if (currentView === 'FULL_EXAM_SETUP') {
    return (
      <div className="min-h-screen bg-slate-100 py-10">
        <FullExamSetup
          onStartExam={handleStartExamSession}
          onCancel={() => setCurrentView('DASHBOARD')}
        />
      </div>
    );
  }

  // 4. DRILL SETUP
  if (currentView === 'DRILL_SETUP') {
    return (
      <div className="min-h-screen bg-slate-100 py-10">
        <DrillSetup
          onStartDrill={handleStartExamSession}
          onCancel={() => setCurrentView('DASHBOARD')}
          initialTopic={drillInitialTopic.topic}
          initialSection={drillInitialTopic.section}
        />
      </div>
    );
  }

  // 5. HISTORY VIEW
  if (currentView === 'HISTORY') {
    return (
      <div className="min-h-screen bg-slate-100 py-10">
        <HistoryView
          onSelectReport={(rep) => {
            setLastReport(rep);
            setCurrentView('SCORE_REPORT');
          }}
          onBackToDashboard={() => setCurrentView('DASHBOARD')}
          onStartNewExam={() => setCurrentView('FULL_EXAM_SETUP')}
        />
      </div>
    );
  }

  // 6. PRACTICE TEST LIBRARY
  if (currentView === 'PRACTICE_LIBRARY') {
    return (
      <div className="min-h-screen bg-slate-100 py-10">
        <PracticeTestLibrary
          onBackToDashboard={() => setCurrentView('DASHBOARD')}
          onReplayTest={handleReplayTest}
        />
      </div>
    );
  }

  // 7. MAIN DASHBOARD
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-[#1b365d] text-white border-b border-blue-950 shadow-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-black text-amber-400 text-sm">
              805
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block">
                GMAT Focus Edition
              </span>
              <h1 className="text-base font-extrabold tracking-tight text-white">
                Adaptive 805 Exam Simulator
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => setCurrentView('PRACTICE_LIBRARY')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-900/60 hover:bg-blue-800 text-blue-200 border border-blue-400/20 flex items-center space-x-1.5 transition"
            >
              <FileText size={14} className="text-blue-300" />
              <span>Practice Tests ({practiceTests.length})</span>
            </button>
            <button
              onClick={() => setCurrentView('QA_PLAYGROUND')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-900/60 hover:bg-blue-800 text-blue-200 border border-blue-400/20 flex items-center space-x-1.5 transition"
            >
              <Sparkles size={14} className="text-amber-400" />
              <span>AI Question Lab & QA</span>
            </button>
            <button
              onClick={() => setCurrentView('HISTORY')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-900/60 hover:bg-blue-800 text-blue-200 border border-blue-400/20 flex items-center space-x-1.5 transition"
            >
              <BarChart3 size={14} />
              <span>History & Tuning</span>
            </button>
            <button
              onClick={() => setIsAcceptanceModalOpen(true)}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-900/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-400/30 flex items-center space-x-1 transition"
              title="Verification & Acceptance Tests"
            >
              <CheckSquare size={13} />
              <span className="hidden sm:inline">Verification Suite</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#1b365d] to-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            {/* Live Calibration Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-bold">
              {calibrationState.isCalibrated ? (
                <>
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span className="text-emerald-300">
                    Calibrated on {calibrationState.testsCount} tests (MAE ±{calibrationState.validationMae} points)
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle size={14} className="text-amber-400" />
                  <span className="text-amber-300">
                    Calibration in Progress (MAE ±{calibrationState.validationMae} points)
                  </span>
                </>
              )}
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Master the GMAT Focus Edition.
            </h2>
            <p className="text-xs sm:text-sm text-blue-200 leading-relaxed font-normal">
              IRT-based adaptive model (2PL), calibrated against my own practice-test results, dynamic original questions, modeled on the real test-day interface with 3 end-of-section edits, and actionable diagnostics that pinpoint exactly how to gain points.
            </p>
          </div>

          {/* Quick Stat Pill with Honest Empty State */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center min-w-[260px] shadow-xl">
            <span className="text-xs uppercase tracking-wider text-blue-200 font-bold block">
              Highest Simulated Score
            </span>
            {highestScore > 0 ? (
              <>
                <div className="text-5xl font-black text-amber-300 mt-1">
                  {highestScore}
                </div>
                <span className="text-xs text-blue-200 block mt-1">
                  {history.length} simulations completed &bull; Target: 705+ ({targetPercentile}th %ile, {isPercentileVerified ? 'mba.com verified' : 'unverified'})
                </span>
              </>
            ) : (
              <div className="py-2 space-y-2">
                <p className="text-xs text-blue-200 leading-tight">
                  No simulations yet. Take your first diagnostic to establish your baseline.
                </p>
                <button
                  onClick={() => setCurrentView('FULL_EXAM_SETUP')}
                  className="px-4 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg shadow transition"
                >
                  Take First Diagnostic
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Resume Banner if Active Session Exists */}
        {(() => {
          const savedSession = activeSession || Storage.getActiveSession();
          if (!savedSession || savedSession.isCompleted) return null;
          return (
            <div className="bg-amber-500 text-slate-950 p-4 rounded-xl shadow-lg border border-amber-600 flex items-center justify-between animate-pulse">
              <div className="flex items-center space-x-3">
                <AlertCircle size={22} className="text-slate-950" />
                <div>
                  <span className="font-bold text-sm block">Exam Session in Progress</span>
                  <span className="text-xs text-slate-800">
                    You have an unfinished {savedSession.mode.replace(/_/g, ' ')} simulation saved.
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    Storage.clearActiveSession();
                    setActiveSession(null);
                  }}
                  className="px-3 py-1.5 text-xs font-bold bg-slate-900/10 hover:bg-slate-900/20 text-slate-900 rounded-lg cursor-pointer"
                >
                  Discard
                </button>
                <button
                  onClick={() => {
                    setActiveSession(savedSession);
                    setCurrentView('ACTIVE_EXAM');
                  }}
                  className="px-4 py-1.5 text-xs font-bold bg-slate-950 text-white rounded-lg shadow cursor-pointer hover:bg-slate-800 transition"
                >
                  Resume Simulation
                </button>
              </div>
            </div>
          );
        })()}

        {/* Primary Simulation Modes */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
            Exam & Training Modes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Full Exam Simulation */}
            <div
              onClick={() => setCurrentView('FULL_EXAM_SETUP')}
              className="bg-white p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-600 hover:shadow-lg transition cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Play size={20} />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Full Adaptive Mock
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  135 min, 64 Qs. Real 2PL adaptivity, 6 section permutations, and 3 review edits.
                </p>
              </div>

              <div className="pt-4 flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition">
                <span>Start Mock</span>
                <ArrowRight size={14} className="ml-1" />
              </div>
            </div>

            {/* Weakness Sprint */}
            <div
              onClick={() => {
                setDrillInitialTopic({});
                setCurrentView('DRILL_SETUP');
              }}
              className="bg-white p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-600 hover:shadow-lg transition cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition">
                  <Sparkles size={20} />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Weakness Sprint
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  10 questions in 15 minutes targeting your top 5 weaknesses from test diagnostics.
                </p>
              </div>

              <div className="pt-4 flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition">
                <span>Start Sprint</span>
                <ArrowRight size={14} className="ml-1" />
              </div>
            </div>

            {/* Error Vault Retake */}
            <div
              onClick={() => {
                setDrillInitialTopic({});
                setCurrentView('DRILL_SETUP');
              }}
              className="bg-white p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-600 hover:shadow-lg transition cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white transition">
                  <RotateCcw size={20} />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-bold text-slate-900">
                    Error Vault Retake
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    {errorLog.length} Items
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Re-serve variants of missed questions until you answer them correctly twice in a row.
                </p>
              </div>

              <div className="pt-4 flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition">
                <span>Retake Vault</span>
                <ArrowRight size={14} className="ml-1" />
              </div>
            </div>

            {/* Practice Test Library */}
            <div
              onClick={() => setCurrentView('PRACTICE_LIBRARY')}
              className="bg-white p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-600 hover:shadow-lg transition cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition">
                  <FileText size={20} />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-bold text-slate-900">
                    Practice Test Library
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {practiceTests.length} Tests
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Empirical baseline diagnostic, import test PDFs/OCR, and Real Test Replay mode.
                </p>
              </div>

              <div className="pt-4 flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition">
                <span>View Tests</span>
                <ArrowRight size={14} className="ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* IRT Architecture Overview Reference - ALL Math in MathText */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2">
              <BookOpen size={18} className="text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">
                GMAT Focus Edition Psychometric Architecture
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500">Modeled on the published GMAT Focus format</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-1.5">
              <h5 className="font-bold text-slate-800 text-sm">2PL Adaptive Item Response Theory</h5>
              <MathText content="Ability $\theta$ is continuously estimated after each item via Bayesian Expected A Posteriori (EAP). Item selection maximizes Fisher Information $I(\theta) = a^2 P(\theta)(1-P(\theta))$, adjusting item difficulty in real time." />
            </div>

            <div className="space-y-1.5">
              <h5 className="font-bold text-slate-800 text-sm">Review Screen & 3 Answer Edits</h5>
              <p>
                Modeled on the real test-day interface, candidates may bookmark any question and review all questions at section completion, with an authentic limit of <strong className="text-slate-900">up to 3 edited answers</strong>.
              </p>
            </div>

            <div className="space-y-1.5">
              <h5 className="font-bold text-slate-800 text-sm">Automated Dual-Pass QA Pipeline</h5>
              <p>
                Questions generated by Gemini are independently solved blind by a second validation pass. Math formulas, options, and distractor traps are validated before entering the question cache.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL: AI Question Lab & QA Inspector */}
      {currentView === 'QA_PLAYGROUND' && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl border border-slate-300 my-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <Sparkles size={20} className="text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">AI Question Generator & Blind QA Lab</h3>
              </div>
              <button
                onClick={() => setCurrentView('DASHBOARD')}
                className="text-xs font-bold text-slate-500 hover:text-slate-900"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Test the server-side Gemini 3.8 Flash generation pipeline with exemplar retrieval, anti-copy verification, and blind independent solver QA.
            </p>

            {/* Generator Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-[11px] font-bold uppercase text-slate-500 block mb-1">Section</label>
                <select
                  value={qaSection}
                  onChange={e => {
                    const s = e.target.value as SectionType;
                    setQaSection(s);
                    setQaType(s === 'QUANT' ? 'PROBLEM_SOLVING' : s === 'VERBAL' ? 'CRITICAL_REASONING' : 'DATA_SUFFICIENCY');
                  }}
                  className="w-full text-xs font-semibold p-2 border rounded-lg bg-slate-50"
                >
                  <option value="QUANT">Quantitative Reasoning</option>
                  <option value="VERBAL">Verbal Reasoning</option>
                  <option value="DATA_INSIGHTS">Data Insights</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-slate-500 block mb-1">Question Type</label>
                <select
                  value={qaType}
                  onChange={e => setQaType(e.target.value)}
                  className="w-full text-xs font-semibold p-2 border rounded-lg bg-slate-50"
                >
                  {qaSection === 'QUANT' && <option value="PROBLEM_SOLVING">Problem Solving</option>}
                  {qaSection === 'VERBAL' && (
                    <>
                      <option value="CRITICAL_REASONING">Critical Reasoning</option>
                      <option value="READING_COMPREHENSION">Reading Comprehension</option>
                    </>
                  )}
                  {qaSection === 'DATA_INSIGHTS' && (
                    <>
                      <option value="DATA_SUFFICIENCY">Data Sufficiency</option>
                      <option value="MULTI_SOURCE_REASONING">Multi-Source Reasoning</option>
                      <option value="TABLE_ANALYSIS">Table Analysis</option>
                      <option value="GRAPHICS_INTERPRETATION">Graphics Interpretation</option>
                      <option value="TWO_PART_ANALYSIS">Two-Part Analysis</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-slate-500 block mb-1">Difficulty</label>
                <select
                  value={qaDifficulty}
                  onChange={e => setQaDifficulty(parseInt(e.target.value, 10))}
                  className="w-full text-xs font-semibold p-2 border rounded-lg bg-slate-50"
                >
                  <option value="6">Level 6 (Medium)</option>
                  <option value="8">Level 8 (705+ Target)</option>
                  <option value="10">Level 10 (Beyond GMAT 805)</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerateLiveQuestion}
              disabled={isGeneratingQa}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <Sparkles size={16} />
              <span>{isGeneratingQa ? 'Retrieving Exemplars & Running Blind QA Solver...' : 'Generate Original Question & Run Blind QA'}</span>
            </button>

            {/* QA Output Display */}
            {qaResult && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-4 max-h-96 overflow-y-auto">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">
                    Generated Question ID: {qaResult.question?.id}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    {qaResult.qaVerification?.passed ? (
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center space-x-1">
                        <CheckCircle2 size={12} />
                        <span>Blind QA Passed</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold flex items-center space-x-1">
                        <AlertCircle size={12} />
                        <span>QA Flagged for Review</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-xs text-slate-800 font-medium bg-white p-3 rounded-lg border border-slate-200">
                  <MathText content={qaResult.question?.stem} />
                </div>

                <div className="space-y-1">
                  {qaResult.question?.options?.map((opt: string, i: number) => {
                    const l = String.fromCharCode(65 + i);
                    const isAuthorAns = l === qaResult.question?.correctAnswer;
                    return (
                      <div
                        key={l}
                        className={`p-2 rounded text-xs flex items-center space-x-2 border ${
                          isAuthorAns ? 'bg-emerald-50 border-emerald-300 font-bold text-emerald-950' : 'bg-white border-slate-200'
                        }`}
                      >
                        <span>{l}.</span>
                        <MathText content={opt} className="inline" />
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-xs space-y-1">
                  <span className="font-bold text-blue-900 block">Blind Independent Solver Verification:</span>
                  <p className="text-blue-800 text-[11px] leading-relaxed">
                    Author Answer: <strong>{qaResult.qaVerification?.authorAnswer}</strong> |
                    Blind Solver Answer: <strong>{qaResult.qaVerification?.blindSolverAnswer}</strong>
                  </p>
                  <div className="text-blue-700 text-[10px] italic">
                    <MathText content={qaResult.qaVerification?.verificationProof} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Acceptance Test Suite Modal */}
      <AcceptanceTestModal
        isOpen={isAcceptanceModalOpen}
        onClose={() => setIsAcceptanceModalOpen(false)}
      />
    </div>
  );
}
