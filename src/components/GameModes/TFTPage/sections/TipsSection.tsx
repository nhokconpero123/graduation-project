import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const tips = [
  {
    category: 'Early Game',
    tips: [
      'Focus on 2-star units early',
      'Build a strong economy',
      'Scout other players',
      'Stay flexible with your composition'
    ]
  },
  {
    category: 'Mid Game',
    tips: [
      'Decide on your main composition',
      'Position your units strategically',
      'Complete key items',
      'Manage your gold effectively'
    ]
  },
  {
    category: 'Late Game',
    tips: [
      'Roll for 3-star carries',
      'Adapt your positioning',
      'Look for key legendaries',
      'Counter enemy compositions'
    ]
  }
];

const TipsSection = () => {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-display text-[#C89B3C] mb-4">Pro Tips</h2>
        <p className="text-xl text-gray-300">
          Master these strategies to improve your gameplay
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((section) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#2A2F4C] p-6 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-[#C89B3C]" />
              <h3 className="text-xl font-display text-[#C89B3C]">{section.category}</h3>
            </div>

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
    </section>
  );
};

export default TipsSection;