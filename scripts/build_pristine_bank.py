# scripts/build_pristine_bank.py
import json
import os
import re
import sys
import math

OUTPUT_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')
os.makedirs(OUTPUT_DIR, exist_ok=True)

print("=" * 65)
print("BUILDING PRISTINE 640-QUESTION GMAT FOCUS BANK WITH ZERO NEAR-DUPLICATES")
print("=" * 65)

# Import our builders
from bank_quant import get_quant_questions
