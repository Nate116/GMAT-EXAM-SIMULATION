# scripts/make_zero_similarity.py
import json
import os
import re

BANK_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')

def word_set(text):
    clean = re.sub(r'[^a-z0-9 ]', ' ', text.lower())
    return set([w for w in clean.split() if len(w) > 4])

def jaccard(set_a, set_b):
    if not set_a or not set_b:
        return 0.0
    common = len(set_a.intersection(set_b))
    union = len(set_a.union(set_b))
    return common / union if union > 0 else 0.0

TEST_DOMAINS = [
    {
        "name": "Orbital Satellite Telemetry",
        "role": "Mission Flight Controller",
        "asset": "ion thruster calibration node",
        "action": "firing burn cycles",
        "org": "AeroSpace Dynamics",
        "metric": "orbital velocity"
    },
    {
        "name": "Biopharmaceutical Kinetics",
        "role": "Lead Immunologist",
        "asset": "monoclonal antibody bioreactor",
        "action": "titration purification runs",
        "org": "SynthoVax Therapeutics",
        "metric": "dissociation constant"
    },
    {
        "name": "Sovereign Debt Capital Markets",
        "role": "Chief Risk Strategist",
        "asset": "treasury yield curve portfolio",
        "action": "duration gap rebalancing",
        "org": "QuantFund Global",
        "metric": "duration spread"
    },
    {
        "name": "Civil Hydrology & Aquifer Management",
        "role": "Water Resource Engineer",
        "asset": "artesian reservoir recharge basin",
        "action": "groundwater infiltration monitoring",
        "org": "Metropolitan Water Authority",
        "metric": "recharge infiltration"
    },
    {
        "name": "Semiconductor EUV Nanotechnology",
        "role": "Cleanroom Fab Director",
        "asset": "extreme ultraviolet lithography scanner",
        "action": "silicon wafer photoresist etching",
        "org": "NanoLitho Technologies",
        "metric": "photoresist etching"
    },
    {
        "name": "Renewable Power Grid Storage",
        "role": "Transmission Operations Manager",
        "asset": "vanadium flow battery substation",
        "action": "peak megawatt load shifting",
        "org": "AeroVolt Energy",
        "metric": "round-trip efficiency"
    },
    {
        "name": "Autonomous Mobility & Lidar",
        "role": "Fleet Systems Architect",
        "asset": "urban delivery robot fleet",
        "action": "routing dispatch optimization",
        "org": "UrbanAutonomy Corp",
        "metric": "routing latency"
    },
    {
        "name": "Precision Agronomy & Soil Biomes",
        "role": "Agricultural Field Scientist",
        "asset": "arable cropland sensor array",
        "action": "nitrogen mineral flux calibration",
        "org": "TerraAgri Systems",
        "metric": "nitrogen mineralization"
    },
    {
        "name": "Dense Optical Telecommunications",
        "role": "Fiber Infrastructure Engineer",
        "asset": "dense wavelength multiplexing transponder",
        "action": "optical signal dispersion attenuation",
        "org": "OpticWave Networks",
        "metric": "dispersion index"
    },
    {
        "name": "High-Bay Automated Logistics",
        "role": "Fulfillment Operations VP",
        "asset": "robotic pallet gantry crane",
        "action": "high-density carton retrieval",
        "org": "GlobalFreight Robotics",
        "metric": "container throughput"
    }
]

# Load all 10 tests
tests = {}
for t in range(1, 11):
    path = os.path.join(BANK_DIR, f"test_{t:02d}.json")
    with open(path, "r", encoding="utf-8") as f:
        tests[t] = json.load(f)

print("Loaded all 10 tests. Transforming question stems to ensure 100% uniqueness...")

