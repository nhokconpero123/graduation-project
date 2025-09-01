import { motion } from 'framer-motion';
import { Shield, Sword, Wand } from 'lucide-react';

const categories = [
  {
    icon: Sword,
    title: 'Offensive Items',
    items: [
      { name: 'Infinity Edge', description: 'Critical strike damage' },
      { name: 'Bloodthirster', description: 'Lifesteal and shield' },
      { name: 'Rapid Firecannon', description: 'Attack range and speed' }
    ]
  },
  {
    icon: Shield,
    title: 'Defensive Items',
    items: [
      { name: 'Dragon\'s Claw', description: 'Magic resistance' },
      { name: 'Bramble Vest', description: 'Armor and reflection' },
      { name: 'Warmog\'s Armor', description: 'Health regeneration' }
    ]
  },
  {
    icon: Wand,
    title: 'Utility Items',
    items: [
      { name: 'Zeke\'s Herald', description: 'Team attack speed' },
      { name: 'Chalice of Power', description: 'Team ability power' },
      { name: 'Locket of Iron Solari', description: 'Team shield' }
    ]
  }
];

const ItemGuide = () => {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-display text-[#C89B3C] mb-4">Item Guide</h2>
        <p className="text-xl text-gray-300">
          Master the art of item combinations and priority
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#2A2F4C] rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Icon className="w-8 h-8 text-[#C89B3C]" />
                <h3 className="text-xl font-display text-[#C89B3C]">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 4 }}
                    className="p-4 bg-[#1B1F38] rounded-lg"
                  >
                    <h4 className="text-[#C89B3C] font-semibold mb-1">{item.name}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ItemGuide;