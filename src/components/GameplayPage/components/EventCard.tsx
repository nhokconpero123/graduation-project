import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

interface EventProps {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string;
  rewards: string[];
}

const EventCard = ({
  title,
  description,
  startDate,
  endDate,
  image,
  rewards
}: EventProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#2A2F4C] rounded-lg overflow-hidden"
    >
      <div className="h-48 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2F4C] to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-display text-white">{title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex items-center gap-6 mb-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
              <Calendar className="w-4 h-4" />
              Start
            </div>
            <div className="text-[#C89B3C]">{startDate}</div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
              <Clock className="w-4 h-4" />
              End
            </div>
            <div className="text-[#C89B3C]">{endDate}</div>
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-400 mb-2">Event Rewards</div>
          <div className="flex flex-wrap gap-2">
            {rewards.map((reward, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#1B1F38] rounded-full text-sm text-[#C89B3C]"
              >
                {reward}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;