import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  author: string;
  views: number;
}

const VideoCard = ({
  title,
  description,
  thumbnail,
  duration,
  author,
  views,
}: VideoProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#2A2F4C] rounded-lg overflow-hidden"
    >
      <div className="relative aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <Play className="w-12 h-12 text-white" fill="currentColor" />
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs text-white">
          {duration}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-display text-[#C89B3C] mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-3">{description}</p>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">{author}</span>
          <span className="text-gray-400">{views.toLocaleString()} views</span>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
