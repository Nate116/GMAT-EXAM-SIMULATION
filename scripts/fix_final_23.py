# scripts/fix_final_23.py
import json
import os

BANK_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')

tests = {}
for t in range(1, 11):
    with open(os.path.join(BANK_DIR, f"test_{t:02d}.json"), "r", encoding="utf-8") as f:
        tests[t] = json.load(f)

# Bespoke stems for Q14 (Quadratics) across all 10 tests
Q14_BESPOKE = [
    "In spacecraft orbital velocity equations, roots of the quadratic $x^2 - 14x + K = 0$ are both positive integers with an absolute difference of 2. What is the value of constant $K$?",
    "A biochemical receptor dissociation quadratic $x^2 - 17x + K = 0$ has two positive integer roots differing by 3. What is the value of the coefficient $K$?",
    "In bond portfolio duration matching, the quadratic relationship $x^2 - 18x + K = 0$ yields two positive integer roots with a difference of 4. What is the value of $K$?",
    "An artesian aquifer infiltration equation $x^2 - 15x + K = 0$ has two integer roots whose difference is 5. What is the numerical value of $K$?",
    "A semiconductor photolithography beam profile quadratic $x^2 - 20x + K = 0$ possesses two positive integer roots differing by 2. What is the value of $K$?",
    "A battery discharge curve modeled by quadratic $x^2 - 21x + K = 0$ has two positive integer roots with an absolute difference of 3. What is the value of constant $K$?",
    "An autonomous robot braking distance quadratic $x^2 - 22x + K = 0$ has two integer roots differing by 4. What is the value of $K$?",
    "In soil nitrogen mineralization modeling, quadratic $x^2 - 19x + K = 0$ has two positive integer roots with a difference of 5. What is the value of $K$?",
    "An optical wave propagation quadratic $x^2 - 24x + K = 0$ yields two positive integer roots differing by 2. What is the value of $K$?",
    "In automated gantry logistics velocity profiles, quadratic $x^2 - 25x + K = 0$ has two integer roots with an absolute difference of 3. What is the value of constant $K$?"
]

# Bespoke stems for V07, V08, V09 in tests 2, 5, 10
V07_BESPOKE = {
    2: "Which of the following best outlines the structural progression of the passage evaluating high-altitude avian epigenetics?",
    5: "How does the author systematically organize the scientific argument concerning Archaean atmospheric haze feedbacks?",
    10: "Which of the following best summarizes the overarching rhetorical structure of the passage on the gut-brain axis?"
}

V08_BESPOKE = {
    2: "In the second paragraph of the avian epigenetics text, the author focuses specifically on the persistence of:",
    5: "The second paragraph of the text on early planetary climate primarily concentrates on the self-limiting effect of:",
    10: "In paragraph two of the neuro-immune discussion, the author centers attention primarily on the role of:"
}

V09_BESPOKE = {
    2: "The author references traditional neo-Darwinian critics of epigenetic marks in order to:",
    5: "The author cites general circulation models predicting runaway greenhouse warming primarily to:",
    10: "The author mentions classical vagus nerve reflex loops primarily in order to:"
}

# Bespoke stems for V13 in tests 1 and 6
V13_BESPOKE = {
    1: "Flight Dynamics Lead at AeroSpace Dynamics: 'Our three-month trial of ion thruster units in orbital sector Alpha resulted in a 25% increase in velocity efficiency. This proves that ion thrusters directly generated the observed efficiency gains.' Which of the following, if true, most seriously undermines the lead's claim?",
    6: "Grid Operations Analyst at AeroVolt Energy: 'A pilot deployment of vanadium battery storage in substation Alpha yielded a 25% improvement in round-trip efficiency. This confirms that vanadium batteries were the sole cause of the improvement.' Which of the following, if true, most seriously weakens the analyst's claim?"
}

# Bespoke stems for V15 in tests 1, 2, 7
V15_BESPOKE = {
    1: "Launch Safety Inspector: At AeroSpace Dynamics, any modification to satellite payload systems requires formal approval from the Mission Flight Controller. Every project receiving formal approval must undergo an orbital debris assessment unless it involves purely software simulation code. Last month, Project Vega received formal approval but did not undergo an orbital debris assessment. If the statements are true, which must also be true?",
    2: "Clinical Ethics Officer: At SynthoVax Therapeutics, all preclinical protocols involving monoclonal antibodies must be authorized by the Lead Immunologist. Any protocol authorized must undergo a biohazard containment review unless it consists entirely of computational data modeling. Protocol Beta was authorized but did not undergo a containment review. If true, which must be true?",
    7: "Transit Safety Auditor: At UrbanAutonomy Corp, all route expansions for autonomous delivery fleets require written authorization from the Fleet Systems Architect. Every authorized route expansion must undergo a pedestrian safety inspection unless it operates strictly inside private indoor industrial complexes. Expansion Delta was authorized but did not receive a pedestrian safety inspection. If true, which must be true?"
}

# Bespoke stem for DI09 in tests 1 and 6
DI09_BESPOKE = {
    1: "If the regional aerospace flight operations audit table is sorted in ascending order by Operating Margin (%), which testing facility occupies the median position?",
    6: "If the provincial energy storage performance dataset is sorted from lowest to highest by Operating Margin (%), which power substation occupies the median rank?"
}

for t in range(1, 11):
    qs = tests[t]["questions"]
    for q in qs:
        slot = q["id"].split('_')[1]
        if slot == "q14":
            q["stem"] = Q14_BESPOKE[t - 1]
        elif slot == "v07" and t in V07_BESPOKE:
            q["stem"] = V07_BESPOKE[t]
        elif slot == "v08" and t in V08_BESPOKE:
            q["stem"] = V08_BESPOKE[t]
        elif slot == "v09" and t in V09_BESPOKE:
            q["stem"] = V09_BESPOKE[t]
        elif slot == "v13" and t in V13_BESPOKE:
            q["stem"] = V13_BESPOKE[t]
        elif slot == "v15" and t in V15_BESPOKE:
            q["stem"] = V15_BESPOKE[t]
        elif slot == "di09" and t in DI09_BESPOKE:
            q["stem"] = DI09_BESPOKE[t]

for t in range(1, 11):
    with open(os.path.join(BANK_DIR, f"test_{t:02d}.json"), "w", encoding="utf-8") as f:
        json.dump(tests[t], f, indent=2)

# Update practiceTestsBank.ts
ts_code = "// AUTO-GENERATED GMAT FOCUS PRACTICE TEST BANK (640 Unique Questions)\n"
ts_code += "import { PracticeTestRecord } from '../types/gmat';\n\n"
ts_code += "export const FULL_GENERATED_PRACTICE_TESTS: PracticeTestRecord[] = "
ts_code += json.dumps(list(tests.values()), indent=2) + ";\n"

with open(os.path.join(os.getcwd(), 'src', 'lib', 'practiceTestsBank.ts'), "w", encoding="utf-8") as f:
    f.write(ts_code)

print("Applied final bespoke stem updates. Ready for validation.")
