import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CategoryCard from './components/CategoryCard';
import TutorialCard from './components/TutorialCard';
import SkinAnalysisQuiz from './components/SkinAnalysisQuiz';
import ColorMatchingTool from './components/ColorMatchingTool';
import ExpertTipCard from './components/ExpertTipCard';
import TreatmentGuideCard from './components/TreatmentGuideCard';
import Footer from '../../components/Footer';

const BeautyAcademy = () => {
  const [activeCategory, setActiveCategory] = useState('skincare');
  const [activeTab, setActiveTab] = useState('tutorials');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const categories = [
    {
      id: 'skincare',
      name: 'Skincare Essentials',
      icon: 'Sparkles',
      description: 'Learn the fundamentals of healthy, glowing skin with expert-approved routines and techniques.',
      contentCount: 24,
      isNew: false
    },
    {
      id: 'makeup',
      name: 'Makeup Artistry',
      icon: 'Palette',
      description: 'Master professional makeup techniques from basic application to advanced artistry skills.',
      contentCount: 18,
      isNew: true
    },
    {
      id: 'haircare',
      name: 'Hair Care & Styling',
      icon: 'Scissors',
      description: 'Discover the secrets to healthy hair and learn styling techniques for every occasion.',
      contentCount: 15,
      isNew: false
    },
    {
      id: 'wellness',
      name: 'Beauty Wellness',
      icon: 'Heart',
      description: 'Explore holistic beauty approaches that nurture your inner and outer radiance.',
      contentCount: 12,
      isNew: false
    },
    {
      id: 'trends',
      name: 'Latest Trends',
      icon: 'TrendingUp',
      description: 'Stay ahead with the newest beauty trends, seasonal looks, and industry innovations.',
      contentCount: 8,
      isNew: true
    },
    {
      id: 'tools',
      name: 'Tools & Techniques',
      icon: 'Wrench',
      description: 'Master the use of professional beauty tools and learn advanced application techniques.',
      contentCount: 20,
      isNew: false
    }
  ];

  const tutorials = [
    {
      id: 1,
      title: "Perfect Winged Eyeliner in 5 Minutes",
      description: "Master the art of creating flawless winged eyeliner with this step-by-step tutorial that works for every eye shape.",
      thumbnail: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
      duration: 320,
      difficulty: "Beginner",
      category: "Makeup",
      instructor: {
        name: "Sarah Chen",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      views: "12.5K"
    },
    {
      id: 2,
      title: "10-Step Korean Skincare Routine",
      description: "Discover the secrets of Korean skincare with this comprehensive routine that will transform your skin.",
      thumbnail: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
      duration: 480,
      difficulty: "Intermediate",
      category: "Skincare",
      instructor: {
        name: "Dr. Emily Park",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
      },
      views: "8.2K"
    },
    {
      id: 3,
      title: "Effortless Beach Waves Tutorial",
      description: "Create gorgeous, natural-looking beach waves using simple techniques and minimal heat styling.",
      thumbnail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
      duration: 240,
      difficulty: "Beginner",
      category: "Hair",
      instructor: {
        name: "Maria Rodriguez",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg"
      },
      views: "15.7K"
    },
    {
      id: 4,
      title: "Contouring for Your Face Shape",
      description: "Learn professional contouring techniques tailored to enhance your unique facial features.",
      thumbnail: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
      duration: 420,
      difficulty: "Advanced",
      category: "Makeup",
      instructor: {
        name: "Jessica Williams",
        avatar: "https://randomuser.me/api/portraits/women/35.jpg"
      },
      views: "9.8K"
    }
  ];

  const expertTips = [
    {
      id: 1,
      title: "The Secret to Long-Lasting Lipstick",
      preview: "Professional makeup artists swear by this simple technique that makes any lipstick last all day without touch-ups...",
      fullContent: `Professional makeup artists swear by this simple technique that makes any lipstick last all day without touch-ups. The key is in the preparation and layering process.\n\nFirst, exfoliate your lips gently with a lip scrub or soft toothbrush. This removes dead skin cells and creates a smooth canvas. Next, apply a thin layer of lip balm and let it absorb for 2-3 minutes.\n\nHere's the secret: blot away excess balm, then apply a thin layer of translucent powder over your lips. This creates a grippy base for your lipstick. Apply your lipstick in thin layers, blotting between each application.\n\nFinally, place a tissue over your lips and dust with translucent powder again. This sets the color and prevents transfer. Your lipstick will now last through meals and drinks!`,
      category: "Makeup Tips",
      expert: {
        name: "Alexandra Stone",
        specialty: "Celebrity Makeup Artist",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg"
      },
      readTime: "3 min read",
      rating: 5,
      likes: 234,
      comments: 18,
      tools: ["Lip scrub", "Translucent powder", "Tissue", "Quality lipstick"]
    },
    {
      id: 2,
      title: "Skincare Layering Order That Actually Works",
      preview: "The order you apply your skincare products can make or break your routine. Here's the scientifically-backed sequence...",
      fullContent: `The order you apply your skincare products can make or break your routine. Here's the scientifically-backed sequence that maximizes absorption and effectiveness.\n\nThe golden rule is to apply products from thinnest to thickest consistency, allowing each layer to absorb before applying the next.\n\nMorning routine order:\n1. Cleanser\n2. Toner/Essence\n3. Serums (Vitamin C first, then others)\n4. Eye cream\n5. Moisturizer\n6. Sunscreen (always last!)\n\nEvening routine order:\n1. Oil cleanser (if wearing makeup)\n2. Water-based cleanser\n3. Exfoliant (2-3x per week)\n4. Toner/Essence\n5. Treatment serums (retinol, niacinamide)\n6. Eye cream\n7. Moisturizer\n8. Face oil (if needed)\n\nWait 30 seconds to 1 minute between each step for optimal absorption.`,
      category: "Skincare",
      expert: {
        name: "Dr. Rachel Kim",specialty: "Dermatologist",avatar: "https://randomuser.me/api/portraits/women/38.jpg"
      },
      readTime: "4 min read",
      rating: 5,
      likes: 456,
      comments: 32,
      tools: ["Gentle cleanser", "Vitamin C serum", "Retinol", "Broad-spectrum SPF"]
    }
  ];

  const treatmentGuides = [
    {
      id: 1,
      title: "Pre-Facial Preparation Guide",
      description: "Prepare your skin for the ultimate facial experience with this comprehensive pre-treatment routine.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
      duration: "24 hours before",
      difficulty: "Easy",
      suitableFor: "All skin types",
      steps: [
        {
          title: "Stop using active ingredients",
          description: "Discontinue retinoids, AHA/BHA, and vitamin C 48 hours before your appointment",
          tip: "This prevents over-exfoliation and sensitivity"
        },
        {
          title: "Hydrate your skin",
          description: "Use a gentle, hydrating moisturizer twice daily for 3 days prior",
          tip: "Well-hydrated skin responds better to treatments"
        },
        {
          title: "Avoid sun exposure",
          description: "Stay out of direct sunlight and always wear SPF 30+ for one week before",
          tip: "Sunburned skin cannot be safely treated"
        },
        {
          title: "Remove makeup thoroughly",
          description: "Arrive with completely clean skin - no makeup, skincare, or oils",
          tip: "This allows for proper skin analysis"
        },
        {
          title: "Stay hydrated",
          description: "Drink plenty of water the day before and morning of your appointment",
          tip: "Hydrated skin heals faster and looks better"
        }
      ]
    },
    {
      id: 2,
      title: "Post-Treatment Aftercare",
      description: "Maximize your treatment results with proper aftercare techniques and product recommendations.",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
      duration: "7-14 days",
      difficulty: "Medium",
      suitableFor: "Post-facial care",
      steps: [
        {
          title: "Keep skin clean and gentle",
          description: "Use only gentle, fragrance-free cleansers for the first 48 hours",
          tip: "Avoid scrubbing or harsh rubbing motions"
        },
        {
          title: "Apply recommended products only",
          description: "Use only the products recommended by your aesthetician",
          tip: "Introducing new products can cause reactions"
        },
        {
          title: "Avoid heat and sweating",
          description: "No hot showers, saunas, or intense workouts for 24-48 hours",
          tip: "Heat can increase inflammation and sensitivity"
        },
        {
          title: "Protect from sun exposure",
          description: "Wear SPF 30+ and avoid direct sunlight for at least one week",
          tip: "Treated skin is more susceptible to sun damage"
        }
      ]
    }
  ];

  const tabs = [
    { id: 'tutorials', name: 'Video Tutorials', icon: 'Play' },
    { id: 'tips', name: 'Expert Tips', icon: 'Lightbulb' },
    { id: 'guides', name: 'Treatment Guides', icon: 'FileText' },
    { id: 'tools', name: 'Interactive Tools', icon: 'Settings' }
  ];

  const filteredTutorials = tutorials?.filter(tutorial =>
    tutorial?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    tutorial?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="glass-card p-8 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading Beauty Academy...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 morph-hover">
              <Icon name="GraduationCap" size={18} />
              Beauty Education Hub
            </div>
            
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-morph">Beauty Academy</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Master the art of beauty with our comprehensive educational platform. From skincare fundamentals to advanced techniques, unlock your potential with expert-led tutorials and interactive tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="cta-morph bg-vibrant-rose hover:bg-vibrant-rose/90 text-white font-cta font-semibold px-8"
                iconName="Play"
                iconPosition="left"
              >
                Start Learning
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Learning Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose your area of interest and dive deep into expert-curated content designed to elevate your beauty knowledge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories?.map((category) => (
              <CategoryCard
                key={category?.id}
                category={category}
                isActive={activeCategory === category?.id}
                onClick={() => setActiveCategory(category?.id)}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Content Tabs */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 morph-hover ${
                  activeTab === tab?.id
                    ? 'bg-primary text-white shadow-floating'
                    : 'bg-white/50 text-foreground hover:bg-white/80'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                {tab?.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          {(activeTab === 'tutorials' || activeTab === 'tips') && (
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                />
              </div>
            </div>
          )}

          {/* Content Display */}
          <div className="space-y-8">
            {activeTab === 'tutorials' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTutorials?.map((tutorial) => (
                  <TutorialCard key={tutorial?.id} tutorial={tutorial} />
                ))}
              </div>
            )}

            {activeTab === 'tips' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {expertTips?.map((tip) => (
                  <ExpertTipCard key={tip?.id} tip={tip} />
                ))}
              </div>
            )}

            {activeTab === 'guides' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {treatmentGuides?.map((guide) => (
                  <TreatmentGuideCard key={guide?.id} guide={guide} />
                ))}
              </div>
            )}

            {activeTab === 'tools' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-foreground mb-6">
                      Skin Analysis Quiz
                    </h3>
                    <SkinAnalysisQuiz />
                  </div>
                  
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-foreground mb-6">
                      Color Matching Tool
                    </h3>
                    <ColorMatchingTool />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Beauty Skills?
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of beauty enthusiasts who have elevated their skills through our comprehensive academy. Start your journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-cta font-semibold px-8"
              iconName="BookOpen"
              iconPosition="left"
            >
              Enroll Now
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Contact Expert
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BeautyAcademy;