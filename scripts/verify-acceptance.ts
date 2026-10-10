import fs from 'fs';
import path from 'path';

console.log('Running GMAT Focus Simulator Acceptance Verification...');

let failures: string[] = [];

// 1. Check source files for unrendered raw $\theta or \$ without KaTeX
const filesToCheck = [
  'src/App.tsx',
  'src/components/exam/ExamScreen.tsx',
  'src/components/analytics/ScoreReportView.tsx',
  'src/components/library/PracticeTestLibrary.tsx',
  'src/components/modes/FullExamSetup.tsx',
  'src/components/modes/DrillSetup.tsx',
  'src/components/history/HistoryView.tsx',
];

for (const relPath of filesToCheck) {
  const fullPath = path.resolve(process.cwd(), relPath);
  if (!fs.existsSync(fullPath)) continue;
  const content = fs.readFileSync(fullPath, 'utf-8');

  // Check for raw unparsed <p>...$\theta...</p> or <span>...$\theta...</span>
  // (i.e. not inside MathText or MathRenderer content prop)
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('$\\theta') && !line.includes('content=') && !line.includes('MathText') && !line.includes('MathRenderer')) {
      failures.push(`${relPath}:${idx + 1} contains raw $\\theta without MathText`);
    }
    if (line.includes('exact Pearson VUE')) {
      failures.push(`${relPath}:${idx + 1} contains overclaim "exact Pearson VUE"`);
    }
    if (line.includes('Official GMAC Specifications')) {
      failures.push(`${relPath}:${idx + 1} contains overclaim "Official GMAC Specifications"`);
    }
  });
}

// 2. Verify percentile data file exists and contains 705
const percentilePath = path.resolve(process.cwd(), 'data/gmac_percentiles.json');
if (!fs.existsSync(percentilePath)) {
  failures.push('data/gmac_percentiles.json does not exist');
} else {
  const data = JSON.parse(fs.readFileSync(percentilePath, 'utf-8'));
  if (!data.totalPercentiles || !data.totalPercentiles['705']) {
    failures.push('data/gmac_percentiles.json missing 705 percentile entry');
  }
}

// 3. Verify Practice test library has hold-out validation tests
const storagePath = path.resolve(process.cwd(), 'src/lib/storage.ts');
const storageContent = fs.readFileSync(storagePath, 'utf-8');
if (!storageContent.includes('Focus Validation Mock #9 (Held-Out)')) {
  failures.push('storage.ts missing held-out validation mock #9');
}
if (!storageContent.includes('consecutiveCorrect: number')) {
  failures.push('storage.ts missing consecutiveCorrect requirement for Error Vault');
}

if (failures.length > 0) {
  console.error('Acceptance tests FAILED with errors:');
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
} else {
  console.log('Acceptance tests PASSED: All 7 criteria verified successfully.');
}
