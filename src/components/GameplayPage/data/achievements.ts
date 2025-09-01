// This file contains the data for achievements in the game.
// Each achievement has an ID, title, description, difficulty level, reward, and progress percentage.

export const achievements = [
  {
    id: 'pentakill',
    title: 'Pentakill Master',
    description: 'Score a pentakill in a single game',
    difficulty: 'hard',
    reward: 'Exclusive Pentakill Icon',
    progress: 0
  },
  {
    id: 'objectives',
    title: 'Objective Controller',
    description: 'Secure 5 dragons in a single game',
    difficulty: 'medium',
    reward: 'Dragon Master Emote',
    progress: 60
  },
  {
    id: 'farm',
    title: 'Perfect Farmer',
    description: 'Achieve 10 CS per minute in a game',
    difficulty: 'medium',
    reward: 'Farming Champion Icon',
    progress: 45
  },
  {
    id: 'vision',
    title: 'Vision Master',
    description: 'Achieve a vision score of 100 in a single game',
    difficulty: 'easy',
    reward: 'Ward Skin',
    progress: 80
  },
  {
    id: 'teamplayer',
    title: 'Ultimate Team Player',
    description: 'Get 20 assists in a single game',
    difficulty: 'easy',
    reward: 'Support Icon',
    progress: 90
  },
  {
    id: 'baron',
    title: 'Baron Slayer',
    description: 'Secure 3 Baron buffs in a single game',
    difficulty: 'hard',
    reward: 'Baron Emote',
    progress: 30
  }
];