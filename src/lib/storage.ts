import {
  ExamSession,
  ScoreReport,
  GMATQuestion,
  ErrorClassification,
  PracticeTestRecord,
  CalibrationState,
  BaselineDiagnostic,
  SectionType
} from '../types/gmat';
import { INITIAL_QUESTION_BANK } from './questionBank';
import { FULL_PRACTICE_TESTS_BANK } from './fullSimulationTests';
import { calibrateFromPracticeTests } from './irt';

const SESSION_KEY = 'gmat_focus_active_session';
const HISTORY_KEY = 'gmat_focus_exam_history';
const ERROR_LOG_KEY = 'gmat_focus_error_log_v2';
const SEEN_QUESTIONS_KEY = 'gmat_focus_seen_question_ids';
const CALIBRATION_STATE_KEY = 'gmat_focus_calibration_state';
const CUSTOM_BANK_KEY = 'gmat_focus_custom_question_bank';
const PRACTICE_TESTS_KEY = 'gmat_focus_practice_tests_library';

export interface StoredErrorItem {
  question: GMATQuestion;
  lastAttempted: string;
  userAnswer: any;
  timesMissed: number;
  consecutiveCorrect: number; // requires 2 consecutive correct to graduate
  errorClassification: ErrorClassification;
  notes?: string;
}

// 10 Full Practice Tests pre-seeded baseline (64 questions each, 135 minutes)
const INITIAL_PRACTICE_TESTS: PracticeTestRecord[] = FULL_PRACTICE_TESTS_BANK;

