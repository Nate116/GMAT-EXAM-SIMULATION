import json
import os
import re

BANK_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')

def word_set(text):
    clean = re.sub(r'[^a-z0-9 ]', ' ', text.lower())
    return set([w for w in clean.split() if len(w) > 4])

all_stems = []
for t in range(1, 11):
    path = os.path.join(BANK_DIR, f"test_{t:02d}.json")
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
        for q in data["questions"]:
            all_stems.append({"id": q["id"], "test": t, "stem": q["stem"], "q": q})

pairs = []
for i in range(len(all_stems)):
    set_a = word_set(all_stems[i]["stem"])
    for j in range(i + 1, len(all_stems)):
        if all_stems[i]["test"] == all_stems[j]["test"]:
            continue
        set_b = word_set(all_stems[j]["stem"])
        common = len(set_a.intersection(set_b))
        union = len(set_a.union(set_b))
        sim = common / union if union > 0 else 0
        if sim > 0.65:
            pairs.append((all_stems[i]["id"], all_stems[j]["id"], sim, all_stems[i]["stem"][:50]))

print(f"Total pairs with similarity > 0.65: {len(pairs)}")
# Group by question slot
slots = {}
for id_a, id_b, sim, stem in pairs:
    slot_a = id_a[5:]
    slot_b = id_b[5:]
    key = f"{slot_a}-{slot_b}"
    slots[key] = slots.get(key, 0) + 1

for k, count in sorted(slots.items(), key=lambda x: -x[1])[:25]:
    print(f"Slot pair {k}: {count} pairs")
