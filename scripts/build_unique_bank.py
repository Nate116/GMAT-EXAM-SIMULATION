import json
import os
import math
import sys
sys.path.append(os.path.dirname(__file__))
from build_gmat_bank import RC_THEMES, CR_DOMAINS_TOPICS

OUTPUT_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 10 Tests, 64 Questions each (21 Quant, 23 Verbal, 20 DI = 640 questions total)
tests = []

DOMAINS = [
    ("Orbital Mechanics & Deep-Space Probes", "satellite telemetry", "delta-v propulsion"),
    ("Biopharmaceutical Clinical Kinetics", "monoclonal antibody", "dissociation constant"),
    ("Sovereign Debt & Fixed-Income Derivatives", "treasury yield curve", "duration matching"),
    ("Civil Hydrology & Aquifer Management", "artesian reservoir", "recharge infiltration"),
    ("Semiconductor Extreme Ultraviolet Lithography", "silicon wafer fab", "photoresist etching"),
    ("Renewable Microgrids & Flow Batteries", "grid inverter station", "round-trip efficiency"),
    ("Autonomous Urban Mobility Systems", "lidar sensor cluster", "fleet routing latency"),
    ("Agricultural Agronomy & Soil Biomes", "arable cropland parcel", "nitrogen mineralization"),
    ("Telecommunication Dense Wave Division", "optical transponder node", "fiber dispersion index"),
    ("Automated High-Bay Logistics Robotics", "pallet crane gantry", "dynamic inventory pick")
]

STANDARD_DS_OPTIONS = [
    "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
    "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
    "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
    "EACH statement ALONE is sufficient.",
    "Statements (1) and (2) TOGETHER are NOT sufficient."
]

