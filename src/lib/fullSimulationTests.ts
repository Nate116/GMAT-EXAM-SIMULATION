import { PracticeTestRecord, ImportedTestQuestion, SectionType } from '../types/gmat';

// Topic blueprints for GMAT Focus Edition 64-Question Format
const QUANT_BLUEPRINT = [
  { topic: 'Number Properties & Divisibility', subtype: 'Primes & Factors' },
  { topic: 'Word Problems & Rates/Work', subtype: 'Combined Work' },
  { topic: 'Algebra & Exponents', subtype: 'Exponential Equations' },
  { topic: 'Inequalities & Absolute Values', subtype: 'Multi-interval Absolute Value' },
  { topic: 'Percents, Ratios & Mixtures', subtype: 'Weighted Alligation' },
  { topic: 'Probability & Combinatorics', subtype: 'Restricted Committees' },
  { topic: 'Statistics & Standard Deviation', subtype: 'Median & Range Extremes' },
  { topic: 'Sequences & Series', subtype: 'Periodic Sequences' },
  { topic: 'Number Properties & Divisibility', subtype: 'Remainder Cycles' },
  { topic: 'Word Problems & Rates/Work', subtype: 'Relative Speed & Motion' },
  { topic: 'Algebra & Exponents', subtype: 'Quadratic Systems' },
  { topic: 'Inequalities & Absolute Values', subtype: 'Quadratic Inequalities' },
  { topic: 'Percents, Ratios & Mixtures', subtype: 'Compound Growth' },
  { topic: 'Probability & Combinatorics', subtype: 'Conditional Probability' },
  { topic: 'Statistics & Standard Deviation', subtype: 'Standard Deviation Properties' },
  { topic: 'Number Properties & Divisibility', subtype: 'Even/Odd Parity Constraints' },
  { topic: 'Word Problems & Rates/Work', subtype: 'Overlapping Sets & Venn' },
  { topic: 'Coordinate & Analytical Geometry', subtype: 'Line Slopes & Intercepts' },
  { topic: 'Algebra & Exponents', subtype: 'Nested Radicals' },
  { topic: 'Inequalities & Absolute Values', subtype: 'Sign Inversion' },
  { topic: 'Probability & Combinatorics', subtype: 'Complement Counting' },
];

const VERBAL_BLUEPRINT = [
  // RC Passage 1 (Q1-4)
  { type: 'READING_COMPREHENSION', topic: 'Reading Comprehension', subtype: 'Main Idea', isRC: true, passageId: 'p1' },
  { type: 'READING_COMPREHENSION', topic: 'Reading Comprehension', subtype: 'Inference', isRC: true, passageId: 'p1' },
  { type: 'READING_COMPREHENSION', topic: 'Reading Comprehension', subtype: 'Specific Detail', isRC: true, passageId: 'p1' },
  { type: 'READING_COMPREHENSION', topic: 'Reading Comprehension', subtype: 'Function & Structure', isRC: true, passageId: 'p1' },
  // CR (Q5-8)
  { type: 'CRITICAL_REASONING', topic: 'Critical Reasoning', subtype: 'Assumption', isRC: false },
  { type: 'CRITICAL_REASONING', topic: 'Critical Reasoning', subtype: 'Strengthen', isRC: false },
  { type: 'CRITICAL_REASONING', topic: 'Critical Reasoning', subtype: 'Weaken', isRC: false },
  { type: 'CRITICAL_REASONING', topic: 'Critical Reasoning', subtype: 'Evaluate', isRC: false },
  // RC Passage 2 (Q9-11)
  { type: 'READING_COMPREHENSION', topic: 'Reading Comprehension', subtype: 'Primary Purpose', isRC: true, passageId: 'p2' },
  { type: 'READING_COMPREHENSION', topic: 'Reading Comprehension', subtype: 'Inference', isRC: true, passageId: 'p2' },
  { type: 'READING_COMPREHENSION', topic: 'Reading Comprehension', subtype: 'Tone & Attitude', isRC: true, passageId: 'p2' },
  // CR (Q12-15)
  { type: 'CRITICAL_REASONING', topic: 'Critical Reasoning', subtype: 'Boldface Argument Structure', isRC: false },
  { type: 'CRITICAL_REASONING', topic: 'Critical Reasoning', subtype: 'Resolve Paradox', isRC: false },
  { type: 'CRITICAL_REASONING', topic: 'Critical Reasoning', subtype: 'Logical Flaw', isRC: false },
  { type: 'CRITICAL_REASONING', topic: 'Critical Reasoning', subtype: 'Assumption', isRC: false },
  // RC Passage 3 (Q16-19)
  { type: 'READING_COMPREHENSION', topic: 'Reading Comprehension', subtype: 'Main Idea', isRC: true, passageId: 'p3' },
  { type: 'READING_COMPREHENSION', topic: 'Reading Comprehension', subtype: 'Inference', isRC: true, passageId: 'p3' },
  { type: 'READING_COMPREHENSION', topic: 'Reading Comprehension', subtype: 'Application & Analogy', isRC: true, passageId: 'p3' },
  { type: 'READING_COMPREHENSION', topic: 'Reading Comprehension', subtype: 'Specific Detail', isRC: true, passageId: 'p3' },
  // CR (Q20-23)
  { type: 'CRITICAL_REASONING', topic: 'Critical Reasoning', subtype: 'Weaken', isRC: false },
  { type: 'CRITICAL_REASONING', topic: 'Critical Reasoning', subtype: 'Strengthen', isRC: false },
  { type: 'CRITICAL_REASONING', topic: 'Critical Reasoning', subtype: 'Inference', isRC: false },
  { type: 'CRITICAL_REASONING', topic: 'Critical Reasoning', subtype: 'Boldface Argument Structure', isRC: false },
];

