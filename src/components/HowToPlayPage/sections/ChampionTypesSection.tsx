import { motion } from 'framer-motion';
import ChampionTypeCard from '../components/ChampionTypeCard';
import { championTypes } from '../data/championTypes';

const ChampionTypesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {championTypes.map((type) => (
        <ChampionTypeCard key={type.id} type={type} />
      ))}
    </motion.div>
  );
};

export default ChampionTypesSection;