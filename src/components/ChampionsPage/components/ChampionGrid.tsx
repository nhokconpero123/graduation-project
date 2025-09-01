import { motion } from 'framer-motion';
import ChampionCard from './ChampionCard';
import { Champion } from '../types';

interface ChampionGridProps {
  champions: Champion[];
}

const ChampionGrid = ({ champions }: ChampionGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
    >
      {champions.map((champion) => (
        <ChampionCard key={champion.id} champion={champion} />
      ))}
    </motion.div>
  );
};

export default ChampionGrid;