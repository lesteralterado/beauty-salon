import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DateTimeSelector = ({ selectedDateTime, onDateTimeSelect, selectedServices, onNext, onBack }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Generate next 30 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date?.setDate(today?.getDate() + i);
      dates?.push(date);
    }
    return dates;
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 9; // 9 AM
    const endHour = 19; // 7 PM
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour?.toString()?.padStart(2, '0')}:${minute?.toString()?.padStart(2, '0')}`;
        const isAvailable = Math.random() > 0.3; // 70% availability
        slots?.push({ time, available: isAvailable });
      }
    }
    return slots;
  };

  const dates = generateDates();
  const timeSlots = generateTimeSlots();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (selectedDate) {
      const dateTime = new Date(selectedDate);
      const [hours, minutes] = time?.split(':');
      dateTime?.setHours(parseInt(hours), parseInt(minutes));
      onDateTimeSelect(dateTime);
    }
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const isToday = (date) => {
    const today = new Date();
    return date?.toDateString() === today?.toDateString();
  };

  const isTomorrow = (date) => {
    const tomorrow = new Date();
    tomorrow?.setDate(tomorrow?.getDate() + 1);
    return date?.toDateString() === tomorrow?.toDateString();
  };

  const getDateLabel = (date) => {
    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    return formatDate(date);
  };

  const totalDuration = selectedServices?.reduce((sum, service) => {
    const duration = parseInt(service?.duration);
    return sum + duration;
  }, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-headline text-2xl font-semibold mb-2">Select Date & Time</h2>
        <p className="text-muted-foreground">
          Choose your preferred appointment time ({Math.floor(totalDuration / 60)}h {totalDuration % 60}m duration)
        </p>
      </div>
      {/* Calendar */}
      <div className="glass-panel p-6 rounded-xl">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <Icon name="Calendar" size={20} className="mr-2" />
          Select Date
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {dates?.map((date, index) => {
            const isSelected = selectedDate && date?.toDateString() === selectedDate?.toDateString();
            const isPast = date < new Date()?.setHours(0, 0, 0, 0);
            
            return (
              <button
                key={index}
                onClick={() => !isPast && handleDateSelect(date)}
                disabled={isPast}
                className={`p-4 rounded-xl text-center transition-all duration-300 morph-hover ${
                  isPast
                    ? 'opacity-50 cursor-not-allowed bg-muted'
                    : isSelected
                    ? 'bg-primary text-white shadow-floating'
                    : 'glass-card hover:bg-primary/10'
                }`}
              >
                <div className="text-sm font-medium">
                  {getDateLabel(date)}
                </div>
                <div className="text-xs opacity-80 mt-1">
                  {date?.getDate()}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {/* Time Slots */}
      {selectedDate && (
        <div className="glass-panel p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-4 flex items-center">
            <Icon name="Clock" size={20} className="mr-2" />
            Available Times for {formatDate(selectedDate)}
          </h3>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {timeSlots?.map((slot, index) => {
              const isSelected = selectedTime === slot?.time;
              
              return (
                <button
                  key={index}
                  onClick={() => slot?.available && handleTimeSelect(slot?.time)}
                  disabled={!slot?.available}
                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 morph-hover ${
                    !slot?.available
                      ? 'opacity-50 cursor-not-allowed bg-muted text-muted-foreground'
                      : isSelected
                      ? 'bg-primary text-white shadow-floating'
                      : 'glass-card hover:bg-primary/10'
                  }`}
                >
                  {slot?.time}
                </button>
              );
            })}
          </div>
          
          {timeSlots?.filter(slot => slot?.available)?.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Icon name="Clock" size={48} className="mx-auto mb-4 opacity-50" />
              <p>No available times for this date</p>
            </div>
          )}
        </div>
      )}
      {/* Selected Summary */}
      {selectedDate && selectedTime && (
        <div className="glass-panel p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-4">Appointment Summary</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium">{formatDate(selectedDate)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Time:</span>
              <span className="font-medium">{selectedTime}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">{Math.floor(totalDuration / 60)}h {totalDuration % 60}m</span>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-3">
              <span className="text-muted-foreground">Services:</span>
              <span className="font-medium">{selectedServices?.length} selected</span>
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
          Back to Services
        </button>

        {selectedDate && selectedTime && (
          <button
            onClick={onNext}
            className="cta-morph bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold flex items-center"
          >
            Continue to Stylist
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default DateTimeSelector;