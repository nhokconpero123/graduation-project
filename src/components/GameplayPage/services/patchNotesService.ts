export interface PatchNote {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
  type: 'feature' | 'balance' | 'bugfix';
  changes: string[];
}

// Mock data since we can't directly access the League API
export const fetchPatchNotes = async (): Promise<PatchNote[]> => {
  return [
    {
      id: 'patch-14-4',
      title: 'Patch 14.4 Notes',
      description: 'Major balance changes and system updates',
      date: 'February 21, 2024',
      url: 'https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-4-notes/',
      type: 'balance',
      changes: [
        'Adjusted champion balance across multiple roles',
        'Updated jungle camp behavior',
        'Modified item stats and effects',
        'Improved game performance'
      ]
    },
    {
      id: 'patch-14-3',
      title: 'Patch 14.3 Notes',
      description: 'Champion updates and system improvements',
      date: 'February 7, 2024',
      url: 'https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-3-notes/',
      type: 'feature',
      changes: [
        'New champion skins released',
        'Major champion ability updates',
        'Ranked system improvements',
        'Bug fixes and optimizations'
      ]
    },
    {
      id: 'patch-14-2',
      title: 'Patch 14.2 Notes',
      description: 'Critical bug fixes and balance updates',
      date: 'January 24, 2024',
      url: 'https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-2-notes/',
      type: 'bugfix',
      changes: [
        'Fixed critical gameplay bugs',
        'Adjusted champion interactions',
        'Improved client stability',
        'Updated visual effects'
      ]
    }
  ];
};