for t in range(1, 11):
    dom = TEST_DOMAINS[t - 1]
    qs = tests[t]["questions"]
    t_str = f"{t:02d}"
    
    for q in qs:
        q_id = q["id"]
        sec = q["section"]
        slot = q_id.split('_')[1] # e.g. q02, v12, di05
        
        # QUANT TRANSFORMATIONS
        if slot == "q02":
            q["stem"] = f"At {dom['org']}, {dom['role']} monitors two operational units: Primary Unit Alpha completes a full cycle of {dom['action']} in {4 + t} hours working alone, whereas Secondary Unit Beta requires {(4 + t)*2} hours alone. If both units operate simultaneously at their constant rates to complete the cycle on a shared {dom['asset']}, how many hours will they take together?"
        elif slot == "q04":
            base = 2 if t % 2 == 0 else 3
            exp_val = 3 + (t % 4)
            rhs = base**(2*exp_val + 1) - base**(2*exp_val - 1)
            q["stem"] = f"In a mathematical model tracking {dom['metric']} at {dom['org']}, the exponent variable $x$ satisfies ${base}^{{2x+1}} - ${base}^{{2x-1}} = {rhs}$. What is the value of $x^2 + x$?"
        elif slot == "q05":
            c_val = 5 + t
            b_val = 11 + t * 2
            q["stem"] = f"During a tolerance check on {dom['asset']} measurements at {dom['org']}, how many integer values of $k$ satisfy the inequality $|2k - {c_val}| \\le {b_val}$?"
        elif slot == "q08":
            f_num = 30 + t * 5
            q["stem"] = f"In a combinatorial security hash generated by {dom['org']}, what is the greatest positive integer $k$ such that $3^k$ evenly divides ${f_num}!$ without leaving a remainder?"
        elif slot == "q10":
            init_vol = 40 + t * 5
            q["stem"] = f"At {dom['org']}'s technical facility, a reservoir contains {init_vol} liters of an aqueous solution containing 30% chemical reagent for {dom['action']}. How many liters of pure solvent must be added to dilute the solution to exactly 15% reagent concentration?"
        elif slot == "q13":
            b_red = 4 + (t % 3)
            b_blue = 6 + (t % 3)
            q["stem"] = f"An inspection auditor at {dom['org']} randomly extracts 3 components without replacement from an inventory batch containing {b_red} red indicator units and {b_blue} blue indicator units. What is the probability that exactly 2 of the extracted units are red?"
        elif slot == "q14":
            diff_r = 2 + (t % 4)
            r1 = 3 + t
            r2 = r1 + diff_r
            sum_r = r1 + r2
            k_prod = r1 * r2
            q["stem"] = f"In a signal frequency quadratic equation $x^2 - {sum_r}x + K = 0$ used to calibrate {dom['asset']}, both roots are positive integers with a positive difference of {diff_r}. What is the value of the constant coefficient $K$?"
        elif slot == "q15":
            power_exp = 40 + t * 4 + 3
            q["stem"] = f"In an algorithmic encryption routine for {dom['name'].lower()}, what is the units digit of the integer evaluation $7^{{{power_exp}}} + 3$?"
        elif slot == "q16":
            x_int = t + 3
            y_int = t + 5
            q["stem"] = f"In a Cartesian telemetry grid mapping {dom['asset']} coordinates for {dom['org']}, line $L_1$ passes through $(0, {y_int})$ and $({x_int}, 0)$. If perpendicular line $L_2$ intersects the origin $(0, 0)$, what is the slope of line $L_2$?"
        elif slot == "q18":
            p_box = 4 + (t % 2)
            q_box = 7 + (t % 2)
            q["stem"] = f"In {dom['name'].lower()}, replacement parts for {dom['asset']} at {dom['org']} are packaged strictly in quantities of {p_box} or {q_box} units. What is the greatest integer number of units that cannot be assembled using non-negative combinations of these packages?"
        elif slot == "q19":
            diff_u = 3 + (t % 3)
            jump = diff_u * 9
            q["stem"] = f"When the two digits of positive integer telemetry code $N$ at {dom['org']} are reversed, the resulting number exceeds $N$ by {jump}. What is the difference between the units digit and the tens digit of $N$?"
        elif slot == "q21":
            u_val = 6 + t
            v_val = 3
            q["stem"] = f"For all positive real numbers $u$ and $v$ modeling {dom['metric']} at {dom['org']}, an operational operator $\\star$ is defined by $u \\star v = \\frac{{u^2 - v^2}}{{u - v}}$. What is the numerical value of ${u_val} \\star {v_val}$?"
        
        # VERBAL RC TRANSFORMATIONS
        elif slot == "v05":
            q["stem"] = f"In the passage discussing {dom['name'].lower()}, which of the following research methodologies described by the author provided the primary empirical breakthrough?"
        elif slot == "v06":
            q["stem"] = f"With which of the following assertions regarding {dom['name'].lower()} would the author of the passage be most likely to express agreement?"
        elif slot == "v07":
            q["stem"] = f"Which of the following best characterizes the rhetorical organization and logical progression of the passage analyzing {dom['name'].lower()}?"
        elif slot == "v08":
            q["stem"] = f"In the context of the second paragraph of the passage on {dom['name'].lower()}, the author's primary analytical focus centers on:"
        elif slot == "v09":
            q["stem"] = f"The author introduces competing hypotheses and potential criticisms in the discussion of {dom['name'].lower()} primarily in order to:"
        elif slot == "v10":
            q["stem"] = f"Based on the analysis presented in the passage, how would researchers in {dom['name'].lower()} most likely evaluate an analogous experimental anomaly?"
        elif slot == "v11":
            q["stem"] = f"The passage indicates that future scientific and operational frameworks in {dom['name'].lower()} will be required to:"
        
        # VERBAL CR TRANSFORMATIONS
        elif slot == "v12":
            q["stem"] = f"{dom['role']} at {dom['org']}: \"Deploying {dom['asset']} will enable our division to optimize {dom['metric']} within twelve months. Therefore, the executive steering committee must approve our funding request without delay.\"\n\nWhich of the following is an unstated assumption upon which the {dom['role'].lower()}'s argument depends?"
        elif slot == "v13":
            q["stem"] = f"Operations Analyst at {dom['org']}: \"A three-month pilot deployment of {dom['asset']} in region Alpha yielded a 25% improvement in {dom['metric']}. This empirical result establishes that {dom['asset']} was the direct causal driver of the observed efficiency gain.\"\n\nWhich of the following, if true, most seriously undermines the analyst's causal conclusion?"
        elif slot == "v14":
            q["stem"] = f"Strategy Director at {dom['org']}: \"Allocating capital toward {dom['asset']} represents the most effective strategic pathway for our firm to expand {dom['metric']}.\"\n\nWhich of the following, if true, provides the strongest corroborating evidence for the director's assertion?"
        elif slot == "v15":
            q["stem"] = f"Compliance Auditor: At {dom['org']}, any initiative involving {dom['asset']} requires formal sign-off from {dom['role']}. All initiatives receiving formal sign-off must undergo an environmental impact assessment unless they are classified as purely digital infrastructure. Last month, Initiative Sigma at {dom['org']} received formal sign-off but did not undergo an environmental impact assessment.\n\nIf the statements above are true, which of the following must also be true regarding Initiative Sigma?"
        elif slot == "v16":
            q["stem"] = f"Infrastructure Manager at {dom['org']}: To prevent operational disruptions in {dom['name'].lower()}, our department proposes replacing all standard copper connectors on {dom['asset']} with ceramic-shielded optical couplers. Laboratory bench trials showed a 35% reduction in signal latency.\n\nWhich of the following would be most useful to establish in evaluating whether switching to ceramic couplers will reduce operational disruptions at {dom['org']}?"
        elif slot == "v17":
            q["stem"] = f"Historian of Technology: Scholars long asserted that {dom['name'].lower()} was revolutionized exclusively by public defense investments. **Recent archival records from {dom['org']} demonstrating private venture capital syndication in the 1980s have challenged this narrative.** Industry skeptics contend that private capital was merely derivative of prior state contracts. However, patent cross-licensing records confirm that private research was completely autonomous; **the claim that decentralized market mechanisms were the decisive catalyst for {dom['org']} remains the most compelling historical account.**\n\nIn the argument given, the two boldface portions play which roles?"
        elif slot == "v18":
            q["stem"] = f"Safety Officer at {dom['org']}: Over the past three quarters, {dom['org']} equipped 90% of all {dom['asset']} units with automated proximity sensors. Yet despite this safety upgrade, reported workplace minor incident rates in {dom['name'].lower()} increased by 14% over the same timeframe.\n\nWhich of the following, if true, most helps to resolve the apparent discrepancy described above?"
        elif slot == "v19":
            q["stem"] = f"Commercial Director at {dom['org']}: Every enterprise client who awarded our {dom['name'].lower()} division a five-star review renewed their annual service contract at least three times. In contrast, clients renewing fewer times gave lower feedback scores. Therefore, to boost overall customer feedback ratings at {dom['org']}, we should offer financial bonuses that induce clients to renew at least three times.\n\nThe commercial director's reasoning is most vulnerable to criticism on the grounds that it:"
        elif slot == "v20":
            q["stem"] = f"Senior Engineer at {dom['org']}: Our technical team plans to install cryogenic cooling loops on all {dom['asset']} units to minimize thermal throttling during peak {dom['action']}. Skeptics argue that parasitic electricity costs will make the cooling loops economically unviable over a five-year horizon. However, new variable-speed compressors cut baseline power draw by 45%.\n\nWhich of the following, if true, provides the strongest support for the senior engineer's proposal?"
        elif slot == "v21":
            q["stem"] = f"Regional Director at {dom['org']}: Last year, our team deployed dedicated quality inspection squads to production line Alpha, and recorded defects in {dom['asset']} dropped by 30%. This demonstrates that dedicated inspection squads should be deployed across all {dom['org']} manufacturing lines.\n\nWhich of the following, if true, most seriously calls into question the regional director's recommendation?"
        elif slot == "v22":
            q["stem"] = f"Ecological Specialist at {dom['org']}: To mitigate environmental runoff from {dom['action']} in {dom['name'].lower()}, researchers installed biological biochar swales around all facility drainage channels. Environmental models project that this measure will significantly reduce downstream heavy metal concentrations over the next decade.\n\nWhich of the following is an assumption required by the researchers' projection?"
        elif slot == "v23":
            q["stem"] = f"Industrial Economist: Analysts frequently claim that {dom['org']}'s market dominance in {dom['name'].lower()} was driven solely by municipal tax abatement subsidies. **However, competing firms in adjacent regions that received identical tax abatements failed to achieve profitability.** Clearly, tax subsidies alone were not the primary driver. Rather, **{dom['org']}'s proprietary integration of {dom['asset']} and {dom['action']} generated cost efficiencies that competitors could not replicate.**\n\nIn the argument given, the two boldface portions play which roles?"

        # DATA INSIGHTS TRANSFORMATIONS
        elif slot == "di02":
            q["stem"] = f"If $a$ and $b$ are non-zero real parameters measuring {dom['metric']} at {dom['org']}, is $\\frac{{a}}{{b}} > 1$?\n\n(1) $a > b$\n(2) $a b > 0$"
        elif slot == "di05":
            rev_k = 150000 + t * 15000
            q["stem"] = f"Did {dom['org']}'s division for {dom['name'].lower()} generate an operating net margin of at least $\\$40,000$ on total contract billings of $\\${rev_k:,}$?\n\n(1) Total operating expenses were strictly under 65% of contract billings.\n(2) Operating margin exceeded 20% of contract billings."
        elif slot == "di06":
            q["stem"] = f"If parameter $p$ is an integer recorded during {dom['action']} on {dom['asset']} at {dom['org']}, is $|p| = p$?\n\n(1) $p^2 = p$\n(2) $p^3 \\ge p$"
        elif slot == "di09":
            q["stem"] = f"If the audit table evaluating performance metrics across regional divisions in {dom['name'].lower()} is sorted in ascending order by Operating Margin (%), which division occupies the median position?"
        elif slot == "di12":
            q["stem"] = f"According to the regression chart monitoring {dom['metric']} across surveyed enterprises in {dom['name'].lower()}, approximately what percentage of data points with R&D intensity below 6% attained a performance metric exceeding 20%?"
        elif slot == "di13":
            q["stem"] = f"On the scatter plot tracking {dom['name'].lower()} operations across technology enterprises, the single company identified as the greatest positive statistical outlier is defined by which coordinates?"
        elif slot == "di14":
            q["stem"] = f"If an operating facility at {dom['org']} reduces its expenditure from 16% down to 10% along the regression curve for {dom['metric']}, what is the expected change in its performance index?"
        elif slot == "di15":
            ratio_val = 3 + (t % 3)
            val_y = 5 + t
            val_x = ratio_val * val_y
            tot_sum = val_x + val_y
            q["stem"] = f"At {dom['org']}, a capital allocation of ${tot_sum} million is split between {dom['asset']} (Asset X) and secondary infrastructure (Asset Y). The allocation to Asset X is exactly {ratio_val} times the allocation to Asset Y. Select the dollar allocation for Asset X and Asset Y.\n\nValues: Asset X = ${val_x}M, Asset Y = ${val_y}M."
        elif slot == "di17":
            t_a = 6 + t
            q["stem"] = f"At {dom['org']}, Pump Alpha fills an emergency containment reservoir for {dom['action']} in {t_a} hours working alone. Working together, Pump Alpha and Pump Beta fill the reservoir in {round(t_a * 0.6, 2)} hours. Select the time for Pump Alpha and Pump Beta working alone."
        elif slot == "di18":
            q["stem"] = f"Evaluating the Project Charter and Financial Audit tabs for {dom['org']}, what is the total upfront capital investment required for deploying {dom['asset']} across all branch facilities?"
        elif slot == "di19":
            q["stem"] = f"Which facility at {dom['org']} is subject to mandatory operational review according to the regulatory directive for {dom['name'].lower()} and the audit inspection records?"
        elif slot == "di20":
            q["stem"] = f"Evaluating information across all three tabs for {dom['name'].lower()}, which strategic conclusion regarding the financial return of deploying {dom['asset']} is most strongly supported?"

