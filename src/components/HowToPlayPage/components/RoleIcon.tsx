import { motion } from 'framer-motion';

interface RoleIconProps {
  iconUrl: string;
  name: string;
  size?: number;
}

const RoleIcon = ({ iconUrl, name, size = 32 }: RoleIconProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative"
      style={{ width: size, height: size }}
    >
      <img
        src={iconUrl}
        alt={`${name} role icon`}
        className="w-full h-full object-contain filter brightness-0 invert"
        style={{ opacity: 0.9 }}
      />
    </motion.div>
  );
};

export default RoleIcon;