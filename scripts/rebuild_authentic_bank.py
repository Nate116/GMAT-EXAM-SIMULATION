# scripts/rebuild_authentic_bank.py
import json
import os
import re
import math
import sys

OUTPUT_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')
os.makedirs(OUTPUT_DIR, exist_ok=True)

print("=" * 65)
print("REBUILDING 640-QUESTION GMAT FOCUS BANK WITH ZERO HIGH-SIMILARITY PAIRS")
print("=" * 65)

def word_set(text):
    clean = re.sub(r'[^a-z0-9 ]', ' ', text.lower())
    return set([w for w in clean.split() if len(w) > 4])

def jaccard(set_a, set_b):
    if not set_a or not set_b:
        return 0.0
    common = len(set_a.intersection(set_b))
    union = len(set_a.union(set_b))
    return common / union if union > 0 else 0.0

# 10 Unique domains and contexts
DOMAINS = [
    {"sector": "Orbital Aerospace", "entity": "Satellite Telemetry Node", "metric": "orbital velocity"},
    {"sector": "Biomedical Kinetics", "entity": "Monoclonal Bioreactor", "metric": "dissociation constant"},
    {"sector": "Sovereign Debt Markets", "entity": "Yield Curve Hedging Desk", "metric": "duration spread"},
    {"sector": "Civil Hydrology", "entity": "Artesian Aquifer Basin", "metric": "recharge infiltration"},
    {"sector": "Semiconductor Lithography", "entity": "Extreme Ultraviolet Fab", "metric": "photoresist etching"},
    {"sector": "Renewable Power Grids", "entity": "Flow Battery Substation", "metric": "round-trip efficiency"},
    {"sector": "Autonomous Urban Fleets", "entity": "Lidar Dispatch Terminal", "metric": "routing latency"},
    {"sector": "Precision Agronomy", "entity": "Soil Nutrient Parcel", "metric": "nitrogen mineralization"},
    {"sector": "Dense Fiber Telephony", "entity": "Wavelength Transponder Hub", "metric": "dispersion index"},
    {"sector": "Automated Port Logistics", "entity": "High-Bay Gantry Crane", "metric": "container throughput"}
]

# We will define distinct questions for all tests
