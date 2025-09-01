import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';
import type { PatchNote } from '../services/patchNotesService';

const UpdateCard = ({ title, description, date, changes, type, url }: PatchNote) => {
  const typeColors = {
    feature: 'text-green-400',
    balance: 'text-blue-400',
    bugfix: 'text-red-400'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-[#2A2F4C] rounded-lg p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-display text-[#C89B3C]">{title}</h3>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">{date}</span>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className={`text-sm ${typeColors[type]}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>

        <div>
          <div className="text-sm text-gray-400 mb-2">Key Changes</div>
          <ul className="space-y-2">
            {changes.map((change, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <span className="text-[#C89B3C] mt-1">•</span>
                {change}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#C89B3C] hover:text-[#A67B2D] transition-colors mt-4"
        >
          <span>Read Full Patch Notes</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default UpdateCard;