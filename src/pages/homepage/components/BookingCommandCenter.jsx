import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const BookingCommandCenter = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedStylist, setSelectedStylist] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { value: 'facial-hydra', label: 'HydraFacial Treatment - $120' },
    { value: 'hair-cut-color', label: 'Cut & Color - $150' },
    { value: 'makeup-bridal', label: 'Bridal Makeup - $200' },
    { value: 'nail-gel', label: 'Gel Manicure - $45' },
    { value: 'body-massage', label: 'Relaxing Massage - $180' },
    { value: 'lash-extensions', label: 'Lash Extensions - $85' }
  ];

  const stylists = [
    { value: 'sarah-m', label: 'Sarah Martinez - Senior Stylist' },
    { value: 'emma-l', label: 'Emma Liu - Color Specialist' },
    { value: 'jessica-r', label: 'Jessica Rodriguez - Makeup Artist' },
    { value: 'maria-k', label: 'Maria Kim - Facial Expert' },
    { value: 'any', label: 'Any Available Stylist' }
  ];

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' }
  ];

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setSelectedDate('');
    setSelectedTime('');
    setSelectedService('');
    setSelectedStylist('');
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setIsSubmitting(false);
    
    alert('Booking request submitted successfully! We will contact you shortly to confirm your appointment.');
  };

  const quickBookServices = [
    {
      id: 1,
      name: 'Express Facial',
      duration: '30 min',
      price: '$80',
      icon: 'Sparkles',
      popular: true
    },
    {
      id: 2,
      name: 'Quick Blowout',
      duration: '45 min',
      price: '$65',
      icon: 'Wind',
      popular: false
    },
    {
      id: 3,
      name: 'Makeup Touch-up',
      duration: '20 min',
      price: '$45',
      icon: 'Palette',
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 text-morph">
            Booking Command Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your transformation with our advanced booking system. Choose your preferred service, stylist, and time slot for the perfect beauty experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Quick Book Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-headline text-2xl font-semibold mb-8 text-foreground">
              Quick Book Popular Services
            </h3>
            
            <div className="space-y-4 mb-8">
              {quickBookServices?.map((service) => (
                <motion.div
                  key={service?.id}
                  className="glass-card p-6 cursor-pointer group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon name={service?.icon} size={20} className="text-white" />
                      </motion.div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-foreground">{service?.name}</h4>
                          {service?.popular && (
                            <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{service?.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-primary">{service?.price}</div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 border-primary/30 text-primary hover:bg-primary/10"
                        iconName="Calendar"
                        iconPosition="left"
                        iconSize={14}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 3D Salon Layout Preview */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4 text-foreground">Salon Layout Preview</h4>
              <div className="bg-gradient-to-br from-muted/50 to-secondary/30 rounded-lg p-6 text-center">
                <Icon name="Building" size={48} className="text-primary mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">
                  Interactive 3D salon layout coming soon! Choose your preferred station and view real-time availability.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="font-headline text-2xl font-semibold mb-8 text-foreground">
                Schedule Your Appointment
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="Enter your name"
                    value={clientName}
                    onChange={(e) => setClientName(e?.target?.value)}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your@email.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e?.target?.value)}
                    required
                  />
                </div>

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e?.target?.value)}
                  required
                />

                {/* Service Selection */}
                <Select
                  label="Choose Service"
                  placeholder="Select a service"
                  options={services}
                  value={selectedService}
                  onChange={setSelectedService}
                  required
                  searchable
                />

                <Select
                  label="Preferred Stylist"
                  placeholder="Select a stylist"
                  options={stylists}
                  value={selectedStylist}
                  onChange={setSelectedStylist}
                  required
                />

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Preferred Date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e?.target?.value)}
                    min={new Date()?.toISOString()?.split('T')?.[0]}
                    required
                  />
                  <Select
                    label="Preferred Time"
                    placeholder="Select time"
                    options={timeSlots}
                    value={selectedTime}
                    onChange={setSelectedTime}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  className="cta-morph bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-cta font-semibold py-4"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={20}
                >
                  {isSubmitting ? 'Processing...' : 'Book Appointment'}
                </Button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-start">
                  <Icon name="Info" size={20} className="text-primary mr-3 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">
                      <strong>Booking Policy:</strong> Appointments can be cancelled or rescheduled up to 24 hours in advance.
                    </p>
                    <p>
                      <strong>Consultation:</strong> First-time clients receive a complimentary 15-minute consultation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="font-headline text-xl font-semibold mb-6 text-foreground">
              Need Help with Booking?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon name="Phone" size={24} className="text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Call Us</p>
                <p className="text-sm text-muted-foreground">(555) 123-BEAUTY</p>
              </div>
              <div className="text-center">
                <Icon name="MessageCircle" size={24} className="text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Live Chat</p>
                <p className="text-sm text-muted-foreground">Available 9 AM - 8 PM</p>
              </div>
              <div className="text-center">
                <Icon name="Mail" size={24} className="text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Email Us</p>
                <p className="text-sm text-muted-foreground">book@morphicbeauty.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCommandCenter;