import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ColorMatchingTool = () => {
  const [selectedSeason, setSelectedSeason] = useState('spring');
  const [selectedUndertone, setSelectedUndertone] = useState('warm');

  const seasons = [
    {
      id: 'spring',
      name: 'Spring',
      icon: 'Flower',
      colors: ['#FFB6C1', '#98FB98', '#F0E68C', '#DDA0DD', '#87CEEB'],
      description: 'Bright, warm, and clear colors that complement your natural vibrancy'
    },
    {
      id: 'summer',
      name: 'Summer',
      icon: 'Sun',
      colors: ['#E6E6FA', '#B0C4DE', '#F0F8FF', '#D8BFD8', '#AFEEEE'],
      description: 'Soft, cool, and muted colors that enhance your gentle beauty'
    },
    {
      id: 'autumn',
      name: 'Autumn',
      icon: 'Leaf',
      colors: ['#CD853F', '#D2691E', '#B22222', '#DAA520', '#8B4513'],
      description: 'Rich, warm, and earthy colors that bring out your natural warmth'
    },
    {
      id: 'winter',
      name: 'Winter',
      icon: 'Snowflake',
      colors: ['#000080', '#8B0000', '#2F4F4F', '#800080', '#000000'],
      description: 'Bold, cool, and dramatic colors that complement your striking features'
    }
  ];

  const undertones = [
    {
      id: 'warm',
      name: 'Warm',
      description: 'Golden, yellow, or peachy undertones',
      characteristics: ['Veins appear greenish', 'Gold jewelry looks better', 'Tan easily']
    },
    {
      id: 'cool',
      name: 'Cool',
      description: 'Pink, red, or blue undertones',
      characteristics: ['Veins appear bluish', 'Silver jewelry looks better', 'Burn easily']
    },
    {
      id: 'neutral',
      name: 'Neutral',
      description: 'Mix of warm and cool undertones',
      characteristics: ['Veins appear blue-green', 'Both metals look good', 'Tan moderately']
    }
  ];

  const currentSeason = seasons?.find(s => s?.id === selectedSeason);
  const currentUndertone = undertones?.find(u => u?.id === selectedUndertone);

  const getRecommendedProducts = () => {
    const baseProducts = [
      'Foundation matching service',
      'Color consultation',
      'Seasonal makeup application',
      'Personal color analysis'
    ];
    
    if (selectedSeason === 'spring' && selectedUndertone === 'warm') {
      return [...baseProducts, 'Coral blush', 'Peach lipstick', 'Golden highlighter'];
    } else if (selectedSeason === 'winter' && selectedUndertone === 'cool') {
      return [...baseProducts, 'Berry lipstick', 'Cool-toned eyeshadow', 'Silver highlighter'];
    }
    
    return baseProducts;
  };

  return (
    <div className="space-y-8">
      {/* Undertone Selection */}
      <div className="glass-card p-6">
        <h3 className="font-headline text-xl font-semibold text-foreground mb-4">
          Discover Your Undertone
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {undertones?.map((undertone) => (
            <button
              key={undertone?.id}
              onClick={() => setSelectedUndertone(undertone?.id)}
              className={`glass-panel p-4 text-left transition-all duration-300 morph-hover ${
                selectedUndertone === undertone?.id 
                  ? 'bg-primary/10 border-primary/30' :'hover:bg-primary/5'
              }`}
            >
              <h4 className="font-semibold text-foreground mb-2">
                {undertone?.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {undertone?.description}
              </p>
              <ul className="space-y-1">
                {undertone?.characteristics?.map((char, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="Check" size={12} className="text-primary" />
                    {char}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </div>
      {/* Season Selection */}
      <div className="glass-card p-6">
        <h3 className="font-headline text-xl font-semibold text-foreground mb-4">
          Choose Your Season
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {seasons?.map((season) => (
            <button
              key={season?.id}
              onClick={() => setSelectedSeason(season?.id)}
              className={`glass-panel p-4 text-center transition-all duration-300 morph-hover ${
                selectedSeason === season?.id 
                  ? 'bg-primary/10 border-primary/30 scale-105' :'hover:bg-primary/5'
              }`}
            >
              <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${
                selectedSeason === season?.id ? 'bg-primary text-white' : 'bg-muted'
              }`}>
                <Icon name={season?.icon} size={24} />
              </div>
              <h4 className="font-semibold text-foreground">
                {season?.name}
              </h4>
            </button>
          ))}
        </div>
      </div>
      {/* Color Palette Display */}
      <div className="glass-card p-6">
        <h3 className="font-headline text-xl font-semibold text-foreground mb-4">
          Your Perfect Palette
        </h3>
        
        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-2">
            {currentSeason?.name} Colors
          </h4>
          <p className="text-muted-foreground text-sm mb-4">
            {currentSeason?.description}
          </p>
          
          <div className="flex gap-2 mb-6">
            {currentSeason?.colors?.map((color, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-lg shadow-subtle morph-hover cursor-pointer"
                style={{ backgroundColor: color }}
                title={`Color ${index + 1}`}
              ></div>
            ))}
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-foreground mb-3">
            Recommended Services
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {getRecommendedProducts()?.map((product, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Icon name="Palette" size={16} className="text-primary" />
                <span>{product}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" iconName="Download">
            Save Palette
          </Button>
          <Button variant="default" iconName="Calendar">
            Book Color Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ColorMatchingTool;