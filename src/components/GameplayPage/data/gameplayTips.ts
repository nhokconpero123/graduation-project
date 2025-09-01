// This file contains gameplay tips for League of Legends, including strategies for farming, vision control, team fighting, objective control, map awareness, and wave management.
// Each tip has an ID, title, description, icon, and a list of specific tips.
// The tips are designed to help players improve their gameplay and understanding of the game.
// The tips cover various aspects of gameplay, including last hitting, warding, team fighting, and map awareness.
// The tips are structured as an array of objects, where each object represents a specific gameplay tip.
// The tips are designed to help players improve their gameplay and understanding of the game.
// The tips cover various aspects of gameplay, including last hitting, warding, team fighting, and map awareness.
// The tips are structured as an array of objects, where each object represents a specific gameplay tip.
// The tips are designed to help players improve their gameplay and understanding of the game.
// The tips cover various aspects of gameplay, including last hitting, warding, team fighting, and map awareness.
// The tips are structured as an array of objects, where each object represents a specific gameplay tip.
// The tips are designed to help players improve their gameplay and understanding of the game.
// The tips cover various aspects of gameplay, including last hitting, warding, team fighting, and map awareness.
// The tips are structured as an array of objects, where each object represents a specific gameplay tip.
// The tips are designed to help players improve their gameplay and understanding of the game.  
import { Target, Sword, Map, Users, Eye } from 'lucide-react';

export const gameplayTips = [
  {
    id: 'farming',
    title: 'Last Hitting',
    description: 'Master the art of last hitting minions to maximize gold income.',
    icon: Target,
    tips: [
      'Wait for minions to get very low before attacking',
      'Practice timing in Practice Tool',
      'Use abilities for cannon minions',
      'Watch enemy abilities that might steal CS'
    ]
  },
  {
    id: 'vision',
    title: 'Vision Control',
    description: 'Learn to control vision to protect your team and track enemies.',
    icon: Eye,
    tips: [
      'Ward key objectives before they spawn',
      'Buy control wards for permanent vision',
      'Clear enemy vision in important areas',
      'Use sweeper to deny enemy vision'
    ]
  },
  {
    id: 'teamfight',
    title: 'Team Fighting',
    description: 'Position correctly and focus priority targets in team fights.',
    icon: Users,
    tips: [
      'Protect your carries',
      'Focus high-priority targets',
      'Save key abilities for the right moment',
      'Watch for enemy cooldowns'
    ]
  },
  {
    id: 'objectives',
    title: 'Objective Control',
    description: 'Secure important objectives to gain team advantages.',
    icon: Target,
    tips: [
      'Prioritize dragons early game',
      'Contest Baron after 20 minutes',
      'Take towers when enemies are dead',
      'Track objective timers'
    ]
  },
  {
    id: 'map-awareness',
    title: 'Map Awareness',
    description: 'Keep track of enemy movements and potential ganks.',
    icon: Map,
    tips: [
      'Check minimap every few seconds',
      'Track enemy jungler position',
      'Ping missing enemies',
      'Watch for objective setups'
    ]
  },
  {
    id: 'wave-management',
    title: 'Wave Management',
    description: 'Control minion waves to create advantages in lane.',
    icon: Sword,
    tips: [
      'Freeze lane near your tower',
      'Slow push to build large waves',
      'Reset wave after taking objectives',
      'Deny CS by zoning enemy'
    ]
  }
];