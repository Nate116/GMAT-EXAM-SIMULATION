// AUTO-GENERATED GMAT FOCUS PRACTICE TEST BANK (640 Unique Questions)
import { PracticeTestRecord } from '../types/gmat';

export const FULL_GENERATED_PRACTICE_TESTS: PracticeTestRecord[] = [
  {
    "testNumber": 1,
    "id": "pt_01",
    "title": "Official Focus Mock #1 (Full 64-Q Simulation)",
    "date": "2025-01-12",
    "totalScore": 645,
    "quantScore": 80,
    "verbalScore": 79,
    "dataInsightsScore": 79,
    "structure": {
      "quantQuestions": 21,
      "verbalQuestions": 23,
      "dataInsightsQuestions": 20,
      "total": 64,
      "durationMinutes": 135
    },
    "questions": [
      {
        "id": "pt01_q01",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In industrial manufacturing & supply chain, a barcode serial integer $n$ satisfies that $n^2 - 1$ is divisible by prime $7$. If $1 < n < 7$, how many integer values can $n$ assume?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "6"
        ],
        "answer": "B",
        "explanation": "Since $n^2 - 1 = (n - 1)(n + 1)$ is divisible by prime 7, by Euclid's lemma either 7 divides $(n - 1)$ or 7 divides $(n + 1)$. Given $1 < n < 7$, $n - 1 < 7$, so 7 cannot divide $n - 1$. For 7 to divide $n + 1$, we must have $n + 1 = 7 \\implies n = 6$. Thus, exactly 1 integer value ($n = 6$) satisfies the condition.",
        "trap": "Assuming both $(n - 1)$ and $(n + 1)$ can yield solutions within the open interval $(1, p)$.",
        "estSeconds": 90
      },
      {
        "id": "pt01_q02",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "At AeroSpace Dynamics, Mission Flight Controller monitors two operational units: Primary Unit Alpha completes a full cycle of firing burn cycles in 5 hours working alone, whereas Secondary Unit Beta requires 10 hours alone. If both units operate simultaneously at their constant rates to complete the cycle on a shared ion thruster calibration node, how many hours will they take together?",
        "options": [
          "2.17",
          "2.67",
          "3.17",
          "6.00",
          "3.00"
        ],
        "answer": "B",
        "explanation": "Combined rate $R = 1/4 + 1/8 = 3/8$. Time $T = 1/R = 8/3 = 2.67$ hours.",
        "trap": "Taking the arithmetic average of the two individual times.",
        "estSeconds: 85": 85,
        "estSeconds": 85
      },
      {
        "id": "pt01_q03",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "A distributor of titanium avionics housings marks up factory cost by 25% to set list price, then offers prime contractors a 10% exhibition discount. What net percentage profit is earned over baseline cost?",
        "options": [
          "10.0%",
          "12.5%",
          "15.0%",
          "16.5%",
          "20.0%"
        ],
        "answer": "B",
        "explanation": "Multiplier $= (1 + 0.25) \\times (1 - 0.1) = 1.1250$. Net profit percentage $= (1.1250 - 1) \\times 100 = 12.5\\%$.",
        "trap": "Subtracting the percentages directly (25% - 10% = 15%).",
        "estSeconds": 90
      },
      {
        "id": "pt01_q04",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a mathematical model tracking orbital velocity at AeroSpace Dynamics, the exponent variable $x$ satisfies $3^{2x+1} - $3^{2x-1} = 17496$. What is the value of $x^2 + x$?",
        "options": [
          "10",
          "12",
          "14",
          "16",
          "15"
        ],
        "answer": "B",
        "explanation": "Factor out $2^{2x-1}$: $2^{2x-1}(2^2 - 1) = 32(2^2 - 1)$. Equating exponents: $2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$. Then $x^2 + x = 3^2 + 3 = 12$.",
        "trap": "Miscalculating the factored term $(base^2 - 1)$.",
        "estSeconds": 100
      },
      {
        "id": "pt01_q05",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Inequalities & Absolute Values",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "During a tolerance check on ion thruster calibration node measurements at AeroSpace Dynamics, how many integer values of $k$ satisfy the inequality $|2k - 6| \\le 13$?",
        "options": [
          "11",
          "12",
          "13",
          "14",
          "10"
        ],
        "answer": "B",
        "explanation": "Expand absolute value: $-11 \\le 2k - 5 \\le 11 \\implies -6 \\le 2k \\le 16 \\implies -3.0 \\le k \\le 8.0$. Length of interval for integers is strictly 12.",
        "trap": "Neglecting to include both endpoints when calculating inclusive integer count.",
        "estSeconds": 95
      },
      {
        "id": "pt01_q06",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a quality audit of 7 distinct positive integer telemetry ping intervals in milliseconds, the median interval is 16 and the arithmetic mean is 21. What is the maximum possible value of the largest ping interval?",
        "options": [
          "95",
          "97",
          "99",
          "101",
          "103"
        ],
        "answer": "C",
        "explanation": "To maximize $x_7$, minimize elements 1, 2, 3, 5, 6. Minimum distinct positive integers: $x_1=1, x_2=2, x_3=3$. Given median $x_4 = 20$. Minimum distinct integers above median: $x_5 = 21, x_6 = 22$. Sum of all 7 integers $= 7 \\times 24 = 168$. Subtracting the 6 minimal values leaves maximum $x_7 = 99$.",
        "trap": "Allowing integers above median to equal the median rather than being strictly distinct.",
        "estSeconds": 115
      },
      {
        "id": "pt01_q07",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "An aerospace review panel of 4 engineers is formed from 5 propulsion specialists and 4 avionics technicians. If the panel must include at least 2 propulsion specialists and at least 1 avionics technician, how many distinct panels can be chosen?",
        "options": [
          "50",
          "55",
          "60",
          "65",
          "70"
        ],
        "answer": "C",
        "explanation": "Ways to select 2 hardware engineers from 5: $\\binom{5}{2} = 10$. Ways to select 2 software architects from 4: $\\binom{4}{2} = 6$. Total distinct combinations $= 10 \\times 6 = 60$.",
        "trap": "Adding the combinations instead of multiplying.",
        "estSeconds": 105
      },
      {
        "id": "pt01_q08",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In spacecraft trajectory calculations, what is the largest integer exponent $k$ such that $3^k$ evenly divides $35!$ without leaving a remainder?",
        "options": [
          "7",
          "8",
          "9",
          "10",
          "11"
        ],
        "answer": "C",
        "explanation": "Powers of 10 in a factorial are limited by prime factor 5. Using Legendre's formula: $\\lfloor 40/5 \\rfloor + \\lfloor 40/25 \\rfloor = 8 + 1 = 9$. Thus $k = 9$.",
        "trap": "Counting powers of 2 or stopping after first division by 5.",
        "estSeconds": 90
      },
      {
        "id": "pt01_q09",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "An orbital shuttle completes an outbound tracking loop of distance $D$ at 35 mph and returns along the identical path at 70 mph. What is the shuttle's average speed in mph across the entire round trip?",
        "options": [
          "48.0",
          "50.0",
          "50.0",
          "46.0",
          "51.5"
        ],
        "answer": "A",
        "explanation": "Average speed over equal distances is the harmonic mean: $V = \\frac{2 s_1 s_2}{s_1 + s_2} = \\frac{2 \\times 40 \\times 60}{100} = 48.0$ mph.",
        "trap": "Choosing the arithmetic mean (option B).",
        "estSeconds": 80
      },
      {
        "id": "pt01_q10",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A coolant vat at an aerospace launch complex contains 45 liters of a 30% glycol solution. How many liters of pure distilled water must be added to dilute the coolant to a 15% glycol concentration?",
        "options": [
          "26",
          "28",
          "30",
          "32",
          "34"
        ],
        "answer": "C",
        "explanation": "Solvent mass is constant: $0.20 \\times 30 = 0.10 \\times (30 + w) \\implies 30 + w = 60 \\implies w = 30$ liters.",
        "trap": "Reporting total final volume rather than added water.",
        "estSeconds": 95
      },
      {
        "id": "pt01_q11",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Sequences & Series",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In an arithmetic sequence monitoring industrial manufacturing & supply chain production batches, the first term is 4 and the common difference between consecutive terms is 3. What is the sum of the first 15 terms of this sequence?",
        "options": [
          "360",
          "367",
          "375",
          "383",
          "390"
        ],
        "answer": "C",
        "explanation": "Sum formula $S_{15} = \\frac{15}{2} [2(4) + 14(3)] = 15 \\times [4 + 7(3)] = 375$.",
        "trap": "Using 15d instead of (n-1)d in the summation formula.",
        "estSeconds": 90
      },
      {
        "id": "pt01_q12",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Overlapping Sets",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Among 100 technical facilities surveyed in industrial manufacturing & supply chain, 50 have implemented Protocol A, 40 have implemented Protocol B, and 10 have implemented neither. How many facilities have implemented BOTH Protocol A and Protocol B?",
        "options": [
          "-4",
          "-2",
          "0",
          "2",
          "4"
        ],
        "answer": "C",
        "explanation": "Facilities with at least one protocol $= 100 - 10 = 90$. By inclusion-exclusion: $|A \\cap B| = |A| + |B| - |A \\cup B| = 50 + 40 - 90 = 0$.",
        "trap": "Subtracting neither from both sets individually.",
        "estSeconds": 85
      },
      {
        "id": "pt01_q13",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A satellite sensor assembly box contains 5 red circuit chips and 7 blue circuit chips. If an engineer randomly selects 3 chips without replacement, what is the probability that exactly 2 are red?",
        "options": [
          "\\frac{14}{36}",
          "\\frac{15}{36}",
          "\\frac{16}{36}",
          "\\frac{17}{36}",
          "\\frac{18}{36}"
        ],
        "answer": "C",
        "explanation": "Ways to draw two compliant parts: $\\binom{5}{2} = 10$. Ways to draw two defective parts: $\\binom{4}{2} = 6$. Total favorable $= 16$. Total unrestricted pairs: $\\binom{9}{2} = 36$. Probability $= 16/36$.",
        "trap": "Assuming sampling with replacement.",
        "estSeconds": 100
      },
      {
        "id": "pt01_q14",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Quadratics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In spacecraft orbital velocity equations, roots of the quadratic $x^2 - 14x + K = 0$ are both positive integers with an absolute difference of 2. What is the value of constant $K$?",
        "options": [
          "20",
          "22",
          "24",
          "26",
          "28"
        ],
        "answer": "C",
        "explanation": "Let roots be $r_1$ and $r_2$. Sum $r_1 + r_2 = 10$, and difference $r_2 - r_1 = 2$. Solving gives roots $r_1 = 4$ and $r_2 = 6$. By Vieta's formulas, $K = r_1 \\times r_2 = 4 \\times 6 = 24$.",
        "trap": "Adding the roots rather than multiplying for the constant term $K$.",
        "estSeconds": 85
      },
      {
        "id": "pt01_q15",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In an algorithmic encryption routine for orbital satellite telemetry, what is the units digit of the integer evaluation $7^{47} + 3$?",
        "options": [
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": "C",
        "explanation": "Powers of 7 cycle in units digits: $7^1 \\rightarrow 7, 7^2 \\rightarrow 9, 7^3 \\rightarrow 3, 7^4 \\rightarrow 1$. Exponent $43 \\equiv 3 \\pmod 4$, so $7^{43}$ ends in 3. Adding 3 gives a units digit of $(3 + 3) \\pmod 10 = 6$.",
        "trap": "Failing to apply base-4 cyclicity to the exponent.",
        "estSeconds": 80
      },
      {
        "id": "pt01_q16",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Coordinate & Analytical Geometry",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In a Cartesian telemetry grid mapping ion thruster calibration node coordinates for AeroSpace Dynamics, line $L_1$ passes through $(0, 6)$ and $(4, 0)$. If perpendicular line $L_2$ intersects the origin $(0, 0)$, what is the slope of line $L_2$?",
        "options": [
          "\\frac{3}{5}",
          "-\\frac{3}{5}",
          "\\frac{5}{3}",
          "-\\frac{5}{3}",
          "1"
        ],
        "answer": "A",
        "explanation": "Slope of $L_1$ is $m_1 = \\frac{0 - 5}{3 - 0} = -\\frac{5}{3}$. Perpendicular slope $m_2 = -1/m_1 = \\frac{3}{5}$.",
        "trap": "Inverting without negating (option B or C).",
        "estSeconds: 75": 75,
        "estSeconds": 75
      },
      {
        "id": "pt01_q17",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sensor calibration test in industrial manufacturing & supply chain, the standard deviation of pressure readings was 4.0 psi. If each reading is multiplied by 1.25 and then decreased by 3.5 psi, what is the standard deviation of the transformed readings in psi?",
        "options": [
          "1.50",
          "5.00",
          "4.00",
          "8.50",
          "6.00"
        ],
        "answer": "B",
        "explanation": "Standard deviation is unaffected by the subtraction of a constant (-3.5), but scales by $|1.25|$: $\\sigma_{new} = 1.25 \\times 4.0 = 5.00$ psi.",
        "trap": "Subtracting 3.5 from the standard deviation (option A).",
        "estSeconds": 70
      },
      {
        "id": "pt01_q18",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In orbital satellite telemetry, replacement parts for ion thruster calibration node at AeroSpace Dynamics are packaged strictly in quantities of 5 or 8 units. What is the greatest integer number of units that cannot be assembled using non-negative combinations of these packages?",
        "options": [
          "15",
          "16",
          "17",
          "18",
          "19"
        ],
        "answer": "C",
        "explanation": "By the Frobenius Coin Formula for coprime integers $a$ and $b$, the largest non-constructible integer is $ab - a - b = (4)(7) - 4 - 7 = 17$.",
        "trap": "Computing ab directly without subtracting (a + b).",
        "estSeconds": 110
      },
      {
        "id": "pt01_q19",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "When the two decimal digits of positive integer telemetry frequency $N$ are transposed, the new integer exceeds $N$ by 27. What is the positive difference between the units digit and the tens digit of $N$?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": "C",
        "explanation": "$(10B + A) - (10A + B) = 9(B - A) = 18 \\implies B - A = 2$.",
        "trap": "Confusing (B - A) with (A - B).",
        "estSeconds": 75
      },
      {
        "id": "pt01_q20",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A capital expenditure allocation of $\\$4,000$ in industrial manufacturing & supply chain appreciates at an annual rate of 10% compounded semi-annually. What is the total accumulated interest after 1 year?",
        "options": [
          "\\$400",
          "\\$410",
          "\\$420",
          "\\$440",
          "\\$450"
        ],
        "answer": "B",
        "explanation": "Semi-annual rate is 5% over 2 periods. Multiplier is $(1.05)^2 = 1.1025$. Interest $= 4000 \\times 0.1025 = \\$410$.",
        "trap": "Calculating simple interest at 10% (option A).",
        "estSeconds": 90
      },
      {
        "id": "pt01_q21",
        "test": 1,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "For all positive real numbers $u$ and $v$ modeling orbital velocity at AeroSpace Dynamics, an operational operator $\\star$ is defined by $u \\star v = \\frac{u^2 - v^2}{u - v}$. What is the numerical value of $7 \\star 3$?",
        "options": [
          "\\frac{2}{2}",
          "\\frac{2}{3}",
          "\\frac{2}{4}",
          "2",
          "1"
        ],
        "answer": "B",
        "explanation": "$2 \\diamond 2 = \\frac{2 \\times 2}{2 + 2 + 2} = \\frac{2^2}{3(2)} = \\frac{2}{3}$.",
        "trap": "Adding the constants in the denominator incorrectly.",
        "estSeconds": 85
      },
      {
        "id": "pt01_v01",
        "test": 1,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 6,
        "passage": "For decades, marine biologists assumed that primary production in the benthic biosphere was strictly constrained by solar radiation filtering down from the photic zone. Under this classical framework, all benthic ecosystems were thought to depend entirely on detrital 'marine snow'\u2014organic particulates drifting down from surface phytoplankton blooms.\n\nHowever, the discovery of deep-sea hydrothermal vent communities along the Gal\u00e1pagos Rift challenged this photosynthetic paradigm. Vent ecosystems thrive in total aphotic darkness, supported by chemolithoautotrophic bacteria that oxidize dissolved hydrogen sulfide expelled by subterranean magma chambers. Rather than exhibiting secondary trophic dependence on surface photosynthesis, hydrothermal vent fauna, such as the vestimentiferan tube worm Riftia pachyptila, maintain obligate endosymbiotic relationships with sulfur-oxidizing microbes, establishing an entirely independent biological energetic foundation.",
        "stem": "The primary purpose of the passage on deep-sea hydrothermal vents & chemotrophy is to:",
        "options": [
          "Refute an established scientific doctrine by demonstrating that earlier measurements were entirely fraudulent.",
          "Challenge a traditional foundational model by presenting recent empirical evidence that supports an alternative paradigm.",
          "Reconcile two competing historical hypotheses by proposing a hybrid theoretical compromise.",
          "Advocate for the immediate cessation of field testing until biochemical instruments are standardized.",
          "Prove that evolutionary biological adaptations occur exclusively through physical genomic sequence alterations."
        ],
        "answer": "B",
        "explanation": "The passage outlines a traditional, long-standing theoretical assumption in its opening paragraph, then introduces modern empirical methodologies that challenge that framework and suggest a more dynamic mechanism.",
        "trap": "Selecting option A, which uses extreme, accusatory language ('entirely fraudulent') unsupported by the text.",
        "estSeconds": 100
      },
      {
        "id": "pt01_v02",
        "test": 1,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "For decades, marine biologists assumed that primary production in the benthic biosphere was strictly constrained by solar radiation filtering down from the photic zone. Under this classical framework, all benthic ecosystems were thought to depend entirely on detrital 'marine snow'\u2014organic particulates drifting down from surface phytoplankton blooms.\n\nHowever, the discovery of deep-sea hydrothermal vent communities along the Gal\u00e1pagos Rift challenged this photosynthetic paradigm. Vent ecosystems thrive in total aphotic darkness, supported by chemolithoautotrophic bacteria that oxidize dissolved hydrogen sulfide expelled by subterranean magma chambers. Rather than exhibiting secondary trophic dependence on surface photosynthesis, hydrothermal vent fauna, such as the vestimentiferan tube worm Riftia pachyptila, maintain obligate endosymbiotic relationships with sulfur-oxidizing microbes, establishing an entirely independent biological energetic foundation.",
        "stem": "It can be inferred from the passage on deep-sea hydrothermal vents & chemotrophy that proponents of the earlier model assumed that:",
        "options": [
          "Biological systems exhibit extensive behavioral plasticity when subjected to environmental shifts.",
          "Observed physical phenomena were governed primarily by static or localized equilibrium constraints.",
          "Molecular sequencing technologies would permanently confirm traditional observational hypotheses.",
          "Nutrient availability was completely uniform across all ecological micro-habitats.",
          "Adaptive modifications could be transmitted across generations without physical nucleotide changes."
        ],
        "answer": "B",
        "explanation": "The passage notes that the classical model assumed static, rigid constraints (e.g., rigid niche partitioning, exclusive nucleotide dependence, or uniform competition) before modern dynamic evidence emerged.",
        "trap": "Confusing the revisionist perspective with the traditional hypothesis being evaluated.",
        "estSeconds": 110
      },
      {
        "id": "pt01_v03",
        "test": 1,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "For decades, marine biologists assumed that primary production in the benthic biosphere was strictly constrained by solar radiation filtering down from the photic zone. Under this classical framework, all benthic ecosystems were thought to depend entirely on detrital 'marine snow'\u2014organic particulates drifting down from surface phytoplankton blooms.\n\nHowever, the discovery of deep-sea hydrothermal vent communities along the Gal\u00e1pagos Rift challenged this photosynthetic paradigm. Vent ecosystems thrive in total aphotic darkness, supported by chemolithoautotrophic bacteria that oxidize dissolved hydrogen sulfide expelled by subterranean magma chambers. Rather than exhibiting secondary trophic dependence on surface photosynthesis, hydrothermal vent fauna, such as the vestimentiferan tube worm Riftia pachyptila, maintain obligate endosymbiotic relationships with sulfur-oxidizing microbes, establishing an entirely independent biological energetic foundation.",
        "stem": "According to the second paragraph of the passage on deep-sea hydrothermal vents & chemotrophy, the newly discovered mechanism is significant primarily because it:",
        "options": [
          "Eliminates all scientific uncertainty surrounding global atmospheric convection.",
          "Demonstrates that biological entities can adapt or function through pathways previously deemed impossible or secondary.",
          "Proves that evolutionary mutations occur at a constant mathematical rate across geological epochs.",
          "Forces commercial enterprises to halt exploratory drilling operations immediately.",
          "Refutes the universal applicability of thermodynamic physical laws."
        ],
        "answer": "B",
        "explanation": "Paragraph 2 reveals an independent or dynamic pathway (e.g. chemolithoautotrophy, epigenetic inheritance, leading-edge vortices, or mycorrhizal resource sharing) that classical science deemed impossible or minor.",
        "trap": "Selecting an overly grandiose claim that the finding overturns fundamental thermodynamic laws (option E).",
        "estSeconds": 95
      },
      {
        "id": "pt01_v04",
        "test": 1,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "For decades, marine biologists assumed that primary production in the benthic biosphere was strictly constrained by solar radiation filtering down from the photic zone. Under this classical framework, all benthic ecosystems were thought to depend entirely on detrital 'marine snow'\u2014organic particulates drifting down from surface phytoplankton blooms.\n\nHowever, the discovery of deep-sea hydrothermal vent communities along the Gal\u00e1pagos Rift challenged this photosynthetic paradigm. Vent ecosystems thrive in total aphotic darkness, supported by chemolithoautotrophic bacteria that oxidize dissolved hydrogen sulfide expelled by subterranean magma chambers. Rather than exhibiting secondary trophic dependence on surface photosynthesis, hydrothermal vent fauna, such as the vestimentiferan tube worm Riftia pachyptila, maintain obligate endosymbiotic relationships with sulfur-oxidizing microbes, establishing an entirely independent biological energetic foundation.",
        "stem": "The author\u2019s attitude toward the traditional scientific framework in deep-sea hydrothermal vents & chemotrophy can best be described as:",
        "options": [
          "Uncompromisingly hostile and dismissive of historical scholars.",
          "Respectful of its historical role while emphasizing its conceptual limitations in light of recent findings.",
          "Enthusiastically supportive of its continuing supremacy over modern data.",
          "Indifferent to its theoretical and practical consequences.",
          "Skeptical of whether any scientific paradigm can ever be empirically tested."
        ],
        "answer": "B",
        "explanation": "The author treats the historical paradigm with measured academic respect ('long held', 'classical framework') while clearly identifying its empirical limitations.",
        "trap": "Choosing an exaggerated emotional descriptor like hostile or indifferent.",
        "estSeconds": 100
      },
      {
        "id": "pt01_v05",
        "test": 1,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "For decades, marine biologists assumed that primary production in the benthic biosphere was strictly constrained by solar radiation filtering down from the photic zone. Under this classical framework, all benthic ecosystems were thought to depend entirely on detrital 'marine snow'\u2014organic particulates drifting down from surface phytoplankton blooms.\n\nHowever, the discovery of deep-sea hydrothermal vent communities along the Gal\u00e1pagos Rift challenged this photosynthetic paradigm. Vent ecosystems thrive in total aphotic darkness, supported by chemolithoautotrophic bacteria that oxidize dissolved hydrogen sulfide expelled by subterranean magma chambers. Rather than exhibiting secondary trophic dependence on surface photosynthesis, hydrothermal vent fauna, such as the vestimentiferan tube worm Riftia pachyptila, maintain obligate endosymbiotic relationships with sulfur-oxidizing microbes, establishing an entirely independent biological energetic foundation.",
        "stem": "According to the passage on coral reef trophodynamics, which empirical laboratory technique provided the decisive breakthrough disproving rigid trophic partitioning?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on deep-sea hydrothermal vents & chemotrophy is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt01_v06",
        "test": 1,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 8,
        "passage": "For decades, marine biologists assumed that primary production in the benthic biosphere was strictly constrained by solar radiation filtering down from the photic zone. Under this classical framework, all benthic ecosystems were thought to depend entirely on detrital 'marine snow'\u2014organic particulates drifting down from surface phytoplankton blooms.\n\nHowever, the discovery of deep-sea hydrothermal vent communities along the Gal\u00e1pagos Rift challenged this photosynthetic paradigm. Vent ecosystems thrive in total aphotic darkness, supported by chemolithoautotrophic bacteria that oxidize dissolved hydrogen sulfide expelled by subterranean magma chambers. Rather than exhibiting secondary trophic dependence on surface photosynthesis, hydrothermal vent fauna, such as the vestimentiferan tube worm Riftia pachyptila, maintain obligate endosymbiotic relationships with sulfur-oxidizing microbes, establishing an entirely independent biological energetic foundation.",
        "stem": "With which of the following assertions regarding tropical reef fish foraging behavior would the author of the passage most likely agree?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on deep-sea hydrothermal vents & chemotrophy is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt01_v07",
        "test": 1,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 9,
        "passage": "For decades, marine biologists assumed that primary production in the benthic biosphere was strictly constrained by solar radiation filtering down from the photic zone. Under this classical framework, all benthic ecosystems were thought to depend entirely on detrital 'marine snow'\u2014organic particulates drifting down from surface phytoplankton blooms.\n\nHowever, the discovery of deep-sea hydrothermal vent communities along the Gal\u00e1pagos Rift challenged this photosynthetic paradigm. Vent ecosystems thrive in total aphotic darkness, supported by chemolithoautotrophic bacteria that oxidize dissolved hydrogen sulfide expelled by subterranean magma chambers. Rather than exhibiting secondary trophic dependence on surface photosynthesis, hydrothermal vent fauna, such as the vestimentiferan tube worm Riftia pachyptila, maintain obligate endosymbiotic relationships with sulfur-oxidizing microbes, establishing an entirely independent biological energetic foundation.",
        "stem": "Which of the following best characterizes the rhetorical organization and logical progression of the passage analyzing orbital satellite telemetry?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on deep-sea hydrothermal vents & chemotrophy is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt01_v08",
        "test": 1,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "For decades, marine biologists assumed that primary production in the benthic biosphere was strictly constrained by solar radiation filtering down from the photic zone. Under this classical framework, all benthic ecosystems were thought to depend entirely on detrital 'marine snow'\u2014organic particulates drifting down from surface phytoplankton blooms.\n\nHowever, the discovery of deep-sea hydrothermal vent communities along the Gal\u00e1pagos Rift challenged this photosynthetic paradigm. Vent ecosystems thrive in total aphotic darkness, supported by chemolithoautotrophic bacteria that oxidize dissolved hydrogen sulfide expelled by subterranean magma chambers. Rather than exhibiting secondary trophic dependence on surface photosynthesis, hydrothermal vent fauna, such as the vestimentiferan tube worm Riftia pachyptila, maintain obligate endosymbiotic relationships with sulfur-oxidizing microbes, establishing an entirely independent biological energetic foundation.",
        "stem": "In the context of the second paragraph of the passage on orbital satellite telemetry, the author's primary analytical focus centers on:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on deep-sea hydrothermal vents & chemotrophy is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt01_v09",
        "test": 1,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "For decades, marine biologists assumed that primary production in the benthic biosphere was strictly constrained by solar radiation filtering down from the photic zone. Under this classical framework, all benthic ecosystems were thought to depend entirely on detrital 'marine snow'\u2014organic particulates drifting down from surface phytoplankton blooms.\n\nHowever, the discovery of deep-sea hydrothermal vent communities along the Gal\u00e1pagos Rift challenged this photosynthetic paradigm. Vent ecosystems thrive in total aphotic darkness, supported by chemolithoautotrophic bacteria that oxidize dissolved hydrogen sulfide expelled by subterranean magma chambers. Rather than exhibiting secondary trophic dependence on surface photosynthesis, hydrothermal vent fauna, such as the vestimentiferan tube worm Riftia pachyptila, maintain obligate endosymbiotic relationships with sulfur-oxidizing microbes, establishing an entirely independent biological energetic foundation.",
        "stem": "The author introduces competing hypotheses and potential criticisms in the discussion of orbital satellite telemetry primarily in order to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on deep-sea hydrothermal vents & chemotrophy is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt01_v10",
        "test": 1,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 9,
        "passage": "For decades, marine biologists assumed that primary production in the benthic biosphere was strictly constrained by solar radiation filtering down from the photic zone. Under this classical framework, all benthic ecosystems were thought to depend entirely on detrital 'marine snow'\u2014organic particulates drifting down from surface phytoplankton blooms.\n\nHowever, the discovery of deep-sea hydrothermal vent communities along the Gal\u00e1pagos Rift challenged this photosynthetic paradigm. Vent ecosystems thrive in total aphotic darkness, supported by chemolithoautotrophic bacteria that oxidize dissolved hydrogen sulfide expelled by subterranean magma chambers. Rather than exhibiting secondary trophic dependence on surface photosynthesis, hydrothermal vent fauna, such as the vestimentiferan tube worm Riftia pachyptila, maintain obligate endosymbiotic relationships with sulfur-oxidizing microbes, establishing an entirely independent biological energetic foundation.",
        "stem": "Based on the author's argument regarding marine dietary plasticity, how would researchers most likely interpret an observed dietary overlap in sympatric freshwater cichlids?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on deep-sea hydrothermal vents & chemotrophy is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt01_v11",
        "test": 1,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "For decades, marine biologists assumed that primary production in the benthic biosphere was strictly constrained by solar radiation filtering down from the photic zone. Under this classical framework, all benthic ecosystems were thought to depend entirely on detrital 'marine snow'\u2014organic particulates drifting down from surface phytoplankton blooms.\n\nHowever, the discovery of deep-sea hydrothermal vent communities along the Gal\u00e1pagos Rift challenged this photosynthetic paradigm. Vent ecosystems thrive in total aphotic darkness, supported by chemolithoautotrophic bacteria that oxidize dissolved hydrogen sulfide expelled by subterranean magma chambers. Rather than exhibiting secondary trophic dependence on surface photosynthesis, hydrothermal vent fauna, such as the vestimentiferan tube worm Riftia pachyptila, maintain obligate endosymbiotic relationships with sulfur-oxidizing microbes, establishing an entirely independent biological energetic foundation.",
        "stem": "The passage indicates that future scientific and operational frameworks in orbital satellite telemetry will be required to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on deep-sea hydrothermal vents & chemotrophy is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt01_v12",
        "test": 1,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Mission Flight Controller at AeroSpace Dynamics: \"Deploying ion thruster calibration node will enable our division to optimize orbital velocity within twelve months. Therefore, the executive steering committee must approve our funding request without delay.\"\n\nWhich of the following is an unstated assumption upon which the mission flight controller's argument depends?",
        "options": [
          "The policy will not inadvertently trigger driver diversion to side streets that cancels out the expected gains.",
          "The capital allocation required is strictly less than any expenditure approved in the prior fiscal year.",
          "No neighboring jurisdictions have considered implementing similar regulatory policies.",
          "The personnel tasked with enforcing the policy have completed postgraduate compliance degrees.",
          "Public opinion surveys indicate universal consumer enthusiasm for the initiative."
        ],
        "answer": "A",
        "explanation": "Negation test: If the policy DOES trigger driver diversion to side streets that cancels out the expected gains, the goal of pedestrian collision reduction will fail, collapsing the argument.",
        "trap": "Focusing on administrative trivia (degree qualifications) or budget comparisons.",
        "estSeconds": 115
      },
      {
        "id": "pt01_v13",
        "test": 1,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Flight Dynamics Lead at AeroSpace Dynamics: 'Our three-month trial of ion thruster units in orbital sector Alpha resulted in a 25% increase in velocity efficiency. This proves that ion thrusters directly generated the observed efficiency gains.' Which of the following, if true, most seriously undermines the lead's claim?",
        "options": [
          "Test district Alpha simultaneously experienced a major external demographic shift that naturally produces high baseline performance.",
          "The software utilized to compile test results was upgraded three weeks prior to the pilot rollout.",
          "Several junior employees in district Alpha reported working five additional overtime hours during the pilot.",
          "The cost of the pilot study was covered by a philanthropic research grant rather than operating revenue.",
          "Competing firms in the same industry have not yet published their quarterly operational statistics."
        ],
        "answer": "A",
        "explanation": "Introducing an external confounding variable (simultaneous demographic shift) directly attacks the causal attribution made by the consultant.",
        "trap": "Pointing out that the pilot was grant-funded, which affects replication finances but not the validity of the pilot's causal data.",
        "estSeconds": 110
      },
      {
        "id": "pt01_v14",
        "test": 1,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Strategy Director at AeroSpace Dynamics: \"Allocating capital toward ion thruster calibration node represents the most effective strategic pathway for our firm to expand orbital velocity.\"\n\nWhich of the following, if true, provides the strongest corroborating evidence for the director's assertion?",
        "options": [
          "In extensive blind controlled trials across diverse industry segments, organizations adopting Automated Radar Cameras consistently outperformed control groups on pedestrian collision reduction.",
          "The strategic planner recently completed an executive leadership certification at an accredited business school.",
          "The vendor supplying the hardware for the policy offers a 30-day money-back guarantee.",
          "Several trade journals recently featured editorial articles discussing emerging regulatory trends.",
          "The policy requires no alterations to the firm's existing corporate legal structure."
        ],
        "answer": "A",
        "explanation": "Independent controlled trials demonstrating that the policy consistently beats control groups across diverse segments provides robust causal validation.",
        "trap": "Relying on the planner's credentials (ad hominem support) rather than empirical evidence.",
        "estSeconds": 100
      },
      {
        "id": "pt01_v15",
        "test": 1,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Launch Safety Inspector: At AeroSpace Dynamics, any modification to satellite payload systems requires formal approval from the Mission Flight Controller. Every project receiving formal approval must undergo an orbital debris assessment unless it involves purely software simulation code. Last month, Project Vega received formal approval but did not undergo an orbital debris assessment. If the statements are true, which must also be true?",
        "options": [
          "The first describes an impending regulatory proposal; the second introduces evidence that undermines an objection to that proposal.",
          "The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.",
          "The first is an assumption underlying the industry objection; the second is the analyst\u2019s primary thesis.",
          "The first provides empirical evidence; the second states an intermediate conclusion rejected by the author.",
          "The first introduces a claim the author accepts; the second defends a counter-argument."
        ],
        "answer": "A",
        "explanation": "Boldface 1 describes the regulatory initiative being debated. Boldface 2 presents empirical compliance cost data that directly counters the lobbyists' objection.",
        "trap": "Confusing Boldface 1 with the author's personal conclusion (which appears in the final sentence).",
        "estSeconds": 125
      },
      {
        "id": "pt01_v16",
        "test": 1,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Flight Operations Director: To prevent telemetry signal degradation on orbital satellites, our engineering team proposes replacing copper coaxial relays with gold-plated optical transceivers. Which of the following would be most useful to determine in evaluating the director's proposal?",
        "options": [
          "Whether the monetary benefits realized from pedestrian collision reduction exceed the ongoing compliance and operational costs associated with Automated Radar Cameras.",
          "Whether participating organizations display corporate logos on public transit shelters.",
          "How many years the auditor has worked in the regional auditing bureau.",
          "Whether similar policies were debated by legislative committees during the prior decade.",
          "Whether employee satisfaction surveys are conducted semi-annually or annually."
        ],
        "answer": "A",
        "explanation": "Net return on capital is defined as Net Financial Benefits minus Total Costs. Determining whether revenue gains exceed operational costs is decisive.",
        "trap": "Choosing historical trivia or auditor tenure, which do not influence the mathematical financial return.",
        "estSeconds": 110
      },
      {
        "id": "pt01_v17",
        "test": 1,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Aerospace Historian: Early analysts maintained that lunar exploration was motivated strictly by national political prestige. **Recent declassified memoranda show that aerospace contractors sought lunar ice for propellant extraction.** Skeptics argue that resource goals were secondary. Yet metallurgical tests confirm that propellant extraction was the primary objective; **the commercial resource motivation remains the most credible explanation.** In the argument, what roles do the boldface portions play?",
        "options": [
          "Rapid organic growth in commercial activity created new baseline volume that would have severely degraded performance in the absence of the subsidies.",
          "The currency in which subsidies were disbursed remained stable on international currency exchange markets.",
          "Several administrative assistants retired during the middle of the fiscal quarter.",
          "The auditing agency used computerized spreadsheets rather than handwritten paper ledgers.",
          "The subsidies were announced during a nationally televised press conference."
        ],
        "answer": "A",
        "explanation": "A powerful counteracting upward pressure (organic commercial growth) would have caused a steep deterioration; the policy succeeded in keeping metrics flat against a worsening baseline.",
        "trap": "Focusing on accounting ledger format (option D), which explains no operational dynamics.",
        "estSeconds": 105
      },
      {
        "id": "pt01_v18",
        "test": 1,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Safety Officer at AeroSpace Dynamics: Over the past three quarters, AeroSpace Dynamics equipped 90% of all ion thruster calibration node units with automated proximity sensors. Yet despite this safety upgrade, reported workplace minor incident rates in orbital satellite telemetry increased by 14% over the same timeframe.\n\nWhich of the following, if true, most helps to resolve the apparent discrepancy described above?",
        "options": [
          "Mistakes a necessary condition for a sufficient condition.",
          "Attacks the personal moral character of corporate executives.",
          "Relies on circular logic by defining performance as adoption of the policy.",
          "Fails to specify the exact percentage return of the market index.",
          "Assumes that corporate profitability is the sole measure of human happiness."
        ],
        "answer": "A",
        "explanation": "The premise shows that adopting the policy may be necessary to avoid failure, but that does not mean adoption is sufficient to guarantee market outperformance.",
        "trap": "Selecting option C (circular logic) when the formal flaw is affirming the consequent / confusing necessary and sufficient conditions.",
        "estSeconds": 115
      },
      {
        "id": "pt01_v19",
        "test": 1,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Aerospace Launch Director: Every client who rated our launch vehicle 'exemplary' contracted for at least three consecutive payload missions. In contrast, clients contracting fewer missions gave lower ratings. Therefore, to raise overall client ratings, we should offer mission discounts that induce clients to book three consecutive missions. The director's reasoning is most vulnerable to criticism on the grounds that it:",
        "options": [
          "Some facilities in Province 1 are NOT tier-1 manufacturing facilities.",
          "All facilities in Province 1 maintain ISO-14001 certification.",
          "No tier-1 manufacturing facility is located in Province 1.",
          "Every facility that lacks ISO-14001 certification operates uncalibrated combustion chambers.",
          "Province 1 has the highest industrial energy consumption in the nation."
        ],
        "answer": "A",
        "explanation": "There exist facilities in Province X with uncalibrated chambers. None of these can have ISO-14001 certification (by statement 2). Since all tier-1 facilities must have ISO-14001 certification, these uncertified facilities in Province X cannot be tier-1 facilities.",
        "trap": "Concluding that NO tier-1 facilities exist in Province X (option C), which oversteps the premises.",
        "estSeconds": 110
      },
      {
        "id": "pt01_v20",
        "test": 1,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Aerospace Propulsion Lead: Our team plans to install regenerative cooling jackets on our rocket thrusters to prevent nozzle erosion during launch. Skeptics argue the extra weight reduces payload mass. However, newly developed titanium-aluminide alloys reduce jacket weight by 50%. Which of the following provides the strongest additional support for the lead's proposal?",
        "options": [
          "Concurrently with the predator removal, the reserve experienced a massive cyclical emergence of nutrient-rich prey that provided unprecedented food abundance.",
          "Target species construct nests in deciduous trees as well as evergreen shrubs.",
          "Invasive predators were introduced to the continent by European settlers in the eighteenth century.",
          "Volunteers conducted population counts using standard 10x binoculars.",
          "Several nearby urban parks also have small populations of the same species."
        ],
        "answer": "A",
        "explanation": "The simultaneous explosion of nutrient-rich cicada prey provides an overwhelming alternative causal explanation for the surge in reproduction.",
        "trap": "Noting the historical origins of predators, which is irrelevant to current breeding dynamics.",
        "estSeconds": 115
      },
      {
        "id": "pt01_v21",
        "test": 1,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Aerospace Station Director: Last quarter, our maintenance team doubled ultrasonic weld inspections on rocket propellant tanks in hangar Alpha, and detected tank weld leaks declined by 35%. This shows that doubling ultrasonic inspections should be mandated across all launch vehicle hangars. Which of the following, if true, most seriously calls into question the director's recommendation?",
        "options": [
          "The patient case mix and medical complexity in Ward 1 are representative of clinical departments across the entire hospital system.",
          "The platform software runs on standard desktop workstations running Windows 11.",
          "Physicians in Ward 1 completed an online feedback survey regarding user satisfaction.",
          "The hospital's malpractice insurance premium is reviewed annually in November.",
          "Medical transcriptionists previously belonged to a regional healthcare labor union."
        ],
        "answer": "A",
        "explanation": "Confirming that the test clinic is representative demonstrates that the 40% error reduction will likely replicate across other hospital departments.",
        "trap": "Citing IT workstation compatibility (option B), which is convenient but does not prove clinical effectiveness.",
        "estSeconds": 100
      },
      {
        "id": "pt01_v22",
        "test": 1,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Aerospace Ecologist: To protect endangered desert tortoises near our desert spaceport, rangers installed wire fencing along access roads to prevent vehicle strikes. Wildlife biologists project this will significantly increase the desert tortoise population over the next decade. Which of the following is an assumption required by the biologists' projection?",
        "options": [
          "The public subway system possesses sufficient train capacity to accommodate the surge of diverted commuters without causing severe overcrowding that deters ridership.",
          "All private automobile drivers earn incomes above the national median household threshold.",
          "City parking meters generate less revenue than public transit fareboxes.",
          "Bicycle sharing programs will experience a corresponding increase in ridership.",
          "Municipal road paving projects are financed through state gasoline excise taxes."
        ],
        "answer": "A",
        "explanation": "Negation test: If the subway lacks capacity and overcrowding becomes unmanageable, drivers will not switch to transit (they may carpool, detour, or telecommute), defeating the policy.",
        "trap": "Assuming all drivers have high incomes (option B), which is not logically required.",
        "estSeconds": 120
      },
      {
        "id": "pt01_v23",
        "test": 1,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Industrial Economist: Commentators routinely assert that spaceport Alpha's commercial success was driven entirely by municipal property tax abatements. **However, competing spaceports in adjacent states that enacted identical tax abatements failed to attract commercial launch providers.** Clearly, tax abatements alone were not the primary driver. Rather, **spaceport Alpha's low-latitude coastal geography provided orbital launch trajectory efficiencies that competitors could not replicate.** In the argument, what roles do the boldface portions play?",
        "options": [
          "The first is an established claim that the argument aims to refute; the second is an observation that supports the author\u2019s alternative conclusion.",
          "The first is the main conclusion of the argument; the second is a premise offered to defend that conclusion.",
          "The first provides empirical evidence; the second states an intermediate hypothesis rejected by the author.",
          "The first is a prediction; the second is an observation that disproves that prediction.",
          "The first introduces a hypothesis; the second proves that coal adoption never occurred."
        ],
        "answer": "A",
        "explanation": "Boldface 1 presents the conventional orthodoxy that the author sets out to undermine. Boldface 2 describes the persistent water-power cost advantage that supports the author's alternative thesis.",
        "trap": "Selecting option B which confuses the introductory conventional view with the author's own main conclusion.",
        "estSeconds": 120
      },
      {
        "id": "pt01_di01",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "In a data transmission pipeline for industrial manufacturing & supply chain, if $k$ is a positive integer, is $k$ divisible by 6?\n\n(1) $k$ is divisible by 3 and $k$ is even.\n(2) $k^2$ is divisible by 36.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "D",
        "explanation": "Statement (1): Since $k$ is even (divisible by 2) and divisible by 3, and $\\text{LCM}(2, 3) = 6$, $k$ must be divisible by 6. Sufficient.\nStatement (2): If $k^2$ is divisible by 36, then for positive integer $k$, $\\sqrt{k^2} = k$ is divisible by 6. Sufficient.\nTherefore, EACH statement ALONE is sufficient.",
        "trap": "Believing statement (2) allows fractional roots when $k$ is explicitly constrained to be an integer.",
        "estSeconds": 95
      },
      {
        "id": "pt01_di02",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If $a$ and $b$ are non-zero real parameters measuring orbital velocity at AeroSpace Dynamics, is $\\frac{a}{b} > 1$?\n\n(1) $a > b$\n(2) $a b > 0$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "E",
        "explanation": "Statement (1): If $x = 2, y = 1$, $x/y = 2 > 1$. If $x = -1, y = -2$, $x > y$ holds but $x/y = 1/2 < 1$. Insufficient.\nStatement (2): Tells us $x$ and $y$ have the same sign, but gives no relative magnitude. Insufficient.\nTogether: If $x=2, y=1$, $x/y=2 > 1$. If $x=-1, y=-2$, $x>y$ and $xy=2>0$ hold, but $x/y=0.5 < 1$. Two contradictory answers remain possible. Statements (1) and (2) together are NOT sufficient (Answer E).",
        "trap": "Assuming $x$ and $y$ must be positive without testing negative numbers.",
        "estSeconds": 110
      },
      {
        "id": "pt01_di03",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Working at constant rates, how many hours does it take for Module A and Module B in industrial manufacturing & supply chain working together to process 3000 data transactions?\n\n(1) Module A processes 1200 transactions in 2 hours.\n(2) Operating simultaneously, Module A and Module B process 1500 transactions in 2.5 hours.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "B",
        "explanation": "Statement (1) provides only the rate for Module A. Insufficient.\nStatement (2) provides the combined throughput rate directly: Rate $= \\text{Transactions} / \\text{Time}$. With the combined rate known, the time to complete the target volume is uniquely determined. Sufficient.",
        "trap": "Believing individual rates for both modules are required.",
        "estSeconds": 90
      },
      {
        "id": "pt01_di04",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sample $S$ of 5 distinct integers recorded during industrial manufacturing & supply chain testing, is the mean of $S$ greater than the median of $S$?\n\n(1) The 3 smallest integers are 1, 3, and 6.\n(2) The largest integer in $S$ is 35.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "C",
        "explanation": "Statement (1): Median is 6. Upper values could be 7, 8 (mean = 5 < 6) or 7, 50 (mean > 6). Insufficient.\nStatement (2): Gives no information about median or lower values. Insufficient.\nTogether: Elements are $1, 3, 6, d, {35 + test_idx * 5}$ where $6 < d < {35 + test_idx * 5}$. Minimum sum is $1 + 3 + 6 + 7 + {35 + test_idx * 5} = {52 + test_idx * 5}$. Minimum mean is $({52 + test_idx * 5})/5 > 10 > 6$. Since the minimum possible mean is strictly greater than the median 6, the answer is always YES. Sufficient.",
        "trap": "Neglecting to calculate the minimum possible mean under the constraint $d \\ge 7$.",
        "estSeconds: 115": 115,
        "estSeconds": 115
      },
      {
        "id": "pt01_di05",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "Did AeroSpace Dynamics's division for orbital satellite telemetry generate an operating net margin of at least $\\$40,000$ on total contract billings of $\\$165,000$?\n\n(1) Total operating expenses were strictly under 65% of contract billings.\n(2) Operating margin exceeded 20% of contract billings.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "Profit = Revenue - Costs. Statement (1): If costs < 65% of revenue, profit > 35% of revenue. 35% of $\\$150,000$ is at least $\\$52,500$, which is strictly greater than $\\$40,000$. Sufficient.\nStatement (2): 20% of $\\$150,000$ is $\\$30,000$. For smaller revenues, 20% might be $\\$30,000$ or $\\$36,000$ (which could allow profit to be $\\$38,000 < \\$40,000$). Thus Statement (2) is not guaranteed sufficient across baseline tests. Statement (1) ALONE is sufficient.",
        "trap": "Assuming statement (2) guarantees clearing $\\$40,000$ without calculating the 20% threshold.",
        "estSeconds": 95
      },
      {
        "id": "pt01_di06",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "If parameter $p$ is an integer recorded during firing burn cycles on ion thruster calibration node at AeroSpace Dynamics, is $|p| = p$?\n\n(1) $p^2 = p$\n(2) $p^3 \\ge p$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "$|m| = m$ holds if and only if $m \\ge 0$.\nStatement (1): $m(m - 1) = 0 \\implies m = 0$ or $m = 1$. In both cases, $m \\ge 0$, so $|m| = m$ is definitely true. Sufficient.\nStatement (2): $m^3 - m \\ge 0 \\implies m(m-1)(m+1) \\ge 0$. Integer solutions include $m = -1$ (where $|-1| = 1 \\ne -1$, so NO) as well as $m = 0, 1, 2$ (where YES). Insufficient.\nTherefore, Statement (1) ALONE is sufficient.",
        "trap": "Overlooking $m = -1$ as a valid integer solution to $m^3 \\ge m$.",
        "estSeconds": 105
      },
      {
        "id": "pt01_di07",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Considering the aerospace component audit table, which regional testing facility generated the highest operating profit in absolute dollars (Revenue multiplied by Operating Margin)?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Industrial Manufacturing & Supply Chain",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-1",
              45,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-1",
              62,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-1",
              38,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-1",
              75,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-1",
              54,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-1",
              48,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The median throughput among units with an Error Rate strictly under 1.0% exceeds 45 k/day. (Yes/No)",
          "Statement 2: The unit with the highest Cost Index also has the highest Error Rate. (Yes/No)",
          "Statement 3: All units with Uptime greater than 99.0% have a Cost Index below 150. (Yes/No)"
        ],
        "answer": "Yes | Yes | Yes",
        "explanation": "Statement 1: Units with error < 1.0% are Alpha, Gamma, Epsilon, Zeta. Throughputs are 45+, 38+, 54+, 48+. Median is (45+48)/2 > 45 k/day -> Yes.\nStatement 2: Unit Delta has Cost Index 180 (highest) and Error Rate 2.1% (highest) -> Yes.\nStatement 3: Units with Uptime > 99.0% are Alpha (110), Gamma (85), Epsilon (125), Zeta (115), all under 150 -> Yes.",
        "trap": "Sorting by the wrong column or taking the mean instead of the median.",
        "estSeconds": 120
      },
      {
        "id": "pt01_di08",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluate operational ranking correlations based on the industrial manufacturing & supply chain table.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Industrial Manufacturing & Supply Chain",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-1",
              45,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-1",
              62,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-1",
              38,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-1",
              75,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-1",
              54,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-1",
              48,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Sorting descending by Throughput yields an identical ranking as sorting descending by Cost Index. (Yes/No)",
          "Statement 2: Exactly three units have an Error Rate strictly below 0.7%. (Yes/No)",
          "Statement 3: Unit Gamma has both the lowest Throughput and the lowest Error Rate. (Yes/No)"
        ],
        "answer": "No | Yes | Yes",
        "explanation": "Statement 1: Delta is highest in both, but Beta (62, 145) vs Epsilon (54, 125) vs Alpha (45, 110) vs Zeta (48, 115) - Zeta throughput is higher than Alpha but Cost Index is 115 vs 110, order varies -> No.\nStatement 2: Units with error < 0.7% are Alpha (0.4), Gamma (0.2), Zeta (0.6) -> exactly three -> Yes.\nStatement 3: Gamma has lowest throughput (38+) and lowest error (0.2%) -> Yes.",
        "trap": "Assuming throughput and cost index correlate with 1.0 rank correlation.",
        "estSeconds": 115
      },
      {
        "id": "pt01_di09",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If the regional aerospace flight operations audit table is sorted in ascending order by Operating Margin (%), which testing facility occupies the median position?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Industrial Manufacturing & Supply Chain",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-1",
              45,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-1",
              62,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-1",
              38,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-1",
              75,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-1",
              54,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-1",
              48,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Unit Gamma has a Cost Index per throughput unit of less than 2.5. (Yes/No)",
          "Statement 2: The range of Error Rates across all 6 units is strictly greater than 1.8 percentage points. (Yes/No)",
          "Statement 3: More than half of the units have an Uptime exceeding 99.2%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Gamma ratio = 85 / (38+) < 2.5 -> Yes.\nStatement 2: Max error = Delta (2.1%), Min error = Gamma (0.2%). Range = 2.1 - 0.2 = 1.9% > 1.8% -> Yes.\nStatement 3: Units with Uptime > 99.2% are Alpha (99.8), Gamma (99.9), Zeta (99.4) -> 3 out of 6 (wait: exactly half, so strictly more than half is No!) -> Answer: Yes | Yes | No.",
        "trap": "Confusing 'at least half' with 'strictly more than half'.",
        "estSeconds": 125
      },
      {
        "id": "pt01_di10",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Evaluate reliability and risk profiles across units in industrial manufacturing & supply chain.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Industrial Manufacturing & Supply Chain",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-1",
              45,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-1",
              62,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-1",
              38,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-1",
              75,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-1",
              54,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-1",
              48,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The unit with the highest Throughput also has the lowest Uptime. (Yes/No)",
          "Statement 2: Total combined throughput of the two highest units exceeds 130 k/day. (Yes/No)",
          "Statement 3: Every unit with a Cost Index greater than 120 has an Error Rate above 1.0%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Delta has highest throughput (75+) and lowest uptime (97.5%) -> Yes.\nStatement 2: Top two are Delta (75+) and Beta (62+) = 137+ > 130 -> Yes.\nStatement 3: Unit Epsilon has Cost Index 125 (>120) but Error Rate 0.8% (< 1.0%) -> No.",
        "trap": "Overlooking Unit Epsilon's low error rate despite high cost.",
        "estSeconds": 115
      },
      {
        "id": "pt01_di11",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Based on the aerospace scatter plot correlating telemetry R&D with ROIC, as R&D investment increases from 2% to 10%, ROIC generally [Select 1], whereas above 10%, ROIC generally [Select 2].",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Industrial Manufacturing & Supply Chain",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 20
            },
            {
              "x": 20,
              "y": 35
            },
            {
              "x": 30,
              "y": 48
            },
            {
              "x": 40,
              "y": 58
            },
            {
              "x": 50,
              "y": 65
            },
            {
              "x": 60,
              "y": 70
            }
          ]
        },
        "options": [
          "Dropdown 1: The overall relationship between Resource Investment and Productivity Output is [strongly positive | strongly negative | sinusoidal | uncorrelated].",
          "Dropdown 2: As Resource Investment increases beyond $40k, the rate of increase in Productivity Output displays [diminishing marginal returns | increasing exponential growth | negative acceleration | zero slope]."
        ],
        "answer": "strongly positive | diminishing marginal returns",
        "explanation": "Dropdown 1: As investment rises from 10 to 60, output rises consistently from 20+ to 70+ -> strongly positive.\nDropdown 2: Between 10 and 30, slope is ~1.4; between 40 and 60, slope drops to ~0.6 -> diminishing marginal returns.",
        "trap": "Confusing diminishing marginal growth with an absolute decline in output.",
        "estSeconds": 105
      },
      {
        "id": "pt01_di12",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "On the aerospace scatter plot, approximately what percentage of surveyed facilities with telemetry R&D intensity under 6% achieved an ROIC above 20%?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Industrial Manufacturing & Supply Chain",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 20
            },
            {
              "x": 20,
              "y": 35
            },
            {
              "x": 30,
              "y": 48
            },
            {
              "x": 40,
              "y": 58
            },
            {
              "x": 50,
              "y": 65
            },
            {
              "x": 60,
              "y": 70
            }
          ]
        },
        "options": [
          "Dropdown 1: The average marginal gain in output per thousand dollars invested between $10k and $30k is approximately [1.4 points/$k | 2.5 points/$k | 3.5 points/$k | 0.5 points/$k].",
          "Dropdown 2: The point with the highest output-to-investment ratio is at an investment of [$10k | $30k | $50k | $60k]."
        ],
        "answer": "1.4 points/$k | $10k",
        "explanation": "Dropdown 1: Slope = (48 - 20) / (30 - 10) = 28 / 20 = 1.4 points/$k.\nDropdown 2: Ratio y/x: At x=10, y/x = 22/10 = 2.2. At x=60, y/x = 72/60 = 1.2. The highest ratio occurs at the earliest stage ($10k).",
        "trap": "Assuming the highest absolute output point ($60k) has the highest efficiency ratio.",
        "estSeconds": 115
      },
      {
        "id": "pt01_di13",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "On the aerospace telemetry scatter plot, the single contractor identified as the greatest positive residual outlier is characterized by which coordinates?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Industrial Manufacturing & Supply Chain",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 20
            },
            {
              "x": 20,
              "y": 35
            },
            {
              "x": 30,
              "y": 48
            },
            {
              "x": 40,
              "y": 58
            },
            {
              "x": 50,
              "y": 65
            },
            {
              "x": 60,
              "y": 70
            }
          ]
        },
        "options": [
          "Dropdown 1: The median investment level across the 6 observed data points is [$35k | $40k | $45k | $50k].",
          "Dropdown 2: A firm investing $45k would be projected by linear interpolation to produce an output index of approximately [61.5 | 68.0 | 72.5 | 55.0]."
        ],
        "answer": "$35k | 61.5",
        "explanation": "Dropdown 1: Ordered x: 10, 20, 30, 40, 50, 60. Median = (30 + 40)/2 = $35k.\nDropdown 2: Between x=40 (y~58) and x=50 (y~65), midpoint x=45 gives y = (58 + 65)/2 = 61.5.",
        "trap": "Extrapolating using the steep slope from the early segment.",
        "estSeconds": 110
      },
      {
        "id": "pt01_di14",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If an operating facility at AeroSpace Dynamics reduces its expenditure from 16% down to 10% along the regression curve for orbital velocity, what is the expected change in its performance index?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Industrial Manufacturing & Supply Chain",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 20
            },
            {
              "x": 20,
              "y": 35
            },
            {
              "x": 30,
              "y": 48
            },
            {
              "x": 40,
              "y": 58
            },
            {
              "x": 50,
              "y": 65
            },
            {
              "x": 60,
              "y": 70
            }
          ]
        },
        "options": [
          "Dropdown 1: Increasing investment from $50k to $60k yields a percentage increase in output of approximately [7% | 15% | 25% | 35%].",
          "Dropdown 2: If fixed costs require an output index of at least 50 to break even, the minimum necessary investment is approximately [$32k | $22k | $42k | $15k]."
        ],
        "answer": "7% | $32k",
        "explanation": "Dropdown 1: At x=50, y~67. At x=60, y~72. Change = 5 / 67 ~ 7.4%.\nDropdown 2: At x=30, y~48; at x=40, y~58. Output 50 is reached just past $30k (approx $32k).",
        "trap": "Calculating percentage increase based on investment (20%) instead of output (7%).",
        "estSeconds": 115
      },
      {
        "id": "pt01_di15",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "At AeroSpace Dynamics, a capital allocation of $30 million is split between ion thruster calibration node (Asset X) and secondary infrastructure (Asset Y). The allocation to Asset X is exactly 4 times the allocation to Asset Y. Select the dollar allocation for Asset X and Asset Y.\n\nValues: Asset X = $24M, Asset Y = $6M.",
        "options": [
          "Grade A: 40 liters",
          "Grade B: 20 liters"
        ],
        "answer": "Grade A = 40 | Grade B = 20",
        "explanation": "Alligation: Ratio of Grade A to Grade B is $|50 - 30| : |30 - 20| = 20 : 10 = 2 : 1$. Total volume is 60 liters. Grade A $= 2/3 \\times 60 = 40$ liters, Grade B $= 1/3 \\times 60 = 20$ liters.",
        "trap": "Reversing the 2:1 ratio between Grade A and Grade B.",
        "estSeconds": 125
      },
      {
        "id": "pt01_di16",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Two parameters $U$ and $V$ in industrial manufacturing & supply chain satisfy the linear system: $2U + 3V = 28$ and $U - V = 4$.\n\nSelect the value of $U$ and the value of $V$ that satisfy both equations.",
        "options": [
          "U: 8",
          "V: 4"
        ],
        "answer": "U = 8 | V = 4",
        "explanation": "Substitute $U = V + 4$: $2(V + 4) + 3V = 5V + 8 = 28 \\implies 5V = 20 \\implies V = 4$. Then $U = 4 + 4 = 8$.",
        "trap": "Sign error when expanding 2(V + 4).",
        "estSeconds: 105": 105,
        "estSeconds": 105
      },
      {
        "id": "pt01_di17",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "At AeroSpace Dynamics, Pump Alpha fills an emergency containment reservoir for firing burn cycles in 7 hours working alone. Working together, Pump Alpha and Pump Beta fill the reservoir in 4.2 hours. Select the time for Pump Alpha and Pump Beta working alone.",
        "options": [
          "High-Yield Debt: \\$400,000",
          "Treasury Notes: \\$600,000"
        ],
        "answer": "High-Yield = $400,000 | Treasury = $600,000",
        "explanation": "Alligation: Ratio of High-Yield to Treasury is $|3 - 5| : |8 - 5| = 2 : 3$. Fraction in High-Yield is $2/5 = 40\\% = \\$400,000$. Fraction in Treasury is $3/5 = 60\\% = \\$600,000$.",
        "trap": "Inverting the 2:3 ratio to 3:2.",
        "estSeconds": 120
      },
      {
        "id": "pt01_di18",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluating the Project Charter and Financial Audit tabs for AeroSpace Dynamics, what is the total upfront capital investment required for deploying ion thruster calibration node across all branch facilities?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Industrial Manufacturing & Supply Chain",
              "content": "Directive 1.4 regarding Industrial Manufacturing & Supply Chain:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 1:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant North only",
          "Plant North and Plant West only",
          "Plant South and Plant West only",
          "Plant North, Plant South, and Plant West",
          "None of the facilities"
        ],
        "answer": "A",
        "explanation": "Tab 1 specifies that a score of at least 90 is required for expedited licensing. Tab 2 shows only Plant North scored >= 90 (score 92). Plant West scored 88 (< 90). Thus, Plant North only qualifies.",
        "trap": "Assuming Plant West qualifies because of its 6-year history (history only grants exemption from review, not expedited licensing).",
        "estSeconds": 120
      },
      {
        "id": "pt01_di19",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Which facility at AeroSpace Dynamics is subject to mandatory operational review according to the regulatory directive for orbital satellite telemetry and the audit inspection records?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Industrial Manufacturing & Supply Chain",
              "content": "Directive 1.4 regarding Industrial Manufacturing & Supply Chain:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 1:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant East only",
          "Plant South and Plant East only",
          "Plant South only",
          "Plant North and Plant East only",
          "All four plants"
        ],
        "answer": "A",
        "explanation": "Plants scoring below 85 are Plant South (84) and Plant East (79). However, Tab 1 exempts facilities operating >5 years with zero violations. Plant South has operated 7 years with 0 violations (exempt). Plant East has only 2 years and has a violation, so it is the ONLY plant subject to mandatory review.",
        "trap": "Failing to check Plant South's 7-year zero-violation exemption in Tab 1.",
        "estSeconds": 130
      },
      {
        "id": "pt01_di20",
        "test": 1,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Evaluating information across all three tabs for orbital satellite telemetry, which strategic conclusion regarding the financial return of deploying ion thruster calibration node is most strongly supported?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Industrial Manufacturing & Supply Chain",
              "content": "Directive 1.4 regarding Industrial Manufacturing & Supply Chain:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 1:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "No, because it has an active safety violation recorded in the preceding 12 months.",
          "Yes, provided it files the paperwork within 14 business days.",
          "Yes, because its compliance score was within 10 points of the 85 threshold.",
          "No, because only facilities with more than 5 years operating history can file stays.",
          "Yes, because emergency stays are automatically granted to all facilities."
        ],
        "answer": "A",
        "explanation": "Tab 3 explicitly states: 'No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay.' Plant East has 1 safety violation (Tab 2), disqualifying it completely.",
        "trap": "Focusing only on the 14-day filing window without checking the violation disqualification rule.",
        "estSeconds": 115
      }
    ]
  },
  {
    "testNumber": 2,
    "id": "pt_02",
    "title": "Official Focus Mock #2 (Full 64-Q Simulation)",
    "date": "2025-01-14",
    "totalScore": 655,
    "quantScore": 80,
    "verbalScore": 80,
    "dataInsightsScore": 79,
    "structure": {
      "quantQuestions": 21,
      "verbalQuestions": 23,
      "dataInsightsQuestions": 20,
      "total": 64,
      "durationMinutes": 135
    },
    "questions": [
      {
        "id": "pt02_q01",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In aerospace & satellite communications, a barcode serial integer $n$ satisfies that $n^2 - 1$ is divisible by prime $11$. If $1 < n < 11$, how many integer values can $n$ assume?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "10"
        ],
        "answer": "B",
        "explanation": "Since $n^2 - 1 = (n - 1)(n + 1)$ is divisible by prime 11, by Euclid's lemma either 11 divides $(n - 1)$ or 11 divides $(n + 1)$. Given $1 < n < 11$, $n - 1 < 11$, so 11 cannot divide $n - 1$. For 11 to divide $n + 1$, we must have $n + 1 = 11 \\implies n = 10$. Thus, exactly 1 integer value ($n = 10$) satisfies the condition.",
        "trap": "Assuming both $(n - 1)$ and $(n + 1)$ can yield solutions within the open interval $(1, p)$.",
        "estSeconds": 90
      },
      {
        "id": "pt02_q02",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "At SynthoVax Therapeutics, Lead Immunologist monitors two operational units: Primary Unit Alpha completes a full cycle of titration purification runs in 6 hours working alone, whereas Secondary Unit Beta requires 12 hours alone. If both units operate simultaneously at their constant rates to complete the cycle on a shared monoclonal antibody bioreactor, how many hours will they take together?",
        "options": [
          "2.83",
          "3.33",
          "3.83",
          "7.50",
          "3.75"
        ],
        "answer": "B",
        "explanation": "Combined rate $R = 1/5 + 1/10 = 3/10$. Time $T = 1/R = 10/3 = 3.33$ hours.",
        "trap": "Taking the arithmetic average of the two individual times.",
        "estSeconds: 85": 85,
        "estSeconds": 85
      },
      {
        "id": "pt02_q03",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "A biotechnology wholesale supplier marks up synthesis cost of enzyme vials by 30% to establish catalog price, then gives bulk clinics a 15% promotional concession. What is the net percentage gain on original cost?",
        "options": [
          "10.0%",
          "10.5%",
          "15.0%",
          "14.5%",
          "20.0%"
        ],
        "answer": "B",
        "explanation": "Multiplier $= (1 + 0.3) \\times (1 - 0.15) = 1.1050$. Net profit percentage $= (1.1050 - 1) \\times 100 = 10.5\\%$.",
        "trap": "Subtracting the percentages directly (30% - 15% = 15%).",
        "estSeconds": 90
      },
      {
        "id": "pt02_q04",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a mathematical model tracking dissociation constant at SynthoVax Therapeutics, the exponent variable $x$ satisfies $2^{2x+1} - $2^{2x-1} = 1536$. What is the value of $x^2 + x$?",
        "options": [
          "18",
          "20",
          "22",
          "24",
          "24"
        ],
        "answer": "B",
        "explanation": "Factor out $3^{2x-1}$: $3^{2x-1}(3^2 - 1) = 2187(3^2 - 1)$. Equating exponents: $2x - 1 = 7 \\implies 2x = 8 \\implies x = 4$. Then $x^2 + x = 4^2 + 4 = 20$.",
        "trap": "Miscalculating the factored term $(base^2 - 1)$.",
        "estSeconds": 100
      },
      {
        "id": "pt02_q05",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Inequalities & Absolute Values",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "During a tolerance check on monoclonal antibody bioreactor measurements at SynthoVax Therapeutics, how many integer values of $k$ satisfy the inequality $|2k - 7| \\le 15$?",
        "options": [
          "13",
          "14",
          "15",
          "16",
          "12"
        ],
        "answer": "B",
        "explanation": "Expand absolute value: $-13 \\le 2k - 6 \\le 13 \\implies -7 \\le 2k \\le 19 \\implies -3.5 \\le k \\le 9.5$. Length of interval for integers is strictly 14.",
        "trap": "Neglecting to include both endpoints when calculating inclusive integer count.",
        "estSeconds": 95
      },
      {
        "id": "pt02_q06",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A pharmacology trial records 7 distinct positive integer patient recovery times in days with a median of 18 and a mean of 23. What is the greatest possible duration for the longest recovery time?",
        "options": [
          "107",
          "109",
          "111",
          "113",
          "115"
        ],
        "answer": "C",
        "explanation": "To maximize $x_7$, minimize elements 1, 2, 3, 5, 6. Minimum distinct positive integers: $x_1=1, x_2=2, x_3=3$. Given median $x_4 = 23$. Minimum distinct integers above median: $x_5 = 24, x_6 = 25$. Sum of all 7 integers $= 7 \\times 27 = 189$. Subtracting the 6 minimal values leaves maximum $x_7 = 111$.",
        "trap": "Allowing integers above median to equal the median rather than being strictly distinct.",
        "estSeconds": 115
      },
      {
        "id": "pt02_q07",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A clinical ethics board of 4 delegates is selected from 6 molecular oncologists and 5 hospital pharmacologists. If at least 2 oncologists and at least 2 pharmacologists must serve, how many combinations exist?",
        "options": [
          "140",
          "145",
          "150",
          "155",
          "160"
        ],
        "answer": "C",
        "explanation": "Ways to select 2 hardware engineers from 6: $\\binom{6}{2} = 15$. Ways to select 2 software architects from 5: $\\binom{5}{2} = 10$. Total distinct combinations $= 15 \\times 10 = 150$.",
        "trap": "Adding the combinations instead of multiplying.",
        "estSeconds": 105
      },
      {
        "id": "pt02_q08",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "During clinical dosage modeling, what is the greatest integer power $k$ for which $3^k$ divides $40!$ evenly?",
        "options": [
          "8",
          "9",
          "10",
          "11",
          "12"
        ],
        "answer": "C",
        "explanation": "Powers of 10 in a factorial are limited by prime factor 5. Using Legendre's formula: $\\lfloor 45/5 \\rfloor + \\lfloor 45/25 \\rfloor = 9 + 1 = 10$. Thus $k = 10$.",
        "trap": "Counting powers of 2 or stopping after first division by 5.",
        "estSeconds": 90
      },
      {
        "id": "pt02_q09",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "A courier delivering urgent biologic reagents drives 40 miles to a medical research hub at 38 mph, and drives back along the same highway at 76 mph. What is the vehicle's average speed for the round journey?",
        "options": [
          "50.7",
          "53.0",
          "52.7",
          "48.7",
          "54.5"
        ],
        "answer": "A",
        "explanation": "Average speed over equal distances is the harmonic mean: $V = \\frac{2 s_1 s_2}{s_1 + s_2} = \\frac{2 \\times 42 \\times 64}{106} = 50.7$ mph.",
        "trap": "Choosing the arithmetic mean (option B).",
        "estSeconds": 80
      },
      {
        "id": "pt02_q10",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A biochemical reactor vessel holds 50 liters of an aqueous buffer containing 30% active enzyme. How many liters of pure sterile water must be introduced to dilute the mixture to a 15% enzyme concentration?",
        "options": [
          "34",
          "36",
          "38",
          "40",
          "42"
        ],
        "answer": "C",
        "explanation": "Solvent mass is constant: $0.25 \\times 35 = 0.12 \\times (35 + w) \\implies 35 + w = 73 \\implies w = 38$ liters.",
        "trap": "Reporting total final volume rather than added water.",
        "estSeconds": 95
      },
      {
        "id": "pt02_q11",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Sequences & Series",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In an arithmetic sequence monitoring aerospace & satellite communications production batches, the first term is 5 and the common difference between consecutive terms is 4. What is the sum of the first 15 terms of this sequence?",
        "options": [
          "480",
          "487",
          "495",
          "503",
          "510"
        ],
        "answer": "C",
        "explanation": "Sum formula $S_{15} = \\frac{15}{2} [2(5) + 14(4)] = 15 \\times [5 + 7(4)] = 495$.",
        "trap": "Using 15d instead of (n-1)d in the summation formula.",
        "estSeconds": 90
      },
      {
        "id": "pt02_q12",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Overlapping Sets",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Among 110 technical facilities surveyed in aerospace & satellite communications, 54 have implemented Protocol A, 44 have implemented Protocol B, and 11 have implemented neither. How many facilities have implemented BOTH Protocol A and Protocol B?",
        "options": [
          "-5",
          "-3",
          "-1",
          "1",
          "3"
        ],
        "answer": "C",
        "explanation": "Facilities with at least one protocol $= 110 - 11 = 99$. By inclusion-exclusion: $|A \\cap B| = |A| + |B| - |A \\cup B| = 54 + 44 - 99 = -1$.",
        "trap": "Subtracting neither from both sets individually.",
        "estSeconds": 85
      },
      {
        "id": "pt02_q13",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A vaccine packaging carton holds 6 red vial caps and 8 blue vial caps. If a technician randomly samples 3 vials without replacement, what is the probability that exactly 2 have red caps?",
        "options": [
          "\\frac{23}{55}",
          "\\frac{24}{55}",
          "\\frac{25}{55}",
          "\\frac{26}{55}",
          "\\frac{27}{55}"
        ],
        "answer": "C",
        "explanation": "Ways to draw two compliant parts: $\\binom{6}{2} = 15$. Ways to draw two defective parts: $\\binom{5}{2} = 10$. Total favorable $= 25$. Total unrestricted pairs: $\\binom{11}{2} = 55$. Probability $= 25/55$.",
        "trap": "Assuming sampling with replacement.",
        "estSeconds": 100
      },
      {
        "id": "pt02_q14",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Quadratics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A biochemical receptor dissociation quadratic $x^2 - 17x + K = 0$ has two positive integer roots differing by 3. What is the value of the coefficient $K$?",
        "options": [
          "28",
          "30",
          "32",
          "34",
          "36"
        ],
        "answer": "C",
        "explanation": "Let roots be $r_1$ and $r_2$. Sum $r_1 + r_2 = 12$, and difference $r_2 - r_1 = 4$. Solving gives roots $r_1 = 4$ and $r_2 = 8$. By Vieta's formulas, $K = r_1 \\times r_2 = 4 \\times 8 = 32$.",
        "trap": "Adding the roots rather than multiplying for the constant term $K$.",
        "estSeconds": 85
      },
      {
        "id": "pt02_q15",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In an algorithmic encryption routine for biopharmaceutical kinetics, what is the units digit of the integer evaluation $7^{51} + 3$?",
        "options": [
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": "C",
        "explanation": "Powers of 7 cycle in units digits: $7^1 \\rightarrow 7, 7^2 \\rightarrow 9, 7^3 \\rightarrow 3, 7^4 \\rightarrow 1$. Exponent $47 \\equiv 3 \\pmod 4$, so $7^{47}$ ends in 3. Adding 3 gives a units digit of $(3 + 3) \\pmod 10 = 6$.",
        "trap": "Failing to apply base-4 cyclicity to the exponent.",
        "estSeconds": 80
      },
      {
        "id": "pt02_q16",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Coordinate & Analytical Geometry",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In a Cartesian telemetry grid mapping monoclonal antibody bioreactor coordinates for SynthoVax Therapeutics, line $L_1$ passes through $(0, 7)$ and $(5, 0)$. If perpendicular line $L_2$ intersects the origin $(0, 0)$, what is the slope of line $L_2$?",
        "options": [
          "\\frac{4}{6}",
          "-\\frac{4}{6}",
          "\\frac{6}{4}",
          "-\\frac{6}{4}",
          "1"
        ],
        "answer": "A",
        "explanation": "Slope of $L_1$ is $m_1 = \\frac{0 - 6}{4 - 0} = -\\frac{6}{4}$. Perpendicular slope $m_2 = -1/m_1 = \\frac{4}{6}$.",
        "trap": "Inverting without negating (option B or C).",
        "estSeconds: 75": 75,
        "estSeconds": 75
      },
      {
        "id": "pt02_q17",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sensor calibration test in aerospace & satellite communications, the standard deviation of pressure readings was 4.5 psi. If each reading is multiplied by 1.25 and then decreased by 3.5 psi, what is the standard deviation of the transformed readings in psi?",
        "options": [
          "2.12",
          "5.62",
          "4.50",
          "9.12",
          "6.75"
        ],
        "answer": "B",
        "explanation": "Standard deviation is unaffected by the subtraction of a constant (-3.5), but scales by $|1.25|$: $\\sigma_{new} = 1.25 \\times 4.5 = 5.62$ psi.",
        "trap": "Subtracting 3.5 from the standard deviation (option A).",
        "estSeconds": 70
      },
      {
        "id": "pt02_q18",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In biopharmaceutical kinetics, replacement parts for monoclonal antibody bioreactor at SynthoVax Therapeutics are packaged strictly in quantities of 4 or 7 units. What is the greatest integer number of units that cannot be assembled using non-negative combinations of these packages?",
        "options": [
          "25",
          "26",
          "27",
          "28",
          "29"
        ],
        "answer": "C",
        "explanation": "By the Frobenius Coin Formula for coprime integers $a$ and $b$, the largest non-constructible integer is $ab - a - b = (5)(8) - 5 - 8 = 27$.",
        "trap": "Computing ab directly without subtracting (a + b).",
        "estSeconds": 110
      },
      {
        "id": "pt02_q19",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "When the tens and units digits of a two-digit drug trial batch number $N$ are swapped, the resulting number is 36 greater than $N$. What is the difference between the units digit and tens digit?",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "C",
        "explanation": "$(10B + A) - (10A + B) = 9(B - A) = 27 \\implies B - A = 3$.",
        "trap": "Confusing (B - A) with (A - B).",
        "estSeconds": 75
      },
      {
        "id": "pt02_q20",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A capital expenditure allocation of $\\$5,000$ in aerospace & satellite communications appreciates at an annual rate of 10% compounded semi-annually. What is the total accumulated interest after 1 year?",
        "options": [
          "\\$500",
          "\\$512",
          "\\$525",
          "\\$550",
          "\\$562"
        ],
        "answer": "B",
        "explanation": "Semi-annual rate is 5% over 2 periods. Multiplier is $(1.05)^2 = 1.1025$. Interest $= 5000 \\times 0.1025 = \\$512$.",
        "trap": "Calculating simple interest at 10% (option A).",
        "estSeconds": 90
      },
      {
        "id": "pt02_q21",
        "test": 2,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "For all positive real numbers $u$ and $v$ modeling dissociation constant at SynthoVax Therapeutics, an operational operator $\\star$ is defined by $u \\star v = \\frac{u^2 - v^2}{u - v}$. What is the numerical value of $8 \\star 3$?",
        "options": [
          "\\frac{3}{2}",
          "\\frac{3}{3}",
          "\\frac{3}{4}",
          "3",
          "1"
        ],
        "answer": "B",
        "explanation": "$3 \\diamond 3 = \\frac{3 \\times 3}{3 + 3 + 3} = \\frac{3^2}{3(3)} = \\frac{3}{3}$.",
        "trap": "Adding the constants in the denominator incorrectly.",
        "estSeconds": 85
      },
      {
        "id": "pt02_v01",
        "test": 2,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 6,
        "passage": "Traditional evolutionary biology posited that phenotypic adaptations to novel environmental stressors arise exclusively through nucleotide sequence mutations filtered by natural selection over multiple generations. Recent molecular investigations into high-altitude passerine birds, however, reveal that epigenetic mechanisms\u2014specifically cytosine DNA methylation\u2014can mediate rapid adaptive phenotypic plasticity.\n\nWhen lowland bird cohorts are introduced to hypoxic alpine habitats, rapid changes in the methylation patterns of hemoglobin subunit genes occur within days, altering oxygen-binding affinity. Although evolutionary critics initially argued that germline reprogramming during gametogenesis erases somatic methylation marks, laboratory breeding trials demonstrate that specific hypoxic epialleles persist across multiple generations, indicating that non-sequence inheritance can accelerate evolutionary rates under sustained ecological pressure.",
        "stem": "The primary purpose of the passage on epigenetics & transgenerational avian adaptation is to:",
        "options": [
          "Refute an established scientific doctrine by demonstrating that earlier measurements were entirely fraudulent.",
          "Challenge a traditional foundational model by presenting recent empirical evidence that supports an alternative paradigm.",
          "Reconcile two competing historical hypotheses by proposing a hybrid theoretical compromise.",
          "Advocate for the immediate cessation of field testing until biochemical instruments are standardized.",
          "Prove that evolutionary biological adaptations occur exclusively through physical genomic sequence alterations."
        ],
        "answer": "B",
        "explanation": "The passage outlines a traditional, long-standing theoretical assumption in its opening paragraph, then introduces modern empirical methodologies that challenge that framework and suggest a more dynamic mechanism.",
        "trap": "Selecting option A, which uses extreme, accusatory language ('entirely fraudulent') unsupported by the text.",
        "estSeconds": 100
      },
      {
        "id": "pt02_v02",
        "test": 2,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Traditional evolutionary biology posited that phenotypic adaptations to novel environmental stressors arise exclusively through nucleotide sequence mutations filtered by natural selection over multiple generations. Recent molecular investigations into high-altitude passerine birds, however, reveal that epigenetic mechanisms\u2014specifically cytosine DNA methylation\u2014can mediate rapid adaptive phenotypic plasticity.\n\nWhen lowland bird cohorts are introduced to hypoxic alpine habitats, rapid changes in the methylation patterns of hemoglobin subunit genes occur within days, altering oxygen-binding affinity. Although evolutionary critics initially argued that germline reprogramming during gametogenesis erases somatic methylation marks, laboratory breeding trials demonstrate that specific hypoxic epialleles persist across multiple generations, indicating that non-sequence inheritance can accelerate evolutionary rates under sustained ecological pressure.",
        "stem": "It can be inferred from the passage on epigenetics & transgenerational avian adaptation that proponents of the earlier model assumed that:",
        "options": [
          "Biological systems exhibit extensive behavioral plasticity when subjected to environmental shifts.",
          "Observed physical phenomena were governed primarily by static or localized equilibrium constraints.",
          "Molecular sequencing technologies would permanently confirm traditional observational hypotheses.",
          "Nutrient availability was completely uniform across all ecological micro-habitats.",
          "Adaptive modifications could be transmitted across generations without physical nucleotide changes."
        ],
        "answer": "B",
        "explanation": "The passage notes that the classical model assumed static, rigid constraints (e.g., rigid niche partitioning, exclusive nucleotide dependence, or uniform competition) before modern dynamic evidence emerged.",
        "trap": "Confusing the revisionist perspective with the traditional hypothesis being evaluated.",
        "estSeconds": 110
      },
      {
        "id": "pt02_v03",
        "test": 2,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "Traditional evolutionary biology posited that phenotypic adaptations to novel environmental stressors arise exclusively through nucleotide sequence mutations filtered by natural selection over multiple generations. Recent molecular investigations into high-altitude passerine birds, however, reveal that epigenetic mechanisms\u2014specifically cytosine DNA methylation\u2014can mediate rapid adaptive phenotypic plasticity.\n\nWhen lowland bird cohorts are introduced to hypoxic alpine habitats, rapid changes in the methylation patterns of hemoglobin subunit genes occur within days, altering oxygen-binding affinity. Although evolutionary critics initially argued that germline reprogramming during gametogenesis erases somatic methylation marks, laboratory breeding trials demonstrate that specific hypoxic epialleles persist across multiple generations, indicating that non-sequence inheritance can accelerate evolutionary rates under sustained ecological pressure.",
        "stem": "According to the second paragraph of the passage on epigenetics & transgenerational avian adaptation, the newly discovered mechanism is significant primarily because it:",
        "options": [
          "Eliminates all scientific uncertainty surrounding global atmospheric convection.",
          "Demonstrates that biological entities can adapt or function through pathways previously deemed impossible or secondary.",
          "Proves that evolutionary mutations occur at a constant mathematical rate across geological epochs.",
          "Forces commercial enterprises to halt exploratory drilling operations immediately.",
          "Refutes the universal applicability of thermodynamic physical laws."
        ],
        "answer": "B",
        "explanation": "Paragraph 2 reveals an independent or dynamic pathway (e.g. chemolithoautotrophy, epigenetic inheritance, leading-edge vortices, or mycorrhizal resource sharing) that classical science deemed impossible or minor.",
        "trap": "Selecting an overly grandiose claim that the finding overturns fundamental thermodynamic laws (option E).",
        "estSeconds": 95
      },
      {
        "id": "pt02_v04",
        "test": 2,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Traditional evolutionary biology posited that phenotypic adaptations to novel environmental stressors arise exclusively through nucleotide sequence mutations filtered by natural selection over multiple generations. Recent molecular investigations into high-altitude passerine birds, however, reveal that epigenetic mechanisms\u2014specifically cytosine DNA methylation\u2014can mediate rapid adaptive phenotypic plasticity.\n\nWhen lowland bird cohorts are introduced to hypoxic alpine habitats, rapid changes in the methylation patterns of hemoglobin subunit genes occur within days, altering oxygen-binding affinity. Although evolutionary critics initially argued that germline reprogramming during gametogenesis erases somatic methylation marks, laboratory breeding trials demonstrate that specific hypoxic epialleles persist across multiple generations, indicating that non-sequence inheritance can accelerate evolutionary rates under sustained ecological pressure.",
        "stem": "The author\u2019s attitude toward the traditional scientific framework in epigenetics & transgenerational avian adaptation can best be described as:",
        "options": [
          "Uncompromisingly hostile and dismissive of historical scholars.",
          "Respectful of its historical role while emphasizing its conceptual limitations in light of recent findings.",
          "Enthusiastically supportive of its continuing supremacy over modern data.",
          "Indifferent to its theoretical and practical consequences.",
          "Skeptical of whether any scientific paradigm can ever be empirically tested."
        ],
        "answer": "B",
        "explanation": "The author treats the historical paradigm with measured academic respect ('long held', 'classical framework') while clearly identifying its empirical limitations.",
        "trap": "Choosing an exaggerated emotional descriptor like hostile or indifferent.",
        "estSeconds": 100
      },
      {
        "id": "pt02_v05",
        "test": 2,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "Traditional evolutionary biology posited that phenotypic adaptations to novel environmental stressors arise exclusively through nucleotide sequence mutations filtered by natural selection over multiple generations. Recent molecular investigations into high-altitude passerine birds, however, reveal that epigenetic mechanisms\u2014specifically cytosine DNA methylation\u2014can mediate rapid adaptive phenotypic plasticity.\n\nWhen lowland bird cohorts are introduced to hypoxic alpine habitats, rapid changes in the methylation patterns of hemoglobin subunit genes occur within days, altering oxygen-binding affinity. Although evolutionary critics initially argued that germline reprogramming during gametogenesis erases somatic methylation marks, laboratory breeding trials demonstrate that specific hypoxic epialleles persist across multiple generations, indicating that non-sequence inheritance can accelerate evolutionary rates under sustained ecological pressure.",
        "stem": "In the discussion of high-altitude avian epigenetics, which experimental methodology enabled researchers to demonstrate transgenerational methylation stability?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on epigenetics & transgenerational avian adaptation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt02_v06",
        "test": 2,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 8,
        "passage": "Traditional evolutionary biology posited that phenotypic adaptations to novel environmental stressors arise exclusively through nucleotide sequence mutations filtered by natural selection over multiple generations. Recent molecular investigations into high-altitude passerine birds, however, reveal that epigenetic mechanisms\u2014specifically cytosine DNA methylation\u2014can mediate rapid adaptive phenotypic plasticity.\n\nWhen lowland bird cohorts are introduced to hypoxic alpine habitats, rapid changes in the methylation patterns of hemoglobin subunit genes occur within days, altering oxygen-binding affinity. Although evolutionary critics initially argued that germline reprogramming during gametogenesis erases somatic methylation marks, laboratory breeding trials demonstrate that specific hypoxic epialleles persist across multiple generations, indicating that non-sequence inheritance can accelerate evolutionary rates under sustained ecological pressure.",
        "stem": "The author of the passage would be most likely to endorse which of the following statements regarding transgenerational epigenetic inheritance in birds?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on epigenetics & transgenerational avian adaptation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt02_v07",
        "test": 2,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 9,
        "passage": "Traditional evolutionary biology posited that phenotypic adaptations to novel environmental stressors arise exclusively through nucleotide sequence mutations filtered by natural selection over multiple generations. Recent molecular investigations into high-altitude passerine birds, however, reveal that epigenetic mechanisms\u2014specifically cytosine DNA methylation\u2014can mediate rapid adaptive phenotypic plasticity.\n\nWhen lowland bird cohorts are introduced to hypoxic alpine habitats, rapid changes in the methylation patterns of hemoglobin subunit genes occur within days, altering oxygen-binding affinity. Although evolutionary critics initially argued that germline reprogramming during gametogenesis erases somatic methylation marks, laboratory breeding trials demonstrate that specific hypoxic epialleles persist across multiple generations, indicating that non-sequence inheritance can accelerate evolutionary rates under sustained ecological pressure.",
        "stem": "Which of the following best outlines the structural progression of the passage evaluating high-altitude avian epigenetics?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on epigenetics & transgenerational avian adaptation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt02_v08",
        "test": 2,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "Traditional evolutionary biology posited that phenotypic adaptations to novel environmental stressors arise exclusively through nucleotide sequence mutations filtered by natural selection over multiple generations. Recent molecular investigations into high-altitude passerine birds, however, reveal that epigenetic mechanisms\u2014specifically cytosine DNA methylation\u2014can mediate rapid adaptive phenotypic plasticity.\n\nWhen lowland bird cohorts are introduced to hypoxic alpine habitats, rapid changes in the methylation patterns of hemoglobin subunit genes occur within days, altering oxygen-binding affinity. Although evolutionary critics initially argued that germline reprogramming during gametogenesis erases somatic methylation marks, laboratory breeding trials demonstrate that specific hypoxic epialleles persist across multiple generations, indicating that non-sequence inheritance can accelerate evolutionary rates under sustained ecological pressure.",
        "stem": "In the second paragraph of the avian epigenetics text, the author focuses specifically on the persistence of:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on epigenetics & transgenerational avian adaptation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt02_v09",
        "test": 2,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Traditional evolutionary biology posited that phenotypic adaptations to novel environmental stressors arise exclusively through nucleotide sequence mutations filtered by natural selection over multiple generations. Recent molecular investigations into high-altitude passerine birds, however, reveal that epigenetic mechanisms\u2014specifically cytosine DNA methylation\u2014can mediate rapid adaptive phenotypic plasticity.\n\nWhen lowland bird cohorts are introduced to hypoxic alpine habitats, rapid changes in the methylation patterns of hemoglobin subunit genes occur within days, altering oxygen-binding affinity. Although evolutionary critics initially argued that germline reprogramming during gametogenesis erases somatic methylation marks, laboratory breeding trials demonstrate that specific hypoxic epialleles persist across multiple generations, indicating that non-sequence inheritance can accelerate evolutionary rates under sustained ecological pressure.",
        "stem": "The author references traditional neo-Darwinian critics of epigenetic marks in order to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on epigenetics & transgenerational avian adaptation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt02_v10",
        "test": 2,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 9,
        "passage": "Traditional evolutionary biology posited that phenotypic adaptations to novel environmental stressors arise exclusively through nucleotide sequence mutations filtered by natural selection over multiple generations. Recent molecular investigations into high-altitude passerine birds, however, reveal that epigenetic mechanisms\u2014specifically cytosine DNA methylation\u2014can mediate rapid adaptive phenotypic plasticity.\n\nWhen lowland bird cohorts are introduced to hypoxic alpine habitats, rapid changes in the methylation patterns of hemoglobin subunit genes occur within days, altering oxygen-binding affinity. Although evolutionary critics initially argued that germline reprogramming during gametogenesis erases somatic methylation marks, laboratory breeding trials demonstrate that specific hypoxic epialleles persist across multiple generations, indicating that non-sequence inheritance can accelerate evolutionary rates under sustained ecological pressure.",
        "stem": "Based on the analysis of epigenetic inheritance, how would evolutionary biologists most likely explain persistent phenotypic thermal tolerance in desert lizards reared across generations at temperate elevations?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on epigenetics & transgenerational avian adaptation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt02_v11",
        "test": 2,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "Traditional evolutionary biology posited that phenotypic adaptations to novel environmental stressors arise exclusively through nucleotide sequence mutations filtered by natural selection over multiple generations. Recent molecular investigations into high-altitude passerine birds, however, reveal that epigenetic mechanisms\u2014specifically cytosine DNA methylation\u2014can mediate rapid adaptive phenotypic plasticity.\n\nWhen lowland bird cohorts are introduced to hypoxic alpine habitats, rapid changes in the methylation patterns of hemoglobin subunit genes occur within days, altering oxygen-binding affinity. Although evolutionary critics initially argued that germline reprogramming during gametogenesis erases somatic methylation marks, laboratory breeding trials demonstrate that specific hypoxic epialleles persist across multiple generations, indicating that non-sequence inheritance can accelerate evolutionary rates under sustained ecological pressure.",
        "stem": "The passage indicates that future scientific and operational frameworks in biopharmaceutical kinetics will be required to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on epigenetics & transgenerational avian adaptation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt02_v12",
        "test": 2,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Lead Immunologist at SynthoVax Therapeutics: \"Deploying monoclonal antibody bioreactor will enable our division to optimize dissociation constant within twelve months. Therefore, the executive steering committee must approve our funding request without delay.\"\n\nWhich of the following is an unstated assumption upon which the lead immunologist's argument depends?",
        "options": [
          "The policy will not inadvertently trigger battery storage adoption that cancels out the expected gains.",
          "The capital allocation required is strictly less than any expenditure approved in the prior fiscal year.",
          "No neighboring jurisdictions have considered implementing similar regulatory policies.",
          "The personnel tasked with enforcing the policy have completed postgraduate compliance degrees.",
          "Public opinion surveys indicate universal consumer enthusiasm for the initiative."
        ],
        "answer": "A",
        "explanation": "Negation test: If the policy DOES trigger battery storage adoption that cancels out the expected gains, the goal of peak grid electricity demand will fail, collapsing the argument.",
        "trap": "Focusing on administrative trivia (degree qualifications) or budget comparisons.",
        "estSeconds": 115
      },
      {
        "id": "pt02_v13",
        "test": 2,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Operations Analyst at SynthoVax Therapeutics: \"A three-month pilot deployment of monoclonal antibody bioreactor in region Alpha yielded a 25% improvement in dissociation constant. This empirical result establishes that monoclonal antibody bioreactor was the direct causal driver of the observed efficiency gain.\"\n\nWhich of the following, if true, most seriously undermines the analyst's causal conclusion?",
        "options": [
          "Test district Alpha simultaneously experienced a major external demographic shift that naturally produces high baseline performance.",
          "The software utilized to compile test results was upgraded three weeks prior to the pilot rollout.",
          "Several junior employees in district Alpha reported working five additional overtime hours during the pilot.",
          "The cost of the pilot study was covered by a philanthropic research grant rather than operating revenue.",
          "Competing firms in the same industry have not yet published their quarterly operational statistics."
        ],
        "answer": "A",
        "explanation": "Introducing an external confounding variable (simultaneous demographic shift) directly attacks the causal attribution made by the consultant.",
        "trap": "Pointing out that the pilot was grant-funded, which affects replication finances but not the validity of the pilot's causal data.",
        "estSeconds": 110
      },
      {
        "id": "pt02_v14",
        "test": 2,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Strategy Director at SynthoVax Therapeutics: \"Allocating capital toward monoclonal antibody bioreactor represents the most effective strategic pathway for our firm to expand dissociation constant.\"\n\nWhich of the following, if true, provides the strongest corroborating evidence for the director's assertion?",
        "options": [
          "In extensive blind controlled trials across diverse industry segments, organizations adopting Residential Solar Rebates consistently outperformed control groups on peak grid electricity demand.",
          "The strategic planner recently completed an executive leadership certification at an accredited business school.",
          "The vendor supplying the hardware for the policy offers a 30-day money-back guarantee.",
          "Several trade journals recently featured editorial articles discussing emerging regulatory trends.",
          "The policy requires no alterations to the firm's existing corporate legal structure."
        ],
        "answer": "A",
        "explanation": "Independent controlled trials demonstrating that the policy consistently beats control groups across diverse segments provides robust causal validation.",
        "trap": "Relying on the planner's credentials (ad hominem support) rather than empirical evidence.",
        "estSeconds": 100
      },
      {
        "id": "pt02_v15",
        "test": 2,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Clinical Ethics Officer: At SynthoVax Therapeutics, all preclinical protocols involving monoclonal antibodies must be authorized by the Lead Immunologist. Any protocol authorized must undergo a biohazard containment review unless it consists entirely of computational data modeling. Protocol Beta was authorized but did not undergo a containment review. If true, which must be true?",
        "options": [
          "The first describes an impending regulatory proposal; the second introduces evidence that undermines an objection to that proposal.",
          "The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.",
          "The first is an assumption underlying the industry objection; the second is the analyst\u2019s primary thesis.",
          "The first provides empirical evidence; the second states an intermediate conclusion rejected by the author.",
          "The first introduces a claim the author accepts; the second defends a counter-argument."
        ],
        "answer": "A",
        "explanation": "Boldface 1 describes the regulatory initiative being debated. Boldface 2 presents empirical compliance cost data that directly counters the lobbyists' objection.",
        "trap": "Confusing Boldface 1 with the author's personal conclusion (which appears in the final sentence).",
        "estSeconds": 125
      },
      {
        "id": "pt02_v16",
        "test": 2,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Clinical Trials Chair: To eliminate cross-contamination during antibody purification, our facility recommends switching from reusable glass columns to single-use fluoropolymer cassettes. Which of the following evaluations would be most informative?",
        "options": [
          "Whether the monetary benefits realized from peak grid electricity demand exceed the ongoing compliance and operational costs associated with Residential Solar Rebates.",
          "Whether participating organizations display corporate logos on public transit shelters.",
          "How many years the auditor has worked in the regional auditing bureau.",
          "Whether similar policies were debated by legislative committees during the prior decade.",
          "Whether employee satisfaction surveys are conducted semi-annually or annually."
        ],
        "answer": "A",
        "explanation": "Net return on capital is defined as Net Financial Benefits minus Total Costs. Determining whether revenue gains exceed operational costs is decisive.",
        "trap": "Choosing historical trivia or auditor tenure, which do not influence the mathematical financial return.",
        "estSeconds": 110
      },
      {
        "id": "pt02_v17",
        "test": 2,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Medical Sociologist: Ethicists often claim that clinical trial participation is motivated purely by altruistic ideals. **However, survey data from immunology patients reveal that access to experimental therapies is the primary catalyst.** Some scholars assert that financial stipends explain attendance. Yet econometric regression proves that therapeutic access dwarfs all monetary factors; **the pursuit of clinical treatment remains the decisive causal factor.** What roles do the boldface portions play?",
        "options": [
          "Rapid organic growth in commercial activity created new baseline volume that would have severely degraded performance in the absence of the subsidies.",
          "The currency in which subsidies were disbursed remained stable on international currency exchange markets.",
          "Several administrative assistants retired during the middle of the fiscal quarter.",
          "The auditing agency used computerized spreadsheets rather than handwritten paper ledgers.",
          "The subsidies were announced during a nationally televised press conference."
        ],
        "answer": "A",
        "explanation": "A powerful counteracting upward pressure (organic commercial growth) would have caused a steep deterioration; the policy succeeded in keeping metrics flat against a worsening baseline.",
        "trap": "Focusing on accounting ledger format (option D), which explains no operational dynamics.",
        "estSeconds": 105
      },
      {
        "id": "pt02_v18",
        "test": 2,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Safety Officer at SynthoVax Therapeutics: Over the past three quarters, SynthoVax Therapeutics equipped 90% of all monoclonal antibody bioreactor units with automated proximity sensors. Yet despite this safety upgrade, reported workplace minor incident rates in biopharmaceutical kinetics increased by 14% over the same timeframe.\n\nWhich of the following, if true, most helps to resolve the apparent discrepancy described above?",
        "options": [
          "Mistakes a necessary condition for a sufficient condition.",
          "Attacks the personal moral character of corporate executives.",
          "Relies on circular logic by defining performance as adoption of the policy.",
          "Fails to specify the exact percentage return of the market index.",
          "Assumes that corporate profitability is the sole measure of human happiness."
        ],
        "answer": "A",
        "explanation": "The premise shows that adopting the policy may be necessary to avoid failure, but that does not mean adoption is sufficient to guarantee market outperformance.",
        "trap": "Selecting option C (circular logic) when the formal flaw is affirming the consequent / confusing necessary and sufficient conditions.",
        "estSeconds": 115
      },
      {
        "id": "pt02_v19",
        "test": 2,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Biotech Clinical VP: Every medical clinic that gave our diagnostic software top marks performed at least five clinical titration assays per week. Clinics running fewer assays gave lower satisfaction ratings. Therefore, to boost overall clinic satisfaction, we should mandate five assays weekly. The VP's reasoning is most vulnerable to criticism on the grounds that it:",
        "options": [
          "Some facilities in Province 2 are NOT tier-1 manufacturing facilities.",
          "All facilities in Province 2 maintain ISO-14001 certification.",
          "No tier-1 manufacturing facility is located in Province 2.",
          "Every facility that lacks ISO-14001 certification operates uncalibrated combustion chambers.",
          "Province 2 has the highest industrial energy consumption in the nation."
        ],
        "answer": "A",
        "explanation": "There exist facilities in Province X with uncalibrated chambers. None of these can have ISO-14001 certification (by statement 2). Since all tier-1 facilities must have ISO-14001 certification, these uncertified facilities in Province X cannot be tier-1 facilities.",
        "trap": "Concluding that NO tier-1 facilities exist in Province X (option C), which oversteps the premises.",
        "estSeconds": 110
      },
      {
        "id": "pt02_v20",
        "test": 2,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Biomedical Laboratory Director: Our facility plans to install automated micro-fluidic pipetting robots to eliminate human pipetting variation in clinical assays. Critics argue maintenance costs exceed labor savings. However, robotic precision reduces assay reagent consumption by 60%. Which of the following provides the strongest support for the director's plan?",
        "options": [
          "Concurrently with the predator removal, the reserve experienced a massive cyclical emergence of nutrient-rich prey that provided unprecedented food abundance.",
          "Target species construct nests in deciduous trees as well as evergreen shrubs.",
          "Invasive predators were introduced to the continent by European settlers in the eighteenth century.",
          "Volunteers conducted population counts using standard 10x binoculars.",
          "Several nearby urban parks also have small populations of the same species."
        ],
        "answer": "A",
        "explanation": "The simultaneous explosion of nutrient-rich cicada prey provides an overwhelming alternative causal explanation for the surge in reproduction.",
        "trap": "Noting the historical origins of predators, which is irrelevant to current breeding dynamics.",
        "estSeconds": 115
      },
      {
        "id": "pt02_v21",
        "test": 2,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Biomedical QA Manager: Last quarter, our cleanroom doubled robotic air sampling sweeps in production suite Alpha, and contaminated drug batches declined by 40%. This proves that doubling air sweeps should be implemented across all pharmaceutical suites. Which of the following most seriously weakens the manager's conclusion?",
        "options": [
          "The patient case mix and medical complexity in Ward 2 are representative of clinical departments across the entire hospital system.",
          "The platform software runs on standard desktop workstations running Windows 11.",
          "Physicians in Ward 2 completed an online feedback survey regarding user satisfaction.",
          "The hospital's malpractice insurance premium is reviewed annually in November.",
          "Medical transcriptionists previously belonged to a regional healthcare labor union."
        ],
        "answer": "A",
        "explanation": "Confirming that the test clinic is representative demonstrates that the 40% error reduction will likely replicate across other hospital departments.",
        "trap": "Citing IT workstation compatibility (option B), which is convenient but does not prove clinical effectiveness.",
        "estSeconds": 100
      },
      {
        "id": "pt02_v22",
        "test": 2,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Biomedical Conservationist: To protect rare wetland orchids near our clinical research campus, botanists built elevated wooden boardwalks to prevent visitor foot trampling. Botanists project that orchid cluster density will increase over the next ten years. Which of the following is a required assumption?",
        "options": [
          "The public subway system possesses sufficient train capacity to accommodate the surge of diverted commuters without causing severe overcrowding that deters ridership.",
          "All private automobile drivers earn incomes above the national median household threshold.",
          "City parking meters generate less revenue than public transit fareboxes.",
          "Bicycle sharing programs will experience a corresponding increase in ridership.",
          "Municipal road paving projects are financed through state gasoline excise taxes."
        ],
        "answer": "A",
        "explanation": "Negation test: If the subway lacks capacity and overcrowding becomes unmanageable, drivers will not switch to transit (they may carpool, detour, or telecommute), defeating the policy.",
        "trap": "Assuming all drivers have high incomes (option B), which is not logically required.",
        "estSeconds": 120
      },
      {
        "id": "pt02_v23",
        "test": 2,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Biotech Historian: Analysts frequently claim that biotech cluster Alpha grew entirely due to state university patent subsidies. **However, neighboring research centers with identical university patent subsidies generated zero successful commercial therapies.** Clearly, subsidies alone were not the decisive factor. Rather, **cluster Alpha's dense network of specialized venture capital syndicates and contract research facilities created operational synergies that competitors could not match.** In the argument, what roles do the boldface portions play?",
        "options": [
          "The first is an established claim that the argument aims to refute; the second is an observation that supports the author\u2019s alternative conclusion.",
          "The first is the main conclusion of the argument; the second is a premise offered to defend that conclusion.",
          "The first provides empirical evidence; the second states an intermediate hypothesis rejected by the author.",
          "The first is a prediction; the second is an observation that disproves that prediction.",
          "The first introduces a hypothesis; the second proves that coal adoption never occurred."
        ],
        "answer": "A",
        "explanation": "Boldface 1 presents the conventional orthodoxy that the author sets out to undermine. Boldface 2 describes the persistent water-power cost advantage that supports the author's alternative thesis.",
        "trap": "Selecting option B which confuses the introductory conventional view with the author's own main conclusion.",
        "estSeconds": 120
      },
      {
        "id": "pt02_di01",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "In a data transmission pipeline for aerospace & satellite communications, if $k$ is a positive integer, is $k$ divisible by 8?\n\n(1) $k$ is divisible by 4 and $k$ is even.\n(2) $k^2$ is divisible by 64.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "D",
        "explanation": "Statement (1): Since $k$ is even (divisible by 2) and divisible by 4, and $\\text{LCM}(2, 4) = 8$, $k$ must be divisible by 8. Sufficient.\nStatement (2): If $k^2$ is divisible by 64, then for positive integer $k$, $\\sqrt{k^2} = k$ is divisible by 8. Sufficient.\nTherefore, EACH statement ALONE is sufficient.",
        "trap": "Believing statement (2) allows fractional roots when $k$ is explicitly constrained to be an integer.",
        "estSeconds": 95
      },
      {
        "id": "pt02_di02",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If $a$ and $b$ are non-zero real parameters measuring dissociation constant at SynthoVax Therapeutics, is $\\frac{a}{b} > 1$?\n\n(1) $a > b$\n(2) $a b > 0$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "E",
        "explanation": "Statement (1): If $x = 2, y = 1$, $x/y = 2 > 1$. If $x = -1, y = -2$, $x > y$ holds but $x/y = 1/2 < 1$. Insufficient.\nStatement (2): Tells us $x$ and $y$ have the same sign, but gives no relative magnitude. Insufficient.\nTogether: If $x=2, y=1$, $x/y=2 > 1$. If $x=-1, y=-2$, $x>y$ and $xy=2>0$ hold, but $x/y=0.5 < 1$. Two contradictory answers remain possible. Statements (1) and (2) together are NOT sufficient (Answer E).",
        "trap": "Assuming $x$ and $y$ must be positive without testing negative numbers.",
        "estSeconds": 110
      },
      {
        "id": "pt02_di03",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Working at constant rates, how many hours does it take for Module A and Module B in aerospace & satellite communications working together to process 3500 data transactions?\n\n(1) Module A processes 1400 transactions in 2 hours.\n(2) Operating simultaneously, Module A and Module B process 1750 transactions in 2.5 hours.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "B",
        "explanation": "Statement (1) provides only the rate for Module A. Insufficient.\nStatement (2) provides the combined throughput rate directly: Rate $= \\text{Transactions} / \\text{Time}$. With the combined rate known, the time to complete the target volume is uniquely determined. Sufficient.",
        "trap": "Believing individual rates for both modules are required.",
        "estSeconds": 90
      },
      {
        "id": "pt02_di04",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sample $S$ of 5 distinct integers recorded during aerospace & satellite communications testing, is the mean of $S$ greater than the median of $S$?\n\n(1) The 3 smallest integers are 1, 3, and 6.\n(2) The largest integer in $S$ is 40.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "C",
        "explanation": "Statement (1): Median is 6. Upper values could be 7, 8 (mean = 5 < 6) or 7, 50 (mean > 6). Insufficient.\nStatement (2): Gives no information about median or lower values. Insufficient.\nTogether: Elements are $1, 3, 6, d, {35 + test_idx * 5}$ where $6 < d < {35 + test_idx * 5}$. Minimum sum is $1 + 3 + 6 + 7 + {35 + test_idx * 5} = {52 + test_idx * 5}$. Minimum mean is $({52 + test_idx * 5})/5 > 10 > 6$. Since the minimum possible mean is strictly greater than the median 6, the answer is always YES. Sufficient.",
        "trap": "Neglecting to calculate the minimum possible mean under the constraint $d \\ge 7$.",
        "estSeconds: 115": 115,
        "estSeconds": 115
      },
      {
        "id": "pt02_di05",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "Did SynthoVax Therapeutics's division for biopharmaceutical kinetics generate an operating net margin of at least $\\$40,000$ on total contract billings of $\\$180,000$?\n\n(1) Total operating expenses were strictly under 65% of contract billings.\n(2) Operating margin exceeded 20% of contract billings.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "Profit = Revenue - Costs. Statement (1): If costs < 65% of revenue, profit > 35% of revenue. 35% of $\\$165,000$ is at least $\\$57,750$, which is strictly greater than $\\$40,000$. Sufficient.\nStatement (2): 20% of $\\$165,000$ is $\\$33,000$. For smaller revenues, 20% might be $\\$30,000$ or $\\$36,000$ (which could allow profit to be $\\$38,000 < \\$40,000$). Thus Statement (2) is not guaranteed sufficient across baseline tests. Statement (1) ALONE is sufficient.",
        "trap": "Assuming statement (2) guarantees clearing $\\$40,000$ without calculating the 20% threshold.",
        "estSeconds": 95
      },
      {
        "id": "pt02_di06",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "If parameter $p$ is an integer recorded during titration purification runs on monoclonal antibody bioreactor at SynthoVax Therapeutics, is $|p| = p$?\n\n(1) $p^2 = p$\n(2) $p^3 \\ge p$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "$|m| = m$ holds if and only if $m \\ge 0$.\nStatement (1): $m(m - 1) = 0 \\implies m = 0$ or $m = 1$. In both cases, $m \\ge 0$, so $|m| = m$ is definitely true. Sufficient.\nStatement (2): $m^3 - m \\ge 0 \\implies m(m-1)(m+1) \\ge 0$. Integer solutions include $m = -1$ (where $|-1| = 1 \\ne -1$, so NO) as well as $m = 0, 1, 2$ (where YES). Insufficient.\nTherefore, Statement (1) ALONE is sufficient.",
        "trap": "Overlooking $m = -1$ as a valid integer solution to $m^3 \\ge m$.",
        "estSeconds": 105
      },
      {
        "id": "pt02_di07",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Referring to the clinical trial operations table, which biopharmaceutical research unit achieved the highest operating profit in dollars?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Aerospace & Satellite Communications",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-2",
              48,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-2",
              66,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-2",
              40,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-2",
              80,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-2",
              57,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-2",
              51,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The median throughput among units with an Error Rate strictly under 1.0% exceeds 45 k/day. (Yes/No)",
          "Statement 2: The unit with the highest Cost Index also has the highest Error Rate. (Yes/No)",
          "Statement 3: All units with Uptime greater than 99.0% have a Cost Index below 150. (Yes/No)"
        ],
        "answer": "Yes | Yes | Yes",
        "explanation": "Statement 1: Units with error < 1.0% are Alpha, Gamma, Epsilon, Zeta. Throughputs are 45+, 38+, 54+, 48+. Median is (45+48)/2 > 45 k/day -> Yes.\nStatement 2: Unit Delta has Cost Index 180 (highest) and Error Rate 2.1% (highest) -> Yes.\nStatement 3: Units with Uptime > 99.0% are Alpha (110), Gamma (85), Epsilon (125), Zeta (115), all under 150 -> Yes.",
        "trap": "Sorting by the wrong column or taking the mean instead of the median.",
        "estSeconds": 120
      },
      {
        "id": "pt02_di08",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluate operational ranking correlations based on the aerospace & satellite communications table.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Aerospace & Satellite Communications",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-2",
              48,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-2",
              66,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-2",
              40,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-2",
              80,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-2",
              57,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-2",
              51,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Sorting descending by Throughput yields an identical ranking as sorting descending by Cost Index. (Yes/No)",
          "Statement 2: Exactly three units have an Error Rate strictly below 0.7%. (Yes/No)",
          "Statement 3: Unit Gamma has both the lowest Throughput and the lowest Error Rate. (Yes/No)"
        ],
        "answer": "No | Yes | Yes",
        "explanation": "Statement 1: Delta is highest in both, but Beta (62, 145) vs Epsilon (54, 125) vs Alpha (45, 110) vs Zeta (48, 115) - Zeta throughput is higher than Alpha but Cost Index is 115 vs 110, order varies -> No.\nStatement 2: Units with error < 0.7% are Alpha (0.4), Gamma (0.2), Zeta (0.6) -> exactly three -> Yes.\nStatement 3: Gamma has lowest throughput (38+) and lowest error (0.2%) -> Yes.",
        "trap": "Assuming throughput and cost index correlate with 1.0 rank correlation.",
        "estSeconds": 115
      },
      {
        "id": "pt02_di09",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If the biopharmaceutical trial division table is sorted in ascending order by Operating Margin (%), which research unit occupies the median position?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Aerospace & Satellite Communications",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-2",
              48,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-2",
              66,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-2",
              40,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-2",
              80,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-2",
              57,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-2",
              51,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Unit Gamma has a Cost Index per throughput unit of less than 2.5. (Yes/No)",
          "Statement 2: The range of Error Rates across all 6 units is strictly greater than 1.8 percentage points. (Yes/No)",
          "Statement 3: More than half of the units have an Uptime exceeding 99.2%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Gamma ratio = 85 / (38+) < 2.5 -> Yes.\nStatement 2: Max error = Delta (2.1%), Min error = Gamma (0.2%). Range = 2.1 - 0.2 = 1.9% > 1.8% -> Yes.\nStatement 3: Units with Uptime > 99.2% are Alpha (99.8), Gamma (99.9), Zeta (99.4) -> 3 out of 6 (wait: exactly half, so strictly more than half is No!) -> Answer: Yes | Yes | No.",
        "trap": "Confusing 'at least half' with 'strictly more than half'.",
        "estSeconds": 125
      },
      {
        "id": "pt02_di10",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Evaluate reliability and risk profiles across units in aerospace & satellite communications.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Aerospace & Satellite Communications",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-2",
              48,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-2",
              66,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-2",
              40,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-2",
              80,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-2",
              57,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-2",
              51,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The unit with the highest Throughput also has the lowest Uptime. (Yes/No)",
          "Statement 2: Total combined throughput of the two highest units exceeds 130 k/day. (Yes/No)",
          "Statement 3: Every unit with a Cost Index greater than 120 has an Error Rate above 1.0%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Delta has highest throughput (75+) and lowest uptime (97.5%) -> Yes.\nStatement 2: Top two are Delta (75+) and Beta (62+) = 137+ > 130 -> Yes.\nStatement 3: Unit Epsilon has Cost Index 125 (>120) but Error Rate 0.8% (< 1.0%) -> No.",
        "trap": "Overlooking Unit Epsilon's low error rate despite high cost.",
        "estSeconds": 115
      },
      {
        "id": "pt02_di11",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "According to the biomedical scatter plot evaluating trial intensity versus capital return, as clinical R&D rises from 2% to 11%, return on capital generally [Select 1], while past 11%, return generally [Select 2].",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Aerospace & Satellite Communications",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 22
            },
            {
              "x": 20,
              "y": 37
            },
            {
              "x": 30,
              "y": 50
            },
            {
              "x": 40,
              "y": 60
            },
            {
              "x": 50,
              "y": 67
            },
            {
              "x": 60,
              "y": 72
            }
          ]
        },
        "options": [
          "Dropdown 1: The overall relationship between Resource Investment and Productivity Output is [strongly positive | strongly negative | sinusoidal | uncorrelated].",
          "Dropdown 2: As Resource Investment increases beyond $40k, the rate of increase in Productivity Output displays [diminishing marginal returns | increasing exponential growth | negative acceleration | zero slope]."
        ],
        "answer": "strongly positive | diminishing marginal returns",
        "explanation": "Dropdown 1: As investment rises from 10 to 60, output rises consistently from 20+ to 70+ -> strongly positive.\nDropdown 2: Between 10 and 30, slope is ~1.4; between 40 and 60, slope drops to ~0.6 -> diminishing marginal returns.",
        "trap": "Confusing diminishing marginal growth with an absolute decline in output.",
        "estSeconds": 105
      },
      {
        "id": "pt02_di12",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "According to the biomedical chart, approximately what percentage of trial research labs with R&D intensity below 6% achieved an ROIC exceeding 20%?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Aerospace & Satellite Communications",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 22
            },
            {
              "x": 20,
              "y": 37
            },
            {
              "x": 30,
              "y": 50
            },
            {
              "x": 40,
              "y": 60
            },
            {
              "x": 50,
              "y": 67
            },
            {
              "x": 60,
              "y": 72
            }
          ]
        },
        "options": [
          "Dropdown 1: The average marginal gain in output per thousand dollars invested between $10k and $30k is approximately [1.4 points/$k | 2.5 points/$k | 3.5 points/$k | 0.5 points/$k].",
          "Dropdown 2: The point with the highest output-to-investment ratio is at an investment of [$10k | $30k | $50k | $60k]."
        ],
        "answer": "1.4 points/$k | $10k",
        "explanation": "Dropdown 1: Slope = (48 - 20) / (30 - 10) = 28 / 20 = 1.4 points/$k.\nDropdown 2: Ratio y/x: At x=10, y/x = 22/10 = 2.2. At x=60, y/x = 72/60 = 1.2. The highest ratio occurs at the earliest stage ($10k).",
        "trap": "Assuming the highest absolute output point ($60k) has the highest efficiency ratio.",
        "estSeconds": 115
      },
      {
        "id": "pt02_di13",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "According to the biomedical research chart, the single pharmaceutical lab identified as the largest positive statistical outlier is defined by which coordinates?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Aerospace & Satellite Communications",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 22
            },
            {
              "x": 20,
              "y": 37
            },
            {
              "x": 30,
              "y": 50
            },
            {
              "x": 40,
              "y": 60
            },
            {
              "x": 50,
              "y": 67
            },
            {
              "x": 60,
              "y": 72
            }
          ]
        },
        "options": [
          "Dropdown 1: The median investment level across the 6 observed data points is [$35k | $40k | $45k | $50k].",
          "Dropdown 2: A firm investing $45k would be projected by linear interpolation to produce an output index of approximately [61.5 | 68.0 | 72.5 | 55.0]."
        ],
        "answer": "$35k | 61.5",
        "explanation": "Dropdown 1: Ordered x: 10, 20, 30, 40, 50, 60. Median = (30 + 40)/2 = $35k.\nDropdown 2: Between x=40 (y~58) and x=50 (y~65), midpoint x=45 gives y = (58 + 65)/2 = 61.5.",
        "trap": "Extrapolating using the steep slope from the early segment.",
        "estSeconds": 110
      },
      {
        "id": "pt02_di14",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If an operating facility at SynthoVax Therapeutics reduces its expenditure from 16% down to 10% along the regression curve for dissociation constant, what is the expected change in its performance index?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Aerospace & Satellite Communications",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 22
            },
            {
              "x": 20,
              "y": 37
            },
            {
              "x": 30,
              "y": 50
            },
            {
              "x": 40,
              "y": 60
            },
            {
              "x": 50,
              "y": 67
            },
            {
              "x": 60,
              "y": 72
            }
          ]
        },
        "options": [
          "Dropdown 1: Increasing investment from $50k to $60k yields a percentage increase in output of approximately [7% | 15% | 25% | 35%].",
          "Dropdown 2: If fixed costs require an output index of at least 50 to break even, the minimum necessary investment is approximately [$32k | $22k | $42k | $15k]."
        ],
        "answer": "7% | $32k",
        "explanation": "Dropdown 1: At x=50, y~67. At x=60, y~72. Change = 5 / 67 ~ 7.4%.\nDropdown 2: At x=30, y~48; at x=40, y~58. Output 50 is reached just past $30k (approx $32k).",
        "trap": "Calculating percentage increase based on investment (20%) instead of output (7%).",
        "estSeconds": 115
      },
      {
        "id": "pt02_di15",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "At SynthoVax Therapeutics, a capital allocation of $42 million is split between monoclonal antibody bioreactor (Asset X) and secondary infrastructure (Asset Y). The allocation to Asset X is exactly 5 times the allocation to Asset Y. Select the dollar allocation for Asset X and Asset Y.\n\nValues: Asset X = $35M, Asset Y = $7M.",
        "options": [
          "Grade A: 42 liters",
          "Grade B: 21 liters"
        ],
        "answer": "Grade A = 42 | Grade B = 21",
        "explanation": "Alligation: Ratio of Grade A to Grade B is $|50 - 30| : |30 - 20| = 20 : 10 = 2 : 1$. Total volume is 63 liters. Grade A $= 2/3 \\times 63 = 42$ liters, Grade B $= 1/3 \\times 63 = 21$ liters.",
        "trap": "Reversing the 2:1 ratio between Grade A and Grade B.",
        "estSeconds": 125
      },
      {
        "id": "pt02_di16",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Two parameters $U$ and $V$ in aerospace & satellite communications satisfy the linear system: $2U + 3V = 33$ and $U - V = 4$.\n\nSelect the value of $U$ and the value of $V$ that satisfy both equations.",
        "options": [
          "U: 9",
          "V: 5"
        ],
        "answer": "U = 9 | V = 5",
        "explanation": "Substitute $U = V + 4$: $2(V + 4) + 3V = 5V + 8 = 33 \\implies 5V = 25 \\implies V = 5$. Then $U = 5 + 4 = 9$.",
        "trap": "Sign error when expanding 2(V + 4).",
        "estSeconds: 105": 105,
        "estSeconds": 105
      },
      {
        "id": "pt02_di17",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "At SynthoVax Therapeutics, Pump Alpha fills an emergency containment reservoir for titration purification runs in 8 hours working alone. Working together, Pump Alpha and Pump Beta fill the reservoir in 4.8 hours. Select the time for Pump Alpha and Pump Beta working alone.",
        "options": [
          "High-Yield Debt: \\$400,000",
          "Treasury Notes: \\$600,000"
        ],
        "answer": "High-Yield = $400,000 | Treasury = $600,000",
        "explanation": "Alligation: Ratio of High-Yield to Treasury is $|3 - 5| : |8 - 5| = 2 : 3$. Fraction in High-Yield is $2/5 = 40\\% = \\$400,000$. Fraction in Treasury is $3/5 = 60\\% = \\$600,000$.",
        "trap": "Inverting the 2:3 ratio to 3:2.",
        "estSeconds": 120
      },
      {
        "id": "pt02_di18",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluating the Project Charter and Financial Audit tabs for SynthoVax Therapeutics, what is the total upfront capital investment required for deploying monoclonal antibody bioreactor across all branch facilities?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Aerospace & Satellite Communications",
              "content": "Directive 2.4 regarding Aerospace & Satellite Communications:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 2:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant North only",
          "Plant North and Plant West only",
          "Plant South and Plant West only",
          "Plant North, Plant South, and Plant West",
          "None of the facilities"
        ],
        "answer": "A",
        "explanation": "Tab 1 specifies that a score of at least 90 is required for expedited licensing. Tab 2 shows only Plant North scored >= 90 (score 92). Plant West scored 88 (< 90). Thus, Plant North only qualifies.",
        "trap": "Assuming Plant West qualifies because of its 6-year history (history only grants exemption from review, not expedited licensing).",
        "estSeconds": 120
      },
      {
        "id": "pt02_di19",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Which facility at SynthoVax Therapeutics is subject to mandatory operational review according to the regulatory directive for biopharmaceutical kinetics and the audit inspection records?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Aerospace & Satellite Communications",
              "content": "Directive 2.4 regarding Aerospace & Satellite Communications:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 2:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant East only",
          "Plant South and Plant East only",
          "Plant South only",
          "Plant North and Plant East only",
          "All four plants"
        ],
        "answer": "A",
        "explanation": "Plants scoring below 85 are Plant South (84) and Plant East (79). However, Tab 1 exempts facilities operating >5 years with zero violations. Plant South has operated 7 years with 0 violations (exempt). Plant East has only 2 years and has a violation, so it is the ONLY plant subject to mandatory review.",
        "trap": "Failing to check Plant South's 7-year zero-violation exemption in Tab 1.",
        "estSeconds": 130
      },
      {
        "id": "pt02_di20",
        "test": 2,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Evaluating information across all three tabs for biopharmaceutical kinetics, which strategic conclusion regarding the financial return of deploying monoclonal antibody bioreactor is most strongly supported?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Aerospace & Satellite Communications",
              "content": "Directive 2.4 regarding Aerospace & Satellite Communications:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 2:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "No, because it has an active safety violation recorded in the preceding 12 months.",
          "Yes, provided it files the paperwork within 14 business days.",
          "Yes, because its compliance score was within 10 points of the 85 threshold.",
          "No, because only facilities with more than 5 years operating history can file stays.",
          "Yes, because emergency stays are automatically granted to all facilities."
        ],
        "answer": "A",
        "explanation": "Tab 3 explicitly states: 'No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay.' Plant East has 1 safety violation (Tab 2), disqualifying it completely.",
        "trap": "Focusing only on the 14-day filing window without checking the violation disqualification rule.",
        "estSeconds": 115
      }
    ]
  },
  {
    "testNumber": 3,
    "id": "pt_03",
    "title": "Official Focus Mock #3 (Full 64-Q Simulation)",
    "date": "2025-02-16",
    "totalScore": 665,
    "quantScore": 81,
    "verbalScore": 80,
    "dataInsightsScore": 79,
    "structure": {
      "quantQuestions": 21,
      "verbalQuestions": 23,
      "dataInsightsQuestions": 20,
      "total": 64,
      "durationMinutes": 135
    },
    "questions": [
      {
        "id": "pt03_q01",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In quantitative finance & asset valuation, a barcode serial integer $n$ satisfies that $n^2 - 1$ is divisible by prime $13$. If $1 < n < 13$, how many integer values can $n$ assume?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "12"
        ],
        "answer": "B",
        "explanation": "Since $n^2 - 1 = (n - 1)(n + 1)$ is divisible by prime 13, by Euclid's lemma either 13 divides $(n - 1)$ or 13 divides $(n + 1)$. Given $1 < n < 13$, $n - 1 < 13$, so 13 cannot divide $n - 1$. For 13 to divide $n + 1$, we must have $n + 1 = 13 \\implies n = 12$. Thus, exactly 1 integer value ($n = 12$) satisfies the condition.",
        "trap": "Assuming both $(n - 1)$ and $(n + 1)$ can yield solutions within the open interval $(1, p)$.",
        "estSeconds": 90
      },
      {
        "id": "pt03_q02",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "At QuantFund Global, Chief Risk Strategist monitors two operational units: Primary Unit Alpha completes a full cycle of duration gap rebalancing in 7 hours working alone, whereas Secondary Unit Beta requires 14 hours alone. If both units operate simultaneously at their constant rates to complete the cycle on a shared treasury yield curve portfolio, how many hours will they take together?",
        "options": [
          "3.50",
          "4.00",
          "4.50",
          "9.00",
          "4.50"
        ],
        "answer": "B",
        "explanation": "Combined rate $R = 1/6 + 1/12 = 3/12$. Time $T = 1/R = 12/3 = 4.00$ hours.",
        "trap": "Taking the arithmetic average of the two individual times.",
        "estSeconds: 85": 85,
        "estSeconds": 85
      },
      {
        "id": "pt03_q03",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "An asset management firm marks up bond underwriting fees by 35% before discounting institutional transactions by 20%. What net markup percentage does the firm realize over underlying origination expense?",
        "options": [
          "10.0%",
          "8.0%",
          "15.0%",
          "12.0%",
          "20.0%"
        ],
        "answer": "B",
        "explanation": "Multiplier $= (1 + 0.35) \\times (1 - 0.2) = 1.0800$. Net profit percentage $= (1.0800 - 1) \\times 100 = 8.0\\%$.",
        "trap": "Subtracting the percentages directly (35% - 20% = 15%).",
        "estSeconds": 90
      },
      {
        "id": "pt03_q04",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a mathematical model tracking duration spread at QuantFund Global, the exponent variable $x$ satisfies $3^{2x+1} - $3^{2x-1} = 1417176$. What is the value of $x^2 + x$?",
        "options": [
          "28",
          "30",
          "32",
          "34",
          "35"
        ],
        "answer": "B",
        "explanation": "Factor out $2^{2x-1}$: $2^{2x-1}(2^2 - 1) = 512(2^2 - 1)$. Equating exponents: $2x - 1 = 9 \\implies 2x = 10 \\implies x = 5$. Then $x^2 + x = 5^2 + 5 = 30$.",
        "trap": "Miscalculating the factored term $(base^2 - 1)$.",
        "estSeconds": 100
      },
      {
        "id": "pt03_q05",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Inequalities & Absolute Values",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "During a tolerance check on treasury yield curve portfolio measurements at QuantFund Global, how many integer values of $k$ satisfy the inequality $|2k - 8| \\le 17$?",
        "options": [
          "15",
          "16",
          "17",
          "18",
          "14"
        ],
        "answer": "B",
        "explanation": "Expand absolute value: $-15 \\le 2k - 7 \\le 15 \\implies -8 \\le 2k \\le 22 \\implies -4.0 \\le k \\le 11.0$. Length of interval for integers is strictly 16.",
        "trap": "Neglecting to include both endpoints when calculating inclusive integer count.",
        "estSeconds": 95
      },
      {
        "id": "pt03_q06",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A fixed-income fund tracks 7 distinct positive integer bond yield basis point spreads with a median spread of 20 and an average spread of 25. What is the maximum possible value for the widest basis point spread?",
        "options": [
          "119",
          "121",
          "123",
          "125",
          "127"
        ],
        "answer": "C",
        "explanation": "To maximize $x_7$, minimize elements 1, 2, 3, 5, 6. Minimum distinct positive integers: $x_1=1, x_2=2, x_3=3$. Given median $x_4 = 26$. Minimum distinct integers above median: $x_5 = 27, x_6 = 28$. Sum of all 7 integers $= 7 \\times 30 = 210$. Subtracting the 6 minimal values leaves maximum $x_7 = 123$.",
        "trap": "Allowing integers above median to equal the median rather than being strictly distinct.",
        "estSeconds": 115
      },
      {
        "id": "pt03_q07",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A trading risk committee of 4 analysts is appointed from 7 quantitative researchers and 4 portfolio managers. If at least 2 researchers and at least 1 manager are mandatory, how many distinct committees can be formed?",
        "options": [
          "116",
          "121",
          "126",
          "131",
          "136"
        ],
        "answer": "C",
        "explanation": "Ways to select 2 hardware engineers from 7: $\\binom{7}{2} = 21$. Ways to select 2 software architects from 4: $\\binom{4}{2} = 6$. Total distinct combinations $= 21 \\times 6 = 126$.",
        "trap": "Adding the combinations instead of multiplying.",
        "estSeconds": 105
      },
      {
        "id": "pt03_q08",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In financial option hedging calculations, what is the maximum integer exponent $k$ such that $3^k$ divides $45!$?",
        "options": [
          "10",
          "11",
          "12",
          "13",
          "14"
        ],
        "answer": "C",
        "explanation": "Powers of 10 in a factorial are limited by prime factor 5. Using Legendre's formula: $\\lfloor 50/5 \\rfloor + \\lfloor 50/25 \\rfloor = 10 + 2 = 12$. Thus $k = 12$.",
        "trap": "Counting powers of 2 or stopping after first division by 5.",
        "estSeconds": 90
      },
      {
        "id": "pt03_q09",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "A treasury liquidity transport travels an outbound corridor of distance $D$ at 41 mph, and returns along the same route at 82 mph. What is its overall average speed in mph?",
        "options": [
          "53.4",
          "56.0",
          "55.4",
          "51.4",
          "57.5"
        ],
        "answer": "A",
        "explanation": "Average speed over equal distances is the harmonic mean: $V = \\frac{2 s_1 s_2}{s_1 + s_2} = \\frac{2 \\times 44 \\times 68}{112} = 53.4$ mph.",
        "trap": "Choosing the arithmetic mean (option B).",
        "estSeconds": 80
      },
      {
        "id": "pt03_q10",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A bullion refining crucible contains 55 liters of an alloy solution containing 30% dissolved gold salts. How many liters of pure deionized water must be added to dilute the solution to 15% concentration?",
        "options": [
          "42",
          "44",
          "46",
          "48",
          "50"
        ],
        "answer": "C",
        "explanation": "Solvent mass is constant: $0.30 \\times 40 = 0.14 \\times (40 + w) \\implies 40 + w = 86 \\implies w = 46$ liters.",
        "trap": "Reporting total final volume rather than added water.",
        "estSeconds": 95
      },
      {
        "id": "pt03_q11",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Sequences & Series",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In an arithmetic sequence monitoring quantitative finance & asset valuation production batches, the first term is 6 and the common difference between consecutive terms is 5. What is the sum of the first 15 terms of this sequence?",
        "options": [
          "600",
          "607",
          "615",
          "623",
          "630"
        ],
        "answer": "C",
        "explanation": "Sum formula $S_{15} = \\frac{15}{2} [2(6) + 14(5)] = 15 \\times [6 + 7(5)] = 615$.",
        "trap": "Using 15d instead of (n-1)d in the summation formula.",
        "estSeconds": 90
      },
      {
        "id": "pt03_q12",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Overlapping Sets",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Among 120 technical facilities surveyed in quantitative finance & asset valuation, 58 have implemented Protocol A, 48 have implemented Protocol B, and 12 have implemented neither. How many facilities have implemented BOTH Protocol A and Protocol B?",
        "options": [
          "-6",
          "-4",
          "-2",
          "0",
          "2"
        ],
        "answer": "C",
        "explanation": "Facilities with at least one protocol $= 120 - 12 = 108$. By inclusion-exclusion: $|A \\cap B| = |A| + |B| - |A \\cup B| = 58 + 48 - 108 = -2$.",
        "trap": "Subtracting neither from both sets individually.",
        "estSeconds": 85
      },
      {
        "id": "pt03_q13",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A currency vault box contains 4 red security tokens and 6 blue security tokens. If an auditor draws 3 tokens at random without replacement, what is the probability that exactly 2 are red?",
        "options": [
          "\\frac{25}{55}",
          "\\frac{26}{55}",
          "\\frac{27}{55}",
          "\\frac{28}{55}",
          "\\frac{29}{55}"
        ],
        "answer": "C",
        "explanation": "Ways to draw two compliant parts: $\\binom{7}{2} = 21$. Ways to draw two defective parts: $\\binom{4}{2} = 6$. Total favorable $= 27$. Total unrestricted pairs: $\\binom{11}{2} = 55$. Probability $= 27/55$.",
        "trap": "Assuming sampling with replacement.",
        "estSeconds": 100
      },
      {
        "id": "pt03_q14",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Quadratics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In bond portfolio duration matching, the quadratic relationship $x^2 - 18x + K = 0$ yields two positive integer roots with a difference of 4. What is the value of $K$?",
        "options": [
          "44",
          "46",
          "48",
          "50",
          "52"
        ],
        "answer": "C",
        "explanation": "Let roots be $r_1$ and $r_2$. Sum $r_1 + r_2 = 14$, and difference $r_2 - r_1 = 2$. Solving gives roots $r_1 = 6$ and $r_2 = 8$. By Vieta's formulas, $K = r_1 \\times r_2 = 6 \\times 8 = 48$.",
        "trap": "Adding the roots rather than multiplying for the constant term $K$.",
        "estSeconds": 85
      },
      {
        "id": "pt03_q15",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In an algorithmic encryption routine for sovereign debt capital markets, what is the units digit of the integer evaluation $7^{55} + 3$?",
        "options": [
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": "C",
        "explanation": "Powers of 7 cycle in units digits: $7^1 \\rightarrow 7, 7^2 \\rightarrow 9, 7^3 \\rightarrow 3, 7^4 \\rightarrow 1$. Exponent $51 \\equiv 3 \\pmod 4$, so $7^{51}$ ends in 3. Adding 3 gives a units digit of $(3 + 3) \\pmod 10 = 6$.",
        "trap": "Failing to apply base-4 cyclicity to the exponent.",
        "estSeconds": 80
      },
      {
        "id": "pt03_q16",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Coordinate & Analytical Geometry",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In a Cartesian telemetry grid mapping treasury yield curve portfolio coordinates for QuantFund Global, line $L_1$ passes through $(0, 8)$ and $(6, 0)$. If perpendicular line $L_2$ intersects the origin $(0, 0)$, what is the slope of line $L_2$?",
        "options": [
          "\\frac{5}{7}",
          "-\\frac{5}{7}",
          "\\frac{7}{5}",
          "-\\frac{7}{5}",
          "1"
        ],
        "answer": "A",
        "explanation": "Slope of $L_1$ is $m_1 = \\frac{0 - 7}{5 - 0} = -\\frac{7}{5}$. Perpendicular slope $m_2 = -1/m_1 = \\frac{5}{7}$.",
        "trap": "Inverting without negating (option B or C).",
        "estSeconds: 75": 75,
        "estSeconds": 75
      },
      {
        "id": "pt03_q17",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sensor calibration test in quantitative finance & asset valuation, the standard deviation of pressure readings was 5.0 psi. If each reading is multiplied by 1.25 and then decreased by 3.5 psi, what is the standard deviation of the transformed readings in psi?",
        "options": [
          "2.75",
          "6.25",
          "5.00",
          "9.75",
          "7.50"
        ],
        "answer": "B",
        "explanation": "Standard deviation is unaffected by the subtraction of a constant (-3.5), but scales by $|1.25|$: $\\sigma_{new} = 1.25 \\times 5.0 = 6.25$ psi.",
        "trap": "Subtracting 3.5 from the standard deviation (option A).",
        "estSeconds": 70
      },
      {
        "id": "pt03_q18",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In sovereign debt capital markets, replacement parts for treasury yield curve portfolio at QuantFund Global are packaged strictly in quantities of 5 or 8 units. What is the greatest integer number of units that cannot be assembled using non-negative combinations of these packages?",
        "options": [
          "15",
          "16",
          "17",
          "18",
          "19"
        ],
        "answer": "C",
        "explanation": "By the Frobenius Coin Formula for coprime integers $a$ and $b$, the largest non-constructible integer is $ab - a - b = (4)(7) - 4 - 7 = 17$.",
        "trap": "Computing ab directly without subtracting (a + b).",
        "estSeconds": 110
      },
      {
        "id": "pt03_q19",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "When the two digits of integer bond coupon rate $N$ are interchanged, the resulting value exceeds $N$ by 45. What is the positive difference between the units digit and tens digit of $N$?",
        "options": [
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "answer": "C",
        "explanation": "$(10B + A) - (10A + B) = 9(B - A) = 36 \\implies B - A = 4$.",
        "trap": "Confusing (B - A) with (A - B).",
        "estSeconds": 75
      },
      {
        "id": "pt03_q20",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A capital expenditure allocation of $\\$6,000$ in quantitative finance & asset valuation appreciates at an annual rate of 10% compounded semi-annually. What is the total accumulated interest after 1 year?",
        "options": [
          "\\$600",
          "\\$615",
          "\\$630",
          "\\$660",
          "\\$675"
        ],
        "answer": "B",
        "explanation": "Semi-annual rate is 5% over 2 periods. Multiplier is $(1.05)^2 = 1.1025$. Interest $= 6000 \\times 0.1025 = \\$615$.",
        "trap": "Calculating simple interest at 10% (option A).",
        "estSeconds": 90
      },
      {
        "id": "pt03_q21",
        "test": 3,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "For all positive real numbers $u$ and $v$ modeling duration spread at QuantFund Global, an operational operator $\\star$ is defined by $u \\star v = \\frac{u^2 - v^2}{u - v}$. What is the numerical value of $9 \\star 3$?",
        "options": [
          "\\frac{4}{2}",
          "\\frac{4}{3}",
          "\\frac{4}{4}",
          "4",
          "1"
        ],
        "answer": "B",
        "explanation": "$4 \\diamond 4 = \\frac{4 \\times 4}{4 + 4 + 4} = \\frac{4^2}{3(4)} = \\frac{4}{3}$.",
        "trap": "Adding the constants in the denominator incorrectly.",
        "estSeconds": 85
      },
      {
        "id": "pt03_v01",
        "test": 3,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 6,
        "passage": "Plate tectonic and geochemical reconstructions of the late Cretaceous period have frequently struggled to reconcile equatorial sea surface temperature proxies with polar conditions. Traditional isotopic proxies indicated equatorial waters exceeding 35 degrees Celsius, while climate simulation models require steep thermal gradients to drive atmospheric convection without causing catastrophic planetary evaporation.\n\nRecent high-resolution geochemical re-analyses of pristine glassy foraminifera suggest that earlier isotopic calculations were confounded by diagenetic calcite recrystallization on the sea floor, which artificially shifted apparent temperatures upward. When corrected for post-depositional mineral exchange, Cretaceous equatorial temperatures were moderate, demonstrating that poleward oceanic heat transport through bathymetric gateways, rather than superheated tropics, maintained equitable polar climates.",
        "stem": "The primary purpose of the passage on cretaceous paleoclimate & thermal gradient enigma is to:",
        "options": [
          "Refute an established scientific doctrine by demonstrating that earlier measurements were entirely fraudulent.",
          "Challenge a traditional foundational model by presenting recent empirical evidence that supports an alternative paradigm.",
          "Reconcile two competing historical hypotheses by proposing a hybrid theoretical compromise.",
          "Advocate for the immediate cessation of field testing until biochemical instruments are standardized.",
          "Prove that evolutionary biological adaptations occur exclusively through physical genomic sequence alterations."
        ],
        "answer": "B",
        "explanation": "The passage outlines a traditional, long-standing theoretical assumption in its opening paragraph, then introduces modern empirical methodologies that challenge that framework and suggest a more dynamic mechanism.",
        "trap": "Selecting option A, which uses extreme, accusatory language ('entirely fraudulent') unsupported by the text.",
        "estSeconds": 100
      },
      {
        "id": "pt03_v02",
        "test": 3,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Plate tectonic and geochemical reconstructions of the late Cretaceous period have frequently struggled to reconcile equatorial sea surface temperature proxies with polar conditions. Traditional isotopic proxies indicated equatorial waters exceeding 35 degrees Celsius, while climate simulation models require steep thermal gradients to drive atmospheric convection without causing catastrophic planetary evaporation.\n\nRecent high-resolution geochemical re-analyses of pristine glassy foraminifera suggest that earlier isotopic calculations were confounded by diagenetic calcite recrystallization on the sea floor, which artificially shifted apparent temperatures upward. When corrected for post-depositional mineral exchange, Cretaceous equatorial temperatures were moderate, demonstrating that poleward oceanic heat transport through bathymetric gateways, rather than superheated tropics, maintained equitable polar climates.",
        "stem": "It can be inferred from the passage on cretaceous paleoclimate & thermal gradient enigma that proponents of the earlier model assumed that:",
        "options": [
          "Biological systems exhibit extensive behavioral plasticity when subjected to environmental shifts.",
          "Observed physical phenomena were governed primarily by static or localized equilibrium constraints.",
          "Molecular sequencing technologies would permanently confirm traditional observational hypotheses.",
          "Nutrient availability was completely uniform across all ecological micro-habitats.",
          "Adaptive modifications could be transmitted across generations without physical nucleotide changes."
        ],
        "answer": "B",
        "explanation": "The passage notes that the classical model assumed static, rigid constraints (e.g., rigid niche partitioning, exclusive nucleotide dependence, or uniform competition) before modern dynamic evidence emerged.",
        "trap": "Confusing the revisionist perspective with the traditional hypothesis being evaluated.",
        "estSeconds": 110
      },
      {
        "id": "pt03_v03",
        "test": 3,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "Plate tectonic and geochemical reconstructions of the late Cretaceous period have frequently struggled to reconcile equatorial sea surface temperature proxies with polar conditions. Traditional isotopic proxies indicated equatorial waters exceeding 35 degrees Celsius, while climate simulation models require steep thermal gradients to drive atmospheric convection without causing catastrophic planetary evaporation.\n\nRecent high-resolution geochemical re-analyses of pristine glassy foraminifera suggest that earlier isotopic calculations were confounded by diagenetic calcite recrystallization on the sea floor, which artificially shifted apparent temperatures upward. When corrected for post-depositional mineral exchange, Cretaceous equatorial temperatures were moderate, demonstrating that poleward oceanic heat transport through bathymetric gateways, rather than superheated tropics, maintained equitable polar climates.",
        "stem": "According to the second paragraph of the passage on cretaceous paleoclimate & thermal gradient enigma, the newly discovered mechanism is significant primarily because it:",
        "options": [
          "Eliminates all scientific uncertainty surrounding global atmospheric convection.",
          "Demonstrates that biological entities can adapt or function through pathways previously deemed impossible or secondary.",
          "Proves that evolutionary mutations occur at a constant mathematical rate across geological epochs.",
          "Forces commercial enterprises to halt exploratory drilling operations immediately.",
          "Refutes the universal applicability of thermodynamic physical laws."
        ],
        "answer": "B",
        "explanation": "Paragraph 2 reveals an independent or dynamic pathway (e.g. chemolithoautotrophy, epigenetic inheritance, leading-edge vortices, or mycorrhizal resource sharing) that classical science deemed impossible or minor.",
        "trap": "Selecting an overly grandiose claim that the finding overturns fundamental thermodynamic laws (option E).",
        "estSeconds": 95
      },
      {
        "id": "pt03_v04",
        "test": 3,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Plate tectonic and geochemical reconstructions of the late Cretaceous period have frequently struggled to reconcile equatorial sea surface temperature proxies with polar conditions. Traditional isotopic proxies indicated equatorial waters exceeding 35 degrees Celsius, while climate simulation models require steep thermal gradients to drive atmospheric convection without causing catastrophic planetary evaporation.\n\nRecent high-resolution geochemical re-analyses of pristine glassy foraminifera suggest that earlier isotopic calculations were confounded by diagenetic calcite recrystallization on the sea floor, which artificially shifted apparent temperatures upward. When corrected for post-depositional mineral exchange, Cretaceous equatorial temperatures were moderate, demonstrating that poleward oceanic heat transport through bathymetric gateways, rather than superheated tropics, maintained equitable polar climates.",
        "stem": "The author\u2019s attitude toward the traditional scientific framework in cretaceous paleoclimate & thermal gradient enigma can best be described as:",
        "options": [
          "Uncompromisingly hostile and dismissive of historical scholars.",
          "Respectful of its historical role while emphasizing its conceptual limitations in light of recent findings.",
          "Enthusiastically supportive of its continuing supremacy over modern data.",
          "Indifferent to its theoretical and practical consequences.",
          "Skeptical of whether any scientific paradigm can ever be empirically tested."
        ],
        "answer": "B",
        "explanation": "The author treats the historical paradigm with measured academic respect ('long held', 'classical framework') while clearly identifying its empirical limitations.",
        "trap": "Choosing an exaggerated emotional descriptor like hostile or indifferent.",
        "estSeconds": 100
      },
      {
        "id": "pt03_v05",
        "test": 3,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "Plate tectonic and geochemical reconstructions of the late Cretaceous period have frequently struggled to reconcile equatorial sea surface temperature proxies with polar conditions. Traditional isotopic proxies indicated equatorial waters exceeding 35 degrees Celsius, while climate simulation models require steep thermal gradients to drive atmospheric convection without causing catastrophic planetary evaporation.\n\nRecent high-resolution geochemical re-analyses of pristine glassy foraminifera suggest that earlier isotopic calculations were confounded by diagenetic calcite recrystallization on the sea floor, which artificially shifted apparent temperatures upward. When corrected for post-depositional mineral exchange, Cretaceous equatorial temperatures were moderate, demonstrating that poleward oceanic heat transport through bathymetric gateways, rather than superheated tropics, maintained equitable polar climates.",
        "stem": "In the analysis of Cretaceous tropical paleotemperatures, which analytical advance revealed the diagenetic calcite recrystallization artifacts in foraminiferal shells?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on cretaceous paleoclimate & thermal gradient enigma is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt03_v06",
        "test": 3,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 8,
        "passage": "Plate tectonic and geochemical reconstructions of the late Cretaceous period have frequently struggled to reconcile equatorial sea surface temperature proxies with polar conditions. Traditional isotopic proxies indicated equatorial waters exceeding 35 degrees Celsius, while climate simulation models require steep thermal gradients to drive atmospheric convection without causing catastrophic planetary evaporation.\n\nRecent high-resolution geochemical re-analyses of pristine glassy foraminifera suggest that earlier isotopic calculations were confounded by diagenetic calcite recrystallization on the sea floor, which artificially shifted apparent temperatures upward. When corrected for post-depositional mineral exchange, Cretaceous equatorial temperatures were moderate, demonstrating that poleward oceanic heat transport through bathymetric gateways, rather than superheated tropics, maintained equitable polar climates.",
        "stem": "The author of the passage would most likely concur with which statement regarding mid-Cretaceous tropical sea-surface temperatures?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on cretaceous paleoclimate & thermal gradient enigma is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt03_v07",
        "test": 3,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 9,
        "passage": "Plate tectonic and geochemical reconstructions of the late Cretaceous period have frequently struggled to reconcile equatorial sea surface temperature proxies with polar conditions. Traditional isotopic proxies indicated equatorial waters exceeding 35 degrees Celsius, while climate simulation models require steep thermal gradients to drive atmospheric convection without causing catastrophic planetary evaporation.\n\nRecent high-resolution geochemical re-analyses of pristine glassy foraminifera suggest that earlier isotopic calculations were confounded by diagenetic calcite recrystallization on the sea floor, which artificially shifted apparent temperatures upward. When corrected for post-depositional mineral exchange, Cretaceous equatorial temperatures were moderate, demonstrating that poleward oceanic heat transport through bathymetric gateways, rather than superheated tropics, maintained equitable polar climates.",
        "stem": "Which of the following best characterizes the rhetorical organization and logical progression of the passage analyzing sovereign debt capital markets?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on cretaceous paleoclimate & thermal gradient enigma is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt03_v08",
        "test": 3,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "Plate tectonic and geochemical reconstructions of the late Cretaceous period have frequently struggled to reconcile equatorial sea surface temperature proxies with polar conditions. Traditional isotopic proxies indicated equatorial waters exceeding 35 degrees Celsius, while climate simulation models require steep thermal gradients to drive atmospheric convection without causing catastrophic planetary evaporation.\n\nRecent high-resolution geochemical re-analyses of pristine glassy foraminifera suggest that earlier isotopic calculations were confounded by diagenetic calcite recrystallization on the sea floor, which artificially shifted apparent temperatures upward. When corrected for post-depositional mineral exchange, Cretaceous equatorial temperatures were moderate, demonstrating that poleward oceanic heat transport through bathymetric gateways, rather than superheated tropics, maintained equitable polar climates.",
        "stem": "In the context of the second paragraph of the passage on sovereign debt capital markets, the author's primary analytical focus centers on:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on cretaceous paleoclimate & thermal gradient enigma is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt03_v09",
        "test": 3,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Plate tectonic and geochemical reconstructions of the late Cretaceous period have frequently struggled to reconcile equatorial sea surface temperature proxies with polar conditions. Traditional isotopic proxies indicated equatorial waters exceeding 35 degrees Celsius, while climate simulation models require steep thermal gradients to drive atmospheric convection without causing catastrophic planetary evaporation.\n\nRecent high-resolution geochemical re-analyses of pristine glassy foraminifera suggest that earlier isotopic calculations were confounded by diagenetic calcite recrystallization on the sea floor, which artificially shifted apparent temperatures upward. When corrected for post-depositional mineral exchange, Cretaceous equatorial temperatures were moderate, demonstrating that poleward oceanic heat transport through bathymetric gateways, rather than superheated tropics, maintained equitable polar climates.",
        "stem": "The author introduces competing hypotheses and potential criticisms in the discussion of sovereign debt capital markets primarily in order to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on cretaceous paleoclimate & thermal gradient enigma is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt03_v10",
        "test": 3,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 9,
        "passage": "Plate tectonic and geochemical reconstructions of the late Cretaceous period have frequently struggled to reconcile equatorial sea surface temperature proxies with polar conditions. Traditional isotopic proxies indicated equatorial waters exceeding 35 degrees Celsius, while climate simulation models require steep thermal gradients to drive atmospheric convection without causing catastrophic planetary evaporation.\n\nRecent high-resolution geochemical re-analyses of pristine glassy foraminifera suggest that earlier isotopic calculations were confounded by diagenetic calcite recrystallization on the sea floor, which artificially shifted apparent temperatures upward. When corrected for post-depositional mineral exchange, Cretaceous equatorial temperatures were moderate, demonstrating that poleward oceanic heat transport through bathymetric gateways, rather than superheated tropics, maintained equitable polar climates.",
        "stem": "Based on the passage, how would paleoclimatologists evaluate anomalous isotopic temperature estimates derived from unrecrystallized mollusk aragonite?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on cretaceous paleoclimate & thermal gradient enigma is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt03_v11",
        "test": 3,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "Plate tectonic and geochemical reconstructions of the late Cretaceous period have frequently struggled to reconcile equatorial sea surface temperature proxies with polar conditions. Traditional isotopic proxies indicated equatorial waters exceeding 35 degrees Celsius, while climate simulation models require steep thermal gradients to drive atmospheric convection without causing catastrophic planetary evaporation.\n\nRecent high-resolution geochemical re-analyses of pristine glassy foraminifera suggest that earlier isotopic calculations were confounded by diagenetic calcite recrystallization on the sea floor, which artificially shifted apparent temperatures upward. When corrected for post-depositional mineral exchange, Cretaceous equatorial temperatures were moderate, demonstrating that poleward oceanic heat transport through bathymetric gateways, rather than superheated tropics, maintained equitable polar climates.",
        "stem": "The passage indicates that future scientific and operational frameworks in sovereign debt capital markets will be required to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on cretaceous paleoclimate & thermal gradient enigma is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt03_v12",
        "test": 3,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Chief Risk Strategist at QuantFund Global: \"Deploying treasury yield curve portfolio will enable our division to optimize duration spread within twelve months. Therefore, the executive steering committee must approve our funding request without delay.\"\n\nWhich of the following is an unstated assumption upon which the chief risk strategist's argument depends?",
        "options": [
          "The policy will not inadvertently trigger crop expansion acreage that cancels out the expected gains.",
          "The capital allocation required is strictly less than any expenditure approved in the prior fiscal year.",
          "No neighboring jurisdictions have considered implementing similar regulatory policies.",
          "The personnel tasked with enforcing the policy have completed postgraduate compliance degrees.",
          "Public opinion surveys indicate universal consumer enthusiasm for the initiative."
        ],
        "answer": "A",
        "explanation": "Negation test: If the policy DOES trigger crop expansion acreage that cancels out the expected gains, the goal of aquifer depletion rate will fail, collapsing the argument.",
        "trap": "Focusing on administrative trivia (degree qualifications) or budget comparisons.",
        "estSeconds": 115
      },
      {
        "id": "pt03_v13",
        "test": 3,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Operations Analyst at QuantFund Global: \"A three-month pilot deployment of treasury yield curve portfolio in region Alpha yielded a 25% improvement in duration spread. This empirical result establishes that treasury yield curve portfolio was the direct causal driver of the observed efficiency gain.\"\n\nWhich of the following, if true, most seriously undermines the analyst's causal conclusion?",
        "options": [
          "Test district Alpha simultaneously experienced a major external demographic shift that naturally produces high baseline performance.",
          "The software utilized to compile test results was upgraded three weeks prior to the pilot rollout.",
          "Several junior employees in district Alpha reported working five additional overtime hours during the pilot.",
          "The cost of the pilot study was covered by a philanthropic research grant rather than operating revenue.",
          "Competing firms in the same industry have not yet published their quarterly operational statistics."
        ],
        "answer": "A",
        "explanation": "Introducing an external confounding variable (simultaneous demographic shift) directly attacks the causal attribution made by the consultant.",
        "trap": "Pointing out that the pilot was grant-funded, which affects replication finances but not the validity of the pilot's causal data.",
        "estSeconds": 110
      },
      {
        "id": "pt03_v14",
        "test": 3,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Strategy Director at QuantFund Global: \"Allocating capital toward treasury yield curve portfolio represents the most effective strategic pathway for our firm to expand duration spread.\"\n\nWhich of the following, if true, provides the strongest corroborating evidence for the director's assertion?",
        "options": [
          "In extensive blind controlled trials across diverse industry segments, organizations adopting Drip Irrigation Incentives consistently outperformed control groups on aquifer depletion rate.",
          "The strategic planner recently completed an executive leadership certification at an accredited business school.",
          "The vendor supplying the hardware for the policy offers a 30-day money-back guarantee.",
          "Several trade journals recently featured editorial articles discussing emerging regulatory trends.",
          "The policy requires no alterations to the firm's existing corporate legal structure."
        ],
        "answer": "A",
        "explanation": "Independent controlled trials demonstrating that the policy consistently beats control groups across diverse segments provides robust causal validation.",
        "trap": "Relying on the planner's credentials (ad hominem support) rather than empirical evidence.",
        "estSeconds": 100
      },
      {
        "id": "pt03_v15",
        "test": 3,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Compliance Auditor: At QuantFund Global, any initiative involving treasury yield curve portfolio requires formal sign-off from Chief Risk Strategist. All initiatives receiving formal sign-off must undergo an environmental impact assessment unless they are classified as purely digital infrastructure. Last month, Initiative Sigma at QuantFund Global received formal sign-off but did not undergo an environmental impact assessment.\n\nIf the statements above are true, which of the following must also be true regarding Initiative Sigma?",
        "options": [
          "The first describes an impending regulatory proposal; the second introduces evidence that undermines an objection to that proposal.",
          "The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.",
          "The first is an assumption underlying the industry objection; the second is the analyst\u2019s primary thesis.",
          "The first provides empirical evidence; the second states an intermediate conclusion rejected by the author.",
          "The first introduces a claim the author accepts; the second defends a counter-argument."
        ],
        "answer": "A",
        "explanation": "Boldface 1 describes the regulatory initiative being debated. Boldface 2 presents empirical compliance cost data that directly counters the lobbyists' objection.",
        "trap": "Confusing Boldface 1 with the author's personal conclusion (which appears in the final sentence).",
        "estSeconds": 125
      },
      {
        "id": "pt03_v16",
        "test": 3,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Head Trader: To eliminate latency arbitrage in high-frequency bond trading, the brokerage recommends implementing deterministic batch auctions rather than continuous limit order books. Which of the following inquiries is most critical?",
        "options": [
          "Whether the monetary benefits realized from aquifer depletion rate exceed the ongoing compliance and operational costs associated with Drip Irrigation Incentives.",
          "Whether participating organizations display corporate logos on public transit shelters.",
          "How many years the auditor has worked in the regional auditing bureau.",
          "Whether similar policies were debated by legislative committees during the prior decade.",
          "Whether employee satisfaction surveys are conducted semi-annually or annually."
        ],
        "answer": "A",
        "explanation": "Net return on capital is defined as Net Financial Benefits minus Total Costs. Determining whether revenue gains exceed operational costs is decisive.",
        "trap": "Choosing historical trivia or auditor tenure, which do not influence the mathematical financial return.",
        "estSeconds": 110
      },
      {
        "id": "pt03_v17",
        "test": 3,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Financial Historian: Economists traditionally argued that nineteenth-century bond market integration was driven by gold standard adherence. **However, maritime trade archives demonstrate that transatlantic telegraph cables preceded currency stabilization.** Critics maintain that telegraphs merely accelerated pricing data. Yet clearinghouse logs verify that communication speed reduced default risk; **telecommunications infrastructure was the foundational prerequisite for global capital integration.** What roles do the boldface portions play?",
        "options": [
          "Rapid organic growth in commercial activity created new baseline volume that would have severely degraded performance in the absence of the subsidies.",
          "The currency in which subsidies were disbursed remained stable on international currency exchange markets.",
          "Several administrative assistants retired during the middle of the fiscal quarter.",
          "The auditing agency used computerized spreadsheets rather than handwritten paper ledgers.",
          "The subsidies were announced during a nationally televised press conference."
        ],
        "answer": "A",
        "explanation": "A powerful counteracting upward pressure (organic commercial growth) would have caused a steep deterioration; the policy succeeded in keeping metrics flat against a worsening baseline.",
        "trap": "Focusing on accounting ledger format (option D), which explains no operational dynamics.",
        "estSeconds": 105
      },
      {
        "id": "pt03_v18",
        "test": 3,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Safety Officer at QuantFund Global: Over the past three quarters, QuantFund Global equipped 90% of all treasury yield curve portfolio units with automated proximity sensors. Yet despite this safety upgrade, reported workplace minor incident rates in sovereign debt capital markets increased by 14% over the same timeframe.\n\nWhich of the following, if true, most helps to resolve the apparent discrepancy described above?",
        "options": [
          "Mistakes a necessary condition for a sufficient condition.",
          "Attacks the personal moral character of corporate executives.",
          "Relies on circular logic by defining performance as adoption of the policy.",
          "Fails to specify the exact percentage return of the market index.",
          "Assumes that corporate profitability is the sole measure of human happiness."
        ],
        "answer": "A",
        "explanation": "The premise shows that adopting the policy may be necessary to avoid failure, but that does not mean adoption is sufficient to guarantee market outperformance.",
        "trap": "Selecting option C (circular logic) when the formal flaw is affirming the consequent / confusing necessary and sufficient conditions.",
        "estSeconds": 115
      },
      {
        "id": "pt03_v19",
        "test": 3,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Fund Manager: Every institutional investor who rated our hedging service 'superior' allocated capital to our macro fund for at least four continuous quarters. Investors with shorter tenures gave lower ratings. Therefore, to raise investor ratings, we should offer fee rebates for four-quarter commitments. The manager's reasoning is flawed because it:",
        "options": [
          "Some facilities in Province 3 are NOT tier-1 manufacturing facilities.",
          "All facilities in Province 3 maintain ISO-14001 certification.",
          "No tier-1 manufacturing facility is located in Province 3.",
          "Every facility that lacks ISO-14001 certification operates uncalibrated combustion chambers.",
          "Province 3 has the highest industrial energy consumption in the nation."
        ],
        "answer": "A",
        "explanation": "There exist facilities in Province X with uncalibrated chambers. None of these can have ISO-14001 certification (by statement 2). Since all tier-1 facilities must have ISO-14001 certification, these uncertified facilities in Province X cannot be tier-1 facilities.",
        "trap": "Concluding that NO tier-1 facilities exist in Province X (option C), which oversteps the premises.",
        "estSeconds": 110
      },
      {
        "id": "pt03_v20",
        "test": 3,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Treasury Strategy Head: Our bank plans to deploy automated machine learning models to hedge interest rate basis risk in mortgage portfolios. Critics argue algorithmic trading models amplify tail losses during market stress. However, backtesting shows dynamic hedging cuts portfolio volatility by 35%. Which of the following provides the strongest support?",
        "options": [
          "Concurrently with the predator removal, the reserve experienced a massive cyclical emergence of nutrient-rich prey that provided unprecedented food abundance.",
          "Target species construct nests in deciduous trees as well as evergreen shrubs.",
          "Invasive predators were introduced to the continent by European settlers in the eighteenth century.",
          "Volunteers conducted population counts using standard 10x binoculars.",
          "Several nearby urban parks also have small populations of the same species."
        ],
        "answer": "A",
        "explanation": "The simultaneous explosion of nutrient-rich cicada prey provides an overwhelming alternative causal explanation for the surge in reproduction.",
        "trap": "Noting the historical origins of predators, which is irrelevant to current breeding dynamics.",
        "estSeconds": 115
      },
      {
        "id": "pt03_v21",
        "test": 3,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Trading Desk Head: Last quarter, our division doubled algorithmic compliance audits on trading desk Alpha, and unauthorized trading limit breaches fell by 50%. This demonstrates that doubling compliance audits should be expanded firmwide. Which of the following most seriously calls into question the head's recommendation?",
        "options": [
          "The patient case mix and medical complexity in Ward 3 are representative of clinical departments across the entire hospital system.",
          "The platform software runs on standard desktop workstations running Windows 11.",
          "Physicians in Ward 3 completed an online feedback survey regarding user satisfaction.",
          "The hospital's malpractice insurance premium is reviewed annually in November.",
          "Medical transcriptionists previously belonged to a regional healthcare labor union."
        ],
        "answer": "A",
        "explanation": "Confirming that the test clinic is representative demonstrates that the 40% error reduction will likely replicate across other hospital departments.",
        "trap": "Citing IT workstation compatibility (option B), which is convenient but does not prove clinical effectiveness.",
        "estSeconds": 100
      },
      {
        "id": "pt03_v22",
        "test": 3,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Fisheries Biologist: To protect wild Atlantic salmon runs near our coastal data center, engineers installed acoustic fish deflectors around intake cooling pumps to steer migrating smolts into bypass channels. Biologists project wild salmon survival will increase significantly. Which of the following is a necessary assumption?",
        "options": [
          "The public subway system possesses sufficient train capacity to accommodate the surge of diverted commuters without causing severe overcrowding that deters ridership.",
          "All private automobile drivers earn incomes above the national median household threshold.",
          "City parking meters generate less revenue than public transit fareboxes.",
          "Bicycle sharing programs will experience a corresponding increase in ridership.",
          "Municipal road paving projects are financed through state gasoline excise taxes."
        ],
        "answer": "A",
        "explanation": "Negation test: If the subway lacks capacity and overcrowding becomes unmanageable, drivers will not switch to transit (they may carpool, detour, or telecommute), defeating the policy.",
        "trap": "Assuming all drivers have high incomes (option B), which is not logically required.",
        "estSeconds": 120
      },
      {
        "id": "pt03_v23",
        "test": 3,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Financial Columnist: Market analysts often argue that hedge fund Alpha's record alpha generation was achieved purely through ultra-low management fee discounting. **However, competing quantitative funds that charged even lower fees experienced substantial asset outflows during the same period.** Clearly, fee discounting was not the primary driver. Rather, **fund Alpha's proprietary low-latency microwave trading infrastructure enabled execution advantages that competing funds could not duplicate.** What roles do the boldface portions play?",
        "options": [
          "The first is an established claim that the argument aims to refute; the second is an observation that supports the author\u2019s alternative conclusion.",
          "The first is the main conclusion of the argument; the second is a premise offered to defend that conclusion.",
          "The first provides empirical evidence; the second states an intermediate hypothesis rejected by the author.",
          "The first is a prediction; the second is an observation that disproves that prediction.",
          "The first introduces a hypothesis; the second proves that coal adoption never occurred."
        ],
        "answer": "A",
        "explanation": "Boldface 1 presents the conventional orthodoxy that the author sets out to undermine. Boldface 2 describes the persistent water-power cost advantage that supports the author's alternative thesis.",
        "trap": "Selecting option B which confuses the introductory conventional view with the author's own main conclusion.",
        "estSeconds": 120
      },
      {
        "id": "pt03_di01",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "In a data transmission pipeline for quantitative finance & asset valuation, if $k$ is a positive integer, is $k$ divisible by 10?\n\n(1) $k$ is divisible by 5 and $k$ is even.\n(2) $k^2$ is divisible by 100.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "D",
        "explanation": "Statement (1): Since $k$ is even (divisible by 2) and divisible by 5, and $\\text{LCM}(2, 5) = 10$, $k$ must be divisible by 10. Sufficient.\nStatement (2): If $k^2$ is divisible by 100, then for positive integer $k$, $\\sqrt{k^2} = k$ is divisible by 10. Sufficient.\nTherefore, EACH statement ALONE is sufficient.",
        "trap": "Believing statement (2) allows fractional roots when $k$ is explicitly constrained to be an integer.",
        "estSeconds": 95
      },
      {
        "id": "pt03_di02",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If $a$ and $b$ are non-zero real parameters measuring duration spread at QuantFund Global, is $\\frac{a}{b} > 1$?\n\n(1) $a > b$\n(2) $a b > 0$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "E",
        "explanation": "Statement (1): If $x = 2, y = 1$, $x/y = 2 > 1$. If $x = -1, y = -2$, $x > y$ holds but $x/y = 1/2 < 1$. Insufficient.\nStatement (2): Tells us $x$ and $y$ have the same sign, but gives no relative magnitude. Insufficient.\nTogether: If $x=2, y=1$, $x/y=2 > 1$. If $x=-1, y=-2$, $x>y$ and $xy=2>0$ hold, but $x/y=0.5 < 1$. Two contradictory answers remain possible. Statements (1) and (2) together are NOT sufficient (Answer E).",
        "trap": "Assuming $x$ and $y$ must be positive without testing negative numbers.",
        "estSeconds": 110
      },
      {
        "id": "pt03_di03",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Working at constant rates, how many hours does it take for Module A and Module B in quantitative finance & asset valuation working together to process 4000 data transactions?\n\n(1) Module A processes 1600 transactions in 2 hours.\n(2) Operating simultaneously, Module A and Module B process 2000 transactions in 2.5 hours.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "B",
        "explanation": "Statement (1) provides only the rate for Module A. Insufficient.\nStatement (2) provides the combined throughput rate directly: Rate $= \\text{Transactions} / \\text{Time}$. With the combined rate known, the time to complete the target volume is uniquely determined. Sufficient.",
        "trap": "Believing individual rates for both modules are required.",
        "estSeconds": 90
      },
      {
        "id": "pt03_di04",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sample $S$ of 5 distinct integers recorded during quantitative finance & asset valuation testing, is the mean of $S$ greater than the median of $S$?\n\n(1) The 3 smallest integers are 1, 3, and 6.\n(2) The largest integer in $S$ is 45.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "C",
        "explanation": "Statement (1): Median is 6. Upper values could be 7, 8 (mean = 5 < 6) or 7, 50 (mean > 6). Insufficient.\nStatement (2): Gives no information about median or lower values. Insufficient.\nTogether: Elements are $1, 3, 6, d, {35 + test_idx * 5}$ where $6 < d < {35 + test_idx * 5}$. Minimum sum is $1 + 3 + 6 + 7 + {35 + test_idx * 5} = {52 + test_idx * 5}$. Minimum mean is $({52 + test_idx * 5})/5 > 10 > 6$. Since the minimum possible mean is strictly greater than the median 6, the answer is always YES. Sufficient.",
        "trap": "Neglecting to calculate the minimum possible mean under the constraint $d \\ge 7$.",
        "estSeconds: 115": 115,
        "estSeconds": 115
      },
      {
        "id": "pt03_di05",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "Did QuantFund Global's division for sovereign debt capital markets generate an operating net margin of at least $\\$40,000$ on total contract billings of $\\$195,000$?\n\n(1) Total operating expenses were strictly under 65% of contract billings.\n(2) Operating margin exceeded 20% of contract billings.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "Profit = Revenue - Costs. Statement (1): If costs < 65% of revenue, profit > 35% of revenue. 35% of $\\$180,000$ is at least $\\$63,000$, which is strictly greater than $\\$40,000$. Sufficient.\nStatement (2): 20% of $\\$180,000$ is $\\$36,000$. For smaller revenues, 20% might be $\\$30,000$ or $\\$36,000$ (which could allow profit to be $\\$38,000 < \\$40,000$). Thus Statement (2) is not guaranteed sufficient across baseline tests. Statement (1) ALONE is sufficient.",
        "trap": "Assuming statement (2) guarantees clearing $\\$40,000$ without calculating the 20% threshold.",
        "estSeconds": 95
      },
      {
        "id": "pt03_di06",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "If parameter $p$ is an integer recorded during duration gap rebalancing on treasury yield curve portfolio at QuantFund Global, is $|p| = p$?\n\n(1) $p^2 = p$\n(2) $p^3 \\ge p$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "$|m| = m$ holds if and only if $m \\ge 0$.\nStatement (1): $m(m - 1) = 0 \\implies m = 0$ or $m = 1$. In both cases, $m \\ge 0$, so $|m| = m$ is definitely true. Sufficient.\nStatement (2): $m^3 - m \\ge 0 \\implies m(m-1)(m+1) \\ge 0$. Integer solutions include $m = -1$ (where $|-1| = 1 \\ne -1$, so NO) as well as $m = 0, 1, 2$ (where YES). Insufficient.\nTherefore, Statement (1) ALONE is sufficient.",
        "trap": "Overlooking $m = -1$ as a valid integer solution to $m^3 \\ge m$.",
        "estSeconds": 105
      },
      {
        "id": "pt03_di07",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Based on the sovereign debt trading table, which financial dealing desk recorded the largest operating profit in absolute dollars?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Quantitative Finance & Asset Valuation",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-3",
              51,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-3",
              70,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-3",
              42,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-3",
              85,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-3",
              60,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-3",
              54,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The median throughput among units with an Error Rate strictly under 1.0% exceeds 45 k/day. (Yes/No)",
          "Statement 2: The unit with the highest Cost Index also has the highest Error Rate. (Yes/No)",
          "Statement 3: All units with Uptime greater than 99.0% have a Cost Index below 150. (Yes/No)"
        ],
        "answer": "Yes | Yes | Yes",
        "explanation": "Statement 1: Units with error < 1.0% are Alpha, Gamma, Epsilon, Zeta. Throughputs are 45+, 38+, 54+, 48+. Median is (45+48)/2 > 45 k/day -> Yes.\nStatement 2: Unit Delta has Cost Index 180 (highest) and Error Rate 2.1% (highest) -> Yes.\nStatement 3: Units with Uptime > 99.0% are Alpha (110), Gamma (85), Epsilon (125), Zeta (115), all under 150 -> Yes.",
        "trap": "Sorting by the wrong column or taking the mean instead of the median.",
        "estSeconds": 120
      },
      {
        "id": "pt03_di08",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluate operational ranking correlations based on the quantitative finance & asset valuation table.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Quantitative Finance & Asset Valuation",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-3",
              51,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-3",
              70,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-3",
              42,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-3",
              85,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-3",
              60,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-3",
              54,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Sorting descending by Throughput yields an identical ranking as sorting descending by Cost Index. (Yes/No)",
          "Statement 2: Exactly three units have an Error Rate strictly below 0.7%. (Yes/No)",
          "Statement 3: Unit Gamma has both the lowest Throughput and the lowest Error Rate. (Yes/No)"
        ],
        "answer": "No | Yes | Yes",
        "explanation": "Statement 1: Delta is highest in both, but Beta (62, 145) vs Epsilon (54, 125) vs Alpha (45, 110) vs Zeta (48, 115) - Zeta throughput is higher than Alpha but Cost Index is 115 vs 110, order varies -> No.\nStatement 2: Units with error < 0.7% are Alpha (0.4), Gamma (0.2), Zeta (0.6) -> exactly three -> Yes.\nStatement 3: Gamma has lowest throughput (38+) and lowest error (0.2%) -> Yes.",
        "trap": "Assuming throughput and cost index correlate with 1.0 rank correlation.",
        "estSeconds": 115
      },
      {
        "id": "pt03_di09",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If the debt capital desk audit table is arranged in ascending order by Operating Margin (%), which desk sits at the median position?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Quantitative Finance & Asset Valuation",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-3",
              51,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-3",
              70,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-3",
              42,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-3",
              85,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-3",
              60,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-3",
              54,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Unit Gamma has a Cost Index per throughput unit of less than 2.5. (Yes/No)",
          "Statement 2: The range of Error Rates across all 6 units is strictly greater than 1.8 percentage points. (Yes/No)",
          "Statement 3: More than half of the units have an Uptime exceeding 99.2%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Gamma ratio = 85 / (38+) < 2.5 -> Yes.\nStatement 2: Max error = Delta (2.1%), Min error = Gamma (0.2%). Range = 2.1 - 0.2 = 1.9% > 1.8% -> Yes.\nStatement 3: Units with Uptime > 99.2% are Alpha (99.8), Gamma (99.9), Zeta (99.4) -> 3 out of 6 (wait: exactly half, so strictly more than half is No!) -> Answer: Yes | Yes | No.",
        "trap": "Confusing 'at least half' with 'strictly more than half'.",
        "estSeconds": 125
      },
      {
        "id": "pt03_di10",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Evaluate reliability and risk profiles across units in quantitative finance & asset valuation.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Quantitative Finance & Asset Valuation",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-3",
              51,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-3",
              70,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-3",
              42,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-3",
              85,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-3",
              60,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-3",
              54,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The unit with the highest Throughput also has the lowest Uptime. (Yes/No)",
          "Statement 2: Total combined throughput of the two highest units exceeds 130 k/day. (Yes/No)",
          "Statement 3: Every unit with a Cost Index greater than 120 has an Error Rate above 1.0%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Delta has highest throughput (75+) and lowest uptime (97.5%) -> Yes.\nStatement 2: Top two are Delta (75+) and Beta (62+) = 137+ > 130 -> Yes.\nStatement 3: Unit Epsilon has Cost Index 125 (>120) but Error Rate 0.8% (< 1.0%) -> No.",
        "trap": "Overlooking Unit Epsilon's low error rate despite high cost.",
        "estSeconds": 115
      },
      {
        "id": "pt03_di11",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluating the quantitative finance scatter plot of software R&D versus fund ROIC, as expenditure expands from 2% to 12%, return on investment generally [Select 1], whereas above 12%, it generally [Select 2].",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Quantitative Finance & Asset Valuation",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 24
            },
            {
              "x": 20,
              "y": 39
            },
            {
              "x": 30,
              "y": 52
            },
            {
              "x": 40,
              "y": 62
            },
            {
              "x": 50,
              "y": 69
            },
            {
              "x": 60,
              "y": 74
            }
          ]
        },
        "options": [
          "Dropdown 1: The overall relationship between Resource Investment and Productivity Output is [strongly positive | strongly negative | sinusoidal | uncorrelated].",
          "Dropdown 2: As Resource Investment increases beyond $40k, the rate of increase in Productivity Output displays [diminishing marginal returns | increasing exponential growth | negative acceleration | zero slope]."
        ],
        "answer": "strongly positive | diminishing marginal returns",
        "explanation": "Dropdown 1: As investment rises from 10 to 60, output rises consistently from 20+ to 70+ -> strongly positive.\nDropdown 2: Between 10 and 30, slope is ~1.4; between 40 and 60, slope drops to ~0.6 -> diminishing marginal returns.",
        "trap": "Confusing diminishing marginal growth with an absolute decline in output.",
        "estSeconds": 105
      },
      {
        "id": "pt03_di12",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "In the capital markets scatter plot, approximately what proportion of quantitative trading desks with R&D intensity below 6% achieved an ROIC over 20%?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Quantitative Finance & Asset Valuation",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 24
            },
            {
              "x": 20,
              "y": 39
            },
            {
              "x": 30,
              "y": 52
            },
            {
              "x": 40,
              "y": 62
            },
            {
              "x": 50,
              "y": 69
            },
            {
              "x": 60,
              "y": 74
            }
          ]
        },
        "options": [
          "Dropdown 1: The average marginal gain in output per thousand dollars invested between $10k and $30k is approximately [1.4 points/$k | 2.5 points/$k | 3.5 points/$k | 0.5 points/$k].",
          "Dropdown 2: The point with the highest output-to-investment ratio is at an investment of [$10k | $30k | $50k | $60k]."
        ],
        "answer": "1.4 points/$k | $10k",
        "explanation": "Dropdown 1: Slope = (48 - 20) / (30 - 10) = 28 / 20 = 1.4 points/$k.\nDropdown 2: Ratio y/x: At x=10, y/x = 22/10 = 2.2. At x=60, y/x = 72/60 = 1.2. The highest ratio occurs at the earliest stage ($10k).",
        "trap": "Assuming the highest absolute output point ($60k) has the highest efficiency ratio.",
        "estSeconds": 115
      },
      {
        "id": "pt03_di13",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In the quantitative trading scatter plot, the single proprietary desk identified as the greatest positive outlier is characterized by which coordinates?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Quantitative Finance & Asset Valuation",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 24
            },
            {
              "x": 20,
              "y": 39
            },
            {
              "x": 30,
              "y": 52
            },
            {
              "x": 40,
              "y": 62
            },
            {
              "x": 50,
              "y": 69
            },
            {
              "x": 60,
              "y": 74
            }
          ]
        },
        "options": [
          "Dropdown 1: The median investment level across the 6 observed data points is [$35k | $40k | $45k | $50k].",
          "Dropdown 2: A firm investing $45k would be projected by linear interpolation to produce an output index of approximately [61.5 | 68.0 | 72.5 | 55.0]."
        ],
        "answer": "$35k | 61.5",
        "explanation": "Dropdown 1: Ordered x: 10, 20, 30, 40, 50, 60. Median = (30 + 40)/2 = $35k.\nDropdown 2: Between x=40 (y~58) and x=50 (y~65), midpoint x=45 gives y = (58 + 65)/2 = 61.5.",
        "trap": "Extrapolating using the steep slope from the early segment.",
        "estSeconds": 110
      },
      {
        "id": "pt03_di14",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If an operating facility at QuantFund Global reduces its expenditure from 16% down to 10% along the regression curve for duration spread, what is the expected change in its performance index?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Quantitative Finance & Asset Valuation",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 24
            },
            {
              "x": 20,
              "y": 39
            },
            {
              "x": 30,
              "y": 52
            },
            {
              "x": 40,
              "y": 62
            },
            {
              "x": 50,
              "y": 69
            },
            {
              "x": 60,
              "y": 74
            }
          ]
        },
        "options": [
          "Dropdown 1: Increasing investment from $50k to $60k yields a percentage increase in output of approximately [7% | 15% | 25% | 35%].",
          "Dropdown 2: If fixed costs require an output index of at least 50 to break even, the minimum necessary investment is approximately [$32k | $22k | $42k | $15k]."
        ],
        "answer": "7% | $32k",
        "explanation": "Dropdown 1: At x=50, y~67. At x=60, y~72. Change = 5 / 67 ~ 7.4%.\nDropdown 2: At x=30, y~48; at x=40, y~58. Output 50 is reached just past $30k (approx $32k).",
        "trap": "Calculating percentage increase based on investment (20%) instead of output (7%).",
        "estSeconds": 115
      },
      {
        "id": "pt03_di15",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "At QuantFund Global, a capital allocation of $32 million is split between treasury yield curve portfolio (Asset X) and secondary infrastructure (Asset Y). The allocation to Asset X is exactly 3 times the allocation to Asset Y. Select the dollar allocation for Asset X and Asset Y.\n\nValues: Asset X = $24M, Asset Y = $8M.",
        "options": [
          "Grade A: 44 liters",
          "Grade B: 22 liters"
        ],
        "answer": "Grade A = 44 | Grade B = 22",
        "explanation": "Alligation: Ratio of Grade A to Grade B is $|50 - 30| : |30 - 20| = 20 : 10 = 2 : 1$. Total volume is 66 liters. Grade A $= 2/3 \\times 66 = 44$ liters, Grade B $= 1/3 \\times 66 = 22$ liters.",
        "trap": "Reversing the 2:1 ratio between Grade A and Grade B.",
        "estSeconds": 125
      },
      {
        "id": "pt03_di16",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Two parameters $U$ and $V$ in quantitative finance & asset valuation satisfy the linear system: $2U + 3V = 38$ and $U - V = 4$.\n\nSelect the value of $U$ and the value of $V$ that satisfy both equations.",
        "options": [
          "U: 10",
          "V: 6"
        ],
        "answer": "U = 10 | V = 6",
        "explanation": "Substitute $U = V + 4$: $2(V + 4) + 3V = 5V + 8 = 38 \\implies 5V = 30 \\implies V = 6$. Then $U = 6 + 4 = 10$.",
        "trap": "Sign error when expanding 2(V + 4).",
        "estSeconds: 105": 105,
        "estSeconds": 105
      },
      {
        "id": "pt03_di17",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "At QuantFund Global, Pump Alpha fills an emergency containment reservoir for duration gap rebalancing in 9 hours working alone. Working together, Pump Alpha and Pump Beta fill the reservoir in 5.4 hours. Select the time for Pump Alpha and Pump Beta working alone.",
        "options": [
          "High-Yield Debt: \\$400,000",
          "Treasury Notes: \\$600,000"
        ],
        "answer": "High-Yield = $400,000 | Treasury = $600,000",
        "explanation": "Alligation: Ratio of High-Yield to Treasury is $|3 - 5| : |8 - 5| = 2 : 3$. Fraction in High-Yield is $2/5 = 40\\% = \\$400,000$. Fraction in Treasury is $3/5 = 60\\% = \\$600,000$.",
        "trap": "Inverting the 2:3 ratio to 3:2.",
        "estSeconds": 120
      },
      {
        "id": "pt03_di18",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluating the Project Charter and Financial Audit tabs for QuantFund Global, what is the total upfront capital investment required for deploying treasury yield curve portfolio across all branch facilities?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Quantitative Finance & Asset Valuation",
              "content": "Directive 3.4 regarding Quantitative Finance & Asset Valuation:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 3:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant North only",
          "Plant North and Plant West only",
          "Plant South and Plant West only",
          "Plant North, Plant South, and Plant West",
          "None of the facilities"
        ],
        "answer": "A",
        "explanation": "Tab 1 specifies that a score of at least 90 is required for expedited licensing. Tab 2 shows only Plant North scored >= 90 (score 92). Plant West scored 88 (< 90). Thus, Plant North only qualifies.",
        "trap": "Assuming Plant West qualifies because of its 6-year history (history only grants exemption from review, not expedited licensing).",
        "estSeconds": 120
      },
      {
        "id": "pt03_di19",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Which facility at QuantFund Global is subject to mandatory operational review according to the regulatory directive for sovereign debt capital markets and the audit inspection records?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Quantitative Finance & Asset Valuation",
              "content": "Directive 3.4 regarding Quantitative Finance & Asset Valuation:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 3:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant East only",
          "Plant South and Plant East only",
          "Plant South only",
          "Plant North and Plant East only",
          "All four plants"
        ],
        "answer": "A",
        "explanation": "Plants scoring below 85 are Plant South (84) and Plant East (79). However, Tab 1 exempts facilities operating >5 years with zero violations. Plant South has operated 7 years with 0 violations (exempt). Plant East has only 2 years and has a violation, so it is the ONLY plant subject to mandatory review.",
        "trap": "Failing to check Plant South's 7-year zero-violation exemption in Tab 1.",
        "estSeconds": 130
      },
      {
        "id": "pt03_di20",
        "test": 3,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Evaluating information across all three tabs for sovereign debt capital markets, which strategic conclusion regarding the financial return of deploying treasury yield curve portfolio is most strongly supported?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Quantitative Finance & Asset Valuation",
              "content": "Directive 3.4 regarding Quantitative Finance & Asset Valuation:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 3:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "No, because it has an active safety violation recorded in the preceding 12 months.",
          "Yes, provided it files the paperwork within 14 business days.",
          "Yes, because its compliance score was within 10 points of the 85 threshold.",
          "No, because only facilities with more than 5 years operating history can file stays.",
          "Yes, because emergency stays are automatically granted to all facilities."
        ],
        "answer": "A",
        "explanation": "Tab 3 explicitly states: 'No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay.' Plant East has 1 safety violation (Tab 2), disqualifying it completely.",
        "trap": "Focusing only on the 14-day filing window without checking the violation disqualification rule.",
        "estSeconds": 115
      }
    ]
  },
  {
    "testNumber": 4,
    "id": "pt_04",
    "title": "Official Focus Mock #4 (Full 64-Q Simulation)",
    "date": "2025-02-18",
    "totalScore": 675,
    "quantScore": 81,
    "verbalScore": 80,
    "dataInsightsScore": 80,
    "structure": {
      "quantQuestions": 21,
      "verbalQuestions": 23,
      "dataInsightsQuestions": 20,
      "total": 64,
      "durationMinutes": 135
    },
    "questions": [
      {
        "id": "pt04_q01",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In agricultural agronomy & hydrology, a barcode serial integer $n$ satisfies that $n^2 - 1$ is divisible by prime $17$. If $1 < n < 17$, how many integer values can $n$ assume?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "16"
        ],
        "answer": "B",
        "explanation": "Since $n^2 - 1 = (n - 1)(n + 1)$ is divisible by prime 17, by Euclid's lemma either 17 divides $(n - 1)$ or 17 divides $(n + 1)$. Given $1 < n < 17$, $n - 1 < 17$, so 17 cannot divide $n - 1$. For 17 to divide $n + 1$, we must have $n + 1 = 17 \\implies n = 16$. Thus, exactly 1 integer value ($n = 16$) satisfies the condition.",
        "trap": "Assuming both $(n - 1)$ and $(n + 1)$ can yield solutions within the open interval $(1, p)$.",
        "estSeconds": 90
      },
      {
        "id": "pt04_q02",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "At Metropolitan Water Authority, Water Resource Engineer monitors two operational units: Primary Unit Alpha completes a full cycle of groundwater infiltration monitoring in 8 hours working alone, whereas Secondary Unit Beta requires 16 hours alone. If both units operate simultaneously at their constant rates to complete the cycle on a shared artesian reservoir recharge basin, how many hours will they take together?",
        "options": [
          "4.17",
          "4.67",
          "5.17",
          "10.50",
          "5.25"
        ],
        "answer": "B",
        "explanation": "Combined rate $R = 1/7 + 1/14 = 3/14$. Time $T = 1/R = 14/3 = 4.67$ hours.",
        "trap": "Taking the arithmetic average of the two individual times.",
        "estSeconds: 85": 85,
        "estSeconds": 85
      },
      {
        "id": "pt04_q03",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "A civil engineering contractor marks up concrete culvert acquisition costs by 40%, then provides municipal buyers a 25% trade credit reduction. What profit percentage over initial cost is realized?",
        "options": [
          "10.0%",
          "5.0%",
          "15.0%",
          "9.0%",
          "20.0%"
        ],
        "answer": "B",
        "explanation": "Multiplier $= (1 + 0.4) \\times (1 - 0.25) = 1.0500$. Net profit percentage $= (1.0500 - 1) \\times 100 = 5.0\\%$.",
        "trap": "Subtracting the percentages directly (40% - 25% = 15%).",
        "estSeconds": 90
      },
      {
        "id": "pt04_q04",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a mathematical model tracking recharge infiltration at Metropolitan Water Authority, the exponent variable $x$ satisfies $2^{2x+1} - $2^{2x-1} = 96$. What is the value of $x^2 + x$?",
        "options": [
          "40",
          "42",
          "44",
          "46",
          "48"
        ],
        "answer": "B",
        "explanation": "Factor out $3^{2x-1}$: $3^{2x-1}(3^2 - 1) = 177147(3^2 - 1)$. Equating exponents: $2x - 1 = 11 \\implies 2x = 12 \\implies x = 6$. Then $x^2 + x = 6^2 + 6 = 42$.",
        "trap": "Miscalculating the factored term $(base^2 - 1)$.",
        "estSeconds": 100
      },
      {
        "id": "pt04_q05",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Inequalities & Absolute Values",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "During a tolerance check on artesian reservoir recharge basin measurements at Metropolitan Water Authority, how many integer values of $k$ satisfy the inequality $|2k - 9| \\le 19$?",
        "options": [
          "17",
          "18",
          "19",
          "20",
          "16"
        ],
        "answer": "B",
        "explanation": "Expand absolute value: $-17 \\le 2k - 8 \\le 17 \\implies -9 \\le 2k \\le 25 \\implies -4.5 \\le k \\le 12.5$. Length of interval for integers is strictly 18.",
        "trap": "Neglecting to include both endpoints when calculating inclusive integer count.",
        "estSeconds": 95
      },
      {
        "id": "pt04_q06",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A reservoir monitoring station logs 7 distinct positive integer water inflow rates in cubic feet per second, yielding a median rate of 22 and a mean rate of 27. What is the highest possible value for the fastest inflow rate?",
        "options": [
          "131",
          "133",
          "135",
          "137",
          "139"
        ],
        "answer": "C",
        "explanation": "To maximize $x_7$, minimize elements 1, 2, 3, 5, 6. Minimum distinct positive integers: $x_1=1, x_2=2, x_3=3$. Given median $x_4 = 29$. Minimum distinct integers above median: $x_5 = 30, x_6 = 31$. Sum of all 7 integers $= 7 \\times 33 = 231$. Subtracting the 6 minimal values leaves maximum $x_7 = 135$.",
        "trap": "Allowing integers above median to equal the median rather than being strictly distinct.",
        "estSeconds": 115
      },
      {
        "id": "pt04_q07",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A municipal hydrology board of 4 inspectors is picked from 5 civil hydrologists and 5 environmental lawyers. If the board must comprise at least 2 hydrologists and at least 2 lawyers, how many selections are valid?",
        "options": [
          "90",
          "95",
          "100",
          "105",
          "110"
        ],
        "answer": "C",
        "explanation": "Ways to select 2 hardware engineers from 5: $\\binom{5}{2} = 10$. Ways to select 2 software architects from 5: $\\binom{5}{2} = 10$. Total distinct combinations $= 10 \\times 10 = 100$.",
        "trap": "Adding the combinations instead of multiplying.",
        "estSeconds": 105
      },
      {
        "id": "pt04_q08",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In hydrological streamflow simulation equations, what is the highest integer $k$ such that $3^k$ is an exact divisor of $50!$?",
        "options": [
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "answer": "C",
        "explanation": "Powers of 10 in a factorial are limited by prime factor 5. Using Legendre's formula: $\\lfloor 55/5 \\rfloor + \\lfloor 55/25 \\rfloor = 11 + 2 = 13$. Thus $k = 13$.",
        "trap": "Counting powers of 2 or stopping after first division by 5.",
        "estSeconds": 90
      },
      {
        "id": "pt04_q09",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "A hydrology field survey boat navigates upstream along a river reach of distance $D$ at 44 mph, and returns downstream at 88 mph. What is the boat's average round-trip speed?",
        "options": [
          "56.1",
          "59.0",
          "58.1",
          "54.1",
          "60.5"
        ],
        "answer": "A",
        "explanation": "Average speed over equal distances is the harmonic mean: $V = \\frac{2 s_1 s_2}{s_1 + s_2} = \\frac{2 \\times 46 \\times 72}{118} = 56.1$ mph.",
        "trap": "Choosing the arithmetic mean (option B).",
        "estSeconds": 80
      },
      {
        "id": "pt04_q10",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A groundwater filtration tank contains 60 liters of wastewater with 30% dissolved mineral salts. How many liters of fresh water are needed to dilute the tank to a 15% salt concentration?",
        "options": [
          "41",
          "43",
          "45",
          "47",
          "49"
        ],
        "answer": "C",
        "explanation": "Solvent mass is constant: $0.20 \\times 45 = 0.10 \\times (45 + w) \\implies 45 + w = 90 \\implies w = 45$ liters.",
        "trap": "Reporting total final volume rather than added water.",
        "estSeconds": 95
      },
      {
        "id": "pt04_q11",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Sequences & Series",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In an arithmetic sequence monitoring agricultural agronomy & hydrology production batches, the first term is 7 and the common difference between consecutive terms is 3. What is the sum of the first 15 terms of this sequence?",
        "options": [
          "405",
          "412",
          "420",
          "428",
          "435"
        ],
        "answer": "C",
        "explanation": "Sum formula $S_{15} = \\frac{15}{2} [2(7) + 14(3)] = 15 \\times [7 + 7(3)] = 420$.",
        "trap": "Using 15d instead of (n-1)d in the summation formula.",
        "estSeconds": 90
      },
      {
        "id": "pt04_q12",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Overlapping Sets",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Among 130 technical facilities surveyed in agricultural agronomy & hydrology, 62 have implemented Protocol A, 52 have implemented Protocol B, and 13 have implemented neither. How many facilities have implemented BOTH Protocol A and Protocol B?",
        "options": [
          "-7",
          "-5",
          "-3",
          "-1",
          "1"
        ],
        "answer": "C",
        "explanation": "Facilities with at least one protocol $= 130 - 13 = 117$. By inclusion-exclusion: $|A \\cap B| = |A| + |B| - |A \\cup B| = 62 + 52 - 117 = -3$.",
        "trap": "Subtracting neither from both sets individually.",
        "estSeconds": 85
      },
      {
        "id": "pt04_q13",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "An aquifer testing kit contains 5 red reagent tablets and 7 blue reagent tablets. If a hydrologist selects 3 tablets at random without replacement, what is the probability that exactly 2 are red?",
        "options": [
          "\\frac{18}{45}",
          "\\frac{19}{45}",
          "\\frac{20}{45}",
          "\\frac{21}{45}",
          "\\frac{22}{45}"
        ],
        "answer": "C",
        "explanation": "Ways to draw two compliant parts: $\\binom{5}{2} = 10$. Ways to draw two defective parts: $\\binom{5}{2} = 10$. Total favorable $= 20$. Total unrestricted pairs: $\\binom{10}{2} = 45$. Probability $= 20/45$.",
        "trap": "Assuming sampling with replacement.",
        "estSeconds": 100
      },
      {
        "id": "pt04_q14",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Quadratics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "An artesian aquifer infiltration equation $x^2 - 15x + K = 0$ has two integer roots whose difference is 5. What is the numerical value of $K$?",
        "options": [
          "56",
          "58",
          "60",
          "62",
          "64"
        ],
        "answer": "C",
        "explanation": "Let roots be $r_1$ and $r_2$. Sum $r_1 + r_2 = 16$, and difference $r_2 - r_1 = 4$. Solving gives roots $r_1 = 6$ and $r_2 = 10$. By Vieta's formulas, $K = r_1 \\times r_2 = 6 \\times 10 = 60$.",
        "trap": "Adding the roots rather than multiplying for the constant term $K$.",
        "estSeconds": 85
      },
      {
        "id": "pt04_q15",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In an algorithmic encryption routine for civil hydrology & aquifer management, what is the units digit of the integer evaluation $7^{59} + 3$?",
        "options": [
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": "C",
        "explanation": "Powers of 7 cycle in units digits: $7^1 \\rightarrow 7, 7^2 \\rightarrow 9, 7^3 \\rightarrow 3, 7^4 \\rightarrow 1$. Exponent $55 \\equiv 3 \\pmod 4$, so $7^{55}$ ends in 3. Adding 3 gives a units digit of $(3 + 3) \\pmod 10 = 6$.",
        "trap": "Failing to apply base-4 cyclicity to the exponent.",
        "estSeconds": 80
      },
      {
        "id": "pt04_q16",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Coordinate & Analytical Geometry",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In a Cartesian telemetry grid mapping artesian reservoir recharge basin coordinates for Metropolitan Water Authority, line $L_1$ passes through $(0, 9)$ and $(7, 0)$. If perpendicular line $L_2$ intersects the origin $(0, 0)$, what is the slope of line $L_2$?",
        "options": [
          "\\frac{6}{8}",
          "-\\frac{6}{8}",
          "\\frac{8}{6}",
          "-\\frac{8}{6}",
          "1"
        ],
        "answer": "A",
        "explanation": "Slope of $L_1$ is $m_1 = \\frac{0 - 8}{6 - 0} = -\\frac{8}{6}$. Perpendicular slope $m_2 = -1/m_1 = \\frac{6}{8}$.",
        "trap": "Inverting without negating (option B or C).",
        "estSeconds: 75": 75,
        "estSeconds": 75
      },
      {
        "id": "pt04_q17",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sensor calibration test in agricultural agronomy & hydrology, the standard deviation of pressure readings was 4.0 psi. If each reading is multiplied by 1.25 and then decreased by 3.5 psi, what is the standard deviation of the transformed readings in psi?",
        "options": [
          "1.50",
          "5.00",
          "4.00",
          "8.50",
          "6.00"
        ],
        "answer": "B",
        "explanation": "Standard deviation is unaffected by the subtraction of a constant (-3.5), but scales by $|1.25|$: $\\sigma_{new} = 1.25 \\times 4.0 = 5.00$ psi.",
        "trap": "Subtracting 3.5 from the standard deviation (option A).",
        "estSeconds": 70
      },
      {
        "id": "pt04_q18",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In civil hydrology & aquifer management, replacement parts for artesian reservoir recharge basin at Metropolitan Water Authority are packaged strictly in quantities of 4 or 7 units. What is the greatest integer number of units that cannot be assembled using non-negative combinations of these packages?",
        "options": [
          "25",
          "26",
          "27",
          "28",
          "29"
        ],
        "answer": "C",
        "explanation": "By the Frobenius Coin Formula for coprime integers $a$ and $b$, the largest non-constructible integer is $ab - a - b = (5)(8) - 5 - 8 = 27$.",
        "trap": "Computing ab directly without subtracting (a + b).",
        "estSeconds": 110
      },
      {
        "id": "pt04_q19",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "When the digits of a two-digit aquifer monitoring code $N$ are reversed, the resulting number is 27 greater than $N$. What is the difference between the units digit and the tens digit of $N$?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": "C",
        "explanation": "$(10B + A) - (10A + B) = 9(B - A) = 18 \\implies B - A = 2$.",
        "trap": "Confusing (B - A) with (A - B).",
        "estSeconds": 75
      },
      {
        "id": "pt04_q20",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A capital expenditure allocation of $\\$7,000$ in agricultural agronomy & hydrology appreciates at an annual rate of 10% compounded semi-annually. What is the total accumulated interest after 1 year?",
        "options": [
          "\\$700",
          "\\$718",
          "\\$735",
          "\\$770",
          "\\$788"
        ],
        "answer": "B",
        "explanation": "Semi-annual rate is 5% over 2 periods. Multiplier is $(1.05)^2 = 1.1025$. Interest $= 7000 \\times 0.1025 = \\$718$.",
        "trap": "Calculating simple interest at 10% (option A).",
        "estSeconds": 90
      },
      {
        "id": "pt04_q21",
        "test": 4,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "For all positive real numbers $u$ and $v$ modeling recharge infiltration at Metropolitan Water Authority, an operational operator $\\star$ is defined by $u \\star v = \\frac{u^2 - v^2}{u - v}$. What is the numerical value of $10 \\star 3$?",
        "options": [
          "\\frac{5}{2}",
          "\\frac{5}{3}",
          "\\frac{5}{4}",
          "5",
          "1"
        ],
        "answer": "B",
        "explanation": "$5 \\diamond 5 = \\frac{5 \\times 5}{5 + 5 + 5} = \\frac{5^2}{3(5)} = \\frac{5}{3}$.",
        "trap": "Adding the constants in the denominator incorrectly.",
        "estSeconds": 85
      },
      {
        "id": "pt04_v01",
        "test": 4,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 6,
        "passage": "The classical forestry model long treated individual canopy trees as autonomous competitors competing for limited soil minerals and sunlight. Under this individualistic resource-competition framework, silviculturists assumed that dense forest stands inevitably experienced competitive thinning as dominant individuals suppressed neighbors.\n\nSubsequent isotopic tracing experiments utilizing carbon-13 and carbon-14 have overturned this atomized conception by uncovering extensive mycorrhizal fungal networks linking root systems across entire forest communities. Mature 'mother trees' dynamically shuttle carbohydrates and nitrogen through fungal hyphae to shade-suppressed understory seedlings, actively maintaining multi-species diversity and buffering the collective grove against localized pathogen outbreaks.",
        "stem": "The primary purpose of the passage on mycorrhizal fungal networks & forest nutrient allocation is to:",
        "options": [
          "Refute an established scientific doctrine by demonstrating that earlier measurements were entirely fraudulent.",
          "Challenge a traditional foundational model by presenting recent empirical evidence that supports an alternative paradigm.",
          "Reconcile two competing historical hypotheses by proposing a hybrid theoretical compromise.",
          "Advocate for the immediate cessation of field testing until biochemical instruments are standardized.",
          "Prove that evolutionary biological adaptations occur exclusively through physical genomic sequence alterations."
        ],
        "answer": "B",
        "explanation": "The passage outlines a traditional, long-standing theoretical assumption in its opening paragraph, then introduces modern empirical methodologies that challenge that framework and suggest a more dynamic mechanism.",
        "trap": "Selecting option A, which uses extreme, accusatory language ('entirely fraudulent') unsupported by the text.",
        "estSeconds": 100
      },
      {
        "id": "pt04_v02",
        "test": 4,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "The classical forestry model long treated individual canopy trees as autonomous competitors competing for limited soil minerals and sunlight. Under this individualistic resource-competition framework, silviculturists assumed that dense forest stands inevitably experienced competitive thinning as dominant individuals suppressed neighbors.\n\nSubsequent isotopic tracing experiments utilizing carbon-13 and carbon-14 have overturned this atomized conception by uncovering extensive mycorrhizal fungal networks linking root systems across entire forest communities. Mature 'mother trees' dynamically shuttle carbohydrates and nitrogen through fungal hyphae to shade-suppressed understory seedlings, actively maintaining multi-species diversity and buffering the collective grove against localized pathogen outbreaks.",
        "stem": "It can be inferred from the passage on mycorrhizal fungal networks & forest nutrient allocation that proponents of the earlier model assumed that:",
        "options": [
          "Biological systems exhibit extensive behavioral plasticity when subjected to environmental shifts.",
          "Observed physical phenomena were governed primarily by static or localized equilibrium constraints.",
          "Molecular sequencing technologies would permanently confirm traditional observational hypotheses.",
          "Nutrient availability was completely uniform across all ecological micro-habitats.",
          "Adaptive modifications could be transmitted across generations without physical nucleotide changes."
        ],
        "answer": "B",
        "explanation": "The passage notes that the classical model assumed static, rigid constraints (e.g., rigid niche partitioning, exclusive nucleotide dependence, or uniform competition) before modern dynamic evidence emerged.",
        "trap": "Confusing the revisionist perspective with the traditional hypothesis being evaluated.",
        "estSeconds": 110
      },
      {
        "id": "pt04_v03",
        "test": 4,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "The classical forestry model long treated individual canopy trees as autonomous competitors competing for limited soil minerals and sunlight. Under this individualistic resource-competition framework, silviculturists assumed that dense forest stands inevitably experienced competitive thinning as dominant individuals suppressed neighbors.\n\nSubsequent isotopic tracing experiments utilizing carbon-13 and carbon-14 have overturned this atomized conception by uncovering extensive mycorrhizal fungal networks linking root systems across entire forest communities. Mature 'mother trees' dynamically shuttle carbohydrates and nitrogen through fungal hyphae to shade-suppressed understory seedlings, actively maintaining multi-species diversity and buffering the collective grove against localized pathogen outbreaks.",
        "stem": "According to the second paragraph of the passage on mycorrhizal fungal networks & forest nutrient allocation, the newly discovered mechanism is significant primarily because it:",
        "options": [
          "Eliminates all scientific uncertainty surrounding global atmospheric convection.",
          "Demonstrates that biological entities can adapt or function through pathways previously deemed impossible or secondary.",
          "Proves that evolutionary mutations occur at a constant mathematical rate across geological epochs.",
          "Forces commercial enterprises to halt exploratory drilling operations immediately.",
          "Refutes the universal applicability of thermodynamic physical laws."
        ],
        "answer": "B",
        "explanation": "Paragraph 2 reveals an independent or dynamic pathway (e.g. chemolithoautotrophy, epigenetic inheritance, leading-edge vortices, or mycorrhizal resource sharing) that classical science deemed impossible or minor.",
        "trap": "Selecting an overly grandiose claim that the finding overturns fundamental thermodynamic laws (option E).",
        "estSeconds": 95
      },
      {
        "id": "pt04_v04",
        "test": 4,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "The classical forestry model long treated individual canopy trees as autonomous competitors competing for limited soil minerals and sunlight. Under this individualistic resource-competition framework, silviculturists assumed that dense forest stands inevitably experienced competitive thinning as dominant individuals suppressed neighbors.\n\nSubsequent isotopic tracing experiments utilizing carbon-13 and carbon-14 have overturned this atomized conception by uncovering extensive mycorrhizal fungal networks linking root systems across entire forest communities. Mature 'mother trees' dynamically shuttle carbohydrates and nitrogen through fungal hyphae to shade-suppressed understory seedlings, actively maintaining multi-species diversity and buffering the collective grove against localized pathogen outbreaks.",
        "stem": "The author\u2019s attitude toward the traditional scientific framework in mycorrhizal fungal networks & forest nutrient allocation can best be described as:",
        "options": [
          "Uncompromisingly hostile and dismissive of historical scholars.",
          "Respectful of its historical role while emphasizing its conceptual limitations in light of recent findings.",
          "Enthusiastically supportive of its continuing supremacy over modern data.",
          "Indifferent to its theoretical and practical consequences.",
          "Skeptical of whether any scientific paradigm can ever be empirically tested."
        ],
        "answer": "B",
        "explanation": "The author treats the historical paradigm with measured academic respect ('long held', 'classical framework') while clearly identifying its empirical limitations.",
        "trap": "Choosing an exaggerated emotional descriptor like hostile or indifferent.",
        "estSeconds": 100
      },
      {
        "id": "pt04_v05",
        "test": 4,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "The classical forestry model long treated individual canopy trees as autonomous competitors competing for limited soil minerals and sunlight. Under this individualistic resource-competition framework, silviculturists assumed that dense forest stands inevitably experienced competitive thinning as dominant individuals suppressed neighbors.\n\nSubsequent isotopic tracing experiments utilizing carbon-13 and carbon-14 have overturned this atomized conception by uncovering extensive mycorrhizal fungal networks linking root systems across entire forest communities. Mature 'mother trees' dynamically shuttle carbohydrates and nitrogen through fungal hyphae to shade-suppressed understory seedlings, actively maintaining multi-species diversity and buffering the collective grove against localized pathogen outbreaks.",
        "stem": "According to the text examining mycorrhizal networks, which isotope tracing procedure demonstrated that fungal hyphae sequester rather than passively transfer arboreal sugars?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on mycorrhizal fungal networks & forest nutrient allocation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt04_v06",
        "test": 4,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 8,
        "passage": "The classical forestry model long treated individual canopy trees as autonomous competitors competing for limited soil minerals and sunlight. Under this individualistic resource-competition framework, silviculturists assumed that dense forest stands inevitably experienced competitive thinning as dominant individuals suppressed neighbors.\n\nSubsequent isotopic tracing experiments utilizing carbon-13 and carbon-14 have overturned this atomized conception by uncovering extensive mycorrhizal fungal networks linking root systems across entire forest communities. Mature 'mother trees' dynamically shuttle carbohydrates and nitrogen through fungal hyphae to shade-suppressed understory seedlings, actively maintaining multi-species diversity and buffering the collective grove against localized pathogen outbreaks.",
        "stem": "With which of the following characterizations of inter-plant fungal trade would the author of the passage most strongly agree?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on mycorrhizal fungal networks & forest nutrient allocation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt04_v07",
        "test": 4,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 9,
        "passage": "The classical forestry model long treated individual canopy trees as autonomous competitors competing for limited soil minerals and sunlight. Under this individualistic resource-competition framework, silviculturists assumed that dense forest stands inevitably experienced competitive thinning as dominant individuals suppressed neighbors.\n\nSubsequent isotopic tracing experiments utilizing carbon-13 and carbon-14 have overturned this atomized conception by uncovering extensive mycorrhizal fungal networks linking root systems across entire forest communities. Mature 'mother trees' dynamically shuttle carbohydrates and nitrogen through fungal hyphae to shade-suppressed understory seedlings, actively maintaining multi-species diversity and buffering the collective grove against localized pathogen outbreaks.",
        "stem": "Which of the following best characterizes the rhetorical organization and logical progression of the passage analyzing civil hydrology & aquifer management?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on mycorrhizal fungal networks & forest nutrient allocation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt04_v08",
        "test": 4,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "The classical forestry model long treated individual canopy trees as autonomous competitors competing for limited soil minerals and sunlight. Under this individualistic resource-competition framework, silviculturists assumed that dense forest stands inevitably experienced competitive thinning as dominant individuals suppressed neighbors.\n\nSubsequent isotopic tracing experiments utilizing carbon-13 and carbon-14 have overturned this atomized conception by uncovering extensive mycorrhizal fungal networks linking root systems across entire forest communities. Mature 'mother trees' dynamically shuttle carbohydrates and nitrogen through fungal hyphae to shade-suppressed understory seedlings, actively maintaining multi-species diversity and buffering the collective grove against localized pathogen outbreaks.",
        "stem": "In the context of the second paragraph of the passage on civil hydrology & aquifer management, the author's primary analytical focus centers on:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on mycorrhizal fungal networks & forest nutrient allocation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt04_v09",
        "test": 4,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "The classical forestry model long treated individual canopy trees as autonomous competitors competing for limited soil minerals and sunlight. Under this individualistic resource-competition framework, silviculturists assumed that dense forest stands inevitably experienced competitive thinning as dominant individuals suppressed neighbors.\n\nSubsequent isotopic tracing experiments utilizing carbon-13 and carbon-14 have overturned this atomized conception by uncovering extensive mycorrhizal fungal networks linking root systems across entire forest communities. Mature 'mother trees' dynamically shuttle carbohydrates and nitrogen through fungal hyphae to shade-suppressed understory seedlings, actively maintaining multi-species diversity and buffering the collective grove against localized pathogen outbreaks.",
        "stem": "The author introduces competing hypotheses and potential criticisms in the discussion of civil hydrology & aquifer management primarily in order to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on mycorrhizal fungal networks & forest nutrient allocation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt04_v10",
        "test": 4,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 9,
        "passage": "The classical forestry model long treated individual canopy trees as autonomous competitors competing for limited soil minerals and sunlight. Under this individualistic resource-competition framework, silviculturists assumed that dense forest stands inevitably experienced competitive thinning as dominant individuals suppressed neighbors.\n\nSubsequent isotopic tracing experiments utilizing carbon-13 and carbon-14 have overturned this atomized conception by uncovering extensive mycorrhizal fungal networks linking root systems across entire forest communities. Mature 'mother trees' dynamically shuttle carbohydrates and nitrogen through fungal hyphae to shade-suppressed understory seedlings, actively maintaining multi-species diversity and buffering the collective grove against localized pathogen outbreaks.",
        "stem": "Based on the author's mycorrhizal trade model, how would forest ecologists interpret increased carbon allocation from fungi to root tips during severe nitrogen scarcity?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on mycorrhizal fungal networks & forest nutrient allocation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt04_v11",
        "test": 4,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "The classical forestry model long treated individual canopy trees as autonomous competitors competing for limited soil minerals and sunlight. Under this individualistic resource-competition framework, silviculturists assumed that dense forest stands inevitably experienced competitive thinning as dominant individuals suppressed neighbors.\n\nSubsequent isotopic tracing experiments utilizing carbon-13 and carbon-14 have overturned this atomized conception by uncovering extensive mycorrhizal fungal networks linking root systems across entire forest communities. Mature 'mother trees' dynamically shuttle carbohydrates and nitrogen through fungal hyphae to shade-suppressed understory seedlings, actively maintaining multi-species diversity and buffering the collective grove against localized pathogen outbreaks.",
        "stem": "The passage indicates that future scientific and operational frameworks in civil hydrology & aquifer management will be required to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on mycorrhizal fungal networks & forest nutrient allocation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt04_v12",
        "test": 4,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Water Resource Engineer at Metropolitan Water Authority: \"Deploying artesian reservoir recharge basin will enable our division to optimize recharge infiltration within twelve months. Therefore, the executive steering committee must approve our funding request without delay.\"\n\nWhich of the following is an unstated assumption upon which the water resource engineer's argument depends?",
        "options": [
          "The policy will not inadvertently trigger untested late-stage toxicity that cancels out the expected gains.",
          "The capital allocation required is strictly less than any expenditure approved in the prior fiscal year.",
          "No neighboring jurisdictions have considered implementing similar regulatory policies.",
          "The personnel tasked with enforcing the policy have completed postgraduate compliance degrees.",
          "Public opinion surveys indicate universal consumer enthusiasm for the initiative."
        ],
        "answer": "A",
        "explanation": "Negation test: If the policy DOES trigger untested late-stage toxicity that cancels out the expected gains, the goal of breakthrough drug availability will fail, collapsing the argument.",
        "trap": "Focusing on administrative trivia (degree qualifications) or budget comparisons.",
        "estSeconds": 115
      },
      {
        "id": "pt04_v13",
        "test": 4,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Operations Analyst at Metropolitan Water Authority: \"A three-month pilot deployment of artesian reservoir recharge basin in region Alpha yielded a 25% improvement in recharge infiltration. This empirical result establishes that artesian reservoir recharge basin was the direct causal driver of the observed efficiency gain.\"\n\nWhich of the following, if true, most seriously undermines the analyst's causal conclusion?",
        "options": [
          "Test district Alpha simultaneously experienced a major external demographic shift that naturally produces high baseline performance.",
          "The software utilized to compile test results was upgraded three weeks prior to the pilot rollout.",
          "Several junior employees in district Alpha reported working five additional overtime hours during the pilot.",
          "The cost of the pilot study was covered by a philanthropic research grant rather than operating revenue.",
          "Competing firms in the same industry have not yet published their quarterly operational statistics."
        ],
        "answer": "A",
        "explanation": "Introducing an external confounding variable (simultaneous demographic shift) directly attacks the causal attribution made by the consultant.",
        "trap": "Pointing out that the pilot was grant-funded, which affects replication finances but not the validity of the pilot's causal data.",
        "estSeconds": 110
      },
      {
        "id": "pt04_v14",
        "test": 4,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Strategy Director at Metropolitan Water Authority: \"Allocating capital toward artesian reservoir recharge basin represents the most effective strategic pathway for our firm to expand recharge infiltration.\"\n\nWhich of the following, if true, provides the strongest corroborating evidence for the director's assertion?",
        "options": [
          "In extensive blind controlled trials across diverse industry segments, organizations adopting Accelerated Approval Pathways consistently outperformed control groups on breakthrough drug availability.",
          "The strategic planner recently completed an executive leadership certification at an accredited business school.",
          "The vendor supplying the hardware for the policy offers a 30-day money-back guarantee.",
          "Several trade journals recently featured editorial articles discussing emerging regulatory trends.",
          "The policy requires no alterations to the firm's existing corporate legal structure."
        ],
        "answer": "A",
        "explanation": "Independent controlled trials demonstrating that the policy consistently beats control groups across diverse segments provides robust causal validation.",
        "trap": "Relying on the planner's credentials (ad hominem support) rather than empirical evidence.",
        "estSeconds": 100
      },
      {
        "id": "pt04_v15",
        "test": 4,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Compliance Auditor: At Metropolitan Water Authority, any initiative involving artesian reservoir recharge basin requires formal sign-off from Water Resource Engineer. All initiatives receiving formal sign-off must undergo an environmental impact assessment unless they are classified as purely digital infrastructure. Last month, Initiative Sigma at Metropolitan Water Authority received formal sign-off but did not undergo an environmental impact assessment.\n\nIf the statements above are true, which of the following must also be true regarding Initiative Sigma?",
        "options": [
          "The first describes an impending regulatory proposal; the second introduces evidence that undermines an objection to that proposal.",
          "The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.",
          "The first is an assumption underlying the industry objection; the second is the analyst\u2019s primary thesis.",
          "The first provides empirical evidence; the second states an intermediate conclusion rejected by the author.",
          "The first introduces a claim the author accepts; the second defends a counter-argument."
        ],
        "answer": "A",
        "explanation": "Boldface 1 describes the regulatory initiative being debated. Boldface 2 presents empirical compliance cost data that directly counters the lobbyists' objection.",
        "trap": "Confusing Boldface 1 with the author's personal conclusion (which appears in the final sentence).",
        "estSeconds": 125
      },
      {
        "id": "pt04_v16",
        "test": 4,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Municipal Water Supervisor: To prevent artesian well contamination, the water board proposes encasing well casings in pressurized bentonite slurry. Which of the following is most essential to establish in assessing the plan?",
        "options": [
          "Whether the monetary benefits realized from breakthrough drug availability exceed the ongoing compliance and operational costs associated with Accelerated Approval Pathways.",
          "Whether participating organizations display corporate logos on public transit shelters.",
          "How many years the auditor has worked in the regional auditing bureau.",
          "Whether similar policies were debated by legislative committees during the prior decade.",
          "Whether employee satisfaction surveys are conducted semi-annually or annually."
        ],
        "answer": "A",
        "explanation": "Net return on capital is defined as Net Financial Benefits minus Total Costs. Determining whether revenue gains exceed operational costs is decisive.",
        "trap": "Choosing historical trivia or auditor tenure, which do not influence the mathematical financial return.",
        "estSeconds": 110
      },
      {
        "id": "pt04_v17",
        "test": 4,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Environmental Historian: Early ecologists claimed that arid basin water depletion was caused exclusively by industrial livestock grazing. **Archival irrigation records show that deep artesian well pumping expanded agricultural water consumption by 300%.** Ranching lobbyists blame seasonal droughts. Yet hydrological models confirm that groundwater extraction far exceeded natural recharge; **deep well irrigation was the primary demographic driver of aquifer exhaustion.** What roles do the boldface portions play?",
        "options": [
          "Rapid organic growth in commercial activity created new baseline volume that would have severely degraded performance in the absence of the subsidies.",
          "The currency in which subsidies were disbursed remained stable on international currency exchange markets.",
          "Several administrative assistants retired during the middle of the fiscal quarter.",
          "The auditing agency used computerized spreadsheets rather than handwritten paper ledgers.",
          "The subsidies were announced during a nationally televised press conference."
        ],
        "answer": "A",
        "explanation": "A powerful counteracting upward pressure (organic commercial growth) would have caused a steep deterioration; the policy succeeded in keeping metrics flat against a worsening baseline.",
        "trap": "Focusing on accounting ledger format (option D), which explains no operational dynamics.",
        "estSeconds": 105
      },
      {
        "id": "pt04_v18",
        "test": 4,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Safety Officer at Metropolitan Water Authority: Over the past three quarters, Metropolitan Water Authority equipped 90% of all artesian reservoir recharge basin units with automated proximity sensors. Yet despite this safety upgrade, reported workplace minor incident rates in civil hydrology & aquifer management increased by 14% over the same timeframe.\n\nWhich of the following, if true, most helps to resolve the apparent discrepancy described above?",
        "options": [
          "Mistakes a necessary condition for a sufficient condition.",
          "Attacks the personal moral character of corporate executives.",
          "Relies on circular logic by defining performance as adoption of the policy.",
          "Fails to specify the exact percentage return of the market index.",
          "Assumes that corporate profitability is the sole measure of human happiness."
        ],
        "answer": "A",
        "explanation": "The premise shows that adopting the policy may be necessary to avoid failure, but that does not mean adoption is sufficient to guarantee market outperformance.",
        "trap": "Selecting option C (circular logic) when the formal flaw is affirming the consequent / confusing necessary and sufficient conditions.",
        "estSeconds": 115
      },
      {
        "id": "pt04_v19",
        "test": 4,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Water Utility Manager: Every municipality that rated our reservoir services 'excellent' utilized our digital monitoring tools at least three times per month. Municipalities with fewer logins gave lower ratings. Therefore, to improve customer satisfaction, we should require three logins monthly. The manager's argument is vulnerable because it:",
        "options": [
          "Some facilities in Province 4 are NOT tier-1 manufacturing facilities.",
          "All facilities in Province 4 maintain ISO-14001 certification.",
          "No tier-1 manufacturing facility is located in Province 4.",
          "Every facility that lacks ISO-14001 certification operates uncalibrated combustion chambers.",
          "Province 4 has the highest industrial energy consumption in the nation."
        ],
        "answer": "A",
        "explanation": "There exist facilities in Province X with uncalibrated chambers. None of these can have ISO-14001 certification (by statement 2). Since all tier-1 facilities must have ISO-14001 certification, these uncertified facilities in Province X cannot be tier-1 facilities.",
        "trap": "Concluding that NO tier-1 facilities exist in Province X (option C), which oversteps the premises.",
        "estSeconds": 110
      },
      {
        "id": "pt04_v20",
        "test": 4,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Civil Drainage Engineer: The municipal board plans to construct permeable asphalt roadways to reduce urban storm runoff into artesian aquifers. Critics argue winter frost heave damages porous asphalt. However, synthetic polymer additives increase asphalt compressive strength by 40%. Which of the following provides the strongest support for the plan?",
        "options": [
          "Concurrently with the predator removal, the reserve experienced a massive cyclical emergence of nutrient-rich prey that provided unprecedented food abundance.",
          "Target species construct nests in deciduous trees as well as evergreen shrubs.",
          "Invasive predators were introduced to the continent by European settlers in the eighteenth century.",
          "Volunteers conducted population counts using standard 10x binoculars.",
          "Several nearby urban parks also have small populations of the same species."
        ],
        "answer": "A",
        "explanation": "The simultaneous explosion of nutrient-rich cicada prey provides an overwhelming alternative causal explanation for the surge in reproduction.",
        "trap": "Noting the historical origins of predators, which is irrelevant to current breeding dynamics.",
        "estSeconds": 115
      },
      {
        "id": "pt04_v21",
        "test": 4,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Water District Chief: Last quarter, our patrol doubled flow meter inspections on irrigation canals in district Alpha, and reported water thefts declined by 40%. This proves that doubling meter inspections should be enacted across all water districts. Which of the following most seriously undermines the chief's conclusion?",
        "options": [
          "The patient case mix and medical complexity in Ward 4 are representative of clinical departments across the entire hospital system.",
          "The platform software runs on standard desktop workstations running Windows 11.",
          "Physicians in Ward 4 completed an online feedback survey regarding user satisfaction.",
          "The hospital's malpractice insurance premium is reviewed annually in November.",
          "Medical transcriptionists previously belonged to a regional healthcare labor union."
        ],
        "answer": "A",
        "explanation": "Confirming that the test clinic is representative demonstrates that the 40% error reduction will likely replicate across other hospital departments.",
        "trap": "Citing IT workstation compatibility (option B), which is convenient but does not prove clinical effectiveness.",
        "estSeconds": 100
      },
      {
        "id": "pt04_v22",
        "test": 4,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "River Basin Hydrologist: To protect endangered river turtles in basin Alpha, rangers constructed wire mesh screens over sandbank nesting sites to deter predatory raccoons. Conservationists project the juvenile turtle population will expand. Which of the following is an assumption required by the projection?",
        "options": [
          "The public subway system possesses sufficient train capacity to accommodate the surge of diverted commuters without causing severe overcrowding that deters ridership.",
          "All private automobile drivers earn incomes above the national median household threshold.",
          "City parking meters generate less revenue than public transit fareboxes.",
          "Bicycle sharing programs will experience a corresponding increase in ridership.",
          "Municipal road paving projects are financed through state gasoline excise taxes."
        ],
        "answer": "A",
        "explanation": "Negation test: If the subway lacks capacity and overcrowding becomes unmanageable, drivers will not switch to transit (they may carpool, detour, or telecommute), defeating the policy.",
        "trap": "Assuming all drivers have high incomes (option B), which is not logically required.",
        "estSeconds": 120
      },
      {
        "id": "pt04_v23",
        "test": 4,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Hydrology Analyst: Critics frequently charge that metropolitan water district Alpha achieved water conservation targets solely by doubling residential water tariffs. **However, neighboring municipal districts that enacted identical tariff increases saw residential consumption remain unchanged.** Clearly, pricing tariffs were not the primary cause. Rather, **district Alpha's smart acoustic leak detection sensors and automated pressure-reducing valves eliminated distribution pipe losses that other districts ignored.** What roles do the boldface portions play?",
        "options": [
          "The first is an established claim that the argument aims to refute; the second is an observation that supports the author\u2019s alternative conclusion.",
          "The first is the main conclusion of the argument; the second is a premise offered to defend that conclusion.",
          "The first provides empirical evidence; the second states an intermediate hypothesis rejected by the author.",
          "The first is a prediction; the second is an observation that disproves that prediction.",
          "The first introduces a hypothesis; the second proves that coal adoption never occurred."
        ],
        "answer": "A",
        "explanation": "Boldface 1 presents the conventional orthodoxy that the author sets out to undermine. Boldface 2 describes the persistent water-power cost advantage that supports the author's alternative thesis.",
        "trap": "Selecting option B which confuses the introductory conventional view with the author's own main conclusion.",
        "estSeconds": 120
      },
      {
        "id": "pt04_di01",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "In a data transmission pipeline for agricultural agronomy & hydrology, if $k$ is a positive integer, is $k$ divisible by 12?\n\n(1) $k$ is divisible by 6 and $k$ is even.\n(2) $k^2$ is divisible by 144.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "D",
        "explanation": "Statement (1): Since $k$ is even (divisible by 2) and divisible by 6, and $\\text{LCM}(2, 6) = 12$, $k$ must be divisible by 12. Sufficient.\nStatement (2): If $k^2$ is divisible by 144, then for positive integer $k$, $\\sqrt{k^2} = k$ is divisible by 12. Sufficient.\nTherefore, EACH statement ALONE is sufficient.",
        "trap": "Believing statement (2) allows fractional roots when $k$ is explicitly constrained to be an integer.",
        "estSeconds": 95
      },
      {
        "id": "pt04_di02",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If $a$ and $b$ are non-zero real parameters measuring recharge infiltration at Metropolitan Water Authority, is $\\frac{a}{b} > 1$?\n\n(1) $a > b$\n(2) $a b > 0$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "E",
        "explanation": "Statement (1): If $x = 2, y = 1$, $x/y = 2 > 1$. If $x = -1, y = -2$, $x > y$ holds but $x/y = 1/2 < 1$. Insufficient.\nStatement (2): Tells us $x$ and $y$ have the same sign, but gives no relative magnitude. Insufficient.\nTogether: If $x=2, y=1$, $x/y=2 > 1$. If $x=-1, y=-2$, $x>y$ and $xy=2>0$ hold, but $x/y=0.5 < 1$. Two contradictory answers remain possible. Statements (1) and (2) together are NOT sufficient (Answer E).",
        "trap": "Assuming $x$ and $y$ must be positive without testing negative numbers.",
        "estSeconds": 110
      },
      {
        "id": "pt04_di03",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Working at constant rates, how many hours does it take for Module A and Module B in agricultural agronomy & hydrology working together to process 4500 data transactions?\n\n(1) Module A processes 1800 transactions in 2 hours.\n(2) Operating simultaneously, Module A and Module B process 2250 transactions in 2.5 hours.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "B",
        "explanation": "Statement (1) provides only the rate for Module A. Insufficient.\nStatement (2) provides the combined throughput rate directly: Rate $= \\text{Transactions} / \\text{Time}$. With the combined rate known, the time to complete the target volume is uniquely determined. Sufficient.",
        "trap": "Believing individual rates for both modules are required.",
        "estSeconds": 90
      },
      {
        "id": "pt04_di04",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sample $S$ of 5 distinct integers recorded during agricultural agronomy & hydrology testing, is the mean of $S$ greater than the median of $S$?\n\n(1) The 3 smallest integers are 1, 3, and 6.\n(2) The largest integer in $S$ is 50.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "C",
        "explanation": "Statement (1): Median is 6. Upper values could be 7, 8 (mean = 5 < 6) or 7, 50 (mean > 6). Insufficient.\nStatement (2): Gives no information about median or lower values. Insufficient.\nTogether: Elements are $1, 3, 6, d, {35 + test_idx * 5}$ where $6 < d < {35 + test_idx * 5}$. Minimum sum is $1 + 3 + 6 + 7 + {35 + test_idx * 5} = {52 + test_idx * 5}$. Minimum mean is $({52 + test_idx * 5})/5 > 10 > 6$. Since the minimum possible mean is strictly greater than the median 6, the answer is always YES. Sufficient.",
        "trap": "Neglecting to calculate the minimum possible mean under the constraint $d \\ge 7$.",
        "estSeconds: 115": 115,
        "estSeconds": 115
      },
      {
        "id": "pt04_di05",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "Did Metropolitan Water Authority's division for civil hydrology & aquifer management generate an operating net margin of at least $\\$40,000$ on total contract billings of $\\$210,000$?\n\n(1) Total operating expenses were strictly under 65% of contract billings.\n(2) Operating margin exceeded 20% of contract billings.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "Profit = Revenue - Costs. Statement (1): If costs < 65% of revenue, profit > 35% of revenue. 35% of $\\$195,000$ is at least $\\$68,250$, which is strictly greater than $\\$40,000$. Sufficient.\nStatement (2): 20% of $\\$195,000$ is $\\$39,000$. For smaller revenues, 20% might be $\\$30,000$ or $\\$36,000$ (which could allow profit to be $\\$38,000 < \\$40,000$). Thus Statement (2) is not guaranteed sufficient across baseline tests. Statement (1) ALONE is sufficient.",
        "trap": "Assuming statement (2) guarantees clearing $\\$40,000$ without calculating the 20% threshold.",
        "estSeconds": 95
      },
      {
        "id": "pt04_di06",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "If parameter $p$ is an integer recorded during groundwater infiltration monitoring on artesian reservoir recharge basin at Metropolitan Water Authority, is $|p| = p$?\n\n(1) $p^2 = p$\n(2) $p^3 \\ge p$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "$|m| = m$ holds if and only if $m \\ge 0$.\nStatement (1): $m(m - 1) = 0 \\implies m = 0$ or $m = 1$. In both cases, $m \\ge 0$, so $|m| = m$ is definitely true. Sufficient.\nStatement (2): $m^3 - m \\ge 0 \\implies m(m-1)(m+1) \\ge 0$. Integer solutions include $m = -1$ (where $|-1| = 1 \\ne -1$, so NO) as well as $m = 0, 1, 2$ (where YES). Insufficient.\nTherefore, Statement (1) ALONE is sufficient.",
        "trap": "Overlooking $m = -1$ as a valid integer solution to $m^3 \\ge m$.",
        "estSeconds": 105
      },
      {
        "id": "pt04_di07",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Looking at the municipal water utility table, which regional drainage division achieved the highest operating profit in dollars?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Agricultural Agronomy & Hydrology",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-4",
              54,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-4",
              74,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-4",
              44,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-4",
              90,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-4",
              63,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-4",
              57,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The median throughput among units with an Error Rate strictly under 1.0% exceeds 45 k/day. (Yes/No)",
          "Statement 2: The unit with the highest Cost Index also has the highest Error Rate. (Yes/No)",
          "Statement 3: All units with Uptime greater than 99.0% have a Cost Index below 150. (Yes/No)"
        ],
        "answer": "Yes | Yes | Yes",
        "explanation": "Statement 1: Units with error < 1.0% are Alpha, Gamma, Epsilon, Zeta. Throughputs are 45+, 38+, 54+, 48+. Median is (45+48)/2 > 45 k/day -> Yes.\nStatement 2: Unit Delta has Cost Index 180 (highest) and Error Rate 2.1% (highest) -> Yes.\nStatement 3: Units with Uptime > 99.0% are Alpha (110), Gamma (85), Epsilon (125), Zeta (115), all under 150 -> Yes.",
        "trap": "Sorting by the wrong column or taking the mean instead of the median.",
        "estSeconds": 120
      },
      {
        "id": "pt04_di08",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluate operational ranking correlations based on the agricultural agronomy & hydrology table.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Agricultural Agronomy & Hydrology",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-4",
              54,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-4",
              74,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-4",
              44,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-4",
              90,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-4",
              63,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-4",
              57,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Sorting descending by Throughput yields an identical ranking as sorting descending by Cost Index. (Yes/No)",
          "Statement 2: Exactly three units have an Error Rate strictly below 0.7%. (Yes/No)",
          "Statement 3: Unit Gamma has both the lowest Throughput and the lowest Error Rate. (Yes/No)"
        ],
        "answer": "No | Yes | Yes",
        "explanation": "Statement 1: Delta is highest in both, but Beta (62, 145) vs Epsilon (54, 125) vs Alpha (45, 110) vs Zeta (48, 115) - Zeta throughput is higher than Alpha but Cost Index is 115 vs 110, order varies -> No.\nStatement 2: Units with error < 0.7% are Alpha (0.4), Gamma (0.2), Zeta (0.6) -> exactly three -> Yes.\nStatement 3: Gamma has lowest throughput (38+) and lowest error (0.2%) -> Yes.",
        "trap": "Assuming throughput and cost index correlate with 1.0 rank correlation.",
        "estSeconds": 115
      },
      {
        "id": "pt04_di09",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If the municipal water division table is sorted from lowest to highest Operating Margin (%), which division occupies the median position?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Agricultural Agronomy & Hydrology",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-4",
              54,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-4",
              74,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-4",
              44,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-4",
              90,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-4",
              63,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-4",
              57,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Unit Gamma has a Cost Index per throughput unit of less than 2.5. (Yes/No)",
          "Statement 2: The range of Error Rates across all 6 units is strictly greater than 1.8 percentage points. (Yes/No)",
          "Statement 3: More than half of the units have an Uptime exceeding 99.2%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Gamma ratio = 85 / (38+) < 2.5 -> Yes.\nStatement 2: Max error = Delta (2.1%), Min error = Gamma (0.2%). Range = 2.1 - 0.2 = 1.9% > 1.8% -> Yes.\nStatement 3: Units with Uptime > 99.2% are Alpha (99.8), Gamma (99.9), Zeta (99.4) -> 3 out of 6 (wait: exactly half, so strictly more than half is No!) -> Answer: Yes | Yes | No.",
        "trap": "Confusing 'at least half' with 'strictly more than half'.",
        "estSeconds": 125
      },
      {
        "id": "pt04_di10",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Evaluate reliability and risk profiles across units in agricultural agronomy & hydrology.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Agricultural Agronomy & Hydrology",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-4",
              54,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-4",
              74,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-4",
              44,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-4",
              90,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-4",
              63,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-4",
              57,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The unit with the highest Throughput also has the lowest Uptime. (Yes/No)",
          "Statement 2: Total combined throughput of the two highest units exceeds 130 k/day. (Yes/No)",
          "Statement 3: Every unit with a Cost Index greater than 120 has an Error Rate above 1.0%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Delta has highest throughput (75+) and lowest uptime (97.5%) -> Yes.\nStatement 2: Top two are Delta (75+) and Beta (62+) = 137+ > 130 -> Yes.\nStatement 3: Unit Epsilon has Cost Index 125 (>120) but Error Rate 0.8% (< 1.0%) -> No.",
        "trap": "Overlooking Unit Epsilon's low error rate despite high cost.",
        "estSeconds": 115
      },
      {
        "id": "pt04_di11",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Referring to the civil hydrology scatter plot of aquifer R&D versus operational efficiency, as research investment increases up to 10%, efficiency generally [Select 1], while past 10%, it generally [Select 2].",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Agricultural Agronomy & Hydrology",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 26
            },
            {
              "x": 20,
              "y": 41
            },
            {
              "x": 30,
              "y": 54
            },
            {
              "x": 40,
              "y": 64
            },
            {
              "x": 50,
              "y": 71
            },
            {
              "x": 60,
              "y": 76
            }
          ]
        },
        "options": [
          "Dropdown 1: The overall relationship between Resource Investment and Productivity Output is [strongly positive | strongly negative | sinusoidal | uncorrelated].",
          "Dropdown 2: As Resource Investment increases beyond $40k, the rate of increase in Productivity Output displays [diminishing marginal returns | increasing exponential growth | negative acceleration | zero slope]."
        ],
        "answer": "strongly positive | diminishing marginal returns",
        "explanation": "Dropdown 1: As investment rises from 10 to 60, output rises consistently from 20+ to 70+ -> strongly positive.\nDropdown 2: Between 10 and 30, slope is ~1.4; between 40 and 60, slope drops to ~0.6 -> diminishing marginal returns.",
        "trap": "Confusing diminishing marginal growth with an absolute decline in output.",
        "estSeconds": 105
      },
      {
        "id": "pt04_di12",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Referring to the municipal hydrology plot, approximately what percentage of water pumping stations with R&D intensity below 6% attained an ROIC above 20%?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Agricultural Agronomy & Hydrology",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 26
            },
            {
              "x": 20,
              "y": 41
            },
            {
              "x": 30,
              "y": 54
            },
            {
              "x": 40,
              "y": 64
            },
            {
              "x": 50,
              "y": 71
            },
            {
              "x": 60,
              "y": 76
            }
          ]
        },
        "options": [
          "Dropdown 1: The average marginal gain in output per thousand dollars invested between $10k and $30k is approximately [1.4 points/$k | 2.5 points/$k | 3.5 points/$k | 0.5 points/$k].",
          "Dropdown 2: The point with the highest output-to-investment ratio is at an investment of [$10k | $30k | $50k | $60k]."
        ],
        "answer": "1.4 points/$k | $10k",
        "explanation": "Dropdown 1: Slope = (48 - 20) / (30 - 10) = 28 / 20 = 1.4 points/$k.\nDropdown 2: Ratio y/x: At x=10, y/x = 22/10 = 2.2. At x=60, y/x = 72/60 = 1.2. The highest ratio occurs at the earliest stage ($10k).",
        "trap": "Assuming the highest absolute output point ($60k) has the highest efficiency ratio.",
        "estSeconds": 115
      },
      {
        "id": "pt04_di13",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Referring to the municipal water chart, the single artesian pumping station identified as the greatest positive residual outlier is located at which coordinates?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Agricultural Agronomy & Hydrology",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 26
            },
            {
              "x": 20,
              "y": 41
            },
            {
              "x": 30,
              "y": 54
            },
            {
              "x": 40,
              "y": 64
            },
            {
              "x": 50,
              "y": 71
            },
            {
              "x": 60,
              "y": 76
            }
          ]
        },
        "options": [
          "Dropdown 1: The median investment level across the 6 observed data points is [$35k | $40k | $45k | $50k].",
          "Dropdown 2: A firm investing $45k would be projected by linear interpolation to produce an output index of approximately [61.5 | 68.0 | 72.5 | 55.0]."
        ],
        "answer": "$35k | 61.5",
        "explanation": "Dropdown 1: Ordered x: 10, 20, 30, 40, 50, 60. Median = (30 + 40)/2 = $35k.\nDropdown 2: Between x=40 (y~58) and x=50 (y~65), midpoint x=45 gives y = (58 + 65)/2 = 61.5.",
        "trap": "Extrapolating using the steep slope from the early segment.",
        "estSeconds": 110
      },
      {
        "id": "pt04_di14",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If an operating facility at Metropolitan Water Authority reduces its expenditure from 16% down to 10% along the regression curve for recharge infiltration, what is the expected change in its performance index?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Agricultural Agronomy & Hydrology",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 26
            },
            {
              "x": 20,
              "y": 41
            },
            {
              "x": 30,
              "y": 54
            },
            {
              "x": 40,
              "y": 64
            },
            {
              "x": 50,
              "y": 71
            },
            {
              "x": 60,
              "y": 76
            }
          ]
        },
        "options": [
          "Dropdown 1: Increasing investment from $50k to $60k yields a percentage increase in output of approximately [7% | 15% | 25% | 35%].",
          "Dropdown 2: If fixed costs require an output index of at least 50 to break even, the minimum necessary investment is approximately [$32k | $22k | $42k | $15k]."
        ],
        "answer": "7% | $32k",
        "explanation": "Dropdown 1: At x=50, y~67. At x=60, y~72. Change = 5 / 67 ~ 7.4%.\nDropdown 2: At x=30, y~48; at x=40, y~58. Output 50 is reached just past $30k (approx $32k).",
        "trap": "Calculating percentage increase based on investment (20%) instead of output (7%).",
        "estSeconds": 115
      },
      {
        "id": "pt04_di15",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "At Metropolitan Water Authority, a capital allocation of $45 million is split between artesian reservoir recharge basin (Asset X) and secondary infrastructure (Asset Y). The allocation to Asset X is exactly 4 times the allocation to Asset Y. Select the dollar allocation for Asset X and Asset Y.\n\nValues: Asset X = $36M, Asset Y = $9M.",
        "options": [
          "Grade A: 46 liters",
          "Grade B: 23 liters"
        ],
        "answer": "Grade A = 46 | Grade B = 23",
        "explanation": "Alligation: Ratio of Grade A to Grade B is $|50 - 30| : |30 - 20| = 20 : 10 = 2 : 1$. Total volume is 69 liters. Grade A $= 2/3 \\times 69 = 46$ liters, Grade B $= 1/3 \\times 69 = 23$ liters.",
        "trap": "Reversing the 2:1 ratio between Grade A and Grade B.",
        "estSeconds": 125
      },
      {
        "id": "pt04_di16",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Two parameters $U$ and $V$ in agricultural agronomy & hydrology satisfy the linear system: $2U + 3V = 43$ and $U - V = 4$.\n\nSelect the value of $U$ and the value of $V$ that satisfy both equations.",
        "options": [
          "U: 11",
          "V: 7"
        ],
        "answer": "U = 11 | V = 7",
        "explanation": "Substitute $U = V + 4$: $2(V + 4) + 3V = 5V + 8 = 43 \\implies 5V = 35 \\implies V = 7$. Then $U = 7 + 4 = 11$.",
        "trap": "Sign error when expanding 2(V + 4).",
        "estSeconds: 105": 105,
        "estSeconds": 105
      },
      {
        "id": "pt04_di17",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "At Metropolitan Water Authority, Pump Alpha fills an emergency containment reservoir for groundwater infiltration monitoring in 10 hours working alone. Working together, Pump Alpha and Pump Beta fill the reservoir in 6.0 hours. Select the time for Pump Alpha and Pump Beta working alone.",
        "options": [
          "High-Yield Debt: \\$400,000",
          "Treasury Notes: \\$600,000"
        ],
        "answer": "High-Yield = $400,000 | Treasury = $600,000",
        "explanation": "Alligation: Ratio of High-Yield to Treasury is $|3 - 5| : |8 - 5| = 2 : 3$. Fraction in High-Yield is $2/5 = 40\\% = \\$400,000$. Fraction in Treasury is $3/5 = 60\\% = \\$600,000$.",
        "trap": "Inverting the 2:3 ratio to 3:2.",
        "estSeconds": 120
      },
      {
        "id": "pt04_di18",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluating the Project Charter and Financial Audit tabs for Metropolitan Water Authority, what is the total upfront capital investment required for deploying artesian reservoir recharge basin across all branch facilities?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Agricultural Agronomy & Hydrology",
              "content": "Directive 4.4 regarding Agricultural Agronomy & Hydrology:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 4:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant North only",
          "Plant North and Plant West only",
          "Plant South and Plant West only",
          "Plant North, Plant South, and Plant West",
          "None of the facilities"
        ],
        "answer": "A",
        "explanation": "Tab 1 specifies that a score of at least 90 is required for expedited licensing. Tab 2 shows only Plant North scored >= 90 (score 92). Plant West scored 88 (< 90). Thus, Plant North only qualifies.",
        "trap": "Assuming Plant West qualifies because of its 6-year history (history only grants exemption from review, not expedited licensing).",
        "estSeconds": 120
      },
      {
        "id": "pt04_di19",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Which facility at Metropolitan Water Authority is subject to mandatory operational review according to the regulatory directive for civil hydrology & aquifer management and the audit inspection records?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Agricultural Agronomy & Hydrology",
              "content": "Directive 4.4 regarding Agricultural Agronomy & Hydrology:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 4:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant East only",
          "Plant South and Plant East only",
          "Plant South only",
          "Plant North and Plant East only",
          "All four plants"
        ],
        "answer": "A",
        "explanation": "Plants scoring below 85 are Plant South (84) and Plant East (79). However, Tab 1 exempts facilities operating >5 years with zero violations. Plant South has operated 7 years with 0 violations (exempt). Plant East has only 2 years and has a violation, so it is the ONLY plant subject to mandatory review.",
        "trap": "Failing to check Plant South's 7-year zero-violation exemption in Tab 1.",
        "estSeconds": 130
      },
      {
        "id": "pt04_di20",
        "test": 4,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Evaluating information across all three tabs for civil hydrology & aquifer management, which strategic conclusion regarding the financial return of deploying artesian reservoir recharge basin is most strongly supported?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Agricultural Agronomy & Hydrology",
              "content": "Directive 4.4 regarding Agricultural Agronomy & Hydrology:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 4:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "No, because it has an active safety violation recorded in the preceding 12 months.",
          "Yes, provided it files the paperwork within 14 business days.",
          "Yes, because its compliance score was within 10 points of the 85 threshold.",
          "No, because only facilities with more than 5 years operating history can file stays.",
          "Yes, because emergency stays are automatically granted to all facilities."
        ],
        "answer": "A",
        "explanation": "Tab 3 explicitly states: 'No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay.' Plant East has 1 safety violation (Tab 2), disqualifying it completely.",
        "trap": "Focusing only on the 14-day filing window without checking the violation disqualification rule.",
        "estSeconds": 115
      }
    ]
  },
  {
    "testNumber": 5,
    "id": "pt_05",
    "title": "Official Focus Mock #5 (Full 64-Q Simulation)",
    "date": "2025-03-20",
    "totalScore": 685,
    "quantScore": 81,
    "verbalScore": 81,
    "dataInsightsScore": 80,
    "structure": {
      "quantQuestions": 21,
      "verbalQuestions": 23,
      "dataInsightsQuestions": 20,
      "total": 64,
      "durationMinutes": 135
    },
    "questions": [
      {
        "id": "pt05_q01",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In semiconductor microfabrication & nanotech, a barcode serial integer $n$ satisfies that $n^2 - 1$ is divisible by prime $19$. If $1 < n < 19$, how many integer values can $n$ assume?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "18"
        ],
        "answer": "B",
        "explanation": "Since $n^2 - 1 = (n - 1)(n + 1)$ is divisible by prime 19, by Euclid's lemma either 19 divides $(n - 1)$ or 19 divides $(n + 1)$. Given $1 < n < 19$, $n - 1 < 19$, so 19 cannot divide $n - 1$. For 19 to divide $n + 1$, we must have $n + 1 = 19 \\implies n = 18$. Thus, exactly 1 integer value ($n = 18$) satisfies the condition.",
        "trap": "Assuming both $(n - 1)$ and $(n + 1)$ can yield solutions within the open interval $(1, p)$.",
        "estSeconds": 90
      },
      {
        "id": "pt05_q02",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "At NanoLitho Technologies, Cleanroom Fab Director monitors two operational units: Primary Unit Alpha completes a full cycle of silicon wafer photoresist etching in 9 hours working alone, whereas Secondary Unit Beta requires 18 hours alone. If both units operate simultaneously at their constant rates to complete the cycle on a shared extreme ultraviolet lithography scanner, how many hours will they take together?",
        "options": [
          "4.83",
          "5.33",
          "5.83",
          "12.00",
          "6.00"
        ],
        "answer": "B",
        "explanation": "Combined rate $R = 1/8 + 1/16 = 3/16$. Time $T = 1/R = 16/3 = 5.33$ hours.",
        "trap": "Taking the arithmetic average of the two individual times.",
        "estSeconds: 85": 85,
        "estSeconds": 85
      },
      {
        "id": "pt05_q03",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "A microchip foundry marks up silicon wafer fabrication costs by 45% for retail listings, then allows volume smartphone assemblers a 20% rebate. What net margin percentage is earned over fabrication cost?",
        "options": [
          "20.0%",
          "16.0%",
          "25.0%",
          "20.0%",
          "30.0%"
        ],
        "answer": "B",
        "explanation": "Multiplier $= (1 + 0.45) \\times (1 - 0.2) = 1.1600$. Net profit percentage $= (1.1600 - 1) \\times 100 = 16.0\\%$.",
        "trap": "Subtracting the percentages directly (45% - 20% = 25%).",
        "estSeconds": 90
      },
      {
        "id": "pt05_q04",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a mathematical model tracking photoresist etching at NanoLitho Technologies, the exponent variable $x$ satisfies $3^{2x+1} - $3^{2x-1} = 17496$. What is the value of $x^2 + x$?",
        "options": [
          "10",
          "12",
          "14",
          "16",
          "15"
        ],
        "answer": "B",
        "explanation": "Factor out $2^{2x-1}$: $2^{2x-1}(2^2 - 1) = 32(2^2 - 1)$. Equating exponents: $2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$. Then $x^2 + x = 3^2 + 3 = 12$.",
        "trap": "Miscalculating the factored term $(base^2 - 1)$.",
        "estSeconds": 100
      },
      {
        "id": "pt05_q05",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Inequalities & Absolute Values",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "During a tolerance check on extreme ultraviolet lithography scanner measurements at NanoLitho Technologies, how many integer values of $k$ satisfy the inequality $|2k - 10| \\le 21$?",
        "options": [
          "19",
          "20",
          "21",
          "22",
          "18"
        ],
        "answer": "B",
        "explanation": "Expand absolute value: $-19 \\le 2k - 9 \\le 19 \\implies -10 \\le 2k \\le 28 \\implies -5.0 \\le k \\le 14.0$. Length of interval for integers is strictly 20.",
        "trap": "Neglecting to include both endpoints when calculating inclusive integer count.",
        "estSeconds": 95
      },
      {
        "id": "pt05_q06",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A cleanroom sensor records 7 distinct positive integer defect counts across production shifts, finding a median count of 24 and an average of 29. What is the maximum possible count for the worst shift?",
        "options": [
          "143",
          "145",
          "147",
          "149",
          "151"
        ],
        "answer": "C",
        "explanation": "To maximize $x_7$, minimize elements 1, 2, 3, 5, 6. Minimum distinct positive integers: $x_1=1, x_2=2, x_3=3$. Given median $x_4 = 32$. Minimum distinct integers above median: $x_5 = 33, x_6 = 34$. Sum of all 7 integers $= 7 \\times 36 = 252$. Subtracting the 6 minimal values leaves maximum $x_7 = 147$.",
        "trap": "Allowing integers above median to equal the median rather than being strictly distinct.",
        "estSeconds": 115
      },
      {
        "id": "pt05_q07",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A semiconductor fab task force of 4 technicians is staffed from 6 lithography specialists and 4 etching engineers. If at least 2 of each specialization must participate, how many task forces can be configured?",
        "options": [
          "80",
          "85",
          "90",
          "95",
          "100"
        ],
        "answer": "C",
        "explanation": "Ways to select 2 hardware engineers from 6: $\\binom{6}{2} = 15$. Ways to select 2 software architects from 4: $\\binom{4}{2} = 6$. Total distinct combinations $= 15 \\times 6 = 90$.",
        "trap": "Adding the combinations instead of multiplying.",
        "estSeconds": 105
      },
      {
        "id": "pt05_q08",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In microchip lithography patterning combinations, what is the greatest integer $k$ such that $3^k$ divides $55!$ evenly?",
        "options": [
          "12",
          "13",
          "14",
          "15",
          "16"
        ],
        "answer": "C",
        "explanation": "Powers of 10 in a factorial are limited by prime factor 5. Using Legendre's formula: $\\lfloor 60/5 \\rfloor + \\lfloor 60/25 \\rfloor = 12 + 2 = 14$. Thus $k = 14$.",
        "trap": "Counting powers of 2 or stopping after first division by 5.",
        "estSeconds": 90
      },
      {
        "id": "pt05_q09",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "A dedicated freight van transporting silicon wafers travels an outbound highway route at 47 mph, and returns along the same route at 94 mph. What is the van's average speed for the full trip?",
        "options": [
          "58.8",
          "62.0",
          "60.8",
          "56.8",
          "63.5"
        ],
        "answer": "A",
        "explanation": "Average speed over equal distances is the harmonic mean: $V = \\frac{2 s_1 s_2}{s_1 + s_2} = \\frac{2 \\times 48 \\times 76}{124} = 58.8$ mph.",
        "trap": "Choosing the arithmetic mean (option B).",
        "estSeconds": 80
      },
      {
        "id": "pt05_q10",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A semiconductor etching bath holds 65 liters of chemical solvent with a 30% acid concentration. How many liters of deionized water must be mixed in to reduce the concentration to exactly 15%?",
        "options": [
          "50",
          "52",
          "54",
          "56",
          "58"
        ],
        "answer": "C",
        "explanation": "Solvent mass is constant: $0.25 \\times 50 = 0.12 \\times (50 + w) \\implies 50 + w = 104 \\implies w = 54$ liters.",
        "trap": "Reporting total final volume rather than added water.",
        "estSeconds": 95
      },
      {
        "id": "pt05_q11",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Sequences & Series",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In an arithmetic sequence monitoring semiconductor microfabrication & nanotech production batches, the first term is 8 and the common difference between consecutive terms is 4. What is the sum of the first 15 terms of this sequence?",
        "options": [
          "525",
          "532",
          "540",
          "548",
          "555"
        ],
        "answer": "C",
        "explanation": "Sum formula $S_{15} = \\frac{15}{2} [2(8) + 14(4)] = 15 \\times [8 + 7(4)] = 540$.",
        "trap": "Using 15d instead of (n-1)d in the summation formula.",
        "estSeconds": 90
      },
      {
        "id": "pt05_q12",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Overlapping Sets",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Among 140 technical facilities surveyed in semiconductor microfabrication & nanotech, 66 have implemented Protocol A, 56 have implemented Protocol B, and 14 have implemented neither. How many facilities have implemented BOTH Protocol A and Protocol B?",
        "options": [
          "-8",
          "-6",
          "-4",
          "-2",
          "0"
        ],
        "answer": "C",
        "explanation": "Facilities with at least one protocol $= 140 - 14 = 126$. By inclusion-exclusion: $|A \\cap B| = |A| + |B| - |A \\cup B| = 66 + 56 - 126 = -4$.",
        "trap": "Subtracting neither from both sets individually.",
        "estSeconds": 85
      },
      {
        "id": "pt05_q13",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A cleanroom tool kit contains 6 red laser alignment pins and 8 blue alignment pins. If a technician draws 3 pins at random without replacement, what is the probability that exactly 2 are red?",
        "options": [
          "\\frac{19}{45}",
          "\\frac{20}{45}",
          "\\frac{21}{45}",
          "\\frac{22}{45}",
          "\\frac{23}{45}"
        ],
        "answer": "C",
        "explanation": "Ways to draw two compliant parts: $\\binom{6}{2} = 15$. Ways to draw two defective parts: $\\binom{4}{2} = 6$. Total favorable $= 21$. Total unrestricted pairs: $\\binom{10}{2} = 45$. Probability $= 21/45$.",
        "trap": "Assuming sampling with replacement.",
        "estSeconds": 100
      },
      {
        "id": "pt05_q14",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Quadratics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A semiconductor photolithography beam profile quadratic $x^2 - 20x + K = 0$ possesses two positive integer roots differing by 2. What is the value of $K$?",
        "options": [
          "76",
          "78",
          "80",
          "82",
          "84"
        ],
        "answer": "C",
        "explanation": "Let roots be $r_1$ and $r_2$. Sum $r_1 + r_2 = 18$, and difference $r_2 - r_1 = 2$. Solving gives roots $r_1 = 8$ and $r_2 = 10$. By Vieta's formulas, $K = r_1 \\times r_2 = 8 \\times 10 = 80$.",
        "trap": "Adding the roots rather than multiplying for the constant term $K$.",
        "estSeconds": 85
      },
      {
        "id": "pt05_q15",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In an algorithmic encryption routine for semiconductor euv nanotechnology, what is the units digit of the integer evaluation $7^{63} + 3$?",
        "options": [
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": "C",
        "explanation": "Powers of 7 cycle in units digits: $7^1 \\rightarrow 7, 7^2 \\rightarrow 9, 7^3 \\rightarrow 3, 7^4 \\rightarrow 1$. Exponent $59 \\equiv 3 \\pmod 4$, so $7^{59}$ ends in 3. Adding 3 gives a units digit of $(3 + 3) \\pmod 10 = 6$.",
        "trap": "Failing to apply base-4 cyclicity to the exponent.",
        "estSeconds": 80
      },
      {
        "id": "pt05_q16",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Coordinate & Analytical Geometry",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In a Cartesian telemetry grid mapping extreme ultraviolet lithography scanner coordinates for NanoLitho Technologies, line $L_1$ passes through $(0, 10)$ and $(8, 0)$. If perpendicular line $L_2$ intersects the origin $(0, 0)$, what is the slope of line $L_2$?",
        "options": [
          "\\frac{7}{9}",
          "-\\frac{7}{9}",
          "\\frac{9}{7}",
          "-\\frac{9}{7}",
          "1"
        ],
        "answer": "A",
        "explanation": "Slope of $L_1$ is $m_1 = \\frac{0 - 9}{7 - 0} = -\\frac{9}{7}$. Perpendicular slope $m_2 = -1/m_1 = \\frac{7}{9}$.",
        "trap": "Inverting without negating (option B or C).",
        "estSeconds: 75": 75,
        "estSeconds": 75
      },
      {
        "id": "pt05_q17",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sensor calibration test in semiconductor microfabrication & nanotech, the standard deviation of pressure readings was 4.5 psi. If each reading is multiplied by 1.25 and then decreased by 3.5 psi, what is the standard deviation of the transformed readings in psi?",
        "options": [
          "2.12",
          "5.62",
          "4.50",
          "9.12",
          "6.75"
        ],
        "answer": "B",
        "explanation": "Standard deviation is unaffected by the subtraction of a constant (-3.5), but scales by $|1.25|$: $\\sigma_{new} = 1.25 \\times 4.5 = 5.62$ psi.",
        "trap": "Subtracting 3.5 from the standard deviation (option A).",
        "estSeconds": 70
      },
      {
        "id": "pt05_q18",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In semiconductor euv nanotechnology, replacement parts for extreme ultraviolet lithography scanner at NanoLitho Technologies are packaged strictly in quantities of 5 or 8 units. What is the greatest integer number of units that cannot be assembled using non-negative combinations of these packages?",
        "options": [
          "15",
          "16",
          "17",
          "18",
          "19"
        ],
        "answer": "C",
        "explanation": "By the Frobenius Coin Formula for coprime integers $a$ and $b$, the largest non-constructible integer is $ab - a - b = (4)(7) - 4 - 7 = 17$.",
        "trap": "Computing ab directly without subtracting (a + b).",
        "estSeconds": 110
      },
      {
        "id": "pt05_q19",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "When the two digits of microchip serial number $N$ are transposed, the resulting number is 36 larger than $N$. What is the difference between its units and tens digits?",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "C",
        "explanation": "$(10B + A) - (10A + B) = 9(B - A) = 27 \\implies B - A = 3$.",
        "trap": "Confusing (B - A) with (A - B).",
        "estSeconds": 75
      },
      {
        "id": "pt05_q20",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A capital expenditure allocation of $\\$8,000$ in semiconductor microfabrication & nanotech appreciates at an annual rate of 10% compounded semi-annually. What is the total accumulated interest after 1 year?",
        "options": [
          "\\$800",
          "\\$820",
          "\\$840",
          "\\$880",
          "\\$900"
        ],
        "answer": "B",
        "explanation": "Semi-annual rate is 5% over 2 periods. Multiplier is $(1.05)^2 = 1.1025$. Interest $= 8000 \\times 0.1025 = \\$820$.",
        "trap": "Calculating simple interest at 10% (option A).",
        "estSeconds": 90
      },
      {
        "id": "pt05_q21",
        "test": 5,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "For all positive real numbers $u$ and $v$ modeling photoresist etching at NanoLitho Technologies, an operational operator $\\star$ is defined by $u \\star v = \\frac{u^2 - v^2}{u - v}$. What is the numerical value of $11 \\star 3$?",
        "options": [
          "\\frac{2}{2}",
          "\\frac{2}{3}",
          "\\frac{2}{4}",
          "2",
          "1"
        ],
        "answer": "B",
        "explanation": "$2 \\diamond 2 = \\frac{2 \\times 2}{2 + 2 + 2} = \\frac{2^2}{3(2)} = \\frac{2}{3}$.",
        "trap": "Adding the constants in the denominator incorrectly.",
        "estSeconds": 85
      },
      {
        "id": "pt05_v01",
        "test": 5,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 6,
        "passage": "Classical fixed-wing aerodynamic theory consistently failed to explain the remarkable hovering and slow-flight maneuverability observed in swifts and hummingbirds. Standard steady-state airflow models predicted that the high angles of attack utilized during rapid deceleration would induce immediate aerodynamic stall, resulting in catastrophic loss of lift.\n\nHigh-speed digital particle image velocimetry reveals that avian wings generate unsteady, dynamically stabilized leading-edge vortices (LEVs) on the dorsal wing surface during the downstroke. By delaying boundary-layer separation and creating localized low-pressure zones, these sustained vortices boost lift coefficients by more than double the theoretical maximum predicted by classical aeronautical equations.",
        "stem": "The primary purpose of the passage on avian aerodynamics & leading-edge vortices is to:",
        "options": [
          "Refute an established scientific doctrine by demonstrating that earlier measurements were entirely fraudulent.",
          "Challenge a traditional foundational model by presenting recent empirical evidence that supports an alternative paradigm.",
          "Reconcile two competing historical hypotheses by proposing a hybrid theoretical compromise.",
          "Advocate for the immediate cessation of field testing until biochemical instruments are standardized.",
          "Prove that evolutionary biological adaptations occur exclusively through physical genomic sequence alterations."
        ],
        "answer": "B",
        "explanation": "The passage outlines a traditional, long-standing theoretical assumption in its opening paragraph, then introduces modern empirical methodologies that challenge that framework and suggest a more dynamic mechanism.",
        "trap": "Selecting option A, which uses extreme, accusatory language ('entirely fraudulent') unsupported by the text.",
        "estSeconds": 100
      },
      {
        "id": "pt05_v02",
        "test": 5,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Classical fixed-wing aerodynamic theory consistently failed to explain the remarkable hovering and slow-flight maneuverability observed in swifts and hummingbirds. Standard steady-state airflow models predicted that the high angles of attack utilized during rapid deceleration would induce immediate aerodynamic stall, resulting in catastrophic loss of lift.\n\nHigh-speed digital particle image velocimetry reveals that avian wings generate unsteady, dynamically stabilized leading-edge vortices (LEVs) on the dorsal wing surface during the downstroke. By delaying boundary-layer separation and creating localized low-pressure zones, these sustained vortices boost lift coefficients by more than double the theoretical maximum predicted by classical aeronautical equations.",
        "stem": "It can be inferred from the passage on avian aerodynamics & leading-edge vortices that proponents of the earlier model assumed that:",
        "options": [
          "Biological systems exhibit extensive behavioral plasticity when subjected to environmental shifts.",
          "Observed physical phenomena were governed primarily by static or localized equilibrium constraints.",
          "Molecular sequencing technologies would permanently confirm traditional observational hypotheses.",
          "Nutrient availability was completely uniform across all ecological micro-habitats.",
          "Adaptive modifications could be transmitted across generations without physical nucleotide changes."
        ],
        "answer": "B",
        "explanation": "The passage notes that the classical model assumed static, rigid constraints (e.g., rigid niche partitioning, exclusive nucleotide dependence, or uniform competition) before modern dynamic evidence emerged.",
        "trap": "Confusing the revisionist perspective with the traditional hypothesis being evaluated.",
        "estSeconds": 110
      },
      {
        "id": "pt05_v03",
        "test": 5,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "Classical fixed-wing aerodynamic theory consistently failed to explain the remarkable hovering and slow-flight maneuverability observed in swifts and hummingbirds. Standard steady-state airflow models predicted that the high angles of attack utilized during rapid deceleration would induce immediate aerodynamic stall, resulting in catastrophic loss of lift.\n\nHigh-speed digital particle image velocimetry reveals that avian wings generate unsteady, dynamically stabilized leading-edge vortices (LEVs) on the dorsal wing surface during the downstroke. By delaying boundary-layer separation and creating localized low-pressure zones, these sustained vortices boost lift coefficients by more than double the theoretical maximum predicted by classical aeronautical equations.",
        "stem": "According to the second paragraph of the passage on avian aerodynamics & leading-edge vortices, the newly discovered mechanism is significant primarily because it:",
        "options": [
          "Eliminates all scientific uncertainty surrounding global atmospheric convection.",
          "Demonstrates that biological entities can adapt or function through pathways previously deemed impossible or secondary.",
          "Proves that evolutionary mutations occur at a constant mathematical rate across geological epochs.",
          "Forces commercial enterprises to halt exploratory drilling operations immediately.",
          "Refutes the universal applicability of thermodynamic physical laws."
        ],
        "answer": "B",
        "explanation": "Paragraph 2 reveals an independent or dynamic pathway (e.g. chemolithoautotrophy, epigenetic inheritance, leading-edge vortices, or mycorrhizal resource sharing) that classical science deemed impossible or minor.",
        "trap": "Selecting an overly grandiose claim that the finding overturns fundamental thermodynamic laws (option E).",
        "estSeconds": 95
      },
      {
        "id": "pt05_v04",
        "test": 5,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Classical fixed-wing aerodynamic theory consistently failed to explain the remarkable hovering and slow-flight maneuverability observed in swifts and hummingbirds. Standard steady-state airflow models predicted that the high angles of attack utilized during rapid deceleration would induce immediate aerodynamic stall, resulting in catastrophic loss of lift.\n\nHigh-speed digital particle image velocimetry reveals that avian wings generate unsteady, dynamically stabilized leading-edge vortices (LEVs) on the dorsal wing surface during the downstroke. By delaying boundary-layer separation and creating localized low-pressure zones, these sustained vortices boost lift coefficients by more than double the theoretical maximum predicted by classical aeronautical equations.",
        "stem": "The author\u2019s attitude toward the traditional scientific framework in avian aerodynamics & leading-edge vortices can best be described as:",
        "options": [
          "Uncompromisingly hostile and dismissive of historical scholars.",
          "Respectful of its historical role while emphasizing its conceptual limitations in light of recent findings.",
          "Enthusiastically supportive of its continuing supremacy over modern data.",
          "Indifferent to its theoretical and practical consequences.",
          "Skeptical of whether any scientific paradigm can ever be empirically tested."
        ],
        "answer": "B",
        "explanation": "The author treats the historical paradigm with measured academic respect ('long held', 'classical framework') while clearly identifying its empirical limitations.",
        "trap": "Choosing an exaggerated emotional descriptor like hostile or indifferent.",
        "estSeconds": 100
      },
      {
        "id": "pt05_v05",
        "test": 5,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "Classical fixed-wing aerodynamic theory consistently failed to explain the remarkable hovering and slow-flight maneuverability observed in swifts and hummingbirds. Standard steady-state airflow models predicted that the high angles of attack utilized during rapid deceleration would induce immediate aerodynamic stall, resulting in catastrophic loss of lift.\n\nHigh-speed digital particle image velocimetry reveals that avian wings generate unsteady, dynamically stabilized leading-edge vortices (LEVs) on the dorsal wing surface during the downstroke. By delaying boundary-layer separation and creating localized low-pressure zones, these sustained vortices boost lift coefficients by more than double the theoretical maximum predicted by classical aeronautical equations.",
        "stem": "In the discussion of the early Earth atmosphere, which photochemical calculations revealed the organic smog cooling ceiling limiting primitive archaean methane warming?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on avian aerodynamics & leading-edge vortices is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt05_v06",
        "test": 5,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 8,
        "passage": "Classical fixed-wing aerodynamic theory consistently failed to explain the remarkable hovering and slow-flight maneuverability observed in swifts and hummingbirds. Standard steady-state airflow models predicted that the high angles of attack utilized during rapid deceleration would induce immediate aerodynamic stall, resulting in catastrophic loss of lift.\n\nHigh-speed digital particle image velocimetry reveals that avian wings generate unsteady, dynamically stabilized leading-edge vortices (LEVs) on the dorsal wing surface during the downstroke. By delaying boundary-layer separation and creating localized low-pressure zones, these sustained vortices boost lift coefficients by more than double the theoretical maximum predicted by classical aeronautical equations.",
        "stem": "The author would be most likely to agree with which conclusion regarding thermal equilibrium in the early Archaean biosphere?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on avian aerodynamics & leading-edge vortices is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt05_v07",
        "test": 5,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 9,
        "passage": "Classical fixed-wing aerodynamic theory consistently failed to explain the remarkable hovering and slow-flight maneuverability observed in swifts and hummingbirds. Standard steady-state airflow models predicted that the high angles of attack utilized during rapid deceleration would induce immediate aerodynamic stall, resulting in catastrophic loss of lift.\n\nHigh-speed digital particle image velocimetry reveals that avian wings generate unsteady, dynamically stabilized leading-edge vortices (LEVs) on the dorsal wing surface during the downstroke. By delaying boundary-layer separation and creating localized low-pressure zones, these sustained vortices boost lift coefficients by more than double the theoretical maximum predicted by classical aeronautical equations.",
        "stem": "How does the author systematically organize the scientific argument concerning Archaean atmospheric haze feedbacks?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on avian aerodynamics & leading-edge vortices is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt05_v08",
        "test": 5,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "Classical fixed-wing aerodynamic theory consistently failed to explain the remarkable hovering and slow-flight maneuverability observed in swifts and hummingbirds. Standard steady-state airflow models predicted that the high angles of attack utilized during rapid deceleration would induce immediate aerodynamic stall, resulting in catastrophic loss of lift.\n\nHigh-speed digital particle image velocimetry reveals that avian wings generate unsteady, dynamically stabilized leading-edge vortices (LEVs) on the dorsal wing surface during the downstroke. By delaying boundary-layer separation and creating localized low-pressure zones, these sustained vortices boost lift coefficients by more than double the theoretical maximum predicted by classical aeronautical equations.",
        "stem": "The second paragraph of the text on early planetary climate primarily concentrates on the self-limiting effect of:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on avian aerodynamics & leading-edge vortices is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt05_v09",
        "test": 5,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Classical fixed-wing aerodynamic theory consistently failed to explain the remarkable hovering and slow-flight maneuverability observed in swifts and hummingbirds. Standard steady-state airflow models predicted that the high angles of attack utilized during rapid deceleration would induce immediate aerodynamic stall, resulting in catastrophic loss of lift.\n\nHigh-speed digital particle image velocimetry reveals that avian wings generate unsteady, dynamically stabilized leading-edge vortices (LEVs) on the dorsal wing surface during the downstroke. By delaying boundary-layer separation and creating localized low-pressure zones, these sustained vortices boost lift coefficients by more than double the theoretical maximum predicted by classical aeronautical equations.",
        "stem": "The author cites general circulation models predicting runaway greenhouse warming primarily to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on avian aerodynamics & leading-edge vortices is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt05_v10",
        "test": 5,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 9,
        "passage": "Classical fixed-wing aerodynamic theory consistently failed to explain the remarkable hovering and slow-flight maneuverability observed in swifts and hummingbirds. Standard steady-state airflow models predicted that the high angles of attack utilized during rapid deceleration would induce immediate aerodynamic stall, resulting in catastrophic loss of lift.\n\nHigh-speed digital particle image velocimetry reveals that avian wings generate unsteady, dynamically stabilized leading-edge vortices (LEVs) on the dorsal wing surface during the downstroke. By delaying boundary-layer separation and creating localized low-pressure zones, these sustained vortices boost lift coefficients by more than double the theoretical maximum predicted by classical aeronautical equations.",
        "stem": "Based on the atmospheric haze model, how would planetary scientists interpret high methane-to-CO2 ratios detected in an exoplanet biosphere?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on avian aerodynamics & leading-edge vortices is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt05_v11",
        "test": 5,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "Classical fixed-wing aerodynamic theory consistently failed to explain the remarkable hovering and slow-flight maneuverability observed in swifts and hummingbirds. Standard steady-state airflow models predicted that the high angles of attack utilized during rapid deceleration would induce immediate aerodynamic stall, resulting in catastrophic loss of lift.\n\nHigh-speed digital particle image velocimetry reveals that avian wings generate unsteady, dynamically stabilized leading-edge vortices (LEVs) on the dorsal wing surface during the downstroke. By delaying boundary-layer separation and creating localized low-pressure zones, these sustained vortices boost lift coefficients by more than double the theoretical maximum predicted by classical aeronautical equations.",
        "stem": "The passage indicates that future scientific and operational frameworks in semiconductor euv nanotechnology will be required to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on avian aerodynamics & leading-edge vortices is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt05_v12",
        "test": 5,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Cleanroom Fab Director at NanoLitho Technologies: \"Deploying extreme ultraviolet lithography scanner will enable our division to optimize photoresist etching within twelve months. Therefore, the executive steering committee must approve our funding request without delay.\"\n\nWhich of the following is an unstated assumption upon which the cleanroom fab director's argument depends?",
        "options": [
          "The policy will not inadvertently trigger cybersecurity container bottlenecks that cancels out the expected gains.",
          "The capital allocation required is strictly less than any expenditure approved in the prior fiscal year.",
          "No neighboring jurisdictions have considered implementing similar regulatory policies.",
          "The personnel tasked with enforcing the policy have completed postgraduate compliance degrees.",
          "Public opinion surveys indicate universal consumer enthusiasm for the initiative."
        ],
        "answer": "A",
        "explanation": "Negation test: If the policy DOES trigger cybersecurity container bottlenecks that cancels out the expected gains, the goal of vessel turnaround dwell times will fail, collapsing the argument.",
        "trap": "Focusing on administrative trivia (degree qualifications) or budget comparisons.",
        "estSeconds": 115
      },
      {
        "id": "pt05_v13",
        "test": 5,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Operations Analyst at NanoLitho Technologies: \"A three-month pilot deployment of extreme ultraviolet lithography scanner in region Alpha yielded a 25% improvement in photoresist etching. This empirical result establishes that extreme ultraviolet lithography scanner was the direct causal driver of the observed efficiency gain.\"\n\nWhich of the following, if true, most seriously undermines the analyst's causal conclusion?",
        "options": [
          "Test district Alpha simultaneously experienced a major external demographic shift that naturally produces high baseline performance.",
          "The software utilized to compile test results was upgraded three weeks prior to the pilot rollout.",
          "Several junior employees in district Alpha reported working five additional overtime hours during the pilot.",
          "The cost of the pilot study was covered by a philanthropic research grant rather than operating revenue.",
          "Competing firms in the same industry have not yet published their quarterly operational statistics."
        ],
        "answer": "A",
        "explanation": "Introducing an external confounding variable (simultaneous demographic shift) directly attacks the causal attribution made by the consultant.",
        "trap": "Pointing out that the pilot was grant-funded, which affects replication finances but not the validity of the pilot's causal data.",
        "estSeconds": 110
      },
      {
        "id": "pt05_v14",
        "test": 5,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Strategy Director at NanoLitho Technologies: \"Allocating capital toward extreme ultraviolet lithography scanner represents the most effective strategic pathway for our firm to expand photoresist etching.\"\n\nWhich of the following, if true, provides the strongest corroborating evidence for the director's assertion?",
        "options": [
          "In extensive blind controlled trials across diverse industry segments, organizations adopting Automated Gantry Cranes consistently outperformed control groups on vessel turnaround dwell times.",
          "The strategic planner recently completed an executive leadership certification at an accredited business school.",
          "The vendor supplying the hardware for the policy offers a 30-day money-back guarantee.",
          "Several trade journals recently featured editorial articles discussing emerging regulatory trends.",
          "The policy requires no alterations to the firm's existing corporate legal structure."
        ],
        "answer": "A",
        "explanation": "Independent controlled trials demonstrating that the policy consistently beats control groups across diverse segments provides robust causal validation.",
        "trap": "Relying on the planner's credentials (ad hominem support) rather than empirical evidence.",
        "estSeconds": 100
      },
      {
        "id": "pt05_v15",
        "test": 5,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Compliance Auditor: At NanoLitho Technologies, any initiative involving extreme ultraviolet lithography scanner requires formal sign-off from Cleanroom Fab Director. All initiatives receiving formal sign-off must undergo an environmental impact assessment unless they are classified as purely digital infrastructure. Last month, Initiative Sigma at NanoLitho Technologies received formal sign-off but did not undergo an environmental impact assessment.\n\nIf the statements above are true, which of the following must also be true regarding Initiative Sigma?",
        "options": [
          "The first describes an impending regulatory proposal; the second introduces evidence that undermines an objection to that proposal.",
          "The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.",
          "The first is an assumption underlying the industry objection; the second is the analyst\u2019s primary thesis.",
          "The first provides empirical evidence; the second states an intermediate conclusion rejected by the author.",
          "The first introduces a claim the author accepts; the second defends a counter-argument."
        ],
        "answer": "A",
        "explanation": "Boldface 1 describes the regulatory initiative being debated. Boldface 2 presents empirical compliance cost data that directly counters the lobbyists' objection.",
        "trap": "Confusing Boldface 1 with the author's personal conclusion (which appears in the final sentence).",
        "estSeconds": 125
      },
      {
        "id": "pt05_v16",
        "test": 5,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Lithography Engineering Lead: To reduce photoresist line-edge roughness on microprocessors, the cleanroom proposes lowering scanner laser pulse duration by 20%. Which of the following determinations would be most useful?",
        "options": [
          "Whether the monetary benefits realized from vessel turnaround dwell times exceed the ongoing compliance and operational costs associated with Automated Gantry Cranes.",
          "Whether participating organizations display corporate logos on public transit shelters.",
          "How many years the auditor has worked in the regional auditing bureau.",
          "Whether similar policies were debated by legislative committees during the prior decade.",
          "Whether employee satisfaction surveys are conducted semi-annually or annually."
        ],
        "answer": "A",
        "explanation": "Net return on capital is defined as Net Financial Benefits minus Total Costs. Determining whether revenue gains exceed operational costs is decisive.",
        "trap": "Choosing historical trivia or auditor tenure, which do not influence the mathematical financial return.",
        "estSeconds": 110
      },
      {
        "id": "pt05_v17",
        "test": 5,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Industrial Economist: Traditional accounts attribute early Silicon Valley supremacy to university research defense grants. **Patent filings indicate that spin-off venture capital consortia commercialized twice as many integrated circuit designs as universities.** Defense theorists claim venture funds merely copied military prototypes. Yet corporate ledgers prove private firms funded initial prototyping; **independent venture capital syndication was the indispensable engine of semiconductor growth.** What roles do the boldface portions play?",
        "options": [
          "Rapid organic growth in commercial activity created new baseline volume that would have severely degraded performance in the absence of the subsidies.",
          "The currency in which subsidies were disbursed remained stable on international currency exchange markets.",
          "Several administrative assistants retired during the middle of the fiscal quarter.",
          "The auditing agency used computerized spreadsheets rather than handwritten paper ledgers.",
          "The subsidies were announced during a nationally televised press conference."
        ],
        "answer": "A",
        "explanation": "A powerful counteracting upward pressure (organic commercial growth) would have caused a steep deterioration; the policy succeeded in keeping metrics flat against a worsening baseline.",
        "trap": "Focusing on accounting ledger format (option D), which explains no operational dynamics.",
        "estSeconds": 105
      },
      {
        "id": "pt05_v18",
        "test": 5,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Safety Officer at NanoLitho Technologies: Over the past three quarters, NanoLitho Technologies equipped 90% of all extreme ultraviolet lithography scanner units with automated proximity sensors. Yet despite this safety upgrade, reported workplace minor incident rates in semiconductor euv nanotechnology increased by 14% over the same timeframe.\n\nWhich of the following, if true, most helps to resolve the apparent discrepancy described above?",
        "options": [
          "Mistakes a necessary condition for a sufficient condition.",
          "Attacks the personal moral character of corporate executives.",
          "Relies on circular logic by defining performance as adoption of the policy.",
          "Fails to specify the exact percentage return of the market index.",
          "Assumes that corporate profitability is the sole measure of human happiness."
        ],
        "answer": "A",
        "explanation": "The premise shows that adopting the policy may be necessary to avoid failure, but that does not mean adoption is sufficient to guarantee market outperformance.",
        "trap": "Selecting option C (circular logic) when the formal flaw is affirming the consequent / confusing necessary and sufficient conditions.",
        "estSeconds": 115
      },
      {
        "id": "pt05_v19",
        "test": 5,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Foundry Operations Lead: Every chip designer who rated our lithography fab 'outstanding' taped out at least three semiconductor projects last year. Designers taping out fewer projects gave lower ratings. Therefore, to improve customer satisfaction ratings, we should offer tape-out discounts. The lead's reasoning is vulnerable because it:",
        "options": [
          "Some facilities in Province 5 are NOT tier-1 manufacturing facilities.",
          "All facilities in Province 5 maintain ISO-14001 certification.",
          "No tier-1 manufacturing facility is located in Province 5.",
          "Every facility that lacks ISO-14001 certification operates uncalibrated combustion chambers.",
          "Province 5 has the highest industrial energy consumption in the nation."
        ],
        "answer": "A",
        "explanation": "There exist facilities in Province X with uncalibrated chambers. None of these can have ISO-14001 certification (by statement 2). Since all tier-1 facilities must have ISO-14001 certification, these uncertified facilities in Province X cannot be tier-1 facilities.",
        "trap": "Concluding that NO tier-1 facilities exist in Province X (option C), which oversteps the premises.",
        "estSeconds": 110
      },
      {
        "id": "pt05_v20",
        "test": 5,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Semiconductor Fab VP: Our foundry plans to install extreme ultraviolet pellicles to shield photomasks from sub-micron particle contamination. Critics argue pellicles reduce EUV transmission efficiency. However, new carbon-nanotube membranes achieve 92% transmission. Which of the following provides the strongest support?",
        "options": [
          "Concurrently with the predator removal, the reserve experienced a massive cyclical emergence of nutrient-rich prey that provided unprecedented food abundance.",
          "Target species construct nests in deciduous trees as well as evergreen shrubs.",
          "Invasive predators were introduced to the continent by European settlers in the eighteenth century.",
          "Volunteers conducted population counts using standard 10x binoculars.",
          "Several nearby urban parks also have small populations of the same species."
        ],
        "answer": "A",
        "explanation": "The simultaneous explosion of nutrient-rich cicada prey provides an overwhelming alternative causal explanation for the surge in reproduction.",
        "trap": "Noting the historical origins of predators, which is irrelevant to current breeding dynamics.",
        "estSeconds": 115
      },
      {
        "id": "pt05_v21",
        "test": 5,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Fab Quality VP: Last quarter, our engineering team doubled defect inspection passes on silicon wafer lot Alpha, and defective die yields dropped by 30%. This demonstrates that doubling defect inspections should be mandated for all production lots. Which of the following most seriously calls into question the VP's recommendation?",
        "options": [
          "The patient case mix and medical complexity in Ward 5 are representative of clinical departments across the entire hospital system.",
          "The platform software runs on standard desktop workstations running Windows 11.",
          "Physicians in Ward 5 completed an online feedback survey regarding user satisfaction.",
          "The hospital's malpractice insurance premium is reviewed annually in November.",
          "Medical transcriptionists previously belonged to a regional healthcare labor union."
        ],
        "answer": "A",
        "explanation": "Confirming that the test clinic is representative demonstrates that the 40% error reduction will likely replicate across other hospital departments.",
        "trap": "Citing IT workstation compatibility (option B), which is convenient but does not prove clinical effectiveness.",
        "estSeconds": 100
      },
      {
        "id": "pt05_v22",
        "test": 5,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Desert Ecosystem Biologist: To protect endangered desert pupfish inhabiting artesian springs near a new semiconductor plant, rangers installed exclusionary mesh barriers to prevent non-native crayfish predation. Biologists project pupfish density will recover. Which of the following is a required assumption?",
        "options": [
          "The public subway system possesses sufficient train capacity to accommodate the surge of diverted commuters without causing severe overcrowding that deters ridership.",
          "All private automobile drivers earn incomes above the national median household threshold.",
          "City parking meters generate less revenue than public transit fareboxes.",
          "Bicycle sharing programs will experience a corresponding increase in ridership.",
          "Municipal road paving projects are financed through state gasoline excise taxes."
        ],
        "answer": "A",
        "explanation": "Negation test: If the subway lacks capacity and overcrowding becomes unmanageable, drivers will not switch to transit (they may carpool, detour, or telecommute), defeating the policy.",
        "trap": "Assuming all drivers have high incomes (option B), which is not logically required.",
        "estSeconds": 120
      },
      {
        "id": "pt05_v23",
        "test": 5,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Semiconductor Analyst: Industry observers often argue that chip fab Alpha achieved market leadership solely through government equipment subsidies. **However, competing foundries that received identical government subsidies suffered chronic yield losses and financial ruin.** Clearly, subsidies were not the primary catalyst. Rather, **fab Alpha's proprietary extreme ultraviolet pellicle design and defect inspection algorithms achieved die yields that competitors could not approach.** What roles do the boldface portions play?",
        "options": [
          "The first is an established claim that the argument aims to refute; the second is an observation that supports the author\u2019s alternative conclusion.",
          "The first is the main conclusion of the argument; the second is a premise offered to defend that conclusion.",
          "The first provides empirical evidence; the second states an intermediate hypothesis rejected by the author.",
          "The first is a prediction; the second is an observation that disproves that prediction.",
          "The first introduces a hypothesis; the second proves that coal adoption never occurred."
        ],
        "answer": "A",
        "explanation": "Boldface 1 presents the conventional orthodoxy that the author sets out to undermine. Boldface 2 describes the persistent water-power cost advantage that supports the author's alternative thesis.",
        "trap": "Selecting option B which confuses the introductory conventional view with the author's own main conclusion.",
        "estSeconds": 120
      },
      {
        "id": "pt05_di01",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "In a data transmission pipeline for semiconductor microfabrication & nanotech, if $k$ is a positive integer, is $k$ divisible by 6?\n\n(1) $k$ is divisible by 3 and $k$ is even.\n(2) $k^2$ is divisible by 36.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "D",
        "explanation": "Statement (1): Since $k$ is even (divisible by 2) and divisible by 3, and $\\text{LCM}(2, 3) = 6$, $k$ must be divisible by 6. Sufficient.\nStatement (2): If $k^2$ is divisible by 36, then for positive integer $k$, $\\sqrt{k^2} = k$ is divisible by 6. Sufficient.\nTherefore, EACH statement ALONE is sufficient.",
        "trap": "Believing statement (2) allows fractional roots when $k$ is explicitly constrained to be an integer.",
        "estSeconds": 95
      },
      {
        "id": "pt05_di02",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If $a$ and $b$ are non-zero real parameters measuring photoresist etching at NanoLitho Technologies, is $\\frac{a}{b} > 1$?\n\n(1) $a > b$\n(2) $a b > 0$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "E",
        "explanation": "Statement (1): If $x = 2, y = 1$, $x/y = 2 > 1$. If $x = -1, y = -2$, $x > y$ holds but $x/y = 1/2 < 1$. Insufficient.\nStatement (2): Tells us $x$ and $y$ have the same sign, but gives no relative magnitude. Insufficient.\nTogether: If $x=2, y=1$, $x/y=2 > 1$. If $x=-1, y=-2$, $x>y$ and $xy=2>0$ hold, but $x/y=0.5 < 1$. Two contradictory answers remain possible. Statements (1) and (2) together are NOT sufficient (Answer E).",
        "trap": "Assuming $x$ and $y$ must be positive without testing negative numbers.",
        "estSeconds": 110
      },
      {
        "id": "pt05_di03",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Working at constant rates, how many hours does it take for Module A and Module B in semiconductor microfabrication & nanotech working together to process 5000 data transactions?\n\n(1) Module A processes 2000 transactions in 2 hours.\n(2) Operating simultaneously, Module A and Module B process 2500 transactions in 2.5 hours.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "B",
        "explanation": "Statement (1) provides only the rate for Module A. Insufficient.\nStatement (2) provides the combined throughput rate directly: Rate $= \\text{Transactions} / \\text{Time}$. With the combined rate known, the time to complete the target volume is uniquely determined. Sufficient.",
        "trap": "Believing individual rates for both modules are required.",
        "estSeconds": 90
      },
      {
        "id": "pt05_di04",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sample $S$ of 5 distinct integers recorded during semiconductor microfabrication & nanotech testing, is the mean of $S$ greater than the median of $S$?\n\n(1) The 3 smallest integers are 1, 3, and 6.\n(2) The largest integer in $S$ is 55.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "C",
        "explanation": "Statement (1): Median is 6. Upper values could be 7, 8 (mean = 5 < 6) or 7, 50 (mean > 6). Insufficient.\nStatement (2): Gives no information about median or lower values. Insufficient.\nTogether: Elements are $1, 3, 6, d, {35 + test_idx * 5}$ where $6 < d < {35 + test_idx * 5}$. Minimum sum is $1 + 3 + 6 + 7 + {35 + test_idx * 5} = {52 + test_idx * 5}$. Minimum mean is $({52 + test_idx * 5})/5 > 10 > 6$. Since the minimum possible mean is strictly greater than the median 6, the answer is always YES. Sufficient.",
        "trap": "Neglecting to calculate the minimum possible mean under the constraint $d \\ge 7$.",
        "estSeconds: 115": 115,
        "estSeconds": 115
      },
      {
        "id": "pt05_di05",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "Did NanoLitho Technologies's division for semiconductor euv nanotechnology generate an operating net margin of at least $\\$40,000$ on total contract billings of $\\$225,000$?\n\n(1) Total operating expenses were strictly under 65% of contract billings.\n(2) Operating margin exceeded 20% of contract billings.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "Profit = Revenue - Costs. Statement (1): If costs < 65% of revenue, profit > 35% of revenue. 35% of $\\$210,000$ is at least $\\$73,500$, which is strictly greater than $\\$40,000$. Sufficient.\nStatement (2): 20% of $\\$210,000$ is $\\$42,000$. For smaller revenues, 20% might be $\\$30,000$ or $\\$36,000$ (which could allow profit to be $\\$38,000 < \\$40,000$). Thus Statement (2) is not guaranteed sufficient across baseline tests. Statement (1) ALONE is sufficient.",
        "trap": "Assuming statement (2) guarantees clearing $\\$40,000$ without calculating the 20% threshold.",
        "estSeconds": 95
      },
      {
        "id": "pt05_di06",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "If parameter $p$ is an integer recorded during silicon wafer photoresist etching on extreme ultraviolet lithography scanner at NanoLitho Technologies, is $|p| = p$?\n\n(1) $p^2 = p$\n(2) $p^3 \\ge p$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "$|m| = m$ holds if and only if $m \\ge 0$.\nStatement (1): $m(m - 1) = 0 \\implies m = 0$ or $m = 1$. In both cases, $m \\ge 0$, so $|m| = m$ is definitely true. Sufficient.\nStatement (2): $m^3 - m \\ge 0 \\implies m(m-1)(m+1) \\ge 0$. Integer solutions include $m = -1$ (where $|-1| = 1 \\ne -1$, so NO) as well as $m = 0, 1, 2$ (where YES). Insufficient.\nTherefore, Statement (1) ALONE is sufficient.",
        "trap": "Overlooking $m = -1$ as a valid integer solution to $m^3 \\ge m$.",
        "estSeconds": 105
      },
      {
        "id": "pt05_di07",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "According to the semiconductor foundry table, which wafer manufacturing unit produced the highest dollar operating profit?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Semiconductor Microfabrication & Nanotech",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-5",
              57,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-5",
              78,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-5",
              46,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-5",
              95,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-5",
              66,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-5",
              60,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The median throughput among units with an Error Rate strictly under 1.0% exceeds 45 k/day. (Yes/No)",
          "Statement 2: The unit with the highest Cost Index also has the highest Error Rate. (Yes/No)",
          "Statement 3: All units with Uptime greater than 99.0% have a Cost Index below 150. (Yes/No)"
        ],
        "answer": "Yes | Yes | Yes",
        "explanation": "Statement 1: Units with error < 1.0% are Alpha, Gamma, Epsilon, Zeta. Throughputs are 45+, 38+, 54+, 48+. Median is (45+48)/2 > 45 k/day -> Yes.\nStatement 2: Unit Delta has Cost Index 180 (highest) and Error Rate 2.1% (highest) -> Yes.\nStatement 3: Units with Uptime > 99.0% are Alpha (110), Gamma (85), Epsilon (125), Zeta (115), all under 150 -> Yes.",
        "trap": "Sorting by the wrong column or taking the mean instead of the median.",
        "estSeconds": 120
      },
      {
        "id": "pt05_di08",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluate operational ranking correlations based on the semiconductor microfabrication & nanotech table.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Semiconductor Microfabrication & Nanotech",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-5",
              57,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-5",
              78,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-5",
              46,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-5",
              95,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-5",
              66,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-5",
              60,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Sorting descending by Throughput yields an identical ranking as sorting descending by Cost Index. (Yes/No)",
          "Statement 2: Exactly three units have an Error Rate strictly below 0.7%. (Yes/No)",
          "Statement 3: Unit Gamma has both the lowest Throughput and the lowest Error Rate. (Yes/No)"
        ],
        "answer": "No | Yes | Yes",
        "explanation": "Statement 1: Delta is highest in both, but Beta (62, 145) vs Epsilon (54, 125) vs Alpha (45, 110) vs Zeta (48, 115) - Zeta throughput is higher than Alpha but Cost Index is 115 vs 110, order varies -> No.\nStatement 2: Units with error < 0.7% are Alpha (0.4), Gamma (0.2), Zeta (0.6) -> exactly three -> Yes.\nStatement 3: Gamma has lowest throughput (38+) and lowest error (0.2%) -> Yes.",
        "trap": "Assuming throughput and cost index correlate with 1.0 rank correlation.",
        "estSeconds": 115
      },
      {
        "id": "pt05_di09",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If the semiconductor fabrication table is ordered in ascending sequence by Operating Margin (%), which fab occupies the median position?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Semiconductor Microfabrication & Nanotech",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-5",
              57,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-5",
              78,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-5",
              46,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-5",
              95,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-5",
              66,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-5",
              60,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Unit Gamma has a Cost Index per throughput unit of less than 2.5. (Yes/No)",
          "Statement 2: The range of Error Rates across all 6 units is strictly greater than 1.8 percentage points. (Yes/No)",
          "Statement 3: More than half of the units have an Uptime exceeding 99.2%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Gamma ratio = 85 / (38+) < 2.5 -> Yes.\nStatement 2: Max error = Delta (2.1%), Min error = Gamma (0.2%). Range = 2.1 - 0.2 = 1.9% > 1.8% -> Yes.\nStatement 3: Units with Uptime > 99.2% are Alpha (99.8), Gamma (99.9), Zeta (99.4) -> 3 out of 6 (wait: exactly half, so strictly more than half is No!) -> Answer: Yes | Yes | No.",
        "trap": "Confusing 'at least half' with 'strictly more than half'.",
        "estSeconds": 125
      },
      {
        "id": "pt05_di10",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Evaluate reliability and risk profiles across units in semiconductor microfabrication & nanotech.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Semiconductor Microfabrication & Nanotech",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-5",
              57,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-5",
              78,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-5",
              46,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-5",
              95,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-5",
              66,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-5",
              60,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The unit with the highest Throughput also has the lowest Uptime. (Yes/No)",
          "Statement 2: Total combined throughput of the two highest units exceeds 130 k/day. (Yes/No)",
          "Statement 3: Every unit with a Cost Index greater than 120 has an Error Rate above 1.0%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Delta has highest throughput (75+) and lowest uptime (97.5%) -> Yes.\nStatement 2: Top two are Delta (75+) and Beta (62+) = 137+ > 130 -> Yes.\nStatement 3: Unit Epsilon has Cost Index 125 (>120) but Error Rate 0.8% (< 1.0%) -> No.",
        "trap": "Overlooking Unit Epsilon's low error rate despite high cost.",
        "estSeconds": 115
      },
      {
        "id": "pt05_di11",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "On the semiconductor EUV scatter plot correlating lithography R&D with foundry ROIC, as R&D increases up to 11%, capital return generally [Select 1], whereas beyond 11%, it generally [Select 2].",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Semiconductor Microfabrication & Nanotech",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 28
            },
            {
              "x": 20,
              "y": 43
            },
            {
              "x": 30,
              "y": 56
            },
            {
              "x": 40,
              "y": 66
            },
            {
              "x": 50,
              "y": 73
            },
            {
              "x": 60,
              "y": 78
            }
          ]
        },
        "options": [
          "Dropdown 1: The overall relationship between Resource Investment and Productivity Output is [strongly positive | strongly negative | sinusoidal | uncorrelated].",
          "Dropdown 2: As Resource Investment increases beyond $40k, the rate of increase in Productivity Output displays [diminishing marginal returns | increasing exponential growth | negative acceleration | zero slope]."
        ],
        "answer": "strongly positive | diminishing marginal returns",
        "explanation": "Dropdown 1: As investment rises from 10 to 60, output rises consistently from 20+ to 70+ -> strongly positive.\nDropdown 2: Between 10 and 30, slope is ~1.4; between 40 and 60, slope drops to ~0.6 -> diminishing marginal returns.",
        "trap": "Confusing diminishing marginal growth with an absolute decline in output.",
        "estSeconds": 105
      },
      {
        "id": "pt05_di12",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "On the semiconductor foundry chart, approximately what fraction of chip manufacturing fabs with R&D intensity under 6% attained an ROIC exceeding 20%?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Semiconductor Microfabrication & Nanotech",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 28
            },
            {
              "x": 20,
              "y": 43
            },
            {
              "x": 30,
              "y": 56
            },
            {
              "x": 40,
              "y": 66
            },
            {
              "x": 50,
              "y": 73
            },
            {
              "x": 60,
              "y": 78
            }
          ]
        },
        "options": [
          "Dropdown 1: The average marginal gain in output per thousand dollars invested between $10k and $30k is approximately [1.4 points/$k | 2.5 points/$k | 3.5 points/$k | 0.5 points/$k].",
          "Dropdown 2: The point with the highest output-to-investment ratio is at an investment of [$10k | $30k | $50k | $60k]."
        ],
        "answer": "1.4 points/$k | $10k",
        "explanation": "Dropdown 1: Slope = (48 - 20) / (30 - 10) = 28 / 20 = 1.4 points/$k.\nDropdown 2: Ratio y/x: At x=10, y/x = 22/10 = 2.2. At x=60, y/x = 72/60 = 1.2. The highest ratio occurs at the earliest stage ($10k).",
        "trap": "Assuming the highest absolute output point ($60k) has the highest efficiency ratio.",
        "estSeconds": 115
      },
      {
        "id": "pt05_di13",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "On the semiconductor fabrication chart, the single microchip foundry identified as the largest positive statistical outlier is characterized by which coordinates?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Semiconductor Microfabrication & Nanotech",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 28
            },
            {
              "x": 20,
              "y": 43
            },
            {
              "x": 30,
              "y": 56
            },
            {
              "x": 40,
              "y": 66
            },
            {
              "x": 50,
              "y": 73
            },
            {
              "x": 60,
              "y": 78
            }
          ]
        },
        "options": [
          "Dropdown 1: The median investment level across the 6 observed data points is [$35k | $40k | $45k | $50k].",
          "Dropdown 2: A firm investing $45k would be projected by linear interpolation to produce an output index of approximately [61.5 | 68.0 | 72.5 | 55.0]."
        ],
        "answer": "$35k | 61.5",
        "explanation": "Dropdown 1: Ordered x: 10, 20, 30, 40, 50, 60. Median = (30 + 40)/2 = $35k.\nDropdown 2: Between x=40 (y~58) and x=50 (y~65), midpoint x=45 gives y = (58 + 65)/2 = 61.5.",
        "trap": "Extrapolating using the steep slope from the early segment.",
        "estSeconds": 110
      },
      {
        "id": "pt05_di14",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If an operating facility at NanoLitho Technologies reduces its expenditure from 16% down to 10% along the regression curve for photoresist etching, what is the expected change in its performance index?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Semiconductor Microfabrication & Nanotech",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 28
            },
            {
              "x": 20,
              "y": 43
            },
            {
              "x": 30,
              "y": 56
            },
            {
              "x": 40,
              "y": 66
            },
            {
              "x": 50,
              "y": 73
            },
            {
              "x": 60,
              "y": 78
            }
          ]
        },
        "options": [
          "Dropdown 1: Increasing investment from $50k to $60k yields a percentage increase in output of approximately [7% | 15% | 25% | 35%].",
          "Dropdown 2: If fixed costs require an output index of at least 50 to break even, the minimum necessary investment is approximately [$32k | $22k | $42k | $15k]."
        ],
        "answer": "7% | $32k",
        "explanation": "Dropdown 1: At x=50, y~67. At x=60, y~72. Change = 5 / 67 ~ 7.4%.\nDropdown 2: At x=30, y~48; at x=40, y~58. Output 50 is reached just past $30k (approx $32k).",
        "trap": "Calculating percentage increase based on investment (20%) instead of output (7%).",
        "estSeconds": 115
      },
      {
        "id": "pt05_di15",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "At NanoLitho Technologies, a capital allocation of $60 million is split between extreme ultraviolet lithography scanner (Asset X) and secondary infrastructure (Asset Y). The allocation to Asset X is exactly 5 times the allocation to Asset Y. Select the dollar allocation for Asset X and Asset Y.\n\nValues: Asset X = $50M, Asset Y = $10M.",
        "options": [
          "Grade A: 48 liters",
          "Grade B: 24 liters"
        ],
        "answer": "Grade A = 48 | Grade B = 24",
        "explanation": "Alligation: Ratio of Grade A to Grade B is $|50 - 30| : |30 - 20| = 20 : 10 = 2 : 1$. Total volume is 72 liters. Grade A $= 2/3 \\times 72 = 48$ liters, Grade B $= 1/3 \\times 72 = 24$ liters.",
        "trap": "Reversing the 2:1 ratio between Grade A and Grade B.",
        "estSeconds": 125
      },
      {
        "id": "pt05_di16",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Two parameters $U$ and $V$ in semiconductor microfabrication & nanotech satisfy the linear system: $2U + 3V = 48$ and $U - V = 4$.\n\nSelect the value of $U$ and the value of $V$ that satisfy both equations.",
        "options": [
          "U: 12",
          "V: 8"
        ],
        "answer": "U = 12 | V = 8",
        "explanation": "Substitute $U = V + 4$: $2(V + 4) + 3V = 5V + 8 = 48 \\implies 5V = 40 \\implies V = 8$. Then $U = 8 + 4 = 12$.",
        "trap": "Sign error when expanding 2(V + 4).",
        "estSeconds: 105": 105,
        "estSeconds": 105
      },
      {
        "id": "pt05_di17",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "At NanoLitho Technologies, Pump Alpha fills an emergency containment reservoir for silicon wafer photoresist etching in 11 hours working alone. Working together, Pump Alpha and Pump Beta fill the reservoir in 6.6 hours. Select the time for Pump Alpha and Pump Beta working alone.",
        "options": [
          "High-Yield Debt: \\$400,000",
          "Treasury Notes: \\$600,000"
        ],
        "answer": "High-Yield = $400,000 | Treasury = $600,000",
        "explanation": "Alligation: Ratio of High-Yield to Treasury is $|3 - 5| : |8 - 5| = 2 : 3$. Fraction in High-Yield is $2/5 = 40\\% = \\$400,000$. Fraction in Treasury is $3/5 = 60\\% = \\$600,000$.",
        "trap": "Inverting the 2:3 ratio to 3:2.",
        "estSeconds": 120
      },
      {
        "id": "pt05_di18",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluating the Project Charter and Financial Audit tabs for NanoLitho Technologies, what is the total upfront capital investment required for deploying extreme ultraviolet lithography scanner across all branch facilities?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Semiconductor Microfabrication & Nanotech",
              "content": "Directive 5.4 regarding Semiconductor Microfabrication & Nanotech:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 5:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant North only",
          "Plant North and Plant West only",
          "Plant South and Plant West only",
          "Plant North, Plant South, and Plant West",
          "None of the facilities"
        ],
        "answer": "A",
        "explanation": "Tab 1 specifies that a score of at least 90 is required for expedited licensing. Tab 2 shows only Plant North scored >= 90 (score 92). Plant West scored 88 (< 90). Thus, Plant North only qualifies.",
        "trap": "Assuming Plant West qualifies because of its 6-year history (history only grants exemption from review, not expedited licensing).",
        "estSeconds": 120
      },
      {
        "id": "pt05_di19",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Which facility at NanoLitho Technologies is subject to mandatory operational review according to the regulatory directive for semiconductor euv nanotechnology and the audit inspection records?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Semiconductor Microfabrication & Nanotech",
              "content": "Directive 5.4 regarding Semiconductor Microfabrication & Nanotech:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 5:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant East only",
          "Plant South and Plant East only",
          "Plant South only",
          "Plant North and Plant East only",
          "All four plants"
        ],
        "answer": "A",
        "explanation": "Plants scoring below 85 are Plant South (84) and Plant East (79). However, Tab 1 exempts facilities operating >5 years with zero violations. Plant South has operated 7 years with 0 violations (exempt). Plant East has only 2 years and has a violation, so it is the ONLY plant subject to mandatory review.",
        "trap": "Failing to check Plant South's 7-year zero-violation exemption in Tab 1.",
        "estSeconds": 130
      },
      {
        "id": "pt05_di20",
        "test": 5,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Evaluating information across all three tabs for semiconductor euv nanotechnology, which strategic conclusion regarding the financial return of deploying extreme ultraviolet lithography scanner is most strongly supported?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Semiconductor Microfabrication & Nanotech",
              "content": "Directive 5.4 regarding Semiconductor Microfabrication & Nanotech:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 5:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "No, because it has an active safety violation recorded in the preceding 12 months.",
          "Yes, provided it files the paperwork within 14 business days.",
          "Yes, because its compliance score was within 10 points of the 85 threshold.",
          "No, because only facilities with more than 5 years operating history can file stays.",
          "Yes, because emergency stays are automatically granted to all facilities."
        ],
        "answer": "A",
        "explanation": "Tab 3 explicitly states: 'No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay.' Plant East has 1 safety violation (Tab 2), disqualifying it completely.",
        "trap": "Focusing only on the 14-day filing window without checking the violation disqualification rule.",
        "estSeconds": 115
      }
    ]
  },
  {
    "testNumber": 6,
    "id": "pt_06",
    "title": "Official Focus Mock #6 (Full 64-Q Simulation)",
    "date": "2025-03-22",
    "totalScore": 695,
    "quantScore": 82,
    "verbalScore": 81,
    "dataInsightsScore": 80,
    "structure": {
      "quantQuestions": 21,
      "verbalQuestions": 23,
      "dataInsightsQuestions": 20,
      "total": 64,
      "durationMinutes": 135
    },
    "questions": [
      {
        "id": "pt06_q01",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In renewable energy grids & storage, a barcode serial integer $n$ satisfies that $n^2 - 1$ is divisible by prime $23$. If $1 < n < 23$, how many integer values can $n$ assume?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "22"
        ],
        "answer": "B",
        "explanation": "Since $n^2 - 1 = (n - 1)(n + 1)$ is divisible by prime 23, by Euclid's lemma either 23 divides $(n - 1)$ or 23 divides $(n + 1)$. Given $1 < n < 23$, $n - 1 < 23$, so 23 cannot divide $n - 1$. For 23 to divide $n + 1$, we must have $n + 1 = 23 \\implies n = 22$. Thus, exactly 1 integer value ($n = 22$) satisfies the condition.",
        "trap": "Assuming both $(n - 1)$ and $(n + 1)$ can yield solutions within the open interval $(1, p)$.",
        "estSeconds": 90
      },
      {
        "id": "pt06_q02",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "At AeroVolt Energy, Transmission Operations Manager monitors two operational units: Primary Unit Alpha completes a full cycle of peak megawatt load shifting in 10 hours working alone, whereas Secondary Unit Beta requires 20 hours alone. If both units operate simultaneously at their constant rates to complete the cycle on a shared vanadium flow battery substation, how many hours will they take together?",
        "options": [
          "5.50",
          "6.00",
          "6.50",
          "13.50",
          "6.75"
        ],
        "answer": "B",
        "explanation": "Combined rate $R = 1/9 + 1/18 = 3/18$. Time $T = 1/R = 18/3 = 6.00$ hours.",
        "trap": "Taking the arithmetic average of the two individual times.",
        "estSeconds: 85": 85,
        "estSeconds": 85
      },
      {
        "id": "pt06_q03",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "A grid battery distributor marks up lithium cell inventory by 50% to determine retail price, then discounts utility purchases by 30%. What percentage profit over inventory cost is retained?",
        "options": [
          "15.0%",
          "5.0%",
          "20.0%",
          "9.0%",
          "25.0%"
        ],
        "answer": "B",
        "explanation": "Multiplier $= (1 + 0.5) \\times (1 - 0.3) = 1.0500$. Net profit percentage $= (1.0500 - 1) \\times 100 = 5.0\\%$.",
        "trap": "Subtracting the percentages directly (50% - 30% = 20%).",
        "estSeconds": 90
      },
      {
        "id": "pt06_q04",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a mathematical model tracking round-trip efficiency at AeroVolt Energy, the exponent variable $x$ satisfies $2^{2x+1} - $2^{2x-1} = 1536$. What is the value of $x^2 + x$?",
        "options": [
          "18",
          "20",
          "22",
          "24",
          "24"
        ],
        "answer": "B",
        "explanation": "Factor out $3^{2x-1}$: $3^{2x-1}(3^2 - 1) = 2187(3^2 - 1)$. Equating exponents: $2x - 1 = 7 \\implies 2x = 8 \\implies x = 4$. Then $x^2 + x = 4^2 + 4 = 20$.",
        "trap": "Miscalculating the factored term $(base^2 - 1)$.",
        "estSeconds": 100
      },
      {
        "id": "pt06_q05",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Inequalities & Absolute Values",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "During a tolerance check on vanadium flow battery substation measurements at AeroVolt Energy, how many integer values of $k$ satisfy the inequality $|2k - 11| \\le 23$?",
        "options": [
          "21",
          "22",
          "23",
          "24",
          "20"
        ],
        "answer": "B",
        "explanation": "Expand absolute value: $-21 \\le 2k - 10 \\le 21 \\implies -11 \\le 2k \\le 31 \\implies -5.5 \\le k \\le 15.5$. Length of interval for integers is strictly 22.",
        "trap": "Neglecting to include both endpoints when calculating inclusive integer count.",
        "estSeconds": 95
      },
      {
        "id": "pt06_q06",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A substation logs 7 distinct positive integer megawatt-hour energy discharges with a median output of 26 and a mean output of 31. What is the maximum possible output of the greatest discharge event?",
        "options": [
          "155",
          "157",
          "159",
          "161",
          "163"
        ],
        "answer": "C",
        "explanation": "To maximize $x_7$, minimize elements 1, 2, 3, 5, 6. Minimum distinct positive integers: $x_1=1, x_2=2, x_3=3$. Given median $x_4 = 35$. Minimum distinct integers above median: $x_5 = 36, x_6 = 37$. Sum of all 7 integers $= 7 \\times 39 = 273$. Subtracting the 6 minimal values leaves maximum $x_7 = 159$.",
        "trap": "Allowing integers above median to equal the median rather than being strictly distinct.",
        "estSeconds": 115
      },
      {
        "id": "pt06_q07",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A microgrid advisory team of 4 members is drawn from 7 battery chemists and 5 electrical grid dispatchers. If at least 2 chemists and at least 1 dispatcher must be seated, how many distinct teams can be created?",
        "options": [
          "200",
          "205",
          "210",
          "215",
          "220"
        ],
        "answer": "C",
        "explanation": "Ways to select 2 hardware engineers from 7: $\\binom{7}{2} = 21$. Ways to select 2 software architects from 5: $\\binom{5}{2} = 10$. Total distinct combinations $= 21 \\times 10 = 210$.",
        "trap": "Adding the combinations instead of multiplying.",
        "estSeconds": 105
      },
      {
        "id": "pt06_q08",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In grid frequency modulation sequences, what is the largest positive integer $k$ such that $3^k$ divides $60!$ without a remainder?",
        "options": [
          "13",
          "14",
          "15",
          "16",
          "17"
        ],
        "answer": "C",
        "explanation": "Powers of 10 in a factorial are limited by prime factor 5. Using Legendre's formula: $\\lfloor 65/5 \\rfloor + \\lfloor 65/25 \\rfloor = 13 + 2 = 15$. Thus $k = 15$.",
        "trap": "Counting powers of 2 or stopping after first division by 5.",
        "estSeconds": 90
      },
      {
        "id": "pt06_q09",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "An electric maintenance truck servicing wind turbines travels outward at 50 mph, and returns along the same road at 100 mph. What is its average speed in mph for the complete round trip?",
        "options": [
          "61.5",
          "65.0",
          "63.5",
          "59.5",
          "66.5"
        ],
        "answer": "A",
        "explanation": "Average speed over equal distances is the harmonic mean: $V = \\frac{2 s_1 s_2}{s_1 + s_2} = \\frac{2 \\times 50 \\times 80}{130} = 61.5$ mph.",
        "trap": "Choosing the arithmetic mean (option B).",
        "estSeconds": 80
      },
      {
        "id": "pt06_q10",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A battery manufacturing mixer holds 70 liters of electrolyte solution containing 30% sulfuric compound. How many liters of pure water must be added to reach a 15% compound concentration?",
        "options": [
          "59",
          "61",
          "63",
          "65",
          "67"
        ],
        "answer": "C",
        "explanation": "Solvent mass is constant: $0.30 \\times 55 = 0.14 \\times (55 + w) \\implies 55 + w = 118 \\implies w = 63$ liters.",
        "trap": "Reporting total final volume rather than added water.",
        "estSeconds": 95
      },
      {
        "id": "pt06_q11",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Sequences & Series",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In an arithmetic sequence monitoring renewable energy grids & storage production batches, the first term is 9 and the common difference between consecutive terms is 5. What is the sum of the first 15 terms of this sequence?",
        "options": [
          "645",
          "652",
          "660",
          "668",
          "675"
        ],
        "answer": "C",
        "explanation": "Sum formula $S_{15} = \\frac{15}{2} [2(9) + 14(5)] = 15 \\times [9 + 7(5)] = 660$.",
        "trap": "Using 15d instead of (n-1)d in the summation formula.",
        "estSeconds": 90
      },
      {
        "id": "pt06_q12",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Overlapping Sets",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Among 150 technical facilities surveyed in renewable energy grids & storage, 70 have implemented Protocol A, 60 have implemented Protocol B, and 10 have implemented neither. How many facilities have implemented BOTH Protocol A and Protocol B?",
        "options": [
          "-14",
          "-12",
          "-10",
          "-8",
          "-6"
        ],
        "answer": "C",
        "explanation": "Facilities with at least one protocol $= 150 - 10 = 140$. By inclusion-exclusion: $|A \\cap B| = |A| + |B| - |A \\cup B| = 70 + 60 - 140 = -10$.",
        "trap": "Subtracting neither from both sets individually.",
        "estSeconds": 85
      },
      {
        "id": "pt06_q13",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A battery test bench contains 4 red fuse links and 6 blue fuse links. If an electrician draws 3 fuses at random without replacement, what is the probability that exactly 2 are red?",
        "options": [
          "\\frac{29}{66}",
          "\\frac{30}{66}",
          "\\frac{31}{66}",
          "\\frac{32}{66}",
          "\\frac{33}{66}"
        ],
        "answer": "C",
        "explanation": "Ways to draw two compliant parts: $\\binom{7}{2} = 21$. Ways to draw two defective parts: $\\binom{5}{2} = 10$. Total favorable $= 31$. Total unrestricted pairs: $\\binom{12}{2} = 66$. Probability $= 31/66$.",
        "trap": "Assuming sampling with replacement.",
        "estSeconds": 100
      },
      {
        "id": "pt06_q14",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Quadratics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A battery discharge curve modeled by quadratic $x^2 - 21x + K = 0$ has two positive integer roots with an absolute difference of 3. What is the value of constant $K$?",
        "options": [
          "92",
          "94",
          "96",
          "98",
          "100"
        ],
        "answer": "C",
        "explanation": "Let roots be $r_1$ and $r_2$. Sum $r_1 + r_2 = 20$, and difference $r_2 - r_1 = 4$. Solving gives roots $r_1 = 8$ and $r_2 = 12$. By Vieta's formulas, $K = r_1 \\times r_2 = 8 \\times 12 = 96$.",
        "trap": "Adding the roots rather than multiplying for the constant term $K$.",
        "estSeconds": 85
      },
      {
        "id": "pt06_q15",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In an algorithmic encryption routine for renewable power grid storage, what is the units digit of the integer evaluation $7^{67} + 3$?",
        "options": [
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": "C",
        "explanation": "Powers of 7 cycle in units digits: $7^1 \\rightarrow 7, 7^2 \\rightarrow 9, 7^3 \\rightarrow 3, 7^4 \\rightarrow 1$. Exponent $63 \\equiv 3 \\pmod 4$, so $7^{63}$ ends in 3. Adding 3 gives a units digit of $(3 + 3) \\pmod 10 = 6$.",
        "trap": "Failing to apply base-4 cyclicity to the exponent.",
        "estSeconds": 80
      },
      {
        "id": "pt06_q16",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Coordinate & Analytical Geometry",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In a Cartesian telemetry grid mapping vanadium flow battery substation coordinates for AeroVolt Energy, line $L_1$ passes through $(0, 11)$ and $(9, 0)$. If perpendicular line $L_2$ intersects the origin $(0, 0)$, what is the slope of line $L_2$?",
        "options": [
          "\\frac{8}{10}",
          "-\\frac{8}{10}",
          "\\frac{10}{8}",
          "-\\frac{10}{8}",
          "1"
        ],
        "answer": "A",
        "explanation": "Slope of $L_1$ is $m_1 = \\frac{0 - 10}{8 - 0} = -\\frac{10}{8}$. Perpendicular slope $m_2 = -1/m_1 = \\frac{8}{10}$.",
        "trap": "Inverting without negating (option B or C).",
        "estSeconds: 75": 75,
        "estSeconds": 75
      },
      {
        "id": "pt06_q17",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sensor calibration test in renewable energy grids & storage, the standard deviation of pressure readings was 5.0 psi. If each reading is multiplied by 1.25 and then decreased by 3.5 psi, what is the standard deviation of the transformed readings in psi?",
        "options": [
          "2.75",
          "6.25",
          "5.00",
          "9.75",
          "7.50"
        ],
        "answer": "B",
        "explanation": "Standard deviation is unaffected by the subtraction of a constant (-3.5), but scales by $|1.25|$: $\\sigma_{new} = 1.25 \\times 5.0 = 6.25$ psi.",
        "trap": "Subtracting 3.5 from the standard deviation (option A).",
        "estSeconds": 70
      },
      {
        "id": "pt06_q18",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In renewable power grid storage, replacement parts for vanadium flow battery substation at AeroVolt Energy are packaged strictly in quantities of 4 or 7 units. What is the greatest integer number of units that cannot be assembled using non-negative combinations of these packages?",
        "options": [
          "25",
          "26",
          "27",
          "28",
          "29"
        ],
        "answer": "C",
        "explanation": "By the Frobenius Coin Formula for coprime integers $a$ and $b$, the largest non-constructible integer is $ab - a - b = (5)(8) - 5 - 8 = 27$.",
        "trap": "Computing ab directly without subtracting (a + b).",
        "estSeconds": 110
      },
      {
        "id": "pt06_q19",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "When the digits of a two-digit battery temperature reading $N$ are reversed, the new number exceeds $N$ by 45. What is the difference between the units digit and the tens digit of $N$?",
        "options": [
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "answer": "C",
        "explanation": "$(10B + A) - (10A + B) = 9(B - A) = 36 \\implies B - A = 4$.",
        "trap": "Confusing (B - A) with (A - B).",
        "estSeconds": 75
      },
      {
        "id": "pt06_q20",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A capital expenditure allocation of $\\$9,000$ in renewable energy grids & storage appreciates at an annual rate of 10% compounded semi-annually. What is the total accumulated interest after 1 year?",
        "options": [
          "\\$900",
          "\\$922",
          "\\$945",
          "\\$990",
          "\\$1,012"
        ],
        "answer": "B",
        "explanation": "Semi-annual rate is 5% over 2 periods. Multiplier is $(1.05)^2 = 1.1025$. Interest $= 9000 \\times 0.1025 = \\$922$.",
        "trap": "Calculating simple interest at 10% (option A).",
        "estSeconds": 90
      },
      {
        "id": "pt06_q21",
        "test": 6,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "For all positive real numbers $u$ and $v$ modeling round-trip efficiency at AeroVolt Energy, an operational operator $\\star$ is defined by $u \\star v = \\frac{u^2 - v^2}{u - v}$. What is the numerical value of $12 \\star 3$?",
        "options": [
          "\\frac{3}{2}",
          "\\frac{3}{3}",
          "\\frac{3}{4}",
          "3",
          "1"
        ],
        "answer": "B",
        "explanation": "$3 \\diamond 3 = \\frac{3 \\times 3}{3 + 3 + 3} = \\frac{3^2}{3(3)} = \\frac{3}{3}$.",
        "trap": "Adding the constants in the denominator incorrectly.",
        "estSeconds": 85
      },
      {
        "id": "pt06_v01",
        "test": 6,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 6,
        "passage": "The proliferation of multi-drug-resistant bacterial pathogens in clinical settings was historically attributed to spontaneous point mutations in chromosomal target genes under antibiotic selection. Consequently, hospital stewardship policies focused primarily on restricting broad-spectrum antibiotic usage to reduce selective pressure on existing strains.\n\nGenomic sequencing has revealed that the primary vector for resistance dissemination is not vertical chromosomal mutation, but horizontal gene transfer mediated by conjugative plasmids and transposons. Resistance cassettes can transfer between unrelated bacterial phyla in wastewater conduits and biofilms even in the complete absence of therapeutic antibiotic concentrations, demonstrating that environmental sanitation barriers are as essential as pharmacological stewardship.",
        "stem": "The primary purpose of the passage on antimicrobial resistance & plasmid horizontal transfer is to:",
        "options": [
          "Refute an established scientific doctrine by demonstrating that earlier measurements were entirely fraudulent.",
          "Challenge a traditional foundational model by presenting recent empirical evidence that supports an alternative paradigm.",
          "Reconcile two competing historical hypotheses by proposing a hybrid theoretical compromise.",
          "Advocate for the immediate cessation of field testing until biochemical instruments are standardized.",
          "Prove that evolutionary biological adaptations occur exclusively through physical genomic sequence alterations."
        ],
        "answer": "B",
        "explanation": "The passage outlines a traditional, long-standing theoretical assumption in its opening paragraph, then introduces modern empirical methodologies that challenge that framework and suggest a more dynamic mechanism.",
        "trap": "Selecting option A, which uses extreme, accusatory language ('entirely fraudulent') unsupported by the text.",
        "estSeconds": 100
      },
      {
        "id": "pt06_v02",
        "test": 6,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "The proliferation of multi-drug-resistant bacterial pathogens in clinical settings was historically attributed to spontaneous point mutations in chromosomal target genes under antibiotic selection. Consequently, hospital stewardship policies focused primarily on restricting broad-spectrum antibiotic usage to reduce selective pressure on existing strains.\n\nGenomic sequencing has revealed that the primary vector for resistance dissemination is not vertical chromosomal mutation, but horizontal gene transfer mediated by conjugative plasmids and transposons. Resistance cassettes can transfer between unrelated bacterial phyla in wastewater conduits and biofilms even in the complete absence of therapeutic antibiotic concentrations, demonstrating that environmental sanitation barriers are as essential as pharmacological stewardship.",
        "stem": "It can be inferred from the passage on antimicrobial resistance & plasmid horizontal transfer that proponents of the earlier model assumed that:",
        "options": [
          "Biological systems exhibit extensive behavioral plasticity when subjected to environmental shifts.",
          "Observed physical phenomena were governed primarily by static or localized equilibrium constraints.",
          "Molecular sequencing technologies would permanently confirm traditional observational hypotheses.",
          "Nutrient availability was completely uniform across all ecological micro-habitats.",
          "Adaptive modifications could be transmitted across generations without physical nucleotide changes."
        ],
        "answer": "B",
        "explanation": "The passage notes that the classical model assumed static, rigid constraints (e.g., rigid niche partitioning, exclusive nucleotide dependence, or uniform competition) before modern dynamic evidence emerged.",
        "trap": "Confusing the revisionist perspective with the traditional hypothesis being evaluated.",
        "estSeconds": 110
      },
      {
        "id": "pt06_v03",
        "test": 6,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "The proliferation of multi-drug-resistant bacterial pathogens in clinical settings was historically attributed to spontaneous point mutations in chromosomal target genes under antibiotic selection. Consequently, hospital stewardship policies focused primarily on restricting broad-spectrum antibiotic usage to reduce selective pressure on existing strains.\n\nGenomic sequencing has revealed that the primary vector for resistance dissemination is not vertical chromosomal mutation, but horizontal gene transfer mediated by conjugative plasmids and transposons. Resistance cassettes can transfer between unrelated bacterial phyla in wastewater conduits and biofilms even in the complete absence of therapeutic antibiotic concentrations, demonstrating that environmental sanitation barriers are as essential as pharmacological stewardship.",
        "stem": "According to the second paragraph of the passage on antimicrobial resistance & plasmid horizontal transfer, the newly discovered mechanism is significant primarily because it:",
        "options": [
          "Eliminates all scientific uncertainty surrounding global atmospheric convection.",
          "Demonstrates that biological entities can adapt or function through pathways previously deemed impossible or secondary.",
          "Proves that evolutionary mutations occur at a constant mathematical rate across geological epochs.",
          "Forces commercial enterprises to halt exploratory drilling operations immediately.",
          "Refutes the universal applicability of thermodynamic physical laws."
        ],
        "answer": "B",
        "explanation": "Paragraph 2 reveals an independent or dynamic pathway (e.g. chemolithoautotrophy, epigenetic inheritance, leading-edge vortices, or mycorrhizal resource sharing) that classical science deemed impossible or minor.",
        "trap": "Selecting an overly grandiose claim that the finding overturns fundamental thermodynamic laws (option E).",
        "estSeconds": 95
      },
      {
        "id": "pt06_v04",
        "test": 6,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "The proliferation of multi-drug-resistant bacterial pathogens in clinical settings was historically attributed to spontaneous point mutations in chromosomal target genes under antibiotic selection. Consequently, hospital stewardship policies focused primarily on restricting broad-spectrum antibiotic usage to reduce selective pressure on existing strains.\n\nGenomic sequencing has revealed that the primary vector for resistance dissemination is not vertical chromosomal mutation, but horizontal gene transfer mediated by conjugative plasmids and transposons. Resistance cassettes can transfer between unrelated bacterial phyla in wastewater conduits and biofilms even in the complete absence of therapeutic antibiotic concentrations, demonstrating that environmental sanitation barriers are as essential as pharmacological stewardship.",
        "stem": "The author\u2019s attitude toward the traditional scientific framework in antimicrobial resistance & plasmid horizontal transfer can best be described as:",
        "options": [
          "Uncompromisingly hostile and dismissive of historical scholars.",
          "Respectful of its historical role while emphasizing its conceptual limitations in light of recent findings.",
          "Enthusiastically supportive of its continuing supremacy over modern data.",
          "Indifferent to its theoretical and practical consequences.",
          "Skeptical of whether any scientific paradigm can ever be empirically tested."
        ],
        "answer": "B",
        "explanation": "The author treats the historical paradigm with measured academic respect ('long held', 'classical framework') while clearly identifying its empirical limitations.",
        "trap": "Choosing an exaggerated emotional descriptor like hostile or indifferent.",
        "estSeconds": 100
      },
      {
        "id": "pt06_v05",
        "test": 6,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "The proliferation of multi-drug-resistant bacterial pathogens in clinical settings was historically attributed to spontaneous point mutations in chromosomal target genes under antibiotic selection. Consequently, hospital stewardship policies focused primarily on restricting broad-spectrum antibiotic usage to reduce selective pressure on existing strains.\n\nGenomic sequencing has revealed that the primary vector for resistance dissemination is not vertical chromosomal mutation, but horizontal gene transfer mediated by conjugative plasmids and transposons. Resistance cassettes can transfer between unrelated bacterial phyla in wastewater conduits and biofilms even in the complete absence of therapeutic antibiotic concentrations, demonstrating that environmental sanitation barriers are as essential as pharmacological stewardship.",
        "stem": "According to the passage on adult neurogenesis, which pulse-chase cellular labeling protocol conclusively proved ongoing progenitor cell division within the adult hippocampus?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on antimicrobial resistance & plasmid horizontal transfer is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt06_v06",
        "test": 6,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 8,
        "passage": "The proliferation of multi-drug-resistant bacterial pathogens in clinical settings was historically attributed to spontaneous point mutations in chromosomal target genes under antibiotic selection. Consequently, hospital stewardship policies focused primarily on restricting broad-spectrum antibiotic usage to reduce selective pressure on existing strains.\n\nGenomic sequencing has revealed that the primary vector for resistance dissemination is not vertical chromosomal mutation, but horizontal gene transfer mediated by conjugative plasmids and transposons. Resistance cassettes can transfer between unrelated bacterial phyla in wastewater conduits and biofilms even in the complete absence of therapeutic antibiotic concentrations, demonstrating that environmental sanitation barriers are as essential as pharmacological stewardship.",
        "stem": "With which of the following statements concerning structural plasticity in the mature human brain would the author most likely agree?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on antimicrobial resistance & plasmid horizontal transfer is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt06_v07",
        "test": 6,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 9,
        "passage": "The proliferation of multi-drug-resistant bacterial pathogens in clinical settings was historically attributed to spontaneous point mutations in chromosomal target genes under antibiotic selection. Consequently, hospital stewardship policies focused primarily on restricting broad-spectrum antibiotic usage to reduce selective pressure on existing strains.\n\nGenomic sequencing has revealed that the primary vector for resistance dissemination is not vertical chromosomal mutation, but horizontal gene transfer mediated by conjugative plasmids and transposons. Resistance cassettes can transfer between unrelated bacterial phyla in wastewater conduits and biofilms even in the complete absence of therapeutic antibiotic concentrations, demonstrating that environmental sanitation barriers are as essential as pharmacological stewardship.",
        "stem": "Which of the following best characterizes the rhetorical organization and logical progression of the passage analyzing renewable power grid storage?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on antimicrobial resistance & plasmid horizontal transfer is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt06_v08",
        "test": 6,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "The proliferation of multi-drug-resistant bacterial pathogens in clinical settings was historically attributed to spontaneous point mutations in chromosomal target genes under antibiotic selection. Consequently, hospital stewardship policies focused primarily on restricting broad-spectrum antibiotic usage to reduce selective pressure on existing strains.\n\nGenomic sequencing has revealed that the primary vector for resistance dissemination is not vertical chromosomal mutation, but horizontal gene transfer mediated by conjugative plasmids and transposons. Resistance cassettes can transfer between unrelated bacterial phyla in wastewater conduits and biofilms even in the complete absence of therapeutic antibiotic concentrations, demonstrating that environmental sanitation barriers are as essential as pharmacological stewardship.",
        "stem": "In the context of the second paragraph of the passage on renewable power grid storage, the author's primary analytical focus centers on:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on antimicrobial resistance & plasmid horizontal transfer is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt06_v09",
        "test": 6,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "The proliferation of multi-drug-resistant bacterial pathogens in clinical settings was historically attributed to spontaneous point mutations in chromosomal target genes under antibiotic selection. Consequently, hospital stewardship policies focused primarily on restricting broad-spectrum antibiotic usage to reduce selective pressure on existing strains.\n\nGenomic sequencing has revealed that the primary vector for resistance dissemination is not vertical chromosomal mutation, but horizontal gene transfer mediated by conjugative plasmids and transposons. Resistance cassettes can transfer between unrelated bacterial phyla in wastewater conduits and biofilms even in the complete absence of therapeutic antibiotic concentrations, demonstrating that environmental sanitation barriers are as essential as pharmacological stewardship.",
        "stem": "The author introduces competing hypotheses and potential criticisms in the discussion of renewable power grid storage primarily in order to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on antimicrobial resistance & plasmid horizontal transfer is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt06_v10",
        "test": 6,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 9,
        "passage": "The proliferation of multi-drug-resistant bacterial pathogens in clinical settings was historically attributed to spontaneous point mutations in chromosomal target genes under antibiotic selection. Consequently, hospital stewardship policies focused primarily on restricting broad-spectrum antibiotic usage to reduce selective pressure on existing strains.\n\nGenomic sequencing has revealed that the primary vector for resistance dissemination is not vertical chromosomal mutation, but horizontal gene transfer mediated by conjugative plasmids and transposons. Resistance cassettes can transfer between unrelated bacterial phyla in wastewater conduits and biofilms even in the complete absence of therapeutic antibiotic concentrations, demonstrating that environmental sanitation barriers are as essential as pharmacological stewardship.",
        "stem": "Based on the adult neurogenesis findings, how would neurologists most likely evaluate the cognitive impacts of voluntary aerobic exercise regimens in elderly patients?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on antimicrobial resistance & plasmid horizontal transfer is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt06_v11",
        "test": 6,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "The proliferation of multi-drug-resistant bacterial pathogens in clinical settings was historically attributed to spontaneous point mutations in chromosomal target genes under antibiotic selection. Consequently, hospital stewardship policies focused primarily on restricting broad-spectrum antibiotic usage to reduce selective pressure on existing strains.\n\nGenomic sequencing has revealed that the primary vector for resistance dissemination is not vertical chromosomal mutation, but horizontal gene transfer mediated by conjugative plasmids and transposons. Resistance cassettes can transfer between unrelated bacterial phyla in wastewater conduits and biofilms even in the complete absence of therapeutic antibiotic concentrations, demonstrating that environmental sanitation barriers are as essential as pharmacological stewardship.",
        "stem": "The passage indicates that future scientific and operational frameworks in renewable power grid storage will be required to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on antimicrobial resistance & plasmid horizontal transfer is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt06_v12",
        "test": 6,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Transmission Operations Manager at AeroVolt Energy: \"Deploying vanadium flow battery substation will enable our division to optimize round-trip efficiency within twelve months. Therefore, the executive steering committee must approve our funding request without delay.\"\n\nWhich of the following is an unstated assumption upon which the transmission operations manager's argument depends?",
        "options": [
          "The policy will not inadvertently trigger calorie substitution via fruit juice that cancels out the expected gains.",
          "The capital allocation required is strictly less than any expenditure approved in the prior fiscal year.",
          "No neighboring jurisdictions have considered implementing similar regulatory policies.",
          "The personnel tasked with enforcing the policy have completed postgraduate compliance degrees.",
          "Public opinion surveys indicate universal consumer enthusiasm for the initiative."
        ],
        "answer": "A",
        "explanation": "Negation test: If the policy DOES trigger calorie substitution via fruit juice that cancels out the expected gains, the goal of childhood obesity rates will fail, collapsing the argument.",
        "trap": "Focusing on administrative trivia (degree qualifications) or budget comparisons.",
        "estSeconds": 115
      },
      {
        "id": "pt06_v13",
        "test": 6,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Grid Operations Analyst at AeroVolt Energy: 'A pilot deployment of vanadium battery storage in substation Alpha yielded a 25% improvement in round-trip efficiency. This confirms that vanadium batteries were the sole cause of the improvement.' Which of the following, if true, most seriously weakens the analyst's claim?",
        "options": [
          "Test district Alpha simultaneously experienced a major external demographic shift that naturally produces high baseline performance.",
          "The software utilized to compile test results was upgraded three weeks prior to the pilot rollout.",
          "Several junior employees in district Alpha reported working five additional overtime hours during the pilot.",
          "The cost of the pilot study was covered by a philanthropic research grant rather than operating revenue.",
          "Competing firms in the same industry have not yet published their quarterly operational statistics."
        ],
        "answer": "A",
        "explanation": "Introducing an external confounding variable (simultaneous demographic shift) directly attacks the causal attribution made by the consultant.",
        "trap": "Pointing out that the pilot was grant-funded, which affects replication finances but not the validity of the pilot's causal data.",
        "estSeconds": 110
      },
      {
        "id": "pt06_v14",
        "test": 6,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Strategy Director at AeroVolt Energy: \"Allocating capital toward vanadium flow battery substation represents the most effective strategic pathway for our firm to expand round-trip efficiency.\"\n\nWhich of the following, if true, provides the strongest corroborating evidence for the director's assertion?",
        "options": [
          "In extensive blind controlled trials across diverse industry segments, organizations adopting Sugar-Sweetened Beverage Tax consistently outperformed control groups on childhood obesity rates.",
          "The strategic planner recently completed an executive leadership certification at an accredited business school.",
          "The vendor supplying the hardware for the policy offers a 30-day money-back guarantee.",
          "Several trade journals recently featured editorial articles discussing emerging regulatory trends.",
          "The policy requires no alterations to the firm's existing corporate legal structure."
        ],
        "answer": "A",
        "explanation": "Independent controlled trials demonstrating that the policy consistently beats control groups across diverse segments provides robust causal validation.",
        "trap": "Relying on the planner's credentials (ad hominem support) rather than empirical evidence.",
        "estSeconds": 100
      },
      {
        "id": "pt06_v15",
        "test": 6,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Compliance Auditor: At AeroVolt Energy, any initiative involving vanadium flow battery substation requires formal sign-off from Transmission Operations Manager. All initiatives receiving formal sign-off must undergo an environmental impact assessment unless they are classified as purely digital infrastructure. Last month, Initiative Sigma at AeroVolt Energy received formal sign-off but did not undergo an environmental impact assessment.\n\nIf the statements above are true, which of the following must also be true regarding Initiative Sigma?",
        "options": [
          "The first describes an impending regulatory proposal; the second introduces evidence that undermines an objection to that proposal.",
          "The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.",
          "The first is an assumption underlying the industry objection; the second is the analyst\u2019s primary thesis.",
          "The first provides empirical evidence; the second states an intermediate conclusion rejected by the author.",
          "The first introduces a claim the author accepts; the second defends a counter-argument."
        ],
        "answer": "A",
        "explanation": "Boldface 1 describes the regulatory initiative being debated. Boldface 2 presents empirical compliance cost data that directly counters the lobbyists' objection.",
        "trap": "Confusing Boldface 1 with the author's personal conclusion (which appears in the final sentence).",
        "estSeconds": 125
      },
      {
        "id": "pt06_v16",
        "test": 6,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Grid Stability Engineer: To prevent thermal runaway in flow battery banks, the utility recommends circulating liquid fluorochemical coolant. Which of the following would be most useful to investigate?",
        "options": [
          "Whether the monetary benefits realized from childhood obesity rates exceed the ongoing compliance and operational costs associated with Sugar-Sweetened Beverage Tax.",
          "Whether participating organizations display corporate logos on public transit shelters.",
          "How many years the auditor has worked in the regional auditing bureau.",
          "Whether similar policies were debated by legislative committees during the prior decade.",
          "Whether employee satisfaction surveys are conducted semi-annually or annually."
        ],
        "answer": "A",
        "explanation": "Net return on capital is defined as Net Financial Benefits minus Total Costs. Determining whether revenue gains exceed operational costs is decisive.",
        "trap": "Choosing historical trivia or auditor tenure, which do not influence the mathematical financial return.",
        "estSeconds": 110
      },
      {
        "id": "pt06_v17",
        "test": 6,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Energy Historian: Pundits long assumed that renewable energy transitions depend entirely on governmental feed-in tariffs. **Recent capital market audits reveal that utility-scale battery deployment accelerated only after private battery manufacturing reached scale economies.** Policy advocates cite subsidies as the sole driver. Yet manufacturing yield data show capital investment drove cost declines; **unsubsidized manufacturing economies of scale were the definitive catalyst for grid storage adoption.** What roles do the boldface portions play?",
        "options": [
          "Rapid organic growth in commercial activity created new baseline volume that would have severely degraded performance in the absence of the subsidies.",
          "The currency in which subsidies were disbursed remained stable on international currency exchange markets.",
          "Several administrative assistants retired during the middle of the fiscal quarter.",
          "The auditing agency used computerized spreadsheets rather than handwritten paper ledgers.",
          "The subsidies were announced during a nationally televised press conference."
        ],
        "answer": "A",
        "explanation": "A powerful counteracting upward pressure (organic commercial growth) would have caused a steep deterioration; the policy succeeded in keeping metrics flat against a worsening baseline.",
        "trap": "Focusing on accounting ledger format (option D), which explains no operational dynamics.",
        "estSeconds": 105
      },
      {
        "id": "pt06_v18",
        "test": 6,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Safety Officer at AeroVolt Energy: Over the past three quarters, AeroVolt Energy equipped 90% of all vanadium flow battery substation units with automated proximity sensors. Yet despite this safety upgrade, reported workplace minor incident rates in renewable power grid storage increased by 14% over the same timeframe.\n\nWhich of the following, if true, most helps to resolve the apparent discrepancy described above?",
        "options": [
          "Mistakes a necessary condition for a sufficient condition.",
          "Attacks the personal moral character of corporate executives.",
          "Relies on circular logic by defining performance as adoption of the policy.",
          "Fails to specify the exact percentage return of the market index.",
          "Assumes that corporate profitability is the sole measure of human happiness."
        ],
        "answer": "A",
        "explanation": "The premise shows that adopting the policy may be necessary to avoid failure, but that does not mean adoption is sufficient to guarantee market outperformance.",
        "trap": "Selecting option C (circular logic) when the formal flaw is affirming the consequent / confusing necessary and sufficient conditions.",
        "estSeconds": 115
      },
      {
        "id": "pt06_v19",
        "test": 6,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Grid Operator: Every industrial customer who rated our power service 'highly reliable' scheduled at least three energy demand-response events. Customers with fewer events gave lower ratings. Therefore, to raise customer satisfaction, we should require three demand-response events. The operator's reasoning is flawed because it:",
        "options": [
          "Some facilities in Province 6 are NOT tier-1 manufacturing facilities.",
          "All facilities in Province 6 maintain ISO-14001 certification.",
          "No tier-1 manufacturing facility is located in Province 6.",
          "Every facility that lacks ISO-14001 certification operates uncalibrated combustion chambers.",
          "Province 6 has the highest industrial energy consumption in the nation."
        ],
        "answer": "A",
        "explanation": "There exist facilities in Province X with uncalibrated chambers. None of these can have ISO-14001 certification (by statement 2). Since all tier-1 facilities must have ISO-14001 certification, these uncertified facilities in Province X cannot be tier-1 facilities.",
        "trap": "Concluding that NO tier-1 facilities exist in Province X (option C), which oversteps the premises.",
        "estSeconds": 110
      },
      {
        "id": "pt06_v20",
        "test": 6,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Grid Reliability Director: Our utility plans to install grid-forming solid-state inverters on regional battery banks to provide synthetic inertia during turbine trips. Skeptics argue high capital costs exceed benefits. However, synthetic inertia prevents grid blackouts that cost $50 million per hour. Which of the following provides the strongest support?",
        "options": [
          "Concurrently with the predator removal, the reserve experienced a massive cyclical emergence of nutrient-rich prey that provided unprecedented food abundance.",
          "Target species construct nests in deciduous trees as well as evergreen shrubs.",
          "Invasive predators were introduced to the continent by European settlers in the eighteenth century.",
          "Volunteers conducted population counts using standard 10x binoculars.",
          "Several nearby urban parks also have small populations of the same species."
        ],
        "answer": "A",
        "explanation": "The simultaneous explosion of nutrient-rich cicada prey provides an overwhelming alternative causal explanation for the surge in reproduction.",
        "trap": "Noting the historical origins of predators, which is irrelevant to current breeding dynamics.",
        "estSeconds": 115
      },
      {
        "id": "pt06_v21",
        "test": 6,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Grid Safety Inspector: Last quarter, our utility doubled infrared thermal drone scans on power line segment Alpha, and detected insulator arcing faults dropped by 45%. This shows that doubling drone scans should be deployed across all transmission lines. Which of the following most seriously undermines the inspector's recommendation?",
        "options": [
          "The patient case mix and medical complexity in Ward 6 are representative of clinical departments across the entire hospital system.",
          "The platform software runs on standard desktop workstations running Windows 11.",
          "Physicians in Ward 6 completed an online feedback survey regarding user satisfaction.",
          "The hospital's malpractice insurance premium is reviewed annually in November.",
          "Medical transcriptionists previously belonged to a regional healthcare labor union."
        ],
        "answer": "A",
        "explanation": "Confirming that the test clinic is representative demonstrates that the 40% error reduction will likely replicate across other hospital departments.",
        "trap": "Citing IT workstation compatibility (option B), which is convenient but does not prove clinical effectiveness.",
        "estSeconds": 100
      },
      {
        "id": "pt06_v22",
        "test": 6,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Avian Ecologist: To protect migratory golden eagles from collision hazards around our mountain wind turbine array, operators installed automated radar-triggered turbine curtailment systems. Biologists project eagle collision fatalities will decline by 80%. Which of the following is a required assumption?",
        "options": [
          "The public subway system possesses sufficient train capacity to accommodate the surge of diverted commuters without causing severe overcrowding that deters ridership.",
          "All private automobile drivers earn incomes above the national median household threshold.",
          "City parking meters generate less revenue than public transit fareboxes.",
          "Bicycle sharing programs will experience a corresponding increase in ridership.",
          "Municipal road paving projects are financed through state gasoline excise taxes."
        ],
        "answer": "A",
        "explanation": "Negation test: If the subway lacks capacity and overcrowding becomes unmanageable, drivers will not switch to transit (they may carpool, detour, or telecommute), defeating the policy.",
        "trap": "Assuming all drivers have high incomes (option B), which is not logically required.",
        "estSeconds": 120
      },
      {
        "id": "pt06_v23",
        "test": 6,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Energy Columnist: Pundits frequently claim that renewable utility Alpha expanded battery storage capacity solely due to state clean energy mandates. **However, utility districts in adjacent provinces subject to identical mandates failed to install grid-scale batteries.** Clearly, regulatory mandates alone were not the primary driver. Rather, **utility Alpha's long-term fixed-price power purchase agreements with industrial clients made capital financing viable where other utilities faced prohibitive financing costs.** What roles do the boldface portions play?",
        "options": [
          "The first is an established claim that the argument aims to refute; the second is an observation that supports the author\u2019s alternative conclusion.",
          "The first is the main conclusion of the argument; the second is a premise offered to defend that conclusion.",
          "The first provides empirical evidence; the second states an intermediate hypothesis rejected by the author.",
          "The first is a prediction; the second is an observation that disproves that prediction.",
          "The first introduces a hypothesis; the second proves that coal adoption never occurred."
        ],
        "answer": "A",
        "explanation": "Boldface 1 presents the conventional orthodoxy that the author sets out to undermine. Boldface 2 describes the persistent water-power cost advantage that supports the author's alternative thesis.",
        "trap": "Selecting option B which confuses the introductory conventional view with the author's own main conclusion.",
        "estSeconds": 120
      },
      {
        "id": "pt06_di01",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "In a data transmission pipeline for renewable energy grids & storage, if $k$ is a positive integer, is $k$ divisible by 8?\n\n(1) $k$ is divisible by 4 and $k$ is even.\n(2) $k^2$ is divisible by 64.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "D",
        "explanation": "Statement (1): Since $k$ is even (divisible by 2) and divisible by 4, and $\\text{LCM}(2, 4) = 8$, $k$ must be divisible by 8. Sufficient.\nStatement (2): If $k^2$ is divisible by 64, then for positive integer $k$, $\\sqrt{k^2} = k$ is divisible by 8. Sufficient.\nTherefore, EACH statement ALONE is sufficient.",
        "trap": "Believing statement (2) allows fractional roots when $k$ is explicitly constrained to be an integer.",
        "estSeconds": 95
      },
      {
        "id": "pt06_di02",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If $a$ and $b$ are non-zero real parameters measuring round-trip efficiency at AeroVolt Energy, is $\\frac{a}{b} > 1$?\n\n(1) $a > b$\n(2) $a b > 0$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "E",
        "explanation": "Statement (1): If $x = 2, y = 1$, $x/y = 2 > 1$. If $x = -1, y = -2$, $x > y$ holds but $x/y = 1/2 < 1$. Insufficient.\nStatement (2): Tells us $x$ and $y$ have the same sign, but gives no relative magnitude. Insufficient.\nTogether: If $x=2, y=1$, $x/y=2 > 1$. If $x=-1, y=-2$, $x>y$ and $xy=2>0$ hold, but $x/y=0.5 < 1$. Two contradictory answers remain possible. Statements (1) and (2) together are NOT sufficient (Answer E).",
        "trap": "Assuming $x$ and $y$ must be positive without testing negative numbers.",
        "estSeconds": 110
      },
      {
        "id": "pt06_di03",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Working at constant rates, how many hours does it take for Module A and Module B in renewable energy grids & storage working together to process 5500 data transactions?\n\n(1) Module A processes 2200 transactions in 2 hours.\n(2) Operating simultaneously, Module A and Module B process 2750 transactions in 2.5 hours.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "B",
        "explanation": "Statement (1) provides only the rate for Module A. Insufficient.\nStatement (2) provides the combined throughput rate directly: Rate $= \\text{Transactions} / \\text{Time}$. With the combined rate known, the time to complete the target volume is uniquely determined. Sufficient.",
        "trap": "Believing individual rates for both modules are required.",
        "estSeconds": 90
      },
      {
        "id": "pt06_di04",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sample $S$ of 5 distinct integers recorded during renewable energy grids & storage testing, is the mean of $S$ greater than the median of $S$?\n\n(1) The 3 smallest integers are 1, 3, and 6.\n(2) The largest integer in $S$ is 60.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "C",
        "explanation": "Statement (1): Median is 6. Upper values could be 7, 8 (mean = 5 < 6) or 7, 50 (mean > 6). Insufficient.\nStatement (2): Gives no information about median or lower values. Insufficient.\nTogether: Elements are $1, 3, 6, d, {35 + test_idx * 5}$ where $6 < d < {35 + test_idx * 5}$. Minimum sum is $1 + 3 + 6 + 7 + {35 + test_idx * 5} = {52 + test_idx * 5}$. Minimum mean is $({52 + test_idx * 5})/5 > 10 > 6$. Since the minimum possible mean is strictly greater than the median 6, the answer is always YES. Sufficient.",
        "trap": "Neglecting to calculate the minimum possible mean under the constraint $d \\ge 7$.",
        "estSeconds: 115": 115,
        "estSeconds": 115
      },
      {
        "id": "pt06_di05",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "Did AeroVolt Energy's division for renewable power grid storage generate an operating net margin of at least $\\$40,000$ on total contract billings of $\\$240,000$?\n\n(1) Total operating expenses were strictly under 65% of contract billings.\n(2) Operating margin exceeded 20% of contract billings.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "Profit = Revenue - Costs. Statement (1): If costs < 65% of revenue, profit > 35% of revenue. 35% of $\\$225,000$ is at least $\\$78,750$, which is strictly greater than $\\$40,000$. Sufficient.\nStatement (2): 20% of $\\$225,000$ is $\\$45,000$. For smaller revenues, 20% might be $\\$30,000$ or $\\$36,000$ (which could allow profit to be $\\$38,000 < \\$40,000$). Thus Statement (2) is not guaranteed sufficient across baseline tests. Statement (1) ALONE is sufficient.",
        "trap": "Assuming statement (2) guarantees clearing $\\$40,000$ without calculating the 20% threshold.",
        "estSeconds": 95
      },
      {
        "id": "pt06_di06",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "If parameter $p$ is an integer recorded during peak megawatt load shifting on vanadium flow battery substation at AeroVolt Energy, is $|p| = p$?\n\n(1) $p^2 = p$\n(2) $p^3 \\ge p$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "$|m| = m$ holds if and only if $m \\ge 0$.\nStatement (1): $m(m - 1) = 0 \\implies m = 0$ or $m = 1$. In both cases, $m \\ge 0$, so $|m| = m$ is definitely true. Sufficient.\nStatement (2): $m^3 - m \\ge 0 \\implies m(m-1)(m+1) \\ge 0$. Integer solutions include $m = -1$ (where $|-1| = 1 \\ne -1$, so NO) as well as $m = 0, 1, 2$ (where YES). Insufficient.\nTherefore, Statement (1) ALONE is sufficient.",
        "trap": "Overlooking $m = -1$ as a valid integer solution to $m^3 \\ge m$.",
        "estSeconds": 105
      },
      {
        "id": "pt06_di07",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Referring to the renewable power station audit, which battery storage division generated the greatest operating profit in dollars?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Renewable Energy Grids & Storage",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-6",
              60,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-6",
              82,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-6",
              48,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-6",
              100,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-6",
              69,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-6",
              63,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The median throughput among units with an Error Rate strictly under 1.0% exceeds 45 k/day. (Yes/No)",
          "Statement 2: The unit with the highest Cost Index also has the highest Error Rate. (Yes/No)",
          "Statement 3: All units with Uptime greater than 99.0% have a Cost Index below 150. (Yes/No)"
        ],
        "answer": "Yes | Yes | Yes",
        "explanation": "Statement 1: Units with error < 1.0% are Alpha, Gamma, Epsilon, Zeta. Throughputs are 45+, 38+, 54+, 48+. Median is (45+48)/2 > 45 k/day -> Yes.\nStatement 2: Unit Delta has Cost Index 180 (highest) and Error Rate 2.1% (highest) -> Yes.\nStatement 3: Units with Uptime > 99.0% are Alpha (110), Gamma (85), Epsilon (125), Zeta (115), all under 150 -> Yes.",
        "trap": "Sorting by the wrong column or taking the mean instead of the median.",
        "estSeconds": 120
      },
      {
        "id": "pt06_di08",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluate operational ranking correlations based on the renewable energy grids & storage table.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Renewable Energy Grids & Storage",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-6",
              60,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-6",
              82,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-6",
              48,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-6",
              100,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-6",
              69,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-6",
              63,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Sorting descending by Throughput yields an identical ranking as sorting descending by Cost Index. (Yes/No)",
          "Statement 2: Exactly three units have an Error Rate strictly below 0.7%. (Yes/No)",
          "Statement 3: Unit Gamma has both the lowest Throughput and the lowest Error Rate. (Yes/No)"
        ],
        "answer": "No | Yes | Yes",
        "explanation": "Statement 1: Delta is highest in both, but Beta (62, 145) vs Epsilon (54, 125) vs Alpha (45, 110) vs Zeta (48, 115) - Zeta throughput is higher than Alpha but Cost Index is 115 vs 110, order varies -> No.\nStatement 2: Units with error < 0.7% are Alpha (0.4), Gamma (0.2), Zeta (0.6) -> exactly three -> Yes.\nStatement 3: Gamma has lowest throughput (38+) and lowest error (0.2%) -> Yes.",
        "trap": "Assuming throughput and cost index correlate with 1.0 rank correlation.",
        "estSeconds": 115
      },
      {
        "id": "pt06_di09",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If the provincial energy storage performance dataset is sorted from lowest to highest by Operating Margin (%), which power substation occupies the median rank?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Renewable Energy Grids & Storage",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-6",
              60,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-6",
              82,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-6",
              48,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-6",
              100,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-6",
              69,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-6",
              63,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Unit Gamma has a Cost Index per throughput unit of less than 2.5. (Yes/No)",
          "Statement 2: The range of Error Rates across all 6 units is strictly greater than 1.8 percentage points. (Yes/No)",
          "Statement 3: More than half of the units have an Uptime exceeding 99.2%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Gamma ratio = 85 / (38+) < 2.5 -> Yes.\nStatement 2: Max error = Delta (2.1%), Min error = Gamma (0.2%). Range = 2.1 - 0.2 = 1.9% > 1.8% -> Yes.\nStatement 3: Units with Uptime > 99.2% are Alpha (99.8), Gamma (99.9), Zeta (99.4) -> 3 out of 6 (wait: exactly half, so strictly more than half is No!) -> Answer: Yes | Yes | No.",
        "trap": "Confusing 'at least half' with 'strictly more than half'.",
        "estSeconds": 125
      },
      {
        "id": "pt06_di10",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Evaluate reliability and risk profiles across units in renewable energy grids & storage.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Renewable Energy Grids & Storage",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-6",
              60,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-6",
              82,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-6",
              48,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-6",
              100,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-6",
              69,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-6",
              63,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The unit with the highest Throughput also has the lowest Uptime. (Yes/No)",
          "Statement 2: Total combined throughput of the two highest units exceeds 130 k/day. (Yes/No)",
          "Statement 3: Every unit with a Cost Index greater than 120 has an Error Rate above 1.0%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Delta has highest throughput (75+) and lowest uptime (97.5%) -> Yes.\nStatement 2: Top two are Delta (75+) and Beta (62+) = 137+ > 130 -> Yes.\nStatement 3: Unit Epsilon has Cost Index 125 (>120) but Error Rate 0.8% (< 1.0%) -> No.",
        "trap": "Overlooking Unit Epsilon's low error rate despite high cost.",
        "estSeconds": 115
      },
      {
        "id": "pt06_di11",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "According to the battery grid storage scatter plot relating chemical R&D with asset ROIC, as R&D grows from 2% to 12%, return generally [Select 1], while beyond 12%, return generally [Select 2].",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Renewable Energy Grids & Storage",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 30
            },
            {
              "x": 20,
              "y": 45
            },
            {
              "x": 30,
              "y": 58
            },
            {
              "x": 40,
              "y": 68
            },
            {
              "x": 50,
              "y": 75
            },
            {
              "x": 60,
              "y": 80
            }
          ]
        },
        "options": [
          "Dropdown 1: The overall relationship between Resource Investment and Productivity Output is [strongly positive | strongly negative | sinusoidal | uncorrelated].",
          "Dropdown 2: As Resource Investment increases beyond $40k, the rate of increase in Productivity Output displays [diminishing marginal returns | increasing exponential growth | negative acceleration | zero slope]."
        ],
        "answer": "strongly positive | diminishing marginal returns",
        "explanation": "Dropdown 1: As investment rises from 10 to 60, output rises consistently from 20+ to 70+ -> strongly positive.\nDropdown 2: Between 10 and 30, slope is ~1.4; between 40 and 60, slope drops to ~0.6 -> diminishing marginal returns.",
        "trap": "Confusing diminishing marginal growth with an absolute decline in output.",
        "estSeconds": 105
      },
      {
        "id": "pt06_di12",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "According to the battery storage plot, approximately what percentage of grid substations with R&D intensity below 6% achieved an ROIC over 20%?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Renewable Energy Grids & Storage",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 30
            },
            {
              "x": 20,
              "y": 45
            },
            {
              "x": 30,
              "y": 58
            },
            {
              "x": 40,
              "y": 68
            },
            {
              "x": 50,
              "y": 75
            },
            {
              "x": 60,
              "y": 80
            }
          ]
        },
        "options": [
          "Dropdown 1: The average marginal gain in output per thousand dollars invested between $10k and $30k is approximately [1.4 points/$k | 2.5 points/$k | 3.5 points/$k | 0.5 points/$k].",
          "Dropdown 2: The point with the highest output-to-investment ratio is at an investment of [$10k | $30k | $50k | $60k]."
        ],
        "answer": "1.4 points/$k | $10k",
        "explanation": "Dropdown 1: Slope = (48 - 20) / (30 - 10) = 28 / 20 = 1.4 points/$k.\nDropdown 2: Ratio y/x: At x=10, y/x = 22/10 = 2.2. At x=60, y/x = 72/60 = 1.2. The highest ratio occurs at the earliest stage ($10k).",
        "trap": "Assuming the highest absolute output point ($60k) has the highest efficiency ratio.",
        "estSeconds": 115
      },
      {
        "id": "pt06_di13",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "According to the battery energy storage plot, the single grid substation identified as the greatest positive outlier is defined by which coordinates?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Renewable Energy Grids & Storage",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 30
            },
            {
              "x": 20,
              "y": 45
            },
            {
              "x": 30,
              "y": 58
            },
            {
              "x": 40,
              "y": 68
            },
            {
              "x": 50,
              "y": 75
            },
            {
              "x": 60,
              "y": 80
            }
          ]
        },
        "options": [
          "Dropdown 1: The median investment level across the 6 observed data points is [$35k | $40k | $45k | $50k].",
          "Dropdown 2: A firm investing $45k would be projected by linear interpolation to produce an output index of approximately [61.5 | 68.0 | 72.5 | 55.0]."
        ],
        "answer": "$35k | 61.5",
        "explanation": "Dropdown 1: Ordered x: 10, 20, 30, 40, 50, 60. Median = (30 + 40)/2 = $35k.\nDropdown 2: Between x=40 (y~58) and x=50 (y~65), midpoint x=45 gives y = (58 + 65)/2 = 61.5.",
        "trap": "Extrapolating using the steep slope from the early segment.",
        "estSeconds": 110
      },
      {
        "id": "pt06_di14",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If an operating facility at AeroVolt Energy reduces its expenditure from 16% down to 10% along the regression curve for round-trip efficiency, what is the expected change in its performance index?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Renewable Energy Grids & Storage",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 30
            },
            {
              "x": 20,
              "y": 45
            },
            {
              "x": 30,
              "y": 58
            },
            {
              "x": 40,
              "y": 68
            },
            {
              "x": 50,
              "y": 75
            },
            {
              "x": 60,
              "y": 80
            }
          ]
        },
        "options": [
          "Dropdown 1: Increasing investment from $50k to $60k yields a percentage increase in output of approximately [7% | 15% | 25% | 35%].",
          "Dropdown 2: If fixed costs require an output index of at least 50 to break even, the minimum necessary investment is approximately [$32k | $22k | $42k | $15k]."
        ],
        "answer": "7% | $32k",
        "explanation": "Dropdown 1: At x=50, y~67. At x=60, y~72. Change = 5 / 67 ~ 7.4%.\nDropdown 2: At x=30, y~48; at x=40, y~58. Output 50 is reached just past $30k (approx $32k).",
        "trap": "Calculating percentage increase based on investment (20%) instead of output (7%).",
        "estSeconds": 115
      },
      {
        "id": "pt06_di15",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "At AeroVolt Energy, a capital allocation of $44 million is split between vanadium flow battery substation (Asset X) and secondary infrastructure (Asset Y). The allocation to Asset X is exactly 3 times the allocation to Asset Y. Select the dollar allocation for Asset X and Asset Y.\n\nValues: Asset X = $33M, Asset Y = $11M.",
        "options": [
          "Grade A: 50 liters",
          "Grade B: 25 liters"
        ],
        "answer": "Grade A = 50 | Grade B = 25",
        "explanation": "Alligation: Ratio of Grade A to Grade B is $|50 - 30| : |30 - 20| = 20 : 10 = 2 : 1$. Total volume is 75 liters. Grade A $= 2/3 \\times 75 = 50$ liters, Grade B $= 1/3 \\times 75 = 25$ liters.",
        "trap": "Reversing the 2:1 ratio between Grade A and Grade B.",
        "estSeconds": 125
      },
      {
        "id": "pt06_di16",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Two parameters $U$ and $V$ in renewable energy grids & storage satisfy the linear system: $2U + 3V = 53$ and $U - V = 4$.\n\nSelect the value of $U$ and the value of $V$ that satisfy both equations.",
        "options": [
          "U: 13",
          "V: 9"
        ],
        "answer": "U = 13 | V = 9",
        "explanation": "Substitute $U = V + 4$: $2(V + 4) + 3V = 5V + 8 = 53 \\implies 5V = 45 \\implies V = 9$. Then $U = 9 + 4 = 13$.",
        "trap": "Sign error when expanding 2(V + 4).",
        "estSeconds: 105": 105,
        "estSeconds": 105
      },
      {
        "id": "pt06_di17",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "At AeroVolt Energy, Pump Alpha fills an emergency containment reservoir for peak megawatt load shifting in 12 hours working alone. Working together, Pump Alpha and Pump Beta fill the reservoir in 7.2 hours. Select the time for Pump Alpha and Pump Beta working alone.",
        "options": [
          "High-Yield Debt: \\$400,000",
          "Treasury Notes: \\$600,000"
        ],
        "answer": "High-Yield = $400,000 | Treasury = $600,000",
        "explanation": "Alligation: Ratio of High-Yield to Treasury is $|3 - 5| : |8 - 5| = 2 : 3$. Fraction in High-Yield is $2/5 = 40\\% = \\$400,000$. Fraction in Treasury is $3/5 = 60\\% = \\$600,000$.",
        "trap": "Inverting the 2:3 ratio to 3:2.",
        "estSeconds": 120
      },
      {
        "id": "pt06_di18",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluating the Project Charter and Financial Audit tabs for AeroVolt Energy, what is the total upfront capital investment required for deploying vanadium flow battery substation across all branch facilities?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Renewable Energy Grids & Storage",
              "content": "Directive 6.4 regarding Renewable Energy Grids & Storage:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 6:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant North only",
          "Plant North and Plant West only",
          "Plant South and Plant West only",
          "Plant North, Plant South, and Plant West",
          "None of the facilities"
        ],
        "answer": "A",
        "explanation": "Tab 1 specifies that a score of at least 90 is required for expedited licensing. Tab 2 shows only Plant North scored >= 90 (score 92). Plant West scored 88 (< 90). Thus, Plant North only qualifies.",
        "trap": "Assuming Plant West qualifies because of its 6-year history (history only grants exemption from review, not expedited licensing).",
        "estSeconds": 120
      },
      {
        "id": "pt06_di19",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Which facility at AeroVolt Energy is subject to mandatory operational review according to the regulatory directive for renewable power grid storage and the audit inspection records?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Renewable Energy Grids & Storage",
              "content": "Directive 6.4 regarding Renewable Energy Grids & Storage:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 6:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant East only",
          "Plant South and Plant East only",
          "Plant South only",
          "Plant North and Plant East only",
          "All four plants"
        ],
        "answer": "A",
        "explanation": "Plants scoring below 85 are Plant South (84) and Plant East (79). However, Tab 1 exempts facilities operating >5 years with zero violations. Plant South has operated 7 years with 0 violations (exempt). Plant East has only 2 years and has a violation, so it is the ONLY plant subject to mandatory review.",
        "trap": "Failing to check Plant South's 7-year zero-violation exemption in Tab 1.",
        "estSeconds": 130
      },
      {
        "id": "pt06_di20",
        "test": 6,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Evaluating information across all three tabs for renewable power grid storage, which strategic conclusion regarding the financial return of deploying vanadium flow battery substation is most strongly supported?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Renewable Energy Grids & Storage",
              "content": "Directive 6.4 regarding Renewable Energy Grids & Storage:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 6:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "No, because it has an active safety violation recorded in the preceding 12 months.",
          "Yes, provided it files the paperwork within 14 business days.",
          "Yes, because its compliance score was within 10 points of the 85 threshold.",
          "No, because only facilities with more than 5 years operating history can file stays.",
          "Yes, because emergency stays are automatically granted to all facilities."
        ],
        "answer": "A",
        "explanation": "Tab 3 explicitly states: 'No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay.' Plant East has 1 safety violation (Tab 2), disqualifying it completely.",
        "trap": "Focusing only on the 14-day filing window without checking the violation disqualification rule.",
        "estSeconds": 115
      }
    ]
  },
  {
    "testNumber": 7,
    "id": "pt_07",
    "title": "Official Focus Mock #7 (Full 64-Q Simulation)",
    "date": "2025-04-24",
    "totalScore": 705,
    "quantScore": 82,
    "verbalScore": 81,
    "dataInsightsScore": 81,
    "structure": {
      "quantQuestions": 21,
      "verbalQuestions": 23,
      "dataInsightsQuestions": 20,
      "total": 64,
      "durationMinutes": 135
    },
    "questions": [
      {
        "id": "pt07_q01",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In telecommunications & distributed computing, a barcode serial integer $n$ satisfies that $n^2 - 1$ is divisible by prime $29$. If $1 < n < 29$, how many integer values can $n$ assume?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "28"
        ],
        "answer": "B",
        "explanation": "Since $n^2 - 1 = (n - 1)(n + 1)$ is divisible by prime 29, by Euclid's lemma either 29 divides $(n - 1)$ or 29 divides $(n + 1)$. Given $1 < n < 29$, $n - 1 < 29$, so 29 cannot divide $n - 1$. For 29 to divide $n + 1$, we must have $n + 1 = 29 \\implies n = 28$. Thus, exactly 1 integer value ($n = 28$) satisfies the condition.",
        "trap": "Assuming both $(n - 1)$ and $(n + 1)$ can yield solutions within the open interval $(1, p)$.",
        "estSeconds": 90
      },
      {
        "id": "pt07_q02",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "At UrbanAutonomy Corp, Fleet Systems Architect monitors two operational units: Primary Unit Alpha completes a full cycle of routing dispatch optimization in 11 hours working alone, whereas Secondary Unit Beta requires 22 hours alone. If both units operate simultaneously at their constant rates to complete the cycle on a shared urban delivery robot fleet, how many hours will they take together?",
        "options": [
          "6.17",
          "6.67",
          "7.17",
          "15.00",
          "7.50"
        ],
        "answer": "B",
        "explanation": "Combined rate $R = 1/10 + 1/20 = 3/20$. Time $T = 1/R = 20/3 = 6.67$ hours.",
        "trap": "Taking the arithmetic average of the two individual times.",
        "estSeconds: 85": 85,
        "estSeconds": 85
      },
      {
        "id": "pt07_q03",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "An autonomous vehicle dealership marks up sensor replacement modules by 20%, then extends corporate fleets a 10% fleet loyalty discount. What net profit percentage over dealer cost is achieved?",
        "options": [
          "5.0%",
          "8.0%",
          "10.0%",
          "12.0%",
          "15.0%"
        ],
        "answer": "B",
        "explanation": "Multiplier $= (1 + 0.2) \\times (1 - 0.1) = 1.0800$. Net profit percentage $= (1.0800 - 1) \\times 100 = 8.0\\%$.",
        "trap": "Subtracting the percentages directly (20% - 10% = 10%).",
        "estSeconds": 90
      },
      {
        "id": "pt07_q04",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a mathematical model tracking routing latency at UrbanAutonomy Corp, the exponent variable $x$ satisfies $3^{2x+1} - $3^{2x-1} = 1417176$. What is the value of $x^2 + x$?",
        "options": [
          "28",
          "30",
          "32",
          "34",
          "35"
        ],
        "answer": "B",
        "explanation": "Factor out $2^{2x-1}$: $2^{2x-1}(2^2 - 1) = 512(2^2 - 1)$. Equating exponents: $2x - 1 = 9 \\implies 2x = 10 \\implies x = 5$. Then $x^2 + x = 5^2 + 5 = 30$.",
        "trap": "Miscalculating the factored term $(base^2 - 1)$.",
        "estSeconds": 100
      },
      {
        "id": "pt07_q05",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Inequalities & Absolute Values",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "During a tolerance check on urban delivery robot fleet measurements at UrbanAutonomy Corp, how many integer values of $k$ satisfy the inequality $|2k - 12| \\le 25$?",
        "options": [
          "23",
          "24",
          "25",
          "26",
          "22"
        ],
        "answer": "B",
        "explanation": "Expand absolute value: $-23 \\le 2k - 11 \\le 23 \\implies -12 \\le 2k \\le 34 \\implies -6.0 \\le k \\le 17.0$. Length of interval for integers is strictly 24.",
        "trap": "Neglecting to include both endpoints when calculating inclusive integer count.",
        "estSeconds": 95
      },
      {
        "id": "pt07_q06",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "An urban delivery fleet measures 7 distinct positive integer package delivery route times in minutes, resulting in a median time of 28 and an average time of 33. What is the longest possible route duration?",
        "options": [
          "167",
          "169",
          "171",
          "173",
          "175"
        ],
        "answer": "C",
        "explanation": "To maximize $x_7$, minimize elements 1, 2, 3, 5, 6. Minimum distinct positive integers: $x_1=1, x_2=2, x_3=3$. Given median $x_4 = 38$. Minimum distinct integers above median: $x_5 = 39, x_6 = 40$. Sum of all 7 integers $= 7 \\times 42 = 294$. Subtracting the 6 minimal values leaves maximum $x_7 = 171$.",
        "trap": "Allowing integers above median to equal the median rather than being strictly distinct.",
        "estSeconds": 115
      },
      {
        "id": "pt07_q07",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "An autonomous fleet safety panel of 4 investigators is selected from 5 robotics software engineers and 4 traffic safety consultants. If at least 2 robotics engineers and at least 2 safety consultants must serve, how many panels can be formed?",
        "options": [
          "50",
          "55",
          "60",
          "65",
          "70"
        ],
        "answer": "C",
        "explanation": "Ways to select 2 hardware engineers from 5: $\\binom{5}{2} = 10$. Ways to select 2 software architects from 4: $\\binom{4}{2} = 6$. Total distinct combinations $= 10 \\times 6 = 60$.",
        "trap": "Adding the combinations instead of multiplying.",
        "estSeconds": 105
      },
      {
        "id": "pt07_q08",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In autonomous fleet dispatch permutations, what is the greatest positive integer $k$ such that $3^k$ divides $65!$?",
        "options": [
          "14",
          "15",
          "16",
          "17",
          "18"
        ],
        "answer": "C",
        "explanation": "Powers of 10 in a factorial are limited by prime factor 5. Using Legendre's formula: $\\lfloor 70/5 \\rfloor + \\lfloor 70/25 \\rfloor = 14 + 2 = 16$. Thus $k = 16$.",
        "trap": "Counting powers of 2 or stopping after first division by 5.",
        "estSeconds": 90
      },
      {
        "id": "pt07_q09",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "An autonomous freight vehicle travels an outbound expressway lane of distance $D$ at 53 mph, and returns at 106 mph. What is the vehicle's average speed in mph across both legs?",
        "options": [
          "64.2",
          "68.0",
          "66.2",
          "62.2",
          "69.5"
        ],
        "answer": "A",
        "explanation": "Average speed over equal distances is the harmonic mean: $V = \\frac{2 s_1 s_2}{s_1 + s_2} = \\frac{2 \\times 52 \\times 84}{136} = 64.2$ mph.",
        "trap": "Choosing the arithmetic mean (option B).",
        "estSeconds": 80
      },
      {
        "id": "pt07_q10",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "An autonomous fleet washing basin holds 75 liters of detergent solution containing 30% active surfactant. How many liters of pure water should be added to achieve a 15% surfactant concentration?",
        "options": [
          "56",
          "58",
          "60",
          "62",
          "64"
        ],
        "answer": "C",
        "explanation": "Solvent mass is constant: $0.20 \\times 60 = 0.10 \\times (60 + w) \\implies 60 + w = 120 \\implies w = 60$ liters.",
        "trap": "Reporting total final volume rather than added water.",
        "estSeconds": 95
      },
      {
        "id": "pt07_q11",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Sequences & Series",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In an arithmetic sequence monitoring telecommunications & distributed computing production batches, the first term is 10 and the common difference between consecutive terms is 3. What is the sum of the first 15 terms of this sequence?",
        "options": [
          "450",
          "457",
          "465",
          "473",
          "480"
        ],
        "answer": "C",
        "explanation": "Sum formula $S_{15} = \\frac{15}{2} [2(10) + 14(3)] = 15 \\times [10 + 7(3)] = 465$.",
        "trap": "Using 15d instead of (n-1)d in the summation formula.",
        "estSeconds": 90
      },
      {
        "id": "pt07_q12",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Overlapping Sets",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Among 160 technical facilities surveyed in telecommunications & distributed computing, 74 have implemented Protocol A, 64 have implemented Protocol B, and 11 have implemented neither. How many facilities have implemented BOTH Protocol A and Protocol B?",
        "options": [
          "-15",
          "-13",
          "-11",
          "-9",
          "-7"
        ],
        "answer": "C",
        "explanation": "Facilities with at least one protocol $= 160 - 11 = 149$. By inclusion-exclusion: $|A \\cap B| = |A| + |B| - |A \\cup B| = 74 + 64 - 149 = -11$.",
        "trap": "Subtracting neither from both sets individually.",
        "estSeconds": 85
      },
      {
        "id": "pt07_q13",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "An autonomous vehicle sensor tray contains 5 red diagnostic leads and 7 blue diagnostic leads. If a software engineer picks 3 leads at random without replacement, what is the probability that exactly 2 are red?",
        "options": [
          "\\frac{14}{36}",
          "\\frac{15}{36}",
          "\\frac{16}{36}",
          "\\frac{17}{36}",
          "\\frac{18}{36}"
        ],
        "answer": "C",
        "explanation": "Ways to draw two compliant parts: $\\binom{5}{2} = 10$. Ways to draw two defective parts: $\\binom{4}{2} = 6$. Total favorable $= 16$. Total unrestricted pairs: $\\binom{9}{2} = 36$. Probability $= 16/36$.",
        "trap": "Assuming sampling with replacement.",
        "estSeconds": 100
      },
      {
        "id": "pt07_q14",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Quadratics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "An autonomous robot braking distance quadratic $x^2 - 22x + K = 0$ has two integer roots differing by 4. What is the value of $K$?",
        "options": [
          "116",
          "118",
          "120",
          "122",
          "124"
        ],
        "answer": "C",
        "explanation": "Let roots be $r_1$ and $r_2$. Sum $r_1 + r_2 = 22$, and difference $r_2 - r_1 = 2$. Solving gives roots $r_1 = 10$ and $r_2 = 12$. By Vieta's formulas, $K = r_1 \\times r_2 = 10 \\times 12 = 120$.",
        "trap": "Adding the roots rather than multiplying for the constant term $K$.",
        "estSeconds": 85
      },
      {
        "id": "pt07_q15",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In an algorithmic encryption routine for autonomous mobility & lidar, what is the units digit of the integer evaluation $7^{71} + 3$?",
        "options": [
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": "C",
        "explanation": "Powers of 7 cycle in units digits: $7^1 \\rightarrow 7, 7^2 \\rightarrow 9, 7^3 \\rightarrow 3, 7^4 \\rightarrow 1$. Exponent $67 \\equiv 3 \\pmod 4$, so $7^{67}$ ends in 3. Adding 3 gives a units digit of $(3 + 3) \\pmod 10 = 6$.",
        "trap": "Failing to apply base-4 cyclicity to the exponent.",
        "estSeconds": 80
      },
      {
        "id": "pt07_q16",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Coordinate & Analytical Geometry",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In a Cartesian telemetry grid mapping urban delivery robot fleet coordinates for UrbanAutonomy Corp, line $L_1$ passes through $(0, 12)$ and $(10, 0)$. If perpendicular line $L_2$ intersects the origin $(0, 0)$, what is the slope of line $L_2$?",
        "options": [
          "\\frac{9}{11}",
          "-\\frac{9}{11}",
          "\\frac{11}{9}",
          "-\\frac{11}{9}",
          "1"
        ],
        "answer": "A",
        "explanation": "Slope of $L_1$ is $m_1 = \\frac{0 - 11}{9 - 0} = -\\frac{11}{9}$. Perpendicular slope $m_2 = -1/m_1 = \\frac{9}{11}$.",
        "trap": "Inverting without negating (option B or C).",
        "estSeconds: 75": 75,
        "estSeconds": 75
      },
      {
        "id": "pt07_q17",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sensor calibration test in telecommunications & distributed computing, the standard deviation of pressure readings was 4.0 psi. If each reading is multiplied by 1.25 and then decreased by 3.5 psi, what is the standard deviation of the transformed readings in psi?",
        "options": [
          "1.50",
          "5.00",
          "4.00",
          "8.50",
          "6.00"
        ],
        "answer": "B",
        "explanation": "Standard deviation is unaffected by the subtraction of a constant (-3.5), but scales by $|1.25|$: $\\sigma_{new} = 1.25 \\times 4.0 = 5.00$ psi.",
        "trap": "Subtracting 3.5 from the standard deviation (option A).",
        "estSeconds": 70
      },
      {
        "id": "pt07_q18",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In autonomous mobility & lidar, replacement parts for urban delivery robot fleet at UrbanAutonomy Corp are packaged strictly in quantities of 5 or 8 units. What is the greatest integer number of units that cannot be assembled using non-negative combinations of these packages?",
        "options": [
          "15",
          "16",
          "17",
          "18",
          "19"
        ],
        "answer": "C",
        "explanation": "By the Frobenius Coin Formula for coprime integers $a$ and $b$, the largest non-constructible integer is $ab - a - b = (4)(7) - 4 - 7 = 17$.",
        "trap": "Computing ab directly without subtracting (a + b).",
        "estSeconds": 110
      },
      {
        "id": "pt07_q19",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "When the two digits of autonomous vehicle route identifier $N$ are swapped, the resulting integer is 27 greater than $N$. What is the difference between the units digit and the tens digit of $N$?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": "C",
        "explanation": "$(10B + A) - (10A + B) = 9(B - A) = 18 \\implies B - A = 2$.",
        "trap": "Confusing (B - A) with (A - B).",
        "estSeconds": 75
      },
      {
        "id": "pt07_q20",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A capital expenditure allocation of $\\$10,000$ in telecommunications & distributed computing appreciates at an annual rate of 10% compounded semi-annually. What is the total accumulated interest after 1 year?",
        "options": [
          "\\$1,000",
          "\\$1,025",
          "\\$1,050",
          "\\$1,100",
          "\\$1,125"
        ],
        "answer": "B",
        "explanation": "Semi-annual rate is 5% over 2 periods. Multiplier is $(1.05)^2 = 1.1025$. Interest $= 10000 \\times 0.1025 = \\$1,025$.",
        "trap": "Calculating simple interest at 10% (option A).",
        "estSeconds": 90
      },
      {
        "id": "pt07_q21",
        "test": 7,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "For all positive real numbers $u$ and $v$ modeling routing latency at UrbanAutonomy Corp, an operational operator $\\star$ is defined by $u \\star v = \\frac{u^2 - v^2}{u - v}$. What is the numerical value of $13 \\star 3$?",
        "options": [
          "\\frac{4}{2}",
          "\\frac{4}{3}",
          "\\frac{4}{4}",
          "4",
          "1"
        ],
        "answer": "B",
        "explanation": "$4 \\diamond 4 = \\frac{4 \\times 4}{4 + 4 + 4} = \\frac{4^2}{3(4)} = \\frac{4}{3}$.",
        "trap": "Adding the constants in the denominator incorrectly.",
        "estSeconds": 85
      },
      {
        "id": "pt07_v01",
        "test": 7,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 6,
        "passage": "Marine chemical equilibrium models generally predict that rising atmospheric carbon dioxide levels will lower seawater pH, decreasing carbonate ion saturation and halting the biomineralization of calcium carbonate skeletons by scleractinian corals. Lab experiments with synthetic seawater routinely demonstrate skeletal dissolution below critical saturation thresholds.\n\nIn situ ecological studies of natural volcanic CO2 seeps, however, demonstrate that certain reef-building coral species maintain robust calcification rates despite severely acidified surrounding waters. These resilient corals actively pump protons out of their internal sub-calicoblastic calcifying fluid using specialized ATP-dependent enzyme complexes, maintaining an elevated internal pH that supports continued aragonite skeleton precipitation at the expense of higher metabolic energy expenditure.",
        "stem": "The primary purpose of the passage on coral calcification & ocean acidification buffering is to:",
        "options": [
          "Refute an established scientific doctrine by demonstrating that earlier measurements were entirely fraudulent.",
          "Challenge a traditional foundational model by presenting recent empirical evidence that supports an alternative paradigm.",
          "Reconcile two competing historical hypotheses by proposing a hybrid theoretical compromise.",
          "Advocate for the immediate cessation of field testing until biochemical instruments are standardized.",
          "Prove that evolutionary biological adaptations occur exclusively through physical genomic sequence alterations."
        ],
        "answer": "B",
        "explanation": "The passage outlines a traditional, long-standing theoretical assumption in its opening paragraph, then introduces modern empirical methodologies that challenge that framework and suggest a more dynamic mechanism.",
        "trap": "Selecting option A, which uses extreme, accusatory language ('entirely fraudulent') unsupported by the text.",
        "estSeconds": 100
      },
      {
        "id": "pt07_v02",
        "test": 7,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Marine chemical equilibrium models generally predict that rising atmospheric carbon dioxide levels will lower seawater pH, decreasing carbonate ion saturation and halting the biomineralization of calcium carbonate skeletons by scleractinian corals. Lab experiments with synthetic seawater routinely demonstrate skeletal dissolution below critical saturation thresholds.\n\nIn situ ecological studies of natural volcanic CO2 seeps, however, demonstrate that certain reef-building coral species maintain robust calcification rates despite severely acidified surrounding waters. These resilient corals actively pump protons out of their internal sub-calicoblastic calcifying fluid using specialized ATP-dependent enzyme complexes, maintaining an elevated internal pH that supports continued aragonite skeleton precipitation at the expense of higher metabolic energy expenditure.",
        "stem": "It can be inferred from the passage on coral calcification & ocean acidification buffering that proponents of the earlier model assumed that:",
        "options": [
          "Biological systems exhibit extensive behavioral plasticity when subjected to environmental shifts.",
          "Observed physical phenomena were governed primarily by static or localized equilibrium constraints.",
          "Molecular sequencing technologies would permanently confirm traditional observational hypotheses.",
          "Nutrient availability was completely uniform across all ecological micro-habitats.",
          "Adaptive modifications could be transmitted across generations without physical nucleotide changes."
        ],
        "answer": "B",
        "explanation": "The passage notes that the classical model assumed static, rigid constraints (e.g., rigid niche partitioning, exclusive nucleotide dependence, or uniform competition) before modern dynamic evidence emerged.",
        "trap": "Confusing the revisionist perspective with the traditional hypothesis being evaluated.",
        "estSeconds": 110
      },
      {
        "id": "pt07_v03",
        "test": 7,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "Marine chemical equilibrium models generally predict that rising atmospheric carbon dioxide levels will lower seawater pH, decreasing carbonate ion saturation and halting the biomineralization of calcium carbonate skeletons by scleractinian corals. Lab experiments with synthetic seawater routinely demonstrate skeletal dissolution below critical saturation thresholds.\n\nIn situ ecological studies of natural volcanic CO2 seeps, however, demonstrate that certain reef-building coral species maintain robust calcification rates despite severely acidified surrounding waters. These resilient corals actively pump protons out of their internal sub-calicoblastic calcifying fluid using specialized ATP-dependent enzyme complexes, maintaining an elevated internal pH that supports continued aragonite skeleton precipitation at the expense of higher metabolic energy expenditure.",
        "stem": "According to the second paragraph of the passage on coral calcification & ocean acidification buffering, the newly discovered mechanism is significant primarily because it:",
        "options": [
          "Eliminates all scientific uncertainty surrounding global atmospheric convection.",
          "Demonstrates that biological entities can adapt or function through pathways previously deemed impossible or secondary.",
          "Proves that evolutionary mutations occur at a constant mathematical rate across geological epochs.",
          "Forces commercial enterprises to halt exploratory drilling operations immediately.",
          "Refutes the universal applicability of thermodynamic physical laws."
        ],
        "answer": "B",
        "explanation": "Paragraph 2 reveals an independent or dynamic pathway (e.g. chemolithoautotrophy, epigenetic inheritance, leading-edge vortices, or mycorrhizal resource sharing) that classical science deemed impossible or minor.",
        "trap": "Selecting an overly grandiose claim that the finding overturns fundamental thermodynamic laws (option E).",
        "estSeconds": 95
      },
      {
        "id": "pt07_v04",
        "test": 7,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Marine chemical equilibrium models generally predict that rising atmospheric carbon dioxide levels will lower seawater pH, decreasing carbonate ion saturation and halting the biomineralization of calcium carbonate skeletons by scleractinian corals. Lab experiments with synthetic seawater routinely demonstrate skeletal dissolution below critical saturation thresholds.\n\nIn situ ecological studies of natural volcanic CO2 seeps, however, demonstrate that certain reef-building coral species maintain robust calcification rates despite severely acidified surrounding waters. These resilient corals actively pump protons out of their internal sub-calicoblastic calcifying fluid using specialized ATP-dependent enzyme complexes, maintaining an elevated internal pH that supports continued aragonite skeleton precipitation at the expense of higher metabolic energy expenditure.",
        "stem": "The author\u2019s attitude toward the traditional scientific framework in coral calcification & ocean acidification buffering can best be described as:",
        "options": [
          "Uncompromisingly hostile and dismissive of historical scholars.",
          "Respectful of its historical role while emphasizing its conceptual limitations in light of recent findings.",
          "Enthusiastically supportive of its continuing supremacy over modern data.",
          "Indifferent to its theoretical and practical consequences.",
          "Skeptical of whether any scientific paradigm can ever be empirically tested."
        ],
        "answer": "B",
        "explanation": "The author treats the historical paradigm with measured academic respect ('long held', 'classical framework') while clearly identifying its empirical limitations.",
        "trap": "Choosing an exaggerated emotional descriptor like hostile or indifferent.",
        "estSeconds": 100
      },
      {
        "id": "pt07_v05",
        "test": 7,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "Marine chemical equilibrium models generally predict that rising atmospheric carbon dioxide levels will lower seawater pH, decreasing carbonate ion saturation and halting the biomineralization of calcium carbonate skeletons by scleractinian corals. Lab experiments with synthetic seawater routinely demonstrate skeletal dissolution below critical saturation thresholds.\n\nIn situ ecological studies of natural volcanic CO2 seeps, however, demonstrate that certain reef-building coral species maintain robust calcification rates despite severely acidified surrounding waters. These resilient corals actively pump protons out of their internal sub-calicoblastic calcifying fluid using specialized ATP-dependent enzyme complexes, maintaining an elevated internal pH that supports continued aragonite skeleton precipitation at the expense of higher metabolic energy expenditure.",
        "stem": "In the analysis of terminal Pleistocene megafaunal extinctions, which sedimentary ancient DNA technique demonstrated herbivore collapse preceding human Clovis horizons?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on coral calcification & ocean acidification buffering is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt07_v06",
        "test": 7,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 8,
        "passage": "Marine chemical equilibrium models generally predict that rising atmospheric carbon dioxide levels will lower seawater pH, decreasing carbonate ion saturation and halting the biomineralization of calcium carbonate skeletons by scleractinian corals. Lab experiments with synthetic seawater routinely demonstrate skeletal dissolution below critical saturation thresholds.\n\nIn situ ecological studies of natural volcanic CO2 seeps, however, demonstrate that certain reef-building coral species maintain robust calcification rates despite severely acidified surrounding waters. These resilient corals actively pump protons out of their internal sub-calicoblastic calcifying fluid using specialized ATP-dependent enzyme complexes, maintaining an elevated internal pH that supports continued aragonite skeleton precipitation at the expense of higher metabolic energy expenditure.",
        "stem": "The author of the passage would be most likely to support which statement regarding the primary demographic trigger of Pleistocene faunal collapse?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on coral calcification & ocean acidification buffering is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt07_v07",
        "test": 7,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 9,
        "passage": "Marine chemical equilibrium models generally predict that rising atmospheric carbon dioxide levels will lower seawater pH, decreasing carbonate ion saturation and halting the biomineralization of calcium carbonate skeletons by scleractinian corals. Lab experiments with synthetic seawater routinely demonstrate skeletal dissolution below critical saturation thresholds.\n\nIn situ ecological studies of natural volcanic CO2 seeps, however, demonstrate that certain reef-building coral species maintain robust calcification rates despite severely acidified surrounding waters. These resilient corals actively pump protons out of their internal sub-calicoblastic calcifying fluid using specialized ATP-dependent enzyme complexes, maintaining an elevated internal pH that supports continued aragonite skeleton precipitation at the expense of higher metabolic energy expenditure.",
        "stem": "Which of the following best characterizes the rhetorical organization and logical progression of the passage analyzing autonomous mobility & lidar?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on coral calcification & ocean acidification buffering is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt07_v08",
        "test": 7,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "Marine chemical equilibrium models generally predict that rising atmospheric carbon dioxide levels will lower seawater pH, decreasing carbonate ion saturation and halting the biomineralization of calcium carbonate skeletons by scleractinian corals. Lab experiments with synthetic seawater routinely demonstrate skeletal dissolution below critical saturation thresholds.\n\nIn situ ecological studies of natural volcanic CO2 seeps, however, demonstrate that certain reef-building coral species maintain robust calcification rates despite severely acidified surrounding waters. These resilient corals actively pump protons out of their internal sub-calicoblastic calcifying fluid using specialized ATP-dependent enzyme complexes, maintaining an elevated internal pH that supports continued aragonite skeleton precipitation at the expense of higher metabolic energy expenditure.",
        "stem": "In the context of the second paragraph of the passage on autonomous mobility & lidar, the author's primary analytical focus centers on:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on coral calcification & ocean acidification buffering is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt07_v09",
        "test": 7,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Marine chemical equilibrium models generally predict that rising atmospheric carbon dioxide levels will lower seawater pH, decreasing carbonate ion saturation and halting the biomineralization of calcium carbonate skeletons by scleractinian corals. Lab experiments with synthetic seawater routinely demonstrate skeletal dissolution below critical saturation thresholds.\n\nIn situ ecological studies of natural volcanic CO2 seeps, however, demonstrate that certain reef-building coral species maintain robust calcification rates despite severely acidified surrounding waters. These resilient corals actively pump protons out of their internal sub-calicoblastic calcifying fluid using specialized ATP-dependent enzyme complexes, maintaining an elevated internal pH that supports continued aragonite skeleton precipitation at the expense of higher metabolic energy expenditure.",
        "stem": "The author introduces competing hypotheses and potential criticisms in the discussion of autonomous mobility & lidar primarily in order to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on coral calcification & ocean acidification buffering is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt07_v10",
        "test": 7,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 9,
        "passage": "Marine chemical equilibrium models generally predict that rising atmospheric carbon dioxide levels will lower seawater pH, decreasing carbonate ion saturation and halting the biomineralization of calcium carbonate skeletons by scleractinian corals. Lab experiments with synthetic seawater routinely demonstrate skeletal dissolution below critical saturation thresholds.\n\nIn situ ecological studies of natural volcanic CO2 seeps, however, demonstrate that certain reef-building coral species maintain robust calcification rates despite severely acidified surrounding waters. These resilient corals actively pump protons out of their internal sub-calicoblastic calcifying fluid using specialized ATP-dependent enzyme complexes, maintaining an elevated internal pH that supports continued aragonite skeleton precipitation at the expense of higher metabolic energy expenditure.",
        "stem": "Based on the sedimentary sedaDNA evidence, how would paleontologists evaluate sudden megafaunal collapses observed in isolated island ecosystems lacking human hunters?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on coral calcification & ocean acidification buffering is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt07_v11",
        "test": 7,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "Marine chemical equilibrium models generally predict that rising atmospheric carbon dioxide levels will lower seawater pH, decreasing carbonate ion saturation and halting the biomineralization of calcium carbonate skeletons by scleractinian corals. Lab experiments with synthetic seawater routinely demonstrate skeletal dissolution below critical saturation thresholds.\n\nIn situ ecological studies of natural volcanic CO2 seeps, however, demonstrate that certain reef-building coral species maintain robust calcification rates despite severely acidified surrounding waters. These resilient corals actively pump protons out of their internal sub-calicoblastic calcifying fluid using specialized ATP-dependent enzyme complexes, maintaining an elevated internal pH that supports continued aragonite skeleton precipitation at the expense of higher metabolic energy expenditure.",
        "stem": "The passage indicates that future scientific and operational frameworks in autonomous mobility & lidar will be required to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on coral calcification & ocean acidification buffering is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt07_v12",
        "test": 7,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Fleet Systems Architect at UrbanAutonomy Corp: \"Deploying urban delivery robot fleet will enable our division to optimize routing latency within twelve months. Therefore, the executive steering committee must approve our funding request without delay.\"\n\nWhich of the following is an unstated assumption upon which the fleet systems architect's argument depends?",
        "options": [
          "The policy will not inadvertently trigger pre-existing urban corporate density that cancels out the expected gains.",
          "The capital allocation required is strictly less than any expenditure approved in the prior fiscal year.",
          "No neighboring jurisdictions have considered implementing similar regulatory policies.",
          "The personnel tasked with enforcing the policy have completed postgraduate compliance degrees.",
          "Public opinion surveys indicate universal consumer enthusiasm for the initiative."
        ],
        "answer": "A",
        "explanation": "Negation test: If the policy DOES trigger pre-existing urban corporate density that cancels out the expected gains, the goal of regional economic GDP growth will fail, collapsing the argument.",
        "trap": "Focusing on administrative trivia (degree qualifications) or budget comparisons.",
        "estSeconds": 115
      },
      {
        "id": "pt07_v13",
        "test": 7,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Operations Analyst at UrbanAutonomy Corp: \"A three-month pilot deployment of urban delivery robot fleet in region Alpha yielded a 25% improvement in routing latency. This empirical result establishes that urban delivery robot fleet was the direct causal driver of the observed efficiency gain.\"\n\nWhich of the following, if true, most seriously undermines the analyst's causal conclusion?",
        "options": [
          "Test district Alpha simultaneously experienced a major external demographic shift that naturally produces high baseline performance.",
          "The software utilized to compile test results was upgraded three weeks prior to the pilot rollout.",
          "Several junior employees in district Alpha reported working five additional overtime hours during the pilot.",
          "The cost of the pilot study was covered by a philanthropic research grant rather than operating revenue.",
          "Competing firms in the same industry have not yet published their quarterly operational statistics."
        ],
        "answer": "A",
        "explanation": "Introducing an external confounding variable (simultaneous demographic shift) directly attacks the causal attribution made by the consultant.",
        "trap": "Pointing out that the pilot was grant-funded, which affects replication finances but not the validity of the pilot's causal data.",
        "estSeconds": 110
      },
      {
        "id": "pt07_v14",
        "test": 7,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Strategy Director at UrbanAutonomy Corp: \"Allocating capital toward urban delivery robot fleet represents the most effective strategic pathway for our firm to expand routing latency.\"\n\nWhich of the following, if true, provides the strongest corroborating evidence for the director's assertion?",
        "options": [
          "In extensive blind controlled trials across diverse industry segments, organizations adopting Rural Fiber Optic Grants consistently outperformed control groups on regional economic GDP growth.",
          "The strategic planner recently completed an executive leadership certification at an accredited business school.",
          "The vendor supplying the hardware for the policy offers a 30-day money-back guarantee.",
          "Several trade journals recently featured editorial articles discussing emerging regulatory trends.",
          "The policy requires no alterations to the firm's existing corporate legal structure."
        ],
        "answer": "A",
        "explanation": "Independent controlled trials demonstrating that the policy consistently beats control groups across diverse segments provides robust causal validation.",
        "trap": "Relying on the planner's credentials (ad hominem support) rather than empirical evidence.",
        "estSeconds": 100
      },
      {
        "id": "pt07_v15",
        "test": 7,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Transit Safety Auditor: At UrbanAutonomy Corp, all route expansions for autonomous delivery fleets require written authorization from the Fleet Systems Architect. Every authorized route expansion must undergo a pedestrian safety inspection unless it operates strictly inside private indoor industrial complexes. Expansion Delta was authorized but did not receive a pedestrian safety inspection. If true, which must be true?",
        "options": [
          "The first describes an impending regulatory proposal; the second introduces evidence that undermines an objection to that proposal.",
          "The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.",
          "The first is an assumption underlying the industry objection; the second is the analyst\u2019s primary thesis.",
          "The first provides empirical evidence; the second states an intermediate conclusion rejected by the author.",
          "The first introduces a claim the author accepts; the second defends a counter-argument."
        ],
        "answer": "A",
        "explanation": "Boldface 1 describes the regulatory initiative being debated. Boldface 2 presents empirical compliance cost data that directly counters the lobbyists' objection.",
        "trap": "Confusing Boldface 1 with the author's personal conclusion (which appears in the final sentence).",
        "estSeconds": 125
      },
      {
        "id": "pt07_v16",
        "test": 7,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Robotics Dispatch Lead: To decrease urban delivery collisions, the fleet operator suggests installing dual 360-degree lidar sensors on all autonomous carts. Which of the following evaluations is most critical?",
        "options": [
          "Whether the monetary benefits realized from regional economic GDP growth exceed the ongoing compliance and operational costs associated with Rural Fiber Optic Grants.",
          "Whether participating organizations display corporate logos on public transit shelters.",
          "How many years the auditor has worked in the regional auditing bureau.",
          "Whether similar policies were debated by legislative committees during the prior decade.",
          "Whether employee satisfaction surveys are conducted semi-annually or annually."
        ],
        "answer": "A",
        "explanation": "Net return on capital is defined as Net Financial Benefits minus Total Costs. Determining whether revenue gains exceed operational costs is decisive.",
        "trap": "Choosing historical trivia or auditor tenure, which do not influence the mathematical financial return.",
        "estSeconds": 110
      },
      {
        "id": "pt07_v17",
        "test": 7,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Urban Planning Historian: Historians long asserted that nineteenth-century suburbanization was driven by streetcar electrification. **Cadastral land deed registries prove that speculative residential land subdivision preceded streetcar line construction by over a decade.** Transit historians argue tracks determined neighborhoods. Yet municipal records prove housing lots were platted first; **speculative real estate finance was the primary initiator of urban peripheral growth.** What roles do the boldface portions play?",
        "options": [
          "Rapid organic growth in commercial activity created new baseline volume that would have severely degraded performance in the absence of the subsidies.",
          "The currency in which subsidies were disbursed remained stable on international currency exchange markets.",
          "Several administrative assistants retired during the middle of the fiscal quarter.",
          "The auditing agency used computerized spreadsheets rather than handwritten paper ledgers.",
          "The subsidies were announced during a nationally televised press conference."
        ],
        "answer": "A",
        "explanation": "A powerful counteracting upward pressure (organic commercial growth) would have caused a steep deterioration; the policy succeeded in keeping metrics flat against a worsening baseline.",
        "trap": "Focusing on accounting ledger format (option D), which explains no operational dynamics.",
        "estSeconds": 105
      },
      {
        "id": "pt07_v18",
        "test": 7,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Safety Officer at UrbanAutonomy Corp: Over the past three quarters, UrbanAutonomy Corp equipped 90% of all urban delivery robot fleet units with automated proximity sensors. Yet despite this safety upgrade, reported workplace minor incident rates in autonomous mobility & lidar increased by 14% over the same timeframe.\n\nWhich of the following, if true, most helps to resolve the apparent discrepancy described above?",
        "options": [
          "Mistakes a necessary condition for a sufficient condition.",
          "Attacks the personal moral character of corporate executives.",
          "Relies on circular logic by defining performance as adoption of the policy.",
          "Fails to specify the exact percentage return of the market index.",
          "Assumes that corporate profitability is the sole measure of human happiness."
        ],
        "answer": "A",
        "explanation": "The premise shows that adopting the policy may be necessary to avoid failure, but that does not mean adoption is sufficient to guarantee market outperformance.",
        "trap": "Selecting option C (circular logic) when the formal flaw is affirming the consequent / confusing necessary and sufficient conditions.",
        "estSeconds": 115
      },
      {
        "id": "pt07_v19",
        "test": 7,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Fleet Director: Every corporate client who rated our autonomous delivery fleet 'exceptional' booked at least four recurring freight dispatches weekly. Clients booking fewer dispatches gave lower ratings. Therefore, to raise client ratings, we should require four weekly bookings. The director's reasoning is vulnerable because it:",
        "options": [
          "Some facilities in Province 7 are NOT tier-1 manufacturing facilities.",
          "All facilities in Province 7 maintain ISO-14001 certification.",
          "No tier-1 manufacturing facility is located in Province 7.",
          "Every facility that lacks ISO-14001 certification operates uncalibrated combustion chambers.",
          "Province 7 has the highest industrial energy consumption in the nation."
        ],
        "answer": "A",
        "explanation": "There exist facilities in Province X with uncalibrated chambers. None of these can have ISO-14001 certification (by statement 2). Since all tier-1 facilities must have ISO-14001 certification, these uncertified facilities in Province X cannot be tier-1 facilities.",
        "trap": "Concluding that NO tier-1 facilities exist in Province X (option C), which oversteps the premises.",
        "estSeconds": 110
      },
      {
        "id": "pt07_v20",
        "test": 7,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Autonomous Mobility VP: Our company plans to install forward-looking thermal imaging cameras on autonomous delivery trucks to improve nighttime pedestrian detection. Critics argue sensor fusion adds computational overhead. However, thermal cameras reduce nighttime classification false-negatives by 70%. Which of the following provides the strongest support?",
        "options": [
          "Concurrently with the predator removal, the reserve experienced a massive cyclical emergence of nutrient-rich prey that provided unprecedented food abundance.",
          "Target species construct nests in deciduous trees as well as evergreen shrubs.",
          "Invasive predators were introduced to the continent by European settlers in the eighteenth century.",
          "Volunteers conducted population counts using standard 10x binoculars.",
          "Several nearby urban parks also have small populations of the same species."
        ],
        "answer": "A",
        "explanation": "The simultaneous explosion of nutrient-rich cicada prey provides an overwhelming alternative causal explanation for the surge in reproduction.",
        "trap": "Noting the historical origins of predators, which is irrelevant to current breeding dynamics.",
        "estSeconds": 115
      },
      {
        "id": "pt07_v21",
        "test": 7,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Fleet Operations Head: Last quarter, our maintenance shop doubled brake caliper inspections on delivery vans in depot Alpha, and roadside brake failures dropped by 35%. This proves that doubling caliper inspections should be enacted across all logistics depots. Which of the following most seriously calls into question the head's conclusion?",
        "options": [
          "The patient case mix and medical complexity in Ward 7 are representative of clinical departments across the entire hospital system.",
          "The platform software runs on standard desktop workstations running Windows 11.",
          "Physicians in Ward 7 completed an online feedback survey regarding user satisfaction.",
          "The hospital's malpractice insurance premium is reviewed annually in November.",
          "Medical transcriptionists previously belonged to a regional healthcare labor union."
        ],
        "answer": "A",
        "explanation": "Confirming that the test clinic is representative demonstrates that the 40% error reduction will likely replicate across other hospital departments.",
        "trap": "Citing IT workstation compatibility (option B), which is convenient but does not prove clinical effectiveness.",
        "estSeconds": 100
      },
      {
        "id": "pt07_v22",
        "test": 7,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Urban Wildlife Specialist: To protect nocturnal urban bats roosting in our delivery fleet logistics depot, engineers dimmed all outdoor security floodlights during dawn and dusk feeding hours. Ecologists project urban bat colony sizes will increase. Which of the following is an assumption required by the projection?",
        "options": [
          "The public subway system possesses sufficient train capacity to accommodate the surge of diverted commuters without causing severe overcrowding that deters ridership.",
          "All private automobile drivers earn incomes above the national median household threshold.",
          "City parking meters generate less revenue than public transit fareboxes.",
          "Bicycle sharing programs will experience a corresponding increase in ridership.",
          "Municipal road paving projects are financed through state gasoline excise taxes."
        ],
        "answer": "A",
        "explanation": "Negation test: If the subway lacks capacity and overcrowding becomes unmanageable, drivers will not switch to transit (they may carpool, detour, or telecommute), defeating the policy.",
        "trap": "Assuming all drivers have high incomes (option B), which is not logically required.",
        "estSeconds": 120
      },
      {
        "id": "pt07_v23",
        "test": 7,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Logistics Columnist: Trade analysts frequently contend that autonomous freight fleet Alpha captured market share solely by lowering per-mile freight rates. **However, competing autonomous trucking fleets that offered even lower freight rates went bankrupt within eighteen months.** Clearly, rate discounts were not the decisive factor. Rather, **fleet Alpha's proprietary dynamic dispatch algorithms and automated depot turnaround facilities achieved vehicle utilization rates that competitors could not match.** What roles do the boldface portions play?",
        "options": [
          "The first is an established claim that the argument aims to refute; the second is an observation that supports the author\u2019s alternative conclusion.",
          "The first is the main conclusion of the argument; the second is a premise offered to defend that conclusion.",
          "The first provides empirical evidence; the second states an intermediate hypothesis rejected by the author.",
          "The first is a prediction; the second is an observation that disproves that prediction.",
          "The first introduces a hypothesis; the second proves that coal adoption never occurred."
        ],
        "answer": "A",
        "explanation": "Boldface 1 presents the conventional orthodoxy that the author sets out to undermine. Boldface 2 describes the persistent water-power cost advantage that supports the author's alternative thesis.",
        "trap": "Selecting option B which confuses the introductory conventional view with the author's own main conclusion.",
        "estSeconds": 120
      },
      {
        "id": "pt07_di01",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "In a data transmission pipeline for telecommunications & distributed computing, if $k$ is a positive integer, is $k$ divisible by 10?\n\n(1) $k$ is divisible by 5 and $k$ is even.\n(2) $k^2$ is divisible by 100.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "D",
        "explanation": "Statement (1): Since $k$ is even (divisible by 2) and divisible by 5, and $\\text{LCM}(2, 5) = 10$, $k$ must be divisible by 10. Sufficient.\nStatement (2): If $k^2$ is divisible by 100, then for positive integer $k$, $\\sqrt{k^2} = k$ is divisible by 10. Sufficient.\nTherefore, EACH statement ALONE is sufficient.",
        "trap": "Believing statement (2) allows fractional roots when $k$ is explicitly constrained to be an integer.",
        "estSeconds": 95
      },
      {
        "id": "pt07_di02",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If $a$ and $b$ are non-zero real parameters measuring routing latency at UrbanAutonomy Corp, is $\\frac{a}{b} > 1$?\n\n(1) $a > b$\n(2) $a b > 0$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "E",
        "explanation": "Statement (1): If $x = 2, y = 1$, $x/y = 2 > 1$. If $x = -1, y = -2$, $x > y$ holds but $x/y = 1/2 < 1$. Insufficient.\nStatement (2): Tells us $x$ and $y$ have the same sign, but gives no relative magnitude. Insufficient.\nTogether: If $x=2, y=1$, $x/y=2 > 1$. If $x=-1, y=-2$, $x>y$ and $xy=2>0$ hold, but $x/y=0.5 < 1$. Two contradictory answers remain possible. Statements (1) and (2) together are NOT sufficient (Answer E).",
        "trap": "Assuming $x$ and $y$ must be positive without testing negative numbers.",
        "estSeconds": 110
      },
      {
        "id": "pt07_di03",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Working at constant rates, how many hours does it take for Module A and Module B in telecommunications & distributed computing working together to process 6000 data transactions?\n\n(1) Module A processes 2400 transactions in 2 hours.\n(2) Operating simultaneously, Module A and Module B process 3000 transactions in 2.5 hours.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "B",
        "explanation": "Statement (1) provides only the rate for Module A. Insufficient.\nStatement (2) provides the combined throughput rate directly: Rate $= \\text{Transactions} / \\text{Time}$. With the combined rate known, the time to complete the target volume is uniquely determined. Sufficient.",
        "trap": "Believing individual rates for both modules are required.",
        "estSeconds": 90
      },
      {
        "id": "pt07_di04",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sample $S$ of 5 distinct integers recorded during telecommunications & distributed computing testing, is the mean of $S$ greater than the median of $S$?\n\n(1) The 3 smallest integers are 1, 3, and 6.\n(2) The largest integer in $S$ is 65.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "C",
        "explanation": "Statement (1): Median is 6. Upper values could be 7, 8 (mean = 5 < 6) or 7, 50 (mean > 6). Insufficient.\nStatement (2): Gives no information about median or lower values. Insufficient.\nTogether: Elements are $1, 3, 6, d, {35 + test_idx * 5}$ where $6 < d < {35 + test_idx * 5}$. Minimum sum is $1 + 3 + 6 + 7 + {35 + test_idx * 5} = {52 + test_idx * 5}$. Minimum mean is $({52 + test_idx * 5})/5 > 10 > 6$. Since the minimum possible mean is strictly greater than the median 6, the answer is always YES. Sufficient.",
        "trap": "Neglecting to calculate the minimum possible mean under the constraint $d \\ge 7$.",
        "estSeconds: 115": 115,
        "estSeconds": 115
      },
      {
        "id": "pt07_di05",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "Did UrbanAutonomy Corp's division for autonomous mobility & lidar generate an operating net margin of at least $\\$40,000$ on total contract billings of $\\$255,000$?\n\n(1) Total operating expenses were strictly under 65% of contract billings.\n(2) Operating margin exceeded 20% of contract billings.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "Profit = Revenue - Costs. Statement (1): If costs < 65% of revenue, profit > 35% of revenue. 35% of $\\$240,000$ is at least $\\$84,000$, which is strictly greater than $\\$40,000$. Sufficient.\nStatement (2): 20% of $\\$240,000$ is $\\$48,000$. For smaller revenues, 20% might be $\\$30,000$ or $\\$36,000$ (which could allow profit to be $\\$38,000 < \\$40,000$). Thus Statement (2) is not guaranteed sufficient across baseline tests. Statement (1) ALONE is sufficient.",
        "trap": "Assuming statement (2) guarantees clearing $\\$40,000$ without calculating the 20% threshold.",
        "estSeconds": 95
      },
      {
        "id": "pt07_di06",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "If parameter $p$ is an integer recorded during routing dispatch optimization on urban delivery robot fleet at UrbanAutonomy Corp, is $|p| = p$?\n\n(1) $p^2 = p$\n(2) $p^3 \\ge p$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "$|m| = m$ holds if and only if $m \\ge 0$.\nStatement (1): $m(m - 1) = 0 \\implies m = 0$ or $m = 1$. In both cases, $m \\ge 0$, so $|m| = m$ is definitely true. Sufficient.\nStatement (2): $m^3 - m \\ge 0 \\implies m(m-1)(m+1) \\ge 0$. Integer solutions include $m = -1$ (where $|-1| = 1 \\ne -1$, so NO) as well as $m = 0, 1, 2$ (where YES). Insufficient.\nTherefore, Statement (1) ALONE is sufficient.",
        "trap": "Overlooking $m = -1$ as a valid integer solution to $m^3 \\ge m$.",
        "estSeconds": 105
      },
      {
        "id": "pt07_di07",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Based on the autonomous freight logistics table, which transport terminal produced the highest dollar operating profit?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Telecommunications & Distributed Computing",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-7",
              63,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-7",
              86,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-7",
              50,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-7",
              105,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-7",
              72,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-7",
              66,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The median throughput among units with an Error Rate strictly under 1.0% exceeds 45 k/day. (Yes/No)",
          "Statement 2: The unit with the highest Cost Index also has the highest Error Rate. (Yes/No)",
          "Statement 3: All units with Uptime greater than 99.0% have a Cost Index below 150. (Yes/No)"
        ],
        "answer": "Yes | Yes | Yes",
        "explanation": "Statement 1: Units with error < 1.0% are Alpha, Gamma, Epsilon, Zeta. Throughputs are 45+, 38+, 54+, 48+. Median is (45+48)/2 > 45 k/day -> Yes.\nStatement 2: Unit Delta has Cost Index 180 (highest) and Error Rate 2.1% (highest) -> Yes.\nStatement 3: Units with Uptime > 99.0% are Alpha (110), Gamma (85), Epsilon (125), Zeta (115), all under 150 -> Yes.",
        "trap": "Sorting by the wrong column or taking the mean instead of the median.",
        "estSeconds": 120
      },
      {
        "id": "pt07_di08",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluate operational ranking correlations based on the telecommunications & distributed computing table.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Telecommunications & Distributed Computing",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-7",
              63,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-7",
              86,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-7",
              50,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-7",
              105,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-7",
              72,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-7",
              66,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Sorting descending by Throughput yields an identical ranking as sorting descending by Cost Index. (Yes/No)",
          "Statement 2: Exactly three units have an Error Rate strictly below 0.7%. (Yes/No)",
          "Statement 3: Unit Gamma has both the lowest Throughput and the lowest Error Rate. (Yes/No)"
        ],
        "answer": "No | Yes | Yes",
        "explanation": "Statement 1: Delta is highest in both, but Beta (62, 145) vs Epsilon (54, 125) vs Alpha (45, 110) vs Zeta (48, 115) - Zeta throughput is higher than Alpha but Cost Index is 115 vs 110, order varies -> No.\nStatement 2: Units with error < 0.7% are Alpha (0.4), Gamma (0.2), Zeta (0.6) -> exactly three -> Yes.\nStatement 3: Gamma has lowest throughput (38+) and lowest error (0.2%) -> Yes.",
        "trap": "Assuming throughput and cost index correlate with 1.0 rank correlation.",
        "estSeconds": 115
      },
      {
        "id": "pt07_di09",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If the autonomous logistics terminal table is sorted in ascending order by Operating Margin (%), which terminal occupies the median rank?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Telecommunications & Distributed Computing",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-7",
              63,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-7",
              86,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-7",
              50,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-7",
              105,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-7",
              72,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-7",
              66,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Unit Gamma has a Cost Index per throughput unit of less than 2.5. (Yes/No)",
          "Statement 2: The range of Error Rates across all 6 units is strictly greater than 1.8 percentage points. (Yes/No)",
          "Statement 3: More than half of the units have an Uptime exceeding 99.2%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Gamma ratio = 85 / (38+) < 2.5 -> Yes.\nStatement 2: Max error = Delta (2.1%), Min error = Gamma (0.2%). Range = 2.1 - 0.2 = 1.9% > 1.8% -> Yes.\nStatement 3: Units with Uptime > 99.2% are Alpha (99.8), Gamma (99.9), Zeta (99.4) -> 3 out of 6 (wait: exactly half, so strictly more than half is No!) -> Answer: Yes | Yes | No.",
        "trap": "Confusing 'at least half' with 'strictly more than half'.",
        "estSeconds": 125
      },
      {
        "id": "pt07_di10",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Evaluate reliability and risk profiles across units in telecommunications & distributed computing.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Telecommunications & Distributed Computing",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-7",
              63,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-7",
              86,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-7",
              50,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-7",
              105,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-7",
              72,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-7",
              66,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The unit with the highest Throughput also has the lowest Uptime. (Yes/No)",
          "Statement 2: Total combined throughput of the two highest units exceeds 130 k/day. (Yes/No)",
          "Statement 3: Every unit with a Cost Index greater than 120 has an Error Rate above 1.0%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Delta has highest throughput (75+) and lowest uptime (97.5%) -> Yes.\nStatement 2: Top two are Delta (75+) and Beta (62+) = 137+ > 130 -> Yes.\nStatement 3: Unit Epsilon has Cost Index 125 (>120) but Error Rate 0.8% (< 1.0%) -> No.",
        "trap": "Overlooking Unit Epsilon's low error rate despite high cost.",
        "estSeconds": 115
      },
      {
        "id": "pt07_di11",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluating the autonomous vehicle scatter plot of navigation R&D versus fleet ROIC, as R&D expenditure rises up to 10%, return generally [Select 1], while past 10%, it generally [Select 2].",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Telecommunications & Distributed Computing",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 32
            },
            {
              "x": 20,
              "y": 47
            },
            {
              "x": 30,
              "y": 60
            },
            {
              "x": 40,
              "y": 70
            },
            {
              "x": 50,
              "y": 77
            },
            {
              "x": 60,
              "y": 82
            }
          ]
        },
        "options": [
          "Dropdown 1: The overall relationship between Resource Investment and Productivity Output is [strongly positive | strongly negative | sinusoidal | uncorrelated].",
          "Dropdown 2: As Resource Investment increases beyond $40k, the rate of increase in Productivity Output displays [diminishing marginal returns | increasing exponential growth | negative acceleration | zero slope]."
        ],
        "answer": "strongly positive | diminishing marginal returns",
        "explanation": "Dropdown 1: As investment rises from 10 to 60, output rises consistently from 20+ to 70+ -> strongly positive.\nDropdown 2: Between 10 and 30, slope is ~1.4; between 40 and 60, slope drops to ~0.6 -> diminishing marginal returns.",
        "trap": "Confusing diminishing marginal growth with an absolute decline in output.",
        "estSeconds": 105
      },
      {
        "id": "pt07_di12",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "On the autonomous fleet chart, approximately what proportion of delivery terminals with R&D intensity under 6% achieved an ROIC exceeding 20%?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Telecommunications & Distributed Computing",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 32
            },
            {
              "x": 20,
              "y": 47
            },
            {
              "x": 30,
              "y": 60
            },
            {
              "x": 40,
              "y": 70
            },
            {
              "x": 50,
              "y": 77
            },
            {
              "x": 60,
              "y": 82
            }
          ]
        },
        "options": [
          "Dropdown 1: The average marginal gain in output per thousand dollars invested between $10k and $30k is approximately [1.4 points/$k | 2.5 points/$k | 3.5 points/$k | 0.5 points/$k].",
          "Dropdown 2: The point with the highest output-to-investment ratio is at an investment of [$10k | $30k | $50k | $60k]."
        ],
        "answer": "1.4 points/$k | $10k",
        "explanation": "Dropdown 1: Slope = (48 - 20) / (30 - 10) = 28 / 20 = 1.4 points/$k.\nDropdown 2: Ratio y/x: At x=10, y/x = 22/10 = 2.2. At x=60, y/x = 72/60 = 1.2. The highest ratio occurs at the earliest stage ($10k).",
        "trap": "Assuming the highest absolute output point ($60k) has the highest efficiency ratio.",
        "estSeconds": 115
      },
      {
        "id": "pt07_di13",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "On the autonomous vehicle scatter plot, the single delivery depot identified as the largest positive residual outlier is located at which coordinates?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Telecommunications & Distributed Computing",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 32
            },
            {
              "x": 20,
              "y": 47
            },
            {
              "x": 30,
              "y": 60
            },
            {
              "x": 40,
              "y": 70
            },
            {
              "x": 50,
              "y": 77
            },
            {
              "x": 60,
              "y": 82
            }
          ]
        },
        "options": [
          "Dropdown 1: The median investment level across the 6 observed data points is [$35k | $40k | $45k | $50k].",
          "Dropdown 2: A firm investing $45k would be projected by linear interpolation to produce an output index of approximately [61.5 | 68.0 | 72.5 | 55.0]."
        ],
        "answer": "$35k | 61.5",
        "explanation": "Dropdown 1: Ordered x: 10, 20, 30, 40, 50, 60. Median = (30 + 40)/2 = $35k.\nDropdown 2: Between x=40 (y~58) and x=50 (y~65), midpoint x=45 gives y = (58 + 65)/2 = 61.5.",
        "trap": "Extrapolating using the steep slope from the early segment.",
        "estSeconds": 110
      },
      {
        "id": "pt07_di14",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If an operating facility at UrbanAutonomy Corp reduces its expenditure from 16% down to 10% along the regression curve for routing latency, what is the expected change in its performance index?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Telecommunications & Distributed Computing",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 32
            },
            {
              "x": 20,
              "y": 47
            },
            {
              "x": 30,
              "y": 60
            },
            {
              "x": 40,
              "y": 70
            },
            {
              "x": 50,
              "y": 77
            },
            {
              "x": 60,
              "y": 82
            }
          ]
        },
        "options": [
          "Dropdown 1: Increasing investment from $50k to $60k yields a percentage increase in output of approximately [7% | 15% | 25% | 35%].",
          "Dropdown 2: If fixed costs require an output index of at least 50 to break even, the minimum necessary investment is approximately [$32k | $22k | $42k | $15k]."
        ],
        "answer": "7% | $32k",
        "explanation": "Dropdown 1: At x=50, y~67. At x=60, y~72. Change = 5 / 67 ~ 7.4%.\nDropdown 2: At x=30, y~48; at x=40, y~58. Output 50 is reached just past $30k (approx $32k).",
        "trap": "Calculating percentage increase based on investment (20%) instead of output (7%).",
        "estSeconds": 115
      },
      {
        "id": "pt07_di15",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "At UrbanAutonomy Corp, a capital allocation of $60 million is split between urban delivery robot fleet (Asset X) and secondary infrastructure (Asset Y). The allocation to Asset X is exactly 4 times the allocation to Asset Y. Select the dollar allocation for Asset X and Asset Y.\n\nValues: Asset X = $48M, Asset Y = $12M.",
        "options": [
          "Grade A: 52 liters",
          "Grade B: 26 liters"
        ],
        "answer": "Grade A = 52 | Grade B = 26",
        "explanation": "Alligation: Ratio of Grade A to Grade B is $|50 - 30| : |30 - 20| = 20 : 10 = 2 : 1$. Total volume is 78 liters. Grade A $= 2/3 \\times 78 = 52$ liters, Grade B $= 1/3 \\times 78 = 26$ liters.",
        "trap": "Reversing the 2:1 ratio between Grade A and Grade B.",
        "estSeconds": 125
      },
      {
        "id": "pt07_di16",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Two parameters $U$ and $V$ in telecommunications & distributed computing satisfy the linear system: $2U + 3V = 58$ and $U - V = 4$.\n\nSelect the value of $U$ and the value of $V$ that satisfy both equations.",
        "options": [
          "U: 14",
          "V: 10"
        ],
        "answer": "U = 14 | V = 10",
        "explanation": "Substitute $U = V + 4$: $2(V + 4) + 3V = 5V + 8 = 58 \\implies 5V = 50 \\implies V = 10$. Then $U = 10 + 4 = 14$.",
        "trap": "Sign error when expanding 2(V + 4).",
        "estSeconds: 105": 105,
        "estSeconds": 105
      },
      {
        "id": "pt07_di17",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "At UrbanAutonomy Corp, Pump Alpha fills an emergency containment reservoir for routing dispatch optimization in 13 hours working alone. Working together, Pump Alpha and Pump Beta fill the reservoir in 7.8 hours. Select the time for Pump Alpha and Pump Beta working alone.",
        "options": [
          "High-Yield Debt: \\$400,000",
          "Treasury Notes: \\$600,000"
        ],
        "answer": "High-Yield = $400,000 | Treasury = $600,000",
        "explanation": "Alligation: Ratio of High-Yield to Treasury is $|3 - 5| : |8 - 5| = 2 : 3$. Fraction in High-Yield is $2/5 = 40\\% = \\$400,000$. Fraction in Treasury is $3/5 = 60\\% = \\$600,000$.",
        "trap": "Inverting the 2:3 ratio to 3:2.",
        "estSeconds": 120
      },
      {
        "id": "pt07_di18",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluating the Project Charter and Financial Audit tabs for UrbanAutonomy Corp, what is the total upfront capital investment required for deploying urban delivery robot fleet across all branch facilities?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Telecommunications & Distributed Computing",
              "content": "Directive 7.4 regarding Telecommunications & Distributed Computing:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 7:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant North only",
          "Plant North and Plant West only",
          "Plant South and Plant West only",
          "Plant North, Plant South, and Plant West",
          "None of the facilities"
        ],
        "answer": "A",
        "explanation": "Tab 1 specifies that a score of at least 90 is required for expedited licensing. Tab 2 shows only Plant North scored >= 90 (score 92). Plant West scored 88 (< 90). Thus, Plant North only qualifies.",
        "trap": "Assuming Plant West qualifies because of its 6-year history (history only grants exemption from review, not expedited licensing).",
        "estSeconds": 120
      },
      {
        "id": "pt07_di19",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Which facility at UrbanAutonomy Corp is subject to mandatory operational review according to the regulatory directive for autonomous mobility & lidar and the audit inspection records?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Telecommunications & Distributed Computing",
              "content": "Directive 7.4 regarding Telecommunications & Distributed Computing:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 7:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant East only",
          "Plant South and Plant East only",
          "Plant South only",
          "Plant North and Plant East only",
          "All four plants"
        ],
        "answer": "A",
        "explanation": "Plants scoring below 85 are Plant South (84) and Plant East (79). However, Tab 1 exempts facilities operating >5 years with zero violations. Plant South has operated 7 years with 0 violations (exempt). Plant East has only 2 years and has a violation, so it is the ONLY plant subject to mandatory review.",
        "trap": "Failing to check Plant South's 7-year zero-violation exemption in Tab 1.",
        "estSeconds": 130
      },
      {
        "id": "pt07_di20",
        "test": 7,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Evaluating information across all three tabs for autonomous mobility & lidar, which strategic conclusion regarding the financial return of deploying urban delivery robot fleet is most strongly supported?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Telecommunications & Distributed Computing",
              "content": "Directive 7.4 regarding Telecommunications & Distributed Computing:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 7:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "No, because it has an active safety violation recorded in the preceding 12 months.",
          "Yes, provided it files the paperwork within 14 business days.",
          "Yes, because its compliance score was within 10 points of the 85 threshold.",
          "No, because only facilities with more than 5 years operating history can file stays.",
          "Yes, because emergency stays are automatically granted to all facilities."
        ],
        "answer": "A",
        "explanation": "Tab 3 explicitly states: 'No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay.' Plant East has 1 safety violation (Tab 2), disqualifying it completely.",
        "trap": "Focusing only on the 14-day filing window without checking the violation disqualification rule.",
        "estSeconds": 115
      }
    ]
  },
  {
    "testNumber": 8,
    "id": "pt_08",
    "title": "Official Focus Mock #8 (Full 64-Q Simulation)",
    "date": "2025-04-26",
    "totalScore": 715,
    "quantScore": 82,
    "verbalScore": 82,
    "dataInsightsScore": 81,
    "structure": {
      "quantQuestions": 21,
      "verbalQuestions": 23,
      "dataInsightsQuestions": 20,
      "total": 64,
      "durationMinutes": 135
    },
    "questions": [
      {
        "id": "pt08_q01",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In biomedical therapeutics & kinetics, a barcode serial integer $n$ satisfies that $n^2 - 1$ is divisible by prime $31$. If $1 < n < 31$, how many integer values can $n$ assume?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "30"
        ],
        "answer": "B",
        "explanation": "Since $n^2 - 1 = (n - 1)(n + 1)$ is divisible by prime 31, by Euclid's lemma either 31 divides $(n - 1)$ or 31 divides $(n + 1)$. Given $1 < n < 31$, $n - 1 < 31$, so 31 cannot divide $n - 1$. For 31 to divide $n + 1$, we must have $n + 1 = 31 \\implies n = 30$. Thus, exactly 1 integer value ($n = 30$) satisfies the condition.",
        "trap": "Assuming both $(n - 1)$ and $(n + 1)$ can yield solutions within the open interval $(1, p)$.",
        "estSeconds": 90
      },
      {
        "id": "pt08_q02",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "At TerraAgri Systems, Agricultural Field Scientist monitors two operational units: Primary Unit Alpha completes a full cycle of nitrogen mineral flux calibration in 12 hours working alone, whereas Secondary Unit Beta requires 24 hours alone. If both units operate simultaneously at their constant rates to complete the cycle on a shared arable cropland sensor array, how many hours will they take together?",
        "options": [
          "7.50",
          "8.00",
          "8.50",
          "18.00",
          "9.00"
        ],
        "answer": "B",
        "explanation": "Combined rate $R = 1/12 + 1/24 = 3/24$. Time $T = 1/R = 24/3 = 8.00$ hours.",
        "trap": "Taking the arithmetic average of the two individual times.",
        "estSeconds: 85": 85,
        "estSeconds": 85
      },
      {
        "id": "pt08_q03",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "An agricultural cooperative marks up bulk organic fertilizer bags by 28% for shelf pricing, then provides members a 14% seasonal discount. What percentage gain over acquisition cost is collected?",
        "options": [
          "9.0%",
          "10.1%",
          "14.0%",
          "14.1%",
          "19.0%"
        ],
        "answer": "B",
        "explanation": "Multiplier $= (1 + 0.28) \\times (1 - 0.14) = 1.1008$. Net profit percentage $= (1.1008 - 1) \\times 100 = 10.1\\%$.",
        "trap": "Subtracting the percentages directly (28% - 14% = 14%).",
        "estSeconds": 90
      },
      {
        "id": "pt08_q04",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a mathematical model tracking nitrogen mineralization at TerraAgri Systems, the exponent variable $x$ satisfies $2^{2x+1} - $2^{2x-1} = 96$. What is the value of $x^2 + x$?",
        "options": [
          "40",
          "42",
          "44",
          "46",
          "48"
        ],
        "answer": "B",
        "explanation": "Factor out $3^{2x-1}$: $3^{2x-1}(3^2 - 1) = 177147(3^2 - 1)$. Equating exponents: $2x - 1 = 11 \\implies 2x = 12 \\implies x = 6$. Then $x^2 + x = 6^2 + 6 = 42$.",
        "trap": "Miscalculating the factored term $(base^2 - 1)$.",
        "estSeconds": 100
      },
      {
        "id": "pt08_q05",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Inequalities & Absolute Values",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "During a tolerance check on arable cropland sensor array measurements at TerraAgri Systems, how many integer values of $k$ satisfy the inequality $|2k - 13| \\le 27$?",
        "options": [
          "25",
          "26",
          "27",
          "28",
          "24"
        ],
        "answer": "B",
        "explanation": "Expand absolute value: $-25 \\le 2k - 12 \\le 25 \\implies -13 \\le 2k \\le 37 \\implies -6.5 \\le k \\le 18.5$. Length of interval for integers is strictly 26.",
        "trap": "Neglecting to include both endpoints when calculating inclusive integer count.",
        "estSeconds": 95
      },
      {
        "id": "pt08_q06",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "An agronomy study registers 7 distinct positive integer soil nitrogen absorption values in parts per million, observing a median of 30 and an average of 35. What is the highest possible absorption value recorded?",
        "options": [
          "179",
          "181",
          "183",
          "185",
          "187"
        ],
        "answer": "C",
        "explanation": "To maximize $x_7$, minimize elements 1, 2, 3, 5, 6. Minimum distinct positive integers: $x_1=1, x_2=2, x_3=3$. Given median $x_4 = 41$. Minimum distinct integers above median: $x_5 = 42, x_6 = 43$. Sum of all 7 integers $= 7 \\times 45 = 315$. Subtracting the 6 minimal values leaves maximum $x_7 = 183$.",
        "trap": "Allowing integers above median to equal the median rather than being strictly distinct.",
        "estSeconds": 115
      },
      {
        "id": "pt08_q07",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "An agricultural cooperative committee of 4 advisors is formed from 6 agronomy researchers and 5 crop insurance adjusters. If at least 2 of each profession are required, how many distinct committees can be created?",
        "options": [
          "140",
          "145",
          "150",
          "155",
          "160"
        ],
        "answer": "C",
        "explanation": "Ways to select 2 hardware engineers from 6: $\\binom{6}{2} = 15$. Ways to select 2 software architects from 5: $\\binom{5}{2} = 10$. Total distinct combinations $= 15 \\times 10 = 150$.",
        "trap": "Adding the combinations instead of multiplying.",
        "estSeconds": 105
      },
      {
        "id": "pt08_q08",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In crop yield statistical distributions, what is the highest integer exponent $k$ such that $3^k$ divides $70!$ evenly?",
        "options": [
          "16",
          "17",
          "18",
          "19",
          "20"
        ],
        "answer": "C",
        "explanation": "Powers of 10 in a factorial are limited by prime factor 5. Using Legendre's formula: $\\lfloor 75/5 \\rfloor + \\lfloor 75/25 \\rfloor = 15 + 3 = 18$. Thus $k = 18$.",
        "trap": "Counting powers of 2 or stopping after first division by 5.",
        "estSeconds": 90
      },
      {
        "id": "pt08_q09",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "A grain harvest transport travels from farmland to grain elevator at 56 mph, and returns empty along the same path at 112 mph. What is its average speed for the entire trip?",
        "options": [
          "66.9",
          "71.0",
          "68.9",
          "64.9",
          "72.5"
        ],
        "answer": "A",
        "explanation": "Average speed over equal distances is the harmonic mean: $V = \\frac{2 s_1 s_2}{s_1 + s_2} = \\frac{2 \\times 54 \\times 88}{142} = 66.9$ mph.",
        "trap": "Choosing the arithmetic mean (option B).",
        "estSeconds": 80
      },
      {
        "id": "pt08_q10",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "An agronomy test vat contains 80 liters of liquid fertilizer solution containing 30% urea concentrate. How many liters of pure water must be poured in to dilute the fertilizer to 15% urea?",
        "options": [
          "66",
          "68",
          "70",
          "72",
          "74"
        ],
        "answer": "C",
        "explanation": "Solvent mass is constant: $0.25 \\times 65 = 0.12 \\times (65 + w) \\implies 65 + w = 135 \\implies w = 70$ liters.",
        "trap": "Reporting total final volume rather than added water.",
        "estSeconds": 95
      },
      {
        "id": "pt08_q11",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Sequences & Series",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In an arithmetic sequence monitoring biomedical therapeutics & kinetics production batches, the first term is 11 and the common difference between consecutive terms is 4. What is the sum of the first 15 terms of this sequence?",
        "options": [
          "570",
          "577",
          "585",
          "593",
          "600"
        ],
        "answer": "C",
        "explanation": "Sum formula $S_{15} = \\frac{15}{2} [2(11) + 14(4)] = 15 \\times [11 + 7(4)] = 585$.",
        "trap": "Using 15d instead of (n-1)d in the summation formula.",
        "estSeconds": 90
      },
      {
        "id": "pt08_q12",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Overlapping Sets",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Among 170 technical facilities surveyed in biomedical therapeutics & kinetics, 78 have implemented Protocol A, 68 have implemented Protocol B, and 12 have implemented neither. How many facilities have implemented BOTH Protocol A and Protocol B?",
        "options": [
          "-16",
          "-14",
          "-12",
          "-10",
          "-8"
        ],
        "answer": "C",
        "explanation": "Facilities with at least one protocol $= 170 - 12 = 158$. By inclusion-exclusion: $|A \\cap B| = |A| + |B| - |A \\cup B| = 78 + 68 - 158 = -12$.",
        "trap": "Subtracting neither from both sets individually.",
        "estSeconds": 85
      },
      {
        "id": "pt08_q13",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A soil sample sorting tray holds 6 red indicator markers and 8 blue indicator markers. If a field researcher randomly chooses 3 markers without replacement, what is the probability that exactly 2 are red?",
        "options": [
          "\\frac{23}{55}",
          "\\frac{24}{55}",
          "\\frac{25}{55}",
          "\\frac{26}{55}",
          "\\frac{27}{55}"
        ],
        "answer": "C",
        "explanation": "Ways to draw two compliant parts: $\\binom{6}{2} = 15$. Ways to draw two defective parts: $\\binom{5}{2} = 10$. Total favorable $= 25$. Total unrestricted pairs: $\\binom{11}{2} = 55$. Probability $= 25/55$.",
        "trap": "Assuming sampling with replacement.",
        "estSeconds": 100
      },
      {
        "id": "pt08_q14",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Quadratics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In soil nitrogen mineralization modeling, quadratic $x^2 - 19x + K = 0$ has two positive integer roots with a difference of 5. What is the value of $K$?",
        "options": [
          "136",
          "138",
          "140",
          "142",
          "144"
        ],
        "answer": "C",
        "explanation": "Let roots be $r_1$ and $r_2$. Sum $r_1 + r_2 = 24$, and difference $r_2 - r_1 = 4$. Solving gives roots $r_1 = 10$ and $r_2 = 14$. By Vieta's formulas, $K = r_1 \\times r_2 = 10 \\times 14 = 140$.",
        "trap": "Adding the roots rather than multiplying for the constant term $K$.",
        "estSeconds": 85
      },
      {
        "id": "pt08_q15",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In an algorithmic encryption routine for precision agronomy & soil biomes, what is the units digit of the integer evaluation $7^{75} + 3$?",
        "options": [
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": "C",
        "explanation": "Powers of 7 cycle in units digits: $7^1 \\rightarrow 7, 7^2 \\rightarrow 9, 7^3 \\rightarrow 3, 7^4 \\rightarrow 1$. Exponent $71 \\equiv 3 \\pmod 4$, so $7^{71}$ ends in 3. Adding 3 gives a units digit of $(3 + 3) \\pmod 10 = 6$.",
        "trap": "Failing to apply base-4 cyclicity to the exponent.",
        "estSeconds": 80
      },
      {
        "id": "pt08_q16",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Coordinate & Analytical Geometry",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In a Cartesian telemetry grid mapping arable cropland sensor array coordinates for TerraAgri Systems, line $L_1$ passes through $(0, 13)$ and $(11, 0)$. If perpendicular line $L_2$ intersects the origin $(0, 0)$, what is the slope of line $L_2$?",
        "options": [
          "\\frac{10}{12}",
          "-\\frac{10}{12}",
          "\\frac{12}{10}",
          "-\\frac{12}{10}",
          "1"
        ],
        "answer": "A",
        "explanation": "Slope of $L_1$ is $m_1 = \\frac{0 - 12}{10 - 0} = -\\frac{12}{10}$. Perpendicular slope $m_2 = -1/m_1 = \\frac{10}{12}$.",
        "trap": "Inverting without negating (option B or C).",
        "estSeconds: 75": 75,
        "estSeconds": 75
      },
      {
        "id": "pt08_q17",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sensor calibration test in biomedical therapeutics & kinetics, the standard deviation of pressure readings was 4.5 psi. If each reading is multiplied by 1.25 and then decreased by 3.5 psi, what is the standard deviation of the transformed readings in psi?",
        "options": [
          "2.12",
          "5.62",
          "4.50",
          "9.12",
          "6.75"
        ],
        "answer": "B",
        "explanation": "Standard deviation is unaffected by the subtraction of a constant (-3.5), but scales by $|1.25|$: $\\sigma_{new} = 1.25 \\times 4.5 = 5.62$ psi.",
        "trap": "Subtracting 3.5 from the standard deviation (option A).",
        "estSeconds": 70
      },
      {
        "id": "pt08_q18",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In precision agronomy & soil biomes, replacement parts for arable cropland sensor array at TerraAgri Systems are packaged strictly in quantities of 4 or 7 units. What is the greatest integer number of units that cannot be assembled using non-negative combinations of these packages?",
        "options": [
          "25",
          "26",
          "27",
          "28",
          "29"
        ],
        "answer": "C",
        "explanation": "By the Frobenius Coin Formula for coprime integers $a$ and $b$, the largest non-constructible integer is $ab - a - b = (5)(8) - 5 - 8 = 27$.",
        "trap": "Computing ab directly without subtracting (a + b).",
        "estSeconds": 110
      },
      {
        "id": "pt08_q19",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "When the digits of two-digit soil acidity index $N$ are transposed, the resulting value is 36 greater than $N$. What is the difference between the units digit and tens digit?",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "C",
        "explanation": "$(10B + A) - (10A + B) = 9(B - A) = 27 \\implies B - A = 3$.",
        "trap": "Confusing (B - A) with (A - B).",
        "estSeconds": 75
      },
      {
        "id": "pt08_q20",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A capital expenditure allocation of $\\$11,000$ in biomedical therapeutics & kinetics appreciates at an annual rate of 10% compounded semi-annually. What is the total accumulated interest after 1 year?",
        "options": [
          "\\$1,100",
          "\\$1,128",
          "\\$1,155",
          "\\$1,210",
          "\\$1,238"
        ],
        "answer": "B",
        "explanation": "Semi-annual rate is 5% over 2 periods. Multiplier is $(1.05)^2 = 1.1025$. Interest $= 11000 \\times 0.1025 = \\$1,128$.",
        "trap": "Calculating simple interest at 10% (option A).",
        "estSeconds": 90
      },
      {
        "id": "pt08_q21",
        "test": 8,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "For all positive real numbers $u$ and $v$ modeling nitrogen mineralization at TerraAgri Systems, an operational operator $\\star$ is defined by $u \\star v = \\frac{u^2 - v^2}{u - v}$. What is the numerical value of $14 \\star 3$?",
        "options": [
          "\\frac{5}{2}",
          "\\frac{5}{3}",
          "\\frac{5}{4}",
          "5",
          "1"
        ],
        "answer": "B",
        "explanation": "$5 \\diamond 5 = \\frac{5 \\times 5}{5 + 5 + 5} = \\frac{5^2}{3(5)} = \\frac{5}{3}$.",
        "trap": "Adding the constants in the denominator incorrectly.",
        "estSeconds": 85
      },
      {
        "id": "pt08_v01",
        "test": 8,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 6,
        "passage": "The enzyme ribulose-1,5-bisphosphate carboxylase-oxygenase (Rubisco) is the primary catalytic engine of global carbon fixation, yet it is notoriously inefficient, frequently binding atmospheric oxygen instead of carbon dioxide in an energetically wasteful process termed photorespiration. Evolutionary biologists long questioned why natural selection failed to engineer a Rubisco variant with perfect substrate selectivity.\n\nStructural biochemical analysis explains that Rubisco faces an inescapable catalytic trade-off: modifications that increase affinity for carbon dioxide inevitably reduce the enzyme's maximum catalytic turnover rate. To bypass this fundamental kinetic barrier, angiosperms evolved C4 and CAM metabolic pathways, which utilize biochemical carbon-concentrating mechanisms to flood Rubisco with dense CO2, maximizing fixation velocity without requiring changes to the enzyme's active site.",
        "stem": "The primary purpose of the passage on photosynthetic rubisco enzyme kinetics & c4 evolution is to:",
        "options": [
          "Refute an established scientific doctrine by demonstrating that earlier measurements were entirely fraudulent.",
          "Challenge a traditional foundational model by presenting recent empirical evidence that supports an alternative paradigm.",
          "Reconcile two competing historical hypotheses by proposing a hybrid theoretical compromise.",
          "Advocate for the immediate cessation of field testing until biochemical instruments are standardized.",
          "Prove that evolutionary biological adaptations occur exclusively through physical genomic sequence alterations."
        ],
        "answer": "B",
        "explanation": "The passage outlines a traditional, long-standing theoretical assumption in its opening paragraph, then introduces modern empirical methodologies that challenge that framework and suggest a more dynamic mechanism.",
        "trap": "Selecting option A, which uses extreme, accusatory language ('entirely fraudulent') unsupported by the text.",
        "estSeconds": 100
      },
      {
        "id": "pt08_v02",
        "test": 8,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "The enzyme ribulose-1,5-bisphosphate carboxylase-oxygenase (Rubisco) is the primary catalytic engine of global carbon fixation, yet it is notoriously inefficient, frequently binding atmospheric oxygen instead of carbon dioxide in an energetically wasteful process termed photorespiration. Evolutionary biologists long questioned why natural selection failed to engineer a Rubisco variant with perfect substrate selectivity.\n\nStructural biochemical analysis explains that Rubisco faces an inescapable catalytic trade-off: modifications that increase affinity for carbon dioxide inevitably reduce the enzyme's maximum catalytic turnover rate. To bypass this fundamental kinetic barrier, angiosperms evolved C4 and CAM metabolic pathways, which utilize biochemical carbon-concentrating mechanisms to flood Rubisco with dense CO2, maximizing fixation velocity without requiring changes to the enzyme's active site.",
        "stem": "It can be inferred from the passage on photosynthetic rubisco enzyme kinetics & c4 evolution that proponents of the earlier model assumed that:",
        "options": [
          "Biological systems exhibit extensive behavioral plasticity when subjected to environmental shifts.",
          "Observed physical phenomena were governed primarily by static or localized equilibrium constraints.",
          "Molecular sequencing technologies would permanently confirm traditional observational hypotheses.",
          "Nutrient availability was completely uniform across all ecological micro-habitats.",
          "Adaptive modifications could be transmitted across generations without physical nucleotide changes."
        ],
        "answer": "B",
        "explanation": "The passage notes that the classical model assumed static, rigid constraints (e.g., rigid niche partitioning, exclusive nucleotide dependence, or uniform competition) before modern dynamic evidence emerged.",
        "trap": "Confusing the revisionist perspective with the traditional hypothesis being evaluated.",
        "estSeconds": 110
      },
      {
        "id": "pt08_v03",
        "test": 8,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "The enzyme ribulose-1,5-bisphosphate carboxylase-oxygenase (Rubisco) is the primary catalytic engine of global carbon fixation, yet it is notoriously inefficient, frequently binding atmospheric oxygen instead of carbon dioxide in an energetically wasteful process termed photorespiration. Evolutionary biologists long questioned why natural selection failed to engineer a Rubisco variant with perfect substrate selectivity.\n\nStructural biochemical analysis explains that Rubisco faces an inescapable catalytic trade-off: modifications that increase affinity for carbon dioxide inevitably reduce the enzyme's maximum catalytic turnover rate. To bypass this fundamental kinetic barrier, angiosperms evolved C4 and CAM metabolic pathways, which utilize biochemical carbon-concentrating mechanisms to flood Rubisco with dense CO2, maximizing fixation velocity without requiring changes to the enzyme's active site.",
        "stem": "According to the second paragraph of the passage on photosynthetic rubisco enzyme kinetics & c4 evolution, the newly discovered mechanism is significant primarily because it:",
        "options": [
          "Eliminates all scientific uncertainty surrounding global atmospheric convection.",
          "Demonstrates that biological entities can adapt or function through pathways previously deemed impossible or secondary.",
          "Proves that evolutionary mutations occur at a constant mathematical rate across geological epochs.",
          "Forces commercial enterprises to halt exploratory drilling operations immediately.",
          "Refutes the universal applicability of thermodynamic physical laws."
        ],
        "answer": "B",
        "explanation": "Paragraph 2 reveals an independent or dynamic pathway (e.g. chemolithoautotrophy, epigenetic inheritance, leading-edge vortices, or mycorrhizal resource sharing) that classical science deemed impossible or minor.",
        "trap": "Selecting an overly grandiose claim that the finding overturns fundamental thermodynamic laws (option E).",
        "estSeconds": 95
      },
      {
        "id": "pt08_v04",
        "test": 8,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "The enzyme ribulose-1,5-bisphosphate carboxylase-oxygenase (Rubisco) is the primary catalytic engine of global carbon fixation, yet it is notoriously inefficient, frequently binding atmospheric oxygen instead of carbon dioxide in an energetically wasteful process termed photorespiration. Evolutionary biologists long questioned why natural selection failed to engineer a Rubisco variant with perfect substrate selectivity.\n\nStructural biochemical analysis explains that Rubisco faces an inescapable catalytic trade-off: modifications that increase affinity for carbon dioxide inevitably reduce the enzyme's maximum catalytic turnover rate. To bypass this fundamental kinetic barrier, angiosperms evolved C4 and CAM metabolic pathways, which utilize biochemical carbon-concentrating mechanisms to flood Rubisco with dense CO2, maximizing fixation velocity without requiring changes to the enzyme's active site.",
        "stem": "The author\u2019s attitude toward the traditional scientific framework in photosynthetic rubisco enzyme kinetics & c4 evolution can best be described as:",
        "options": [
          "Uncompromisingly hostile and dismissive of historical scholars.",
          "Respectful of its historical role while emphasizing its conceptual limitations in light of recent findings.",
          "Enthusiastically supportive of its continuing supremacy over modern data.",
          "Indifferent to its theoretical and practical consequences.",
          "Skeptical of whether any scientific paradigm can ever be empirically tested."
        ],
        "answer": "B",
        "explanation": "The author treats the historical paradigm with measured academic respect ('long held', 'classical framework') while clearly identifying its empirical limitations.",
        "trap": "Choosing an exaggerated emotional descriptor like hostile or indifferent.",
        "estSeconds": 100
      },
      {
        "id": "pt08_v05",
        "test": 8,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "The enzyme ribulose-1,5-bisphosphate carboxylase-oxygenase (Rubisco) is the primary catalytic engine of global carbon fixation, yet it is notoriously inefficient, frequently binding atmospheric oxygen instead of carbon dioxide in an energetically wasteful process termed photorespiration. Evolutionary biologists long questioned why natural selection failed to engineer a Rubisco variant with perfect substrate selectivity.\n\nStructural biochemical analysis explains that Rubisco faces an inescapable catalytic trade-off: modifications that increase affinity for carbon dioxide inevitably reduce the enzyme's maximum catalytic turnover rate. To bypass this fundamental kinetic barrier, angiosperms evolved C4 and CAM metabolic pathways, which utilize biochemical carbon-concentrating mechanisms to flood Rubisco with dense CO2, maximizing fixation velocity without requiring changes to the enzyme's active site.",
        "stem": "According to the discussion of extremophilic archaea, which structural adaptation enables Cas endonucleases to sustain sequence-specific interference in hydrothermal vents?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on photosynthetic rubisco enzyme kinetics & c4 evolution is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt08_v06",
        "test": 8,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 8,
        "passage": "The enzyme ribulose-1,5-bisphosphate carboxylase-oxygenase (Rubisco) is the primary catalytic engine of global carbon fixation, yet it is notoriously inefficient, frequently binding atmospheric oxygen instead of carbon dioxide in an energetically wasteful process termed photorespiration. Evolutionary biologists long questioned why natural selection failed to engineer a Rubisco variant with perfect substrate selectivity.\n\nStructural biochemical analysis explains that Rubisco faces an inescapable catalytic trade-off: modifications that increase affinity for carbon dioxide inevitably reduce the enzyme's maximum catalytic turnover rate. To bypass this fundamental kinetic barrier, angiosperms evolved C4 and CAM metabolic pathways, which utilize biochemical carbon-concentrating mechanisms to flood Rubisco with dense CO2, maximizing fixation velocity without requiring changes to the enzyme's active site.",
        "stem": "With which of the following claims regarding archaeal adaptive immune mechanisms in extreme thermal regimes would the author agree?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on photosynthetic rubisco enzyme kinetics & c4 evolution is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt08_v07",
        "test": 8,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 9,
        "passage": "The enzyme ribulose-1,5-bisphosphate carboxylase-oxygenase (Rubisco) is the primary catalytic engine of global carbon fixation, yet it is notoriously inefficient, frequently binding atmospheric oxygen instead of carbon dioxide in an energetically wasteful process termed photorespiration. Evolutionary biologists long questioned why natural selection failed to engineer a Rubisco variant with perfect substrate selectivity.\n\nStructural biochemical analysis explains that Rubisco faces an inescapable catalytic trade-off: modifications that increase affinity for carbon dioxide inevitably reduce the enzyme's maximum catalytic turnover rate. To bypass this fundamental kinetic barrier, angiosperms evolved C4 and CAM metabolic pathways, which utilize biochemical carbon-concentrating mechanisms to flood Rubisco with dense CO2, maximizing fixation velocity without requiring changes to the enzyme's active site.",
        "stem": "Which of the following best characterizes the rhetorical organization and logical progression of the passage analyzing precision agronomy & soil biomes?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on photosynthetic rubisco enzyme kinetics & c4 evolution is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt08_v08",
        "test": 8,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "The enzyme ribulose-1,5-bisphosphate carboxylase-oxygenase (Rubisco) is the primary catalytic engine of global carbon fixation, yet it is notoriously inefficient, frequently binding atmospheric oxygen instead of carbon dioxide in an energetically wasteful process termed photorespiration. Evolutionary biologists long questioned why natural selection failed to engineer a Rubisco variant with perfect substrate selectivity.\n\nStructural biochemical analysis explains that Rubisco faces an inescapable catalytic trade-off: modifications that increase affinity for carbon dioxide inevitably reduce the enzyme's maximum catalytic turnover rate. To bypass this fundamental kinetic barrier, angiosperms evolved C4 and CAM metabolic pathways, which utilize biochemical carbon-concentrating mechanisms to flood Rubisco with dense CO2, maximizing fixation velocity without requiring changes to the enzyme's active site.",
        "stem": "In the context of the second paragraph of the passage on precision agronomy & soil biomes, the author's primary analytical focus centers on:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on photosynthetic rubisco enzyme kinetics & c4 evolution is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt08_v09",
        "test": 8,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "The enzyme ribulose-1,5-bisphosphate carboxylase-oxygenase (Rubisco) is the primary catalytic engine of global carbon fixation, yet it is notoriously inefficient, frequently binding atmospheric oxygen instead of carbon dioxide in an energetically wasteful process termed photorespiration. Evolutionary biologists long questioned why natural selection failed to engineer a Rubisco variant with perfect substrate selectivity.\n\nStructural biochemical analysis explains that Rubisco faces an inescapable catalytic trade-off: modifications that increase affinity for carbon dioxide inevitably reduce the enzyme's maximum catalytic turnover rate. To bypass this fundamental kinetic barrier, angiosperms evolved C4 and CAM metabolic pathways, which utilize biochemical carbon-concentrating mechanisms to flood Rubisco with dense CO2, maximizing fixation velocity without requiring changes to the enzyme's active site.",
        "stem": "The author introduces competing hypotheses and potential criticisms in the discussion of precision agronomy & soil biomes primarily in order to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on photosynthetic rubisco enzyme kinetics & c4 evolution is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt08_v10",
        "test": 8,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 9,
        "passage": "The enzyme ribulose-1,5-bisphosphate carboxylase-oxygenase (Rubisco) is the primary catalytic engine of global carbon fixation, yet it is notoriously inefficient, frequently binding atmospheric oxygen instead of carbon dioxide in an energetically wasteful process termed photorespiration. Evolutionary biologists long questioned why natural selection failed to engineer a Rubisco variant with perfect substrate selectivity.\n\nStructural biochemical analysis explains that Rubisco faces an inescapable catalytic trade-off: modifications that increase affinity for carbon dioxide inevitably reduce the enzyme's maximum catalytic turnover rate. To bypass this fundamental kinetic barrier, angiosperms evolved C4 and CAM metabolic pathways, which utilize biochemical carbon-concentrating mechanisms to flood Rubisco with dense CO2, maximizing fixation velocity without requiring changes to the enzyme's active site.",
        "stem": "Based on the thermostable Cas enzyme study, how would biochemists explain the enzymatic stability of extremophilic proteins in geothermal hot springs?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on photosynthetic rubisco enzyme kinetics & c4 evolution is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt08_v11",
        "test": 8,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "The enzyme ribulose-1,5-bisphosphate carboxylase-oxygenase (Rubisco) is the primary catalytic engine of global carbon fixation, yet it is notoriously inefficient, frequently binding atmospheric oxygen instead of carbon dioxide in an energetically wasteful process termed photorespiration. Evolutionary biologists long questioned why natural selection failed to engineer a Rubisco variant with perfect substrate selectivity.\n\nStructural biochemical analysis explains that Rubisco faces an inescapable catalytic trade-off: modifications that increase affinity for carbon dioxide inevitably reduce the enzyme's maximum catalytic turnover rate. To bypass this fundamental kinetic barrier, angiosperms evolved C4 and CAM metabolic pathways, which utilize biochemical carbon-concentrating mechanisms to flood Rubisco with dense CO2, maximizing fixation velocity without requiring changes to the enzyme's active site.",
        "stem": "The passage indicates that future scientific and operational frameworks in precision agronomy & soil biomes will be required to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on photosynthetic rubisco enzyme kinetics & c4 evolution is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt08_v12",
        "test": 8,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Agricultural Field Scientist at TerraAgri Systems: \"Deploying arable cropland sensor array will enable our division to optimize nitrogen mineralization within twelve months. Therefore, the executive steering committee must approve our funding request without delay.\"\n\nWhich of the following is an unstated assumption upon which the agricultural field scientist's argument depends?",
        "options": [
          "The policy will not inadvertently trigger paper bag carbon manufacturing footprint that cancels out the expected gains.",
          "The capital allocation required is strictly less than any expenditure approved in the prior fiscal year.",
          "No neighboring jurisdictions have considered implementing similar regulatory policies.",
          "The personnel tasked with enforcing the policy have completed postgraduate compliance degrees.",
          "Public opinion surveys indicate universal consumer enthusiasm for the initiative."
        ],
        "answer": "A",
        "explanation": "Negation test: If the policy DOES trigger paper bag carbon manufacturing footprint that cancels out the expected gains, the goal of marine particulate pollution will fail, collapsing the argument.",
        "trap": "Focusing on administrative trivia (degree qualifications) or budget comparisons.",
        "estSeconds": 115
      },
      {
        "id": "pt08_v13",
        "test": 8,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Operations Analyst at TerraAgri Systems: \"A three-month pilot deployment of arable cropland sensor array in region Alpha yielded a 25% improvement in nitrogen mineralization. This empirical result establishes that arable cropland sensor array was the direct causal driver of the observed efficiency gain.\"\n\nWhich of the following, if true, most seriously undermines the analyst's causal conclusion?",
        "options": [
          "Test district Alpha simultaneously experienced a major external demographic shift that naturally produces high baseline performance.",
          "The software utilized to compile test results was upgraded three weeks prior to the pilot rollout.",
          "Several junior employees in district Alpha reported working five additional overtime hours during the pilot.",
          "The cost of the pilot study was covered by a philanthropic research grant rather than operating revenue.",
          "Competing firms in the same industry have not yet published their quarterly operational statistics."
        ],
        "answer": "A",
        "explanation": "Introducing an external confounding variable (simultaneous demographic shift) directly attacks the causal attribution made by the consultant.",
        "trap": "Pointing out that the pilot was grant-funded, which affects replication finances but not the validity of the pilot's causal data.",
        "estSeconds": 110
      },
      {
        "id": "pt08_v14",
        "test": 8,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Strategy Director at TerraAgri Systems: \"Allocating capital toward arable cropland sensor array represents the most effective strategic pathway for our firm to expand nitrogen mineralization.\"\n\nWhich of the following, if true, provides the strongest corroborating evidence for the director's assertion?",
        "options": [
          "In extensive blind controlled trials across diverse industry segments, organizations adopting Single-Use Plastic Bans consistently outperformed control groups on marine particulate pollution.",
          "The strategic planner recently completed an executive leadership certification at an accredited business school.",
          "The vendor supplying the hardware for the policy offers a 30-day money-back guarantee.",
          "Several trade journals recently featured editorial articles discussing emerging regulatory trends.",
          "The policy requires no alterations to the firm's existing corporate legal structure."
        ],
        "answer": "A",
        "explanation": "Independent controlled trials demonstrating that the policy consistently beats control groups across diverse segments provides robust causal validation.",
        "trap": "Relying on the planner's credentials (ad hominem support) rather than empirical evidence.",
        "estSeconds": 100
      },
      {
        "id": "pt08_v15",
        "test": 8,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Compliance Auditor: At TerraAgri Systems, any initiative involving arable cropland sensor array requires formal sign-off from Agricultural Field Scientist. All initiatives receiving formal sign-off must undergo an environmental impact assessment unless they are classified as purely digital infrastructure. Last month, Initiative Sigma at TerraAgri Systems received formal sign-off but did not undergo an environmental impact assessment.\n\nIf the statements above are true, which of the following must also be true regarding Initiative Sigma?",
        "options": [
          "The first describes an impending regulatory proposal; the second introduces evidence that undermines an objection to that proposal.",
          "The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.",
          "The first is an assumption underlying the industry objection; the second is the analyst\u2019s primary thesis.",
          "The first provides empirical evidence; the second states an intermediate conclusion rejected by the author.",
          "The first introduces a claim the author accepts; the second defends a counter-argument."
        ],
        "answer": "A",
        "explanation": "Boldface 1 describes the regulatory initiative being debated. Boldface 2 presents empirical compliance cost data that directly counters the lobbyists' objection.",
        "trap": "Confusing Boldface 1 with the author's personal conclusion (which appears in the final sentence).",
        "estSeconds": 125
      },
      {
        "id": "pt08_v16",
        "test": 8,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Soil Science Consultant: To halt soil acidification from synthetic fertilizers, the agricultural board recommends applying pulverized dolomite limestone. Which of the following would be most valuable to determine?",
        "options": [
          "Whether the monetary benefits realized from marine particulate pollution exceed the ongoing compliance and operational costs associated with Single-Use Plastic Bans.",
          "Whether participating organizations display corporate logos on public transit shelters.",
          "How many years the auditor has worked in the regional auditing bureau.",
          "Whether similar policies were debated by legislative committees during the prior decade.",
          "Whether employee satisfaction surveys are conducted semi-annually or annually."
        ],
        "answer": "A",
        "explanation": "Net return on capital is defined as Net Financial Benefits minus Total Costs. Determining whether revenue gains exceed operational costs is decisive.",
        "trap": "Choosing historical trivia or auditor tenure, which do not influence the mathematical financial return.",
        "estSeconds": 110
      },
      {
        "id": "pt08_v17",
        "test": 8,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Agronomy Historian: Historical accounts routinely claim that the Green Revolution in cereal grain production resulted entirely from synthetic nitrogen fertilizer synthesis. **Genetic trial archives reveal that dwarfing genes introduced into wheat cultivars prevented stem lodging and enabled high-yield fertilizer uptake.** Agronomists credit nitrogen as the sole cause. Yet field logs prove standard crops collapsed under heavy fertilizer; **genetic cultivar restructuring was the essential prerequisite for fertilizer-driven agricultural expansion.** What roles do the boldface portions play?",
        "options": [
          "Rapid organic growth in commercial activity created new baseline volume that would have severely degraded performance in the absence of the subsidies.",
          "The currency in which subsidies were disbursed remained stable on international currency exchange markets.",
          "Several administrative assistants retired during the middle of the fiscal quarter.",
          "The auditing agency used computerized spreadsheets rather than handwritten paper ledgers.",
          "The subsidies were announced during a nationally televised press conference."
        ],
        "answer": "A",
        "explanation": "A powerful counteracting upward pressure (organic commercial growth) would have caused a steep deterioration; the policy succeeded in keeping metrics flat against a worsening baseline.",
        "trap": "Focusing on accounting ledger format (option D), which explains no operational dynamics.",
        "estSeconds": 105
      },
      {
        "id": "pt08_v18",
        "test": 8,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Safety Officer at TerraAgri Systems: Over the past three quarters, TerraAgri Systems equipped 90% of all arable cropland sensor array units with automated proximity sensors. Yet despite this safety upgrade, reported workplace minor incident rates in precision agronomy & soil biomes increased by 14% over the same timeframe.\n\nWhich of the following, if true, most helps to resolve the apparent discrepancy described above?",
        "options": [
          "Mistakes a necessary condition for a sufficient condition.",
          "Attacks the personal moral character of corporate executives.",
          "Relies on circular logic by defining performance as adoption of the policy.",
          "Fails to specify the exact percentage return of the market index.",
          "Assumes that corporate profitability is the sole measure of human happiness."
        ],
        "answer": "A",
        "explanation": "The premise shows that adopting the policy may be necessary to avoid failure, but that does not mean adoption is sufficient to guarantee market outperformance.",
        "trap": "Selecting option C (circular logic) when the formal flaw is affirming the consequent / confusing necessary and sufficient conditions.",
        "estSeconds": 115
      },
      {
        "id": "pt08_v19",
        "test": 8,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Agronomy Consultant: Every commercial farmer who rated our soil testing service 'first-class' submitted at least three soil core samples per season. Farmers submitting fewer samples gave lower ratings. Therefore, to raise farmer ratings, we should require three sample submissions per season. The consultant's reasoning is flawed because it:",
        "options": [
          "Some facilities in Province 8 are NOT tier-1 manufacturing facilities.",
          "All facilities in Province 8 maintain ISO-14001 certification.",
          "No tier-1 manufacturing facility is located in Province 8.",
          "Every facility that lacks ISO-14001 certification operates uncalibrated combustion chambers.",
          "Province 8 has the highest industrial energy consumption in the nation."
        ],
        "answer": "A",
        "explanation": "There exist facilities in Province X with uncalibrated chambers. None of these can have ISO-14001 certification (by statement 2). Since all tier-1 facilities must have ISO-14001 certification, these uncertified facilities in Province X cannot be tier-1 facilities.",
        "trap": "Concluding that NO tier-1 facilities exist in Province X (option C), which oversteps the premises.",
        "estSeconds": 110
      },
      {
        "id": "pt08_v20",
        "test": 8,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Agronomy Field Director: Our farming cooperative plans to adopt precision variable-rate nitrogen sprayers guided by drone multispectral reflectance. Critics argue drone monitoring expenses exceed fertilizer savings. However, variable-rate spraying cuts fertilizer runoff by 45% while boosting grain yield. Which of the following provides the strongest support?",
        "options": [
          "Concurrently with the predator removal, the reserve experienced a massive cyclical emergence of nutrient-rich prey that provided unprecedented food abundance.",
          "Target species construct nests in deciduous trees as well as evergreen shrubs.",
          "Invasive predators were introduced to the continent by European settlers in the eighteenth century.",
          "Volunteers conducted population counts using standard 10x binoculars.",
          "Several nearby urban parks also have small populations of the same species."
        ],
        "answer": "A",
        "explanation": "The simultaneous explosion of nutrient-rich cicada prey provides an overwhelming alternative causal explanation for the surge in reproduction.",
        "trap": "Noting the historical origins of predators, which is irrelevant to current breeding dynamics.",
        "estSeconds": 115
      },
      {
        "id": "pt08_v21",
        "test": 8,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Crop Quality Director: Last quarter, our inspectors doubled moisture meter checks on grain silos in elevator Alpha, and grain spoilage losses declined by 40%. This proves that doubling moisture checks should be required across all regional grain elevators. Which of the following most seriously calls into question the director's recommendation?",
        "options": [
          "The patient case mix and medical complexity in Ward 8 are representative of clinical departments across the entire hospital system.",
          "The platform software runs on standard desktop workstations running Windows 11.",
          "Physicians in Ward 8 completed an online feedback survey regarding user satisfaction.",
          "The hospital's malpractice insurance premium is reviewed annually in November.",
          "Medical transcriptionists previously belonged to a regional healthcare labor union."
        ],
        "answer": "A",
        "explanation": "Confirming that the test clinic is representative demonstrates that the 40% error reduction will likely replicate across other hospital departments.",
        "trap": "Citing IT workstation compatibility (option B), which is convenient but does not prove clinical effectiveness.",
        "estSeconds": 100
      },
      {
        "id": "pt08_v22",
        "test": 8,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Forestry Biologist: To protect native longleaf pine saplings on our agricultural cooperative tree farm, foresters introduced controlled prescribed burns every three seasons to eliminate invasive hardwood competition. Foresters project pine stand density will double. Which of the following is a required assumption?",
        "options": [
          "The public subway system possesses sufficient train capacity to accommodate the surge of diverted commuters without causing severe overcrowding that deters ridership.",
          "All private automobile drivers earn incomes above the national median household threshold.",
          "City parking meters generate less revenue than public transit fareboxes.",
          "Bicycle sharing programs will experience a corresponding increase in ridership.",
          "Municipal road paving projects are financed through state gasoline excise taxes."
        ],
        "answer": "A",
        "explanation": "Negation test: If the subway lacks capacity and overcrowding becomes unmanageable, drivers will not switch to transit (they may carpool, detour, or telecommute), defeating the policy.",
        "trap": "Assuming all drivers have high incomes (option B), which is not logically required.",
        "estSeconds": 120
      },
      {
        "id": "pt08_v23",
        "test": 8,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Agronomy Columnist: Agricultural economists often argue that farming cooperative Alpha achieved record wheat yields solely because of government fertilizer vouchers. **However, neighboring farming cooperatives with identical fertilizer vouchers suffered widespread crop lodging and reduced yields.** Clearly, fertilizer vouchers were not the decisive driver. Rather, **cooperative Alpha's adoption of semi-dwarf disease-resistant wheat cultivars allowed optimal fertilizer utilization that traditional crop varieties could not sustain.** What roles do the boldface portions play?",
        "options": [
          "The first is an established claim that the argument aims to refute; the second is an observation that supports the author\u2019s alternative conclusion.",
          "The first is the main conclusion of the argument; the second is a premise offered to defend that conclusion.",
          "The first provides empirical evidence; the second states an intermediate hypothesis rejected by the author.",
          "The first is a prediction; the second is an observation that disproves that prediction.",
          "The first introduces a hypothesis; the second proves that coal adoption never occurred."
        ],
        "answer": "A",
        "explanation": "Boldface 1 presents the conventional orthodoxy that the author sets out to undermine. Boldface 2 describes the persistent water-power cost advantage that supports the author's alternative thesis.",
        "trap": "Selecting option B which confuses the introductory conventional view with the author's own main conclusion.",
        "estSeconds": 120
      },
      {
        "id": "pt08_di01",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "In a data transmission pipeline for biomedical therapeutics & kinetics, if $k$ is a positive integer, is $k$ divisible by 12?\n\n(1) $k$ is divisible by 6 and $k$ is even.\n(2) $k^2$ is divisible by 144.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "D",
        "explanation": "Statement (1): Since $k$ is even (divisible by 2) and divisible by 6, and $\\text{LCM}(2, 6) = 12$, $k$ must be divisible by 12. Sufficient.\nStatement (2): If $k^2$ is divisible by 144, then for positive integer $k$, $\\sqrt{k^2} = k$ is divisible by 12. Sufficient.\nTherefore, EACH statement ALONE is sufficient.",
        "trap": "Believing statement (2) allows fractional roots when $k$ is explicitly constrained to be an integer.",
        "estSeconds": 95
      },
      {
        "id": "pt08_di02",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If $a$ and $b$ are non-zero real parameters measuring nitrogen mineralization at TerraAgri Systems, is $\\frac{a}{b} > 1$?\n\n(1) $a > b$\n(2) $a b > 0$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "E",
        "explanation": "Statement (1): If $x = 2, y = 1$, $x/y = 2 > 1$. If $x = -1, y = -2$, $x > y$ holds but $x/y = 1/2 < 1$. Insufficient.\nStatement (2): Tells us $x$ and $y$ have the same sign, but gives no relative magnitude. Insufficient.\nTogether: If $x=2, y=1$, $x/y=2 > 1$. If $x=-1, y=-2$, $x>y$ and $xy=2>0$ hold, but $x/y=0.5 < 1$. Two contradictory answers remain possible. Statements (1) and (2) together are NOT sufficient (Answer E).",
        "trap": "Assuming $x$ and $y$ must be positive without testing negative numbers.",
        "estSeconds": 110
      },
      {
        "id": "pt08_di03",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Working at constant rates, how many hours does it take for Module A and Module B in biomedical therapeutics & kinetics working together to process 6500 data transactions?\n\n(1) Module A processes 2600 transactions in 2 hours.\n(2) Operating simultaneously, Module A and Module B process 3250 transactions in 2.5 hours.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "B",
        "explanation": "Statement (1) provides only the rate for Module A. Insufficient.\nStatement (2) provides the combined throughput rate directly: Rate $= \\text{Transactions} / \\text{Time}$. With the combined rate known, the time to complete the target volume is uniquely determined. Sufficient.",
        "trap": "Believing individual rates for both modules are required.",
        "estSeconds": 90
      },
      {
        "id": "pt08_di04",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sample $S$ of 5 distinct integers recorded during biomedical therapeutics & kinetics testing, is the mean of $S$ greater than the median of $S$?\n\n(1) The 3 smallest integers are 1, 3, and 6.\n(2) The largest integer in $S$ is 70.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "C",
        "explanation": "Statement (1): Median is 6. Upper values could be 7, 8 (mean = 5 < 6) or 7, 50 (mean > 6). Insufficient.\nStatement (2): Gives no information about median or lower values. Insufficient.\nTogether: Elements are $1, 3, 6, d, {35 + test_idx * 5}$ where $6 < d < {35 + test_idx * 5}$. Minimum sum is $1 + 3 + 6 + 7 + {35 + test_idx * 5} = {52 + test_idx * 5}$. Minimum mean is $({52 + test_idx * 5})/5 > 10 > 6$. Since the minimum possible mean is strictly greater than the median 6, the answer is always YES. Sufficient.",
        "trap": "Neglecting to calculate the minimum possible mean under the constraint $d \\ge 7$.",
        "estSeconds: 115": 115,
        "estSeconds": 115
      },
      {
        "id": "pt08_di05",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "Did TerraAgri Systems's division for precision agronomy & soil biomes generate an operating net margin of at least $\\$40,000$ on total contract billings of $\\$270,000$?\n\n(1) Total operating expenses were strictly under 65% of contract billings.\n(2) Operating margin exceeded 20% of contract billings.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "Profit = Revenue - Costs. Statement (1): If costs < 65% of revenue, profit > 35% of revenue. 35% of $\\$255,000$ is at least $\\$89,250$, which is strictly greater than $\\$40,000$. Sufficient.\nStatement (2): 20% of $\\$255,000$ is $\\$51,000$. For smaller revenues, 20% might be $\\$30,000$ or $\\$36,000$ (which could allow profit to be $\\$38,000 < \\$40,000$). Thus Statement (2) is not guaranteed sufficient across baseline tests. Statement (1) ALONE is sufficient.",
        "trap": "Assuming statement (2) guarantees clearing $\\$40,000$ without calculating the 20% threshold.",
        "estSeconds": 95
      },
      {
        "id": "pt08_di06",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "If parameter $p$ is an integer recorded during nitrogen mineral flux calibration on arable cropland sensor array at TerraAgri Systems, is $|p| = p$?\n\n(1) $p^2 = p$\n(2) $p^3 \\ge p$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "$|m| = m$ holds if and only if $m \\ge 0$.\nStatement (1): $m(m - 1) = 0 \\implies m = 0$ or $m = 1$. In both cases, $m \\ge 0$, so $|m| = m$ is definitely true. Sufficient.\nStatement (2): $m^3 - m \\ge 0 \\implies m(m-1)(m+1) \\ge 0$. Integer solutions include $m = -1$ (where $|-1| = 1 \\ne -1$, so NO) as well as $m = 0, 1, 2$ (where YES). Insufficient.\nTherefore, Statement (1) ALONE is sufficient.",
        "trap": "Overlooking $m = -1$ as a valid integer solution to $m^3 \\ge m$.",
        "estSeconds": 105
      },
      {
        "id": "pt08_di07",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Considering the agricultural cooperative audit table, which regional crop division secured the greatest operating profit in dollars?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Biomedical Therapeutics & Kinetics",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-8",
              66,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-8",
              90,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-8",
              52,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-8",
              110,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-8",
              75,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-8",
              69,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The median throughput among units with an Error Rate strictly under 1.0% exceeds 45 k/day. (Yes/No)",
          "Statement 2: The unit with the highest Cost Index also has the highest Error Rate. (Yes/No)",
          "Statement 3: All units with Uptime greater than 99.0% have a Cost Index below 150. (Yes/No)"
        ],
        "answer": "Yes | Yes | Yes",
        "explanation": "Statement 1: Units with error < 1.0% are Alpha, Gamma, Epsilon, Zeta. Throughputs are 45+, 38+, 54+, 48+. Median is (45+48)/2 > 45 k/day -> Yes.\nStatement 2: Unit Delta has Cost Index 180 (highest) and Error Rate 2.1% (highest) -> Yes.\nStatement 3: Units with Uptime > 99.0% are Alpha (110), Gamma (85), Epsilon (125), Zeta (115), all under 150 -> Yes.",
        "trap": "Sorting by the wrong column or taking the mean instead of the median.",
        "estSeconds": 120
      },
      {
        "id": "pt08_di08",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluate operational ranking correlations based on the biomedical therapeutics & kinetics table.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Biomedical Therapeutics & Kinetics",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-8",
              66,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-8",
              90,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-8",
              52,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-8",
              110,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-8",
              75,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-8",
              69,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Sorting descending by Throughput yields an identical ranking as sorting descending by Cost Index. (Yes/No)",
          "Statement 2: Exactly three units have an Error Rate strictly below 0.7%. (Yes/No)",
          "Statement 3: Unit Gamma has both the lowest Throughput and the lowest Error Rate. (Yes/No)"
        ],
        "answer": "No | Yes | Yes",
        "explanation": "Statement 1: Delta is highest in both, but Beta (62, 145) vs Epsilon (54, 125) vs Alpha (45, 110) vs Zeta (48, 115) - Zeta throughput is higher than Alpha but Cost Index is 115 vs 110, order varies -> No.\nStatement 2: Units with error < 0.7% are Alpha (0.4), Gamma (0.2), Zeta (0.6) -> exactly three -> Yes.\nStatement 3: Gamma has lowest throughput (38+) and lowest error (0.2%) -> Yes.",
        "trap": "Assuming throughput and cost index correlate with 1.0 rank correlation.",
        "estSeconds": 115
      },
      {
        "id": "pt08_di09",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If the agricultural cooperative table is sorted from lowest to highest Operating Margin (%), which crop sector occupies the median position?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Biomedical Therapeutics & Kinetics",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-8",
              66,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-8",
              90,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-8",
              52,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-8",
              110,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-8",
              75,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-8",
              69,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Unit Gamma has a Cost Index per throughput unit of less than 2.5. (Yes/No)",
          "Statement 2: The range of Error Rates across all 6 units is strictly greater than 1.8 percentage points. (Yes/No)",
          "Statement 3: More than half of the units have an Uptime exceeding 99.2%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Gamma ratio = 85 / (38+) < 2.5 -> Yes.\nStatement 2: Max error = Delta (2.1%), Min error = Gamma (0.2%). Range = 2.1 - 0.2 = 1.9% > 1.8% -> Yes.\nStatement 3: Units with Uptime > 99.2% are Alpha (99.8), Gamma (99.9), Zeta (99.4) -> 3 out of 6 (wait: exactly half, so strictly more than half is No!) -> Answer: Yes | Yes | No.",
        "trap": "Confusing 'at least half' with 'strictly more than half'.",
        "estSeconds": 125
      },
      {
        "id": "pt08_di10",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Evaluate reliability and risk profiles across units in biomedical therapeutics & kinetics.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Biomedical Therapeutics & Kinetics",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-8",
              66,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-8",
              90,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-8",
              52,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-8",
              110,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-8",
              75,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-8",
              69,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The unit with the highest Throughput also has the lowest Uptime. (Yes/No)",
          "Statement 2: Total combined throughput of the two highest units exceeds 130 k/day. (Yes/No)",
          "Statement 3: Every unit with a Cost Index greater than 120 has an Error Rate above 1.0%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Delta has highest throughput (75+) and lowest uptime (97.5%) -> Yes.\nStatement 2: Top two are Delta (75+) and Beta (62+) = 137+ > 130 -> Yes.\nStatement 3: Unit Epsilon has Cost Index 125 (>120) but Error Rate 0.8% (< 1.0%) -> No.",
        "trap": "Overlooking Unit Epsilon's low error rate despite high cost.",
        "estSeconds": 115
      },
      {
        "id": "pt08_di11",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Referring to the precision agriculture scatter plot correlating ag-tech R&D with cooperative ROIC, as R&D investment grows to 11%, return generally [Select 1], whereas past 11%, it generally [Select 2].",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Biomedical Therapeutics & Kinetics",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 34
            },
            {
              "x": 20,
              "y": 49
            },
            {
              "x": 30,
              "y": 62
            },
            {
              "x": 40,
              "y": 72
            },
            {
              "x": 50,
              "y": 79
            },
            {
              "x": 60,
              "y": 84
            }
          ]
        },
        "options": [
          "Dropdown 1: The overall relationship between Resource Investment and Productivity Output is [strongly positive | strongly negative | sinusoidal | uncorrelated].",
          "Dropdown 2: As Resource Investment increases beyond $40k, the rate of increase in Productivity Output displays [diminishing marginal returns | increasing exponential growth | negative acceleration | zero slope]."
        ],
        "answer": "strongly positive | diminishing marginal returns",
        "explanation": "Dropdown 1: As investment rises from 10 to 60, output rises consistently from 20+ to 70+ -> strongly positive.\nDropdown 2: Between 10 and 30, slope is ~1.4; between 40 and 60, slope drops to ~0.6 -> diminishing marginal returns.",
        "trap": "Confusing diminishing marginal growth with an absolute decline in output.",
        "estSeconds": 105
      },
      {
        "id": "pt08_di12",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "In the agronomy cooperative chart, approximately what percentage of farm parcels with R&D intensity below 6% attained an ROIC above 20%?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Biomedical Therapeutics & Kinetics",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 34
            },
            {
              "x": 20,
              "y": 49
            },
            {
              "x": 30,
              "y": 62
            },
            {
              "x": 40,
              "y": 72
            },
            {
              "x": 50,
              "y": 79
            },
            {
              "x": 60,
              "y": 84
            }
          ]
        },
        "options": [
          "Dropdown 1: The average marginal gain in output per thousand dollars invested between $10k and $30k is approximately [1.4 points/$k | 2.5 points/$k | 3.5 points/$k | 0.5 points/$k].",
          "Dropdown 2: The point with the highest output-to-investment ratio is at an investment of [$10k | $30k | $50k | $60k]."
        ],
        "answer": "1.4 points/$k | $10k",
        "explanation": "Dropdown 1: Slope = (48 - 20) / (30 - 10) = 28 / 20 = 1.4 points/$k.\nDropdown 2: Ratio y/x: At x=10, y/x = 22/10 = 2.2. At x=60, y/x = 72/60 = 1.2. The highest ratio occurs at the earliest stage ($10k).",
        "trap": "Assuming the highest absolute output point ($60k) has the highest efficiency ratio.",
        "estSeconds": 115
      },
      {
        "id": "pt08_di13",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In the precision agronomy chart, the single crop cooperative identified as the greatest positive statistical outlier is defined by which coordinates?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Biomedical Therapeutics & Kinetics",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 34
            },
            {
              "x": 20,
              "y": 49
            },
            {
              "x": 30,
              "y": 62
            },
            {
              "x": 40,
              "y": 72
            },
            {
              "x": 50,
              "y": 79
            },
            {
              "x": 60,
              "y": 84
            }
          ]
        },
        "options": [
          "Dropdown 1: The median investment level across the 6 observed data points is [$35k | $40k | $45k | $50k].",
          "Dropdown 2: A firm investing $45k would be projected by linear interpolation to produce an output index of approximately [61.5 | 68.0 | 72.5 | 55.0]."
        ],
        "answer": "$35k | 61.5",
        "explanation": "Dropdown 1: Ordered x: 10, 20, 30, 40, 50, 60. Median = (30 + 40)/2 = $35k.\nDropdown 2: Between x=40 (y~58) and x=50 (y~65), midpoint x=45 gives y = (58 + 65)/2 = 61.5.",
        "trap": "Extrapolating using the steep slope from the early segment.",
        "estSeconds": 110
      },
      {
        "id": "pt08_di14",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If an operating facility at TerraAgri Systems reduces its expenditure from 16% down to 10% along the regression curve for nitrogen mineralization, what is the expected change in its performance index?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Biomedical Therapeutics & Kinetics",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 34
            },
            {
              "x": 20,
              "y": 49
            },
            {
              "x": 30,
              "y": 62
            },
            {
              "x": 40,
              "y": 72
            },
            {
              "x": 50,
              "y": 79
            },
            {
              "x": 60,
              "y": 84
            }
          ]
        },
        "options": [
          "Dropdown 1: Increasing investment from $50k to $60k yields a percentage increase in output of approximately [7% | 15% | 25% | 35%].",
          "Dropdown 2: If fixed costs require an output index of at least 50 to break even, the minimum necessary investment is approximately [$32k | $22k | $42k | $15k]."
        ],
        "answer": "7% | $32k",
        "explanation": "Dropdown 1: At x=50, y~67. At x=60, y~72. Change = 5 / 67 ~ 7.4%.\nDropdown 2: At x=30, y~48; at x=40, y~58. Output 50 is reached just past $30k (approx $32k).",
        "trap": "Calculating percentage increase based on investment (20%) instead of output (7%).",
        "estSeconds": 115
      },
      {
        "id": "pt08_di15",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "At TerraAgri Systems, a capital allocation of $78 million is split between arable cropland sensor array (Asset X) and secondary infrastructure (Asset Y). The allocation to Asset X is exactly 5 times the allocation to Asset Y. Select the dollar allocation for Asset X and Asset Y.\n\nValues: Asset X = $65M, Asset Y = $13M.",
        "options": [
          "Grade A: 54 liters",
          "Grade B: 27 liters"
        ],
        "answer": "Grade A = 54 | Grade B = 27",
        "explanation": "Alligation: Ratio of Grade A to Grade B is $|50 - 30| : |30 - 20| = 20 : 10 = 2 : 1$. Total volume is 81 liters. Grade A $= 2/3 \\times 81 = 54$ liters, Grade B $= 1/3 \\times 81 = 27$ liters.",
        "trap": "Reversing the 2:1 ratio between Grade A and Grade B.",
        "estSeconds": 125
      },
      {
        "id": "pt08_di16",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Two parameters $U$ and $V$ in biomedical therapeutics & kinetics satisfy the linear system: $2U + 3V = 63$ and $U - V = 4$.\n\nSelect the value of $U$ and the value of $V$ that satisfy both equations.",
        "options": [
          "U: 15",
          "V: 11"
        ],
        "answer": "U = 15 | V = 11",
        "explanation": "Substitute $U = V + 4$: $2(V + 4) + 3V = 5V + 8 = 63 \\implies 5V = 55 \\implies V = 11$. Then $U = 11 + 4 = 15$.",
        "trap": "Sign error when expanding 2(V + 4).",
        "estSeconds: 105": 105,
        "estSeconds": 105
      },
      {
        "id": "pt08_di17",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "At TerraAgri Systems, Pump Alpha fills an emergency containment reservoir for nitrogen mineral flux calibration in 14 hours working alone. Working together, Pump Alpha and Pump Beta fill the reservoir in 8.4 hours. Select the time for Pump Alpha and Pump Beta working alone.",
        "options": [
          "High-Yield Debt: \\$400,000",
          "Treasury Notes: \\$600,000"
        ],
        "answer": "High-Yield = $400,000 | Treasury = $600,000",
        "explanation": "Alligation: Ratio of High-Yield to Treasury is $|3 - 5| : |8 - 5| = 2 : 3$. Fraction in High-Yield is $2/5 = 40\\% = \\$400,000$. Fraction in Treasury is $3/5 = 60\\% = \\$600,000$.",
        "trap": "Inverting the 2:3 ratio to 3:2.",
        "estSeconds": 120
      },
      {
        "id": "pt08_di18",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluating the Project Charter and Financial Audit tabs for TerraAgri Systems, what is the total upfront capital investment required for deploying arable cropland sensor array across all branch facilities?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Biomedical Therapeutics & Kinetics",
              "content": "Directive 8.4 regarding Biomedical Therapeutics & Kinetics:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 8:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant North only",
          "Plant North and Plant West only",
          "Plant South and Plant West only",
          "Plant North, Plant South, and Plant West",
          "None of the facilities"
        ],
        "answer": "A",
        "explanation": "Tab 1 specifies that a score of at least 90 is required for expedited licensing. Tab 2 shows only Plant North scored >= 90 (score 92). Plant West scored 88 (< 90). Thus, Plant North only qualifies.",
        "trap": "Assuming Plant West qualifies because of its 6-year history (history only grants exemption from review, not expedited licensing).",
        "estSeconds": 120
      },
      {
        "id": "pt08_di19",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Which facility at TerraAgri Systems is subject to mandatory operational review according to the regulatory directive for precision agronomy & soil biomes and the audit inspection records?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Biomedical Therapeutics & Kinetics",
              "content": "Directive 8.4 regarding Biomedical Therapeutics & Kinetics:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 8:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant East only",
          "Plant South and Plant East only",
          "Plant South only",
          "Plant North and Plant East only",
          "All four plants"
        ],
        "answer": "A",
        "explanation": "Plants scoring below 85 are Plant South (84) and Plant East (79). However, Tab 1 exempts facilities operating >5 years with zero violations. Plant South has operated 7 years with 0 violations (exempt). Plant East has only 2 years and has a violation, so it is the ONLY plant subject to mandatory review.",
        "trap": "Failing to check Plant South's 7-year zero-violation exemption in Tab 1.",
        "estSeconds": 130
      },
      {
        "id": "pt08_di20",
        "test": 8,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Evaluating information across all three tabs for precision agronomy & soil biomes, which strategic conclusion regarding the financial return of deploying arable cropland sensor array is most strongly supported?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Biomedical Therapeutics & Kinetics",
              "content": "Directive 8.4 regarding Biomedical Therapeutics & Kinetics:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 8:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "No, because it has an active safety violation recorded in the preceding 12 months.",
          "Yes, provided it files the paperwork within 14 business days.",
          "Yes, because its compliance score was within 10 points of the 85 threshold.",
          "No, because only facilities with more than 5 years operating history can file stays.",
          "Yes, because emergency stays are automatically granted to all facilities."
        ],
        "answer": "A",
        "explanation": "Tab 3 explicitly states: 'No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay.' Plant East has 1 safety violation (Tab 2), disqualifying it completely.",
        "trap": "Focusing only on the 14-day filing window without checking the violation disqualification rule.",
        "estSeconds": 115
      }
    ]
  },
  {
    "testNumber": 9,
    "id": "pt_09",
    "title": "Official Focus Mock #9 (Full 64-Q Simulation)",
    "date": "2025-05-28",
    "totalScore": 725,
    "quantScore": 83,
    "verbalScore": 82,
    "dataInsightsScore": 81,
    "structure": {
      "quantQuestions": 21,
      "verbalQuestions": 23,
      "dataInsightsQuestions": 20,
      "total": 64,
      "durationMinutes": 135
    },
    "questions": [
      {
        "id": "pt09_q01",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In urban transit systems & electrification, a barcode serial integer $n$ satisfies that $n^2 - 1$ is divisible by prime $37$. If $1 < n < 37$, how many integer values can $n$ assume?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "36"
        ],
        "answer": "B",
        "explanation": "Since $n^2 - 1 = (n - 1)(n + 1)$ is divisible by prime 37, by Euclid's lemma either 37 divides $(n - 1)$ or 37 divides $(n + 1)$. Given $1 < n < 37$, $n - 1 < 37$, so 37 cannot divide $n - 1$. For 37 to divide $n + 1$, we must have $n + 1 = 37 \\implies n = 36$. Thus, exactly 1 integer value ($n = 36$) satisfies the condition.",
        "trap": "Assuming both $(n - 1)$ and $(n + 1)$ can yield solutions within the open interval $(1, p)$.",
        "estSeconds": 90
      },
      {
        "id": "pt09_q02",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "At OpticWave Networks, Fiber Infrastructure Engineer monitors two operational units: Primary Unit Alpha completes a full cycle of optical signal dispersion attenuation in 13 hours working alone, whereas Secondary Unit Beta requires 26 hours alone. If both units operate simultaneously at their constant rates to complete the cycle on a shared dense wavelength multiplexing transponder, how many hours will they take together?",
        "options": [
          "8.83",
          "9.33",
          "9.83",
          "21.00",
          "10.50"
        ],
        "answer": "B",
        "explanation": "Combined rate $R = 1/14 + 1/28 = 3/28$. Time $T = 1/R = 28/3 = 9.33$ hours.",
        "trap": "Taking the arithmetic average of the two individual times.",
        "estSeconds: 85": 85,
        "estSeconds": 85
      },
      {
        "id": "pt09_q03",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "A telecommunications vendor marks up fiber optic transceivers by 32% for standard quotes, then provides telecom carriers a 16% preferred partner discount. What net percentage profit over vendor cost is secured?",
        "options": [
          "11.0%",
          "10.9%",
          "16.0%",
          "14.9%",
          "21.0%"
        ],
        "answer": "B",
        "explanation": "Multiplier $= (1 + 0.32) \\times (1 - 0.16) = 1.1088$. Net profit percentage $= (1.1088 - 1) \\times 100 = 10.9\\%$.",
        "trap": "Subtracting the percentages directly (32% - 16% = 16%).",
        "estSeconds": 90
      },
      {
        "id": "pt09_q04",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a mathematical model tracking dispersion index at OpticWave Networks, the exponent variable $x$ satisfies $3^{2x+1} - $3^{2x-1} = 17496$. What is the value of $x^2 + x$?",
        "options": [
          "10",
          "12",
          "14",
          "16",
          "15"
        ],
        "answer": "B",
        "explanation": "Factor out $2^{2x-1}$: $2^{2x-1}(2^2 - 1) = 32(2^2 - 1)$. Equating exponents: $2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$. Then $x^2 + x = 3^2 + 3 = 12$.",
        "trap": "Miscalculating the factored term $(base^2 - 1)$.",
        "estSeconds": 100
      },
      {
        "id": "pt09_q05",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Inequalities & Absolute Values",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "During a tolerance check on dense wavelength multiplexing transponder measurements at OpticWave Networks, how many integer values of $k$ satisfy the inequality $|2k - 14| \\le 29$?",
        "options": [
          "27",
          "28",
          "29",
          "30",
          "26"
        ],
        "answer": "B",
        "explanation": "Expand absolute value: $-27 \\le 2k - 13 \\le 27 \\implies -14 \\le 2k \\le 40 \\implies -7.0 \\le k \\le 20.0$. Length of interval for integers is strictly 28.",
        "trap": "Neglecting to include both endpoints when calculating inclusive integer count.",
        "estSeconds": 95
      },
      {
        "id": "pt09_q06",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A fiber node measures 7 distinct positive integer optical packet drop counts over hourly windows, yielding a median of 32 and a mean of 37. What is the maximum possible packet drop count in a single window?",
        "options": [
          "191",
          "193",
          "195",
          "197",
          "199"
        ],
        "answer": "C",
        "explanation": "To maximize $x_7$, minimize elements 1, 2, 3, 5, 6. Minimum distinct positive integers: $x_1=1, x_2=2, x_3=3$. Given median $x_4 = 44$. Minimum distinct integers above median: $x_5 = 45, x_6 = 46$. Sum of all 7 integers $= 7 \\times 48 = 336$. Subtracting the 6 minimal values leaves maximum $x_7 = 195$.",
        "trap": "Allowing integers above median to equal the median rather than being strictly distinct.",
        "estSeconds": 115
      },
      {
        "id": "pt09_q07",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A telecommunications network squad of 4 specialists is assembled from 7 fiber optical architects and 4 microwave transmission experts. If at least 2 fiber architects and at least 1 microwave expert must serve, how many squads can be appointed?",
        "options": [
          "116",
          "121",
          "126",
          "131",
          "136"
        ],
        "answer": "C",
        "explanation": "Ways to select 2 hardware engineers from 7: $\\binom{7}{2} = 21$. Ways to select 2 software architects from 4: $\\binom{4}{2} = 6$. Total distinct combinations $= 21 \\times 6 = 126$.",
        "trap": "Adding the combinations instead of multiplying.",
        "estSeconds": 105
      },
      {
        "id": "pt09_q08",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In optical wavelength encoding algorithms, what is the maximum integer value of $k$ such that $3^k$ divides $75!$ without leaving a remainder?",
        "options": [
          "17",
          "18",
          "19",
          "20",
          "21"
        ],
        "answer": "C",
        "explanation": "Powers of 10 in a factorial are limited by prime factor 5. Using Legendre's formula: $\\lfloor 80/5 \\rfloor + \\lfloor 80/25 \\rfloor = 16 + 3 = 19$. Thus $k = 19$.",
        "trap": "Counting powers of 2 or stopping after first division by 5.",
        "estSeconds": 90
      },
      {
        "id": "pt09_q09",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "A fiber installation team drives an outbound route of distance $D$ at 59 mph, and returns at 118 mph. What is the team's average speed for the round journey?",
        "options": [
          "69.6",
          "74.0",
          "71.6",
          "67.6",
          "75.5"
        ],
        "answer": "A",
        "explanation": "Average speed over equal distances is the harmonic mean: $V = \\frac{2 s_1 s_2}{s_1 + s_2} = \\frac{2 \\times 56 \\times 92}{148} = 69.6$ mph.",
        "trap": "Choosing the arithmetic mean (option B).",
        "estSeconds": 80
      },
      {
        "id": "pt09_q10",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A fiber cable coating vat contains 85 liters of polymer solvent containing 30% protective resin. How many liters of pure thinner must be mixed in to dilute the mixture to 15% resin?",
        "options": [
          "76",
          "78",
          "80",
          "82",
          "84"
        ],
        "answer": "C",
        "explanation": "Solvent mass is constant: $0.30 \\times 70 = 0.14 \\times (70 + w) \\implies 70 + w = 150 \\implies w = 80$ liters.",
        "trap": "Reporting total final volume rather than added water.",
        "estSeconds": 95
      },
      {
        "id": "pt09_q11",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Sequences & Series",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In an arithmetic sequence monitoring urban transit systems & electrification production batches, the first term is 12 and the common difference between consecutive terms is 5. What is the sum of the first 15 terms of this sequence?",
        "options": [
          "690",
          "697",
          "705",
          "713",
          "720"
        ],
        "answer": "C",
        "explanation": "Sum formula $S_{15} = \\frac{15}{2} [2(12) + 14(5)] = 15 \\times [12 + 7(5)] = 705$.",
        "trap": "Using 15d instead of (n-1)d in the summation formula.",
        "estSeconds": 90
      },
      {
        "id": "pt09_q12",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Overlapping Sets",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Among 180 technical facilities surveyed in urban transit systems & electrification, 82 have implemented Protocol A, 72 have implemented Protocol B, and 13 have implemented neither. How many facilities have implemented BOTH Protocol A and Protocol B?",
        "options": [
          "-17",
          "-15",
          "-13",
          "-11",
          "-9"
        ],
        "answer": "C",
        "explanation": "Facilities with at least one protocol $= 180 - 13 = 167$. By inclusion-exclusion: $|A \\cap B| = |A| + |B| - |A \\cup B| = 82 + 72 - 167 = -13$.",
        "trap": "Subtracting neither from both sets individually.",
        "estSeconds": 85
      },
      {
        "id": "pt09_q13",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A fiber optic splice kit contains 4 red connector sleeves and 6 blue connector sleeves. If a technician selects 3 sleeves at random without replacement, what is the probability that exactly 2 are red?",
        "options": [
          "\\frac{25}{55}",
          "\\frac{26}{55}",
          "\\frac{27}{55}",
          "\\frac{28}{55}",
          "\\frac{29}{55}"
        ],
        "answer": "C",
        "explanation": "Ways to draw two compliant parts: $\\binom{7}{2} = 21$. Ways to draw two defective parts: $\\binom{4}{2} = 6$. Total favorable $= 27$. Total unrestricted pairs: $\\binom{11}{2} = 55$. Probability $= 27/55$.",
        "trap": "Assuming sampling with replacement.",
        "estSeconds": 100
      },
      {
        "id": "pt09_q14",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Quadratics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "An optical wave propagation quadratic $x^2 - 24x + K = 0$ yields two positive integer roots differing by 2. What is the value of $K$?",
        "options": [
          "164",
          "166",
          "168",
          "170",
          "172"
        ],
        "answer": "C",
        "explanation": "Let roots be $r_1$ and $r_2$. Sum $r_1 + r_2 = 26$, and difference $r_2 - r_1 = 2$. Solving gives roots $r_1 = 12$ and $r_2 = 14$. By Vieta's formulas, $K = r_1 \\times r_2 = 12 \\times 14 = 168$.",
        "trap": "Adding the roots rather than multiplying for the constant term $K$.",
        "estSeconds": 85
      },
      {
        "id": "pt09_q15",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In an algorithmic encryption routine for dense optical telecommunications, what is the units digit of the integer evaluation $7^{79} + 3$?",
        "options": [
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": "C",
        "explanation": "Powers of 7 cycle in units digits: $7^1 \\rightarrow 7, 7^2 \\rightarrow 9, 7^3 \\rightarrow 3, 7^4 \\rightarrow 1$. Exponent $75 \\equiv 3 \\pmod 4$, so $7^{75}$ ends in 3. Adding 3 gives a units digit of $(3 + 3) \\pmod 10 = 6$.",
        "trap": "Failing to apply base-4 cyclicity to the exponent.",
        "estSeconds": 80
      },
      {
        "id": "pt09_q16",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Coordinate & Analytical Geometry",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In a Cartesian telemetry grid mapping dense wavelength multiplexing transponder coordinates for OpticWave Networks, line $L_1$ passes through $(0, 14)$ and $(12, 0)$. If perpendicular line $L_2$ intersects the origin $(0, 0)$, what is the slope of line $L_2$?",
        "options": [
          "\\frac{11}{13}",
          "-\\frac{11}{13}",
          "\\frac{13}{11}",
          "-\\frac{13}{11}",
          "1"
        ],
        "answer": "A",
        "explanation": "Slope of $L_1$ is $m_1 = \\frac{0 - 13}{11 - 0} = -\\frac{13}{11}$. Perpendicular slope $m_2 = -1/m_1 = \\frac{11}{13}$.",
        "trap": "Inverting without negating (option B or C).",
        "estSeconds: 75": 75,
        "estSeconds": 75
      },
      {
        "id": "pt09_q17",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sensor calibration test in urban transit systems & electrification, the standard deviation of pressure readings was 5.0 psi. If each reading is multiplied by 1.25 and then decreased by 3.5 psi, what is the standard deviation of the transformed readings in psi?",
        "options": [
          "2.75",
          "6.25",
          "5.00",
          "9.75",
          "7.50"
        ],
        "answer": "B",
        "explanation": "Standard deviation is unaffected by the subtraction of a constant (-3.5), but scales by $|1.25|$: $\\sigma_{new} = 1.25 \\times 5.0 = 6.25$ psi.",
        "trap": "Subtracting 3.5 from the standard deviation (option A).",
        "estSeconds": 70
      },
      {
        "id": "pt09_q18",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In dense optical telecommunications, replacement parts for dense wavelength multiplexing transponder at OpticWave Networks are packaged strictly in quantities of 5 or 8 units. What is the greatest integer number of units that cannot be assembled using non-negative combinations of these packages?",
        "options": [
          "15",
          "16",
          "17",
          "18",
          "19"
        ],
        "answer": "C",
        "explanation": "By the Frobenius Coin Formula for coprime integers $a$ and $b$, the largest non-constructible integer is $ab - a - b = (4)(7) - 4 - 7 = 17$.",
        "trap": "Computing ab directly without subtracting (a + b).",
        "estSeconds": 110
      },
      {
        "id": "pt09_q19",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "When the two digits of an optical wavelength channel number $N$ are reversed, the resulting number exceeds $N$ by 45. What is the difference between the units digit and tens digit of $N$?",
        "options": [
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "answer": "C",
        "explanation": "$(10B + A) - (10A + B) = 9(B - A) = 36 \\implies B - A = 4$.",
        "trap": "Confusing (B - A) with (A - B).",
        "estSeconds": 75
      },
      {
        "id": "pt09_q20",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A capital expenditure allocation of $\\$12,000$ in urban transit systems & electrification appreciates at an annual rate of 10% compounded semi-annually. What is the total accumulated interest after 1 year?",
        "options": [
          "\\$1,200",
          "\\$1,230",
          "\\$1,260",
          "\\$1,320",
          "\\$1,350"
        ],
        "answer": "B",
        "explanation": "Semi-annual rate is 5% over 2 periods. Multiplier is $(1.05)^2 = 1.1025$. Interest $= 12000 \\times 0.1025 = \\$1,230$.",
        "trap": "Calculating simple interest at 10% (option A).",
        "estSeconds": 90
      },
      {
        "id": "pt09_q21",
        "test": 9,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "For all positive real numbers $u$ and $v$ modeling dispersion index at OpticWave Networks, an operational operator $\\star$ is defined by $u \\star v = \\frac{u^2 - v^2}{u - v}$. What is the numerical value of $15 \\star 3$?",
        "options": [
          "\\frac{2}{2}",
          "\\frac{2}{3}",
          "\\frac{2}{4}",
          "2",
          "1"
        ],
        "answer": "B",
        "explanation": "$2 \\diamond 2 = \\frac{2 \\times 2}{2 + 2 + 2} = \\frac{2^2}{3(2)} = \\frac{2}{3}$.",
        "trap": "Adding the constants in the denominator incorrectly.",
        "estSeconds": 85
      },
      {
        "id": "pt09_v01",
        "test": 9,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 6,
        "passage": "The sudden disappearance of dozens of genera of large mammals across North America approximately 13,000 years ago has sparked contentious scientific debate between the 'overkill hypothesis,' which blames expanding human Clovis hunters, and the 'climate-change hypothesis,' which cites abrupt Younger Dryas ecological shifts.\n\nRecent high-resolution sedimentary ancient DNA (sedaDNA) analyses from permafrost cores indicate that megafaunal population collapses preceded human arrival in several key geographic corridors, coinciding with rapid vegetational shifts from nutrient-dense steppe-tundra to mossy spruce woodlands. Rather than a single catastrophic anthropogenic blitzkrieg, the extinction appears to have been an ecological multi-factor collapse where human predation delivered the coup de grace to populations already stressed by habitat fragmentation.",
        "stem": "The primary purpose of the passage on pleistocene megafauna extinction hypotheses is to:",
        "options": [
          "Refute an established scientific doctrine by demonstrating that earlier measurements were entirely fraudulent.",
          "Challenge a traditional foundational model by presenting recent empirical evidence that supports an alternative paradigm.",
          "Reconcile two competing historical hypotheses by proposing a hybrid theoretical compromise.",
          "Advocate for the immediate cessation of field testing until biochemical instruments are standardized.",
          "Prove that evolutionary biological adaptations occur exclusively through physical genomic sequence alterations."
        ],
        "answer": "B",
        "explanation": "The passage outlines a traditional, long-standing theoretical assumption in its opening paragraph, then introduces modern empirical methodologies that challenge that framework and suggest a more dynamic mechanism.",
        "trap": "Selecting option A, which uses extreme, accusatory language ('entirely fraudulent') unsupported by the text.",
        "estSeconds": 100
      },
      {
        "id": "pt09_v02",
        "test": 9,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "The sudden disappearance of dozens of genera of large mammals across North America approximately 13,000 years ago has sparked contentious scientific debate between the 'overkill hypothesis,' which blames expanding human Clovis hunters, and the 'climate-change hypothesis,' which cites abrupt Younger Dryas ecological shifts.\n\nRecent high-resolution sedimentary ancient DNA (sedaDNA) analyses from permafrost cores indicate that megafaunal population collapses preceded human arrival in several key geographic corridors, coinciding with rapid vegetational shifts from nutrient-dense steppe-tundra to mossy spruce woodlands. Rather than a single catastrophic anthropogenic blitzkrieg, the extinction appears to have been an ecological multi-factor collapse where human predation delivered the coup de grace to populations already stressed by habitat fragmentation.",
        "stem": "It can be inferred from the passage on pleistocene megafauna extinction hypotheses that proponents of the earlier model assumed that:",
        "options": [
          "Biological systems exhibit extensive behavioral plasticity when subjected to environmental shifts.",
          "Observed physical phenomena were governed primarily by static or localized equilibrium constraints.",
          "Molecular sequencing technologies would permanently confirm traditional observational hypotheses.",
          "Nutrient availability was completely uniform across all ecological micro-habitats.",
          "Adaptive modifications could be transmitted across generations without physical nucleotide changes."
        ],
        "answer": "B",
        "explanation": "The passage notes that the classical model assumed static, rigid constraints (e.g., rigid niche partitioning, exclusive nucleotide dependence, or uniform competition) before modern dynamic evidence emerged.",
        "trap": "Confusing the revisionist perspective with the traditional hypothesis being evaluated.",
        "estSeconds": 110
      },
      {
        "id": "pt09_v03",
        "test": 9,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "The sudden disappearance of dozens of genera of large mammals across North America approximately 13,000 years ago has sparked contentious scientific debate between the 'overkill hypothesis,' which blames expanding human Clovis hunters, and the 'climate-change hypothesis,' which cites abrupt Younger Dryas ecological shifts.\n\nRecent high-resolution sedimentary ancient DNA (sedaDNA) analyses from permafrost cores indicate that megafaunal population collapses preceded human arrival in several key geographic corridors, coinciding with rapid vegetational shifts from nutrient-dense steppe-tundra to mossy spruce woodlands. Rather than a single catastrophic anthropogenic blitzkrieg, the extinction appears to have been an ecological multi-factor collapse where human predation delivered the coup de grace to populations already stressed by habitat fragmentation.",
        "stem": "According to the second paragraph of the passage on pleistocene megafauna extinction hypotheses, the newly discovered mechanism is significant primarily because it:",
        "options": [
          "Eliminates all scientific uncertainty surrounding global atmospheric convection.",
          "Demonstrates that biological entities can adapt or function through pathways previously deemed impossible or secondary.",
          "Proves that evolutionary mutations occur at a constant mathematical rate across geological epochs.",
          "Forces commercial enterprises to halt exploratory drilling operations immediately.",
          "Refutes the universal applicability of thermodynamic physical laws."
        ],
        "answer": "B",
        "explanation": "Paragraph 2 reveals an independent or dynamic pathway (e.g. chemolithoautotrophy, epigenetic inheritance, leading-edge vortices, or mycorrhizal resource sharing) that classical science deemed impossible or minor.",
        "trap": "Selecting an overly grandiose claim that the finding overturns fundamental thermodynamic laws (option E).",
        "estSeconds": 95
      },
      {
        "id": "pt09_v04",
        "test": 9,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "The sudden disappearance of dozens of genera of large mammals across North America approximately 13,000 years ago has sparked contentious scientific debate between the 'overkill hypothesis,' which blames expanding human Clovis hunters, and the 'climate-change hypothesis,' which cites abrupt Younger Dryas ecological shifts.\n\nRecent high-resolution sedimentary ancient DNA (sedaDNA) analyses from permafrost cores indicate that megafaunal population collapses preceded human arrival in several key geographic corridors, coinciding with rapid vegetational shifts from nutrient-dense steppe-tundra to mossy spruce woodlands. Rather than a single catastrophic anthropogenic blitzkrieg, the extinction appears to have been an ecological multi-factor collapse where human predation delivered the coup de grace to populations already stressed by habitat fragmentation.",
        "stem": "The author\u2019s attitude toward the traditional scientific framework in pleistocene megafauna extinction hypotheses can best be described as:",
        "options": [
          "Uncompromisingly hostile and dismissive of historical scholars.",
          "Respectful of its historical role while emphasizing its conceptual limitations in light of recent findings.",
          "Enthusiastically supportive of its continuing supremacy over modern data.",
          "Indifferent to its theoretical and practical consequences.",
          "Skeptical of whether any scientific paradigm can ever be empirically tested."
        ],
        "answer": "B",
        "explanation": "The author treats the historical paradigm with measured academic respect ('long held', 'classical framework') while clearly identifying its empirical limitations.",
        "trap": "Choosing an exaggerated emotional descriptor like hostile or indifferent.",
        "estSeconds": 100
      },
      {
        "id": "pt09_v05",
        "test": 9,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "The sudden disappearance of dozens of genera of large mammals across North America approximately 13,000 years ago has sparked contentious scientific debate between the 'overkill hypothesis,' which blames expanding human Clovis hunters, and the 'climate-change hypothesis,' which cites abrupt Younger Dryas ecological shifts.\n\nRecent high-resolution sedimentary ancient DNA (sedaDNA) analyses from permafrost cores indicate that megafaunal population collapses preceded human arrival in several key geographic corridors, coinciding with rapid vegetational shifts from nutrient-dense steppe-tundra to mossy spruce woodlands. Rather than a single catastrophic anthropogenic blitzkrieg, the extinction appears to have been an ecological multi-factor collapse where human predation delivered the coup de grace to populations already stressed by habitat fragmentation.",
        "stem": "In the examination of Photosystem II water oxidation, which femtosecond crystallographic method captured diffraction images before radiation damage destroyed the manganese cluster?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on pleistocene megafauna extinction hypotheses is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt09_v06",
        "test": 9,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 8,
        "passage": "The sudden disappearance of dozens of genera of large mammals across North America approximately 13,000 years ago has sparked contentious scientific debate between the 'overkill hypothesis,' which blames expanding human Clovis hunters, and the 'climate-change hypothesis,' which cites abrupt Younger Dryas ecological shifts.\n\nRecent high-resolution sedimentary ancient DNA (sedaDNA) analyses from permafrost cores indicate that megafaunal population collapses preceded human arrival in several key geographic corridors, coinciding with rapid vegetational shifts from nutrient-dense steppe-tundra to mossy spruce woodlands. Rather than a single catastrophic anthropogenic blitzkrieg, the extinction appears to have been an ecological multi-factor collapse where human predation delivered the coup de grace to populations already stressed by habitat fragmentation.",
        "stem": "The author would most likely endorse which of the following conclusions regarding the catalytic mechanism of biological water oxidation?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on pleistocene megafauna extinction hypotheses is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt09_v07",
        "test": 9,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 9,
        "passage": "The sudden disappearance of dozens of genera of large mammals across North America approximately 13,000 years ago has sparked contentious scientific debate between the 'overkill hypothesis,' which blames expanding human Clovis hunters, and the 'climate-change hypothesis,' which cites abrupt Younger Dryas ecological shifts.\n\nRecent high-resolution sedimentary ancient DNA (sedaDNA) analyses from permafrost cores indicate that megafaunal population collapses preceded human arrival in several key geographic corridors, coinciding with rapid vegetational shifts from nutrient-dense steppe-tundra to mossy spruce woodlands. Rather than a single catastrophic anthropogenic blitzkrieg, the extinction appears to have been an ecological multi-factor collapse where human predation delivered the coup de grace to populations already stressed by habitat fragmentation.",
        "stem": "Which of the following best characterizes the rhetorical organization and logical progression of the passage analyzing dense optical telecommunications?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on pleistocene megafauna extinction hypotheses is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt09_v08",
        "test": 9,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "The sudden disappearance of dozens of genera of large mammals across North America approximately 13,000 years ago has sparked contentious scientific debate between the 'overkill hypothesis,' which blames expanding human Clovis hunters, and the 'climate-change hypothesis,' which cites abrupt Younger Dryas ecological shifts.\n\nRecent high-resolution sedimentary ancient DNA (sedaDNA) analyses from permafrost cores indicate that megafaunal population collapses preceded human arrival in several key geographic corridors, coinciding with rapid vegetational shifts from nutrient-dense steppe-tundra to mossy spruce woodlands. Rather than a single catastrophic anthropogenic blitzkrieg, the extinction appears to have been an ecological multi-factor collapse where human predation delivered the coup de grace to populations already stressed by habitat fragmentation.",
        "stem": "In the context of the second paragraph of the passage on dense optical telecommunications, the author's primary analytical focus centers on:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on pleistocene megafauna extinction hypotheses is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt09_v09",
        "test": 9,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "The sudden disappearance of dozens of genera of large mammals across North America approximately 13,000 years ago has sparked contentious scientific debate between the 'overkill hypothesis,' which blames expanding human Clovis hunters, and the 'climate-change hypothesis,' which cites abrupt Younger Dryas ecological shifts.\n\nRecent high-resolution sedimentary ancient DNA (sedaDNA) analyses from permafrost cores indicate that megafaunal population collapses preceded human arrival in several key geographic corridors, coinciding with rapid vegetational shifts from nutrient-dense steppe-tundra to mossy spruce woodlands. Rather than a single catastrophic anthropogenic blitzkrieg, the extinction appears to have been an ecological multi-factor collapse where human predation delivered the coup de grace to populations already stressed by habitat fragmentation.",
        "stem": "The author introduces competing hypotheses and potential criticisms in the discussion of dense optical telecommunications primarily in order to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on pleistocene megafauna extinction hypotheses is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt09_v10",
        "test": 9,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 9,
        "passage": "The sudden disappearance of dozens of genera of large mammals across North America approximately 13,000 years ago has sparked contentious scientific debate between the 'overkill hypothesis,' which blames expanding human Clovis hunters, and the 'climate-change hypothesis,' which cites abrupt Younger Dryas ecological shifts.\n\nRecent high-resolution sedimentary ancient DNA (sedaDNA) analyses from permafrost cores indicate that megafaunal population collapses preceded human arrival in several key geographic corridors, coinciding with rapid vegetational shifts from nutrient-dense steppe-tundra to mossy spruce woodlands. Rather than a single catastrophic anthropogenic blitzkrieg, the extinction appears to have been an ecological multi-factor collapse where human predation delivered the coup de grace to populations already stressed by habitat fragmentation.",
        "stem": "Based on the serial femtosecond crystallographic snapshots, how would biophysicists interpret the structural kinetics of artificial water-splitting catalysts?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on pleistocene megafauna extinction hypotheses is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt09_v11",
        "test": 9,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "The sudden disappearance of dozens of genera of large mammals across North America approximately 13,000 years ago has sparked contentious scientific debate between the 'overkill hypothesis,' which blames expanding human Clovis hunters, and the 'climate-change hypothesis,' which cites abrupt Younger Dryas ecological shifts.\n\nRecent high-resolution sedimentary ancient DNA (sedaDNA) analyses from permafrost cores indicate that megafaunal population collapses preceded human arrival in several key geographic corridors, coinciding with rapid vegetational shifts from nutrient-dense steppe-tundra to mossy spruce woodlands. Rather than a single catastrophic anthropogenic blitzkrieg, the extinction appears to have been an ecological multi-factor collapse where human predation delivered the coup de grace to populations already stressed by habitat fragmentation.",
        "stem": "The passage indicates that future scientific and operational frameworks in dense optical telecommunications will be required to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on pleistocene megafauna extinction hypotheses is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt09_v12",
        "test": 9,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Fiber Infrastructure Engineer at OpticWave Networks: \"Deploying dense wavelength multiplexing transponder will enable our division to optimize dispersion index within twelve months. Therefore, the executive steering committee must approve our funding request without delay.\"\n\nWhich of the following is an unstated assumption upon which the fiber infrastructure engineer's argument depends?",
        "options": [
          "The policy will not inadvertently trigger executive compensation metrics that cancels out the expected gains.",
          "The capital allocation required is strictly less than any expenditure approved in the prior fiscal year.",
          "No neighboring jurisdictions have considered implementing similar regulatory policies.",
          "The personnel tasked with enforcing the policy have completed postgraduate compliance degrees.",
          "Public opinion surveys indicate universal consumer enthusiasm for the initiative."
        ],
        "answer": "A",
        "explanation": "Negation test: If the policy DOES trigger executive compensation metrics that cancels out the expected gains, the goal of long-term capital R&D investment will fail, collapsing the argument.",
        "trap": "Focusing on administrative trivia (degree qualifications) or budget comparisons.",
        "estSeconds": 115
      },
      {
        "id": "pt09_v13",
        "test": 9,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Operations Analyst at OpticWave Networks: \"A three-month pilot deployment of dense wavelength multiplexing transponder in region Alpha yielded a 25% improvement in dispersion index. This empirical result establishes that dense wavelength multiplexing transponder was the direct causal driver of the observed efficiency gain.\"\n\nWhich of the following, if true, most seriously undermines the analyst's causal conclusion?",
        "options": [
          "Test district Alpha simultaneously experienced a major external demographic shift that naturally produces high baseline performance.",
          "The software utilized to compile test results was upgraded three weeks prior to the pilot rollout.",
          "Several junior employees in district Alpha reported working five additional overtime hours during the pilot.",
          "The cost of the pilot study was covered by a philanthropic research grant rather than operating revenue.",
          "Competing firms in the same industry have not yet published their quarterly operational statistics."
        ],
        "answer": "A",
        "explanation": "Introducing an external confounding variable (simultaneous demographic shift) directly attacks the causal attribution made by the consultant.",
        "trap": "Pointing out that the pilot was grant-funded, which affects replication finances but not the validity of the pilot's causal data.",
        "estSeconds": 110
      },
      {
        "id": "pt09_v14",
        "test": 9,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Strategy Director at OpticWave Networks: \"Allocating capital toward dense wavelength multiplexing transponder represents the most effective strategic pathway for our firm to expand dispersion index.\"\n\nWhich of the following, if true, provides the strongest corroborating evidence for the director's assertion?",
        "options": [
          "In extensive blind controlled trials across diverse industry segments, organizations adopting Stock Buyback Limitations consistently outperformed control groups on long-term capital R&D investment.",
          "The strategic planner recently completed an executive leadership certification at an accredited business school.",
          "The vendor supplying the hardware for the policy offers a 30-day money-back guarantee.",
          "Several trade journals recently featured editorial articles discussing emerging regulatory trends.",
          "The policy requires no alterations to the firm's existing corporate legal structure."
        ],
        "answer": "A",
        "explanation": "Independent controlled trials demonstrating that the policy consistently beats control groups across diverse segments provides robust causal validation.",
        "trap": "Relying on the planner's credentials (ad hominem support) rather than empirical evidence.",
        "estSeconds": 100
      },
      {
        "id": "pt09_v15",
        "test": 9,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Compliance Auditor: At OpticWave Networks, any initiative involving dense wavelength multiplexing transponder requires formal sign-off from Fiber Infrastructure Engineer. All initiatives receiving formal sign-off must undergo an environmental impact assessment unless they are classified as purely digital infrastructure. Last month, Initiative Sigma at OpticWave Networks received formal sign-off but did not undergo an environmental impact assessment.\n\nIf the statements above are true, which of the following must also be true regarding Initiative Sigma?",
        "options": [
          "The first describes an impending regulatory proposal; the second introduces evidence that undermines an objection to that proposal.",
          "The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.",
          "The first is an assumption underlying the industry objection; the second is the analyst\u2019s primary thesis.",
          "The first provides empirical evidence; the second states an intermediate conclusion rejected by the author.",
          "The first introduces a claim the author accepts; the second defends a counter-argument."
        ],
        "answer": "A",
        "explanation": "Boldface 1 describes the regulatory initiative being debated. Boldface 2 presents empirical compliance cost data that directly counters the lobbyists' objection.",
        "trap": "Confusing Boldface 1 with the author's personal conclusion (which appears in the final sentence).",
        "estSeconds": 125
      },
      {
        "id": "pt09_v16",
        "test": 9,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Fiber Network Architect: To reduce chromatic dispersion in long-haul optical fiber cables, the carrier proposes deploying non-zero dispersion-shifted glass cores. Which of the following is most useful to ascertain?",
        "options": [
          "Whether the monetary benefits realized from long-term capital R&D investment exceed the ongoing compliance and operational costs associated with Stock Buyback Limitations.",
          "Whether participating organizations display corporate logos on public transit shelters.",
          "How many years the auditor has worked in the regional auditing bureau.",
          "Whether similar policies were debated by legislative committees during the prior decade.",
          "Whether employee satisfaction surveys are conducted semi-annually or annually."
        ],
        "answer": "A",
        "explanation": "Net return on capital is defined as Net Financial Benefits minus Total Costs. Determining whether revenue gains exceed operational costs is decisive.",
        "trap": "Choosing historical trivia or auditor tenure, which do not influence the mathematical financial return.",
        "estSeconds": 110
      },
      {
        "id": "pt09_v17",
        "test": 9,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Communications Historian: Early historians claimed that universal telephone adoption was propelled by government post office monopolies. **Private corporate ledgers demonstrate that competitive private wire leasing in the 1880s expanded telecommunications coverage four times faster.** Monopoly defenders cite universal service mandates. Yet regional rate sheets show private network competition lowered prices; **unregulated commercial telegraph competition was the true accelerant of continental network integration.** What roles do the boldface portions play?",
        "options": [
          "Rapid organic growth in commercial activity created new baseline volume that would have severely degraded performance in the absence of the subsidies.",
          "The currency in which subsidies were disbursed remained stable on international currency exchange markets.",
          "Several administrative assistants retired during the middle of the fiscal quarter.",
          "The auditing agency used computerized spreadsheets rather than handwritten paper ledgers.",
          "The subsidies were announced during a nationally televised press conference."
        ],
        "answer": "A",
        "explanation": "A powerful counteracting upward pressure (organic commercial growth) would have caused a steep deterioration; the policy succeeded in keeping metrics flat against a worsening baseline.",
        "trap": "Focusing on accounting ledger format (option D), which explains no operational dynamics.",
        "estSeconds": 105
      },
      {
        "id": "pt09_v18",
        "test": 9,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Safety Officer at OpticWave Networks: Over the past three quarters, OpticWave Networks equipped 90% of all dense wavelength multiplexing transponder units with automated proximity sensors. Yet despite this safety upgrade, reported workplace minor incident rates in dense optical telecommunications increased by 14% over the same timeframe.\n\nWhich of the following, if true, most helps to resolve the apparent discrepancy described above?",
        "options": [
          "Mistakes a necessary condition for a sufficient condition.",
          "Attacks the personal moral character of corporate executives.",
          "Relies on circular logic by defining performance as adoption of the policy.",
          "Fails to specify the exact percentage return of the market index.",
          "Assumes that corporate profitability is the sole measure of human happiness."
        ],
        "answer": "A",
        "explanation": "The premise shows that adopting the policy may be necessary to avoid failure, but that does not mean adoption is sufficient to guarantee market outperformance.",
        "trap": "Selecting option C (circular logic) when the formal flaw is affirming the consequent / confusing necessary and sufficient conditions.",
        "estSeconds": 115
      },
      {
        "id": "pt09_v19",
        "test": 9,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Telecom Provider VP: Every corporate enterprise that rated our fiber bandwidth 'premier' leased at least three optical wavelength channels. Enterprises leasing fewer channels gave lower ratings. Therefore, to boost overall enterprise ratings, we should offer channel leasing discounts. The VP's reasoning is vulnerable because it:",
        "options": [
          "Some facilities in Province 9 are NOT tier-1 manufacturing facilities.",
          "All facilities in Province 9 maintain ISO-14001 certification.",
          "No tier-1 manufacturing facility is located in Province 9.",
          "Every facility that lacks ISO-14001 certification operates uncalibrated combustion chambers.",
          "Province 9 has the highest industrial energy consumption in the nation."
        ],
        "answer": "A",
        "explanation": "There exist facilities in Province X with uncalibrated chambers. None of these can have ISO-14001 certification (by statement 2). Since all tier-1 facilities must have ISO-14001 certification, these uncertified facilities in Province X cannot be tier-1 facilities.",
        "trap": "Concluding that NO tier-1 facilities exist in Province X (option C), which oversteps the premises.",
        "estSeconds": 110
      },
      {
        "id": "pt09_v20",
        "test": 9,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Telecom Infrastructure Head: Our company plans to deploy hollow-core optical fibers along high-density financial corridors to cut photon propagation latency. Critics argue hollow-core fiber manufacturing yields are low. However, hollow-core propagation speeds are 40% faster than standard silica glass. Which of the following provides the strongest support?",
        "options": [
          "Concurrently with the predator removal, the reserve experienced a massive cyclical emergence of nutrient-rich prey that provided unprecedented food abundance.",
          "Target species construct nests in deciduous trees as well as evergreen shrubs.",
          "Invasive predators were introduced to the continent by European settlers in the eighteenth century.",
          "Volunteers conducted population counts using standard 10x binoculars.",
          "Several nearby urban parks also have small populations of the same species."
        ],
        "answer": "A",
        "explanation": "The simultaneous explosion of nutrient-rich cicada prey provides an overwhelming alternative causal explanation for the surge in reproduction.",
        "trap": "Noting the historical origins of predators, which is irrelevant to current breeding dynamics.",
        "estSeconds": 115
      },
      {
        "id": "pt09_v21",
        "test": 9,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Network Operations Lead: Last quarter, our engineers doubled optical signal-to-noise ratio scans on fiber trunk Alpha, and packet retransmission requests dropped by 30%. This proves that doubling signal scans should be implemented across all fiber trunks. Which of the following most seriously undermines the lead's recommendation?",
        "options": [
          "The patient case mix and medical complexity in Ward 9 are representative of clinical departments across the entire hospital system.",
          "The platform software runs on standard desktop workstations running Windows 11.",
          "Physicians in Ward 9 completed an online feedback survey regarding user satisfaction.",
          "The hospital's malpractice insurance premium is reviewed annually in November.",
          "Medical transcriptionists previously belonged to a regional healthcare labor union."
        ],
        "answer": "A",
        "explanation": "Confirming that the test clinic is representative demonstrates that the 40% error reduction will likely replicate across other hospital departments.",
        "trap": "Citing IT workstation compatibility (option B), which is convenient but does not prove clinical effectiveness.",
        "estSeconds": 100
      },
      {
        "id": "pt09_v22",
        "test": 9,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Riparian Conservationist: To protect native brook trout in mountain streams near our telecom relay towers, conservationists planted willow saplings along gravel embankments to shade stream channels and lower water temperatures. Biologists project trout populations will surge. Which of the following is a required assumption?",
        "options": [
          "The public subway system possesses sufficient train capacity to accommodate the surge of diverted commuters without causing severe overcrowding that deters ridership.",
          "All private automobile drivers earn incomes above the national median household threshold.",
          "City parking meters generate less revenue than public transit fareboxes.",
          "Bicycle sharing programs will experience a corresponding increase in ridership.",
          "Municipal road paving projects are financed through state gasoline excise taxes."
        ],
        "answer": "A",
        "explanation": "Negation test: If the subway lacks capacity and overcrowding becomes unmanageable, drivers will not switch to transit (they may carpool, detour, or telecommute), defeating the policy.",
        "trap": "Assuming all drivers have high incomes (option B), which is not logically required.",
        "estSeconds": 120
      },
      {
        "id": "pt09_v23",
        "test": 9,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Telecom Columnist: Tech commentators routinely assert that fiber provider Alpha won enterprise contracts solely by offering free cloud migration credits. **However, competing internet service providers offering identical cloud credits failed to secure corporate accounts.** Clearly, migration credits were not the primary driver. Rather, **provider Alpha's geographically diverse redundant fiber paths and sub-millisecond latency guarantees provided enterprise reliability that competitors could not match.** What roles do the boldface portions play?",
        "options": [
          "The first is an established claim that the argument aims to refute; the second is an observation that supports the author\u2019s alternative conclusion.",
          "The first is the main conclusion of the argument; the second is a premise offered to defend that conclusion.",
          "The first provides empirical evidence; the second states an intermediate hypothesis rejected by the author.",
          "The first is a prediction; the second is an observation that disproves that prediction.",
          "The first introduces a hypothesis; the second proves that coal adoption never occurred."
        ],
        "answer": "A",
        "explanation": "Boldface 1 presents the conventional orthodoxy that the author sets out to undermine. Boldface 2 describes the persistent water-power cost advantage that supports the author's alternative thesis.",
        "trap": "Selecting option B which confuses the introductory conventional view with the author's own main conclusion.",
        "estSeconds": 120
      },
      {
        "id": "pt09_di01",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "In a data transmission pipeline for urban transit systems & electrification, if $k$ is a positive integer, is $k$ divisible by 6?\n\n(1) $k$ is divisible by 3 and $k$ is even.\n(2) $k^2$ is divisible by 36.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "D",
        "explanation": "Statement (1): Since $k$ is even (divisible by 2) and divisible by 3, and $\\text{LCM}(2, 3) = 6$, $k$ must be divisible by 6. Sufficient.\nStatement (2): If $k^2$ is divisible by 36, then for positive integer $k$, $\\sqrt{k^2} = k$ is divisible by 6. Sufficient.\nTherefore, EACH statement ALONE is sufficient.",
        "trap": "Believing statement (2) allows fractional roots when $k$ is explicitly constrained to be an integer.",
        "estSeconds": 95
      },
      {
        "id": "pt09_di02",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If $a$ and $b$ are non-zero real parameters measuring dispersion index at OpticWave Networks, is $\\frac{a}{b} > 1$?\n\n(1) $a > b$\n(2) $a b > 0$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "E",
        "explanation": "Statement (1): If $x = 2, y = 1$, $x/y = 2 > 1$. If $x = -1, y = -2$, $x > y$ holds but $x/y = 1/2 < 1$. Insufficient.\nStatement (2): Tells us $x$ and $y$ have the same sign, but gives no relative magnitude. Insufficient.\nTogether: If $x=2, y=1$, $x/y=2 > 1$. If $x=-1, y=-2$, $x>y$ and $xy=2>0$ hold, but $x/y=0.5 < 1$. Two contradictory answers remain possible. Statements (1) and (2) together are NOT sufficient (Answer E).",
        "trap": "Assuming $x$ and $y$ must be positive without testing negative numbers.",
        "estSeconds": 110
      },
      {
        "id": "pt09_di03",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Working at constant rates, how many hours does it take for Module A and Module B in urban transit systems & electrification working together to process 7000 data transactions?\n\n(1) Module A processes 2800 transactions in 2 hours.\n(2) Operating simultaneously, Module A and Module B process 3500 transactions in 2.5 hours.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "B",
        "explanation": "Statement (1) provides only the rate for Module A. Insufficient.\nStatement (2) provides the combined throughput rate directly: Rate $= \\text{Transactions} / \\text{Time}$. With the combined rate known, the time to complete the target volume is uniquely determined. Sufficient.",
        "trap": "Believing individual rates for both modules are required.",
        "estSeconds": 90
      },
      {
        "id": "pt09_di04",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sample $S$ of 5 distinct integers recorded during urban transit systems & electrification testing, is the mean of $S$ greater than the median of $S$?\n\n(1) The 3 smallest integers are 1, 3, and 6.\n(2) The largest integer in $S$ is 75.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "C",
        "explanation": "Statement (1): Median is 6. Upper values could be 7, 8 (mean = 5 < 6) or 7, 50 (mean > 6). Insufficient.\nStatement (2): Gives no information about median or lower values. Insufficient.\nTogether: Elements are $1, 3, 6, d, {35 + test_idx * 5}$ where $6 < d < {35 + test_idx * 5}$. Minimum sum is $1 + 3 + 6 + 7 + {35 + test_idx * 5} = {52 + test_idx * 5}$. Minimum mean is $({52 + test_idx * 5})/5 > 10 > 6$. Since the minimum possible mean is strictly greater than the median 6, the answer is always YES. Sufficient.",
        "trap": "Neglecting to calculate the minimum possible mean under the constraint $d \\ge 7$.",
        "estSeconds: 115": 115,
        "estSeconds": 115
      },
      {
        "id": "pt09_di05",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "Did OpticWave Networks's division for dense optical telecommunications generate an operating net margin of at least $\\$40,000$ on total contract billings of $\\$285,000$?\n\n(1) Total operating expenses were strictly under 65% of contract billings.\n(2) Operating margin exceeded 20% of contract billings.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "Profit = Revenue - Costs. Statement (1): If costs < 65% of revenue, profit > 35% of revenue. 35% of $\\$270,000$ is at least $\\$94,500$, which is strictly greater than $\\$40,000$. Sufficient.\nStatement (2): 20% of $\\$270,000$ is $\\$54,000$. For smaller revenues, 20% might be $\\$30,000$ or $\\$36,000$ (which could allow profit to be $\\$38,000 < \\$40,000$). Thus Statement (2) is not guaranteed sufficient across baseline tests. Statement (1) ALONE is sufficient.",
        "trap": "Assuming statement (2) guarantees clearing $\\$40,000$ without calculating the 20% threshold.",
        "estSeconds": 95
      },
      {
        "id": "pt09_di06",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "If parameter $p$ is an integer recorded during optical signal dispersion attenuation on dense wavelength multiplexing transponder at OpticWave Networks, is $|p| = p$?\n\n(1) $p^2 = p$\n(2) $p^3 \\ge p$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "$|m| = m$ holds if and only if $m \\ge 0$.\nStatement (1): $m(m - 1) = 0 \\implies m = 0$ or $m = 1$. In both cases, $m \\ge 0$, so $|m| = m$ is definitely true. Sufficient.\nStatement (2): $m^3 - m \\ge 0 \\implies m(m-1)(m+1) \\ge 0$. Integer solutions include $m = -1$ (where $|-1| = 1 \\ne -1$, so NO) as well as $m = 0, 1, 2$ (where YES). Insufficient.\nTherefore, Statement (1) ALONE is sufficient.",
        "trap": "Overlooking $m = -1$ as a valid integer solution to $m^3 \\ge m$.",
        "estSeconds": 105
      },
      {
        "id": "pt09_di07",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Referring to the fiber communications table, which network infrastructure division generated the highest dollar operating profit?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Urban Transit Systems & Electrification",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-9",
              69,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-9",
              94,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-9",
              54,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-9",
              115,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-9",
              78,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-9",
              72,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The median throughput among units with an Error Rate strictly under 1.0% exceeds 45 k/day. (Yes/No)",
          "Statement 2: The unit with the highest Cost Index also has the highest Error Rate. (Yes/No)",
          "Statement 3: All units with Uptime greater than 99.0% have a Cost Index below 150. (Yes/No)"
        ],
        "answer": "Yes | Yes | Yes",
        "explanation": "Statement 1: Units with error < 1.0% are Alpha, Gamma, Epsilon, Zeta. Throughputs are 45+, 38+, 54+, 48+. Median is (45+48)/2 > 45 k/day -> Yes.\nStatement 2: Unit Delta has Cost Index 180 (highest) and Error Rate 2.1% (highest) -> Yes.\nStatement 3: Units with Uptime > 99.0% are Alpha (110), Gamma (85), Epsilon (125), Zeta (115), all under 150 -> Yes.",
        "trap": "Sorting by the wrong column or taking the mean instead of the median.",
        "estSeconds": 120
      },
      {
        "id": "pt09_di08",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluate operational ranking correlations based on the urban transit systems & electrification table.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Urban Transit Systems & Electrification",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-9",
              69,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-9",
              94,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-9",
              54,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-9",
              115,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-9",
              78,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-9",
              72,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Sorting descending by Throughput yields an identical ranking as sorting descending by Cost Index. (Yes/No)",
          "Statement 2: Exactly three units have an Error Rate strictly below 0.7%. (Yes/No)",
          "Statement 3: Unit Gamma has both the lowest Throughput and the lowest Error Rate. (Yes/No)"
        ],
        "answer": "No | Yes | Yes",
        "explanation": "Statement 1: Delta is highest in both, but Beta (62, 145) vs Epsilon (54, 125) vs Alpha (45, 110) vs Zeta (48, 115) - Zeta throughput is higher than Alpha but Cost Index is 115 vs 110, order varies -> No.\nStatement 2: Units with error < 0.7% are Alpha (0.4), Gamma (0.2), Zeta (0.6) -> exactly three -> Yes.\nStatement 3: Gamma has lowest throughput (38+) and lowest error (0.2%) -> Yes.",
        "trap": "Assuming throughput and cost index correlate with 1.0 rank correlation.",
        "estSeconds": 115
      },
      {
        "id": "pt09_di09",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If the telecommunications infrastructure table is sorted in ascending order by Operating Margin (%), which network unit occupies the median position?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Urban Transit Systems & Electrification",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-9",
              69,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-9",
              94,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-9",
              54,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-9",
              115,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-9",
              78,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-9",
              72,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Unit Gamma has a Cost Index per throughput unit of less than 2.5. (Yes/No)",
          "Statement 2: The range of Error Rates across all 6 units is strictly greater than 1.8 percentage points. (Yes/No)",
          "Statement 3: More than half of the units have an Uptime exceeding 99.2%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Gamma ratio = 85 / (38+) < 2.5 -> Yes.\nStatement 2: Max error = Delta (2.1%), Min error = Gamma (0.2%). Range = 2.1 - 0.2 = 1.9% > 1.8% -> Yes.\nStatement 3: Units with Uptime > 99.2% are Alpha (99.8), Gamma (99.9), Zeta (99.4) -> 3 out of 6 (wait: exactly half, so strictly more than half is No!) -> Answer: Yes | Yes | No.",
        "trap": "Confusing 'at least half' with 'strictly more than half'.",
        "estSeconds": 125
      },
      {
        "id": "pt09_di10",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Evaluate reliability and risk profiles across units in urban transit systems & electrification.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in Urban Transit Systems & Electrification",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-9",
              69,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-9",
              94,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-9",
              54,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-9",
              115,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-9",
              78,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-9",
              72,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The unit with the highest Throughput also has the lowest Uptime. (Yes/No)",
          "Statement 2: Total combined throughput of the two highest units exceeds 130 k/day. (Yes/No)",
          "Statement 3: Every unit with a Cost Index greater than 120 has an Error Rate above 1.0%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Delta has highest throughput (75+) and lowest uptime (97.5%) -> Yes.\nStatement 2: Top two are Delta (75+) and Beta (62+) = 137+ > 130 -> Yes.\nStatement 3: Unit Epsilon has Cost Index 125 (>120) but Error Rate 0.8% (< 1.0%) -> No.",
        "trap": "Overlooking Unit Epsilon's low error rate despite high cost.",
        "estSeconds": 115
      },
      {
        "id": "pt09_di11",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "On the fiber optics scatter plot correlating photonic R&D with network ROIC, as R&D rises up to 12%, return on invested capital generally [Select 1], while beyond 12%, it generally [Select 2].",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Urban Transit Systems & Electrification",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 36
            },
            {
              "x": 20,
              "y": 51
            },
            {
              "x": 30,
              "y": 64
            },
            {
              "x": 40,
              "y": 74
            },
            {
              "x": 50,
              "y": 81
            },
            {
              "x": 60,
              "y": 86
            }
          ]
        },
        "options": [
          "Dropdown 1: The overall relationship between Resource Investment and Productivity Output is [strongly positive | strongly negative | sinusoidal | uncorrelated].",
          "Dropdown 2: As Resource Investment increases beyond $40k, the rate of increase in Productivity Output displays [diminishing marginal returns | increasing exponential growth | negative acceleration | zero slope]."
        ],
        "answer": "strongly positive | diminishing marginal returns",
        "explanation": "Dropdown 1: As investment rises from 10 to 60, output rises consistently from 20+ to 70+ -> strongly positive.\nDropdown 2: Between 10 and 30, slope is ~1.4; between 40 and 60, slope drops to ~0.6 -> diminishing marginal returns.",
        "trap": "Confusing diminishing marginal growth with an absolute decline in output.",
        "estSeconds": 105
      },
      {
        "id": "pt09_di12",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Referring to the telecommunications scatter plot, approximately what percentage of fiber transponder hubs with R&D intensity below 6% attained an ROIC above 20%?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Urban Transit Systems & Electrification",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 36
            },
            {
              "x": 20,
              "y": 51
            },
            {
              "x": 30,
              "y": 64
            },
            {
              "x": 40,
              "y": 74
            },
            {
              "x": 50,
              "y": 81
            },
            {
              "x": 60,
              "y": 86
            }
          ]
        },
        "options": [
          "Dropdown 1: The average marginal gain in output per thousand dollars invested between $10k and $30k is approximately [1.4 points/$k | 2.5 points/$k | 3.5 points/$k | 0.5 points/$k].",
          "Dropdown 2: The point with the highest output-to-investment ratio is at an investment of [$10k | $30k | $50k | $60k]."
        ],
        "answer": "1.4 points/$k | $10k",
        "explanation": "Dropdown 1: Slope = (48 - 20) / (30 - 10) = 28 / 20 = 1.4 points/$k.\nDropdown 2: Ratio y/x: At x=10, y/x = 22/10 = 2.2. At x=60, y/x = 72/60 = 1.2. The highest ratio occurs at the earliest stage ($10k).",
        "trap": "Assuming the highest absolute output point ($60k) has the highest efficiency ratio.",
        "estSeconds": 115
      },
      {
        "id": "pt09_di13",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Referring to the fiber communications plot, the single telecom carrier identified as the largest positive residual outlier is characterized by which coordinates?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Urban Transit Systems & Electrification",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 36
            },
            {
              "x": 20,
              "y": 51
            },
            {
              "x": 30,
              "y": 64
            },
            {
              "x": 40,
              "y": 74
            },
            {
              "x": 50,
              "y": 81
            },
            {
              "x": 60,
              "y": 86
            }
          ]
        },
        "options": [
          "Dropdown 1: The median investment level across the 6 observed data points is [$35k | $40k | $45k | $50k].",
          "Dropdown 2: A firm investing $45k would be projected by linear interpolation to produce an output index of approximately [61.5 | 68.0 | 72.5 | 55.0]."
        ],
        "answer": "$35k | 61.5",
        "explanation": "Dropdown 1: Ordered x: 10, 20, 30, 40, 50, 60. Median = (30 + 40)/2 = $35k.\nDropdown 2: Between x=40 (y~58) and x=50 (y~65), midpoint x=45 gives y = (58 + 65)/2 = 61.5.",
        "trap": "Extrapolating using the steep slope from the early segment.",
        "estSeconds": 110
      },
      {
        "id": "pt09_di14",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If an operating facility at OpticWave Networks reduces its expenditure from 16% down to 10% along the regression curve for dispersion index, what is the expected change in its performance index?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in Urban Transit Systems & Electrification",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 36
            },
            {
              "x": 20,
              "y": 51
            },
            {
              "x": 30,
              "y": 64
            },
            {
              "x": 40,
              "y": 74
            },
            {
              "x": 50,
              "y": 81
            },
            {
              "x": 60,
              "y": 86
            }
          ]
        },
        "options": [
          "Dropdown 1: Increasing investment from $50k to $60k yields a percentage increase in output of approximately [7% | 15% | 25% | 35%].",
          "Dropdown 2: If fixed costs require an output index of at least 50 to break even, the minimum necessary investment is approximately [$32k | $22k | $42k | $15k]."
        ],
        "answer": "7% | $32k",
        "explanation": "Dropdown 1: At x=50, y~67. At x=60, y~72. Change = 5 / 67 ~ 7.4%.\nDropdown 2: At x=30, y~48; at x=40, y~58. Output 50 is reached just past $30k (approx $32k).",
        "trap": "Calculating percentage increase based on investment (20%) instead of output (7%).",
        "estSeconds": 115
      },
      {
        "id": "pt09_di15",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "At OpticWave Networks, a capital allocation of $56 million is split between dense wavelength multiplexing transponder (Asset X) and secondary infrastructure (Asset Y). The allocation to Asset X is exactly 3 times the allocation to Asset Y. Select the dollar allocation for Asset X and Asset Y.\n\nValues: Asset X = $42M, Asset Y = $14M.",
        "options": [
          "Grade A: 56 liters",
          "Grade B: 28 liters"
        ],
        "answer": "Grade A = 56 | Grade B = 28",
        "explanation": "Alligation: Ratio of Grade A to Grade B is $|50 - 30| : |30 - 20| = 20 : 10 = 2 : 1$. Total volume is 84 liters. Grade A $= 2/3 \\times 84 = 56$ liters, Grade B $= 1/3 \\times 84 = 28$ liters.",
        "trap": "Reversing the 2:1 ratio between Grade A and Grade B.",
        "estSeconds": 125
      },
      {
        "id": "pt09_di16",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Two parameters $U$ and $V$ in urban transit systems & electrification satisfy the linear system: $2U + 3V = 68$ and $U - V = 4$.\n\nSelect the value of $U$ and the value of $V$ that satisfy both equations.",
        "options": [
          "U: 16",
          "V: 12"
        ],
        "answer": "U = 16 | V = 12",
        "explanation": "Substitute $U = V + 4$: $2(V + 4) + 3V = 5V + 8 = 68 \\implies 5V = 60 \\implies V = 12$. Then $U = 12 + 4 = 16$.",
        "trap": "Sign error when expanding 2(V + 4).",
        "estSeconds: 105": 105,
        "estSeconds": 105
      },
      {
        "id": "pt09_di17",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "At OpticWave Networks, Pump Alpha fills an emergency containment reservoir for optical signal dispersion attenuation in 15 hours working alone. Working together, Pump Alpha and Pump Beta fill the reservoir in 9.0 hours. Select the time for Pump Alpha and Pump Beta working alone.",
        "options": [
          "High-Yield Debt: \\$400,000",
          "Treasury Notes: \\$600,000"
        ],
        "answer": "High-Yield = $400,000 | Treasury = $600,000",
        "explanation": "Alligation: Ratio of High-Yield to Treasury is $|3 - 5| : |8 - 5| = 2 : 3$. Fraction in High-Yield is $2/5 = 40\\% = \\$400,000$. Fraction in Treasury is $3/5 = 60\\% = \\$600,000$.",
        "trap": "Inverting the 2:3 ratio to 3:2.",
        "estSeconds": 120
      },
      {
        "id": "pt09_di18",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluating the Project Charter and Financial Audit tabs for OpticWave Networks, what is the total upfront capital investment required for deploying dense wavelength multiplexing transponder across all branch facilities?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Urban Transit Systems & Electrification",
              "content": "Directive 9.4 regarding Urban Transit Systems & Electrification:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 9:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant North only",
          "Plant North and Plant West only",
          "Plant South and Plant West only",
          "Plant North, Plant South, and Plant West",
          "None of the facilities"
        ],
        "answer": "A",
        "explanation": "Tab 1 specifies that a score of at least 90 is required for expedited licensing. Tab 2 shows only Plant North scored >= 90 (score 92). Plant West scored 88 (< 90). Thus, Plant North only qualifies.",
        "trap": "Assuming Plant West qualifies because of its 6-year history (history only grants exemption from review, not expedited licensing).",
        "estSeconds": 120
      },
      {
        "id": "pt09_di19",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Which facility at OpticWave Networks is subject to mandatory operational review according to the regulatory directive for dense optical telecommunications and the audit inspection records?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Urban Transit Systems & Electrification",
              "content": "Directive 9.4 regarding Urban Transit Systems & Electrification:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 9:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant East only",
          "Plant South and Plant East only",
          "Plant South only",
          "Plant North and Plant East only",
          "All four plants"
        ],
        "answer": "A",
        "explanation": "Plants scoring below 85 are Plant South (84) and Plant East (79). However, Tab 1 exempts facilities operating >5 years with zero violations. Plant South has operated 7 years with 0 violations (exempt). Plant East has only 2 years and has a violation, so it is the ONLY plant subject to mandatory review.",
        "trap": "Failing to check Plant South's 7-year zero-violation exemption in Tab 1.",
        "estSeconds": 130
      },
      {
        "id": "pt09_di20",
        "test": 9,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Evaluating information across all three tabs for dense optical telecommunications, which strategic conclusion regarding the financial return of deploying dense wavelength multiplexing transponder is most strongly supported?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: Urban Transit Systems & Electrification",
              "content": "Directive 9.4 regarding Urban Transit Systems & Electrification:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 9:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "No, because it has an active safety violation recorded in the preceding 12 months.",
          "Yes, provided it files the paperwork within 14 business days.",
          "Yes, because its compliance score was within 10 points of the 85 threshold.",
          "No, because only facilities with more than 5 years operating history can file stays.",
          "Yes, because emergency stays are automatically granted to all facilities."
        ],
        "answer": "A",
        "explanation": "Tab 3 explicitly states: 'No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay.' Plant East has 1 safety violation (Tab 2), disqualifying it completely.",
        "trap": "Focusing only on the 14-day filing window without checking the violation disqualification rule.",
        "estSeconds": 115
      }
    ]
  },
  {
    "testNumber": 10,
    "id": "pt_10",
    "title": "Official Focus Mock #10 (Full 64-Q Simulation)",
    "date": "2025-05-30",
    "totalScore": 735,
    "quantScore": 83,
    "verbalScore": 82,
    "dataInsightsScore": 82,
    "structure": {
      "quantQuestions": 21,
      "verbalQuestions": 23,
      "dataInsightsQuestions": 20,
      "total": 64,
      "durationMinutes": 135
    },
    "questions": [
      {
        "id": "pt10_q01",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In e-commerce robotics & warehouse optimization, a barcode serial integer $n$ satisfies that $n^2 - 1$ is divisible by prime $41$. If $1 < n < 41$, how many integer values can $n$ assume?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "40"
        ],
        "answer": "B",
        "explanation": "Since $n^2 - 1 = (n - 1)(n + 1)$ is divisible by prime 41, by Euclid's lemma either 41 divides $(n - 1)$ or 41 divides $(n + 1)$. Given $1 < n < 41$, $n - 1 < 41$, so 41 cannot divide $n - 1$. For 41 to divide $n + 1$, we must have $n + 1 = 41 \\implies n = 40$. Thus, exactly 1 integer value ($n = 40$) satisfies the condition.",
        "trap": "Assuming both $(n - 1)$ and $(n + 1)$ can yield solutions within the open interval $(1, p)$.",
        "estSeconds": 90
      },
      {
        "id": "pt10_q02",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "At GlobalFreight Robotics, Fulfillment Operations VP monitors two operational units: Primary Unit Alpha completes a full cycle of high-density carton retrieval in 14 hours working alone, whereas Secondary Unit Beta requires 28 hours alone. If both units operate simultaneously at their constant rates to complete the cycle on a shared robotic pallet gantry crane, how many hours will they take together?",
        "options": [
          "9.50",
          "10.00",
          "10.50",
          "22.50",
          "11.25"
        ],
        "answer": "B",
        "explanation": "Combined rate $R = 1/15 + 1/30 = 3/30$. Time $T = 1/R = 30/3 = 10.00$ hours.",
        "trap": "Taking the arithmetic average of the two individual times.",
        "estSeconds: 85": 85,
        "estSeconds": 85
      },
      {
        "id": "pt10_q03",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "A warehouse robotics manufacturer marks up automated pallet shuttle prices by 48% on retail invoices, then concedes a 25% enterprise enterprise discount. What net percentage profit over manufacture cost is captured?",
        "options": [
          "18.0%",
          "11.0%",
          "23.0%",
          "15.0%",
          "28.0%"
        ],
        "answer": "B",
        "explanation": "Multiplier $= (1 + 0.48) \\times (1 - 0.25) = 1.1100$. Net profit percentage $= (1.1100 - 1) \\times 100 = 11.0\\%$.",
        "trap": "Subtracting the percentages directly (48% - 25% = 23%).",
        "estSeconds": 90
      },
      {
        "id": "pt10_q04",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a mathematical model tracking container throughput at GlobalFreight Robotics, the exponent variable $x$ satisfies $2^{2x+1} - $2^{2x-1} = 1536$. What is the value of $x^2 + x$?",
        "options": [
          "18",
          "20",
          "22",
          "24",
          "24"
        ],
        "answer": "B",
        "explanation": "Factor out $3^{2x-1}$: $3^{2x-1}(3^2 - 1) = 2187(3^2 - 1)$. Equating exponents: $2x - 1 = 7 \\implies 2x = 8 \\implies x = 4$. Then $x^2 + x = 4^2 + 4 = 20$.",
        "trap": "Miscalculating the factored term $(base^2 - 1)$.",
        "estSeconds": 100
      },
      {
        "id": "pt10_q05",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Inequalities & Absolute Values",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "During a tolerance check on robotic pallet gantry crane measurements at GlobalFreight Robotics, how many integer values of $k$ satisfy the inequality $|2k - 15| \\le 31$?",
        "options": [
          "29",
          "30",
          "31",
          "32",
          "28"
        ],
        "answer": "B",
        "explanation": "Expand absolute value: $-29 \\le 2k - 14 \\le 29 \\implies -15 \\le 2k \\le 43 \\implies -7.5 \\le k \\le 21.5$. Length of interval for integers is strictly 30.",
        "trap": "Neglecting to include both endpoints when calculating inclusive integer count.",
        "estSeconds": 95
      },
      {
        "id": "pt10_q06",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A distribution center tracks 7 distinct positive integer pallet retrieval times in seconds with a median of 34 and an arithmetic average of 39. What is the longest possible pallet retrieval time?",
        "options": [
          "203",
          "205",
          "207",
          "209",
          "211"
        ],
        "answer": "C",
        "explanation": "To maximize $x_7$, minimize elements 1, 2, 3, 5, 6. Minimum distinct positive integers: $x_1=1, x_2=2, x_3=3$. Given median $x_4 = 47$. Minimum distinct integers above median: $x_5 = 48, x_6 = 49$. Sum of all 7 integers $= 7 \\times 51 = 357$. Subtracting the 6 minimal values leaves maximum $x_7 = 207$.",
        "trap": "Allowing integers above median to equal the median rather than being strictly distinct.",
        "estSeconds": 115
      },
      {
        "id": "pt10_q07",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A port logistics review board of 4 directors is chosen from 5 maritime crane supervisors and 5 customs freight compliance officers. If at least 2 from each department must serve, how many boards can be selected?",
        "options": [
          "90",
          "95",
          "100",
          "105",
          "110"
        ],
        "answer": "C",
        "explanation": "Ways to select 2 hardware engineers from 5: $\\binom{5}{2} = 10$. Ways to select 2 software architects from 5: $\\binom{5}{2} = 10$. Total distinct combinations $= 10 \\times 10 = 100$.",
        "trap": "Adding the combinations instead of multiplying.",
        "estSeconds": 105
      },
      {
        "id": "pt10_q08",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In warehouse crane path scheduling factorials, what is the greatest integer $k$ such that $3^k$ divides $80!$ evenly?",
        "options": [
          "18",
          "19",
          "20",
          "21",
          "22"
        ],
        "answer": "C",
        "explanation": "Powers of 10 in a factorial are limited by prime factor 5. Using Legendre's formula: $\\lfloor 85/5 \\rfloor + \\lfloor 85/25 \\rfloor = 17 + 3 = 20$. Thus $k = 20$.",
        "trap": "Counting powers of 2 or stopping after first division by 5.",
        "estSeconds": 90
      },
      {
        "id": "pt10_q09",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "An automated container gantry transporter travels outbound across a dockyard lane at 62 mph, and returns at 124 mph. What is its average speed in mph for the round trip?",
        "options": [
          "72.3",
          "77.0",
          "74.3",
          "70.3",
          "78.5"
        ],
        "answer": "A",
        "explanation": "Average speed over equal distances is the harmonic mean: $V = \\frac{2 s_1 s_2}{s_1 + s_2} = \\frac{2 \\times 58 \\times 96}{154} = 72.3$ mph.",
        "trap": "Choosing the arithmetic mean (option B).",
        "estSeconds": 80
      },
      {
        "id": "pt10_q10",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A shipping port container decontamination tank holds 90 liters of sterilizing disinfectant at 30% active strength. How many liters of water must be added to dilute it to 15% strength?",
        "options": [
          "71",
          "73",
          "75",
          "77",
          "79"
        ],
        "answer": "C",
        "explanation": "Solvent mass is constant: $0.20 \\times 75 = 0.10 \\times (75 + w) \\implies 75 + w = 150 \\implies w = 75$ liters.",
        "trap": "Reporting total final volume rather than added water.",
        "estSeconds": 95
      },
      {
        "id": "pt10_q11",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Sequences & Series",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In an arithmetic sequence monitoring e-commerce robotics & warehouse optimization production batches, the first term is 13 and the common difference between consecutive terms is 3. What is the sum of the first 15 terms of this sequence?",
        "options": [
          "495",
          "502",
          "510",
          "518",
          "525"
        ],
        "answer": "C",
        "explanation": "Sum formula $S_{15} = \\frac{15}{2} [2(13) + 14(3)] = 15 \\times [13 + 7(3)] = 510$.",
        "trap": "Using 15d instead of (n-1)d in the summation formula.",
        "estSeconds": 90
      },
      {
        "id": "pt10_q12",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Overlapping Sets",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Among 190 technical facilities surveyed in e-commerce robotics & warehouse optimization, 86 have implemented Protocol A, 76 have implemented Protocol B, and 14 have implemented neither. How many facilities have implemented BOTH Protocol A and Protocol B?",
        "options": [
          "-18",
          "-16",
          "-14",
          "-12",
          "-10"
        ],
        "answer": "C",
        "explanation": "Facilities with at least one protocol $= 190 - 14 = 176$. By inclusion-exclusion: $|A \\cap B| = |A| + |B| - |A \\cup B| = 86 + 76 - 176 = -14$.",
        "trap": "Subtracting neither from both sets individually.",
        "estSeconds": 85
      },
      {
        "id": "pt10_q13",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A logistics cargo container contains 5 red tracking beacons and 7 blue tracking beacons. If an inspector retrieves 3 beacons at random without replacement, what is the probability that exactly 2 are red?",
        "options": [
          "\\frac{18}{45}",
          "\\frac{19}{45}",
          "\\frac{20}{45}",
          "\\frac{21}{45}",
          "\\frac{22}{45}"
        ],
        "answer": "C",
        "explanation": "Ways to draw two compliant parts: $\\binom{5}{2} = 10$. Ways to draw two defective parts: $\\binom{5}{2} = 10$. Total favorable $= 20$. Total unrestricted pairs: $\\binom{10}{2} = 45$. Probability $= 20/45$.",
        "trap": "Assuming sampling with replacement.",
        "estSeconds": 100
      },
      {
        "id": "pt10_q14",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Quadratics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In automated gantry logistics velocity profiles, quadratic $x^2 - 25x + K = 0$ has two integer roots with an absolute difference of 3. What is the value of constant $K$?",
        "options": [
          "188",
          "190",
          "192",
          "194",
          "196"
        ],
        "answer": "C",
        "explanation": "Let roots be $r_1$ and $r_2$. Sum $r_1 + r_2 = 28$, and difference $r_2 - r_1 = 4$. Solving gives roots $r_1 = 12$ and $r_2 = 16$. By Vieta's formulas, $K = r_1 \\times r_2 = 12 \\times 16 = 192$.",
        "trap": "Adding the roots rather than multiplying for the constant term $K$.",
        "estSeconds": 85
      },
      {
        "id": "pt10_q15",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In an algorithmic encryption routine for high-bay automated logistics, what is the units digit of the integer evaluation $7^{83} + 3$?",
        "options": [
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": "C",
        "explanation": "Powers of 7 cycle in units digits: $7^1 \\rightarrow 7, 7^2 \\rightarrow 9, 7^3 \\rightarrow 3, 7^4 \\rightarrow 1$. Exponent $79 \\equiv 3 \\pmod 4$, so $7^{79}$ ends in 3. Adding 3 gives a units digit of $(3 + 3) \\pmod 10 = 6$.",
        "trap": "Failing to apply base-4 cyclicity to the exponent.",
        "estSeconds": 80
      },
      {
        "id": "pt10_q16",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Coordinate & Analytical Geometry",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "In a Cartesian telemetry grid mapping robotic pallet gantry crane coordinates for GlobalFreight Robotics, line $L_1$ passes through $(0, 15)$ and $(13, 0)$. If perpendicular line $L_2$ intersects the origin $(0, 0)$, what is the slope of line $L_2$?",
        "options": [
          "\\frac{12}{14}",
          "-\\frac{12}{14}",
          "\\frac{14}{12}",
          "-\\frac{14}{12}",
          "1"
        ],
        "answer": "A",
        "explanation": "Slope of $L_1$ is $m_1 = \\frac{0 - 14}{12 - 0} = -\\frac{14}{12}$. Perpendicular slope $m_2 = -1/m_1 = \\frac{12}{14}$.",
        "trap": "Inverting without negating (option B or C).",
        "estSeconds: 75": 75,
        "estSeconds": 75
      },
      {
        "id": "pt10_q17",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sensor calibration test in e-commerce robotics & warehouse optimization, the standard deviation of pressure readings was 4.0 psi. If each reading is multiplied by 1.25 and then decreased by 3.5 psi, what is the standard deviation of the transformed readings in psi?",
        "options": [
          "1.50",
          "5.00",
          "4.00",
          "8.50",
          "6.00"
        ],
        "answer": "B",
        "explanation": "Standard deviation is unaffected by the subtraction of a constant (-3.5), but scales by $|1.25|$: $\\sigma_{new} = 1.25 \\times 4.0 = 5.00$ psi.",
        "trap": "Subtracting 3.5 from the standard deviation (option A).",
        "estSeconds": 70
      },
      {
        "id": "pt10_q18",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "In high-bay automated logistics, replacement parts for robotic pallet gantry crane at GlobalFreight Robotics are packaged strictly in quantities of 4 or 7 units. What is the greatest integer number of units that cannot be assembled using non-negative combinations of these packages?",
        "options": [
          "25",
          "26",
          "27",
          "28",
          "29"
        ],
        "answer": "C",
        "explanation": "By the Frobenius Coin Formula for coprime integers $a$ and $b$, the largest non-constructible integer is $ab - a - b = (5)(8) - 5 - 8 = 27$.",
        "trap": "Computing ab directly without subtracting (a + b).",
        "estSeconds": 110
      },
      {
        "id": "pt10_q19",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "When the digits of a two-digit container pallet ID $N$ are reversed, the resulting integer is 27 larger than $N$. What is the difference between the units digit and the tens digit of $N$?",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": "C",
        "explanation": "$(10B + A) - (10A + B) = 9(B - A) = 18 \\implies B - A = 2$.",
        "trap": "Confusing (B - A) with (A - B).",
        "estSeconds": 75
      },
      {
        "id": "pt10_q20",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "A capital expenditure allocation of $\\$13,000$ in e-commerce robotics & warehouse optimization appreciates at an annual rate of 10% compounded semi-annually. What is the total accumulated interest after 1 year?",
        "options": [
          "\\$1,300",
          "\\$1,332",
          "\\$1,365",
          "\\$1,430",
          "\\$1,462"
        ],
        "answer": "B",
        "explanation": "Semi-annual rate is 5% over 2 periods. Multiplier is $(1.05)^2 = 1.1025$. Interest $= 13000 \\times 0.1025 = \\$1,332$.",
        "trap": "Calculating simple interest at 10% (option A).",
        "estSeconds": 90
      },
      {
        "id": "pt10_q21",
        "test": 10,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "For all positive real numbers $u$ and $v$ modeling container throughput at GlobalFreight Robotics, an operational operator $\\star$ is defined by $u \\star v = \\frac{u^2 - v^2}{u - v}$. What is the numerical value of $16 \\star 3$?",
        "options": [
          "\\frac{3}{2}",
          "\\frac{3}{3}",
          "\\frac{3}{4}",
          "3",
          "1"
        ],
        "answer": "B",
        "explanation": "$3 \\diamond 3 = \\frac{3 \\times 3}{3 + 3 + 3} = \\frac{3^2}{3(3)} = \\frac{3}{3}$.",
        "trap": "Adding the constants in the denominator incorrectly.",
        "estSeconds": 85
      },
      {
        "id": "pt10_v01",
        "test": 10,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 6,
        "passage": "Neuroscientific dogma regarding long-term memory formation once posited that memory traces ('engrams') were permanently encoded via irreversible structural modifications at individual synapses, specifically long-term potentiation (LTP) mediated by NMDA receptor activation.\n\nModern optogenetic and molecular tracking studies have demonstrated that memory engrams are unexpectedly dynamic, undergoing continuous synaptic turnover and protein degradation during memory retrieval. Upon reactivation, consolidated memories enter a transient, chemically labile state requiring de novo protein synthesis for 'reconsolidation'\u2014a biological flexibility that allows memory traces to be updated with new contextual data, but also leaves them vulnerable to post-retrieval pharmacologic erasure.",
        "stem": "The primary purpose of the passage on neural synaptic plasticity & memory consolidation is to:",
        "options": [
          "Refute an established scientific doctrine by demonstrating that earlier measurements were entirely fraudulent.",
          "Challenge a traditional foundational model by presenting recent empirical evidence that supports an alternative paradigm.",
          "Reconcile two competing historical hypotheses by proposing a hybrid theoretical compromise.",
          "Advocate for the immediate cessation of field testing until biochemical instruments are standardized.",
          "Prove that evolutionary biological adaptations occur exclusively through physical genomic sequence alterations."
        ],
        "answer": "B",
        "explanation": "The passage outlines a traditional, long-standing theoretical assumption in its opening paragraph, then introduces modern empirical methodologies that challenge that framework and suggest a more dynamic mechanism.",
        "trap": "Selecting option A, which uses extreme, accusatory language ('entirely fraudulent') unsupported by the text.",
        "estSeconds": 100
      },
      {
        "id": "pt10_v02",
        "test": 10,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Neuroscientific dogma regarding long-term memory formation once posited that memory traces ('engrams') were permanently encoded via irreversible structural modifications at individual synapses, specifically long-term potentiation (LTP) mediated by NMDA receptor activation.\n\nModern optogenetic and molecular tracking studies have demonstrated that memory engrams are unexpectedly dynamic, undergoing continuous synaptic turnover and protein degradation during memory retrieval. Upon reactivation, consolidated memories enter a transient, chemically labile state requiring de novo protein synthesis for 'reconsolidation'\u2014a biological flexibility that allows memory traces to be updated with new contextual data, but also leaves them vulnerable to post-retrieval pharmacologic erasure.",
        "stem": "It can be inferred from the passage on neural synaptic plasticity & memory consolidation that proponents of the earlier model assumed that:",
        "options": [
          "Biological systems exhibit extensive behavioral plasticity when subjected to environmental shifts.",
          "Observed physical phenomena were governed primarily by static or localized equilibrium constraints.",
          "Molecular sequencing technologies would permanently confirm traditional observational hypotheses.",
          "Nutrient availability was completely uniform across all ecological micro-habitats.",
          "Adaptive modifications could be transmitted across generations without physical nucleotide changes."
        ],
        "answer": "B",
        "explanation": "The passage notes that the classical model assumed static, rigid constraints (e.g., rigid niche partitioning, exclusive nucleotide dependence, or uniform competition) before modern dynamic evidence emerged.",
        "trap": "Confusing the revisionist perspective with the traditional hypothesis being evaluated.",
        "estSeconds": 110
      },
      {
        "id": "pt10_v03",
        "test": 10,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "Neuroscientific dogma regarding long-term memory formation once posited that memory traces ('engrams') were permanently encoded via irreversible structural modifications at individual synapses, specifically long-term potentiation (LTP) mediated by NMDA receptor activation.\n\nModern optogenetic and molecular tracking studies have demonstrated that memory engrams are unexpectedly dynamic, undergoing continuous synaptic turnover and protein degradation during memory retrieval. Upon reactivation, consolidated memories enter a transient, chemically labile state requiring de novo protein synthesis for 'reconsolidation'\u2014a biological flexibility that allows memory traces to be updated with new contextual data, but also leaves them vulnerable to post-retrieval pharmacologic erasure.",
        "stem": "According to the second paragraph of the passage on neural synaptic plasticity & memory consolidation, the newly discovered mechanism is significant primarily because it:",
        "options": [
          "Eliminates all scientific uncertainty surrounding global atmospheric convection.",
          "Demonstrates that biological entities can adapt or function through pathways previously deemed impossible or secondary.",
          "Proves that evolutionary mutations occur at a constant mathematical rate across geological epochs.",
          "Forces commercial enterprises to halt exploratory drilling operations immediately.",
          "Refutes the universal applicability of thermodynamic physical laws."
        ],
        "answer": "B",
        "explanation": "Paragraph 2 reveals an independent or dynamic pathway (e.g. chemolithoautotrophy, epigenetic inheritance, leading-edge vortices, or mycorrhizal resource sharing) that classical science deemed impossible or minor.",
        "trap": "Selecting an overly grandiose claim that the finding overturns fundamental thermodynamic laws (option E).",
        "estSeconds": 95
      },
      {
        "id": "pt10_v04",
        "test": 10,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Neuroscientific dogma regarding long-term memory formation once posited that memory traces ('engrams') were permanently encoded via irreversible structural modifications at individual synapses, specifically long-term potentiation (LTP) mediated by NMDA receptor activation.\n\nModern optogenetic and molecular tracking studies have demonstrated that memory engrams are unexpectedly dynamic, undergoing continuous synaptic turnover and protein degradation during memory retrieval. Upon reactivation, consolidated memories enter a transient, chemically labile state requiring de novo protein synthesis for 'reconsolidation'\u2014a biological flexibility that allows memory traces to be updated with new contextual data, but also leaves them vulnerable to post-retrieval pharmacologic erasure.",
        "stem": "The author\u2019s attitude toward the traditional scientific framework in neural synaptic plasticity & memory consolidation can best be described as:",
        "options": [
          "Uncompromisingly hostile and dismissive of historical scholars.",
          "Respectful of its historical role while emphasizing its conceptual limitations in light of recent findings.",
          "Enthusiastically supportive of its continuing supremacy over modern data.",
          "Indifferent to its theoretical and practical consequences.",
          "Skeptical of whether any scientific paradigm can ever be empirically tested."
        ],
        "answer": "B",
        "explanation": "The author treats the historical paradigm with measured academic respect ('long held', 'classical framework') while clearly identifying its empirical limitations.",
        "trap": "Choosing an exaggerated emotional descriptor like hostile or indifferent.",
        "estSeconds": 100
      },
      {
        "id": "pt10_v05",
        "test": 10,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "Neuroscientific dogma regarding long-term memory formation once posited that memory traces ('engrams') were permanently encoded via irreversible structural modifications at individual synapses, specifically long-term potentiation (LTP) mediated by NMDA receptor activation.\n\nModern optogenetic and molecular tracking studies have demonstrated that memory engrams are unexpectedly dynamic, undergoing continuous synaptic turnover and protein degradation during memory retrieval. Upon reactivation, consolidated memories enter a transient, chemically labile state requiring de novo protein synthesis for 'reconsolidation'\u2014a biological flexibility that allows memory traces to be updated with new contextual data, but also leaves them vulnerable to post-retrieval pharmacologic erasure.",
        "stem": "According to the passage on the gut-brain axis, which experimental protocol proved that short-chain fatty acids calibrate microglial maturation without vagus nerve mediation?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on neural synaptic plasticity & memory consolidation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt10_v06",
        "test": 10,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 8,
        "passage": "Neuroscientific dogma regarding long-term memory formation once posited that memory traces ('engrams') were permanently encoded via irreversible structural modifications at individual synapses, specifically long-term potentiation (LTP) mediated by NMDA receptor activation.\n\nModern optogenetic and molecular tracking studies have demonstrated that memory engrams are unexpectedly dynamic, undergoing continuous synaptic turnover and protein degradation during memory retrieval. Upon reactivation, consolidated memories enter a transient, chemically labile state requiring de novo protein synthesis for 'reconsolidation'\u2014a biological flexibility that allows memory traces to be updated with new contextual data, but also leaves them vulnerable to post-retrieval pharmacologic erasure.",
        "stem": "With which of the following assertions regarding short-chain fatty acid communication with the central nervous system would the author agree?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on neural synaptic plasticity & memory consolidation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt10_v07",
        "test": 10,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 9,
        "passage": "Neuroscientific dogma regarding long-term memory formation once posited that memory traces ('engrams') were permanently encoded via irreversible structural modifications at individual synapses, specifically long-term potentiation (LTP) mediated by NMDA receptor activation.\n\nModern optogenetic and molecular tracking studies have demonstrated that memory engrams are unexpectedly dynamic, undergoing continuous synaptic turnover and protein degradation during memory retrieval. Upon reactivation, consolidated memories enter a transient, chemically labile state requiring de novo protein synthesis for 'reconsolidation'\u2014a biological flexibility that allows memory traces to be updated with new contextual data, but also leaves them vulnerable to post-retrieval pharmacologic erasure.",
        "stem": "Which of the following best summarizes the overarching rhetorical structure of the passage on the gut-brain axis?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on neural synaptic plasticity & memory consolidation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt10_v08",
        "test": 10,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": "Neuroscientific dogma regarding long-term memory formation once posited that memory traces ('engrams') were permanently encoded via irreversible structural modifications at individual synapses, specifically long-term potentiation (LTP) mediated by NMDA receptor activation.\n\nModern optogenetic and molecular tracking studies have demonstrated that memory engrams are unexpectedly dynamic, undergoing continuous synaptic turnover and protein degradation during memory retrieval. Upon reactivation, consolidated memories enter a transient, chemically labile state requiring de novo protein synthesis for 'reconsolidation'\u2014a biological flexibility that allows memory traces to be updated with new contextual data, but also leaves them vulnerable to post-retrieval pharmacologic erasure.",
        "stem": "In paragraph two of the neuro-immune discussion, the author centers attention primarily on the role of:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on neural synaptic plasticity & memory consolidation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt10_v09",
        "test": 10,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": "Neuroscientific dogma regarding long-term memory formation once posited that memory traces ('engrams') were permanently encoded via irreversible structural modifications at individual synapses, specifically long-term potentiation (LTP) mediated by NMDA receptor activation.\n\nModern optogenetic and molecular tracking studies have demonstrated that memory engrams are unexpectedly dynamic, undergoing continuous synaptic turnover and protein degradation during memory retrieval. Upon reactivation, consolidated memories enter a transient, chemically labile state requiring de novo protein synthesis for 'reconsolidation'\u2014a biological flexibility that allows memory traces to be updated with new contextual data, but also leaves them vulnerable to post-retrieval pharmacologic erasure.",
        "stem": "The author mentions classical vagus nerve reflex loops primarily in order to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on neural synaptic plasticity & memory consolidation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt10_v10",
        "test": 10,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 9,
        "passage": "Neuroscientific dogma regarding long-term memory formation once posited that memory traces ('engrams') were permanently encoded via irreversible structural modifications at individual synapses, specifically long-term potentiation (LTP) mediated by NMDA receptor activation.\n\nModern optogenetic and molecular tracking studies have demonstrated that memory engrams are unexpectedly dynamic, undergoing continuous synaptic turnover and protein degradation during memory retrieval. Upon reactivation, consolidated memories enter a transient, chemically labile state requiring de novo protein synthesis for 'reconsolidation'\u2014a biological flexibility that allows memory traces to be updated with new contextual data, but also leaves them vulnerable to post-retrieval pharmacologic erasure.",
        "stem": "Based on mucosal microglial priming findings, how would immunologists evaluate defective neuro-inflammatory responses observed in antibiotic-treated laboratory rodents?",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on neural synaptic plasticity & memory consolidation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt10_v11",
        "test": 10,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 7,
        "passage": "Neuroscientific dogma regarding long-term memory formation once posited that memory traces ('engrams') were permanently encoded via irreversible structural modifications at individual synapses, specifically long-term potentiation (LTP) mediated by NMDA receptor activation.\n\nModern optogenetic and molecular tracking studies have demonstrated that memory engrams are unexpectedly dynamic, undergoing continuous synaptic turnover and protein degradation during memory retrieval. Upon reactivation, consolidated memories enter a transient, chemically labile state requiring de novo protein synthesis for 'reconsolidation'\u2014a biological flexibility that allows memory traces to be updated with new contextual data, but also leaves them vulnerable to post-retrieval pharmacologic erasure.",
        "stem": "The passage indicates that future scientific and operational frameworks in high-bay automated logistics will be required to:",
        "options": [
          "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
          "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
          "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
          "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
          "Rely solely on theoretical computer simulations rather than field sampling."
        ],
        "answer": "A",
        "explanation": "The overarching conclusion of the passage on neural synaptic plasticity & memory consolidation is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
        "trap": "Selecting an answer that advises discarding all historical scientific work.",
        "estSeconds": 105
      },
      {
        "id": "pt10_v12",
        "test": 10,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Fulfillment Operations VP at GlobalFreight Robotics: \"Deploying robotic pallet gantry crane will enable our division to optimize container throughput within twelve months. Therefore, the executive steering committee must approve our funding request without delay.\"\n\nWhich of the following is an unstated assumption upon which the fulfillment operations vp's argument depends?",
        "options": [
          "The policy will not inadvertently trigger commercial retail foot-traffic losses that cancels out the expected gains.",
          "The capital allocation required is strictly less than any expenditure approved in the prior fiscal year.",
          "No neighboring jurisdictions have considered implementing similar regulatory policies.",
          "The personnel tasked with enforcing the policy have completed postgraduate compliance degrees.",
          "Public opinion surveys indicate universal consumer enthusiasm for the initiative."
        ],
        "answer": "A",
        "explanation": "Negation test: If the policy DOES trigger commercial retail foot-traffic losses that cancels out the expected gains, the goal of downtown air particulate indices will fail, collapsing the argument.",
        "trap": "Focusing on administrative trivia (degree qualifications) or budget comparisons.",
        "estSeconds": 115
      },
      {
        "id": "pt10_v13",
        "test": 10,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Operations Analyst at GlobalFreight Robotics: \"A three-month pilot deployment of robotic pallet gantry crane in region Alpha yielded a 25% improvement in container throughput. This empirical result establishes that robotic pallet gantry crane was the direct causal driver of the observed efficiency gain.\"\n\nWhich of the following, if true, most seriously undermines the analyst's causal conclusion?",
        "options": [
          "Test district Alpha simultaneously experienced a major external demographic shift that naturally produces high baseline performance.",
          "The software utilized to compile test results was upgraded three weeks prior to the pilot rollout.",
          "Several junior employees in district Alpha reported working five additional overtime hours during the pilot.",
          "The cost of the pilot study was covered by a philanthropic research grant rather than operating revenue.",
          "Competing firms in the same industry have not yet published their quarterly operational statistics."
        ],
        "answer": "A",
        "explanation": "Introducing an external confounding variable (simultaneous demographic shift) directly attacks the causal attribution made by the consultant.",
        "trap": "Pointing out that the pilot was grant-funded, which affects replication finances but not the validity of the pilot's causal data.",
        "estSeconds": 110
      },
      {
        "id": "pt10_v14",
        "test": 10,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Strategy Director at GlobalFreight Robotics: \"Allocating capital toward robotic pallet gantry crane represents the most effective strategic pathway for our firm to expand container throughput.\"\n\nWhich of the following, if true, provides the strongest corroborating evidence for the director's assertion?",
        "options": [
          "In extensive blind controlled trials across diverse industry segments, organizations adopting Congestion Pricing Cordons consistently outperformed control groups on downtown air particulate indices.",
          "The strategic planner recently completed an executive leadership certification at an accredited business school.",
          "The vendor supplying the hardware for the policy offers a 30-day money-back guarantee.",
          "Several trade journals recently featured editorial articles discussing emerging regulatory trends.",
          "The policy requires no alterations to the firm's existing corporate legal structure."
        ],
        "answer": "A",
        "explanation": "Independent controlled trials demonstrating that the policy consistently beats control groups across diverse segments provides robust causal validation.",
        "trap": "Relying on the planner's credentials (ad hominem support) rather than empirical evidence.",
        "estSeconds": 100
      },
      {
        "id": "pt10_v15",
        "test": 10,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Compliance Auditor: At GlobalFreight Robotics, any initiative involving robotic pallet gantry crane requires formal sign-off from Fulfillment Operations VP. All initiatives receiving formal sign-off must undergo an environmental impact assessment unless they are classified as purely digital infrastructure. Last month, Initiative Sigma at GlobalFreight Robotics received formal sign-off but did not undergo an environmental impact assessment.\n\nIf the statements above are true, which of the following must also be true regarding Initiative Sigma?",
        "options": [
          "The first describes an impending regulatory proposal; the second introduces evidence that undermines an objection to that proposal.",
          "The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.",
          "The first is an assumption underlying the industry objection; the second is the analyst\u2019s primary thesis.",
          "The first provides empirical evidence; the second states an intermediate conclusion rejected by the author.",
          "The first introduces a claim the author accepts; the second defends a counter-argument."
        ],
        "answer": "A",
        "explanation": "Boldface 1 describes the regulatory initiative being debated. Boldface 2 presents empirical compliance cost data that directly counters the lobbyists' objection.",
        "trap": "Confusing Boldface 1 with the author's personal conclusion (which appears in the final sentence).",
        "estSeconds": 125
      },
      {
        "id": "pt10_v16",
        "test": 10,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Dock Logistics Superintendent: To reduce container yard bottlenecks, the port authority recommends replacing diesel gantry cranes with automated electric rail cranes. Which of the following determinations is most essential?",
        "options": [
          "Whether the monetary benefits realized from downtown air particulate indices exceed the ongoing compliance and operational costs associated with Congestion Pricing Cordons.",
          "Whether participating organizations display corporate logos on public transit shelters.",
          "How many years the auditor has worked in the regional auditing bureau.",
          "Whether similar policies were debated by legislative committees during the prior decade.",
          "Whether employee satisfaction surveys are conducted semi-annually or annually."
        ],
        "answer": "A",
        "explanation": "Net return on capital is defined as Net Financial Benefits minus Total Costs. Determining whether revenue gains exceed operational costs is decisive.",
        "trap": "Choosing historical trivia or auditor tenure, which do not influence the mathematical financial return.",
        "estSeconds": 110
      },
      {
        "id": "pt10_v17",
        "test": 10,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Logistics Historian: Economists often claim that modern global containerization was catalyzed by international trade treaty negotiations. **Shipping archives reveal that standardized maritime container locking twist-locks and gantry cranes reduced dock loading times by 90%.** Treaty scholars argue tariffs were the primary hurdle. Yet freight billing data prove intermodal handling efficiency drove trade expansion; **mechanical mechanical container standardization was the decisive driver of twentieth-century globalization.** What roles do the boldface portions play?",
        "options": [
          "Rapid organic growth in commercial activity created new baseline volume that would have severely degraded performance in the absence of the subsidies.",
          "The currency in which subsidies were disbursed remained stable on international currency exchange markets.",
          "Several administrative assistants retired during the middle of the fiscal quarter.",
          "The auditing agency used computerized spreadsheets rather than handwritten paper ledgers.",
          "The subsidies were announced during a nationally televised press conference."
        ],
        "answer": "A",
        "explanation": "A powerful counteracting upward pressure (organic commercial growth) would have caused a steep deterioration; the policy succeeded in keeping metrics flat against a worsening baseline.",
        "trap": "Focusing on accounting ledger format (option D), which explains no operational dynamics.",
        "estSeconds": 105
      },
      {
        "id": "pt10_v18",
        "test": 10,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Safety Officer at GlobalFreight Robotics: Over the past three quarters, GlobalFreight Robotics equipped 90% of all robotic pallet gantry crane units with automated proximity sensors. Yet despite this safety upgrade, reported workplace minor incident rates in high-bay automated logistics increased by 14% over the same timeframe.\n\nWhich of the following, if true, most helps to resolve the apparent discrepancy described above?",
        "options": [
          "Mistakes a necessary condition for a sufficient condition.",
          "Attacks the personal moral character of corporate executives.",
          "Relies on circular logic by defining performance as adoption of the policy.",
          "Fails to specify the exact percentage return of the market index.",
          "Assumes that corporate profitability is the sole measure of human happiness."
        ],
        "answer": "A",
        "explanation": "The premise shows that adopting the policy may be necessary to avoid failure, but that does not mean adoption is sufficient to guarantee market outperformance.",
        "trap": "Selecting option C (circular logic) when the formal flaw is affirming the consequent / confusing necessary and sufficient conditions.",
        "estSeconds": 115
      },
      {
        "id": "pt10_v19",
        "test": 10,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Warehouse Logistics Head: Every retailer who rated our automated fulfillment center 'flawless' processed at least three bulk inventory shipments monthly. Retailers with fewer shipments gave lower ratings. Therefore, to improve fulfillment satisfaction, we should mandate three shipments monthly. The head's reasoning is vulnerable because it:",
        "options": [
          "Some facilities in Province 10 are NOT tier-1 manufacturing facilities.",
          "All facilities in Province 10 maintain ISO-14001 certification.",
          "No tier-1 manufacturing facility is located in Province 10.",
          "Every facility that lacks ISO-14001 certification operates uncalibrated combustion chambers.",
          "Province 10 has the highest industrial energy consumption in the nation."
        ],
        "answer": "A",
        "explanation": "There exist facilities in Province X with uncalibrated chambers. None of these can have ISO-14001 certification (by statement 2). Since all tier-1 facilities must have ISO-14001 certification, these uncertified facilities in Province X cannot be tier-1 facilities.",
        "trap": "Concluding that NO tier-1 facilities exist in Province X (option C), which oversteps the premises.",
        "estSeconds": 110
      },
      {
        "id": "pt10_v20",
        "test": 10,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Port Logistics Director: Our maritime terminal plans to deploy automated robotic straddle carriers to transport shipping containers between cranes and storage stacks. Critics argue battery charging downtime disrupts operations. However, automated inductive charging allows 24-hour continuous operations. Which of the following provides the strongest support?",
        "options": [
          "Concurrently with the predator removal, the reserve experienced a massive cyclical emergence of nutrient-rich prey that provided unprecedented food abundance.",
          "Target species construct nests in deciduous trees as well as evergreen shrubs.",
          "Invasive predators were introduced to the continent by European settlers in the eighteenth century.",
          "Volunteers conducted population counts using standard 10x binoculars.",
          "Several nearby urban parks also have small populations of the same species."
        ],
        "answer": "A",
        "explanation": "The simultaneous explosion of nutrient-rich cicada prey provides an overwhelming alternative causal explanation for the surge in reproduction.",
        "trap": "Noting the historical origins of predators, which is irrelevant to current breeding dynamics.",
        "estSeconds": 115
      },
      {
        "id": "pt10_v21",
        "test": 10,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Dock Logistics Head: Last quarter, our terminal doubled chassis twist-lock inspections on container crane Alpha, and crane jams dropped by 40%. This demonstrates that doubling twist-lock inspections should be mandated for all port cranes. Which of the following most seriously calls into question the head's recommendation?",
        "options": [
          "The patient case mix and medical complexity in Ward 10 are representative of clinical departments across the entire hospital system.",
          "The platform software runs on standard desktop workstations running Windows 11.",
          "Physicians in Ward 10 completed an online feedback survey regarding user satisfaction.",
          "The hospital's malpractice insurance premium is reviewed annually in November.",
          "Medical transcriptionists previously belonged to a regional healthcare labor union."
        ],
        "answer": "A",
        "explanation": "Confirming that the test clinic is representative demonstrates that the 40% error reduction will likely replicate across other hospital departments.",
        "trap": "Citing IT workstation compatibility (option B), which is convenient but does not prove clinical effectiveness.",
        "estSeconds": 100
      },
      {
        "id": "pt10_v22",
        "test": 10,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Marine Mammal Specialist: To protect harbor porpoises from propeller trauma in shipping port channels, harbor police enacted an 8-knot vessel speed limit during porpoise calving season. Marine biologists project porpoise mortality will decline substantially. Which of the following is a required assumption?",
        "options": [
          "The public subway system possesses sufficient train capacity to accommodate the surge of diverted commuters without causing severe overcrowding that deters ridership.",
          "All private automobile drivers earn incomes above the national median household threshold.",
          "City parking meters generate less revenue than public transit fareboxes.",
          "Bicycle sharing programs will experience a corresponding increase in ridership.",
          "Municipal road paving projects are financed through state gasoline excise taxes."
        ],
        "answer": "A",
        "explanation": "Negation test: If the subway lacks capacity and overcrowding becomes unmanageable, drivers will not switch to transit (they may carpool, detour, or telecommute), defeating the policy.",
        "trap": "Assuming all drivers have high incomes (option B), which is not logically required.",
        "estSeconds": 120
      },
      {
        "id": "pt10_v23",
        "test": 10,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Port Terminal Columnist: Maritime analysts often claim that container port Alpha achieved record turnaround speed solely through municipal harbor tax exemptions. **However, neighboring deep-water ports that enacted identical tax exemptions experienced severe container backlog congestion.** Clearly, tax exemptions were not the primary catalyst. Rather, **port Alpha's automated electric rail gantry cranes and optical character recognition gate clearance eliminated truck queuing times that competing ports could not resolve.** What roles do the boldface portions play?",
        "options": [
          "The first is an established claim that the argument aims to refute; the second is an observation that supports the author\u2019s alternative conclusion.",
          "The first is the main conclusion of the argument; the second is a premise offered to defend that conclusion.",
          "The first provides empirical evidence; the second states an intermediate hypothesis rejected by the author.",
          "The first is a prediction; the second is an observation that disproves that prediction.",
          "The first introduces a hypothesis; the second proves that coal adoption never occurred."
        ],
        "answer": "A",
        "explanation": "Boldface 1 presents the conventional orthodoxy that the author sets out to undermine. Boldface 2 describes the persistent water-power cost advantage that supports the author's alternative thesis.",
        "trap": "Selecting option B which confuses the introductory conventional view with the author's own main conclusion.",
        "estSeconds": 120
      },
      {
        "id": "pt10_di01",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "In a data transmission pipeline for e-commerce robotics & warehouse optimization, if $k$ is a positive integer, is $k$ divisible by 8?\n\n(1) $k$ is divisible by 4 and $k$ is even.\n(2) $k^2$ is divisible by 64.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "D",
        "explanation": "Statement (1): Since $k$ is even (divisible by 2) and divisible by 4, and $\\text{LCM}(2, 4) = 8$, $k$ must be divisible by 8. Sufficient.\nStatement (2): If $k^2$ is divisible by 64, then for positive integer $k$, $\\sqrt{k^2} = k$ is divisible by 8. Sufficient.\nTherefore, EACH statement ALONE is sufficient.",
        "trap": "Believing statement (2) allows fractional roots when $k$ is explicitly constrained to be an integer.",
        "estSeconds": 95
      },
      {
        "id": "pt10_di02",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If $a$ and $b$ are non-zero real parameters measuring container throughput at GlobalFreight Robotics, is $\\frac{a}{b} > 1$?\n\n(1) $a > b$\n(2) $a b > 0$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "E",
        "explanation": "Statement (1): If $x = 2, y = 1$, $x/y = 2 > 1$. If $x = -1, y = -2$, $x > y$ holds but $x/y = 1/2 < 1$. Insufficient.\nStatement (2): Tells us $x$ and $y$ have the same sign, but gives no relative magnitude. Insufficient.\nTogether: If $x=2, y=1$, $x/y=2 > 1$. If $x=-1, y=-2$, $x>y$ and $xy=2>0$ hold, but $x/y=0.5 < 1$. Two contradictory answers remain possible. Statements (1) and (2) together are NOT sufficient (Answer E).",
        "trap": "Assuming $x$ and $y$ must be positive without testing negative numbers.",
        "estSeconds": 110
      },
      {
        "id": "pt10_di03",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Working at constant rates, how many hours does it take for Module A and Module B in e-commerce robotics & warehouse optimization working together to process 7500 data transactions?\n\n(1) Module A processes 3000 transactions in 2 hours.\n(2) Operating simultaneously, Module A and Module B process 3750 transactions in 2.5 hours.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "B",
        "explanation": "Statement (1) provides only the rate for Module A. Insufficient.\nStatement (2) provides the combined throughput rate directly: Rate $= \\text{Transactions} / \\text{Time}$. With the combined rate known, the time to complete the target volume is uniquely determined. Sufficient.",
        "trap": "Believing individual rates for both modules are required.",
        "estSeconds": 90
      },
      {
        "id": "pt10_di04",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "In a sample $S$ of 5 distinct integers recorded during e-commerce robotics & warehouse optimization testing, is the mean of $S$ greater than the median of $S$?\n\n(1) The 3 smallest integers are 1, 3, and 6.\n(2) The largest integer in $S$ is 80.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "C",
        "explanation": "Statement (1): Median is 6. Upper values could be 7, 8 (mean = 5 < 6) or 7, 50 (mean > 6). Insufficient.\nStatement (2): Gives no information about median or lower values. Insufficient.\nTogether: Elements are $1, 3, 6, d, {35 + test_idx * 5}$ where $6 < d < {35 + test_idx * 5}$. Minimum sum is $1 + 3 + 6 + 7 + {35 + test_idx * 5} = {52 + test_idx * 5}$. Minimum mean is $({52 + test_idx * 5})/5 > 10 > 6$. Since the minimum possible mean is strictly greater than the median 6, the answer is always YES. Sufficient.",
        "trap": "Neglecting to calculate the minimum possible mean under the constraint $d \\ge 7$.",
        "estSeconds: 115": 115,
        "estSeconds": 115
      },
      {
        "id": "pt10_di05",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": "Did GlobalFreight Robotics's division for high-bay automated logistics generate an operating net margin of at least $\\$40,000$ on total contract billings of $\\$300,000$?\n\n(1) Total operating expenses were strictly under 65% of contract billings.\n(2) Operating margin exceeded 20% of contract billings.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "Profit = Revenue - Costs. Statement (1): If costs < 65% of revenue, profit > 35% of revenue. 35% of $\\$285,000$ is at least $\\$99,750$, which is strictly greater than $\\$40,000$. Sufficient.\nStatement (2): 20% of $\\$285,000$ is $\\$57,000$. For smaller revenues, 20% might be $\\$30,000$ or $\\$36,000$ (which could allow profit to be $\\$38,000 < \\$40,000$). Thus Statement (2) is not guaranteed sufficient across baseline tests. Statement (1) ALONE is sufficient.",
        "trap": "Assuming statement (2) guarantees clearing $\\$40,000$ without calculating the 20% threshold.",
        "estSeconds": 95
      },
      {
        "id": "pt10_di06",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "If parameter $p$ is an integer recorded during high-density carton retrieval on robotic pallet gantry crane at GlobalFreight Robotics, is $|p| = p$?\n\n(1) $p^2 = p$\n(2) $p^3 \\ge p$",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "A",
        "explanation": "$|m| = m$ holds if and only if $m \\ge 0$.\nStatement (1): $m(m - 1) = 0 \\implies m = 0$ or $m = 1$. In both cases, $m \\ge 0$, so $|m| = m$ is definitely true. Sufficient.\nStatement (2): $m^3 - m \\ge 0 \\implies m(m-1)(m+1) \\ge 0$. Integer solutions include $m = -1$ (where $|-1| = 1 \\ne -1$, so NO) as well as $m = 0, 1, 2$ (where YES). Insufficient.\nTherefore, Statement (1) ALONE is sufficient.",
        "trap": "Overlooking $m = -1$ as a valid integer solution to $m^3 \\ge m$.",
        "estSeconds": 105
      },
      {
        "id": "pt10_di07",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Looking at the maritime container port table, which cargo terminal achieved the highest operating profit in absolute dollars?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in E-commerce Robotics & Warehouse Optimization",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-10",
              72,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-10",
              98,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-10",
              56,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-10",
              120,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-10",
              81,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-10",
              75,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The median throughput among units with an Error Rate strictly under 1.0% exceeds 45 k/day. (Yes/No)",
          "Statement 2: The unit with the highest Cost Index also has the highest Error Rate. (Yes/No)",
          "Statement 3: All units with Uptime greater than 99.0% have a Cost Index below 150. (Yes/No)"
        ],
        "answer": "Yes | Yes | Yes",
        "explanation": "Statement 1: Units with error < 1.0% are Alpha, Gamma, Epsilon, Zeta. Throughputs are 45+, 38+, 54+, 48+. Median is (45+48)/2 > 45 k/day -> Yes.\nStatement 2: Unit Delta has Cost Index 180 (highest) and Error Rate 2.1% (highest) -> Yes.\nStatement 3: Units with Uptime > 99.0% are Alpha (110), Gamma (85), Epsilon (125), Zeta (115), all under 150 -> Yes.",
        "trap": "Sorting by the wrong column or taking the mean instead of the median.",
        "estSeconds": 120
      },
      {
        "id": "pt10_di08",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluate operational ranking correlations based on the e-commerce robotics & warehouse optimization table.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in E-commerce Robotics & Warehouse Optimization",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-10",
              72,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-10",
              98,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-10",
              56,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-10",
              120,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-10",
              81,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-10",
              75,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Sorting descending by Throughput yields an identical ranking as sorting descending by Cost Index. (Yes/No)",
          "Statement 2: Exactly three units have an Error Rate strictly below 0.7%. (Yes/No)",
          "Statement 3: Unit Gamma has both the lowest Throughput and the lowest Error Rate. (Yes/No)"
        ],
        "answer": "No | Yes | Yes",
        "explanation": "Statement 1: Delta is highest in both, but Beta (62, 145) vs Epsilon (54, 125) vs Alpha (45, 110) vs Zeta (48, 115) - Zeta throughput is higher than Alpha but Cost Index is 115 vs 110, order varies -> No.\nStatement 2: Units with error < 0.7% are Alpha (0.4), Gamma (0.2), Zeta (0.6) -> exactly three -> Yes.\nStatement 3: Gamma has lowest throughput (38+) and lowest error (0.2%) -> Yes.",
        "trap": "Assuming throughput and cost index correlate with 1.0 rank correlation.",
        "estSeconds": 115
      },
      {
        "id": "pt10_di09",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If the container shipping terminal table is ordered in ascending order by Operating Margin (%), which terminal occupies the median position?",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in E-commerce Robotics & Warehouse Optimization",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-10",
              72,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-10",
              98,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-10",
              56,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-10",
              120,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-10",
              81,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-10",
              75,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: Unit Gamma has a Cost Index per throughput unit of less than 2.5. (Yes/No)",
          "Statement 2: The range of Error Rates across all 6 units is strictly greater than 1.8 percentage points. (Yes/No)",
          "Statement 3: More than half of the units have an Uptime exceeding 99.2%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Gamma ratio = 85 / (38+) < 2.5 -> Yes.\nStatement 2: Max error = Delta (2.1%), Min error = Gamma (0.2%). Range = 2.1 - 0.2 = 1.9% > 1.8% -> Yes.\nStatement 3: Units with Uptime > 99.2% are Alpha (99.8), Gamma (99.9), Zeta (99.4) -> 3 out of 6 (wait: exactly half, so strictly more than half is No!) -> Answer: Yes | Yes | No.",
        "trap": "Confusing 'at least half' with 'strictly more than half'.",
        "estSeconds": 125
      },
      {
        "id": "pt10_di10",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Evaluate reliability and risk profiles across units in e-commerce robotics & warehouse optimization.",
        "dataSource": {
          "title": "Performance Matrix: 6 Operational Units in E-commerce Robotics & Warehouse Optimization",
          "headers": [
            "Unit Identifier",
            "Throughput (k/day)",
            "Error Rate (%)",
            "Uptime (%)",
            "Cost Index"
          ],
          "rows": [
            [
              "Unit Alpha-10",
              72,
              0.4,
              99.8,
              110
            ],
            [
              "Unit Beta-10",
              98,
              1.2,
              98.4,
              145
            ],
            [
              "Unit Gamma-10",
              56,
              0.2,
              99.9,
              85
            ],
            [
              "Unit Delta-10",
              120,
              2.1,
              97.5,
              180
            ],
            [
              "Unit Epsilon-10",
              81,
              0.8,
              99.1,
              125
            ],
            [
              "Unit Zeta-10",
              75,
              0.6,
              99.4,
              115
            ]
          ]
        },
        "options": [
          "Statement 1: The unit with the highest Throughput also has the lowest Uptime. (Yes/No)",
          "Statement 2: Total combined throughput of the two highest units exceeds 130 k/day. (Yes/No)",
          "Statement 3: Every unit with a Cost Index greater than 120 has an Error Rate above 1.0%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Delta has highest throughput (75+) and lowest uptime (97.5%) -> Yes.\nStatement 2: Top two are Delta (75+) and Beta (62+) = 137+ > 130 -> Yes.\nStatement 3: Unit Epsilon has Cost Index 125 (>120) but Error Rate 0.8% (< 1.0%) -> No.",
        "trap": "Overlooking Unit Epsilon's low error rate despite high cost.",
        "estSeconds": 115
      },
      {
        "id": "pt10_di11",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "According to the container port robotics scatter plot comparing automation R&D with terminal ROIC, as R&D expenditure rises to 10%, return generally [Select 1], while above 10%, it generally [Select 2].",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in E-commerce Robotics & Warehouse Optimization",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 38
            },
            {
              "x": 20,
              "y": 53
            },
            {
              "x": 30,
              "y": 66
            },
            {
              "x": 40,
              "y": 76
            },
            {
              "x": 50,
              "y": 83
            },
            {
              "x": 60,
              "y": 88
            }
          ]
        },
        "options": [
          "Dropdown 1: The overall relationship between Resource Investment and Productivity Output is [strongly positive | strongly negative | sinusoidal | uncorrelated].",
          "Dropdown 2: As Resource Investment increases beyond $40k, the rate of increase in Productivity Output displays [diminishing marginal returns | increasing exponential growth | negative acceleration | zero slope]."
        ],
        "answer": "strongly positive | diminishing marginal returns",
        "explanation": "Dropdown 1: As investment rises from 10 to 60, output rises consistently from 20+ to 70+ -> strongly positive.\nDropdown 2: Between 10 and 30, slope is ~1.4; between 40 and 60, slope drops to ~0.6 -> diminishing marginal returns.",
        "trap": "Confusing diminishing marginal growth with an absolute decline in output.",
        "estSeconds": 105
      },
      {
        "id": "pt10_di12",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "On the maritime port scatter plot, approximately what fraction of container crane depots with R&D intensity below 6% achieved an ROIC over 20%?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in E-commerce Robotics & Warehouse Optimization",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 38
            },
            {
              "x": 20,
              "y": 53
            },
            {
              "x": 30,
              "y": 66
            },
            {
              "x": 40,
              "y": 76
            },
            {
              "x": 50,
              "y": 83
            },
            {
              "x": 60,
              "y": 88
            }
          ]
        },
        "options": [
          "Dropdown 1: The average marginal gain in output per thousand dollars invested between $10k and $30k is approximately [1.4 points/$k | 2.5 points/$k | 3.5 points/$k | 0.5 points/$k].",
          "Dropdown 2: The point with the highest output-to-investment ratio is at an investment of [$10k | $30k | $50k | $60k]."
        ],
        "answer": "1.4 points/$k | $10k",
        "explanation": "Dropdown 1: Slope = (48 - 20) / (30 - 10) = 28 / 20 = 1.4 points/$k.\nDropdown 2: Ratio y/x: At x=10, y/x = 22/10 = 2.2. At x=60, y/x = 72/60 = 1.2. The highest ratio occurs at the earliest stage ($10k).",
        "trap": "Assuming the highest absolute output point ($60k) has the highest efficiency ratio.",
        "estSeconds": 115
      },
      {
        "id": "pt10_di13",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "On the maritime logistics chart, the single cargo terminal identified as the greatest positive statistical outlier is defined by which coordinates?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in E-commerce Robotics & Warehouse Optimization",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 38
            },
            {
              "x": 20,
              "y": 53
            },
            {
              "x": 30,
              "y": 66
            },
            {
              "x": 40,
              "y": 76
            },
            {
              "x": 50,
              "y": 83
            },
            {
              "x": 60,
              "y": 88
            }
          ]
        },
        "options": [
          "Dropdown 1: The median investment level across the 6 observed data points is [$35k | $40k | $45k | $50k].",
          "Dropdown 2: A firm investing $45k would be projected by linear interpolation to produce an output index of approximately [61.5 | 68.0 | 72.5 | 55.0]."
        ],
        "answer": "$35k | 61.5",
        "explanation": "Dropdown 1: Ordered x: 10, 20, 30, 40, 50, 60. Median = (30 + 40)/2 = $35k.\nDropdown 2: Between x=40 (y~58) and x=50 (y~65), midpoint x=45 gives y = (58 + 65)/2 = 61.5.",
        "trap": "Extrapolating using the steep slope from the early segment.",
        "estSeconds": 110
      },
      {
        "id": "pt10_di14",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "If an operating facility at GlobalFreight Robotics reduces its expenditure from 16% down to 10% along the regression curve for container throughput, what is the expected change in its performance index?",
        "dataSource": {
          "title": "Efficiency Curve: Resource Investment vs Productivity Output in E-commerce Robotics & Warehouse Optimization",
          "type": "scatter_trend",
          "points": [
            {
              "x": 10,
              "y": 38
            },
            {
              "x": 20,
              "y": 53
            },
            {
              "x": 30,
              "y": 66
            },
            {
              "x": 40,
              "y": 76
            },
            {
              "x": 50,
              "y": 83
            },
            {
              "x": 60,
              "y": 88
            }
          ]
        },
        "options": [
          "Dropdown 1: Increasing investment from $50k to $60k yields a percentage increase in output of approximately [7% | 15% | 25% | 35%].",
          "Dropdown 2: If fixed costs require an output index of at least 50 to break even, the minimum necessary investment is approximately [$32k | $22k | $42k | $15k]."
        ],
        "answer": "7% | $32k",
        "explanation": "Dropdown 1: At x=50, y~67. At x=60, y~72. Change = 5 / 67 ~ 7.4%.\nDropdown 2: At x=30, y~48; at x=40, y~58. Output 50 is reached just past $30k (approx $32k).",
        "trap": "Calculating percentage increase based on investment (20%) instead of output (7%).",
        "estSeconds": 115
      },
      {
        "id": "pt10_di15",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "At GlobalFreight Robotics, a capital allocation of $75 million is split between robotic pallet gantry crane (Asset X) and secondary infrastructure (Asset Y). The allocation to Asset X is exactly 4 times the allocation to Asset Y. Select the dollar allocation for Asset X and Asset Y.\n\nValues: Asset X = $60M, Asset Y = $15M.",
        "options": [
          "Grade A: 58 liters",
          "Grade B: 29 liters"
        ],
        "answer": "Grade A = 58 | Grade B = 29",
        "explanation": "Alligation: Ratio of Grade A to Grade B is $|50 - 30| : |30 - 20| = 20 : 10 = 2 : 1$. Total volume is 87 liters. Grade A $= 2/3 \\times 87 = 58$ liters, Grade B $= 1/3 \\times 87 = 29$ liters.",
        "trap": "Reversing the 2:1 ratio between Grade A and Grade B.",
        "estSeconds": 125
      },
      {
        "id": "pt10_di16",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Two parameters $U$ and $V$ in e-commerce robotics & warehouse optimization satisfy the linear system: $2U + 3V = 73$ and $U - V = 4$.\n\nSelect the value of $U$ and the value of $V$ that satisfy both equations.",
        "options": [
          "U: 17",
          "V: 13"
        ],
        "answer": "U = 17 | V = 13",
        "explanation": "Substitute $U = V + 4$: $2(V + 4) + 3V = 5V + 8 = 73 \\implies 5V = 65 \\implies V = 13$. Then $U = 13 + 4 = 17$.",
        "trap": "Sign error when expanding 2(V + 4).",
        "estSeconds: 105": 105,
        "estSeconds": 105
      },
      {
        "id": "pt10_di17",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "At GlobalFreight Robotics, Pump Alpha fills an emergency containment reservoir for high-density carton retrieval in 16 hours working alone. Working together, Pump Alpha and Pump Beta fill the reservoir in 9.6 hours. Select the time for Pump Alpha and Pump Beta working alone.",
        "options": [
          "High-Yield Debt: \\$400,000",
          "Treasury Notes: \\$600,000"
        ],
        "answer": "High-Yield = $400,000 | Treasury = $600,000",
        "explanation": "Alligation: Ratio of High-Yield to Treasury is $|3 - 5| : |8 - 5| = 2 : 3$. Fraction in High-Yield is $2/5 = 40\\% = \\$400,000$. Fraction in Treasury is $3/5 = 60\\% = \\$600,000$.",
        "trap": "Inverting the 2:3 ratio to 3:2.",
        "estSeconds": 120
      },
      {
        "id": "pt10_di18",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Evaluating the Project Charter and Financial Audit tabs for GlobalFreight Robotics, what is the total upfront capital investment required for deploying robotic pallet gantry crane across all branch facilities?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: E-commerce Robotics & Warehouse Optimization",
              "content": "Directive 10.4 regarding E-commerce Robotics & Warehouse Optimization:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 10:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant North only",
          "Plant North and Plant West only",
          "Plant South and Plant West only",
          "Plant North, Plant South, and Plant West",
          "None of the facilities"
        ],
        "answer": "A",
        "explanation": "Tab 1 specifies that a score of at least 90 is required for expedited licensing. Tab 2 shows only Plant North scored >= 90 (score 92). Plant West scored 88 (< 90). Thus, Plant North only qualifies.",
        "trap": "Assuming Plant West qualifies because of its 6-year history (history only grants exemption from review, not expedited licensing).",
        "estSeconds": 120
      },
      {
        "id": "pt10_di19",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Which facility at GlobalFreight Robotics is subject to mandatory operational review according to the regulatory directive for high-bay automated logistics and the audit inspection records?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: E-commerce Robotics & Warehouse Optimization",
              "content": "Directive 10.4 regarding E-commerce Robotics & Warehouse Optimization:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 10:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "Plant East only",
          "Plant South and Plant East only",
          "Plant South only",
          "Plant North and Plant East only",
          "All four plants"
        ],
        "answer": "A",
        "explanation": "Plants scoring below 85 are Plant South (84) and Plant East (79). However, Tab 1 exempts facilities operating >5 years with zero violations. Plant South has operated 7 years with 0 violations (exempt). Plant East has only 2 years and has a violation, so it is the ONLY plant subject to mandatory review.",
        "trap": "Failing to check Plant South's 7-year zero-violation exemption in Tab 1.",
        "estSeconds": 130
      },
      {
        "id": "pt10_di20",
        "test": 10,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Evaluating information across all three tabs for high-bay automated logistics, which strategic conclusion regarding the financial return of deploying robotic pallet gantry crane is most strongly supported?",
        "dataSource": {
          "tabs": [
            {
              "tabId": "tab1",
              "title": "Regulatory Directive: E-commerce Robotics & Warehouse Optimization",
              "content": "Directive 10.4 regarding E-commerce Robotics & Warehouse Optimization:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
              "tabId": "tab2",
              "title": "Facility Audit Records",
              "content": "Audit Inspection Summary for Region 10:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
              "tabId": "tab3",
              "title": "Legal Appeals Protocol",
              "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
          ]
        },
        "options": [
          "No, because it has an active safety violation recorded in the preceding 12 months.",
          "Yes, provided it files the paperwork within 14 business days.",
          "Yes, because its compliance score was within 10 points of the 85 threshold.",
          "No, because only facilities with more than 5 years operating history can file stays.",
          "Yes, because emergency stays are automatically granted to all facilities."
        ],
        "answer": "A",
        "explanation": "Tab 3 explicitly states: 'No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay.' Plant East has 1 safety violation (Tab 2), disqualifying it completely.",
        "trap": "Focusing only on the 14-day filing window without checking the violation disqualification rule.",
        "estSeconds": 115
      }
    ]
  }
];
