import { motion } from 'framer-motion';
import { Heart, Shield, Sword, Zap } from 'lucide-react';
import { Champion } from '../../types';

interface ChampionStatsProps {
  champion: Champion;
}

const ChampionStats = ({ champion }: ChampionStatsProps) => {
  const stats = [
    { icon: Heart, label: 'Health', value: champion.baseStats?.health || '575' },
    { icon: Shield, label: 'Armor', value: champion.baseStats?.armor || '26' },
    { icon: Sword, label: 'Attack Damage', value: champion.baseStats?.attackDamage || '68' },
    { icon: Zap, label: 'Attack Speed', value: champion.baseStats?.attackSpeed || '0.625' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-[#2A2F4C] rounded-lg p-6"
    >
      <h2 className="text-2xl font-display text-[#C89B3C] mb-6">Base Stats</h2>
      
      <div className="space-y-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex items-center justify-between p-4 bg-[#1B1F38] rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-[#C89B3C]" />
                <span className="text-gray-300">{stat.label}</span>
              </div>
              <span className="text-[#C89B3C] font-semibold">{stat.value}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-[#1B1F38] rounded-lg">
        <h3 className="text-[#C89B3C] font-display mb-2">Scaling</h3>
        <p className="text-sm text-gray-300">
          Stats increase with each level. Values shown are base stats at level 1.
        </p>
      </div>
    </motion.div>
  );
};

export default ChampionStats;