import { Champion } from '../types';
import ChampionStats from './ChampionStats';

interface ChampionInfoProps {
  champion: Champion;
}

const ChampionInfo = ({ champion }: ChampionInfoProps) => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-display text-[#C89B3C]">{champion.name}</h3>
      <div className="text-sm text-gray-400 mb-2">{champion.roles.join(' / ')}</div>

      <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
        <ChampionStats stats={champion.stats} />
        <p className="text-sm text-gray-300 mt-3 line-clamp-2">{champion.lore}</p>
      </div>

      <div className="mt-4 text-sm text-[#C89B3C] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Click to view details
      </div>
    </div>
  );
};

export default ChampionInfo;