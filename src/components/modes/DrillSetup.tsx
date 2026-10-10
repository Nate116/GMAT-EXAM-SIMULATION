import React, { useState } from 'react';
import { SectionType, QuestionType, GMATQuestion, ExamSession } from '../../types/gmat';
import { Storage, StoredErrorItem } from '../../lib/storage';
import { MathText } from '../common/MathText';
import { Target, Zap, RotateCcw, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface DrillSetupProps {
  onStartDrill: (session: ExamSession) => void;
  onCancel: () => void;
  initialTopic?: string;
  initialSection?: SectionType;
}

export const DrillSetup: React.FC<DrillSetupProps> = ({
  onStartDrill,
  onCancel,
  initialTopic,
  initialSection = 'QUANT',
}) => {
  const [drillMode, setDrillMode] = useState<'TOPIC_DRILL' | 'TIMED_SPRINT' | 'ERROR_RETAKE' | 'WEAKNESS_SPRINT'>('TOPIC_DRILL');
  const [section, setSection] = useState<SectionType>(initialSection);
  const [selectedTopic, setSelectedTopic] = useState<string>(initialTopic || 'Number Properties & Divisibility');
  const [difficulty, setDifficulty] = useState<number>(8);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [isTimed, setIsTimed] = useState<boolean>(true);

  const errorLog = Storage.getErrorLog();
  const allQuestions = Storage.getAllQuestions();
  const baseline = Storage.getBaselineDiagnostic();

  const QUANT_TOPICS = [
    'Number Properties & Divisibility',
    'Word Problems & Rates/Work',
    'Probability & Combinatorics',
    'Inequalities & Absolute Values',
    'Sequences & Series',
    'Algebra & Exponents',
    'Percents, Ratios & Mixtures',
    'Statistics & Standard Deviation',
  ];

  const VERBAL_TOPICS = [
    'Critical Reasoning',
    'Reading Comprehension',
  ];

  const DI_TOPICS = [
    'Data Sufficiency',
    'Multi-Source Reasoning',
    'Table Analysis',
    'Graphics Interpretation',
    'Two-Part Analysis',
  ];

  const currentTopics = section === 'QUANT' ? QUANT_TOPICS : section === 'VERBAL' ? VERBAL_TOPICS : DI_TOPICS;

  const handleLaunch = () => {
    let questionsForDrill: GMATQuestion[] = [];

    if (drillMode === 'ERROR_RETAKE') {
      if (errorLog.length === 0) {
        alert('Your Error Vault is currently empty! Answer missed questions in practice tests or simulations first.');
        return;
      }
      questionsForDrill = errorLog.slice(0, questionCount).map(e => e.question);
    } else if (drillMode === 'WEAKNESS_SPRINT') {
      // Pick questions matching the top 3 weaknesses from Points Plan
      const weakTopics = baseline.pointsPlan.map(p => p.topic);
      const weakPool = allQuestions.filter(q => weakTopics.some(wt => q.topic.includes(wt) || wt.includes(q.topic)));
      questionsForDrill = weakPool.length >= questionCount ? weakPool.slice(0, questionCount) : allQuestions.slice(0, questionCount);
    } else {
      let pool = allQuestions.filter(q => q.section === section);
      if (drillMode === 'TOPIC_DRILL') {
        const topicFiltered = pool.filter(q => q.topic.includes(selectedTopic) || selectedTopic.includes(q.topic));
        pool = topicFiltered.length > 0 ? topicFiltered : pool;
      }
      pool.sort((a, b) => Math.abs(a.difficulty - difficulty) - Math.abs(b.difficulty - difficulty));
      questionsForDrill = pool.slice(0, questionCount);
      if (questionsForDrill.length === 0) {
        questionsForDrill = allQuestions.slice(0, questionCount);
      }
    }

    // Time calculations
    const timeLimitSec = isTimed
      ? (drillMode === 'TIMED_SPRINT' || drillMode === 'WEAKNESS_SPRINT')
        ? 15 * 60 // strict 15 min for sprint
        : questionCount * 125
      : 999999;

    const newSession: ExamSession = {
      id: `drill_${Date.now()}`,
      createdAt: new Date().toISOString(),
      mode: (drillMode === 'WEAKNESS_SPRINT' ? 'TIMED_SPRINT' : drillMode) as any,
      sectionOrder: [section, 'VERBAL', 'DATA_INSIGHTS'],
      currentSectionIndex: 0,
      difficultyDial: difficulty >= 9 ? 'BEYOND_GMAT' : difficulty >= 7 ? 'HARD' : 'STANDARD',
      sections: [
        {
          section,
          questions: questionsForDrill,
          responses: {},
          currentIndex: 0,
          timeRemainingSec: timeLimitSec,
          status: 'in_progress',
          editsRemaining: 3,
          currentAbilityEstimate: (difficulty - 5.5) / 1.8,
        },
      ],
      isCompleted: false,
    };

    onStartDrill(newSession);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-8 font-sans">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Targeted Practice Modules
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Drills & Pacing Sprints
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Reinforce weak subtopics, conquer time pressure with sprint sets, or re-serve missed items until graduated.
        </p>
      </div>

      {/* Drill Mode Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          {
            id: 'WEAKNESS_SPRINT',
            label: 'Weakness Sprint',
            desc: '10 questions in 15 minutes targeting your top 5 diagnostic weaknesses.',
            icon: Sparkles,
          },
          {
            id: 'TOPIC_DRILL',
            label: 'Topic Deep Dive',
            desc: 'Target specific question subtypes at calibrated difficulty.',
            icon: Target,
          },
          {
            id: 'TIMED_SPRINT',
            label: 'Pacing Sprint',
            desc: '10 questions in 15 minutes to eliminate hesitation.',
            icon: Zap,
          },
          {
            id: 'ERROR_RETAKE',
            label: 'Error Vault Retake',
            desc: `Re-serve ${errorLog.length} missed items. Retires only after 2 consecutive correct answers.`,
            icon: RotateCcw,
          },
        ].map(m => {
          const Icon = m.icon;
          const isSelected = drillMode === m.id;
          return (
            <div
              key={m.id}
              onClick={() => setDrillMode(m.id as any)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition select-none flex flex-col justify-between ${
                isSelected
                  ? 'border-blue-600 bg-blue-50/60 shadow-md ring-2 ring-blue-600/20'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Icon size={16} className={isSelected ? 'text-blue-600' : 'text-slate-500'} />
                  <span className="font-bold text-xs text-slate-900">{m.label}</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {drillMode === 'ERROR_RETAKE' && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs space-y-1">
          <div className="font-bold text-amber-900 flex items-center space-x-1.5">
            <RotateCcw size={14} className="text-amber-700" />
            <span>Honest Vault Rule: 2 Consecutive Correct Answers to Graduate</span>
          </div>
          <p className="text-amber-800">
            A question leaves your Error Vault only after you solve it correctly twice in a row. If you miss it again, the streak resets to zero.
          </p>
        </div>
      )}

      {drillMode === 'WEAKNESS_SPRINT' && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-xs space-y-2">
          <span className="font-bold text-indigo-950 block">Targeting Your Top Points Plan Weaknesses:</span>
          <div className="flex flex-wrap gap-1.5">
            {baseline.pointsPlan.slice(0, 3).map(p => (
              <span key={p.topic} className="px-2 py-0.5 rounded bg-white border border-indigo-200 text-indigo-900 font-semibold text-[10px]">
                {p.topic} ({p.currentAccuracy}% acc)
              </span>
            ))}
          </div>
        </div>
      )}

      {(drillMode === 'TOPIC_DRILL' || drillMode === 'TIMED_SPRINT') && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          {/* Section Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
              Section
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['QUANT', 'VERBAL', 'DATA_INSIGHTS'] as SectionType[]).map(s => (
                <button
                  key={s}
                  onClick={() => {
                    setSection(s);
                    setSelectedTopic(s === 'QUANT' ? QUANT_TOPICS[0] : s === 'VERBAL' ? VERBAL_TOPICS[0] : DI_TOPICS[0]);
                  }}
                  className={`py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition border ${
                    section === s
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {s === 'QUANT' ? 'Quantitative' : s === 'VERBAL' ? 'Verbal' : 'Data Insights'}
                </button>
              ))}
            </div>
          </div>

          {/* Topic Selection */}
          {drillMode === 'TOPIC_DRILL' && (
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                Target Subtopic
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentTopics.map(t => (
                  <button
                    key={t}
                    onClick={() => setSelectedTopic(t)}
                    className={`p-2.5 rounded-lg text-left text-xs font-semibold border transition ${
                      selectedTopic === t
                        ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Difficulty Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Difficulty Level: {difficulty}/10
              </label>
              <span className="text-xs font-semibold text-blue-600">
                {difficulty >= 9 ? 'Beyond GMAT (Level 9-10)' : difficulty >= 7 ? '705+ Target (Level 7-8)' : 'Foundational (Level 4-6)'}
              </span>
            </div>
            <input
              type="range"
              min={4}
              max={10}
              value={difficulty}
              onChange={e => setDifficulty(parseInt(e.target.value, 10))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          {/* Timing */}
          <div className="flex items-center space-x-3 pt-2">
            <button
              onClick={() => setIsTimed(true)}
              className={`px-4 py-2 rounded-lg text-xs font-bold border ${isTimed ? 'bg-blue-600 text-white' : 'border-slate-200 text-slate-700'}`}
            >
              Timed Practice
            </button>
            <button
              onClick={() => setIsTimed(false)}
              className={`px-4 py-2 rounded-lg text-xs font-bold border ${!isTimed ? 'bg-blue-600 text-white' : 'border-slate-200 text-slate-700'}`}
            >
              Untimed Practice
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onCancel}
          className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-xl transition"
        >
          Cancel
        </button>

        <button
          onClick={handleLaunch}
          className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-xl shadow-lg hover:shadow-blue-600/30 flex items-center space-x-2 text-sm transition"
        >
          <span>Start Drill</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
