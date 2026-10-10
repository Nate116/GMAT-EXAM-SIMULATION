import React, { useState } from 'react';
import { ScoreReport, CalibrationState, PracticeTestRecord } from '../../types/gmat';
import { Storage } from '../../lib/storage';
import { MathText } from '../common/MathText';
import {
  Trophy,
  Sliders,
  Calendar,
  TrendingUp,
  ArrowRight,
  Eye,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  Play
} from 'lucide-react';

interface HistoryViewProps {
  onSelectReport: (report: ScoreReport) => void;
  onBackToDashboard: () => void;
  onStartNewExam: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  onSelectReport,
  onBackToDashboard,
  onStartNewExam,
}) => {
  const [history, setHistory] = useState<ScoreReport[]>(Storage.getHistory());
  const [calibrationState, setCalibrationState] = useState<CalibrationState>(Storage.getCalibrationState());
  const [thresholdInput, setThresholdInput] = useState<number>(calibrationState.threshold || 30);
  const [isRecalibrating, setIsRecalibrating] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  const practiceTests = Storage.getPracticeTests();
  const heldOutTests = practiceTests.filter(t => t.isHeldOutForValidation);

  const handleRecalibrate = () => {
    setIsRecalibrating(true);
    const updated = Storage.recalibrate(thresholdInput);
    setCalibrationState(updated);
    setTimeout(() => {
      setIsRecalibrating(false);
      setSavedMessage(true);
      setTimeout(() => setSavedMessage(false), 2500);
    }, 400);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Psychometric Progress & History
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Simulation History & Score Calibration
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Empirical 2PL calibration fitted against your 10 practice tests, holding out 2 tests to validate predictive accuracy.
          </p>
        </div>

        <button
          onClick={onBackToDashboard}
          className="px-4 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition"
        >
          Back to Dashboard
        </button>
      </div>

      {/* Calibration Engine Status Card */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-6 rounded-2xl shadow-md space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sliders size={16} />
            <span>Empirical 2PL IRT Calibration</span>
          </div>

          <div className="flex items-center space-x-2">
            {calibrationState.isCalibrated ? (
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold flex items-center space-x-1">
                <ShieldCheck size={14} />
                <span>Calibrated on {calibrationState.testsCount} tests (MAE ±{calibrationState.validationMae} pts)</span>
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold flex items-center space-x-1">
                <AlertTriangle size={14} />
                <span>Uncalibrated (MAE ±{calibrationState.validationMae} pts &gt; threshold)</span>
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
            <span className="text-blue-300 block font-semibold mb-1">Training Tests Count</span>
            <span className="text-2xl font-black text-white">{practiceTests.length - heldOutTests.length}</span>
            <span className="text-[11px] text-blue-200 block mt-1">Used to estimate initial priors</span>
          </div>

          <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
            <span className="text-blue-300 block font-semibold mb-1">Held-Out Validation Tests</span>
            <span className="text-2xl font-black text-white">{heldOutTests.length}</span>
            <span className="text-[11px] text-blue-200 block mt-1">Tests 9 & 10 withheld for cross-validation</span>
          </div>

          <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
            <span className="text-blue-300 block font-semibold mb-1">Validation MAE</span>
            <span className="text-2xl font-black text-amber-300">±{calibrationState.validationMae} pts</span>
            <span className="text-[11px] text-blue-200 block mt-1">Mean Absolute Prediction Error</span>
          </div>
        </div>

        {/* Re-calibration Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-white/10">
          <div className="flex items-center space-x-3 text-xs">
            <span className="text-slate-300">Calibration Acceptance Threshold:</span>
            <div className="flex items-center space-x-1">
              <span className="text-slate-400">±</span>
              <input
                type="number"
                value={thresholdInput}
                onChange={e => setThresholdInput(parseInt(e.target.value, 10))}
                className="w-16 bg-white/10 border border-white/20 rounded px-2 py-1 text-white font-bold text-center"
              />
              <span className="text-slate-300">points</span>
            </div>
          </div>

          <button
            onClick={handleRecalibrate}
            disabled={isRecalibrating}
            className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow flex items-center justify-center space-x-1.5 transition disabled:opacity-50"
          >
            <RotateCcw size={14} className={isRecalibrating ? 'animate-spin' : ''} />
            <span>{isRecalibrating ? 'Fitting Models...' : 'Re-Calibrate Mapping'}</span>
          </button>
        </div>

        {savedMessage && (
          <p className="text-xs text-emerald-300 font-bold animate-pulse">
            Calibration model updated and validated across test data!
          </p>
        )}
      </div>

      {/* Past Completed Simulations */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <TrendingUp size={18} className="text-blue-600" />
            <span>Completed Adaptive Simulations ({history.length})</span>
          </h3>
        </div>

        {history.length === 0 ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
              <Trophy size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-800">No simulations yet</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Take your first diagnostic adaptive exam to establish your score estimate and pinpoint areas for score growth.
              </p>
            </div>
            <button
              onClick={onStartNewExam}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition"
            >
              Launch First Diagnostic Simulation
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {history.map((item, idx) => (
              <div
                key={idx}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-black text-slate-900 tracking-tight">
                      {item.scoreRangeFormatted || `Estimated ${item.totalScore}`}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      {item.totalPercentile}th %ile
                    </span>
                    <span className="text-xs text-slate-400 flex items-center space-x-1">
                      <Calendar size={13} />
                      <span>{new Date(item.completedAt).toLocaleDateString()}</span>
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-xs font-semibold text-slate-600">
                    <span>Quant: <strong className="text-slate-900">{item.quantScore}</strong></span>
                    <span>&bull;</span>
                    <span>Verbal: <strong className="text-slate-900">{item.verbalScore}</strong></span>
                    <span>&bull;</span>
                    <span>Data Insights: <strong className="text-slate-900">{item.dataInsightsScore}</strong></span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => onSelectReport(item)}
                    className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition"
                  >
                    <Eye size={14} />
                    <span>View Diagnostics</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
