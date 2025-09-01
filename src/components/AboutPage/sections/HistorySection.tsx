import { motion } from 'framer-motion';
import { History } from 'lucide-react';

const milestones = [
  {
    year: 2009,
    title: 'Launch',
    description: 'League of Legends is released by Riot Games'
  },
  {
    year: 2011,
    title: 'First World Championship',
    description: 'The first major international tournament'
  },
  {
    year: 2019,
    title: '10th Anniversary',
    description: 'Celebration of a decade of gaming excellence'
  }
];

const HistorySection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex items-center gap-4 mb-8">
        <History className="w-8 h-8 text-[#C89B3C]" />
        <h2 className="text-3xl font-display text-white">History & Milestones</h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#C89B3C]/30" />
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 w-8 h-8 bg-[#2A2F4C] border-2 border-[#C89B3C] rounded-full" />
              <div className="text-[#C89B3C] font-display text-2xl mb-2">{milestone.year}</div>
              <h3 className="text-xl text-white mb-2">{milestone.title}</h3>
              <p className="text-gray-300">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HistorySection;