// This file contains the game modes data for the League of Legends gameplay page.
// Each game mode has an ID, name, description, duration, difficulty level, image URL, icon, and objectives.
// The data is structured as an array of objects, where each object represents a specific game mode.
// The game modes include Summoner's Rift, ARAM, and Teamfight Tactics.
// The data can be used to display information about the game modes on a website or application.
// The game modes include Summoner's Rift, ARAM, and Teamfight Tactics.
import { Sword, Shield, Crosshair } from 'lucide-react';

export const gameModes = [
  {
    id: 'summoners-rift',
    name: "Summoner's Rift",
    description:
      "The classic 5v5 strategic battlefield where teams compete to destroy the enemy's Nexus.",
    duration: '30-40 minutes',
    difficulty: 3,
    image: 'https://images3.alphacoders.com/129/1291921.jpg',
    icon: Sword,
    objectives: [
      'Destroy enemy Nexus',
      'Control objectives (Dragon, Baron)',
      'Push lanes and destroy towers',
    ],
  },

  {
    id: 'aram',
    name: 'ARAM',
    description:
      'All Random All Mid - A fast-paced 5v5 match on the Howling Abyss bridge.',
    duration: '15-25 minutes',
    difficulty: 1,
    image:
      'https://esportimes.com/wp-content/uploads/2022/11/Riot-Games-LoL-Aram-Modu-icin-Guncellemeler-Yapacak-esportimes-696x392.jpg',
    icon: Shield,
    objectives: [
      'Destroy enemy Nexus',
      'Team fight constantly',
      'Push single lane',
    ],
  },
  {
    id: 'tft',
    name: 'Teamfight Tactics',
    description:
      'Auto-battler strategy game mode where eight players compete in a free-for-all.',
    duration: '30-40 minutes',
    difficulty: 2,
    image:
      'https://i.pinimg.com/736x/f0/b1/f2/f0b1f2d7bf64a21368a3ff7bf1dc21ea.jpg ',
    icon: Crosshair,
    objectives: [
      'Build strongest team composition',
      'Manage economy',
      'Adapt to other players',
    ],
  },
];
