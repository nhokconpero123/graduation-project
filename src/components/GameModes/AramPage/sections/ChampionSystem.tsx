import { motion } from 'framer-motion';
import ChampionPool from '../components/ChampionPool';
import ChampionBalance from '../components/ChampionBalance';

const ChampionSystem = () => {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-display text-[#C89B3C] mb-4">Champion Selection</h2>
        <p className="text-xl text-gray-300">
          Master the art of random champion selection and team composition
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <ChampionPool />
        <ChampionBalance />
      </div>
    </section>
  );
};

export default ChampionSystem;