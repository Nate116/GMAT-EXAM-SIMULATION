import React, { useState, useEffect } from 'react';
import { Coffee, Play, AlertCircle, LogOut } from 'lucide-react';
import { SectionType } from '../../types/gmat';

interface BreakScreenProps {
  nextSection: SectionType;
  onEndBreak: () => void;
  onExitToMenu?: () => void;
}

export const BreakScreen: React.FC<BreakScreenProps> = ({ nextSection, onEndBreak, onExitToMenu }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(600); // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onEndBreak();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onEndBreak]);

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  const getSectionTitle = (s: SectionType) => {
    switch (s) {
      case 'QUANT': return 'Quantitative Reasoning (21 Questions, 45 Minutes)';
      case 'VERBAL': return 'Verbal Reasoning (23 Questions, 45 Minutes)';
      case 'DATA_INSIGHTS': return 'Data Insights (20 Questions, 45 Minutes)';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mx-auto border border-blue-500/30">
          <Coffee size={32} />
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block mb-1">
            Optional Section Break
          </span>
          <h2 className="text-2xl font-black text-white">Time Remaining in Break</h2>
        </div>

        <div className="py-4">
          <div className="inline-block bg-slate-950 px-8 py-4 rounded-xl border border-slate-700 font-mono text-5xl font-black tracking-widest text-amber-400 shadow-inner">
            {formatted}
          </div>
          <p className="text-xs text-slate-400 mt-2">
            If this timer reaches 00:00, the next section will begin automatically.
          </p>
        </div>

        <div className="bg-slate-700/50 p-4 rounded-xl text-left border border-slate-600 text-sm space-y-2">
          <div className="font-semibold text-slate-200 flex items-center space-x-2">
            <AlertCircle size={16} className="text-blue-400" />
            <span>Up Next:</span>
          </div>
          <p className="text-blue-300 font-bold pl-6">
            {getSectionTitle(nextSection)}
          </p>
          <ul className="text-xs text-slate-300 list-disc list-inside space-y-1 pl-6 pt-1">
            <li>Ensure your scratchpad and workspace are ready.</li>
            <li>Once you resume, you cannot pause or rewind.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <button
            onClick={onEndBreak}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 font-bold text-white rounded-xl shadow-lg hover:shadow-blue-600/30 flex items-center justify-center space-x-2 transition text-base cursor-pointer"
          >
            <span>End Break & Begin Next Section</span>
            <Play size={18} />
          </button>

          {onExitToMenu && (
            <button
              onClick={onExitToMenu}
              className="w-full py-2.5 bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold rounded-xl border border-slate-600 flex items-center justify-center space-x-2 transition text-xs cursor-pointer"
            >
              <LogOut size={14} />
              <span>Save & Exit to Main Menu</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