const DI_BLUEPRINT = [
  { type: 'DATA_SUFFICIENCY', topic: 'Data Sufficiency', subtype: 'Number Properties' },
  { type: 'DATA_SUFFICIENCY', topic: 'Data Sufficiency', subtype: 'Algebraic Inequalities' },
  { type: 'TABLE_ANALYSIS', topic: 'Table Analysis', subtype: 'Dichotomous Sorting' },
  { type: 'GRAPHICS_INTERPRETATION', topic: 'Graphics Interpretation', subtype: 'Scatter Trend' },
  { type: 'TWO_PART_ANALYSIS', topic: 'Two-Part Analysis', subtype: 'Constraint Optimization' },
  { type: 'MULTI_SOURCE_REASONING', topic: 'Multi-Source Reasoning', subtype: 'Tab Synthesis' },
  { type: 'MULTI_SOURCE_REASONING', topic: 'Multi-Source Reasoning', subtype: 'Policy Deduction' },
  { type: 'DATA_SUFFICIENCY', topic: 'Data Sufficiency', subtype: 'Rates & Work' },
  { type: 'TABLE_ANALYSIS', topic: 'Table Analysis', subtype: 'Median & Percentile Filtering' },
  { type: 'GRAPHICS_INTERPRETATION', topic: 'Graphics Interpretation', subtype: 'Bar & Line Multi-Axis' },
  { type: 'TWO_PART_ANALYSIS', topic: 'Two-Part Analysis', subtype: 'Algebraic Variables' },
  { type: 'DATA_SUFFICIENCY', topic: 'Data Sufficiency', subtype: 'Statistics & Standard Deviation' },
  { type: 'MULTI_SOURCE_REASONING', topic: 'Multi-Source Reasoning', subtype: 'Financial Reconciliation' },
  { type: 'TABLE_ANALYSIS', topic: 'Table Analysis', subtype: 'Ratio Ranking' },
  { type: 'GRAPHICS_INTERPRETATION', topic: 'Graphics Interpretation', subtype: 'Slope Rate of Change' },
  { type: 'TWO_PART_ANALYSIS', topic: 'Two-Part Analysis', subtype: 'Two-Variable Tradeoff' },
  { type: 'DATA_SUFFICIENCY', topic: 'Data Sufficiency', subtype: 'Quadratic Discriminant' },
  { type: 'DATA_SUFFICIENCY', topic: 'Data Sufficiency', subtype: 'Overlapping Sets' },
  { type: 'TABLE_ANALYSIS', topic: 'Table Analysis', subtype: 'Conditional Subsets' },
  { type: 'TWO_PART_ANALYSIS', topic: 'Two-Part Analysis', subtype: 'Logic Matrix' },
];

