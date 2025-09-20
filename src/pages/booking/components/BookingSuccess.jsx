import React, { useEffect, useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BookingSuccess = ({ 
  bookingData, 
  selectedServices, 
  selectedDateTime, 
  selectedStylist, 
  bookingDetails 
}) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [bookingId] = useState(`MB${Date.now()?.toString()?.slice(-6)}`);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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

  const totalPrice = selectedServices?.reduce((sum, service) => sum + service?.price, 0);
  const taxAmount = totalPrice * 0.08;
  const finalTotal = totalPrice + taxAmount;

  const handleAddToCalendar = () => {
    const startDate = new Date(selectedDateTime);
    const endDate = new Date(startDate);
    endDate?.setHours(endDate?.getHours() + 2); // Assume 2 hour duration

    const formatDate = (date) => {
      return date?.toISOString()?.replace(/[-:]/g, '')?.split('.')?.[0] + 'Z';
    };

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Beauty Appointment at Morphic Beauty&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=Services: ${selectedServices?.map(s => s?.name)?.join(', ')}%0AStylist: ${selectedStylist?.name}&location=Morphic Beauty Salon`;
    
    window.open(calendarUrl, '_blank');
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const handleNewBooking = () => {
    window.location?.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/homepage';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)]?.map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <Icon 
                name={['Sparkles', 'Star', 'Heart']?.[Math.floor(Math.random() * 3)]} 
                size={16 + Math.random() * 16} 
                className="text-primary/30" 
              />
            </div>
          ))}
        </div>
      )}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto morph-3d">
                <Icon name="Check" size={48} className="text-white" />
              </div>
              <div className="absolute -inset-4 bg-success/20 rounded-full animate-ping" />
            </div>
            
            <h1 className="font-headline text-4xl font-bold text-foreground mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Your beauty transformation awaits
            </p>
            <p className="text-lg font-medium text-primary">
              Booking ID: #{bookingId}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Appointment Details */}
              <div className="glass-card p-8">
                <h2 className="font-headline text-2xl font-semibold mb-6 flex items-center">
                  <Icon name="Calendar" size={24} className="mr-3 text-primary" />
                  Appointment Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">
                        Date & Time
                      </h3>
                      <p className="text-lg font-medium">
                        {formatDateTime(selectedDateTime)}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">
                        Stylist
                      </h3>
                      <p className="text-lg font-medium">{selectedStylist?.name}</p>
                      <p className="text-sm text-muted-foreground">{selectedStylist?.title}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">
                        Client
                      </h3>
                      <p className="text-lg font-medium">
                        {bookingDetails?.firstName} {bookingDetails?.lastName}
                      </p>
                      <p className="text-sm text-muted-foreground">{bookingDetails?.email}</p>
                      <p className="text-sm text-muted-foreground">{bookingDetails?.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="glass-card p-8">
                <h2 className="font-headline text-2xl font-semibold mb-6 flex items-center">
                  <Icon name="Sparkles" size={24} className="mr-3 text-primary" />
                  Booked Services
                </h2>

                <div className="space-y-4">
                  {selectedServices?.map((service, index) => (
                    <div key={service?.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                          <span className="font-bold text-primary">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">{service?.name}</h3>
                          <p className="text-sm text-muted-foreground">{service?.duration}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">${service?.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border mt-6 pt-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${totalPrice?.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax (8%)</span>
                      <span>${taxAmount?.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold border-t border-border pt-2">
                      <span>Total</span>
                      <span className="text-primary">${finalTotal?.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Information */}
              <div className="glass-card p-8">
                <h2 className="font-headline text-2xl font-semibold mb-6 flex items-center">
                  <Icon name="Info" size={24} className="mr-3 text-primary" />
                  Important Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Icon name="MapPin" size={18} className="mr-2 text-accent" />
                      Location
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Morphic Beauty Salon<br />
                      123 Beauty Boulevard<br />
                      Los Angeles, CA 90210
                    </p>
                    <p className="text-sm text-primary font-medium">
                      Free parking available
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Icon name="Clock" size={18} className="mr-2 text-accent" />
                      Preparation
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Arrive 15 minutes early</li>
                      <li>• Bring a valid ID</li>
                      <li>• Avoid caffeine before facial treatments</li>
                      <li>• Wear comfortable clothing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Panel */}
            <div className="lg:col-span-1">
              <div className="glass-card p-8 sticky top-8">
                <h2 className="font-headline text-xl font-semibold mb-6">
                  What's Next?
                </h2>

                <div className="space-y-4">
                  <Button
                    variant="default"
                    fullWidth
                    onClick={handleAddToCalendar}
                    iconName="Calendar"
                    iconPosition="left"
                    className="justify-center"
                  >
                    Add to Calendar
                  </Button>

                  <Button
                    variant="outline"
                    fullWidth
                    onClick={handlePrintReceipt}
                    iconName="Printer"
                    iconPosition="left"
                    className="justify-center"
                  >
                    Print Receipt
                  </Button>

                  <Button
                    variant="secondary"
                    fullWidth
                    onClick={handleNewBooking}
                    iconName="Plus"
                    iconPosition="left"
                    className="justify-center"
                  >
                    Book Another Service
                  </Button>

                  <Button
                    variant="ghost"
                    fullWidth
                    onClick={handleGoHome}
                    iconName="Home"
                    iconPosition="left"
                    className="justify-center"
                  >
                    Return to Home
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Icon name="Mail" size={18} className="mr-2 text-primary" />
                    Confirmation Sent
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    A confirmation email has been sent to {bookingDetails?.email} with all your appointment details.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-accent/5 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Icon name="Phone" size={18} className="mr-2 text-accent" />
                    Need Help?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Contact us if you need to reschedule or have questions.
                  </p>
                  <p className="text-sm font-medium">
                    📞 (555) 123-BEAUTY<br />
                    ✉️ hello@morphicbeauty.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;