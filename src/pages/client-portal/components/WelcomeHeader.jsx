import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WelcomeHeader = ({ user }) => {
  return (
    <div className="glass-card p-6 lg:p-8 mb-8 morph-hover">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden ring-4 ring-primary/20 morph-hover">
              <Image
                src={user?.avatar}
                alt={user?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-white flex items-center justify-center">
              <Icon name="Check" size={12} className="text-white" />
            </div>
          </div>
          
          <div>
            <h1 className="font-headline text-2xl lg:text-3xl font-bold text-foreground mb-1">
              Welcome back, {user?.firstName}!
            </h1>
            <p className="text-muted-foreground font-body">
              {user?.membershipTier} Member since {user?.memberSince}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Icon name="Star" size={16} className="text-warning fill-current" />
              <span className="text-sm font-medium text-foreground">{user?.loyaltyPoints} Loyalty Points</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <div className="glass-panel px-4 py-3 rounded-lg text-center morph-hover">
            <div className="text-2xl font-bold text-primary font-headline">{user?.totalVisits}</div>
            <div className="text-xs text-muted-foreground">Total Visits</div>
          </div>
          
          <div className="glass-panel px-4 py-3 rounded-lg text-center morph-hover">
            <div className="text-2xl font-bold text-accent font-headline">{user?.nextAppointment}</div>
            <div className="text-xs text-muted-foreground">Next Visit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;