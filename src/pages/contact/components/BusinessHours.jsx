import React from 'react';
import Icon from '../../../components/AppIcon';

const BusinessHours = () => {
  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 8:00 PM", isToday: false, isOpen: true },
    { day: "Tuesday", hours: "9:00 AM - 8:00 PM", isToday: true, isOpen: true },
    { day: "Wednesday", hours: "9:00 AM - 8:00 PM", isToday: false, isOpen: true },
    { day: "Thursday", hours: "9:00 AM - 9:00 PM", isToday: false, isOpen: true },
    { day: "Friday", hours: "9:00 AM - 9:00 PM", isToday: false, isOpen: true },
    { day: "Saturday", hours: "8:00 AM - 7:00 PM", isToday: false, isOpen: true },
    { day: "Sunday", hours: "10:00 AM - 6:00 PM", isToday: false, isOpen: true }
  ];

  const specialServices = [
    {
      icon: "Clock",
      title: "Extended Hours",
      description: "Late appointments available by request",
      color: "text-primary"
    },
    {
      icon: "Calendar",
      title: "Holiday Schedule",
      description: "Special hours during holidays - call ahead",
      color: "text-accent"
    },
    {
      icon: "Users",
      title: "Group Bookings",
      description: "Private parties and events outside regular hours",
      color: "text-success"
    },
    {
      icon: "Phone",
      title: "Emergency Services",
      description: "Bridal emergencies and special occasions",
      color: "text-warning"
    }
  ];

  const getCurrentStatus = () => {
    const now = new Date();
    const currentHour = now?.getHours();
    const currentDay = now?.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Simplified logic - assuming Tuesday is today based on mock data
    if (currentHour >= 9 && currentHour < 20) {
      return { isOpen: true, message: "We're Open Now!" };
    } else {
      return { isOpen: false, message: "Currently Closed" };
    }
  };

  const status = getCurrentStatus();

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Business Hours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to serve you with flexible scheduling and extended hours for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hours Schedule */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline text-2xl font-semibold text-foreground">
                  Weekly Schedule
                </h3>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                  status?.isOpen ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    status?.isOpen ? 'bg-success animate-pulse' : 'bg-muted-foreground'
                  }`}></div>
                  <span className="text-sm font-medium">{status?.message}</span>
                </div>
              </div>

              <div className="space-y-3">
                {businessHours?.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                      schedule?.isToday 
                        ? 'glass-panel border border-primary/20 morph-hover' :'hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {schedule?.isToday && (
                        <Icon name="Calendar" size={16} className="text-primary" />
                      )}
                      <span className={`font-medium ${
                        schedule?.isToday ? 'text-primary' : 'text-foreground'
                      }`}>
                        {schedule?.day}
                        {schedule?.isToday && <span className="text-xs ml-2">(Today)</span>}
                      </span>
                    </div>
                    <span className="text-muted-foreground">{schedule?.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => window.location.href = '/booking'}
                className="glass-card p-4 interactive-card group"
              >
                <div className="text-center">
                  <Icon name="Calendar" size={24} className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-medium text-foreground">Book Now</p>
                  <p className="text-xs text-muted-foreground">Online scheduling</p>
                </div>
              </button>
              
              <button
                onClick={() => window.location.href = 'tel:+15551232328'}
                className="glass-card p-4 interactive-card group"
              >
                <div className="text-center">
                  <Icon name="Phone" size={24} className="text-success mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-medium text-foreground">Call Us</p>
                  <p className="text-xs text-muted-foreground">Speak with expert</p>
                </div>
              </button>
            </div>
          </div>

          {/* Special Services */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-headline text-2xl font-semibold text-foreground mb-6">
                Special Services
              </h3>
              
              <div className="space-y-4">
                {specialServices?.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-colors duration-300">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${service?.color} bg-current/10`}>
                      <Icon name={service?.icon} size={18} className={service?.color} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{service?.title}</h4>
                      <p className="text-sm text-muted-foreground">{service?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notes */}
            <div className="glass-card p-6">
              <h3 className="font-headline text-xl font-semibold text-foreground mb-4">
                Important Notes
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Last appointments are scheduled 1 hour before closing time
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    24-hour cancellation policy applies to all appointments
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Heart" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Walk-ins welcome based on availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;