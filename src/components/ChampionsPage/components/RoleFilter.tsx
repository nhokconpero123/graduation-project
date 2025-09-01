import { motion } from 'framer-motion';
import { Role } from '../types';

interface RoleFilterProps {
  selectedRoles: Role[];
  onChange: (roles: Role[]) => void;
}

const roles: { id: Role; label: string; iconUrl: string }[] = [
  { 
    id: 'Top', 
    label: 'Top', 
    iconUrl: 'https://static.wikia.nocookie.net/leagueoflegends/images/e/ef/Top_icon.png'
  },
  { 
    id: 'Jungle', 
    label: 'Jungle', 
    iconUrl: 'https://static.wikia.nocookie.net/leagueoflegends/images/1/1b/Jungle_icon.png'
  },
  { 
    id: 'Mid', 
    label: 'Mid', 
    iconUrl: 'https://static.wikia.nocookie.net/leagueoflegends/images/9/98/Middle_icon.png'
  },
  { 
    id: 'ADC', 
    label: 'ADC', 
    iconUrl: 'https://static.wikia.nocookie.net/leagueoflegends/images/9/97/Bottom_icon.png'
  },
  { 
    id: 'Support', 
    label: 'Support', 
    iconUrl: 'https://wiki.leagueoflegends.com/en-us/images/Support_icon.png?af1ff'
  },
];

const RoleFilter = ({ selectedRoles, onChange }: RoleFilterProps) => {
  const toggleRole = (role: Role) => {
    if (selectedRoles.includes(role)) {
      onChange(selectedRoles.filter((r) => r !== role));
    } else {
      onChange([...selectedRoles, role]);
    }
  };

  return (
    <div className="bg-[#2A2F4C] p-4 rounded-lg">
      <h3 className="text-[#C89B3C] font-display mb-4">Champion Roles</h3>
      <div className="flex flex-wrap gap-2">
        {roles.map(({ id, label, iconUrl }) => (
          <motion.button
            key={id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleRole(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
              selectedRoles.includes(id)
                ? 'bg-[#C89B3C] text-black'
                : 'bg-[#1B1F38] text-[#C89B3C]'
            }`}
          >
            <img 
              src={iconUrl} 
              alt={`${label} role`} 
              className={`w-4 h-4 ${selectedRoles.includes(id) ? 'brightness-0' : 'filter brightness-0 invert opacity-90'}`}
            />
            <span>{label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default RoleFilter;