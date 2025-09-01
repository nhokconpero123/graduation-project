import { LucideIcon } from 'lucide-react';

export interface ChampionType {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  examples: string[];
  playstyle: string;
  difficulty: 1 | 2 | 3;
}

export const championTypes: ChampionType[] = [
  {
    id: 'assassin',
    name: 'Assassins',
    description: 'Agile champions specializing in killing priority targets quickly.',
    iconUrl: 'https://wiki.leagueoflegends.com/en-us/images/Slayer_icon.png?dde86',
    examples: ['Zed', 'Katarina', 'Akali'],
    playstyle: 'High burst damage, mobility, target selection',
    difficulty: 3
  },
  {
    id: 'fighter',
    name: 'Fighters',
    description: 'Durable champions that excel in sustained close-quarters combat.',
    iconUrl: 'https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png',
    examples: ['Darius', 'Irelia', 'Riven'],
    playstyle: 'Sustained damage, durability, close combat',
    difficulty: 2
  },
  {
    id: 'mage',
    name: 'Mages',
    description: 'Spell-casting champions with powerful area control abilities.',
    iconUrl: 'https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Mage_icon.png',
    examples: ['Lux', 'Ahri', 'Syndra'],
    playstyle: 'Area damage, crowd control, zone control',
    difficulty: 2
  },
  {
    id: 'marksman',
    name: 'Marksmen',
    description: 'Ranged champions that deal consistent damage from afar.',
    iconUrl: 'https://static.wikia.nocookie.net/leagueoflegends/images/7/7f/Marksman_icon.png',
    examples: ['Jinx', 'Caitlyn', 'Ashe'],
    playstyle: 'Sustained ranged damage, positioning, scaling',
    difficulty: 3
  },
  {
    id: 'support',
    name: 'Supports',
    description: 'Utility champions that protect and empower their allies.',
    iconUrl: 'https://wiki.leagueoflegends.com/en-us/images/Support_icon.png?af1ff',
    examples: ['Thresh', 'Lulu', 'Nami'],
    playstyle: 'Team utility, vision control, protection',
    difficulty: 2
  },
  {
    id: 'tank',
    name: 'Tanks',
    description: 'Durable champions that absorb damage and protect their team.',
    iconUrl: 'https://static.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png',
    examples: ['Malphite', 'Leona', 'Nautilus'],
    playstyle: 'Damage absorption, crowd control, initiation',
    difficulty: 2
  },
];