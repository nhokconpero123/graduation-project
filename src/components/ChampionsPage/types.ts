export interface ChampionStatistics {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface ChampionSkin {
  name: string;
  image: string;
  price: string;
}

export interface ChampionAbilities {
  passive: string;
  q: string;
  w: string;
  e: string;
  r: string;
  passiveVideo?: string;
  qVideo?: string;
  wVideo?: string;
  eVideo?: string;
  rVideo?: string;
}

export interface Champion {
  id: string;
  name: string;
  roles: string[];
  image: string;
  lore: string;
  stats: ChampionStatistics;
  baseStats?: {
    health: string;
    armor: string;
    attackDamage: string;
    attackSpeed: string;
  };
  abilities?: ChampionAbilities;
  skins: ChampionSkin[];
  difficulty: string;
  title?: string;
}

export type Role = 'Top' | 'Jungle' | 'Mid' | 'ADC' | 'Support';
export type Difficulty = 'Easy' | 'Moderate' | 'Hard';