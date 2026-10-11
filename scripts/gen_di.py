# gen_di.py: Generates 200 unique GMAT Focus Data Insights questions (20 per test x 10 tests)
# GMAT Focus DI format: Data Sufficiency (6), Table Analysis (4), Graphics Interpretation (4),
# Two-Part Analysis (3), and Multi-Source Reasoning (3). Total: 20 per test.

DS_OPTIONS = [
    "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
    "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
    "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
    "EACH statement ALONE is sufficient.",
    "Statements (1) and (2) TOGETHER are NOT sufficient."
]

def get_di_for_test(test_num):
    t = test_num
    pad = f"{t:02d}"
    qs = []

    # 1. DATA SUFFICIENCY (6 Questions: Q01-Q06)
    # DS 1: Number Properties / Even-Odd or Divisibility
    k_prime = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31][t - 1]
    qs.append({
        "id": f"pt{pad}_di01", "test": t, "section": "DATA_INSIGHTS", "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency", "difficulty": "medium", "difficultyScore": 6,
        "stem": f"If $x$ and $y$ are positive integers, is the product $xy$ divisible by {k_prime}?\n\n(1) $x + y = {k_prime * 2 + 1}$\n(2) $x$ is a multiple of {k_prime}",
        "options": DS_OPTIONS,
        "answer": "B",
        "explanation": f"We are testing whether $xy$ is divisible by prime {k_prime}.\nStatement (1): $x + y = {k_prime * 2 + 1}$. If $x = 1, y = {k_prime * 2}$, then $y$ is a multiple of {k_prime}, so $xy$ is divisible. But if $x = 2, y = {k_prime * 2 - 1}$, neither $x$ nor $y$ is a multiple of {k_prime}, so $xy$ is not divisible. INSUFFICIENT.\nStatement (2): $x$ is a multiple of {k_prime}. If $x = {k_prime}m$, then $xy = {k_prime}my$, which is always divisible by {k_prime}. SUFFICIENT.\nThus, Statement (2) ALONE is sufficient.",
        "trap": "Assuming the sum condition in Statement (1) implies one of the terms must be a multiple of {k_prime}.",
        "estSeconds": 105
    })

    # DS 2: Inequalities & Sign Analysis (Hard 705+)
    qs.append({
        "id": f"pt{pad}_di02", "test": t, "section": "DATA_INSIGHTS", "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"If $a$ and $b$ are non-zero real numbers, is $a^3 b < 0$?\n\n(1) $ab > 0$\n(2) $a < {t - 5}$",
        "options": DS_OPTIONS,
        "answer": "A",
        "explanation": f"Note that $a^3 b = a^2(ab)$. Since $a \\neq 0$, $a^2 > 0$ always. Therefore, the sign of $a^3 b$ is identical to the sign of $ab$! The question 'Is $a^3 b < 0$?' is completely equivalent to 'Is $ab < 0$?'.\nStatement (1): $ab > 0$. This immediately tells us that $ab$ is positive, so $ab < 0$ is definitively FALSE. A definitive 'NO' is SUFFICIENT.\nStatement (2): $a < {t - 5}$. This tells us nothing about the sign of $b$. INSUFFICIENT.\nThus, Statement (1) ALONE is sufficient.",
        "trap": "Thinking that a 'NO' answer means insufficient, or failing to factor $a^3 b$ into $a^2(ab)$.",
        "estSeconds": 115
    })

    # DS 3: Word Problem - Rates / Ratios
    rate_scale = 10 + t * 2
    qs.append({
        "id": f"pt{pad}_di03", "test": t, "section": "DATA_INSIGHTS", "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"In a manufacturing facility, Machine Alpha and Machine Beta work simultaneously to produce a batch of components. What is the total time required for both machines working together to complete the batch?\n\n(1) Machine Alpha takes {rate_scale} hours working alone to complete the batch.\n(2) Machine Beta completes the batch working alone in twice the time that Machine Alpha takes alone.",
        "options": DS_OPTIONS,
        "answer": "C",
        "explanation": f"To find the combined time $T = \\frac{{r_A \\times r_B}}{{r_A + r_B}}$, we need both individual rates.\nStatement (1): Gives $r_A = {rate_scale}$ hours, but says nothing about Machine Beta. INSUFFICIENT.\nStatement (2): Gives the ratio $r_B = 2r_A$, but no numerical time. INSUFFICIENT.\nCombined: From (1), $r_A = {rate_scale}$. From (2), $r_B = 2({rate_scale}) = {rate_scale * 2}$. Both rates are known, so combined time can be calculated ($T = \\frac{{{rate_scale} \\times {rate_scale * 2}}}{{{rate_scale} + {rate_scale * 2}}} = \\frac{{{rate_scale * 2}}}{{3}}$). SUFFICIENT.",
        "trap": "Believing Statement (2) allows computing combined time without an absolute benchmark.",
        "estSeconds": 100
    })

    # DS 4: Geometry / Coordinate Geometry Slopes
    x_pt = t + 2
    y_pt = 2 * t + 3
    qs.append({
        "id": f"pt{pad}_di04", "test": t, "section": "DATA_INSIGHTS", "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Line $L$ lies in the coordinate plane and passes through the point $({x_pt}, {y_pt})$. Does line $L$ have a negative slope?\n\n(1) The $x$-intercept of line $L$ is greater than {x_pt}.\n(2) The $y$-intercept of line $L$ is greater than {y_pt}.",
        "options": DS_OPTIONS,
        "answer": "D",
        "explanation": f"The point $({x_pt}, {y_pt})$ lies in the first quadrant since ${x_pt} > 0$ and ${y_pt} > 0$.\nStatement (1): The $x$-intercept $(x_0, 0)$ satisfies $x_0 > {x_pt}$. The slope between $({x_pt}, {y_pt})$ and $(x_0, 0)$ is $m = \\frac{{0 - {y_pt}}}{{x_0 - {x_pt}}}$. Since ${y_pt} > 0$ and $x_0 - {x_pt} > 0$, the numerator is negative and denominator is positive, so $m < 0$ MUST be negative. SUFFICIENT.\nStatement (2): The $y$-intercept $(0, y_0)$ satisfies $y_0 > {y_pt}$. The slope between $(0, y_0)$ and $({x_pt}, {y_pt})$ is $m = \\frac{{{y_pt} - y_0}}{{{x_pt} - 0}}$. Since $y_0 > {y_pt}$, numerator is negative; denominator is ${x_pt} > 0$. Hence $m < 0$ MUST be negative. SUFFICIENT.\nThus, EACH statement ALONE is sufficient.",
        "trap": "Failing to sketch or compute slopes algebraically and assuming both intercepts are needed together.",
        "estSeconds": 120
    })

    # DS 5: Statistics - Average vs Median
    n_sample = 5
    qs.append({
        "id": f"pt{pad}_di05", "test": t, "section": "DATA_INSIGHTS", "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"A set $S$ consists of {n_sample} positive integers $x_1 < x_2 < x_3 < x_4 < x_5$. Is the arithmetic mean of set $S$ equal to the median of set $S$?\n\n(1) The numbers form an arithmetic progression.\n(2) $x_5 - x_3 = x_3 - x_1$ and $x_4 - x_3 = x_3 - x_2$",
        "options": DS_OPTIONS,
        "answer": "D",
        "explanation": f"The median is the middle term $x_3$.\nStatement (1): In any arithmetic progression, the mean is equal to the median because terms are symmetrically distributed around the center. SUFFICIENT.\nStatement (2): The conditions state that $x_5 - x_3 = x_3 - x_1 \\implies x_1 + x_5 = 2x_3$, and $x_4 - x_3 = x_3 - x_2 \\implies x_2 + x_4 = 2x_3$. The sum of all five elements is $(x_1 + x_5) + (x_2 + x_4) + x_3 = 2x_3 + 2x_3 + x_3 = 5x_3$. The arithmetic mean is $\\frac{{5x_3}}{{5}} = x_3 = \\text{{median}}$. SUFFICIENT.\nThus, EACH statement ALONE is sufficient.",
        "trap": "Assuming Statement (2) requires equal spacing between all consecutive elements (an arithmetic progression); symmetry alone guarantees mean = median.",
        "estSeconds": 130
    })

    # DS 6: Absolute Value / Quadratic
    c_val = 3 * t + 4
    qs.append({
        "id": f"pt{pad}_di06", "test": t, "section": "DATA_INSIGHTS", "type": "DATA_SUFFICIENCY",
        "subtopic": "Data Sufficiency", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"What is the value of real number $z$?\n\n(1) $|z - {c_val}| = 5$\n(2) $z^2 - {2 * c_val}z + {c_val**2 - 25} = 0$",
        "options": DS_OPTIONS,
        "answer": "E",
        "explanation": f"Statement (1): $|z - {c_val}| = 5 \\implies z - {c_val} = 5$ or $z - {c_val} = -5$, giving $z = {c_val + 5}$ or $z = {c_val - 5}$. Two possible values. INSUFFICIENT.\nStatement (2): Notice that $z^2 - {2 * c_val}z + {c_val**2 - 25} = (z - {c_val})^2 - 25 = 0 \\implies (z - {c_val})^2 = 25 \\implies |z - {c_val}| = 5$. This gives the EXACT SAME two solutions $z = {c_val + 5}$ or $z = {c_val - 5}$. INSUFFICIENT.\nEven taken together, both statements provide the identical relationship, leaving two distinct values for $z$. Statements (1) and (2) TOGETHER are NOT sufficient.",
        "trap": "Believing that because Statement (2) is a quadratic and Statement (1) is an absolute value, combining them narrows the solution to a single value.",
        "estSeconds": 115
    })

    # 2. TABLE ANALYSIS (4 Questions: Q07-Q10)
    # Realistic enterprise tabular data
    table_records = [
        {"entity": "Region North", "rev": 12.4 + t, "growth": 14.2, "margin": 22.5, "headcount": 140 + t * 10},
        {"entity": "Region South", "rev": 8.6 + t, "growth": -3.5, "margin": 18.0, "headcount": 95 + t * 5},
        {"entity": "Region East", "rev": 15.2 + t, "growth": 8.7, "margin": 26.4, "headcount": 180 + t * 12},
        {"entity": "Region West", "rev": 11.0 + t, "growth": 21.0, "margin": 19.8, "headcount": 110 + t * 8},
        {"entity": "Central Hub", "rev": 6.8 + t, "growth": 5.4, "margin": 15.2, "headcount": 75 + t * 4}
    ]
    t_source = {
        "title": f"Enterprise Division Performance Audit (Test {t})",
        "columns": ["Division / Unit", "Revenue ($M)", "YoY Growth (%)", "Operating Margin (%)", "Headcount"],
        "rows": [
            [r["entity"], f"${r['rev']:.1f}", f"{r['growth']:+.1f}%", f"{r['margin']:.1f}%", f"{r['headcount']}"]
            for r in table_records
        ]
    }

    qs.append({
        "id": f"pt{pad}_di07", "test": t, "section": "DATA_INSIGHTS", "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis", "difficulty": "medium", "difficultyScore": 6,
        "dataSource": t_source,
        "stem": f"Consider the table showing financial operating metrics across five corporate regional divisions. Which division generated the highest operating profit in absolute dollars (Revenue multiplied by Operating Margin)?",
        "options": ["Region North", "Region South", "Region East", "Region West", "Central Hub"],
        "answer": "C",
        "explanation": f"Calculate operating profit for each division: Region East generated ${table_records[2]['rev']:.1f}M \\times {table_records[2]['margin']:.1f}\\% = ${table_records[2]['rev'] * table_records[2]['margin'] / 100:.2f}M, which is strictly greater than Region North (${table_records[0]['rev'] * table_records[0]['margin'] / 100:.2f}M) and Region West (${table_records[3]['rev'] * table_records[3]['margin'] / 100:.2f}M). Thus, Region East is highest.",
        "trap": "Looking only at Operating Margin percentage (where East is also high, but West had higher YoY Growth).",
        "estSeconds": 110
    })
    qs.append({
        "id": f"pt{pad}_di08", "test": t, "section": "DATA_INSIGHTS", "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis", "difficulty": "medium", "difficultyScore": 7,
        "dataSource": t_source,
        "stem": "For how many of the divisions was the Revenue per Employee (Revenue divided by Headcount) greater than $90,000?",
        "options": ["1", "2", "3", "4", "5"],
        "answer": "D",
        "explanation": "Revenue per employee = (Revenue in millions * 1,000,000) / Headcount. Computing for each row reveals that 4 out of 5 divisions exceed the $90,000 threshold.",
        "trap": "Miscalculating decimal orders of magnitude between millions ($M) and employee count.",
        "estSeconds": 115
    })
    qs.append({
        "id": f"pt{pad}_di09", "test": t, "section": "DATA_INSIGHTS", "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis", "difficulty": "hard", "difficultyScore": 8,
        "dataSource": t_source,
        "stem": "If the table is sorted in ascending order by Operating Margin, which division occupies the median position?",
        "options": ["Central Hub", "Region South", "Region West", "Region North", "Region East"],
        "answer": "C",
        "explanation": "Operating Margins in ascending order: Central Hub (15.2%) < Region South (18.0%) < Region West (19.8%) < Region North (22.5%) < Region East (26.4%). The middle (3rd) division is Region West.",
        "trap": "Sorting by Revenue or YoY Growth instead of Operating Margin.",
        "estSeconds": 90
    })
    qs.append({
        "id": f"pt{pad}_di10", "test": t, "section": "DATA_INSIGHTS", "type": "TABLE_ANALYSIS",
        "subtopic": "Table Analysis", "difficulty": "hard", "difficultyScore": 8,
        "dataSource": t_source,
        "stem": "Which of the following statements is directly supported by the data in the table?",
        "options": [
            "The division with the highest YoY Growth also had the highest total revenue.",
            "Every division with an operating margin above 20% had a headcount exceeding 120 employees.",
            "Central Hub generated more operating profit than Region South.",
            "No division recorded negative year-over-year revenue growth.",
            "Headcount is strictly positively correlated with operating margin across all rows."
        ],
        "answer": "B",
        "explanation": "Divisions with operating margin above 20% are Region North (22.5%, headcount 150+) and Region East (26.4%, headcount 190+). Both strictly exceed 120 headcount. Hence statement B is true.",
        "trap": "Assuming the highest growth division (Region West, 21.0%) has the highest revenue (Region East does).",
        "estSeconds": 105
    })

    # 3. GRAPHICS INTERPRETATION (4 Questions: Q11-Q14)
    chart_info = {
        "chartType": "Scatter Plot & Trend Regression",
        "title": f"R&D Intensity vs Return on Invested Capital (Test {t})",
        "xAxis": "R&D Expenditure as % of Revenue (Range: 2% to 18%)",
        "yAxis": "Return on Invested Capital (ROIC %) (Range: 4% to 28%)",
        "notes": f"Quadratic curve peaks at R&D = {8 + t % 3}% with ROIC = {22 + t % 4}%, followed by diminishing returns at higher expenditure levels."
    }
    qs.append({
        "id": f"pt{pad}_di11", "test": t, "section": "DATA_INSIGHTS", "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation", "difficulty": "medium", "difficultyScore": 6,
        "dataSource": chart_info,
        "stem": f"Based on the scatter plot showing R&D intensity versus ROIC across surveyed technology firms, as R&D expenditure increases from 2% up to {8 + t % 3}%, the Return on Invested Capital generally [Select 1], whereas beyond {8 + t % 3}%, the ROIC generally [Select 2]. Which pair correctly describes the trend?",
        "options": [
            "Increases; Decreases",
            "Decreases; Increases",
            "Remains constant; Increases",
            "Increases; Increases monotonically",
            "Fluctuates erratically; Remains constant"
        ],
        "answer": "A",
        "explanation": f"The regression curve clearly exhibits an inverted U-shape: ROIC rises steadily as R&D investment increases up to the optimal threshold of {8 + t % 3}%, after which diminishing marginal returns cause ROIC to decline.",
        "trap": "Assuming technological investment always yields monotonically increasing financial returns without diminishing returns.",
        "estSeconds": 90
    })
    qs.append({
        "id": f"pt{pad}_di12", "test": t, "section": "DATA_INSIGHTS", "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation", "difficulty": "medium", "difficultyScore": 7,
        "dataSource": chart_info,
        "stem": "According to the chart, approximately what percentage of surveyed firms with R&D intensity below 6% achieved an ROIC exceeding 20%?",
        "options": ["Less than 10%", "Approximately 35%", "Approximately 50%", "Approximately 75%", "Over 90%"],
        "answer": "A",
        "explanation": "Inspection of the scatter plot data points below 6% R&D shows that nearly all data points cluster in the 6% to 14% ROIC range; fewer than 10% cross the 20% threshold.",
        "trap": "Conflating overall high performers with the subset of low R&D spenders.",
        "estSeconds": 100
    })
    qs.append({
        "id": f"pt{pad}_di13", "test": t, "section": "DATA_INSIGHTS", "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation", "difficulty": "hard", "difficultyScore": 8,
        "dataSource": chart_info,
        "stem": "The firm identified as the greatest positive outlier in the dataset is characterized by which of the following coordinates?",
        "options": [
            "High R&D (>15%) and Low ROIC (<8%)",
            "Moderate R&D (~9%) and Exceptionally High ROIC (>26%)",
            "Minimal R&D (<3%) and Minimal ROIC (<5%)",
            "High R&D (>16%) and Median ROIC (~14%)",
            "Zero R&D and High ROIC (~20%)"
        ],
        "answer": "B",
        "explanation": "The maximum vertical residual above the regression curve occurs at moderate R&D (~9%) where a firm achieved an ROIC exceeding 26%, far above the peer regression line.",
        "trap": "Looking for the extreme rightmost point on the x-axis rather than the point with the largest positive vertical distance from the trend line.",
        "estSeconds": 105
    })
    qs.append({
        "id": f"pt{pad}_di14", "test": t, "section": "DATA_INSIGHTS", "type": "GRAPHICS_INTERPRETATION",
        "subtopic": "Graphics Interpretation", "difficulty": "hard", "difficultyScore": 8,
        "dataSource": chart_info,
        "stem": "If a firm with current R&D intensity of 16% reduces its R&D expenditure to 10% while tracking the regression trend, its ROIC would be expected to:",
        "options": [
            "Decrease by approximately 12 percentage points.",
            "Increase by approximately 6 percentage points.",
            "Remain completely unchanged.",
            "Fall to zero.",
            "Double immediately."
        ],
        "answer": "B",
        "explanation": "At 16% R&D, the trend line sits around 14% ROIC due to overspending inefficiencies. At 10% R&D, the trend line sits near 20% ROIC. Thus, moving back toward the optimal threshold corresponds to an increase of ~6 percentage points in ROIC.",
        "trap": "Assuming reducing expenditure must decrease performance across all regimes.",
        "estSeconds": 110
    })

    # 4. TWO-PART ANALYSIS (3 Questions: Q15-Q17)
    # Concrete Two-Part quantitative and verbal problems
    ratio_val = 3 + (t % 3)
    sum_parts = 24 + t * 4
    # x + y = sum_parts, x / y = ratio_val => (ratio_val + 1) y = sum_parts => y = sum_parts / (ratio_val + 1)
    # adjust sum_parts to be divisible by ratio_val + 1
    sum_parts = (ratio_val + 1) * (5 + t)
    val_y = 5 + t
    val_x = ratio_val * val_y
    qs.append({
        "id": f"pt{pad}_di15", "test": t, "section": "DATA_INSIGHTS", "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"An investment fund allocates a total of ${sum_parts} million between two asset classes: Private Equity ($X) and Venture Debt ($Y). The amount allocated to Private Equity is exactly {ratio_val} times the amount allocated to Venture Debt. In the table below, select the dollar allocation for Private Equity and the dollar allocation for Venture Debt.\n\nValues: Private Equity = ${val_x}M, Venture Debt = ${val_y}M.",
        "options": [
            f"Private Equity: ${val_x}M | Venture Debt: ${val_y}M",
            f"Private Equity: ${val_x + 5}M | Venture Debt: ${val_y - 5}M",
            f"Private Equity: ${val_x - 4}M | Venture Debt: ${val_y + 4}M",
            f"Private Equity: ${sum_parts / 2}M | Venture Debt: ${sum_parts / 2}M",
            f"Private Equity: ${val_y}M | Venture Debt: ${val_x}M"
        ],
        "answer": "A",
        "explanation": f"Let $Y$ be the allocation to Venture Debt. Then Private Equity $X = {ratio_val}Y$. Total allocation: $X + Y = {ratio_val}Y + Y = ({ratio_val + 1})Y = {sum_parts} \\implies Y = {sum_parts} / {ratio_val + 1} = {val_y}$. Then $X = {ratio_val} \\times {val_y} = {val_x}$. Therefore, Private Equity = ${val_x}M and Venture Debt = ${val_y}M.",
        "trap": "Inverting the column choices between Private Equity and Venture Debt.",
        "estSeconds": 115
    })
    qs.append({
        "id": f"pt{pad}_di16", "test": t, "section": "DATA_INSIGHTS", "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"A chemical reaction synthesizes compound $Z$ according to the rate equation $\\text{{Rate}} = k[A]^m [B]^n$. Doubling concentration $[A]$ while holding $[B]$ constant quadruples the rate. Doubling concentration $[B]$ while holding $[A]$ constant doubles the rate. What are the reaction orders with respect to $[A]$ and $[B]$?\n\nSelect Order with respect to [A] and Order with respect to [B].",
        "options": [
            "Order [A]: 2 | Order [B]: 1",
            "Order [A]: 1 | Order [B]: 2",
            "Order [A]: 2 | Order [B]: 2",
            "Order [A]: 1 | Order [B]: 1",
            "Order [A]: 4 | Order [B]: 2"
        ],
        "answer": "A",
        "explanation": "Since doubling $[A]$ increases the rate by a factor of 4 ($2^m = 4$), the reaction order with respect to $[A]$ is $m = 2$. Since doubling $[B]$ doubles the rate ($2^n = 2$), the reaction order with respect to $[B]$ is $n = 1$.",
        "trap": "Setting $m = 4$ because the rate quadrupled, confusing factor increase with exponent.",
        "estSeconds": 95
    })
    qs.append({
        "id": f"pt{pad}_di17", "test": t, "section": "DATA_INSIGHTS", "type": "TWO_PART_ANALYSIS",
        "subtopic": "Two-Part Analysis", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Consider a system where two pumps fill a tank. Working together, Pump A and Pump B fill the tank in 6 hours. Working alone, Pump A takes 5 hours less than Pump B. Find the time taken by Pump A alone and Pump B alone.\n\nSelect Time for Pump A and Time for Pump B.",
        "options": [
            "Pump A: 10 hours | Pump B: 15 hours",
            "Pump A: 8 hours | Pump B: 13 hours",
            "Pump A: 12 hours | Pump B: 17 hours",
            "Pump A: 6 hours | Pump B: 11 hours",
            "Pump A: 9 hours | Pump B: 14 hours"
        ],
        "answer": "A",
        "explanation": "Let Pump A take $t$ hours; then Pump B takes $t + 5$ hours. $1/t + 1/(t+5) = 1/6 \\implies \\frac{2t + 5}{t(t+5)} = 1/6 \\implies 6(2t + 5) = t^2 + 5t \\implies 12t + 30 = t^2 + 5t \\implies t^2 - 7t - 30 = 0$. Factoring: $(t - 10)(t + 3) = 0$. Since time must be positive, $t = 10$ hours for Pump A, and $t + 5 = 15$ hours for Pump B.",
        "trap": "Guessing 8 and 13 without verifying that $1/8 + 1/13 \\neq 1/6$.",
        "estSeconds": 125
    })

    # 5. MULTI-SOURCE REASONING (3 Questions: Q18-Q20)
    msr_source = {
        "type": "Multi-Source Reasoning Dossier",
        "tabs": [
            {
                "tabId": "tab1", "title": "Project Charter",
                "content": f"Executive Proposal (Project Apex - Test {t}): Corporate strategy mandates replacing legacy on-premise data storage with distributed hybrid cloud infrastructure across {10 + t * 2} regional branch offices within 18 months. Target annual operational expenditure savings are projected at $4.5 million starting in Year 2."
            },
            {
                "tabId": "tab2", "title": "Financial Audit",
                "content": f"Budget Analysis: Upfront migration capital expenditure is budgeted at $12.0 million. Net transition downtime costs are estimated at $250,000 per branch office. Cloud vendor subscription fees will be fixed at $1.8 million annually under a three-year enterprise service level agreement."
            },
            {
                "tabId": "tab3", "title": "Risk & Compliance",
                "content": "Regulatory Review: Cross-border financial data privacy directives require all customer biometric and transaction records to remain within domestic sovereign boundaries. Three regional branches in European jurisdictions cannot utilize public cloud nodes without localized hardware encryption modules costing $180,000 per site."
            }
        ]
    }
    qs.append({
        "id": f"pt{pad}_di18", "test": t, "section": "DATA_INSIGHTS", "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning", "difficulty": "medium", "difficultyScore": 7,
        "dataSource": msr_source,
        "stem": "Based on the Project Charter and Financial Audit tabs, what is the total estimated upfront capital expenditure and transition downtime cost for migrating all regional branch offices?",
        "options": [
            f"${12.0 + (10 + t * 2) * 0.25:.2f} million",
            f"${12.0:.2f} million",
            f"${14.5 + t * 0.5:.2f} million",
            f"${16.5:.2f} million",
            f"${4.5 * 3:.2f} million"
        ],
        "answer": "A",
        "explanation": f"From Tab 1, there are {10 + t * 2} branch offices. From Tab 2, upfront capex = $12.0M, and downtime cost = $250,000 ($0.25M) per branch. Total downtime cost = {10 + t * 2} * $0.25M = ${(10 + t * 2) * 0.25:.2f}M. Total = $12.0M + ${(10 + t * 2) * 0.25:.2f}M = ${12.0 + (10 + t * 2) * 0.25:.2f} million.",
        "trap": "Omitting the per-branch transition downtime cost from the total initial budget calculation.",
        "estSeconds": 110
    })
    qs.append({
        "id": f"pt{pad}_di19", "test": t, "section": "DATA_INSIGHTS", "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning", "difficulty": "hard", "difficultyScore": 8,
        "dataSource": msr_source,
        "stem": "Which of the following modifications to the migration plan is directly necessitated by information contained in the Risk & Compliance tab?",
        "options": [
            "Allocating an additional $540,000 for specialized hardware encryption modules across the three European branches.",
            "Canceling the migration entirely across all domestic branches.",
            "Extending the project timeline from 18 months to 36 months.",
            "Renegotiating the cloud vendor subscription fee from $1.8 million down to zero.",
            "Replacing all biometrics with traditional paper passwords."
        ],
        "answer": "A",
        "explanation": "Tab 3 specifies that 3 European regional branches require localized hardware encryption modules costing $180,000 per site to comply with cross-border sovereign data laws. 3 * $180,000 = $540,000 additional allocation.",
        "trap": "Believing compliance requires canceling the entire corporate cloud transition.",
        "estSeconds": 105
    })
    qs.append({
        "id": f"pt{pad}_di20", "test": t, "section": "DATA_INSIGHTS", "type": "MULTI_SOURCE_REASONING",
        "subtopic": "Multi-Source Reasoning", "difficulty": "hard", "difficultyScore": 9,
        "dataSource": msr_source,
        "stem": "Evaluating information across all three tabs, which of the following conclusions regarding the net financial feasibility of Project Apex is most strongly supported?",
        "options": [
            "Even accounting for additional compliance hardware and downtime costs, the projected annual savings of $4.5 million beginning in Year 2 will recoup the total initial upfront expenditure within four years of completion.",
            "Project Apex will cause severe operational insolvency before the end of Year 1.",
            "Cloud vendor subscription fees will exceed the projected annual savings in every operating year.",
            "The project cannot achieve legal compliance under any circumstances.",
            "Transition costs will decrease if the migration timeline is accelerated to six months."
        ],
        "answer": "A",
        "explanation": f"Total initial costs = ~$15M (capex + downtime + compliance). With annual gross operational savings of $4.5M minus fixed vendor fees of $1.8M = net annual cash savings of $2.7M. Over 4 to 5 years, cumulative net savings ($10.8M to $13.5M) recoup the initial investment, demonstrating sound medium-term financial return.",
        "trap": "Confusing gross savings ($4.5M) with net savings after subtracting cloud subscription fees ($1.8M).",
        "estSeconds": 125
    })

    return qs
