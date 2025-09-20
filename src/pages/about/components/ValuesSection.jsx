import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const coreValues = [
    {
      icon: "Sparkles",
      title: "Innovation Excellence",
      description: `We continuously push the boundaries of beauty technology, integrating cutting-edge tools with traditional artistry.\nOur commitment to innovation ensures every client experiences the future of beauty today.`,
      color: "from-primary to-accent"
    },
    {
      icon: "Heart",
      title: "Client-Centered Care",
      description: `Every decision we make prioritizes our clients' comfort, satisfaction, and transformative journey.\nWe believe in creating personalized experiences that honor each individual's unique beauty vision.`,
      color: "from-accent to-primary"
    },
    {
      icon: "Award",
      title: "Uncompromising Quality",
      description: `We maintain the highest standards in every service, product, and interaction.\nOur dedication to excellence is reflected in our premium facilities, expert team, and exceptional results.`,
      color: "from-primary to-secondary"
    },
    {
      icon: "Users",
      title: "Inclusive Beauty",
      description: `Beauty has no boundaries, and neither do we. We celebrate diversity and create welcoming spaces for all.\nOur services are designed to enhance the natural beauty of every individual, regardless of background.`,
      color: "from-secondary to-accent"
    },
    {
      icon: "Leaf",
      title: "Sustainable Practices",
      description: `We're committed to environmental responsibility through eco-friendly products and sustainable practices.\nOur beauty sanctuary operates with respect for both our clients and our planet.`,
      color: "from-accent to-primary"
    },
    {
      icon: "Lightbulb",
      title: "Continuous Learning",
      description: `We invest in ongoing education and skill development to stay at the forefront of beauty innovation.\nOur team regularly trains in the latest techniques and technologies to serve you better.`,
      color: "from-primary to-accent"
    }
  ];

  const achievements = [
    {
      icon: "Trophy",
      title: "Industry Recognition",
      stats: [
        "Best Beauty Salon 2023",
        "Innovation Award Winner",
        "Client Choice Award",
        "Sustainability Leader"
      ]
    },
    {
      icon: "Users",
      title: "Client Success",
      stats: [
        "98% Satisfaction Rate",
        "5000+ Transformations",
        "95% Return Clients",
        "4.9/5 Average Rating"
      ]
    },
    {
      icon: "Zap",
      title: "Technology Leadership",
      stats: [
        "First AR Try-On System",
        "3D Consultation Pioneer",
        "AI Skin Analysis",
        "Digital Beauty Platform"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Core <span className="text-morph">Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-accent">
            These fundamental principles guide every aspect of our work and define the 
            exceptional experience we create for each client who enters our sanctuary.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreValues?.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 h-full morph-hover relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value?.color} p-0.5 mx-auto`}>
                      <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                        <Icon name={value?.icon} size={28} className="text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-headline">
                      {value?.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {value?.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {achievements?.map((achievement, index) => (
            <div key={index} className="glass-card p-8 text-center morph-hover">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent p-0.5 mx-auto">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                    <Icon name={achievement?.icon} size={32} className="text-primary" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-6 font-headline">
                {achievement?.title}
              </h3>
              
              <div className="space-y-3">
                {achievement?.stats?.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-3">
                    <Icon name="CheckCircle" size={16} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground font-medium">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="glass-card p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent float-gentle"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary float-bubble"></div>
            </div>
            
            <div className="relative z-10">
              <Icon name="Target" size={48} className="text-primary mx-auto mb-8" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-headline">
                Our Mission
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-accent">
                To revolutionize the beauty industry by creating transformative experiences that blend 
                cutting-edge technology with timeless artistry, empowering every client to discover 
                and express their most confident, authentic self in a sanctuary of innovation and care.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;