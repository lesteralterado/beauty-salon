import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceUniverse = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Facial Treatments",
      description: "Advanced skincare solutions for radiant, healthy skin",
      icon: "Sparkles",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
      beforeAfter: {
        before: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?w=200&h=200&fit=crop",
        after: "https://images.pixabay.com/photo/2016/03/26/22/13/woman-1281826_1280.jpg?w=200&h=200&fit=crop"
      },
      price: "From $120",
      treatments: ["HydraFacial", "Chemical Peels", "Microdermabrasion", "LED Therapy"],
      gradient: "from-blue-400/20 to-cyan-400/20"
    },
    {
      id: 2,
      title: "Hair Styling",
      description: "Creative cuts, colors, and transformative styling",
      icon: "Scissors",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=400&h=300&fit=crop",
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop",
        after: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?w=200&h=200&fit=crop"
      },
      price: "From $85",
      treatments: ["Precision Cuts", "Color Correction", "Balayage", "Keratin Treatment"],
      gradient: "from-purple-400/20 to-pink-400/20"
    },
    {
      id: 3,
      title: "Makeup Artistry",
      description: "Professional makeup for every occasion and style",
      icon: "Palette",
      image: "https://images.pixabay.com/photo/2016/03/26/22/13/woman-1281826_1280.jpg?w=400&h=300&fit=crop",
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=200&h=200&fit=crop",
        after: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?w=200&h=200&fit=crop"
      },
      price: "From $95",
      treatments: ["Bridal Makeup", "Editorial Looks", "Special Events", "Makeup Lessons"],
      gradient: "from-rose-400/20 to-orange-400/20"
    },
    {
      id: 4,
      title: "Nail Services",
      description: "Luxurious manicures and pedicures with artistic flair",
      icon: "Hand",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
      beforeAfter: {
        before: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?w=200&h=200&fit=crop",
        after: "https://images.pixabay.com/photo/2017/07/31/22/05/nail-polish-2561392_1280.jpg?w=200&h=200&fit=crop"
      },
      price: "From $45",
      treatments: ["Gel Manicure", "Nail Art", "Spa Pedicure", "Extensions"],
      gradient: "from-emerald-400/20 to-teal-400/20"
    },
    {
      id: 5,
      title: "Body Treatments",
      description: "Rejuvenating body therapies for complete wellness",
      icon: "Heart",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?w=400&h=300&fit=crop",
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&h=200&fit=crop",
        after: "https://images.pexels.com/photos/3757943/pexels-photo-3757943.jpeg?w=200&h=200&fit=crop"
      },
      price: "From $150",
      treatments: ["Body Wraps", "Exfoliation", "Massage Therapy", "Cellulite Treatment"],
      gradient: "from-amber-400/20 to-yellow-400/20"
    },
    {
      id: 6,
      title: "Lash & Brow",
      description: "Perfect your natural beauty with expert lash and brow services",
      icon: "Eye",
      image: "https://images.pixabay.com/photo/2016/11/29/13/39/woman-1869158_1280.jpg?w=400&h=300&fit=crop",
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=200&h=200&fit=crop",
        after: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?w=200&h=200&fit=crop"
      },
      price: "From $65",
      treatments: ["Lash Extensions", "Brow Shaping", "Lash Lift", "Tinting"],
      gradient: "from-violet-400/20 to-indigo-400/20"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 text-morph">
            Service Universe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of beauty services, each designed to enhance your natural radiance through innovative techniques and personalized care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => (
            <motion.div
              key={service?.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(service?.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                className={`glass-card p-6 h-full cursor-pointer transform-3d ${service?.gradient} bg-gradient-to-br`}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                  z: 50
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Service Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon name={service?.icon} size={28} className="text-white" />
                </motion.div>

                {/* Service Image */}
                <div className="relative overflow-hidden rounded-lg h-48 mb-6">
                  <Image
                    src={service?.image}
                    alt={service?.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Before/After Preview */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={hoveredCard === service?.id ? { opacity: 1 } : { opacity: 0 }}
                  >
                    <div className="flex gap-2">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/50 mb-1">
                          <Image
                            src={service?.beforeAfter?.before}
                            alt="Before"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-white font-medium">Before</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="ArrowRight" size={16} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/50 mb-1">
                          <Image
                            src={service?.beforeAfter?.after}
                            alt="After"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-white font-medium">After</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Service Content */}
                <div className="text-center">
                  <h3 className="font-headline text-xl font-semibold mb-3 text-foreground">
                    {service?.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service?.description}
                  </p>

                  {/* Treatment List */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {service?.treatments?.slice(0, 2)?.map((treatment, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {treatment}
                        </span>
                      ))}
                      {service?.treatments?.length > 2 && (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          +{service?.treatments?.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-lg font-semibold text-primary mb-4">
                    {service?.price}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 text-primary hover:bg-primary/10"
                    iconName="Calendar"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Book Service
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="default"
            size="lg"
            className="cta-morph bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-cta font-semibold px-8 py-4"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={20}
          >
            Explore All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceUniverse;