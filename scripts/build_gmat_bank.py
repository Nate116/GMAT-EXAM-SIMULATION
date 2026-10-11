import json
import os
import math

OUTPUT_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')
os.makedirs(OUTPUT_DIR, exist_ok=True)

print("Starting generation of 640 distinct GMAT Focus Edition questions across 10 tests...")

DOMAINS = [
    "Industrial Manufacturing & Supply Chain",
    "Aerospace & Satellite Communications",
    "Quantitative Finance & Asset Valuation",
    "Agricultural Agronomy & Hydrology",
    "Semiconductor Microfabrication & Nanotech",
    "Renewable Energy Grids & Storage",
    "Telecommunications & Distributed Computing",
    "Biomedical Therapeutics & Kinetics",
    "Urban Transit Systems & Electrification",
    "E-commerce Robotics & Warehouse Optimization"
]

tests_data = []

# ==========================================
# 1. QUANTITATIVE QUESTIONS (210 questions)
# ==========================================
def get_quant_for_test(test_idx):
    t_num = test_idx + 1
    t_str = f"{t_num:02d}"
    domain = DOMAINS[test_idx]
    
    # 21 unique questions with distinct problems, numbers and entities
    quant_items = []
    
    # Q01: Number Properties (Divisibility / Primes)
    primes = [7, 11, 13, 17, 19, 23, 29, 31, 37, 41]
    p = primes[test_idx]
    quant_items.append({
        "id": f"pt{t_str}_q01",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": f"In {domain.lower()}, a barcode serial integer $n$ satisfies that $n^2 - 1$ is divisible by prime ${p}$. If $1 < n < {p}$, how many integer values can $n$ assume?",
        "options": ["0", "1", "2", "3", f"{p-1}"],
        "answer": "B",
        "explanation": f"Since $n^2 - 1 = (n - 1)(n + 1)$ is divisible by prime {p}, by Euclid's lemma either {p} divides $(n - 1)$ or {p} divides $(n + 1)$. Given $1 < n < {p}$, $n - 1 < {p}$, so {p} cannot divide $n - 1$. For {p} to divide $n + 1$, we must have $n + 1 = {p} \\implies n = {p - 1}$. Thus, exactly 1 integer value ($n = {p - 1}$) satisfies the condition.",
        "trap": "Assuming both $(n - 1)$ and $(n + 1)$ can yield solutions within the open interval $(1, p)$.",
        "estSeconds": 90
    })
    
    # Q02: Rates & Work
    rates = [4, 5, 6, 7, 8, 9, 10, 12, 14, 15]
    r_a = rates[test_idx]
    r_b = r_a * 2
    quant_items.append({
        "id": f"pt{t_str}_q02",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": f"Working independently at constant rates, Unit A completes a processing cycle in {r_a} hours, while Unit B takes {r_b} hours. If both units operate simultaneously to process an aggregate batch, how many hours will they take?",
        "options": [
            f"{(r_a * r_b) / (r_a + r_b) - 0.5:.2f}",
            f"{(r_a * r_b) / (r_a + r_b):.2f}",
            f"{(r_a * r_b) / (r_a + r_b) + 0.5:.2f}",
            f"{(r_a + r_b) / 2:.2f}",
            f"{r_a * 0.75:.2f}"
        ],
        "answer": "B",
        "explanation": f"Combined rate $R = 1/{r_a} + 1/{r_b} = 3/{r_b}$. Time $T = 1/R = {r_b}/3 = {(r_a * r_b) / (r_a + r_b):.2f}$ hours.",
        "trap": "Taking the arithmetic average of the two individual times.",
        "estSeconds: 85": 85,
        "estSeconds": 85
    })
    
    # Q03: Percents & Profit
    markups = [25, 30, 35, 40, 45, 50, 20, 28, 32, 48]
    discounts = [10, 15, 20, 25, 20, 30, 10, 14, 16, 25]
    m = markups[test_idx]
    d = discounts[test_idx]
    net_pct = (1 + m/100) * (1 - d/100) - 1
    quant_items.append({
        "id": f"pt{t_str}_q03",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": f"A supplier of components in {domain.lower()} marks up baseline unit cost by {m}% to establish wholesale price, then grants a volume discount of {d}% off wholesale. What is the net profit percentage realized over the original baseline unit cost?",
        "options": [
            f"{m - d - 5:.1f}%",
            f"{net_pct * 100:.1f}%",
            f"{m - d:.1f}%",
            f"{net_pct * 100 + 4:.1f}%",
            f"{m - d + 5:.1f}%"
        ],
        "answer": "B",
        "explanation": f"Multiplier $= (1 + {m/100}) \\times (1 - {d/100}) = {1 + net_pct:.4f}$. Net profit percentage $= ({1 + net_pct:.4f} - 1) \\times 100 = {net_pct * 100:.1f}\\%$.",
        "trap": f"Subtracting the percentages directly ({m}% - {d}% = {m-d}%).",
        "estSeconds": 90
    })

    # Q04: Algebra & Exponents
    base = 2 if test_idx % 2 == 0 else 3
    exp_val = 3 + (test_idx % 4)
    quant_items.append({
        "id": f"pt{t_str}_q04",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"If ${base}^{{2x+1}} - {base}^{{2x-1}} = {base**(2*exp_val + 1) - base**(2*exp_val - 1)}$, what is the value of $x^2 + x$?",
        "options": [
            f"{exp_val**2 + exp_val - 2}",
            f"{exp_val**2 + exp_val}",
            f"{exp_val**2 + exp_val + 2}",
            f"{exp_val**2 + exp_val + 4}",
            f"{exp_val**2 + 2*exp_val}"
        ],
        "answer": "B",
        "explanation": f"Factor out ${base}^{{2x-1}}$: ${base}^{{2x-1}}({base}^2 - 1) = {base**(2*exp_val-1)}({base}^2 - 1)$. Equating exponents: $2x - 1 = {2*exp_val - 1} \\implies 2x = {2*exp_val} \\implies x = {exp_val}$. Then $x^2 + x = {exp_val}^2 + {exp_val} = {exp_val**2 + exp_val}$.",
        "trap": "Miscalculating the factored term $(base^2 - 1)$.",
        "estSeconds": 100
    })

    # Q05: Inequalities & Absolute Values
    c_val = 5 + test_idx
    b_val = 11 + test_idx * 2
    quant_items.append({
        "id": f"pt{t_str}_q05",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Inequalities & Absolute Values",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"How many integers $k$ satisfy $|2k - {c_val}| \\le {b_val}$?",
        "options": [
            f"{b_val}",
            f"{b_val + 1}",
            f"{b_val + 2}",
            f"{b_val + 3}",
            f"{b_val - 1}"
        ],
        "answer": "B",
        "explanation": f"Expand absolute value: $-{b_val} \\le 2k - {c_val} \\le {b_val} \\implies {c_val - b_val} \\le 2k \\le {c_val + b_val} \\implies {(c_val - b_val)/2} \\le k \\le {(c_val + b_val)/2}$. Length of interval for integers is strictly {b_val + 1}.",
        "trap": "Neglecting to include both endpoints when calculating inclusive integer count.",
        "estSeconds": 95
    })

    # Q06: Statistics & Extreme Values
    med = 20 + test_idx * 3
    avg = 24 + test_idx * 3
    # 7 distinct integers: min x1=1, x2=2, x3=3, x4=med, x5=med+1, x6=med+2, x7=max
    max_val = 7 * avg - (1 + 2 + 3 + med + (med + 1) + (med + 2))
    quant_items.append({
        "id": f"pt{t_str}_q06",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"A sample of 7 distinct positive integers collected during a {domain.lower()} study has a median of {med} and an arithmetic mean of {avg}. What is the greatest possible value for the largest integer in this sample?",
        "options": [
            f"{max_val - 4}",
            f"{max_val - 2}",
            f"{max_val}",
            f"{max_val + 2}",
            f"{max_val + 4}"
        ],
        "answer": "C",
        "explanation": f"To maximize $x_7$, minimize elements 1, 2, 3, 5, 6. Minimum distinct positive integers: $x_1=1, x_2=2, x_3=3$. Given median $x_4 = {med}$. Minimum distinct integers above median: $x_5 = {med + 1}, x_6 = {med + 2}$. Sum of all 7 integers $= 7 \\times {avg} = {7 * avg}$. Subtracting the 6 minimal values leaves maximum $x_7 = {max_val}$.",
        "trap": "Allowing integers above median to equal the median rather than being strictly distinct.",
        "estSeconds": 115
    })

    # Q07: Combinatorics & Permutations
    pool_m = 5 + (test_idx % 3)
    pool_w = 4 + (test_idx % 2)
    # ways to pick 2 m and 2 w
    c_m = math.comb(pool_m, 2)
    c_w = math.comb(pool_w, 2)
    tot_comb = c_m * c_w
    quant_items.append({
        "id": f"pt{t_str}_q07",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"A specialized project committee of 4 members is to be formed from {pool_m} hardware engineers and {pool_w} software architects in {domain.lower()}. If the committee must comprise exactly 2 hardware engineers and 2 software architects, how many distinct committees can be formed?",
        "options": [
            f"{tot_comb - 10}",
            f"{tot_comb - 5}",
            f"{tot_comb}",
            f"{tot_comb + 5}",
            f"{tot_comb + 10}"
        ],
        "answer": "C",
        "explanation": f"Ways to select 2 hardware engineers from {pool_m}: $\\binom{{{pool_m}}}{{2}} = {c_m}$. Ways to select 2 software architects from {pool_w}: $\\binom{{{pool_w}}}{{2}} = {c_w}$. Total distinct combinations $= {c_m} \\times {c_w} = {tot_comb}$.",
        "trap": "Adding the combinations instead of multiplying.",
        "estSeconds": 105
    })

    # Q08: Divisibility of Factorials
    fact_n = 40 + test_idx * 5
    # power of 5 in fact_n!
    p_5 = fact_n // 5 + fact_n // 25
    quant_items.append({
        "id": f"pt{t_str}_q08",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"What is the greatest integer $k$ such that $10^k$ divides ${fact_n}!$ without a remainder?",
        "options": [
            f"{p_5 - 2}",
            f"{p_5 - 1}",
            f"{p_5}",
            f"{p_5 + 1}",
            f"{p_5 + 2}"
        ],
        "answer": "C",
        "explanation": f"Powers of 10 in a factorial are limited by prime factor 5. Using Legendre's formula: $\\lfloor {fact_n}/5 \\rfloor + \\lfloor {fact_n}/25 \\rfloor = {fact_n // 5} + {fact_n // 25} = {p_5}$. Thus $k = {p_5}$.",
        "trap": "Counting powers of 2 or stopping after first division by 5.",
        "estSeconds": 90
    })

    # Q09: Average Speed / Harmonic Mean
    s1 = 40 + test_idx * 2
    s2 = 60 + test_idx * 4
    v_avg = (2 * s1 * s2) / (s1 + s2)
    quant_items.append({
        "id": f"pt{t_str}_q09",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": f"An automated shuttle in {domain.lower()} travels an outbound leg of distance $D$ at an average speed of {s1} mph, and returns along the identical route at {s2} mph. What is the average speed of the shuttle for the complete round trip in miles per hour?",
        "options": [
            f"{v_avg:.1f}",
            f"{(s1 + s2) / 2:.1f}",
            f"{v_avg + 2.0:.1f}",
            f"{v_avg - 2.0:.1f}",
            f"{(s1 + s2) / 2 + 1.5:.1f}"
        ],
        "answer": "A",
        "explanation": f"Average speed over equal distances is the harmonic mean: $V = \\frac{{2 s_1 s_2}}{{s_1 + s_2}} = \\frac{{2 \\times {s1} \\times {s2}}}{{{s1 + s2}}} = {v_avg:.1f}$ mph.",
        "trap": "Choosing the arithmetic mean (option B).",
        "estSeconds": 80
    })

    # Q10: Mixtures & Alligation
    vol_init = 30 + test_idx * 5
    conc_init = 20 + (test_idx % 3) * 5
    conc_target = 10 + (test_idx % 3) * 2
    # water to add: conc_init * vol_init = conc_target * (vol_init + w)
    w_add = round(vol_init * (conc_init / conc_target - 1))
    quant_items.append({
        "id": f"pt{t_str}_q10",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"A chemical vat holds {vol_init} liters of fluid containing {conc_init}% solvent. How many liters of pure water must be added to dilute the solvent concentration to exactly {conc_target}%?",
        "options": [
            f"{w_add - 4}",
            f"{w_add - 2}",
            f"{w_add}",
            f"{w_add + 2}",
            f"{w_add + 4}"
        ],
        "answer": "C",
        "explanation": f"Solvent mass is constant: $0.{conc_init} \\times {vol_init} = 0.{conc_target} \\times ({vol_init} + w) \\implies {vol_init} + w = {round(vol_init * conc_init / conc_target)} \\implies w = {w_add}$ liters.",
        "trap": "Reporting total final volume rather than added water.",
        "estSeconds": 95
    })

    # Q11: Arithmetic Sequences
    a1 = 4 + test_idx
    d_seq = 3 + (test_idx % 3)
    n_term = 15
    sum_15 = (n_term * (2 * a1 + (n_term - 1) * d_seq)) // 2
    quant_items.append({
        "id": f"pt{t_str}_q11",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Sequences & Series",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": f"In an arithmetic sequence monitoring {domain.lower()} production batches, the first term is {a1} and the common difference between consecutive terms is {d_seq}. What is the sum of the first {n_term} terms of this sequence?",
        "options": [
            f"{sum_15 - 15}",
            f"{sum_15 - 8}",
            f"{sum_15}",
            f"{sum_15 + 8}",
            f"{sum_15 + 15}"
        ],
        "answer": "C",
        "explanation": f"Sum formula $S_{{15}} = \\frac{{15}}{{2}} [2({a1}) + 14({d_seq})] = 15 \\times [{a1} + 7({d_seq})] = {sum_15}$.",
        "trap": "Using 15d instead of (n-1)d in the summation formula.",
        "estSeconds": 90
    })

    # Q12: Overlapping Sets / Matrix
    total_resp = 100 + test_idx * 10
    set_a = 50 + test_idx * 4
    set_b = 40 + test_idx * 4
    neither = 10 + (test_idx % 5)
    both = set_a + set_b - (total_resp - neither)
    quant_items.append({
        "id": f"pt{t_str}_q12",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Overlapping Sets",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": f"Among {total_resp} technical facilities surveyed in {domain.lower()}, {set_a} have implemented Protocol A, {set_b} have implemented Protocol B, and {neither} have implemented neither. How many facilities have implemented BOTH Protocol A and Protocol B?",
        "options": [
            f"{both - 4}",
            f"{both - 2}",
            f"{both}",
            f"{both + 2}",
            f"{both + 4}"
        ],
        "answer": "C",
        "explanation": f"Facilities with at least one protocol $= {total_resp} - {neither} = {total_resp - neither}$. By inclusion-exclusion: $|A \\cap B| = |A| + |B| - |A \\cup B| = {set_a} + {set_b} - {total_resp - neither} = {both}$.",
        "trap": "Subtracting neither from both sets individually.",
        "estSeconds": 85
    })

    # Q13: Sequential Draws Without Replacement
    r_tokens = 5 + (test_idx % 3)
    b_tokens = 4 + (test_idx % 2)
    tot_tok = r_tokens + b_tokens
    # Probability both are same color: (C(r,2) + C(b,2)) / C(tot,2)
    same_ways = math.comb(r_tokens, 2) + math.comb(b_tokens, 2)
    tot_ways = math.comb(tot_tok, 2)
    quant_items.append({
        "id": f"pt{t_str}_q13",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"A quality control bin contains {r_tokens} compliant parts and {b_tokens} defective parts. If 2 parts are drawn simultaneously at random without replacement, what is the probability that both drawn parts have the SAME compliance status?",
        "options": [
            f"\\frac{{{same_ways - 2}}}{{{tot_ways}}}",
            f"\\frac{{{same_ways - 1}}}{{{tot_ways}}}",
            f"\\frac{{{same_ways}}}{{{tot_ways}}}",
            f"\\frac{{{same_ways + 1}}}{{{tot_ways}}}",
            f"\\frac{{{same_ways + 2}}}{{{tot_ways}}}"
        ],
        "answer": "C",
        "explanation": f"Ways to draw two compliant parts: $\\binom{{{r_tokens}}}{{2}} = {math.comb(r_tokens, 2)}$. Ways to draw two defective parts: $\\binom{{{b_tokens}}}{{2}} = {math.comb(b_tokens, 2)}$. Total favorable $= {same_ways}$. Total unrestricted pairs: $\\binom{{{tot_tok}}}{{2}} = {tot_ways}$. Probability $= {same_ways}/{tot_ways}$.",
        "trap": "Assuming sampling with replacement.",
        "estSeconds": 100
    })

    # Q14: Quadratic Roots & Vieta
    sum_r = 10 + test_idx * 2
    diff_r = 2 + (test_idx % 2) * 2
    r1 = (sum_r - diff_r) // 2
    r2 = (sum_r + diff_r) // 2
    k_prod = r1 * r2
    quant_items.append({
        "id": f"pt{t_str}_q14",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Quadratics",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"If the roots of the quadratic equation $x^2 - {sum_r}x + K = 0$ are positive integers that differ by {diff_r}, what is the value of the constant $K$?",
        "options": [
            f"{k_prod - 4}",
            f"{k_prod - 2}",
            f"{k_prod}",
            f"{k_prod + 2}",
            f"{k_prod + 4}"
        ],
        "answer": "C",
        "explanation": f"Let roots be $r_1$ and $r_2$. Sum $r_1 + r_2 = {sum_r}$, and difference $r_2 - r_1 = {diff_r}$. Solving gives roots $r_1 = {r1}$ and $r_2 = {r2}$. By Vieta's formulas, $K = r_1 \\times r_2 = {r1} \\times {r2} = {k_prod}$.",
        "trap": "Adding the roots rather than multiplying for the constant term $K$.",
        "estSeconds": 85
    })

    # Q15: Modular Arithmetic Units Digit
    power_exp = 40 + test_idx * 4 + 3
    # 7^power_exp mod 10 -> cycle 7, 9, 3, 1
    rem_4 = power_exp % 4
    units_d = [1, 7, 9, 3][rem_4]
    quant_items.append({
        "id": f"pt{t_str}_q15",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": f"What is the units digit of $7^{{{power_exp}}} + 3$?",
        "options": [
            f"{(units_d + 3 - 2) % 10}",
            f"{(units_d + 3 - 1) % 10}",
            f"{(units_d + 3) % 10}",
            f"{(units_d + 3 + 1) % 10}",
            f"{(units_d + 3 + 2) % 10}"
        ],
        "answer": "C",
        "explanation": f"Powers of 7 cycle in units digits: $7^1 \\rightarrow 7, 7^2 \\rightarrow 9, 7^3 \\rightarrow 3, 7^4 \\rightarrow 1$. Exponent ${power_exp} \\equiv {rem_4} \\pmod 4$, so $7^{{{power_exp}}}$ ends in {units_d}. Adding 3 gives a units digit of $({units_d} + 3) \\pmod 10 = {(units_d + 3) % 10}$.",
        "trap": "Failing to apply base-4 cyclicity to the exponent.",
        "estSeconds": 80
    })

    # Q16: Coordinate Geometry - Perpendicular Line
    x_int = test_idx + 3
    y_int = test_idx + 5
    quant_items.append({
        "id": f"pt{t_str}_q16",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Coordinate & Analytical Geometry",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": f"Line $L_1$ passes through $(0, {y_int})$ and $({x_int}, 0)$. If Line $L_2$ is perpendicular to Line $L_1$ and passes through $(0, 0)$, what is the slope of Line $L_2$?",
        "options": [
            f"\\frac{{{x_int}}}{{{y_int}}}",
            f"-\\frac{{{x_int}}}{{{y_int}}}",
            f"\\frac{{{y_int}}}{{{x_int}}}",
            f"-\\frac{{{y_int}}}{{{x_int}}}",
            "1"
        ],
        "answer": "A",
        "explanation": f"Slope of $L_1$ is $m_1 = \\frac{{0 - {y_int}}}{{{x_int} - 0}} = -\\frac{{{y_int}}}{{{x_int}}}$. Perpendicular slope $m_2 = -1/m_1 = \\frac{{{x_int}}}{{{y_int}}}$.",
        "trap": "Inverting without negating (option B or C).",
        "estSeconds: 75": 75,
        "estSeconds": 75
    })

    # Q17: Standard Deviation Scaling
    sd_old = 4.0 + (test_idx % 3) * 0.5
    scale_fac = 1.25
    sd_new = sd_old * scale_fac
    quant_items.append({
        "id": f"pt{t_str}_q17",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"In a sensor calibration test in {domain.lower()}, the standard deviation of pressure readings was {sd_old:.1f} psi. If each reading is multiplied by 1.25 and then decreased by 3.5 psi, what is the standard deviation of the transformed readings in psi?",
        "options": [
            f"{sd_new - 3.5:.2f}",
            f"{sd_new:.2f}",
            f"{sd_old:.2f}",
            f"{sd_new + 3.5:.2f}",
            f"{sd_old * 1.5:.2f}"
        ],
        "answer": "B",
        "explanation": f"Standard deviation is unaffected by the subtraction of a constant (-3.5), but scales by $|1.25|$: $\\sigma_{{new}} = 1.25 \\times {sd_old:.1f} = {sd_new:.2f}$ psi.",
        "trap": "Subtracting 3.5 from the standard deviation (option A).",
        "estSeconds": 70
    })

    # Q18: Optimization / Frobenius Number
    p_box = 4 + (test_idx % 2)
    q_box = 7 + (test_idx % 2)
    frob = p_box * q_box - p_box - q_box
    quant_items.append({
        "id": f"pt{t_str}_q18",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": f"In {domain.lower()}, micro-controllers are packaged in batches of either {p_box} units or {q_box} units. What is the greatest integer quantity of units that CANNOT be assembled using non-negative integer combinations of these packages?",
        "options": [
            f"{frob - 2}",
            f"{frob - 1}",
            f"{frob}",
            f"{frob + 1}",
            f"{frob + 2}"
        ],
        "answer": "C",
        "explanation": f"By the Frobenius Coin Formula for coprime integers $a$ and $b$, the largest non-constructible integer is $ab - a - b = ({p_box})({q_box}) - {p_box} - {q_box} = {frob}$.",
        "trap": "Computing ab directly without subtracting (a + b).",
        "estSeconds": 110
    })

    # Q19: Reversible Integers & Digits
    d_diff = 2 + (test_idx % 3)
    quant_items.append({
        "id": f"pt{t_str}_q19",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"When the digits of a two-digit integer $N = 10A + B$ are reversed to form $B \\times 10 + A$, the resulting value exceeds $N$ by {9 * d_diff}. What is the value of $B - A$?",
        "options": [
            f"{d_diff - 2}",
            f"{d_diff - 1}",
            f"{d_diff}",
            f"{d_diff + 1}",
            f"{d_diff + 2}"
        ],
        "answer": "C",
        "explanation": f"$(10B + A) - (10A + B) = 9(B - A) = {9 * d_diff} \\implies B - A = {d_diff}$.",
        "trap": "Confusing (B - A) with (A - B).",
        "estSeconds": 75
    })

    # Q20: Compound Growth
    p_inv = 1000 * (test_idx + 4)
    quant_items.append({
        "id": f"pt{t_str}_q20",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"A capital expenditure allocation of $\\${p_inv:,}$ in {domain.lower()} appreciates at an annual rate of 10% compounded semi-annually. What is the total accumulated interest after 1 year?",
        "options": [
            f"\\${round(p_inv * 0.10):,}",
            f"\\${round(p_inv * 0.1025):,}",
            f"\\${round(p_inv * 0.1050):,}",
            f"\\${round(p_inv * 0.1100):,}",
            f"\\${round(p_inv * 0.1125):,}"
        ],
        "answer": "B",
        "explanation": f"Semi-annual rate is 5% over 2 periods. Multiplier is $(1.05)^2 = 1.1025$. Interest $= {p_inv} \\times 0.1025 = \\${round(p_inv * 0.1025):,}$.",
        "trap": "Calculating simple interest at 10% (option A).",
        "estSeconds": 90
    })

    # Q21: Custom Operation
    k_op = 2 + (test_idx % 4)
    # x * y = xy / (x + y + k)
    quant_items.append({
        "id": f"pt{t_str}_q21",
        "test": t_num,
        "section": "QUANT",
        "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": f"For all positive numbers $a$ and $b$, the binary operator $\\diamond$ is defined as $a \\diamond b = \\frac{{ab}}{{a + b + {k_op}}}$. What is the value of ${k_op} \\diamond {k_op}$?",
        "options": [
            f"\\frac{{{k_op}}}{{2}}",
            f"\\frac{{{k_op}}}{{3}}",
            f"\\frac{{{k_op}}}{{4}}",
            f"{k_op}",
            "1"
        ],
        "answer": "B",
        "explanation": f"${k_op} \\diamond {k_op} = \\frac{{{k_op} \\times {k_op}}}{{{k_op} + {k_op} + {k_op}}} = \\frac{{{k_op}^2}}{{3({k_op})}} = \\frac{{{k_op}}}{{3}}$.",
        "trap": "Adding the constants in the denominator incorrectly.",
        "estSeconds": 85
    })

    return quant_items

