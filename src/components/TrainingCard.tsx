
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface TrainingCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg overflow-hidden card-shadow">
      <div className="w-full md:w-1/3 h-60 md:h-auto overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="w-full md:w-2/3 p-8">
        <h3 className="text-xl font-bold font-heading mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link to={link} className="text-primary hover:text-primary-hover font-medium flex items-center gap-2 transition-colors duration-300">
          Lire la suite
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default TrainingCard;
