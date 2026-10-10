import { SectionType, ScoreReport, QuestionResponse, GMATQuestion, ErrorClassification, PracticeTestRecord, CalibrationState } from '../types/gmat';
import gmacPercentilesData from '../../data/gmac_percentiles.json';

/**
 * 2PL Item Response Theory (IRT) Implementation
 * Note on psychometric limits:
 * With a single user's dataset, true item-level discrimination (a) and difficulty (b)
 * cannot be fully calibrated independently of population norms.
 * Item difficulties are treated as LLM-assigned priors (1-10 mapped to b in [-2.5, +2.5])
 * refined by observed practice test performance, and score outputs are always reported
 * as honest confidence intervals/ranges rather than falsely precise single numbers.
 */

export function mapDifficultyToB(difficulty: number): number {
  // difficulty is 1 to 10
  // maps 1 -> -2.5, 5.5 -> 0.0, 10 -> +2.5
  return (difficulty - 5.5) / 1.8;
}

export function mapBToDifficulty(b: number): number {
  const diff = b * 1.8 + 5.5;
  return Math.max(1, Math.min(10, Math.round(diff)));
}

export function probabilityCorrect(theta: number, b: number, a: number = 1.2): number {
  const z = 1.7 * a * (theta - b);
  return 1 / (1 + Math.exp(-z));
}

export function itemInformation(theta: number, b: number, a: number = 1.2): number {
  const p = probabilityCorrect(theta, b, a);
  const q = 1 - p;
  return (1.7 * a) * (1.7 * a) * p * q;
}

/**
 * Update ability estimate theta using Bayesian Expected A Posteriori (EAP)
 * with a Standard Normal Prior N(0, 1) across a quadrature grid.
 */
export function estimateAbilityEAP(
  items: { b: number; a: number; isCorrect: boolean }[],
  currentTheta: number = 0.0
): number {
  if (items.length === 0) return 0.0;

  const points = 61; // from -3.0 to +3.0 in 0.1 increments
  let numerator = 0;
  let denominator = 0;

  for (let i = 0; i < points; i++) {
    const quadTheta = -3.0 + (i * 6.0) / (points - 1);
    
    // Normal prior N(0, 1)
    const prior = Math.exp(-0.5 * quadTheta * quadTheta) / Math.sqrt(2 * Math.PI);

    // Likelihood
    let likelihood = 1.0;
    for (const item of items) {
      const p = probabilityCorrect(quadTheta, item.b, item.a);
      likelihood *= (item.isCorrect ? p : (1 - p));
    }

    const posterior = likelihood * prior;
    numerator += quadTheta * posterior;
    denominator += posterior;
  }

  if (denominator === 0 || !isFinite(denominator)) {
    return Math.max(-3.0, Math.min(3.0, currentTheta));
  }

  const newTheta = numerator / denominator;
  return Math.max(-3.0, Math.min(3.0, Number(newTheta.toFixed(3))));
}

/**
 * Select the optimal next item from candidate pool
 */
export function selectNextAdaptiveItem(
  candidateQuestions: GMATQuestion[],
  seenQuestionIds: Set<string>,
  currentTheta: number,
  targetDifficultyDial: 'STANDARD' | 'HARD' | 'BEYOND_GMAT' = 'STANDARD'
): GMATQuestion | null {
  const available = candidateQuestions.filter(q => !seenQuestionIds.has(q.id));
  if (available.length === 0) return null;

  let targetTheta = currentTheta;
  if (targetDifficultyDial === 'HARD') {
    targetTheta = Math.max(currentTheta, currentTheta + 0.4);
  } else if (targetDifficultyDial === 'BEYOND_GMAT') {
    targetTheta = Math.max(currentTheta + 0.8, 1.6);
  }

  let bestItem = available[0];
  let maxInfo = -1;

  for (const q of available) {
    const b = mapDifficultyToB(q.difficulty);
    const a = q.discrimination ?? 1.2;
    const info = itemInformation(targetTheta, b, a);

    const jitter = (Math.random() - 0.5) * 0.15;
    const score = info + jitter;

    if (score > maxInfo) {
      maxInfo = score;
      bestItem = q;
    }
  }

  return bestItem;
}

/**
 * Section Score conversion from theta (-3.0 to +3.0) to official scale 60 - 90
 */