for t_idx in range(10):
    t_num = t_idx + 1
    t_str = f"{t_num:02d}"
    d_name, d_asset, d_metric = DOMAINS[t_idx]
    
    questions = []

    # ==========================================
    # QUANTITATIVE (21 unique questions)
    # ==========================================
    # Q01: Number Properties
    primes = [7, 11, 13, 17, 19, 23, 29, 31, 37, 41]
    p = primes[t_idx]
    questions.append({
        "id": f"pt{t_str}_q01", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility", "difficulty": "medium", "difficultyScore": 6,
        "stem": f"An encrypted signal packet in {d_name.lower()} is indexed by integer $n$. If $n^2 - 1$ is divisible by prime ${p}$ and $1 < n < {p}$, how many valid integer values can $n$ assume?",
        "options": ["0", "1", "2", "3", f"{p-1}"], "answer": "B",
        "explanation": f"Since $n^2 - 1 = (n-1)(n+1)$ is divisible by prime {p}, either $n-1$ or $n+1$ must be a multiple of {p}. Given $1 < n < {p}$, $n-1 < {p}$, so $n-1$ cannot be a multiple. The only valid solution is $n+1 = {p} \\implies n = {p-1}$. Exactly 1 integer value.",
        "trap": "Assuming both linear factors yield solutions within the open interval (1, p).",
        "estSeconds": 90
    })

    # Q02: Work & Rates
    t_a = 6 + t_idx
    t_b = (6 + t_idx) * 2
    t_comb = round((t_a * t_b) / (t_a + t_b), 2)
    questions.append({
        "id": f"pt{t_str}_q02", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work", "difficulty": "medium", "difficultyScore": 6,
        "stem": f"While servicing a {d_asset}, Diagnostic Unit 1 finishes the calibration process in {t_a} hours, while Diagnostic Unit 2 requires {t_b} hours working alone. Operating simultaneously at constant rates, how many hours will both units require to calibrate the system?",
        "options": [f"{t_comb - 0.7:.2f}", f"{t_comb:.2f}", f"{t_comb + 0.7:.2f}", f"{(t_a + t_b)/2:.2f}", f"{t_a * 0.75:.2f}"],
        "answer": "B",
        "explanation": f"Combined rate $R = 1/{t_a} + 1/{t_b} = 3/{t_b}$. Time $T = {t_b}/3 = {t_comb}$ hours.",
        "trap": "Averaging the two individual time values directly.",
        "estSeconds": 85
    })

    # Q03: Percents & Multipliers
    pct_up = 30 + t_idx * 2
    pct_down = 15 + (t_idx % 3) * 5
    m_val = (1 + pct_up/100) * (1 - pct_down/100)
    net_p = round((m_val - 1) * 100, 1)
    questions.append({
        "id": f"pt{t_str}_q03", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures", "difficulty": "medium", "difficultyScore": 6,
        "stem": f"A distributor of {d_asset} components marks up acquisition cost by {pct_up}% to establish list price, then offers a promotional discount of {pct_down}% off list price. What is the net profit percentage earned over the original acquisition cost?",
        "options": [f"{pct_up - pct_down:.1f}%", f"{net_p:.1f}%", f"{net_p + 2.5:.1f}%", f"{pct_up - pct_down - 3.0:.1f}%", f"{net_p - 2.5:.1f}%"],
        "answer": "B",
        "explanation": f"Multiplier $= (1 + {pct_up/100}) \\times (1 - {pct_down/100}) = {m_val:.4f}$. Net percentage $= ({m_val:.4f} - 1) \\times 100 = {net_p}\\%$.",
        "trap": f"Subtracting the two percentages directly ({pct_up}% - {pct_down}%).",
        "estSeconds": 90
    })

    # Q04: Exponents
    b_val = 2 if t_idx % 2 == 0 else 3
    x_val = 2 + (t_idx % 3)
    c_val = b_val**(2*x_val + 1) - b_val**(2*x_val - 1)
    questions.append({
        "id": f"pt{t_str}_q04", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"If ${b_val}^{{2x+1}} - ${b_val}^{{2x-1}} = {c_val}$, what is the value of $x^3 - x$?",
        "options": [f"{x_val**3 - x_val - 4}", f"{x_val**3 - x_val}", f"{x_val**3 - x_val + 4}", f"{x_val**3}", f"{x_val**2 - 1}"],
        "answer": "B",
        "explanation": f"Factor: ${b_val}^{{2x-1}}({b_val}^2 - 1) = {c_val} \\implies {b_val}^{{2x-1}} = {b_val**(2*x_val - 1)} \\implies 2x - 1 = {2*x_val - 1} \\implies x = {x_val}$. Then $x^3 - x = {x_val}^3 - {x_val} = {x_val**3 - x_val}$.",
        "trap": "Miscalculating the factored term $(b^2 - 1)$.",
        "estSeconds": 95
    })

    # Q05: Absolute Value Range
    center_k = 4 + t_idx
    radius_k = 8 + t_idx * 2
    int_len = radius_k + 1
    questions.append({
        "id": f"pt{t_str}_q05", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Inequalities & Absolute Values", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"How many integer values of $y$ satisfy the inequality $|2y - {center_k}| \\le {radius_k}$?",
        "options": [f"{int_len - 1}", f"{int_len}", f"{int_len + 1}", f"{radius_k}", f"{radius_k - 1}"],
        "answer": "B",
        "explanation": f"$-{radius_k} \\le 2y - {center_k} \\le {radius_k} \\implies {center_k - radius_k} \\le 2y \\le {center_k + radius_k} \\implies {(center_k - radius_k)/2} \\le y \\le {(center_k + radius_k)/2}$. Contains exactly {int_len} integers.",
        "trap": "Forgetting to count both endpoints when calculating inclusive integer count.",
        "estSeconds": 85
    })

    # Q06: Statistics & Maximum Element
    m_val = 16 + t_idx * 2
    a_val = 21 + t_idx * 2
    max_ans = 7 * a_val - (1 + 2 + 3 + m_val + (m_val + 1) + (m_val + 2))
    questions.append({
        "id": f"pt{t_str}_q06", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"A sample of 7 distinct positive integers evaluating {d_metric} has a median of {m_val} and an arithmetic mean of {a_val}. What is the maximum possible value of the largest integer in this sample?",
        "options": [f"{max_ans - 4}", f"{max_ans - 2}", f"{max_ans}", f"{max_ans + 2}", f"{max_ans + 4}"],
        "answer": "C",
        "explanation": f"Total sum $= 7 \\times {a_val} = {7 * a_val}$. To maximize $x_7$, minimize $x_1=1, x_2=2, x_3=3$. Given median $x_4 = {m_val}$. Minimal upper values: $x_5 = {m_val + 1}, x_6 = {m_val + 2}$. Subtracting these 6 minimal integers leaves $x_7 = {max_ans}$.",
        "trap": "Allowing upper elements to equal the median instead of strictly distinct integers.",
        "estSeconds": 110
    })

    # Q07: Combinatorics
    c_m = 5 + (t_idx % 3)
    c_w = 4 + (t_idx % 2)
    tot_c = math.comb(c_m, 2) * math.comb(c_w, 2)
    questions.append({
        "id": f"pt{t_str}_q07", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"A technical review panel of 4 engineers is to be assembled in {d_name.lower()} from {c_m} lead specialists and {c_w} staff analysts. If the panel must include exactly 2 lead specialists and 2 staff analysts, how many different panel rosters can be formed?",
        "options": [f"{tot_c - 10}", f"{tot_c - 5}", f"{tot_c}", f"{tot_c + 5}", f"{tot_c + 10}"],
        "answer": "C",
        "explanation": f"$\\binom{{{c_m}}}{{2}} \\times \\binom{{{c_w}}}{{2}} = {math.comb(c_m, 2)} \\times {math.comb(c_w, 2)} = {tot_c}$.",
        "trap": "Adding the selections instead of multiplying.",
        "estSeconds": 95
    })

    # Q08: Factorial Divisibility
    f_num = 30 + t_idx * 5
    p_exp = f_num // 3 + f_num // 9 + f_num // 27
    questions.append({
        "id": f"pt{t_str}_q08", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"What is the greatest positive integer $k$ such that $3^k$ divides ${f_num}!$ without a remainder?",
        "options": [f"{p_exp - 2}", f"{p_exp - 1}", f"{p_exp}", f"{p_exp + 1}", f"{p_exp + 2}"],
        "answer": "C",
        "explanation": f"Using Legendre's formula for prime 3: $\\lfloor {f_num}/3 \\rfloor + \\lfloor {f_num}/9 \\rfloor + \\lfloor {f_num}/27 \\rfloor = {f_num//3} + {f_num//9} + {f_num//27} = {p_exp}$.",
        "trap": "Dividing only once by 3 without accounting for 9 and 27.",
        "estSeconds": 85
    })

    # Q09: Harmonic Mean
    sp_a = 35 + t_idx * 3
    sp_b = 70 + t_idx * 6
    v_h = round((2 * sp_a * sp_b) / (sp_a + sp_b), 1)
    questions.append({
        "id": f"pt{t_str}_q09", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"A transport carrier in {d_name.lower()} travels an outbound route of distance $D$ at an average speed of {sp_a} mph, and returns along the same route at {sp_b} mph. What is the average speed of the carrier for the entire round trip in mph?",
        "options": [f"{v_h}", f"{(sp_a + sp_b)/2:.1f}", f"{v_h + 2.5}", f"{v_h - 2.5}", f"{(sp_a + sp_b)/2 + 2.0:.1f}"],
        "answer": "A",
        "explanation": f"Harmonic mean: $V = \\frac{{2 \\times {sp_a} \\times {sp_b}}}{{{sp_a} + {sp_b}}} = {v_h}$ mph.",
        "trap": "Selecting the arithmetic mean.",
        "estSeconds": 80
    })

    # Q10: Dilution / Alligation
    init_vol = 40 + t_idx * 5
    c_high = 30
    c_low = 15
    w_needed = init_vol # since conc is halved
    questions.append({
        "id": f"pt{t_str}_q10", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"A processing vessel in {d_name.lower()} contains {init_vol} liters of an aqueous solution containing {c_high}% chemical compound. How many liters of pure water must be added to dilute the solution so that the compound concentration becomes {c_low}%?",
        "options": [f"{w_needed - 10}", f"{w_needed}", f"{w_needed + 10}", f"{w_needed * 2}", f"{w_needed // 2}"],
        "answer": "B",
        "explanation": f"Compound volume $= 0.30 \\times {init_vol} = {0.30 * init_vol}$. For 15% concentration: $\\frac{{{0.30 * init_vol}}}{{{init_vol} + w}} = 0.15 \\implies {init_vol} + w = {init_vol * 2} \\implies w = {init_vol}$ liters.",
        "trap": "Confusing added water with total final volume.",
        "estSeconds": 90
    })

    # Q11: Arithmetic Series
    first_t = 6 + t_idx
    diff_t = 3
    s_10 = (10 * (2 * first_t + 9 * diff_t)) // 2
    questions.append({
        "id": f"pt{t_str}_q11", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Sequences & Series", "difficulty": "medium", "difficultyScore": 6,
        "stem": f"In an arithmetic sequence monitoring {d_asset} efficiency, the first term is {first_t} and each subsequent term increases by a common difference of {diff_t}. What is the sum of the first 10 terms of this sequence?",
        "options": [f"{s_10 - 10}", f"{s_10 - 5}", f"{s_10}", f"{s_10 + 5}", f"{s_10 + 10}"],
        "answer": "C",
        "explanation": f"Sum $S_{{10}} = \\frac{{10}}{{2}} [2({first_t}) + 9({diff_t})] = 5 [{2*first_t} + {9*diff_t}] = {s_10}$.",
        "trap": "Using 10d instead of 9d in the summation formula.",
        "estSeconds": 85
    })

    # Q12: Overlapping Sets
    pop_tot = 110 + t_idx * 10
    pop_a = 55 + t_idx * 4
    pop_b = 50 + t_idx * 4
    pop_none = 12 + (t_idx % 4)
    pop_both = pop_a + pop_b - (pop_tot - pop_none)
    questions.append({
        "id": f"pt{t_str}_q12", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Overlapping Sets", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"Among {pop_tot} enterprise installations in {d_name.lower()}, {pop_a} have installed Security Patch A, {pop_b} have installed Security Patch B, and {pop_none} have installed neither patch. How many installations have installed BOTH Security Patch A and Security Patch B?",
        "options": [f"{pop_both - 4}", f"{pop_both - 2}", f"{pop_both}", f"{pop_both + 2}", f"{pop_both + 4}"],
        "answer": "C",
        "explanation": f"Installations with at least one patch $= {pop_tot} - {pop_none} = {pop_tot - pop_none}$. $|A \\cap B| = {pop_a} + {pop_b} - {pop_tot - pop_none} = {pop_both}$.",
        "trap": "Subtracting neither from both sets individually.",
        "estSeconds": 85
    })

    # Q13: Probability without Replacement
    tok_a = 5 + (t_idx % 3)
    tok_b = 4 + (t_idx % 2)
    tok_tot = tok_a + tok_b
    prob_same = math.comb(tok_a, 2) + math.comb(tok_b, 2)
    prob_tot = math.comb(tok_tot, 2)
    questions.append({
        "id": f"pt{t_str}_q13", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"A sample batch of {tok_tot} sensors contains {tok_a} optical sensors and {tok_b} infrared sensors. If two sensors are selected simultaneously at random without replacement, what is the probability that both selected sensors are of the SAME type?",
        "options": [f"\\frac{{{prob_same - 2}}}{{{prob_tot}}}", f"\\frac{{{prob_same - 1}}}{{{prob_tot}}}", f"\\frac{{{prob_same}}}{{{prob_tot}}}", f"\\frac{{{prob_same + 1}}}{{{prob_tot}}}", f"\\frac{{{prob_same + 2}}}{{{prob_tot}}}"],
        "answer": "C",
        "explanation": f"Favorable combinations $= \\binom{{{tok_a}}}{{2}} + \\binom{{{tok_b}}}{{2}} = {math.comb(tok_a, 2)} + {math.comb(tok_b, 2)} = {prob_same}$. Total combinations $= \\binom{{{tok_tot}}}{{2}} = {prob_tot}$. Probability $= {prob_same}/{prob_tot}$.",
        "trap": "Calculating assuming independent draws with replacement.",
        "estSeconds": 95
    })

    # Q14: Quadratic Vieta
    sum_roots = 14 + t_idx * 2
    diff_roots = 4
    r_one = (sum_roots - diff_roots) // 2
    r_two = (sum_roots + diff_roots) // 2
    p_roots = r_one * r_two
    questions.append({
        "id": f"pt{t_str}_q14", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Quadratics", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"If the roots of the quadratic equation $x^2 - {sum_roots}x + K = 0$ are positive integers that differ by {diff_roots}, what is the numerical value of $K$?",
        "options": [f"{p_roots - 6}", f"{p_roots - 3}", f"{p_roots}", f"{p_roots + 3}", f"{p_roots + 6}"],
        "answer": "C",
        "explanation": f"Roots $r_1$ and $r_2$ satisfy $r_1 + r_2 = {sum_roots}$ and $r_2 - r_1 = {diff_roots}$, giving roots {r_one} and {r_two}. By Vieta's formulas, $K = r_1 r_2 = {r_one} \\times {r_two} = {p_roots}$.",
        "trap": "Summing the roots instead of multiplying for the constant term.",
        "estSeconds": 85
    })

    # Q15: Modular Arithmetic
    p_exp_val = 30 + t_idx * 4 + 1
    # 7^p_exp_val mod 10 -> cycle 7, 9, 3, 1
    u_digit = [1, 7, 9, 3][p_exp_val % 4]
    questions.append({
        "id": f"pt{t_str}_q15", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"What is the units digit of $7^{{{p_exp_val}}} + 4$?",
        "options": [f"{(u_digit + 4 - 2) % 10}", f"{(u_digit + 4 - 1) % 10}", f"{(u_digit + 4) % 10}", f"{(u_digit + 4 + 1) % 10}", f"{(u_digit + 4 + 2) % 10}"],
        "answer": "C",
        "explanation": f"Powers of 7 cycle in units digits: 7, 9, 3, 1. Exponent ${p_exp_val} \\equiv {p_exp_val % 4} \\pmod 4$, so $7^{{{p_exp_val}}}$ ends in {u_digit}. Adding 4 gives $({u_digit} + 4) \\pmod 10 = {(u_digit + 4) % 10}$.",
        "trap": "Failing to reduce the exponent modulo 4.",
        "estSeconds": 80
    })

    # Q16: Coordinate Geometry
    p_x = 5 + t_idx
    p_y = 7 + t_idx
    questions.append({
        "id": f"pt{t_str}_q16", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Coordinate & Analytical Geometry", "difficulty": "medium", "difficultyScore": 6,
        "stem": f"In a geometric coordinate plane, Line 1 connects the intercepts $(0, {p_y})$ and $({p_x}, 0)$. If Line 2 is perpendicular to Line 1 and passes through the origin $(0, 0)$, what is the slope of Line 2?",
        "options": [f"\\frac{{{p_x}}}{{{p_y}}}", f"-\\frac{{{p_x}}}{{{p_y}}}", f"\\frac{{{p_y}}}{{{p_x}}}", f"-\\frac{{{p_y}}}{{{p_x}}}", "1"],
        "answer": "A",
        "explanation": f"Slope of Line 1 is $-\\frac{{{p_y}}}{{{p_x}}}$. The perpendicular negative reciprocal slope is $\\frac{{{p_x}}}{{{p_y}}}$.",
        "trap": "Inverting without applying the negative sign.",
        "estSeconds": 75
    })

    # Q17: Standard Deviation Scaling
    orig_sd = 5.0 + (t_idx % 3) * 0.5
    new_sd = round(orig_sd * 1.4, 2)
    questions.append({
        "id": f"pt{t_str}_q17", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"In {d_name.lower()}, a sensor calibration batch had a standard deviation of {orig_sd:.1f} units. If each measurement is multiplied by 1.40 and then reduced by 3.2 units, what is the new standard deviation?",
        "options": [f"{new_sd - 3.2:.2f}", f"{new_sd:.2f}", f"{orig_sd:.2f}", f"{new_sd + 3.2:.2f}", f"{orig_sd * 1.8:.2f}"],
        "answer": "B",
        "explanation": f"Addition or subtraction of a constant does not alter standard deviation; multiplying by 1.40 scales standard deviation by 1.40: $1.40 \\times {orig_sd:.1f} = {new_sd:.2f}$.",
        "trap": "Subtracting 3.2 from the standard deviation.",
        "estSeconds": 70
    })

    # Q18: Frobenius Coin Formula
    f_p = 5
    f_q = 9 + (t_idx % 2)
    f_res = f_p * f_q - f_p - f_q
    questions.append({
        "id": f"pt{t_str}_q18", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"Components in {d_name.lower()} can only be bundled in shipping crates holding exactly {f_p} units or {f_q} units. What is the greatest integer number of units that CANNOT be shipped using any combination of these crates?",
        "options": [f"{f_res - 2}", f"{f_res - 1}", f"{f_res}", f"{f_res + 1}", f"{f_res + 2}"],
        "answer": "C",
        "explanation": f"Frobenius formula for coprime integers $a$ and $b$: $ab - a - b = ({f_p})({f_q}) - {f_p} - {f_q} = {f_res}$.",
        "trap": "Computing ab directly without subtracting (a + b).",
        "estSeconds": 105
    })

    # Q19: Reversible Integers
    k_diff = 4
    questions.append({
        "id": f"pt{t_str}_q19", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"When the digits of a two-digit integer $M = 10A + B$ are reversed to form $10B + A$, the resulting value exceeds $M$ by {9 * k_diff}. What is the numerical value of $B - A$?",
        "options": [f"{k_diff - 2}", f"{k_diff - 1}", f"{k_diff}", f"{k_diff + 1}", f"{k_diff + 2}"],
        "answer": "C",
        "explanation": f"$(10B + A) - (10A + B) = 9(B - A) = {9 * k_diff} \\implies B - A = {k_diff}$.",
        "trap": "Reversing the subtraction to A - B.",
        "estSeconds": 75
    })

    # Q20: Compound Interest
    cap_p = 8000 + t_idx * 1000
    int_two = round(cap_p * (1.04**2 - 1))
    questions.append({
        "id": f"pt{t_str}_q20", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"A reserve capital deposit of $\\${cap_p:,}$ in {d_name.lower()} earns 8% nominal annual interest compounded semi-annually. What is the total interest accumulated after 1 year?",
        "options": [f"\\${round(cap_p * 0.08):,}", f"\\${int_two:,}", f"\\${int_two + 45:,}", f"\\${round(cap_p * 0.085):,}", f"\\${int_two - 30:,}"],
        "answer": "B",
        "explanation": f"Semi-annual rate is 4% across 2 periods. Multiplier is $(1.04)^2 = 1.0816$. Interest $= {cap_p} \\times 0.0816 = \\${int_two:,}$.",
        "trap": "Calculating simple interest without compounding (option A).",
        "estSeconds": 85
    })

    # Q21: Custom Operation
    op_c = 4 + (t_idx % 3)
    questions.append({
        "id": f"pt{t_str}_q21", "test": t_num, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"For all positive numbers $a$ and $b$, the binary operation $\\boxplus$ is defined by $a \\boxplus b = \\frac{{ab}}{{a + b + {op_c}}}$. What is the value of ${op_c} \\boxplus ${op_c}?",
        "options": [f"\\frac{{{op_c}}}{{2}}", f"\\frac{{{op_c}}}{{3}}", f"\\frac{{{op_c}}}{{4}}", f"{op_c}", "1"],
        "answer": "B",
        "explanation": f"${op_c} \\boxplus ${op_c} = \\frac{{{op_c} \\times {op_c}}}{{{op_c} + {op_c} + {op_c}}} = \\frac{{{op_c}^2}}{{3({op_c})}} = \\frac{{{op_c}}}{{3}}$.",
        "trap": "Adding the constants in the denominator incorrectly.",
        "estSeconds": 80
    })

    # ==========================================
    # VERBAL (23 unique questions)
    # ==========================================
    # 11 RC Questions on the passage
    rc_title, rc_text = RC_THEMES[t_idx]
    
    # 11 distinct question stems referencing specific passage terms
    rc_stems = [
        f"The primary purpose of the passage discussing {rc_title.lower()} is to:",
        f"It can be inferred from the text that traditional researchers in {rc_title.lower()} failed to anticipate:",
        f"According to the second paragraph, the breakthrough discovery in {rc_title.lower()} is significant because it:",
        f"The author’s attitude toward earlier theoretical assumptions in {rc_title.lower()} can best be described as:",
        f"Which of the following research observations cited in the passage provides the strongest evidence for the revised model of {rc_title.lower()}?",
        f"The passage suggests that the mechanism operating in {rc_title.lower()} differs from classical expectations primarily in that:",
        f"With which of the following general conclusions regarding scientific modeling in {rc_title.lower()} would the author most likely agree?",
        f"In the context of the second paragraph, the term 'plasticity' or 'turnover' functions primarily to emphasize:",
        f"The author mentions competing hypotheses or critical objections in {rc_title.lower()} primarily in order to:",
        f"If confirmed in future field studies, which of the following would be most consistent with the findings reported in {rc_title.lower()}?",
        f"The organization of the passage as a whole can best be described as:"
    ]

    for q_i in range(11):
        q_pos = q_i + 1
        questions.append({
            "id": f"pt{t_str}_v{q_pos:02d}", "test": t_num, "section": "VERBAL", "type": "READING_COMPREHENSION",
            "subtopic": "Reading Comprehension", "difficulty": "hard" if q_i % 2 == 1 else "medium",
            "difficultyScore": 7 + (q_i % 3),
            "passage": rc_text,
            "stem": rc_stems[q_i],
            "options": [
                f"Demonstrate how dynamic empirical evidence revealed non-linear mechanisms in {rc_title.lower()} that challenged static models.",
                f"Disprove all foundational principles established in {rc_title.lower()} prior to modern laboratory instruments.",
                f"Argue that physiological mechanisms in {rc_title.lower()} operate uniformly across all unrelated organisms.",
                f"Propose that field studies should be halted until computational simulations are standardized.",
                f"Assert that external environmental stressors have no measurable impact on biological structures."
            ],
            "answer": "A",
            "explanation": f"The author presents empirical discoveries in {rc_title.lower()} that complicate static classical frameworks and demonstrate adaptive, non-linear mechanisms.",
            "trap": "Choosing an extreme option claiming complete refutation of all historical science.",
            "estSeconds": 100
        })

    # 12 Critical Reasoning Questions (Q12 - Q23)
    cr_sector, cr_policy, cr_goal, cr_trap = CR_DOMAINS_TOPICS[t_idx]
    
    questions.append({
        "id": f"pt{t_str}_v12", "test": t_num, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Director of {cr_sector}: \"Adopting {cr_policy} will achieve our target of {cr_goal} within twelve months. Therefore, the governing board should immediately approve the requested capital allocation.\"\n\nWhich of the following is an assumption on which the director's argument depends?",
        "options": [
            f"The policy will not inadvertently trigger {cr_trap} that cancels out the expected gains.",
            "The capital allocation is strictly lower than any previous annual capital expenditure.",
            "No competitor has considered implementing similar operational changes.",
            "The personnel enforcing the policy possess postgraduate academic credentials.",
            "Public opinion surveys show unanimous support for the initiative."
        ],
        "answer": "A",
        "explanation": f"Negation test: If the policy DOES trigger {cr_trap} that cancels out gains, the goal of {cr_goal} will fail, collapsing the argument.",
        "trap": "Focusing on administrative trivia (credentials or budget comparisons).",
        "estSeconds": 115
    })

    questions.append({
        "id": f"pt{t_str}_v13", "test": t_num, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Consultant for {cr_sector}: \"A pilot implementation of {cr_policy} in test facility Alpha produced a 20% gain in {cr_goal}. This proves that {cr_policy} was the direct cause of the performance gain.\"\n\nWhich of the following, if true, most seriously weakens the consultant's claim?",
        "options": [
            "Test facility Alpha simultaneously experienced a major external demographic shift that naturally produces high baseline performance.",
            "The software compiling test results was updated three weeks prior to the pilot.",
            "Several junior employees reported working five overtime hours during the pilot.",
            "The cost of the pilot was subsidized by a research grant rather than operating revenue.",
            "Competing firms have not yet published their quarterly statistics."
        ],
        "answer": "A",
        "explanation": "Introducing an external confounding variable directly attacks the causal link asserted by the consultant.",
        "trap": "Pointing out grant funding, which affects finance but not causal data validity.",
        "estSeconds": 110
    })

    questions.append({
        "id": f"pt{t_str}_v14", "test": t_num, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"Strategic Planner: \"Investing in {cr_policy} is the most effective strategy for our organization to accelerate {cr_goal}.\"\n\nWhich of the following, if true, most strongly supports the strategic planner's assertion?",
        "options": [
            f"In extensive blind controlled trials across diverse industry segments, organizations adopting {cr_policy} consistently outperformed control groups on {cr_goal}.",
            "The strategic planner recently completed an executive leadership certification.",
            "The vendor supplying equipment for the policy offers a 30-day return policy.",
            "Several trade journals recently featured editorial articles discussing regulatory trends.",
            "The policy requires no alterations to the firm's corporate legal structure."
        ],
        "answer": "A",
        "explanation": "Independent controlled trials showing consistent outperformance across diverse segments provide strong causal support.",
        "trap": "Relying on the planner's credentials rather than empirical evidence.",
        "estSeconds": 100
    })

    questions.append({
        "id": f"pt{t_str}_v15", "test": t_num, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"Analyst: **Regulatory authorities have proposed mandatory implementation of {cr_policy} across the {cr_sector} industry.** Industry lobbyists argue that this mandate will stifle innovation and increase consumer prices. **However, empirical longitudinal data from early adopter firms demonstrates that compliance costs decrease by 70% within the second operating cycle.** Thus, the claim that the policy will permanently harm market efficiency is unsubstantiated.\n\nIn the analyst's argument, the two portions in boldface play which of the following roles?",
        "options": [
            "The first describes an impending regulatory proposal; the second introduces evidence that undermines an objection to that proposal.",
            "The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.",
            "The first is an assumption underlying the industry objection; the second is the analyst’s primary thesis.",
            "The first provides empirical evidence; the second states an intermediate conclusion rejected by the author.",
            "The first introduces a claim the author accepts; the second defends a counter-argument."
        ],
        "answer": "A",
        "explanation": "Boldface 1 describes the regulatory proposal being debated. Boldface 2 presents empirical cost reduction data that counters the lobbyists' objection.",
        "trap": "Confusing Boldface 1 with the author's personal conclusion.",
        "estSeconds": 125
    })

    questions.append({
        "id": f"pt{t_str}_v16", "test": t_num, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Auditor: \"An initiative in {cr_sector} encouraging {cr_policy} claims to generate a positive net return on invested capital. To evaluate whether this claim is true, which of the following would be most useful to determine?\"",
        "options": [
            f"Whether the monetary savings realized from {cr_goal} exceed the ongoing compliance and operational costs associated with {cr_policy}.",
            "Whether participating organizations display corporate logos on public transit shelters.",
            "How many years the auditor has worked in the regional auditing bureau.",
            "Whether similar policies were debated by legislative committees during the prior decade.",
            "Whether employee satisfaction surveys are conducted semi-annually or annually."
        ],
        "answer": "A",
        "explanation": "Determining whether monetary savings exceed operational costs directly resolves whether the net return is positive.",
        "trap": "Choosing historical trivia or auditor tenure.",
        "estSeconds": 110
    })

    questions.append({
        "id": f"pt{t_str}_v17", "test": t_num, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"Economic Paradox in {cr_sector}: During Year {t_num}, regional authorities spent $\\$50$ million subsidizing {cr_policy} to achieve {cr_goal}. However, official metrics indicated that overall performance on {cr_goal} remained virtually flat.\n\nWhich of the following, if true, best explains this apparent contradiction?",
        "options": [
            f"Rapid organic expansion in market volume created heavy downward pressure that would have severely degraded performance in the absence of the subsidies.",
            "The currency in which subsidies were disbursed remained stable on international currency exchange markets.",
            "Several administrative assistants retired during the middle of the fiscal quarter.",
            "The auditing agency used computerized spreadsheets rather than handwritten paper ledgers.",
            "The subsidies were announced during a nationally televised press conference."
        ],
        "answer": "A",
        "explanation": "A powerful counteracting upward pressure explains why the policy kept metrics stable against a worsening baseline.",
        "trap": "Focusing on accounting format or administrative retirements.",
        "estSeconds": 105
    })

    questions.append({
        "id": f"pt{t_str}_v18", "test": t_num, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Spokesperson: \"Every company in {cr_sector} that failed to adopt {cr_policy} underperformed the benchmark index last quarter. Therefore, any company that promptly adopts {cr_policy} is guaranteed to outperform the benchmark index.\"\n\nThe spokesperson’s reasoning is most vulnerable to criticism because it:",
        "options": [
            "Mistakes a necessary condition for a sufficient condition.",
            "Attacks the personal moral character of corporate executives.",
            "Relies on circular logic by defining performance as adoption of the policy.",
            "Fails to specify the exact percentage return of the market index.",
            "Assumes that corporate profitability is the sole measure of human happiness."
        ],
        "answer": "A",
        "explanation": "The premise shows adoption may be necessary to avoid failure, but does not prove it is sufficient to guarantee success.",
        "trap": "Selecting circular logic when the formal flaw is affirming the consequent.",
        "estSeconds": 115
    })

    questions.append({
        "id": f"pt{t_str}_v19", "test": t_num, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"In a compliance audit of {cr_sector}: All tier-1 facilities maintain active ISO-14001 certification. No facility that maintains active ISO-14001 certification operates uncalibrated thermal chambers. Some facilities that operate uncalibrated thermal chambers are located in District {t_num}.\n\nIf the statements above are true, which of the following MUST be true?",
        "options": [
            f"Some facilities in District {t_num} are NOT tier-1 facilities.",
            f"All facilities in District {t_num} maintain ISO-14001 certification.",
            f"No tier-1 facility is located in District {t_num}.",
            "Every facility that lacks ISO-14001 certification operates uncalibrated thermal chambers.",
            f"District {t_num} has the highest industrial energy consumption in the nation."
        ],
        "answer": "A",
        "explanation": "Facilities in District X with uncalibrated chambers cannot have ISO-14001 certification, and therefore cannot be tier-1 facilities.",
        "trap": "Concluding that NO tier-1 facilities exist in District X (overstepping the premises).",
        "estSeconds": 110
    })

    questions.append({
        "id": f"pt{t_str}_v20", "test": t_num, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Ecologist studying {rc_title.lower()}: \"A reserve reported a 30% surge in breeding density following the eradication of invasive predators. The reserve manager concluded that predator removal was the primary factor driving the breeding expansion.\"\n\nWhich of the following, if true, most seriously undermines the reserve manager's conclusion?",
        "options": [
            "Concurrently with the predator removal, the reserve experienced a massive cyclical emergence of nutrient-rich prey that provided unprecedented food abundance.",
            "Target species construct nests in deciduous trees as well as evergreen shrubs.",
            "Invasive predators were introduced to the continent by European settlers in the eighteenth century.",
            "Volunteers conducted population counts using standard 10x binoculars.",
            "Several nearby urban parks also have small populations of the same species."
        ],
        "answer": "A",
        "explanation": "A simultaneous boom in food abundance provides an overwhelming alternative causal explanation.",
        "trap": "Noting predator historical origins, which is irrelevant to current breeding dynamics.",
        "estSeconds": 115
    })

    questions.append({
        "id": f"pt{t_str}_v21", "test": t_num, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"Operations Manager: \"Transitioning diagnostic documentation to an automated speech-to-text platform in Unit {t_num} decreased omitted clinical notes by 40%.\"\n\nWhich of the following, if true, most strongly reinforces the manager's recommendation to deploy the platform enterprise-wide?",
        "options": [
            f"The workflow complexity and case mix in Unit {t_num} are representative of operating departments across the entire enterprise.",
            "The platform software runs on standard desktop workstations running Windows 11.",
            f"Technicians in Unit {t_num} completed an online feedback survey regarding user satisfaction.",
            "The enterprise liability insurance premium is reviewed annually in November.",
            "Clerical personnel previously belonged to a regional labor union."
        ],
        "answer": "A",
        "explanation": "Confirming the test unit is representative proves the 40% error reduction will likely replicate enterprise-wide.",
        "trap": "Citing IT workstation compatibility (convenient, but does not prove operational effectiveness).",
        "estSeconds": 100
    })

    questions.append({
        "id": f"pt{t_str}_v22", "test": t_num, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"Urban Planner: \"To eliminate downtown vehicular congestion in Zone {t_num}, municipal authorities should institute a $\\$15$ peak-hour cordon fee on private cars. Because average subway travel times are 10 minutes faster than driving, drivers will rationally switch to public transit.\"\n\nWhich of the following is an assumption required by the planner's proposal?",
        "options": [
            "The public subway system possesses sufficient train capacity to accommodate the surge of diverted commuters without causing severe overcrowding that deters ridership.",
            "All private automobile drivers earn incomes above the national median household threshold.",
            "City parking meters generate less revenue than public transit fareboxes.",
            "Bicycle sharing programs will experience a corresponding increase in ridership.",
            "Municipal road paving projects are financed through state gasoline excise taxes."
        ],
        "answer": "A",
        "explanation": "Negation test: If the subway lacks capacity and overcrowding becomes intolerable, drivers will not switch to transit, defeating the proposal.",
        "trap": "Assuming all drivers have high incomes (not logically required).",
        "estSeconds": 120
    })

    questions.append({
        "id": f"pt{t_str}_v23", "test": t_num, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"Historian of {cr_sector}: **Conventional historiography asserts that the industrial transformation of Region {t_num} was triggered exclusively by coal deposit proximity.** Recent economic archival ledgers, however, reveal that water-powered mills maintained a 25% cost advantage over steam engines for three decades after coal adoption began. **This cost advantage persisted until labor unionization forced mill owners to seek urban factory sites near deep-water ports.** Therefore, steam adoption was driven by labor dynamics, not fuel energy efficiency alone.\n\nIn the historian's argument, the two boldface portions play which of the following roles?",
        "options": [
            "The first is an established claim that the argument aims to refute; the second is an observation that supports the author’s alternative conclusion.",
            "The first is the main conclusion of the argument; the second is a premise offered to defend that conclusion.",
            "The first provides empirical evidence; the second states an intermediate hypothesis rejected by the author.",
            "The first is a prediction; the second is an observation that disproves that prediction.",
            "The first introduces a hypothesis; the second proves that coal adoption never occurred."
        ],
        "answer": "A",
        "explanation": "Boldface 1 presents the conventional orthodoxy the author seeks to undermine. Boldface 2 describes the persistent water-power cost advantage supporting the alternative thesis.",
        "trap": "Selecting option B which confuses the conventional view with the author's conclusion.",
        "estSeconds": 120
    })

    # ==========================================
    # DATA INSIGHTS (20 unique questions)
    # ==========================================
    # Q01: DS - Divisibility
    div_p = 6 + (t_idx % 4) * 2
    questions.append({
        "id": f"pt{t_str}_di01", "test": t_num, "section": "DATA_INSIGHTS", "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"In a telemetry buffer for {d_name.lower()}, if positive integer $m$ represents packet length, is $m$ divisible by {div_p}?\n\n(1) $m$ is divisible by {div_p // 2} and $m$ is even.\n(2) $m^2$ is divisible by {div_p**2}.",
        "options": STANDARD_DS_OPTIONS, "answer": "D",
        "explanation": f"Statement (1): Divisible by {div_p // 2} and even (divisible by 2) implies divisibility by $\\text{{LCM}}(2, {div_p // 2}) = {div_p}$. Sufficient.\nStatement (2): If $m^2$ is divisible by {div_p**2}, then for positive integer $m$, $m$ is divisible by {div_p}. Sufficient.\nEACH statement ALONE is sufficient.",
        "trap": "Thinking statement (2) allows non-integer roots when $m$ is explicitly an integer.",
        "estSeconds": 95
    })

    # Q02: DS - Signs & Inequalities
    questions.append({
        "id": f"pt{t_str}_di02", "test": t_num, "section": "DATA_INSIGHTS", "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"If $a$ and $b$ are non-zero real parameters in {d_name.lower()}, is $\\frac{{a}}{{b}} > 1$?\n\n(1) $a > b$\n(2) $a b > 0$",
        "options": STANDARD_DS_OPTIONS, "answer": "E",
        "explanation": "Statement (1): If $a=2, b=1$, $a/b=2 > 1$. If $a=-1, b=-2$, $a>b$ holds but $a/b=0.5 < 1$. Insufficient.\nStatement (2): Tells us $a$ and $b$ share the same sign, but gives no relative magnitude. Insufficient.\nTogether: If $a=2, b=1$, $a/b > 1$. If $a=-1, b=-2$, $a>b$ and $ab>0$ hold, but $a/b < 1$. Two contradictory answers remain possible. Statements (1) and (2) TOGETHER are NOT sufficient (Answer E).",
        "trap": "Assuming both numbers must be positive without testing negative cases.",
        "estSeconds": 110
    })

    # Q03: DS - Rate
    target_vol = 3000 + t_idx * 500
    questions.append({
        "id": f"pt{t_str}_di03", "test": t_num, "section": "DATA_INSIGHTS", "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"Working at constant rates, how many hours does it take for Component X and Component Y in {d_name.lower()} to complete {target_vol} automated transactions?\n\n(1) Component X completes {round(target_vol * 0.4)} transactions in 2 hours.\n(2) Operating simultaneously, Component X and Component Y complete {round(target_vol * 0.5)} transactions in 2.5 hours.",
        "options": STANDARD_DS_OPTIONS, "answer": "B",
        "explanation": "Statement (1) provides only Component X's rate. Insufficient.\nStatement (2) provides the combined throughput rate directly: Rate $= \\text{Transactions} / \\text{Time}$. With the combined rate known, the time to complete the target volume is uniquely determined. Sufficient.",
        "trap": "Believing individual rates for both components are required.",
        "estSeconds": 90
    })

    # Q04: DS - Mean vs Median
    questions.append({
        "id": f"pt{t_str}_di04", "test": t_num, "section": "DATA_INSIGHTS", "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"In a sample $S$ of 5 distinct integers recorded during {d_name.lower()} telemetry, is the mean of $S$ greater than the median of $S$?\n\n(1) The 3 smallest integers are 1, 3, and 6.\n(2) The largest integer in $S$ is {35 + t_idx * 5}.",
        "options": STANDARD_DS_OPTIONS, "answer": "C",
        "explanation": "Statement (1): Median is 6. Upper values could be 7, 8 (mean = 5 < 6) or 7, 50 (mean > 6). Insufficient.\nStatement (2): Gives no information about median or lower values. Insufficient.\nTogether: Elements are $1, 3, 6, d, {35 + t_idx * 5}$ where $6 < d < {35 + t_idx * 5}$. Minimum sum is $1 + 3 + 6 + 7 + {35 + t_idx * 5} = {52 + t_idx * 5}$. Minimum mean is $({52 + t_idx * 5})/5 > 10 > 6$. Always greater. Sufficient.",
        "trap": "Neglecting to calculate the minimum possible mean under the constraint $d \\ge 7$.",
        "estSeconds": 115
    })

    # Q05: DS - Profit Margin
    rev_k = 150000 + t_idx * 15000
    questions.append({
        "id": f"pt{t_str}_di05", "test": t_num, "section": "DATA_INSIGHTS", "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency", "difficulty": "medium", "difficultyScore": 6,
        "stem": f"Did System {t_num} generate an operating profit of at least $\\$40,000$ on total contract revenue of $\\${rev_k:,}$?\n\n(1) Total operating expenses were less than 65% of contract revenue.\n(2) Operating profit was greater than 20% of contract revenue.",
        "options": STANDARD_DS_OPTIONS, "answer": "A",
        "explanation": f"Statement (1): If expenses < 65% of revenue, profit > 35% of revenue. 35% of $\\${rev_k:,}$ is $\\${round(rev_k * 0.35):,}$, which strictly exceeds $\\$40,000$. Sufficient.\nStatement (2): 20% of $\\${rev_k:,}$ is $\\${round(rev_k * 0.20):,}$. For smaller contracts, 20% might be $\\$30,000$ or $\\$36,000$, allowing profit to be below $\\$40,000$. Not guaranteed sufficient. Statement (1) ALONE is sufficient.",
        "trap": "Assuming statement (2) guarantees clearing $\\$40,000$ across all tests.",
        "estSeconds": 95
    })

    # Q06: DS - Absolute Value
    questions.append({
        "id": f"pt{t_str}_di06", "test": t_num, "section": "DATA_INSIGHTS", "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"If $p$ is an integer in {d_name.lower()}, is $|p| = p$?\n\n(1) $p^2 = p$\n(2) $p^3 \\ge p$",
        "options": STANDARD_DS_OPTIONS, "answer": "A",
        "explanation": "$|p| = p$ holds if and only if $p \\ge 0$.\nStatement (1): $p(p - 1) = 0 \\implies p = 0$ or $p = 1$. Both $\\ge 0$. Sufficient.\nStatement (2): $p(p-1)(p+1) \\ge 0$. Integer solutions include $p = -1$ (where $|-1| = 1 \\ne -1$, so NO) and $p = 0, 1, 2$ (where YES). Insufficient.\nStatement (1) ALONE is sufficient.",
        "trap": "Overlooking $p = -1$ as an integer solution to $p^3 \\ge p$.",
        "estSeconds": 105
    })

    # Q07-Q10: Table Analysis
    t_rows = [
        [f"Node Alpha-{t_num}", 45 + t_idx * 3, 0.4, 99.8, 110],
        [f"Node Beta-{t_num}", 62 + t_idx * 4, 1.2, 98.4, 145],
        [f"Node Gamma-{t_num}", 38 + t_idx * 2, 0.2, 99.9, 85],
        [f"Node Delta-{t_num}", 75 + t_idx * 5, 2.1, 97.5, 180],
        [f"Node Epsilon-{t_num}", 54 + t_idx * 3, 0.8, 99.1, 125],
        [f"Node Zeta-{t_num}", 48 + t_idx * 3, 0.6, 99.4, 115]
    ]
    t_obj = {
        "title": f"Telemetry Matrix: 6 Network Nodes in {d_name}",
        "headers": ["Node Name", "Throughput (k/day)", "Error Rate (%)", "Uptime (%)", "Cost Index"],
        "rows": t_rows
    }

    questions.append({
        "id": f"pt{t_str}_di07", "test": t_num, "section": "DATA_INSIGHTS", "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"The table summarizes operational telemetry across 6 nodes in {d_name.lower()}.\n\nFor each of the following statements, select Yes if the statement is true based on the table; otherwise, select No.",
        "dataSource": t_obj,
        "options": [
            "Statement 1: The median throughput among nodes with an Error Rate strictly under 1.0% exceeds 45 k/day. (Yes/No)",
            "Statement 2: The node with the highest Cost Index also has the highest Error Rate. (Yes/No)",
            "Statement 3: All nodes with Uptime greater than 99.0% have a Cost Index below 150. (Yes/No)"
        ],
        "answer": "Yes | Yes | Yes",
        "explanation": "Statement 1: Nodes with error < 1.0% are Alpha, Gamma, Epsilon, Zeta. Median throughput is > 45 k/day -> Yes.\nStatement 2: Node Delta has Cost Index 180 (highest) and Error Rate 2.1% (highest) -> Yes.\nStatement 3: Nodes with Uptime > 99.0% all have Cost Index below 150 -> Yes.",
        "trap": "Sorting by the wrong column or taking mean instead of median.",
        "estSeconds": 120
    })

    questions.append({
        "id": f"pt{t_str}_di08", "test": t_num, "section": "DATA_INSIGHTS", "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"Evaluate node ranking properties from the telemetry table.",
        "dataSource": t_obj,
        "options": [
            "Statement 1: Sorting descending by Throughput produces an identical ordering as sorting descending by Cost Index. (Yes/No)",
            "Statement 2: Exactly three nodes have an Error Rate strictly below 0.7%. (Yes/No)",
            "Statement 3: Node Gamma has both the lowest Throughput and the lowest Error Rate. (Yes/No)"
        ],
        "answer": "No | Yes | Yes",
        "explanation": "Statement 1: Zeta throughput is higher than Alpha but Cost Index ordering differs -> No.\nStatement 2: Nodes with error < 0.7% are Alpha (0.4), Gamma (0.2), Zeta (0.6) -> exactly three -> Yes.\nStatement 3: Gamma has lowest throughput and lowest error -> Yes.",
        "trap": "Assuming throughput and cost index correlate with 1.0 rank correlation.",
        "estSeconds": 115
    })

    questions.append({
        "id": f"pt{t_str}_di09", "test": t_num, "section": "DATA_INSIGHTS", "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Analyze cost efficiency per unit throughput from the telemetry table.",
        "dataSource": t_obj,
        "options": [
            "Statement 1: Node Gamma has a Cost Index per throughput unit of less than 2.5. (Yes/No)",
            "Statement 2: The range of Error Rates across all 6 nodes is strictly greater than 1.8 percentage points. (Yes/No)",
            "Statement 3: Strictly more than half of the nodes have an Uptime exceeding 99.2%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Gamma ratio = 85 / (38+) < 2.5 -> Yes.\nStatement 2: Range = 2.1 - 0.2 = 1.9% > 1.8% -> Yes.\nStatement 3: Exactly 3 out of 6 nodes exceed 99.2% (exactly half, not strictly more than half) -> No.",
        "trap": "Confusing 'at least half' with 'strictly more than half'.",
        "estSeconds": 125
    })

    questions.append({
        "id": f"pt{t_str}_di10", "test": t_num, "section": "DATA_INSIGHTS", "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Evaluate reliability and risk profiles across telemetry nodes.",
        "dataSource": t_obj,
        "options": [
            "Statement 1: The node with the highest Throughput also has the lowest Uptime. (Yes/No)",
            "Statement 2: Total combined throughput of the two highest nodes exceeds 130 k/day. (Yes/No)",
            "Statement 3: Every node with a Cost Index greater than 120 has an Error Rate above 1.0%. (Yes/No)"
        ],
        "answer": "Yes | Yes | No",
        "explanation": "Statement 1: Delta has highest throughput and lowest uptime (97.5%) -> Yes.\nStatement 2: Top two nodes exceed 130 k/day -> Yes.\nStatement 3: Node Epsilon has Cost Index 125 but Error Rate 0.8% (< 1.0%) -> No.",
        "trap": "Overlooking Node Epsilon's low error rate despite high cost.",
        "estSeconds": 115
    })

    # Q11-Q14: Graphics Interpretation
    gi_points = [
        {"x": 10, "y": 20 + t_idx * 2},
        {"x": 20, "y": 35 + t_idx * 2},
        {"x": 30, "y": 48 + t_idx * 2},
        {"x": 40, "y": 58 + t_idx * 2},
        {"x": 50, "y": 65 + t_idx * 2},
        {"x": 60, "y": 70 + t_idx * 2}
    ]
    gi_chart = {
        "title": f"Production Curve: Resource Inputs vs Output Index in {d_name}",
        "type": "scatter_trend",
        "points": gi_points
    }

    questions.append({
        "id": f"pt{t_str}_di11", "test": t_num, "section": "DATA_INSIGHTS", "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"The scatter plot displays Resource Inputs ($k, X-axis) versus Output Index (Y-axis) in {d_name.lower()}.\n\nSelect the options from the dropdown menus that best complete each statement.",
        "dataSource": gi_chart,
        "options": [
            "Dropdown 1: The overall relationship between Resource Inputs and Output Index is [strongly positive | strongly negative | sinusoidal | uncorrelated].",
            "Dropdown 2: As Resource Inputs increase beyond $40k, the rate of increase in Output Index displays [diminishing marginal returns | increasing exponential growth | negative acceleration | zero slope]."
        ],
        "answer": "strongly positive | diminishing marginal returns",
        "explanation": "Dropdown 1: As inputs rise, output rises consistently -> strongly positive.\nDropdown 2: Beyond $40k, the slope flattens -> diminishing marginal returns.",
        "trap": "Confusing diminishing marginal growth with an absolute decline.",
        "estSeconds": 105
    })

    questions.append({
        "id": f"pt{t_str}_di12", "test": t_num, "section": "DATA_INSIGHTS", "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"Complete the rate of change evaluation from the production curve.",
        "dataSource": gi_chart,
        "options": [
            "Dropdown 1: The average marginal gain in output per thousand dollars invested between $10k and $30k is approximately [1.4 points/$k | 2.5 points/$k | 3.5 points/$k | 0.5 points/$k].",
            "Dropdown 2: The point with the highest output-to-investment ratio is at an investment of [$10k | $30k | $50k | $60k]."
        ],
        "answer": "1.4 points/$k | $10k",
        "explanation": "Dropdown 1: Slope = (48 - 20)/(30 - 10) = 28/20 = 1.4 points/$k.\nDropdown 2: Ratio y/x is highest at the earliest point x=10 ($10k).",
        "trap": "Assuming the highest absolute output point has the highest efficiency ratio.",
        "estSeconds": 115
    })

    questions.append({
        "id": f"pt{t_str}_di13", "test": t_num, "section": "DATA_INSIGHTS", "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Evaluate statistical distribution properties of the production curve.",
        "dataSource": gi_chart,
        "options": [
            "Dropdown 1: The median investment level across the 6 observed data points is [$35k | $40k | $45k | $50k].",
            "Dropdown 2: A facility investing $45k would be projected by linear interpolation to produce an output index of approximately [61.5 | 68.0 | 72.5 | 55.0]."
        ],
        "answer": "$35k | 61.5",
        "explanation": "Dropdown 1: Median of 10, 20, 30, 40, 50, 60 is (30 + 40)/2 = $35k.\nDropdown 2: Midpoint between x=40 (~58) and x=50 (~65) is 61.5.",
        "trap": "Extrapolating using the steep slope from the early segment.",
        "estSeconds": 110
    })

    questions.append({
        "id": f"pt{t_str}_di14", "test": t_num, "section": "DATA_INSIGHTS", "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Assess long-term resource investment implications from the production chart.",
        "dataSource": gi_chart,
        "options": [
            "Dropdown 1: Increasing investment from $50k to $60k yields a percentage increase in output of approximately [7% | 15% | 25% | 35%].",
            "Dropdown 2: If fixed costs require an output index of at least 50 to break even, the minimum necessary investment is approximately [$32k | $22k | $42k | $15k]."
        ],
        "answer": "7% | $32k",
        "explanation": "Dropdown 1: Output moves from ~67 to ~72 -> 5/67 ~ 7.4%.\nDropdown 2: Output 50 is reached just past $30k (approx $32k).",
        "trap": "Calculating percentage increase based on investment (20%) instead of output (7%).",
        "estSeconds": 115
    })

    # Q15-Q17: Two-Part Analysis
    tpa_a = 40 + t_idx * 2
    tpa_b = 20 + t_idx
    questions.append({
        "id": f"pt{t_str}_di15", "test": t_num, "section": "DATA_INSIGHTS", "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"In {d_name.lower()}, a process engineer needs to blend Grade A stock (20% active material) and Grade B stock (50% active material) to produce exactly {tpa_a + tpa_b} liters of a mixture with 30% active material concentration.\n\nSelect the quantity of Grade A stock and Grade B stock required.",
        "options": [f"Grade A: {tpa_a} liters", f"Grade B: {tpa_b} liters"],
        "answer": f"Grade A = {tpa_a} | Grade B = {tpa_b}",
        "explanation": f"Alligation: Ratio of Grade A to Grade B is $|50 - 30| : |30 - 20| = 2 : 1$. Grade A $= 2/3 \\times {tpa_a + tpa_b} = {tpa_a}$ liters, Grade B $= 1/3 \\times {tpa_a + tpa_b} = {tpa_b}$ liters.",
        "trap": "Reversing the 2:1 ratio between Grade A and Grade B.",
        "estSeconds": 125
    })

    u_ans = t_idx + 8
    v_ans = t_idx + 4
    questions.append({
        "id": f"pt{t_str}_di16", "test": t_num, "section": "DATA_INSIGHTS", "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"Two parameters $U$ and $V$ in {d_name.lower()} satisfy the linear system: $2U + 3V = {2 * u_ans + 3 * v_ans}$ and $U - V = 4$.\n\nSelect the value of $U$ and the value of $V$ that satisfy both equations.",
        "options": [f"U: {u_ans}", f"V: {v_ans}"],
        "answer": f"U = {u_ans} | V = {v_ans}",
        "explanation": f"Substitute $U = V + 4$: $2(V + 4) + 3V = 5V + 8 = {2*u_ans + 3*v_ans} \\implies 5V = {5*v_ans} \\implies V = {v_ans}$. Then $U = {v_ans} + 4 = {u_ans}$.",
        "trap": "Sign error when expanding 2(V + 4).",
        "estSeconds": 105
    })

    questions.append({
        "id": f"pt{t_str}_di17", "test": t_num, "section": "DATA_INSIGHTS", "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"A capital fund in {d_name.lower()} allocates $\\$1,000,000$ between Primary Asset (yielding 8%) and Secondary Asset (yielding 3%) to achieve a blended yield of exactly 5%.\n\nSelect the allocation for Primary Asset and Secondary Asset in the corresponding columns.",
        "options": ["Primary Asset: \\$400,000", "Secondary Asset: \\$600,000"],
        "answer": "Primary Asset = $400,000 | Secondary Asset = $600,000",
        "explanation": "Ratio of Primary to Secondary is $|3 - 5| : |8 - 5| = 2 : 3$. Primary fraction is $2/5 = 40\\% = \\$400,000$, Secondary fraction is $3/5 = 60\\% = \\$600,000$.",
        "trap": "Inverting the 2:3 ratio to 3:2.",
        "estSeconds": 120
    })

    # Q18-Q20: Multi-Source Reasoning
    msr_doc = {
        "tabs": [
            {
                "tabId": "tab1",
                "title": f"Operational Directive: {d_name}",
                "content": f"Directive {t_num}.4 for {d_name}:\nAll facilities must maintain an audit compliance score of at least 85 points. Facilities scoring at least 90 points receive expedited licensing status. Facilities scoring below 85 points are placed under mandatory operational review unless they have operated for more than 5 consecutive years with zero recorded safety violations."
            },
            {
                "tabId": "tab2",
                "title": "Regional Audit Records",
                "content": f"Audit Summary for Region {t_num}:\n- Facility North: Score 92; 3 years operating history; 0 safety violations.\n- Facility South: Score 84; 7 years operating history; 0 safety violations.\n- Facility East: Score 79; 2 years operating history; 1 safety violation.\n- Facility West: Score 88; 6 years operating history; 0 safety violations."
            },
            {
                "tabId": "tab3",
                "title": "Legal Appeals Protocol",
                "content": "Protocol 9.2:\nFacilities placed under mandatory operational review may file an emergency stay within 14 business days. No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay."
            }
        ]
    }

    questions.append({
        "id": f"pt{t_str}_di18", "test": t_num, "section": "DATA_INSIGHTS", "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"Based on the dossier for {d_name.lower()}, which facility qualifies for expedited licensing status?",
        "dataSource": msr_doc,
        "options": ["Facility North only", "Facility North and Facility West only", "Facility South and Facility West only", "Facility North, Facility South, and Facility West", "None of the facilities"],
        "answer": "A",
        "explanation": "Tab 1 specifies that a score of at least 90 is required for expedited licensing. Tab 2 shows only Facility North scored >= 90 (score 92). Facility North only qualifies.",
        "trap": "Assuming Facility West qualifies because of its 6-year history.",
        "estSeconds": 120
    })

    questions.append({
        "id": f"pt{t_str}_di19", "test": t_num, "section": "DATA_INSIGHTS", "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Which facility is subject to a mandatory operational review according to the directive and audit records?",
        "dataSource": msr_doc,
        "options": ["Facility East only", "Facility South and Facility East only", "Facility South only", "Facility North and Facility East only", "All four facilities"],
        "answer": "A",
        "explanation": "Facilities scoring below 85 are Facility South (84) and Facility East (79). However, Tab 1 exempts facilities operating >5 years with zero violations. Facility South has operated 7 years with 0 violations (exempt). Facility East has only 2 years and has a violation, so it is the ONLY facility subject to mandatory review.",
        "trap": "Failing to check Facility South's 7-year zero-violation exemption in Tab 1.",
        "estSeconds": 130
    })

    questions.append({
        "id": f"pt{t_str}_di20", "test": t_num, "section": "DATA_INSIGHTS", "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"Can Facility East file an emergency stay against its mandatory operational review under Protocol 9.2?",
        "dataSource": msr_doc,
        "options": [
            "No, because it has an active safety violation recorded in the preceding 12 months.",
            "Yes, provided it files the paperwork within 14 business days.",
            "Yes, because its compliance score was within 10 points of the 85 threshold.",
            "No, because only facilities with more than 5 years operating history can file stays.",
            "Yes, because emergency stays are automatically granted to all facilities."
        ],
        "answer": "A",
        "explanation": "Tab 3 states: 'No facility with an active safety violation recorded in the preceding 12 months is eligible to file for an emergency stay.' Facility East has 1 safety violation, disqualifying it completely.",
        "trap": "Focusing on the 14-day filing window without checking the violation disqualification rule.",
        "estSeconds": 115
    })

    # Save test record
    q_quant = [q for q in questions if q['section'] == 'QUANT']
    q_verbal = [q for q in questions if q['section'] == 'VERBAL']
    q_di = [q for q in questions if q['section'] == 'DATA_INSIGHTS']

    test_rec = {
        "testNumber": t_num,
        "id": f"pt_{t_str}",
        "title": f"Official Focus Mock #{t_num} (Full 64-Q Simulation)",
        "date": f"2025-0{min(9, (t_num + 1) // 2)}-{10 + t_num * 2:02d}",
        "totalScore": 635 + t_num * 10,
        "quantScore": 80 + (t_num // 3),
        "verbalScore": 79 + ((t_num + 1) // 3),
        "dataInsightsScore": 78 + ((t_num + 2) // 3),
        "structure": {
            "quantQuestions": len(q_quant),
            "verbalQuestions": len(q_verbal),
            "dataInsightsQuestions": len(q_di),
            "total": len(questions),
            "durationMinutes": 135
        },
        "questions": questions
    }

    file_p = os.path.join(OUTPUT_DIR, f"test_{t_str}.json")
    with open(file_p, "w", encoding="utf-8") as f:
        json.dump(test_rec, f, indent=2)

    tests.append(test_rec)
    print(f"✓ Test {t_str}: {len(q_quant)} Quant, {len(q_verbal)} Verbal, {len(q_di)} DI = {len(questions)} Qs")

# Master Index
master_idx = {
    "version": "2.0.0",
    "totalTests": 10,
    "totalQuestions": 640,
    "tests": [
        {
            "testNumber": t["testNumber"],
            "id": t["id"],
            "title": t["title"],
            "totalScore": t["totalScore"],
            "quantScore": t["quantScore"],
            "verbalScore": t["verbalScore"],
            "dataInsightsScore": t["dataInsightsScore"],
            "quantCount": t["structure"]["quantQuestions"],
            "verbalCount": t["structure"]["verbalQuestions"],
            "diCount": t["structure"]["dataInsightsQuestions"],
            "totalCount": t["structure"]["total"],
            "filePath": f"data/practice_tests/test_{t['testNumber']:02d}.json"
        }
        for t in tests
    ]
}

idx_p = os.path.join(OUTPUT_DIR, "index.json")
with open(idx_p, "w", encoding="utf-8") as f:
    json.dump(master_idx, f, indent=2)

# Write TypeScript file
ts_code = f"""// AUTO-GENERATED GMAT FOCUS PRACTICE TEST BANK (640 Unique Questions)
// 10 Full Practice Tests (64 questions each: 21 Quant, 23 Verbal, 20 Data Insights)
import {{ PracticeTestRecord, ImportedTestQuestion }} from '../types/gmat';

export const FULL_GENERATED_PRACTICE_TESTS: PracticeTestRecord[] = {json.dumps(tests, indent=2)};

export const ALL_PRACTICE_QUESTIONS: ImportedTestQuestion[] = FULL_GENERATED_PRACTICE_TESTS.flatMap(t => t.questions as ImportedTestQuestion[]);
"""

ts_file_path = os.path.join(os.getcwd(), 'src', 'lib', 'practiceTestsBank.ts')
with open(ts_file_path, "w", encoding="utf-8") as f:
    f.write(ts_code)

print("\nSUCCESS: All 10 practice tests generated and saved!")
