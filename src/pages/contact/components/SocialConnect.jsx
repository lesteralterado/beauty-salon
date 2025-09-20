import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialConnect = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@morphicbeauty",
      followers: "12.5K",
      icon: "Instagram",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      url: "https://instagram.com/morphicbeauty",
      description: "Daily beauty inspiration & client transformations"
    },
    {
      name: "Facebook",
      handle: "Morphic Beauty Salon",
      followers: "8.2K",
      icon: "Facebook",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      url: "https://facebook.com/morphicbeauty",
      description: "Community updates & beauty tips"
    },
    {
      name: "TikTok",
      handle: "@morphicbeauty",
      followers: "25.8K",
      icon: "Music",
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
      url: "https://tiktok.com/@morphicbeauty",
      description: "Quick beauty tutorials & behind-the-scenes"
    },
    {
      name: "YouTube",
      handle: "Morphic Beauty",
      followers: "5.1K",
      icon: "Play",
      color: "text-red-600",
      bgColor: "bg-red-600/10",
      url: "https://youtube.com/morphicbeauty",
      description: "In-depth tutorials & client stories"
    }
  ];

  const recentPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop",
      caption: "Stunning bridal makeup transformation ✨ #BridalBeauty #MorphicMagic",
      likes: 234,
      platform: "Instagram"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=300&h=300&fit=crop",
      caption: "New skincare routine reveal! Glowing skin secrets 💫",
      likes: 189,
      platform: "Instagram"
    },
    {
      id: 3,
      image: "https://images.pixabay.com/photo/2016/03/26/22/13/woman-1281826_960_720.jpg?w=300&h=300&fit=crop",
      caption: "Color correction masterclass in progress 🎨",
      likes: 156,
      platform: "Instagram"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop",
      caption: "Behind the scenes: Creating the perfect look ✨",
      likes: 203,
      platform: "Instagram"
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our beauty journey and get daily inspiration, tips, and exclusive behind-the-scenes content from our expert team.
          </p>
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialPlatforms?.map((platform, index) => (
            <div
              key={index}
              className="glass-card p-6 interactive-card cursor-pointer group"
              onClick={() => handleSocialClick(platform?.url)}
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${platform?.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={platform?.icon} size={24} className={platform?.color} />
                </div>
                
                <h3 className="font-headline text-lg font-semibold text-foreground mb-1">
                  {platform?.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-2">
                  {platform?.handle}
                </p>
                
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Icon name="Users" size={14} className="text-primary" />
                  <span className="text-sm font-medium text-primary">{platform?.followers}</span>
                </div>
                
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {platform?.description}
                </p>
                
                <div className="mt-4 flex items-center justify-center text-primary group-hover:translate-x-1 transition-transform duration-300">
                  <span className="text-sm font-medium mr-1">Follow</span>
                  <Icon name="ExternalLink" size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="glass-card p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline text-2xl font-semibold text-foreground">
              Recent Posts
            </h3>
            <button
              onClick={() => handleSocialClick('https://instagram.com/morphicbeauty')}
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="text-sm font-medium">View All</span>
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts?.map((post) => (
              <div key={post?.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <Image
                    src={post?.image}
                    alt={`Social media post ${post?.id}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-3 right-3">
                    <div className="glass-panel p-2 rounded-full">
                      <Icon name="Instagram" size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-foreground leading-relaxed mb-2 line-clamp-2">
                  {post?.caption}
                </p>
                
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={14} className="text-red-500" />
                  <span className="text-xs text-muted-foreground">{post?.likes} likes</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 lg:p-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 glass-panel rounded-full mb-6">
              <Icon name="Mail" size={24} className="text-primary" />
            </div>
            
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
              Stay Updated
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for exclusive beauty tips, special offers, and first access to new services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass-panel rounded-lg border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 cta-morph">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time. Privacy policy applies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;