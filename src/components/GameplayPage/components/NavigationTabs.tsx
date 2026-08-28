// import { motion } from 'framer-motion';
// import { TabItem } from '../types';

// interface NavigationTabsProps {
//   tabs: TabItem[];
//   activeTab: string;
//   onTabChange: (tabId: string) => void;
// }

// const NavigationTabs = ({ tabs, activeTab, onTabChange }: NavigationTabsProps) => {
//   return (
//     <div className="flex flex-wrap justify-center gap-4 mb-12">
//       {tabs.map((tab, index) => {
//         const Icon = tab.icon;
//         const isActive = activeTab === tab.id;
//         return (
//           <motion.button
//             key={tab.id}
//             onClick={() => onTabChange(tab.id)}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`flex items-center gap-3 px-6 py-4 rounded-lg transition-all duration-300 ${
//               isActive
//                 ? 'bg-[#C89B3C] text-black shadow-lg shadow-[#C89B3C]/20'
//                 : 'bg-[#2A2F4C] text-[#C89B3C] hover:bg-[#C89B3C]/20'
//             }`}
//             style={{
//               borderLeft: isActive ? `4px solid ${tab.color}` : 'none'
//             }}
//           >
//             <Icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-[#C89B3C]'}`} />
//             <span className="font-semibold whitespace-nowrap">{tab.label}</span>
//           </motion.button>
//         );
//       })}
//     </div>
//   );
// };

// export default NavigationTabs;