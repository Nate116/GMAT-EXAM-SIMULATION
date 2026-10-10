import React, { useState, useEffect } from 'react';
import { Bookmark, Calculator as CalcIcon, PenTool, HelpCircle, Eye, EyeOff, AlertTriangle, LogOut } from 'lucide-react';
import { SectionType } from '../../types/gmat';

interface ExamHeaderProps {
  section: SectionType;
  questionNumber: number;
  totalQuestions: number;
  timeRemainingSec: number;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onToggleWhiteboard: () => void;
  onToggleCalculator: () => void;
  isWhiteboardOpen: boolean;
  isCalculatorOpen: boolean;
  onTimeExpired: () => void;
  onExitToMenu?: () => void;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  section,
  questionNumber,
  totalQuestions,
  timeRemainingSec,
  isBookmarked,
  onToggleBookmark,
  onToggleWhiteboard,
  onToggleCalculator,
  isWhiteboardOpen,
  isCalculatorOpen,
  onTimeExpired,
  onExitToMenu,
}) => {
  const [showTimer, setShowTimer] = useState(true);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  // Time warnings: 10 min (600s), 5 min (300s), 1 min (60s)
  useEffect(() => {
    if (timeRemainingSec === 600) {
      setWarningMessage('10 minutes remaining in this section.');
    } else if (timeRemainingSec === 300) {
      setWarningMessage('5 minutes remaining in this section.');
    } else if (timeRemainingSec === 60) {
      setWarningMessage('1 minute remaining! Finalize your answers.');
    } else if (timeRemainingSec <= 0) {
      onTimeExpired();
    }
  }, [timeRemainingSec, onTimeExpired]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(Math.max(0, seconds) / 60);
    const secs = Math.max(0, seconds) % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getSectionTitle = (s: SectionType) => {
    switch (s) {
      case 'QUANT': return 'Quantitative Reasoning';
      case 'VERBAL': return 'Verbal Reasoning';
      case 'DATA_INSIGHTS': return 'Data Insights';
    }
  };

  return (
    <>
      {/* Warning Toast */}
      {warningMessage && (
        <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-lg shadow-xl border border-amber-600 flex items-center space-x-2 animate-bounce">
          <AlertTriangle size={18} />
          <span>{warningMessage}</span>
          <button
            onClick={() => setWarningMessage(null)}
            className="ml-3 text-xs bg-slate-900 text-white px-2 py-0.5 rounded"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Official Exam Navigation Top Bar */}
      <header className="bg-[#1b365d] text-white border-b-2 border-[#002040] shadow-md select-none sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Left: Section & Question Counter */}
          <div className="flex items-center space-x-6">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold">
                GMAT Focus Edition
              </span>
              <span className="text-sm font-bold text-white tracking-wide">
                {getSectionTitle(section)}
              </span>
            </div>

            <div className="h-6 w-px bg-blue-400/30"></div>

            <div className="text-sm font-semibold tracking-wide bg-blue-900/60 px-3 py-1 rounded border border-blue-400/30">
              Question {questionNumber} of {totalQuestions}
            </div>
          </div>

          {/* Center: Tools (Whiteboard, Calculator in DI) */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onToggleWhiteboard}
              className={`px-3 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition ${
                isWhiteboardOpen
                  ? 'bg-amber-400 text-slate-900 shadow'
                  : 'bg-blue-900/60 hover:bg-blue-800 text-blue-100 border border-blue-400/20'
              }`}
            >
              <PenTool size={13} />
              <span>Whiteboard</span>
            </button>

            {section === 'DATA_INSIGHTS' && (
              <button
                onClick={onToggleCalculator}
                className={`px-3 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition ${
                  isCalculatorOpen
                    ? 'bg-blue-400 text-slate-900 shadow'
                    : 'bg-blue-900/60 hover:bg-blue-800 text-blue-100 border border-blue-400/20'
                }`}
              >
                <CalcIcon size={13} />
                <span>Calculator</span>
              </button>
            )}
          </div>

          {/* Right: Bookmark Flag & Section Timer */}
          <div className="flex items-center space-x-4">
            {/* Bookmark */}
            <button
              onClick={onToggleBookmark}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded text-xs font-semibold transition border ${
                isBookmarked
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                  : 'bg-transparent border-transparent hover:bg-blue-900/40 text-blue-200'
              }`}
            >
              <Bookmark size={14} className={isBookmarked ? 'fill-amber-400 text-amber-400' : 'text-blue-300'} />
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark for Review'}</span>
            </button>

            <div className="h-6 w-px bg-blue-400/30"></div>

            {/* Timer */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowTimer(!showTimer)}
                title={showTimer ? 'Hide Timer' : 'Show Timer'}
                className="text-blue-300 hover:text-white p-1 rounded hover:bg-blue-900/50 transition text-xs flex items-center space-x-1"
              >
                {showTimer ? <EyeOff size={14} /> : <Eye size={14} />}
                <span className="text-[11px]">{showTimer ? 'Hide' : 'Show'}</span>
              </button>

              <div
                className={`px-3 py-1 rounded font-mono font-bold text-sm tracking-widest border transition ${
                  timeRemainingSec <= 300
                    ? 'bg-red-600/90 text-white border-red-400 animate-pulse'
                    : 'bg-blue-950/80 text-blue-100 border-blue-400/40'
                }`}
              >
                {showTimer ? formatTime(timeRemainingSec) : '--:--'}
              </div>
            </div>

            {/* Exit to Menu Button */}
            {onExitToMenu && (
              <>
                <div className="h-6 w-px bg-blue-400/30"></div>
                <button
                  onClick={onExitToMenu}
                  className="px-2.5 py-1 text-xs font-semibold text-blue-200 hover:text-white bg-blue-900/60 hover:bg-slate-800 border border-blue-400/30 rounded flex items-center space-x-1.5 transition cursor-pointer"
                  title="Pause and return to main menu"
                >
                  <LogOut size={13} className="text-amber-300" />
                  <span>Exit to Menu</span>
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
