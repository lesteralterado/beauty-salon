import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const UpcomingAppointments = ({ appointments, onReschedule, onCancel }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'text-success bg-success/10';
      case 'pending': return 'text-warning bg-warning/10';
      case 'rescheduled': return 'text-accent bg-accent/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date?.getDate(),
      month: date?.toLocaleDateString('en-US', { month: 'short' }),
      time: date?.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      weekday: date?.toLocaleDateString('en-US', { weekday: 'long' })
    };
  };

  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
          <Icon name="Calendar" size={24} className="text-primary" />
          Upcoming Appointments
        </h2>
        <Button
          variant="outline"
          size="sm"
          iconName="Plus"
          iconPosition="left"
          onClick={() => window.location.href = '/booking'}
        >
          Book New
        </Button>
      </div>
      {appointments?.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Calendar" size={32} className="text-muted-foreground" />
          </div>
          <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
            No Upcoming Appointments
          </h3>
          <p className="text-muted-foreground mb-4">
            Ready for your next beauty transformation?
          </p>
          <Button
            variant="default"
            iconName="Calendar"
            iconPosition="left"
            onClick={() => window.location.href = '/booking'}
          >
            Schedule Appointment
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {appointments?.map((appointment) => {
            const dateInfo = formatDate(appointment?.date);
            return (
              <div
                key={appointment?.id}
                className="group relative overflow-hidden rounded-xl p-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 morph-hover"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* Date Display */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex flex-col items-center justify-center morph-hover">
                      <div className="text-2xl font-bold text-primary font-headline">
                        {dateInfo?.day}
                      </div>
                      <div className="text-xs text-primary font-medium">
                        {dateInfo?.month}
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <h3 className="font-headline text-lg font-semibold text-foreground mb-1">
                          {appointment?.service}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {dateInfo?.time} • {dateInfo?.weekday}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="MapPin" size={14} />
                            {appointment?.location}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <Image
                                src={appointment?.stylist?.avatar}
                                alt={appointment?.stylist?.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {appointment?.stylist?.name}
                            </span>
                          </div>
                          
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment?.status)}`}>
                            {appointment?.status?.charAt(0)?.toUpperCase() + appointment?.status?.slice(1)}
                          </div>
                        </div>
                      </div>

                      {/* Price and Duration */}
                      <div className="text-right">
                        <div className="text-xl font-bold text-foreground font-headline mb-1">
                          ${appointment?.price}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {appointment?.duration} minutes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Calendar"
                    iconPosition="left"
                    onClick={() => onReschedule(appointment?.id)}
                  >
                    Reschedule
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="MessageCircle"
                    iconPosition="left"
                  >
                    Message Stylist
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="X"
                    iconPosition="left"
                    onClick={() => onCancel(appointment?.id)}
                    className="text-error hover:text-error hover:bg-error/10"
                  >
                    Cancel
                  </Button>
                </div>
                {/* Morphing hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UpcomingAppointments;