import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const RiotSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex items-center gap-4 mb-8">
        <Building2 className="w-8 h-8 text-[#C89B3C]" />
        <h2 className="text-3xl font-display text-white">About Riot Games</h2>
      </div>

      <div className="bg-[#2A2F4C] rounded-lg p-8">
        <p className="text-gray-300 mb-4">
          Riot Games was founded in 2006 with a mission to be the most player-focused game company in the world.
          League of Legends was their first game, launching in 2009, and has since grown into one of the most-played
          PC games in the world.
        </p>
        <p className="text-gray-300">
          Beyond League of Legends, Riot has expanded their portfolio with games like VALORANT, Teamfight Tactics,
          and Legends of Runeterra, always maintaining their commitment to delivering exceptional player experiences.
        </p>
      </div>
    </motion.section>
  );
};

export default RiotSection;