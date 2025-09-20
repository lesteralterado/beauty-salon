import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Fashion Executive",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: `The transformation I experienced at Morphic Beauty was beyond my wildest expectations.\nThe 3D consultation technology helped me visualize my new look before any treatment began, and the results were absolutely stunning.`,
      service: "Complete Makeover Package",
      date: "December 2024"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: `As someone in the creative industry, I appreciate attention to detail and innovation.\nMorphic Beauty delivers both in spades. The precision cutting and styling exceeded all my expectations.`,
      service: "Precision Hair Architecture",
      date: "November 2024"
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: `The skin transformation treatments here are revolutionary. The advanced analysis technology identified exactly what my skin needed.\nThree months later, I've never felt more confident in my own skin.`,
      service: "Advanced Skincare Program",
      date: "October 2024"
    },
    {
      id: 4,
      name: "David Park",
      role: "Wedding Photographer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: `I've worked with many beauty professionals, but the team at Morphic Beauty is in a league of their own.\nTheir makeup artistry and attention to detail create looks that photograph beautifully every time.`,
      service: "Editorial Makeup Session",
      date: "September 2024"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Wellness Coach",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: `The holistic approach to beauty here aligns perfectly with my wellness philosophy.\nThey don't just focus on appearance but on how you feel inside and out. It's truly transformative.`,
      service: "Wellness Beauty Therapy",
      date: "August 2024"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Tech Executive",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: `The integration of technology with traditional beauty services is impressive.\nThe AR try-on system and digital consultation process made the entire experience seamless and personalized.`,
      service: "Tech-Enhanced Consultation",
      date: "July 2024"
    }
  ];

  const floatingTestimonials = [
    {
      text: "Absolutely transformative experience!",
      author: "Maria S.",
      position: { top: "10%", left: "15%" }
    },
    {
      text: "The future of beauty is here",
      author: "Alex K.",
      position: { top: "25%", right: "10%" }
    },
    {
      text: "Exceeded all expectations",
      author: "Jennifer L.",
      position: { bottom: "30%", left: "20%" }
    },
    {
      text: "Revolutionary technology meets artistry",
      author: "Robert M.",
      position: { bottom: "15%", right: "15%" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Floating Testimonial Bubbles */}
      {floatingTestimonials?.map((bubble, index) => (
        <motion.div
          key={index}
          className="absolute glass-panel p-4 rounded-full max-w-xs hidden lg:block"
          style={bubble?.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="text-xs text-center">
            <p className="text-foreground font-medium mb-1">"{bubble?.text}"</p>
            <p className="text-muted-foreground">- {bubble?.author}</p>
          </div>
        </motion.div>
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-6">
            Client <span className="text-morph">Transformations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-accent">
            Discover the stories of transformation and confidence that our clients share. 
            Their journeys inspire us to continue pushing the boundaries of beauty innovation.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="glass-card p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            
            <div className="relative z-10">
              {/* Client Image */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden glass-panel p-1">
                <Image
                  src={testimonials?.[currentTestimonial]?.image}
                  alt={testimonials?.[currentTestimonial]?.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-foreground font-accent italic leading-relaxed mb-8 whitespace-pre-line">
                "{testimonials?.[currentTestimonial]?.text}"
              </blockquote>

              {/* Client Info */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-foreground font-headline">
                  {testimonials?.[currentTestimonial]?.name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials?.[currentTestimonial]?.role}
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <span>{testimonials?.[currentTestimonial]?.service}</span>
                  <span>•</span>
                  <span>{testimonials?.[currentTestimonial]?.date}</span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-panel p-3 rounded-full hover:bg-primary/10 transition-colors duration-200"
            >
              <Icon name="ChevronLeft" size={20} className="text-primary" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-panel p-3 rounded-full hover:bg-primary/10 transition-colors duration-200"
            >
              <Icon name="ChevronRight" size={20} className="text-primary" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125' :'bg-muted-foreground/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "5000+", label: "Happy Clients", icon: "Users" },
            { number: "98%", label: "Satisfaction Rate", icon: "Heart" },
            { number: "4.9/5", label: "Average Rating", icon: "Star" },
            { number: "95%", label: "Return Clients", icon: "RotateCcw" }
          ]?.map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center morph-hover">
              <Icon name={stat?.icon} size={32} className="text-primary mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-foreground font-headline mb-2">
                {stat?.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat?.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4 font-headline">
              Share Your Story
            </h3>
            <p className="text-muted-foreground mb-6">
              We'd love to hear about your transformation journey. Share your experience 
              and inspire others to discover their beauty potential.
            </p>
            <button className="cta-morph bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
              <Icon name="Edit" size={18} />
              Write a Review
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;