import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const ChampionPool = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-[#2A2F4C] p-6 rounded-lg"
    >
      <Users className="w-12 h-12 text-[#C89B3C] mb-4" />
      <h3 className="text-2xl font-display text-[#C89B3C] mb-4">Champion Pool</h3>
      <div className="space-y-4">
        <p className="text-gray-300">
          Champions are randomly selected from your available pool, including free rotation champions.
          Strategic use of rerolls and champion trading can help optimize your team composition.
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <span className="text-[#C89B3C]">•</span>
            Earn reroll points each game based on owned champions
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#C89B3C]">•</span>
            Trade champions with teammates during selection
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#C89B3C]">•</span>
            Use bench system to save potential picks
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#C89B3C]">•</span>
            Consider team composition when rerolling
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ChampionPool;