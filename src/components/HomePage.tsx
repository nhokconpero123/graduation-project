import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Volume2, VolumeX } from 'lucide-react';



const HomePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const navigate = useNavigate();
  

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="video/Awaken video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Sound Control Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-50 p-3 bg-[#2A2F4C]/80 hover:bg-[#2A2F4C] rounded-full transition-colors duration-300"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-[#C89B3C]" />
        ) : (
          <Volume2 className="w-6 h-6 text-[#C89B3C]" />
        )}
      </motion.button>

      {/* Hero Content */}
      <div className="relative z-30 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Step Into the Rift
            <span className="block text-[#C89B3C]">Your Legend Awaits</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-x-4"
          >
            <button
              onClick={() => navigate('/gameplay')}
              className="inline-block px-8 py-3 bg-[#C89B3C] text-black font-bold rounded-lg hover:bg-[#A67B2D] transition-colors duration-300"
            >
              Play Now
            </button>
            <button
              onClick={() => navigate('/champions')}
              className="inline-block px-8 py-3 border-2 border-[#C89B3C] text-[#C89B3C] font-bold rounded-lg hover:bg-[#C89B3C] hover:text-black transition-colors duration-300"
            >
              Discover Champions
            </button>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-40" />
    </div>
  );
};

export default HomePage;
