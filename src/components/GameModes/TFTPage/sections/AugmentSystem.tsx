import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const augments = [
  {
    tier: 'Silver',
    description: 'Basic augments that provide small advantages',
    examples: ['Trade Sector', 'Item Grab Bag', 'Rich Get Richer']
  },
  {
    tier: 'Gold',
    description: 'Powerful augments that can define your strategy',
    examples: ['Pandora\'s Items', 'Level Up!', 'Portable Forge']
  },
  {
    tier: 'Prismatic',
    description: 'Game-changing augments that require careful consideration',
    examples: ['High End Shopping', 'Built Different III', 'New Recruit']
  }
];

const AugmentSystem = () => {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-display text-[#C89B3C] mb-4">Augment System</h2>
        <p className="text-xl text-gray-300">
          Choose powerful augments to enhance your strategy
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {augments.map((augment, index) => (
          <motion.div
            key={augment.tier}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#2A2F4C] rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-8 h-8 text-[#C89B3C]" />
              <h3 className="text-xl font-display text-[#C89B3C]">{augment.tier}</h3>
            </div>

            <p className="text-gray-300 mb-6">{augment.description}</p>

            <div className="space-y-2">
              {augment.examples.map((example) => (
                <div
                  key={example}
                  className="p-3 bg-[#1B1F38] rounded-lg text-[#C89B3C]"
                >
                  {example}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AugmentSystem;