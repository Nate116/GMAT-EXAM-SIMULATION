import React from 'react';
import { Bookmark, CheckCircle2, AlertCircle, ArrowLeft, Send, LogOut } from 'lucide-react';
import { GMATQuestion, QuestionResponse } from '../../types/gmat';

interface ReviewScreenProps {
  questions: GMATQuestion[];
  responses: Record<string, QuestionResponse>;
  editsRemaining: number;
  timeRemainingSec: number;
  onSelectQuestion: (index: number) => void;
  onSubmitSection: () => void;
  onExitToMenu?: () => void;
}

export const ReviewScreen: React.FC<ReviewScreenProps> = ({
  questions,
  responses,
  editsRemaining,
  timeRemainingSec,
  onSelectQuestion,
  onSubmitSection,
  onExitToMenu,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(Math.max(0, seconds) / 60);
    const secs = Math.max(0, seconds) % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.values(responses).filter(r => r.userAnswer !== undefined && r.userAnswer !== null).length;
  const bookmarkedCount = Object.values(responses).filter(r => r.bookmarked).length;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Banner */}
      <div className="bg-[#1b365d] text-white p-6 rounded-xl shadow-md flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Section Review & Edit Screen</h2>
          <p className="text-xs text-blue-200 mt-1 max-w-xl">
            As on the official GMAT Focus Edition, you may review all questions in this section.
            You have the opportunity to change your answers to up to <span className="font-bold text-amber-300">3 questions</span>.
          </p>
        </div>

        <div className="text-right flex items-center space-x-6">
          <div className="bg-blue-900/80 px-4 py-2.5 rounded-lg border border-blue-400/30 text-center">
            <span className="text-[10px] uppercase tracking-wider text-blue-300 block font-semibold">Edits Remaining</span>
            <span className="text-2xl font-black text-amber-300">{editsRemaining} / 3</span>
          </div>

          <div className="bg-blue-950 px-4 py-2.5 rounded-lg border border-blue-400/30 text-center font-mono">
            <span className="text-[10px] uppercase tracking-wider text-blue-300 block font-sans font-semibold">Time Remaining</span>
            <span className="text-xl font-bold text-white">{formatTime(timeRemainingSec)}</span>
          </div>
        </div>
      </div>

      {/* Summary Chips */}
      <div className="flex items-center space-x-4 text-xs font-semibold">
        <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 rounded-md text-slate-700 border border-slate-200">
          <CheckCircle2 size={14} className="text-green-600" />
          <span>{answeredCount} of {questions.length} Answered</span>
        </div>
        <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-amber-50 rounded-md text-amber-800 border border-amber-200">
          <Bookmark size={14} className="text-amber-500 fill-amber-500" />
          <span>{bookmarkedCount} Bookmarked for Review</span>
        </div>
      </div>

      {/* Questions Grid Table */}
      <div className="bg-white border border-slate-300 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-300">
            <tr>
              <th className="py-3 px-4 w-24">Question</th>
              <th className="py-3 px-4 w-32">Type</th>
              <th className="py-3 px-4">Topic / Subtype</th>
              <th className="py-3 px-4 text-center w-28">Status</th>
              <th className="py-3 px-4 text-center w-32">Bookmarked</th>
              <th className="py-3 px-4 text-center w-28">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {questions.map((q, idx) => {
              const resp = responses[q.id];
              const isAnswered = resp && resp.userAnswer !== undefined && resp.userAnswer !== null;
              const isBookmarked = resp?.bookmarked;
              const wasEdited = resp?.wasEditedInReview;

              return (
                <tr
                  key={q.id}
                  onClick={() => onSelectQuestion(idx)}
                  className="hover:bg-blue-50/50 cursor-pointer transition"
                >
                  <td className="py-3 px-4 font-bold text-slate-900">
                    Q{idx + 1}
                  </td>
                  <td className="py-3 px-4 text-xs font-semibold text-slate-600">
                    {q.type.replace(/_/g, ' ')}
                  </td>
                  <td className="py-3 px-4 text-xs text-slate-700">
                    <span className="font-medium text-slate-800">{q.topic}</span>
                    <span className="text-slate-500 ml-1.5">({q.subtype})</span>
                    {wasEdited && (
                      <span className="ml-2 text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">
                        Edited
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {isAnswered ? (
                      <span className="inline-flex items-center text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                        Answered
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                        Unanswered
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {isBookmarked ? (
                      <span className="inline-flex items-center text-xs font-semibold text-amber-700 space-x-1">
                        <Bookmark size={13} className="fill-amber-500 text-amber-500" />
                        <span>Bookmarked</span>
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectQuestion(idx);
                      }}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onSelectQuestion(0)}
            className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center space-x-2 transition"
          >
            <ArrowLeft size={16} />
            <span>Return to Question 1</span>
          </button>

          {onExitToMenu && (
            <button
              onClick={onExitToMenu}
              className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg flex items-center space-x-1.5 transition cursor-pointer"
            >
              <LogOut size={15} />
              <span>Exit to Menu</span>
            </button>
          )}
        </div>

        <button
          onClick={onSubmitSection}
          className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md hover:shadow-lg flex items-center space-x-2 transition cursor-pointer"
        >
          <span>End Section & Submit</span>
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};
