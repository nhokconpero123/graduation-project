import { motion } from 'framer-motion';
import AchievementCard from '../components/AchievementCard';
import { achievements } from '../data/achievements';

const AchievementsSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-display text-[#C89B3C] mb-4">Challenges & Achievements</h2>
        <p className="text-xl text-gray-300">
          Test your skills and earn recognition with these special challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;