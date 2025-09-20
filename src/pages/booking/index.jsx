import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import ServiceSelector from './components/ServiceSelector';
import DateTimeSelector from './components/DateTimeSelector';
import StylistSelector from './components/StylistSelector';
import BookingDetails from './components/BookingDetails';
import PaymentConfirmation from './components/PaymentConfirmation';
import BookingSuccess from './components/BookingSuccess';
import Icon from '../../components/AppIcon';
import Footer from '../../components/Footer';

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [selectedStylist, setSelectedStylist] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const steps = [
    { id: 1, name: 'Services', icon: 'Sparkles', description: 'Choose your treatments' },
    { id: 2, name: 'Date & Time', icon: 'Calendar', description: 'Pick your slot' },
    { id: 3, name: 'Stylist', icon: 'User', description: 'Select specialist' },
    { id: 4, name: 'Details', icon: 'FileText', description: 'Your information' },
    { id: 5, name: 'Payment', icon: 'CreditCard', description: 'Secure checkout' },
    { id: 6, name: 'Confirmation', icon: 'Check', description: 'All set!' }
  ];

  const handleServiceSelection = (services) => {
    setSelectedServices(services);
  };

  const handleDateTimeSelection = (dateTime) => {
    setSelectedDateTime(dateTime);
  };

  const handleStylistSelection = (stylist) => {
    setSelectedStylist(stylist);
  };

  const handleDetailsUpdate = (details) => {
    setBookingDetails(details);
  };

  const handlePaymentConfirmation = (payment) => {
    setPaymentData(payment);
    setCurrentStep(6);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 6));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'upcoming';
  };

  if (currentStep === 6) {
    return (
      <BookingSuccess
        bookingData={paymentData}
        selectedServices={selectedServices}
        selectedDateTime={selectedDateTime}
        selectedStylist={selectedStylist}
        bookingDetails={bookingDetails}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass-panel p-6 rounded-xl">
              <div className="flex items-center justify-between">
                {steps?.slice(0, 5)?.map((step, index) => {
                  const status = getStepStatus(step?.id);
                  const isLast = index === steps?.slice(0, 5)?.length - 1;
                  
                  return (
                    <div key={step?.id} className="flex items-center flex-1">
                      <div className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          status === 'completed' 
                            ? 'bg-success text-white shadow-floating' 
                            : status === 'current' ?'bg-primary text-white shadow-floating' :'bg-muted text-muted-foreground'
                        }`}>
                          {status === 'completed' ? (
                            <Icon name="Check" size={20} />
                          ) : (
                            <Icon name={step?.icon} size={20} />
                          )}
                        </div>
                        <div className="mt-2 text-center">
                          <p className={`text-sm font-medium ${
                            status === 'current' ? 'text-primary' : 'text-muted-foreground'
                          }`}>
                            {step?.name}
                          </p>
                          <p className="text-xs text-muted-foreground hidden sm:block">
                            {step?.description}
                          </p>
                        </div>
                      </div>
                      {!isLast && (
                        <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                          status === 'completed' ? 'bg-success' : 'bg-muted'
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="max-w-6xl mx-auto">
            <div className="glass-panel p-8 rounded-xl">
              {currentStep === 1 && (
                <ServiceSelector
                  selectedServices={selectedServices}
                  onServiceToggle={handleServiceSelection}
                  onNext={nextStep}
                />
              )}

              {currentStep === 2 && (
                <DateTimeSelector
                  selectedDateTime={selectedDateTime}
                  onDateTimeSelect={handleDateTimeSelection}
                  selectedServices={selectedServices}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}

              {currentStep === 3 && (
                <StylistSelector
                  selectedStylist={selectedStylist}
                  onStylistSelect={handleStylistSelection}
                  selectedServices={selectedServices}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}

              {currentStep === 4 && (
                <BookingDetails
                  bookingDetails={bookingDetails}
                  onDetailsUpdate={handleDetailsUpdate}
                  selectedServices={selectedServices}
                  selectedDateTime={selectedDateTime}
                  selectedStylist={selectedStylist}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}

              {currentStep === 5 && (
                <PaymentConfirmation
                  selectedServices={selectedServices}
                  selectedDateTime={selectedDateTime}
                  selectedStylist={selectedStylist}
                  bookingDetails={bookingDetails}
                  onConfirm={handlePaymentConfirmation}
                  onBack={prevStep}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BookingPage;