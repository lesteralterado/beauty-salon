import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const StorySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const storyMilestones = [
    {
      year: "2008",
      title: "The Vision Begins",
      description: `Founded with a revolutionary vision to merge cutting-edge technology with timeless beauty artistry.\nOur journey started in a small studio with big dreams and an unwavering commitment to excellence.`,
      icon: "Lightbulb",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop"
    },
    {
      year: "2012",
      title: "Innovation Breakthrough",
      description: `Introduced the first 3D beauty consultation technology in the region.\nPioneered personalized treatment plans using advanced skin analysis and morphing visualization tools.`,
      icon: "Zap",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop"
    },
    {
      year: "2018",
      title: "Luxury Expansion",
      description: `Opened our flagship sanctuary featuring state-of-the-art beauty laboratories.\nIntroduced exclusive morphing treatment suites with immersive wellness experiences.`,
      icon: "Building",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop"
    },
    {
      year: "2023",
      title: "Digital Revolution",
      description: `Launched our revolutionary digital beauty platform with AR try-on capabilities.\nEstablished the Beauty Academy for next-generation stylists and beauty innovators.`,
      icon: "Smartphone",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-morph">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-accent">
            From a small studio to a revolutionary beauty sanctuary, discover how we've transformed 
            the beauty industry through innovation, dedication, and an unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden lg:block"></div>

          {/* Milestones */}
          <div className="space-y-20">
            {storyMilestones?.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <div className="glass-card p-8 morph-hover">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="glass-panel p-3 rounded-full">
                        <Icon name={milestone?.icon} size={24} className="text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary font-headline">
                        {milestone?.year}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4 font-headline">
                      {milestone?.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {milestone?.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block relative z-10">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                </div>

                {/* Image */}
                <div className="flex-1 lg:max-w-md">
                  <motion.div
                    className="glass-card p-4 morph-hover"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={milestone?.image}
                        alt={milestone?.title}
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <Icon name="Quote" size={48} className="text-primary mx-auto mb-8 opacity-50" />
            <blockquote className="text-xl md:text-2xl text-foreground font-accent italic leading-relaxed mb-8">
              "Beauty is not just about transformation—it's about revealing the extraordinary 
              that already exists within each person. Our mission is to create a sanctuary where 
              technology and artistry unite to unlock your most confident self."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Isabella Rodriguez</div>
                <div className="text-sm text-muted-foreground">Founder & Creative Director</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;