const RC_PASSAGES = {
  p1: 'For decades, evolutionary biologists attributed the hyper-diverse foraging strategies of tropical coral reef fish exclusively to niche partitioning—the competitive exclusion principle dictating that species must exploit distinct ecological niches to coexist within nutrient-poor oligotrophic waters. Under this classical framework, slight morphological variations in jaw biomechanics or dental morphology were assumed to reflect strict dietary specialization.\n\nHowever, recent high-throughput DNA metabarcoding of stomach contents across dozens of sympatric wrasse and damselfish species has complicated this equilibrium paradigm. Rather than exhibiting rigid dietary segregation, many ecologically similar species exhibit broad trophic overlap, consuming identical micro-invertebrates during periods of seasonal abundance. Coexistence appears sustained not by static anatomical specialization, but by dynamic behavioral plasticity: during lean periods, species alter their foraging depths and exhibit opportunistic scavenging rather than competitive displacement.',
  p2: 'Historians analyzing the rapid commercial expansion of the Dutch East India Company (VOC) during the seventeenth century long prioritized naval supremacy and institutional chartered monopolies as the primary drivers of mercantile hegemony. Traditional historiography maintained that the VOC’s centralized governance structure allowed it to overcome transaction costs that crippled decentralized merchant cartels.\n\nMore recent economic archival research, however, emphasizes the critical role of private informal credit networks and multilateral bill-of-exchange clearinghouses centered in Amsterdam. Rather than relying exclusively on public joint-stock capital, provincial voyages were predominantly financed through syndicated promissory notes backed by reciprocal family trust across mercantile guilds. Consequently, institutional centralization was arguably secondary to flexible decentralized liquidity.',
  p3: 'Plate tectonic reconstructions of the late Cretaceous period have frequently struggled to reconcile isotopic paleotemperature proxies indicating tropical warmth in polar latitudes with climate simulation models that require steep equator-to-pole thermal gradients. Traditional geochemical models hypothesized that elevated atmospheric carbon dioxide exceeding 1,500 parts per million was sufficient to maintain ice-free polar ecosystems.\n\nYet coupled ocean-atmosphere General Circulation Models (GCMs) forced with identical atmospheric carbon levels consistently generate freezing winter conditions in polar continental interiors. A newly proposed geophysical mechanism suggests that vigorous poleward oceanic heat transport mediated by subterranean bathymetric gateways, rather than greenhouse gases alone, provided the critical thermal buffer.'
};

/**
 * Builds a complete 64-question GMAT Focus simulation dataset for a practice test
 */
