import { Champion } from '../types';

export const champions: Champion[] = [
  {
    id: 'aatrox',
    name: 'Aatrox',
    roles: ['Top', 'Fighter'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    lore: 'Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence.',
    stats: {
      attack: 80,
      defense: 60,
      magic: 30,
      difficulty: 65,
    },
    baseStats: {
      health: '650',
      armor: '38',
      attackDamage: '60',
      attackSpeed: '0.651',
    },
    abilities: {
      passive:
        "Deathbringer Stance - Periodically, Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's maximum health.",
      q: 'The Darkin Blade - Aatrox slams his greatsword down in a designated location. He can swing three times, each with different areas of effect.',
      w: 'Infernal Chains - Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged back to the center and take the damage again.',
      e: 'Umbral Dash - Passively, Aatrox heals for a portion of the damage he deals. On activation, he dashes in a direction.',
      r: 'World Ender - Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining movement speed and increased healing. On champion takedowns, this effect is extended.',
      passiveVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.webm',
      qVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_Q1.webm',
      wVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_W1.webm',
      eVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_E1.webm',
      rVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_R1.webm',
    },
    skins: [
      {
        name: 'Default',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
        price: '1000',
      },
      {
        name: 'Justicar Aatrox',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_1.jpg',
        price: '975',
      },
      {
        name: 'Mecha Aatrox',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_2.jpg',
        price: '1350',
      },
      {
        name: 'Sea Hunter Aatrox',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_3.jpg',
        price: '750',
      },
      {
        name: 'Blood Moon Aatrox',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_7.jpg',
        price: '1350',
      },
      {
        name: 'Prestige Blood Moon Aatrox',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_8.jpg',
        price: 'Prestige',
      },
      {
        name: 'Victorious Aatrox',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_9.jpg',
        price: 'Special',
      },
      {
        name: 'Odyssey Aatrox',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_11.jpg',
        price: '1350',
      },
      {
        name: 'Lunar Eclipse Aatrox',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_21.jpg',
        price: '1350',
      },
      {
        name: 'DRX Aatrox',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_30.jpg',
        price: '1350',
      },
      {
        name: 'Prestige DRX Aatrox',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_31.jpg',
        price: 'Special',
      },
      {
        name: 'Primordian Aatrox',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_33.jpg',
        price: '1820',
      },
    ],
  },
  {
    id: 'ahri',
    name: 'Ahri',
    roles: ['Mid', 'Mage'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    lore: "Innately connected to the magic of the spirit realm, Ahri is a mysterious vastayan fox-mage who seeks to understand her place in the world. Having become a somewhat reluctant and empathetic predator since entering mortal society, she prefers to manipulate her prey's emotions before partaking of their life essence—receiving flashes of memory and insight from each soul she consumes.",
    stats: {
      attack: 50,
      defense: 40,
      magic: 85,
      difficulty: 65,
    },
    baseStats: {
      health: '590',
      armor: '21',
      attackDamage: '53',
      attackSpeed: '0.668',
    },
    abilities: {
      passive:
        'Essence Theft - Ahri gains a stack of Essence Theft when hitting enemy champions with her abilities, up to a maximum of 3 stacks. When she has 3 stacks, her next ability heals her for each enemy hit.',
      q: 'Orb of Deception - Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back.',
      w: 'Fox-Fire - Ahri releases three fox-fires that lock onto and attack nearby enemies.',
      e: 'Charm - Ahri blows a kiss that damages and charms an enemy it encounters, causing them to walk harmlessly towards her.',
      r: 'Spirit Rush - Ahri dashes and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown.',
      passiveVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm',
      qVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_Q1.webm',
      wVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_W1.webm',
      eVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_E1.webm',
      rVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_R1.webm',
    },
    skins: [
      {
        name: 'Default',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
        price: 'Default',
      },
      {
        name: 'Dynasty Ahri',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_1.jpg',
        price: '975',
      },
      {
        name: 'Midnight Ahri',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_2.jpg',
        price: '750',
      },
      {
        name: 'Foxfire Ahri',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_3.jpg',
        price: '975',
      },
      {
        name: 'Popstar Ahri',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_4.jpg',
        price: '975',
      },
      {
        name: 'Challenger Ahri',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_5.jpg',
        price: '975',
      },
      {
        name:'Academy Ahri',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_6.jpg',
        price: '975',
      },
      {
        name:'Arcane Ahri',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_7.jpg',
        price: '975',
      },
      {
        name:'Star Guardian Ahri',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_14.jpg',
        price: '975',
      },
      {
        name:'K/DA Ahri',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_15.jpg',
        price: '1350',
      },
      {
        name:'Prestige K/DA ALL OUT Ahri',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_16.jpg',
        price: 'Prestige',
      },
      {
        name:'Elederwood Ahri',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_17.jpg',
        price: '975',
      },
      {
        name:'Spirit Blossom Ahri',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg',
        price: '975',
      },
      {
        name:'K/DA ALL OUT Ahri',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_28.jpg',
        price: '1350',
      },
      {
        name:'Conven Ahri',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_42.jpg',
        price: '975',
      },
      {
        name:'Arcana Ahri',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_66.jpg',
        price: '1350',
      },
      {
        name:'Snow Moon Arhi',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_76.jpg',  
        price: '1350',
      },
      {
        name:'Risen Legend Ahri',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_85.jpg',
        price: 'legendary',
      },
      {
        name:'Immortaled Legend Ahri',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_86.jpg',
        price: 'legendary',
      },





    ],
  },
  {
    id: 'akali',
    name: 'Akali',
    roles: ['Mid', 'Assassin'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    lore: 'Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.',
    stats: {
      attack: 65,
      defense: 45,
      magic: 75,
      difficulty: 70,
    },
    baseStats: {
      health: '575',
      armor: '23',
      attackDamage: '62.4',
      attackSpeed: '0.625',
    },
    abilities: {
      passive:
        "Assassin's Mark - Dealing spell damage to a champion creates a ring of energy around them. Exiting that ring empowers Akali's next autoattack with bonus range and damage.",
      q: 'Five Point Strike - Akali throws kunai in a cone, dealing damage and slowing enemies hit.',
      w: "Twilight Shroud - Akali drops a cover of smoke and briefly gains movement speed. While inside the shroud, Akali becomes invisible and can't be targeted by enemy abilities or attacks.",
      e: 'Shuriken Flip - Akali flips backward and fires a shuriken forward, marking the first enemy hit. Re-cast to dash to the marked target.',
      r: 'Perfect Execution - Akali dashes in a direction, dealing damage to enemies in her path. Re-cast to dash again, executing low-health enemies.',
      passiveVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_P1.webm',
      qVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_Q1.webm',
      wVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_W1.webm',
      eVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_E1.webm',
      rVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_R1.webm',
    },
    skins: [
      {
        name: 'Default',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
        price: 'Default',
      },
      {
        name: 'Stinger Akali',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_1.jpg',
        price: '520',
      },
      {
        name: 'Infernal Akali',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_2.jpg',
        price: '975',
      },
      {
        name: 'All-star Akali',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_3.jpg',
        price: '750',
      },
      {
        name: 'Nurse Akali',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_4.jpg',
        price: '975',
      },
      {
        name: 'Blood Moon Akali',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_5.jpg',
        price: '975',
      },
      {
        name: 'K/DA Akali',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_13.jpg',
        price: '1350',
      },
    ],
  },
  {
    id: 'akshan',
    name: 'Akshan',
    roles: ['Mid', 'Marksman'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg',
    lore: 'Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they least expect him. With a keen sense of justice and a legendary weapon of Sentinel make, Akshan defends the innocent as a Sentinel of Light.',
    stats: {
      attack: 85,
      defense: 35,
      magic: 30,
      difficulty: 70,
    },
    baseStats: {
      health: '630',
      armor: '26',
      attackDamage: '52',
      attackSpeed: '0.638',
    },
    abilities: {
      passive:
        "Dirty Fighting - Every three hits from Akshan's attacks and abilities deals bonus physical damage. If the target was a champion, Akshan also gains a shield.",
      q: 'Avengerang - Akshan throws a boomerang that deals physical damage and reveals enemies hit, extending its range each time it hits an enemy.',
      w: 'Going Rogue - Akshan becomes camouflaged and gains move speed toward scoundrels. He can revive allied champions killed by scoundrels by taking them down.',
      e: 'Heroic Swing - Akshan fires a hookshot that embeds in terrain. While embedded, he can recast to swing around the terrain in the cast direction.',
      r: 'Comeuppance - Akshan locks onto an enemy champion and charges up shots that deal physical damage. He can move while charging and cancel early to fire the shots.',
      passiveVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_P1.webm',
      qVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_Q1.webm',
      wVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_W1.webm',
      eVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_E1.webm',
      rVideo:
        'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_R1.webm',
    },
    skins: [
      
      {
        name: 'Default',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg',
        price: 'Default',
      },
      {
        name: 'Cyber Pop Akshan',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_1.jpg',
        price: '1350',
      },
      {
        name: 'Crystal Rose Akshan',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_2.jpg',
        price: '1350',
      },
    ],
  },
  {
    id: 'alistar',
    name: 'Alistar',
    roles: ['Support', 'Tank'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
    lore: 'A mighty warrior with an unbreakable will, Alistar is an imposing champion of the Minotaur tribes. Though he was enslaved and forced into gladiatorial servitude, his unbreakable spirit was never truly broken. Now, free of the chains of his former masters, Alistar fights for the downtrodden and the wrongly oppressed.',
    stats: {
      attack: 45,
      defense: 85,
      magic: 35,
      difficulty: 55,
    },
    baseStats: {
      health: '600',
      armor: '35',
      attackDamage: '62',
      attackSpeed: '0.625',
    },
    abilities: {
      passive:
        'Triumphant Roar - Alistar charges his roar by stunning or displacing enemy champions, healing nearby allied champions.',
      q: 'Pulverize - Alistar smashes the ground, dealing damage and launching nearby enemies into the air.',
      w: 'Headbutt - Alistar dashes to an enemy and knocks them back, dealing damage.',
      e: 'Trample - Alistar tramples nearby enemies, dealing damage and gaining the ability to stun them.',
      r: 'Unbreakable Will - Alistar lets out a battle roar, removing all crowd control effects and reducing incoming damage.',
      passiveVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_P1.mp4',
      qVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_Q1.mp4',
      wVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_W1.mp4',
      eVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_E1.mp4',
      rVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_r1.mp4',
    },
    skins: [
      {
        name: 'Default',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
        price: 'Default',
      },
      {
        name: 'Black Alistar',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_1.jpg',
        price: 'Legacy',
      },
      {
        name: 'Golden Alistar',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_2.jpg',
        price: '975',
      },
      {
        name: 'Matador Alistar',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_3.jpg',
        price: '975',
      },
      {
        name:'Longhorn Alistar',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_4.jpg', 
        price:'520',
      },
      {
        name:'Unchained Alistar',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_5.jpg', 
        price:'520',
      },
      {
        name:'Infernal Alistar',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_6.jpg',
        price:'1350',
      },
      {
        name:'Sweeper Alistar',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_7.jpg',
        price:'1350',
      },
      {
        name:' Narauder Alistar',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_8.jpg',  
        price:'520',
      },
      {
        name:'SKT T1 Alistar',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_9.jpg',
        price:'750',
      },
      {
        name:'Moo Cow Alistar',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_10.jpg',
        price:'520',
      },
      {
        name: 'Hextech Alistar',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_11.jpg',
        price:'520',
      },
      {
        name:'Conqueror Alistar',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_12.jpg',
        price:'1350',
      },
      {
        name:'Blackfost Alistar',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_13.jpg',
        price:'1350',
      },
      {
        name:'Lunar Alistar',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_14.jpg',
        price:'1350',
      },
    ],
  },
  {
    id: 'ambessa',
    name: 'Ambessa Medarda',
    roles: ['Fighter', 'Tank'],
    difficulty: 'Medium',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ambessa_0.jpg',
    lore: 'A formidable warlord and master strategist, Ambessa Medarda commands both respect and fear. As a powerful figure in Noxian politics and warfare, she has carved her path with cunning and brute strength. Ruthless and unwavering, she pursues dominance through both intellect and might, ensuring her legacy remains unchallenged.',
    stats: {
      attack: 85,
      defense: 80,
      magic: 30,
      difficulty: 60,
    },
    baseStats: {
      health: '600',
      armor: '40',
      attackDamage: '65',
      attackSpeed: '0.7',
    },
    abilities: {
      passive:
        "Warlord’s Dominance - Ambessa gains bonus armor and tenacity when surrounded by multiple enemies.",
      q: 'Cleave and Conquer - Ambessa swings her massive blade in an arc, dealing damage and healing based on enemies hit.',
      w: 'Imperial Command - She slams the ground, slowing enemies and empowering her next basic attack with bonus damage.',
      e: 'Noxian Endurance - Ambessa gains a temporary shield and increased movement speed when moving towards enemies.',
      r: 'Final Judgment - Ambessa leaps into the air and crashes down with immense force, dealing massive damage and stunning enemies caught in the impact zone.',
      passiveVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0799/ability_0799_P1.mp4',
      qVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0799/ability_0799_Q1.mp4',
      wVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0799/ability_0799_W1.mp4',
      eVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0799/ability_0799_E1.mp4',
      rVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0799/ability_0799_R1.mp4',
    },
    skins: [
      {
        name: 'Warlord Ambessa',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ambessa_1.jpg',
        price: '1350',
      },
      {
        name: 'Crimson Conqueror Ambessa',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ambessa_2.jpg',
        price: '1820',
      },
    ],
  },
  {
    id: 'amumu',
    name: 'Amumu',
    roles: ['Tank', 'Mage'],
    difficulty: 'Easy',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    lore: 'Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages.',
    stats: {
      attack: 25,
      defense: 75,
      magic: 70,
      difficulty: 30,
    },
    baseStats: {
      health: '615',
      armor: '30',
      attackDamage: '53',
      attackSpeed: '0.638',
    },
    abilities: {
      passive:
        "Cursed Touch - Amumu's basic attacks curse enemies, causing them to take bonus true damage from magic damage.",
      q: 'Bandage Toss - Amumu throws a bandage at a target location, pulling himself to enemies hit and dealing magic damage.',
      w: 'Despair - Toggle: Nearby enemies lose a percentage of their maximum health as magic damage.',
      e: 'Tantrum - Amumu takes reduced physical damage and can slam the ground to deal magic damage to nearby enemies.',
      r: 'Curse of the Sad Mummy - Amumu entangles nearby enemy champions, dealing magic damage and rendering them unable to move.',
      passiveVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_P1.mp4',
      qVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_Q1.mp4',
      wVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_W1.mp4',
      eVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_E1.mp4',
      rVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_R1.mp4',},
    skins: [
      {
        name:'Default',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
        price:'Default',
      },
      {
        name: 'Pharaoh Amumu',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_1.jpg',
        price: '520',
      },
      {
        name: 'Vancouver Amumu',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_2.jpg',
        price: 'Legacy',
      },
      {
        name:'Emumu',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_3.jpg',
        price:'520',
      },
      {
        name:'Re-Gifted Amumu',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_4.jpg',
        price:'975',
      },
      {
        name:'Almost-Prom King Amumu',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_5.jpg',
        price:'975',
      },
      {
        name:'Little Knight Amumu',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_6.jpg',
        price:'975',
      },
      {
        name:'Sad Robot Amumu',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_7.jpg',
        price:'1820',
      },  
      {
        name:'Spurise Party Amumu', 
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_8.jpg',
        price:'975',
      },
      {
        name:'Hextech Amumu', 
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_9.jpg',
        price:'975',
      } ,
      {
        name:'pumkin Prince Amumu',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_10.jpg',
        price:'975',
      },
      {
        name:'Porcelain Amumu',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_11.jpg',
        price:'975',
      },
      {
        name:'Heartache Amumu',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_12.jpg',
        price:'975',
      },

    ],
  },
  {
    id: 'anivia',
    name: 'Anivia',
    roles: ['Mage', 'Support'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
    lore: 'Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland.',
    stats: {
      attack: 30,
      defense: 40,
      magic: 90,
      difficulty: 85,
    },
    baseStats: {
      health: '550',
      armor: '21',
      attackDamage: '51',
      attackSpeed: '0.625',
    },
    abilities: {
      passive:
        'Rebirth - Upon taking fatal damage, Anivia reverts to an egg form and is reborn if the egg survives.',
      q: 'Flash Frost - Anivia launches an orb of ice that explodes on command or upon reaching max range.',
      w: 'Crystallize - Anivia creates an impassable wall of ice.',
      e: 'Frostbite - Anivia launches a shard of ice that deals double damage to chilled targets.',
      r: 'Glacial Storm - Anivia creates a blizzard that damages and chills enemies.',
      passiveVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_P1.mp4',
      qVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_Q1.mp4',
      wVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_W1.mp4',
      eVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_E1.mp4',
      rVideo:'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_R1.mp4',
    },
    skins: [
      {
        name: 'Default',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
        price: 'Default',
      },
    
      {
        name: 'Team Spirit Anivia',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_1.jpg',
        price: '520',
      },
      {
        name: 'Bird of Prey Anivia',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_2.jpg',
        price: '520',
      },
      {
        name:'Noxus Hunter Anivia',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_3.jpg',
        price:'520',
      },
      {
        name:'Hextech Anivia',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_4.jpg',
        price:'750',
      },
      {
        name:'Blackfrost Anivia',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_5.jpg',
        price:'1820',
      },
      {
        name:'Prehistoric Anivia',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_6.jpg',
        price:'750',
      },
      {
        name:'Festival Queen Anivia',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_7.jpg',
        price:'975',
      },
      {
        name:'Paper craft Anivia',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_8.jpg',
        price:'1350',
      },
      {
        name:'Cosmic Flight Anivia',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_9.jpg',
        price:'1350',
      },
      {
        name:'Divine Anivia',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_10.jpg',
        price:'1350',
      },
      {
        name:'Bewitching Anivia',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_11.jpg',
        price:'1350',
      },
      {
        name:'victorious Anivia',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_12.jpg',
        price:'special',
      }

    ],
  },
  {
    id: 'annie',
    name: 'Annie',
    roles: ['Mage'],
    difficulty: 'Easy',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
    lore: 'Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these "playful tricks."',
    stats: {
      attack: 35,
      defense: 30,
      magic: 95,
      difficulty: 40,
    },
    baseStats: {
      health: '524',
      armor: '19',
      attackDamage: '50',
      attackSpeed: '0.625',
    },
    abilities: {
      passive:
        "Pyromania - After casting 4 spells, Annie's next offensive spell will stun the target.",
      q: 'Disintegrate - Annie hurls a fireball, dealing damage and refunding mana if it kills the target.',
      w: 'Incinerate - Annie releases a cone of fire, dealing damage to enemies in front of her.',
      e: 'Molten Shield - Annie grants herself or an ally a shield and returns damage to attackers.',
      r: 'Summon: Tibbers - Annie summons her bear Tibbers, dealing damage in an area and creating a powerful pet.',
      passiveVideo:
      'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_P1.webm',
    qVideo:
      'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_Q1.webm',
    wVideo:
      'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_W1.webm',
    eVideo:
      'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_E1.webm',
    rVideo: 
      'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_R1.webm',
    },
    skins: [
      {
        name: 'Goth Annie',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_1.jpg',
        price: 'Legacy',
      },
      {
        name: 'Red Riding Annie',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_2.jpg',
        price: '520',
      },
      {
        name:'Annie In Wonderland',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_3.jpg',
        price:'975',
      },
      {
        name:'Prom Queen Annie',
       image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_4.jpg',
        price:'1350',
      },
      {
        name:'Frostfire Annie',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_5.jpg',
        price:'1820',
      },
      {
        name:'Reverse Annie',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_6.jpg',
        price:'1350',
      },
      {
        name:'FrankenTibbers Annie',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_7.jpg',
        price:'1820',
      },
      {
        name:'Panda Annie',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_8.jpg',
        price:'975',
      },
      {
        name:'Sweetheart Annie',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_9.jpg',
        price:'1820',
      },
      {
        name:'Hextech Annie',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_10.jpg',
        price:'1820',
      },
      {
        name:'Super Galaxy Annie',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_11.jpg',
        price:'1350',
      },
      {
        name:'Annie-Versary',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_12.jpg',
        price:'1350',
      },
      {
        name:'Lunar Beast Annie',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_13.jpg',
        price:'1350',
      },
      {
        name:'Cafe Cutie Annie',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_14.jpg',
        price:'1350',
      },
      {
        name:'Fright Night Annie',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_15.jpg',
        price:'1350',
      },
      {
        name:'Winterblessed Annie',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_16.jpg',
        price:'1350',
      },
      {
        name:'Battle Princess Annie',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_17.jpg',
        price:'1350',
      }
    ],
  },
  {
    id: 'aphelios',
    name: 'Aphelios',
    roles: ['Marksman'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg',
    lore: "Emerging from moonlight's shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though all Lunari practice some form of nocturnal combat, none have mastered it quite like him.",
    stats: {
      attack: 90,
      defense: 30,
      magic: 60,
      difficulty: 100,
    },
    baseStats: {
      health: '530',
      armor: '28',
      attackDamage: '57',
      attackSpeed: '0.64',
    },
    abilities: {
      passive:
        'The Hitman and the Seer - Aphelios wields 5 different weapons, each with unique abilities.',
      q: 'Weapon Ability - Each weapon has a unique ability when activated.',
      w: 'Phase - Aphelios switches between his main-hand and off-hand weapon.',
      e: 'Weapon Queue - Aphelios cycles through his weapons in a fixed order.',
      r: "Moonlight Vigil - Aphelios fires a moon blast that applies his current weapon's effect.",
    },
    skins: [
      {
        name: 'Nightbringer Aphelios',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_1.jpg',
        price: '1350',
      },
    ],
  },
  {
    id: 'ashe',
    name: 'Ashe',
    roles: ['Marksman', 'Support'],
    difficulty: 'Easy',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    lore: 'Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice.',
    stats: {
      attack: 85,
      defense: 30,
      magic: 20,
      difficulty: 40,
    },
    baseStats: {
      health: '570',
      armor: '26',
      attackDamage: '59',
      attackSpeed: '0.658',
    },
    abilities: {
      passive:
        "Frost Shot - Ashe's attacks slow her target, and she deals bonus damage to slowed targets.",
      q: "Ranger's Focus - Ashe gains increased attack speed and her arrows split into multiple shots.",
      w: 'Volley - Ashe fires a volley of arrows in a cone, each dealing damage and slowing.',
      e: 'Hawkshot - Ashe sends her hawk spirit to scout an area, revealing enemies.',
      r: 'Enchanted Crystal Arrow - Ashe fires a huge arrow that stuns and damages the first enemy champion hit.',
    },
    skins: [
      {
        name: 'Freljord Ashe',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_1.jpg',
        price: '520',
      },
      {
        name: 'Sherwood Forest Ashe',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_2.jpg',
        price: '520',
      },
    ],
  },
  {
    id: 'aurelion-sol',
    name: 'Aurelion Sol',
    roles: ['Mage'],
    difficulty: 'Hard',
    image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
    lore: 'Aurelion Sol once graced the vast emptiness of space with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude.',
    stats: {
      attack: 25,
      defense: 40,
      magic: 85,
      difficulty: 90,
    },
    baseStats: {
      health: '575',
      armor: '19',
      attackDamage: '57',
      attackSpeed: '0.625',
    },
    abilities: {
      passive:
        'Center of the Universe - Stars orbit Aurelion Sol, dealing damage to enemies they strike.',
      q: 'Starsurge - Aurelion Sol creates an expanding celestial ring that stuns and damages enemies.',
      w: 'Celestial Expansion - Aurelion Sol pushes his stars out for increased damage.',
      e: 'Comet of Legend - Aurelion Sol flies in the target direction, gaining movement speed.',
      r: 'Voice of Light - Aurelion Sol projects a blast of pure starfire, dealing damage and pushing enemies back.',
    },
    skins: [
      {
        name: 'Ashen Lord Aurelion Sol',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_1.jpg',
        price: '1350',
      },
    ],
  },
  {
    id: 'azir',
    name: 'Azir',
    roles: ['Mage', 'Marksman'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
    lore: 'Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended being of immense power.',
    stats: {
      attack: 60,
      defense: 30,
      magic: 80,
      difficulty: 95,
    },
    baseStats: {
      health: '552',
      armor: '19.04',
      attackDamage: '52',
      attackSpeed: '0.625',
    },
    abilities: {
      passive:
        "Shurima's Legacy - Azir can summon the Disc of the Sun from destroyed turrets.",
      q: 'Conquering Sands - Azir commands all soldiers to dash toward a target location.',
      w: 'Arise! - Azir summons a Sand Soldier to attack for him.',
      e: 'Shifting Sands - Azir dashes to one of his Sand Soldiers.',
      r: "Emperor's Divide - Azir summons a wall of soldiers that charge forward.",
    },
    skins: [
      {
        name: 'Galactic Azir',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_1.jpg',
        price: '975',
      },
      {
        name: 'Gravelord Azir',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_2.jpg',
        price: '1350',
      },
    ],
  },
  {
    id: 'bard',
    name: 'Bard',
    roles: ['Support', 'Mage'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    lore: 'A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic vagabond is drawn to artifacts of great magical power.',
    stats: {
      attack: 40,
      defense: 50,
      magic: 70,
      difficulty: 85,
    },
    baseStats: {
      health: '560',
      armor: '34',
      attackDamage: '52',
      attackSpeed: '0.625',
    },
    abilities: {
      passive:
        "Traveler's Call - Bard collects chimes that empower his meeps, which deal extra damage.",
      q: 'Cosmic Binding - Bard fires a missile that damages and slows the first enemy hit.',
      w: "Caretaker's Shrine - Bard places a shrine that heals allies who walk over it.",
      e: 'Magical Journey - Bard creates a portal through terrain that allies can use.',
      r: 'Tempered Fate - Bard sends all units in an area into stasis.',
    },
    skins: [
      {
        name: 'Snow Day Bard',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_1.jpg',
        price: '975',
      },
      {
        name: 'Elderwood Bard',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_2.jpg',
        price: '1350',
      },
    ],
  },
  {
    id: 'blitzcrank',
    name: 'Blitzcrank',
    roles: ['Tank', 'Support'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg',
    lore: 'Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found that his true calling was in helping others, and has since become a hero of the downtrodden and the helpless.',
    stats: {
      attack: 40,
      defense: 65,
      magic: 45,
      difficulty: 50,
    },
    baseStats: {
      health: '582',
      armor: '37',
      attackDamage: '62',
      attackSpeed: '0.625',
    },
    abilities: {
      passive: 'Mana Barrier - Blitzcrank gains a shield when low on health.',
      q: 'Rocket Grab - Blitzcrank fires his right hand to grab an enemy and pull them to him.',
      w: 'Overdrive - Blitzcrank gains increased movement and attack speed.',
      e: "Power Fist - Blitzcrank's next attack knocks up his target.",
      r: 'Static Field - Blitzcrank discharges electricity, damaging and silencing nearby enemies.',
    },
    skins: [
      {
        name: 'Rusty Blitzcrank',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_1.jpg',
        price: 'Legacy',
      },
      {
        name: 'Goalkeeper Blitzcrank',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_2.jpg',
        price: '520',
      },
    ],
  },
  {
    id: 'brand',
    name: 'Brand',
    roles: ['Mage', 'Support'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg',
    lore: 'Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the man was no more.',
    stats: {
      attack: 45,
      defense: 35,
      magic: 90,
      difficulty: 65,
    },
    baseStats: {
      health: '520',
      armor: '22',
      attackDamage: '57',
      attackSpeed: '0.625',
    },
    abilities: {
      passive:
        "Blaze - Brand's abilities light enemies ablaze, dealing bonus damage.",
      q: 'Sear - Brand launches a fireball that deals magic damage and stuns if the target is ablaze.',
      w: 'Pillar of Flame - Brand creates a pillar of flame, dealing damage after a delay.',
      e: 'Conflagration - Brand sets a target on fire, dealing damage and spreading to nearby enemies.',
      r: 'Pyroclasm - Brand launches a bouncing fireball that deals damage to enemies.',
    },
    skins: [
      {
        name: 'Apocalyptic Brand',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_1.jpg',
        price: '520',
      },
      {
        name: 'Vandal Brand',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_2.jpg',
        price: '520',
      },
    ],
  },
  {
    id: 'braum',
    name: 'Braum',
    roles: ['Support', 'Tank'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg',
    lore: 'Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and demolished a mountain with one punch.',
    stats: {
      attack: 30,
      defense: 90,
      magic: 40,
      difficulty: 45,
    },
    baseStats: {
      health: '610',
      armor: '47',
      attackDamage: '55',
      attackSpeed: '0.644',
    },
    abilities: {
      passive:
        'Concussive Blows - After four hits, Braum and his allies stun the target.',
      q: "Winter's Bite - Braum launches ice, dealing damage and applying a stack of Concussive Blows.",
      w: 'Stand Behind Me - Braum dashes to an ally, granting them bonus resistances.',
      e: 'Unbreakable - Braum raises his shield, blocking projectiles.',
      r: 'Glacial Fissure - Braum slams the ground, creating a fissure that knocks up enemies.',
    },
    skins: [
      {
        name: 'Dragonslayer Braum',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_1.jpg',
        price: '1350',
      },
    ],
  },
  {
    id: 'caitlyn',
    name: 'Caitlyn',
    roles: ['ADC', 'Marksman'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg',
    lore: 'Renowned as its finest peacekeeper, Caitlyn is also Piltovers best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partners more impetuous nature.',
    stats: {
      attack: 90,
      defense: 30,
      magic: 20,
      difficulty: 50,
    },
    baseStats: {
      health: '510',
      armor: '28',
      attackDamage: '62',
      attackSpeed: '0.681',
    },
    abilities: {
      passive:
        "Headshot - Every few attacks, Caitlyn's next attack deals bonus damage.",
      q: 'Piltover Peacemaker - Caitlyn fires a piercing shot that deals physical damage.',
      w: 'Yordle Snap Trap - Caitlyn sets a trap that reveals and roots enemies.',
      e: 'Caliber Net - Caitlyn fires a net and recoils backward.',
      r: 'Ace in the Hole - Caitlyn locks onto a champion and fires a deadly shot.',
    },
    skins: [
      {
        name: 'Resistance Caitlyn',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_1.jpg',
        price: '975',
      },
      {
        name: 'Sheriff Caitlyn',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_2.jpg',
        price: '520',
      },
    ],
  },
  {
    id: 'camille',
    name: 'Camille',
    roles: ['Fighter', 'Tank'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg',
    lore: 'Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly.',
    stats: {
      attack: 80,
      defense: 60,
      magic: 30,
      difficulty: 85,
    },
    baseStats: {
      health: '576',
      armor: '35',
      attackDamage: '68',
      attackSpeed: '0.644',
    },
    abilities: {
      passive:
        "Adaptive Defenses - Camille's basic attacks grant a shield against the enemy's damage type.",
      q: "Precision Protocol - Camille's next attack deals bonus damage and grants movement speed.",
      w: 'Tactical Sweep - Camille sweeps in a cone, dealing damage and healing herself.',
      e: 'Hookshot - Camille fires a hook and dashes to walls, then can dash to enemies.',
      r: 'The Hextech Ultimatum - Camille targets an enemy champion, leaping to them and creating an arena.',
    },
    skins: [
      {
        name: 'Program Camille',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_1.jpg',
        price: '1350',
      },
    ],
  },
  {
    id: 'cassiopeia',
    name: 'Cassiopeia',
    roles: ['Mage'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg',
    lore: 'Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power.',
    stats: {
      attack: 25,
      defense: 35,
      magic: 90,
      difficulty: 90,
    },
    baseStats: {
      health: '560',
      armor: '20',
      attackDamage: '53',
      attackSpeed: '0.647',
    },
    abilities: {
      passive:
        'Serpentine Grace - Cassiopeia cannot purchase boots but gains movement speed per level.',
      q: 'Noxious Blast - Cassiopeia fires poison that deals damage and grants movement speed.',
      w: 'Miasma - Cassiopeia creates a poisonous cloud that grounds enemies.',
      e: 'Twin Fang - Cassiopeia fires fangs that deal bonus damage to poisoned targets.',
      r: 'Petrifying Gaze - Cassiopeia turns enemies to stone if they face her.',
    },
    skins: [
      {
        name: 'Desperada Cassiopeia',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_1.jpg',
        price: '520',
      },
      {
        name: 'Siren Cassiopeia',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_2.jpg',
        price: '520',
      },
    ],
  },
  {
    id: 'chogath',
    name: "Cho'Gath",
    roles: ['Tank', 'Mage'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg',
    lore: "From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts matter into new bodily growth—increasing its size and density with each feast.",
    stats: {
      attack: 35,
      defense: 80,
      magic: 70,
      difficulty: 55,
    },
    baseStats: {
      health: '644',
      armor: '38',
      attackDamage: '69',
      attackSpeed: '0.625',
    },
    abilities: {
      passive:
        "Carnivore - When Cho'Gath kills a unit, he recovers health and mana. The values restored increase with Cho'Gath's level.",
      q: "Rupture - Cho'Gath ruptures the ground at target location, knocking up and damaging enemies in the area.",
      w: "Feral Scream - Cho'Gath screams in a cone, dealing damage and silencing enemies hit.",
      e: "Vorpal Spikes - Cho'Gath's attacks release deadly spikes, dealing damage and slowing enemies.",
      r: "Feast - Cho'Gath attempts to eat an enemy whole, dealing true damage. If the target is killed, Cho'Gath gains a stack of Feast that permanently increases his health.",
    },
    skins: [
      {
        name: "Nightmare Cho'Gath",
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_1.jpg',
        price: '520',
      },
      {
        name: "Gentleman Cho'Gath",
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_2.jpg',
        price: '1820',
      },
      {
        name: "Battlecast Prime Cho'Gath",
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_7.jpg',
        price: '1820',
      },
    ],
  },
  {
    id: 'corki',
    name: 'Corki',
    roles: ['Marksman'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg',
    lore: 'The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there.',
    stats: {
      attack: 80,
      defense: 30,
      magic: 60,
      difficulty: 65,
    },
    baseStats: {
      health: '518',
      armor: '28',
      attackDamage: '61',
      attackSpeed: '0.638',
    },
    abilities: {
      passive:
        "Hextech Munitions - Corki's basic attacks deal bonus magic damage.",
      q: 'Phosphorus Bomb - Corki fires a bomb that deals magic damage and reveals the area.',
      w: 'Valkyrie - Corki flies to target location, leaving a trail of flames.',
      e: "Gatling Gun - Corki's gatling gun rapidly fires, dealing physical damage and reducing armor.",
      r: 'Missile Barrage - Corki fires missiles that deal both magic and physical damage.',
    },
    skins: [
      {
        name: 'UFO Corki',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_1.jpg',
        price: 'Legacy',
      },
      {
        name: 'Red Baron Corki',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_2.jpg',
        price: 'Legacy',
      },
    ],
  },
  {
    id: 'darius',
    name: 'Darius',
    roles: ['Fighter', 'Tank'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg',
    lore: "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves.",
    stats: {
      attack: 90,
      defense: 60,
      magic: 30,
      difficulty: 45,
    },
    baseStats: {
      health: '582',
      armor: '39',
      attackDamage: '64',
      attackSpeed: '0.625',
    },
    abilities: {
      passive:
        "Hemorrhage - Darius' attacks and abilities cause enemies to bleed, dealing physical damage over time and stacking up to five times.",
      q: 'Decimate - Darius swings his axe in a circle, dealing more damage with the blade.',
      w: "Crippling Strike - Darius's next attack slows the target and deals bonus damage.",
      e: 'Apprehend - Darius pulls in all enemies in front of him.',
      r: 'Noxian Guillotine - Darius leaps to an enemy champion and strikes a lethal blow, dealing true damage.',
    },
    skins: [
      {
        name: 'Lord Darius',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_1.jpg',
        price: '975',
      },
      {
        name: 'Dunkmaster Darius',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_4.jpg',
        price: '1820',
      },
    ],
  },
  {
    id: 'diana',
    name: 'Diana',
    roles: ['Fighter', 'Mage'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg',
    lore: "Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power.",
    stats: {
      attack: 70,
      defense: 60,
      magic: 80,
      difficulty: 60,
    },
    baseStats: {
      health: '570',
      armor: '31',
      attackDamage: '57',
      attackSpeed: '0.625',
    },
    abilities: {
      passive:
        'Moonsilver Blade - Every third attack cleaves nearby enemies for additional magic damage.',
      q: 'Crescent Strike - Diana unleashes a bolt of lunar energy in an arc.',
      w: 'Pale Cascade - Diana creates three orbiting spheres that detonate on contact.',
      e: 'Lunar Rush - Diana dashes to an enemy unit. Resets when used on a target affected by Moonlight.',
      r: 'Moonfall - Diana pulls in and slows nearby enemies before unleashing lunar energy.',
    },
    skins: [
      {
        name: 'Dark Valkyrie Diana',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_1.jpg',
        price: '975',
      },
      {
        name: 'Blood Moon Diana',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_3.jpg',
        price: '1350',
      },
    ],
  },
  {
    id: 'draven',
    name: 'Draven',
    roles: ['Marksman'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg',
    lore: 'In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic.',
    stats: {
      attack: 90,
      defense: 30,
      magic: 30,
      difficulty: 85,
    },
    baseStats: {
      health: '605',
      armor: '29',
      attackDamage: '62',
      attackSpeed: '0.679',
    },
    abilities: {
      passive:
        'League of Draven - Draven gains bonus gold when he catches a Spinning Axe or kills a minion, champion, or tower.',
      q: "Spinning Axe - Draven's next attack will deal bonus physical damage. The axe bounces off the target and can be caught.",
      w: 'Blood Rush - Draven gains increased movement speed and attack speed.',
      e: 'Stand Aside - Draven throws his axes, knocking aside and slowing enemies.',
      r: 'Whirling Death - Draven hurls two massive axes dealing physical damage to each unit struck.',
    },
    skins: [
      {
        name: 'Soul Reaver Draven',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_1.jpg',
        price: '975',
      },
      {
        name: 'Gladiator Draven',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_2.jpg',
        price: '975',
      },
    ],
  },

  {
    id: 'ekko',
    name: 'Ekko',
    roles: ['Mid', 'Jungle'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg',
    lore: 'A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment.',
    stats: {
      attack: 50,
      defense: 60,
      magic: 80,
      difficulty: 75,
    },
    baseStats: {
      health: '585',
      armor: '32',
      attackDamage: '58',
      attackSpeed: '0.688',
    },
    abilities: {
      passive:
        'Z-Drive Resonance - Every third hit on the same target deals bonus magic damage.',
      q: 'Timewinder - Throws a device that slows and damages enemies.',
      w: 'Parallel Convergence - Creates a time field that stuns enemies caught inside.',
      e: 'Phase Dive - Rolls and blinks to a target location.',
      r: 'Chronobreak - Rewinds time, returning to a previous location while healing.',
    },
    skins: [
      {
        name: 'Sandstorm Ekko',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_1.jpg',
        price: '975',
      },
    ],
  },
  {
    id: 'elise',
    name: 'Elise',
    roles: ['Jungle'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg',
    lore: 'Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once she was mortal, the mistress of a powerful house, but the bite of a legendary spider god transformed her into something beautiful, yet utterly inhuman.',
    stats: {
      attack: 60,
      defense: 50,
      magic: 80,
      difficulty: 85,
    },
    baseStats: {
      health: '534',
      armor: '27',
      attackDamage: '55',
      attackSpeed: '0.625',
    },
    abilities: {
      passive:
        'Spider Queen - Gains bonus magic damage on abilities in Spider Form.',
      q: 'Neurotoxin/Venomous Bite - Deals damage based on current/missing health.',
      w: 'Volatile Spiderling/Skittering Frenzy - Sends a spider to explode/gains attack speed.',
      e: 'Cocoon/Rappel - Stuns target/becomes untargetable.',
      r: 'Spider Form/Human Form - Transforms between forms, gaining different abilities.',
    },
    skins: [
      {
        name: 'Death Blossom Elise',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_1.jpg',
        price: '1350',
      },
    ],
  },
  {
    id: 'evelynn',
    name: 'Evelynn',
    roles: ['Jungle', 'Assassin'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg',
    lore: 'Within the dark seams of Runeterra, the demon Evelynn searches for her next victim. She lures in prey with the voluptuous façade of a human female, but once a person succumbs to her charms, Evelynns true form is unleashed.',
    stats: {
      attack: 40,
      defense: 30,
      magic: 90,
      difficulty: 70,
    },
    baseStats: {
      health: '572',
      armor: '37',
      attackDamage: '61',
      attackSpeed: '0.667',
    },
    abilities: {
      passive:
        'Demon Shade - Becomes invisible and regenerates health when out of combat.',
      q: 'Hate Spike - Launches spikes at nearby enemies.',
      w: 'Allure - Charms enemy and marks them for bonus damage.',
      e: 'Whiplash - Empowered attack that deals bonus damage.',
      r: 'Last Caress - Deals massive damage and teleports backward.',
    },
    skins: [
      {
        name: 'Shadow Evelynn',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_1.jpg',
        price: '520',
      },
    ],
  },
  {
    id: 'ezreal',
    name: 'Ezreal',
    roles: ['ADC', 'Mid'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg',
    lore: 'A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease.',
    stats: {
      attack: 80,
      defense: 30,
      magic: 70,
      difficulty: 65,
    },
    baseStats: {
      health: '530',
      armor: '24',
      attackDamage: '60',
      attackSpeed: '0.625',
    },
    abilities: {
      passive:
        'Rising Spell Force - Gains attack speed when hitting abilities.',
      q: 'Mystic Shot - Fires a bolt of energy that applies on-hit effects.',
      w: 'Essence Flux - Marks an enemy for bonus damage.',
      e: 'Arcane Shift - Teleports and fires a bolt at nearest enemy.',
      r: 'Trueshot Barrage - Fires a powerful energy wave across the map.',
    },
    skins: [
      {
        name: 'Nottingham Ezreal',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_1.jpg',
        price: 'Legacy',
      },
    ],
  },
  {
    id: 'fiddlesticks',
    name: 'Fiddlesticks',
    roles: ['Jungle'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg',
    lore: 'Something has awoken in Runeterra. Something ancient. Something terrible. The ageless horror known as Fiddlesticks stalks the edges of mortal society, drawn to areas thick with paranoia where it feeds upon terrorized victims.',
    stats: {
      attack: 30,
      defense: 40,
      magic: 90,
      difficulty: 70,
    },
    baseStats: {
      health: '580',
      armor: '34',
      attackDamage: '55',
      attackSpeed: '0.625',
    },
    abilities: {
      passive: 'A Harmless Scarecrow - Can place effigies that grant vision.',
      q: 'Terrify - Fears target enemy and deals damage.',
      w: 'Bountiful Harvest - Drains health from nearby enemies.',
      e: 'Reap - Throws crow that silences and damages enemies.',
      r: 'Crowstorm - Channels and blinks to a location, dealing massive AoE damage.',
    },
    skins: [
      {
        name: 'Spectral Fiddlesticks',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_1.jpg',
        price: '975',
      },
    ],
  },
  {
    id: 'fiora',
    name: 'Fiora',
    roles: ['Top'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg',
    lore: 'The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and cunning mind as she is for the speed of her bluesteel rapier.',
    stats: {
      attack: 80,
      defense: 50,
      magic: 30,
      difficulty: 85,
    },
    baseStats: {
      health: '550',
      armor: '33',
      attackDamage: '68',
      attackSpeed: '0.69',
    },
    abilities: {
      passive:
        "Duelist's Dance - Reveals vital points on enemies that deal true damage.",
      q: 'Lunge - Dashes to strike a nearby enemy.',
      w: 'Riposte - Parries incoming damage and stuns attackers.',
      e: 'Bladework - Enhances next two attacks with bonus effects.',
      r: 'Grand Challenge - Challenges an enemy to a duel, revealing all vitals.',
    },
    skins: [
      {
        name: 'Royal Guard Fiora',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_1.jpg',
        price: '750',
      },
    ],
  },
  {
    id: 'fizz',
    name: 'Fizz',
    roles: ['Mid', 'Assassin'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg',
    lore: 'Fizz is an amphibious yordle, who dwells among the reefs surrounding Bilgewater. He often retrieves and returns the tithes cast into the sea by superstitious captains, but even the saltiest of sailors know better than to cross him.',
    stats: {
      attack: 60,
      defense: 40,
      magic: 85,
      difficulty: 70,
    },
    baseStats: {
      health: '570',
      armor: '22',
      attackDamage: '58',
      attackSpeed: '0.658',
    },
    abilities: {
      passive:
        'Nimble Fighter - Can move through units and takes reduced damage.',
      q: 'Urchin Strike - Dashes through target enemy dealing damage.',
      w: 'Seastone Trident - Empowers attacks with bonus damage.',
      e: 'Playful/Trickster - Becomes untargetable and deals AoE damage.',
      r: 'Chum the Waters - Throws a shark that knocks up and damages enemies.',
    },
    skins: [
      {
        name: 'Atlantean Fizz',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_1.jpg',
        price: '975',
      },
    ],
  },
  {
    id: 'galio',
    name: 'Galio',
    roles: ['Mid', 'Support'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg',
    lore: 'Outside the gleaming city of Demacia, the colossus Galio keeps vigilant watch. Built as a bulwark against enemy mages, he often stands motionless for decades until the presence of powerful magic stirs him to life.',
    stats: {
      attack: 40,
      defense: 80,
      magic: 70,
      difficulty: 60,
    },
    baseStats: {
      health: '632',
      armor: '24',
      attackDamage: '59',
      attackSpeed: '0.625',
    },
    abilities: {
      passive: 'Colossal Smash - Periodically empowers next basic attack.',
      q: 'Winds of War - Fires two gusts that deal magic damage.',
      w: 'Shield of Durand - Charges a shield that taunts enemies.',
      e: 'Justice Punch - Dashes forward, knocking up enemies.',
      r: "Hero's Entrance - Leaps to an ally, knocking up nearby enemies.",
      passiveVideo:
      'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_P1.webm',
    qVideo: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_Q1.webm',
    wVideo: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_W1.webm',
    eVideo: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_E1.webm',
    rVideo: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_R1.webm',
    },
    skins: [
      {
        name: 'Enchanted Galio',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_1.jpg',
        price: '520',
      },
    ],
  },
  {
    id: 'gangplank',
    name: 'Gangplank',
    roles: ['Top'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg',
    lore: 'As unpredictable as he is brutal, the dethroned reaver king Gangplank is feared far and wide. Once he ruled the port city of Bilgewater, and while his reign is over, there are those who believe this has only made him more dangerous.',
    stats: {
      attack: 85,
      defense: 60,
      magic: 50,
      difficulty: 85,
    },
    baseStats: {
      health: '600',
      armor: '35',
      attackDamage: '64',
      attackSpeed: '0.658',
    },
    abilities: {
      passive:
        'Trial by Fire - Periodically sets sword ablaze for bonus true damage.',
      q: 'Parrrley - Shoots target unit, applying on-hit effects.',
      w: 'Remove Scurvy - Heals and removes crowd control effects.',
      e: 'Powder Keg - Places explosive kegs that can be detonated.',
      r: 'Cannon Barrage - Fires waves of cannonballs at target area.',
    },
    skins: [
      {
        name: 'Spooky Gangplank',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_1.jpg',
        price: 'Legacy',
      },
    ],
  },
  {
    id: 'garen',
    name: 'Garen',
    roles: ['Top', 'Fighter'],
    difficulty: 'Easy',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg',
    lore: 'A proud and noble warrior, Garen fights at the head of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its ideals.',
    stats: {
      attack: 70,
      defense: 80,
      magic: 30,
      difficulty: 25,
    },
    baseStats: {
      health: '620',
      armor: '36',
      attackDamage: '66',
      attackSpeed: '0.625',
    },
    abilities: {
      passive: 'Perseverance - Regenerates health when out of combat.',
      q: 'Decisive Strike - Gains movement speed and silences next attack.',
      w: 'Courage - Reduces incoming damage and tenacity.',
      e: 'Judgment - Rapidly spins dealing physical damage to nearby enemies.',
      r: 'Demacian Justice - Calls upon demacian might to execute target.',
    },
    skins: [
      {
        name: 'Sanguine Garen',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_1.jpg',
        price: '520',
      },
    ],
  },
  {
    id: 'gnar',
    name: 'Gnar',
    roles: ['Top'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg',
    lore: 'Gnar is a primordial yordle whose playful antics can erupt into the wild fury of a prehistoric beast. Frozen in True Ice for millennia, the curious creature finally broke free and now hops about a changed world he sees as exotic and wondrous.',
    stats: {
      attack: 65,
      defense: 60,
      magic: 40,
      difficulty: 80,
    },
    baseStats: {
      health: '510',
      armor: '32',
      attackDamage: '59',
      attackSpeed: '0.625',
    },
    abilities: {
      passive: 'Rage Gene - Transforms into Mega Gnar when rage is full.',
      q: 'Boomerang Throw/Boulder Toss - Throws projectile that returns/deals damage.',
      w: 'Hyper/Wallop - Gains speed on hits/stuns enemies.',
      e: 'Hop/Crunch - Leaps in a direction.',
      r: 'GNAR! - Throws enemies in a direction.',
    },
    skins: [
      {
        name: 'Dino Gnar',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_1.jpg',
        price: '975',
      },
    ],
  },
  {
    id: 'gragas',
    name: 'Gragas',
    roles: ['Jungle', 'Top'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg',
    lore: 'Equal parts jolly and imposing, Gragas is a massive, rowdy brewmaster on his own quest for the perfect pint of ale. Hailing from parts unknown, he now searches for rare ingredients among the unblemished wastes of the Freljord.',
    stats: {
      attack: 50,
      defense: 80,
      magic: 70,
      difficulty: 65,
    },
    baseStats: {
      health: '600',
      armor: '35',
      attackDamage: '64',
      attackSpeed: '0.675',
    },
    abilities: {
      passive: 'Happy Hour - Periodically heals when using abilities.',
      q: 'Barrel Roll - Rolls a barrel that explodes dealing damage.',
      w: 'Drunken Rage - Takes a drink reducing damage and empowering next attack.',
      e: 'Body Slam - Charges forward, colliding with enemies.',
      r: 'Explosive Cask - Throws a barrel that knocks enemies away.',
    },
    skins: [
      {
        name: 'Scuba Gragas',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_1.jpg',
        price: '975',
      },
    ],
  },
  {
    id: 'graves',
    name: 'Graves',
    roles: ['Jungle'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg',
    lore: 'Malcolm Graves is a renowned mercenary, gambler, and thief—a wanted man in every city and empire he has visited. Even though he has an explosive temper, he possesses a strict sense of criminal honor.',
    stats: {
      attack: 85,
      defense: 60,
      magic: 30,
      difficulty: 55,
    },
    baseStats: {
      health: '555',
      armor: '33',
      attackDamage: '68',
      attackSpeed: '0.475',
    },
    abilities: {
      passive: 'New Destiny - Shotgun attacks knock enemies back.',
      q: 'End of the Line - Fires a explosive round that deals damage.',
      w: 'Smoke Screen - Creates a cloud that slows and reduces vision.',
      e: 'Quickdraw - Dashes and gains armor stacks.',
      r: 'Collateral Damage - Fires an explosive shell dealing heavy damage.',
    },
    skins: [
      {
        name: 'Hired Gun Graves',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_1.jpg',
        price: '750',
      },
    ],
  },
  {
    id: 'gwen',
    name: 'Gwen',
    roles: ['Top'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg',
    lore: "A former doll transformed and brought to life by forbidden magic, Gwen wields the very tools that once created her. She carries the weight of her maker's love with every step, taking nothing for granted.",
    stats: {
      attack: 70,
      defense: 60,
      magic: 80,
      difficulty: 75,
    },
    baseStats: {
      health: '590',
      armor: '39',
      attackDamage: '63',
      attackSpeed: '0.69',
    },
    abilities: {
      passive: 'Thousand Cuts - Basic attacks deal bonus magic damage.',
      q: 'Snip Snip! - Cuts enemies in front with magical scissors.',
      w: 'Hallowed Mist - Creates a protective mist that follows Gwen.',
      e: "Skip 'n Slash - Dashes short distance and empowers attacks.",
      r: 'Needlework - Throws needles that deal true damage.',
    },
    skins: [
      {
        name: 'Space Groove Gwen',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_1.jpg',
        price: '1350',
      },
    ],
  },
  {
    id: 'hecarim',
    name: 'Hecarim',
    roles: ['Jungle'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg',
    lore: 'Hecarim is a spectral fusion of man and beast, cursed to ride down the souls of the living for all eternity. When the Blessed Isles fell into shadow, this proud knight was transformed into a monstrous harbinger of death.',
    stats: {
      attack: 75,
      defense: 70,
      magic: 40,
      difficulty: 60,
    },
    baseStats: {
      health: '580',
      armor: '35',
      attackDamage: '66',
      attackSpeed: '0.67',
    },
    abilities: {
      passive: 'Warpath - Gains attack damage from bonus movement speed.',
      q: 'Rampage - Deals damage to nearby enemies.',
      w: 'Spirit of Dread - Deals damage and heals from nearby enemies.',
      e: 'Devastating Charge - Gains movement speed and knocks back enemies.',
      r: 'Onslaught of Shadows - Charges forward creating terror in his wake.',
    },
    skins: [
      {
        name: 'Blood Knight Hecarim',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_1.jpg',
        price: '975',
      },
    ],
  },
  {
    id: 'heimerdinger',
    name: 'Heimerdinger',
    roles: ['Mid', 'Top'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg',
    lore: 'A brilliant yet eccentric yordle scientist, Professor Cecil B. Heimerdinger is one of the most innovative and esteemed inventors Piltover has ever known. Relentless in his work to the point of neurotic obsession.',
    stats: {
      attack: 45,
      defense: 40,
      magic: 90,
      difficulty: 80,
    },
    baseStats: {
      health: '488',
      armor: '19',
      attackDamage: '56',
      attackSpeed: '0.625',
    },
    abilities: {
      passive: 'Hextech Affinity - Gains movement speed near turrets.',
      q: 'H-28G Evolution Turret - Places a turret that attacks enemies.',
      w: 'Hextech Micro-Rockets - Fires rockets that deal magic damage.',
      e: 'CH-2 Electron Storm Grenade - Throws a grenade that stuns.',
      r: 'UPGRADE!!! - Empowers next basic ability cast.',
    },
    skins: [
      {
        name: 'Alien Invader Heimerdinger',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_1.jpg',
        price: '1820',
      },
    ],
  },
  {
    id: 'illaoi',
    name: 'Illaoi',
    roles: ['Top'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg',
    lore: "Illaoi's powerful physique is dwarfed only by her indomitable faith. As the prophet of the Great Kraken, she uses a huge, golden idol to rip her foes' spirits from their bodies and shatter their perception of reality.",
    stats: {
      attack: 80,
      defense: 70,
      magic: 30,
      difficulty: 65,
    },
    baseStats: {
      health: '585',
      armor: '35',
      attackDamage: '68',
      attackSpeed: '0.625',
    },
    abilities: {
      passive: 'Prophet of an Elder God - Spawns tentacles on nearby walls.',
      q: 'Tentacle Smash - Tentacles slam down dealing physical damage.',
      w: 'Harsh Lesson - Leaps to target and commands tentacles to attack.',
      e: 'Test of Spirit - Pulls enemy spirit, making them a vessel.',
      r: 'Leap of Faith - Leaps and summons tentacles for each champion hit.',
    },
    skins: [
      {
        name: 'Void Bringer Illaoi',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_1.jpg',
        price: '1350',
      },
    ],
  },
  {
    id: 'irelia',
    name: 'Irelia',
    roles: ['Top', 'Mid'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg',
    lore: 'The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practiced movements to levitate a host of deadly blades.',
    stats: {
      attack: 75,
      defense: 45,
      magic: 60,
      difficulty: 90,
    },
    baseStats: {
      health: '580',
      armor: '36',
      attackDamage: '65',
      attackSpeed: '0.656',
    },
    abilities: {
      passive: 'Ionian Fervor - Gains attack speed from hitting abilities.',
      q: 'Bladesurge - Dashes to target, resetting on kill.',
      w: 'Defiant Dance - Channels to reduce damage and strike enemies.',
      e: 'Flawless Duet - Places two blades that stun enemies between them.',
      r: "Vanguard's Edge - Launches blades that create a wall of blades.",
    },
    skins: [
      {
        name: 'Nightblade Irelia',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_1.jpg',
        price: '520',
      },
    ],
  },
  {
    id: 'ivern',
    name: 'Ivern',
    roles: ['Jungle', 'Support'],
    difficulty: 'Hard',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg',
    lore: "Ivern Bramblefoot, known to many as the Green Father, is a peculiar half man, half tree who roams Runeterra's forests, cultivating life everywhere he goes. He knows the secrets of the natural world, and holds deep friendships with all things that grow, fly, and scuttle.",
    stats: {
      attack: 30,
      defense: 50,
      magic: 70,
      difficulty: 75,
    },
    baseStats: {
      health: '585',
      armor: '27',
      attackDamage: '50',
      attackSpeed: '0.644',
    },
    abilities: {
      passive: 'Friend of the Forest - Can free jungle monsters after a delay.',
      q: 'Rootcaller - Throws a vine that roots enemies.',
      w: 'Brushmaker - Creates a bush that grants attack range.',
      e: 'Triggerseed - Shields ally and damages nearby enemies.',
      r: 'Daisy! - Summons Daisy to fight alongside Ivern.',
    },
    skins: [
      {
        name: 'Candy King Ivern',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_1.jpg',
        price: '1350',
      },
    ],
  },
  {
    id: 'janna',
    name: 'Janna',
    roles: ['Support'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg',
    lore: "Armed with the power of Runeterra's gales, Janna is a mysterious, elemental wind spirit who protects the dispossessed of Zaun. Some believe she was once a mortal girl from the heart of the city, though she has been elevated to the status of deity in the legends of Zaun.",
    stats: {
      attack: 30,
      defense: 45,
      magic: 70,
      difficulty: 55,
    },
    baseStats: {
      health: '500',
      armor: '28',
      attackDamage: '46',
      attackSpeed: '0.625',
    },
    abilities: {
      passive: 'Tailwind - Allies moving toward Janna gain movement speed.',
      q: 'Howling Gale - Creates a tornado that knocks up enemies.',
      w: 'Zephyr - Slows target enemy and grants movement speed.',
      e: 'Eye of the Storm - Shields ally and grants bonus attack damage.',
      r: 'Monsoon - Knocks back enemies and heals nearby allies.',
    },
    skins: [
      {
        name: 'Tempest Janna',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_1.jpg',
        price: '520',
      },
    ],
  },
  {
    id: 'jarvaniv',
    name: 'Jarvan IV',
    roles: ['Jungle', 'Tank'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg',
    lore: "Prince Jarvan, scion of the Lightshield dynasty, is heir apparent to the throne of Demacia. Raised to be a paragon of his nation's greatest virtues, he is forced to balance the heavy expectations placed upon him with his own desire to fight on the frontlines.",
    stats: {
      attack: 70,
      defense: 60,
      magic: 30,
      difficulty: 50,
    },
    baseStats: {
      health: '570',
      armor: '34',
      attackDamage: '64',
      attackSpeed: '0.658',
    },
    abilities: {
      passive: 'Martial Cadence - First attack on enemies deals bonus damage.',
      q: 'Dragon Strike - Extends lance dealing physical damage.',
      w: 'Golden Aegis - Shields himself and slows nearby enemies.',
      e: 'Demacian Standard - Places a standard that grants attack speed.',
      r: 'Cataclysm - Leaps to target creating an arena of impassable terrain.',
    },
    skins: [
      {
        name: 'Commando Jarvan IV',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_1.jpg',
        price: '520',
      },
    ],
  },
  {
    id: 'jax',
    name: 'Jax',
    roles: ['Top', 'Jungle'],
    difficulty: 'Moderate',
    image:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg',
    lore: 'Unmatched in both his skill with unique armaments and his biting sarcasm, Jax is the last known weapons master of Icathia. After his homeland was destroyed by its own hubris in unleashing the Void, Jax and his kind vowed to protect what remained of Icathia.',
    stats: {
      attack: 85,
      defense: 65,
      magic: 35,
      difficulty: 55,
    },
    baseStats: {
      health: '593',
      armor: '36',
      attackDamage: '68',
      attackSpeed: '0.638',
    },
    abilities: {
      passive:
        'Relentless Assault - Consecutive attacks increase attack speed.',
      q: 'Leap Strike - Jumps to target unit dealing damage.',
      w: 'Empower - Enhances next attack with bonus magic damage.',
      e: 'Counter Strike - Dodges attacks and stuns nearby enemies.',
      r: "Grandmaster's Might - Gains bonus armor and magic resist.",
    },
    skins: [
      {
        name: 'The Mighty Jax',
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_1.jpg',
        price: '520',
      },
    ],
  },
    {
      id: 'jinx',
      name: 'Jinx',
      roles: ['ADC'],
      image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg',
      difficulty: 'Moderate',
      stats: {
        attack: 90,
        defense: 30,
        magic: 20,
        difficulty: 60
      },
      lore: 'A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences.',
      abilities: {
        passive: 'Get Excited!: Jinx gains bonus movement speed whenever she helps take down an enemy champion, tower, or inhibitor.',
        q: 'Switcheroo!: Jinx swaps between her rocket launcher and minigun.',
        w: 'Zap!: Jinx fires a shock blast that deals damage and slows the first enemy hit.',
        e: 'Flame Chompers!: Jinx tosses out snare grenades that explode after a delay.',
        r: 'Super Mega Death Rocket!: Jinx fires a rocket that gains damage as it travels.'
      },
      skins: [
        { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg', price: 'Default' },
        { name: 'Star Guardian', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_13.jpg', price: '1820 RP' }
      ]
    },
    {
      id: 'kaisa',
      name: "Kai'Sa",
      roles: ['ADC'],
      image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg',
      difficulty: 'Moderate',
      stats: {
        attack: 85,
        defense: 45,
        magic: 60,
        difficulty: 65
      },
      lore: "Claimed by the Void when she was only a child, Kai'Sa managed to survive through sheer tenacity and strength of will.",
      abilities: {
        passive: 'Second Skin: Kai\'Sa evolves her abilities based on permanent stats she gains.',
        q: 'Icathian Rain: Kai\'Sa releases a swarm of missiles.',
        w: 'Void Seeker: Kai\'Sa fires a long-range beam that marks enemies.',
        e: 'Supercharge: Kai\'Sa charges up, gaining movement speed and attack speed.',
        r: 'Killer Instinct: Kai\'Sa dashes to a marked champion.'
      },
      skins: [
        { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg', price: 'Default' },
        { name: 'K/DA', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_14.jpg', price: '1350 RP' }
      ]
    },
    {
      id: 'kalista',
      name: 'Kalista',
      roles: ['ADC'],
      image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg',
      difficulty: 'Hard',
      stats: {
        attack: 90,
        defense: 40,
        magic: 30,
        difficulty: 85
      },
      lore: 'A spectral warrior seeking vengeance, Kalista is the undying spirit of retribution.',
      abilities: {
        passive: 'Martial Poise: Kalista\'s basic attacks cause her to dash a short distance.',
        q: 'Pierce: Kalista throws a spear that deals physical damage.',
        w: 'Sentinel: Kalista sends out a spirit scout.',
        e: 'Rend: Kalista rips spears from her targets, dealing increased damage.',
        r: 'Fate\'s Call: Kalista teleports her bound ally to her location.'
      },
      skins: [
        { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg', price: 'Default' },
        { name: 'Blood Moon', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_2.jpg', price: '1350 RP' }
      ]
    },
    {
      id: 'karma',
      name: 'Karma',
      roles: ['Support', 'Mid'],
      image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg',
      difficulty: 'Moderate',
      stats: {
        attack: 40,
        defense: 50,
        magic: 80,
        difficulty: 55
      },
      lore: 'No mortal exemplifies the spiritual traditions of Ionia more than Karma.',
      abilities: {
        passive: 'Gathering Fire: Karma\'s abilities reduce her ultimate\'s cooldown.',
        q: 'Inner Flame: Karma fires a burst of energy that deals magic damage.',
        w: 'Focused Resolve: Karma tethers to an enemy, dealing damage and revealing them.',
        e: 'Inspire: Karma shields an ally and grants them movement speed.',
        r: 'Mantra: Karma empowers her next basic ability.'
      },
      skins: [
        { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg', price: 'Default' },
        { name: 'Dark Star', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_7.jpg', price: '1350 RP' }
      ]
    },
    {
      id: 'karthus',
      name: 'Karthus',
      roles: ['Mid', 'Jungle'],
      image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg',
      difficulty: 'Moderate',
      stats: {
        attack: 20,
        defense: 30,
        magic: 95,
        difficulty: 65
      },
      lore: 'The harbinger of oblivion, Karthus is an undying spirit whose haunting songs are a prelude to the horror of his nightmarish appearance.',
      abilities: {
        passive: 'Death Defied: Karthus can continue casting spells for 7 seconds after death.',
        q: 'Lay Waste: Karthus creates a delayed explosion at a target location.',
        w: 'Wall of Pain: Karthus creates a wall that slows enemies and reduces their resistances.',
        e: 'Defile: Karthus drains mana to deal damage to nearby enemies.',
        r: 'Requiem: Karthus channels to damage all enemy champions.'
      },
      skins: [
        { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg', price: 'Default' },
        { name: 'Pentakill', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_9.jpg', price: '1350 RP' }
      ]
    },
    {
      id: 'kassadin',
      name: 'Kassadin',
      roles: ['Mid'],
      image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg',
      difficulty: 'Hard',
      
      stats: {
        attack: 30,
        defense: 50,
        magic: 80,
        difficulty: 75
      },
      lore: 'Cutting a burning swath through the darkest places of the world, Kassadin knows his days are numbered.',
      abilities: {
        passive: 'Void Stone: Kassadin takes reduced magic damage and ignores unit collision.',
        q: 'Null Sphere: Kassadin fires an orb of void energy.',
        w: 'Nether Blade: Kassadin\'s next attack deals bonus magic damage.',
        e: 'Force Pulse: Kassadin releases a cone of void energy.',
        r: 'Riftwalk: Kassadin teleports to a nearby location.'
      },
      skins: [
        { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg', price: 'Default' },
        { name: 'Cosmic Reaver', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_4.jpg', price: '1350 RP' }
      ]
    },
    {
      id: 'katarina',
      name: 'Katarina',
      roles: ['Mid'],
      image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg',
      difficulty: 'Hard',
      stats: {
        attack: 40,
        defense: 30,
        magic: 85,
        difficulty: 80
      },
      lore: 'Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber.',
      abilities: {
        passive: 'Voracity: Ability cooldowns are greatly reduced whenever an enemy champion dies.',
        q: 'Bouncing Blade: Katarina throws a dagger that bounces between targets.',
        w: 'Preparation: Katarina gains movement speed and drops a dagger.',
        e: 'Shunpo: Katarina instantly moves to a target\'s location.',
        r: 'Death Lotus: Katarina becomes a flurry of blades, dealing massive damage.'
      },
      skins: [
        { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg', price: 'Default' },
        { name: 'Battle Academia', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_16.jpg', price: '1350 RP' }
      ]
    },
    {
      id: 'kayle',
      name: 'Kayle',
      roles: ['Top', 'Mid'],
      image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg',
      difficulty: 'Moderate',
      stats: {
        attack: 60,
        defense: 50,
        magic: 75,
        difficulty: 70
      },
      lore: 'Born to a Targonian Aspect at the height of the Rune Wars, Kayle honored her mother\'s legacy by fighting for justice with wings of divine flame.',
      abilities: {
        passive: 'Divine Ascent: Kayle ascends, gaining new powers as she levels up.',
        q: 'Radiant Blast: Kayle fires a celestial sword that deals damage and shreds resistances.',
        w: 'Celestial Blessing: Kayle heals and grants movement speed to herself and an ally.',
        e: 'Starfire Spellblade: Kayle\'s attacks deal bonus magic damage.',
        r: 'Divine Judgment: Kayle makes an ally invulnerable and rains down swords.'
      },
      skins: [
        { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg', price: 'Default' },
        { name: 'PsyOps', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_9.jpg', price: '1350 RP' }
      ]
    },
    {
      id: 'kayn',
      name: 'Kayn',
      roles: ['Jungle'],
      image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg',
      difficulty: 'Hard',
      stats: {
        attack: 85,
        defense: 50,
        magic: 60,
        difficulty: 80
      },
      lore: 'A peerless practitioner of lethal shadow magic, Kayn fights to achieve his true destiny—to one day lead the Order of Shadow into a new era of Ionian supremacy.',
      abilities: {
        passive: 'The Darkin Scythe: Kayn can transform into either the Shadow Assassin or Darkin form.',
        q: 'Reaping Slash: Kayn dashes and slashes through enemies.',
        w: 'Blade\'s Reach: Kayn deals damage in a line and slows targets.',
        e: 'Shadow Step: Kayn can walk through walls.',
        r: 'Umbral Trespass: Kayn infests a target champion.'
      },
      skins: [
        { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg', price: 'Default' },
        { name: 'Odyssey', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_1.jpg', price: '1350 RP' }
      ]
    },
    {
      id: 'kennen',
      name: 'Kennen',
      roles: ['Top', 'Mid'],
      image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg',
      difficulty: 'Moderate',
      stats: {
        attack: 50,
        defense: 40,
        magic: 75,
        difficulty: 60
      },
      lore: 'More than just the lightning-quick enforcer of Ionian balance, Kennen is the only yordle member of the Kinkou Order.',
      abilities: {
        passive: 'Mark of the Storm: Kennen\'s abilities apply marks that can stun enemies.',
        q: 'Thundering Shuriken: Kennen throws an energized shuriken.',
        w: 'Electrical Surge: Kennen deals bonus damage to marked targets.',
        e: 'Lightning Rush: Kennen transforms into a ball of lightning.',
        r: 'Slicing Maelstrom: Kennen creates a storm of electricity around him.'
      },
      skins: [
        { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg', price: 'Default' },
        { name: 'Blood Moon', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_7.jpg', price: '1350 RP' }
      ]
    },
      {
        id: 'khazix',
        name: "Kha'Zix",
        roles: ['Jungle'],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg',
        difficulty: 'Moderate',
        stats: {
          attack: 85,
          defense: 45,
          magic: 35,
          difficulty: 65
        },
        lore: "The Void grows, and Kha'Zix changes. He adapts, evolves, and becomes a more perfect hunter.",
        abilities: {
          passive: 'Unseen Threat: Kha\'Zix deals bonus damage to isolated targets.',
          q: 'Taste Their Fear: Kha\'Zix slashes a target, dealing bonus damage if isolated.',
          w: 'Void Spike: Kha\'Zix fires spikes that explode and slow.',
          e: 'Leap: Kha\'Zix leaps to a target area.',
          r: 'Void Assault: Kha\'Zix briefly becomes invisible and gains Evolved abilities.'
        },
        skins: [
          { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg', price: 'Default' },
          { name: 'Dark Star', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_5.jpg', price: '1350 RP' }
        ]
      },
      {
        id: 'kindred',
        name: 'Kindred',
        roles: ['Jungle'],
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg",
        difficulty: 'Hard',
        stats: {
          attack: 85,
          defense: 35,
          magic: 35,
          difficulty: 75
        },
        lore: 'Separate, but never parted, Kindred represents the twin essences of death.',
        abilities: {
          passive: 'Mark of the Kindred: Kindred can mark targets to hunt for permanent stat bonuses.',
          q: 'Dance of Arrows: Kindred leaps and fires arrows at nearby enemies.',
          w: 'Wolf\'s Frenzy: Wolf attacks nearby enemies in an area.',
          e: 'Mounting Dread: Kindred slows a target and deals execute damage.',
          r: 'Lamb\'s Respite: Kindred creates an area where nothing can die.'
        },
        skins: [
          { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg', price: 'Default' },
          { name: 'Spirit Blossom', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_3.jpg', price: '1350 RP' }
        ]
      },
      {
        id: 'kled',
        name: 'Kled',
        roles: ['Top'],
        image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg",
        difficulty: 'Hard',
        stats: {
          attack: 80,
          defense: 60,
          magic: 20,
          difficulty: 70
        },
        lore: 'A warrior as fearless as he is ornery, Kled is a popular folk hero in Noxus.',
        abilities: {
          passive: 'Skaarl, the Cowardly Lizard: Kled fights mounted on Skaarl, gaining bonus health.',
          q: 'Beartrap on a Rope: Kled throws a beartrap attached to a rope.',
          w: 'Violent Tendencies: Kled gains attack speed and deals bonus damage.',
          e: 'Jousting: Kled charges forward, dealing damage to enemies he passes through.',
          r: 'Chaaaaaaaarge!!!: Kled and Skaarl charge toward a location.'
        },
        skins: [
          { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg', price: 'Default' },
          { name: 'Count', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_1.jpg', price: '1350 RP' }
        ]
      },
      {
        id: 'kogmaw',
        name: "Kog'Maw",
        roles: ['ADC'],
        image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg",
        difficulty: 'Hard',
        stats: {
          attack: 85,
          defense: 30,
          magic: 70,
          difficulty: 65
        },
        lore: "Belched forth from a rotting Void incursion, Kog'Maw is an inquisitive yet putrid creature with a caustic, gaping mouth.",
        abilities: {
          passive: 'Icathian Surprise: Upon death, Kog\'Maw explodes, dealing true damage.',
          q: 'Caustic Spittle: Kog\'Maw launches corrosive ooze.',
          w: 'Bio-Arcane Barrage: Kog\'Maw\'s attacks gain range and deal bonus damage.',
          e: 'Void Ooze: Kog\'Maw launches a line of ooze that slows.',
          r: 'Living Artillery: Kog\'Maw fires long-range acid bombs.'
        },
        skins: [
          { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg', price: 'Default' },
          { name: 'Pug\'Maw', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_9.jpg', price: '1350 RP' }
        ]
      },
      {
        id: 'leblanc',
        name: 'LeBlanc',
        roles: ['Mid'],
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg",
        difficulty: 'Hard',
        stats: {
          attack: 40,
          defense: 30,
          magic: 90,
          difficulty: 85
        },
        lore: 'Mysterious even to other members of the Black Rose cabal, LeBlanc is but one of many names for a pale woman who has manipulated people and events for countless years.',
        abilities: {
          passive: 'Mirror Image: When LeBlanc drops below 40% health, she creates a mirror image.',
          q: 'Sigil of Malice: LeBlanc projects a sigil that deals damage.',
          w: 'Distortion: LeBlanc dashes to a location, dealing damage.',
          e: 'Ethereal Chains: LeBlanc throws illusionary chains that root enemies.',
          r: 'Mimic: LeBlanc creates a copy of her last used ability.'
        },
        skins: [
          { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg', price: 'Default' },
          { name: 'Coven', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_8.jpg', price: '1350 RP' }
        ]
      },
      {
        id: 'leesin',
        name: 'Lee Sin',
        roles: ['Jungle'],
        image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
        difficulty: 'Hard',
        stats: {
          attack: 85,
          defense: 50,
          magic: 30,
          difficulty: 90
        },
        lore: 'A master of Ionia\'s ancient martial arts, Lee Sin is a principled fighter who channels the essence of the dragon spirit to face any challenge.',
        abilities: {
          passive: 'Flurry: After using an ability, Lee Sin\'s next two attacks gain attack speed.',
          q: 'Sonic Wave / Resonating Strike: Lee Sin projects a soundwave, following up with a powerful kick.',
          w: 'Safeguard / Iron Will: Lee Sin dashes to a target, gaining a shield.',
          e: 'Tempest / Cripple: Lee Sin smashes the ground, revealing and slowing enemies.',
          r: 'Dragon\'s Rage: Lee Sin performs a powerful roundhouse kick.'
        },
        skins: [
          { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg', price: 'Default' },
          { name: 'Storm Dragon', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_33.jpg', price: '1820 RP' }
        ]
      },
      {
        id: 'leona',
        name: 'Leona',
        roles: ['Support'],
        image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg",
        difficulty: 'Moderate',
        stats: {
          attack: 40,
          defense: 85,
          magic: 30,
          difficulty: 45
        },
        lore: 'Imbued with the fire of the sun, Leona is a holy warrior of the Solari who defends Mount Targon with her Zenith Blade and the Shield of Daybreak.',
        abilities: {
          passive: 'Sunlight: Leona\'s abilities mark enemies with Sunlight.',
          q: 'Shield of Daybreak: Leona\'s next attack stuns the target.',
          w: 'Eclipse: Leona gains bonus armor and magic resistance.',
          e: 'Zenith Blade: Leona projects a solar image of her sword.',
          r: 'Solar Flare: Leona calls down a beam of solar energy.'
        },
        skins: [
          { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg', price: 'Default' },
          { name: 'Solar Eclipse', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_11.jpg', price: '1820 RP' }
        ]
      },
      {
        id: 'lillia',
        name: 'Lillia',
        roles: ['Jungle'],
        image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg",
        difficulty: 'Moderate',
        stats: {
          attack: 45,
          defense: 50,
          magic: 75,
          difficulty: 65
        },
        lore: 'Intensely shy, the fae fawn Lillia skittishly wanders Ionia\'s forests. She searches for the dreams of mortals to harvest and weave into blooming dreams of her own.',
        abilities: {
          passive: 'Dream-Laden Bough: Lillia\'s abilities apply Dream Dust, dealing bonus damage.',
          q: 'Blooming Blows: Lillia swings her branch in a circle.',
          w: 'Watch Out! Eep!: Lillia winds up and strikes an area with her branch.',
          e: 'Swirlseed: Lillia bowls a seed that deals damage and slows.',
          r: 'Lilting Lullaby: Lillia casts a lullaby that puts drowsy enemies to sleep.'
        },
        skins: [
          { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg', price: 'Default' },
          { name: 'Spirit Blossom', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_1.jpg', price: '1350 RP' }
        ]
      },
      {
        id: 'lissandra',
        name: 'Lissandra',
        roles: ['Mid'],
        image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg",
        difficulty: 'Moderate',
        stats: {
          attack: 30,
          defense: 50,
          magic: 85,
          difficulty: 60
        },
        lore: 'Lissandra\'s magic twists the pure power of ice into something dark and terrible. With the force of her black ice, she does more than freeze—she impales and crushes those who oppose her.',
        abilities: {
          passive: 'Iceborn Subjugation: When an enemy champion dies near Lissandra, they become a Frozen Thrall.',
          q: 'Ice Shard: Lissandra throws a spear of ice.',
          w: 'Ring of Frost: Lissandra freezes nearby enemies.',
          e: 'Glacial Path: Lissandra creates an ice claw that she can reactivate to dash to.',
          r: 'Frozen Tomb: Lissandra freezes a target champion or herself.'
        },
        skins: [
          { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg', price: 'Default' },
          { name: 'Dark Cosmic', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_5.jpg', price: '1350 RP' }
        ]
      },
      {
        id: 'lucian',
        name: 'Lucian',
        roles: ['ADC'],
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg",
        difficulty: 'Moderate',
        stats: {
          attack: 85,
          defense: 45,
          magic: 30,
          difficulty: 65
        },
        lore: 'Once a Sentinel of Light, Lucian is a grim hunter of undying spirits, pursuing them relentlessly and annihilating them with his twin relic pistols.',
        abilities: {
          passive: 'Lightslinger: After using an ability, Lucian\'s next attack fires twice.',
          q: 'Piercing Light: Lucian shoots a bolt of light through a target.',
          w: 'Ardent Blaze: Lucian fires a shot that explodes in a cross pattern.',
          e: 'Relentless Pursuit: Lucian dashes a short distance.',
          r: 'The Culling: Lucian rapidly fires shots in a direction.'
        },
        skins: [
          { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg', price: 'Default' },
          { name: 'High Noon', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_7.jpg', price: '1820 RP' }
        ]
      },
  {
    id: 'lulu',
    name: 'Lulu',
    roles: ['Support'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 40,
      defense: 40,
      magic: 70,
      difficulty: 55
    },
    lore: 'The yordle mage Lulu is known for conjuring dreamlike illusions and fanciful creatures as she roams Runeterra with her fairy companion Pix.',
    abilities: {
      passive: 'Pix, Faerie Companion: Pix fires magical bolts when Lulu attacks.',
      q: 'Glitterlance: Lulu and Pix each fire a bolt of magical energy.',
      w: 'Whimsy: Lulu transforms an enemy into a harmless critter.',
      e: 'Help, Pix!: Lulu shields an ally or damages an enemy.',
      r: 'Wild Growth: Lulu enlarges an ally, knocking nearby enemies airborne.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg', price: 'Default' },
      { name: 'Space Groove', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_8.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'lux',
    name: 'Lux',
    roles: ['Mid', 'Support'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
    difficulty: 'Easy',
    stats: {
      attack: 30,
      defense: 40,
      magic: 90,
      difficulty: 45
    },
    lore: 'Luxanna Crownguard hails from Demacia, an isolated realm where magical abilities are viewed with fear and suspicion.',
    abilities: {
      passive: 'Illumination: Lux\'s abilities mark enemies with light energy.',
      q: 'Light Binding: Lux releases a sphere of light that binds two enemies.',
      w: 'Prismatic Barrier: Lux throws her wand to shield allies.',
      e: 'Lucent Singularity: Lux slows and damages enemies in an area.',
      r: 'Final Spark: Lux fires a massive laser beam of light.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg', price: 'Default' },
      { name: 'Elementalist', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg', price: '3250 RP' }
    ]
  },
  {
    id: 'malphite',
    name: 'Malphite',
    roles: ['Top', 'Support'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg",
    difficulty: 'Easy',
    stats: {
      attack: 50,
      defense: 90,
      magic: 60,
      difficulty: 30
    },
    lore: 'A massive creature of living stone, Malphite was born from the heart of the great Monolith to serve as the ultimate weapon.',
    abilities: {
      passive: 'Granite Shield: Malphite gains a shield based on his maximum health.',
      q: 'Seismic Shard: Malphite steals movement speed from a target.',
      w: 'Thunderclap: Malphite\'s attacks deal splash damage.',
      e: 'Ground Slam: Malphite slams the ground, reducing attack speed.',
      r: 'Unstoppable Force: Malphite charges to a location, knocking up enemies.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg', price: 'Default' },
      { name: 'Dark Star', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_9.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'malzahar',
    name: 'Malzahar',
    roles: ['Mid'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 30,
      defense: 40,
      magic: 90,
      difficulty: 55
    },
    lore: 'A zealous seer dedicated to the unification of all life, Malzahar truly believes the newly emergent Void to be the path to Runeterra\'s salvation.',
    abilities: {
      passive: 'Void Shift: Malzahar periodically gains a spell shield.',
      q: 'Call of the Void: Malzahar opens two portals that shoot projectiles.',
      w: 'Void Swarm: Malzahar summons Voidlings to attack enemies.',
      e: 'Malefic Visions: Malzahar infects a target\'s mind with visions of the Void.',
      r: 'Nether Grasp: Malzahar suppresses a target champion.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg', price: 'Default' },
      { name: 'Battle Boss', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_7.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'maokai',
    name: 'Maokai',
    roles: ['Top', 'Support'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 40,
      defense: 85,
      magic: 60,
      difficulty: 45
    },
    lore: 'Maokai is a mighty treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical cataclysm destroyed his home.',
    abilities: {
      passive: 'Sap Magic: Maokai\'s abilities store healing power from nearby spells.',
      q: 'Bramble Smash: Maokai slams the ground, damaging and slowing enemies.',
      w: 'Twisted Advance: Maokai roots himself to a target.',
      e: 'Sapling Toss: Maokai throws a sapling that explodes.',
      r: 'Nature\'s Grasp: Maokai summons a wave of roots.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg', price: 'Default' },
      { name: 'Worldbreaker', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_7.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'masteryi',
    name: 'Master Yi',
    roles: ['Jungle'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 90,
      defense: 40,
      magic: 20,
      difficulty: 45
    },
    lore: 'Master Yi has tempered his body and sharpened his mind, so that thought and action have become almost as one.',
    abilities: {
      passive: 'Double Strike: Every few attacks, Master Yi strikes twice.',
      q: 'Alpha Strike: Master Yi becomes untargetable and strikes multiple enemies.',
      w: 'Meditate: Master Yi channels to heal himself.',
      e: 'Wuju Style: Master Yi\'s attacks deal true damage.',
      r: 'Highlander: Master Yi gains movement speed and attack speed.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg', price: 'Default' },
      { name: 'Cosmic Blade', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_9.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'milio',
    name: 'Milio',
    roles: ['Support'],
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Milio_0.jpg",
    difficulty: 'Easy',
    stats: {
      attack: 20,
      defense: 40,
      magic: 80,
      difficulty: 25
    },
    lore: 'Milio, a kindhearted boy from Ixtal, wields the soothing power of fire to aid and protect his allies with his warm flames.',
    abilities: {
      passive: 'Fired Up!: Milio’s abilities enchant allies, causing their next attack to deal bonus magic damage and burn the target.',
      q: 'Ultra Mega Fire Kick: Milio kicks a fireball that knocks back enemies and then explodes in a small area.',
      w: 'Cozy Campfire: Milio creates a zone that heals allies and grants them increased attack range.',
      e: 'Warm Hugs: Milio shields an ally and grants them bonus movement speed.',
      r: 'Breath of Life: Milio unleashes a wave of soothing flames, healing allies and removing crowd control effects.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Milio_0.jpg', price: 'Default' },
      { name: 'Faerie Court Milio', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Milio_1.jpg', price: '1350 RP' }
    ]
},

  {
    id: 'missfortune',
    name: 'Miss Fortune',
    roles: ['ADC'],
    image:  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg",
    difficulty: 'Easy',
    stats: {
      attack: 85,
      defense: 30,
      magic: 40,
      difficulty: 35
    },
    lore: 'A Bilgewater captain famed for her looks but feared for her ruthlessness, Sarah Fortune paints a stark figure among the hardened criminals of the port city.',
    abilities: {
      passive: 'Love Tap: Miss Fortune deals bonus damage when attacking a new target.',
      q: 'Double Up: Miss Fortune fires a shot that bounces to a target behind.',
      w: 'Strut: Miss Fortune gains movement speed when not taking damage.',
      e: 'Make It Rain: Miss Fortune reveals and slows enemies in an area.',
      r: 'Bullet Time: Miss Fortune channels a barrage of bullets in a cone.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg', price: 'Default' },
      { name: 'Gun Goddess', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_16.jpg', price: '3250 RP' }
    ]
  },
  {
    id: 'mordekaiser',
    name: 'Mordekaiser',
    roles: ['Top'],
    image:  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 60,
      defense: 70,
      magic: 80,
      difficulty: 45
    },
    lore: 'Twice slain and thrice born, Mordekaiser is a brutal warlord from a foregone epoch who uses his necromantic sorcery to bind souls into an eternal servitude.',
    abilities: {
      passive: 'Darkness Rise: Mordekaiser gains a damage aura after hitting abilities.',
      q: 'Obliterate: Mordekaiser smashes his mace down.',
      w: 'Indestructible: Mordekaiser gains a shield and healing.',
      e: 'Death\'s Grasp: Mordekaiser pulls enemies in a direction.',
      r: 'Realm of Death: Mordekaiser banishes a target to the Death Realm.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg', price: 'Default' },
      { name: 'Dark Star', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_5.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'morgana',
    name: 'Morgana',
    roles: ['Support', 'Mid'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg",
    difficulty: 'Easy',
    stats: {
      attack: 30,
      defense: 50,
      magic: 85,
      difficulty: 40
    },
    lore: 'Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt.',
    abilities: {
      passive: 'Soul Siphon: Morgana heals from damage dealt to champions and large monsters.',
      q: 'Dark Binding: Morgana fires a sphere of dark magic that roots.',
      w: 'Tormented Shadow: Morgana creates a pool of cursed ground.',
      e: 'Black Shield: Morgana shields an ally from magic damage.',
      r: 'Soul Shackles: Morgana latches chains to nearby enemy champions.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg', price: 'Default' },
      { name: 'Coven', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_11.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'naafiri',
    name: 'Naafiri',
    roles: ['Mid', 'Jungle'],
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Naafiri_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 85,
      defense: 50,
      magic: 30,
      difficulty: 40
    },
    lore: 'Naafiri, a Darkin trapped within a pack of dune hounds, seeks dominance with her newfound unity, leading her kin to hunt together as one.',
    abilities: {
      passive: 'We Are More: Naafiri summons packmates that attack her enemies alongside her.',
      q: 'Darkin Daggers: Naafiri hurls daggers that deal damage and apply bleeding effects.',
      w: 'Hounds’ Pursuit: Naafiri and her packmates dash toward an enemy, dealing damage upon impact.',
      e: 'Eviscerate: Naafiri lunges forward, slashing enemies in her path and resetting her packmates’ positions.',
      r: 'The Call of the Pack: Naafiri empowers herself, gaining increased stats and summoning additional packmates for a short duration.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Naafiri_0.jpg', price: 'Default' },
      { name: 'Ascended Naafiri', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Naafiri_1.jpg', price: '1350 RP' }
    ]
},
  {
    id: 'nami',
    name: 'Nami',
    roles: ['Support'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 40,
      defense: 45,
      magic: 75,
      difficulty: 55
    },
    lore: 'A headstrong young vastaya of the seas, Nami was the first of the Marai tribe to leave the waves and venture onto dry land.',
    abilities: {
      passive: 'Surging Tides: Nami\'s abilities buff allies\' movement speed.',
      q: 'Aqua Prison: Nami sends a bubble that knocks up enemies.',
      w: 'Ebb and Flow: Nami releases a stream of water that bounces.',
      e: 'Tidecaller\'s Blessing: Nami enchants an ally\'s attacks.',
      r: 'Tidal Wave: Nami summons a massive wave.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg', price: 'Default' },
      { name: 'Cosmic Destiny', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_8.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'nasus',
    name: 'Nasus',
    roles: ['Top'],
    image:  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 70,
      defense: 75,
      magic: 60,
      difficulty: 45
    },
    lore: 'Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert.',
    abilities: {
      passive: 'Soul Eater: Nasus gains lifesteal.',
      q: 'Siphoning Strike: Nasus empowers his next attack, permanently gaining stacks.',
      w: 'Wither: Nasus ages an enemy champion, slowing them.',
      e: 'Spirit Fire: Nasus creates a damaging zone that reduces armor.',
      r: 'Fury of the Sands: Nasus transforms, gaining health and dealing damage.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg', price: 'Default' },
      { name: 'Lunar Guardian', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_9.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'nautilus',
    name: 'Nautilus',
    roles: ['Support'],
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 45,
      defense: 85,
      magic: 55,
      difficulty: 50
    },
    lore: 'A lonely legend as old as the first piers sunk in Bilgewater, the armored goliath known as Nautilus roams the dark waters off the coast of the Blue Flame Isles.',
    abilities: {
      passive: 'Staggering Blow: First attack against a target roots them.',
      q: 'Dredge Line: Nautilus throws his anchor and pulls himself to terrain.',
      w: 'Titan\'s Wrath: Nautilus gains a shield and bonus damage.',
      e: 'Riptide: Nautilus creates waves of explosions.',
      r: 'Depth Charge: Nautilus launches a depth charge that knocks up enemies.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg', price: 'Default' },
      { name: 'Astronautilus', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_5.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'neeko',
    name: 'Neeko',
    roles: ['Mid', 'Support'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 45,
      defense: 50,
      magic: 80,
      difficulty: 60
    },
    lore: 'Hailing from a long lost tribe of vastaya, Neeko can blend into any crowd by borrowing the appearances of others.',
    abilities: {
      passive: 'Inherent Glamour: Neeko can disguise herself as an ally.',
      q: 'Blooming Burst: Neeko throws a seed that blooms and damages.',
      w: 'Shapesplitter: Neeko briefly becomes invisible and creates a clone.',
      e: 'Tangle-Barbs: Neeko throws a magical spiral that roots enemies.',
      r: 'Pop Blossom: Neeko leaps and creates a massive explosion.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg', price: 'Default' },
      { name: 'Star Guardian', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_3.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'nidalee',
    name: 'Nidalee',
    roles: ['Jungle'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg",
    difficulty: 'Hard',
    stats: {
      attack: 50,
      defense: 40,
      magic: 70,
      difficulty: 80
    },
    lore: 'Raised in the deepest jungle, Nidalee is a master tracker who can shapeshift into a ferocious cougar at will.',
    abilities: {
      passive: 'Prowl: Nidalee gains movement speed in brush.',
      q: 'Javelin Toss/Takedown: Throws a spear/Pounces at enemies.',
      w: 'Bushwhack/Pounce: Sets a trap/Leaps in a direction.',
      e: 'Primal Surge/Swipe: Heals and buffs/Claws in an arc.',
      r: 'Aspect of the Cougar: Nidalee transforms between human and cougar.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg', price: 'Default' },
      { name: 'DWG', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_27.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'nilah',
    name: 'Nilah',
    roles: ['ADC'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg",
    difficulty: 'Hard',
    stats: {
      attack: 85,
      defense: 45,
      magic: 60,
      difficulty: 75
    },
    lore: 'Nilah is an ascetic warrior from a distant land, seeking the world\'s deadliest creatures and most powerful demons.',
    abilities: {
      passive: 'Joy Unbound: Nilah shares experience with nearby allies.',
      q: 'Formless Blade: Nilah lashes out with her water whip.',
      w: 'Jubilant Veil: Creates a mist that dodges attacks.',
      e: 'Slipstream: Dashes through a target, dealing damage.',
      r: 'Apotheosis: Pulls in and damages nearby enemies.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg', price: 'Default' },
      { name: 'Star Guardian', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_1.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'nocturne',
    name: 'Nocturne',
    roles: ['Jungle'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 85,
      defense: 50,
      magic: 45,
      difficulty: 55
    },
    lore: 'A demonic figure of pure nightmare, Nocturne is a fusion of countless horrors that haunt the minds of mortals.',
    abilities: {
      passive: 'Umbra Blades: Nocturne\'s attacks periodically heal him.',
      q: 'Duskbringer: Leaves a trail that increases attack damage.',
      w: 'Shroud of Darkness: Blocks next enemy ability.',
      e: 'Unspeakable Horror: Tethers to an enemy, fearing them.',
      r: 'Paranoia: Darkens the map and dashes to a target.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg', price: 'Default' },
      { name: 'Hextech', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_9.jpg', price: 'Gemstone' }
    ]
  },
  {
    id: 'nunu',
    name: 'Nunu & Willump',
    roles: ['Jungle'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg",
    difficulty: 'Easy',
    stats: {
      attack: 40,
      defense: 65,
      magic: 70,
      difficulty: 45
    },
    lore: 'Once upon a time, there was a boy who wanted to prove he was a hero by slaying a fearsome monster—only to discover that the beast was a lonely yeti who just needed a friend.',
    abilities: {
      passive: 'Call of the Freljord: Gains movement speed near allies.',
      q: 'Consume: Bites a target, dealing damage and healing.',
      w: 'Biggest Snowball Ever!: Rolls a snowball that grows in size.',
      e: 'Snowball Barrage: Throws multiple snowballs.',
      r: 'Absolute Zero: Channels and creates a massive explosion.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg', price: 'Default' },
      { name: 'Space Groove', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_16.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'olaf',
    name: 'Olaf',
    roles: ['Top', 'Jungle'],
    image:  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 75,
      defense: 60,
      magic: 30,
      difficulty: 50
    },
    lore: 'An unstoppable force of destruction, the axe-wielding Olaf wants nothing but to die in glorious combat.',
    abilities: {
      passive: 'Berserker Rage: Gains attack speed at low health.',
      q: 'Undertow: Throws an axe that slows enemies.',
      w: 'Vicious Strikes: Gains lifesteal and attack speed.',
      e: 'Reckless Swing: Deals true damage to target.',
      r: 'Ragnarok: Immune to crowd control effects.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg', price: 'Default' },
      { name: 'Sentinel', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_9.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'orianna',
    name: 'Orianna',
    roles: ['Mid'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg",
    difficulty: 'Hard',
    stats: {
      attack: 40,
      defense: 30,
      magic: 90,
      difficulty: 75
    },
    lore: 'Once a curious girl of flesh and blood, Orianna is now a technological marvel comprised entirely of clockwork.',
    abilities: {
      passive: 'Clockwork Windup: Basic attacks deal bonus magic damage.',
      q: 'Command: Attack: Sends the Ball to a target location.',
      w: 'Command: Dissonance: Creates a pulse around the Ball.',
      e: 'Command: Protect: Shields an ally and damages enemies.',
      r: 'Command: Shockwave: The Ball releases a shockwave.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg', price: 'Default' },
      { name: 'Dark Star', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_7.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'ornn',
    name: 'Ornn',
    roles: ['Top'],
    image:  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 60,
      defense: 80,
      magic: 55,
      difficulty: 65
    },
    lore: 'Ornn is the Freljordian spirit of forging and craftsmanship. He works in the solitude of a massive smithy, hammered out from the lava caverns beneath the volcano Hearth-Home.',
    abilities: {
      passive: 'Living Forge: Can forge items anywhere.',
      q: 'Volcanic Rupture: Creates a fissure that slows.',
      w: 'Bellows Breath: Breathes fire that makes enemies brittle.',
      e: 'Searing Charge: Charges and creates terrain.',
      r: 'Call of the Forge God: Summons an elemental that can be redirected.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg', price: 'Default' },
      { name: 'Thunder Lord', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_1.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'pantheon',
    name: 'Pantheon',
    roles: ['Top', 'Mid'],
    image:  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 80,
      defense: 60,
      magic: 40,
      difficulty: 55
    },
    lore: 'Once an unwilling host to the Aspect of War, Atreus survived when the celestial power within him was slain, refusing to succumb to a blow that tore stars from the heavens.',
    abilities: {
      passive: 'Mortal Will: Empowers abilities after five hits.',
      q: 'Comet Spear: Throws a spear or stabs forward.',
      w: 'Shield Vault: Leaps to an enemy and stuns them.',
      e: 'Aegis Assault: Blocks damage from a direction.',
      r: 'Grand Starfall: Leaps high into the air to strike.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg', price: 'Default' },
      { name: 'Pulsefire', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_9.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'poppy',
    name: 'Poppy',
    roles: ['Top', 'Mid'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 65,
      defense: 55,
      magic: 75,
      difficulty: 55
    },
    lore: 'Poppy, the Pilfered Heart, was once a hero of the Crystal Scar, a land of mystery and betrayal. Her heart, once pure and bright, was now a shroud of darkness, a beacon of fear and despair.',
    abilities: { 
      passive: 'Rejuvenation: Regenerates health over time.',
      q: 'Blessed Body: Increases healing received.',
      w: 'Revitalize: Restores health and mana.',
      e: 'Power Word: Silences an enemy and deals damage.',
      r: 'Celestial Shield: Grants a shield for the next 5 seconds.'
      },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg', price: 'Default' },
      { name: 'Dragonfire', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_10.jpg', price: '1350 RP' }
    ]
  },
{
    
    id: 'pyke',
    name: 'Pyke',
    roles: ['Support', 'Assassin'],
    image:  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg",
    difficulty: 'High',
    stats: {
      attack: 85,
      defense: 40,
      magic: 50,
      difficulty: 90
    },
    lore: 'A spectral killer from the depths, Pyke stalks the shadows to claim the lives of those who wronged him.',
    abilities: {
      passive: 'Gift of the Drowned Ones: Gains bonus gold on executing foes.',
      q: 'Bone Skewer: Throws a harpoon that stuns and pulls enemies.',
      w: 'Ghostwater Dive: Becomes briefly invisible and gains movement speed.',
      e: 'Phantom Undertow: Dashes and leaves a bloody trail that slows enemies.',
      r: 'Death from Below: Lures and executes low-health enemies for bonus rewards.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg', price: 'Default' },
      { name: 'Nightfall', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_1.jpg', price: '1350 RP' }]
    },
    {
    id: 'qiyana',
    name: 'Qiyana',
    roles: ['Mid', 'Assassin'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg",
    difficulty: 'High',
    stats: {
      attack: 90,
      defense: 40,
      magic: 55,
      difficulty: 95
    },
    lore: 'The Empress of the Elements, Qiyana manipulates the power of nature to dominate her foes with deadly precision.',
    abilities: {
      passive: 'Royal Privilege: Gains bonus effects on her abilities based on the terrain.',
      q: 'Edge of Ixtal: Strikes with elemental force, dealing bonus damage.',
      w: 'Terrashape: Creates terrain effects to empower her next attack.',
      e: 'Audacity: Dashes and enhances her basic attacks.',
      r: 'Supreme Display of Talent: Unleashes a burst of elemental fury that devastates enemies.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg', price: 'Default' },
      { name: 'Amethyst', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_1.jpg', price: '1350 RP' }]
    },
    {
    id: 'quin',
    name: 'Quinn',
    roles: ['Top', 'ADC'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 80,
      defense: 50,
      magic: 30,
      difficulty: 60
    },
    lore: 'With unmatched speed and precision, Quinn and her loyal companion Valor strike fear into the hearts of their enemies from above.',
    abilities: {
      passive: 'Harrier: Quinn marks targets to gain bonus movement speed on them.',
      q: 'Blinding Assault: Fires a burst of energy, blinding and damaging foes.',
      w: 'Vault: Leaps over enemies or obstacles, repositioning herself.',
      e: 'Heightened Senses: Gains vision of a target area and increased attack speed.',
      r: 'Behind Enemy Lines: Soars across the battlefield for rapid, decisive strikes.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'rakan',
    name: 'Rakan',
    roles: ['Support'],
    image:  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 65,
      defense: 55,
      magic: 70,
      difficulty: 60
    },
    lore: 'Charismatic and acrobatic, Rakan dances into battle to charm allies and confound enemies with his swift moves.',
    abilities: {
      passive: 'Dazzling Grace: Rakan’s abilities grant movement speed to nearby allies.',
      q: 'Gleaming Quill: Launches a feather that damages and charms enemies.',
      w: 'Grand Entrance: Dashes and shields allies upon arrival.',
      e: 'Battle Dance: Increases his movement speed and provides bonus effects to allies he touches.',
      r: 'The Quickness: Charges into the fray, stunning enemies and empowering his team.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'rammus',
    name: 'Rammus',
    roles: ['Jungle', 'Tank'],
    image:  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg",
    difficulty: 'Low',
    stats: {
      attack: 50,
      defense: 90,
      magic: 40,
      difficulty: 30
    },
    lore: 'A living tank with an armored shell, Rammus rolls into battle to taunt and absorb enemy attacks.',
    abilities: {
      passive: 'Spiked Shell: Reflects damage to attackers.',
      q: 'Powerball: Rolls forward, knocking up enemies in his path.',
      w: 'Defensive Ball Curl: Gains a temporary boost in armor and magic resistance.',
      e: 'Puncturing Taunt: Forces enemies to attack him while reducing their damage output.',
      r: 'Tremors: Stomps the ground, dealing area damage around him.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'reksai',
    name: "Rek'sai",
    roles: ['Jungle'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg",
    difficulty: 'High',
    stats: {
      attack: 80,
      defense: 70,
      magic: 40,
      difficulty: 85
    },
    lore: 'A monstrous void burrower, Rek’sai tunnels beneath the battlefield, emerging to wreak havoc on unsuspecting foes.',
    abilities: {
      passive: 'Unburrow/ Burrow: Alternates between burrowed and unburrowed forms for diverse attacks.',
      q: 'Prey Seeker: Digs through the ground to reveal and damage enemies.',
      w: 'Fury of the Void: Charges up to enhance her next attack.',
      e: 'Bone Storm: Spins rapidly, dealing damage to nearby enemies.',
      r: 'Void Rush: Dashes across the map, knocking aside any enemies in her path.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Reksai_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Reksai_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'rell',
    name: 'Rell',
    roles: ['Support', 'Tank'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg",
    difficulty: 'High',
    stats: {
      attack: 55,
      defense: 85,
      magic: 60,
      difficulty: 80
    },
    lore: 'Forged in the crucible of war, Rell is a magnetic force who manipulates metal to shield her allies and shatter her foes.',
    abilities: {
      passive: 'Magnetized: Gains additional effects when near allies or enemies.',
      q: 'Shattering Strike: Swings her weapon to pull enemies closer.',
      w: 'Attract and Repel: Draws enemies in before pushing them away with force.',
      e: 'Mount Up!: Grabs an ally and charges, providing bonus defenses.',
      r: 'Magnet Storm: Unleashes a magnetic surge that stuns and damages multiple foes.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_1.jpg', price: '1350 RP' }]
    },
    {
    id: 'renata-glasc',
    name: 'Renata Glasc',
    roles: ['Support'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renata_0.jpg",
    difficulty: 'High',
    stats: {
      attack: 45,
      defense: 65,
      magic: 85,
      difficulty: 80
    },
    lore: 'A cunning chem-baron from a fractured society, Renata Glasc uses her persuasive prowess and toxic concoctions to bend others to her will.',
    abilities: {
      passive: 'Custodian Contracts: Gains benefits when aiding allies or hindering foes.',
      q: 'Acidic Burst: Throws a vial that damages and applies a debuff to enemies.',
      w: 'Bailout: Sacrifices part of her own health to shield an ally.',
      e: 'Blindside: Dashes to an enemy, leaving a trail of corrosive chemicals.',
      r: 'Hostile Takeover: Temporarily converts enemies to fight for her side.'
    }, 
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'renekton',
    name: 'Renekton',
    roles: ['Top'],
    image:  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 85,
      defense: 75,
      magic: 30,
      difficulty: 55
    },
    lore: 'A ferocious, ancient warrior with a bloodied past, Renekton uses his brute strength to dominate the battlefield and carve his legacy.',
    abilities: {
      passive: 'Ruthless Predator: Empowers his basic attacks after landing abilities.',
      q: 'Cull the Meek: Swings his blade in a wide arc, damaging foes.',
      w: 'Slice and Dice: Dashes forward to slash multiple enemies.',
      e: 'Dominus: Roars to enhance his damage and recover health briefly.',
      r: 'Ruthless Onslaught: Unleashes a flurry of strikes that devastates his enemies.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_1.jpg', price: '1350 RP' }]
    },
    {
    id: 'rengar',
    name: 'Rengar',
    roles: ['Jungle', 'Assassin'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg",
    difficulty: 'High',
    stats: {
      attack: 90,
      defense: 65,
      magic: 30,
      difficulty: 95
    },
    lore: 'A fearsome predator who stalks the jungles, Rengar hunts down his prey with unmatched ferocity and a relentless thirst for the thrill of the chase.',
    abilities: {
      passive: 'Unseen Predator: Gains bonus movement speed when in brush or near enemies.',
      q: 'Savagery: Leaps onto an enemy for a deadly strike.',
      w: 'Battle Roar: Roars to gain bonus damage and intimidate foes.',
      e: 'Bola Strike: Throws a bola to slow and damage his target.',
      r: 'Thrill of the Hunt: Enters stealth and gains immense tracking speed, revealing weak targets.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'riven',
    name: 'Riven',
    roles: ['Mid', 'Top'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg",
    difficulty: 'High',
    stats: {
      attack: 90,
      defense: 60,
      magic: 30,
      difficulty: 95
    },
    lore: 'Exiled and burdened by her past, Riven wields a broken sword with unmatched resolve, seeking redemption through every battle.',
    abilities: {
      passive: 'Runic Blade: Her abilities charge her weapon, enhancing her attacks.',
      q: 'Broken Wings: Delivers a series of slashes that deal damage.',
      w: 'Ki Burst: Releases a burst of energy that stuns enemies.',
      e: 'Valor: Dashes and gains a temporary shield.',
      r: 'Blade of the Exile: Unleashes a devastating combo of strikes with empowered damage.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'rumble',
    name: 'Rumble',
    roles: ['Top', 'Mid'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 70,
      defense: 65,
      magic: 80,
      difficulty: 70
    },
    lore: 'Armed with a mechanized suit and a love for mayhem, Rumble uses his incendiary gadgets to control the battlefield and outsmart his foes.',
    abilities: {
      passive: 'Hextech Affinity: Gains bonus effects when using his abilities in succession.',
      q: 'Flamespitter: Unleashes a cone of fire that burns enemies.',
      w: 'Scrap Shield: Activates a temporary shield that absorbs damage.',
      e: 'Electro Harpoon: Fires a ranged shot that slows and damages targets.',
      r: 'The Equalizer: Deploys a line of rocket turrets that bombard the enemy area.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'ryze',
    name: 'Ryze',
    roles: ['Mid'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg",
    difficulty: 'High',
    stats: {
      attack: 60,
      defense: 40,
      magic: 95,
      difficulty: 90
    },
    lore: 'A master of arcane arts, Ryze roams the world to collect forbidden runes, wielding devastating spells that can alter the course of history.',
    abilities: {
      passive: 'Rune Mastery: Ryze’s abilities charge his spells for increased damage.',
      q: 'Overload: Casts a bolt of arcane energy that bounces between enemies.',
      w: 'Rune Prison: Traps an enemy in a cage of runes, stunning them.',
      e: 'Spell Flux: Unleashes a wave of magic that deals area damage.',
      r: 'Realm Warp: Teleports himself and nearby allies to a targeted location.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'samira',
    name: 'Samira',
    roles: ['ADC'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg",
    difficulty: 'High',
    stats: {
      attack: 90,
      defense: 50,
      magic: 40,
      difficulty: 95
    },
    lore: 'Bold, brash, and breathtakingly stylish, Samira thrives on the chaos of battle, weaving together close combat and long-range shots into a dazzling display.',
    abilities: {
      passive: 'Daredevil Impulse: Gains bonus effects for chaining attacks.',
      q: 'Flair: Delivers a stylish shot that deals damage and may crit.',
      w: 'Blade Whirl: Spins to slash all nearby enemies.',
      e: 'Wild Rush: Dashes through enemies, chaining strikes.',
      r: 'Inferno Trigger: Unleashes a rapid flurry of shots with escalating damage.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'sejuani',
    name: 'Sejuani',
    roles: ['Jungle', 'Tank'],
    image:  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 70,
      defense: 85,
      magic: 55,
      difficulty: 60
    },
    lore: 'The iceborn warrior Sejuani rides into battle atop her fearsome warboar, freezing enemies with her relentless assault and impenetrable armor.',
    abilities: {
      passive: 'Fury of the North: Builds bonus damage as she fights.',
      q: 'Arctic Assault: Charges forward, dealing damage and slowing foes.',
      w: 'Winter’s Wrath: Swings her flail in a wide arc, hitting multiple enemies.',
      e: 'Permafrost: Slams the ground to stun and chill adversaries.',
      r: 'Glacial Prison: Encases enemies in a block of ice, immobilizing them temporarily.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'senna',
    name: 'Senna',
    roles: ['Support', 'ADC'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 70,
      defense: 50,
      magic: 65,
      difficulty: 60
    },
    lore: 'Bound by darkness yet striving for the light, Senna walks a lonely path—balancing the duality of her cursed existence as both savior and scourge.',
    abilities: {
      passive: 'Absolution: Her attacks grant bonus range and healing to allies.',
      q: 'Piercing Darkness: Fires a beam of light that damages enemies.',
      w: 'Last Embrace: Sends out a mist that shields allies and slows foes.',
      e: 'Curse of the Black Mist: Marks enemies, increasing damage they take.',
      r: 'Dawning Shadow: Unleashes a sweeping wave that heals allies and harms enemies.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'seraphine',
    name: 'Seraphine',
    roles: ['Mid', 'Support'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 55,
      defense: 45,
      magic: 85,
      difficulty: 65
    },
    lore: 'A starry-eyed songstress with a passion for performance, Seraphine’s melodies can uplift her allies and confound her enemies alike.',
    abilities: {
      passive: 'Stage Presence: Gains bonus effects when near allied champions.',
      q: 'High Note: Releases a sonic burst that damages enemies.',
      w: 'Surround Sound: Creates an aura that boosts allies’ magic damage.',
      e: 'Beat Drop: Sends out a rhythmic pulse that slows and damages foes.',
      r: 'Encore: Unleashes a powerful, area-healing and damaging song.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_1.jpg', price: '1350 RP' }]
    },
    {
    id: 'sett',
    name: 'Sett',
    roles: ['Top'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg",
    difficulty: 'Moderate',
    stats: {
      attack: 85,
      defense: 70,
      magic: 35,
      difficulty: 65
    },
    lore: 'A brawler with a heart as big as his fists, Sett dominates the battlefield through raw strength and an unyielding presence.',
    abilities: {
      passive: 'Pit Grit: Gains bonus attack speed and damage after taking damage.',
      q: 'Knuckle Down: Strikes with powerful punches in rapid succession.',
      w: 'Haymaker: Charges up a devastating blow that knocks enemies back.',
      e: 'Facebreaker: Grabs an enemy champion, dealing damage over time.',
      r: 'The Show Stopper: Executes a massive slam that damages and displaces all nearby enemies.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'shaco',
    name: 'Shaco',
    roles: ['Jungle', 'Assassin'],
    image:  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg",
    difficulty: 'High',
    stats: {
      attack: 85,
      defense: 40,
      magic: 40,
      difficulty: 95
    },
    lore: 'A deranged trickster who revels in chaos, Shaco uses deceit and trickery to confound enemies and secure his kills.',
    abilities: {
      passive: 'Backstab: Gains bonus damage when attacking from stealth.',
      q: 'Deceive: Becomes invisible and gains bonus movement speed.',
      w: 'Jack in the Box: Places a box that fears and damages nearby foes.',
      e: 'Two-Shiv Poison: Throws a dagger that damages and slows enemies.',
      r: 'Hallucinate: Creates a clone to confuse and ambush his enemies.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_1.jpg', price: '1350 RP' }]
    },
    {
    id: 'shen',
    name: 'Shen',
    roles: ['Top', 'Support'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg",
    difficulty: 'High',
    stats: {
      attack: 70,
      defense: 85,
      magic: 50,
      difficulty: 85
    },
    lore: 'The Eye of Twilight, Shen is a stoic warrior who bridges the gap between order and chaos, protecting the balance of the world.',
    abilities: {
      passive: 'Ki Barrier: Gains a shield after using an ability.',
      q: 'Vorpal Blade: Empowers his next attack with bonus damage.',
      w: 'Spirit’s Refuge: Creates a zone that blocks enemy basic attacks.',
      e: 'Shadow Dash: Dashes to an ally, taunting nearby enemies.',
      r: 'Stand United: Teleports to an ally in danger and shields them from harm.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'shyvana',
    name: 'Shyvana',
    roles: ['Jungle', 'Top'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg", 
    difficulty: 'Moderate',
    stats: {
      attack: 80,
      defense: 70,
      magic: 60,
      difficulty: 65
    },
    lore: 'Half-dragon and half-human, Shyvana harnesses her inner beast to incinerate her foes and dominate the battlefield.',
    abilities: {
      passive: 'Dragon’s Descent: Gains bonus stats as she fights longer.',
      q: 'Twin Bite: Swings her claws to damage enemies in front of her.',
      w: 'Burnout: Ignites her weapons, dealing extra damage over time.',
      e: 'Flame Breath: Exhales fire in a cone, scorching all caught within.',
      r: 'Dragon’s Fury: Transforms into a dragon, unleashing a barrage of fiery attacks.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'singed',
    name: 'Singed',
    roles: ['Top'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg", 
    difficulty: 'Moderate',
    stats: {
      attack: 70,
      defense: 75,
      magic: 65,
      difficulty: 60
    },
    lore: 'A mad chemist driven by a desire to experiment without limits, Singed leaves a trail of toxic chemicals in his wake as he disrupts enemy formations.',
    abilities: {
      passive: 'Empowered Bulwark: Gains bonus movement speed when near his toxic cloud.',
      q: 'Poison Trail: Leaves a trail of poison that damages enemies over time.',
      w: 'Mega Adhesive: Throws a vial that slows enemies caught in its sticky substance.',
      e: 'Fling: Grabs and tosses an enemy over his shoulder.',
      r: 'Insanity Potion: Temporarily boosts his damage and movement speed while leaving behind toxic trails.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_1.jpg', price: '1350 RP' }]
    },
    {
    id: 'sion',
    name: 'Sion',
    roles: ['Top', 'Jungle'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg", 
    difficulty: 'High',
    stats: {
      attack: 85,
      defense: 80,
      magic: 40,
      difficulty: 90
    },
    lore: 'Reanimated from death itself, Sion is an unstoppable juggernaut whose insatiable hunger for destruction drives him to crush anything in his path.',
    abilities: {
      passive: 'Glory in Death: After dying, Sion briefly reanimates to continue fighting.',
      q: 'Decimating Smash: Charges up a devastating strike that knocks up enemies.',
      w: 'Soul Furnace: Generates a shield that absorbs damage.',
      e: 'Roar of the Slayer: Unleashes a fearsome roar that slows and damages foes.',
      r: 'Unstoppable Onslaught: Charges forward in a straight line, demolishing anything in his way.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'sivir',
    name: 'Sivir',
    roles: ['ADC'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg", 
    difficulty: 'Moderate',
    stats: {
      attack: 85,
      defense: 55,
      magic: 40,
      difficulty: 60
    },
    lore: 'A battle-hardened warrior with a penchant for wealth and war, Sivir leads charges with her deadly boomerang blade and tactical prowess.',
    abilities: {
      passive: 'Boomerang Blade: Her attacks return to her, dealing bonus damage on the way back.',
      q: 'Boomerang Blade: Throws her blade in a curved path that damages all enemies hit.',
      w: 'Ricochet: Her attacks bounce between multiple targets.',
      e: 'Spell Shield: Blocks incoming enemy abilities.',
      r: 'On the Hunt: Boosts her movement and attack speed for a short duration.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'skarner',
    name: 'Skarner',
    roles: ['Jungle', 'Tank'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg", 
    difficulty: 'Moderate',
    stats: {
      attack: 75,
      defense: 85,
      magic: 50,
      difficulty: 60
    },
    lore: 'A crystalline brute from a forgotten realm, Skarner defends his territory with unyielding strength and a powerful, magnet-like presence.',
    abilities: {
      passive: 'Crystalline Exoskeleton: Gains bonus armor when moving towards enemies.',
      q: 'Crystal Slash: Swings his claws to deal area damage.',
      w: 'Crystalline Slash: (Empowered) Deals extra damage and slows enemies.',
      e: 'Fracture: Lashes out to mark an enemy, reducing their movement speed.',
      r: 'Impale: Grabs an enemy and lifts them high before slamming them down.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_1.jpg', price: '1350 RP' }]
    },
    {
    id: 'smolder',
    name: 'Smolder',
    roles: ['Mid'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Smolder_0.jpg", 
    difficulty: 'Moderate',
    stats: {
      attack: 70,
      defense: 60,
      magic: 75,
      difficulty: 65
    },
    lore: 'A mysterious force of burning energy, Smolder channels fiery magic to incinerate enemies from afar.',
    abilities: {
      passive: 'Ember Glow: Gains bonus magic damage after landing spells.',
      q: 'Flame Burst: Unleashes a concentrated burst of fire.',
      w: 'Scorching Trail: Leaves a trail of fire that damages enemies.',
      e: 'Burning Dash: Dashes forward leaving a trail of embers.',
      r: 'Inferno: Engulfs a large area in flames, dealing massive damage over time.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Smolder_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Smolder_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'sona',
    name: 'Sona',
    roles: ['Support', 'Mid'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg", 
    difficulty: 'Low',
    stats: {
      attack: 40,
      defense: 45,
      magic: 80,
      difficulty: 40
    },
    lore: 'A virtuoso whose melodies can soothe allies or shatter enemies, Sona communicates solely through her magical etwahl.',
    abilities: {
      passive: 'Power Chord: Her next basic attack after casting a spell deals bonus damage.',
      q: 'Hymn of Valor: Strums a chord that damages enemies and empowers allies.',
      w: 'Aria of Perseverance: Plays a tune that heals nearby allies.',
      e: 'Song of Celerity: Increases movement speed for her team.',
      r: 'Crescendo: Unleashes a powerful chord that stuns enemies caught in its path.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'soraka',
    name: 'Soraka',
    roles: ['Support'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg", 
    difficulty: 'Low',
    stats: {
      attack: 30,
      defense: 55,
      magic: 80,
      difficulty: 40
    },
    lore: 'A celestial being who descends to mend the wounds of the fallen, Soraka sacrifices her own vitality to heal and protect her allies.',
    abilities: {
      passive: 'Salvation: Gains bonus healing power when near injured allies.',
      q: 'Starcall: Calls down a star that damages enemies and heals allies when it lands.',
      w: 'Astral Infusion: Sacrifices a portion of her own health to heal an ally.',
      e: 'Equinox: Creates a zone that silences enemies.',
      r: 'Wish: Calls upon the stars to heal all allies globally.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_1.jpg', price: '1350 RP' }]
    },
    {
    id: 'swain',
    name: 'Swain',
    roles: ['Mid'],
    image:   "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg", 
    difficulty: 'High',
    stats: {
      attack: 70,
      defense: 60,
      magic: 85,
      difficulty: 85
    },
    lore: 'A master tactician with an insatiable hunger for power, Swain manipulates demonic forces and his own arcane might to command the battlefield.',
    abilities: {
      passive: 'Ravenous Flock: Gains bonus effects as he lands abilities on foes.',
      q: 'Death’s Hand: Unleashes a flurry of dark energy that damages multiple enemies.',
      w: 'Vision of Empire: Pulls enemies closer with a magnetic force.',
      e: 'Nevermove: Roots enemies in place with his oppressive power.',
      r: 'Demonic Ascension: Transforms into a powerful demon, draining the life of those around him.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_1.jpg', price: '1350 RP' }]
    },
    {
    
    id: 'sylas',
    name: 'Sylas',
    roles: ['Mid', 'Jungle'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg',
    difficulty: 'High',
    stats: {
      attack: 75,
      defense: 60,
      magic: 85,
      difficulty: 90
    },
    lore: 'Once a prisoner of magic, Sylas broke his chains to steal and wield the powers of his captors, fighting to topple the very institutions that bound him.',
    abilities: {
      passive: 'Petricite Burst: His abilities charge his next attack with bonus damage.',
      q: 'Chain Lash: Strikes with chains that damage and slow enemies.',
      w: 'Kingslayer: Dashes to an enemy, stealing a portion of their power.',
      e: 'Abscond/Abduct: Leaps or drags an enemy closer, disrupting their position.',
      r: 'Hijack: Steals an enemy champion’s ultimate ability for his own use.'
    },
    
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_1.jpg', price: '1350 RP' }]
    },
    {
    id: 'syndra',
    name: 'Syndra',
    roles: ['Mid'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg',
    difficulty: 'High',
    stats: {
      attack: 60,
      defense: 40,
      magic: 95,
      difficulty: 95
    },
    lore: 'A sorceress with boundless power, Syndra bends raw dark energy to her will, devastating her foes with unstoppable bursts of magic.',
    abilities: {
      passive: 'Transcendent: Her spells gain additional effects as she channels power.',
      q: 'Dark Sphere: Conjures a sphere of dark energy that damages enemies.',
      w: 'Force of Will: Manipulates her spheres to hurl them at opponents.',
      e: 'Scatter the Weak: Knocks enemies away with a burst of telekinetic force.',
      r: 'Unleashed Power: Releases all stored energy in a massive burst of destruction.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg', price: 'Default' },
      { name: 'Chroma', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_1.jpg', price: '1350 RP' }]
  },
  {
    id: 'tahm-kench',
    name: 'Tahm Kench',
    roles: ['Support', 'Top'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 55,
      defense: 80,
      magic: 60,
      difficulty: 50
    },
    lore: 'Known by many names throughout history, the demon Tahm Kench travels the waterways of Runeterra, feeding his insatiable appetite with the misery of others.',
    abilities: {
      passive: 'An Acquired Taste: Applies stacks to enemies hit.',
      q: 'Tongue Lash: Slows and damages enemies.',
      w: 'Abyssal Dive: Dives into the ground and emerges.',
      e: 'Thick Skin: Converts damage to gray health.',
      r: 'Devour: Swallows an ally or enemy whole.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg', price: 'Default' },
      { name: 'Master Chef', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_1.jpg', price: '975 RP' }
    ]
  },
  {
    id: 'taliyah',
    name: 'Taliyah',
    roles: ['Mid', 'Jungle'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg',
    difficulty: 'Hard',
    stats: {
      attack: 40,
      defense: 50,
      magic: 85,
      difficulty: 75
    },
    lore: 'Taliyah is a nomadic mage from Shurima who weaves stone with energetic enthusiasm and raw determination.',
    abilities: {
      passive: 'Rock Surfing: Gains movement speed near walls.',
      q: 'Threaded Volley: Throws multiple rocks.',
      w: 'Seismic Shove: Knocks enemies in a direction.',
      e: 'Unraveled Earth: Creates a field of stones.',
      r: 'Weaver\'s Wall: Creates a long wall.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg', price: 'Default' },
      { name: 'Pool Party', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_1.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'talon',
    name: 'Talon',
    roles: ['Mid'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 85,
      defense: 45,
      magic: 40,
      difficulty: 65
    },
    lore: 'Talon is the knife\'s edge of the Noxian assassin guild—feared by many and respected by few.',
    abilities: {
      passive: 'Blade\'s End: Bleeding wounds deal bonus damage.',
      q: 'Noxian Diplomacy: Leaps to a target.',
      w: 'Rake: Throws and returns blades.',
      e: 'Assassin\'s Path: Vaults over walls.',
      r: 'Shadow Assault: Sends blades outward and stealth.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg', price: 'Default' },
      { name: 'Enduring Sword', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_8.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'taric',
    name: 'Taric',
    roles: ['Support'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 55,
      defense: 85,
      magic: 65,
      difficulty: 60
    },
    lore: 'Known as the Shield of Valoran, Taric is the Aspect of the Protector, wielding incredible power as Runeterra\'s guardian of life, love, and beauty.',
    abilities: {
      passive: 'Bravado: Empowers basic attacks after abilities.',
      q: 'Starlight\'s Touch: Heals allies and stores charges.',
      w: 'Bastion: Links to an ally and grants armor.',
      e: 'Dazzle: Stuns enemies in a line.',
      r: 'Cosmic Radiance: Grants invulnerability.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg', price: 'Default' },
      { name: 'Pool Party', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_3.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'teemo',
    name: 'Teemo',
    roles: ['Top'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg',
    difficulty: 'Easy',
    stats: {
      attack: 70,
      defense: 45,
      magic: 65,
      difficulty: 40
    },
    lore: 'Undeterred by even the most dangerous and threatening of obstacles, Teemo scouts the world with boundless enthusiasm and a cheerful spirit.',
    abilities: {
      passive: 'Camouflage: Becomes invisible while standing still.',
      q: 'Blinding Dart: Blinds and damages target.',
      w: 'Move Quick: Gains passive and active speed.',
      e: 'Toxic Shot: Poisons enemies with attacks.',
      r: 'Noxious Trap: Places invisible mushroom traps.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg', price: 'Default' },
      { name: 'Omega Squad', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_14.jpg', price: '1820 RP' }
    ]
  },
  {
    id: 'thresh',
    name: 'Thresh',
    roles: ['Support'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg',
    difficulty: 'Hard',
    stats: {
      attack: 45,
      defense: 70,
      magic: 75,
      difficulty: 80
    },
    lore: 'Sadistic and cunning, Thresh is an ambitious and restless spirit of the Shadow Isles. Once a jailer who mercilessly tortured his victims, he was killed by those who could no longer bear his brutality.',
    abilities: {
      passive: 'Damnation: Collects souls to gain armor and ability power.',
      q: 'Death Sentence: Throws chain to pull enemies.',
      w: 'Dark Passage: Throws lantern to shield and save allies.',
      e: 'Flay: Pushes or pulls enemies in area.',
      r: 'The Box: Creates walls that slow and damage.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg', price: 'Default' },
      { name: 'High Noon', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_5.jpg', price: '1820 RP' }
    ]
  },
  {
    id: 'tristana',
    name: 'Tristana',
    roles: ['ADC'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg',
    difficulty: 'Easy',
    stats: {
      attack: 85,
      defense: 45,
      magic: 60,
      difficulty: 45
    },
    lore: 'While many other yordles channel their energy into discovery, invention, or just plain mischief, Tristana was always inspired by the adventures of great warriors.',
    abilities: {
      passive: 'Draw a Bead: Gains attack range with level.',
      q: 'Rapid Fire: Increases attack speed.',
      w: 'Rocket Jump: Jumps to location and slows enemies.',
      e: 'Explosive Charge: Places bomb on target.',
      r: 'Buster Shot: Knocks target back.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg', price: 'Default' },
      { name: 'Dragon Trainer', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_6.jpg', price: '1820 RP' }
    ]
  },
  {
    id: 'trundle',
    name: 'Trundle',
    roles: ['Top', 'Jungle'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg',
    difficulty: 'Easy',
    stats: {
      attack: 80,
      defense: 65,
      magic: 35,
      difficulty: 40
    },
    lore: 'Trundle is a hulking and devious troll with a particularly vicious streak, and there is nothing he cannot bludgeon into submission.',
    abilities: {
      passive: 'King\'s Tribute: Heals when nearby enemies die.',
      q: 'Chomp: Bites target and steals AD.',
      w: 'Frozen Domain: Creates frozen zone for bonuses.',
      e: 'Pillar of Ice: Creates impassable terrain.',
      r: 'Subjugate: Steals health and resistances.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg', price: 'Default' },
      { name: 'Traditional', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_1.jpg', price: '975 RP' }
    ]
  },
  {
    id: 'tryndamere',
    name: 'Tryndamere',
    roles: ['Top'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 95,
      defense: 50,
      magic: 20,
      difficulty: 55
    },
    lore: 'Fueled by unbridled fury and rage, Tryndamere once carved his way through the Freljord, openly challenging the greatest warriors of the north to prepare himself for even darker days ahead.',
    abilities: {
      passive: 'Battle Fury: Gains critical strike chance.',
      q: 'Bloodlust: Heals and gains AD.',
      w: 'Mocking Shout: Reduces enemy AD.',
      e: 'Spinning Slash: Spins through units.',
      r: 'Undying Rage: Cannot die for duration.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg', price: 'Default' },
      { name: 'Blood Moon', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_9.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'twisted-fate',
    name: 'Twisted Fate',
    roles: ['Mid'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg',
    difficulty: 'Hard',
    stats: {
      attack: 65,
      defense: 45,
      magic: 80,
      difficulty: 70
    },
    lore: 'Twisted Fate is an infamous cardsharp and swindler who has gambled and charmed his way across much of the known world, earning the enmity and admiration of the rich and foolish alike.',
    abilities: {
      passive: 'Loaded Dice: Gains bonus gold on kills.',
      q: 'Wild Cards: Throws three cards in cone.',
      w: 'Pick a Card: Selects special effect card.',
      e: 'Stacked Deck: Gains attack speed and bonus damage.',
      r: 'Destiny/Gate: Reveals enemies and teleports.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg', price: 'Default' },
      { name: 'Pulsefire', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_21.jpg', price: '1820 RP' }
    ]
  },
  {
    id: 'twitch',
    name: 'Twitch',
    roles: ['ADC'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg',
    difficulty: 'Hard',
    stats: {
      attack: 90,
      defense: 35,
      magic: 30,
      difficulty: 70
    },
    lore: 'A Zaunite plague rat by birth, but a connoisseur of filth by passion, Twitch is not afraid to get his paws dirty. Aiming a chem-powered crossbow at the gilded heart of Piltover.',
    abilities: {
      passive: 'Deadly Venom: Basic attacks apply poison stacks.',
      q: 'Ambush: Becomes invisible and gains attack speed.',
      w: 'Venom Cask: Throws cask that slows and applies poison.',
      e: 'Contaminate: Deals damage based on poison stacks.',
      r: 'Spray and Pray: Basic attacks pierce through enemies.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg', price: 'Default' },
      { name: 'Omega Squad', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_8.jpg', price: '1820 RP' }
    ]
  },
  {
    id: 'udyr',
    name: 'Udyr',
    roles: ['Jungle', 'Top'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 80,
      defense: 70,
      magic: 50,
      difficulty: 60
    },
    lore: 'Udyr is more than a man; he is a vessel for the untamed power of four primal animal spirits. When tapping into the spirits\' bestial natures, Udyr can harness their unique strengths.',
    abilities: {
      passive: 'Monk Training: Gains bonus stats from stances.',
      q: 'Tiger Stance: Gains attack speed and DoT.',
      w: 'Turtle Stance: Gains shield and lifesteal.',
      e: 'Bear Stance: Gains movement speed and stuns.',
      r: 'Phoenix Stance: Deals AoE magic damage.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg', price: 'Default' },
      { name: 'Spirit Guard', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_5.jpg', price: '3250 RP' }
    ]
  },
  {
    id: 'urgot',
    name: 'Urgot',
    roles: ['Top'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg',
    difficulty: 'Hard',
    stats: {
      attack: 75,
      defense: 70,
      magic: 40,
      difficulty: 75
    },
    lore: 'Once a powerful Noxian headsman, Urgot was betrayed by the empire for which he had killed so many. Bound in iron chains, he was forced to learn the true meaning of strength in the Dredge.',
    abilities: {
      passive: 'Echoing Flames: Deals bonus damage around legs.',
      q: 'Corrosive Charge: Fires acid that slows and reveals.',
      w: 'Purge: Rapidly fires at nearby enemies.',
      e: 'Disdain: Charges and flips enemies.',
      r: 'Fear Beyond Death: Impales and executes targets.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg', price: 'Default' },
      { name: 'High Noon', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_8.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'varus',
    name: 'Varus',
    roles: ['ADC', 'Mid'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 85,
      defense: 40,
      magic: 70,
      difficulty: 65
    },
    lore: 'One of the ancient darkin, Varus was a deadly killer who loved to torment his foes, driving them almost to insanity before delivering the killing arrow.',
    abilities: {
      passive: 'Living Vengeance: Gains attack speed on kills.',
      q: 'Piercing Arrow: Charges and fires piercing arrow.',
      w: 'Blighted Quiver: Basic attacks deal bonus magic damage.',
      e: 'Hail of Arrows: Creates zone that slows and damages.',
      r: 'Chain of Corruption: Roots and spreads to nearby enemies.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg', price: 'Default' },
      { name: 'Dark Star', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_8.jpg', price: '1820 RP' }
    ]
  },
  {
    id: 'vayne',
    name: 'Vayne',
    roles: ['ADC', 'Top'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg',
    difficulty: 'Hard',
    stats: {
      attack: 90,
      defense: 35,
      magic: 30,
      difficulty: 85
    },
    lore: 'Shauna Vayne is a deadly, remorseless Demacian monster hunter, who has dedicated her life to finding and destroying the demon that murdered her family.',
    abilities: {
      passive: 'Night Hunter: Gains movement speed toward enemies.',
      q: 'Tumble: Short dash and bonus damage.',
      w: 'Silver Bolts: Every third hit deals true damage.',
      e: 'Condemn: Knocks back and can stun.',
      r: 'Final Hour: Enhances abilities and grants stealth.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg', price: 'Default' },
      { name: 'Project', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_11.jpg', price: '1820 RP' }
    ]
  },
  {
    id: 'veigar',
    name: 'Veigar',
    roles: ['Mid'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 45,
      defense: 40,
      magic: 95,
      difficulty: 70
    },
    lore: 'An enthusiastic master of dark matter, Veigar has embraced powers that few mortals dare approach. As a free-spirited inhabitant of Bandle City, he now seeks to end conflict on his own terms.',
    abilities: {
      passive: 'Phenomenal Evil Power: Gains AP from hitting champions.',
      q: 'Baleful Strike: Fires dark bolt and gains AP on kill.',
      w: 'Dark Matter: Summons dark matter to crush area.',
      e: 'Event Horizon: Creates cage that stuns enemies.',
      r: 'Primordial Burst: Massive damage based on missing health.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg', price: 'Default' },
      { name: 'Final Boss', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_8.jpg', price: '1820 RP' }
    ]
  },
  {
    id: 'velkoz',
    name: "Vel'Koz",
    roles: ['Mid', 'Support'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg',
    difficulty: 'Hard',
    stats: {
      attack: 25,
      defense: 35,
      magic: 95,
      difficulty: 80
    },
    lore: 'It is unclear if Vel\'Koz was the first Void-spawn to emerge on Runeterra, but there has certainly never been another to match his level of cruel, calculating intelligence.',
    abilities: {
      passive: 'Organic Deconstruction: Researches enemies with abilities.',
      q: 'Plasma Fission: Fires plasma bolt that splits.',
      w: 'Void Rift: Creates rupture that damages twice.',
      e: 'Tectonic Disruption: Causes explosion that knocks up.',
      r: 'Life Form Disintegration Ray: Fires devastating beam.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg', price: 'Default' },
      { name: 'Arclight', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_1.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'vi',
    name: 'Vi',
    roles: ['Jungle'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 80,
      defense: 60,
      magic: 30,
      difficulty: 55
    },
    lore: 'Once a criminal from the mean streets of Zaun, Vi is a hotheaded, impulsive, and fearsome woman with only a very loose respect for authority figures.',
    abilities: {
      passive: 'Blast Shield: Gains shield after using abilities.',
      q: 'Vault Breaker: Charges and punches through enemies.',
      w: 'Denting Blows: Every third hit breaks armor.',
      e: 'Excessive Force: Empowers next attack with AoE.',
      r: 'Assault and Battery: Charges and knocks up target.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg', price: 'Default' },
      { name: 'Project', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_11.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'viktor',
    name: 'Viktor',
    roles: ['Mid'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg',
    difficulty: 'Hard',
    stats: {
      attack: 40,
      defense: 45,
      magic: 90,
      difficulty: 75
    },
    lore: 'The herald of a new age of technology, Viktor has devoted his life to the advancement of humankind. An idealistic inventor who seeks to lift the people of Zaun to a new level of understanding.',
    abilities: {
      passive: 'Glorious Evolution: Upgrades abilities with Hex Core.',
      q: 'Siphon Power: Shields and empowers next attack.',
      w: 'Gravity Field: Creates stunning zone.',
      e: 'Death Ray: Fires laser that leaves burning trail.',
      r: 'Chaos Storm: Summons controllable storm cloud.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg', price: 'Default' },
      { name: 'Death Sworn', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_4.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'vladimir',
    name: 'Vladimir',
    roles: ['Mid', 'Top'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 45,
      defense: 60,
      magic: 85,
      difficulty: 65
    },
    lore: 'A fiend with a thirst for mortal blood, Vladimir has influenced the affairs of Noxus since the empire\'s earliest days. In addition to his unnaturally extended life, his mastery of hemomancy allows him to control the minds and bodies of others.',
    abilities: {
      passive: 'Crimson Pact: Bonus health converts to AP.',
      q: 'Transfusion: Drains enemy health.',
      w: 'Sanguine Pool: Becomes untargetable pool of blood.',
      e: 'Tides of Blood: Charges and releases blood nova.',
      r: 'Hemoplague: Infects enemies with plague.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg', price: 'Default' },
      { name: 'Blood Lord', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_6.jpg', price: '1820 RP' }
    ]
  },
  {
    id: 'volibear',
    name: 'Volibear',
    roles: ['Top', 'Jungle'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 75,
      defense: 70,
      magic: 45,
      difficulty: 50
    },
    lore: 'To those who still worship the old gods of the Freljord, the Volibear is the storm made manifest. Destructive, wild, and stubbornly resolute, he existed before mortals walked the land, and is fiercely protective of the wilderness.',
    abilities: {
      passive: 'The Relentless Storm: Gains attack speed and chain lightning.',
      q: 'Thundering Smash: Gains movement speed and stuns target.',
      w: 'Frenzied Maul: Wounds and heals on subsequent attacks.',
      e: 'Sky Splitter: Summons lightning that slows and shields.',
      r: 'Stormbringer: Leaps and disables towers.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg', price: 'Default' },
      { name: 'Thunder Lord', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_3.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'warwick',
    name: 'Warwick',
    roles: ['Jungle'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg',
    difficulty: 'Easy',
    stats: {
      attack: 65,
      defense: 65,
      magic: 40,
      difficulty: 35
    },
    lore: 'A monster who hunts the gray alleys of Zaun, Warwick is a beast unleashed - the result of horrific experiments that transformed him from man into monster.',
    abilities: {
      passive: 'Eternal Hunger: Gains attack speed against low health targets.',
      q: 'Jaws of the Beast: Leaps to enemy and heals.',
      w: 'Blood Hunt: Tracks injured enemies and gains speed.',
      e: 'Primal Howl: Reduces damage and fears enemies.',
      r: 'Infinite Duress: Suppresses target with massive leap.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg', price: 'Default' },
      { name: 'Project', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_14.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'wukong',
    name: 'Wukong',
    roles: ['Top', 'Jungle'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 70,
      defense: 60,
      magic: 30,
      difficulty: 45
    },
    lore: 'A vastayan trickster and warrior, Wukong is a monkey who uses his strength, agility, and intelligence to confuse his opponents and gain the upper hand.',
    abilities: {
      passive: 'Stone Skin: Gains armor and regeneration in combat.',
      q: 'Crushing Blow: Extends staff for bonus damage.',
      w: 'Warrior Trickster: Creates clone and becomes invisible.',
      e: 'Nimbus Strike: Dashes to target and gains attack speed.',
      r: 'Cyclone: Spins and knocks up enemies twice.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg', price: 'Default' },
      { name: 'Battle Academia', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_12.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'xayah',
    name: 'Xayah',
    roles: ['ADC'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg',
    difficulty: 'Hard',
    stats: {
      attack: 85,
      defense: 40,
      magic: 30,
      difficulty: 70
    },
    lore: 'Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way.',
    abilities: {
      passive: 'Clean Cuts: Feathers deal bonus damage on recall.',
      q: 'Double Daggers: Throws two feathers.',
      w: 'Deadly Plumage: Gains attack speed and damage.',
      e: 'Bladecaller: Recalls feathers for damage and root.',
      r: 'Featherstorm: Becomes untargetable and launches feathers.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg', price: 'Default' },
      { name: 'Star Guardian', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_8.jpg', price: '1820 RP' }
    ]
  },
  {
    id: 'xerath',
    name: 'Xerath',
    roles: ['Mid', 'Support'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg',
    difficulty: 'Hard',
    stats: {
      attack: 30,
      defense: 35,
      magic: 90,
      difficulty: 75
    },
    lore: 'Xerath is an Ascended Magus of ancient Shurima, a being of arcane energy writhing in the broken shards of a magical sarcophagus. For millennia, he was trapped beneath the desert sands, but the rise of Shurima freed him from his ancient prison.',
    abilities: {
      passive: 'Mana Surge: Restores mana on basic attacks.',
      q: 'Arcanopulse: Charges and fires long-range beam.',
      w: 'Eye of Destruction: Calls down burst of energy.',
      e: 'Shocking Orb: Fires stun bolt that extends range.',
      r: 'Rite of the Arcane: Launches multiple energy bolts.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg', price: 'Default' },
      { name: 'Dark Star', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_5.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'yasuo',
    name: 'Yasuo',
    roles: ['Mid', 'Top'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg',
    difficulty: 'Hard',
    stats: {
      attack: 80,
      defense: 45,
      magic: 30,
      difficulty: 85
    },
    lore: 'An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—disgraced, he was forced to fight to clear his name.',
    abilities: {
      passive: 'Way of the Wanderer: Gains shield from movement, doubles crit chance.',
      q: 'Steel Tempest: Thrusts sword, can create tornado.',
      w: 'Wind Wall: Creates wall blocking projectiles.',
      e: 'Sweeping Blade: Dashes through target.',
      r: 'Last Breath: Teleports to airborne enemies for damage.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg', price: 'Default' },
      { name: 'Spirit Blossom', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_26.jpg', price: '1820 RP' }
    ]
  },
  {
    id: 'yone',
    name: 'Yone',
    roles: ['Mid', 'Top'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg',
    difficulty: 'Hard',
    stats: {
      attack: 75,
      defense: 45,
      magic: 35,
      difficulty: 80
    },
    lore: 'In life, he was Yone—half-brother of Yasuo, and a renowned student of his village\'s sword school. But upon his death at the hands of his brother, he found himself hunted by a malevolent entity of the spirit realm.',
    abilities: {
      passive: 'Way of the Hunter: Deals mixed damage, doubles crit chance.',
      q: 'Mortal Steel: Thrusts swords, can create dash.',
      w: 'Spirit Cleave: Slashes and shields.',
      e: 'Soul Unbound: Leaves body to fight.',
      r: 'Fate Sealed: Blinks and knocks up enemies.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg', price: 'Default' },
      { name: 'Spirit Blossom', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_1.jpg', price: '1820 RP' }
    ]
  },
  {
    id: 'yuumi',
    name: 'Yuumi',
    roles: ['Support'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg',
    difficulty: 'Easy',
    stats: {
      attack: 25,
      defense: 30,
      magic: 70,
      difficulty: 35
    },
    lore: 'A magical cat from Bandle City, Yuumi was once the familiar of a yordle enchantress, Norra. When her master mysteriously disappeared, Yuumi became the Keeper of Norra\'s sentient Book of Thresholds.',
    abilities: {
      passive: 'Bop n Block: Empowers auto attacks and grants shield.',
      q: 'Prowling Projectile: Fires guided missile.',
      w: 'You and Me!: Attaches to ally and grants stats.',
      e: 'Zoomies: Heals and grants movement speed.',
      r: 'Final Chapter: Fires waves that root enemies.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg', price: 'Default' },
      { name: 'Battle Principal', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_1.jpg', price: '1350 RP' }
    ]
},
  {
    id: 'zac',
    name: 'Zac',
    roles: ['Jungle', 'Top'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 50,
      defense: 75,
      magic: 65,
      difficulty: 55
    },
    lore: 'Zac is the product of a toxic spill that ran through a chemtech seam and pooled in an isolated cavern deep in Zaun\'s Sump. Despite his origins, Zac has grown into a benevolent hero.',
    abilities: {
      passive: 'Cell Division: Splits into bloblets that reform.',
      q: 'Stretching Strikes: Grabs and slams enemies together.',
      w: 'Unstable Matter: Explodes to deal damage.',
      e: 'Elastic Slingshot: Charges and launches self.',
      r: 'Let\'s Bounce!: Bounces and knocks up enemies.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg', price: 'Default' },
      { name: 'Pool Party', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_6.jpg', price: '1350 RP' }
    ]
  },
  {
    id: 'zed',
    name: 'Zed',
    roles: ['Mid'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg',
    difficulty: 'Hard',
    stats: {
      attack: 85,
      defense: 30,
      magic: 20,
      difficulty: 75
    },
    lore: 'Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia\'s magical and martial traditions to drive out Noxian invaders.',
    abilities: {
      passive: 'Contempt for the Weak: Executes low health targets.',
      q: 'Razor Shuriken: Throws spinning blades.',
      w: 'Living Shadow: Creates shadow that mimics abilities.',
      e: 'Shadow Slash: Spins blades for area damage.',
      r: 'Death Mark: Marks target for delayed damage.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg', price: 'Default' },
      { name: 'Galaxy Slayer', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_17.jpg', price: '1820 RP' }
    ]
  },
  {
    id: 'zeri',
    name: 'Zeri',
    roles: ['Bot'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 70,
      defense: 40,
      magic: 60,
      difficulty: 65
    },
    lore: 'A headstrong, spirited young woman from Zaun’s working-class, Zeri channels her electric magic to charge herself and her custom-crafted gun. Her volatile power mirrors her emotions, its sparks reflecting her lightning-fast approach to life.',
    abilities: {
      passive: 'Living Battery: Gains movement speed when shielded.',
      q: 'Burst Fire: Fires a burst of rounds that scale with attack speed.',
      w: 'Ultrashock Laser: Fires an electric shot that slows and explodes if it hits a wall.',
      e: 'Spark Surge: Dashes forward and empowers next attacks.',
      r: 'Lightning Crash: Overcharges, increasing movement and attack speed.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg', price: 'Default' },
      { name: 'Sparkshooter', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_15.jpg', price: '1820 RP'}
    ]
  },
  {
      id: 'ziggs',
    name: 'Ziggs',
    roles: ['Mid'],
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg',
    difficulty: 'Moderate',
    stats: {
      attack: 65,
      defense: 35,
      magic: 90,
      difficulty: 60
    },
    lore: 'With a love for big bombs and short fuses, the yordle Ziggs is an explosive force of chaos. He thrives in creating destruction, often disregarding the consequences of his manic experiments.',
    abilities: {
      passive: 'Short Fuse: Every few seconds, his next attack deals bonus magic damage.',
      q: 'Bouncing Bomb: Throws a bouncing bomb that explodes on impact.',
      w: 'Satchel Charge: Places an explosive that knocks back enemies and can destroy turrets at low health.',
      e: 'Hexplosive Minefield: Throws mines that slow and damage enemies.',
      r: 'Mega Inferno Bomb: Lobs a massive bomb, dealing huge area damage.'
    },
    skins: [
      { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg', price: 'Default' },
      { name: 'Timelord', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_11.jpg', price: '1820'}
    ]
      },
  {

  id: 'zilean',
  name: 'Zilean',
  roles: ['Support', 'Mid'],
  image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg',
  difficulty: 'Moderate',
  stats: {
    attack: 40,
    defense: 45,
    magic: 80,
    difficulty: 65
  },
  lore: 'A mage who can manipulate time itself, Zilean uses his abilities to control the flow of battle, rewinding allies from death and accelerating their actions.',
  abilities: {
    passive: 'Time in a Bottle: Gains experience over time, which he can grant to allies.',
    q: 'Time Bomb: Throws a bomb that sticks to enemies and detonates after a short delay.',
    w: 'Rewind: Reduces the cooldown of his other abilities.',
    e: 'Time Warp: Speeds up allies or slows down enemies.',
    r: 'Chronoshift: Places a protective rune on an ally, reviving them if they die.'
  },
  skins: [
    { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg', price: 'Default' },
    { name: 'Titan', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_11.jpg', price: '1820 RP' }
]
  },
{  
id: 'zoe',
name: 'Zoe',
roles: ['Mid'],
image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg',
difficulty: 'High',
stats: {
  attack: 50,
  defense: 30,
  magic: 95,
  difficulty: 80
},
lore: 'The Aspect of Twilight, Zoe is a cosmic trickster who wields playful yet devastating magic. She warps reality, bending time and space to her mischievous will.',
abilities: {
  passive: 'More Sparkles!: Her next attack after casting an ability deals bonus magic damage.',
  q: 'Paddle Star: Fires a star that deals more damage the farther it travels.',
  w: 'Spell Thief: Picks up and casts summoner spells or active items dropped by enemies.',
  e: 'Sleepy Trouble Bubble: Sends a bubble that puts enemies to sleep, making them take extra damage.',
  r: 'Portal Jump: Blinks to a location and then returns after a short duration.'
}, 
skins: [
  { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg', price: 'Default' },
  { name: 'Vanguard', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_11.jpg', price: '1820 RP' }
]
},
{
id: 'zyra',
name: 'Zyra',
roles: ['Support', 'Mid'],
image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg',
difficulty: 'Moderate',
stats: {
  attack: 50,
  defense: 35,
  magic: 85,
  difficulty: 70
},
lore: 'Born from the destruction of nature’s balance, Zyra is a vengeful force of plant life. She controls deadly flora to strangle and impale her enemies, growing stronger with each battle.',
abilities: {
  passive: 'Garden of Thorns: Periodically spawns seeds that grow into attacking plants.',
  q: 'Deadly Spines: Summons spines from the ground that damage enemies.',
  w: 'Rampant Growth: Places seeds that can sprout into different plants when hit by her other abilities.',
  e: 'Grasping Roots: Sends vines forward that root enemies on contact.',
  r: 'Stranglethorns: Summons a massive thicket that knocks up and damages enemies.'
},
skins: [
  { name: 'Default', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg', price: 'Default' },
  { name: 'Phoenix', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_11.jpg', price: '1820 RP' }
]
},
];
