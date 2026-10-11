import json
import os
import re

OUTPUT_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 10 Tests, 64 Questions each: 21 Quant, 23 Verbal, 20 Data Insights = 640 questions total.

QUANT_TOPICS = [
    ("Number Properties & Divisibility", "Primes & Factor Counts"),
    ("Word Problems & Rates/Work", "Combined Work & Outflow"),
    ("Percents, Ratios & Mixtures", "Compound Markups & Discounts"),
    ("Algebra & Exponents", "Exponential & Radical Equations"),
    ("Inequalities & Absolute Values", "Multi-interval Modulus Constraints"),
    ("Statistics & Standard Deviation", "Median & Range Extremes"),
    ("Probability & Combinatorics", "Restricted Committee Selections"),
    ("Number Properties & Divisibility", "Factorial Prime Divisibility"),
    ("Word Problems & Rates/Work", "Harmonic Mean & Round Trips"),
    ("Percents, Ratios & Mixtures", "Solution Dilution & Alligation"),
    ("Sequences & Series", "Arithmetic Series Summation"),
    ("Word Problems & Overlapping Sets", "Double Matrix & Inclusion-Exclusion"),
    ("Probability & Combinatorics", "Sequential Draws Without Replacement"),
    ("Algebra & Quadratics", "Vieta Formulas & Root Difference"),
    ("Number Properties & Divisibility", "Modular Cyclicity & Units Digits"),
    ("Coordinate & Analytical Geometry", "Perpendicular Line Slopes"),
    ("Statistics & Standard Deviation", "Linear Scaling of Variance"),
    ("Word Problems & Rates/Work", "Frobenius Coin Optimization"),
    ("Number Properties & Divisibility", "Reversible Digits & Place Value"),
    ("Percents, Ratios & Mixtures", "Multi-period Compound Growth"),
    ("Algebra & Exponents", "Custom Binary Operations")
]

# Write python generator with 10 distinct sets of questions
print("Writing complete question generator...")
