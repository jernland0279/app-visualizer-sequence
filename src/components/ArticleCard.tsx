
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
    <div className="bg-white rounded-lg overflow-hidden card-shadow group">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      
      <div className="p-6">
        <div className="inline-block px-3 py-1 bg-accent text-primary text-xs font-medium rounded-full mb-4">
          {category}
        </div>
        
        <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        
        <p className="text-gray-600 mb-4">{excerpt}</p>
        
        <Link 
          to={link} 
          className="text-primary hover:text-primary-hover font-medium flex items-center gap-2 transition-colors duration-300"
        >
          {linkText}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
