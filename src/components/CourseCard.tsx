
import React from 'react';
import { Calendar, MapPin, Globe } from 'lucide-react';

interface CourseCardProps {
  title: string;
  location: string;
  date: {
    month: string;
    day: string;
  };
  language: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, location, date, language }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex">
        <div className="bg-primary text-white p-4 flex flex-col items-center justify-center">
          <div className="text-sm font-medium">{date.month}</div>
          <div className="text-2xl font-bold">{date.day}</div>
        </div>
        <div className="p-4 flex-1">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Globe className="h-4 w-4 mr-1" />
            <span>{language}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
