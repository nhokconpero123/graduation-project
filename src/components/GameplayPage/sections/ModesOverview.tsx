import { motion } from 'framer-motion';
import GameModeCard from '../components/GameModeCard';
import { gameModes } from '../data/gameModes';
import { useNavigate } from 'react-router-dom';

interface ModesOverviewProps {
  onModeClick: () => void;
}

const ModesOverview = ({ onModeClick }: ModesOverviewProps) => {
  const navigate = useNavigate();

  const handleModeClick = (modeId: string) => {
    if (modeId === 'summoners-rift') {
      onModeClick();
    } else if (modeId === 'aram') {
      navigate('/game-modes/aram');
    } else if (modeId === 'tft') {
      navigate('/game-modes/tft');
    }
  };

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-display text-[#C89B3C] mb-4">Game Modes</h2>
        <p className="text-xl text-gray-300">
          Explore different ways to play League of Legends, from the strategic depth of
          Summoner's Rift to the fast-paced action of ARAM and the tactical gameplay of TFT.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameModes.map((mode) => (
          <GameModeCard 
            key={mode.id} 
            {...mode} 
            onClick={() => handleModeClick(mode.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ModesOverview;