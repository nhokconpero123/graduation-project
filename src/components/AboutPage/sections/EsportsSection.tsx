import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const leagues = [
  {
    name: 'World Championship',
    region: 'Global',
    description: 'The pinnacle of competitive League of Legends'
  },
  {
    name: 'LCS',
    region: 'North America',
    description: 'Premier league for North American teams'
  },
  {
    name: 'LEC',
    region: 'Europe',
    description: 'European championship series'
  },
  {
    name: 'LCK',
    region: 'South Korea',
    description: 'The most prestigious regional league'
  }
];

const EsportsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex items-center gap-4 mb-8">
        <Trophy className="w-8 h-8 text-[#C89B3C]" />
        <h2 className="text-3xl font-display text-white">Esports Scene</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {leagues.map((league) => (
          <motion.div
            key={league.name}
            whileHover={{ scale: 1.02 }}
            className="bg-[#2A2F4C] rounded-lg p-6"
          >
            <h3 className="text-xl font-display text-[#C89B3C] mb-2">{league.name}</h3>
            <div className="text-sm text-gray-400 mb-2">{league.region}</div>
            <p className="text-gray-300">{league.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EsportsSection;