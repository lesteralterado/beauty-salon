import React from 'react';

import Icon from '../../../components/AppIcon';

const QuickActions = ({ onBookAppointment, onViewTreatments, onContactStylist, onUploadPhoto }) => {
  const actions = [
    {
      title: "Book Appointment",
      description: "Schedule your next beauty session",
      icon: "Calendar",
      color: "bg-primary",
      onClick: onBookAppointment
    },
    {
      title: "View Treatments",
      description: "Explore your treatment history",
      icon: "History",
      color: "bg-accent",
      onClick: onViewTreatments
    },
    {
      title: "Contact Stylist",
      description: "Message your beauty expert",
      icon: "MessageCircle",
      color: "bg-success",
      onClick: onContactStylist
    },
    {
      title: "Upload Photos",
      description: "Track your beauty journey",
      icon: "Camera",
      color: "bg-warning",
      onClick: onUploadPhoto
    }
  ];

  return (
    <div className="glass-card p-6 mb-8">
      <h2 className="font-headline text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Icon name="Zap" size={24} className="text-primary" />
        Quick Actions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions?.map((action, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 cursor-pointer morph-hover interactive-card"
            onClick={action?.onClick}
          >
            <div className={`w-12 h-12 ${action?.color} rounded-lg flex items-center justify-center mb-4 morph-hover group-hover:scale-110 transition-transform duration-300`}>
              <Icon name={action?.icon} size={24} className="text-white" />
            </div>
            
            <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
              {action?.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4">
              {action?.description}
            </p>
            
            <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
              <span>Get Started</span>
              <Icon name="ArrowRight" size={16} className="ml-1" />
            </div>
            
            {/* Morphing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;