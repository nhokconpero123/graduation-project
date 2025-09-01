import { motion } from 'framer-motion';

const ChampionBalance = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-[#2A2F4C] p-6 rounded-lg"
    >
      <h3 className="text-2xl font-display text-[#C89B3C] mb-4">Champion Balance</h3>
      <div className="space-y-4">
        <p className="text-gray-300">
          Champions in ARAM receive specific balance adjustments to ensure fair gameplay:
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <span className="text-[#C89B3C]">•</span>
            Damage dealt/taken adjustments
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#C89B3C]">•</span>
            Healing/shielding modifications
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#C89B3C]">•</span>
            Cooldown reductions for certain abilities
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#C89B3C]">•</span>
            Special item restrictions
          </li>
        </ul>
        <div className="mt-4 p-4 bg-[#1B1F38] rounded-lg">
          <p className="text-sm text-gray-300">
            These balance changes are regularly updated to maintain a fun and fair environment for all players.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChampionBalance;