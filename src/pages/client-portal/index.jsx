import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import WelcomeHeader from './components/WelcomeHeader';
import QuickActions from './components/QuickActions';
import UpcomingAppointments from './components/UpcomingAppointments';
import TreatmentHistory from './components/TreatmentHistory';
import LoyaltyProgram from './components/LoyaltyProgram';
import PhotoGallery from './components/PhotoGallery';
import MessagingCenter from './components/MessagingCenter';
import BillingHistory from './components/BillingHistory';
import ReferralProgram from './components/ReferralProgram';
import Icon from '../../components/AppIcon';

import Footer from '../../components/Footer';

const ClientPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock user data
  const mockUser = {
    id: 1,
    firstName: "Sarah",
    lastName: "Johnson",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    membershipTier: "Gold",
    memberSince: "March 2023",
    loyaltyPoints: 2450,
    totalVisits: 18,
    nextAppointment: "Dec 15"
  };

  // Mock appointments data
  const mockAppointments = [
    {
      id: 1,
      service: "Signature Facial Treatment",
      date: "2024-12-15T14:00:00",
      duration: 90,
      price: 180,
      status: "confirmed",
      location: "Main Studio",
      stylist: {
        name: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
      }
    },
    {
      id: 2,
      service: "Deep Cleansing Facial",
      date: "2024-12-22T10:30:00",
      duration: 75,
      price: 150,
      status: "pending",
      location: "Spa Room 2",
      stylist: {
        name: "Maria Santos",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
      }
    }
  ];

  // Mock treatment history
  const mockTreatments = [
    {
      id: 1,
      service: "Hydrating Facial",
      serviceType: "facial",
      date: "2024-11-20",
      price: 160,
      rating: 5,
      notes: "Amazing results! My skin feels so refreshed and glowing. Emma was fantastic and really understood my skin needs.",
      stylist: {
        name: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
      },
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=150&h=150&fit=crop",
        after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=150&h=150&fit=crop"
      }
    },
    {
      id: 2,
      service: "Anti-Aging Treatment",
      serviceType: "skincare",
      date: "2024-10-15",
      price: 220,
      rating: 5,
      notes: "Incredible anti-aging treatment. Noticed immediate improvement in skin texture and fine lines.",
      stylist: {
        name: "Maria Santos",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
      }
    },
    {
      id: 3,
      service: "Relaxing Massage",
      serviceType: "massage",
      date: "2024-09-28",
      price: 140,
      rating: 4,
      notes: "Very relaxing session. Perfect for stress relief after a long week.",
      stylist: {
        name: "Lisa Chen",
        avatar: "https://images.unsplash.com/photo-1594824388853-d0c7b3b9e2c3?w=150&h=150&fit=crop&crop=face"
      }
    }
  ];

  // Mock loyalty program data
  const mockLoyaltyData = {
    currentPoints: 2450,
    nextTierPoints: 3000,
    currentTier: "Gold",
    nextTier: "Platinum",
    availableRewards: [
      {
        id: 1,
        title: "Free Facial Treatment",
        description: "Complimentary 60-minute facial",
        pointsCost: 1500,
        canRedeem: true,
        icon: "Sparkles"
      },
      {
        id: 2,
        title: "20% Off Next Visit",
        description: "Discount on any service",
        pointsCost: 800,
        canRedeem: true,
        icon: "Percent"
      },
      {
        id: 3,
        title: "Premium Product Set",
        description: "Luxury skincare collection",
        pointsCost: 3000,
        canRedeem: false,
        icon: "Gift"
      }
    ],
    recentEarnings: [
      { service: "Hydrating Facial", points: 160, date: "Nov 20, 2024" },
      { service: "Anti-Aging Treatment", points: 220, date: "Oct 15, 2024" },
      { service: "Relaxing Massage", points: 140, date: "Sep 28, 2024" }
    ],
    tierBenefits: [
      "15% discount on all services",
      "Priority booking access",
      "Complimentary consultation",
      "Birthday month special offer",
      "Free product samples",
      "Exclusive event invitations"
    ]
  };

  // Mock photo gallery data
  const mockPhotos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
      type: "before",
      date: "2024-11-20",
      treatment: "Hydrating Facial",
      description: "Before facial treatment",
      isPrivate: false
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
      type: "after",
      date: "2024-11-20",
      treatment: "Hydrating Facial",
      description: "After facial treatment - amazing glow!",
      isPrivate: false
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop",
      type: "progress",
      date: "2024-10-15",
      treatment: "Anti-Aging Treatment",
      description: "Progress after 3 sessions",
      isPrivate: true
    }
  ];

  // Mock conversations data
  const mockConversations = [
    {
      id: 1,
      stylist: {
        name: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        isOnline: true
      },
      lastMessage: {
        content: "Looking forward to your appointment on Friday! I\'ve prepared a special treatment plan for you.",
        timestamp: new Date(Date.now() - 3600000),
        isFromStylist: true
      },
      unreadCount: 2,
      messages: [
        {
          id: 1,
          content: "Hi Emma! I\'m excited about my upcoming appointment. Should I prepare anything special?",
          timestamp: new Date(Date.now() - 7200000),
          isFromStylist: false
        },
        {
          id: 2,
          content: "Hi Sarah! Just make sure to come with a clean face, no makeup. I'll take care of everything else!",
          timestamp: new Date(Date.now() - 5400000),
          isFromStylist: true
        },
        {
          id: 3,
          content: "Looking forward to your appointment on Friday! I\'ve prepared a special treatment plan for you.",
          timestamp: new Date(Date.now() - 3600000),
          isFromStylist: true
        }
      ]
    },
    {
      id: 2,
      stylist: {
        name: "Maria Santos",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
        isOnline: false
      },
      lastMessage: {
        content: "Thank you for the wonderful review! It was a pleasure working with you.",
        timestamp: new Date(Date.now() - 86400000),
        isFromStylist: true
      },
      unreadCount: 0,
      messages: [
        {
          id: 1,
          content: "Thank you for the amazing anti-aging treatment! My skin looks incredible.",
          timestamp: new Date(Date.now() - 172800000),
          isFromStylist: false
        },
        {
          id: 2,
          content: "Thank you for the wonderful review! It was a pleasure working with you.",
          timestamp: new Date(Date.now() - 86400000),
          isFromStylist: true
        }
      ]
    }
  ];

  // Mock billing data
  const mockBillingData = {
    totalSpent: 2840,
    averageSpent: 158,
    paymentMethods: [
      {
        id: 1,
        brand: "Visa",
        lastFour: "4242",
        expiryMonth: "12",
        expiryYear: "2026",
        isDefault: true
      },
      {
        id: 2,
        brand: "Mastercard",
        lastFour: "8888",
        expiryMonth: "08",
        expiryYear: "2025",
        isDefault: false
      }
    ],
    invoices: [
      {
        id: 1,
        number: "INV-2024-001",
        date: "2024-11-20",
        dueDate: "2024-11-20",
        amount: 160,
        tax: 12.8,
        status: "paid",
        services: ["Hydrating Facial"]
      },
      {
        id: 2,
        number: "INV-2024-002",
        date: "2024-10-15",
        dueDate: "2024-10-15",
        amount: 220,
        tax: 17.6,
        status: "paid",
        services: ["Anti-Aging Treatment"]
      },
      {
        id: 3,
        number: "INV-2024-003",
        date: "2024-12-22",
        dueDate: "2024-12-29",
        amount: 150,
        tax: 12,
        status: "pending",
        services: ["Deep Cleansing Facial"]
      }
    ]
  };

  // Mock referral data
  const mockReferralData = {
    referralCode: "SARAH2024",
    totalReferrals: 8,
    successfulReferrals: 5,
    pendingReferrals: 3,
    totalEarned: 250,
    availableRewards: [
      {
        id: 1,
        title: "Referral Bonus",
        description: "Earned from successful referrals",
        value: 50
      },
      {
        id: 2,
        title: "Friend Bonus",
        description: "Additional bonus for multiple referrals",
        value: 25
      }
    ],
    recentReferrals: [
      {
        id: 1,
        email: "jessica.smith@email.com",
        dateSent: "2024-11-15",
        status: "completed"
      },
      {
        id: 2,
        email: "amanda.wilson@email.com",
        dateSent: "2024-11-10",
        status: "pending"
      },
      {
        id: 3,
        email: "rachel.brown@email.com",
        dateSent: "2024-10-28",
        status: "completed"
      }
    ]
  };

  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      setUser(mockUser);
      setLoading(false);
    }, 1000);
  }, []);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'appointments', label: 'Appointments', icon: 'Calendar' },
    { id: 'history', label: 'History', icon: 'History' },
    { id: 'loyalty', label: 'Loyalty', icon: 'Gift' },
    { id: 'gallery', label: 'Gallery', icon: 'Camera' },
    { id: 'messages', label: 'Messages', icon: 'MessageCircle' },
    { id: 'billing', label: 'Billing', icon: 'CreditCard' },
    { id: 'referrals', label: 'Referrals', icon: 'Users' }
  ];

  // Event handlers
  const handleBookAppointment = () => {
    window.location.href = '/booking';
  };

  const handleViewTreatments = () => {
    setActiveTab('history');
  };

  const handleContactStylist = () => {
    setActiveTab('messages');
  };

  const handleUploadPhoto = () => {
    setActiveTab('gallery');
    // Simulate file upload
    console.log('Opening file upload dialog...');
  };

  const handleRescheduleAppointment = (appointmentId) => {
    console.log('Rescheduling appointment:', appointmentId);
    // Implement reschedule logic
  };

  const handleCancelAppointment = (appointmentId) => {
    console.log('Cancelling appointment:', appointmentId);
    // Implement cancel logic
  };

  const handleViewTreatmentDetails = (treatmentId) => {
    console.log('Viewing treatment details:', treatmentId);
    // Implement view details logic
  };

  const handleBookAgain = (serviceName) => {
    console.log('Booking again:', serviceName);
    window.location.href = `/booking?service=${encodeURIComponent(serviceName)}`;
  };

  const handleRedeemReward = (rewardId) => {
    console.log('Redeeming reward:', rewardId);
    // Implement reward redemption logic
  };

  const handleViewRewards = () => {
    console.log('Viewing all rewards');
    // Implement view all rewards logic
  };

  const handleSetPhotoPrivacy = (photoId, isPrivate) => {
    console.log('Setting photo privacy:', photoId, isPrivate);
    // Implement photo privacy logic
  };

  const handleDeletePhoto = (photoId) => {
    console.log('Deleting photo:', photoId);
    // Implement photo deletion logic
  };

  const handleSendMessage = (conversationId, message) => {
    console.log('Sending message:', conversationId, message);
    // Implement message sending logic
  };

  const handleStartNewConversation = () => {
    console.log('Starting new conversation');
    // Implement new conversation logic
  };

  const handleDownloadReceipt = (invoiceId) => {
    console.log('Downloading receipt:', invoiceId);
    // Implement receipt download logic
  };

  const handleViewInvoiceDetails = (invoiceId) => {
    console.log('Viewing invoice details:', invoiceId);
    // Implement invoice details logic
  };

  const handleSendReferral = (email, message) => {
    console.log('Sending referral:', email, message);
    // Implement referral sending logic
  };

  const handleClaimReward = (rewardId) => {
    console.log('Claiming reward:', rewardId);
    // Implement reward claiming logic
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="font-headline text-xl font-semibold text-foreground mb-2">
              Loading Your Portal
            </h2>
            <p className="text-muted-foreground">
              Preparing your personalized dashboard...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Welcome Header */}
          <WelcomeHeader user={user} />

          {/* Navigation Tabs */}
          <div className="glass-card p-2 mb-8">
            <div className="flex flex-wrap gap-1">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 morph-hover ${
                    activeTab === tab?.id
                      ? 'bg-primary text-white shadow-subtle'
                      : 'text-foreground hover:bg-white/5 hover:text-primary'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span className="hidden sm:inline">{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === 'dashboard' && (
              <>
                <QuickActions
                  onBookAppointment={handleBookAppointment}
                  onViewTreatments={handleViewTreatments}
                  onContactStylist={handleContactStylist}
                  onUploadPhoto={handleUploadPhoto}
                />
                <UpcomingAppointments
                  appointments={mockAppointments}
                  onReschedule={handleRescheduleAppointment}
                  onCancel={handleCancelAppointment}
                />
                <LoyaltyProgram
                  loyaltyData={mockLoyaltyData}
                  onRedeemReward={handleRedeemReward}
                  onViewRewards={handleViewRewards}
                />
              </>
            )}

            {activeTab === 'appointments' && (
              <UpcomingAppointments
                appointments={mockAppointments}
                onReschedule={handleRescheduleAppointment}
                onCancel={handleCancelAppointment}
              />
            )}

            {activeTab === 'history' && (
              <TreatmentHistory
                treatments={mockTreatments}
                onViewDetails={handleViewTreatmentDetails}
                onBookAgain={handleBookAgain}
              />
            )}

            {activeTab === 'loyalty' && (
              <LoyaltyProgram
                loyaltyData={mockLoyaltyData}
                onRedeemReward={handleRedeemReward}
                onViewRewards={handleViewRewards}
              />
            )}

            {activeTab === 'gallery' && (
              <PhotoGallery
                photos={mockPhotos}
                onUploadPhoto={handleUploadPhoto}
                onDeletePhoto={handleDeletePhoto}
                onSetPrivacy={handleSetPhotoPrivacy}
              />
            )}

            {activeTab === 'messages' && (
              <MessagingCenter
                conversations={mockConversations}
                onSendMessage={handleSendMessage}
                onStartNewConversation={handleStartNewConversation}
              />
            )}

            {activeTab === 'billing' && (
              <BillingHistory
                billingData={mockBillingData}
                onDownloadReceipt={handleDownloadReceipt}
                onViewDetails={handleViewInvoiceDetails}
              />
            )}

            {activeTab === 'referrals' && (
              <ReferralProgram
                referralData={mockReferralData}
                onSendReferral={handleSendReferral}
                onClaimReward={handleClaimReward}
              />
            )}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ClientPortal;