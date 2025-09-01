import { motion } from 'framer-motion';
import { Sword, Shield, Wand } from 'lucide-react';

interface ChampionRolesProps {
  roles: string[];
}

const getRoleIcon = (role: string) => {
  switch (role.toLowerCase()) {
    case 'fighter':
      return Sword;
    case 'tank':
      return Shield;
    default:
      return Wand;
  }
};

const ChampionRoles = ({ roles }: ChampionRolesProps) => {
  return (
    <div className="flex gap-2">
      {roles.map((role) => {
        const Icon = getRoleIcon(role);
        return (
          <motion.div
            key={role}
            whileHover={{ scale: 1.1 }}
            className="px-3 py-1 bg-[#C89B3C]/20 rounded-full flex items-center gap-1"
          >
            <Icon className="w-3 h-3 text-[#C89B3C]" />
            <span className="text-xs text-[#C89B3C]">{role}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ChampionRoles;