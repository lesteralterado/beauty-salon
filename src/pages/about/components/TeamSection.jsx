import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Isabella Rodriguez",
      role: "Founder & Creative Director",
      specialties: ["Advanced Color Theory", "3D Hair Sculpting", "Luxury Bridal"],
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: `Master colorist and visionary leader who pioneered the integration of technology with traditional beauty artistry.\nSpecializes in creating transformative experiences that reveal each client's unique beauty potential.`,
      achievements: ["International Beauty Award 2023", "Master Colorist Certification", "Innovation in Beauty Technology"],
      social: { instagram: "@isabella_morphic", linkedin: "isabella-rodriguez" }
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Senior Hair Architect",
      specialties: ["Precision Cutting", "Texture Transformation", "Men\'s Grooming"],
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: `Internationally trained hair architect known for creating structural masterpieces that complement facial geometry.\nExpert in both classic techniques and cutting-edge morphing methodologies.`,
      achievements: ["Vidal Sassoon Advanced Training", "Men\'s Grooming Specialist", "Precision Cutting Master"],
      social: { instagram: "@marcus_cuts", linkedin: "marcus-chen-hair" }
    },
    {
      id: 3,
      name: "Sophia Williams",
      role: "Skin Transformation Specialist",
      specialties: ["Advanced Skincare", "Anti-Aging Treatments", "Skin Analysis"],
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: `Licensed aesthetician and skin health expert who combines medical-grade treatments with luxury spa experiences.\nSpecializes in personalized skincare regimens using advanced diagnostic technology.`,
      achievements: ["Medical Aesthetics Certification", "Advanced Skincare Diploma", "Skin Health Innovation Award"],
      social: { instagram: "@sophia_skincare", linkedin: "sophia-williams-aesthetics" }
    },
    {
      id: 4,
      name: "David Park",
      role: "Makeup Artistry Director",
      specialties: ["Editorial Makeup", "Special Effects", "Color Matching"],
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: `Award-winning makeup artist with extensive experience in fashion, film, and luxury beauty.\nMaster of color theory and advanced application techniques for all skin tones and types.`,
      achievements: ["Fashion Week Lead Artist", "Film Industry Recognition", "Color Theory Certification"],
      social: { instagram: "@david_makeup", linkedin: "david-park-mua" }
    },
    {
      id: 5,
      name: "Elena Vasquez",
      role: "Wellness & Beauty Therapist",
      specialties: ["Holistic Treatments", "Relaxation Therapy", "Beauty Wellness"],
      experience: "9+ Years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      bio: `Certified wellness therapist who integrates mind-body connection with beauty treatments.\nSpecializes in creating transformative experiences that nurture both inner and outer beauty.`,
      achievements: ["Holistic Therapy Certification", "Wellness Integration Award", "Mind-Body Beauty Specialist"],
      social: { instagram: "@elena_wellness", linkedin: "elena-vasquez-therapy" }
    },
    {
      id: 6,
      name: "James Thompson",
      role: "Technology Integration Lead",
      specialties: ["AR Beauty Tech", "3D Consultation", "Digital Innovation"],
      experience: "6+ Years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: `Technology innovator who bridges the gap between traditional beauty services and cutting-edge digital experiences.\nLeads the development of our revolutionary AR try-on and 3D consultation platforms.`,
      achievements: ["Beauty Tech Innovation Award", "AR Development Certification", "Digital Transformation Leader"],
      social: { instagram: "@james_beautytech", linkedin: "james-thompson-tech" }
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="text-morph">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-accent">
            Our passionate team of beauty innovators combines years of expertise with cutting-edge 
            techniques to deliver transformative experiences that exceed expectations.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers?.map((member, index) => (
            <motion.div
              key={member?.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredMember(member?.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="glass-card p-6 h-full morph-hover relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden glass-panel p-1">
                      <Image
                        src={member?.image}
                        alt={member?.name}
                        className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Floating Badges */}
                    <div className="absolute -top-2 -right-2 glass-panel p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <Icon name="Award" size={16} className="text-primary" />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 font-headline">
                      {member?.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member?.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member?.experience}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {member?.specialties?.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio - Shown on Hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={hoveredMember === member?.id ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                      {member?.bio}
                    </p>
                    
                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="text-xs font-semibold text-foreground mb-2">Key Achievements</h5>
                      <ul className="space-y-1">
                        {member?.achievements?.map((achievement, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center">
                            <Icon name="CheckCircle" size={12} className="text-primary mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 pt-4 border-t border-border/50">
                    <button className="glass-panel p-2 rounded-full hover:bg-primary/10 transition-colors duration-200">
                      <Icon name="Instagram" size={16} className="text-muted-foreground hover:text-primary" />
                    </button>
                    <button className="glass-panel p-2 rounded-full hover:bg-primary/10 transition-colors duration-200">
                      <Icon name="Linkedin" size={16} className="text-muted-foreground hover:text-primary" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <Icon name="Users" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4 font-headline">
              Join Our Team
            </h3>
            <p className="text-muted-foreground mb-6">
              Are you passionate about beauty innovation and client transformation? 
              We're always looking for talented individuals to join our growing team.
            </p>
            <button className="cta-morph bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
              <Icon name="Send" size={18} />
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;