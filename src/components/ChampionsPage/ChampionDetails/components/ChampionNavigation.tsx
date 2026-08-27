import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { champions } from '../../data/champions';
import { Champion } from '../../types';

interface ChampionNavigationProps {
  currentChampion: Champion;
}

const ChampionNavigation = ({ currentChampion }: ChampionNavigationProps) => {
  const navigate = useNavigate();
  const currentIndex = champions.findIndex((c) => c.id === currentChampion.id);
  const prevChampion = currentIndex > 0 ? champions[currentIndex - 1] : null;
  const nextChampion =
    currentIndex < champions.length - 1 ? champions[currentIndex + 1] : null;
  const [isVisible, setIsVisible] = useState(window.scrollY < 50);

  const navigateToChampion = (championId: string) => {
    setIsVisible(true);
    navigate(`/champions/${championId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-1/2 left-0 right-0 -translate-y-1/2 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Previous Champion Button */}
        {prevChampion && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
            className="pointer-events-auto"
          >
            <button
              onClick={() => navigateToChampion(prevChampion.id)}
              aria-label={`View previous champion: ${prevChampion.name}`}
              className="group flex items-center gap-3 bg-[#2A2F4C]/50 backdrop-blur-sm p-4 rounded-lg hover:bg-[#2A2F4C]/80 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-[#C89B3C]" />
            </button>
          </motion.div>
        )}

        {/* Spacer to keep arrows aligned */}
        <div className="flex-grow" />

        {/* Next Champion Button */}
        {nextChampion && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
            className="pointer-events-auto"
          >
            <button
              onClick={() => navigateToChampion(nextChampion.id)}
              aria-label={`View next champion: ${nextChampion.name}`}
              className="group flex items-center gap-3 bg-[#2A2F4C]/50 backdrop-blur-sm p-4 rounded-lg hover:bg-[#2A2F4C]/80 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-[#C89B3C]" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ChampionNavigation;