export function generateFullSimulationQuestions(
  testId: string,
  testNumber: number,
  quantScore: number,
  verbalScore: number,
  diScore: number
): ImportedTestQuestion[] {
  const questions: ImportedTestQuestion[] = [];

  // Determine target accuracies based on section scores (60-90 scale)
  // 81 -> ~15/21 correct (6 missed); 85 -> ~18/21 (3 missed); 88 -> ~20/21 (1 missed)
  const qMissesTarget = Math.max(1, Math.min(8, Math.round((90 - quantScore) * 0.75)));
  const vMissesTarget = Math.max(1, Math.min(8, Math.round((90 - verbalScore) * 0.75)));
  const diMissesTarget = Math.max(1, Math.min(8, Math.round((90 - diScore) * 0.75)));

  // 1. QUANTITATIVE (21 Questions)
  QUANT_BLUEPRINT.forEach((blueprint, i) => {
    const pos = i + 1;
    // Distribute misses realistically (more frequent in middle/late positions)
    const isMissed = (pos >= 8 && pos <= 13 && (pos % 3 === 0)) || (pos >= 15 && (pos % 2 === 0 && qMissesTarget > 3)) || (pos === 20 && qMissesTarget > 1);
    const correct = !isMissed;
    const timeSpent = isMissed ? (pos > 14 ? 145 : 160) : (pos < 7 ? 105 : 125);
    const officialAns = ['A', 'B', 'C', 'D', 'E'][(pos * 3 + testNumber) % 5];
    const myAns = correct ? officialAns : ['A', 'B', 'C', 'D', 'E'][(pos * 3 + testNumber + 2) % 5];

    questions.push({
      id: `${testId}_q_${pos}`,
      test_id: testId,
      section: 'QUANT',
      position: pos,
      type: 'PROBLEM_SOLVING',
      subtype: blueprint.subtype,
      topic: blueprint.topic,
      stem: getQuantStemForTopic(blueprint.topic, pos, testNumber),
      options: getQuantOptions(pos, testNumber),
      official_answer: officialAns,
      my_answer: myAns,
      correct,
      time_spent_sec: timeSpent,
      flagged: pos === 9 || pos === 18,
      trap_type: isMissed ? (pos > 15 ? 'time_pressure_rush' : 'number_property_edge_case') : undefined,
      error_classification: isMissed ? (timeSpent > 150 ? 'TIME_PRESSURE' : 'FELL_FOR_TRAP') : undefined,
      isReviewed: true,
      notes: isMissed ? `Missed under time pressure at position Q${pos}.` : undefined,
    });
  });

  // 2. VERBAL (23 Questions)
  VERBAL_BLUEPRINT.forEach((blueprint, i) => {
    const pos = i + 1;
    const isMissed = (pos === 7 || pos === 14 || (pos === 21 && vMissesTarget > 2) || (pos === 19 && vMissesTarget > 4));
    const correct = !isMissed;
    const timeSpent = isMissed ? 135 : 110;
    const officialAns = ['A', 'B', 'C', 'D', 'E'][(pos * 2 + testNumber) % 5];
    const myAns = correct ? officialAns : ['A', 'B', 'C', 'D', 'E'][(pos * 2 + testNumber + 1) % 5];

    questions.push({
      id: `${testId}_v_${pos}`,
      test_id: testId,
      section: 'VERBAL',
      position: pos,
      type: blueprint.type as any,
      subtype: blueprint.subtype,
      topic: blueprint.topic,
      passage: blueprint.isRC ? RC_PASSAGES[(blueprint as any).passageId as keyof typeof RC_PASSAGES] : undefined,
      stem: getVerbalStem(blueprint.subtype, pos, testNumber),
      options: [
        'The primary finding supports traditional equilibrium hypotheses.',
        'An unstated assumption linking empirical observations to causal outcomes is flawed.',
        'Ecological redundancy mitigates localized resource competition.',
        'Market mechanisms depend directly on multilateral credit guarantees.',
        'Geophysical transport mechanisms override atmospheric gas insulation.'
      ],
      official_answer: officialAns,
      my_answer: myAns,
      correct,
      time_spent_sec: timeSpent,
      flagged: pos === 12 || pos === 22,
      trap_type: isMissed ? 'opposite_direction' : undefined,
      error_classification: isMissed ? 'FELL_FOR_TRAP' : undefined,
      isReviewed: true,
      notes: isMissed ? `Selected distractor reversing the conclusion scope.` : undefined,
    });
  });

  // 3. DATA INSIGHTS (20 Questions)
  DI_BLUEPRINT.forEach((blueprint, i) => {
    const pos = i + 1;
    const isMissed = (pos === 5 || pos === 11 || (pos === 16 && diMissesTarget > 2) || (pos === 19 && diMissesTarget > 3));
    const correct = !isMissed;
    const timeSpent = isMissed ? 155 : 125;
    const officialAns = ['A', 'B', 'C', 'D', 'E'][(pos * 4 + testNumber) % 5];
    const myAns = correct ? officialAns : ['A', 'B', 'C', 'D', 'E'][(pos * 4 + testNumber + 3) % 5];

    questions.push({
      id: `${testId}_di_${pos}`,
      test_id: testId,
      section: 'DATA_INSIGHTS',
      position: pos,
      type: blueprint.type as any,
      subtype: blueprint.subtype,
      topic: blueprint.topic,
      stem: getDIStem(blueprint.type, blueprint.subtype, pos),
      options: [
        'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.',
        'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.',
        'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.',
        'EACH statement ALONE is sufficient.',
        'Statements (1) and (2) TOGETHER are NOT sufficient.'
      ],
      official_answer: officialAns,
      my_answer: myAns,
      correct,
      time_spent_sec: timeSpent,
      flagged: pos === 6 || pos === 17,
      trap_type: isMissed ? 'c2_trap_ds' : undefined,
      error_classification: isMissed ? 'CONCEPT_GAP' : undefined,
      isReviewed: true,
      notes: isMissed ? `Assumed both statements needed without testing Statement 1 independently.` : undefined,
    });
  });

  return questions;
}

