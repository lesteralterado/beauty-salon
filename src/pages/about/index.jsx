import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';
import FacilitySection from './components/FacilitySection';
import Footer from '../../components/Footer';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Morphic Beauty | Luxury Beauty Sanctuary</title>
        <meta 
          name="description" 
          content="Discover the story behind Morphic Beauty's revolutionary approach to luxury beauty services. Meet our expert team and explore our state-of-the-art facility where innovation meets elegance." 
        />
        <meta name="keywords" content="about morphic beauty, luxury beauty salon, expert stylists, beauty innovation, premium facility" />
        <meta property="og:title" content="About Us - Morphic Beauty | Luxury Beauty Sanctuary" />
        <meta property="og:description" content="Discover the story behind Morphic Beauty's revolutionary approach to luxury beauty services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 lg:pt-20">
          <HeroSection />
          <StorySection />
          <TeamSection />
          <ValuesSection />
          <FacilitySection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default About;