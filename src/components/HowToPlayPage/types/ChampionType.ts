export interface ChampionType {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  examples: string[];
  playstyle: string;
  difficulty: 1 | 2 | 3;
}