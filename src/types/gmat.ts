export type SectionType = 'QUANT' | 'VERBAL' | 'DATA_INSIGHTS';

export type SectionOrder = 
  | ['QUANT', 'VERBAL', 'DATA_INSIGHTS']
  | ['QUANT', 'DATA_INSIGHTS', 'VERBAL']
  | ['VERBAL', 'QUANT', 'DATA_INSIGHTS']
  | ['VERBAL', 'DATA_INSIGHTS', 'QUANT']
  | ['DATA_INSIGHTS', 'QUANT', 'VERBAL']
  | ['DATA_INSIGHTS', 'VERBAL', 'QUANT'];

export type QuestionType =
  // Quant
  | 'PROBLEM_SOLVING'
  // Verbal
  | 'CRITICAL_REASONING'
  | 'READING_COMPREHENSION'
  // Data Insights
  | 'DATA_SUFFICIENCY'
  | 'MULTI_SOURCE_REASONING'
  | 'TABLE_ANALYSIS'
  | 'GRAPHICS_INTERPRETATION'
  | 'TWO_PART_ANALYSIS';

export type QuantTopic =
  | 'Number Properties & Divisibility'
  | 'Algebra & Exponents'
  | 'Word Problems & Rates/Work'
  | 'Percents, Ratios & Mixtures'
  | 'Statistics & Standard Deviation'
  | 'Probability & Combinatorics'
  | 'Inequalities & Absolute Values'
  | 'Sequences & Series'
  | 'Coordinate & Analytical Geometry';

export type VerbalSubtype =
  // CR Subtypes
  | 'Strengthen'
  | 'Weaken'
  | 'Assumption'
  | 'Inference'
  | 'Evaluate'
  | 'Resolve Paradox'
  | 'Boldface Argument Structure'
  | 'Logical Flaw'
  // RC Subtypes
  | 'Main Idea'
  | 'Primary Purpose'
  | 'Inference'
  | 'Specific Detail'
  | 'Function & Structure'
  | 'Tone & Attitude'
  | 'Application & Analogy';

export type TrapType =
  | 'extreme_language' // "always", "never", "only"
  | 'out_of_scope'
  | 'opposite_direction' // strengthens when asked to weaken
  | 'partial_answer' // solving for x instead of 2x+1
  | 'c2_trap_ds' // assuming C when either statement is sufficient alone
  | 'number_property_edge_case' // forgetting negatives, zero, fractions
  | 'correlation_causation'
  | 'unit_mismatch'
  | 'misread_premise'
  | 'calculation_slip';

export type ErrorClassification =
  | 'CONCEPT_GAP'
  | 'CARELESS_ERROR'
  | 'MISREAD_STEM'
  | 'TIME_PRESSURE'
  | 'FELL_FOR_TRAP';

export interface MultiSourceTab {
  id: string;
  title: string;
  content: string;
}

export interface TableRow {
  [key: string]: string | number;
}

export interface TableAnalysisData {
  columns: string[];
  rows: TableRow[];
  dichotomousQuestion: string; // e.g. "For each of the following statements, select Yes if the statement can be deduced from the data; otherwise select No."
  statements: {
    id: string;
    text: string;
    correctOption: 'Yes' | 'No' | 'True' | 'False';
  }[];
}

export interface GraphicsData {
  chartType: 'bar' | 'scatter' | 'line' | 'table';
  title: string;
  dataPoints: Array<{ label: string; x?: number; y?: number; value?: number; series?: string }>;
  dropdownPrompts: {
    id: string;
    preText: string;
    options: string[];
    correctAnswer: string;
    postText: string;
  }[];
}

export interface TwoPartData {
  column1Header: string;
  column2Header: string;
  rows: {
    id: string;
    label: string;
  }[];
  correctCol1Id: string;
  correctCol2Id: string;
}

export interface GMATQuestion {
  id: string;
  section: SectionType;
  type: QuestionType;
  subtype: string;
  topic: string;
  difficulty: number; // 1-10 (calibrated against IRT b parameter from -2.5 to +2.5)
  discrimination?: number; // IRT a parameter (0.8 - 2.0)
  targetTimeSec: number; // e.g. 120s for Quant, 115s for Verbal, 135s for DI
  stem: string; // Question prompt
  passage?: string; // For RC
  msrTabs?: MultiSourceTab[]; // For MSR
  tableData?: TableAnalysisData; // For Table Analysis
  graphicsData?: GraphicsData; // For Graphics Interpretation
  twoPartData?: TwoPartData; // For Two-Part Analysis
  options: string[]; // Options A-E for standard multiple choice
  correctAnswer: string | number; // e.g. "B" or 1, or object for multi-part
  explanation: {
    stepByStep: string;
    shortcutMethod: string;
    trapExplained: string;
    commonWrongPaths: {
      choice: string;
      reason: string;
    }[];
  };
}

export interface QuestionResponse {
  questionId: string;
  userAnswer: any;
  isCorrect: boolean;
  timeSpentSec: number;
  bookmarked: boolean;
  wasEditedInReview: boolean;
  originalAnswer?: any;
  errorClassification?: ErrorClassification;
  notes?: string;
}

