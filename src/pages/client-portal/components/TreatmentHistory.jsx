import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const TreatmentHistory = ({ treatments, onViewDetails, onBookAgain }) => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'timeline'

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getServiceIcon = (serviceType) => {
    const iconMap = {
      'facial': 'Sparkles',
      'massage': 'Hand',
      'manicure': 'Palette',
      'haircut': 'Scissors',
      'coloring': 'Paintbrush',
      'skincare': 'Heart',
      'makeup': 'Brush'
    };
    return iconMap?.[serviceType?.toLowerCase()] || 'Star';
  };

  const getRatingStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={14}
        className={index < rating ? "text-warning fill-current" : "text-muted-foreground"}
      />
    ));
  };

  const TimelineView = () => (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
      
      <div className="space-y-8">
        {treatments?.map((treatment, index) => (
          <div key={treatment?.id} className="relative flex gap-6">
            {/* Timeline dot */}
            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-4 border-white shadow-subtle morph-hover">
              <Icon name={getServiceIcon(treatment?.serviceType)} size={24} className="text-primary" />
            </div>
            
            {/* Treatment card */}
            <div className="flex-grow glass-panel p-6 rounded-xl morph-hover group">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-headline text-lg font-semibold text-foreground">
                      {treatment?.service}
                    </h3>
                    <div className="flex items-center gap-1">
                      {getRatingStars(treatment?.rating)}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {formatDate(treatment?.date)} • {treatment?.stylist?.name}
                  </p>
                  
                  <p className="text-sm text-foreground mb-4">
                    {treatment?.notes}
                  </p>
                  
                  {treatment?.beforeAfter && (
                    <div className="flex gap-3 mb-4">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
                          <Image
                            src={treatment?.beforeAfter?.before}
                            alt="Before treatment"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">Before</span>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
                          <Image
                            src={treatment?.beforeAfter?.after}
                            alt="After treatment"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">After</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="text-right">
                  <div className="text-xl font-bold text-foreground font-headline mb-2">
                    ${treatment?.price}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Eye"
                      iconPosition="left"
                      onClick={() => onViewDetails(treatment?.id)}
                    >
                      Details
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      iconName="Repeat"
                      iconPosition="left"
                      onClick={() => onBookAgain(treatment?.service)}
                    >
                      Book Again
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ListView = () => (
    <div className="space-y-4">
      {treatments?.map((treatment) => (
        <div key={treatment?.id} className="glass-panel p-6 rounded-xl morph-hover group">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={getServiceIcon(treatment?.serviceType)} size={20} className="text-primary" />
              </div>
              
              <div>
                <h3 className="font-headline text-lg font-semibold text-foreground">
                  {treatment?.service}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {formatDate(treatment?.date)} • {treatment?.stylist?.name}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 lg:ml-auto">
              <div className="flex items-center gap-1">
                {getRatingStars(treatment?.rating)}
              </div>
              
              <div className="text-lg font-bold text-foreground font-headline">
                ${treatment?.price}
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Eye"
                  iconPosition="left"
                  onClick={() => onViewDetails(treatment?.id)}
                >
                  View
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  iconName="Repeat"
                  iconPosition="left"
                  onClick={() => onBookAgain(treatment?.service)}
                >
                  Book Again
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
          <Icon name="History" size={24} className="text-primary" />
          Treatment History
        </h2>
        
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            iconName="List"
            iconPosition="left"
            onClick={() => setViewMode('list')}
          >
            List
          </Button>
          <Button
            variant={viewMode === 'timeline' ? 'default' : 'outline'}
            size="sm"
            iconName="GitBranch"
            iconPosition="left"
            onClick={() => setViewMode('timeline')}
          >
            Timeline
          </Button>
        </div>
      </div>
      {treatments?.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="History" size={32} className="text-muted-foreground" />
          </div>
          <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
            No Treatment History
          </h3>
          <p className="text-muted-foreground mb-4">
            Start your beauty journey with us today!
          </p>
          <Button
            variant="default"
            iconName="Calendar"
            iconPosition="left"
            onClick={() => window.location.href = '/booking'}
          >
            Book First Treatment
          </Button>
        </div>
      ) : (
        <>
          {viewMode === 'timeline' ? <TimelineView /> : <ListView />}
        </>
      )}
    </div>
  );
};

export default TreatmentHistory;