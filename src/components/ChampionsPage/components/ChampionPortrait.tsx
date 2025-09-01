import { Champion } from '../types';

interface ChampionPortraitProps {
  champion: Champion;
}

const ChampionPortrait = ({ champion }: ChampionPortraitProps) => {
  return (
    <div className="absolute inset-0">
      <img
        src={champion.image}
        alt={champion.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F38] via-transparent to-transparent opacity-80" />
    </div>
  );
};

export default ChampionPortrait;