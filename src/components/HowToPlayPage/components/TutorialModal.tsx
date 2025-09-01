import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Sword, Target } from 'lucide-react';
import { Role } from '../data/roleData';

interface TutorialModalProps {
  role: Role | null;
  onClose: () => void;
}

const TutorialModal = ({ role, onClose }: TutorialModalProps) => {
  if (!role) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="bg-[#2A2F4C] w-full max-w-[90vw] max-h-[90vh] rounded-lg overflow-auto relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-[#C89B3C] z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header Image */}
          <div className="h-64 relative">
            <img
              src={role.backgroundUrl}
              alt={role.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A2F4C] to-transparent" />
            <div className="absolute bottom-6 left-8 right-8">
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={role.iconUrl}
                  alt={`${role.name} icon`}
                  className="w-12 h-12 filter brightness-0 invert"
                />
                <h2 className="text-4xl font-display text-white">
                  {role.name}
                </h2>
              </div>
              <p className="text-gray-300 text-lg">{role.description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tips Section */}
              <div>
                <h3 className="text-xl font-display text-[#C89B3C] mb-4 flex items-center gap-2">
                  <Sword className="w-5 h-5" />
                  Pro Tips
                </h3>
                <ul className="space-y-3">
                  {role.tips.map((tip, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-[#C89B3C] mt-1">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Champions Section */}
              <div>
                <h3 className="text-xl font-display text-[#C89B3C] mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Recommended Champions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {role.recommendedChampions.map((champion) => (
                    <motion.div
                      key={champion}
                      whileHover={{ scale: 1.05 }}
                      className="bg-[#1B1F38] p-4 rounded-lg"
                    >
                      <h4 className="text-[#C89B3C] font-display mb-1">
                        {champion}
                      </h4>
                      <span className="text-sm text-gray-400">
                        Beginner Friendly
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="mt-8 p-6 bg-[#1B1F38] rounded-lg">
              <h3 className="text-xl font-display text-[#C89B3C] mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Getting Started
              </h3>
              <p className="text-gray-300 mb-4">
                Start with AI games to practice the basics of {role.name}. Focus
                on learning one champion at a time and mastering the fundamental
                mechanics before expanding your champion pool.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#2A2F4C] rounded-full text-sm text-[#C89B3C]">
                  Practice Tool
                </span>
                <span className="px-4 py-2 bg-[#2A2F4C] rounded-full text-sm text-[#C89B3C]">
                  Co-op vs AI
                </span>
                <span className="px-4 py-2 bg-[#2A2F4C] rounded-full text-sm text-[#C89B3C]">
                  Normal Games
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TutorialModal;