import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services', icon: 'Sparkles' },
    { name: 'Portfolio', path: '/portfolio', icon: 'Image' },
    { name: 'About', path: '/about', icon: 'Users' },
    { name: 'Booking', path: '/booking', icon: 'Calendar' }
  ];

  const moreItems = [
    { name: 'Beauty Academy', path: '/beauty-academy', icon: 'GraduationCap' },
    { name: 'Client Portal', path: '/client-portal', icon: 'User' },
    { name: 'Contact', path: '/contact', icon: 'MessageCircle' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const handleNavigation = (path) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel shadow-glassmorphism' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20 pr-4 lg:pr-8">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer morph-hover"
            onClick={() => handleNavigation('/homepage')}
          >
            <div className="relative">
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 48 48" 
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="50%" stopColor="var(--color-accent)" />
                    <stop offset="100%" stopColor="var(--color-primary)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Morphing Beauty Symbol */}
                <path 
                  d="M24 8 C32 8, 40 16, 40 24 C40 32, 32 40, 24 40 C16 40, 8 32, 8 24 C8 16, 16 8, 24 8 Z" 
                  fill="url(#logoGradient)" 
                  filter="url(#glow)"
                />
                
                {/* Inner Morphing Element */}
                <path 
                  d="M24 14 C28 14, 32 18, 32 22 C32 26, 28 30, 24 30 C20 30, 16 26, 16 22 C16 18, 20 14, 24 14 Z" 
                  fill="rgba(255,255,255,0.3)"
                />
                
                {/* Center Sparkle */}
                <circle 
                  cx="24" 
                  cy="22" 
                  r="3" 
                  fill="white" 
                />
              </svg>
            </div>
            
            <div className="ml-3">
              <h1 className="font-headline text-xl lg:text-2xl font-bold text-primary">
                Morphic Beauty
              </h1>
              <p className="text-xs text-muted-foreground font-accent hidden lg:block">
                Luxury Beauty Sanctuary
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 morph-hover ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary shadow-subtle'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={18} className="mr-2" />
                {item?.name}
              </button>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 rounded-lg font-medium text-foreground hover:bg-muted hover:text-primary transition-all duration-300 morph-hover">
                <Icon name="MoreHorizontal" size={18} className="mr-2" />
                More
                <Icon name="ChevronDown" size={16} className="ml-1 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 glass-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {moreItems?.map((item) => (
                  <button
                    key={item?.path}
                    onClick={() => handleNavigation(item?.path)}
                    className={`flex items-center w-full px-4 py-3 text-left hover:bg-primary/5 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                      isActivePath(item?.path) ? 'text-primary bg-primary/5' : 'text-foreground'
                    }`}
                  >
                    <Icon name={item?.icon} size={16} className="mr-3" />
                    {item?.name}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block ml-6">
            <Button
              variant="default"
              className="cta-morph bg-vibrant-rose hover:bg-vibrant-rose/90 text-white font-cta font-semibold px-6 py-2.5"
              onClick={() => handleNavigation('/booking')}
              iconName="Calendar"
              iconPosition="left"
              iconSize={18}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200 morph-hover"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-foreground transition-transform duration-300"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-panel mt-2 mx-4 rounded-xl shadow-glassmorphism">
            <nav className="py-4">
              {[...navigationItems, ...moreItems]?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`flex items-center w-full px-6 py-3 text-left transition-colors duration-200 ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/5 border-r-2 border-primary' :'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={item?.icon} size={20} className="mr-4" />
                  <span className="font-medium">{item?.name}</span>
                </button>
              ))}
              
              <div className="px-6 pt-4 border-t border-border/50 mt-4">
                <Button
                  variant="default"
                  fullWidth
                  className="cta-morph bg-vibrant-rose hover:bg-vibrant-rose/90 text-white font-cta font-semibold"
                  onClick={() => handleNavigation('/booking')}
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={18}
                >
                  Book Consultation
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;