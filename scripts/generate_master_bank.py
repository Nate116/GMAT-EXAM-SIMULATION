import json
import os
import re

OUTPUT_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')
os.makedirs(OUTPUT_DIR, exist_ok=True)

print("Writing high-fidelity 640-question GMAT Focus Edition question bank...")

# Let's verify and build the generator module
