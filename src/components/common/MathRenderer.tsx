import React from 'react';
import { MathText } from './MathText';

export { MathText };

export const MathRenderer: React.FC<{
  content: string;
  className?: string;
  asBlock?: boolean;
}> = (props) => {
  return <MathText {...props} />;
};