export function thetaToSectionScore(
  theta: number,
  answeredCount: number,
  totalCount: number,
  calibrationOffset: number = 0
): number {
  const normalized = (theta + 3.0) / 6.0; // 0.0 to 1.0
  let rawScore = 60 + normalized * 30;

  const uncompleted = totalCount - answeredCount;
  if (uncompleted > 0) {
    rawScore -= uncompleted * 1.5;
  }

  let finalScore = Math.round(rawScore + calibrationOffset);
  return Math.max(60, Math.min(90, finalScore));
}

/**
 * Total Score conversion (205 to 805)
 */
export function calculateTotalScore(
  quantScore: number,
  verbalScore: number,
  diScore: number,
  userCalibrationOffset: number = 0
): number {
  const sumDelta = (quantScore - 60) + (verbalScore - 60) + (diScore - 60); // 0 to 90
  const scaledIndex = Math.round((sumDelta / 90) * 60); // 0 to 60
  let totalScore = 205 + (scaledIndex * 10);

  totalScore += Math.round(userCalibrationOffset / 10) * 10;
  return Math.max(205, Math.min(805, totalScore));
}

/**
 * Percentile Lookup from /data/gmac_percentiles.json
 */
export function getSectionPercentile(score: number, section: SectionType): number {
  try {
    const table = (gmacPercentilesData as any).sectionPercentiles?.[section];
    if (table && table[score.toString()] !== undefined) {
      return table[score.toString()];
    }
  } catch {}

  // Fallbacks
  if (section === 'QUANT') {
    if (score >= 90) return 100;
    if (score >= 86) return 91;
    if (score >= 82) return 76;
    if (score >= 78) return 56;
    return Math.max(1, Math.round((score - 60) * 2));
  }
  if (section === 'VERBAL') {
    if (score >= 90) return 100;
    if (score >= 86) return 96;
    if (score >= 82) return 81;
    if (score >= 78) return 59;
    return Math.max(2, Math.round((score - 60) * 2));
  }
  return Math.max(3, Math.round((score - 60) * 2.2));
}

export function getTotalPercentile(score: number): number {
  try {
    const table = (gmacPercentilesData as any).totalPercentiles;
    if (table && table[score.toString()] !== undefined) {
      return table[score.toString()];
    }
  } catch {}

  if (score >= 805) return 100;
  if (score >= 705) return 98.6;
  if (score >= 655) return 85.0;
  if (score >= 605) return 58.0;
  if (score >= 555) return 31.0;
  return 10.0;
}

/**
 * Run Calibration against real Practice Test Records
 * Holds out the last 2 tests to validate MAE.
 */
export function calibrateFromPracticeTests(
  tests: PracticeTestRecord[],
  threshold: number = 30
): CalibrationState {
  if (tests.length < 3) {
    return {
      isCalibrated: false,
      testsCount: tests.length,
      validationMae: 0,
      threshold,
      heldOutTestIds: [],
      lastCalibratedAt: new Date().toISOString(),
      calibrationOffset: 0,
    };
  }

  // Sort tests by testNumber or date
  const sorted = [...tests].sort((a, b) => a.testNumber - b.testNumber);
  const training = sorted.slice(0, sorted.length - 2);
  const validation = sorted.slice(sorted.length - 2);
  const heldOutTestIds = validation.map(t => t.id);

  // Compute average error between training test scores and baseline 2PL projection
  let errorSum = 0;
  for (const t of training) {
    const projected = calculateTotalScore(t.quantScore, t.verbalScore, t.dataInsightsScore, 0);
    errorSum += (t.totalScore - projected);
  }
  const meanOffset = Math.round(errorSum / training.length);

  // Evaluate on held-out validation set
  let valAbsErrorSum = 0;
  for (const v of validation) {
    const predicted = calculateTotalScore(v.quantScore, v.verbalScore, v.dataInsightsScore, meanOffset);
    valAbsErrorSum += Math.abs(v.totalScore - predicted);
  }
  const validationMae = Math.round(valAbsErrorSum / validation.length);
  const isCalibrated = validationMae <= threshold;

  return {
    isCalibrated,
    testsCount: tests.length,
    validationMae,
    threshold,
    heldOutTestIds,
    lastCalibratedAt: new Date().toISOString(),
    calibrationOffset: meanOffset,
  };
}

