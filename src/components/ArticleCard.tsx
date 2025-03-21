
import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  linkText?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  category, 
  title, 
  excerpt, 
  image, 
  link,
  linkText = "En savoir plus"
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      
      <div className="p-5">
        <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium rounded mb-3">
          {category}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        <p className="text-gray-600 mb-4">{excerpt}</p>
        
        <Link 
          to={link} 
          className="text-primary hover:text-primary-hover font-medium transition-colors duration-300 link-with-hover"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
