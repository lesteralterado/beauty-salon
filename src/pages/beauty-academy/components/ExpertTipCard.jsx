import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ExpertTipCard = ({ tip }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="glass-card overflow-hidden morph-hover">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={tip?.expert?.avatar}
                alt={tip?.expert?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                {tip?.expert?.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {tip?.expert?.specialty}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={toggleBookmark}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Icon 
                name={isBookmarked ? "BookmarkCheck" : "Bookmark"} 
                size={18} 
                className={isBookmarked ? "text-primary" : "text-muted-foreground"}
              />
            </button>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <Icon name="Clock" size={14} />
              <span className="text-xs">{tip?.readTime}</span>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
              {tip?.category}
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={12}
                  className={i < tip?.rating ? "text-warning fill-current" : "text-muted-foreground"}
                />
              ))}
            </div>
          </div>
          
          <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
            {tip?.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {isExpanded ? tip?.fullContent : tip?.preview}
          </p>
        </div>
        
        {tip?.tools && tip?.tools?.length > 0 && (
          <div className="mb-4">
            <h5 className="font-medium text-foreground mb-2 text-sm">
              Recommended Tools:
            </h5>
            <div className="flex flex-wrap gap-2">
              {tip?.tools?.map((tool, index) => (
                <span
                  key={index}
                  className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-4 text-muted-foreground">
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <Icon name="Heart" size={16} />
              <span className="text-xs">{tip?.likes}</span>
            </button>
            
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={16} />
              <span className="text-xs">{tip?.comments}</span>
            </button>
            
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <Icon name="Share2" size={16} />
              <span className="text-xs">Share</span>
            </button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleExpanded}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpertTipCard;