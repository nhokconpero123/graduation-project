import { motion } from 'framer-motion';
import CompositionCard from '../components/CompositionCard';
import { teamCompositions } from '../data/teamCompositions';

const TeamCompositions = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-display text-[#C89B3C] mb-4">Meta Team Compositions</h2>
        <p className="text-xl text-gray-300">
          Discover powerful champion combinations and strategies for different playstyles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {teamCompositions.map((comp) => (
          <CompositionCard key={comp.id} {...comp} />
        ))}
      </div>
    </div>
  );
};

export default TeamCompositions;