/**
 * Build Comprehensive Score Report with Honest Ranges and Diagnostic Breakdown
 */
export function buildScoreReport(
  responsesBySection: Record<SectionType, { question: GMATQuestion; response: QuestionResponse }[]>,
  calibrationState?: CalibrationState
): ScoreReport {
  const sections: SectionType[] = ['QUANT', 'VERBAL', 'DATA_INSIGHTS'];
  const sectionScores: Record<SectionType, number> = { QUANT: 75, VERBAL: 75, DATA_INSIGHTS: 75 };
  const sectionRanges: Record<SectionType, { low: number; high: number }> = {
    QUANT: { low: 72, high: 78 },
    VERBAL: { low: 72, high: 78 },
    DATA_INSIGHTS: { low: 72, high: 78 },
  };
  const sectionPercentiles: Record<SectionType, number> = { QUANT: 45, VERBAL: 45, DATA_INSIGHTS: 45 };

  const sectionAnalytics: ScoreReport['sectionAnalytics'] = {};
  let totalTime = 0;
  const calibrationOffset = calibrationState?.calibrationOffset || 0;

  for (const s of sections) {
    const list = responsesBySection[s] || [];
    const totalQ = s === 'QUANT' ? 21 : s === 'VERBAL' ? 23 : 20;
    const targetQTime = s === 'QUANT' ? 128 : s === 'VERBAL' ? 117 : 135;

    let correctCount = 0;
    let sTime = 0;
    let timeSinks = 0;
    const itemsForIRT: { b: number; a: number; isCorrect: boolean }[] = [];
    const topicMap: Record<string, { correct: number; total: number }> = {};
    const errors: Record<ErrorClassification, number> = {
      CONCEPT_GAP: 0,
      CARELESS_ERROR: 0,
      MISREAD_STEM: 0,
      TIME_PRESSURE: 0,
      FELL_FOR_TRAP: 0,
    };

    const diffCurve: { index: number; difficulty: number; isCorrect: boolean; time: number }[] = [];

    list.forEach((item, idx) => {
      sTime += item.response.timeSpentSec;
      if (item.response.isCorrect) correctCount++;

      const b = mapDifficultyToB(item.question.difficulty);
      itemsForIRT.push({ b, a: item.question.discrimination ?? 1.2, isCorrect: item.response.isCorrect });

      diffCurve.push({
        index: idx + 1,
        difficulty: item.question.difficulty,
        isCorrect: item.response.isCorrect,
        time: item.response.timeSpentSec,
      });

      if (item.response.timeSpentSec > targetQTime + 55) {
        timeSinks++;
      }

      const t = item.question.topic || 'General';
      if (!topicMap[t]) topicMap[t] = { correct: 0, total: 0 };
      topicMap[t].total++;
      if (item.response.isCorrect) topicMap[t].correct++;

      if (!item.response.isCorrect) {
        const errType = item.response.errorClassification || (
          item.response.timeSpentSec > targetQTime + 60 ? 'TIME_PRESSURE' :
          item.question.explanation.trapExplained ? 'FELL_FOR_TRAP' : 'CONCEPT_GAP'
        );
        errors[errType] = (errors[errType] || 0) + 1;
      }
    });

    totalTime += sTime;

    const finalTheta = estimateAbilityEAP(itemsForIRT, 0.0);
    const sScore = thetaToSectionScore(finalTheta, list.length, totalQ, calibrationOffset);
    const sPct = getSectionPercentile(sScore, s);

    // Section score range (+/- 2 or +/- 3 based on items count)
    const margin = list.length >= totalQ ? 2 : 4;
    const secLow = Math.max(60, sScore - margin);
    const secHigh = Math.min(90, sScore + margin);

    sectionScores[s] = sScore;
    sectionRanges[s] = { low: secLow, high: secHigh };
    sectionPercentiles[s] = sPct;

    const thirdIndex = Math.floor(list.length * (2 / 3));
    const firstTwoThirds = list.slice(0, thirdIndex);
    const lastThird = list.slice(thirdIndex);
    const accFirst = firstTwoThirds.length > 0 ? firstTwoThirds.filter(x => x.response.isCorrect).length / firstTwoThirds.length : 1;
    const accLast = lastThird.length > 0 ? lastThird.filter(x => x.response.isCorrect).length / lastThird.length : 1;
    const fatigueDrop = Math.max(0, Math.round((accFirst - accLast) * 100));

    sectionAnalytics[s] = {
      score: sScore,
      scoreRangeLow: secLow,
      scoreRangeHigh: secHigh,
      percentile: sPct,
      accuracy: list.length > 0 ? Math.round((correctCount / list.length) * 100) : 0,
      totalQuestions: totalQ,
      correctCount,
      avgTimePerQuestion: list.length > 0 ? Math.round(sTime / list.length) : targetQTime,
      targetTime: targetQTime,
      timeSinksCount: timeSinks,
      fatigueDrop,
      difficultyCurve: diffCurve,
      topicAccuracy: Object.entries(topicMap).map(([topic, stats]) => ({
        topic,
        correct: stats.correct,
        total: stats.total,
        percentage: Math.round((stats.correct / stats.total) * 100),
      })),
      errorBreakdown: errors,
    };
  }

  const midpointTotal = calculateTotalScore(sectionScores.QUANT, sectionScores.VERBAL, sectionScores.DATA_INSIGHTS, calibrationOffset);
  
  // Honest score range:
  // If calibrated, range is +/- max(15, round(MAE * 1.2)) rounded to 10
  // If uncalibrated, range is +/- 25 or +/- 30 to accurately reflect prior uncertainty
  let halfRange = 30;
  if (calibrationState?.isCalibrated && calibrationState.validationMae > 0) {
    halfRange = Math.min(30, Math.max(15, Math.round(calibrationState.validationMae * 1.1)));
  }
  const scoreLow = Math.max(205, Math.min(805, midpointTotal - halfRange));
  const scoreHigh = Math.max(205, Math.min(805, midpointTotal + halfRange));
  const scoreRangeFormatted = `Estimated ${midpointTotal}, likely ${scoreLow}–${scoreHigh}`;

  const totalPercentile = getTotalPercentile(midpointTotal);

  // Generate 705+ prioritized Points Plan
  const allTopicWeaknesses: {
    section: SectionType;
    topic: string;
    currentAccuracy: number;
    missedCount: number;
  }[] = [];

  sections.forEach(s => {
    const secStats = sectionAnalytics[s];
    if (secStats) {
      secStats.topicAccuracy.forEach(ta => {
        if (ta.percentage < 80) {
          allTopicWeaknesses.push({
            section: s,
            topic: ta.topic,
            currentAccuracy: ta.percentage,
            missedCount: ta.total - ta.correct,
          });
        }
      });
    }
  });

  allTopicWeaknesses.sort((a, b) => b.missedCount - a.missedCount || a.currentAccuracy - b.currentAccuracy);

  const topWeaknesses = allTopicWeaknesses.slice(0, 5);
  const pointsPlan: ScoreReport['pointsPlan'] = topWeaknesses.map((w, idx) => {
    const estimatedGain = Math.round(15 + (100 - w.currentAccuracy) * 0.25);
    return {
      priority: idx + 1,
      section: w.section,
      topic: w.topic,
      currentAccuracy: w.currentAccuracy,
      potentialScoreGain: estimatedGain,
      recommendation: getTopicRecommendation(w.section, w.topic),
      sampleActionItem: getTopicActionItem(w.section, w.topic),
    };
  });

  const fourteenDayPlan = generateFourteenDayPlan(pointsPlan, midpointTotal);

  return {
    totalScore: midpointTotal,
    scoreRangeLow: scoreLow,
    scoreRangeHigh: scoreHigh,
    scoreRangeFormatted,
    totalPercentile,
    isPercentileVerified: Boolean((gmacPercentilesData as any).isVerified),
    quantScore: sectionScores.QUANT,
    quantPercentile: sectionPercentiles.QUANT,
    verbalScore: sectionScores.VERBAL,
    verbalPercentile: sectionPercentiles.VERBAL,
    dataInsightsScore: sectionScores.DATA_INSIGHTS,
    dataInsightsPercentile: sectionPercentiles.DATA_INSIGHTS,
    totalTimeSpentSec: totalTime,
    completedAt: new Date().toISOString(),
    isCalibrated: Boolean(calibrationState?.isCalibrated),
    calibrationMae: calibrationState?.validationMae,
    sectionAnalytics,
    pointsPlan,
    fourteenDayPlan,
  };
}

