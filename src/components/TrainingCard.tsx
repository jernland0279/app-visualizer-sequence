
import React from 'react';
import { Link } from 'react-router-dom';

interface TrainingCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="w-full md:w-1/3">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-2/3 p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={link} className="text-primary hover:text-primary-hover font-medium transition-colors duration-300 link-with-hover">
          Lire la suite
        </Link>
      </div>
    </div>
  );
};

export default TrainingCard;
