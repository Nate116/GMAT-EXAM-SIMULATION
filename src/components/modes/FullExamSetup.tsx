import React, { useState } from 'react';
import { SectionOrder, SectionType, ExamSession, SectionState } from '../../types/gmat';
import { Storage } from '../../lib/storage';
import { selectNextAdaptiveItem } from '../../lib/irt';
import { ArrowRight, Settings, ShieldAlert, Award, Clock } from 'lucide-react';

interface FullExamSetupProps {
  onStartExam: (session: ExamSession) => void;
  onCancel: () => void;
}

export const FullExamSetup: React.FC<FullExamSetupProps> = ({ onStartExam, onCancel }) => {
  const [selectedOrder, setSelectedOrder] = useState<SectionOrder>([
    'QUANT',
    'VERBAL',
    'DATA_INSIGHTS',
  ]);
  const [difficultyDial, setDifficultyDial] = useState<'STANDARD' | 'HARD' | 'BEYOND_GMAT'>('HARD');
  const [examType, setExamType] = useState<'FULL_MOCK' | 'SINGLE_SECTION'>('FULL_MOCK');
  const [singleSectionType, setSingleSectionType] = useState<SectionType>('QUANT');
  const [isGenerating, setIsGenerating] = useState(false);

  const SECTION_ORDERS: { label: string; order: SectionOrder }[] = [
    { label: 'Quantitative → Verbal → Data Insights', order: ['QUANT', 'VERBAL', 'DATA_INSIGHTS'] },
    { label: 'Quantitative → Data Insights → Verbal', order: ['QUANT', 'DATA_INSIGHTS', 'VERBAL'] },
    { label: 'Verbal → Quantitative → Data Insights', order: ['VERBAL', 'QUANT', 'DATA_INSIGHTS'] },
    { label: 'Verbal → Data Insights → Quantitative', order: ['VERBAL', 'DATA_INSIGHTS', 'QUANT'] },
    { label: 'Data Insights → Quantitative → Verbal', order: ['DATA_INSIGHTS', 'QUANT', 'VERBAL'] },
    { label: 'Data Insights → Verbal → Quantitative', order: ['DATA_INSIGHTS', 'VERBAL', 'QUANT'] },
  ];

  const handleLaunch = async () => {
    setIsGenerating(true);
    const allQuestions = Storage.getAllQuestions();
    const seenIds = Storage.getSeenQuestionIds();

    const sectionsToBuild: SectionType[] = examType === 'FULL_MOCK' ? selectedOrder : [singleSectionType];

    const builtSections: SectionState[] = sectionsToBuild.map(secType => {
      const qCount = secType === 'QUANT' ? 21 : secType === 'VERBAL' ? 23 : 20;
      const secPool = allQuestions.filter(q => q.section === secType);

      // Select adaptive items starting at medium-high ability (theta ~ 0.5)
      const selectedSecQuestions = [];
      const tempSeen = new Set(seenIds);

      for (let i = 0; i < qCount; i++) {
        let item = selectNextAdaptiveItem(secPool, tempSeen, 0.5, difficultyDial);
        if (!item) {
          // If pool exhausted, fallback to cycling pool items
          item = secPool[i % secPool.length];
        }
        if (item) {
          tempSeen.add(item.id);
          Storage.markQuestionSeen(item.id);
          selectedSecQuestions.push(item);
        }
      }

      return {
        section: secType,
        questions: selectedSecQuestions,
        responses: {},
        currentIndex: 0,
        timeRemainingSec: 45 * 60, // 45:00
        status: 'not_started',
        editsRemaining: 3,
        currentAbilityEstimate: 0.0,
      };
    });

    builtSections[0].status = 'in_progress';

    const newSession: ExamSession = {
      id: `exam_${Date.now()}`,
      createdAt: new Date().toISOString(),
      mode: examType,
      sectionOrder: selectedOrder,
      currentSectionIndex: 0,
      difficultyDial,
      sections: builtSections,
      isCompleted: false,
    };

    Storage.saveActiveSession(newSession);
    setIsGenerating(false);
    onStartExam(newSession);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 font-sans">
      {/* Title */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Official Pearson VUE Simulation
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">
          GMAT Focus Edition Adaptive Exam Setup
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Replicating the official exam rules: 45 minutes per section, question-level 2PL IRT adaptivity, no skipping, and up to 3 question edits at section review.
        </p>
      </div>

      {/* Mode Choice: Full vs Single */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          onClick={() => setExamType('FULL_MOCK')}
          className={`p-5 rounded-2xl border-2 cursor-pointer transition select-none ${
            examType === 'FULL_MOCK'
              ? 'border-blue-600 bg-blue-50/50 shadow-md ring-2 ring-blue-600/20'
              : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-base font-bold text-slate-900">Full-Length Exam</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">135 Minutes</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            All 3 sections (64 questions: 21 Quant, 23 Verbal, 20 Data Insights) with optional 10-minute section breaks.
          </p>
        </div>

        <div
          onClick={() => setExamType('SINGLE_SECTION')}
          className={`p-5 rounded-2xl border-2 cursor-pointer transition select-none ${
            examType === 'SINGLE_SECTION'
              ? 'border-blue-600 bg-blue-50/50 shadow-md ring-2 ring-blue-600/20'
              : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-base font-bold text-slate-900">Single Section Simulation</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">45 Minutes</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Test a single section under strict exam timing and full 2PL adaptive score calibration.
          </p>
        </div>
      </div>

      {/* Single Section Selector */}
      {examType === 'SINGLE_SECTION' && (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
            Select Section to Simulate
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { type: 'QUANT' as SectionType, label: 'Quantitative (21 Q)' },
              { type: 'VERBAL' as SectionType, label: 'Verbal (23 Q)' },
              { type: 'DATA_INSIGHTS' as SectionType, label: 'Data Insights (20 Q)' },
            ].map(s => (
              <button
                key={s.type}
                onClick={() => setSingleSectionType(s.type)}
                className={`py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition border ${
                  singleSectionType === s.type
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Section Order (All 6 Permutations) */}
      {examType === 'FULL_MOCK' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
              Official Section Order (Choose from all 6 permutations)
            </label>
            <span className="text-xs text-blue-600 font-semibold">Order impacts cognitive fatigue</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SECTION_ORDERS.map((opt, idx) => {
              const isSelected = JSON.stringify(selectedOrder) === JSON.stringify(opt.order);
              return (
                <label
                  key={idx}
                  onClick={() => setSelectedOrder(opt.order)}
                  className={`p-3.5 rounded-xl border flex items-center space-x-3 cursor-pointer transition select-none ${
                    isSelected
                      ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20 font-bold text-blue-900'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="section_order"
                    checked={isSelected}
                    onChange={() => setSelectedOrder(opt.order)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs leading-normal">{opt.label}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* Difficulty Dial */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
          Adaptive Difficulty Dial
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              id: 'STANDARD',
              name: 'Standard Focus',
              desc: 'Official difficulty curve (Level 4-7 baseline, reaches 8+ with high accuracy).',
            },
            {
              id: 'HARD',
              name: 'Hard (705+ Target)',
              desc: 'Starts at Level 6-8. Heavy concentration of multi-concept traps.',
            },
            {
              id: 'BEYOND_GMAT',
              name: 'Beyond GMAT (805 Mastery)',
              desc: '+1 to +2 levels above real exam. Complex multi-concept stacking & subtle traps.',
            },
          ].map(dial => {
            const isSelected = difficultyDial === dial.id;
            return (
              <div
                key={dial.id}
                onClick={() => setDifficultyDial(dial.id as any)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition select-none ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/60 shadow-sm'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-slate-900">{dial.name}</span>
                  {dial.id === 'BEYOND_GMAT' && <Award size={16} className="text-amber-500" />}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{dial.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

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
          disabled={isGenerating}
          className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-xl shadow-lg hover:shadow-blue-600/30 flex items-center space-x-2 text-sm transition disabled:opacity-50"
        >
          <span>{isGenerating ? 'Calibrating Questions...' : 'Launch Simulation'}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
