# scripts/generate_zero_sim_bank.py
import json
import os
import re
import math

OUTPUT_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 10 Tests, 64 Questions each (21 Quant, 23 Verbal, 20 DI = 640 questions total)
print("=" * 65)
print("GENERATING ZERO-SIMILARITY 640-QUESTION GMAT FOCUS BANK")
print("=" * 65)

# Contexts / Domains for the 10 tests
DOMAINS = [
    ("Orbital Mechanics", "satellite payload", "ion thruster"),
    ("Biopharmaceutical Kinetics", "monoclonal antibody", "dissociation constant"),
    ("Quantitative Capital Markets", "treasury yield curve", "duration hedge"),
    ("Civil Hydrology & Aquifers", "artesian reservoir", "recharge infiltration"),
    ("Semiconductor EUV Lithography", "silicon wafer fab", "photoresist etching"),
    ("Renewable Energy Storage", "grid inverter station", "round-trip efficiency"),
    ("Autonomous Urban Mobility", "lidar sensor cluster", "fleet routing latency"),
    ("Precision Agronomy & Soil", "arable cropland parcel", "nitrogen mineralization"),
    ("Dense Wavelength Telephony", "optical transponder node", "dispersion coefficient"),
    ("High-Bay Automated Logistics", "pallet crane gantry", "dynamic inventory pick")
]

# We will define distinct stem templates / contexts for each slot across all 10 tests
