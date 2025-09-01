import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9667d87f6e4c3d5c/5e4da5c1ee48da0d5f3afb1e/LOL_PROMOART_6.jpg"
        >
          <source src="https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9667d87f6e4c3d5c/TFT_Homepage_Video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F38] to-transparent" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-display text-[#C89B3C] mb-6">
            Teamfight Tactics
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Assemble a squad of champions, position them perfectly, and battle to become the last player standing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://teamfighttactics.leagueoflegends.com/en-us/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#C89B3C] text-black font-bold rounded-lg hover:bg-[#A67B2D] transition-colors"
            >
              <Play className="w-5 h-5" />
              Play Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1B1F38] to-transparent" />
    </div>
  );
}

export default HeroSection;