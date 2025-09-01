import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const PurposeSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex items-center gap-4 mb-8">
        <Target className="w-8 h-8 text-[#C89B3C]" />
        <h2 className="text-3xl font-display text-white">Website Purpose</h2>
      </div>

      <div className="bg-[#2A2F4C] rounded-lg p-8 text-center">
        <h3 className="text-2xl font-display text-[#C89B3C] mb-4">Your Gateway to League of Legends</h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          This website serves as your comprehensive hub for exploring champions, discovering skins,
          and learning how to play League of Legends. Whether you're a new player taking your first
          steps into Summoner's Rift or a veteran looking to expand your knowledge, we're here to
          guide you on your journey.
        </p>
      </div>
    </motion.section>
  );
};

export default PurposeSection;