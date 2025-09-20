import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const locationDetails = {
    address: "123 Beauty Boulevard, Downtown District, New York, NY 10001",
    coordinates: "40.7589,-73.9851",
    parking: "Valet parking available",
    accessibility: "Wheelchair accessible entrance",
    nearbyLandmarks: ["Central Beauty Plaza", "Luxury Shopping Center", "Metro Station"]
  };

  const handleDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${locationDetails?.coordinates}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Visit Our Beauty Sanctuary
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of the beauty district, our salon offers a luxurious and accessible experience for all clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Container */}
          <div className="relative">
            <div className="glass-card p-2 h-96 lg:h-[500px] overflow-hidden">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <div className="absolute top-4 left-4 glass-panel p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={18} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">Morphic Beauty</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4">
                    <button
                      onClick={handleDirections}
                      className="glass-panel p-3 rounded-lg morph-hover group"
                    >
                      <div className="flex items-center space-x-2">
                        <Icon name="Navigation" size={18} className="text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-foreground">Directions</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Morphic Beauty Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${locationDetails?.coordinates}&z=16&output=embed`}
                  className="rounded-lg"
                  onLoad={() => setMapLoaded(true)}
                />
                
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-lg">
                    <div className="text-center">
                      <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4 animate-pulse" />
                      <p className="text-muted-foreground">Loading map...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                    Our Address
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {locationDetails?.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center">
                    <Icon name="Car" size={20} className="text-success" />
                  </div>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                    Parking & Access
                  </h3>
                  <p className="text-foreground mb-2">{locationDetails?.parking}</p>
                  <p className="text-muted-foreground">{locationDetails?.accessibility}</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center">
                    <Icon name="Building" size={20} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                    Nearby Landmarks
                  </h3>
                  <ul className="space-y-1">
                    {locationDetails?.nearbyLandmarks?.map((landmark, index) => (
                      <li key={index} className="text-foreground flex items-center">
                        <Icon name="ChevronRight" size={14} className="text-primary mr-2" />
                        {landmark}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <button
              onClick={handleDirections}
              className="w-full glass-card p-4 interactive-card group"
            >
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Navigation" size={20} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="font-medium text-foreground">Get Directions</span>
                <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;