import { motion } from 'framer-motion';
import { Mouse, Keyboard, Map, Sword, Shield, Target, Coins, Crosshair } from 'lucide-react';

const basics = [
  {
    icon: Mouse,
    title: 'Movement & Controls',
    description: 'Master the basic controls to navigate Summoner\'s Rift effectively.',
    tips: [
      'Right-click to move your champion',
      'Press Q, W, E, R for abilities',
      'Press D, F for Summoner Spells',
      'Space centers camera on champion'
    ]
  },
  {
    icon: Target,
    title: 'Game Objective',
    description: 'Destroy the enemy Nexus to win the game.',
    tips: [
      'Destroy turrets to reach the enemy base',
      'Work with your team to secure objectives',
      'Coordinate pushes with minion waves',
      'Balance farming with objective control'
    ]
  },
  {
    icon: Sword,
    title: 'Combat Basics',
    description: 'Learn the fundamentals of fighting in League.',
    tips: [
      'Click enemies to basic attack',
      'Combine abilities for maximum damage',
      'Watch your mana and cooldowns',
      'Position safely in teamfights'
    ]
  },
  {
    icon: Shield,
    title: 'Defense & Survival',
    description: 'Stay alive and protect yourself from enemies.',
    tips: [
      'Stay behind minions for protection',
      'Watch the minimap for ganks',
      'Buy defensive items when needed',
      'Know when to retreat'
    ]
  }
];

const BasicGuide = () => {
  return (
    <div className="space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-4xl font-display text-[#C89B3C] mb-4">Welcome to League of Legends</h2>
        <p className="text-xl text-gray-300">
          Master these fundamental concepts to begin your journey. Take your time to learn each aspect,
          and remember that every pro player started as a beginner.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {basics.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#2A2F4C] rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-8 h-8 text-[#C89B3C]" />
                <h3 className="text-xl font-display text-[#C89B3C]">{item.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <div className="space-y-2">
                {item.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="flex items-start gap-2">
                    <span className="text-[#C89B3C] mt-1">•</span>
                    <span className="text-gray-300">{tip}</span>
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
        className="bg-[#2A2F4C] rounded-lg p-8 mt-12"
      >
        <div className="flex items-center gap-4 mb-6">
          <Crosshair className="w-10 h-10 text-[#C89B3C]" />
          <h3 className="text-2xl font-display text-[#C89B3C]">Ready to Learn More?</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-4">
              Now that you understand the basics, explore specific roles and champion types using the tabs above.
              Each role and champion type offers unique playstyles and strategies to master.
            </p>
            <p className="text-gray-300">
              Remember to practice in AI games first before jumping into matches with other players.
              The Practice Tool is also great for mastering specific mechanics.
            </p>
          </div>
          <div className="bg-[#1B1F38] p-6 rounded-lg">
            <h4 className="text-[#C89B3C] font-display mb-3">Quick Tips for Success:</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-[#C89B3C]">•</span>
                Start with easier champions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C89B3C]">•</span>
                Focus on farming and staying alive
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C89B3C]">•</span>
                Learn from your mistakes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C89B3C]">•</span>
                Watch tutorials and pro players
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BasicGuide;