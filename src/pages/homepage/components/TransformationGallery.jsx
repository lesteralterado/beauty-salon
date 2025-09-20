import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TransformationGallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const transformations = [
    {
      id: 1,
      category: 'facial',
      title: 'Radiant Skin Transformation',
      client: 'Sarah M.',
      service: 'HydraFacial + LED Therapy',
      before: 'https://images.unsplash.com/photo-1494790108755-2616c9c0b8c4?w=300&h=400&fit=crop',
      after: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?w=300&h=400&fit=crop',
      testimonial: `The results exceeded my expectations! My skin feels incredibly smooth and looks more radiant than ever. The team's expertise really shows.`,duration: '3 sessions',
      rating: 5
    },
    {
      id: 2,
      category: 'hair',title: 'Complete Hair Makeover',client: 'Emma L.',service: 'Color Correction + Cut',
      before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=400&fit=crop',after: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?w=300&h=400&fit=crop',testimonial: `I walked in feeling unsure about my hair and left feeling like a completely new person. The stylists here are true artists!`,duration: '4 hours',
      rating: 5
    },
    {
      id: 3,
      category: 'makeup',title: 'Bridal Glam Transformation',client: 'Jessica R.',service: 'Bridal Makeup Package',
      before: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=400&fit=crop',after: 'https://images.pixabay.com/photo/2016/03/26/22/13/woman-1281826_1280.jpg?w=300&h=400&fit=crop',
      testimonial: `Perfect for my wedding day! The makeup lasted all day and looked flawless in every photo. Couldn't have asked for better!`,
      duration: '2 hours',
      rating: 5
    },
    {
      id: 4,
      category: 'facial',
      title: 'Anti-Aging Treatment',
      client: 'Maria K.',
      service: 'Microneedling + Serum',
      before: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?w=300&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=300&h=400&fit=crop',
      testimonial: `The fine lines around my eyes have significantly reduced. I feel more confident and youthful. Amazing results!`,
      duration: '5 sessions',
      rating: 5
    },
    {
      id: 5,
      category: 'hair',
      title: 'Balayage Highlights',
      client: 'Ashley D.',
      service: 'Balayage + Toning',
      before: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=300&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=400&fit=crop',
      testimonial: `The color blending is absolutely perfect! It looks so natural yet stunning. I get compliments everywhere I go.`,
      duration: '3 hours',
      rating: 5
    },
    {
      id: 6,
      category: 'makeup',
      title: 'Editorial Makeup Look',
      client: 'Sophia T.',
      service: 'Editorial Makeup',
      before: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&h=400&fit=crop',
      after: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?w=300&h=400&fit=crop',
      testimonial: `Bold, beautiful, and exactly what I envisioned for my photoshoot. The makeup artist understood my vision perfectly.`,
      duration: '1.5 hours',
      rating: 5
    }
  ];

  const categories = [
    { id: 'all', label: 'All Transformations', icon: 'Sparkles' },
    { id: 'facial', label: 'Facial Treatments', icon: 'Heart' },
    { id: 'hair', label: 'Hair Styling', icon: 'Scissors' },
    { id: 'makeup', label: 'Makeup Artistry', icon: 'Palette' }
  ];

  const filteredTransformations = activeTab === 'all' 
    ? transformations 
    : transformations?.filter(item => item?.category === activeTab);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
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
            Transformation Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness the artistry of transformation through our clients' incredible before and after journeys. Each story represents our commitment to excellence.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories?.map((category) => (
            <motion.button
              key={category?.id}
              onClick={() => setActiveTab(category?.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === category?.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-floating'
                  : 'glass-panel text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name={category?.icon} size={18} className="mr-2" />
              {category?.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Transformations Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredTransformations?.map((transformation, index) => (
            <motion.div
              key={transformation?.id}
              className="glass-card overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedImage(transformation)}
              layout
            >
              {/* Before/After Images */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative overflow-hidden">
                    <Image
                      src={transformation?.before}
                      alt="Before transformation"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      Before
                    </div>
                  </div>
                  <div className="w-1/2 relative overflow-hidden">
                    <Image
                      src={transformation?.after}
                      alt="After transformation"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                      After
                    </div>
                  </div>
                </div>
                
                {/* Divider Line */}
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/50 transform -translate-x-0.5" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Icon name="ZoomIn" size={32} className="mx-auto mb-2" />
                    <p className="text-sm">View Details</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">
                  {transformation?.title}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(transformation?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    by {transformation?.client}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {transformation?.testimonial}
                </p>

                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{transformation?.service}</span>
                  <span>{transformation?.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Selected Image */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e?.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-white mb-2">
                      {selectedImage?.title}
                    </h3>
                    <p className="text-white">
                      {selectedImage?.service} • {selectedImage?.duration}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-2 hover:bg-muted rounded-full transition-colors text-white"
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Before</h4>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src={selectedImage?.before}
                        alt="Before transformation"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">After</h4>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src={selectedImage?.after}
                        alt="After transformation"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-3">
                      {[...Array(selectedImage?.rating)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                    <span className="font-medium text-white">{selectedImage?.client}</span>
                  </div>
                  <blockquote className="text-white italic">
                    "{selectedImage?.testimonial}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TransformationGallery;