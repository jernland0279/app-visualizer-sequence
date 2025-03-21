
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProcessStepProps {
  title: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ title, isLast = false }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full w-full flex items-center justify-center">
        <h3 className="font-medium text-center">{title}</h3>
      </div>
      {!isLast && (
        <div className="hidden md:flex absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-primary">
          <ArrowRight className="h-6 w-6" />
        </div>
      )}
    </div>
  );
};

export default ProcessStep;
