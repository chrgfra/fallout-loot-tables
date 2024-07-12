type Attack = {
  name: string,
  roll: string,
  tn: number,
  damageDice: number,
  damageType: string,
  effects?: string[],
  range?: "C"|"M"|"L"|"X",
  rof?: number,
  qualities?: string[],
};
type Ability = {
  name: string,
  text: string
};

const abilities = {
  letRip: (name, gun, rof, dam):Ability => ({
    name: 'Let Rip',
    text: `Once per combat, ${name} may 'let rip' with a volley from their ${gun}. This adds the weapon's Fire Rate of ${rof} to the weapon's damage for a single attack (for ${rof+dam} CD total).`
  })
};

export type Creature = {
  name: string,
  level: number,
  type: "Normal"|"Mighty"|"Legendary"|"Minion",
  keywords: string[],
  body: number,
  mind: number,
  melee: number,
  guns: number,
  other: number,
  defense: number,
  initiative: number,
  health: number,
  dr: {
    physical: number,
    energy: number,
    rad: number|"Immune",
    poison: number|"Immune",
  },
  attacks: Attack[],
  abilities: Ability[],
  inventory: string[],
};

export type Character = {
  name: string,
  level: number,
  type: "Normal"|"Notable"|"Major"|"Minion",
  keywords: string[],
  special: {
    str: number,
    per: number,
    end: number,
    cha: number,
    int: number,
    agi: number,
    lck: number,
  },
  skills: {
    athletics?: number,
    barter?: number,
    bigGuns?: number,
    energyWeapons?: number,
    explosives?: number,
    lockpick?: number,
    medicine?: number,
    melee?: number,
    pilot?: number,
    repair?: number,
    science?: number,
    smallGuns?: number,
    sneak?: number,
    speech?: number,
    survival?: number,
    throwing?: number,
    unarmed?: number,
  },
  tagSkills: string[],
  dr: {
    physical: number|string,
    energy: number|string,
    rad: number|string,
    poison: number|string,
  },
  attacks: Attack[],
  abilities: Ability[],
  inventory: string[],
};

export const npcs:Creature|Character[] = [
  {
    name: "Cultist",
    level: 2,
    type: "Normal",
    keywords: ["Human"],
    special: {
      str: 6,
      per: 5,
      end: 6,
      cha: 5,
      int: 4,
      agi: 6,
      lck: 4,
    },
    skills: {
      survival: 2,
      smallGuns: 2,
      speech: 1,
      medicine: 2,
      melee: 1,
      throwing: 1,
      sneak: 1
    },
    tagSkills: ['survival', 'smallGuns'],
    dr: {
      physical: '1 (torso, arms)',
      energy: 0,
      rad: 0,
      poison: 0,
    },
    attacks: [
      {
        name: "Pipe Gun",
        roll: "AGI + Small Guns",
        tn: 8,
        damageDice: 3,
        damageType: 'Physical',
        rof: 2,
        range:"C",
        qualities: ['Close Quarters', 'Unreliable'],
      }
    ],
    abilities: [
      {
        name: 'Let Rip',
        text: 'Once per combat, the cultist',
      }
    ],
    inventory: []
  }
];