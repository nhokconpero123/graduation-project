import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ModesOverview from './sections/ModesOverview';
import InteractiveMap from './sections/InteractiveMap';
import TeamCompositions from './sections/TeamCompositions';
import UpdatesSection from './sections/UpdatesSection';
import GameModeEvents from './sections/GameModeEvents';
import AchievementsSection from './sections/AchievementsSection';
import HighlightsSection from './sections/HighlightsSection';

const GameplayPage = () => {
  const [activeSection, setActiveSection] = useState('modes');
  const navigate = useNavigate();

  const sections = [
    { id: 'modes', label: 'Game Modes' },
    { id: 'map', label: 'Interactive Map' },
    { id: 'compositions', label: 'Team Compositions' },
    { id: 'updates', label: 'Latest Updates' },
    { id: 'events', label: 'Events' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'highlights', label: 'Highlights' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'modes':
        return <ModesOverview onModeClick={() => navigate('/how-to-play')} />;
      case 'map':
        return <InteractiveMap />;
      case 'compositions':
        return <TeamCompositions />;
      case 'updates':
        return <UpdatesSection />;
      case 'events':
        return <GameModeEvents />;
      case 'achievements':
        return <AchievementsSection />;
      case 'highlights':
        return <HighlightsSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1F38] to-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display text-center text-white mb-12"
        >
          Master the Game
        </motion.h1>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-[#C89B3C] text-black'
                  : 'bg-[#2A2F4C] text-[#C89B3C] hover:bg-[#C89B3C]/20'
              }`}
            >
              <span className="font-semibold">{section.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Content Section */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-16"
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default GameplayPage;