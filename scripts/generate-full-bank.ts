import fs from 'fs';
import path from 'path';

export interface GMATTestQuestion {
  id: string;
  test: number;
  section: 'QUANT' | 'VERBAL' | 'DATA_INSIGHTS';
  type: string;
  subtopic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  difficultyScore: number;
  stem: string;
  passage?: string;
  dataSource?: any;
  options: string[];
  answer: string;
  explanation: string;
  trap: string;
  estSeconds: number;
}

// Write helper
const OUTPUT_DIR = path.resolve(process.cwd(), 'data/practice_tests');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('Generating complete, original 640-question bank across 10 tests...');
