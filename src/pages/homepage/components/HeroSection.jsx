import React, { useState, useEffect } from 'react';
import DynamicMotion from '../../../components/DynamicMotion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e?.clientX / window.innerWidth) * 100,
        y: (e?.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=300&fit=crop",
      title: "Facial Rejuvenation",
      position: { top: '20%', left: '15%' },
      delay: 0.2
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=400&h=300&fit=crop",
      title: "Hair Transformation",
      position: { top: '60%', right: '20%' },
      delay: 0.4
    },
    {
      id: 3,
      image: "https://images.pixabay.com/photo/2016/03/26/22/13/woman-1281826_1280.jpg?w=400&h=300&fit=crop",
      title: "Makeup Artistry",
      position: { bottom: '25%', left: '25%' },
      delay: 0.6
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <DynamicMotion>
          <div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"
            style={{
              left: `${mousePosition?.x * 0.02}%`,
              top: `${mousePosition?.y * 0.02}%`
            }}
            data-animate="scale-rotate"
          />
        </DynamicMotion>
        <DynamicMotion>
          <div
            className="absolute w-64 h-64 rounded-full bg-gradient-to-l from-accent/15 to-primary/15 blur-2xl"
            style={{
              right: `${mousePosition?.x * 0.03}%`,
              bottom: `${mousePosition?.y * 0.03}%`
            }}
            data-animate="scale-rotate-reverse"
          />
        </DynamicMotion>
      </div>
      {/* Floating Glass Panels */}
      {floatingElements?.map((element) => (
        <motion.div
          key={element?.id}
          className="absolute glass-card p-4 w-48 h-32 hidden lg:block"
          style={element?.position}
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          animate={isVisible ? { 
            opacity: 1, 
            rotateX: 0,
            x: [0, 10, 0],
            y: [0, -15, 0]
          } : {}}
          transition={{
            duration: 0.8,
            delay: element?.delay,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{
            scale: 1.05,
            rotateY: 10,
            z: 50
          }}
        >
          <div className="relative overflow-hidden rounded-lg h-16 mb-2">
            <Image
              src={element?.image}
              alt={element?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <h4 className="text-xs font-medium text-foreground text-center">
            {element?.title}
          </h4>
        </motion.div>
      ))}
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-morph"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: 'linear-gradient(45deg, var(--color-primary), var(--color-accent), var(--color-primary))',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Transform Your Beauty Vision into Reality
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Step into the future of beauty at our luxury sanctuary where cutting-edge techniques meet personalized artistry. Experience transformations that go beyond the surface.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="default"
            size="lg"
            className="cta-morph bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-cta font-semibold px-8 py-4 text-lg shadow-floating"
            iconName="Calendar"
            iconPosition="left"
            iconSize={20}
          >
            Book Consultation
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="glass-panel border-primary/30 text-primary hover:bg-primary/10 font-medium px-8 py-4 text-lg"
            iconName="Play"
            iconPosition="left"
            iconSize={20}
          >
            Watch Our Story
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "5000+", label: "Happy Clients" },
            { number: "15+", label: "Expert Stylists" },
            { number: "50+", label: "Beauty Services" },
            { number: "8", label: "Years Excellence" }
          ]?.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-4 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl font-bold text-primary mb-1">
                {stat?.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1, y: [0, 10, 0] } : {}}
        transition={{
          opacity: { duration: 1, delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="glass-panel p-3 rounded-full">
          <Icon name="ChevronDown" size={24} className="text-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;