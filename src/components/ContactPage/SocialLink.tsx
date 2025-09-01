import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  color: string;
}

const SocialLink = ({ href, icon: Icon, label, color }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 p-4 rounded-lg bg-[#2A2F4C] hover:bg-[#353B5C] transition-colors"
    >
      <Icon className={`w-6 h-6 ${color}`} />
      <span className="text-white font-medium">{label}</span>
    </motion.a>
  );
};

export default SocialLink;