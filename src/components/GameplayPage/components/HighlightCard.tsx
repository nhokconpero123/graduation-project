import { motion } from 'framer-motion';
import { Play, Award, Star } from 'lucide-react';
import type { Highlight } from '../data/highlights';

interface HighlightCardProps {
  highlight: Highlight;
}

const HighlightCard = ({ highlight }: HighlightCardProps) => {
  const handleClick = () => {
    window.open(highlight.youtubeUrl, '_blank');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#2A2F4C] rounded-lg overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative aspect-video">
        <img
          src={highlight.thumbnail}
          alt={highlight.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 flex items-center justify-center bg-[#C89B3C] rounded-full"
          >
            <Play className="w-8 h-8 text-black" fill="currentColor" />
          </motion.div>
        </div>
        {highlight.type === 'pro-play' && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-[#C89B3C] rounded text-xs text-black font-semibold">
            Pro Play
          </div>
        )}
        {highlight.type === 'community' && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-[#00FF7F] rounded text-xs text-black font-semibold">
            Community
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-display text-[#C89B3C] mb-2">
          {highlight.title}
        </h3>
        <p className="text-sm text-gray-300 mb-4">{highlight.description}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            {highlight.type === 'pro-play' ? (
              <Award className="w-4 h-4 text-[#C89B3C]" />
            ) : (
              <Star className="w-4 h-4 text-[#00FF7F]" />
            )}
            <span className="text-gray-400">{highlight.player}</span>
          </div>
          <span className="text-gray-400">{highlight.views.toLocaleString()} views</span>
        </div>
      </div>
    </motion.div>
  );
};

export default HighlightCard;