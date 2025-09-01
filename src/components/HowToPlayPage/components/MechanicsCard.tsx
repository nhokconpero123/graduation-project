import { motion } from 'framer-motion';
import { Crosshair, Shield, Eye, Users } from 'lucide-react';

const mechanics = [
  {
    icon: Crosshair,
    title: 'Skillshots',
    description: 'Directional abilities that require aim to hit targets.',
    tips: [
      'Lead your shots based on enemy movement',
      'Use minions to block enemy skillshots',
      'Practice predicting enemy movement'
    ]
  },
  {
    icon: Shield,
    title: 'Wave Management',
    description: 'Controlling minion waves for strategic advantage.',
    tips: [
      'Freeze lane near your tower for safety',
      'Push waves before roaming',
      'Deny enemy CS by zoning them'
    ]
  },
  {
    icon: Eye,
    title: 'Vision Control',
    description: 'Using wards to gain map information and prevent ganks.',
    tips: [
      'Ward key objectives before they spawn',
      'Buy control wards for permanent vision',
      'Clear enemy vision in important areas'
    ]
  },
  {
    icon: Users,
    title: 'Team Fighting',
    description: 'Coordinated combat involving multiple players.',
    tips: [
      'Focus priority targets',
      'Position based on your role',
      'Save key abilities for the right moment'
    ]
  }
];

const MechanicsCard = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl font-display text-[#C89B3C] mb-4">Advanced Mechanics</h2>
        <p className="text-gray-300">
          Master these mechanics to elevate your gameplay and outplay your opponents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mechanics.map((mechanic, index) => {
          const Icon = mechanic.icon;
          return (
            <motion.div
              key={mechanic.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#2A2F4C] rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-8 h-8 text-[#C89B3C]" />
                <h3 className="text-xl font-display text-[#C89B3C]">{mechanic.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{mechanic.description}</p>
              <div className="space-y-2">
                {mechanic.tips.map((tip, tipIndex) => (
                  <div
                    key={tipIndex}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <span className="text-[#C89B3C] mt-1">•</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-[#2A2F4C] rounded-lg p-6"
      >
        <h3 className="text-xl font-display text-[#C89B3C] mb-4">Practice Makes Perfect</h3>
        <p className="text-gray-300">
          Use the Practice Tool to master these mechanics without pressure. Start with one concept
          at a time and gradually combine them as you improve. Remember that even pro players
          spent countless hours perfecting these skills.
        </p>
      </motion.div>
    </div>
  );
};

export default MechanicsCard;