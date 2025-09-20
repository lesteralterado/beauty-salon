import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LoyaltyProgram = ({ loyaltyData, onRedeemReward, onViewRewards }) => {
  const { currentPoints, nextTierPoints, currentTier, nextTier, availableRewards, recentEarnings } = loyaltyData;
  
  const progressPercentage = (currentPoints / nextTierPoints) * 100;
  const pointsToNext = nextTierPoints - currentPoints;

  const getTierColor = (tier) => {
    const colors = {
      'Bronze': 'text-amber-600 bg-amber-100',
      'Silver': 'text-gray-600 bg-gray-100',
      'Gold': 'text-yellow-600 bg-yellow-100',
      'Platinum': 'text-purple-600 bg-purple-100',
      'Diamond': 'text-blue-600 bg-blue-100'
    };
    return colors?.[tier] || 'text-primary bg-primary/10';
  };

  const getTierIcon = (tier) => {
    const icons = {
      'Bronze': 'Award',
      'Silver': 'Medal',
      'Gold': 'Crown',
      'Platinum': 'Gem',
      'Diamond': 'Diamond'
    };
    return icons?.[tier] || 'Star';
  };

  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
          <Icon name="Gift" size={24} className="text-primary" />
          Loyalty Program
        </h2>
        <Button
          variant="outline"
          size="sm"
          iconName="Eye"
          iconPosition="left"
          onClick={onViewRewards}
        >
          View All Rewards
        </Button>
      </div>
      {/* Current Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Points & Tier */}
        <div className="glass-panel p-6 rounded-xl morph-hover">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-headline text-lg font-semibold text-foreground mb-1">
                Current Status
              </h3>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getTierColor(currentTier)}`}>
                <Icon name={getTierIcon(currentTier)} size={16} />
                {currentTier} Member
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary font-headline">
                {currentPoints?.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Points</div>
            </div>
          </div>

          {/* Progress to Next Tier */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress to {nextTier}</span>
              <span className="text-foreground font-medium">{pointsToNext} points to go</span>
            </div>
            <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 morph-hover"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              />
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Earn points with every visit and unlock exclusive rewards!
          </p>
        </div>

        {/* Recent Earnings */}
        <div className="glass-panel p-6 rounded-xl morph-hover">
          <h3 className="font-headline text-lg font-semibold text-foreground mb-4">
            Recent Earnings
          </h3>
          <div className="space-y-3">
            {recentEarnings?.map((earning, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="Plus" size={16} className="text-success" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      {earning?.service}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {earning?.date}
                    </div>
                  </div>
                </div>
                <div className="text-success font-semibold">
                  +{earning?.points}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Available Rewards */}
      <div>
        <h3 className="font-headline text-lg font-semibold text-foreground mb-4">
          Available Rewards
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableRewards?.map((reward) => (
            <div
              key={reward?.id}
              className="group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 morph-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${reward?.canRedeem ? 'bg-primary' : 'bg-muted'} rounded-lg flex items-center justify-center morph-hover`}>
                  <Icon 
                    name={reward?.icon} 
                    size={24} 
                    className={reward?.canRedeem ? 'text-white' : 'text-muted-foreground'} 
                  />
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  reward?.canRedeem ? 'text-success bg-success/10' : 'text-muted-foreground bg-muted/10'
                }`}>
                  {reward?.pointsCost} pts
                </div>
              </div>

              <h4 className="font-headline text-base font-semibold text-foreground mb-2">
                {reward?.title}
              </h4>
              
              <p className="text-sm text-muted-foreground mb-4">
                {reward?.description}
              </p>

              <Button
                variant={reward?.canRedeem ? "default" : "outline"}
                size="sm"
                fullWidth
                disabled={!reward?.canRedeem}
                iconName={reward?.canRedeem ? "Gift" : "Lock"}
                iconPosition="left"
                onClick={() => reward?.canRedeem && onRedeemReward(reward?.id)}
              >
                {reward?.canRedeem ? 'Redeem Now' : 'Not Available'}
              </Button>

              {/* Morphing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
      {/* Tier Benefits */}
      <div className="mt-8 glass-panel p-6 rounded-xl">
        <h3 className="font-headline text-lg font-semibold text-foreground mb-4">
          Your {currentTier} Benefits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loyaltyData?.tierBenefits?.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Check" size={16} className="text-primary" />
              </div>
              <span className="text-sm text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;