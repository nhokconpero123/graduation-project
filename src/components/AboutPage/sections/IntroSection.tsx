import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

const IntroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex items-center gap-4 mb-6">
        <Gamepad2 className="w-8 h-8 text-[#C89B3C]" />
        <h2 className="text-3xl font-display text-white">What is League of Legends?</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-lg text-gray-300">
            League of Legends is a team-based strategy game where two teams of five compete to destroy the opposing team's Nexus while navigating a dynamic battlefield filled with objectives, monsters, and endless possibilities.
          </p>
          <p className="text-lg text-gray-300">
            Each player controls a unique champion with distinct abilities, working together to outmaneuver and outplay their opponents through strategy, skill, and teamwork.
          </p>
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" 
            alt="League of Legends Gameplay"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </motion.section>
  );
};

export default IntroSection;