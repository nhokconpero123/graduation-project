// This file contains the data for the game updates section of the gameplay page.
// Each update has an ID, title, description, date, type (feature, balance, bugfix), and a list of changes.
// The data is structured as an array of objects, where each object represents a specific game update.
//       'Prioritize dragons and barons',
//       'Use vision control to secure objectives',
//       'Communicate with your team',
//       'Be aware of enemy jungler position'

export const gameUpdates = [
  {
    id: 'patch-14-1',
    title: 'Patch 14.1 Updates',
    description: 'Major changes to Summoner\'s Rift objectives and champion balance.',
    date: 'January 15, 2024',
    type: 'feature',
    changes: [
      'New dragon soul mechanics',
      'Baron buff rework',
      'Tower plating adjustments',
      'Multiple champion balance changes'
    ]
  },
  {
    id: 'aram-changes',
    title: 'ARAM Improvements',
    description: 'Quality of life updates for ARAM mode.',
    date: 'February 1, 2024',
    type: 'balance',
    changes: [
      'New champion-specific buffs/nerfs',
      'Snowball cooldown reduced',
      'Health relic spawn rate increased',
      'Starting gold adjusted'
    ]
  },
  {
    id: 'bugfixes',
    title: 'Critical Bug Fixes',
    description: 'Addressing various gameplay issues and bugs.',
    date: 'February 15, 2024',
    type: 'bugfix',
    changes: [
      'Fixed minimap visibility issues',
      'Corrected item interaction bugs',
      'Resolved champion ability bugs',
      'Fixed client performance issues'
    ]
  }
];