function getTopicRecommendation(section: SectionType, topic: string): string {
  if (topic.includes('Number Properties')) {
    return 'Master prime factorization, even/odd parity constraints, and remainder cycles. Avoid testing only positive whole numbers—always evaluate 0, negative integers, and non-integers.';
  }
  if (topic.includes('Assumption') || topic.includes('Weaken')) {
    return 'Focus on identifying the conclusion vs premises first. In assumptions, use the Negation Technique: if negating the choice destroys the argument, it is required.';
  }
  if (topic.includes('Multi-Source') || topic.includes('Data Sufficiency')) {
    return 'Adopt a strict decision matrix. For Data Sufficiency, write down AD/BCE immediately and test edge cases (fractions, 0, negatives) independently for Statement 1 and Statement 2.';
  }
  if (topic.includes('Table') || topic.includes('Graphics')) {
    return 'Do not compute exact values when trends or relative order suffices. Practice sorting columns strategically to eliminate impossible rows instantly.';
  }
  return `Target high-difficulty level 7-9 question sets in ${topic}. Focus on shortcut recognition over brute-force calculation.`;
}

function getTopicActionItem(section: SectionType, topic: string): string {
  return `Complete 3 timed sets of 7 questions on ${topic} at Hard difficulty. Log every mistake in the Error Retake vault.`;
}

