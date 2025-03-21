
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ProcessStepProps {
  title: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ title, isLast = false }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-custom hover:shadow-lg transition-shadow duration-300 text-center h-full w-full flex items-center justify-center">
        <h3 className="font-medium text-center">{title}</h3>
      </div>
      {!isLast && (
        <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
          <ChevronRight className="h-6 w-6 text-primary" />
        </div>
      )}
    </div>
  );
};

export default ProcessStep;
