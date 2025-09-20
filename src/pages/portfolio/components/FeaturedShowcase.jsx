import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedShowcase = ({ onViewDetails }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredTransformations = [
    {
      id: 'featured-1',
      title: 'Bridal Glow Transformation',
      subtitle: 'Complete Wedding Day Package',
      beforeImage: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop',
      stylist: 'Isabella Martinez',
      category: 'Bridal',
      rating: 5.0,
      duration: '4 hours',
      price: 450,
      description: `A complete bridal transformation featuring luxury skincare preparation, professional makeup artistry, and elegant hair styling. This comprehensive package created the perfect wedding day look with long-lasting results that photographed beautifully throughout the celebration.`,
      services: ['Deep Cleansing Facial', 'Airbrush Makeup', 'Bridal Hair Styling', 'Lash Extensions'],
      tags: ['Bridal', 'Luxury', 'Photography Ready', 'Long-lasting'],
      testimonial: {
        comment: "Isabella made me feel like a princess on my wedding day. The transformation was beyond my dreams!",
        clientName: "Sarah Chen",
        date: "September 2024"
      }
    },
    {
      id: 'featured-2',
      title: 'Red Carpet Glamour',
      subtitle: 'Celebrity-Style Makeover',
      beforeImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop',
      stylist: 'Marcus Thompson',
      category: 'Glamour',
      rating: 4.9,
      duration: '3 hours',
      price: 350,
      description: `A show-stopping red carpet transformation combining bold makeup artistry with sophisticated hair styling. This look was designed for maximum impact under professional photography lighting and created an unforgettable presence.`,
      services: ['Contouring & Highlighting', 'Dramatic Eye Makeup', 'Hollywood Waves', 'Professional Photography'],
      tags: ['Red Carpet', 'Dramatic', 'Photography', 'Glamour'],
      testimonial: {
        comment: "Marcus created the most stunning look for my gala event. I felt like a movie star!",
        clientName: "Amanda Rodriguez",
        date: "August 2024"
      }
    },
    {
      id: 'featured-3',
      title: 'Natural Radiance Revival',
      subtitle: 'Organic Beauty Enhancement',
      beforeImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop',
      stylist: 'Emma Wilson',
      category: 'Natural',
      rating: 4.8,
      duration: '2.5 hours',
      price: 280,
      description: `A refreshing natural beauty transformation focusing on enhancing your inherent features while maintaining an effortless, glowing appearance. Perfect for those who prefer subtle elegance over dramatic changes.`,
      services: ['Organic Facial Treatment', 'Natural Makeup', 'Soft Wave Styling', 'Brow Shaping'],
      tags: ['Natural', 'Organic', 'Subtle', 'Everyday Glam'],
      testimonial: {
        comment: "Emma enhanced my natural beauty perfectly. I looked like the best version of myself!",
        clientName: "Jessica Park",
        date: "September 2024"
      }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredTransformations?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredTransformations?.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredTransformations?.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredTransformations?.length) % featuredTransformations?.length);
    setIsAutoPlaying(false);
  };

  const currentTransformation = featuredTransformations?.[currentSlide];

  return (
    <div className="relative mb-12 overflow-hidden rounded-2xl">
      <div className="glass-card p-0">
        <div className="relative h-96 lg:h-[500px]">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={currentTransformation?.afterImage}
              alt={currentTransformation?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/90 text-white rounded-full text-sm font-medium">
                    Featured Transformation
                  </span>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={16} className="text-warning fill-current" />
                    <span className="text-white font-medium">{currentTransformation?.rating}</span>
                  </div>
                </div>

                <h1 className="font-headline text-3xl lg:text-5xl font-bold text-white mb-3">
                  {currentTransformation?.title}
                </h1>
                
                <p className="text-xl text-white/90 mb-4">
                  {currentTransformation?.subtitle}
                </p>

                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  {currentTransformation?.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Icon name="User" size={18} className="text-white/70" />
                    <span className="text-white">{currentTransformation?.stylist}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={18} className="text-white/70" />
                    <span className="text-white">{currentTransformation?.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="DollarSign" size={18} className="text-white/70" />
                    <span className="text-white">${currentTransformation?.price}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => onViewDetails(currentTransformation)}
                    iconName="Eye"
                    iconPosition="left"
                    className="cta-morph bg-white text-black hover:bg-white/90"
                  >
                    View Full Transformation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Book Similar Service
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            iconName="ChevronLeft"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            iconName="ChevronRight"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          />

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            {featuredTransformations?.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white scale-125' :'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            iconName={isAutoPlaying ? "Pause" : "Play"}
            className="absolute top-4 right-4 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedShowcase;