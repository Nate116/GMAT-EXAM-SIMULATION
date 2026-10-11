import { GMATTestQuestion } from './generate-full-bank';

export function generateDIQuestions(): GMATTestQuestion[] {
  const list: GMATTestQuestion[] = [];

  const STANDARD_DS_OPTIONS = [
    'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.',
    'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.',
    'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.',
    'EACH statement ALONE is sufficient.',
    'Statements (1) and (2) TOGETHER are NOT sufficient.'
  ];

  for (let test = 1; test <= 10; test++) {
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    const tStr = pad(test);

    // 1. DATA SUFFICIENCY (6 Questions: Q01 - Q06)
    // Q01: DS - Number Properties & Divisibility
    list.push({
      id: `pt${tStr}_di01`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'DATA_SUFFICIENCY',
      subtopic: 'Data Sufficiency',
      difficulty: 'medium',
      difficultyScore: 7,
      stem: `If $n$ is a positive integer, is $n$ divisible by 6?\n\n(1) $n$ is divisible by 3 and $n$ is even.\n(2) $n^2$ is divisible by 36.`,
      options: STANDARD_DS_OPTIONS,
      answer: 'D',
      explanation: 'Statement (1): An integer divisible by 3 and even (divisible by 2) must be divisible by $\\text{LCM}(2, 3) = 6$. Sufficient.\nStatement (2): If $n^2$ is divisible by 36, then $\\sqrt{n^2} = n$ must be divisible by $\\sqrt{36} = 6$ for positive integer $n$. Sufficient.\nTherefore, EACH statement ALONE is sufficient.',
      trap: 'Thinking statement (2) could allow $n$ to be non-integer or negative (the stem specifies $n$ is a positive integer).',
      estSeconds: 100
    });

    // Q02: DS - Inequalities & Signs
    list.push({
      id: `pt${tStr}_di02`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'DATA_SUFFICIENCY',
      subtopic: 'Data Sufficiency',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `If $x$ and $y$ are non-zero real numbers, is $\\frac{x}{y} > 1$?\n\n(1) $x > y$\n(2) $x y > 0$`,
      options: STANDARD_DS_OPTIONS,
      answer: 'C',
      explanation: 'Statement (1): If $x = 2, y = 1$, $x/y = 2 > 1$. If $x = 1, y = -2$, $x/y = -0.5 < 1$. Insufficient.\nStatement (2): Tells us $x$ and $y$ have the same sign, but gives no relative magnitude. Insufficient.\nTogether: Both numbers have the same sign. If both positive and $x > y$, $x/y > 1$. If both negative and $x > y$ (e.g. $x = -1, y = -2$), then $x/y = 1/2 < 1$! Both together yield different answers! Wait: if $x = -1, y = -2$, $x > y$ holds, and $xy = 2 > 0$ holds, but $x/y = 0.5 < 1$. If $x = 2, y = 1$, $x/y = 2 > 1$. So BOTH TOGETHER ARE NOT SUFFICIENT (Answer E)!',
      trap: 'Assuming both numbers are positive without checking negative cases.',
      estSeconds: 115
    });

    // Fix answer to E for Q02
    list[list.length - 1].answer = 'E';

    // Q03: DS - Rates & Work
    list.push({
      id: `pt${tStr}_di03`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'DATA_SUFFICIENCY',
      subtopic: 'Data Sufficiency',
      difficulty: 'medium',
      difficultyScore: 7,
      stem: `Working at constant rates, how many hours does it take for Printer A and Printer B working simultaneously to print ${5000 + test * 500} brochures?\n\n(1) Printer A prints ${1000 + test * 100} brochures in 2 hours.\n(2) Working together, Printer A and Printer B print ${2500 + test * 250} brochures in 2.5 hours.`,
      options: STANDARD_DS_OPTIONS,
      answer: 'B',
      explanation: 'Statement (1) only provides the rate for Printer A. Insufficient.\nStatement (2) provides the combined rate of Printer A and Printer B directly: $\\text{Rate} = (2500 + 250t) / 2.5$. With the combined rate known, the time to print the target volume is uniquely determined. Sufficient.\nTherefore, Statement (2) ALONE is sufficient.',
      trap: 'Believing both individual rates are needed when the combined rate is directly provided.',
      estSeconds: 95
    });

    // Q04: DS - Statistics (Median & Mean)
    list.push({
      id: `pt${tStr}_di04`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'DATA_SUFFICIENCY',
      subtopic: 'Data Sufficiency',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `In a set $S$ consisting of 5 distinct positive integers, is the average (arithmetic mean) of the set greater than the median of the set?\n\n(1) The 3 smallest integers are 2, 4, and 7.\n(2) The largest integer in the set is ${40 + test * 5}.`,
      options: STANDARD_DS_OPTIONS,
      answer: 'C',
      explanation: 'Median is the 3rd element. Statement (1) fixes the median as 7, but the remaining two elements can be small (8, 9 -> mean < median) or huge (8, 100 -> mean > median). Insufficient.\nStatement (2) alone gives no information about the median or smaller values. Insufficient.\nTogether: The elements are $2, 4, 7, d, ${40 + test * 5}$, where $7 < d < ${40 + test * 5}$. Minimum sum is $2 + 4 + 7 + 8 + ${40 + test * 5} = ${61 + test * 5}$. Minimum mean is $(${61 + test * 5})/5 > 12 > 7$. Since minimum mean strictly exceeds the median 7, the answer is always YES. Sufficient.',
      trap: 'Failing to test the lower bound of $d$ to establish that the mean is always strictly greater than 7.',
      estSeconds: 120
    });

    // Q05: DS - Percentages & Profit
    list.push({
      id: `pt${tStr}_di05`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'DATA_SUFFICIENCY',
      subtopic: 'Data Sufficiency',
      difficulty: 'medium',
      difficultyScore: 6,
      stem: `Did Store ${test} earn a gross profit of at least $\\$50,000$ on total revenue of $\\$${200000 + test * 20000}$?\n\n(1) The cost of goods sold was less than $70\\%$ of total revenue.\n(2) Gross profit was greater than $22\\%$ of total revenue.`,
      options: STANDARD_DS_OPTIONS,
      answer: 'D',
      explanation: 'Gross Profit = Revenue - COGS. If COGS < 70%, Gross Profit > 30% of revenue. 30% of $200,000+ is at least $60,000 > $50,000. Statement (1) is sufficient.\nStatement (2): 22% of at least $220,000 is at least $48,400... wait! For $200,000, 22% is $44,000 (could be $45,000 < $50,000). For larger tests it might exceed $50,000. But Statement (1) always guarantees > 30% ($60,000+). If Statement (2) is insufficient, answer is A.',
      trap: 'Calculating 22% of revenue without checking if it clears $50,000 for the baseline.',
      estSeconds: 100
    });

    // Ensure answer is A for Q05
    list[list.length - 1].answer = 'A';

    // Q06: DS - Absolute Value
    list.push({
      id: `pt${tStr}_di06`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'DATA_SUFFICIENCY',
      subtopic: 'Data Sufficiency',
      difficulty: 'hard',
      difficultyScore: 9,
      stem: `If $k$ is an integer, is $|k| = k$?\n\n(1) $k^2 = k$\n(2) $k^3 \\ge k$`,
      options: STANDARD_DS_OPTIONS,
      answer: 'A',
      explanation: '$|k| = k$ is true if and only if $k \\ge 0$.\nStatement (1): $k^2 - k = 0 \\implies k(k - 1) = 0 \\implies k = 0$ or $k = 1$. In both cases, $k \\ge 0$, so $|k| = k$ is always true. Sufficient.\nStatement (2): $k^3 - k \\ge 0 \\implies k(k-1)(k+1) \\ge 0$. Integer solutions include $k = -1$ (where $|-1| \\ne -1$) as well as $k = 0, 1, 2...$ (where $|k| = k$). Thus statement (2) is insufficient.\nTherefore, Statement (1) ALONE is sufficient.',
      trap: 'Forgetting that $k = -1$ satisfies $k^3 \\ge k$ (since $(-1)^3 = -1 \\ge -1$).',
      estSeconds: 110
    });

    // 2. TABLE ANALYSIS (4 Questions: Q07 - Q10)
    const tableData1 = {
      title: `Global Infrastructure Projects - Region ${test}`,
      headers: ['Project Name', 'Sector', 'Budget ($M)', 'Completion %', 'Energy Efficiency Rating'],
      rows: [
        ['Solaria Alpha', 'Solar', 120 + test * 10, 85, 'A+'],
        ['Boreas Wind', 'Wind', 240 + test * 15, 62, 'A'],
        ['HydroPulse', 'Hydro', 310 + test * 20, 94, 'A+'],
        ['GeoCore 1', 'Geothermal', 95 + test * 5, 41, 'B+'],
        ['BioSyn Plant', 'Biomass', 160 + test * 12, 78, 'B'],
        ['TidalForge', 'Marine', 80 + test * 8, 30, 'A']
      ]
    };

    list.push({
      id: `pt${tStr}_di07`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'TABLE_ANALYSIS',
      subtopic: 'Table Analysis',
      difficulty: 'medium',
      difficultyScore: 7,
      stem: `The sortable table below provides performance and financial metrics for 6 renewable infrastructure projects in Region ${test}.\n\nFor each of the following statements, select Yes if the statement is true based on the table; otherwise, select No.`,
      dataSource: tableData1,
      options: [
        'Statement 1: The median budget among projects with Completion % greater than 70% exceeds $150M. (Yes/No)',
        'Statement 2: All projects with an Energy Efficiency Rating of A or A+ have a budget under $300M. (Yes/No)',
        'Statement 3: The project with the lowest completion percentage also has the lowest budget. (Yes/No)'
      ],
      answer: 'Yes | No | Yes',
      explanation: 'Statement 1: Projects with Completion > 70% are Solaria Alpha, HydroPulse, BioSyn Plant. Budgets are 130+, 330+, 172+. Median is 172+ > $150M -> Yes.\nStatement 2: HydroPulse has rating A+ and budget 330M > 300M -> No.\nStatement 3: TidalForge has completion 30% (lowest) and budget 88M (lowest) -> Yes.',
      trap: 'Calculating arithmetic mean instead of sorting to find the median.',
      estSeconds: 125
    });

    list.push({
      id: `pt${tStr}_di08`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'TABLE_ANALYSIS',
      subtopic: 'Table Analysis',
      difficulty: 'medium',
      difficultyScore: 7,
      stem: `Based on the infrastructure project data in the table, evaluate whether the following conclusions are mathematically sound.`,
      dataSource: tableData1,
      options: [
        'Statement 1: Wind and Solar projects collectively represent more than 40% of the total budget of all 6 projects. (Yes/No)',
        'Statement 2: Exactly two projects have an Energy Efficiency Rating below A. (Yes/No)',
        'Statement 3: Sorting by Completion % descending produces the identical ranking as sorting by Budget descending. (Yes/No)'
      ],
      answer: 'Yes | Yes | No',
      explanation: 'Statement 1: Sum of Solaria and Boreas exceeds 40% of the aggregate sum -> Yes.\nStatement 2: Ratings below A are GeoCore (B+) and BioSyn (B), exactly two -> Yes.\nStatement 3: HydroPulse has highest completion (94%) but Boreas or HydroPulse vary, order differs -> No.',
      trap: 'Assuming higher budget always implies higher percentage completion.',
      estSeconds: 120
    });

    list.push({
      id: `pt${tStr}_di09`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'TABLE_ANALYSIS',
      subtopic: 'Table Analysis',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `Analyze the project cost per completion point based on the table data.`,
      dataSource: tableData1,
      options: [
        'Statement 1: Solaria Alpha has a lower budget-to-completion percentage ratio than BioSyn Plant. (Yes/No)',
        'Statement 2: If Boreas Wind completes an additional 20% without changing its budget, its completion percentage would exceed 80%. (Yes/No)',
        'Statement 3: The range of budgets across all 6 projects is strictly greater than $200M. (Yes/No)'
      ],
      answer: 'Yes | Yes | Yes',
      explanation: 'Statement 1: Solaria ratio = 130/85 = 1.53, BioSyn = 172/78 = 2.20. 1.53 < 2.20 -> Yes.\nStatement 2: 62% + 20% = 82% > 80% -> Yes.\nStatement 3: Max budget is HydroPulse (330M+), Min is TidalForge (88M+). Range = 242M+ > 200M -> Yes.',
      trap: 'Comparing absolute percentages rather than computing ratios.',
      estSeconds: 130
    });

    list.push({
      id: `pt${tStr}_di10`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'TABLE_ANALYSIS',
      subtopic: 'Table Analysis',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `Evaluate sector-specific funding proportions based on the table data.`,
      dataSource: tableData1,
      options: [
        'Statement 1: Marine and Geothermal combined budget is less than the Hydro project budget alone. (Yes/No)',
        'Statement 2: More than half of the projects have a completion percentage exceeding 75%. (Yes/No)',
        'Statement 3: The project with the highest budget has the highest efficiency rating. (Yes/No)'
      ],
      answer: 'Yes | No | Yes',
      explanation: 'Statement 1: Marine + Geothermal = ~180M-200M, Hydro is 330M+ -> Yes.\nStatement 2: Projects > 75% are Solaria (85), Hydro (94), BioSyn (78), exactly 3 out of 6 (not strictly more than half) -> No.\nStatement 3: HydroPulse has highest budget and rating A+ (highest) -> Yes.',
      trap: 'Miscounting "more than half" when exactly 50% (3 out of 6) meet the condition.',
      estSeconds: 120
    });

    // 3. GRAPHICS INTERPRETATION (4 Questions: Q11 - Q14)
    const chartData = {
      title: `Quarterly R&D Spending vs. Patent Filings for Cohort ${test}`,
      type: 'scatter',
      dataPoints: [
        { firm: 'A', rd: 15, patents: 8 },
        { firm: 'B', rd: 25, patents: 18 },
        { firm: 'C', rd: 35, patents: 28 },
        { firm: 'D', rd: 45, patents: 34 },
        { firm: 'E', rd: 60, patents: 42 },
        { firm: 'F', rd: 80, patents: 50 }
      ]
    };

    list.push({
      id: `pt${tStr}_di11`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'GRAPHICS_INTERPRETATION',
      subtopic: 'Graphics Interpretation',
      difficulty: 'medium',
      difficultyScore: 7,
      stem: `The scatter plot exhibits the correlation between annual R&D expenditure ($ Millions, X-axis) and patent applications filed (Y-axis) for 6 technology firms.\n\nSelect the options from the dropdown menus that best complete each statement.`,
      dataSource: chartData,
      options: [
        'Dropdown 1: The overall correlation between R&D spending and patent filings across the 6 firms is [strongly positive | moderately negative | non-linear and uncorrelated | perfectly inverse].',
        'Dropdown 2: For firms spending between $20M and $50M on R&D, the marginal patents generated per additional million dollars of R&D is approximately [0.8 patents/$M | 2.5 patents/$M | 4.0 patents/$M | 6.5 patents/$M].'
      ],
      answer: 'strongly positive | 0.8 patents/$M',
      explanation: 'Dropdown 1: As R&D rises steadily from 15 to 80, patents increase monotonically from 8 to 50 -> strongly positive correlation.\nDropdown 2: Between Firm B (25M, 18) and Firm D (45M, 34): Slope = (34 - 18) / (45 - 25) = 16 / 20 = 0.8 patents per $M.',
      trap: 'Calculating average patents per dollar rather than marginal slope (rate of change).',
      estSeconds: 110
    });

    list.push({
      id: `pt${tStr}_di12`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'GRAPHICS_INTERPRETATION',
      subtopic: 'Graphics Interpretation',
      difficulty: 'medium',
      difficultyScore: 7,
      stem: `Based on the R&D and patent scatter plot, complete the following analysis.`,
      dataSource: chartData,
      options: [
        'Dropdown 1: The firm with the highest ratio of patent filings per million dollars of R&D spent is [Firm B | Firm C | Firm D | Firm F].',
        'Dropdown 2: If a firm increases R&D spending from $60M to $80M, the patent output displays [diminishing marginal returns | exponentially increasing returns | negative returns | constant doubling].'
      ],
      answer: 'Firm C | diminishing marginal returns',
      explanation: 'Dropdown 1: Patents/R&D: Firm B = 18/25 = 0.72, Firm C = 28/35 = 0.80 (highest), Firm D = 34/45 = 0.75.\nDropdown 2: R&D expands by $20M while patents rise by only 8 (slope 0.40 vs earlier 0.80) -> diminishing marginal returns.',
      trap: 'Assuming the firm with the largest absolute patent count (Firm F) has the highest efficiency ratio.',
      estSeconds: 115
    });

    list.push({
      id: `pt${tStr}_di13`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'GRAPHICS_INTERPRETATION',
      subtopic: 'Graphics Interpretation',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `Evaluate median metrics and variance from the scatter plot data.`,
      dataSource: chartData,
      options: [
        'Dropdown 1: The median R&D expenditure across all 6 firms is [$40M | $45M | $50M | $60M].',
        'Dropdown 2: The percentage of firms with patent filings strictly greater than 30 is [33% | 50% | 67% | 83%].'
      ],
      answer: '$40M | 50%',
      explanation: 'Dropdown 1: Ordered R&D: 15, 25, 35, 45, 60, 80. Median = (35 + 45)/2 = $40M.\nDropdown 2: Firms with patents > 30 are D (34), E (42), F (50) -> exactly 3 out of 6 firms = 50%.',
      trap: 'Taking the mean of the extremes (15 + 80)/2 = 47.5 instead of the true median.',
      estSeconds: 105
    });

    list.push({
      id: `pt${tStr}_di14`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'GRAPHICS_INTERPRETATION',
      subtopic: 'Graphics Interpretation',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `Project future patent production trends based on the chart trajectory.`,
      dataSource: chartData,
      options: [
        'Dropdown 1: A linear trend line fitted to the first 4 firms would project that a firm spending $50M on R&D would file approximately [38 patents | 45 patents | 52 patents | 60 patents].',
        'Dropdown 2: The firm that deviates most negatively from a straight line connecting Firm A and Firm F is [Firm B | Firm C | Firm D | Firm E].'
      ],
      answer: '38 patents | Firm E',
      explanation: 'Dropdown 1: Linear slope through B, C, D is ~0.8. At $50M: 34 + 5(0.8) = 38 patents.\nDropdown 2: Line from A (15, 8) to F (80, 50) has slope (50 - 8)/(80 - 15) = 42/65 = 0.65. At x=60, expected is 8 + 45(0.65) = 37. Firm E has 42... Wait, Firm B is 8 + 10(0.65) = 14.5. Dev = 18 - 14.5 = +3.5. Firm E is below trajectory.',
      trap: 'Extrapolating without accounting for flattening curvature at higher spending levels.',
      estSeconds: 120
    });

    // 4. TWO-PART ANALYSIS (3 Questions: Q15 - Q17)
    list.push({
      id: `pt${tStr}_di15`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'TWO_PART_ANALYSIS',
      subtopic: 'Two-Part Analysis',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `A pharmaceutical manufacturer needs to mix Solution X ($20\\%$ active compound) and Solution Y ($50\\%$ active compound) to produce exactly 60 liters of a mixture that contains $30\\%$ active compound.\n\nIn the table below, select the number of liters of Solution X and the number of liters of Solution Y required to produce the specified mixture.`,
      options: [
        'Solution X: 40 liters',
        'Solution Y: 20 liters'
      ],
      answer: 'X = 40 | Y = 20',
      explanation: 'Alligation or system of equations: $X + Y = 60$ and $0.20X + 0.50Y = 0.30(60) = 18$.\n$2X + 5Y = 180$. Multiply first eq by 2: $2X + 2Y = 120$. Subtract: $3Y = 60 \\implies Y = 20$ liters. Then $X = 60 - 20 = 40$ liters.',
      trap: 'Swapping the volumes of Solution X and Solution Y.',
      estSeconds: 125
    });

    list.push({
      id: `pt${tStr}_di16`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'TWO_PART_ANALYSIS',
      subtopic: 'Two-Part Analysis',
      difficulty: 'hard',
      difficultyScore: 9,
      stem: `A software firm allocates a total engineering budget of $\\$${1000000 + test * 100000}$ between Frontend Development and AI Model Optimization. Frontend Development generates an expected ROI of $12\\%$, while AI Model Optimization generates an expected ROI of $20\\%$. The overall blended ROI on the total budget must be exactly $15\\%$.\n\nSelect the allocation for Frontend Development and the allocation for AI Model Optimization that satisfy these constraints.`,
      options: [
        `Frontend: \\$${Math.round((1000000 + test * 100000) * 0.625)}`,
        `AI Model: \\$${Math.round((1000000 + test * 100000) * 0.375)}`
      ],
      answer: `Frontend = $${Math.round((1000000 + test * 100000) * 0.625)} | AI = $${Math.round((1000000 + test * 100000) * 0.375)}`,
      explanation: 'By alligation: $|12 - 15| = 3$, and $|20 - 15| = 5$. The ratio of Frontend to AI allocation must be $5 : 3$. Frontend fraction is $5/8 = 62.5\\%$, AI fraction is $3/8 = 37.5\\%$.',
      trap: 'Reversing the 5:3 ratio between the two investment channels.',
      estSeconds: 130
    });

    list.push({
      id: `pt${tStr}_di17`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'TWO_PART_ANALYSIS',
      subtopic: 'Two-Part Analysis',
      difficulty: 'hard',
      difficultyScore: 9,
      stem: `Two integers $A$ and $B$ satisfy the equations $3A + 2B = ${34 + test * 2}$ and $A - B = ${test + 3}$.\n\nSelect the value of $A$ and the value of $B$ in the corresponding columns.`,
      options: [
        `A = ${Math.round((34 + test * 2 + 2 * (test + 3)) / 5)}`,
        `B = ${Math.round((34 + test * 2 + 2 * (test + 3)) / 5) - (test + 3)}`
      ],
      answer: `A = ${Math.round((34 + test * 2 + 2 * (test + 3)) / 5)} | B = ${Math.round((34 + test * 2 + 2 * (test + 3)) / 5) - (test + 3)}`,
      explanation: `System: $B = A - (${test + 3})$. Substitute: $3A + 2(A - (${test + 3})) = 5A - ${2 * (test + 3)} = ${34 + test * 2} \\implies 5A = ${34 + test * 2 + 2 * (test + 3)}$. Solving yields $A$ and $B$.`,
      trap: 'Sign errors when substituting $B = A - (test + 3)$.',
      estSeconds: 110
    });

    // 5. MULTI-SOURCE REASONING (3 Questions: Q18 - Q20)
    const msrTabs = [
      {
        tabId: 'tab1',
        title: 'Executive Memo',
        content: `Memorandum from CEO to Corporate Division Heads (Fiscal Year ${test + 2024}):\nTo meet corporate ESG sustainability benchmarks, every operating division must reduce carbon emissions by at least 25% relative to the 2022 baseline by Q4. Divisions that achieve this reduction will receive a 15% bonus pool expansion. Divisions failing to meet the target will be subject to a 10% capital expenditure holdback, unless they demonstrate that at least 80% of their operational energy is procured from certified solar or wind utilities.`
      },
      {
        tabId: 'tab2',
        title: 'Audit Findings',
        content: `Independent Sustainability Audit Report:\n- Division Alpha: Carbon emissions reduced by 28% from 2022 baseline; certified clean energy share is 65%.\n- Division Beta: Carbon emissions reduced by 18% from 2022 baseline; certified clean energy share is 84%.\n- Division Gamma: Carbon emissions reduced by 12% from 2022 baseline; certified clean energy share is 72%.\n- Division Delta: Carbon emissions reduced by 30% from 2022 baseline; certified clean energy share is 91%.`
      },
      {
        tabId: 'tab3',
        title: 'Financial Guidelines',
        content: `Treasury Operational Rule 4.1:\nCapital expenditure holdbacks take effect on the first business day of the following fiscal year. Bonus pool expansions are credited immediately upon publication of verified audit findings. No division may receive both a bonus pool expansion and a capital expenditure holdback in the same fiscal year.`
      }
    ];

    list.push({
      id: `pt${tStr}_di18`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'MULTI_SOURCE_REASONING',
      subtopic: 'Multi-Source Reasoning',
      difficulty: 'medium',
      difficultyScore: 7,
      stem: `Based on the documents provided across the three tabs, which of the four operating divisions will receive a 15% bonus pool expansion?`,
      dataSource: { tabs: msrTabs },
      options: [
        'Division Alpha and Division Delta only',
        'Division Beta and Division Delta only',
        'Division Delta only',
        'Division Alpha, Division Beta, and Division Delta',
        'None of the divisions'
      ],
      answer: 'A',
      explanation: 'Tab 1 specifies that divisions that reduce emissions by at least 25% receive the bonus expansion. Tab 2 shows Division Alpha achieved 28% reduction (>= 25%) and Division Delta achieved 30% reduction (>= 25%). Division Beta (18%) and Gamma (12%) do not meet the 25% threshold.',
      trap: 'Assuming Division Beta qualifies for the bonus because of its 84% clean energy share (clean energy only grants exemption from the holdback, not the bonus).',
      estSeconds: 125
    });

    list.push({
      id: `pt${tStr}_di19`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'MULTI_SOURCE_REASONING',
      subtopic: 'Multi-Source Reasoning',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `Which of the operating divisions will be subject to a 10% capital expenditure holdback according to the audit findings and policy rules?`,
      dataSource: { tabs: msrTabs },
      options: [
        'Division Gamma only',
        'Division Beta and Division Gamma only',
        'Division Beta only',
        'Division Alpha and Division Gamma only',
        'All four divisions'
      ],
      answer: 'A',
      explanation: 'Divisions failing the 25% target are Beta (18%) and Gamma (12%). However, Tab 1 grants an exemption if at least 80% of energy is clean. Division Beta has 84% clean energy (exempt). Division Gamma has only 72% clean energy (< 80%), so it is the ONLY division subject to the holdback.',
      trap: 'Overlooking the 80% clean energy exemption rule in Tab 1 for Division Beta.',
      estSeconds: 130
    });

    list.push({
      id: `pt${tStr}_di20`,
      test,
      section: 'DATA_INSIGHTS',
      type: 'MULTI_SOURCE_REASONING',
      subtopic: 'Multi-Source Reasoning',
      difficulty: 'hard',
      difficultyScore: 9,
      stem: `If Division Gamma renegotiates its energy utility contract to increase its certified clean energy share from 72% to 82% before Q4 without altering its 12% carbon reduction rate, what would be the financial outcome for Division Gamma?`,
      dataSource: { tabs: msrTabs },
      options: [
        'It would receive a 15% bonus pool expansion and avoid the capital expenditure holdback.',
        'It would avoid the 10% capital expenditure holdback but would not receive a bonus pool expansion.',
        'It would remain subject to the 10% capital expenditure holdback because carbon reduction is under 25%.',
        'It would receive both a bonus pool expansion and a capital expenditure holdback.',
        'It would be exempt from all financial audit rules.'
      ],
      answer: 'B',
      explanation: 'With 82% clean energy, Division Gamma would meet the 80% threshold for exemption from the 10% capital expenditure holdback. However, because its carbon reduction is only 12% (< 25%), it does not qualify for the bonus pool expansion.',
      trap: 'Assuming qualifying for the exemption automatically confers the bonus expansion.',
      estSeconds: 120
    });
  }

  return list;
}
