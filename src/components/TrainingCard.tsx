
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
    <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="w-full md:w-1/3 h-60 md:h-auto overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="w-full md:w-2/3 p-8">
        <h3 className="text-xl font-bold font-heading mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
        <Link to={link} className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors duration-300 group">
          <span>Lire la suite</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default TrainingCard;
