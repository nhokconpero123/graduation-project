import { motion } from 'framer-motion';
import { Shield, Sword, Target, Heart } from 'lucide-react';

const mechanics = [
  {
    icon: Target,
    title: 'Random Champions',
    description: 'Every player receives a random champion from the available pool',
  },
  {
    icon: Sword,
    title: 'Fast-Paced Combat',
    description: 'Constant team fighting and action in a single lane',
  },
  {
    icon: Shield,
    title: 'Balanced Changes',
    description: 'Champion-specific buffs and nerfs for ARAM mode',
  },
  {
    icon: Heart,
    title: 'Health Relics',
    description: 'Healing shrines spawn periodically on the bridge',
  },
];

const GameMechanics = () => {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-display text-[#C89B3C] mb-4">Core Mechanics</h2>
        <p className="text-xl text-gray-300">
          Master these unique ARAM features to dominate the bridge
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mechanics.map((mechanic, index) => {
          const Icon = mechanic.icon;
          return (
            <motion.div
              key={mechanic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#2A2F4C] rounded-lg p-6 hover:bg-[#2A2F4C]/80 transition-colors"
            >
              <Icon className="w-12 h-12 text-[#C89B3C] mb-4" />
              <h3 className="text-xl font-display text-[#C89B3C] mb-2">{mechanic.title}</h3>
              <p className="text-gray-300">{mechanic.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default GameMechanics;