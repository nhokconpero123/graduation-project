import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Champion } from '../../types';

interface ChampionAbilitiesProps {
  champion: Champion;
}

const ChampionAbilities = ({ champion }: ChampionAbilitiesProps) => {
  const [selectedAbility, setSelectedAbility] = useState(0);

  const abilities = [
    {
      name: 'Passive',
      key: 'P',
      description: champion.abilities?.passive || 'Passive ability description',
      video: champion.abilities?.passiveVideo
    },
    {
      name: 'Q Ability',
      key: 'Q',
      description: champion.abilities?.q || 'Q ability description',
      video: champion.abilities?.qVideo
    },
    {
      name: 'W Ability',
      key: 'W',
      description: champion.abilities?.w || 'W ability description',
      video: champion.abilities?.wVideo
    },
    {
      name: 'E Ability',
      key: 'E',
      description: champion.abilities?.e || 'E ability description',
      video: champion.abilities?.eVideo
    },
    {
      name: 'Ultimate',
      key: 'R',
      description: champion.abilities?.r || 'Ultimate ability description',
      video: champion.abilities?.rVideo
    }
  ];

  return (
    <div className="bg-[#2A2F4C] rounded-lg p-8">
      <h2 className="text-3xl font-display text-[#C89B3C] mb-8">Abilities</h2>
      
      {/* Ability Selection */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {abilities.map((ability, index) => (
          <motion.button
            key={ability.key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedAbility(index)}
            className={`p-4 rounded-lg transition-all duration-300 ${
              selectedAbility === index
                ? 'bg-[#C89B3C] text-black'
                : 'bg-[#1B1F38] text-[#C89B3C] hover:bg-[#C89B3C]/20'
            }`}
          >
            <div className="text-2xl font-display mb-2">{ability.key}</div>
            <div className="text-sm">{ability.name}</div>
          </motion.button>
        ))}
      </div>

      {/* Ability Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedAbility}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="space-y-6"
        >
          {/* Ability Video */}
          {abilities[selectedAbility].video && (
            <div className="aspect-video rounded-lg overflow-hidden bg-black">
              <video
                src={abilities[selectedAbility].video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* Ability Description */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#1B1F38] p-6 rounded-lg"
          >
            <h3 className="text-2xl font-display text-[#C89B3C] mb-4">
              {abilities[selectedAbility].name}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {abilities[selectedAbility].description}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ChampionAbilities;