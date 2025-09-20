import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories?.map((category) => (
        <button
          key={category?.id}
          onClick={() => onCategoryChange(category?.id)}
          className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 morph-hover ${
            activeCategory === category?.id
              ? 'bg-primary text-white shadow-floating'
              : 'glass-panel text-foreground hover:bg-primary/10 hover:text-primary'
          }`}
        >
          <Icon 
            name={category?.icon} 
            size={18} 
            className="mr-2" 
          />
          {category?.name}
          <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
            activeCategory === category?.id
              ? 'bg-white/20 text-white' :'bg-muted text-muted-foreground'
          }`}>
            {category?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;