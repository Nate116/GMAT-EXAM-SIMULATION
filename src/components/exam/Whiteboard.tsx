import React, { useRef, useState, useEffect } from 'react';
import { X, RotateCcw, Trash2, PenTool, Eraser, Move } from 'lucide-react';

interface WhiteboardProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Stroke {
  points: { x: number; y: number }[];
  color: string;
  width: number;
  isEraser: boolean;
}

export const Whiteboard: React.FC<WhiteboardProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#1e293b'); // dark navy
  const [lineWidth, setLineWidth] = useState(2.5);
  const [isEraser, setIsEraser] = useState(false);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<Stroke | null>(null);

  useEffect(() => {
    redrawCanvas();
  }, [strokes, currentStroke, isOpen]);

  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid lines faintly like authentic Pearson scratchpad
    ctx.strokeStyle = '#f1f5f9';
    ctx.lineWidth = 1;
    for (let x = 20; x < canvas.width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 20; y < canvas.height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    const allStrokes = currentStroke ? [...strokes, currentStroke] : strokes;

    allStrokes.forEach(stroke => {
      if (stroke.points.length < 2) return;
      ctx.beginPath();
      ctx.strokeStyle = stroke.isEraser ? '#ffffff' : stroke.color;
      ctx.lineWidth = stroke.isEraser ? stroke.width * 4 : stroke.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
      }
      ctx.stroke();
    });
  };

  if (!isOpen) return null;

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsDrawing(true);
    setCurrentStroke({
      points: [{ x, y }],
      color,
      width: lineWidth,
      isEraser,
    });
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !currentStroke) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCurrentStroke(prev => {
      if (!prev) return null;
      return {
        ...prev,
        points: [...prev.points, { x, y }],
      };
    });
  };

  const endDrawing = () => {
    if (isDrawing && currentStroke) {
      setStrokes(prev => [...prev, currentStroke]);
      setCurrentStroke(null);
    }
    setIsDrawing(false);
  };

  const handleUndo = () => {
    setStrokes(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    setStrokes([]);
    setCurrentStroke(null);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 w-[520px] bg-white rounded-xl shadow-2xl border-2 border-slate-300 overflow-hidden flex flex-col font-sans select-none">
      {/* Header */}
      <div className="bg-slate-800 text-white px-3 py-2 flex items-center justify-between text-xs font-semibold">
        <div className="flex items-center space-x-2">
          <PenTool size={14} className="text-amber-400" />
          <span>GMAT Exam Whiteboard / Scratchpad</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleUndo}
            title="Undo"
            className="p-1 hover:bg-slate-700 rounded text-slate-300 hover:text-white"
          >
            <RotateCcw size={14} />
          </button>
          <button
            onClick={handleClear}
            title="Clear All"
            className="p-1 hover:bg-red-800/80 rounded text-red-300 hover:text-white"
          >
            <Trash2 size={14} />
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-slate-100 px-3 py-1.5 flex items-center justify-between border-b border-slate-200 text-xs">
        {/* Tool modes */}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setIsEraser(false)}
            className={`px-2 py-1 rounded flex items-center space-x-1 ${!isEraser ? 'bg-blue-600 text-white font-medium' : 'text-slate-600 hover:bg-slate-200'}`}
          >
            <PenTool size={12} />
            <span>Pen</span>
          </button>
          <button
            onClick={() => setIsEraser(true)}
            className={`px-2 py-1 rounded flex items-center space-x-1 ${isEraser ? 'bg-blue-600 text-white font-medium' : 'text-slate-600 hover:bg-slate-200'}`}
          >
            <Eraser size={12} />
            <span>Eraser</span>
          </button>
        </div>

        {/* Colors */}
        {!isEraser && (
          <div className="flex items-center space-x-1.5">
            {[
              { label: 'Dark Navy', hex: '#1e293b' },
              { label: 'Blue', hex: '#2563eb' },
              { label: 'Red', hex: '#dc2626' },
              { label: 'Green', hex: '#16a34a' },
            ].map(c => (
              <button
                key={c.hex}
                onClick={() => setColor(c.hex)}
                className={`w-4 h-4 rounded-full border border-slate-300 transition ${color === c.hex ? 'ring-2 ring-offset-1 ring-blue-500 scale-110' : ''}`}
                style={{ backgroundColor: c.hex }}
                title={c.label}
              />
            ))}
          </div>
        )}

        {/* Thickness */}
        <div className="flex items-center space-x-1 text-slate-600">
          <span className="text-[11px]">Size:</span>
          {[1.5, 3, 5].map(w => (
            <button
              key={w}
              onClick={() => setLineWidth(w)}
              className={`px-1.5 py-0.5 rounded text-[11px] ${lineWidth === w ? 'bg-slate-300 font-bold text-slate-900' : 'hover:bg-slate-200'}`}
            >
              {w === 1.5 ? 'Thin' : w === 3 ? 'Med' : 'Thick'}
            </button>
          ))}
        </div>
      </div>

      {/* Canvas */}
      <div className="bg-white relative">
        <canvas
          ref={canvasRef}
          width={520}
          height={320}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={endDrawing}
          onMouseLeave={endDrawing}
          className="cursor-crosshair block"
        />
      </div>
    </div>
  );
};
