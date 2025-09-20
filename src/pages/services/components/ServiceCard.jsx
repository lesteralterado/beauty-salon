import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onBookNow, onLearnMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative glass-card p-6 transition-all duration-500 morph-hover interactive-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Badge */}
      {service?.isPopular && (
        <div className="absolute -top-3 -right-3 z-10">
          <div className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-floating">
            <Icon name="Star" size={12} className="inline mr-1" />
            Popular
          </div>
        </div>
      )}
      {/* Service Icon with Morphing Effect */}
      <div className="relative mb-6">
        <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'scale-110 rotate-12' : ''
        }`}>
          <Icon 
            name={service?.icon} 
            size={32} 
            className={`text-primary transition-all duration-500 ${
              isHovered ? 'text-accent scale-110' : ''
            }`}
          />
        </div>
        
        {/* Floating Elements */}
        <div className={`absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full transition-all duration-700 ${
          isHovered ? 'scale-150 opacity-100' : 'scale-0 opacity-0'
        }`} />
        <div className={`absolute -bottom-1 -left-1 w-3 h-3 bg-primary rounded-full transition-all duration-700 delay-100 ${
          isHovered ? 'scale-150 opacity-100' : 'scale-0 opacity-0'
        }`} />
      </div>
      {/* Service Title */}
      <h3 className="font-headline text-xl font-bold text-foreground mb-2 text-center">
        {service?.title}
      </h3>
      {/* Service Description */}
      <p className="text-muted-foreground text-sm text-center mb-4 line-clamp-3">
        {service?.description}
      </p>
      {/* Service Details - Morphing Panel */}
      <div className={`transition-all duration-500 overflow-hidden ${
        isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="glass-panel p-4 mb-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground flex items-center">
              <Icon name="Clock" size={14} className="mr-2" />
              Duration
            </span>
            <span className="text-sm font-medium text-foreground">{service?.duration}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground flex items-center">
              <Icon name="DollarSign" size={14} className="mr-2" />
              Starting Price
            </span>
            <span className="text-sm font-medium text-primary">${service?.price}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground flex items-center">
              <Icon name="Users" size={14} className="mr-2" />
              Suitable For
            </span>
            <span className="text-sm font-medium text-foreground">{service?.suitableFor}</span>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex gap-3 mt-6">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => onLearnMore(service)}
          iconName="Info"
          iconPosition="left"
          iconSize={16}
        >
          Learn More
        </Button>
        
        <Button
          variant="default"
          size="sm"
          className="flex-1 cta-morph bg-primary hover:bg-primary/90"
          onClick={() => onBookNow(service)}
          iconName="Calendar"
          iconPosition="left"
          iconSize={16}
        >
          Book Now
        </Button>
      </div>
      {/* Floating Decoration */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse delay-300" />
      </div>
    </div>
  );
};

export default ServiceCard;