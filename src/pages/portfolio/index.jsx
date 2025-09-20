import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import components
import FilterBar from './components/FilterBar';
import TransformationCard from './components/TransformationCard';
import TransformationModal from './components/TransformationModal';
import FeaturedShowcase from './components/FeaturedShowcase';
import StatsSection from './components/StatsSection';
import Footer from '../../components/Footer';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTransformation, setSelectedTransformation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 12;

  // Mock transformations data
  const allTransformations = [
    {
      id: 1,
      title: 'Radiant Bridal Glow',
      category: 'bridal',
      beforeImage: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
      stylist: 'Isabella Martinez',
      duration: '4 hours',
      price: 450,
      rating: 5.0,
      likes: 234,
      date: 'Sep 15, 2024',
      description: `A complete bridal transformation featuring luxury skincare preparation, professional makeup artistry, and elegant hair styling. This comprehensive package created the perfect wedding day look with long-lasting results.`,
      services: ['Deep Cleansing Facial', 'Airbrush Makeup', 'Bridal Hair Styling', 'Lash Extensions'],
      tags: ['Bridal', 'Luxury', 'Photography Ready', 'Long-lasting', 'Airbrush'],
      processImages: [
        'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=400&h=300&fit=crop',
        'https://images.pixabay.com/photo/2016/03/27/07/32/woman-1282314_1280.jpg?w=400&h=300&fit=crop'
      ],
      testimonial: {
        comment: "Isabella made me feel like a princess on my wedding day. The transformation was beyond my dreams and lasted perfectly through the entire celebration!",
        clientName: "Sarah Chen",
        date: "September 2024"
      }
    },
    {
      id: 2,
      title: 'Hydrating Facial Revival',
      category: 'facial',
      beforeImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      stylist: 'Emma Wilson',
      duration: '90 minutes',
      price: 180,
      rating: 4.8,
      likes: 156,
      date: 'Sep 12, 2024',
      description: `A rejuvenating facial treatment focusing on deep hydration and skin renewal. Using premium organic products and advanced techniques to restore your skin's natural radiance and youthful glow.`,
      services: ['Deep Cleansing', 'Exfoliation', 'Hydrating Mask', 'LED Light Therapy'],
      tags: ['Facial', 'Hydrating', 'Anti-aging', 'Organic', 'Glowing Skin'],
      processImages: [
        'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?w=400&h=300&fit=crop'
      ],
      testimonial: {
        comment: "My skin has never looked better! Emma\'s facial treatment gave me the most amazing glow that lasted for weeks.",
        clientName: "Maria Rodriguez",
        date: "September 2024"
      }
    },
    {
      id: 3,
      title: 'Glamorous Hair Transformation',category: 'hair',
      beforeImage: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',afterImage: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',stylist: 'Marcus Thompson',duration: '3 hours',price: 320,rating: 4.9,likes: 189,date: 'Sep 10, 2024',
      description: `A complete hair transformation featuring precision cutting, professional coloring, and styling. This makeover created a stunning new look that perfectly complements the client's features and lifestyle.`,
      services: ['Precision Cut', 'Color Treatment', 'Deep Conditioning', 'Professional Styling'],
      tags: ['Hair', 'Color', 'Cut', 'Styling', 'Transformation'],
      processImages: [
        'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?w=400&h=300&fit=crop',
        'https://images.pixabay.com/photo/2016/11/29/03/35/girl-1867092_1280.jpg?w=400&h=300&fit=crop'
      ],
      testimonial: {
        comment: "Marcus completely transformed my look! I love my new hair color and cut. It\'s exactly what I wanted and more.",
        clientName: "Jessica Park",
        date: "September 2024"
      }
    },
    {
      id: 4,
      title: 'Evening Glamour Makeup',
      category: 'makeup',
      beforeImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
      stylist: 'Sophia Chen',
      duration: '2 hours',
      price: 250,
      rating: 4.7,
      likes: 142,
      date: 'Sep 8, 2024',
      description: `A sophisticated evening makeup look featuring dramatic eyes, flawless complexion, and bold lips. Perfect for special occasions and events where you want to make a lasting impression.`,
      services: ['Contouring', 'Dramatic Eye Makeup', 'False Lashes', 'Long-wear Lipstick'],
      tags: ['Makeup', 'Evening', 'Dramatic', 'Special Occasion', 'Glamour'],
      processImages: [
        'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?w=400&h=300&fit=crop'
      ],
      testimonial: {
        comment: "Sophia created the most stunning evening look for my anniversary dinner. I felt absolutely gorgeous!",
        clientName: "Amanda Wilson",
        date: "September 2024"
      }
    },
    {
      id: 5,
      title: 'Complete Bridal Package',
      category: 'bridal',
      beforeImage: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=300&fit=crop',
      stylist: 'Isabella Martinez',
      duration: '5 hours',
      price: 650,
      rating: 5.0,
      likes: 298,
      date: 'Sep 5, 2024',
      description: `The ultimate bridal experience including pre-wedding skincare, trial makeup session, wedding day makeup and hair, plus touch-up services. Everything needed for the perfect wedding day look.`,
      services: ['Bridal Trial', 'Wedding Day Makeup', 'Hair Styling', 'Touch-up Kit', 'Photography'],
      tags: ['Bridal', 'Complete Package', 'Trial Session', 'Wedding Day', 'Premium'],
      processImages: [
        'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?w=400&h=300&fit=crop',
        'https://images.pixabay.com/photo/2016/03/27/07/32/woman-1282314_1280.jpg?w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=400&h=300&fit=crop'
      ],
      testimonial: {
        comment: "The complete bridal package was worth every penny. Isabella made my wedding day absolutely perfect!",
        clientName: "Emily Johnson",
        date: "September 2024"
      }
    },
    {
      id: 6,
      title: 'Anti-Aging Facial Treatment',
      category: 'facial',
      beforeImage: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      stylist: 'Dr. Rachel Kim',
      duration: '2 hours',
      price: 280,
      rating: 4.9,
      likes: 167,
      date: 'Sep 3, 2024',
      description: `Advanced anti-aging facial treatment using cutting-edge technology and premium serums. This treatment targets fine lines, improves skin texture, and promotes collagen production for youthful-looking skin.`,
      services: ['Microdermabrasion', 'Anti-aging Serum', 'Collagen Mask', 'Facial Massage'],
      tags: ['Facial', 'Anti-aging', 'Collagen', 'Advanced Treatment', 'Youthful'],
      processImages: [
        'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?w=400&h=300&fit=crop'
      ],
      testimonial: {
        comment: "Dr. Kim's anti-aging treatment has made such a difference in my skin. I look years younger!",
        clientName: "Linda Thompson",
        date: "September 2024"
      }
    }
  ];

  // Filter transformations based on active filter and search term
  const filteredTransformations = allTransformations?.filter(transformation => {
    const matchesFilter = activeFilter === 'all' || transformation?.category === activeFilter;
    const matchesSearch = transformation?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         transformation?.stylist?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         transformation?.tags?.some(tag => tag?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredTransformations?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransformations = filteredTransformations?.slice(startIndex, startIndex + itemsPerPage);

  // Reset to first page when filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchTerm]);

  const handleViewDetails = (transformation) => {
    setSelectedTransformation(transformation);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransformation(null);
  };

  const handleFilterChange = (filter) => {
    setIsLoading(true);
    setActiveFilter(filter);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - Morphic Beauty | Transformation Gallery</title>
        <meta name="description" content="Explore our stunning portfolio of beauty transformations. View before and after photos, client testimonials, and book your own transformation at Morphic Beauty." />
        <meta name="keywords" content="beauty portfolio, transformations, before after, makeup, hair styling, bridal, facial treatments" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 lg:pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-headline text-4xl lg:text-6xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Transformation
                </span>{' '}
                Portfolio
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover the artistry behind every transformation. Each image tells a story of confidence, 
                beauty, and personal empowerment through our expert beauty services.
              </p>
            </div>

            {/* Featured Showcase */}
            <FeaturedShowcase onViewDetails={handleViewDetails} />

            {/* Stats Section */}
            <StatsSection />

            {/* Filter Bar */}
            <FilterBar
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            {/* Results Summary */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h2 className="font-semibold text-foreground">
                  {filteredTransformations?.length} Transformations Found
                </h2>
                {searchTerm && (
                  <span className="text-sm text-muted-foreground">
                    for "{searchTerm}"
                  </span>
                )}
              </div>
              
              <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Grid3X3" size={16} />
                <span>Grid View</span>
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-12">
                <div className="flex items-center gap-3">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  <span className="text-muted-foreground">Loading transformations...</span>
                </div>
              </div>
            )}

            {/* Transformations Grid */}
            {!isLoading && (
              <>
                {paginatedTransformations?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {paginatedTransformations?.map((transformation) => (
                      <TransformationCard
                        key={transformation?.id}
                        transformation={transformation}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="glass-card p-8 max-w-md mx-auto">
                      <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">No Transformations Found</h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your filters or search terms to find what you're looking for.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setActiveFilter('all');
                          setSearchTerm('');
                        }}
                      >
                        Clear Filters
                      </Button>
                    </div>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      iconName="ChevronLeft"
                      iconPosition="left"
                    >
                      Previous
                    </Button>

                    <div className="flex items-center gap-1">
                      {[...Array(totalPages)]?.map((_, index) => {
                        const page = index + 1;
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <Button
                              key={page}
                              variant={currentPage === page ? "default" : "ghost"}
                              size="sm"
                              onClick={() => handlePageChange(page)}
                              className="w-10 h-10"
                            >
                              {page}
                            </Button>
                          );
                        } else if (page === currentPage - 2 || page === currentPage + 2) {
                          return <span key={page} className="px-2 text-muted-foreground">...</span>;
                        }
                        return null;
                      })}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      iconName="ChevronRight"
                      iconPosition="right"
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready for Your Own Transformation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have discovered their most beautiful selves. 
              Book your consultation today and let us create your perfect look.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="cta-morph"
                onClick={() => window.location.href = '/booking'}
              >
                Book Your Transformation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => window.location.href = '/contact'}
              >
                Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Transformation Modal */}
        <TransformationModal 
          transformation={selectedTransformation}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedTransformation(null);
          }}
        />
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;