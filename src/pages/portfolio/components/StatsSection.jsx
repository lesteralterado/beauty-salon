import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    transformations: 0,
    happyClients: 0,
    awards: 0,
    experience: 0
  });

  const finalStats = {
    transformations: 1250,
    happyClients: 980,
    awards: 15,
    experience: 8
  };

  const statsData = [
    {
      key: 'transformations',
      label: 'Transformations Completed',
      value: finalStats?.transformations,
      icon: 'Sparkles',
      suffix: '+',
      color: 'text-primary'
    },
    {
      key: 'happyClients',
      label: 'Happy Clients',
      value: finalStats?.happyClients,
      icon: 'Heart',
      suffix: '+',
      color: 'text-error'
    },
    {
      key: 'awards',
      label: 'Industry Awards',
      value: finalStats?.awards,
      icon: 'Award',
      suffix: '',
      color: 'text-warning'
    },
    {
      key: 'experience',
      label: 'Years of Excellence',
      value: finalStats?.experience,
      icon: 'Star',
      suffix: '+',
      color: 'text-success'
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = statsData?.map((stat) => {
      const increment = stat?.value / steps;
      let currentValue = 0;
      let step = 0;

      return setInterval(() => {
        step++;
        currentValue = Math.min(Math.floor(increment * step), stat?.value);
        
        setCounters(prev => ({
          ...prev,
          [stat?.key]: currentValue
        }));

        if (step >= steps) {
          clearInterval(intervals?.[statsData?.indexOf(stat)]);
        }
      }, stepDuration);
    });

    return () => {
      intervals?.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <div className="mb-12">
      <div className="glass-panel p-8">
        <div className="text-center mb-8">
          <h2 className="font-headline text-3xl font-bold text-foreground mb-3">
            Our Impact in Numbers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every transformation tells a story of confidence, beauty, and personal empowerment. 
            Here's the impact we've made together with our amazing clients.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData?.map((stat, index) => (
            <div
              key={stat?.key}
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-card p-6 morph-hover group-hover:shadow-floating transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-${stat?.color?.replace('text-', '')}/20 to-${stat?.color?.replace('text-', '')}/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon 
                    name={stat?.icon} 
                    size={28} 
                    className={`${stat?.color} group-hover:animate-pulse`} 
                  />
                </div>
                
                <div className="mb-2">
                  <span className="font-headline text-3xl lg:text-4xl font-bold text-foreground">
                    {counters?.[stat?.key]?.toLocaleString()}
                  </span>
                  <span className={`text-2xl lg:text-3xl font-bold ${stat?.color}`}>
                    {stat?.suffix}
                  </span>
                </div>
                
                <p className="text-muted-foreground font-medium text-sm lg:text-base">
                  {stat?.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-8 pt-8 border-t border-border/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="TrendingUp" size={20} className="text-success" />
                <span className="font-semibold text-foreground">98% Satisfaction Rate</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Based on client feedback and reviews
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="Users" size={20} className="text-primary" />
                <span className="font-semibold text-foreground">85% Return Clients</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Clients who book multiple services
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="Share" size={20} className="text-accent" />
                <span className="font-semibold text-foreground">92% Referral Rate</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Clients who recommend us to friends
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;