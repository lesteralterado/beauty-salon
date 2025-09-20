import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TransformationModal = ({ transformation, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !transformation) return null;

  const allImages = [
    { type: 'before', url: transformation?.beforeImage, label: 'Before Treatment' },
    { type: 'after', url: transformation?.afterImage, label: 'After Treatment' },
    ...(transformation?.processImages?.map((img, index) => ({
      type: 'process',
      url: img,
      label: `Process Step ${index + 1}`
    })) || [])
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages?.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages?.length) % allImages?.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced Backdrop with stronger blur */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-strong"
        onClick={onClose}
      />
      {/* Enhanced Modal Content with better readability */}
      <div className="relative w-full max-w-6xl max-h-[90vh] glass-card-readable overflow-hidden">
        {/* Enhanced Header with better text contrast */}
        <div className="flex items-center justify-between p-6 border-b border-white/20 bg-glass-text">
          <div>
            <h2 className="font-headline text-2xl font-bold text-foreground text-glass-title">
              {transformation?.title}
            </h2>
            <p className="text-muted-foreground mt-1 text-glass-readable font-medium">
              {transformation?.duration} • by {transformation?.stylist} • {transformation?.date}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
            className="hover:bg-white/20 text-foreground"
          />
        </div>

        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-120px)]">
          {/* Image Gallery - keeping existing structure */}
          <div className="flex-1 relative bg-black/10">
            <div className="relative h-96 lg:h-full">
              <Image
                src={allImages?.[currentImageIndex]?.url}
                alt={allImages?.[currentImageIndex]?.label}
                className="w-full h-full object-cover"
              />

              {/* Enhanced Image Navigation with better visibility */}
              {allImages?.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    iconName="ChevronLeft"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white hover:bg-black/85 backdrop-blur-sm border border-white/20"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    iconName="ChevronRight"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white hover:bg-black/85 backdrop-blur-sm border border-white/20"
                  />
                </>
              )}

              {/* Enhanced Image Counter with better readability */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/75 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
                {currentImageIndex + 1} / {allImages?.length}
              </div>

              {/* Enhanced Image Type Label with better contrast */}
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                  allImages?.[currentImageIndex]?.type === 'before' 
                    ? 'bg-warning/95 text-white border border-warning/50'
                    : allImages?.[currentImageIndex]?.type === 'after' ?'bg-success/95 text-white border border-success/50' :'bg-primary/95 text-white border border-primary/50'
                }`}>
                  {allImages?.[currentImageIndex]?.label}
                </span>
              </div>
            </div>

            {/* Enhanced Thumbnail Strip */}
            {allImages?.length > 1 && (
              <div className="flex gap-3 p-4 overflow-x-auto bg-glass-text">
                {allImages?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-18 h-18 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === index
                        ? 'border-primary shadow-lg ring-2 ring-primary/30 scale-110'
                        : 'border-white/30 hover:border-white/50 hover:scale-105'
                    }`}
                  >
                    <Image
                      src={image?.url}
                      alt={image?.label}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Enhanced Details Panel with improved text readability */}
          <div className="w-full lg:w-96 p-6 overflow-y-auto bg-glass-text">
            {/* Enhanced Rating and Category with better contrast */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={18}
                      className={`${
                        i < Math.floor(transformation?.rating)
                          ? 'text-warning fill-current drop-shadow-sm'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground text-glass-readable">
                  {transformation?.rating}
                </span>
              </div>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold backdrop-blur-sm border border-primary/30">
                {transformation?.category}
              </span>
            </div>

            {/* Enhanced Description with better readability */}
            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-3 text-glass-title">
                About This Transformation
              </h3>
              <p className="text-foreground text-sm leading-relaxed text-glass-readable font-medium">
                {transformation?.description}
              </p>
            </div>

            {/* Enhanced Treatment Details with improved contrast */}
            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-4 text-glass-title">
                Treatment Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 glass-panel-readable rounded-lg">
                  <Icon name="User" size={18} className="text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground font-medium">Stylist</span>
                    <p className="font-semibold text-foreground text-glass-readable">
                      {transformation?.stylist}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 glass-panel-readable rounded-lg">
                  <Icon name="Clock" size={18} className="text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground font-medium">Duration</span>
                    <p className="font-semibold text-foreground text-glass-readable">
                      {transformation?.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 glass-panel-readable rounded-lg">
                  <Icon name="DollarSign" size={18} className="text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground font-medium">Investment</span>
                    <p className="font-semibold text-foreground text-glass-readable">
                      ${transformation?.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Services Used with better visibility */}
            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-4 text-glass-title">
                Services Included
              </h3>
              <div className="space-y-3">
                {transformation?.services?.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 glass-panel-readable rounded-md">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-foreground font-medium text-glass-readable">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Tags with better contrast */}
            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-4 text-glass-title">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {transformation?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-muted/30 text-foreground rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 text-glass-readable"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced Client Testimonial with better readability */}
            {transformation?.testimonial && (
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-4 text-glass-title">
                  Client Review
                </h3>
                <div className="glass-panel-readable p-5">
                  <p className="text-foreground italic mb-4 text-glass-readable font-medium leading-relaxed">
                    "{transformation?.testimonial?.comment}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/40">
                      <Icon name="User" size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground text-glass-readable">
                        {transformation?.testimonial?.clientName}
                      </p>
                      <p className="text-xs text-muted-foreground font-medium">
                        {transformation?.testimonial?.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Action Buttons */}
            <div className="space-y-3">
              <Button
                variant="default"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                className="cta-morph font-semibold py-3 text-shadow-soft"
              >
                Book Similar Service
              </Button>
              <Button
                variant="outline"
                fullWidth
                iconName="Share"
                iconPosition="left"
                className="font-semibold py-3 bg-white/10 border-white/30 text-foreground hover:bg-white/20 backdrop-blur-sm text-glass-readable"
              >
                Share Transformation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationModal;