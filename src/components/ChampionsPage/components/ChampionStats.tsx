import { Shield, Sword, Wand, Activity } from 'lucide-react';
import { ChampionStatistics } from '../types';

interface ChampionStatsProps {
  stats: ChampionStatistics;
}

const ChampionStats = ({ stats }: ChampionStatsProps) => {
  const statItems = [
    { icon: Sword, value: stats.attack, label: 'Attack' },
    { icon: Shield, value: stats.defense, label: 'Defense' },
    { icon: Wand, value: stats.magic, label: 'Magic' },
    { icon: Activity, value: stats.difficulty, label: 'Difficulty' }
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {statItems.map(({ icon: Icon, value, label }) => (
        <div key={label} className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Icon className="w-3 h-3 text-[#C89B3C]" />
            {label}
          </div>
          <div className="h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C89B3C] rounded-full transition-all duration-300"
              style={{ width: `${value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChampionStats;