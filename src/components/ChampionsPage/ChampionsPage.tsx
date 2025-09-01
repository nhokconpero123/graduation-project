import { motion } from 'framer-motion';
import ChampionGrid from './components/ChampionGrid';
import SearchBar from './components/SearchBar';
import RoleFilter from './components/RoleFilter';
import DifficultyFilter from './components/DifficultyFilter';
import { useChampionFilters } from './hooks/useChampionFilters';

const ChampionsPage = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedRoles,
    setSelectedRoles,
    selectedDifficulty,
    setSelectedDifficulty,
    filteredChampions,
  } = useChampionFilters();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1F38] to-black pt-20 ">
      {/* Hero Section with Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center overflow-hidden mb-8"
      >
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            src="https://images3.alphacoders.com/129/thumb-1920-1291921.jpg"
            alt="League of Legends Champions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#1B1F38]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative text-center z-10 px-4"
        >
          <h1 className="text-4xl md:text-7xl font-display text-[#C89B3C] mb-6">
            Champions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from over 150 champions to make epic plays, secure kills, and
            take down towers.
          </p>
        </motion.div>
      </motion.div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#2A2F4C] rounded-xl p-8 shadow-lg mb-12"
        >
          <div className="space-y-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />

            <div className="grid md:grid-cols-2 gap-18">
              <RoleFilter
                selectedRoles={selectedRoles}
                onChange={setSelectedRoles}
              />
              <DifficultyFilter
                selectedDifficulty={selectedDifficulty}
                onChange={setSelectedDifficulty}
              />
            </div>
          </div>
        </motion.div>
        {/* Champions Grid with Stats */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-between items-center mb-6"
          >
            <h2 className="text-2xl font-display text-[#C89B3C]">
              {filteredChampions.length} Champions Found
            </h2>
            <div className="text-gray-400">
              Showing {filteredChampions.length} of {filteredChampions.length}{' '}
              champions
            </div>
          </motion.div>
          <ChampionGrid champions={filteredChampions} />
        </div>
      </div>
    </div>
  );
};

export default ChampionsPage;
