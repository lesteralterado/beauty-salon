import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import ServiceModal from './components/ServiceModal';
import CategoryFilter from './components/CategoryFilter';
import ServicePackages from './components/ServicePackages';
import VirtualConsultation from './components/VirtualConsultation';
import Footer from '../../components/Footer';

const Services = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredServices, setFilteredServices] = useState([]);

  // Mock data for service categories
  const categories = [
    { id: 'all', name: 'All Services', icon: 'Grid3X3', count: 12 },
    { id: 'facial', name: 'Facial Rejuvenation', icon: 'Sparkles', count: 4 },
    { id: 'skincare', name: 'Advanced Skincare', icon: 'Heart', count: 3 },
    { id: 'color', name: 'Color Services', icon: 'Palette', count: 3 },
    { id: 'signature', name: 'Signature Treatments', icon: 'Crown', count: 2 }
  ];

  // Mock data for services
  const services = [
    {
      id: 1,
      title: "HydraFacial MD",
      description: "Advanced multi-step treatment that cleanses, extracts, and hydrates skin using patented Vortex-Fusion technology for instant results.",
      category: "facial",
      icon: "Droplets",
      duration: "60 minutes",
      price: "150",
      suitableFor: "All skin types",
      resultsLast: "4-6 weeks",
      isPopular: true,
      detailedDescription: `Experience the ultimate in facial rejuvenation with our signature HydraFacial MD treatment. This revolutionary procedure combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in one comprehensive session.\n\nUsing patented Vortex-Fusion technology, we deliver immediate results with no downtime, making it perfect for busy professionals and special events.`,
      benefits: [
        "Immediate visible results",
        "No downtime required",
        "Suitable for sensitive skin",
        "Improves skin texture and tone",
        "Reduces fine lines and wrinkles",
        "Enhances skin hydration"
      ],
      process: [
        {
          title: "Cleanse & Peel",
          description: "Gentle exfoliation removes dead skin cells and reveals healthy new skin"
        },
        {
          title: "Extract & Hydrate",
          description: "Painless suction removes impurities while simultaneously hydrating"
        },
        {
          title: "Fuse & Protect",
          description: "Antioxidants and peptides are infused to maximize glow and protection"
        }
      ],
      aftercare: [
        "Avoid direct sun exposure for 24 hours",
        "Apply SPF 30+ sunscreen daily",
        "Use gentle, hydrating skincare products",
        "Avoid harsh exfoliants for 48 hours",
        "Stay hydrated and maintain healthy lifestyle"
      ]
    },
    {
      id: 2,
      title: "Morphic Glow Facial",
      description: "Our signature treatment combining LED light therapy, microcurrent, and custom serums for transformative skin rejuvenation.",
      category: "facial",
      icon: "Sun",
      duration: "90 minutes",
      price: "200",
      suitableFor: "Mature skin",
      resultsLast: "6-8 weeks",
      isPopular: false,
      detailedDescription: `The Morphic Glow Facial is our most comprehensive anti-aging treatment, designed to address multiple skin concerns in a single session. This luxurious experience combines cutting-edge technology with premium skincare ingredients.\n\nPerfect for clients seeking dramatic improvements in skin texture, firmness, and overall radiance.`,
      benefits: [
        "Stimulates collagen production",
        "Improves skin firmness",
        "Reduces appearance of fine lines",
        "Enhances skin radiance",
        "Evens skin tone",
        "Provides deep hydration"
      ],
      process: [
        {
          title: "Deep Cleansing",
          description: "Thorough cleansing and gentle exfoliation to prepare skin"
        },
        {
          title: "Microcurrent Therapy",
          description: "Non-invasive lifting and toning using gentle electrical currents"
        },
        {
          title: "LED Light Therapy",
          description: "Targeted light wavelengths to stimulate cellular renewal"
        },
        {
          title: "Custom Serum Infusion",
          description: "Personalized serums applied with advanced penetration techniques"
        }
      ],
      aftercare: [
        "Avoid makeup for 4-6 hours post-treatment",
        "Use recommended skincare products",
        "Apply sunscreen religiously",
        "Avoid extreme temperatures for 24 hours",
        "Schedule follow-up treatments as recommended"
      ]
    },
    {
      id: 3,
      title: "Diamond Microdermabrasion",
      description: "Professional-grade exfoliation using diamond-tip technology to reveal smoother, brighter skin with improved texture.",
      category: "skincare",
      icon: "Gem",
      duration: "45 minutes",
      price: "120",
      suitableFor: "Most skin types",
      resultsLast: "3-4 weeks",
      isPopular: false,
      detailedDescription: `Transform your skin with our advanced Diamond Microdermabrasion treatment. This non-invasive procedure uses medical-grade diamond tips to gently remove the outermost layer of dead skin cells.\n\nIdeal for addressing sun damage, fine lines, acne scarring, and uneven skin texture.`,
      benefits: [
        "Improves skin texture",
        "Reduces fine lines",
        "Minimizes pore appearance",
        "Evens skin tone",
        "Stimulates cell turnover",
        "Enhances product absorption"
      ],
      process: [
        {
          title: "Skin Analysis",
          description: "Comprehensive assessment to determine optimal treatment settings"
        },
        {
          title: "Diamond Exfoliation",
          description: "Gentle abrasion using diamond-tip wands of varying coarseness"
        },
        {
          title: "Hydrating Treatment",
          description: "Soothing serums and moisturizers to calm and protect skin"
        }
      ],
      aftercare: [
        "Avoid sun exposure for 48 hours",
        "Use gentle, fragrance-free products",
        "Apply moisturizer frequently",
        "Avoid retinoids for 3-5 days",
        "Stay hydrated and use SPF daily"
      ]
    },
    {
      id: 4,
      title: "Chemical Peel Therapy",
      description: "Customized chemical peels ranging from gentle to intensive, designed to address specific skin concerns and reveal fresh skin.",
      category: "skincare",
      icon: "Beaker",
      duration: "30-60 minutes",
      price: "100",
      suitableFor: "Varies by peel",
      resultsLast: "2-6 months",
      isPopular: false,
      detailedDescription: `Our Chemical Peel Therapy offers a range of customized treatments from gentle lunchtime peels to more intensive resurfacing options. Each peel is carefully selected based on your skin type and concerns.\n\nExperience dramatic improvements in skin texture, tone, and clarity with our professional-grade formulations.`,
      benefits: [
        "Reduces acne and scarring",
        "Improves skin texture",
        "Minimizes hyperpigmentation",
        "Stimulates collagen production",
        "Refines pore appearance",
        "Brightens complexion"
      ],
      process: [
        {
          title: "Consultation",
          description: "Detailed skin analysis to select appropriate peel strength"
        },
        {
          title: "Preparation",
          description: "Skin cleansing and pre-treatment conditioning"
        },
        {
          title: "Peel Application",
          description: "Careful application of chemical solution with monitoring"
        },
        {
          title: "Neutralization",
          description: "Safe neutralization and post-treatment care application"
        }
      ],
      aftercare: [
        "Avoid sun exposure completely",
        "Do not pick or peel skin",
        "Use only recommended products",
        "Apply healing ointments as directed",
        "Follow specific post-peel protocol"
      ]
    },
    {
      id: 5,
      title: "Balayage Hair Color",
      description: "Hand-painted highlights creating natural, sun-kissed color with seamless blending and dimensional results.",
      category: "color",
      icon: "Paintbrush",
      duration: "3-4 hours",
      price: "250",
      suitableFor: "All hair types",
      resultsLast: "3-4 months",
      isPopular: true,
      detailedDescription: `Achieve effortlessly beautiful, natural-looking highlights with our expert Balayage technique. This hand-painted method creates soft, graduated color that grows out beautifully.\n\nPerfect for clients seeking low-maintenance color with maximum impact and natural movement.`,
      benefits: [
        "Natural-looking results",
        "Low maintenance growth",
        "Customizable placement",
        "Works with any base color",
        "Adds dimension and movement",
        "Suitable for all hair lengths"
      ],
      process: [
        {
          title: "Color Consultation",
          description: "Detailed discussion of desired results and color planning"
        },
        {
          title: "Sectioning & Painting",
          description: "Strategic sectioning and hand-painting of highlights"
        },
        {
          title: "Processing",
          description: "Careful monitoring during color development"
        },
        {
          title: "Toning & Styling",
          description: "Custom toning and professional styling to finish"
        }
      ],
      aftercare: [
        "Wait 48 hours before washing",
        "Use color-safe shampoo and conditioner",
        "Apply heat protectant before styling",
        "Schedule regular toning appointments",
        "Protect hair from sun and chlorine"
      ]
    },
    {
      id: 6,
      title: "Precision Hair Cut & Style",
      description: "Expert cutting techniques tailored to your face shape, lifestyle, and personal style preferences.",
      category: "color",
      icon: "Scissors",
      duration: "60-90 minutes",
      price: "85",
      suitableFor: "All hair types",
      resultsLast: "6-8 weeks",
      isPopular: false,
      detailedDescription: `Experience the artistry of precision cutting with our master stylists. Every cut is customized to enhance your natural features while considering your lifestyle and maintenance preferences.\n\nFrom classic styles to cutting-edge trends, we create looks that are both beautiful and wearable.`,
      benefits: [
        "Customized to face shape",
        "Professional styling techniques",
        "Low-maintenance options",
        "Enhances natural texture",
        "Boosts confidence",
        "Expert product recommendations"
      ],
      process: [
        {
          title: "Style Consultation",
          description: "Discussion of lifestyle, preferences, and face shape analysis"
        },
        {
          title: "Precision Cutting",
          description: "Expert cutting using advanced techniques and tools"
        },
        {
          title: "Professional Styling",
          description: "Blow-dry and styling with premium products"
        },
        {
          title: "Home Care Education",
          description: "Tips and techniques for maintaining your new style"
        }
      ],
      aftercare: [
        "Use recommended styling products",
        "Follow provided styling tips",
        "Schedule regular trims",
        "Protect hair from heat damage",
        "Maintain healthy hair routine"
      ]
    },
    {
      id: 7,
      title: "Morphic Signature Massage",
      description: "Full-body therapeutic massage combining Swedish, deep tissue, and aromatherapy techniques for ultimate relaxation.",
      category: "signature",
      icon: "Hand",
      duration: "90 minutes",
      price: "180",
      suitableFor: "Adults",
      resultsLast: "1-2 weeks",
      isPopular: true,
      detailedDescription: `Indulge in our signature massage experience that combines multiple therapeutic techniques for comprehensive relaxation and healing. This luxurious treatment addresses both physical tension and mental stress.\n\nPerfect for busy professionals seeking deep relaxation and muscle tension relief.`,
      benefits: [
        "Reduces muscle tension",
        "Improves circulation",
        "Promotes deep relaxation",
        "Relieves stress and anxiety",
        "Enhances sleep quality",
        "Boosts overall well-being"
      ],
      process: [
        {
          title: "Consultation",
          description: "Discussion of areas of concern and pressure preferences"
        },
        {
          title: "Aromatherapy Selection",
          description: "Choice of custom essential oil blends"
        },
        {
          title: "Therapeutic Massage",
          description: "Full-body massage using varied techniques"
        },
        {
          title: "Relaxation Period",
          description: "Quiet time to integrate the treatment benefits"
        }
      ],
      aftercare: [
        "Drink plenty of water",
        "Avoid strenuous activity for 24 hours",
        "Take a warm bath with Epsom salts",
        "Get adequate rest",
        "Schedule regular sessions for best results"
      ]
    },
    {
      id: 8,
      title: "Luxury Manicure & Pedicure",
      description: "Complete nail care experience with cuticle treatment, shaping, polish application, and relaxing hand/foot massage.",
      category: "signature",
      icon: "Sparkles",
      duration: "75 minutes",
      price: "95",
      suitableFor: "All ages",
      resultsLast: "2-3 weeks",
      isPopular: false,
      detailedDescription: `Pamper yourself with our comprehensive nail care service that goes beyond basic maintenance. This luxurious treatment includes detailed cuticle care, nail shaping, and a relaxing massage.\n\nPerfect for special occasions or regular self-care maintenance.`,
      benefits: [
        "Professional nail shaping",
        "Cuticle care and conditioning",
        "Relaxing hand and foot massage",
        "Long-lasting polish application",
        "Improved nail health",
        "Stress relief and pampering"
      ],
      process: [
        {
          title: "Nail Assessment",
          description: "Evaluation of nail health and shape preferences"
        },
        {
          title: "Soaking & Softening",
          description: "Warm soaks to soften cuticles and calluses"
        },
        {
          title: "Shaping & Buffing",
          description: "Professional nail shaping and surface preparation"
        },
        {
          title: "Polish & Massage",
          description: "Color application and relaxing massage treatment"
        }
      ],
      aftercare: [
        "Avoid water for 2 hours",
        "Use cuticle oil daily",
        "Wear gloves for cleaning",
        "Apply top coat weekly",
        "Schedule regular maintenance"
      ]
    }
  ];

  // Mock data for service packages
  const packages = [
    {
      id: 1,
      name: "Beauty Transformation",
      description: "Complete makeover package for special occasions",
      icon: "Crown",
      price: "450",
      originalPrice: "550",
      savings: "100",
      duration: "4-5 hours",
      sessions: "1",
      isPopular: true,
      features: [
        "HydraFacial MD treatment",
        "Professional hair cut & style",
        "Balayage color service",
        "Luxury manicure & pedicure",
        "Complimentary makeup application",
        "Professional photography session"
      ],
      services: [
        { name: "HydraFacial MD", value: "150" },
        { name: "Hair Cut & Style", value: "85" },
        { name: "Balayage Color", value: "250" },
        { name: "Manicure & Pedicure", value: "95" }
      ]
    },
    {
      id: 2,
      name: "Monthly Glow",
      description: "Regular maintenance package for ongoing beauty care",
      icon: "Calendar",
      price: "320",
      originalPrice: "380",
      savings: "60",
      duration: "2-3 hours",
      sessions: "3",
      isPopular: false,
      features: [
        "Monthly facial treatment",
        "Quarterly chemical peel",
        "Regular nail maintenance",
        "Skincare consultation",
        "Product recommendations",
        "Priority booking access"
      ],
      services: [
        { name: "Morphic Glow Facial", value: "200" },
        { name: "Chemical Peel", value: "100" },
        { name: "Manicure Service", value: "65" }
      ]
    },
    {
      id: 3,
      name: "Wellness Retreat",
      description: "Ultimate relaxation and rejuvenation experience",
      icon: "Heart",
      price: "380",
      originalPrice: "450",
      savings: "70",
      duration: "3-4 hours",
      sessions: "1",
      isPopular: false,
      features: [
        "Signature massage therapy",
        "HydraFacial treatment",
        "Aromatherapy session",
        "Healthy refreshments",
        "Relaxation lounge access",
        "Take-home wellness kit"
      ],
      services: [
        { name: "Signature Massage", value: "180" },
        { name: "HydraFacial MD", value: "150" },
        { name: "Aromatherapy", value: "80" }
      ]
    }
  ];

  // Filter services based on active category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredServices(services);
    } else {
      setFilteredServices(services?.filter(service => service?.category === activeCategory));
    }
  }, [activeCategory]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleBookNow = (service) => {
    navigate('/booking', { state: { selectedService: service } });
  };

  const handleBookPackage = (pkg) => {
    navigate('/booking', { state: { selectedPackage: pkg } });
  };

  const handleScheduleConsultation = (consultationData) => {
    console.log('Consultation scheduled:', consultationData);
    // Here you would typically send the data to your backend
    alert('Thank you! Your virtual consultation has been scheduled. We will contact you within 24 hours to confirm your appointment.');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/30 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-6 float-gentle">
              <Icon name="Sparkles" size={40} className="text-primary" />
            </div>
            
            <h1 className="font-headline text-4xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Transform
              </span>{' '}
              Your Beauty Journey
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of premium beauty treatments designed to enhance your natural radiance through cutting-edge techniques and personalized care
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="cta-morph bg-primary hover:bg-primary/90"
                onClick={() => navigate('/booking')}
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
              >
                Book Consultation
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                iconName="ArrowDown"
                iconPosition="right"
                iconSize={20}
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 glass-panel p-8 rounded-2xl">
            {[
              { number: '500+', label: 'Happy Clients', icon: 'Users' },
              { number: '12', label: 'Premium Services', icon: 'Sparkles' },
              { number: '5+', label: 'Years Experience', icon: 'Award' },
              { number: '98%', label: 'Satisfaction Rate', icon: 'Heart' }
            ]?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={stat?.icon} size={24} className="text-primary" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat?.number}</div>
                <div className="text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section id="services-grid" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Premium Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each treatment is carefully crafted to deliver exceptional results using the latest techniques and premium products
            </p>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredServices?.map((service) => (
              <ServiceCard
                key={service?.id}
                service={service}
                onBookNow={handleBookNow}
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Service Packages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicePackages
          packages={packages}
          onBookPackage={handleBookPackage}
        />
      </div>
      {/* Virtual Consultation */}
      <VirtualConsultation
        onScheduleConsultation={handleScheduleConsultation}
      />
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center float-gentle">
              <Icon name="Star" size={32} className="text-primary" />
            </div>
            
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Begin Your Transformation?
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have discovered their best selves through our premium beauty services. Book your consultation today and start your journey to radiant confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="cta-morph bg-primary hover:bg-primary/90"
                onClick={() => navigate('/booking')}
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
              >
                Book Your Appointment
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/contact')}
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
              >
                Ask Questions
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onBookNow={handleBookNow}
      />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;