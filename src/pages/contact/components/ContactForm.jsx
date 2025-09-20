import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    "General Inquiry",
    "Facial Treatments",
    "Hair Styling",
    "Makeup Services",
    "Bridal Packages",
    "Skin Care Consultation",
    "Beauty Academy",
    "Corporate Events"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredContact: 'email'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Send Us a Message
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services or want to schedule a consultation? Fill out the form below and we'll get back to you within 2 hours.
          </p>
        </div>

        <div className="glass-card p-8 lg:p-12">
          {submitStatus === 'success' && (
            <div className="mb-8 glass-panel p-4 rounded-lg border border-success/20">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-success" />
                <div>
                  <p className="font-medium text-success">Message sent successfully!</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 2 hours during business hours.</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 glass-panel p-4 rounded-lg border border-error/20">
              <div className="flex items-center space-x-3">
                <Icon name="AlertCircle" size={20} className="text-error" />
                <div>
                  <p className="font-medium text-error">Failed to send message</p>
                  <p className="text-sm text-muted-foreground">Please try again or contact us directly.</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="morph-hover"
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                className="morph-hover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData?.phone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
                className="morph-hover"
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData?.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 glass-panel rounded-lg border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 morph-hover"
                  required
                >
                  <option value="">Select a service</option>
                  {serviceOptions?.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Preferred Contact Method
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData?.preferredContact === 'email'}
                    onChange={handleInputChange}
                    className="text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-foreground">Email</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData?.preferredContact === 'phone'}
                    onChange={handleInputChange}
                    className="text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-foreground">Phone</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                name="message"
                value={formData?.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Tell us about your beauty goals, preferred appointment times, or any questions you have..."
                className="w-full px-4 py-3 glass-panel rounded-lg border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 morph-hover resize-none"
                required
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                disabled={isSubmitting}
                className="cta-morph bg-primary hover:bg-primary/90 text-white font-cta font-semibold"
                iconName={isSubmitting ? "Loader2" : "Send"}
                iconPosition="left"
                iconSize={20}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;