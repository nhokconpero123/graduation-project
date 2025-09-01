import { motion } from 'framer-motion';
import { Book, Map, ExternalLink } from 'lucide-react';

const regions = [
  {
    name: 'Demacia',
    description: 'A proud kingdom built on military might and honor',
    image: 'https://wallpaperaccess.com/full/9410811.jpg'
  },
  {
    name: 'Noxus',
    description: 'An empire that values strength and conquest',
    image: 'https://i.pinimg.com/originals/0e/79/b1/0e79b180d047e5aee670888008b3555f.jpg'
  },
  {
    name: 'Ionia',
    description: 'A land of natural magic and spiritual balance',
    image: 'https://wallpapercave.com/wp/wp8778809.jpg'
  },
  {
    name: 'Freljord',
    description: 'A harsh, frozen realm of ancient tribal conflicts',
    image: 'https://lol-stats.net/uploads/MS5NogIhWY99fLnw7uoYnJJm1z0FtY8M1aMYEOmm.jpeg'
  }
];

const LoreSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex items-center gap-4 mb-8">
        <Book className="w-8 h-8 text-[#C89B3C]" />
        <h2 className="text-3xl font-display text-white">Lore and Universe</h2>
      </div>

      {/* Introduction */}
      <div className="bg-[#2A2F4C] rounded-lg p-6 mb-8">
        <p className="text-gray-300 leading-relaxed">
          The world of Runeterra is vast and rich with history, where magic flows through every corner
          and ancient conflicts shape the destinies of its inhabitants. From the proud warriors of
          Demacia to the mystical shores of Ionia, each region tells its own unique story in the
          grand tapestry of League of Legends.
        </p>
      </div>

      {/* Regions Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {regions.map((region) => (
          <motion.div
            key={region.name}
            whileHover={{ scale: 1.02 }}
            className="bg-[#2A2F4C] rounded-lg overflow-hidden"
          >
            <div className="h-48 relative">
              <img
                src={region.image}
                alt={region.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2F4C] to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-display text-[#C89B3C]">{region.name}</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-300">{region.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Map Link */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-[#2A2F4C] rounded-lg p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <Map className="w-8 h-8 text-[#C89B3C]" />
          <h3 className="text-xl font-display text-[#C89B3C]">Explore Runeterra</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Dive deeper into the world of Runeterra with our interactive map. Discover the rich history,
          conflicts, and stories that shape each region of this magical realm.
        </p>
        <a
          href="https://map.leagueoflegends.com/en_US"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#C89B3C] hover:text-[#A67B2D] transition-colors"
        >
          <span>Explore Interactive Map</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Additional Resources */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#2A2F4C] p-6 rounded-lg"
        >
          <h3 className="text-xl font-display text-[#C89B3C] mb-4">Champion Stories</h3>
          <p className="text-gray-300 mb-4">
            Each champion in League of Legends has their own unique backstory, relationships,
            and role in the greater narrative of Runeterra.
          </p>
          <a
            href="https://universe.leagueoflegends.com/en_US/champions/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C89B3C] hover:text-[#A67B2D] transition-colors"
          >
            <span>Read Champion Stories</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#2A2F4C] p-6 rounded-lg"
        >
          <h3 className="text-xl font-display text-[#C89B3C] mb-4">Universe</h3>
          <p className="text-gray-300 mb-4">
            Explore comics, short stories, and artwork that expand the rich lore of
            League of Legends beyond the game.
          </p>
          <a
            href="https://universe.leagueoflegends.com/en_US/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C89B3C] hover:text-[#A67B2D] transition-colors"
          >
            <span>Visit Universe</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LoreSection;