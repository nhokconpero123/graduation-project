import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';
import { gameEvents } from '../data/gameEvents';

const GameModeEvents = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-display text-[#C89B3C] mb-4">Special Events</h2>
        <p className="text-xl text-gray-300">
          Don't miss out on limited-time game modes and special events.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {gameEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default GameModeEvents;