// import { motion } from 'framer-motion';
// import { Settings, Sparkles } from 'lucide-react';

// const mechanics = [
//   {
//     title: 'Champion Selection',
//     description: 'Champions are randomly assigned from your available pool. Each team gets a limited number of rerolls.',
//     icon: Sparkles,
//     highlight: 'Random selection adds unpredictability'
//   },
//   {
//     title: 'Experience Gain',
//     description: 'Players start at level 3 and gain experience faster than in normal games.',
//     icon: Settings,
//     highlight: 'Accelerated leveling'
//   },
//   {
//     title: 'Gold Generation',
//     description: 'Passive gold generation is increased, and additional gold is granted from nearby minion deaths.',
//     icon: Settings,
//     highlight: 'Enhanced economy'
//   },
//   {
//     title: 'Health Relics',
//     description: 'Health relics spawn periodically on the bridge, providing healing and mana regeneration.',
//     icon: Settings,
//     highlight: 'Strategic sustain'
//   },
//   {
//     title: 'Champion Balance',
//     description: 'Some champions have specific ARAM buffs or nerfs to maintain game balance.',
//     icon: Settings,
//     highlight: 'Mode-specific balance'
//   },
//   {
//     title: 'Structures',
//     description: 'No inhibitors; destroying a tower grants super minions immediately.',
//     icon: Settings,
//     highlight: 'Simplified objectives'
//   }
// ];

// const AramMechanics = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="space-y-8"
//     >
//       <div className="flex items-center gap-4 mb-6">
//         <Settings className="w-8 h-8 text-[#C89B3C]" />
//         <h2 className="text-3xl font-display text-white">Game Mechanics</h2>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {mechanics.map((mechanic) => {
//           const Icon = mechanic.icon;
//           return (
//             <motion.div
//               key={mechanic.title}
//               whileHover={{ scale: 1.02 }}
//               className="bg-[#2A2F4C] p-6 rounded-lg relative overflow-hidden group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-[#C89B3C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <Icon className="w-8 h-8 text-[#C89B3C] mb-4" />
//               <h3 className="text-xl font-display text-[#C89B3C] mb-3">{mechanic.title}</h3>
//               <p className="text-gray-300 mb-4">{mechanic.description}</p>
//               <span className="inline-block px-3 py-1 bg-[#1B1F38] text-[#C89B3C] text-sm rounded-full">
//                 {mechanic.highlight}
//               </span>
//             </motion.div>
//           );
//         })}
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="mt-8 p-6 bg-[#1B1F38] rounded-lg"
//       >
//         <h3 className="text-xl font-display text-[#C89B3C] mb-3">Quick Tips</h3>
//         <p className="text-gray-300">
//           Understanding these mechanics is crucial for success in ARAM. Use health relics strategically,
//           manage your rerolls wisely, and adapt your playstyle to the random champion you receive.
//         </p>
//       </motion.div>
//     </motion.section>
//   );
// };

// export default AramMechanics;