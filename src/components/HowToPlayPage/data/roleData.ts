export interface Role {
  id: string;
  name: string;
  description: string;
  difficulty: 1 | 2 | 3;
  tips: string[];
  recommendedChampions: string[];
  iconUrl: string;
  backgroundUrl: string;
}

export const roles: Role[] = [
  {
    id: 'top',
    name: 'Top Lane',
    description: 'Solo warriors who excel in one-on-one combat.',
    difficulty: 2,
    iconUrl: 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-top.png',
    backgroundUrl: 'https://th.bing.com/th/id/OIP._ky9-SyO6j8cD4-PUxVXGwHaDt?rs=1&pid=ImgDetMain',
    tips: [
      'Focus on farming minions for gold and experience',
      'Watch the minimap for enemy jungler ganks',
      'Use Teleport to join important team fights'
    ],
    recommendedChampions: ['Darius', 'Garen', 'Mordekaiser']
  },
  {
    id: 'jungle',
    name: 'Jungle',
    description: 'Roaming strategists who control objectives and support lanes.',
    difficulty: 3,
    iconUrl: 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-jungle.png',
    backgroundUrl: 'https://assets1.ignimgs.com/thumbs/userUploaded/2017/1/24/lolwarwick-1485275121188_1280w.jpg',
    tips: [
      'Clear camps efficiently to maintain gold income',
      'Secure objectives like Dragon and Baron',
      'Help struggling lanes with well-timed ganks'
    ],
    recommendedChampions: ['Warwick', 'Master Yi', 'Amumu']
  },
  {
    id: 'mid',
    name: 'Mid Lane',
    description: 'Versatile champions who can roam and influence the map.',
    difficulty: 2,
    iconUrl: 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-middle.png',
    backgroundUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    tips: [
      'Control the wave to create roaming opportunities',
      'Help your jungler secure objectives',
      'Coordinate with your team for ganks'
    ],
    recommendedChampions: ['Lux', 'Annie', 'Ahri']
  },
  {
    id: 'adc',
    name: 'Bot Lane (ADC)',
    description: 'Ranged damage dealers who scale with items.',
    difficulty: 3,
    iconUrl: 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-bottom.png',
    backgroundUrl: 'https://www.mobafire.com/images/champion/skins/landscape/caitlyn-classic-762x.jpg',
    tips: [
      'Focus on last-hitting minions',
      'Position safely in teamfights',
      'Work with your support to control the lane'
    ],
    recommendedChampions: ['Ashe', 'Miss Fortune', 'Caitlyn']
  },
  {
    id: 'support',
    name: 'Support',
    description: 'Utility-focused champions who protect and enable their team.',
    difficulty: 1,
    iconUrl: 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-utility.png',
    backgroundUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg',
    tips: [
      'Protect your ADC during the laning phase',
      'Maintain vision control around objectives',
      'Engage or peel in teamfights'
    ],
    recommendedChampions: ['Soraka', 'Lulu', 'Leona']
  }
];