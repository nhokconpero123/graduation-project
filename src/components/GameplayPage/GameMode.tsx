import { motion } from 'framer-motion';

interface GameModeProps {
  name: string;
  description: string;
  image: string;
}

const GameMode = ({ name, description, image }: GameModeProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#2A2F4C] rounded-lg overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-display text-[#00FF7F] mb-3">{name}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default GameMode;