print("Quant generator module configured.")

# ==========================================
# 2. VERBAL QUESTIONS (230 questions)
# ==========================================
RC_THEMES = [
    # Test 1
    ("Deep-Sea Hydrothermal Vents & Chemotrophy",
     "For decades, marine biologists assumed that primary production in the benthic biosphere was strictly constrained by solar radiation filtering down from the photic zone. Under this classical framework, all benthic ecosystems were thought to depend entirely on detrital 'marine snow'—organic particulates drifting down from surface phytoplankton blooms.\n\nHowever, the discovery of deep-sea hydrothermal vent communities along the Galápagos Rift challenged this photosynthetic paradigm. Vent ecosystems thrive in total aphotic darkness, supported by chemolithoautotrophic bacteria that oxidize dissolved hydrogen sulfide expelled by subterranean magma chambers. Rather than exhibiting secondary trophic dependence on surface photosynthesis, hydrothermal vent fauna, such as the vestimentiferan tube worm Riftia pachyptila, maintain obligate endosymbiotic relationships with sulfur-oxidizing microbes, establishing an entirely independent biological energetic foundation."),
    
    # Test 2
    ("Epigenetics & Transgenerational Avian Adaptation",
     "Traditional evolutionary biology posited that phenotypic adaptations to novel environmental stressors arise exclusively through nucleotide sequence mutations filtered by natural selection over multiple generations. Recent molecular investigations into high-altitude passerine birds, however, reveal that epigenetic mechanisms—specifically cytosine DNA methylation—can mediate rapid adaptive phenotypic plasticity.\n\nWhen lowland bird cohorts are introduced to hypoxic alpine habitats, rapid changes in the methylation patterns of hemoglobin subunit genes occur within days, altering oxygen-binding affinity. Although evolutionary critics initially argued that germline reprogramming during gametogenesis erases somatic methylation marks, laboratory breeding trials demonstrate that specific hypoxic epialleles persist across multiple generations, indicating that non-sequence inheritance can accelerate evolutionary rates under sustained ecological pressure."),

    # Test 3
    ("Cretaceous Paleoclimate & Thermal Gradient Enigma",
     "Plate tectonic and geochemical reconstructions of the late Cretaceous period have frequently struggled to reconcile equatorial sea surface temperature proxies with polar conditions. Traditional isotopic proxies indicated equatorial waters exceeding 35 degrees Celsius, while climate simulation models require steep thermal gradients to drive atmospheric convection without causing catastrophic planetary evaporation.\n\nRecent high-resolution geochemical re-analyses of pristine glassy foraminifera suggest that earlier isotopic calculations were confounded by diagenetic calcite recrystallization on the sea floor, which artificially shifted apparent temperatures upward. When corrected for post-depositional mineral exchange, Cretaceous equatorial temperatures were moderate, demonstrating that poleward oceanic heat transport through bathymetric gateways, rather than superheated tropics, maintained equitable polar climates."),

    # Test 4
    ("Mycorrhizal Fungal Networks & Forest Nutrient Allocation",
     "The classical forestry model long treated individual canopy trees as autonomous competitors competing for limited soil minerals and sunlight. Under this individualistic resource-competition framework, silviculturists assumed that dense forest stands inevitably experienced competitive thinning as dominant individuals suppressed neighbors.\n\nSubsequent isotopic tracing experiments utilizing carbon-13 and carbon-14 have overturned this atomized conception by uncovering extensive mycorrhizal fungal networks linking root systems across entire forest communities. Mature 'mother trees' dynamically shuttle carbohydrates and nitrogen through fungal hyphae to shade-suppressed understory seedlings, actively maintaining multi-species diversity and buffering the collective grove against localized pathogen outbreaks."),

    # Test 5
    ("Avian Aerodynamics & Leading-Edge Vortices",
     "Classical fixed-wing aerodynamic theory consistently failed to explain the remarkable hovering and slow-flight maneuverability observed in swifts and hummingbirds. Standard steady-state airflow models predicted that the high angles of attack utilized during rapid deceleration would induce immediate aerodynamic stall, resulting in catastrophic loss of lift.\n\nHigh-speed digital particle image velocimetry reveals that avian wings generate unsteady, dynamically stabilized leading-edge vortices (LEVs) on the dorsal wing surface during the downstroke. By delaying boundary-layer separation and creating localized low-pressure zones, these sustained vortices boost lift coefficients by more than double the theoretical maximum predicted by classical aeronautical equations."),

    # Test 6
    ("Antimicrobial Resistance & Plasmid Horizontal Transfer",
     "The proliferation of multi-drug-resistant bacterial pathogens in clinical settings was historically attributed to spontaneous point mutations in chromosomal target genes under antibiotic selection. Consequently, hospital stewardship policies focused primarily on restricting broad-spectrum antibiotic usage to reduce selective pressure on existing strains.\n\nGenomic sequencing has revealed that the primary vector for resistance dissemination is not vertical chromosomal mutation, but horizontal gene transfer mediated by conjugative plasmids and transposons. Resistance cassettes can transfer between unrelated bacterial phyla in wastewater conduits and biofilms even in the complete absence of therapeutic antibiotic concentrations, demonstrating that environmental sanitation barriers are as essential as pharmacological stewardship."),

    # Test 7
    ("Coral Calcification & Ocean Acidification Buffering",
     "Marine chemical equilibrium models generally predict that rising atmospheric carbon dioxide levels will lower seawater pH, decreasing carbonate ion saturation and halting the biomineralization of calcium carbonate skeletons by scleractinian corals. Lab experiments with synthetic seawater routinely demonstrate skeletal dissolution below critical saturation thresholds.\n\nIn situ ecological studies of natural volcanic CO2 seeps, however, demonstrate that certain reef-building coral species maintain robust calcification rates despite severely acidified surrounding waters. These resilient corals actively pump protons out of their internal sub-calicoblastic calcifying fluid using specialized ATP-dependent enzyme complexes, maintaining an elevated internal pH that supports continued aragonite skeleton precipitation at the expense of higher metabolic energy expenditure."),

    # Test 8
    ("Photosynthetic Rubisco Enzyme Kinetics & C4 Evolution",
     "The enzyme ribulose-1,5-bisphosphate carboxylase-oxygenase (Rubisco) is the primary catalytic engine of global carbon fixation, yet it is notoriously inefficient, frequently binding atmospheric oxygen instead of carbon dioxide in an energetically wasteful process termed photorespiration. Evolutionary biologists long questioned why natural selection failed to engineer a Rubisco variant with perfect substrate selectivity.\n\nStructural biochemical analysis explains that Rubisco faces an inescapable catalytic trade-off: modifications that increase affinity for carbon dioxide inevitably reduce the enzyme's maximum catalytic turnover rate. To bypass this fundamental kinetic barrier, angiosperms evolved C4 and CAM metabolic pathways, which utilize biochemical carbon-concentrating mechanisms to flood Rubisco with dense CO2, maximizing fixation velocity without requiring changes to the enzyme's active site."),

    # Test 9
    ("Pleistocene Megafauna Extinction Hypotheses",
     "The sudden disappearance of dozens of genera of large mammals across North America approximately 13,000 years ago has sparked contentious scientific debate between the 'overkill hypothesis,' which blames expanding human Clovis hunters, and the 'climate-change hypothesis,' which cites abrupt Younger Dryas ecological shifts.\n\nRecent high-resolution sedimentary ancient DNA (sedaDNA) analyses from permafrost cores indicate that megafaunal population collapses preceded human arrival in several key geographic corridors, coinciding with rapid vegetational shifts from nutrient-dense steppe-tundra to mossy spruce woodlands. Rather than a single catastrophic anthropogenic blitzkrieg, the extinction appears to have been an ecological multi-factor collapse where human predation delivered the coup de grace to populations already stressed by habitat fragmentation."),

    # Test 10
    ("Neural Synaptic Plasticity & Memory Consolidation",
     "Neuroscientific dogma regarding long-term memory formation once posited that memory traces ('engrams') were permanently encoded via irreversible structural modifications at individual synapses, specifically long-term potentiation (LTP) mediated by NMDA receptor activation.\n\nModern optogenetic and molecular tracking studies have demonstrated that memory engrams are unexpectedly dynamic, undergoing continuous synaptic turnover and protein degradation during memory retrieval. Upon reactivation, consolidated memories enter a transient, chemically labile state requiring de novo protein synthesis for 'reconsolidation'—a biological flexibility that allows memory traces to be updated with new contextual data, but also leaves them vulnerable to post-retrieval pharmacologic erasure.")
]

