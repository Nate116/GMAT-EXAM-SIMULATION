# scripts/generate_authentic_bank.py
import json
import os
import sys
import re

OUTPUT_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')
os.makedirs(OUTPUT_DIR, exist_ok=True)

print("=" * 65)
print("GENERATING PRISTINE 640-QUESTION GMAT FOCUS BANK (10 FULL SIMULATIONS)")
print("=" * 65)

# Import our modular generators
from gen_quant import get_quant_for_test
from gen_verbal import get_verbal_for_test
from gen_di import get_di_for_test

# Let's inspect pairwise similarity and ensure 0 identical or high similarity questions!
