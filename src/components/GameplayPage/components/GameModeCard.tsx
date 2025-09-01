import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface GameModeProps {
  id: string;
  name: string;
  description: string;
  duration: string;
  difficulty: 1 | 2 | 3;
  image: string;
  icon: LucideIcon;
  objectives: string[];
  onClick?: () => void;
}

const GameModeCard = ({
  name,
  description,
  duration,
  difficulty,
  image,
  icon: Icon,
  objectives,
  onClick
}: GameModeProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-[#2A2F4C] rounded-lg overflow-hidden ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="h-48 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2F4C] to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <Icon className="w-8 h-8 text-[#C89B3C]" />
          <h3 className="text-2xl font-display text-white">{name}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-2">Average Duration</div>
          <div className="text-[#C89B3C]">{duration}</div>
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
          <div className="text-sm text-gray-400 mb-2">Objectives</div>
          <ul className="space-y-2">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <span className="text-[#C89B3C] mt-1">•</span>
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {onClick && (
          <div className="mt-4 text-center">
            <span className="text-[#C89B3C] text-sm font-semibold">
              Click to Learn More
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default GameModeCard;