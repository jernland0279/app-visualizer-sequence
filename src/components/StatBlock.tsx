
import React from 'react';

interface StatBlockProps {
  value: string;
  label: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ value, label }) => {
  return (
    <div className="text-center p-6">
      <div className="text-primary text-4xl md:text-5xl font-bold">{value}</div>
      <div className="text-gray-700 mt-2">{label}</div>
    </div>
  );
};

export default StatBlock;
