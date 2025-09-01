// This file contains the highlights data for the gameplay page.
// Each highlight has an ID, title, description, thumbnail image URL, YouTube URL, type (pro-play or community), player name, and view count.
// The data is structured as an array of objects, where each object represents a specific highlight.  
export interface Highlight {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  type: 'pro-play' | 'community';
  player: string;
  views: number;
}

export const highlights: Highlight[] = [
  {
    id: 'worlds-2023-finale',
    title: 'Worlds 2023 Final Moment',
    description:
      'The incredible teamfight that decided the World Championship.',
    thumbnail:
      'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/10/09/Worlds-2023-Play-In-stage.jpg?width=1200&quality=60&format=auto',
    youtubeUrl:
      'https://www.youtube.com/watch?v=DG77vnOvSPw&ab_channel=Caedrel',
    type: 'pro-play',
    player: 'T1 vs WBG',
    views: 5000000,
  },
  {
    id: 'faker-outplay',
    title: "Faker's Legendary Zed Play",
    description: 'The iconic 1v1 outplay that defined a generation.',
    thumbnail: 'https://i.ytimg.com/vi/ZPCfoCVCx3U/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=ZPCfoCVCx3U',
    type: 'pro-play',
    player: 'Faker',
    views: 10000000,
  },
  {
    id: 'pentakill-outplay',
    title: 'Fakers first and only Pentakill of his Career',
    description: 'Amazing mechanical outplay resulting in a pentakill.',
    thumbnail:
      'https://i.ytimg.com/vi/t6rK3GDcIfA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCEPlHaShqLkpCpo0AynMtWDTFzAw',
    youtubeUrl:
      'https://www.youtube.com/watch?v=eZtTMGqGr1s&ab_channel=TodayonTwitch',
    type: 'pro-play',
    player: 'Faker',
    views: 2500000,
  },
  {
    id: 'baron-steal',
    title: 'TOP 10 LCS BARON STEALS OF ALL TIME',
    description: 'Blind Baron steal that turned the game around.',
    thumbnail: 'https://i.ytimg.com/vi/aZ5cJtHfa7g/maxresdefault.jpg',
    youtubeUrl:
      'https://www.youtube.com/watch?v=otgbHK6-AKw&ab_channel=LTANorth',
    type: 'community',
    player: 'TheLegendPlayer',
    views: 1800000,
  },
  {
    id: 'team-combo',
    title: 'Top 5 EPIC Wombo Combos in LoL Esports History',
    description: 'Perfectly executed 5-man team combination.',
    thumbnail: 'https://i.ytimg.com/vi/-ehKjf4snMQ/maxresdefault.jpg',
    youtubeUrl:
      'https://www.youtube.com/watch?v=-ehKjf4snMQ&ab_channel=LCKGlobal',
    type: 'community',
    player: 'TeamworkOP',
    views: 1200000,
  },
];
