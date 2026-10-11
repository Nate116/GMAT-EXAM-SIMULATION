# scripts/fix_all_duplicates.py
import json
import os
import re

BANK_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')

# Let's inspect all 10 tests and eliminate any shared templates or stems.
print("Auditing and customizing all 640 questions across 10 practice tests...")
