import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Sword, Wand, Activity } from 'lucide-react';
import { Champion } from '../types';
import StatBar from './StatBar';

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCard = ({ champion }: ChampionCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      onClick={() => navigate(`/champions/${champion.id}`)}
      className="group bg-[#2A2F4C] rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <motion.img
          src={champion.image}
          alt={champion.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2F4C] to-transparent opacity-60" />
        
        {/* Roles Tags */}
        <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
          {champion.roles.map((role) => (
            <span
              key={role}
              className="px-3 py-1 bg-[#1B1F38]/80 backdrop-blur-sm rounded-full text-xs text-[#C89B3C] font-semibold"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-display text-[#C89B3C] mb-4 group-hover:text-[#E5B964] transition-colors">
            {champion.name}
          </h3>
        </motion.div>

        {/* Stats */}
        <div className="space-y-3 mb-4">
          <StatBar icon={Sword} value={champion.stats.attack} label="Attack" />
          <StatBar icon={Shield} value={champion.stats.defense} label="Defense" />
          <StatBar icon={Wand} value={champion.stats.magic} label="Magic" />
          <StatBar icon={Activity} value={champion.stats.difficulty} label="Difficulty" />
        </div>

        {/* Lore Preview */}
        <p className="text-sm text-gray-400 line-clamp-2 mb-4">
          {champion.lore}
        </p>

        {/* View Details Button */}
        <motion.div 
          className="flex items-center justify-between text-[#C89B3C] font-semibold"
          initial={{ opacity: 0, x: -20 }}
          whileHover={{ x: 4 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span>View Details</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChampionCard;