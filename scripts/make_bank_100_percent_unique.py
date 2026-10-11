# scripts/make_bank_100_percent_unique.py
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

# Load all 10 tests
tests_data = {}
for t in range(1, 11):
    path = os.path.join(BANK_DIR, f"test_{t:02d}.json")
    with open(path, "r", encoding="utf-8") as f:
        tests_data[t] = json.load(f)

print("Loaded all 10 practice tests.")
