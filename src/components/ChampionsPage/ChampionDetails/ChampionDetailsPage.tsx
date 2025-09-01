import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ChampionHeader from './sections/ChampionHeader';
import ChampionAbilities from './sections/ChampionAbilities';
import ChampionLore from './sections/ChampionLore';
import ChampionStats from './sections/ChampionStats';
import ChampionSkins from './sections/ChampionSkins';
import ChampionNavigation from './components/ChampionNavigation';
import Champion3DSection from './sections/Champion3DSection';
import { champions } from '../data/champions';
import { useEffect, useState } from 'react';
import { Champion } from '../types';
import LoadingSpinner from '../../GameplayPage/components/LoadingSpinner';

const ChampionDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [champion, setChampion] = useState<Champion | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadChampion = async () => {
      setIsLoading(true);
      const foundChampion = champions.find(c => c.id === id);
      if (foundChampion) {
        setChampion(foundChampion);
      }
      setIsLoading(false);
    };

    loadChampion();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1B1F38] to-black pt-20 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!champion) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1B1F38] to-black pt-20 flex items-center justify-center">
        <p className="text-[#C89B3C] text-xl">Champion not found</p>
      </div>
    );
  }

  // Transform skins data for 3D models
  const skinModels = champion.skins
    .map(skin => ({
      id: skin.name.toLowerCase().replace(/\s+/g, '-'),
      name: skin.name
    }))
    .filter(skin => skin.name !== 'Classic');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1F38] to-black pt-20">
      <ChampionNavigation currentChampion={champion} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-8 space-y-16"
      >
        {/* Hero Section */}
        <ChampionHeader champion={champion} />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - 3D Model and Abilities */}
          <div className="lg:col-span-2 space-y-8">
            <Champion3DSection 
              championId={champion.id} 
              name={champion.name}
              skins={skinModels}
            />
            <ChampionAbilities champion={champion} />
            <ChampionLore champion={champion} />
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8">
            <ChampionStats champion={champion} />
            
            {/* Quick Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#2A2F4C] rounded-lg p-6"
            >
              <h3 className="text-xl font-display text-[#C89B3C] mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400">Role:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {champion.roles.map(role => (
                      <span key={role} className="px-3 py-1 bg-[#1B1F38] rounded-full text-sm text-[#C89B3C]">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Difficulty:</span>
                  <div className="flex gap-1 mt-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-2 rounded-full ${
                          i < champion.stats.difficulty / 33
                            ? 'bg-[#C89B3C]'
                            : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skins Section */}
        <ChampionSkins champion={champion} />
      </motion.div>
    </div>
  );
};

export default ChampionDetailsPage;