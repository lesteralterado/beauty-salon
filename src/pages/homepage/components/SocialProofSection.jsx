import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProofSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Executive",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c9c0b8c4?w=100&h=100&fit=crop",
      rating: 5,
      text: `Morphic Beauty transformed not just my appearance, but my confidence. The 3D consultation process was incredible - I could see exactly how I'd look before any treatment. The results exceeded my expectations!`,
      service: "Complete Facial Rejuvenation",
      date: "December 2024",
      verified: true
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      role: "Fashion Blogger",
      avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?w=100&h=100&fit=crop",
      rating: 5,
      text: `The attention to detail here is unmatched. From the moment I walked in, I felt like I was in a luxury spa of the future. My hair transformation was absolutely stunning - exactly what I envisioned!`,
      service: "Balayage & Styling",
      date: "November 2024",
      verified: true
    },
    {
      id: 3,
      name: "Jessica Chen",
      role: "Bride-to-be",
      avatar: "https://images.pixabay.com/photo/2016/03/26/22/13/woman-1281826_1280.jpg?w=100&h=100&fit=crop",
      rating: 5,
      text: `My wedding day makeup was flawless! The team understood my vision perfectly and created a look that was both timeless and modern. I felt like a princess, and the makeup lasted all day and night.`,
      service: "Bridal Makeup Package",
      date: "October 2024",
      verified: true
    },
    {
      id: 4,
      name: "Maria Santos",
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=100&h=100&fit=crop",
      rating: 5,
      text: `I've been coming here for over a year now, and every visit is exceptional. The staff remembers my preferences, and they're always introducing me to new treatments that perfectly suit my needs.`,
      service: "Monthly Beauty Maintenance",
      date: "December 2024",
      verified: true
    }
  ];

  const floatingBubbles = [
    { id: 1, size: 'w-16 h-16', position: 'top-10 left-10', delay: 0 },
    { id: 2, size: 'w-12 h-12', position: 'top-32 right-20', delay: 1 },
    { id: 3, size: 'w-20 h-20', position: 'bottom-20 left-16', delay: 2 },
    { id: 4, size: 'w-14 h-14', position: 'bottom-32 right-12', delay: 0.5 },
    { id: 5, size: 'w-10 h-10', position: 'top-1/2 left-8', delay: 1.5 }
  ];

  const stats = [
    { number: "5000+", label: "Happy Clients", icon: "Users" },
    { number: "98%", label: "Satisfaction Rate", icon: "Heart" },
    { number: "15+", label: "Expert Stylists", icon: "Award" },
    { number: "50+", label: "Beauty Services", icon: "Sparkles" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-background via-secondary/10 to-muted/20 overflow-hidden">
      {/* Floating Testimonial Bubbles */}
      {floatingBubbles?.map((bubble) => (
        <motion.div
          key={bubble?.id}
          className={`absolute ${bubble?.size} ${bubble?.position} glass-panel rounded-full opacity-20 hidden lg:block`}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: bubble?.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 text-morph">
            Client Love Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our amazing clients who have experienced the magic of transformation at Morphic Beauty.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats?.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon name={stat?.icon} size={24} className="text-white" />
              </motion.div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat?.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="glass-card p-8 md:p-12 text-center"
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Client Avatar */}
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={testimonials?.[currentTestimonial]?.avatar}
                alt={testimonials?.[currentTestimonial]?.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Icon name="Star" size={20} className="text-yellow-400 fill-current mx-0.5" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
              "{testimonials?.[currentTestimonial]?.text}"
            </blockquote>

            {/* Client Info */}
            <div className="border-t border-border pt-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <h4 className="font-semibold text-foreground">
                  {testimonials?.[currentTestimonial]?.name}
                </h4>
                {testimonials?.[currentTestimonial]?.verified && (
                  <Icon name="CheckCircle" size={16} className="text-primary" />
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-1">
                {testimonials?.[currentTestimonial]?.role}
              </p>
              <p className="text-primary text-sm font-medium mb-1">
                {testimonials?.[currentTestimonial]?.service}
              </p>
              <p className="text-muted-foreground text-xs">
                {testimonials?.[currentTestimonial]?.date}
              </p>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125' :'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-panel p-3 rounded-full hover:bg-primary/10 transition-colors duration-300"
          >
            <Icon name="ChevronLeft" size={20} className="text-primary" />
          </button>
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-panel p-3 rounded-full hover:bg-primary/10 transition-colors duration-300"
          >
            <Icon name="ChevronRight" size={20} className="text-primary" />
          </button>
        </div>

        {/* Social Media Integration */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="font-headline text-2xl font-semibold mb-6 text-foreground">
            Follow Our Journey
          </h3>
          <div className="flex justify-center gap-4">
            {[
              { name: 'Instagram', icon: 'Instagram', followers: '25K' },
              { name: 'Facebook', icon: 'Facebook', followers: '15K' },
              { name: 'TikTok', icon: 'Music', followers: '30K' }
            ]?.map((social, index) => (
              <motion.div
                key={social?.name}
                className="glass-card p-4 text-center cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Icon name={social?.icon} size={24} className="text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">{social?.followers}</div>
                <div className="text-xs text-muted-foreground">{social?.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;