export function pickRandom(npcs) {
  npcs.sort(() => Math.random() - Math.random());
  return npcs[0];
}

export function normalFilter(npc) {
  return npc.type.rating === 'Normal';
}

export function minionMap(original) {
  const npc = JSON.parse(JSON.stringify(original));
  npc.type.rating = "Minion";
  npc.xp = Math.ceil(npc.xp / 3);
  npc.name += " Minion";
  return npc;
}

export function mightyMap(original) {
  const npc = JSON.parse(JSON.stringify(original));
  const creature = npc.type.type === "Creature";
  npc.type.rating = creature ? "Mighty" : "Notable";
  npc.xp *= 2;
  npc.name = `${creature ? "Mighty" : "Notable"} ${npc.name}`;
  return npc;
}

export function legendaryMap(original) {
  const npc = JSON.parse(JSON.stringify(original));
  const creature = npc.type.type === "Creature";
  npc.type.rating = creature ? "Legendary" : "Major";
  npc.xp *= 3;
  npc.name = `${creature ? "Legendary" : "Major"} ${npc.name}`;
  return npc;
}

/**
 * @param {Set} accSet 
 * @param {NPC} npc 
 * @returns {Set}
 */
export function getCategories(accSet, npc) {
  accSet.add(...npc.categories);
  return accSet;
}