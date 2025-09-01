import { motion } from 'framer-motion';
import { GitCompare } from 'lucide-react';

const differences = [
  {
    category: "Map Features",
    summoners: "Three lanes, jungle, objectives",
    aram: "Single lane, no jungle, health relics"
  },
  {
    category: "Champion Selection",
    summoners: "Pre-game selection and bans",
    aram: "Random selection with rerolls"
  },
  {
    category: "Game Duration",
    summoners: "30-40 minutes average",
    aram: "15-25 minutes average"
  },
  {
    category: "Gold Generation",
    summoners: "Standard income",
    aram: "Increased passive gold gain"
  },
  {
    category: "Experience Gain",
    summoners: "Standard leveling",
    aram: "Accelerated leveling"
  },
  {
    category: "Strategic Depth",
    summoners: "Complex macro play",
    aram: "Focus on team fighting"
  }
];

const AramDifferences = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4 mb-6">
        <GitCompare className="w-8 h-8 text-[#C89B3C]" />
        <h2 className="text-3xl font-display text-white">ARAM vs Summoner's Rift</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-4 px-6 text-left text-[#C89B3C]">Feature</th>
              <th className="py-4 px-6 text-left text-[#C89B3C]">Summoner's Rift</th>
              <th className="py-4 px-6 text-left text-[#C89B3C]">ARAM</th>
            </tr>
          </thead>
          <tbody>
            {differences.map((diff) => (
              <tr key={diff.category} className="border-b border-gray-700">
                <td className="py-4 px-6 text-white font-semibold">{diff.category}</td>
                <td className="py-4 px-6 text-gray-300">{diff.summoners}</td>
                <td className="py-4 px-6 text-gray-300">{diff.aram}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
};

export default AramDifferences;