import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceSelector = ({ selectedServices, onServiceToggle, onNext }) => {
  const [activeCategory, setActiveCategory] = useState('facial');

  const serviceCategories = [
    { id: 'facial', name: 'Facial Treatments', icon: 'Sparkles' },
    { id: 'hair', name: 'Hair Services', icon: 'Scissors' },
    { id: 'nails', name: 'Nail Care', icon: 'Hand' },
    { id: 'massage', name: 'Massage Therapy', icon: 'Heart' },
    { id: 'makeup', name: 'Makeup Services', icon: 'Palette' }
  ];

  const services = {
    facial: [
      {
        id: 'hydrafacial',
        name: 'HydraFacial MD',
        description: 'Deep cleansing and hydrating facial treatment with instant results',
        duration: '60 min',
        price: 180,
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
        popular: true
      },
      {
        id: 'diamond-glow',
        name: 'Diamond Glow Facial',
        description: 'Exfoliating treatment that reveals smoother, brighter skin',
        duration: '75 min',
        price: 220,
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop'
      },
      {
        id: 'oxygen-facial',
        name: 'Oxygen Infusion Facial',
        description: 'Rejuvenating treatment that delivers oxygen and nutrients to skin',
        duration: '45 min',
        price: 150,
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
      }
    ],
    hair: [
      {
        id: 'cut-style',
        name: 'Cut & Style',
        description: 'Professional haircut with personalized styling',
        duration: '90 min',
        price: 120,
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop',
        popular: true
      },
      {
        id: 'color-treatment',
        name: 'Color Treatment',
        description: 'Full color service with premium products',
        duration: '180 min',
        price: 280,
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop'
      },
      {
        id: 'keratin-treatment',
        name: 'Keratin Treatment',
        description: 'Smoothing treatment for frizz-free, manageable hair',
        duration: '240 min',
        price: 350,
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop'
      }
    ],
    nails: [
      {
        id: 'gel-manicure',
        name: 'Gel Manicure',
        description: 'Long-lasting gel polish with nail care',
        duration: '45 min',
        price: 65,
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop',
        popular: true
      },
      {
        id: 'luxury-pedicure',
        name: 'Luxury Pedicure',
        description: 'Complete foot care with massage and polish',
        duration: '60 min',
        price: 85,
        image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&h=300&fit=crop'
      }
    ],
    massage: [
      {
        id: 'swedish-massage',
        name: 'Swedish Massage',
        description: 'Relaxing full-body massage with essential oils',
        duration: '60 min',
        price: 140,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop'
      },
      {
        id: 'hot-stone',
        name: 'Hot Stone Massage',
        description: 'Therapeutic massage using heated volcanic stones',
        duration: '90 min',
        price: 180,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
        popular: true
      }
    ],
    makeup: [
      {
        id: 'bridal-makeup',
        name: 'Bridal Makeup',
        description: 'Complete bridal look with trial session included',
        duration: '120 min',
        price: 300,
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
        popular: true
      },
      {
        id: 'special-event',
        name: 'Special Event Makeup',
        description: 'Professional makeup for special occasions',
        duration: '75 min',
        price: 150,
        image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop'
      }
    ]
  };

  const currentServices = services?.[activeCategory] || [];
  const totalPrice = selectedServices?.reduce((sum, service) => sum + service?.price, 0);
  const totalDuration = selectedServices?.reduce((sum, service) => {
    const duration = parseInt(service?.duration);
    return sum + duration;
  }, 0);

  const handleServiceSelect = (service) => {
    const isSelected = selectedServices?.some(s => s?.id === service?.id);
    if (isSelected) {
      onServiceToggle(selectedServices?.filter(s => s?.id !== service?.id));
    } else {
      onServiceToggle([...selectedServices, service]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {serviceCategories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.id)}
            className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 morph-hover ${
              activeCategory === category?.id
                ? 'bg-primary text-white shadow-floating'
                : 'glass-panel text-foreground hover:bg-primary/10'
            }`}
          >
            <Icon name={category?.icon} size={18} className="mr-2" />
            {category?.name}
          </button>
        ))}
      </div>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentServices?.map((service) => {
          const isSelected = selectedServices?.some(s => s?.id === service?.id);
          return (
            <div
              key={service?.id}
              onClick={() => handleServiceSelect(service)}
              className={`glass-card cursor-pointer transition-all duration-300 morph-hover relative overflow-hidden ${
                isSelected ? 'ring-2 ring-primary shadow-floating' : ''
              }`}
            >
              {service?.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-accent text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              <div className="aspect-video overflow-hidden rounded-t-xl">
                <Image
                  src={service?.image}
                  alt={service?.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-headline text-lg font-semibold text-foreground">
                    {service?.name}
                  </h3>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    isSelected 
                      ? 'bg-primary border-primary' :'border-muted-foreground/30'
                  }`}>
                    {isSelected && (
                      <Icon name="Check" size={14} className="text-white" />
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service?.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {service?.duration}
                  </div>
                  <div className="font-semibold text-lg text-primary">
                    ${service?.price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Selected Services Summary */}
      {selectedServices?.length > 0 && (
        <div className="glass-panel p-6 rounded-xl">
          <h3 className="font-headline text-lg font-semibold mb-4">Selected Services</h3>
          <div className="space-y-3 mb-6">
            {selectedServices?.map((service) => (
              <div key={service?.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => handleServiceSelect(service)}
                    className="text-error hover:text-error/80 mr-3"
                  >
                    <Icon name="X" size={16} />
                  </button>
                  <span className="font-medium">{service?.name}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{service?.duration}</span>
                  <span className="font-semibold text-primary">${service?.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total: {Math.floor(totalDuration / 60)}h {totalDuration % 60}m</span>
              <span className="text-primary">${totalPrice}</span>
            </div>
          </div>
        </div>
      )}
      {/* Continue Button */}
      {selectedServices?.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={onNext}
            className="cta-morph bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold flex items-center"
          >
            Continue to Date & Time
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceSelector;