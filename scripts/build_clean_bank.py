import json
import os
import math
import re

OUTPUT_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 10 Tests, 64 Questions each (21 Quant, 23 Verbal, 20 DI = 640 questions total)
print("Generating 640 completely unique, zero-duplicate GMAT Focus questions...")
