import { motion } from 'framer-motion';
import { Info, ExternalLink } from 'lucide-react';

const AramOverview = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4 mb-6">
        <Info className="w-8 h-8 text-[#C89B3C]" />
        <h2 className="text-3xl font-display text-white">Overview</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-300">
            ARAM (All Random All Mid) is a fast-paced 5v5 game mode played on the Howling Abyss map. 
            Unlike Summoner's Rift, players are assigned random champions and must battle in a single lane.
          </p>
          <p className="text-gray-300">
            The objective remains the same: destroy the enemy Nexus. However, the confined space and 
            random champion selection create unique strategic challenges and constant team fighting.
          </p>
          <a 
            href="https://leagueoflegends.fandom.com/wiki/ARAM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C89B3C] hover:text-[#A67B2D] transition-colors mt-4"
          >
            <span>Learn More About ARAM</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden">
          <img 
            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7a3d6c549708c048/5e4da5b1d71e062a58eb4b14/LOL_PROMOART_5.jpg" 
            alt="Howling Abyss"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </motion.section>
  );
};

export default AramOverview;