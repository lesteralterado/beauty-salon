import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const PhotoGallery = ({ photos, onUploadPhoto, onDeletePhoto, onSetPrivacy }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'timeline'
  const [filter, setFilter] = useState('all'); // 'all', 'before', 'after', 'progress'

  const filteredPhotos = photos?.filter(photo => {
    if (filter === 'all') return true;
    return photo?.type === filter;
  });

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getTypeIcon = (type) => {
    const icons = {
      'before': 'ArrowLeft',
      'after': 'ArrowRight',
      'progress': 'TrendingUp',
      'result': 'CheckCircle'
    };
    return icons?.[type] || 'Camera';
  };

  const getTypeColor = (type) => {
    const colors = {
      'before': 'text-warning bg-warning/10',
      'after': 'text-success bg-success/10',
      'progress': 'text-accent bg-accent/10',
      'result': 'text-primary bg-primary/10'
    };
    return colors?.[type] || 'text-muted-foreground bg-muted/10';
  };

  const PhotoModal = ({ photo, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">
              {photo?.treatment || 'Beauty Journey Photo'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {formatDate(photo?.date)} • {photo?.type?.charAt(0)?.toUpperCase() + photo?.type?.slice(1)}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            onClick={onClose}
          />
        </div>
        
        <div className="p-6">
          <div className="aspect-video w-full rounded-xl overflow-hidden mb-4">
            <Image
              src={photo?.url}
              alt={photo?.description}
              className="w-full h-full object-cover"
            />
          </div>
          
          {photo?.description && (
            <p className="text-sm text-foreground mb-4">{photo?.description}</p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(photo?.type)}`}>
                <Icon name={getTypeIcon(photo?.type)} size={12} className="mr-1" />
                {photo?.type?.charAt(0)?.toUpperCase() + photo?.type?.slice(1)}
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                photo?.isPrivate ? 'text-error bg-error/10' : 'text-success bg-success/10'
              }`}>
                <Icon name={photo?.isPrivate ? 'Lock' : 'Eye'} size={12} className="mr-1" />
                {photo?.isPrivate ? 'Private' : 'Visible'}
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                iconName={photo?.isPrivate ? 'Eye' : 'Lock'}
                iconPosition="left"
                onClick={() => onSetPrivacy(photo?.id, !photo?.isPrivate)}
              >
                {photo?.isPrivate ? 'Make Visible' : 'Make Private'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                iconName="Trash2"
                iconPosition="left"
                onClick={() => onDeletePhoto(photo?.id)}
                className="text-error hover:text-error hover:bg-error/10"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
          <Icon name="Camera" size={24} className="text-primary" />
          Beauty Journey Gallery
        </h2>
        
        <Button
          variant="default"
          iconName="Upload"
          iconPosition="left"
          onClick={onUploadPhoto}
        >
          Upload Photo
        </Button>
      </div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { key: 'all', label: 'All Photos', icon: 'Grid' },
          { key: 'before', label: 'Before', icon: 'ArrowLeft' },
          { key: 'after', label: 'After', icon: 'ArrowRight' },
          { key: 'progress', label: 'Progress', icon: 'TrendingUp' }
        ]?.map((filterOption) => (
          <Button
            key={filterOption?.key}
            variant={filter === filterOption?.key ? 'default' : 'outline'}
            size="sm"
            iconName={filterOption?.icon}
            iconPosition="left"
            onClick={() => setFilter(filterOption?.key)}
          >
            {filterOption?.label}
          </Button>
        ))}
      </div>
      {filteredPhotos?.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Camera" size={32} className="text-muted-foreground" />
          </div>
          <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
            No Photos Yet
          </h3>
          <p className="text-muted-foreground mb-4">
            Start documenting your beauty journey by uploading your first photo!
          </p>
          <Button
            variant="default"
            iconName="Upload"
            iconPosition="left"
            onClick={onUploadPhoto}
          >
            Upload First Photo
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos?.map((photo) => (
            <div
              key={photo?.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer morph-hover"
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo?.url}
                alt={photo?.description}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Photo info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(photo?.type)}`}>
                    <Icon name={getTypeIcon(photo?.type)} size={10} className="mr-1" />
                    {photo?.type}
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {photo?.isPrivate && (
                      <Icon name="Lock" size={12} className="text-white" />
                    )}
                    <Icon name="Eye" size={12} className="text-white" />
                  </div>
                </div>
                
                <p className="text-white text-xs mt-1 truncate">
                  {formatDate(photo?.date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
};

export default PhotoGallery;