# gen_quant.py: Generates 210 unique GMAT Focus Quantitative Reasoning questions (21 per test x 10 tests)
# GMAT Focus Quant: Problem Solving ONLY. No Geometry. Pure arithmetic, algebra, number properties,
# rates, work, percents, ratios, overlapping sets, statistics, combinatorics, probability, sequences.

def get_quant_for_test(test_num):
    t = test_num
    pad = f"{t:02d}"
    qs = []

    # Contexts and domains for each test to ensure variety in narratives
    domains = [
        {"biz": "cloud infrastructure", "firm": "Nebula Cloud", "item": "virtual server clusters", "rate": "compute cycles"},
        {"biz": "biotech therapeutics", "firm": "SynthoVax", "item": "lyophilized drug vials", "rate": "titration runs"},
        {"biz": "fintech payment gateway", "firm": "PayGrid", "item": "cleared transactions", "rate": "settlement batches"},
        {"biz": "semiconductor manufacturing", "firm": "NanoLitho", "item": "silicon micro-wafers", "rate": "lithography passes"},
        {"biz": "renewable power grid", "firm": "AeroVolt", "item": "megawatt-hour storage cells", "rate": "inversion cycles"},
        {"biz": "autonomous freight", "firm": "FleetAutonomy", "item": "pallet payloads", "rate": "dock dispatches"},
        {"biz": "precision agriculture", "firm": "AgriSensor", "item": "hydroponic nutrient blocks", "rate": "irrigation intervals"},
        {"biz": "aerospace propulsion", "firm": "OrbitDynamics", "item": "composite thruster valves", "rate": "telemetry pings"},
        {"biz": "telecommunications", "firm": "OpticWave", "item": "fiber optic repeater hubs", "rate": "multiplex packets"},
        {"biz": "specialty chemical refining", "firm": "ApexPolymer", "item": "catalytic distillation runs", "rate": "reflux cycles"}
    ]
    d = domains[t - 1]

    # Q01: Number Properties - Prime Factorization & Divisors
    base_val = 120 * t + 360
    # Let base_val be factored: e.g. t=1 -> 480 = 2^5 * 3 * 5; t=2 -> 600 = 2^3 * 3 * 5^2, etc.
    # We ask: smallest positive integer k such that base_val * k is a perfect cube
    # Let's compute concrete values per test
    cubes_data = [
        {"val": 480, "factors": "$2^5 \\times 3^1 \\times 5^1$", "k": 450, "opts": ["90", "150", "300", "450", "600"], "ans": "D", "sol": "To make $480 = 2^5 \\times 3^1 \\times 5^1$ a cube, exponents must be multiples of 3. Need $2^1 \\times 3^2 \\times 5^2 = 2 \\times 9 \\times 25 = 450$."},
        {"val": 600, "factors": "$2^3 \\times 3^1 \\times 5^2$", "k": 45, "opts": ["15", "45", "75", "135", "225"], "ans": "B", "sol": "For $600 = 2^3 \\times 3^1 \\times 5^2$, need $3^2 \\times 5^1 = 9 \\times 5 = 45$ to make all exponents multiples of 3."},
        {"val": 720, "factors": "$2^4 \\times 3^2 \\times 5^1$", "k": 300, "opts": ["150", "180", "240", "300", "600"], "ans": "D", "sol": "For $720 = 2^4 \\times 3^2 \\times 5^1$, need $2^2 \\times 3^1 \\times 5^2 = 4 \\times 3 \\times 25 = 300$."},
        {"val": 840, "factors": "$2^3 \\times 3^1 \\times 5^1 \\times 7^1$", "k": 11025, "opts": ["1225", "2450", "3675", "7350", "11025"], "ans": "E", "sol": "For $840 = 2^3 \\times 3^1 \\times 5^1 \\times 7^1$, need $3^2 \\times 5^2 \\times 7^2 = 9 \\times 25 \\times 49 = 11025$."},
        {"val": 960, "factors": "$2^6 \\times 3^1 \\times 5^1$", "k": 225, "opts": ["75", "150", "225", "450", "675"], "ans": "C", "sol": "For $960 = 2^6 \\times 3^1 \\times 5^1$, $2^6$ is already a cube. Need $3^2 \\times 5^2 = 225$."},
        {"val": 1080, "factors": "$2^3 \\times 3^3 \\times 5^1$", "k": 25, "opts": ["5", "15", "25", "75", "125"], "ans": "C", "sol": "For $1080 = 2^3 \\times 3^3 \\times 5^1$, both 2 and 3 have power 3. Need $5^2 = 25$."},
        {"val": 1200, "factors": "$2^4 \\times 3^1 \\times 5^2$", "k": 180, "opts": ["90", "120", "180", "360", "540"], "ans": "C", "sol": "For $1200 = 2^4 \\times 3^1 \\times 5^2$, need $2^2 \\times 3^2 \\times 5^1 = 4 \\times 9 \\times 5 = 180$."},
        {"val": 1350, "factors": "$2^1 \\times 3^3 \\times 5^2$", "k": 20, "opts": ["10", "20", "40", "50", "100"], "ans": "B", "sol": "For $1350 = 2^1 \\times 3^3 \\times 5^2$, need $2^2 \\times 5^1 = 4 \\times 5 = 20$."},
        {"val": 1500, "factors": "$2^2 \\times 3^1 \\times 5^3$", "k": 18, "opts": ["6", "12", "18", "36", "72"], "ans": "C", "sol": "For $1500 = 2^2 \\times 3^1 \\times 5^3$, need $2^1 \\times 3^2 = 2 \\times 9 = 18$."},
        {"val": 1620, "factors": "$2^2 \\times 3^4 \\times 5^1$", "k": 450, "opts": ["150", "225", "300", "450", "900"], "ans": "D", "sol": "For $1620 = 2^2 \\times 3^4 \\times 5^1$, need $2^1 \\times 3^2 \\times 5^2 = 2 \\times 9 \\times 25 = 450$."}
    ][t - 1]

    qs.append({
        "id": f"pt{pad}_q01", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility", "difficulty": "medium", "difficultyScore": 6,
        "stem": f"If $N = {cubes_data['val']}$, what is the smallest positive integer $k$ such that $N \\times k$ is the cube of an integer?",
        "options": cubes_data['opts'], "answer": cubes_data['ans'],
        "explanation": f"Write the prime factorization: $N = {cubes_data['val']} = {cubes_data['factors']}$. {cubes_data['sol']}",
        "trap": "Making the exponents even (producing a square) rather than multiples of 3 (producing a cube).",
        "estSeconds": 105
    })

    # Q02: Rates & Work - Opposing Rates
    fill_hrs = 4 + (t % 4)
    empty_hrs = fill_hrs + 3 + (t % 3)
    # Rate = 1/fill - 1/empty = (empty - fill) / (fill * empty)
    # net_time = (fill * empty) / (empty - fill)
    diff = empty_hrs - fill_hrs
    prod = fill_hrs * empty_hrs
    net_val = round(prod / diff, 2)
    # format as fraction or mixed number: prod / diff
    qs.append({
        "id": f"pt{pad}_q02", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work", "difficulty": "medium", "difficultyScore": 6,
        "stem": f"At {d['firm']}, an inlet intake pipe can fill a chemical containment reservoir in {fill_hrs} hours, while an emergency drainage valve can empty the fully filled reservoir in {empty_hrs} hours. If both the intake pipe and the drainage valve are opened simultaneously when the reservoir is completely empty, how many hours will it take to fill the reservoir completely?",
        "options": [f"{prod}/{diff + 1}", f"{prod}/{diff}", f"{prod + 2}/{diff}", f"{prod * 2}/{diff}", f"{empty_hrs - fill_hrs}"],
        "answer": "B",
        "explanation": f"Inlet rate = $1/{fill_hrs}$ reservoir per hour. Drainage rate = $1/{empty_hrs}$ reservoir per hour. Net filling rate = $1/{fill_hrs} - 1/{empty_hrs} = ({empty_hrs} - {fill_hrs})/({fill_hrs} \\times {empty_hrs}) = {diff}/{prod}$ reservoir per hour. Total hours to fill = reciprocal of rate = ${prod}/{diff}$ hours.",
        "trap": "Adding the rates instead of subtracting the drainage rate, or merely taking the difference in hours ({empty_hrs} - {fill_hrs}).",
        "estSeconds": 115
    })

    # Q03: Algebra & Quadratic Factoring
    # Roots: r1 = t + 2, r2 = -(t + 5)
    r1 = t + 2
    r2 = -(t + 5)
    sum_r = r1 + r2  # = -3
    prod_r = r1 * r2 # = -(t+2)(t+5)
    # Equation: x^2 + 3x - (t+2)(t+5) = 0
    qs.append({
        "id": f"pt{pad}_q03", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"If $x$ is a negative real number such that $x^2 + 3x = {-prod_r}$, what is the value of $x$?",
        "options": [f"{r2 - 2}", f"{r2}", f"{-r1}", f"{r1}", f"{-r2}"],
        "answer": "B",
        "explanation": f"Rewrite the equation as $x^2 + 3x + {prod_r} = 0$. Factoring: $(x - {r1})(x - ({r2})) = (x - {r1})(x + {-r2}) = 0$. The roots are $x = {r1}$ and $x = {r2}$. Since $x$ must be negative, $x = {r2}$.",
        "trap": "Selecting the positive root ${r1}$ instead of reading the prompt restriction that $x$ is negative.",
        "estSeconds": 110
    })

    # Q04: Percentages, Markup & Margin
    cost = 80 + t * 15
    markup = 25 + (t % 4) * 5 # e.g. 25%, 30%, 35%, 40%
    selling = round(cost * (1 + markup / 100), 2)
    discount = 10 + (t % 3) * 5 # e.g. 10%, 15%, 20%
    final_price = round(selling * (1 - discount / 100), 2)
    profit = round(final_price - cost, 2)
    qs.append({
        "id": f"pt{pad}_q04", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"A distributor of {d['item']} purchases a shipment at a unit cost of ${cost}. The distributor marks up the price by {markup}% to establish the listed retail price. During a promotional quarter, the distributor offers a discount of {discount}% off the listed retail price. What is the net profit per unit earned by the distributor, rounded to the nearest cent?",
        "options": [f"${profit - 4.50:.2f}", f"${profit:.2f}", f"${profit + 3.75:.2f}", f"${profit + 7.50:.2f}", f"${cost * (markup - discount)/100:.2f}"],
        "answer": "B",
        "explanation": f"Listed price = ${cost} \\times (1 + {markup/100:.2f}) = ${selling:.2f}. Promotional price after {discount}% discount = ${selling:.2f} \\times (1 - {discount/100:.2f}) = ${final_price:.2f}. Net profit = ${final_price:.2f} - ${cost} = ${profit:.2f}.",
        "trap": "Directly subtracting the discount percent from the markup percent ({markup}% - {discount}%) and applying it to the original cost.",
        "estSeconds": 115
    })

    # Q05: Relative Speed / Motion
    speed1 = 45 + t * 3
    speed2 = speed1 + 15
    head_start_hrs = 2
    # Distance head start = speed1 * head_start_hrs
    # Relative speed = speed2 - speed1 = 15
    catch_time = round((speed1 * head_start_hrs) / 15, 2)
    qs.append({
        "id": f"pt{pad}_q05", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"Two automated freight carriers travel along the same direct corridor from Depot North to Depot South. Carrier A departs at 08:00 traveling at a constant speed of {speed1} mph. Carrier B departs along the identical route at 10:00 traveling at a constant speed of {speed2} mph. At what time will Carrier B overtake Carrier A?",
        "options": [
            f"{int(10 + catch_time - 1)}:{int((catch_time % 1)*60):02d}",
            f"{int(10 + catch_time)}:{int((catch_time % 1)*60):02d}",
            f"{int(10 + catch_time + 1)}:{int((catch_time % 1)*60):02d}",
            f"{int(8 + catch_time)}:{int((catch_time % 1)*60):02d}",
            f"{int(10 + catch_time + 2)}:{int((catch_time % 1)*60):02d}"
        ],
        "answer": "B",
        "explanation": f"Carrier A has a 2-hour head start, covering $2 \\times {speed1} = {2 * speed1}$ miles by 10:00. The relative speed of Carrier B with respect to Carrier A is ${speed2} - {speed1} = 15$ mph. Time to overtake = ${2 * speed1} / 15 = {catch_time}$ hours after 10:00. Adding {catch_time} hours to 10:00 gives {int(10 + catch_time)}:{int((catch_time % 1)*60):02d}.",
        "trap": "Calculating the time elapsed from 08:00 instead of Carrier B's departure time of 10:00.",
        "estSeconds": 120
    })

    # Q06: Overlapping Sets / Venn Diagrams
    total_staff = 100 + t * 10
    pct_a = 60 + (t % 3) * 5 # e.g. 60, 65, 70
    pct_b = 50 + (t % 4) * 4 # e.g. 50, 54, 58
    pct_neither = 10 + (t % 2) * 5 # e.g. 10, 15
    # Total % = A + B - Both + Neither = 100
    pct_both = pct_a + pct_b + pct_neither - 100
    exact_both = int(total_staff * pct_both / 100)
    qs.append({
        "id": f"pt{pad}_q06", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work", "difficulty": "medium", "difficultyScore": 6,
        "stem": f"In a division of {total_staff} engineers at {d['firm']}, {pct_a}% are certified in Distributed Microservices and {pct_b}% are certified in Real-Time Stream Processing. If {pct_neither}% of the engineers hold neither certification, how many engineers hold BOTH certifications?",
        "options": [f"{exact_both - 12}", f"{exact_both}", f"{exact_both + 8}", f"{exact_both + 15}", f"{int(total_staff * (pct_a + pct_b)/200)}"],
        "answer": "B",
        "explanation": f"Using the principle of inclusion-exclusion for percentages: $\\text{{Total}} = %A + %B - %(\\text{{Both}}) + %(\\text{{Neither}})$. $100 = {pct_a} + {pct_b} - %(\\text{{Both}}) + {pct_neither} \\implies %(\\text{{Both}}) = {pct_a + pct_b + pct_neither} - 100 = {pct_both}\\%$. Number of engineers = ${total_staff} \\times {pct_both}/100 = {exact_both}$.",
        "trap": "Neglecting the 'neither' percentage and computing $A + B - 100$ directly.",
        "estSeconds": 105
    })

    # Q07: Statistics - Median, Mean & Extremes (Hard 705+)
    n_items = 7
    med = 18 + t * 2
    avg = 24 + t * 2
    tot_sum = n_items * avg
    # To maximize the 7th element x7:
    # Elements: x1 < x2 < x3 < x4(med) < x5 < x6 < x7 (distinct positive integers)
    # Min positive integers: x1 = 1, x2 = 2, x3 = 3, x4 = med.
    # To maximize x7, minimize x5 and x6: x5 = med + 1, x6 = med + 2.
    # sum = 1 + 2 + 3 + med + (med + 1) + (med + 2) + x7 = 6 + 3*med + 3 + x7 = 9 + 3*med + x7
    max_x7 = tot_sum - (9 + 3 * med)
    qs.append({
        "id": f"pt{pad}_q07", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"A dataset of 7 distinct positive integers has a median of {med} and an arithmetic mean of {avg}. What is the MAXIMUM possible value of the greatest integer in this dataset?",
        "options": [f"{max_x7 - 8}", f"{max_x7}", f"{max_x7 + 6}", f"{max_x7 + 12}", f"{tot_sum - 4*med}"],
        "answer": "B",
        "explanation": f"Let the 7 integers in ascending order be $x_1 < x_2 < x_3 < x_4 < x_5 < x_6 < x_7$. The median is $x_4 = {med}$, and the sum of all 7 values is $7 \\times {avg} = {tot_sum}$. To maximize $x_7$, we must minimize the other six integers. Since all are distinct positive integers: minimal $x_1 = 1, x_2 = 2, x_3 = 3$. Minimal $x_5 = x_4 + 1 = {med + 1}$, and minimal $x_6 = x_4 + 2 = {med + 2}$. The sum of the first six integers is $1 + 2 + 3 + {med} + {med + 1} + {med + 2} = {9 + 3 * med}$. Therefore, maximum $x_7 = {tot_sum} - {9 + 3 * med} = {max_x7}$.",
        "trap": "Assuming $x_5$ can equal the median $x_4$, forgetting that all 7 integers must be distinct.",
        "estSeconds": 135
    })

    # Q08: Combinatorics - Restricted Committees
    men = 5 + (t % 3)
    women = 4 + (t % 3)
    # Committee of 4: at least 1 man and at least 1 woman
    import math
    def nCr(n, r):
        return math.comb(n, r)
    total_ways = nCr(men + women, 4)
    all_men = nCr(men, 4)
    all_women = nCr(women, 4)
    valid_ways = total_ways - all_men - all_women
    qs.append({
        "id": f"pt{pad}_q08", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"An evaluation board of 4 delegates is to be selected from a pool of {men} system architects and {women} data scientists. If the board must include at least one system architect and at least one data scientist, how many distinct boards can be formed?",
        "options": [f"{valid_ways - 15}", f"{valid_ways}", f"{valid_ways + 12}", f"{total_ways}", f"{valid_ways + 25}"],
        "answer": "B",
        "explanation": f"Total unrestricted selections of 4 members from ${men} + {women} = {men + women}$ candidates: $\\binom{{{men + women}}}{{4}} = {total_ways}$. The forbidden configurations are: all 4 are system architects, $\\binom{{{men}}}{{4}} = {all_men}$; or all 4 are data scientists, $\\binom{{{women}}}{{4}} = {all_women}$. Valid selections = ${total_ways} - {all_men} - {all_women} = {valid_ways}$.",
        "trap": "Selecting 1 man and 1 woman first and choosing remaining 2 freely, which introduces massive double-counting.",
        "estSeconds": 125
    })

    # Q09: Probability - Complementary Probability
    dice_sides = 6
    target_prob = round(1 - ((5/6) ** (t + 1)), 4)
    # Question on independent defect probabilities
    # Device has 3 independent sensors, each fails with prob p = 1/(10 + t)
    p_fail_num = 1
    p_fail_den = 5 + t
    # Prob at least 1 fails = 1 - (1 - 1/den)^3 = 1 - ((den - 1)/den)^3
    p_all_work = ((p_fail_den - 1) / p_fail_den) ** 3
    p_at_least_one = round(1 - p_all_work, 4)
    p_str_num = p_fail_den**3 - (p_fail_den - 1)**3
    p_str_den = p_fail_den**3
    qs.append({
        "id": f"pt{pad}_q09", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Probability & Combinatorics", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"A mission-critical module at {d['firm']} relies on 3 independent redundant sensors. During operation, each individual sensor has an independent probability of $1/{p_fail_den}$ of suffering a calibration failure. What is the probability that at least one of the 3 sensors experiences a calibration failure?",
        "options": [
            f"{p_str_num - 5}/{p_str_den}",
            f"{p_str_num}/{p_str_den}",
            f"{p_str_num + 7}/{p_str_den}",
            f"3/{p_fail_den}",
            f"1/{p_fail_den**3}"
        ],
        "answer": "B",
        "explanation": f"Use the complement rule: $P(\\text{{at least one failure}}) = 1 - P(\\text{{zero failures}})$. The probability that a single sensor functions normally is $1 - 1/{p_fail_den} = {p_fail_den - 1}/{p_fail_den}$. Since failures are independent, the probability that all 3 function normally is $({p_fail_den - 1}/{p_fail_den})^3 = {(p_fail_den - 1)**3}/{p_fail_den**3}$. Therefore, $P(\\text{{at least one failure}}) = 1 - {(p_fail_den - 1)**3}/{p_fail_den**3} = ({p_fail_den**3} - {(p_fail_den - 1)**3})/{p_fail_den**3} = {p_str_num}/{p_str_den}$.",
        "trap": "Summing the probabilities directly ($3 \\times 1/{p_fail_den}$), which treats the events as mutually exclusive rather than independent.",
        "estSeconds": 120
    })

    # Q10: Inequalities & Absolute Value
    center = 3 * t + 1
    radius = 2 * t + 5
    # |2x - center| <= radius  => -radius <= 2x - center <= radius => center - radius <= 2x <= center + radius
    low = center - radius
    high = center + radius
    # Count of integer x such that low/2 <= x <= high/2
    low_x = math.ceil(low / 2)
    high_x = math.floor(high / 2)
    count_int = high_x - low_x + 1
    qs.append({
        "id": f"pt{pad}_q10", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Inequalities & Absolute Values", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"For how many integer values of $x$ is the inequality $|2x - {center}| \\le {radius}$ satisfied?",
        "options": [f"{count_int - 2}", f"{count_int - 1}", f"{count_int}", f"{count_int + 1}", f"{count_int + 2}"],
        "answer": "C",
        "explanation": f"Expand the absolute value inequality: $-{radius} \\le 2x - {center} \\le {radius}$. Add {center} across all parts: ${low} \\le 2x \\le ${high}$. Divide by 2: ${low/2:.1f} \\le x \\le {high/2:.1f}$. The smallest integer $x$ is ${low_x}$ and the largest integer $x$ is ${high_x}$. The total number of integers is ${high_x} - ({low_x}) + 1 = {count_int}$.",
        "trap": "Subtracting high - low without adding 1 for inclusive endpoints, or mismanaging odd fractions.",
        "estSeconds": 110
    })

    # Q11: Sequences & Series - Arithmetic Progression
    first_term = 4 + t
    common_diff = 3 + (t % 3)
    num_terms = 20 + t
    # S_n = n/2 * (2*a + (n-1)*d)
    last_term = first_term + (num_terms - 1) * common_diff
    sum_ap = int((num_terms * (first_term + last_term)) / 2)
    qs.append({
        "id": f"pt{pad}_q11", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents", "difficulty": "medium", "difficultyScore": 6,
        "stem": f"An arithmetic sequence has a first term $a_1 = {first_term}$ and a common difference $d = {common_diff}$. What is the sum of the first {num_terms} terms of this sequence?",
        "options": [f"{sum_ap - 50}", f"{sum_ap}", f"{sum_ap + 50}", f"{sum_ap + 100}", f"{num_terms * last_term}"],
        "answer": "B",
        "explanation": f"The $n$-th term is $a_n = a_1 + (n - 1)d$. For $n = {num_terms}$, $a_{{{num_terms}}} = {first_term} + ({num_terms} - 1)({common_diff}) = {last_term}$. The sum of an arithmetic progression is $S_n = \\frac{{n}}{{2}}(a_1 + a_n) = \\frac{{{num_terms}}}{{2}}({first_term} + {last_term}) = {sum_ap}$.",
        "trap": "Multiplying the last term directly by the number of terms without dividing by 2.",
        "estSeconds": 105
    })

    # Q12: Remainder / Modular Arithmetic (Cyclicity)
    # What is the units digit of 7^(4k + rem)
    rem = (t * 3 + 1) % 4
    powers_of_7 = [1, 7, 9, 3] # for mod 4: 0->1, 1->7, 2->9, 3->3
    units_digit = powers_of_7[rem]
    exp_val = 100 + t * 4 + rem
    qs.append({
        "id": f"pt{pad}_q12", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"What is the units digit of $7^{{{exp_val}}} + 3^{{{exp_val + 2}}}$?",
        "options": [
            f"{(units_digit + [1, 3, 9, 7][(exp_val + 2) % 4] - 2) % 10}",
            f"{(units_digit + [1, 3, 9, 7][(exp_val + 2) % 4]) % 10}",
            f"{(units_digit + [1, 3, 9, 7][(exp_val + 2) % 4] + 2) % 10}",
            f"{(units_digit + [1, 3, 9, 7][(exp_val + 2) % 4] + 4) % 10}",
            f"{(units_digit + [1, 3, 9, 7][(exp_val + 2) % 4] + 5) % 10}"
        ],
        "answer": "B",
        "explanation": f"Powers of 7 follow a 4-term units digit cycle: $7^1=7, 7^2=9, 7^3=3, 7^4=1$. Since ${exp_val} \\equiv {exp_val % 4} \\pmod 4$, the units digit of $7^{{{exp_val}}}$ is {powers_of_7[exp_val % 4]}. Powers of 3 also cycle with period 4: $3^1=3, 3^2=9, 3^3=7, 3^4=1$. Since ${exp_val + 2} \\equiv {(exp_val + 2) % 4} \\pmod 4$, its units digit is {[1, 3, 9, 7][(exp_val + 2) % 4]}. Adding these gives {powers_of_7[exp_val % 4]} + {[1, 3, 9, 7][(exp_val + 2) % 4]} = {powers_of_7[exp_val % 4] + [1, 3, 9, 7][(exp_val + 2) % 4]}, which ends in {(units_digit + [1, 3, 9, 7][(exp_val + 2) % 4]) % 10}.",
        "trap": "Assuming the period of units digits is 10 instead of determining the 4-step modular cycle.",
        "estSeconds": 115
    })

    # Q13: Mixtures & Alligation
    vol1 = 20 + t * 5
    conc1 = 15 + (t % 3) * 5 # e.g. 15, 20, 25
    conc2 = 60 + (t % 4) * 5 # e.g. 60, 65, 70, 75
    target_conc = conc1 + 20
    # vol1 * conc1 + vol2 * conc2 = (vol1 + vol2) * target_conc
    # vol1 * (target_conc - conc1) = vol2 * (conc2 - target_conc)
    # vol2 = vol1 * (target_conc - conc1) / (conc2 - target_conc)
    vol2 = round(vol1 * (target_conc - conc1) / (conc2 - target_conc), 2)
    qs.append({
        "id": f"pt{pad}_q13", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Percents, Ratios & Mixtures", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"A chemical laboratory has {vol1} liters of a {conc1}% acid solution. How many liters of a {conc2}% acid solution must be added to produce a combined solution that is exactly {target_conc}% acid?",
        "options": [f"{vol2 - 4.5:.1f}", f"{vol2:.1f}", f"{vol2 + 3.5:.1f}", f"{vol2 + 8.0:.1f}", f"{vol1 * 1.5:.1f}"],
        "answer": "B",
        "explanation": f"Set up the alligation or weighted equation: let $x$ be the added volume of {conc2}% solution. ${vol1}({conc1}) + x({conc2}) = ({vol1} + x)({target_conc})$. ${vol1}({target_conc} - {conc1}) = x({conc2} - {target_conc}) \\implies {vol1}({target_conc - conc1}) = x({conc2 - target_conc}) \\implies x = \\frac{{{vol1} \\times {target_conc - conc1}}}{{{conc2 - target_conc}}} = {vol2}$.",
        "trap": "Inverting the ratio differences in the alligation cross.",
        "estSeconds": 125
    })

    # Q14: System of Linear Equations / Word Problem
    price_a = 12 + t * 2
    price_b = 8 + t
    qty_total = 40 + t * 5
    qty_a = 15 + t * 2
    qty_b = qty_total - qty_a
    total_rev = qty_a * price_a + qty_b * price_b
    qs.append({
        "id": f"pt{pad}_q14", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents", "difficulty": "medium", "difficultyScore": 6,
        "stem": f"An enterprise sold a total of {qty_total} software license bundles consisting of Standard packages priced at ${price_b} each and Enterprise packages priced at ${price_a} each. If total sales receipts equaled ${total_rev}, how many Enterprise packages were sold?",
        "options": [f"{qty_a - 5}", f"{qty_a}", f"{qty_a + 5}", f"{qty_a + 10}", f"{qty_total - qty_a}"],
        "answer": "B",
        "explanation": f"Let $E$ be Enterprise packages and $S$ be Standard packages. We have: (1) $E + S = {qty_total}$ and (2) ${price_a}E + ${price_b}S = {total_rev}$. From (1), $S = {qty_total} - E$. Substituting into (2): ${price_a}E + ${price_b}({qty_total} - E) = {total_rev} \\implies ({price_a - price_b})E + {price_b * qty_total} = {total_rev} \\implies ({price_a - price_b})E = {total_rev - price_b * qty_total} \\implies E = {qty_a}$.",
        "trap": "Solving correctly for the Standard packages $S$ and mistakenly entering that instead of $E$.",
        "estSeconds": 105
    })

    # Q15: Exponent Rules & Nested Radicals
    # sqrt(x + 2*sqrt(y)) form: let a = t+1, b = t+3. (sqrt(a) + sqrt(b))^2 = a + b + 2*sqrt(a*b)
    a_term = t + 1
    b_term = t + 3
    sum_ab = a_term + b_term
    prod_ab = a_term * b_term
    qs.append({
        "id": f"pt{pad}_q15", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Which of the following is equivalent to $\\sqrt{{{sum_ab} + 2\\sqrt{{{prod_ab}}}}}$?",
        "options": [
            f"\\sqrt{{{a_term - 1}}} + \\sqrt{{{b_term + 1}}}",
            f"\\sqrt{{{a_term}}} + \\sqrt{{{b_term}}}",
            f"\\sqrt{{{sum_ab}}} + \\sqrt{{{prod_ab}}}",
            f"\\sqrt{{{2 * a_term}}} + \\sqrt{{{b_term}}}",
            f"{a_term} + {b_term}"
        ],
        "answer": "B",
        "explanation": f"Look for two numbers $a$ and $b$ whose sum is {sum_ab} and whose product is {prod_ab}. These are $a = {a_term}$ and $b = {b_term}$. Then $(\\sqrt{{{a_term}}} + \\sqrt{{{b_term}}})^2 = {a_term} + {b_term} + 2\\sqrt{{{a_term} \\times {b_term}}} = {sum_ab} + 2\\sqrt{{{prod_ab}}}$. Taking the positive square root gives $\\sqrt{{{a_term}}} + \\sqrt{{{b_term}}}$.",
        "trap": "Distributing the radical across the addition: $\\sqrt{{{sum_ab}}} + \\sqrt{{2\\sqrt{{{prod_ab}}}}}$, which violates algebra axioms.",
        "estSeconds": 115
    })

    # Q16: Divisibility by 9 and Digit Sums
    known_digits = [3, t, 5, 2, 7]
    sum_known = sum(known_digits)
    # Find d such that sum_known + d is multiple of 9
    rem9 = sum_known % 9
    missing_digit = (9 - rem9) % 9
    qs.append({
        "id": f"pt{pad}_q16", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility", "difficulty": "medium", "difficultyScore": 6,
        "stem": f"If the six-digit positive integer $3{t}5,2d7$ is divisible by 9, where $d$ represents a single decimal digit, what is the value of $d$?",
        "options": [f"{(missing_digit - 2) % 10}", f"{missing_digit}", f"{(missing_digit + 2) % 10}", f"{(missing_digit + 4) % 10}", f"{(missing_digit + 6) % 10}"],
        "answer": "B",
        "explanation": f"An integer is divisible by 9 if and only if the sum of its digits is a multiple of 9. The sum of the digits is $3 + {t} + 5 + 2 + d + 7 = {sum_known} + d$. For ${sum_known} + d$ to be a multiple of 9, since $0 \\le d \\le 9$, the next multiple of 9 is {sum_known + missing_digit}, meaning $d = {missing_digit}$.",
        "trap": "Applying the divisibility rule of 3 instead of 9, which allows multiple extraneous answers.",
        "estSeconds": 90
    })

    # Q17: Standard Deviation & Shift Invariance
    sd_orig = 4.2 + (t * 0.3)
    c_shift = 15 + t * 5
    qs.append({
        "id": f"pt{pad}_q17", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Statistics & Standard Deviation", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"A dataset $S$ consists of $n$ distinct positive real numbers with arithmetic mean $\\mu$ and standard deviation $\\sigma = {sd_orig:.1f}$. A new dataset $T$ is constructed where each element $y_i = 3x_i + {c_shift}$ for every $x_i \\in S$. What is the standard deviation of dataset $T$?",
        "options": [f"{sd_orig:.1f}", f"{3 * sd_orig:.1f}", f"{3 * sd_orig + c_shift:.1f}", f"{9 * sd_orig:.1f}", f"\\sqrt{{{3 * sd_orig:.1f}}}"],
        "answer": "B",
        "explanation": f"Adding a constant $c$ to every term in a dataset shifts the entire distribution without altering dispersion: $\\text{{Var}}(X + c) = \\text{{Var}}(X)$. Multiplying every term by a constant $k$ scales the dispersion: $\\text{{SD}}(kX) = |k| \\cdot \\text{{SD}}(X)$. For $y_i = 3x_i + {c_shift}$, the standard deviation is $3 \\times \\sigma = 3 \\times {sd_orig:.1f} = {3 * sd_orig:.1f}$. The constant $+{c_shift}$ has zero impact on the standard deviation.",
        "trap": "Adding the constant shift ${c_shift}$ to the standard deviation.",
        "estSeconds": 100
    })

    # Q18: Function Notation & Inverses
    # f(x) = (ax + b) / (cx - a), which is its own inverse!
    # f(f(x)) = x for all x != a/c
    a_coeff = 2 + t
    b_coeff = 5 + t
    c_coeff = 3 + t
    qs.append({
        "id": f"pt{pad}_q18", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Algebra & Exponents", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"Let $f(x) = \\frac{{{a_coeff}x + {b_coeff}}}{{{c_coeff}x - {a_coeff}}}$ for all real numbers $x \\neq {a_coeff}/{c_coeff}$. What is the value of $f(f({t + 4}))$?",
        "options": [f"{t + 2}", f"{t + 4}", f"{t + 6}", f"{a_coeff * (t + 4)}", f"0"],
        "answer": "B",
        "explanation": f"Calculate $f(f(x))$: substitute $y = f(x)$ into $f$. $f(y) = \\frac{{{a_coeff}y + {b_coeff}}}{{{c_coeff}y - {a_coeff}}}$. Expanding $y = \\frac{{{a_coeff}x + {b_coeff}}}{{{c_coeff}x - {a_coeff}}}$ in both numerator and denominator yields an exact simplification to $x$. Since $f$ is an involution (its own inverse), $f(f(x)) = x$ for all domain values. Therefore, $f(f({t + 4})) = {t + 4}$.",
        "trap": "Laboriously grinding through messy fractional arithmetic without recognizing the involution symmetry $f = f^{{-1}}$.",
        "estSeconds": 110
    })

    # Q19: Even / Odd Parity Constraints
    qs.append({
        "id": f"pt{pad}_q19", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"If $a, b,$ and $c$ are integers such that $3a + 5b + 7c = {200 + t * 2}$, which of the following statements MUST be true?",
        "options": [
            "At least one of a, b, and c is even.",
            "At least one of a, b, and c is even, or all three are even.",
            "At least one of a, b, or c must be odd.",
            "The product abc must be divisible by 4.",
            "a + b + c cannot be equal to an odd integer."
        ],
        "answer": "A",
        "explanation": f"The right side ${200 + t * 2}$ is an even integer. If $a, b,$ and $c$ were all odd, then $3a$ (odd $\\times$ odd = odd), $5b$ (odd $\\times$ odd = odd), and $7c$ (odd $\\times$ odd = odd) would all be odd. The sum of three odd integers is $\\text{{odd}} + \\text{{odd}} + \\text{{odd}} = \\text{{odd}}$. But the sum is ${200 + t * 2}$ (even). Thus, it is impossible for all three to be odd. Hence, at least one of $a, b,$ or $c$ must be even.",
        "trap": "Assuming that because the sum is even, all three variables must be even.",
        "estSeconds": 100
    })

    # Q20: Factorial Prime Exponent (Legendre's Formula)
    fact_n = 50 + t * 5 # e.g. 55, 60, 65...
    # Largest power of 5 dividing fact_n!
    # E_5(n!) = floor(n/5) + floor(n/25) + floor(n/125)
    e5 = (fact_n // 5) + (fact_n // 25)
    qs.append({
        "id": f"pt{pad}_q20", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Number Properties & Divisibility", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"What is the greatest integer $k$ such that $5^k$ divides ${fact_n}!$ evenly?",
        "options": [f"{e5 - 2}", f"{e5 - 1}", f"{e5}", f"{e5 + 1}", f"{fact_n // 5}"],
        "answer": "C",
        "explanation": f"By Legendre's formula, the exponent of prime $p$ in $n!$ is given by $E_p(n!) = \\sum_{{i=1}}^\\infty \\lfloor n / p^i \\rfloor$. For $n = {fact_n}$ and $p = 5$: $\\lfloor {fact_n} / 5 \\rfloor = {fact_n // 5}$, and $\\lfloor {fact_n} / 25 \\rfloor = {fact_n // 25}$. Higher powers of 5 exceed {fact_n}. Total exponent $k = {fact_n // 5} + {fact_n // 25} = {e5}$.",
        "trap": "Only dividing by 5 once ({fact_n // 5}) and forgetting to account for the extra factor of 5 contributed by multiples of 25.",
        "estSeconds": 115
    })

    # Q21: Constrained Optimization / Integer Division
    total_budget = 500 + t * 50
    cost_cheap = 15
    cost_exp = 35
    # Maximize total count of items = x + y subject to 15x + 35y = total_budget, x, y >= 1 integers
    # To maximize x + y, maximize x (cheaper item).
    # 15x = total_budget - 35y => x = (total_budget - 35y) / 15
    best_x = -1
    best_y = -1
    for y in range(1, 20):
        rem_b = total_budget - 35 * y
        if rem_b > 0 and rem_b % 15 == 0:
            best_y = y
            best_x = rem_b // 15
            break
    max_total_items = best_x + best_y
    qs.append({
        "id": f"pt{pad}_q21", "test": t, "section": "QUANT", "type": "PROBLEM_SOLVING",
        "subtopic": "Word Problems & Rates/Work", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"A procurement officer at {d['firm']} spent exactly ${total_budget} purchasing two types of replacement components: Standard Sensors at $15 each and Advanced Transceivers at $35 each. If the officer purchased at least one of each component, what is the MAXIMUM total number of components purchased?",
        "options": [f"{max_total_items - 4}", f"{max_total_items - 2}", f"{max_total_items}", f"{max_total_items + 2}", f"{total_budget // 15}"],
        "answer": "C",
        "explanation": f"Let $x$ be the number of Standard Sensors ($15) and $y$ be the number of Advanced Transceivers ($35). We need to maximize $x + y$ subject to $15x + 35y = {total_budget}$, where $x, y$ are positive integers. To maximize the total quantity $x + y$, we must maximize $x$ (the cheaper item) and minimize $y$. Testing the smallest positive integer values for $y$: when $y = {best_y}$, $35({best_y}) = {35 * best_y}$, leaving ${total_budget} - {35 * best_y} = {total_budget - 35 * best_y}$. Dividing by 15 gives $x = {best_x}$ (an integer). Maximum total items = ${best_x} + {best_y} = {max_total_items}$.",
        "trap": "Dividing the entire budget by $15 (${total_budget // 15}$) without buying at least one Advanced Transceiver ($y \\ge 1$).",
        "estSeconds": 130
    })

    return qs
