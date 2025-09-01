import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { Difficulty } from '../types';

interface DifficultyFilterProps {
  selectedDifficulty: Difficulty | null;
  onChange: (difficulty: Difficulty | null) => void;
}

const difficulties: { id: Difficulty; label: string }[] = [
  { id: 'Easy', label: 'Easy' },
  { id: 'Moderate', label: 'Moderate' },
  { id: 'Hard', label: 'Hard' },
];

const DifficultyFilter = ({ selectedDifficulty, onChange }: DifficultyFilterProps) => {
  return (
    <div className="bg-[#2A2F4C] p-4 rounded-lg">
      <h3 className="text-[#C89B3C] font-display mb-4">Difficulty Level</h3>
      <div className="flex flex-wrap gap-2">
        {difficulties.map(({ id, label }) => (
          <motion.button
            key={id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(selectedDifficulty === id ? null : id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
              selectedDifficulty === id
                ? 'bg-[#C89B3C] text-black'
                : 'bg-[#1B1F38] text-[#C89B3C]'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>{label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default DifficultyFilter;