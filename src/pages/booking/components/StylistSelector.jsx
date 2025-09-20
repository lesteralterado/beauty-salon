import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const StylistSelector = ({ selectedStylist, onStylistSelect, selectedServices, onNext, onBack }) => {
  const [filterSpecialty, setFilterSpecialty] = useState('all');

  const stylists = [
    {
      id: 'sarah-chen',
      name: 'Sarah Chen',
      title: 'Master Aesthetician',
      specialties: ['facial', 'skincare'],
      experience: '8 years',
      rating: 4.9,
      reviews: 247,
      image: 'https://images.unsplash.com/photo-1594824388853-e0c5e6c8e4b3?w=400&h=400&fit=crop',
      bio: 'Specializing in advanced facial treatments and skin rejuvenation with a focus on natural, glowing results.',
      certifications: ['Advanced HydraFacial', 'Chemical Peel Specialist', 'Microneedling Expert'],
      availability: 'Available',
      nextAvailable: 'Today',
      featured: true
    },
    {
      id: 'marcus-rodriguez',
      name: 'Marcus Rodriguez',
      title: 'Senior Hair Stylist',
      specialties: ['hair', 'color'],
      experience: '12 years',
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Creative hair artist known for innovative color techniques and precision cuts that enhance natural beauty.',
      certifications: ['Balayage Specialist', 'Keratin Treatment Expert', 'Color Correction Master'],
      availability: 'Available',
      nextAvailable: 'Tomorrow'
    },
    {
      id: 'elena-vasquez',
      name: 'Elena Vasquez',
      title: 'Nail Artist & Technician',
      specialties: ['nails', 'nail-art'],
      experience: '6 years',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop',
      bio: 'Artistic nail specialist creating stunning designs and providing exceptional nail care services.',
      certifications: ['Gel Extension Expert', 'Nail Art Specialist', 'Russian Manicure Certified'],
      availability: 'Busy',
      nextAvailable: 'Dec 12'
    },
    {
      id: 'david-kim',
      name: 'David Kim',
      title: 'Massage Therapist',
      specialties: ['massage', 'wellness'],
      experience: '10 years',
      rating: 4.7,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Licensed massage therapist specializing in therapeutic and relaxation techniques for total wellness.',
      certifications: ['Licensed Massage Therapist', 'Hot Stone Specialist', 'Deep Tissue Expert'],
      availability: 'Available',
      nextAvailable: 'Today'
    },
    {
      id: 'isabella-martinez',
      name: 'Isabella Martinez',
      title: 'Makeup Artist',
      specialties: ['makeup', 'bridal'],
      experience: '7 years',
      rating: 4.9,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Professional makeup artist specializing in bridal and special event looks with a natural, elegant approach.',
      certifications: ['Bridal Makeup Specialist', 'Airbrush Certified', 'Special Effects Makeup'],
      availability: 'Available',
      nextAvailable: 'Today',
      featured: true
    },
    {
      id: 'any-stylist',
      name: 'Any Available Stylist',
      title: 'First Available',
      specialties: ['all'],
      experience: 'Varies',
      rating: 4.8,
      reviews: 0,
      image: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=400&fit=crop',
      bio: 'Book with the first available qualified stylist for your selected services.',
      certifications: [],
      availability: 'Available',
      nextAvailable: 'Today',
      isAny: true
    }
  ];

  const specialtyFilters = [
    { id: 'all', name: 'All Stylists', icon: 'Users' },
    { id: 'facial', name: 'Facial Specialists', icon: 'Sparkles' },
    { id: 'hair', name: 'Hair Stylists', icon: 'Scissors' },
    { id: 'nails', name: 'Nail Technicians', icon: 'Hand' },
    { id: 'massage', name: 'Massage Therapists', icon: 'Heart' },
    { id: 'makeup', name: 'Makeup Artists', icon: 'Palette' }
  ];

  // Filter stylists based on selected services
  const getRelevantStylists = () => {
    if (filterSpecialty === 'all') {
      return stylists;
    }
    
    return stylists?.filter(stylist => 
      stylist?.specialties?.includes(filterSpecialty) || stylist?.isAny
    );
  };

  const relevantStylists = getRelevantStylists();

  const handleStylistSelect = (stylist) => {
    onStylistSelect(stylist);
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Available':
        return 'text-success bg-success/10';
      case 'Busy':
        return 'text-warning bg-warning/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-headline text-2xl font-semibold mb-2">Choose Your Stylist</h2>
        <p className="text-muted-foreground">
          Select a specialist who matches your service needs
        </p>
      </div>
      {/* Specialty Filters */}
      <div className="flex flex-wrap gap-2 justify-center">
        {specialtyFilters?.map((filter) => (
          <button
            key={filter?.id}
            onClick={() => setFilterSpecialty(filter?.id)}
            className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 morph-hover ${
              filterSpecialty === filter?.id
                ? 'bg-primary text-white shadow-floating'
                : 'glass-panel text-foreground hover:bg-primary/10'
            }`}
          >
            <Icon name={filter?.icon} size={16} className="mr-2" />
            {filter?.name}
          </button>
        ))}
      </div>
      {/* Stylists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relevantStylists?.map((stylist) => {
          const isSelected = selectedStylist?.id === stylist?.id;
          
          return (
            <div
              key={stylist?.id}
              onClick={() => handleStylistSelect(stylist)}
              className={`glass-card cursor-pointer transition-all duration-300 morph-hover relative overflow-hidden ${
                isSelected ? 'ring-2 ring-primary shadow-floating' : ''
              }`}
            >
              {stylist?.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-accent text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                    <Icon name="Star" size={12} className="mr-1" />
                    Featured
                  </span>
                </div>
              )}
              <div className="p-6">
                {/* Profile Image */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <Image
                      src={stylist?.image}
                      alt={stylist?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Availability Badge */}
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(stylist?.availability)}`}>
                    {stylist?.availability}
                  </div>
                </div>

                {/* Basic Info */}
                <div className="text-center mb-4">
                  <h3 className="font-headline text-lg font-semibold mb-1">
                    {stylist?.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {stylist?.title}
                  </p>
                  
                  {!stylist?.isAny && (
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Icon name="Star" size={14} className="text-warning mr-1" />
                        <span className="font-medium">{stylist?.rating}</span>
                        <span className="text-muted-foreground ml-1">({stylist?.reviews})</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {stylist?.experience}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-3">
                  {stylist?.bio}
                </p>

                {/* Specialties */}
                {!stylist?.isAny && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {stylist?.specialties?.map((specialty) => (
                        <span
                          key={specialty}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full capitalize"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Next Available */}
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">
                    Next available: <span className="font-medium text-foreground">{stylist?.nextAvailable}</span>
                  </div>
                </div>

                {/* Selection Indicator */}
                <div className={`absolute top-4 left-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  isSelected 
                    ? 'bg-primary border-primary' :'border-muted-foreground/30'
                }`}>
                  {isSelected && (
                    <Icon name="Check" size={14} className="text-white" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Selected Stylist Details */}
      {selectedStylist && !selectedStylist?.isAny && (
        <div className="glass-panel p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-4">About {selectedStylist?.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Certifications</h4>
              <ul className="space-y-1">
                {selectedStylist?.certifications?.map((cert, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center">
                    <Icon name="Award" size={14} className="mr-2 text-primary" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Experience</h4>
              <p className="text-sm text-muted-foreground mb-3">
                {selectedStylist?.experience} of professional experience
              </p>
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  <Icon name="Star" size={16} className="text-warning mr-1" />
                  <span className="font-medium">{selectedStylist?.rating}/5.0</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {selectedStylist?.reviews} reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center px-6 py-3 rounded-xl font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <Icon name="ArrowLeft" size={18} className="mr-2" />
          Back to Date & Time
        </button>

        {selectedStylist && (
          <button
            onClick={onNext}
            className="cta-morph bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold flex items-center"
          >
            Continue to Details
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default StylistSelector;