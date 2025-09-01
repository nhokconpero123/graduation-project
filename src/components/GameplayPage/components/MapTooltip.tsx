import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  description: string;
  tips: string[];
}

interface MapTooltipProps {
  location: Location;
  onClose: () => void;
}

const MapTooltip = ({ location, onClose }: MapTooltipProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute bottom-4 left-4 right-4 bg-[#2A2F4C] rounded-lg p-6 shadow-xl"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X className="w-6 h-6" />
      </button>

      <h3 className="text-2xl font-display text-[#C89B3C] mb-4">{location.name}</h3>
      <p className="text-gray-300 mb-4">{location.description}</p>

      <div>
        <div className="text-sm text-gray-400 mb-2">Tips</div>
        <ul className="space-y-2">
          {location.tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <span className="text-[#C89B3C] mt-1">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default MapTooltip;