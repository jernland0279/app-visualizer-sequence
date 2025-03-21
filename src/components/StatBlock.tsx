
import React from 'react';

interface StatBlockProps {
  value: string;
  label: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col justify-center items-center p-8 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-100 hover:transform hover:scale-105 transition-all duration-300">
      <div className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="text-gray-600 font-medium text-center">
        {label}
      </div>
    </div>
  );
};

export default StatBlock;
