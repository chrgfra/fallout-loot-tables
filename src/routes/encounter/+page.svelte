<script>
  import { npcs } from '../../lib/npcList';
  import { getCategories } from '../../lib/encounterBuilderHelper';
  import { EncounterBuilder } from '../../lib/encounterBuilder';

  const categories = Array.from(npcs.reduce(getCategories, new Set()));
  categories.sort((a, b) => String(a).localeCompare(String(b)));
  let level = 1;
  let pcs = 1;
  let difficulty = 'average';
  let enemies = [];
  let config = {
    categories: [],
    minions: false,
    includeMightyLegendary: true,
    addMightyLegendary: false,
  };
  let checked = {};
  let leftover = 0;

  function buildEncounter() {
    console.log("I've been clicked!");
    console.log({ level, pcs, difficulty, config });
    let levelMod = 0;
    const randomNumber = (min = 1, max = 2) => Math.floor(Math.random() * max) + min;
    switch (difficulty) {
      case 'simple': levelMod = randomNumber() * -1; break;
      case 'difficult': levelMod = randomNumber(2, 5); break;
    }
    const encounter = new EncounterBuilder(level + levelMod, pcs, config);
    const enemiesRaw = encounter.getEncounter();
    leftover = encounter.getRemainingXp();
    console.log({leftover});
    const countedEnemies = enemiesRaw.reduce((enemyList, enemy) => {
      const enemyEntry = enemyList[enemy.name];
      if (!enemyEntry) {
        enemyList[enemy.name] = { count: 1, source: enemy.source };
      } else {
        enemyEntry.count += 1;
      }
      return enemyList;
    }, {});
    if (Object.keys(countedEnemies).length > 0) {
      enemies = Object.entries(countedEnemies).map(([name, stats]) => ({ name, ...stats }));
    }
  }

  function setCategories() {
    const boxes = Object.keys(checked).filter(c => checked[c]);
    console.log({checked, boxes});
    config.categories = categories.filter(c => boxes.includes(c));
  }

  $: checked, setCategories();
</script>

<h1>Fallout 2d20 Encounters</h1>

<!-- needed inputs -->
<div class="inputs">
  <div class="core-inputs">
    <h2>Input</h2>
    <!-- level -->
    <div class="level-input">
      <label>
        Level of PCs: 
        <input type="number" min="1" step="1" bind:value={level} />
      </label>
    </div>
    <!-- number of PCs -->
    <div class="pcs-input">
      <label>
        Number of PCs: 
        <input type="number" min="1" step="1" bind:value={pcs} />
      </label>
    </div>
    <!-- difficulty -->
    <div class="difficulty-input">
      <label>
        Encounter Difficulty: 
        <select bind:value={difficulty}>
          <option value="simple">Simple</option>
          <option value="average">Average</option>
          <option value="difficult">Difficult</option>
        </select>
      </label>
    </div>
    <!-- categories to use -->
  </div>
  <div class="categories">
    <h2>Enemy Categories</h2>
    <div class="categories-input">
      {#each categories as category}
        <div><label><input type="checkbox" key={`checkbox-${category}`} bind:checked={checked[category]} />{category}</label></div>
      {/each}
    </div>
  </div>
  <div class="options">
    <h2>Settings</h2>
    <div><label><input type="checkbox" bind:checked={config.minions}/>Include Minions</label></div>
    <div><label><input type="checkbox" bind:checked={config.includeMightyLegendary}/>Include Mighty/Legendary</label></div>
    <div><label><input type="checkbox" bind:checked={config.addMightyLegendary}/>Upgrade Normal Enemies</label></div>
  </div>
</div>
<button on:click={() => buildEncounter()}>Build Encounter</button>
<div class="enemies">
  {#each enemies as enemy}
    <div key={enemy.name}>{enemy.count}x {enemy.name} ({enemy.source})</div>
  {/each}
  {#if leftover}
    <div>{leftover} remaining XP.</div>
  {/if}
</div>

<style>
  div.inputs {
    display: flex;
    flex-direction: row;
  }
  div.inputs>div {
    width: 33%;
    box-sizing: border-box;
  }
  div.categories-input {
    display: flex;
    flex-flow: row wrap;;
  }
  div.categories-input>div {
    margin: 0 10px;
  }
</style>