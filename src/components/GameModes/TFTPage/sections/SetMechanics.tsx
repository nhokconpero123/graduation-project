import { motion } from 'framer-motion';
import { Crown, Users, Shield, Sword, Star, Coins } from 'lucide-react';

const mechanics = [
  {
    icon: Crown,
    title: 'Set Mechanics',
    description: 'Each TFT set introduces unique traits and mechanics that define the meta.',
    features: [
      'Unique trait combinations',
      'Set-specific mechanics',
      'Regular balance updates',
      'Seasonal rotations'
    ]
  },
  {
    icon: Users,
    title: 'Team Building',
    description: 'Create powerful combinations of champions and traits.',
    features: [
      'Vertical trait stacking',
      'Flexible compositions',
      'Champion positioning',
      'Item optimization'
    ]
  },
  {
    icon: Shield,
    title: 'Economy System',
    description: 'Master the art of gold management and rolling strategies.',
    features: [
      'Interest mechanics',
      'Loss/win streaks',
      'Rolling strategies',
      'Level timing'
    ]
  },
  {
    icon: Star,
    title: 'Champion Upgrades',
    description: 'Collect and upgrade champions to increase their power.',
    features: [
      '1/2/3-star upgrades',
      'Champion pool odds',
      'Reroll strategies',
      'Power spikes'
    ]
  },
  {
    icon: Sword,
    title: 'Item System',
    description: 'Combine basic items into powerful equipment for your champions.',
    features: [
      'Item combinations',
      'Component priority',
      'Flexible builds',
      'Situational choices'
    ]
  },
  {
    icon: Coins,
    title: 'Augment System',
    description: 'Choose powerful augments that enhance your strategy.',
    features: [
      'Multiple choices',
      'Game-changing effects',
      'Strategic adaptation',
      'Unique combinations'
    ]
  }
];

const SetMechanics = () => {
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
          Master these fundamental systems to climb the ranks in Teamfight Tactics
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <p className="text-gray-300 mb-4">{mechanic.description}</p>
              <ul className="space-y-2">
                {mechanic.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400">
                    <span className="text-[#C89B3C]">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 p-6 bg-[#1B1F38] rounded-lg"
      >
        <h3 className="text-xl font-display text-[#C89B3C] mb-4">Pro Tips</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-[#C89B3C] mb-2">Early Game (Stages 1-3)</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-[#C89B3C]">•</span>
                Focus on economy and win/loss streaks
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C89B3C]">•</span>
                Build flexible item components
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C89B3C]">•</span>
                Scout other players' boards
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#C89B3C] mb-2">Late Game (Stages 4+)</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-[#C89B3C]">•</span>
                Position against remaining players
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C89B3C]">•</span>
                Complete key items for carries
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C89B3C]">•</span>
                Adapt composition based on available units
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SetMechanics;