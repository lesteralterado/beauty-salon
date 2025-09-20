import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const certifications = [
    {
      icon: "Award",
      title: "Licensed Beauty Professionals",
      description: "All stylists are state-certified and continuously trained",
      color: "text-success"
    },
    {
      icon: "Shield",
      title: "Health & Safety Certified",
      description: "Exceeds all health department standards and protocols",
      color: "text-primary"
    },
    {
      icon: "Star",
      title: "Award-Winning Salon",
      description: "Best Beauty Salon 2024 - City Beauty Awards",
      color: "text-warning"
    },
    {
      icon: "Users",
      title: "5000+ Happy Clients",
      description: "Trusted by thousands for their beauty transformations",
      color: "text-accent"
    }
  ];

  const policies = [
    {
      icon: "Clock",
      title: "Flexible Cancellation",
      description: "24-hour cancellation policy with full refund",
      details: "Cancel or reschedule up to 24 hours before your appointment for a full refund. Emergency cancellations are handled case-by-case."
    },
    {
      icon: "RefreshCw",
      title: "Satisfaction Guarantee",
      description: "100% satisfaction or we\'ll make it right",
      details: "Not happy with your service? We\'ll work with you to fix any issues or provide a complimentary touch-up within 7 days."
    },
    {
      icon: "Lock",
      title: "Privacy Protection",
      description: "Your personal information is secure and private",
      details: "We follow strict privacy protocols and never share your personal information with third parties without consent."
    },
    {
      icon: "CreditCard",
      title: "Secure Payments",
      description: "SSL-encrypted payment processing",
      details: "All payments are processed through secure, encrypted channels. We accept all major credit cards and digital payments."
    }
  ];

  const testimonialHighlights = [
    {
      rating: 5,
      text: "Absolutely amazing experience! The team is professional and the results exceeded my expectations.",
      author: "Sarah M.",
      service: "Bridal Package"
    },
    {
      rating: 5,
      text: "Best salon in the city! Clean, modern, and the staff really knows what they're doing.",
      author: "Jennifer L.",
      service: "Facial Treatment"
    },
    {
      rating: 5,
      text: "I\'ve been coming here for 2 years. Consistent quality and excellent customer service every time.",
      author: "Maria R.",
      service: "Hair Styling"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={14}
        className={index < rating ? "text-warning fill-current" : "text-muted-foreground"}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Trust Morphic Beauty
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your safety, satisfaction, and privacy are our top priorities. Here's what makes us a trusted choice for your beauty needs.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications?.map((cert, index) => (
            <div key={index} className="glass-card p-6 text-center morph-hover">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${cert?.color} bg-current/10`}>
                <Icon name={cert?.icon} size={24} className={cert?.color} />
              </div>
              
              <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
                {cert?.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Policies */}
          <div className="space-y-6">
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-6">
              Our Policies
            </h3>
            
            {policies?.map((policy, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center">
                      <Icon name={policy?.icon} size={20} className="text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-headline text-lg font-semibold text-foreground mb-1">
                      {policy?.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {policy?.description}
                    </p>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {policy?.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Highlights */}
          <div className="space-y-6">
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-6">
              Client Testimonials
            </h3>
            
            {testimonialHighlights?.map((testimonial, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center space-x-1 mb-3">
                  {renderStars(testimonial?.rating)}
                </div>
                
                <blockquote className="text-foreground leading-relaxed mb-4">
                  "{testimonial?.text}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{testimonial?.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial?.service}</p>
                  </div>
                  
                  <Icon name="Quote" size={20} className="text-primary opacity-50" />
                </div>
              </div>
            ))}

            {/* View More Reviews */}
            <div className="text-center pt-4">
              <button
                onClick={() => window.location.href = '/portfolio'}
                className="glass-panel px-6 py-3 rounded-lg morph-hover group"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-foreground">View All Reviews</span>
                  <Icon name="ArrowRight" size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 glass-panel rounded-full mb-6">
              <Icon name="Phone" size={24} className="text-warning" />
            </div>
            
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
              Emergency & After Hours
            </h3>
            
            <p className="text-muted-foreground mb-6">
              For bridal emergencies, special events, or urgent beauty needs outside regular hours, we're here to help.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <Icon name="Clock" size={18} className="text-warning" />
                <span className="text-foreground">Emergency Line: Available 24/7</span>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <Icon name="Phone" size={18} className="text-warning" />
                <a 
                  href="tel:+15551239999" 
                  className="text-warning font-medium hover:underline"
                >
                  (555) 123-9999
                </a>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Additional charges may apply for emergency and after-hours services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;