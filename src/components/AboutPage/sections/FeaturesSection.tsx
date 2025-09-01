import { motion } from 'framer-motion';
import { Layout, Users, Target } from 'lucide-react';

const features = [
  {
    icon: Layout,
    title: 'Gameplay Mechanics',
    description:
      'Master the three lanes, jungle paths, and strategic objectives while coordinating with your team to achieve victory.',
  },
  {
    icon: Users,
    title: 'Champion Diversity',
    description:
      'Choose from over 150 unique champions, each with their own abilities, playstyles, and stories.',
  },
  {
    icon: Target,
    title: 'Game Modes',
    description:
      "'Experience different ways to play through Summoner's Rift, ARAM, and Teamfight Tactics.'",
  },
];

const FeaturesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <h2 className="text-3xl font-display text-white mb-8">Game Features</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              whileHover={{ scale: 1.02 }}
              className="bg-[#2A2F4C] rounded-lg p-6"
            >
              <Icon className="w-8 h-8 text-[#C89B3C] mb-4" />
              <h3 className="text-xl font-display text-[#C89B3C] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
