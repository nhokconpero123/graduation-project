import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

interface AchievementProps {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  reward: string;
  progress?: number;
}

const AchievementCard = ({ title, description, difficulty, reward, progress = 0 }: AchievementProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#2A2F4C] rounded-lg p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <Trophy className="w-8 h-8 text-[#C89B3C]" />
        <h3 className="text-xl font-display text-[#C89B3C]">{title}</h3>
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      <div className="space-y-4">
        <div>
          <div className="text-sm text-gray-400 mb-1">Difficulty</div>
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  difficulty === 'easy' && i === 0 ||
                  difficulty === 'medium' && i < 2 ||
                  difficulty === 'hard' && i < 3
                    ? 'text-[#C89B3C]'
                    : 'text-gray-600'
                }`}
                fill="currentColor"
              />
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-400 mb-1">Reward</div>
          <div className="text-[#C89B3C]">{reward}</div>
        </div>

        {progress > 0 && (
          <div>
            <div className="text-sm text-gray-400 mb-1">Progress</div>
            <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C89B3C] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-right text-sm text-gray-400 mt-1">
              {progress}%
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AchievementCard;