import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ activeFilter, onFilterChange, searchTerm, onSearchChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterCategories = [
    { id: 'all', label: 'All Transformations', icon: 'Grid3X3', count: 156 },
    { id: 'facial', label: 'Facial Treatments', icon: 'Sparkles', count: 45 },
    { id: 'hair', label: 'Hair Styling', icon: 'Scissors', count: 38 },
    { id: 'makeup', label: 'Makeup Artistry', icon: 'Palette', count: 42 },
    { id: 'bridal', label: 'Bridal Packages', icon: 'Heart', count: 31 }
  ];

  const sortOptions = [
    { id: 'recent', label: 'Most Recent', icon: 'Clock' },
    { id: 'popular', label: 'Most Popular', icon: 'TrendingUp' },
    { id: 'rating', label: 'Highest Rated', icon: 'Star' }
  ];

  return (
    <div className="glass-panel p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <input
            type="text"
            placeholder="Search transformations..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full pl-10 pr-4 py-3 bg-surface/50 border border-border/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
          />
        </div>

        {/* Filter Toggle (Mobile) */}
        <div className="lg:hidden">
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            iconName={isFilterOpen ? "X" : "Filter"}
            iconPosition="left"
            className="w-full"
          >
            {isFilterOpen ? 'Close Filters' : 'Show Filters'}
          </Button>
        </div>

        {/* Sort Options */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="text-sm text-muted-foreground mr-2">Sort by:</span>
          {sortOptions?.map((option) => (
            <Button
              key={option?.id}
              variant="ghost"
              size="sm"
              iconName={option?.icon}
              iconPosition="left"
              iconSize={16}
              className="text-sm"
            >
              {option?.label}
            </Button>
          ))}
        </div>
      </div>
      {/* Filter Categories */}
      <div className={`mt-6 transition-all duration-300 ${isFilterOpen || window.innerWidth >= 1024 ? 'block' : 'hidden'} lg:block`}>
        <div className="flex flex-wrap gap-3">
          {filterCategories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => onFilterChange(category?.id)}
              className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 morph-hover ${
                activeFilter === category?.id
                  ? 'bg-primary text-white shadow-floating'
                  : 'bg-surface/50 text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={category?.icon} size={16} className="mr-2" />
              <span>{category?.label}</span>
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeFilter === category?.id
                  ? 'bg-white/20 text-white' :'bg-muted text-muted-foreground'
              }`}>
                {category?.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;