import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const BookingDetails = ({ 
  bookingDetails, 
  onDetailsUpdate, 
  selectedServices, 
  selectedDateTime, 
  selectedStylist, 
  onNext, 
  onBack 
}) => {
  const [formData, setFormData] = useState({
    firstName: bookingDetails?.firstName || '',
    lastName: bookingDetails?.lastName || '',
    email: bookingDetails?.email || '',
    phone: bookingDetails?.phone || '',
    notes: bookingDetails?.notes || '',
    isNewClient: bookingDetails?.isNewClient || false,
    marketingConsent: bookingDetails?.marketingConsent || false,
    reminderPreference: bookingDetails?.reminderPreference || 'both'
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.firstName?.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData?.lastName?.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onDetailsUpdate(formData);
      onNext();
    }
  };

  const totalPrice = selectedServices?.reduce((sum, service) => sum + service?.price, 0);
  const totalDuration = selectedServices?.reduce((sum, service) => {
    const duration = parseInt(service?.duration);
    return sum + duration;
  }, 0);

  const formatDateTime = (dateTime) => {
    return dateTime?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-headline text-2xl font-semibold mb-2">Booking Details</h2>
        <p className="text-muted-foreground">
          Please provide your information to complete the booking
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Icon name="User" size={20} className="mr-2" />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                value={formData?.firstName}
                onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                error={errors?.firstName}
                required
              />
              
              <Input
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                value={formData?.lastName}
                onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                error={errors?.lastName}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@example.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                description="We'll send your confirmation here"
                required
              />
              
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                error={errors?.phone}
                description="For appointment reminders"
                required
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Additional Information
            </h3>
            
            <Input
              label="Special Notes or Requests"
              type="text"
              placeholder="Any allergies, preferences, or special requests..."
              value={formData?.notes}
              onChange={(e) => handleInputChange('notes', e?.target?.value)}
              description="Help us provide the best service for you"
            />

            <div className="mt-6 space-y-4">
              <Checkbox
                label="I am a new client"
                checked={formData?.isNewClient}
                onChange={(e) => handleInputChange('isNewClient', e?.target?.checked)}
                description="First time visiting Morphic Beauty?"
              />

              <Checkbox
                label="Send me promotional offers and beauty tips"
                checked={formData?.marketingConsent}
                onChange={(e) => handleInputChange('marketingConsent', e?.target?.checked)}
                description="Stay updated with our latest services and offers"
              />
            </div>
          </div>

          {/* Reminder Preferences */}
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Icon name="Bell" size={20} className="mr-2" />
              Reminder Preferences
            </h3>
            
            <div className="space-y-3">
              {[
                { value: 'email', label: 'Email only', icon: 'Mail' },
                { value: 'sms', label: 'SMS only', icon: 'MessageCircle' },
                { value: 'both', label: 'Both email and SMS', icon: 'Bell' },
                { value: 'none', label: 'No reminders', icon: 'BellOff' }
              ]?.map((option) => (
                <label key={option?.value} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="reminderPreference"
                    value={option?.value}
                    checked={formData?.reminderPreference === option?.value}
                    onChange={(e) => handleInputChange('reminderPreference', e?.target?.value)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 transition-all duration-200 ${
                    formData?.reminderPreference === option?.value
                      ? 'bg-primary border-primary' :'border-muted-foreground/30'
                  }`}>
                    {formData?.reminderPreference === option?.value && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <Icon name={option?.icon} size={16} className="mr-2 text-muted-foreground" />
                  <span className="font-medium">{option?.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="lg:col-span-1">
          <div className="glass-panel p-6 rounded-xl sticky top-8">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Icon name="Calendar" size={20} className="mr-2" />
              Booking Summary
            </h3>

            {/* Date & Time */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Icon name="Clock" size={16} className="mr-2 text-primary" />
                <span className="font-medium">Date & Time</span>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                {formatDateTime(selectedDateTime)}
              </p>
              <p className="text-sm text-muted-foreground ml-6">
                Duration: {Math.floor(totalDuration / 60)}h {totalDuration % 60}m
              </p>
            </div>

            {/* Stylist */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Icon name="User" size={16} className="mr-2 text-primary" />
                <span className="font-medium">Stylist</span>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                {selectedStylist?.name}
              </p>
              <p className="text-xs text-muted-foreground ml-6">
                {selectedStylist?.title}
              </p>
            </div>

            {/* Services */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Icon name="Sparkles" size={16} className="mr-2 text-primary" />
                <span className="font-medium">Services</span>
              </div>
              <div className="space-y-2">
                {selectedServices?.map((service) => (
                  <div key={service?.id} className="flex items-center justify-between ml-6">
                    <div>
                      <p className="text-sm font-medium">{service?.name}</p>
                      <p className="text-xs text-muted-foreground">{service?.duration}</p>
                    </div>
                    <span className="text-sm font-semibold">${service?.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="text-primary">${totalPrice}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Payment will be processed at the salon
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center px-6 py-3 rounded-xl font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <Icon name="ArrowLeft" size={18} className="mr-2" />
          Back to Stylist
        </button>

        <button
          onClick={handleSubmit}
          className="cta-morph bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold flex items-center"
        >
          Continue to Payment
          <Icon name="ArrowRight" size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default BookingDetails;