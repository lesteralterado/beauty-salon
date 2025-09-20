import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ReferralProgram = ({ referralData, onSendReferral, onClaimReward }) => {
  const [referralEmail, setReferralEmail] = useState('');
  const [referralMessage, setReferralMessage] = useState('');
  const [showShareModal, setShowShareModal] = useState(false);

  const { 
    referralCode, 
    totalReferrals, 
    successfulReferrals, 
    pendingReferrals, 
    totalEarned, 
    availableRewards,
    recentReferrals 
  } = referralData;

  const handleSendReferral = () => {
    if (referralEmail?.trim()) {
      onSendReferral(referralEmail?.trim(), referralMessage?.trim());
      setReferralEmail('');
      setReferralMessage('');
    }
  };

  const copyReferralCode = () => {
    navigator.clipboard?.writeText(referralCode);
    // You could add a toast notification here
  };

  const shareOptions = [
    {
      name: 'Email',
      icon: 'Mail',
      color: 'bg-blue-500',
      action: () => {
        const subject = 'Join me at Morphic Beauty!';
        const body = `I've been loving my experience at Morphic Beauty and thought you'd enjoy it too! Use my referral code ${referralCode} to get a special discount on your first visit.\n\nBook your appointment at: https://morphicbeauty.com/booking?ref=${referralCode}`;
        window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      }
    },
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      color: 'bg-green-500',
      action: () => {
        const message = `Hey! I've been loving my experience at Morphic Beauty and thought you'd enjoy it too! Use my referral code ${referralCode} to get a special discount. Check them out: https://morphicbeauty.com/booking?ref=${referralCode}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`);
      }
    },
    {
      name: 'Facebook',
      icon: 'Share',
      color: 'bg-blue-600',
      action: () => {
        const url = `https://morphicbeauty.com/booking?ref=${referralCode}`;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
      }
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      color: 'bg-sky-500',
      action: () => {
        const text = `Just discovered @MorphicBeauty - amazing beauty treatments! Use my referral code ${referralCode} for a special discount 💄✨`;
        const url = `https://morphicbeauty.com/booking?ref=${referralCode}`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
      }
    }
  ];

  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
          <Icon name="Users" size={24} className="text-primary" />
          Referral Program
        </h2>
      </div>
      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="glass-panel p-4 rounded-xl text-center morph-hover">
          <div className="text-2xl font-bold text-primary font-headline mb-1">
            {totalReferrals}
          </div>
          <div className="text-sm text-muted-foreground">Total Referrals</div>
        </div>
        
        <div className="glass-panel p-4 rounded-xl text-center morph-hover">
          <div className="text-2xl font-bold text-success font-headline mb-1">
            {successfulReferrals}
          </div>
          <div className="text-sm text-muted-foreground">Successful</div>
        </div>
        
        <div className="glass-panel p-4 rounded-xl text-center morph-hover">
          <div className="text-2xl font-bold text-warning font-headline mb-1">
            {pendingReferrals}
          </div>
          <div className="text-sm text-muted-foreground">Pending</div>
        </div>
        
        <div className="glass-panel p-4 rounded-xl text-center morph-hover">
          <div className="text-2xl font-bold text-accent font-headline mb-1">
            ${totalEarned}
          </div>
          <div className="text-sm text-muted-foreground">Total Earned</div>
        </div>
      </div>
      {/* Referral Code Section */}
      <div className="glass-panel p-6 rounded-xl mb-8 morph-hover">
        <h3 className="font-headline text-lg font-semibold text-foreground mb-4">
          Your Referral Code
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <Icon name="Gift" size={24} className="text-primary" />
              <div>
                <div className="text-2xl font-bold text-primary font-headline">
                  {referralCode}
                </div>
                <div className="text-sm text-muted-foreground">
                  Share this code with friends
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              iconName="Copy"
              iconPosition="left"
              onClick={copyReferralCode}
            >
              Copy Code
            </Button>
            <Button
              variant="default"
              iconName="Share"
              iconPosition="left"
              onClick={() => setShowShareModal(true)}
            >
              Share
            </Button>
          </div>
        </div>
      </div>
      {/* Send Referral */}
      <div className="glass-panel p-6 rounded-xl mb-8">
        <h3 className="font-headline text-lg font-semibold text-foreground mb-4">
          Send Personal Referral
        </h3>
        
        <div className="space-y-4">
          <Input
            type="email"
            label="Friend's Email"
            placeholder="Enter email address"
            value={referralEmail}
            onChange={(e) => setReferralEmail(e?.target?.value)}
          />
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Personal Message (Optional)
            </label>
            <textarea
              className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              rows={3}
              placeholder="Add a personal message to your referral..."
              value={referralMessage}
              onChange={(e) => setReferralMessage(e?.target?.value)}
            />
          </div>
          
          <Button
            variant="default"
            iconName="Send"
            iconPosition="left"
            onClick={handleSendReferral}
            disabled={!referralEmail?.trim()}
          >
            Send Referral
          </Button>
        </div>
      </div>
      {/* Available Rewards */}
      {availableRewards?.length > 0 && (
        <div className="glass-panel p-6 rounded-xl mb-8">
          <h3 className="font-headline text-lg font-semibold text-foreground mb-4">
            Available Rewards
          </h3>
          
          <div className="space-y-3">
            {availableRewards?.map((reward) => (
              <div key={reward?.id} className="flex items-center justify-between p-4 bg-success/5 rounded-lg border border-success/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="Gift" size={20} className="text-success" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{reward?.title}</div>
                    <div className="text-sm text-muted-foreground">{reward?.description}</div>
                  </div>
                </div>
                
                <Button
                  variant="default"
                  size="sm"
                  iconName="Gift"
                  iconPosition="left"
                  onClick={() => onClaimReward(reward?.id)}
                >
                  Claim ${reward?.value}
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Recent Referrals */}
      <div>
        <h3 className="font-headline text-lg font-semibold text-foreground mb-4">
          Recent Referrals
        </h3>
        
        {recentReferrals?.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} className="text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">No referrals yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {recentReferrals?.map((referral) => (
              <div key={referral?.id} className="flex items-center justify-between p-4 glass-panel rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{referral?.email}</div>
                    <div className="text-sm text-muted-foreground">
                      Sent {new Date(referral.dateSent)?.toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  referral?.status === 'completed' ? 'text-success bg-success/10' :
                  referral?.status === 'pending'? 'text-warning bg-warning/10' : 'text-muted-foreground bg-muted/10'
                }`}>
                  {referral?.status?.charAt(0)?.toUpperCase() + referral?.status?.slice(1)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline text-lg font-semibold text-foreground">
                Share Your Referral
              </h3>
              <Button
                variant="ghost"
                size="sm"
                iconName="X"
                onClick={() => setShowShareModal(false)}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {shareOptions?.map((option) => (
                <button
                  key={option?.name}
                  onClick={() => {
                    option?.action();
                    setShowShareModal(false);
                  }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200 morph-hover"
                >
                  <div className={`w-12 h-12 ${option?.color} rounded-full flex items-center justify-center`}>
                    <Icon name={option?.icon} size={24} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{option?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferralProgram;