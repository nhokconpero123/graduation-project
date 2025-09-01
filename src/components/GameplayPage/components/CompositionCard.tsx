import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface Champion {
  name: string;
  role: string;
  image: string;
}

interface CompositionProps {
  id: string;
  name: string;
  description: string;
  playstyle: string;
  difficulty: 1 | 2 | 3;
  champions: Champion[];
}

const CompositionCard = ({
  name,
  description,
  playstyle,
  difficulty,
  champions
}: CompositionProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#2A2F4C] rounded-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-8 h-8 text-[#C89B3C]" />
          <h3 className="text-2xl font-display text-[#C89B3C]">{name}</h3>
        </div>

        <p className="text-gray-300 mb-4">{description}</p>

        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-2">Playstyle</div>
          <div className="text-[#C89B3C]">{playstyle}</div>
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-2">Difficulty</div>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-6 h-2 rounded-full ${
                  i < difficulty ? 'bg-[#C89B3C]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-400 mb-2">Recommended Champions</div>
          <div className="grid grid-cols-5 gap-2">
            {champions.map((champion) => (
              <div key={champion.name} className="text-center">
                <div className="aspect-square rounded-lg overflow-hidden mb-1">
                  <img
                    src={champion.image}
                    alt={champion.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs text-gray-300">{champion.name}</div>
                <div className="text-xs text-gray-400">{champion.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompositionCard;