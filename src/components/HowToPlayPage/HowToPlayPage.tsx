import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Layers, Book, CrosshairIcon } from 'lucide-react';
import RolesSection from './sections/RolesSection';
import ChampionTypesSection from './sections/ChampionTypesSection';
import TutorialModal from './components/TutorialModal';
import MechanicsCard from './components/MechanicsCard';
import BasicGuide from './components/BasicGuide';
import { Role } from './data/roleData';

const tabs = [
  {
    id: 'basics',
    label: 'Game Basics',
    icon: Gamepad2
  },
  {
    id: 'roles',
    label: 'Choose Your Role',
    icon: Layers
  },
  {
    id: 'types',
    label: 'Champion Types',
    icon: Book
  },
  {
    id: 'mechanics',
    label: 'Mechanics',
    icon: CrosshairIcon
  }
];

const HowToPlayPage = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [activeTab, setActiveTab] = useState('basics');

  const renderContent = () => {
    switch (activeTab) {
      case 'basics':
        return <BasicGuide />;
      
      case 'roles':
        return <RolesSection onRoleSelect={setSelectedRole} />;
      
      case 'types':
        return <ChampionTypesSection />;
      
      case 'mechanics':
        return <MechanicsCard />;
      
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
          Learn to Play
        </motion.h1>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#C89B3C] text-black'
                    : 'bg-[#2A2F4C] text-[#C89B3C] hover:bg-[#C89B3C]/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold whitespace-nowrap">{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.section
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-16"
          >
            {renderContent()}
          </motion.section>
        </AnimatePresence>

        <TutorialModal
          role={selectedRole}
          onClose={() => setSelectedRole(null)}
        />
      </div>
    </div>
  );
};

export default HowToPlayPage;