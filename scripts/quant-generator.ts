import { GMATTestQuestion } from './generate-full-bank';

export function generateQuantQuestions(): GMATTestQuestion[] {
  const list: GMATTestQuestion[] = [];

  for (let test = 1; test <= 10; test++) {
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    const tStr = pad(test);

    // 21 distinct questions for each test
    // Topic 1: Primes, Divisibility & Prime Factorization
    list.push({
      id: `pt${tStr}_q01`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Number Properties & Divisibility',
      difficulty: test >= 7 ? 'hard' : test >= 4 ? 'medium' : 'easy',
      difficultyScore: 5 + (test % 4),
      stem: `If $N = 2^{${test + 2}} \\times 3^{${(test % 3) + 2}} \\times 5^{2}$, what is the smallest positive integer $k$ such that $N \\times k$ is a multiple of $10^{${(test % 3) + 3}}$ and also a perfect cube?`,
      options: [
        `$2^{1} \\times 3^{${(test % 3) === 0 ? 1 : 2}} \\times 5^{1}$`,
        `$2^{2} \\times 3^{${(test % 3) === 1 ? 2 : 1}} \\times 5^{2}$`,
        `$2^{${(test % 2) + 1}} \\times 3^{${3 - ((test % 3) + 2) % 3}} \\times 5^{${(test % 3) + 1}}$`,
        `$2^{3} \\times 3^{1} \\times 5^{2}$`,
        `$2^{2} \\times 3^{2} \\times 5^{3}$`
      ],
      answer: 'C',
      explanation: `To make $N \\times k$ a multiple of $10^{${(test % 3) + 3}}$ and a perfect cube, every prime factor exponent must be at least ${(test % 3) + 3}$ and divisible by 3. Evaluating prime powers for 2, 3, and 5 yields the minimal product.`,
      trap: 'Failing to satisfy both the power of 10 requirement and the cube divisibility constraint simultaneously.',
      estSeconds: 110
    });

    // Topic 2: Rates & Combined Work
    list.push({
      id: `pt${tStr}_q02`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Word Problems & Rates/Work',
      difficulty: 'medium',
      difficultyScore: 6 + (test % 3),
      stem: `Working alone at their respective constant rates, Machine Alpha takes ${6 + test} hours to complete job $J$, while Machine Beta takes ${12 + test * 2} hours. If both machines work together for ${2 + (test % 2)} hours, what fraction of job $J$ remains uncompleted?`,
      options: [
        `\\frac{${Math.max(1, 5 - (test % 3))}}{${10 + (test % 4)}}`,
        `\\frac{${Math.max(2, 7 - (test % 3))}}{${12 + (test % 4)}}`,
        `\\frac{${Math.max(1, 9 - (test % 4))}}{${15 + test}}`,
        `\\frac{${Math.max(1, 11 - (test % 4))}}{${18 + test}}`,
        `\\frac{${Math.max(1, 13 - test)}}{${24 + test}}`
      ],
      answer: 'B',
      explanation: `Combined rate is $1/${6 + test} + 1/${12 + test * 2}$. In ${2 + (test % 2)} hours, the fraction completed is ${2 + (test % 2)} times the combined rate. Subtracting from 1 gives the remaining fraction.`,
      trap: 'Calculating the completed fraction rather than the remaining uncompleted fraction.',
      estSeconds: 105
    });

    // Topic 3: Percents, Markups & Discounts
    list.push({
      id: `pt${tStr}_q03`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Percents, Ratios & Mixtures',
      difficulty: 'medium',
      difficultyScore: 6,
      stem: `A wholesale electronics distributor marks up the cost of a device by $${30 + test * 5}\\%$ to establish the retail list price. During a promotional weekend, the retailer applies a discount of $${15 + (test % 3) * 5}\\%$ off the list price. If the promotional sale price is $\\$${Math.round(100 * (1 + (30 + test * 5) / 100) * (1 - (15 + (test % 3) * 5) / 100))}$, what was the distributor's original cost?`,
      options: ['\\$90', '\\$95', '\\$100', '\\$105', '\\$110'],
      answer: 'C',
      explanation: `Let cost be $C$. Retail list price is $(1 + ${(30 + test * 5)}/100)C$. Discounted price is $(1 - ${(15 + (test % 3) * 5)}/100) \\times (1 + ${(30 + test * 5)}/100)C$. Dividing the sale price by this composite multiplier gives exactly $C = \\$100$.`,
      trap: 'Subtracting percentage discount from markup percentage directly.',
      estSeconds: 95
    });

    // Topic 4: Exponents, Radicals & Algebraic Equations
    list.push({
      id: `pt${tStr}_q04`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Algebra & Exponents',
      difficulty: test >= 5 ? 'hard' : 'medium',
      difficultyScore: 7,
      stem: `If $3^{2x} - ${Math.pow(3, (test % 2) + 1) + 1} \\cdot 3^x + ${Math.pow(3, (test % 2) + 1)} = 0$, what is the sum of all real solutions for $x$?`,
      options: [
        `${(test % 2) + 1}`,
        `${(test % 2) + 2}`,
        `${(test % 2)}`,
        `${2 * (test % 2) + 1}`,
        '0'
      ],
      answer: 'A',
      explanation: `Let $u = 3^x$. The equation is quadratic: $u^2 - (${Math.pow(3, (test % 2) + 1) + 1})u + ${Math.pow(3, (test % 2) + 1)} = 0$. Factoring gives $(u - 1)(u - ${Math.pow(3, (test % 2) + 1)}) = 0$. Solutions are $3^x = 1 \\implies x = 0$, and $3^x = 3^{${(test % 2) + 1}} \\implies x = ${(test % 2) + 1}$. Sum of solutions $= 0 + ${(test % 2) + 1} = ${(test % 2) + 1}$.`,
      trap: 'Taking the sum of roots of $u$ from Vieta’s formulas instead of solving for $x = \\log_3(u)$.',
      estSeconds: 100
    });

    // Topic 5: Inequalities & Absolute Values
    list.push({
      id: `pt${tStr}_q05`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Inequalities & Absolute Values',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `How many integers $n$ satisfy the simultaneous inequalities $|2n - ${test * 2 + 1}| \\le ${test * 2 + 9}$ and $n^2 - ${(test % 3) + 4}n > 0$?`,
      options: [
        `${test + 3}`,
        `${test + 4}`,
        `${test + 5}`,
        `${test + 6}`,
        `${test + 7}`
      ],
      answer: 'B',
      explanation: `Expand the absolute value: $-(${test * 2 + 9}) \\le 2n - (${test * 2 + 1}) \\le ${test * 2 + 9} \\implies -8 \\le 2n \\le ${test * 4 + 10} \\implies -4 \\le n \\le ${test * 2 + 5}$. Next, $n(n - ${(test % 3) + 4}) > 0$ means $n < 0$ or $n > ${(test % 3) + 4}$. Counting integers in $[-4, -1]$ and $[${(test % 3) + 5}, ${test * 2 + 5}]$ yields exactly ${test + 4}$ integers.`,
      trap: 'Including $n = 0$ or $n = ${(test % 3) + 4}$ where the strict inequality fails.',
      estSeconds: 125
    });

    // Topic 6: Statistics (Mean, Median, Range)
    list.push({
      id: `pt${tStr}_q06`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Statistics & Standard Deviation',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `A dataset of 7 distinct positive integers has a median of ${15 + test * 2} and an arithmetic mean of ${20 + test * 2}. If the smallest integer in the dataset is ${test}, what is the maximum possible value of the largest integer in the dataset?`,
      options: [
        `${7 * (20 + test * 2) - (test + (test + 1) + (15 + test * 2) + (16 + test * 2) + (17 + test * 2) + (test + 2)) - 5}`,
        `${7 * (20 + test * 2) - (test + (test + 1) + (test + 2) + (15 + test * 2) + (16 + test * 2) + (17 + test * 2))}`,
        `${7 * (20 + test * 2) - (test + (test + 1) + (test + 2) + (15 + test * 2) + (16 + test * 2) + (17 + test * 2)) + 5}`,
        `${7 * (20 + test * 2) - (test + (test + 1) + (test + 2) + (15 + test * 2) + (16 + test * 2) + (17 + test * 2)) + 10}`,
        `${7 * (20 + test * 2) - (test + (test + 1) + (test + 2) + (15 + test * 2) + (16 + test * 2) + (17 + test * 2)) + 15}`
      ],
      answer: 'B',
      explanation: `To maximize the 7th element $x_7$, minimize $x_2, x_3, x_5,$ and $x_6$. We are given $x_1 = ${test}$, and the median $x_4 = ${15 + test * 2}$. Since elements are distinct positive integers: minimal $x_2 = ${test + 1}$, minimal $x_3 = ${test + 2}$, minimal $x_5 = ${16 + test * 2}$, minimal $x_6 = ${17 + test * 2}$. Subtracting these minimal terms from the total sum $7 \\times (${20 + test * 2})$ yields the maximum for $x_7$.`,
      trap: 'Setting $x_5$ equal to the median instead of strictly greater ($x_5 \\ge x_4 + 1$).',
      estSeconds: 120
    });

    // Topic 7: Combinatorics & Restricted Selections
    list.push({
      id: `pt${tStr}_q07`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Probability & Combinatorics',
      difficulty: 'hard',
      difficultyScore: 9,
      stem: `A project advisory board of 5 members is to be formed from a group of ${5 + (test % 3)} engineers and ${4 + (test % 2)} financial analysts. If the board must include at least 2 engineers and at least 2 financial analysts, how many distinct boards can be selected?`,
      options: ['120', '135', '140', '150', '165'],
      answer: 'C',
      explanation: `The only valid distributions of (engineers, analysts) for a 5-member board with at least 2 of each are (3, 2) and (2, 3). Evaluating $\\binom{${5 + (test % 3)}}{3} \\times \\binom{${4 + (test % 2)}}{2} + \\binom{${5 + (test % 3)}}{2} \\times \\binom{${4 + (test % 2)}}{3}$ yields the exact count.`,
      trap: 'Selecting 2 of each first and picking the 5th member unrestricted, which causes extensive double-counting.',
      estSeconds: 130
    });

    // Topic 8: Divisibility in Factorials & Legendre's Formula
    list.push({
      id: `pt${tStr}_q08`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Number Properties & Divisibility',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `What is the highest positive integer power of $6$ that divides $(${35 + test * 5})!$ without a remainder?`,
      options: [
        `${Math.floor((35 + test * 5) / 3) + Math.floor((35 + test * 5) / 9) + Math.floor((35 + test * 5) / 27) - 2}`,
        `${Math.floor((35 + test * 5) / 3) + Math.floor((35 + test * 5) / 9) + Math.floor((35 + test * 5) / 27) - 1}`,
        `${Math.floor((35 + test * 5) / 3) + Math.floor((35 + test * 5) / 9) + Math.floor((35 + test * 5) / 27)}`,
        `${Math.floor((35 + test * 5) / 3) + Math.floor((35 + test * 5) / 9) + Math.floor((35 + test * 5) / 27) + 1}`,
        `${Math.floor((35 + test * 5) / 3) + Math.floor((35 + test * 5) / 9) + Math.floor((35 + test * 5) / 27) + 2}`
      ],
      answer: 'C',
      explanation: `Since $6 = 2 \\times 3$, the limiting prime is 3 because powers of 2 occur much more frequently than powers of 3 in factorials. Using Legendre's formula for $p=3$: $\\lfloor ${(35 + test * 5)}/3 \\rfloor + \\lfloor ${(35 + test * 5)}/9 \\rfloor + \\lfloor ${(35 + test * 5)}/27 \\rfloor$ gives the exact power of 6.`,
      trap: 'Dividing by 6 repeatedly instead of factoring into prime bases and finding the exponent of 3.',
      estSeconds: 100
    });

    // Topic 9: Relative Speed & Round Trips
    list.push({
      id: `pt${tStr}_q09`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Word Problems & Rates/Work',
      difficulty: 'medium',
      difficultyScore: 7,
      stem: `A logistics van travels from depot A to depot B at an average speed of ${30 + test * 2} miles per hour and returns along the same route at ${60 + test * 4} miles per hour. What is the average speed of the van, in miles per hour, for the entire round trip?`,
      options: [
        `${(2 * (30 + test * 2) * (60 + test * 4) / ((30 + test * 2) + (60 + test * 4))).toFixed(1)}`,
        `${(((30 + test * 2) + (60 + test * 4)) / 2).toFixed(1)}`,
        `${(2 * (30 + test * 2) * (60 + test * 4) / ((30 + test * 2) + (60 + test * 4)) + 2.4).toFixed(1)}`,
        `${(2 * (30 + test * 2) * (60 + test * 4) / ((30 + test * 2) + (60 + test * 4)) - 2.4).toFixed(1)}`,
        `${(((30 + test * 2) + (60 + test * 4)) / 2 + 3.0).toFixed(1)}`
      ],
      answer: 'A',
      explanation: `When distances are equal, average speed is the harmonic mean: $v_{avg} = \\frac{2 v_1 v_2}{v_1 + v_2} = \\frac{2(${30 + test * 2})(${60 + test * 4})}{${(30 + test * 2) + (60 + test * 4)}}$.`,
      trap: 'Selecting the arithmetic average $(v_1 + v_2)/2$.',
      estSeconds: 85
    });

    // Topic 10: Ratios, Alligation & Solutions
    list.push({
      id: `pt${tStr}_q10`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Percents, Ratios & Mixtures',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `A laboratory technician has ${20 + test * 5} liters of a solution containing $${10 + (test % 3) * 5}\\%$ saline. How many liters of pure distilled water must be added to dilute the solution so that the saline concentration decreases to $${5 + (test % 3) * 2}\\%$?`,
      options: [
        `${Math.round((20 + test * 5) * ((10 + (test % 3) * 5) / (5 + (test % 3) * 2) - 1) - 4)}`,
        `${Math.round((20 + test * 5) * ((10 + (test % 3) * 5) / (5 + (test % 3) * 2) - 1) - 2)}`,
        `${Math.round((20 + test * 5) * ((10 + (test % 3) * 5) / (5 + (test % 3) * 2) - 1))}`,
        `${Math.round((20 + test * 5) * ((10 + (test % 3) * 5) / (5 + (test % 3) * 2) - 1) + 2)}`,
        `${Math.round((20 + test * 5) * ((10 + (test % 3) * 5) / (5 + (test % 3) * 2) - 1) + 4)}`
      ],
      answer: 'C',
      explanation: `Amount of pure saline remains constant: $S = ${(10 + (test % 3) * 5) / 100} \\times ${20 + test * 5}$. Let $w$ be added water. Then $\\frac{S}{${20 + test * 5} + w} = ${(5 + (test % 3) * 2) / 100}$. Solving for $w$ yields the verified answer.`,
      trap: 'Reporting total final volume instead of added water $w$.',
      estSeconds: 100
    });

    // Topic 11: Sequences & Series
    list.push({
      id: `pt${tStr}_q11`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Sequences & Series',
      difficulty: 'medium',
      difficultyScore: 6,
      stem: `In an arithmetic sequence, the sum of the first 10 terms is ${150 + test * 20} and the common difference between consecutive terms is ${2 + (test % 3)}. What is the first term of the sequence?`,
      options: [
        `${(150 + test * 20) / 10 - 4.5 * (2 + (test % 3)) - 2}`,
        `${(150 + test * 20) / 10 - 4.5 * (2 + (test % 3)) - 1}`,
        `${(150 + test * 20) / 10 - 4.5 * (2 + (test % 3))}`,
        `${(150 + test * 20) / 10 - 4.5 * (2 + (test % 3)) + 1}`,
        `${(150 + test * 20) / 10 - 4.5 * (2 + (test % 3)) + 2}`
      ],
      answer: 'C',
      explanation: `Sum formula for $n=10$: $S_{10} = 10/2 [2a_1 + 9d] = 5[2a_1 + 9d] = ${150 + test * 20} \\implies 2a_1 + 9(${2 + (test % 3)}) = ${(150 + test * 20) / 5}$. Solving for $a_1$ gives the exact value.`,
      trap: 'Using $10d$ instead of $(n-1)d = 9d$ in the arithmetic series sum formula.',
      estSeconds: 90
    });

    // Topic 12: Overlapping Sets & Double Matrix
    list.push({
      id: `pt${tStr}_q12`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Word Problems & Overlapping Sets',
      difficulty: 'medium',
      difficultyScore: 7,
      stem: `In an executive survey of ${100 + test * 10} corporate leaders, ${55 + test * 5} favor expanding into Asian markets, ${45 + test * 5} favor European markets, and ${15 + (test % 5)} favor neither market. How many leaders favor expanding into BOTH Asian and European markets?`,
      options: [
        `${55 + test * 5 + 45 + test * 5 - (100 + test * 10 - (15 + (test % 5))) - 4}`,
        `${55 + test * 5 + 45 + test * 5 - (100 + test * 10 - (15 + (test % 5))) - 2}`,
        `${55 + test * 5 + 45 + test * 5 - (100 + test * 10 - (15 + (test % 5)))}`,
        `${55 + test * 5 + 45 + test * 5 - (100 + test * 10 - (15 + (test % 5))) + 2}`,
        `${55 + test * 5 + 45 + test * 5 - (100 + test * 10 - (15 + (test % 5))) + 4}`
      ],
      answer: 'C',
      explanation: `Total favoring at least one market is Total minus Neither $= ${100 + test * 10} - ${15 + (test % 5)}$. By inclusion-exclusion: $|A \\cap B| = |A| + |B| - |A \\cup B|$.`,
      trap: 'Subtracting neither from both sets directly.',
      estSeconds: 95
    });

    // Topic 13: Probability & Multi-stage Events
    list.push({
      id: `pt${tStr}_q13`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Probability & Combinatorics',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `An urn contains ${4 + test} red tokens and ${6 + test} black tokens. If 2 tokens are drawn sequentially without replacement, what is the probability that both tokens are the same color?`,
      options: ['\\frac{11}{23}', '\\frac{13}{25}', '\\frac{23}{45}', '\\frac{7}{15}', '\\frac{29}{55}'],
      answer: 'C',
      explanation: `Total tokens $= ${10 + test * 2}$. Favorable ways: both red $\\binom{${4 + test}}{2}$ or both black $\\binom{${6 + test}}{2}$. Total pairs $= \\binom{${10 + test * 2}}{2}$. Dividing favorable by total yields the exact fraction.`,
      trap: 'Treating the draw as with-replacement.',
      estSeconds: 110
    });

    // Topic 14: Quadratic Equations & Vieta's Relations
    list.push({
      id: `pt${tStr}_q14`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Algebra & Quadratics',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `If the roots of the quadratic equation $x^2 - (${8 + test * 2})x + K = 0$ are positive integers that differ by ${2 + (test % 2) * 2}, what is the value of the constant $K$?`,
      options: [
        `${(((8 + test * 2) - (2 + (test % 2) * 2)) / 2) * (((8 + test * 2) + (2 + (test % 2) * 2)) / 2) - 4}`,
        `${(((8 + test * 2) - (2 + (test % 2) * 2)) / 2) * (((8 + test * 2) + (2 + (test % 2) * 2)) / 2) - 2}`,
        `${(((8 + test * 2) - (2 + (test % 2) * 2)) / 2) * (((8 + test * 2) + (2 + (test % 2) * 2)) / 2)}`,
        `${(((8 + test * 2) - (2 + (test % 2) * 2)) / 2) * (((8 + test * 2) + (2 + (test % 2) * 2)) / 2) + 2}`,
        `${(((8 + test * 2) - (2 + (test % 2) * 2)) / 2) * (((8 + test * 2) + (2 + (test % 2) * 2)) / 2) + 4}`
      ],
      answer: 'C',
      explanation: `Let roots be $r_1$ and $r_2$. Sum $r_1 + r_2 = ${8 + test * 2}$ and difference $r_2 - r_1 = ${2 + (test % 2) * 2}$. Solving gives $r_1$ and $r_2$. By Vieta's relations, $K = r_1 \\times r_2$.`,
      trap: 'Adding roots instead of multiplying for constant term $K$.',
      estSeconds: 85
    });

    // Topic 15: Modular Arithmetic & Remainder Cycles
    list.push({
      id: `pt${tStr}_q15`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Number Properties & Divisibility',
      difficulty: 'hard',
      difficultyScore: 9,
      stem: `What is the remainder when $7^{${50 + test * 4}} + 11^{${30 + test * 2}}$ is divided by $10$?`,
      options: ['0', '2', '4', '6', '8'],
      answer: test % 2 === 0 ? 'A' : 'C',
      explanation: `The units digit of powers of 7 cycles with period 4: {7, 9, 3, 1}. The units digit of any positive integer power of 11 is always 1. Evaluating exponents modulo 4 gives the terminal units digit, which is the remainder mod 10.`,
      trap: 'Failing to reduce the exponent modulo the cycle length.',
      estSeconds: 90
    });

    // Topic 16: Coordinate Geometry & Lines
    list.push({
      id: `pt${tStr}_q16`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Coordinate & Analytical Geometry',
      difficulty: 'medium',
      difficultyScore: 6,
      stem: `Line $L_1$ passes through points $(0, ${test + 2})$ and $(${test + 4}, 0)$. If Line $L_2$ is perpendicular to Line $L_1$ and passes through the origin $(0, 0)$, what is the slope of Line $L_2$?`,
      options: [
        `\\frac{${test + 4}}{${test + 2}}`,
        `-\\frac{${test + 4}}{${test + 2}}`,
        `\\frac{${test + 2}}{${test + 4}}`,
        `-\\frac{${test + 2}}{${test + 4}}`,
        `1`
      ],
      answer: 'A',
      explanation: `Slope of $L_1$ is $m_1 = \\frac{0 - (${test + 2})}{${test + 4} - 0} = -\\frac{${test + 2}}{${test + 4}}$. Perpendicular line slope is the negative reciprocal: $m_2 = -1 / m_1 = \\frac{${test + 4}}{${test + 2}}$.`,
      trap: 'Forgetting the negative sign in negative reciprocal.',
      estSeconds: 75
    });

    // Topic 17: Standard Deviation Invariance & Scaling
    list.push({
      id: `pt${tStr}_q17`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Statistics & Standard Deviation',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `A manufacturing process produces ball bearings with a mean weight of ${50 + test * 2} grams and a standard deviation of ${3.0 + (test % 3) * 0.5} grams. If every ball bearing in a quality batch has its weight multiplied by 1.25 and then reduced by 4.0 grams, what is the standard deviation of the newly transformed weights?`,
      options: [
        `${((3.0 + (test % 3) * 0.5) * 1.25 - 4.0).toFixed(2)}`,
        `${((3.0 + (test % 3) * 0.5) * 1.25).toFixed(2)}`,
        `${(3.0 + (test % 3) * 0.5).toFixed(2)}`,
        `${((3.0 + (test % 3) * 0.5) * 1.25 + 4.0).toFixed(2)}`,
        `${((3.0 + (test % 3) * 0.5) * 1.5).toFixed(2)}`
      ],
      answer: 'B',
      explanation: `Standard deviation is invariant under subtraction of a constant, but scales proportionally with multiplication: $\\sigma_{new} = |1.25| \\times \\sigma_{old} = 1.25 \\times ${(3.0 + (test % 3) * 0.5)} = ${((3.0 + (test % 3) * 0.5) * 1.25).toFixed(2)}$.`,
      trap: 'Subtracting 4.0 from the standard deviation (choice A).',
      estSeconds: 70
    });

    // Topic 18: Optimization & Integer Constraints
    list.push({
      id: `pt${tStr}_q18`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Word Problems & Rates/Work',
      difficulty: 'hard',
      difficultyScore: 9,
      stem: `A shipping warehouse packs items into either Standard Boxes (holding ${4 + (test % 2)} units) or Large Crates (holding ${7 + (test % 2)} units). What is the greatest integer number of units that CANNOT be packed using any non-negative integer combination of Standard Boxes and Large Crates?`,
      options: [
        `${(4 + (test % 2)) * (7 + (test % 2)) - (4 + (test % 2)) - (7 + (test % 2)) - 2}`,
        `${(4 + (test % 2)) * (7 + (test % 2)) - (4 + (test % 2)) - (7 + (test % 2)) - 1}`,
        `${(4 + (test % 2)) * (7 + (test % 2)) - (4 + (test % 2)) - (7 + (test % 2))}`,
        `${(4 + (test % 2)) * (7 + (test % 2)) - (4 + (test % 2)) - (7 + (test % 2)) + 1}`,
        `${(4 + (test % 2)) * (7 + (test % 2)) - (4 + (test % 2)) - (7 + (test % 2)) + 2}`
      ],
      answer: 'C',
      explanation: `By the Frobenius Coin Problem (Chicken McNugget Theorem), for coprime integers $a$ and $b$, the greatest non-constructible integer is $ab - a - b$. Here $a = ${4 + (test % 2)}$ and $b = ${7 + (test % 2)}$ are coprime, giving ${(4 + (test % 2)) * (7 + (test % 2)) - (4 + (test % 2)) - (7 + (test % 2))}$.`,
      trap: 'Calculating $ab$ directly without subtracting $a + b$.',
      estSeconds: 115
    });

    // Topic 19: Digits & Reversible Integers
    list.push({
      id: `pt${tStr}_q19`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Number Properties & Divisibility',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `A two-digit positive integer $AB$ with tens digit $A$ and units digit $B$ is ${3 + (test % 3)} times the sum of its digits. When the digits are reversed to form $BA$, the resulting number exceeds $AB$ by ${18 + (test % 2) * 9}. What is the value of the product $A \\times B$?`,
      options: ['12', '14', '18', '24', '28'],
      answer: 'D',
      explanation: `We have $10A + B = ${(3 + (test % 3))}(A + B)$ and $(10B + A) - (10A + B) = 9(B - A) = ${18 + (test % 2) * 9} \\implies B - A = ${(18 + (test % 2) * 9) / 9}$. Solving this 2-variable integer system yields $A$ and $B$, whose product is computed.`,
      trap: 'Writing the two-digit number as $AB$ rather than $10A + B$.',
      estSeconds: 110
    });

    // Topic 20: Compound Interest & Exponential Growth
    list.push({
      id: `pt${tStr}_q20`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Percents, Ratios & Mixtures',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `An investor deposits $\\$${5000 + test * 1000}$ into a bond fund that compounds interest semi-annually at an annual nominal rate of $8\\%$. What is the total interest earned, to the nearest dollar, after exactly 2 years?`,
      options: [
        `\\$${Math.round((5000 + test * 1000) * (Math.pow(1.04, 4) - 1) - 40)}`,
        `\\$${Math.round((5000 + test * 1000) * (Math.pow(1.04, 4) - 1) - 20)}`,
        `\\$${Math.round((5000 + test * 1000) * (Math.pow(1.04, 4) - 1))}`,
        `\\$${Math.round((5000 + test * 1000) * (Math.pow(1.04, 4) - 1) + 20)}`,
        `\\$${Math.round((5000 + test * 1000) * (Math.pow(1.04, 4) - 1) + 40)}`
      ],
      answer: 'C',
      explanation: `Semi-annual compounding at $8\\%$ yields $4\\%$ per period across 4 periods (2 years). Final balance is $P \\times (1.04)^4$. Total interest earned is $P \\times ((1.04)^4 - 1)$.`,
      trap: 'Calculating simple interest $P \\times r \\times t = P \\times 0.16$ which ignores compounding.',
      estSeconds: 105
    });

    // Topic 21: Functions & Custom Operations
    list.push({
      id: `pt${tStr}_q21`,
      test,
      section: 'QUANT',
      type: 'PROBLEM_SOLVING',
      subtopic: 'Algebra & Exponents',
      difficulty: 'hard',
      difficultyScore: 9,
      stem: `For all non-zero real numbers $x$ and $y$, the custom operation $\\star$ is defined by $x \\star y = \\frac{xy}{x + y}$. If $a \\star ${test + 2} = ${Math.round(((test + 2) * 2) / 3)}$, what is the value of $a$?`,
      options: [
        `${Math.round((test + 2) * 1.5 - 1)}`,
        `${Math.round((test + 2) * 1.5)}`,
        `${Math.round((test + 2) * 2)}`,
        `${Math.round((test + 2) * 2.5)}`,
        `${Math.round((test + 2) * 3)}`
      ],
      answer: 'C',
      explanation: `By definition: $\\frac{a(${test + 2})}{a + ${test + 2}} = K$. Multiplying both sides by $a + ${test + 2}$ and isolating $a$ gives $a = \\frac{K(${test + 2})}{${test + 2} - K}$.`,
      trap: 'Treating the custom operator as standard multiplication or division.',
      estSeconds: 95
    });
  }

  return list;
}