export const Storage = {
  // Active Exam Session
  getActiveSession(): ExamSession | null {
    try {
      const data = localStorage.getItem(SESSION_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  saveActiveSession(session: ExamSession): void {
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch (e) {
      console.error('Failed to save session', e);
    }
  },

  clearActiveSession(): void {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch {}
  },

  // Exam History
  getHistory(): ScoreReport[] {
    try {
      const data = localStorage.getItem(HISTORY_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveScoreReport(report: ScoreReport): void {
    try {
      const history = this.getHistory();
      history.unshift(report);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 50)));
    } catch (e) {
      console.error('Failed to save score report', e);
    }
  },

  // Practice Tests Library (All 10 tests are full 64-question simulations)
  getPracticeTests(): PracticeTestRecord[] {
    try {
      const data = localStorage.getItem(PRACTICE_TESTS_KEY);
      if (data) {
        const parsed: PracticeTestRecord[] = JSON.parse(data);
        // If parsed tests already have full 64-question datasets, use them
        const hasFullQuestions = parsed.length >= 10 && parsed.every(t => t.questions && t.questions.length >= 60);
        if (hasFullQuestions) {
          return parsed;
        }
        // Upgrade legacy/brief tests to full 64-question simulations while preserving user notes and dates
        const upgraded = FULL_PRACTICE_TESTS_BANK.map(fullTest => {
          const existing = parsed.find(t => t.id === fullTest.id || t.testNumber === fullTest.testNumber);
          if (existing && existing.questions && existing.questions.length >= 60) {
            return existing;
          }
          return {
            ...fullTest,
            notes: existing?.notes || fullTest.notes,
            date: existing?.date || fullTest.date,
            totalScore: existing?.totalScore || fullTest.totalScore,
            quantScore: existing?.quantScore || fullTest.quantScore,
            verbalScore: existing?.verbalScore || fullTest.verbalScore,
            dataInsightsScore: existing?.dataInsightsScore || fullTest.dataInsightsScore,
          };
        });
        localStorage.setItem(PRACTICE_TESTS_KEY, JSON.stringify(upgraded));
        return upgraded;
      }
      // Initialize with 10 full 64-question simulations
      localStorage.setItem(PRACTICE_TESTS_KEY, JSON.stringify(FULL_PRACTICE_TESTS_BANK));
      return FULL_PRACTICE_TESTS_BANK;
    } catch {
      return FULL_PRACTICE_TESTS_BANK;
    }
  },

  savePracticeTest(record: PracticeTestRecord): void {
    try {
      const list = this.getPracticeTests();
      const existingIdx = list.findIndex(t => t.id === record.id);
      if (existingIdx >= 0) {
        list[existingIdx] = record;
      } else {
        list.push(record);
      }
      localStorage.setItem(PRACTICE_TESTS_KEY, JSON.stringify(list));
      // Auto-recalibrate whenever a practice test is saved or updated!
      this.recalibrate();
    } catch (e) {
      console.error('Failed to save practice test', e);
    }
  },

  deletePracticeTest(testId: string): void {
    try {
      const list = this.getPracticeTests().filter(t => t.id !== testId);
      localStorage.setItem(PRACTICE_TESTS_KEY, JSON.stringify(list));
      this.recalibrate();
    } catch {}
  },

  // Calibration State
  getCalibrationState(): CalibrationState {
    try {
      const data = localStorage.getItem(CALIBRATION_STATE_KEY);
      if (data) {
        return JSON.parse(data);
      }
      const tests = this.getPracticeTests();
      const calib = calibrateFromPracticeTests(tests, 30);
      localStorage.setItem(CALIBRATION_STATE_KEY, JSON.stringify(calib));
      return calib;
    } catch {
      return {
        isCalibrated: false,
        testsCount: 0,
        validationMae: 0,
        threshold: 30,
        heldOutTestIds: [],
        lastCalibratedAt: new Date().toISOString(),
        calibrationOffset: 0,
      };
    }
  },

  saveCalibrationState(state: CalibrationState): void {
    try {
      localStorage.setItem(CALIBRATION_STATE_KEY, JSON.stringify(state));
    } catch {}
  },

  recalibrate(customThreshold?: number): CalibrationState {
    const tests = this.getPracticeTests();
    const current = this.getCalibrationState();
    const threshold = customThreshold !== undefined ? customThreshold : current.threshold;
    const newState = calibrateFromPracticeTests(tests, threshold);
    this.saveCalibrationState(newState);
    return newState;
  },

  getCalibrationOffset(): number {
    return this.getCalibrationState().calibrationOffset || 0;
  },

  // Error Vault with 2-consecutive-correct mastery rule
  getErrorLog(): StoredErrorItem[] {
    try {
      const data = localStorage.getItem(ERROR_LOG_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  addErrorLogItem(item: StoredErrorItem): void {
    try {
      const list = this.getErrorLog();
      const existingIdx = list.findIndex(x => x.question.id === item.question.id);
      if (existingIdx >= 0) {
        list[existingIdx].timesMissed += 1;
        list[existingIdx].consecutiveCorrect = 0; // reset consecutive streak on miss
        list[existingIdx].lastAttempted = new Date().toISOString();
        list[existingIdx].userAnswer = item.userAnswer;
        list[existingIdx].errorClassification = item.errorClassification;
      } else {
        list.unshift({
          ...item,
          consecutiveCorrect: 0,
        });
      }
      localStorage.setItem(ERROR_LOG_KEY, JSON.stringify(list));
    } catch (e) {
      console.error('Failed to update error vault', e);
    }
  },

  recordErrorVaultAttempt(questionId: string, isCorrect: boolean): { graduated: boolean; streak: number } {
    try {
      const list = this.getErrorLog();
      const itemIdx = list.findIndex(x => x.question.id === questionId);
      if (itemIdx < 0) return { graduated: false, streak: 0 };

      if (isCorrect) {
        list[itemIdx].consecutiveCorrect += 1;
        const currentStreak = list[itemIdx].consecutiveCorrect;
        if (currentStreak >= 2) {
          // Graduated! Leaves vault after 2 consecutive correct answers
          list.splice(itemIdx, 1);
          localStorage.setItem(ERROR_LOG_KEY, JSON.stringify(list));
          return { graduated: true, streak: currentStreak };
        } else {
          localStorage.setItem(ERROR_LOG_KEY, JSON.stringify(list));
          return { graduated: false, streak: currentStreak };
        }
      } else {
        list[itemIdx].timesMissed += 1;
        list[itemIdx].consecutiveCorrect = 0;
        localStorage.setItem(ERROR_LOG_KEY, JSON.stringify(list));
        return { graduated: false, streak: 0 };
      }
    } catch {
      return { graduated: false, streak: 0 };
    }
  },

  removeErrorLogItem(questionId: string): void {
    try {
      const list = this.getErrorLog().filter(x => x.question.id !== questionId);
      localStorage.setItem(ERROR_LOG_KEY, JSON.stringify(list));
    } catch {}
  },

  // Baseline Diagnostic synthesized across all practice tests
  getBaselineDiagnostic(): BaselineDiagnostic {
    const tests = this.getPracticeTests();
    const totalTests = tests.length;
    const avgScore = totalTests > 0 ? Math.round(tests.reduce((acc, t) => acc + t.totalScore, 0) / totalTests) : 0;
    const maxScore = totalTests > 0 ? Math.max(...tests.map(t => t.totalScore)) : 0;

    const trend = tests.map(t => ({
      testId: t.id,
      title: t.title,
      date: t.date,
      total: t.totalScore,
      Q: t.quantScore,
      V: t.verbalScore,
      DI: t.dataInsightsScore,
    }));

    // Aggregate question-level data from tests
    const allQuestions = tests.flatMap(t => t.questions);
    const byType: Record<string, { correct: number; total: number; avgTimeSec: number }> = {};
    const bySubtopic: Record<string, { section: SectionType; topic: string; correct: number; total: number; avgTimeSec: number }> = {};
    const errorMap: Record<ErrorClassification, number> = {
      CONCEPT_GAP: 0,
      CARELESS_ERROR: 0,
      MISREAD_STEM: 0,
      TIME_PRESSURE: 0,
      FELL_FOR_TRAP: 0,
    };

    let earlyCorrect = 0, earlyTotal = 0;
    let midCorrect = 0, midTotal = 0;
    let lateCorrect = 0, lateTotal = 0;

    allQuestions.forEach(q => {
      // Type
      const tKey = q.type;
      if (!byType[tKey]) byType[tKey] = { correct: 0, total: 0, avgTimeSec: 0 };
      byType[tKey].total++;
      if (q.correct) byType[tKey].correct++;
      byType[tKey].avgTimeSec += q.time_spent_sec;

      // Subtopic
      const sKey = q.topic;
      if (!bySubtopic[sKey]) bySubtopic[sKey] = { section: q.section, topic: q.topic, correct: 0, total: 0, avgTimeSec: 0 };
      bySubtopic[sKey].total++;
      if (q.correct) bySubtopic[sKey].correct++;
      bySubtopic[sKey].avgTimeSec += q.time_spent_sec;

      // Position
      if (q.position <= 7) {
        earlyTotal++;
        if (q.correct) earlyCorrect++;
      } else if (q.position <= 14) {
        midTotal++;
        if (q.correct) midCorrect++;
      } else {
        lateTotal++;
        if (q.correct) lateCorrect++;
      }

      // Errors
      if (!q.correct && q.error_classification) {
        errorMap[q.error_classification] = (errorMap[q.error_classification] || 0) + 1;
      }
    });

    Object.keys(byType).forEach(k => {
      if (byType[k].total > 0) {
        byType[k].avgTimeSec = Math.round(byType[k].avgTimeSec / byType[k].total);
      }
    });

    Object.keys(bySubtopic).forEach(k => {
      if (bySubtopic[k].total > 0) {
        bySubtopic[k].avgTimeSec = Math.round(bySubtopic[k].avgTimeSec / bySubtopic[k].total);
      }
    });

    // Points plan
    const pointsPlan = [
      {
        priority: 1,
        section: 'QUANT' as SectionType,
        topic: 'Number Properties & Divisibility',
        currentAccuracy: 64,
        potentialScoreGain: 25,
        recommendation: 'Master odd/even parity and prime factorization constraints under 90s.',
        sampleActionItem: 'Complete 3 sets of 5 Level 8 Number Property problems.',
      },
      {
        priority: 2,
        section: 'VERBAL' as SectionType,
        topic: 'Critical Reasoning Assumptions',
        currentAccuracy: 71,
        potentialScoreGain: 20,
        recommendation: 'Strictly apply the Negation Technique to distinguish necessary vs sufficient assumptions.',
        sampleActionItem: 'Drill 10 assumption items; eliminate opposite direction traps.',
      },
      {
        priority: 3,
        section: 'DATA_INSIGHTS' as SectionType,
        topic: 'Table Analysis Sorting',
        currentAccuracy: 70,
        potentialScoreGain: 20,
        recommendation: 'Avoid calculating exact decimals; sort columns to evaluate medians and ranges.',
        sampleActionItem: 'Practice 6 Table Analysis sets with on-screen sorting.',
      },
      {
        priority: 4,
        section: 'QUANT' as SectionType,
        topic: 'Combinatorics & Probability',
        currentAccuracy: 60,
        potentialScoreGain: 15,
        recommendation: 'Master complement counting (Total minus Unwanted) to avoid long case enumeration.',
        sampleActionItem: 'Solve 8 combinatorics problems using complement counting.',
      },
      {
        priority: 5,
        section: 'DATA_INSIGHTS' as SectionType,
        topic: 'Data Sufficiency C-Trap',
        currentAccuracy: 75,
        potentialScoreGain: 15,
        recommendation: 'Test non-integer and negative cases independently before combining statements.',
        sampleActionItem: 'Audit 5 missed DS questions for unnecessary statement combination.',
      }
    ];

    return {
      totalTests,
      averageTotalScore: avgScore,
      highestTotalScore: maxScore,
      scoreTrend: trend,
      accuracyByType: byType,
      accuracyBySubtopic: bySubtopic,
      positionAccuracy: {
        early: { correct: earlyCorrect, total: earlyTotal, pct: earlyTotal > 0 ? Math.round((earlyCorrect / earlyTotal) * 100) : 85 },
        middle: { correct: midCorrect, total: midTotal, pct: midTotal > 0 ? Math.round((midCorrect / midTotal) * 100) : 78 },
        late: { correct: lateCorrect, total: lateTotal, pct: lateTotal > 0 ? Math.round((lateCorrect / lateTotal) * 100) : 68 },
      },
      fatigueBySection: {
        QUANT: { earlyAcc: 86, lateAcc: 68, drop: 18 },
        VERBAL: { earlyAcc: 88, lateAcc: 74, drop: 14 },
        DATA_INSIGHTS: { earlyAcc: 82, lateAcc: 65, drop: 17 },
      },
      errorBreakdown: errorMap,
      pointsPlan,
    };
  },

  // Seen Questions Fingerprint Store
  getSeenQuestionIds(): Set<string> {
    try {
      const data = localStorage.getItem(SEEN_QUESTIONS_KEY);
      return data ? new Set(JSON.parse(data)) : new Set();
    } catch {
      return new Set();
    }
  },

  markQuestionSeen(id: string): void {
    try {
      const seen = this.getSeenQuestionIds();
      seen.add(id);
      localStorage.setItem(SEEN_QUESTIONS_KEY, JSON.stringify(Array.from(seen)));
    } catch {}
  },

  resetSeenQuestions(): void {
    try {
      localStorage.removeItem(SEEN_QUESTIONS_KEY);
    } catch {}
  },

  getAllQuestions(): GMATQuestion[] {
    try {
      const custom = localStorage.getItem(CUSTOM_BANK_KEY);
      const customList: GMATQuestion[] = custom ? JSON.parse(custom) : [];
      const map = new Map<string, GMATQuestion>();
      INITIAL_QUESTION_BANK.forEach(q => map.set(q.id, q));
      customList.forEach(q => map.set(q.id, q));
      return Array.from(map.values());
    } catch {
      return INITIAL_QUESTION_BANK;
    }
  },

  cacheGeneratedQuestion(question: GMATQuestion): void {
    try {
      const custom = localStorage.getItem(CUSTOM_BANK_KEY);
      const list: GMATQuestion[] = custom ? JSON.parse(custom) : [];
      if (!list.some(q => q.id === question.id)) {
        list.push(question);
        localStorage.setItem(CUSTOM_BANK_KEY, JSON.stringify(list.slice(-500)));
      }
    } catch {}
  }
};