export interface SectionState {
  section: SectionType;
  questions: GMATQuestion[];
  responses: Record<string, QuestionResponse>;
  currentIndex: number;
  timeRemainingSec: number; // starts at 45 * 60 = 2700
  status: 'not_started' | 'in_progress' | 'review' | 'completed';
  editsRemaining: number; // starts at 3
  currentAbilityEstimate: number; // theta estimate (-3 to +3)
}

export interface ExamSession {
  id: string;
  createdAt: string;
  mode: 'FULL_MOCK' | 'SINGLE_SECTION' | 'TOPIC_DRILL' | 'TIMED_SPRINT' | 'ERROR_RETAKE';
  sectionOrder: SectionOrder | SectionType[];
  currentSectionIndex: number;
  difficultyDial: 'STANDARD' | 'HARD' | 'BEYOND_GMAT';
  sections: SectionState[];
  breakRemainingSec?: number;
  isCompleted: boolean;
  scoreReport?: ScoreReport;
}

export interface ScoreReport {
  totalScore: number; // estimated midpoint (e.g. 685)
  scoreRangeLow: number; // e.g. 665
  scoreRangeHigh: number; // e.g. 705
  scoreRangeFormatted: string; // e.g. "Estimated 685, likely 665–705"
  totalPercentile: number;
  isPercentileVerified?: boolean;
  quantScore: number; // 60-90
  quantPercentile: number;
  verbalScore: number; // 60-90
  verbalPercentile: number;
  dataInsightsScore: number; // 60-90
  dataInsightsPercentile: number;
  totalTimeSpentSec: number;
  completedAt: string;
  isCalibrated: boolean;
  calibrationMae?: number;
  
  // Analytics
  sectionAnalytics: {
    [key in SectionType]?: {
      score: number;
      scoreRangeLow?: number;
      scoreRangeHigh?: number;
      percentile: number;
      accuracy: number;
      totalQuestions: number;
      correctCount: number;
      avgTimePerQuestion: number;
      targetTime: number;
      timeSinksCount: number; // questions > target + 60s
      fatigueDrop: number; // % drop in accuracy in last third
      difficultyCurve: { index: number; difficulty: number; isCorrect: boolean; time: number }[];
      topicAccuracy: { topic: string; correct: number; total: number; percentage: number }[];
      errorBreakdown: Record<ErrorClassification, number>;
    };
  };

  // 705+ Points Plan
  pointsPlan: {
    priority: number;
    section: SectionType;
    topic: string;
    currentAccuracy: number;
    potentialScoreGain: number; // Estimated points gain
    recommendation: string;
    sampleActionItem: string;
  }[];

  fourteenDayPlan: {
    day: number;
    focus: string;
    activities: string[];
    targetMetric: string;
  }[];
}

export interface ImportedTestQuestion {
  id: string;
  test_id: string;
  section: SectionType;
  position: number;
  type: QuestionType;
  subtype: string;
  topic: string;
  stem: string;
  passage?: string;
  options: string[];
  official_answer: string;
  my_answer: string;
  correct: boolean;
  time_spent_sec: number;
  flagged: boolean;
  notes?: string;
  trap_type?: string;
  error_classification?: ErrorClassification;
  isReviewed: boolean;
}

export interface PracticeTestRecord {
  id: string;
  testNumber: number;
  title: string;
  date: string;
  totalScore: number;
  quantScore: number;
  verbalScore: number;
  dataInsightsScore: number;
  isHeldOutForValidation: boolean;
  isReviewed: boolean;
  notes?: string;
  questions: ImportedTestQuestion[];
}

export interface CalibrationState {
  isCalibrated: boolean;
  testsCount: number;
  validationMae: number; // Mean Absolute Error in points on held-out tests
  threshold: number; // default 30 points
  heldOutTestIds: string[];
  lastCalibratedAt: string;
  calibrationOffset: number;
}

export interface BaselineDiagnostic {
  totalTests: number;
  averageTotalScore: number;
  highestTotalScore: number;
  scoreTrend: {
    testId: string;
    title: string;
    date: string;
    total: number;
    Q: number;
    V: number;
    DI: number;
  }[];
  accuracyByType: Record<string, { correct: number; total: number; avgTimeSec: number }>;
  accuracyBySubtopic: Record<string, { section: SectionType; topic: string; correct: number; total: number; avgTimeSec: number }>;
  positionAccuracy: {
    early: { correct: number; total: number; pct: number }; // Q1-7
    middle: { correct: number; total: number; pct: number }; // Q8-14
    late: { correct: number; total: number; pct: number }; // Q15+
  };
  fatigueBySection: Record<SectionType, { earlyAcc: number; lateAcc: number; drop: number }>;
  errorBreakdown: Record<ErrorClassification, number>;
  pointsPlan: ScoreReport['pointsPlan'];
}

export interface UserStats {
  totalTestsTaken: number;
  averageScore: number;
  highestScore: number;
  targetScore: number;
  errorLog: {
    question: GMATQuestion;
    lastAttempted: string;
    timesMissed: number;
    consecutiveCorrect: number;
    errorType: ErrorClassification;
  }[];
  officialScoreCalibrationOffset: number;
}
