import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Facial Treatments', href: '/services#facial' },
        { name: 'Hair Styling', href: '/services#hair' },
        { name: 'Makeup Artistry', href: '/services#makeup' },
        { name: 'Nail Services', href: '/services#nails' },
        { name: 'Body Treatments', href: '/services#body' },
        { name: 'Lash & Brow', href: '/services#lash-brow' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Beauty Academy', href: '/beauty-academy' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Client Portal', href: '/client-portal' },
        { name: 'Booking Help', href: '/help/booking' },
        { name: 'Gift Cards', href: '/gift-cards' },
        { name: 'Loyalty Program', href: '/loyalty' },
        { name: 'FAQ', href: '/faq' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Refund Policy', href: '/refund' },
        { name: 'Accessibility', href: '/accessibility' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/morphicbeauty', followers: '25K' },
    { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com/morphicbeauty', followers: '15K' },
    { name: 'TikTok', icon: 'Music', href: 'https://tiktok.com/@morphicbeauty', followers: '30K' },
    { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com/morphicbeauty', followers: '12K' },
    { name: 'Pinterest', icon: 'Image', href: 'https://pinterest.com/morphicbeauty', followers: '8K' }
  ];

  const contactInfo = {
    address: '123 Beauty Boulevard, Luxury District, NY 10001',
    phone: '(555) 123-BEAUTY',
    email: 'hello@morphicbeauty.com',
    hours: {
      weekdays: 'Mon-Fri: 9:00 AM - 8:00 PM',
      weekends: 'Sat-Sun: 10:00 AM - 6:00 PM'
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-border/50">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-24 h-24 bg-gradient-to-l from-accent/10 to-primary/10 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '20%', right: '15%' }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <motion.div
          className="glass-card p-8 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground">
            Stay Beautiful with Our Newsletter
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get exclusive beauty tips, early access to new services, and special offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button
              variant="default"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium px-6"
              iconName="Send"
              iconPosition="right"
              iconSize={16}
            >
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex items-center mb-6">
              <div className="relative">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-primary)" />
                      <stop offset="50%" stopColor="var(--color-accent)" />
                      <stop offset="100%" stopColor="var(--color-primary)" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M20 6 C28 6, 34 12, 34 20 C34 28, 28 34, 20 34 C12 34, 6 28, 6 20 C6 12, 12 6, 20 6 Z" 
                    fill="url(#footerLogoGradient)"
                  />
                  <path 
                    d="M20 12 C24 12, 28 16, 28 20 C28 24, 24 28, 20 28 C16 28, 12 24, 12 20 C12 16, 16 12, 20 12 Z" 
                    fill="rgba(255,255,255,0.3)"
                  />
                  <circle cx="20" cy="20" r="3" fill="white" />
                </svg>
              </div>
              <div className="ml-3">
                <h2 className="font-headline text-xl font-bold text-morph">
                  Morphic Beauty
                </h2>
                <p className="text-xs text-muted-foreground font-accent">
                  Luxury Beauty Sanctuary
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transform your beauty vision into reality at our cutting-edge sanctuary where innovation meets elegance. Experience the future of beauty care.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Icon name="MapPin" size={16} className="text-primary mr-3" />
                <span className="text-muted-foreground">{contactInfo?.address}</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="text-primary mr-3" />
                <span className="text-muted-foreground">{contactInfo?.phone}</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="text-primary mr-3" />
                <span className="text-muted-foreground">{contactInfo?.email}</span>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6 p-4 glass-panel rounded-lg">
              <h4 className="font-semibold text-foreground mb-2 flex items-center">
                <Icon name="Clock" size={16} className="text-primary mr-2" />
                Business Hours
              </h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>{contactInfo?.hours?.weekdays}</p>
                <p>{contactInfo?.hours?.weekends}</p>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections?.map((section, index) => (
            <motion.div
              key={section?.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-foreground mb-4">{section?.title}</h3>
              <ul className="space-y-2">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <a
                      href={link?.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Media Section */}
        <motion.div
          className="border-t border-border/50 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-semibold text-foreground mb-6 text-center">Follow Our Beauty Journey</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks?.map((social) => (
              <motion.a
                key={social?.name}
                href={social?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 text-center cursor-pointer group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Icon 
                  name={social?.icon} 
                  size={24} 
                  className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="text-xs font-medium text-foreground">{social?.followers}</div>
                <div className="text-xs text-muted-foreground">{social?.name}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Morphic Beauty. All rights reserved. Crafted with ❤️ for beauty enthusiasts.
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="Shield" size={14} className="text-primary" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="Award" size={14} className="text-primary" />
              <span>Licensed & Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="Heart" size={14} className="text-primary" />
              <span>5-Star Rated</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;