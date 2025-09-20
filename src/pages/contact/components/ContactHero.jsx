import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-secondary">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 glass-panel rounded-full float-gentle opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 glass-panel rounded-full float-bubble opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 glass-panel rounded-full float-gentle delay-300 opacity-25"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="glass-card p-8 lg:p-12 morph-hover">
          <div className="inline-flex items-center justify-center w-20 h-20 glass-panel rounded-full mb-6 morph-3d">
            <Icon name="MessageCircle" size={32} className="text-primary" />
          </div>
          
          <h1 className="font-headline text-4xl lg:text-6xl font-bold text-morph mb-6">
            Get in Touch
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your beauty vision into reality? Connect with our expert team and discover your perfect beauty sanctuary experience.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="glass-panel px-6 py-3 rounded-full morph-hover">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={18} className="text-primary" />
                <span className="text-sm font-medium">Open Today 9AM - 8PM</span>
              </div>
            </div>
            <div className="glass-panel px-6 py-3 rounded-full morph-hover">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={18} className="text-primary" />
                <span className="text-sm font-medium">Downtown Beauty District</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;