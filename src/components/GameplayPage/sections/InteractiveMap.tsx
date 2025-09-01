import { useState } from 'react';
import MapMarker from '../components/MapMarker';
import MapTooltip from '../components/MapTooltip';
import { mapLocations } from '../data/mapLocations';

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-display text-[#C89B3C] mb-4">
          Summoner's Rift Map
        </h2>
        <p className="text-xl text-gray-300">
          Explore key locations and objectives on the main battlefield of League
          of Legends.
        </p>
      </div>

      <div className="relative aspect-square max-w-4xl mx-auto">
        <img
          src="https://www.lolvvv.com/_next/image?url=https%3A%2F%2Fwww.lolvvv.com%2Fwp-content%2Fuploads%2F2022%2F07%2Fsummoners-rift.jpg&w=1080&q=75"
          alt="Summoner's Rift Map"
          className="w-full h-full object-cover rounded-lg"
        />

        {mapLocations.map((location) => (
          <MapMarker
            key={location.id}
            {...location}
            onClick={() => setSelectedLocation(location.id)}
            isActive={selectedLocation === location.id}
          />
        ))}

        {selectedLocation && (
          <MapTooltip
            location={mapLocations.find((loc) => loc.id === selectedLocation)!}
            onClose={() => setSelectedLocation(null)}
          />
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
