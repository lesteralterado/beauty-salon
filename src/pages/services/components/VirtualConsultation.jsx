import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const VirtualConsultation = ({ onScheduleConsultation }) => {
  const [consultationData, setConsultationData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    preferredTime: '',
    skinConcerns: '',
    previousTreatments: ''
  });

  const serviceOptions = [
    { value: 'facial-rejuvenation', label: 'Facial Rejuvenation' },
    { value: 'advanced-skincare', label: 'Advanced Skincare' },
    { value: 'color-services', label: 'Color Services' },
    { value: 'signature-treatments', label: 'Signature Treatments' },
    { value: 'multiple-services', label: 'Multiple Services' },
    { value: 'not-sure', label: 'Not Sure Yet' }
  ];

  const timeOptions = [
    { value: 'morning', label: 'Morning (9AM - 12PM)' },
    { value: 'afternoon', label: 'Afternoon (12PM - 5PM)' },
    { value: 'evening', label: 'Evening (5PM - 8PM)' }
  ];

  const handleInputChange = (field, value) => {
    setConsultationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    onScheduleConsultation(consultationData);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <Icon name="Video" size={40} className="text-primary" />
          </div>
          
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Virtual Consultation
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get personalized beauty recommendations from our expert stylists through a complimentary virtual consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div className="space-y-6">
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-6">
              What You'll Get
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  icon: 'UserCheck',
                  title: 'Personalized Assessment',
                  description: 'Detailed skin analysis and beauty goal discussion with our certified specialists'
                },
                {
                  icon: 'Palette',
                  title: 'Custom Treatment Plan',
                  description: 'Tailored recommendations based on your unique needs and lifestyle'
                },
                {
                  icon: 'Calendar',
                  title: 'Flexible Scheduling',
                  description: 'Book at your convenience with same-day availability options'
                },
                {
                  icon: 'Shield',
                  title: 'No Commitment',
                  description: 'Completely free consultation with no obligation to book treatments'
                }
              ]?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={feature?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{feature?.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15min</div>
                <div className="text-xs text-muted-foreground">Average Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Free</div>
                <div className="text-xs text-muted-foreground">No Cost</div>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your name"
                  value={consultationData?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  required
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your@email.com"
                  value={consultationData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                />
              </div>

              <Input
                label="Phone Number"
                type="tel"
                placeholder="(555) 123-4567"
                value={consultationData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                required
              />

              <Select
                label="Service Interest"
                placeholder="What services interest you?"
                options={serviceOptions}
                value={consultationData?.serviceInterest}
                onChange={(value) => handleInputChange('serviceInterest', value)}
                required
              />

              <Select
                label="Preferred Time"
                placeholder="When works best for you?"
                options={timeOptions}
                value={consultationData?.preferredTime}
                onChange={(value) => handleInputChange('preferredTime', value)}
                required
              />

              <Input
                label="Skin Concerns"
                type="text"
                placeholder="Tell us about your main skin concerns"
                value={consultationData?.skinConcerns}
                onChange={(e) => handleInputChange('skinConcerns', e?.target?.value)}
                description="Optional: Help us prepare for your consultation"
              />

              <Input
                label="Previous Treatments"
                type="text"
                placeholder="Any recent beauty treatments?"
                value={consultationData?.previousTreatments}
                onChange={(e) => handleInputChange('previousTreatments', e?.target?.value)}
                description="Optional: Recent procedures or treatments"
              />

              <Button
                type="submit"
                variant="default"
                fullWidth
                className="cta-morph bg-primary hover:bg-primary/90"
                iconName="Video"
                iconPosition="left"
                iconSize={18}
              >
                Schedule Free Consultation
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By scheduling, you agree to receive consultation details via email and SMS
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualConsultation;