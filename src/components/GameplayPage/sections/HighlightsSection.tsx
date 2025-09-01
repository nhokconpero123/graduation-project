import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import HighlightCard from '../components/HighlightCard';
import { highlights } from '../data/highlights';

const HighlightsSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-display text-[#C89B3C] mb-4">Epic Moments</h2>
        <p className="text-xl text-gray-300">
          Watch incredible plays and memorable moments from professional matches and the community.
          Click any highlight to watch on YouTube.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((highlight) => (
          <HighlightCard key={highlight.id} highlight={highlight} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-8"
      >
        <a
          href="https://www.youtube.com/@LeagueofLegends"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#C89B3C] text-black font-semibold rounded-lg hover:bg-[#A67B2D] transition-colors"
        >
          <Play className="w-5 h-5" />
          Watch More Highlights
        </a>
      </motion.div>
    </div>
  );
};

export default HighlightsSection;