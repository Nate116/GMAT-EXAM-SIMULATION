import React, { useState } from 'react';
import { X, Minus, RotateCcw } from 'lucide-react';

interface CalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState<number | null>(null);
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [resetNext, setResetNext] = useState(false);

  if (!isOpen) return null;

  const handleDigit = (d: string) => {
    if (display === '0' || resetNext) {
      setDisplay(d);
      setResetNext(false);
    } else {
      if (display.length < 14) {
        setDisplay(display + d);
      }
    }
  };

  const handleDecimal = () => {
    if (resetNext) {
      setDisplay('0.');
      setResetNext(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOp = (op: string) => {
    const current = parseFloat(display);
    if (prevValue !== null && operation && !resetNext) {
      const res = compute(prevValue, current, operation);
      setDisplay(String(res));
      setPrevValue(res);
    } else {
      setPrevValue(current);
    }
    setOperation(op);
    setResetNext(true);
  };

  const compute = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b !== 0 ? a / b : 0;
      default: return b;
    }
  };

  const handleEqual = () => {
    if (prevValue !== null && operation) {
      const current = parseFloat(display);
      const res = compute(prevValue, current, operation);
      setDisplay(String(Number(res.toFixed(8))));
      setPrevValue(null);
      setOperation(null);
      setResetNext(true);
    }
  };

  const handleSqrt = () => {
    const val = parseFloat(display);
    if (val >= 0) {
      setDisplay(String(Number(Math.sqrt(val).toFixed(8))));
      setResetNext(true);
    }
  };

  const handleReciprocal = () => {
    const val = parseFloat(display);
    if (val !== 0) {
      setDisplay(String(Number((1 / val).toFixed(8))));
      setResetNext(true);
    }
  };

  const handlePercent = () => {
    const val = parseFloat(display);
    setDisplay(String(val / 100));
    setResetNext(true);
  };

  const handleSign = () => {
    setDisplay(String(-parseFloat(display)));
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperation(null);
    setResetNext(false);
  };

  const handleMemAdd = () => {
    const val = parseFloat(display);
    setMemory((memory || 0) + val);
    setResetNext(true);
  };

  const handleMemRecall = () => {
    if (memory !== null) {
      setDisplay(String(memory));
      setResetNext(true);
    }
  };

  const handleMemClear = () => {
    setMemory(null);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-72 bg-slate-900 text-white rounded-lg shadow-2xl border border-slate-700 overflow-hidden font-mono select-none">
      {/* Title bar */}
      <div className="bg-slate-800 px-3 py-2 flex items-center justify-between border-b border-slate-700 text-xs font-sans font-semibold text-slate-300">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
          <span>GMAT Data Insights Calculator</span>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white transition">
          <X size={15} />
        </button>
      </div>

      {/* Screen */}
      <div className="p-3 bg-slate-950 text-right">
        <div className="h-4 text-[10px] text-slate-500 font-sans">
          {memory !== null ? 'M ' : ''}
          {prevValue !== null && operation ? `${prevValue} ${operation}` : ''}
        </div>
        <div className="text-2xl font-bold tracking-tight text-white overflow-hidden text-ellipsis">
          {display}
        </div>
      </div>

      {/* Keypad */}
      <div className="p-2.5 bg-slate-900 grid grid-cols-4 gap-1.5 text-sm">
        {/* Memory Row */}
        <button onClick={handleMemClear} className="py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded text-amber-400">MC</button>
        <button onClick={handleMemRecall} className="py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded text-amber-400">MR</button>
        <button onClick={handleMemAdd} className="py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded text-amber-400">M+</button>
        <button onClick={handleClear} className="py-1.5 bg-red-950/60 hover:bg-red-900/60 text-xs font-bold rounded text-red-400">C</button>

        {/* Function Row */}
        <button onClick={handleSqrt} className="py-2 bg-slate-800 hover:bg-slate-700 text-xs rounded">√</button>
        <button onClick={handleReciprocal} className="py-2 bg-slate-800 hover:bg-slate-700 text-xs rounded">1/x</button>
        <button onClick={handlePercent} className="py-2 bg-slate-800 hover:bg-slate-700 text-xs rounded">%</button>
        <button onClick={() => handleOp('÷')} className="py-2 bg-blue-900/70 hover:bg-blue-800 text-base font-bold rounded text-blue-300">÷</button>

        {/* 7 8 9 * */}
        <button onClick={() => handleDigit('7')} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded font-semibold">7</button>
        <button onClick={() => handleDigit('8')} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded font-semibold">8</button>
        <button onClick={() => handleDigit('9')} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded font-semibold">9</button>
        <button onClick={() => handleOp('×')} className="py-2 bg-blue-900/70 hover:bg-blue-800 text-base font-bold rounded text-blue-300">×</button>

        {/* 4 5 6 - */}
        <button onClick={() => handleDigit('4')} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded font-semibold">4</button>
        <button onClick={() => handleDigit('5')} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded font-semibold">5</button>
        <button onClick={() => handleDigit('6')} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded font-semibold">6</button>
        <button onClick={() => handleOp('-')} className="py-2 bg-blue-900/70 hover:bg-blue-800 text-base font-bold rounded text-blue-300">-</button>

        {/* 1 2 3 + */}
        <button onClick={() => handleDigit('1')} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded font-semibold">1</button>
        <button onClick={() => handleDigit('2')} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded font-semibold">2</button>
        <button onClick={() => handleDigit('3')} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded font-semibold">3</button>
        <button onClick={() => handleOp('+')} className="py-2 bg-blue-900/70 hover:bg-blue-800 text-base font-bold rounded text-blue-300">+</button>

        {/* +/- 0 . = */}
        <button onClick={handleSign} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded text-xs">±</button>
        <button onClick={() => handleDigit('0')} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded font-semibold">0</button>
        <button onClick={handleDecimal} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded font-semibold">.</button>
        <button onClick={handleEqual} className="py-2 bg-blue-600 hover:bg-blue-500 font-bold rounded text-white shadow">=</button>
      </div>
    </div>
  );
};
