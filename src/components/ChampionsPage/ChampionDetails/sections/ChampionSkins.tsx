import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Champion } from '../../types';

interface ChampionSkinsProps {
  champion: Champion;
}

const ChampionSkins = ({ champion }: ChampionSkinsProps) => {
  const [currentSkin, setCurrentSkin] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const skins = champion.skins || [
    {
      name: 'Default',
      image: champion.image,
      price: 'Default'
    }
  ];

  const nextSkin = () => {
    setCurrentSkin((prev) => (prev + 1) % skins.length);
  };

  const prevSkin = () => {
    setCurrentSkin((prev) => (prev - 1 + skins.length) % skins.length);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-display text-[#C89B3C] mb-6">Available Skins</h2>
      
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSkin}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative aspect-[21/9] rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setIsFullScreen(true)}
          >
            <img
              src={skins[currentSkin].image}
              alt={skins[currentSkin].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-display text-white mb-2">
                {skins[currentSkin].name}
              </h3>
              {skins[currentSkin].price !== 'Default' && (
                <p className="text-[#C89B3C]">{skins[currentSkin].price} RP</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSkin}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/75 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSkin}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/75 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4 mt-6">
        {skins.map((skin, index) => (
          <motion.button
            key={skin.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentSkin(index)}
            className={`relative aspect-video rounded-lg overflow-hidden ${
              currentSkin === index ? 'ring-2 ring-[#C89B3C]' : ''
            }`}
          >
            <img
              src={skin.image}
              alt={skin.name}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsFullScreen(false)}
          >
            <button
              onClick={() => setIsFullScreen(false)}
              className="absolute top-4 right-4 text-white hover:text-[#C89B3C] z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={skins[currentSkin].image}
                alt={skins[currentSkin].name}
                className="w-full rounded-lg"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSkin();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSkin();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-2xl font-display text-white mb-2">
                  {skins[currentSkin].name}
                </h2>
                {skins[currentSkin].price !== 'Default' && (
                  <p className="text-[#C89B3C]">{skins[currentSkin].price} RP</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChampionSkins;