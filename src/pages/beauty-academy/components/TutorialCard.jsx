import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TutorialCard = ({ tutorial }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds?.toString()?.padStart(2, '0')}`;
  };

  return (
    <div className="glass-card overflow-hidden group morph-hover">
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <Image
            src={tutorial?.thumbnail}
            alt={tutorial?.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="default"
            size="lg"
            onClick={handlePlay}
            className="bg-white/90 text-primary hover:bg-white rounded-full w-16 h-16 p-0"
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
          </Button>
        </div>
        
        <div className="absolute top-4 left-4">
          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {formatDuration(tutorial?.duration)}
          </span>
        </div>
        
        <div className="absolute top-4 right-4">
          <div className={`w-3 h-3 rounded-full ${
            tutorial?.difficulty === 'Beginner' ? 'bg-success' :
            tutorial?.difficulty === 'Intermediate'? 'bg-warning' : 'bg-error'
          }`}></div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
            {tutorial?.category}
          </span>
          <span className="text-xs text-muted-foreground">
            {tutorial?.difficulty}
          </span>
        </div>
        
        <h3 className="font-headline text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {tutorial?.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {tutorial?.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={tutorial?.instructor?.avatar}
                alt={tutorial?.instructor?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm text-foreground font-medium">
              {tutorial?.instructor?.name}
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground">
            <Icon name="Eye" size={14} />
            <span className="text-xs">{tutorial?.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;