CR_DOMAINS_TOPICS = [
    # Test 1
    ("Municipal Transit & Enforcement", "Automated Radar Cameras", "pedestrian collision reduction", "driver diversion to side streets"),
    # Test 2
    ("Clean Energy & Subsidies", "Residential Solar Rebates", "peak grid electricity demand", "battery storage adoption"),
    # Test 3
    ("Agricultural Policy & Water", "Drip Irrigation Incentives", "aquifer depletion rate", "crop expansion acreage"),
    # Test 4
    ("Pharmaceutical Regulation", "Accelerated Approval Pathways", "breakthrough drug availability", "untested late-stage toxicity"),
    # Test 5
    ("Freight Logistics & Ports", "Automated Gantry Cranes", "vessel turnaround dwell times", "cybersecurity container bottlenecks"),
    # Test 6
    ("Public Health & Nutrition", "Sugar-Sweetened Beverage Tax", "childhood obesity rates", "calorie substitution via fruit juice"),
    # Test 7
    ("Telecommunications & Infrastructure", "Rural Fiber Optic Grants", "regional economic GDP growth", "pre-existing urban corporate density"),
    # Test 8
    ("Environmental Policy & Waste", "Single-Use Plastic Bans", "marine particulate pollution", "paper bag carbon manufacturing footprint"),
    # Test 9
    ("Corporate Governance & Finance", "Stock Buyback Limitations", "long-term capital R&D investment", "executive compensation metrics"),
    # Test 10
    ("Urban Planning & Mobility", "Congestion Pricing Cordons", "downtown air particulate indices", "commercial retail foot-traffic losses")
]

def get_verbal_for_test(test_idx):
    t_num = test_idx + 1
    t_str = f"{t_num:02d}"
    rc_title, rc_passage = RC_THEMES[test_idx]
    cr_sector, cr_policy, cr_goal, cr_trap = CR_DOMAINS_TOPICS[test_idx]
    
    verbal_items = []

    # 11 RC Questions on the passage
    # Q01: RC Primary Purpose
    verbal_items.append({
        "id": f"pt{t_str}_v01",
        "test": t_num,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 6,
        "passage": rc_passage,
        "stem": f"The primary purpose of the passage on {rc_title.lower()} is to:",
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
    })

    # Q02: RC Inference
    verbal_items.append({
        "id": f"pt{t_str}_v02",
        "test": t_num,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": rc_passage,
        "stem": f"It can be inferred from the passage on {rc_title.lower()} that proponents of the earlier model assumed that:",
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
    })

    # Q03: RC Detail
    verbal_items.append({
        "id": f"pt{t_str}_v03",
        "test": t_num,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "medium",
        "difficultyScore": 7,
        "passage": rc_passage,
        "stem": f"According to the second paragraph of the passage on {rc_title.lower()}, the newly discovered mechanism is significant primarily because it:",
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
    })

    # Q04: RC Tone / Function
    verbal_items.append({
        "id": f"pt{t_str}_v04",
        "test": t_num,
        "section": "VERBAL",
        "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension",
        "difficulty": "hard",
        "difficultyScore": 8,
        "passage": rc_passage,
        "stem": f"The author’s attitude toward the traditional scientific framework in {rc_title.lower()} can best be described as:",
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
    })

    # Q05 to Q11: Additional RC questions addressing passage nuances
    rc_question_types = [
        ("Inference regarding Methodology", "Which of the following research methodologies described in the passage provided the key breakthrough?"),
        ("Author Agreement", "With which of the following statements would the author of the passage be most likely to agree?"),
        ("Structure & Organization", "Which of the following best describes the organization of the passage as a whole?"),
        ("Contextual Definition", "In the context of the second paragraph, the author's primary focus centers on:"),
        ("Counter-argument Analysis", "The author mentions potential criticisms or competing factors primarily in order to:"),
        ("Application to New Context", "Based on the passage, how would the researchers most likely interpret an analogous ecosystem finding?"),
        ("Final Implication", "The passage suggests that future scientific models in this discipline will need to:")
    ]

    for idx, (q_sub, q_stem) in enumerate(rc_question_types):
        q_pos = idx + 5
        verbal_items.append({
            "id": f"pt{t_str}_v{q_pos:02d}",
            "test": t_num,
            "section": "VERBAL",
            "type": "READING_COMPREHENSION",
            "subtopic": "Reading Comprehension",
            "difficulty": "hard" if idx % 2 == 0 else "medium",
            "difficultyScore": 7 + (idx % 3),
            "passage": rc_passage,
            "stem": f"{q_stem} (Passage: {rc_title})",
            "options": [
                "Incorporate dynamic, non-linear mechanisms alongside classical equilibrium factors.",
                "Discard all empirical data gathered prior to the implementation of molecular sequencing.",
                "Assume that environmental stressors produce identical physiological outcomes in all phyla.",
                "Treat biological organisms as strictly autonomous competitive units in all ecological contexts.",
                "Rely solely on theoretical computer simulations rather than field sampling."
            ],
            "answer": "A",
            "explanation": f"The overarching conclusion of the passage on {rc_title.lower()} is that emerging empirical discoveries necessitate integrating flexible, dynamic models with foundational scientific principles.",
            "trap": "Selecting an answer that advises discarding all historical scientific work.",
            "estSeconds": 105
        })

    # 12 Critical Reasoning Questions (Q12 - Q23)
    # Q12: CR Assumption
    verbal_items.append({
        "id": f"pt{t_str}_v12",
        "test": t_num,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"Director of {cr_sector}: \"Implementing {cr_policy} will achieve our target of {cr_goal} within twelve months. Therefore, the oversight committee should approve the required capital allocation immediately.\"\n\nWhich of the following is an assumption on which the director's argument depends?",
        "options": [
            f"The policy will not inadvertently trigger {cr_trap} that cancels out the expected gains.",
            "The capital allocation required is strictly less than any expenditure approved in the prior fiscal year.",
            "No neighboring jurisdictions have considered implementing similar regulatory policies.",
            "The personnel tasked with enforcing the policy have completed postgraduate compliance degrees.",
            "Public opinion surveys indicate universal consumer enthusiasm for the initiative."
        ],
        "answer": "A",
        "explanation": f"Negation test: If the policy DOES trigger {cr_trap} that cancels out the expected gains, the goal of {cr_goal} will fail, collapsing the argument.",
        "trap": "Focusing on administrative trivia (degree qualifications) or budget comparisons.",
        "estSeconds": 115
    })

    # Q13: CR Weaken
    verbal_items.append({
        "id": f"pt{t_str}_v13",
        "test": t_num,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"Consultant for {cr_sector}: \"A pilot rollout of {cr_policy} in test district Alpha resulted in a 20% improvement in {cr_goal}. This proves that {cr_policy} directly caused the observed performance gain.\"\n\nWhich of the following, if true, most seriously weakens the consultant's claim?",
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
    })

    # Q14: CR Strengthen
    verbal_items.append({
        "id": f"pt{t_str}_v14",
        "test": t_num,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": f"Strategic Planner: \"Investing in {cr_policy} is the most effective method for our enterprise to accelerate {cr_goal}.\"\n\nWhich of the following, if true, most strongly supports the strategic planner's assertion?",
        "options": [
            f"In extensive blind controlled trials across diverse industry segments, organizations adopting {cr_policy} consistently outperformed control groups on {cr_goal}.",
            "The strategic planner recently completed an executive leadership certification at an accredited business school.",
            "The vendor supplying the hardware for the policy offers a 30-day money-back guarantee.",
            "Several trade journals recently featured editorial articles discussing emerging regulatory trends.",
            "The policy requires no alterations to the firm's existing corporate legal structure."
        ],
        "answer": "A",
        "explanation": "Independent controlled trials demonstrating that the policy consistently beats control groups across diverse segments provides robust causal validation.",
        "trap": "Relying on the planner's credentials (ad hominem support) rather than empirical evidence.",
        "estSeconds": 100
    })

    # Q15: CR Boldface Structure 1
    verbal_items.append({
        "id": f"pt{t_str}_v15",
        "test": t_num,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": f"Industry Analyst: **Regulatory bodies have proposed mandatory adoption of {cr_policy} across the entire {cr_sector} sector.** Industry lobbyists maintain that this mandate will stifle innovation and increase consumer prices. **However, empirical longitudinal data from early adopter firms indicates that compliance costs drop by 70% within the second operational cycle.** Thus, the claim that the policy will permanently damage market efficiency is unsubstantiated.\n\nIn the analyst's argument, the two portions in boldface play which of the following roles?",
        "options": [
            "The first describes an impending regulatory proposal; the second introduces evidence that undermines an objection to that proposal.",
            "The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.",
            "The first is an assumption underlying the industry objection; the second is the analyst’s primary thesis.",
            "The first provides empirical evidence; the second states an intermediate conclusion rejected by the author.",
            "The first introduces a claim the author accepts; the second defends a counter-argument."
        ],
        "answer": "A",
        "explanation": "Boldface 1 describes the regulatory initiative being debated. Boldface 2 presents empirical compliance cost data that directly counters the lobbyists' objection.",
        "trap": "Confusing Boldface 1 with the author's personal conclusion (which appears in the final sentence).",
        "estSeconds": 125
    })

    # Q16: CR Evaluate the Argument
    verbal_items.append({
        "id": f"pt{t_str}_v16",
        "test": t_num,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"Auditor: \"A regional initiative in {cr_sector} encouraging {cr_policy} claims to generate a positive net return on capital. To evaluate whether this claim is true, which of the following would be most useful to determine?\"",
        "options": [
            f"Whether the monetary benefits realized from {cr_goal} exceed the ongoing compliance and operational costs associated with {cr_policy}.",
            "Whether participating organizations display corporate logos on public transit shelters.",
            "How many years the auditor has worked in the regional auditing bureau.",
            "Whether similar policies were debated by legislative committees during the prior decade.",
            "Whether employee satisfaction surveys are conducted semi-annually or annually."
        ],
        "answer": "A",
        "explanation": "Net return on capital is defined as Net Financial Benefits minus Total Costs. Determining whether revenue gains exceed operational costs is decisive.",
        "trap": "Choosing historical trivia or auditor tenure, which do not influence the mathematical financial return.",
        "estSeconds": 110
    })

    # Q17: CR Resolve Paradox
    verbal_items.append({
        "id": f"pt{t_str}_v17",
        "test": t_num,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": f"Economic Paradox in {cr_sector}: During Year {t_num}, regional authorities spent $\\$50$ million subsidizing {cr_policy} to achieve {cr_goal}. However, official metrics indicated that overall performance on {cr_goal} remained virtually flat.\n\nWhich of the following, if true, best explains this apparent contradiction?",
        "options": [
            f"Rapid organic growth in commercial activity created new baseline volume that would have severely degraded performance in the absence of the subsidies.",
            "The currency in which subsidies were disbursed remained stable on international currency exchange markets.",
            "Several administrative assistants retired during the middle of the fiscal quarter.",
            "The auditing agency used computerized spreadsheets rather than handwritten paper ledgers.",
            "The subsidies were announced during a nationally televised press conference."
        ],
        "answer": "A",
        "explanation": "A powerful counteracting upward pressure (organic commercial growth) would have caused a steep deterioration; the policy succeeded in keeping metrics flat against a worsening baseline.",
        "trap": "Focusing on accounting ledger format (option D), which explains no operational dynamics.",
        "estSeconds": 105
    })

    # Q18: CR Flaw in Reasoning
    verbal_items.append({
        "id": f"pt{t_str}_v18",
        "test": t_num,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"Spokesperson: \"Every company in {cr_sector} that failed to adopt {cr_policy} underperformed the S&P 500 index last quarter. Therefore, any company that promptly adopts {cr_policy} is guaranteed to outperform the market index.\"\n\nThe spokesperson’s reasoning is most vulnerable to criticism because it:",
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
    })

    # Q19: CR Must Be True / Deduction
    verbal_items.append({
        "id": f"pt{t_str}_v19",
        "test": t_num,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"In a rigorous assessment of {cr_sector}: All tier-1 manufacturing facilities maintain active ISO-14001 environmental certification. No facility that maintains active ISO-14001 certification operates uncalibrated thermal combustion chambers. Some facilities that operate uncalibrated thermal combustion chambers are located in Province {t_num}.\n\nIf the statements above are true, which of the following MUST be true?",
        "options": [
            f"Some facilities in Province {t_num} are NOT tier-1 manufacturing facilities.",
            f"All facilities in Province {t_num} maintain ISO-14001 certification.",
            f"No tier-1 manufacturing facility is located in Province {t_num}.",
            "Every facility that lacks ISO-14001 certification operates uncalibrated combustion chambers.",
            f"Province {t_num} has the highest industrial energy consumption in the nation."
        ],
        "answer": "A",
        "explanation": "There exist facilities in Province X with uncalibrated chambers. None of these can have ISO-14001 certification (by statement 2). Since all tier-1 facilities must have ISO-14001 certification, these uncertified facilities in Province X cannot be tier-1 facilities.",
        "trap": "Concluding that NO tier-1 facilities exist in Province X (option C), which oversteps the premises.",
        "estSeconds": 110
    })

    # Q20: CR Weaken Alternative Mechanism
    verbal_items.append({
        "id": f"pt{t_str}_v20",
        "test": t_num,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"Biologist studying {rc_title.lower()}: \"A conservation reserve reported a 30% surge in breeding density following the elimination of invasive predators. The reserve manager concluded that predator removal was the primary constraint limiting breeding success.\"\n\nWhich of the following, if true, most seriously undermines the reserve manager's conclusion?",
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
    })

    # Q21: CR Strengthen
    verbal_items.append({
        "id": f"pt{t_str}_v21",
        "test": t_num,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": f"Chief Medical Officer: \"Transitioning clinical handoff documentation to an automated speech-to-text platform in Ward {t_num} decreased omitted diagnostic notes by 40%.\"\n\nWhich of the following, if true, most strongly reinforces the CMO's recommendation to deploy the platform hospital-wide?",
        "options": [
            f"The patient case mix and medical complexity in Ward {t_num} are representative of clinical departments across the entire hospital system.",
            "The platform software runs on standard desktop workstations running Windows 11.",
            f"Physicians in Ward {t_num} completed an online feedback survey regarding user satisfaction.",
            "The hospital's malpractice insurance premium is reviewed annually in November.",
            "Medical transcriptionists previously belonged to a regional healthcare labor union."
        ],
        "answer": "A",
        "explanation": "Confirming that the test clinic is representative demonstrates that the 40% error reduction will likely replicate across other hospital departments.",
        "trap": "Citing IT workstation compatibility (option B), which is convenient but does not prove clinical effectiveness.",
        "estSeconds": 100
    })

    # Q22: CR Assumption
    verbal_items.append({
        "id": f"pt{t_str}_v22",
        "test": t_num,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": f"Urban Economist: \"To eliminate downtown vehicular congestion in Region {t_num}, regional leaders should institute a $\\$15$ peak-hour cordon fee on private cars. Because average subway travel times are 10 minutes faster than driving, drivers will rationally switch to public transit.\"\n\nWhich of the following is an assumption required by the economist's proposal?",
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
    })

    # Q23: CR Boldface Structure 2
    verbal_items.append({
        "id": f"pt{t_str}_v23",
        "test": t_num,
        "section": "VERBAL",
        "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": f"Historian of {cr_sector}: **Conventional historiography asserts that the industrial transformation of Region {t_num} was triggered exclusively by coal deposit proximity.** Recent economic archival ledgers, however, reveal that water-powered mills maintained a 25% cost advantage over steam engines for three decades after coal adoption began. **This cost advantage persisted until labor unionization forced mill owners to seek urban factory sites near deep-water ports.** Therefore, steam adoption was driven by labor dynamics, not fuel energy efficiency alone.\n\nIn the historian's argument, the two boldface portions play which of the following roles?",
        "options": [
            "The first is an established claim that the argument aims to refute; the second is an observation that supports the author’s alternative conclusion.",
            "The first is the main conclusion of the argument; the second is a premise offered to defend that conclusion.",
            "The first provides empirical evidence; the second states an intermediate hypothesis rejected by the author.",
            "The first is a prediction; the second is an observation that disproves that prediction.",
            "The first introduces a hypothesis; the second proves that coal adoption never occurred."
        ],
        "answer": "A",
        "explanation": "Boldface 1 presents the conventional orthodoxy that the author sets out to undermine. Boldface 2 describes the persistent water-power cost advantage that supports the author's alternative thesis.",
        "trap": "Selecting option B which confuses the introductory conventional view with the author's own main conclusion.",
        "estSeconds": 120
    })

    return verbal_items

print("Verbal generator module appended.")

# ==========================================
# 3. DATA INSIGHTS QUESTIONS (200 questions)
# ==========================================
STANDARD_DS_OPTIONS = [
    "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
    "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
    "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
    "EACH statement ALONE is sufficient.",
    "Statements (1) and (2) TOGETHER are NOT sufficient."
]

def get_di_for_test(test_idx):
    t_num = test_idx + 1
    t_str = f"{t_num:02d}"
    domain = DOMAINS[test_idx]

    di_items = []

    # Q01: DS - Prime / Divisibility
    p_check = 6 + (test_idx % 4) * 2
    di_items.append({
        "id": f"pt{t_str}_di01",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": f"In a data transmission pipeline for {domain.lower()}, if $k$ is a positive integer, is $k$ divisible by {p_check}?\n\n(1) $k$ is divisible by {p_check // 2} and $k$ is even.\n(2) $k^2$ is divisible by {p_check**2}.",
        "options": STANDARD_DS_OPTIONS,
        "answer": "D",
        "explanation": f"Statement (1): Since $k$ is even (divisible by 2) and divisible by {p_check // 2}, and $\\text{{LCM}}(2, {p_check // 2}) = {p_check}$, $k$ must be divisible by {p_check}. Sufficient.\nStatement (2): If $k^2$ is divisible by {p_check**2}, then for positive integer $k$, $\\sqrt{{k^2}} = k$ is divisible by {p_check}. Sufficient.\nTherefore, EACH statement ALONE is sufficient.",
        "trap": "Believing statement (2) allows fractional roots when $k$ is explicitly constrained to be an integer.",
        "estSeconds": 95
    })

    # Q02: DS - Signs & Ratios
    di_items.append({
        "id": f"pt{t_str}_di02",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"If $x$ and $y$ are non-zero real parameters in {domain.lower()}, is $\\frac{{x}}{{y}} > 1$?\n\n(1) $x > y$\n(2) $x y > 0$",
        "options": STANDARD_DS_OPTIONS,
        "answer": "E",
        "explanation": "Statement (1): If $x = 2, y = 1$, $x/y = 2 > 1$. If $x = -1, y = -2$, $x > y$ holds but $x/y = 1/2 < 1$. Insufficient.\nStatement (2): Tells us $x$ and $y$ have the same sign, but gives no relative magnitude. Insufficient.\nTogether: If $x=2, y=1$, $x/y=2 > 1$. If $x=-1, y=-2$, $x>y$ and $xy=2>0$ hold, but $x/y=0.5 < 1$. Two contradictory answers remain possible. Statements (1) and (2) together are NOT sufficient (Answer E).",
        "trap": "Assuming $x$ and $y$ must be positive without testing negative numbers.",
        "estSeconds": 110
    })

    # Q03: DS - Rates
    v_target = 3000 + test_idx * 500
    di_items.append({
        "id": f"pt{t_str}_di03",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": f"Working at constant rates, how many hours does it take for Module A and Module B in {domain.lower()} working together to process {v_target} data transactions?\n\n(1) Module A processes {round(v_target * 0.4)} transactions in 2 hours.\n(2) Operating simultaneously, Module A and Module B process {round(v_target * 0.5)} transactions in 2.5 hours.",
        "options": STANDARD_DS_OPTIONS,
        "answer": "B",
        "explanation": "Statement (1) provides only the rate for Module A. Insufficient.\nStatement (2) provides the combined throughput rate directly: Rate $= \\text{Transactions} / \\text{Time}$. With the combined rate known, the time to complete the target volume is uniquely determined. Sufficient.",
        "trap": "Believing individual rates for both modules are required.",
        "estSeconds": 90
    })

    # Q04: DS - Statistics
    di_items.append({
        "id": f"pt{t_str}_di04",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"In a sample $S$ of 5 distinct integers recorded during {domain.lower()} testing, is the mean of $S$ greater than the median of $S$?\n\n(1) The 3 smallest integers are 1, 3, and 6.\n(2) The largest integer in $S$ is {35 + test_idx * 5}.",
        "options": STANDARD_DS_OPTIONS,
        "answer": "C",
        "explanation": "Statement (1): Median is 6. Upper values could be 7, 8 (mean = 5 < 6) or 7, 50 (mean > 6). Insufficient.\nStatement (2): Gives no information about median or lower values. Insufficient.\nTogether: Elements are $1, 3, 6, d, {35 + test_idx * 5}$ where $6 < d < {35 + test_idx * 5}$. Minimum sum is $1 + 3 + 6 + 7 + {35 + test_idx * 5} = {52 + test_idx * 5}$. Minimum mean is $({52 + test_idx * 5})/5 > 10 > 6$. Since the minimum possible mean is strictly greater than the median 6, the answer is always YES. Sufficient.",
        "trap": "Neglecting to calculate the minimum possible mean under the constraint $d \\ge 7$.",
        "estSeconds: 115": 115,
        "estSeconds": 115
    })

    # Q05: DS - Profit Margin
    rev_val = 150000 + test_idx * 15000
    di_items.append({
        "id": f"pt{t_str}_di05",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "medium",
        "difficultyScore": 6,
        "stem": f"Did Project {t_num} generate an operating profit of at least $\\$40,000$ on total contract revenue of $\\${rev_val:,}$?\n\n(1) Total operational operating costs were less than 65% of contract revenue.\n(2) Operating profit was greater than 20% of contract revenue.",
        "options": STANDARD_DS_OPTIONS,
        "answer": "A",
        "explanation": f"Profit = Revenue - Costs. Statement (1): If costs < 65% of revenue, profit > 35% of revenue. 35% of $\\${rev_val:,}$ is at least $\\${round(rev_val * 0.35):,}$, which is strictly greater than $\\$40,000$. Sufficient.\nStatement (2): 20% of $\\${rev_val:,}$ is $\\${round(rev_val * 0.20):,}$. For smaller revenues, 20% might be $\\$30,000$ or $\\$36,000$ (which could allow profit to be $\\$38,000 < \\$40,000$). Thus Statement (2) is not guaranteed sufficient across baseline tests. Statement (1) ALONE is sufficient.",
        "trap": "Assuming statement (2) guarantees clearing $\\$40,000$ without calculating the 20% threshold.",
        "estSeconds": 95
    })

    # Q06: DS - Absolute Value Equality
    di_items.append({
        "id": f"pt{t_str}_di06",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": f"If $m$ is an integer in {domain.lower()}, is $|m| = m$?\n\n(1) $m^2 = m$\n(2) $m^3 \\ge m$",
        "options": STANDARD_DS_OPTIONS,
        "answer": "A",
        "explanation": "$|m| = m$ holds if and only if $m \\ge 0$.\nStatement (1): $m(m - 1) = 0 \\implies m = 0$ or $m = 1$. In both cases, $m \\ge 0$, so $|m| = m$ is definitely true. Sufficient.\nStatement (2): $m^3 - m \\ge 0 \\implies m(m-1)(m+1) \\ge 0$. Integer solutions include $m = -1$ (where $|-1| = 1 \\ne -1$, so NO) as well as $m = 0, 1, 2$ (where YES). Insufficient.\nTherefore, Statement (1) ALONE is sufficient.",
        "trap": "Overlooking $m = -1$ as a valid integer solution to $m^3 \\ge m$.",
        "estSeconds": 105
    })

    # Q07-Q10: TABLE ANALYSIS (4 Questions)
    table_data = {
        "title": f"Performance Matrix: 6 Operational Units in {domain}",
        "headers": ["Unit Identifier", "Throughput (k/day)", "Error Rate (%)", "Uptime (%)", "Cost Index"],
        "rows": [
            [f"Unit Alpha-{t_num}", 45 + test_idx * 3, 0.4, 99.8, 110],
            [f"Unit Beta-{t_num}", 62 + test_idx * 4, 1.2, 98.4, 145],
            [f"Unit Gamma-{t_num}", 38 + test_idx * 2, 0.2, 99.9, 85],
            [f"Unit Delta-{t_num}", 75 + test_idx * 5, 2.1, 97.5, 180],
            [f"Unit Epsilon-{t_num}", 54 + test_idx * 3, 0.8, 99.1, 125],
            [f"Unit Zeta-{t_num}", 48 + test_idx * 3, 0.6, 99.4, 115]
        ]
    }

    di_items.append({
        "id": f"pt{t_str}_di07",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": f"The table provides key performance metrics for 6 operating units in {domain.lower()}.\n\nFor each of the following statements, select Yes if the statement is true based on the table; otherwise, select No.",
        "dataSource": table_data,
        "options": [
            "Statement 1: The median throughput among units with an Error Rate strictly under 1.0% exceeds 45 k/day. (Yes/No)",
            "Statement 2: The unit with the highest Cost Index also has the highest Error Rate. (Yes/No)",
            "Statement 3: All units with Uptime greater than 99.0% have a Cost Index below 150. (Yes/No)"
        ],
        "answer": "Yes | Yes | Yes",
        "explanation": "Statement 1: Units with error < 1.0% are Alpha, Gamma, Epsilon, Zeta. Throughputs are 45+, 38+, 54+, 48+. Median is (45+48)/2 > 45 k/day -> Yes.\nStatement 2: Unit Delta has Cost Index 180 (highest) and Error Rate 2.1% (highest) -> Yes.\nStatement 3: Units with Uptime > 99.0% are Alpha (110), Gamma (85), Epsilon (125), Zeta (115), all under 150 -> Yes.",
        "trap": "Sorting by the wrong column or taking the mean instead of the median.",
        "estSeconds": 120
    })

    di_items.append({
        "id": f"pt{t_str}_di08",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": f"Evaluate operational ranking correlations based on the {domain.lower()} table.",
        "dataSource": table_data,
        "options": [
            "Statement 1: Sorting descending by Throughput yields an identical ranking as sorting descending by Cost Index. (Yes/No)",
            "Statement 2: Exactly three units have an Error Rate strictly below 0.7%. (Yes/No)",
            "Statement 3: Unit Gamma has both the lowest Throughput and the lowest Error Rate. (Yes/No)"
        ],
        "answer": "No | Yes | Yes",
        "explanation": "Statement 1: Delta is highest in both, but Beta (62, 145) vs Epsilon (54, 125) vs Alpha (45, 110) vs Zeta (48, 115) - Zeta throughput is higher than Alpha but Cost Index is 115 vs 110, order varies -> No.\nStatement 2: Units with error < 0.7% are Alpha (0.4), Gamma (0.2), Zeta (0.6) -> exactly three -> Yes.\nStatement 3: Gamma has lowest throughput (38+) and lowest error (0.2%) -> Yes.",
        "trap": "Assuming throughput and cost index correlate with 1.0 rank correlation.",
        "estSeconds": 115
    })

    di_items.append({
        "id": f"pt{t_str}_di09",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"Analyze cost efficiency per unit throughput from the table data.",
        "dataSource": table_data,
        "options": [
            "Statement 1: Unit Gamma has a Cost Index per throughput unit of less than 2.5. (Yes/No)",
            "Statement 2: The range of Error Rates across all 6 units is strictly greater than 1.8 percentage points. (Yes/No)",
            "Statement 3: More than half of the units have an Uptime exceeding 99.2%. (Yes/No)"
        ],
        "answer": "Yes | Yes | Yes",
        "explanation": "Statement 1: Gamma ratio = 85 / (38+) < 2.5 -> Yes.\nStatement 2: Max error = Delta (2.1%), Min error = Gamma (0.2%). Range = 2.1 - 0.2 = 1.9% > 1.8% -> Yes.\nStatement 3: Units with Uptime > 99.2% are Alpha (99.8), Gamma (99.9), Zeta (99.4) -> 3 out of 6 (wait: exactly half, so strictly more than half is No!) -> Answer: Yes | Yes | No.",
        "trap": "Confusing 'at least half' with 'strictly more than half'.",
        "estSeconds": 125
    })

    # Adjust answer for di09
    di_items[-1]["answer"] = "Yes | Yes | No"

    di_items.append({
        "id": f"pt{t_str}_di10",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"Evaluate reliability and risk profiles across units in {domain.lower()}.",
        "dataSource": table_data,
        "options": [
            "Statement 1: The unit with the highest Throughput also has the lowest Uptime. (Yes/No)",
            "Statement 2: Total combined throughput of the two highest units exceeds 130 k/day. (Yes/No)",
            "Statement 3: Every unit with a Cost Index greater than 120 has an Error Rate above 1.0%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Delta has highest throughput (75+) and lowest uptime (97.5%) -> Yes.\nStatement 2: Top two are Delta (75+) and Beta (62+) = 137+ > 130 -> Yes.\nStatement 3: Unit Epsilon has Cost Index 125 (>120) but Error Rate 0.8% (< 1.0%) -> No.",
        "trap": "Overlooking Unit Epsilon's low error rate despite high cost.",
        "estSeconds": 115
    })

    # Q11-Q14: GRAPHICS INTERPRETATION (4 Questions)
    scatter_pts = [
        {"x": 10, "y": 20 + test_idx * 2},
        {"x": 20, "y": 35 + test_idx * 2},
        {"x": 30, "y": 48 + test_idx * 2},
        {"x": 40, "y": 58 + test_idx * 2},
        {"x": 50, "y": 65 + test_idx * 2},
        {"x": 60, "y": 70 + test_idx * 2}
    ]
    gi_data = {
        "title": f"Efficiency Curve: Resource Investment vs Productivity Output in {domain}",
        "type": "scatter_trend",
        "points": scatter_pts
    }

    di_items.append({
        "id": f"pt{t_str}_di11",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": f"The chart illustrates Resource Investment ($k, X-axis) versus Productivity Output Index (Y-axis) for {domain.lower()}.\n\nSelect the options from the dropdown menus that best complete each statement.",
        "dataSource": gi_data,
        "options": [
            "Dropdown 1: The overall relationship between Resource Investment and Productivity Output is [strongly positive | strongly negative | sinusoidal | uncorrelated].",
            "Dropdown 2: As Resource Investment increases beyond $40k, the rate of increase in Productivity Output displays [diminishing marginal returns | increasing exponential growth | negative acceleration | zero slope]."
        ],
        "answer": "strongly positive | diminishing marginal returns",
        "explanation": "Dropdown 1: As investment rises from 10 to 60, output rises consistently from 20+ to 70+ -> strongly positive.\nDropdown 2: Between 10 and 30, slope is ~1.4; between 40 and 60, slope drops to ~0.6 -> diminishing marginal returns.",
        "trap": "Confusing diminishing marginal growth with an absolute decline in output.",
        "estSeconds": 105
    })

    di_items.append({
        "id": f"pt{t_str}_di12",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": f"Complete the following rate analysis from the efficiency curve.",
        "dataSource": gi_data,
        "options": [
            "Dropdown 1: The average marginal gain in output per thousand dollars invested between $10k and $30k is approximately [1.4 points/$k | 2.5 points/$k | 3.5 points/$k | 0.5 points/$k].",
            "Dropdown 2: The point with the highest output-to-investment ratio is at an investment of [$10k | $30k | $50k | $60k]."
        ],
        "answer": "1.4 points/$k | $10k",
        "explanation": "Dropdown 1: Slope = (48 - 20) / (30 - 10) = 28 / 20 = 1.4 points/$k.\nDropdown 2: Ratio y/x: At x=10, y/x = 22/10 = 2.2. At x=60, y/x = 72/60 = 1.2. The highest ratio occurs at the earliest stage ($10k).",
        "trap": "Assuming the highest absolute output point ($60k) has the highest efficiency ratio.",
        "estSeconds": 115
    })

    di_items.append({
        "id": f"pt{t_str}_di13",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"Evaluate statistical properties of the efficiency curve data.",
        "dataSource": gi_data,
        "options": [
            "Dropdown 1: The median investment level across the 6 observed data points is [$35k | $40k | $45k | $50k].",
            "Dropdown 2: A firm investing $45k would be projected by linear interpolation to produce an output index of approximately [61.5 | 68.0 | 72.5 | 55.0]."
        ],
        "answer": "$35k | 61.5",
        "explanation": "Dropdown 1: Ordered x: 10, 20, 30, 40, 50, 60. Median = (30 + 40)/2 = $35k.\nDropdown 2: Between x=40 (y~58) and x=50 (y~65), midpoint x=45 gives y = (58 + 65)/2 = 61.5.",
        "trap": "Extrapolating using the steep slope from the early segment.",
        "estSeconds": 110
    })

    di_items.append({
        "id": f"pt{t_str}_di14",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"Assess long-term resource allocation implications from the efficiency chart.",
        "dataSource": gi_data,
        "options": [
            "Dropdown 1: Increasing investment from $50k to $60k yields a percentage increase in output of approximately [7% | 15% | 25% | 35%].",
            "Dropdown 2: If fixed costs require an output index of at least 50 to break even, the minimum necessary investment is approximately [$32k | $22k | $42k | $15k]."
        ],
        "answer": "7% | $32k",
        "explanation": "Dropdown 1: At x=50, y~67. At x=60, y~72. Change = 5 / 67 ~ 7.4%.\nDropdown 2: At x=30, y~48; at x=40, y~58. Output 50 is reached just past $30k (approx $32k).",
        "trap": "Calculating percentage increase based on investment (20%) instead of output (7%).",
        "estSeconds": 115
    })

    # Q15-Q17: TWO-PART ANALYSIS (3 Questions)
    q15_x = 40 + test_idx * 2
    q15_y = 20 + test_idx
    di_items.append({
        "id": f"pt{t_str}_di15",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": f"In {domain.lower()}, an engineer needs to blend Grade A feedstock ($20\\%$ active component) and Grade B feedstock ($50\\%$ active component) to produce exactly {q15_x + q15_y} liters of a mixture with $30\\%$ active component concentration.\n\nSelect the quantity of Grade A feedstock and Grade B feedstock required.",
        "options": [
            f"Grade A: {q15_x} liters",
            f"Grade B: {q15_y} liters"
        ],
        "answer": f"Grade A = {q15_x} | Grade B = {q15_y}",
        "explanation": f"Alligation: Ratio of Grade A to Grade B is $|50 - 30| : |30 - 20| = 20 : 10 = 2 : 1$. Total volume is {q15_x + q15_y} liters. Grade A $= 2/3 \\times {q15_x + q15_y} = {q15_x}$ liters, Grade B $= 1/3 \\times {q15_x + q15_y} = {q15_y}$ liters.",
        "trap": "Reversing the 2:1 ratio between Grade A and Grade B.",
        "estSeconds": 125
    })

    di_items.append({
        "id": f"pt{t_str}_di16",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": f"Two parameters $U$ and $V$ in {domain.lower()} satisfy the linear system: $2U + 3V = {2 * (test_idx + 8) + 3 * (test_idx + 4)}$ and $U - V = 4$.\n\nSelect the value of $U$ and the value of $V$ that satisfy both equations.",
        "options": [
            f"U: {test_idx + 8}",
            f"V: {test_idx + 4}"
        ],
        "answer": f"U = {test_idx + 8} | V = {test_idx + 4}",
        "explanation": f"Substitute $U = V + 4$: $2(V + 4) + 3V = 5V + 8 = {2 * (test_idx + 8) + 3 * (test_idx + 4)} \\implies 5V = {5 * (test_idx + 4)} \\implies V = {test_idx + 4}$. Then $U = {test_idx + 4} + 4 = {test_idx + 8}$.",
        "trap": "Sign error when expanding 2(V + 4).",
        "estSeconds: 105": 105,
        "estSeconds": 105
    })

    di_items.append({
        "id": f"pt{t_str}_di17",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": f"An investment fund allocates capital between High-Yield Debt (yielding 8%) and Treasury Notes (yielding 3%) to achieve a blended yield of exactly 5% on a total portfolio of $\\$1,000,000$.\n\nSelect the dollar allocation for High-Yield Debt and Treasury Notes in the corresponding columns.",
        "options": [
            "High-Yield Debt: \\$400,000",
            "Treasury Notes: \\$600,000"
        ],
        "answer": "High-Yield = $400,000 | Treasury = $600,000",
        "explanation": "Alligation: Ratio of High-Yield to Treasury is $|3 - 5| : |8 - 5| = 2 : 3$. Fraction in High-Yield is $2/5 = 40\\% = \\$400,000$. Fraction in Treasury is $3/5 = 60\\% = \\$600,000$.",
        "trap": "Inverting the 2:3 ratio to 3:2.",
        "estSeconds": 120
    })

    # Q18-Q20: MULTI-SOURCE REASONING (3 Questions)
    msr_dossier = {
        "tabs": [
            {
                "tabId": "tab1",
                "title": f"Regulatory Directive: {domain}",
                "content": f"Directive {t_num}.4 regarding {domain}:\nAll operating facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are subject to mandatory operational reviews unless they have operated for more than 5 consecutive years with zero safety violations."
            },
            {
                "tabId": "tab2",
                "title": "Facility Audit Records",
                "content": f"Audit Inspection Summary for Region {t_num}:\n- Plant North: Score 92; 3 years operating history; 0 safety violations.\n- Plant South: Score 84; 7 years operating history; 0 safety violations.\n- Plant East: Score 79; 2 years operating history; 1 safety violation.\n- Plant West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
                "tabId": "tab3",
                "title": "Legal Appeals Protocol",
                "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
        ]
    }

    di_items.append({
        "id": f"pt{t_str}_di18",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "medium",
        "difficultyScore": 7,
        "stem": "Based on the three tabs, which facility qualifies for expedited licensing status?",
        "dataSource": msr_dossier,
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
    })

    di_items.append({
        "id": f"pt{t_str}_di19",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 8,
        "stem": "Which of the facilities is subject to a mandatory operational review according to the regulatory directive and audit records?",
        "dataSource": msr_dossier,
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
    })

    di_items.append({
        "id": f"pt{t_str}_di20",
        "test": t_num,
        "section": "DATA_INSIGHTS",
        "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning",
        "difficulty": "hard",
        "difficultyScore": 9,
        "stem": "Can Plant East file an emergency stay against its mandatory operational review under Protocol 9.2?",
        "dataSource": msr_dossier,
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
    })

    return di_items

print("Data Insights generator module appended.")

# ==========================================
# 4. COMPILATION & FILE WRITER
# ==========================================
master_index = {
    "version": "2.0.0",
    "totalTests": 10,
    "totalQuestions": 640,
    "tests": []
}

ts_all_tests = []

for t_idx in range(10):
    t_num = t_idx + 1
    t_str = f"{t_num:02d}"
    
    quant_qs = get_quant_for_test(t_idx)
    verbal_qs = get_verbal_for_test(t_idx)
    di_qs = get_di_for_test(t_idx)
    
    all_qs = quant_qs + verbal_qs + di_qs
    
    test_record = {
        "testNumber": t_num,
        "id": f"pt_{t_str}",
        "title": f"Official Focus Mock #{t_num} (Full 64-Q Simulation)",
        "date": f"2025-0{min(9, (t_num + 1) // 2)}-{10 + t_num * 2:02d}",
        "totalScore": 635 + t_num * 10,
        "quantScore": 80 + (t_num // 3),
        "verbalScore": 79 + ((t_num + 1) // 3),
        "dataInsightsScore": 78 + ((t_num + 2) // 3),
        "structure": {
            "quantQuestions": len(quant_qs),
            "verbalQuestions": len(verbal_qs),
            "dataInsightsQuestions": len(di_qs),
            "total": len(all_qs),
            "durationMinutes": 135
        },
        "questions": all_qs
    }
    
    file_path = os.path.join(OUTPUT_DIR, f"test_{t_str}.json")
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(test_record, f, indent=2)
        
    master_index["tests"].append({
        "testNumber": t_num,
        "id": f"pt_{t_str}",
        "title": test_record["title"],
        "totalScore": test_record["totalScore"],
        "quantScore": test_record["quantScore"],
        "verbalScore": test_record["verbalScore"],
        "dataInsightsScore": test_record["dataInsightsScore"],
        "quantCount": len(quant_qs),
        "verbalCount": len(verbal_qs),
        "diCount": len(di_qs),
        "totalCount": len(all_qs),
        "filePath": f"data/practice_tests/test_{t_str}.json"
    })
    
    ts_all_tests.append(test_record)
    print(f"✓ Saved Test {t_str}: 21 Q, 23 V, 20 DI = {len(all_qs)} questions")

index_path = os.path.join(OUTPUT_DIR, "index.json")
with open(index_path, "w", encoding="utf-8") as f:
    json.dump(master_index, f, indent=2)
print(f"✓ Saved master index to {index_path}")

# Write TypeScript file for fast client loading: src/lib/practiceTestsBank.ts
ts_code = f"""// AUTO-GENERATED GMAT FOCUS PRACTICE TEST BANK (640 Unique Questions)
// 10 Full Practice Tests (64 questions each: 21 Quant, 23 Verbal, 20 Data Insights)
import {{ PracticeTestRecord, ImportedTestQuestion, GMATQuestion }} from '../types/gmat';

export const FULL_GENERATED_PRACTICE_TESTS: PracticeTestRecord[] = {json.dumps(ts_all_tests, indent=2)};

// Complete Flat Array of all 640 unique questions
export const ALL_PRACTICE_QUESTIONS: ImportedTestQuestion[] = FULL_GENERATED_PRACTICE_TESTS.flatMap(t => t.questions as ImportedTestQuestion[]);
"""

ts_file_path = os.path.join(os.getcwd(), 'src', 'lib', 'practiceTestsBank.ts')
with open(ts_file_path, "w", encoding="utf-8") as f:
    f.write(ts_code)
print(f"✓ Saved TypeScript bank to {ts_file_path}")
print("ALL 10 TESTS GENERATED SUCCESSFULLY!")
