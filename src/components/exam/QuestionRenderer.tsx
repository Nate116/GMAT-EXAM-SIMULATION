import React, { useState } from 'react';
import { GMATQuestion, TableRow } from '../../types/gmat';
import { MathRenderer } from '../common/MathRenderer';
import { ArrowUpDown, HelpCircle } from 'lucide-react';

interface QuestionRendererProps {
  question: GMATQuestion;
  userAnswer: any;
  onAnswerChange: (newAnswer: any) => void;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  userAnswer,
  onAnswerChange,
}) => {
  // Table Analysis sorting state
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  // MSR active tab state
  const [activeTabId, setActiveTabId] = useState<string>(
    question.msrTabs?.[0]?.id || 'tab1'
  );

  // 1. Reading Comprehension: Two-column split
  if (question.type === 'READING_COMPREHENSION') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-170px)] min-h-[500px]">
        {/* Left: Passage Reader */}
        <div className="bg-white border border-slate-300 rounded-lg shadow-sm p-6 overflow-y-auto font-serif text-[15px] leading-relaxed text-slate-800">
          <div className="text-xs uppercase tracking-wider font-sans font-bold text-slate-400 mb-3 pb-2 border-b border-slate-200">
            Passage Context
          </div>
          <MathRenderer content={question.passage || ''} />
        </div>

        {/* Right: Question Stem & Options */}
        <div className="bg-white border border-slate-300 rounded-lg shadow-sm p-6 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider font-sans font-bold text-slate-400 mb-3 pb-2 border-b border-slate-200">
              Questions & Answer Choices
            </div>
            <div className="text-base font-medium text-slate-900 mb-6">
              <MathRenderer content={question.stem} />
            </div>

            <div className="space-y-3">
              {question.options.map((option, idx) => {
                const letter = String.fromCharCode(65 + idx);
                const isSelected = userAnswer === letter;
                return (
                  <label
                    key={letter}
                    onClick={() => onAnswerChange(letter)}
                    className={`flex items-start p-3.5 rounded-lg border cursor-pointer transition select-none ${
                      isSelected
                        ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-600/20'
                        : 'border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center h-5 mr-3">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-400 bg-white'
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                      </div>
                    </div>
                    <div className="text-sm text-slate-800 font-normal leading-relaxed">
                      <span className="font-semibold text-slate-700 mr-2">{letter}.</span>
                      <MathRenderer content={option} className="inline" />
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Multi-Source Reasoning: Tabbed Sources
  if (question.type === 'MULTI_SOURCE_REASONING' && question.msrTabs) {
    const activeTab = question.msrTabs.find(t => t.id === activeTabId) || question.msrTabs[0];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-170px)] min-h-[500px]">
        {/* Left: Tabbed Sources */}
        <div className="bg-white border border-slate-300 rounded-lg shadow-sm flex flex-col overflow-hidden">
          {/* Tabs bar */}
          <div className="flex bg-slate-100 border-b border-slate-300 px-2 pt-2 space-x-1">
            {question.msrTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-t-md transition border-t border-l border-r ${
                  activeTabId === tab.id
                    ? 'bg-white text-blue-900 border-slate-300 shadow-sm font-bold -mb-px'
                    : 'bg-slate-200/80 text-slate-600 border-transparent hover:bg-slate-200'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="p-6 overflow-y-auto flex-1 font-serif text-[15px] leading-relaxed text-slate-800">
            <MathRenderer content={activeTab?.content || ''} />
          </div>
        </div>

        {/* Right: Question Stem & Options */}
        <div className="bg-white border border-slate-300 rounded-lg shadow-sm p-6 overflow-y-auto">
          <div className="text-xs uppercase tracking-wider font-sans font-bold text-slate-400 mb-3 pb-2 border-b border-slate-200">
            Multi-Source Evaluation
          </div>
          <div className="text-base font-medium text-slate-900 mb-6">
            <MathRenderer content={question.stem} />
          </div>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = userAnswer === letter;
              return (
                <label
                  key={letter}
                  onClick={() => onAnswerChange(letter)}
                  className={`flex items-start p-3.5 rounded-lg border cursor-pointer transition select-none ${
                    isSelected
                      ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-600/20'
                      : 'border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center h-5 mr-3">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-400 bg-white'
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                    </div>
                  </div>
                  <div className="text-sm text-slate-800 leading-relaxed">
                    <span className="font-semibold text-slate-700 mr-2">{letter}.</span>
                    <MathRenderer content={option} className="inline" />
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // 3. Table Analysis: Sortable Columns & Dichotomous Statements
  if (question.type === 'TABLE_ANALYSIS' && question.tableData && question.tableData.columns && question.tableData.columns.length > 0 && question.tableData.statements && question.tableData.statements.length > 0) {
    const { columns = [], rows = [], dichotomousQuestion = 'Evaluate whether each statement can be deduced from the data:', statements = [] } = question.tableData;

    // Sorting logic
    const sortedRows = [...rows].sort((a, b) => {
      if (!sortColumn) return 0;
      const valA = a[sortColumn];
      const valB = b[sortColumn];
      if (typeof valA === 'number' && typeof valB === 'number') {
        return sortAsc ? valA - valB : valB - valA;
      }
      return sortAsc
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });

    const handleSort = (col: string) => {
      if (sortColumn === col) {
        setSortAsc(!sortAsc);
      } else {
        setSortColumn(col);
        setSortAsc(true);
      }
    };

    // Answer format: Record<statementId, 'Yes' | 'No'>
    const responses: Record<string, string> = typeof userAnswer === 'object' && userAnswer !== null ? userAnswer : {};

    const handleStatementChoice = (stmtId: string, choice: 'Yes' | 'No') => {
      onAnswerChange({
        ...responses,
        [stmtId]: choice,
      });
    };

    return (
      <div className="bg-white border border-slate-300 rounded-lg shadow-sm p-6 space-y-6">
        <div>
          <div className="text-xs uppercase tracking-wider font-sans font-bold text-slate-400 mb-2">
            Table Analysis
          </div>
          <div className="text-sm font-medium text-slate-800">
            <MathRenderer content={question.stem} />
          </div>
        </div>

        {/* Sortable Table */}
        <div className="overflow-x-auto border border-slate-300 rounded-lg shadow-inner max-h-72">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-slate-100 text-slate-700 font-semibold sticky top-0 border-b border-slate-300">
              <tr>
                {columns.map(col => (
                  <th
                    key={col}
                    onClick={() => handleSort(col)}
                    className="p-2.5 cursor-pointer hover:bg-slate-200 transition select-none border-r border-slate-200 last:border-r-0"
                  >
                    <div className="flex items-center justify-between space-x-1">
                      <span>{col}</span>
                      <ArrowUpDown size={12} className={sortColumn === col ? 'text-blue-600' : 'text-slate-400'} />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {sortedRows.map((row, rIdx) => (
                <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                  {columns.map(col => (
                    <td key={col} className="p-2.5 text-slate-800 border-r border-slate-200 last:border-r-0">
                      {typeof row[col] === 'number' ? row[col].toLocaleString() : row[col]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dichotomous Statements Grid */}
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
          <p className="text-xs font-semibold text-slate-700 mb-4">{dichotomousQuestion}</p>
          <div className="space-y-3">
            {statements.map(stmt => (
              <div key={stmt.id} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
                <span className="text-sm text-slate-800 flex-1 pr-6 font-normal">{stmt.text}</span>
                <div className="flex items-center space-x-6">
                  {['Yes', 'No'].map(opt => {
                    const isSelected = responses[stmt.id] === opt;
                    return (
                      <label key={opt} className="flex items-center space-x-2 cursor-pointer select-none">
                        <input
                          type="radio"
                          name={`stmt_${stmt.id}`}
                          checked={isSelected}
                          onChange={() => handleStatementChoice(stmt.id, opt as 'Yes' | 'No')}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-semibold text-slate-700">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 4. Graphics Interpretation: Visual Chart + Inline Dropdowns
  if (question.type === 'GRAPHICS_INTERPRETATION' && question.graphicsData && question.graphicsData.dropdownPrompts && question.graphicsData.dropdownPrompts.length > 0) {
    const { chartType = 'line', title = 'Chart Analysis', dataPoints = [], dropdownPrompts = [] } = question.graphicsData;
    const currentSelections: Record<string, string> = typeof userAnswer === 'object' && userAnswer !== null ? userAnswer : {};

    const handleDropdownSelect = (dropId: string, val: string) => {
      onAnswerChange({
        ...currentSelections,
        [dropId]: val,
      });
    };

    return (
      <div className="bg-white border border-slate-300 rounded-lg shadow-sm p-6 space-y-6">
        <div>
          <div className="text-xs uppercase tracking-wider font-sans font-bold text-slate-400 mb-2">
            Graphics Interpretation
          </div>
          <div className="text-sm font-medium text-slate-800">
            <MathRenderer content={question.stem} />
          </div>
        </div>

        {/* Scatter / Trend Line Canvas / SVG Chart */}
        <div className="border border-slate-300 rounded-lg p-5 bg-slate-50 flex flex-col items-center">
          <div className="text-xs font-bold text-slate-700 mb-2">{title}</div>
          <svg viewBox="0 0 500 240" className="w-full max-w-lg h-56 bg-white rounded border border-slate-200 shadow-inner">
            {/* Grid lines */}
            {[40, 80, 120, 160, 200].map(y => (
              <line key={y} x1="50" y1={y} x2="470" y2={y} stroke="#e2e8f0" strokeDasharray="3 3" />
            ))}
            {[100, 180, 260, 340, 420].map(x => (
              <line key={x} x1={x} y1="30" x2={x} y2="200" stroke="#e2e8f0" strokeDasharray="3 3" />
            ))}

            {/* Axes */}
            <line x1="50" y1="200" x2="470" y2="200" stroke="#475569" strokeWidth="2" />
            <line x1="50" y1="30" x2="50" y2="200" stroke="#475569" strokeWidth="2" />

            {/* Labels */}
            <text x="260" y="225" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="600">
              Weekly Training Hours
            </text>
            <text x="20" y="115" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="600" transform="rotate(-90 20 115)">
              Resting Heart Rate (bpm)
            </text>

            {/* Data points */}
            {dataPoints.map((pt, i) => {
              const cx = 50 + ((pt.x || 0) / 22) * 420;
              const cy = 200 - (((pt.y || 0) - 30) / 40) * 160;
              return (
                <g key={i}>
                  <circle cx={cx} cy={cy} r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Dropdown sentences */}
        <div className="space-y-4 pt-2">
          {dropdownPrompts.map(dp => (
            <div key={dp.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 flex items-center flex-wrap gap-2">
              <span>{dp.preText}</span>
              <select
                value={currentSelections[dp.id] || ''}
                onChange={e => handleDropdownSelect(dp.id, e.target.value)}
                className="bg-white border-2 border-blue-600 rounded px-3 py-1 font-semibold text-blue-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              >
                <option value="" disabled>-- Select Option --</option>
                {dp.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <span>{dp.postText}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 5. Two-Part Analysis: 2-Column Grid
  if (question.type === 'TWO_PART_ANALYSIS' && question.twoPartData && question.twoPartData.rows && question.twoPartData.rows.length > 0) {
    const { column1Header = 'Part 1', column2Header = 'Part 2', rows = [] } = question.twoPartData;
    const currentCols: { col1?: string; col2?: string } = typeof userAnswer === 'object' && userAnswer !== null ? userAnswer : {};

    const handleSelect = (col: 'col1' | 'col2', rowId: string) => {
      onAnswerChange({
        ...currentCols,
        [col]: rowId,
      });
    };

    return (
      <div className="bg-white border border-slate-300 rounded-lg shadow-sm p-6 space-y-6">
        <div>
          <div className="text-xs uppercase tracking-wider font-sans font-bold text-slate-400 mb-2">
            Two-Part Analysis
          </div>
          <div className="text-sm font-medium text-slate-800 leading-relaxed">
            <MathRenderer content={question.stem} />
          </div>
        </div>

        {/* 2-Column Selection Table */}
        <div className="border border-slate-300 rounded-lg overflow-hidden shadow-sm">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#1b365d] text-white">
              <tr>
                <th className="p-3 text-center w-36 border-r border-blue-900 font-semibold">{column1Header}</th>
                <th className="p-3 text-center w-36 border-r border-blue-900 font-semibold">{column2Header}</th>
                <th className="p-3 font-semibold pl-4">Value / Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map(row => {
                const isCol1Selected = currentCols.col1 === row.id;
                const isCol2Selected = currentCols.col2 === row.id;

                return (
                  <tr key={row.id} className="hover:bg-slate-50 transition">
                    <td className="p-3 text-center border-r border-slate-200">
                      <input
                        type="radio"
                        name="col1_group"
                        checked={isCol1Selected}
                        onChange={() => handleSelect('col1', row.id)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                    </td>
                    <td className="p-3 text-center border-r border-slate-200">
                      <input
                        type="radio"
                        name="col2_group"
                        checked={isCol2Selected}
                        onChange={() => handleSelect('col2', row.id)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                    </td>
                    <td className="p-3 text-slate-900 font-medium pl-4">
                      {row.label}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 6. Default: Standard Multiple Choice (Problem Solving, Critical Reasoning, Data Sufficiency)
  return (
    <div className="bg-white border border-slate-300 rounded-lg shadow-sm p-6 space-y-6">
      {/* Category Tag */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
          {question.type.replace(/_/g, ' ')} &bull; {question.subtype}
        </span>
        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
          Level {question.difficulty}/10
        </span>
      </div>

      {/* Stem */}
      <div className="text-base font-medium text-slate-900 leading-relaxed">
        <MathRenderer content={question.stem} />
      </div>

      {/* Options A through E */}
      <div className="space-y-3 pt-2">
        {(question.options && question.options.length > 0 ? question.options : ['A', 'B', 'C', 'D', 'E']).map((option, idx) => {
          const letter = String.fromCharCode(65 + idx);
          const isSelected = userAnswer === letter;

          return (
            <label
              key={letter}
              onClick={() => onAnswerChange(letter)}
              className={`flex items-start p-4 rounded-lg border cursor-pointer transition select-none ${
                isSelected
                  ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-600/20'
                  : 'border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center h-5 mr-3 mt-0.5">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-400 bg-white'
                  }`}
                >
                  {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                </div>
              </div>
              <div className="text-sm text-slate-800 leading-relaxed flex-1">
                <span className="font-semibold text-slate-700 mr-2">{letter}.</span>
                <MathRenderer content={option} className="inline" />
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};
