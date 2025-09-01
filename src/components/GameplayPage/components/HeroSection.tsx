import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-[50vh] mb-12 overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt462f411789283b3c/5e4da5a1f977791c2aed1bd2/LOL_PROMOART_1.jpg"
        >
          <source src="https://www.leagueoflegends.com/static/hero-c35bd03ceaa5f919e98b20c905044a3d.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1F38]/50 via-[#1B1F38]/70 to-[#1B1F38]" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display text-[#C89B3C] mb-4"
        >
          Master the Game
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-2xl"
        >
          Explore game modes, learn strategies, and dominate the Rift
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;