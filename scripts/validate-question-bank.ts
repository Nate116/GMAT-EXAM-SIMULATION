import fs from 'fs';
import path from 'path';

const BANK_DIR = path.resolve(process.cwd(), 'data/practice_tests');

console.log('============================================================');
console.log('GMAT Focus Edition 640-Question Bank Validation Script');
console.log('============================================================\n');

const masterIndexPath = path.join(BANK_DIR, 'index.json');
if (!fs.existsSync(masterIndexPath)) {
  console.error(`FATAL: Master index not found at ${masterIndexPath}`);
  process.exit(1);
}

const masterIndex = JSON.parse(fs.readFileSync(masterIndexPath, 'utf-8'));
console.log(`Master Index Version: ${masterIndex.version}`);
console.log(`Reported Total Tests: ${masterIndex.totalTests}`);
console.log(`Reported Total Questions: ${masterIndex.totalQuestions}\n`);

let totalValidated = 0;
const seenIds = new Set<string>();
const allStems: { id: string; test: number; stem: string }[] = [];

for (let t = 1; t <= 10; t++) {
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  const tStr = pad(t);
  const testFile = path.join(BANK_DIR, `test_${tStr}.json`);

  if (!fs.existsSync(testFile)) {
    console.error(`FATAL: Missing test file ${testFile}`);
    process.exit(1);
  }

  const testData = JSON.parse(fs.readFileSync(testFile, 'utf-8'));
  const questions = testData.questions || [];

  const quant = questions.filter((q: any) => q.section === 'QUANT');
  const verbal = questions.filter((q: any) => q.section === 'VERBAL');
  const di = questions.filter((q: any) => q.section === 'DATA_INSIGHTS');

  console.log(`Test #${t} (${testData.title}):`);
  console.log(`  - Quantitative:   ${quant.length} questions (Expected: 21)`);
  console.log(`  - Verbal:         ${verbal.length} questions (Expected: 23)`);
  console.log(`  - Data Insights:  ${di.length} questions (Expected: 20)`);
  console.log(`  - Total:          ${questions.length} questions (Expected: 64)`);

  if (quant.length !== 21 || verbal.length !== 23 || di.length !== 20 || questions.length !== 64) {
    console.error(`FATAL: Test #${t} does not conform to the GMAT Focus 64-question blueprint!`);
    process.exit(1);
  }

  for (const q of questions) {
    if (seenIds.has(q.id)) {
      console.error(`FATAL: Duplicate Question ID detected: ${q.id}`);
      process.exit(1);
    }
    seenIds.add(q.id);
    totalValidated++;
    allStems.push({ id: q.id, test: t, stem: q.stem });

    // Validate completeness
    if (!q.stem || q.stem.trim().length < 10) {
      console.error(`FATAL: Invalid or missing stem on question ${q.id}`);
      process.exit(1);
    }
    if (!q.options || q.options.length < 2) {
      console.error(`FATAL: Invalid options array on question ${q.id}`);
      process.exit(1);
    }
    if (!q.answer) {
      console.error(`FATAL: Missing answer key on question ${q.id}`);
      process.exit(1);
    }
    if (!q.explanation || q.explanation.trim().length < 10) {
      console.error(`FATAL: Missing step-by-step explanation on question ${q.id}`);
      process.exit(1);
    }
    if (!q.trap || q.trap.trim().length < 5) {
      console.error(`FATAL: Missing trap analysis on question ${q.id}`);
      process.exit(1);
    }
  }
}

console.log(`\n✓ All 10 tests structurally validated.`);
console.log(`✓ Total questions validated: ${totalValidated} / 640.`);
console.log(`✓ Unique IDs: ${seenIds.size} / 640 (0 duplicates).\n`);

// Deduplication similarity check
console.log('Running normalized n-gram text similarity cross-check across all 640 questions...');
function wordSet(text: string): Set<string> {
  const clean = text.toLowerCase().replace(/[^a-z0-9 ]/g, ' ');
  return new Set(clean.split(/\s+/).filter(w => w.length > 4));
}

let nearDuplicateCount = 0;
for (let i = 0; i < allStems.length; i++) {
  const setA = wordSet(allStems[i].stem);
  for (let j = i + 1; j < allStems.length; j++) {
    if (allStems[i].test === allStems[j].test) continue;
    const setB = wordSet(allStems[j].stem);
    let common = 0;
    setA.forEach(w => {
      if (setB.has(w)) common++;
    });
    const union = new Set([...setA, ...setB]).size;
    const sim = union > 0 ? common / union : 0;
    if (sim > 0.65) {
      console.error(`FATAL: High similarity (${(sim * 100).toFixed(1)}%) detected between ${allStems[i].id} and ${allStems[j].id}`);
      nearDuplicateCount++;
    }
  }
}

if (nearDuplicateCount > 0) {
  console.error(`FATAL: Validation failed with ${nearDuplicateCount} near-duplicate question pairs!`);
  process.exit(1);
}

console.log(`✓ Similarity check complete: 0 duplicates or near-duplicates found across all 640 questions.`);
console.log(`============================================================`);
console.log('VALIDATION RESULT: SUCCESS (100% GMAT Focus Compliant)');
console.log('============================================================\n');

