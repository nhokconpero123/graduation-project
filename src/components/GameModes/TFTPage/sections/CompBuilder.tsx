import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const comps = [
  {
    name: 'Hyperroll',
    description: 'Fast-paced economy focused on rolling at level 6',
    traits: ['Fast 8', 'Economy', 'Aggression'],
    champions: ['Tristana', 'Kha\'Zix', 'Warwick'],
    difficulty: 2
  },
  {
    name: 'Slow Roll',
    description: 'Patient economy building for late game power',
    traits: ['Economy', 'Patience', 'Scaling'],
    champions: ['Vayne', 'Leona', 'Thresh'],
    difficulty: 3
  },
  {
    name: 'Rush 8',
    description: 'Aggressive leveling for early tier 4 units',
    traits: ['Fast Pace', 'High Risk', 'High Reward'],
    champions: ['Jhin', 'Orianna', 'Braum'],
    difficulty: 3
  }
];

const CompBuilder = () => {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-display text-[#C89B3C] mb-4">Popular Compositions</h2>
        <p className="text-xl text-gray-300">
          Learn the most effective team compositions and strategies
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {comps.map((comp, index) => (
          <motion.div
            key={comp.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#2A2F4C] rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-[#C89B3C]" />
                <h3 className="text-xl font-display text-[#C89B3C]">{comp.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{comp.description}</p>
              
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Key Traits</div>
                <div className="flex flex-wrap gap-2">
                  {comp.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 bg-[#1B1F38] rounded-full text-sm text-[#C89B3C]"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Core Champions</div>
                <div className="flex flex-wrap gap-2">
                  {comp.champions.map((champion) => (
                    <span
                      key={champion}
                      className="px-3 py-1 bg-[#1B1F38] rounded-full text-sm text-[#C89B3C]"
                    >
                      {champion}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-2">Difficulty</div>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-6 h-2 rounded-full ${
                        i < comp.difficulty ? 'bg-[#C89B3C]' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompBuilder;