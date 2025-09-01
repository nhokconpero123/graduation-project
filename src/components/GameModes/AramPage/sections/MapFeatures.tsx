import { motion } from 'framer-motion';
import { Map } from 'lucide-react';

const features = [
  {
    title: 'Health Relics',
    description: 'Restore health and mana by collecting relics that spawn on the bridge'
  },
  {
    title: 'Single Lane',
    description: 'Focus on team fighting in one lane with no jungle objectives'
  },
  {
    title: 'Snowball Spell',
    description: 'Unique summoner spell for engaging or checking brushes'
  },
  {
    title: 'Tower Defense',
    description: 'Strategic tower placement for base protection'
  }
];

const MapFeatures = () => {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-display text-[#C89B3C] mb-4">Howling Abyss</h2>
        <p className="text-xl text-gray-300">
          Battle across the ancient bridge with unique map features
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#2A2F4C] p-6 rounded-lg"
            >
              <h3 className="text-xl font-display text-[#C89B3C] mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="sticky top-8">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src="https://th.bing.com/th/id/R.a05be92155744d8e7aefe25a3b4e910f?rik=%2f8NTyIcED0XFpA&riu=http%3a%2f%2fpm1.narvii.com%2f6406%2f9947ead1107e6ead856beb5ac8eaa4927bb03023_hq.jpg&ehk=HAIIwhsKu7khwRN%2fgu1e4lmn%2b6TjmzEekcpS7Jlv%2fZs%3d&risl=&pid=ImgRaw&r=0"
                alt="Howling Abyss Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F38] to-transparent" />
              <Map className="absolute bottom-4 right-4 w-12 h-12 text-[#C89B3C]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapFeatures;