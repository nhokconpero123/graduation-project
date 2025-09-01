import { motion } from 'framer-motion';
import { Palette, Users2 } from 'lucide-react';

const UniqueSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <h2 className="text-3xl font-display text-white mb-8">Why It's Unique</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#2A2F4C] rounded-lg p-6"
        >
          <Palette className="w-8 h-8 text-[#C89B3C] mb-4" />
          <h3 className="text-xl font-display text-[#C89B3C] mb-2">Community and Culture</h3>
          <p className="text-gray-300">
            League of Legends fosters creativity through its vibrant community, featuring custom skins,
            fan art, and an expansive universe of lore that brings champions to life.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#2A2F4C] rounded-lg p-6"
        >
          <Users2 className="w-8 h-8 text-[#C89B3C] mb-4" />
          <h3 className="text-xl font-display text-[#C89B3C] mb-2">Competitive and Casual Appeal</h3>
          <p className="text-gray-300">
            Whether you're a casual player enjoying ARAM or a competitive ranked climber,
            League offers something for everyone with its diverse game modes and playstyles.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UniqueSection;