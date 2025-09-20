import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      primary: "(555) 123-BEAUTY",
      secondary: "Available 9AM - 8PM",
      action: "tel:+15551232328",
      color: "text-success"
    },
    {
      icon: "Mail",
      title: "Email Us",
      primary: "hello@morphicbeauty.com",
      secondary: "Response within 2 hours",
      action: "mailto:hello@morphicbeauty.com",
      color: "text-primary"
    },
    {
      icon: "MessageSquare",
      title: "Live Chat",
      primary: "Instant Support",
      secondary: "Available during business hours",
      action: "#",
      color: "text-accent"
    },
    {
      icon: "Calendar",
      title: "Book Online",
      primary: "24/7 Booking",
      secondary: "Instant confirmation",
      action: "/booking",
      color: "text-cta"
    }
  ];

  const handleContactAction = (action) => {
    if (action?.startsWith('tel:') || action?.startsWith('mailto:')) {
      window.location.href = action;
    } else if (action === '#') {
      // Live chat functionality would go here
      console.log('Opening live chat...');
    } else {
      window.location.href = action;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred method to reach our beauty experts. We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods?.map((method, index) => (
            <div
              key={index}
              className="glass-card p-6 interactive-card cursor-pointer group"
              onClick={() => handleContactAction(method?.action)}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${method?.color} bg-current/10 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={method?.icon} size={24} className={method?.color} />
              </div>
              
              <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                {method?.title}
              </h3>
              
              <p className="text-foreground font-medium mb-1">
                {method?.primary}
              </p>
              
              <p className="text-sm text-muted-foreground">
                {method?.secondary}
              </p>
              
              <div className="mt-4 flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm font-medium mr-2">Connect Now</span>
                <Icon name="ArrowRight" size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center">
          <div className="glass-panel p-6 rounded-xl inline-block morph-hover">
            <div className="flex items-center justify-center space-x-4">
              <Icon name="AlertCircle" size={20} className="text-warning" />
              <div>
                <span className="text-sm text-muted-foreground">Emergency or After Hours: </span>
                <a 
                  href="tel:+15551239999" 
                  className="text-warning font-medium hover:underline"
                >
                  (555) 123-9999
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;