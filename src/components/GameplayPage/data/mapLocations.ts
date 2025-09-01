// This file contains the map locations and their details for the gameplay page.
// Each location has an ID, name, position (x, y), description, and a list of tips.
// The data is structured as an array of objects, where each object represents a specific map location.
// The map locations include Baron Pit, Dragon Pit, Blue Team Base, Red Team Base, Top Lane, Bot Lane, Mid Lane, Blue Side Jungle, and Red Side Jungle.
export const mapLocations = [
  {
    id: 'baron',
    name: 'Baron Pit',
    position: { x: 31, y: 31 },
    description: 'Home of the powerful Baron Nashor buff.',
    tips: [
      'Secure vision control before attempting',
      'Usually contested after 20 minutes',
      'Requires team coordination',
      'Watch for enemy steal attempts'
    ]
  },
  {
    id: 'dragon',
    name: 'Dragon Pit',
    position: { x: 68, y: 68 },
    description: 'Location of elemental dragons and elder dragon.',
    tips: [
      'Priority objective early game',
      'Different dragons provide unique buffs',
      'Elder dragon is game-changing late game',
      'Control vision around pit'
    ]
  },
  {
    id: 'blue-spawn',
    name: 'Blue Team Base',
    position: { x: 0, y: 92 },
    description: 'Starting point for the blue team.',
    tips: [
      'Defend your inhibitors',
      'Use fountain to heal quickly',
      'Buy items before leaving',
      'Watch for backdoor attempts'
    ]
  },
  {
    id: 'red-spawn',
    name: 'Red Team Base',
    position: { x: 95, y: 9 },
    description: 'Starting point for the red team.',
    tips: [
      'Coordinate team movements',
      'Protect your Nexus',
      'Use shop efficiently',
      'Guard against split pushing'
    ]
  },
  {
    id: 'top-spawn',
    name: 'Top Lane ',
    position: { x: 15, y: 15 },
    description: 'Top lane minion meet point.',
    tips: [
      'Watch for early ganks',
      'Control wave for freezing',
      'Use bushes for vision control',
      'Coordinate with jungler'
    ]
  },
  {
    id: 'bot-spawn',
    name: 'Bot Lane ',
    position: { x: 85, y: 85 },
    description: 'Bot lane minion meet point.',
    tips: [
      'Coordinate with support',
      'Maintain vision control',
      'Watch for dragon fights',
      'Control wave for objectives'
    ]
  },
  
  {
    id: 'mid',
    name: 'Mid Lane',
    position: { x: 50, y: 50 },
    description: 'Central lane with shortest path between bases.',
    tips: [
      'Important for map control',
      'Good for roaming to other lanes',
      'Key area for vision control',
      'Most contested lane'
    ]
  },
  {
    id: 'blue-side',
    name: 'Blue Side Jungle',
    position: { x: 30, y: 50 },
    description: 'Blue team\'s jungle territory.',
    tips: [
      'Secure buffs early',
      'Ward entrances',
      'Counter jungle when ahead',
      'Track enemy jungler'
    ]
  },
  {
    id: 'red-side',
    name: 'Red Side Jungle',
    position: { x: 50, y: 30 },
    description: 'Red team\'s jungle territory.',
    tips: [
      'Protect buff camps',
      'Maintain vision control',
      'Look for gank opportunities',
      'Contest scuttle crab'
    ]
  }
];