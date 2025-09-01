import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TipProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tips: string[];
}

const TipCard = ({ title, description, icon: Icon, tips }: TipProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#2A2F4C] rounded-lg p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-8 h-8 text-[#C89B3C]" />
        <h3 className="text-xl font-display text-[#C89B3C]">{title}</h3>
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      <div>
        <div className="text-sm text-gray-400 mb-2">Key Tips</div>
        <ul className="space-y-2">
          {tips.map((tip, index) => (
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

export default TipCard;