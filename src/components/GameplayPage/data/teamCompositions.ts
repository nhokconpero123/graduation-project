// This file contains the data for different team compositions in League of Legends.
// Each composition has an ID, name, description, playstyle, difficulty level, and a list of champions.
// The data is structured as an array of objects, where each object represents a specific team composition.
// The compositions include Engage, Poke, Protect the Carry, and Split Push.
// The data can be used to display information about the team compositions on a website or application.
// The compositions include Engage, Poke, Protect the Carry, and Split Push.
// This file contains the data for different team compositions in League of Legends.
// Each composition has an ID, name, description, playstyle, difficulty level, and a list of champions.
// The data is structured as an array of objects, where each object represents a specific team composition.
// The compositions include Engage, Poke, Protect the Carry, and Split Push.
// The data can be used to display information about the team compositions on a website or application.
// The compositions include Engage, Poke, Protect the Carry, and Split Push.
// This file contains the data for different team compositions in League of Legends.
// Each composition has an ID, name, description, playstyle, difficulty level, and a list of champions.
// The data is structured as an array of objects, where each object represents a specific team composition.
// The compositions include Engage, Poke, Protect the Carry, and Split Push.  
export const teamCompositions = [
  {
    id: 'engage',
    name: 'Engage Composition',
    description: 'Team focused on initiating fights and hard engaging on enemies.',
    playstyle: 'Aggressive, team fight oriented',
    difficulty: 2,
    champions: [
      { name: 'Malphite', role: 'Top', image: 'https://wiki.leagueoflegends.com/en-us/images/Malphite_OriginalSquare.png?4a8e1'},
      { name: 'Jarvan IV', role: 'Jungle', image: 'https://wiki.leagueoflegends.com/en-us/images/Jarvan_IV_OriginalSquare.png?f86f2' },
      { name: 'Orianna', role: 'Mid', image: 'https://wiki.leagueoflegends.com/en-us/images/Orianna_OriginalSquare.png?42019' },
      { name: 'Miss Fortune', role: 'ADC', image:' https://wiki.leagueoflegends.com/en-us/images/Miss_Fortune_OriginalSquare.png?955f4' },
      { name: 'Leona', role: 'Support', image: 'https://wiki.leagueoflegends.com/en-us/images/Leona_OriginalSquare.png?c955e' }
    ]
  },
  {
    id: 'poke',
    name: 'Poke Composition',
    description: 'Team that excels at long-range harassment and siege.',
    playstyle: 'Control oriented, siege focused',
    difficulty: 3,
    champions: [
      { name: 'Jayce', role: 'Top', image: 'https://wiki.leagueoflegends.com/en-us/images/Jayce_ArcaneInventorSquare.png?c23bb ' },
      { name: 'Nidalee', role: 'Jungle', image: 'https://wiki.leagueoflegends.com/en-us/images/Nidalee_OriginalSquare.png?966a1' },
      { name: 'Xerath', role: 'Mid', image: 'https://wiki.leagueoflegends.com/en-us/images/Xerath_OriginalSquare.png?1fd0d' },
      { name: 'Ezreal', role: 'ADC', image: 'https://wiki.leagueoflegends.com/en-us/images/Ezreal_OriginalSquare.png?77eed' },
      { name: 'Karma', role: 'Support', image: 'https://wiki.leagueoflegends.com/en-us/images/Karma_OriginalSquare.png?97c07 ' }
    ]
  },
  {
    id: 'protect',
    name: 'Protect the Carry',
    description: 'Team built around protecting and enabling a single hypercarry.',
    playstyle: 'Defensive, late-game scaling',
    difficulty: 3,
    champions: [
      { name: 'Shen', role: 'Top', image: 'https://wiki.leagueoflegends.com/en-us/images/Shen_OriginalSquare.png?361e1' },
      { name: 'Ivern', role: 'Jungle', image: 'https://wiki.leagueoflegends.com/en-us/images/Ivern_OriginalSquare.png?5126d' },
      { name: 'Lulu', role: 'Mid', image: 'https://wiki.leagueoflegends.com/en-us/images/Lulu_OriginalSquare.png?3242c' },
      { name: 'Kog\'Maw', role: 'ADC', image: 'https://wiki.leagueoflegends.com/en-us/images/Kog%27Maw_OriginalSquare.png?0fbb9' },
      { name: 'Janna', role: 'Support', image: 'https://wiki.leagueoflegends.com/en-us/images/Janna_OriginalSquare.png?6c38a' }
    ]
  },
  {
    id: 'splitpush',
    name: 'Split Push',
    description: 'Team focused on map pressure and objective control through splitting.',
    playstyle: 'Map pressure, objective control',
    difficulty: 3,
    champions: [
      { name: 'Fiora', role: 'Top', image: 'https://wiki.leagueoflegends.com/en-us/images/Fiora_OriginalSquare.png?44142 ' },
      { name: 'Nunu', role: 'Jungle', image: 'https://wiki.leagueoflegends.com/en-us/images/Nunu_OriginalSquare.png?9d78b' },
      { name: 'Twisted Fate', role: 'Mid', image: 'https://wiki.leagueoflegends.com/en-us/images/Twisted_Fate_OriginalSquare.png?e3930' },
      { name: 'Sivir', role: 'ADC', image: 'https://wiki.leagueoflegends.com/en-us/images/Sivir_OriginalSquare.png?7427a' },
      { name: 'Zilean', role: 'Support', image: 'https://wiki.leagueoflegends.com/en-us/images/Zilean_OriginalSquare.png?8a9f3' }
    ]
  }
];