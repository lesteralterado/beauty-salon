import React, { useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
const HeroSection = lazy(() => import('./components/HeroSection'));
const ServiceUniverse = lazy(() => import('./components/ServiceUniverse'));
const TransformationGallery = lazy(() => import('./components/TransformationGallery'));
const SocialProofSection = lazy(() => import('./components/SocialProofSection'));
const BookingCommandCenter = lazy(() => import('./components/BookingCommandCenter'));
const Footer = lazy(() => import('../../components/Footer'));

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Morphic Beauty - Transform Your Beauty Vision into Reality</title>
        <meta 
          name="description" 
          content="Experience the future of beauty at Morphic Beauty. Premium 3D morphism beauty salon offering cutting-edge treatments, expert stylists, and transformative experiences in our luxury sanctuary." 
        />
        <meta 
          name="keywords" 
          content="beauty salon, luxury spa, facial treatments, hair styling, makeup artistry, beauty transformation, 3D beauty experience, premium beauty services" 
        />
        <meta name="author" content="Morphic Beauty" />
        <meta property="og:title" content="Morphic Beauty - Transform Your Beauty Vision into Reality" />
        <meta 
          property="og:description" 
          content="Step into the future of beauty with our cutting-edge 3D morphism salon experience. Book your transformation today." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphicbeauty.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Morphic Beauty - Luxury Beauty Sanctuary" />
        <meta 
          name="twitter:description" 
          content="Experience transformative beauty treatments in our futuristic salon environment." 
        />
        <link rel="canonical" href="https://morphicbeauty.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16 lg:pt-20">
          <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
            {/* Hero Section */}
            <HeroSection />

            {/* Service Universe */}
            <ServiceUniverse />

            {/* Transformation Gallery */}
            <TransformationGallery />

            {/* Social Proof Section */}
            <SocialProofSection />

            {/* Booking Command Center */}
            <BookingCommandCenter />
          </Suspense>
        </main>

        {/* Footer */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Homepage;