import { motion } from 'framer-motion';
import IntroSection from './sections/IntroSection';
import FeaturesSection from './sections/FeaturesSection';
import HistorySection from './sections/HistorySection';
import EsportsSection from './sections/EsportsSection';
import UniqueSection from './sections/UniqueSection';
import LoreSection from './sections/LoreSection';
import RiotSection from './sections/RiotSection';
import PurposeSection from './sections/PurposeSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1F38] to-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display text-center text-[#C89B3C] mb-12"
        >
          About League of Legends
        </motion.h1>

        <div className="space-y-24">
          <IntroSection />
          <FeaturesSection />
          <HistorySection />
          <EsportsSection />
          <UniqueSection />
          <LoreSection />
          <RiotSection />
          <PurposeSection />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;