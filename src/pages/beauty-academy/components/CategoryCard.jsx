import React from 'react';
import Icon from '../../../components/AppIcon';


const CategoryCard = ({ category, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative group cursor-pointer transition-all duration-500 morph-hover ${
        isActive ? 'scale-105' : 'hover:scale-102'
      }`}
    >
      <div className={`glass-card p-6 h-full transition-all duration-300 ${
        isActive 
          ? 'bg-primary/10 border-primary/30 shadow-floating' 
          : 'hover:bg-primary/5 hover:border-primary/20'
      }`}>
        <div className="relative mb-4">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive 
              ? 'bg-primary text-white' :'bg-muted group-hover:bg-primary/20'
          }`}>
            <Icon 
              name={category?.icon} 
              size={28} 
              className={`transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-primary'
              }`}
            />
          </div>
          {category?.isNew && (
            <div className="absolute -top-2 -right-2 bg-vibrant-rose text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
              New
            </div>
          )}
        </div>
        
        <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
          {category?.name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {category?.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-primary font-medium">
            {category?.contentCount} {category?.contentCount === 1 ? 'item' : 'items'}
          </span>
          
          <Icon 
            name="ArrowRight" 
            size={16} 
            className={`transition-all duration-300 ${
              isActive 
                ? 'text-primary translate-x-1' :'text-muted-foreground group-hover:text-primary group-hover:translate-x-1'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;