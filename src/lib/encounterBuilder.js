import * as helpers from './encounterBuilderHelper';
import { npcs as masterList } from './npcList';

class NoneAvailable extends Error {}

export class EncounterBuilder {
  constructor(level, pcs, config = {}) {
    if (Number.isNaN(level) || level < 1) {
      throw new Error(`Invalid level ${level}`);
    }
    if (Number.isNaN(pcs) || pcs < 1) {
      throw new Error(`Invalid pcs ${pcs}`);
    }
    this.xpTotal = ((level+1) * 10) * pcs;
    this.xp = 0;
    this.categories = config.categories ?? new Set();
    this.npcs = [];
    this.hasMightyLegendary = false;
    this.includeMinions = config.minions ?? false;
    this.includeMightyLegendary = config.includeMightyLegendary ?? false;
    this.addMightyLegendary = config.addMightyLegendary ?? false;
    //
    this.buildEncounter();
  }

  getEncounter() {
    return this.npcs;
  }

  getRemainingXp() {
    return this.xpTotal - this.xp;
  }

  buildEncounter() {
    // only do list transforms once
    const categorized = this.categories.length > 0
      ? masterList.filter(npc => npc.categories.some(c => this.categories.includes(c)))
      : [...masterList];
    const normals = [...categorized.filter(helpers.normalFilter)];
    const list = this.includeMightyLegendary ? [...categorized] : [...normals];
    if (this.includeMinions) {
      const minions = [...normals].map(helpers.minionMap);
      list.push(...minions);
    }
    if (this.addMightyLegendary) {
      const mighty = [...normals].map(helpers.mightyMap);
      const legends = [...normals].map(helpers.legendaryMap);
      list.push(...mighty, ...legends);
    }
    while (this.xp < this.xpTotal) {
      try {
        this.selectNPC(list);
      } catch (error) {
        if (error instanceof NoneAvailable) {
          // just end it
          break;
        } else {
          throw error;
        }
      }
    }
  }

  selectNPC(list) {
    let available = list.filter(npc => npc.xp <= (this.xpTotal - this.xp));
    if (this.hasMightyLegendary) {
      // remove any legendary/mighty
      available = available.filter(npc => ['Minion', 'Normal'].includes(npc.type.rating));
    }
    if (available.length < 1) {
      throw new NoneAvailable("No more NPCs available");
    }
    const npc = helpers.pickRandom(available);
    if (['Mighty', 'Major', 'Legendary', 'Notable'].includes(npc.type.rating)) {
      this.hasMightyLegendary = true;
    }
    this.xp += npc.xp;
    this.npcs.push(npc);
  }
}
