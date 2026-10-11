# scripts/generate_clean_bank.py
import json
import os
import re
import sys

OUTPUT_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')
os.makedirs(OUTPUT_DIR, exist_ok=True)

def word_set(text):
    clean = re.sub(r'[^a-z0-9 ]', ' ', text.lower())
    return set([w for w in clean.split() if len(w) > 4])

def jaccard(set_a, set_b):
    if not set_a or not set_b:
        return 0.0
    common = len(set_a.intersection(set_b))
    union = len(set_a.union(set_b))
    return common / union if union > 0 else 0.0

print("Testing similarity logic...")
