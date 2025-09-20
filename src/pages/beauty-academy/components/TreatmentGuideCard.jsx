import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TreatmentGuideCard = ({ guide }) => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleStep = (stepIndex) => {
    if (completedSteps?.includes(stepIndex)) {
      setCompletedSteps(completedSteps?.filter(index => index !== stepIndex));
    } else {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  const progressPercentage = (completedSteps?.length / guide?.steps?.length) * 100;

  return (
    <div className="glass-card overflow-hidden">
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <Image
            src={guide?.image}
            alt={guide?.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute top-4 left-4">
          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {guide?.duration}
          </span>
        </div>
        
        <div className="absolute top-4 right-4">
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
            guide?.difficulty === 'Easy' ? 'bg-success/20 text-success' :
            guide?.difficulty === 'Medium'? 'bg-warning/20 text-warning' : 'bg-error/20 text-error'
          }`}>
            {guide?.difficulty}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
            {guide?.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-3">
            {guide?.description}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={14} />
              <span>{guide?.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Users" size={14} />
              <span>{guide?.suitableFor}</span>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <span className="text-sm text-muted-foreground">
              {completedSteps?.length}/{guide?.steps?.length} completed
            </span>
          </div>
          
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Steps */}
        <div className="space-y-3 mb-4">
          {guide?.steps?.slice(0, isExpanded ? guide?.steps?.length : 3)?.map((step, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 ${
                completedSteps?.includes(index) 
                  ? 'bg-success/10 border border-success/20' :'bg-muted/50 hover:bg-muted'
              }`}
            >
              <button
                onClick={() => toggleStep(index)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  completedSteps?.includes(index)
                    ? 'bg-success border-success text-white' :'border-muted-foreground hover:border-primary'
                }`}
              >
                {completedSteps?.includes(index) && (
                  <Icon name="Check" size={14} />
                )}
              </button>
              
              <div className="flex-1">
                <h4 className={`font-medium text-sm ${
                  completedSteps?.includes(index) 
                    ? 'text-success line-through' :'text-foreground'
                }`}>
                  {step?.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {step?.description}
                </p>
                {step?.tip && (
                  <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                    <Icon name="Lightbulb" size={12} />
                    <span>{step?.tip}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {guide?.steps?.length > 3 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            className="w-full mb-4"
          >
            {isExpanded ? "Show Less" : `Show ${guide?.steps?.length - 3} More Steps`}
          </Button>
        )}
        
        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-border/50">
          <Button
            variant="outline"
            size="sm"
            iconName="Download"
            iconPosition="left"
            className="flex-1"
          >
            Download Guide
          </Button>
          
          <Button
            variant="default"
            size="sm"
            iconName="Calendar"
            iconPosition="left"
            className="flex-1"
          >
            Book Treatment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentGuideCard;