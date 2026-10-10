import React, { useState } from 'react';
import { ScoreReport, GMATQuestion, SectionType, ErrorClassification } from '../../types/gmat';
import { MathText } from '../common/MathText';
import {
  Trophy,
  Clock,
  Target,
  AlertTriangle,
  Flame,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Calendar,
  Sparkles,
  Download,
  ArrowRight,
  TrendingUp,
  Brain,
  Lightbulb,
  ShieldCheck,
  RotateCcw,
  Home
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ScoreReportViewProps {
  report: ScoreReport;
  allQuestions: GMATQuestion[];
  onStartNewExam: () => void;
  onDrillTopic: (topic: string, section: SectionType) => void;
  onRequestSimilarQuestion?: (question: GMATQuestion) => void;
  onExitToMenu?: () => void;
}

export const ScoreReportView: React.FC<ScoreReportViewProps> = ({
  report,
  allQuestions,
  onStartNewExam,
  onDrillTopic,
  onRequestSimilarQuestion,
  onExitToMenu,
}) => {
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'PACING' | 'POINTS_PLAN' | 'QUESTIONS_AUDIT'>('OVERVIEW');
  const [selectedSection, setSelectedSection] = useState<SectionType>('QUANT');
  const [auditFilter, setAuditFilter] = useState<'ALL' | 'INCORRECT' | 'TIME_SINKS'>('ALL');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);
  const [aiStudyPlan, setAiStudyPlan] = useState<any | null>(null);
  const [isLoadingAiPlan, setIsLoadingAiPlan] = useState(false);
  const [similarQuestionStatus, setSimilarQuestionStatus] = useState<Record<string, string>>({});

  // Confetti trigger if score >= 705
  React.useEffect(() => {
    if (report.totalScore >= 705) {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [report.totalScore]);

  const handleGenerateAiPlan = async () => {
    setIsLoadingAiPlan(true);
    try {
      const response = await fetch('/api/generate-study-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          totalScore: report.totalScore,
          sectionScores: {
            QUANT: report.quantScore,
            VERBAL: report.verbalScore,
            DATA_INSIGHTS: report.dataInsightsScore,
          },
          weakTopics: report.pointsPlan.map(p => ({ topic: p.topic, accuracy: p.currentAccuracy })),
        }),
      });

      const data = await response.json();
      if (data.success) {
        setAiStudyPlan(data.plan);
      }
    } catch (e) {
      console.error('Failed to generate AI study plan', e);
    } finally {
      setIsLoadingAiPlan(false);
    }
  };

  const handleRequestSimilar = (q: GMATQuestion) => {
    setSimilarQuestionStatus(prev => ({ ...prev, [q.id]: 'Generated similar variant added to practice bank!' }));
    if (onRequestSimilarQuestion) {
      onRequestSimilarQuestion(q);
    }
    setTimeout(() => {
      setSimilarQuestionStatus(prev => {
        const copy = { ...prev };
        delete copy[q.id];
        return copy;
      });
    }, 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16 font-sans">
      {/* Top Hero Banner */}
      <div className="bg-[#1b365d] text-white border-b border-blue-950 py-10 px-4 sm:px-6 shadow-md print:bg-white print:text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-blue-300 text-xs uppercase tracking-widest font-bold mb-2">
              <Trophy size={16} className="text-amber-400" />
              <span>GMAT Focus Edition Diagnostic Score Report</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Simulation Diagnostic Report
            </h1>
            <p className="text-xs sm:text-sm text-blue-200 mt-1">
              Completed on {new Date(report.completedAt).toLocaleDateString()} &bull;{' '}
              {report.isCalibrated
                ? `Calibrated (MAE ±${report.calibrationMae} pts)`
                : 'Prior-based 2PL estimate'}
            </p>
          </div>

          <div className="flex items-center space-x-3 print:hidden">
            {onExitToMenu && (
              <button
                onClick={onExitToMenu}
                className="px-4 py-2.5 bg-blue-900/90 hover:bg-slate-800 text-white rounded-lg text-xs font-bold border border-blue-400/40 flex items-center space-x-1.5 transition cursor-pointer shadow-sm"
              >
                <Home size={15} className="text-amber-300" />
                <span>Exit to Main Menu</span>
              </button>
            )}
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 bg-blue-900/80 hover:bg-blue-800 text-white rounded-lg text-xs font-bold border border-blue-400/30 flex items-center space-x-2 transition cursor-pointer"
            >
              <Download size={15} />
              <span>Export PDF Report</span>
            </button>
            <button
              onClick={onStartNewExam}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs shadow-lg transition cursor-pointer"
            >
              New Simulation
            </button>
          </div>
        </div>

        {/* Big Score Cards Grid with Honest Interval Ranges */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {/* Total Score with Range */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-white shadow-lg">
            <span className="text-xs uppercase tracking-wider text-blue-200 font-bold block mb-1">
              Estimated Total Score
            </span>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl sm:text-4xl font-black text-amber-300 tracking-tight">
                {report.totalScore}
              </span>
              <span className="text-xs text-blue-200 font-semibold">/ 805</span>
            </div>
            <div className="text-[11px] text-amber-200 font-bold mt-1">
              Likely range: {report.scoreRangeLow}–{report.scoreRangeHigh}
            </div>
            <div className="mt-2 text-xs font-semibold inline-block px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
              {report.totalPercentile}th Percentile {report.isPercentileVerified ? '(mba.com verified)' : ''}
            </div>
          </div>

          {/* Quantitative */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-white shadow-lg">
            <span className="text-xs uppercase tracking-wider text-blue-200 font-bold block mb-1">
              Quantitative
            </span>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                {report.quantScore}
              </span>
              <span className="text-xs text-blue-200">/ 90</span>
            </div>
            <div className="text-[11px] text-blue-200 mt-1">
              Range: {report.sectionAnalytics.QUANT?.scoreRangeLow || report.quantScore - 2}–{report.sectionAnalytics.QUANT?.scoreRangeHigh || report.quantScore + 2}
            </div>
            <div className="mt-2 text-xs font-semibold inline-block px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-200">
              {report.quantPercentile}th %ile
            </div>
          </div>

          {/* Verbal */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-white shadow-lg">
            <span className="text-xs uppercase tracking-wider text-blue-200 font-bold block mb-1">
              Verbal
            </span>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                {report.verbalScore}
              </span>
              <span className="text-xs text-blue-200">/ 90</span>
            </div>
            <div className="text-[11px] text-blue-200 mt-1">
              Range: {report.sectionAnalytics.VERBAL?.scoreRangeLow || report.verbalScore - 2}–{report.sectionAnalytics.VERBAL?.scoreRangeHigh || report.verbalScore + 2}
            </div>
            <div className="mt-2 text-xs font-semibold inline-block px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-200">
              {report.verbalPercentile}th %ile
            </div>
          </div>

          {/* Data Insights */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-white shadow-lg">
            <span className="text-xs uppercase tracking-wider text-blue-200 font-bold block mb-1">
              Data Insights
            </span>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                {report.dataInsightsScore}
              </span>
              <span className="text-xs text-blue-200">/ 90</span>
            </div>
            <div className="text-[11px] text-blue-200 mt-1">
              Range: {report.sectionAnalytics.DATA_INSIGHTS?.scoreRangeLow || report.dataInsightsScore - 2}–{report.sectionAnalytics.DATA_INSIGHTS?.scoreRangeHigh || report.dataInsightsScore + 2}
            </div>
            <div className="mt-2 text-xs font-semibold inline-block px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-200">
              {report.dataInsightsPercentile}th %ile
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-4 mt-6 print:hidden">
        <div className="flex space-x-2 border-b border-slate-200">
          {[
            { id: 'OVERVIEW', label: 'Section Diagnostics', icon: Target },
            { id: 'PACING', label: 'Pacing & Time Sinks', icon: Clock },
            { id: 'POINTS_PLAN', label: '705+ Points Plan', icon: Sparkles },
            { id: 'QUESTIONS_AUDIT', label: 'Question-by-Question Audit', icon: Brain },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 border-b-2 transition ${
                  isActive
                    ? 'border-blue-600 text-blue-700 bg-white rounded-t-lg'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        {/* TAB 1: SECTION DIAGNOSTICS */}
        {activeTab === 'OVERVIEW' && (
          <div className="space-y-6">
            <div className="flex space-x-2">
              {(['QUANT', 'VERBAL', 'DATA_INSIGHTS'] as SectionType[]).map(s => (
                <button
                  key={s}
                  onClick={() => setSelectedSection(s)}
                  className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition ${
                    selectedSection === s
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {s === 'QUANT' ? 'Quantitative' : s === 'VERBAL' ? 'Verbal' : 'Data Insights'}
                </button>
              ))}
            </div>

            {report.sectionAnalytics[selectedSection] && (() => {
              const sec = report.sectionAnalytics[selectedSection]!;
              return (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Raw Accuracy</span>
                      <span className="text-3xl font-black text-slate-900 mt-1 block">
                        {sec.correctCount} / {sec.totalQuestions}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">({sec.accuracy}%)</span>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Avg Pace per Question</span>
                      <span className="text-3xl font-black text-slate-900 mt-1 block">
                        {Math.floor(sec.avgTimePerQuestion / 60)}:{(sec.avgTimePerQuestion % 60).toString().padStart(2, '0')}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        Target: {Math.floor(sec.targetTime / 60)}:{(sec.targetTime % 60).toString().padStart(2, '0')}
                      </span>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Time Sinks Flagged</span>
                      <span className={`text-3xl font-black mt-1 block ${sec.timeSinksCount > 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                        {sec.timeSinksCount}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">Questions &gt; target + 60s</span>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Fatigue Accuracy Drop</span>
                      <span className={`text-3xl font-black mt-1 block ${sec.fatigueDrop > 15 ? 'text-amber-600' : 'text-slate-900'}`}>
                        {sec.fatigueDrop}%
                      </span>
                      <span className="text-xs text-slate-500 font-medium">Drop in final third of section</span>
                    </div>
                  </div>

                  {/* Subtopics */}
                  <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6">
                    <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center space-x-2">
                      <TrendingUp size={18} className="text-blue-600" />
                      <span>Subtopic Mastery Breakdown</span>
                    </h3>
                    <div className="divide-y divide-slate-100">
                      {sec.topicAccuracy.map((t, idx) => (
                        <div key={idx} className="py-3 flex items-center justify-between">
                          <div className="flex-1 pr-4">
                            <span className="text-sm font-semibold text-slate-800 block">{t.topic}</span>
                            <span className="text-xs text-slate-500">
                              {t.correct} of {t.total} questions answered correctly
                            </span>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="w-32 bg-slate-100 rounded-full h-2 overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  t.percentage >= 80 ? 'bg-emerald-500' : t.percentage >= 50 ? 'bg-blue-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${t.percentage}%` }}
                              />
                            </div>
                            <span className="text-xs font-bold text-slate-700 w-12 text-right">
                              {t.percentage}%
                            </span>
                            <button
                              onClick={() => onDrillTopic(t.topic, selectedSection)}
                              className="px-2.5 py-1 text-xs font-bold text-blue-600 bg-blue-50 rounded hover:bg-blue-100 transition"
                            >
                              Drill
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 2: PACING */}
        {activeTab === 'PACING' && (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <Clock size={18} className="text-blue-600" />
              <span>Section Pacing Timelines</span>
            </h3>
            <div className="space-y-4">
              {(['QUANT', 'VERBAL', 'DATA_INSIGHTS'] as SectionType[]).map(s => {
                const sec = report.sectionAnalytics[s];
                if (!sec) return null;
                return (
                  <div key={s} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-800">{s}</span>
                      <span className="text-slate-600">Avg: {Math.round(sec.avgTimePerQuestion)}s / question</span>
                    </div>
                    <div className="grid grid-cols-10 sm:grid-cols-23 gap-1">
                      {sec.difficultyCurve.map(item => {
                        const isSink = item.time > sec.targetTime + 55;
                        return (
                          <div
                            key={item.index}
                            title={`Q${item.index}: ${item.time}s`}
                            className={`h-9 rounded text-[10px] font-bold flex flex-col items-center justify-center border ${
                              !item.isCorrect && isSink
                                ? 'bg-red-600 text-white border-red-700'
                                : item.isCorrect
                                ? 'bg-emerald-500 text-white border-emerald-600'
                                : 'bg-slate-300 text-slate-800 border-slate-400'
                            }`}
                          >
                            <span>Q{item.index}</span>
                            <span className="text-[8px]">{item.time}s</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: POINTS PLAN */}
        {activeTab === 'POINTS_PLAN' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl sm:text-2xl font-black">Top 5 Points Gain Opportunities</h2>
              <p className="text-xs text-blue-200 mt-1">
                Prioritized by observed diagnostic miss rates and expected psychometric return on investment.
              </p>
            </div>

            <div className="space-y-4">
              {report.pointsPlan.map(plan => (
                <div key={plan.priority} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                        #{plan.priority}
                      </span>
                      <span className="text-xs font-bold text-blue-600 uppercase">{plan.section}</span>
                      <h4 className="text-sm font-bold text-slate-900">{plan.topic}</h4>
                    </div>
                    <p className="text-xs text-slate-600 pl-8">{plan.recommendation}</p>
                  </div>

                  <div className="flex items-center space-x-3 pl-8 sm:pl-0">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                      +{plan.potentialScoreGain} pts
                    </span>
                    <button
                      onClick={() => onDrillTopic(plan.topic, plan.section)}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm"
                    >
                      Drill Topic
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: QUESTIONS AUDIT WITH SIMILAR QUESTION GENERATION */}
        {activeTab === 'QUESTIONS_AUDIT' && (
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Filter:</span>
                {(['ALL', 'INCORRECT', 'TIME_SINKS'] as const).map(f => (
                  <button
                    key={f}
                    onClick={() => setAuditFilter(f)}
                    className={`px-3 py-1 rounded text-xs font-bold transition ${
                      auditFilter === f
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {f === 'ALL' ? 'All Questions' : f === 'INCORRECT' ? 'Mistakes Only' : 'Time Sinks Only'}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions list with expandable KaTeX solutions */}
            <div className="space-y-4">
              {(['QUANT', 'VERBAL', 'DATA_INSIGHTS'] as SectionType[]).flatMap(s => {
                const sec = report.sectionAnalytics[s];
                if (!sec) return [];

                return sec.difficultyCurve.map(item => {
                  const q = allQuestions.find(x => x.section === s && x.difficulty === item.difficulty) || allQuestions[0];
                  const isExpanded = expandedQuestionId === `${s}_${item.index}`;

                  if (auditFilter === 'INCORRECT' && item.isCorrect) return null;
                  if (auditFilter === 'TIME_SINKS' && item.time <= sec.targetTime + 55) return null;

                  return (
                    <div
                      key={`${s}_${item.index}`}
                      className={`bg-white rounded-xl border transition shadow-xs overflow-hidden ${
                        !item.isCorrect ? 'border-red-200' : 'border-slate-200'
                      }`}
                    >
                      <div
                        onClick={() => setExpandedQuestionId(isExpanded ? null : `${s}_${item.index}`)}
                        className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition"
                      >
                        <div className="flex items-center space-x-3">
                          {item.isCorrect ? (
                            <CheckCircle2 size={18} className="text-emerald-600" />
                          ) : (
                            <XCircle size={18} className="text-red-600" />
                          )}
                          <span className="font-bold text-sm text-slate-900">
                            {s} &bull; Q{item.index}
                          </span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                            Level {item.difficulty}/10
                          </span>
                        </div>

                        <div className="flex items-center space-x-4">
                          <span className="text-xs font-semibold text-blue-600">
                            {isExpanded ? 'Hide Solution' : 'View Full Solution & Traps'}
                          </span>
                        </div>
                      </div>

                      {/* Expanded Solution Drawer */}
                      {isExpanded && (
                        <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                              Question Stem
                            </span>
                            <div className="text-sm text-slate-900 font-medium">
                              <MathText content={q.stem} />
                            </div>
                          </div>

                          {/* Options */}
                          <div className="space-y-1.5 pt-1">
                            {q.options.map((opt, oIdx) => {
                              const letter = String.fromCharCode(65 + oIdx);
                              const isCorrectOpt = letter === String(q.correctAnswer).trim().toUpperCase();
                              return (
                                <div
                                  key={letter}
                                  className={`p-2.5 rounded text-xs flex items-start space-x-2 border ${
                                    isCorrectOpt
                                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold'
                                      : 'bg-white border-slate-200 text-slate-700'
                                  }`}
                                >
                                  <span className="font-bold">{letter}.</span>
                                  <MathText content={opt} className="inline" />
                                </div>
                              );
                            })}
                          </div>

                          {/* Step-by-step Solution with MathText */}
                          <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
                            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
                              <Brain size={14} className="text-blue-600" />
                              <span>Step-by-Step Mathematical/Logical Proof</span>
                            </span>
                            <div className="text-xs text-slate-700 leading-relaxed">
                              <MathText content={q.explanation.stepByStep} />
                            </div>
                          </div>

                          {/* 45-Second Shortcut Method */}
                          <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-200 space-y-1.5">
                            <span className="text-xs font-bold text-amber-950 uppercase tracking-wider flex items-center space-x-1.5">
                              <Flame size={14} className="text-amber-600" />
                              <span>45-Second Shortcut Heuristic</span>
                            </span>
                            <div className="text-xs text-amber-900 font-medium leading-relaxed">
                              <MathText content={q.explanation.shortcutMethod} />
                            </div>
                          </div>

                          {/* Trap Explained */}
                          <div className="bg-rose-50/70 p-4 rounded-lg border border-rose-200 space-y-1.5">
                            <span className="text-xs font-bold text-rose-950 uppercase tracking-wider flex items-center space-x-1.5">
                              <AlertTriangle size={14} className="text-rose-600" />
                              <span>Test-Maker Trap Breakdown</span>
                            </span>
                            <div className="text-xs text-rose-900 leading-relaxed">
                              <MathText content={q.explanation.trapExplained} />
                            </div>
                          </div>

                          {/* Similar Question Button */}
                          <div className="pt-2 flex items-center justify-between">
                            <button
                              onClick={() => handleRequestSimilar(q)}
                              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center space-x-1.5 transition"
                            >
                              <RotateCcw size={14} />
                              <span>Generate Similar Question</span>
                            </button>
                            {similarQuestionStatus[q.id] && (
                              <span className="text-xs text-emerald-700 font-bold animate-pulse">
                                {similarQuestionStatus[q.id]}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                });
              })}
            </div>
          </div>
        )}

        {/* Bottom Report Navigation Bar */}
        <div className="pt-8 border-t border-slate-300 flex items-center justify-between print:hidden">
          {onExitToMenu ? (
            <button
              onClick={onExitToMenu}
              className="px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 rounded-xl text-xs font-bold flex items-center space-x-2 transition cursor-pointer shadow-xs"
            >
              <Home size={15} />
              <span>Return to Main Menu</span>
            </button>
          ) : <div />}

          <button
            onClick={onStartNewExam}
            className="px-6 py-2.5 bg-[#1b365d] hover:bg-blue-900 text-white font-bold rounded-xl text-xs shadow-md flex items-center space-x-2 transition cursor-pointer"
          >
            <span>Start Another Simulation</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
