import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import ContactForm from './components/ContactForm';
import BusinessHours from './components/BusinessHours';
import SocialConnect from './components/SocialConnect';
import TrustSignals from './components/TrustSignals';
import Icon from '../../components/AppIcon';
import Footer from '../../components/Footer';


const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Contact Us - Morphic Beauty | Get in Touch with Our Beauty Experts';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Contact Morphic Beauty salon for appointments, consultations, and beauty services. Multiple ways to connect including phone, email, live chat, and online booking.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <ContactHero />
        
        {/* Contact Methods */}
        <ContactInfo />
        
        {/* Location & Map */}
        <LocationMap />
        
        {/* Contact Form */}
        <ContactForm />
        
        {/* Business Hours */}
        <BusinessHours />
        
        {/* Social Media & Newsletter */}
        <SocialConnect />
        
        {/* Trust Signals & Policies */}
        <TrustSignals />
      </main>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 space-y-3">
        {/* Quick Call Button */}
        <button
          onClick={() => window.location.href = 'tel:+15551232328'}
          className="w-14 h-14 bg-success text-white rounded-full shadow-floating flex items-center justify-center morph-hover group"
          aria-label="Call us now"
        >
          <Icon name="Phone" size={20} className="group-hover:scale-110 transition-transform" />
        </button>
        
        {/* Quick Booking Button */}
        <button
          onClick={() => window.location.href = '/booking'}
          className="w-14 h-14 bg-primary text-white rounded-full shadow-floating flex items-center justify-center morph-hover group"
          aria-label="Book appointment"
        >
          <Icon name="Calendar" size={20} className="group-hover:scale-110 transition-transform" />
        </button>
        
        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 glass-panel text-foreground rounded-full shadow-floating flex items-center justify-center morph-hover group"
          aria-label="Scroll to top"
        >
          <Icon name="ChevronUp" size={20} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;