// import { Champion } from '../types';
// import ChampionStats from './ChampionStats';
// import ChampionRoles from './ChampionRoles';

// interface ChampionOverlayProps {
//   champion: Champion;
// }

// const ChampionOverlay = ({ champion }: ChampionOverlayProps) => {
//   return (
//     <div className="absolute inset-x-0 bottom-0 p-6 transform transition-transform duration-300">
//       <div className="space-y-4">
//         <div>
//           <h3 className="text-2xl font-display text-[#C89B3C] mb-2">{champion.name}</h3>
//           <ChampionRoles roles={champion.roles} />
//         </div>

//         <div className="transform transition-all duration-300 opacity-0 group-hover:opacity-100">
//           <ChampionStats stats={champion.stats} />
//           <p className="mt-4 text-sm text-gray-300 line-clamp-2">{champion.lore}</p>
//           <div className="mt-4 inline-flex items-center text-sm text-[#C89B3C]">
//             View Champion Details →
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChampionOverlay;