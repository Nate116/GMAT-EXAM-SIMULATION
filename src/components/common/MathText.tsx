import React from 'react';
import katex from 'katex';

interface MathTextProps {
  content: string | number | null | undefined;
  className?: string;
  asBlock?: boolean;
}

export const MathText: React.FC<MathTextProps> = ({ content, className = '', asBlock = false }) => {
  if (content === null || content === undefined) return null;
  const str = String(content);
  if (!str.trim()) return null;

  // Split by $$...$$, $...$, \[...\], and \(...\)
  const parts: React.ReactNode[] = [];
  const regex = /(\$\$[\s\S]+?\$\$|\$[^\$]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\))/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(str)) !== null) {
    // Non-math text before match
    if (match.index > lastIndex) {
      const textChunk = str.substring(lastIndex, match.index);
      parts.push(<span key={`text-${lastIndex}`}>{textChunk}</span>);
    }

    const token = match[0];
    let isBlock = false;
    let mathExpr = '';

    if (token.startsWith('$$') && token.endsWith('$$')) {
      isBlock = true;
      mathExpr = token.slice(2, -2).trim();
    } else if (token.startsWith('$') && token.endsWith('$')) {
      isBlock = false;
      mathExpr = token.slice(1, -1).trim();
    } else if (token.startsWith('\\[') && token.endsWith('\\]')) {
      isBlock = true;
      mathExpr = token.slice(2, -2).trim();
    } else if (token.startsWith('\\(') && token.endsWith('\\)')) {
      isBlock = false;
      mathExpr = token.slice(2, -2).trim();
    } else {
      mathExpr = token;
    }

    try {
      const renderedHtml = katex.renderToString(mathExpr, {
        displayMode: isBlock || asBlock,
        throwOnError: false,
        strict: false,
      });

      parts.push(
        <span
          key={`math-${match.index}`}
          dangerouslySetInnerHTML={{ __html: renderedHtml }}
          className={isBlock ? 'block my-1.5 overflow-x-auto text-center' : 'inline-block px-0.5'}
        />
      );
    } catch {
      // If KaTeX fails, render a clean styled fallback rather than raw LaTeX
      parts.push(
        <code key={`err-${match.index}`} className="px-1 py-0.5 bg-slate-100 rounded text-slate-800 font-mono text-xs">
          {mathExpr}
        </code>
      );
    }

    lastIndex = regex.lastIndex;
  }

  // Trailing text
  if (lastIndex < str.length) {
    const trailing = str.substring(lastIndex);
    // Check if trailing contains loose un-bracketed LaTeX commands like \theta
    if (/\\(theta|alpha|beta|sigma|mu|pi|le|ge|times|div|pm|ne|approx)/.test(trailing)) {
      try {
        const rendered = katex.renderToString(trailing, { displayMode: false, throwOnError: false });
        parts.push(<span key={`loose-${lastIndex}`} dangerouslySetInnerHTML={{ __html: rendered }} />);
      } catch {
        parts.push(<span key={`tail-${lastIndex}`}>{trailing}</span>);
      }
    } else {
      parts.push(<span key={`tail-${lastIndex}`}>{trailing}</span>);
    }
  }

  return (
    <div className={`whitespace-pre-wrap leading-relaxed ${className}`}>
      {parts.length === 0 ? str : parts}
    </div>
  );
};
