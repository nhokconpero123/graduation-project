import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const tips = [
  {
    category: 'Team Composition',
    tips: [
      "Balance your team's damage types (AP/AD)",
      'Consider trading champions with teammates',
      'Save rerolls for truly unfavorable compositions',
      'Try to have at least one tank or frontline'
    ]
  },
  {
    category: 'Combat Strategy',
    tips: [
      'Focus on poking and sustaining',
      'Time your engages with team cooldowns',
      'Control the brush areas for vision advantage',
      'Use health relics efficiently'
    ]
  },
  {
    category: 'Resource Management',
    tips: [
      'Use health relics efficiently',
      'Die strategically to spend gold',
      'Manage mana carefully in extended fights',
      'Consider starting items carefully'
    ]
  },
  {
    category: 'Objectives',
    tips: [
      'Push waves after winning team fights',
      'Focus towers when enemies are dead',
      'Control health relics during sieges',
      'Coordinate tower dives with teammates'
    ]
  }
];

const AramTips = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4 mb-6">
        <Lightbulb className="w-8 h-8 text-[#C89B3C]" />
        <h2 className="text-3xl font-display text-white">Pro Tips</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((section) => (
          <motion.div
            key={section.category}
            whileHover={{ scale: 1.02 }}
            className="bg-[#2A2F4C] p-6 rounded-lg"
          >
            <h3 className="text-xl font-display text-[#C89B3C] mb-4">{section.category}</h3>
            <ul className="space-y-3">
              {section.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-[#C89B3C] mt-1">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AramTips;