import { motion } from 'framer-motion';

interface ObjectiveMarkerProps {
  position: { x: number; y: number };
  name: string;
  onClick: () => void;
}

const ObjectiveMarker = ({ position, name, onClick }: ObjectiveMarkerProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      className="absolute cursor-pointer"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      onClick={onClick}
    >
      <div className="w-4 h-4 bg-[#00FF7F] rounded-full animate-ping absolute" />
      <div className="w-4 h-4 bg-[#00FF7F] rounded-full relative" />
      <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm text-white bg-black/50 px-2 py-1 rounded">
        {name}
      </span>
    </motion.div>
  );
};

export default ObjectiveMarker;