import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicePackages = ({ packages, onBookPackage }) => {
  const [hoveredPackage, setHoveredPackage] = useState(null);

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Treatment Packages
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comprehensive beauty packages designed to deliver transformative results with exceptional value
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {packages?.map((pkg) => (
          <div
            key={pkg?.id}
            className={`relative glass-card p-8 transition-all duration-500 morph-hover ${
              pkg?.isPopular ? 'ring-2 ring-primary/50' : ''
            }`}
            onMouseEnter={() => setHoveredPackage(pkg?.id)}
            onMouseLeave={() => setHoveredPackage(null)}
          >
            {/* Popular Badge */}
            {pkg?.isPopular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-floating">
                  <Icon name="Crown" size={14} className="inline mr-1" />
                  Most Popular
                </div>
              </div>
            )}

            {/* Package Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon 
                  name={pkg?.icon} 
                  size={32} 
                  className={`text-primary transition-all duration-500 ${
                    hoveredPackage === pkg?.id ? 'scale-110 text-accent' : ''
                  }`}
                />
              </div>
              
              <h3 className="font-headline text-xl font-bold text-foreground mb-2">
                {pkg?.name}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {pkg?.description}
              </p>
              
              <div className="flex items-center justify-center space-x-2">
                {pkg?.originalPrice && (
                  <span className="text-muted-foreground line-through text-lg">
                    ${pkg?.originalPrice}
                  </span>
                )}
                <span className="text-3xl font-bold text-primary">
                  ${pkg?.price}
                </span>
              </div>
              
              {pkg?.savings && (
                <div className="mt-2">
                  <span className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                    Save ${pkg?.savings}
                  </span>
                </div>
              )}
            </div>

            {/* Package Features */}
            <div className="space-y-3 mb-8">
              {pkg?.features?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Package Services */}
            <div className="mb-8">
              <h4 className="font-medium text-foreground mb-3">Included Services:</h4>
              <div className="space-y-2">
                {pkg?.services?.map((service, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{service?.name}</span>
                    <span className="text-foreground font-medium">${service?.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Duration & Sessions */}
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <Icon name="Clock" size={14} className="mr-1" />
                {pkg?.duration}
              </div>
              <div className="flex items-center">
                <Icon name="Calendar" size={14} className="mr-1" />
                {pkg?.sessions} sessions
              </div>
            </div>

            {/* CTA Button */}
            <Button
              variant={pkg?.isPopular ? "default" : "outline"}
              fullWidth
              className={pkg?.isPopular ? "cta-morph bg-primary hover:bg-primary/90" : ""}
              onClick={() => onBookPackage(pkg)}
              iconName="Sparkles"
              iconPosition="left"
              iconSize={16}
            >
              {pkg?.isPopular ? 'Get Started' : 'Choose Package'}
            </Button>

            {/* Floating Decorations */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
              hoveredPackage === pkg?.id ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute top-6 right-6 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse delay-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePackages;