import { motion } from 'framer-motion';
import { Sword, Shield, Target, Heart } from 'lucide-react';

const tips = [
  {
    icon: Sword,
    title: 'Aggressive Play',
    tips: [
      'Look for poke opportunities',
      'Coordinate engages with team',
      'Focus priority targets'
    ]
  },
  {
    icon: Shield,
    title: 'Defensive Strategy',
    tips: [
      'Position behind minions',
      'Save escape abilities',
      'Watch enemy cooldowns'
    ]
  },
  {
    icon: Target,
    title: 'Objective Control',
    tips: [
      'Push after winning fights',
      'Control health relics',
      'Clear minion waves'
    ]
  },
  {
    icon: Heart,
    title: 'Sustain Management',
    tips: [
      'Time health relic spawns',
      'Build sustain items',
      'Share relic healing'
    ]
  }
];

const CombatTips = () => {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-display text-[#C89B3C] mb-4">Combat Tips</h2>
        <p className="text-xl text-gray-300">
          Master these strategies to dominate the Howling Abyss
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#2A2F4C] p-6 rounded-lg"
            >
              <Icon className="w-12 h-12 text-[#C89B3C] mb-4" />
              <h3 className="text-xl font-display text-[#C89B3C] mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-2 text-gray-300">
                    <span className="text-[#C89B3C] mt-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CombatTips;