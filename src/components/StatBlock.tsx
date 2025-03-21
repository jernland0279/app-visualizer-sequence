
import React from 'react';

interface StatBlockProps {
  value: string;
  label: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ value, label }) => {
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-custom">
      <div className="text-primary text-4xl md:text-5xl font-bold font-heading">{value}</div>
      <div className="text-gray-600 mt-3 font-medium">{label}</div>
    </div>
  );
};

export default StatBlock;