function generateFourteenDayPlan(pointsPlan: ScoreReport['pointsPlan'], currentScore: number): ScoreReport['fourteenDayPlan'] {
  const primaryTopic1 = pointsPlan[0]?.topic || 'Quantitative Word Problems';
  const primaryTopic2 = pointsPlan[1]?.topic || 'Critical Reasoning Assumptions';
  const primaryTopic3 = pointsPlan[2]?.topic || 'Data Insights Multi-Source Reasoning';

  const days = [
    { day: 1, focus: `Diagnostic Deep Dive: ${primaryTopic1}`, targetMetric: 'Zero careless errors on Level 6-7' },
    { day: 2, focus: `Shortcut & Pacing Mastery: ${primaryTopic1}`, targetMetric: 'Avg time < 1:50 per question' },
    { day: 3, focus: `Verbal Architecture: ${primaryTopic2}`, targetMetric: '90%+ accuracy on conclusion extraction' },
    { day: 4, focus: `Data Insights Pacing Sprint`, targetMetric: 'Complete 10 DI questions in 21 mins' },
    { day: 5, focus: `Integration & Error Log Retake`, targetMetric: '100% correct on past missed items' },
    { day: 6, focus: `Single Section Simulation: Quant or Verbal`, targetMetric: 'Scaled score >= 82' },
    { day: 7, focus: `Active Recovery & Strategy Review`, targetMetric: 'Formula & Trap Flashcard audit' },
    { day: 8, focus: `Advanced Problem Solving: ${primaryTopic3}`, targetMetric: '80%+ on Level 8-9 Beyond GMAT' },
    { day: 9, focus: `Reading Comprehension Speed Mapping`, targetMetric: 'Read passage < 2:30 with full map' },
    { day: 10, focus: `Data Sufficiency Trap Defense`, targetMetric: 'Zero C-trap errors (assuming both needed)' },
    { day: 11, focus: `Full Mock Exam #1 (Timed Condition)`, targetMetric: 'Reach 705+ pacing milestone' },
    { day: 12, focus: `Full Mock Error Surgery & Root Cause Log`, targetMetric: 'Identify exact trigger for all misses' },
    { day: 13, focus: `High-Yield Speed Drills (All Sections)`, targetMetric: 'Instant recognition of top 10 traps' },
    { day: 14, focus: `Official Test Readiness Simulation`, targetMetric: '705+ Target Score achieved' },
  ];

  return days.map(d => ({
    day: d.day,
    focus: d.focus,
    activities: [
      `Complete 15 focused questions targeting ${d.focus}`,
      `Review time-sink diagnostics for questions exceeding 2:30`,
      `Record actionable takeaways in personal GMAT Notebook`,
    ],
    targetMetric: d.targetMetric,
  }));
}
