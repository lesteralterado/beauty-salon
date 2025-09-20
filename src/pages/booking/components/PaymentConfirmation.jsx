import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const PaymentConfirmation = ({ 
  selectedServices, 
  selectedDateTime, 
  selectedStylist, 
  bookingDetails, 
  onConfirm, 
  onBack 
}) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const [billingAddress, setBillingAddress] = useState({
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  const totalPrice = selectedServices?.reduce((sum, service) => sum + service?.price, 0);
  const taxAmount = totalPrice * 0.08; // 8% tax
  const finalTotal = totalPrice + taxAmount;

  const handleCardInputChange = (field, value) => {
    setCardDetails(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleBillingInputChange = (field, value) => {
    setBillingAddress(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validatePayment = () => {
    const newErrors = {};

    if (paymentMethod === 'card') {
      if (!cardDetails?.cardNumber?.replace(/\s/g, '')) {
        newErrors.cardNumber = 'Card number is required';
      } else if (cardDetails?.cardNumber?.replace(/\s/g, '')?.length < 16) {
        newErrors.cardNumber = 'Please enter a valid card number';
      }

      if (!cardDetails?.expiryDate) {
        newErrors.expiryDate = 'Expiry date is required';
      }

      if (!cardDetails?.cvv) {
        newErrors.cvv = 'CVV is required';
      } else if (cardDetails?.cvv?.length < 3) {
        newErrors.cvv = 'Please enter a valid CVV';
      }

      if (!cardDetails?.cardholderName?.trim()) {
        newErrors.cardholderName = 'Cardholder name is required';
      }
    }

    if (!agreedToTerms) {
      newErrors.terms = 'Please agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleConfirmBooking = async () => {
    if (!validatePayment()) return;

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onConfirm({
        paymentMethod,
        cardDetails: paymentMethod === 'card' ? cardDetails : null,
        billingAddress,
        totalAmount: finalTotal
      });
    }, 2000);
  };

  const formatCardNumber = (value) => {
    const v = value?.replace(/\s+/g, '')?.replace(/[^0-9]/gi, '');
    const matches = v?.match(/\d{4,16}/g);
    const match = matches && matches?.[0] || '';
    const parts = [];
    for (let i = 0, len = match?.length; i < len; i += 4) {
      parts?.push(match?.substring(i, i + 4));
    }
    if (parts?.length) {
      return parts?.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value?.replace(/\s+/g, '')?.replace(/[^0-9]/gi, '');
    if (v?.length >= 2) {
      return v?.substring(0, 2) + '/' + v?.substring(2, 4);
    }
    return v;
  };

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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-headline text-2xl font-semibold mb-2">Payment & Confirmation</h2>
        <p className="text-muted-foreground">
          Complete your booking with secure payment
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Payment Method */}
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Icon name="CreditCard" size={20} className="mr-2" />
              Payment Method
            </h3>
            
            <div className="space-y-3 mb-6">
              {[
                { value: 'card', label: 'Credit/Debit Card', icon: 'CreditCard', description: 'Secure payment with your card' },
                { value: 'paypal', label: 'PayPal', icon: 'Wallet', description: 'Pay with your PayPal account' },
                { value: 'salon', label: 'Pay at Salon', icon: 'MapPin', description: 'Pay when you arrive for your appointment' }
              ]?.map((method) => (
                <label key={method?.value} className="flex items-start cursor-pointer p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method?.value}
                    checked={paymentMethod === method?.value}
                    onChange={(e) => setPaymentMethod(e?.target?.value)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 mt-0.5 transition-all duration-200 ${
                    paymentMethod === method?.value
                      ? 'bg-primary border-primary' :'border-muted-foreground/30'
                  }`}>
                    {paymentMethod === method?.value && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Icon name={method?.icon} size={18} className="mr-2 text-muted-foreground" />
                      <span className="font-medium">{method?.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{method?.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Card Details */}
          {paymentMethod === 'card' && (
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Icon name="Lock" size={20} className="mr-2" />
                Card Details
              </h3>
              
              <div className="space-y-4">
                <Input
                  label="Card Number"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails?.cardNumber}
                  onChange={(e) => handleCardInputChange('cardNumber', formatCardNumber(e?.target?.value))}
                  error={errors?.cardNumber}
                  maxLength={19}
                  required
                />

                <Input
                  label="Cardholder Name"
                  type="text"
                  placeholder="John Doe"
                  value={cardDetails?.cardholderName}
                  onChange={(e) => handleCardInputChange('cardholderName', e?.target?.value)}
                  error={errors?.cardholderName}
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Expiry Date"
                    type="text"
                    placeholder="MM/YY"
                    value={cardDetails?.expiryDate}
                    onChange={(e) => handleCardInputChange('expiryDate', formatExpiryDate(e?.target?.value))}
                    error={errors?.expiryDate}
                    maxLength={5}
                    required
                  />
                  
                  <Input
                    label="CVV"
                    type="text"
                    placeholder="123"
                    value={cardDetails?.cvv}
                    onChange={(e) => handleCardInputChange('cvv', e?.target?.value?.replace(/\D/g, ''))}
                    error={errors?.cvv}
                    maxLength={4}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* PayPal */}
          {paymentMethod === 'paypal' && (
            <div className="glass-panel p-6 rounded-xl">
              <div className="text-center py-8">
                <Icon name="Wallet" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">PayPal Payment</h3>
                <p className="text-muted-foreground mb-4">
                  You will be redirected to PayPal to complete your payment securely.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <Icon name="Info" size={16} className="inline mr-1" />
                    PayPal integration will be activated upon booking confirmation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Pay at Salon */}
          {paymentMethod === 'salon' && (
            <div className="glass-panel p-6 rounded-xl">
              <div className="text-center py-8">
                <Icon name="MapPin" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Pay at Salon</h3>
                <p className="text-muted-foreground mb-4">
                  Complete your payment when you arrive for your appointment.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 text-sm">
                    <Icon name="AlertTriangle" size={16} className="inline mr-1" />
                    Please arrive 15 minutes early to complete payment and check-in.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Terms and Conditions */}
          <div className="glass-panel p-6 rounded-xl">
            <div className="space-y-4">
              <Checkbox
                label="I agree to the Terms and Conditions and Privacy Policy"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e?.target?.checked)}
                error={errors?.terms}
                required
              />
              
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• Cancellations must be made at least 24 hours in advance</p>
                <p>• Late arrivals may result in shortened service time</p>
                <p>• Full payment is required for no-shows</p>
                <p>• Rescheduling is subject to availability</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="lg:col-span-1">
          <div className="glass-panel p-6 rounded-xl sticky top-8">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Icon name="Receipt" size={20} className="mr-2" />
              Final Summary
            </h3>

            {/* Client Info */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Icon name="User" size={16} className="mr-2 text-primary" />
                <span className="font-medium">Client</span>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                {bookingDetails?.firstName} {bookingDetails?.lastName}
              </p>
              <p className="text-sm text-muted-foreground ml-6">
                {bookingDetails?.email}
              </p>
            </div>

            {/* Date & Time */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Icon name="Clock" size={16} className="mr-2 text-primary" />
                <span className="font-medium">Appointment</span>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                {formatDateTime(selectedDateTime)}
              </p>
            </div>

            {/* Stylist */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Icon name="User" size={16} className="mr-2 text-primary" />
                <span className="font-medium">Stylist</span>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                {selectedStylist?.name}
              </p>
            </div>

            {/* Services */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Icon name="Sparkles" size={16} className="mr-2 text-primary" />
                <span className="font-medium">Services</span>
              </div>
              <div className="space-y-2">
                {selectedServices?.map((service) => (
                  <div key={service?.id} className="flex items-center justify-between ml-6">
                    <span className="text-sm">{service?.name}</span>
                    <span className="text-sm font-semibold">${service?.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <span>${totalPrice?.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Tax (8%)</span>
                <span>${taxAmount?.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-lg font-semibold border-t border-border pt-2">
                <span>Total</span>
                <span className="text-primary">${finalTotal?.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          disabled={isProcessing}
          className="flex items-center px-6 py-3 rounded-xl font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 disabled:opacity-50"
        >
          <Icon name="ArrowLeft" size={18} className="mr-2" />
          Back to Details
        </button>

        <button
          onClick={handleConfirmBooking}
          disabled={isProcessing}
          className="cta-morph bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold flex items-center disabled:opacity-50"
        >
          {isProcessing ? (
            <>
              <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Confirm Booking
              <Icon name="Check" size={18} className="ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;