import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Champion } from '../../types';

interface ChampionLoreProps {
  champion: Champion;
}

const ChampionLore = ({ champion }: ChampionLoreProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#2A2F4C] rounded-lg p-6"
    >
      <h2 className="text-2xl font-display text-[#C89B3C] mb-4">Champion Lore</h2>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        {champion.lore}
      </p>

      <a
        href={`https://universe.leagueoflegends.com/en_US/champion/${champion.id}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#C89B3C] hover:text-[#A67B2D] transition-colors"
      >
        <span>Read Full Story</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </motion.div>
  );
};

export default ChampionLore;