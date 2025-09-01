import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Champion3DModel from '../components/Champion3DModel';
import { View, Box } from 'lucide-react';
import { getModelPath } from '../../utils/modelLoader';

interface Champion3DSectionProps {
  championId: string;
  name: string;
  skins: Array<{ id: string; name: string }>;
}

const Champion3DSection = ({ championId, name, skins }: Champion3DSectionProps) => {
  const filteredSkins = skins.filter(skin => skin.name !== 'Classic');
  const [selectedSkin, setSelectedSkin] = useState(filteredSkins[0]?.id || '');

  useEffect(() => {
    // Ensure selectedSkin updates if skins change dynamically
    if (!filteredSkins.some(skin => skin.id === selectedSkin)) {
      setSelectedSkin(filteredSkins[0]?.id || '');
    }
  }, [skins]);

  const getModelUrl = (skinId: string) => {
    return getModelPath(championId, skinId);
  };

  return (
    <div className="bg-[#2A2F4C] rounded-lg p-6 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <View className="w-8 h-8 text-[#C89B3C]" />
        <h2 className="text-2xl font-display text-[#C89B3C]">3D Preview</h2>
      </div>

      {/* Skin Selection */}
      <div className="flex gap-4 mb-6 overflow-x-auto pb-4">
        {filteredSkins.map((skin) => (
          <motion.button
            key={skin.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSkin(skin.id)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              selectedSkin === skin.id
                ? 'bg-[#C89B3C] text-black'
                : 'bg-[#1B1F38] text-[#C89B3C]'
            }`}
          >
            {skin.name}
          </motion.button>
        ))}
      </div>

      {/* 3D Model Display */}
      {selectedSkin && (
        <Champion3DModel 
          name={name} 
          modelUrl={getModelUrl(selectedSkin)}
          key={selectedSkin} // Force remount when skin changes
        />
      )}

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 p-4 bg-[#1B1F38] rounded-lg"
      >
        <div className="flex items-center gap-2 text-gray-300">
          <Box className="w-5 h-5 text-[#C89B3C]" />
          <span>Drag to rotate • Scroll to zoom</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Champion3DSection;
