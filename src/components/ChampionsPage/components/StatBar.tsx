import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatBarProps {
  icon: LucideIcon;
  value: number;
  label: string;
}

const StatBar = ({ icon: Icon, value, label }: StatBarProps) => (
  <div className="flex items-center gap-3">
    <Icon className="w-4 h-4 text-[#C89B3C]" />
    <div className="flex-1">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1.5 bg-[#1B1F38] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#C89B3C] to-[#E5B964] rounded-full"
        />
      </div>
    </div>
  </div>
);

export default StatBar;