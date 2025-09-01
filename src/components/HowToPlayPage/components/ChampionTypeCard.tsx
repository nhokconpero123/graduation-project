import { motion } from 'framer-motion';
import { ChampionType } from '../data/championTypes';

interface ChampionTypeCardProps {
  type: ChampionType;
}

const ChampionTypeCard = ({ type }: ChampionTypeCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#2A2F4C] rounded-lg p-6"
    >
      <img 
        src={type.iconUrl} 
        alt={`${type.name} icon`}
        className="w-12 h-12 mb-4 filter brightness-0 invert opacity-90"
      />
      <h3 className="text-xl font-display text-[#C89B3C] mb-2">{type.name}</h3>
      <p className="text-gray-300 mb-4">{type.description}</p>

      <div className="mb-4">
        <div className="text-sm text-gray-400 mb-2">Playstyle</div>
        <p className="text-[#C89B3C]">{type.playstyle}</p>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-400 mb-2">Difficulty</div>
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-6 h-2 rounded-full ${
                i < type.difficulty ? 'bg-[#C89B3C]' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="text-sm text-gray-400 mb-2">Example Champions</div>
        <div className="flex flex-wrap gap-2">
          {type.examples.map((champion) => (
            <span
              key={champion}
              className="px-2 py-1 bg-[#1B1F38] text-[#C89B3C] text-sm rounded-full"
            >
              {champion}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ChampionTypeCard;