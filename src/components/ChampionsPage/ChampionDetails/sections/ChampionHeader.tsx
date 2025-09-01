import { motion } from 'framer-motion';
import { Shield, Sword, Wand } from 'lucide-react';
import { Champion } from '../../types';

interface ChampionHeaderProps {
  champion: Champion;
}

const ChampionHeader = ({ champion }: ChampionHeaderProps) => {
  return (
    <div className="relative h-[70vh] rounded-lg overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <img
          src={champion.image}
          alt={champion.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F38] via-[#1B1F38]/50 to-transparent" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
      >
        {/* Role Tags */}
        <div className="flex items-center gap-4 mb-6">
          {champion.roles.map((role) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-[#C89B3C] text-black rounded-full text-sm font-semibold"
            >
              {role}
            </motion.span>
          ))}
        </div>
        
        {/* Champion Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-display text-white mb-6"
        >
          {champion.name}
        </motion.h1>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-8"
        >
          <div className="flex items-center gap-3">
            <Sword className="w-6 h-6 text-[#C89B3C]" />
            <div>
              <span className="block text-sm text-gray-400">Attack</span>
              <span className="text-xl text-white">{champion.stats.attack}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-[#C89B3C]" />
            <div>
              <span className="block text-sm text-gray-400">Defense</span>
              <span className="text-xl text-white">{champion.stats.defense}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Wand className="w-6 h-6 text-[#C89B3C]" />
            <div>
              <span className="block text-sm text-gray-400">Magic</span>
              <span className="text-xl text-white">{champion.stats.magic}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChampionHeader;