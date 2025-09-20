import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 glass-panel rounded-full float-gentle opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 glass-panel rounded-full float-bubble opacity-20"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 glass-panel rounded-full float-gentle delay-300 opacity-25"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1 
              className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-morph"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Our Beauty
              <span className="block text-primary">Sanctuary</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-accent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Where innovation meets elegance in the heart of luxury beauty transformation. 
              Discover the story behind Morphic Beauty's revolutionary approach to personal enhancement.
            </motion.p>
          </div>

          {/* Floating Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: "15+", label: "Years Excellence", icon: "Award" },
              { number: "5000+", label: "Transformations", icon: "Sparkles" },
              { number: "50+", label: "Expert Stylists", icon: "Users" },
              { number: "98%", label: "Client Satisfaction", icon: "Heart" }
            ]?.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center morph-hover"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Icon name={stat?.icon} size={32} className="text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground font-headline">
                  {stat?.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat?.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="glass-panel p-3 rounded-full">
          <Icon name="ChevronDown" size={24} className="text-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;