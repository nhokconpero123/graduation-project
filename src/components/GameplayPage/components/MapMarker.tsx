import { motion } from 'framer-motion';

interface MapMarkerProps {
  id: string;
  name: string;
  position: { x: number; y: number };
  isActive: boolean;
  onClick: () => void;
}

const MapMarker = ({ name, position, isActive, onClick }: MapMarkerProps) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      className="absolute cursor-pointer"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
    >
      <div
        className={`w-4 h-4 rounded-full ${
          isActive ? 'bg-[#C89B3C]' : 'bg-[#00FF7F]'
        }`}
      >
        <div className="absolute w-full h-full rounded-full animate-ping bg-current opacity-75" />
      </div>
      <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm text-white bg-black/50 px-2 py-1 rounded">
        {name}
      </span>
    </motion.button>
  );
};

export default MapMarker;