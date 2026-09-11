// Home page hero for the landing screen. This section keeps the media background and
// call-to-action buttons focused on a single, easy-to-follow user flow.
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Volume2, VolumeX } from 'lucide-react';

const buttonClasses =
  'inline-block px-8 py-3 font-bold rounded-lg transition-colors duration-300';

const HomePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const navigate = useNavigate();

  const toggleMute = () => {
    setIsMuted((prevMuted) => {
      const nextMutedState = !prevMuted;

      if (videoRef.current) {
        videoRef.current.muted = nextMutedState;
      }

      return nextMutedState;
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="video/Awaken video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 z-10 bg-black/50" />

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-50 rounded-full bg-[#2A2F4C]/80 p-3 transition-colors duration-300 hover:bg-[#2A2F4C]"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6 text-[#C89B3C]" />
        ) : (
          <Volume2 className="h-6 w-6 text-[#C89B3C]" />
        )}
      </motion.button>

      <div className="relative z-30 flex h-full items-center justify-center">
        <div className="px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-white md:text-6xl"
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
              className={`${buttonClasses} bg-[#C89B3C] text-black hover:bg-[#A67B2D]`}
            >
              Play Now
            </button>
            <button
              onClick={() => navigate('/champions')}
              className={`${buttonClasses} border-2 border-[#C89B3C] text-[#C89B3C] hover:bg-[#C89B3C] hover:text-black`}
            >
              Discover Champions
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-40 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default HomePage;
