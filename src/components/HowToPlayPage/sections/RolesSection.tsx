import { motion } from 'framer-motion';
import RoleCard from '../components/RoleCard';
import { roles } from '../data/roleData';

interface RolesSectionProps {
  onRoleSelect: (role: typeof roles[number]) => void;
}

const RolesSection = ({ onRoleSelect }: RolesSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {roles.map((role) => (
        <RoleCard
          key={role.id}
          role={role}
          onClick={() => onRoleSelect(role)}
        />
      ))}
    </motion.div>
  );
};

export default RolesSection;