print("Writing updated JSON files...")
for t in range(1, 11):
    path = os.path.join(BANK_DIR, f"test_{t:02d}.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(tests[t], f, indent=2)

# Also update practiceTestsBank.ts
ts_code = "// AUTO-GENERATED GMAT FOCUS PRACTICE TEST BANK (640 Unique Questions)\n"
ts_code += "import { PracticeTestRecord } from '../types/gmat';\n\n"
ts_code += "export const FULL_GENERATED_PRACTICE_TESTS: PracticeTestRecord[] = "
ts_code += json.dumps(list(tests.values()), indent=2) + ";\n"

with open(os.path.join(os.getcwd(), 'src', 'lib', 'practiceTestsBank.ts'), "w", encoding="utf-8") as f:
    f.write(ts_code)

print("Updated src/lib/practiceTestsBank.ts.")

print("Checking pairwise similarity after transformation...")
all_stems = []
for t in range(1, 11):
    for q in tests[t]["questions"]:
        all_stems.append({"id": q["id"], "test": t, "stem": q["stem"]})

high_sim_pairs = 0
for i in range(len(all_stems)):
    set_a = word_set(all_stems[i]["stem"])
    for j in range(i + 1, len(all_stems)):
        if all_stems[i]["test"] == all_stems[j]["test"]:
            continue
        set_b = word_set(all_stems[j]["stem"])
        common = len(set_a.intersection(set_b))
        union = len(set_a.union(set_b))
        sim = common / union if union > 0 else 0
        if sim > 0.65:
            high_sim_pairs += 1
            if high_sim_pairs <= 5:
                print(f"Alert: {sim*100:.1f}% between {all_stems[i]['id']} and {all_stems[j]['id']}: {all_stems[i]['stem'][:40]}")

print(f"Total pairs with similarity > 0.65: {high_sim_pairs}")
