// This file contains the data for the game events in League of Legends.
// Each event has an ID, title, description, start and end date, image URL, and rewards.
// The data is structured as an array of objects, where each object represents a specific event.  
// The events include various game modes and special events that players can participate in.
// The data can be used to display information about the events on a website or application.
// The events include Ultra Rapid Fire, Ascension, Dark Star: Singularity, Doom Bots, Hunt of the Blood Moon, and Odyssey: Extraction.
// This file contains the data for the game events in League of Legends.
// Each event has an ID, title, description, start and end date, image URL, and rewards.
// The data is structured as an array of objects, where each object represents a specific event.
// The events include various game modes and special events that players can participate in.  
export const gameEvents = [
  {
    id: 'urf-2024',
    title: 'Ultra Rapid Fire',
    description: 'Experience the chaos of URF mode with reduced cooldowns and unlimited mana!',
    startDate: 'March 1, 2024',
    endDate: 'March 15, 2024',
    image: 'https://staticg.sportskeeda.com/editor/2024/01/93a9c-17044874075481-1920.jpg?w=840',
    rewards: ['URF Champion Icon', 'URF Emote']
  },
  {
    id: 'ascension',
    title: 'Ascension',
    description: 'Battle for ascended power in the Crystal Scar!',
    startDate: 'March 20, 2024',
    endDate: 'April 3, 2024',
    image: 'https://dotesports.com/wp-content/uploads/2023/07/is-the-ascension-game-mode-ever-returning-to-lol.jpg?resize=768',
    rewards: ['Ascended Icon', 'Special Border', 'Event Tokens']
  },
  {
    id: 'dark-star',
    title: 'Dark Star: Singularity',
    description: 'Pull your enemies into the void in this cosmic game mode!',
    startDate: 'April 10, 2024',
    endDate: 'April 24, 2024',
    image: 'https://wiki.leagueoflegends.com/en-us/images/thumb/FGM_Dark_Star_Singularity.png/800px-FGM_Dark_Star_Singularity.png?d73be',
    rewards: ['Dark Star Icon', 'Cosmic Emote', 'Dark Matter Tokens']
  },
  {
    id: 'doom-bots',
    title: 'Doom Bots',
    description: 'Face off against super-powered bot champions!',
    startDate: 'May 1, 2024',
    endDate: 'May 15, 2024',
    image: 'https://th.bing.com/th/id/OIP.EsW5pdVRcifQEObQj24roAHaEK?rs=1&pid=ImgDetMain',
    rewards: ['Doom Icon', 'Challenge Emote', 'Special Ward Skin']
  },
  {
    id: 'blood-moon',
    title: 'Hunt of the Blood Moon',
    description: 'Assassinate your targets in this deadly hunting ground!',
    startDate: 'May 20, 2024',
    endDate: 'June 3, 2024',
    image: 'https://wallpaperaccess.com/full/91175.jpg',
    rewards: ['Blood Moon Icon', 'Assassin Border', 'Event Chroma']
  },
  {
    id: 'odyssey',
    title: 'Odyssey: Extraction',
    description: 'Team up to fight against alien threats in space!',
    startDate: 'June 10, 2024',
    endDate: 'June 24, 2024',
    image: 'https://assetsio.gnwcdn.com/leagueoflegendsodysseyextractionmissionsguide.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp',
    rewards: ['Space Explorer Icon', 'Odyssey Emote', 'Special Mission Rewards']
  }
];