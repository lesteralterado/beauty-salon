import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceModal = ({ service, isOpen, onClose, onBookNow }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !service) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'process', label: 'Process', icon: 'List' },
    { id: 'results', label: 'Results', icon: 'TrendingUp' },
    { id: 'aftercare', label: 'Aftercare', icon: 'Heart' }
  ];

  const beforeAfterImages = [
    {
      id: 1,
      before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
      description: "Facial rejuvenation treatment results"
    },
    {
      id: 2,
      before: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
      description: "Skin texture improvement"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] glass-card-readable overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20 bg-glass-text">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Icon name={service?.icon} size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="font-headline text-2xl font-bold text-foreground text-glass-title">{service?.title}</h2>
              <p className="text-muted-foreground text-glass-readable font-medium">{service?.category}</p>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
            iconSize={20}
            className="hover:bg-white/20 text-foreground"
          />
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/20 px-6 bg-glass-text">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center px-4 py-3 text-sm font-medium transition-all duration-300 border-b-2 ${
                activeTab === tab?.id
                  ? 'text-primary border-primary text-glass-readable' : 'text-muted-foreground border-transparent hover:text-foreground text-glass-readable'
              }`}
            >
              <Icon name={tab?.icon} size={16} className="mr-2" />
              {tab?.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh] bg-glass-text">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-headline text-lg font-semibold mb-3 text-glass-title">Treatment Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-glass-readable font-medium">Duration:</span>
                      <span className="font-medium text-foreground text-glass-readable">{service?.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-glass-readable font-medium">Starting Price:</span>
                      <span className="font-medium text-primary text-glass-readable">${service?.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-glass-readable font-medium">Suitable For:</span>
                      <span className="font-medium text-foreground text-glass-readable">{service?.suitableFor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-glass-readable font-medium">Results Last:</span>
                      <span className="font-medium text-foreground text-glass-readable">{service?.resultsLast}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-headline text-lg font-semibold mb-3 text-glass-title">What to Expect</h3>
                  <p className="text-muted-foreground leading-relaxed text-glass-readable font-medium">
                    {service?.detailedDescription}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-headline text-lg font-semibold mb-3 text-glass-title">Key Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service?.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-foreground text-glass-readable font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-6">
              <h3 className="font-headline text-lg font-semibold text-glass-title">Treatment Process</h3>
              <div className="space-y-4">
                {service?.process?.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-primary/30">
                      <span className="text-sm font-semibold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-foreground text-glass-readable">{step?.title}</h4>
                      <p className="text-sm text-muted-foreground text-glass-readable font-medium">{step?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-6">
              <h3 className="font-headline text-lg font-semibold text-glass-title">Before & After Gallery</h3>
              <div className="grid gap-6">
                {beforeAfterImages?.map((item) => (
                  <div key={item?.id} className="glass-panel-readable p-4 rounded-xl">
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-medium mb-2 text-center text-foreground text-glass-readable">Before</p>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                          <Image
                            src={item?.before}
                            alt="Before treatment"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2 text-center text-foreground text-glass-readable">After</p>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                          <Image
                            src={item?.after}
                            alt="After treatment"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground text-center text-glass-readable font-medium">{item?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'aftercare' && (
            <div className="space-y-6">
              <h3 className="font-headline text-lg font-semibold text-glass-title">Post-Treatment Care</h3>
              <div className="space-y-4">
                {service?.aftercare?.map((instruction, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-success mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground text-glass-readable font-medium">{instruction}</p>
                  </div>
                ))}
              </div>
              
              <div className="glass-panel-readable p-4 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="AlertCircle" size={20} className="text-warning" />
                  <h4 className="font-medium text-foreground text-glass-readable">Important Notes</h4>
                </div>
                <p className="text-sm text-muted-foreground text-glass-readable font-medium">
                  Results may vary based on individual skin type and condition. Follow-up appointments may be recommended for optimal results.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-white/20 bg-glass-text">
          <div className="text-sm text-muted-foreground text-glass-readable font-medium">
            Starting from <span className="text-lg font-semibold text-primary text-glass-readable">${service?.price}</span>
          </div>
          
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="bg-white/10 border-white/30 text-foreground hover:bg-white/20 backdrop-blur-sm text-glass-readable"
            >
              Close
            </Button>
            <Button
              variant="default"
              className="cta-morph bg-primary hover:bg-primary/90 text-shadow-soft"
              onClick={() => onBookNow(service)}
              iconName="Calendar"
              iconPosition="left"
              iconSize={16}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;