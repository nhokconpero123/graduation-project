import { motion } from 'framer-motion';
import { AlertCircle, Loader } from 'lucide-react';
import UpdateCard from '../components/UpdateCard';
import { usePatchNotes } from '../hooks/usePatchNotes';

const UpdatesSection = () => {
  const { patchNotes, isLoading, error } = usePatchNotes();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader className="w-8 h-8 text-[#C89B3C] animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <p className="text-gray-300">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-display text-[#C89B3C] mb-4">Latest Updates</h2>
        <p className="text-xl text-gray-300">
          Stay informed about the latest changes and improvements from official patch notes.
        </p>
      </div>

      <div className="space-y-6">
        {patchNotes.map((update) => (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <UpdateCard {...update} />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://www.leagueoflegends.com/en-us/news/tags/patch-notes/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-[#C89B3C] text-black font-semibold rounded-lg hover:bg-[#A67B2D] transition-colors"
        >
          View All Patch Notes
        </a>
      </div>
    </div>
  );
};

export default UpdatesSection;