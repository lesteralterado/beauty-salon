import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FacilitySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const [activeArea, setActiveArea] = useState(0);

  const facilityAreas = [
    {
      id: 1,
      name: "Reception & Consultation Lounge",
      description: `Welcome to our stunning reception area featuring floating glass elements and 3D interactive displays.\nOur consultation lounge offers private spaces with advanced skin analysis technology and AR try-on systems.`,
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
      features: ["3D Consultation Technology", "AR Try-On Systems", "Skin Analysis Stations", "Comfort Seating Areas"],
      icon: "Home"
    },
    {
      id: 2,
      name: "Hair Transformation Studios",
      description: `State-of-the-art hair studios equipped with precision cutting stations and color laboratories.\nEach studio features morphing mirrors and advanced lighting systems for optimal styling conditions.`,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
      features: ["Precision Cutting Stations", "Color Laboratory", "Morphing Mirror Technology", "Advanced Lighting Systems"],
      icon: "Scissors"
    },
    {
      id: 3,
      name: "Skincare Treatment Suites",
      description: `Luxurious treatment rooms designed for ultimate relaxation and skin transformation.\nEquipped with medical-grade equipment and ambient lighting for the perfect treatment environment.`,
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
      features: ["Medical-Grade Equipment", "Ambient Lighting Control", "Private Treatment Rooms", "Advanced Skincare Technology"],
      icon: "Sparkles"
    },
    {
      id: 4,
      name: "Makeup Artistry Lab",
      description: `Professional makeup studio with Hollywood-grade lighting and high-definition mirrors.\nFeaturing an extensive collection of premium products and color-matching technology.`,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
      features: ["Hollywood-Grade Lighting", "HD Mirror Systems", "Color-Matching Technology", "Premium Product Collection"],
      icon: "Palette"
    },
    {
      id: 5,
      name: "Wellness Sanctuary",
      description: `Tranquil wellness area combining beauty treatments with holistic relaxation experiences.\nDesigned to nurture both inner peace and outer beauty through innovative therapy techniques.`,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
      features: ["Holistic Therapy Rooms", "Meditation Spaces", "Aromatherapy Systems", "Relaxation Lounges"],
      icon: "Leaf"
    },
    {
      id: 6,
      name: "Technology Innovation Center",
      description: `Our cutting-edge technology hub featuring the latest in beauty innovation and digital experiences.\nHome to our AR systems, 3D modeling equipment, and digital consultation platforms.`,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      features: ["AR Beauty Systems", "3D Modeling Equipment", "Digital Consultation Platforms", "Innovation Showcase"],
      icon: "Zap"
    }
  ];

  const amenities = [
    { icon: "Wifi", name: "Complimentary WiFi", description: "High-speed internet throughout" },
    { icon: "Coffee", name: "Refreshment Bar", description: "Premium beverages and snacks" },
    { icon: "Car", name: "Valet Parking", description: "Convenient parking service" },
    { icon: "Shield", name: "Sanitization", description: "Advanced cleaning protocols" },
    { icon: "Clock", name: "Flexible Hours", description: "Extended operating hours" },
    { icon: "Gift", name: "Retail Boutique", description: "Premium beauty products" }
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
            Our Beauty <span className="text-morph">Sanctuary</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-accent">
            Step into a world where luxury meets innovation. Our state-of-the-art facility 
            combines cutting-edge technology with elegant design to create the ultimate beauty experience.
          </p>
        </motion.div>

        {/* Facility Tour */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Area Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 font-headline">
              Explore Our Spaces
            </h3>
            
            {facilityAreas?.map((area, index) => (
              <motion.button
                key={area?.id}
                onClick={() => setActiveArea(index)}
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                  activeArea === index
                    ? 'glass-card border-primary/30' :'glass-panel hover:glass-card'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${
                    activeArea === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                  }`}>
                    <Icon name={area?.icon} size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold ${
                      activeArea === index ? 'text-primary' : 'text-foreground'
                    }`}>
                      {area?.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {area?.features?.length} Premium Features
                    </p>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={16} 
                    className={`transition-transform ${
                      activeArea === index ? 'rotate-90 text-primary' : 'text-muted-foreground'
                    }`} 
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Area Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8"
          >
            <div className="space-y-6">
              {/* Area Image */}
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={facilityAreas?.[activeArea]?.image}
                  alt={facilityAreas?.[activeArea]?.name}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Area Info */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-headline">
                  {facilityAreas?.[activeArea]?.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
                  {facilityAreas?.[activeArea]?.description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {facilityAreas?.[activeArea]?.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Amenities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-12 font-headline">
            Premium Amenities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities?.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="glass-card p-6 text-center morph-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={amenity?.icon} size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{amenity?.name}</h4>
                <p className="text-sm text-muted-foreground">{amenity?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Virtual Tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-card p-12 max-w-3xl mx-auto relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 float-gentle"></div>
            
            <div className="relative z-10">
              <Icon name="Camera" size={48} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-headline">
                Experience Our Sanctuary
              </h3>
              <p className="text-lg text-muted-foreground mb-8 font-accent">
                Ready to see our beautiful facility in person? Schedule a personal tour 
                or book your first consultation to experience the Morphic Beauty difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cta-morph bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center">
                  <Icon name="Calendar" size={18} />
                  Schedule Tour
                </button>
                <button className="glass-panel hover:glass-card text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center">
                  <Icon name="Play" size={18} />
                  Virtual Walkthrough
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitySection;