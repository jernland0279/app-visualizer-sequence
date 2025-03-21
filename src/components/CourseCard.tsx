
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
    <div className="bg-white rounded-lg overflow-hidden card-shadow group">
      <div className="flex">
        <div className="bg-primary text-white p-4 flex flex-col items-center justify-center">
          <div className="text-sm font-medium">{date.month}</div>
          <div className="text-2xl font-bold">{date.day}</div>
        </div>
        <div className="p-5 flex-1">
          <h3 className="text-lg font-bold font-heading mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <MapPin className="h-4 w-4 mr-1 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Globe className="h-4 w-4 mr-1 text-primary" />
            <span>{language}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
