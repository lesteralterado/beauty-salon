import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TransformationCard = ({ transformation, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAfter, setShowAfter] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => setShowAfter(true), 300);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowAfter(false);
  };

  return (
    <div 
      className="glass-card group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-floating"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onViewDetails(transformation)}
    >
      {/* Image Container with Before/After Effect */}
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <div className="absolute inset-0">
          <Image
            src={transformation?.beforeImage}
            alt={`${transformation?.title} - Before`}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              showAfter ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <Image
            src={transformation?.afterImage}
            alt={`${transformation?.title} - After`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              showAfter ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Overlay Labels */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
            showAfter 
              ? 'bg-success/90 text-white' :'bg-black/50 text-white'
          }`}>
            {showAfter ? 'After' : 'Before'}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-primary/90 text-white rounded-full text-xs font-medium">
            {transformation?.category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4">
            <Button
              variant="default"
              size="sm"
              iconName="Eye"
              iconPosition="left"
              className="w-full bg-white/90 text-black hover:bg-white"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-headline text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {transformation?.title}
          </h3>
          <div className="flex items-center gap-1">
            <Icon name="Star" size={16} className="text-warning fill-current" />
            <span className="text-sm font-medium text-foreground">{transformation?.rating}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {transformation?.description}
        </p>

        {/* Treatment Details */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Icon name="User" size={14} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{transformation?.stylist}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={14} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{transformation?.duration}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {transformation?.tags?.slice(0, 3)?.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
          {transformation?.tags?.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
              +{transformation?.tags?.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <div className="flex items-center gap-2">
            <Icon name="Calendar" size={14} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{transformation?.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Heart" size={14} className="text-error" />
            <span className="text-sm text-muted-foreground">{transformation?.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationCard;