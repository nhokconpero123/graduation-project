import { motion } from 'framer-motion';
import RoleIcon from './RoleIcon';
import { Role } from '../data/roleData';

interface RoleCardProps {
  role: Role;
  onClick: () => void;
}

const RoleCard = ({ role, onClick }: RoleCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#2A2F4C] rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Role Image */}
      <div className="h-48 relative">
        <img
          src={role.backgroundUrl}
          alt={role.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2F4C] to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <RoleIcon iconUrl={role.iconUrl} name={role.name} size={32} />
          <h3 className="text-2xl font-display text-white">{role.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-300 mb-4">{role.description}</p>
        
        {/* Difficulty Indicator */}
        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-2">Difficulty</div>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-6 h-2 rounded-full ${
                  i < role.difficulty ? 'bg-[#C89B3C]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Recommended Champions */}
        <div>
          <div className="text-sm text-gray-400 mb-2">Recommended Champions</div>
          <div className="flex flex-wrap gap-2">
            {role.recommendedChampions.map((champion) => (
              <span
                key={champion}
                className="px-3 py-1 bg-[#1B1F38] rounded-full text-sm text-[#C89B3C]"
              >
                {champion}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-[#1B1F38] text-center">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-[#C89B3C] font-semibold"
        >
          Click to Learn More
        </motion.span>
      </div>
    </motion.div>
  );
};

export default RoleCard;