function getQuantStemForTopic(topic: string, pos: number, testNumber: number): string {
  if (topic.includes('Number Properties')) {
    return `If $n$ is an integer such that $(n + ${pos})(n - ${testNumber + 2})$ is divisible by $12$, which of the following MUST be an integer?`;
  }
  if (topic.includes('Rates')) {
    return `Working at constant rates, machine A completes a manufacturing order in ${pos + 6} hours, while machine B takes ${pos + 12} hours. If both run together with machine C, the job finishes in ${pos + 2} hours. How many hours would machine C take alone?`;
  }
  if (topic.includes('Inequalities')) {
    return `For all real numbers $x$, how many integer values of $x$ satisfy $|2x - ${pos + 3}| \\le ${pos + 11}$?`;
  }
  if (topic.includes('Probability')) {
    return `A committee of ${testNumber > 5 ? 5 : 4} is formed from a group of ${pos + 4} men and ${pos + 3} women. If at least 2 men and 2 women must serve, how many combinations are possible?`;
  }
  if (topic.includes('Statistics')) {
    return `A dataset of 7 distinct positive integers has a median of ${pos + 15} and an average of ${pos + 20}. What is the maximum possible value of the largest integer?`;
  }
  return `If $3^{2x} - 3^{x+1} - ${pos + 18} = 0$, what is the value of $x^2 + 2x$?`;
}

function getQuantOptions(pos: number, testNumber: number): string[] {
  const base = pos * 3 + testNumber * 2;
  return [`${base}`, `${base + 4}`, `${base + 8}`, `${base + 12}`, `${base + 16}`];
}

function getVerbalStem(subtype: string, pos: number, testNumber: number): string {
  if (subtype.includes('Assumption')) {
    return `Mayor: Implementing automated transit surveillance in Corridor ${pos} will reduce unauthorized lane incursions by 25%. Therefore, city council should authorize the deployment. Which of the following is an assumption required by the mayor's argument?`;
  }
  if (subtype.includes('Weaken')) {
    return `Economist: Recent commercial tariff increases in Region ${testNumber} directly caused the 8% decrease in imported capital goods over the past year. Which of the following, if true, most seriously weakens the economist's conclusion?`;
  }
  if (subtype.includes('Boldface')) {
    return `Geochemists long maintained that mineral deposits at Basin ${pos} formed via volcanic plume activity. **Recently, isotopic core samples revealed anomaly ratios characteristic of meteoritic ablation.** Impact theorists cite this as definitive evidence. Yet this conclusion is unproven; **subterranean tectonic friction can generate identical isotopic ratios.**`;
  }
  return `Based on the discussion in paragraph 2, with which of the following statements regarding theoretical niche models would the author most likely agree?`;
}

function getDIStem(type: string, subtype: string, pos: number): string {
  if (type === 'DATA_SUFFICIENCY') {
    return `If $x$ and $y$ are non-zero integers, is $\\frac{x}{y} > 1$?\n\n(1) $x^2 > y^2$\n(2) $x - y > ${pos}$`;
  }
  if (type === 'TABLE_ANALYSIS') {
    return `Analyze the sortable performance dataset for the 8 manufacturing centers across quarterly output, gross margin, and energy efficiency.`;
  }
  if (type === 'GRAPHICS_INTERPRETATION') {
    return `The scatter plot exhibits the correlation between research and development expenditures and patents awarded for 12 technology conglomerates.`;
  }
  return `An asset management fund allocates capital between High-Yield Debt (yielding 7.5%) and Sovereign Notes (yielding 4.2%). Select the corresponding allocations that meet the yield target.`;
}

/**
 * 10 FULL GMAT Focus Simulations (64 questions each, 135 minutes)
 */
export const FULL_PRACTICE_TESTS_BANK: PracticeTestRecord[] = [
  {
    id: 'pt_01',
    testNumber: 1,
    title: 'Official Focus Mock #1 (Full 64-Q Simulation)',
    date: '2025-01-05',
    totalScore: 645,
    quantScore: 81,
    verbalScore: 79,
    dataInsightsScore: 78,
    isHeldOutForValidation: false,
    isReviewed: true,
    notes: 'Full diagnostic baseline (64 questions: 21 Q, 23 V, 20 DI). Rushed on DI table analysis.',
    questions: generateFullSimulationQuestions('pt_01', 1, 81, 79, 78),
  },
  {
    id: 'pt_02',
    testNumber: 2,
    title: 'Official Focus Mock #2 (Full 64-Q Simulation)',
    date: '2025-01-14',
    totalScore: 665,
    quantScore: 82,
    verbalScore: 80,
    dataInsightsScore: 79,
    isHeldOutForValidation: false,
    isReviewed: true,
    notes: 'Full 135-minute test. Improved CR assumption identification. Quant pacing steady.',
    questions: generateFullSimulationQuestions('pt_02', 2, 82, 80, 79),
  },
  {
    id: 'pt_03',
    testNumber: 3,
    title: 'Official Focus Mock #3 (Full 64-Q Simulation)',
    date: '2025-01-22',
    totalScore: 655,
    quantScore: 80,
    verbalScore: 82,
    dataInsightsScore: 78,
    isHeldOutForValidation: false,
    isReviewed: true,
    notes: 'Quant fatigue in final third (Q16-21). Careless arithmetic slip in Combinatorics.',
    questions: generateFullSimulationQuestions('pt_03', 3, 80, 82, 78),
  },
  {
    id: 'pt_04',
    testNumber: 4,
    title: 'Official Focus Mock #4 (Full 64-Q Simulation)',
    date: '2025-02-02',
    totalScore: 675,
    quantScore: 84,
    verbalScore: 81,
    dataInsightsScore: 80,
    isHeldOutForValidation: false,
    isReviewed: true,
    notes: 'Quant strong (+4 pts). Multi-source reasoning in DI needs shortcut heuristics.',
    questions: generateFullSimulationQuestions('pt_04', 4, 84, 81, 80),
  },
  {
    id: 'pt_05',
    testNumber: 5,
    title: 'Official Focus Mock #5 (Full 64-Q Simulation)',
    date: '2025-02-10',
    totalScore: 685,
    quantScore: 85,
    verbalScore: 82,
    dataInsightsScore: 80,
    isHeldOutForValidation: false,
    isReviewed: true,
    notes: 'Solid session. 3 review edits used effectively on Quant Q19 and Verbal Q14.',
    questions: generateFullSimulationQuestions('pt_05', 5, 85, 82, 80),
  },
  {
    id: 'pt_06',
    testNumber: 6,
    title: 'Focus Practice Exam #6 (Full 64-Q Simulation)',
    date: '2025-02-18',
    totalScore: 675,
    quantScore: 83,
    verbalScore: 83,
    dataInsightsScore: 79,
    isHeldOutForValidation: false,
    isReviewed: true,
    notes: 'Verbal timing smooth. DI 2-part analysis took 3:15, causing late time pressure.',
    questions: generateFullSimulationQuestions('pt_06', 6, 83, 83, 79),
  },
  {
    id: 'pt_07',
    testNumber: 7,
    title: 'Focus Practice Exam #7 (Full 64-Q Simulation)',
    date: '2025-02-27',
    totalScore: 695,
    quantScore: 86,
    verbalScore: 83,
    dataInsightsScore: 81,
    isHeldOutForValidation: false,
    isReviewed: true,
    notes: 'Within striking distance of 705 benchmark. Zero fatal time sinks in Quant.',
    questions: generateFullSimulationQuestions('pt_07', 7, 86, 83, 81),
  },
  {
    id: 'pt_08',
    testNumber: 8,
    title: 'Focus Practice Exam #8 (Full 64-Q Simulation)',
    date: '2025-03-08',
    totalScore: 685,
    quantScore: 84,
    verbalScore: 84,
    dataInsightsScore: 80,
    isHeldOutForValidation: false,
    isReviewed: true,
    notes: 'Stable scores. Missed 2 combinatorics questions in Quant.',
    questions: generateFullSimulationQuestions('pt_08', 8, 84, 84, 80),
  },
  // Hold-out validation tests (Tests 9 and 10)
  {
    id: 'pt_09',
    testNumber: 9,
    title: 'Focus Validation Mock #9 (Held-Out 64-Q Simulation)',
    date: '2025-03-18',
    totalScore: 705,
    quantScore: 87,
    verbalScore: 84,
    dataInsightsScore: 82,
    isHeldOutForValidation: true,
    isReviewed: true,
    notes: 'Held-out test for psychometric calibration validation. Cross 705 milestone.',
    questions: generateFullSimulationQuestions('pt_09', 9, 87, 84, 82),
  },
  {
    id: 'pt_10',
    testNumber: 10,
    title: 'Focus Validation Mock #10 (Held-Out 64-Q Simulation)',
    date: '2025-03-27',
    totalScore: 715,
    quantScore: 88,
    verbalScore: 85,
    dataInsightsScore: 82,
    isHeldOutForValidation: true,
    isReviewed: true,
    notes: 'Held-out test for psychometric calibration validation. Peak performance across all 3 sections.',
    questions: generateFullSimulationQuestions('pt_10', 10, 88, 85, 82),
  }
];
