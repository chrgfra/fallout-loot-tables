<script>
  import { browser } from '$app/environment';
  import * as lists from '../lib/itemLists.js';
  import * as lootTable from '../lib/lootTableData.js';

  let selectedName = '';
  let selectedList = [];
  let lootableList = [];
  let tableData = [];
  let diceCount = 0;
  let hasHomebrew = false;

  function setStorage(key, value) {
    if (browser) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }
  function getFromStorage(key) {
    if (browser) {
      try {
        return JSON.parse(window.localStorage.getItem(key));
      } catch(e) {
        console.log(e);
      }
    }
    return null;
  }

  function camelToSpaces(camel) {
    return camel.charAt(0).toLocaleUpperCase() + camel.substring(1).replace(/([a-z0-9])([A-Z])/g, '$1 $2') 
  }

  const listNames = Object.keys(lists).map(k => ({
    value: k,
    name: camelToSpaces(k),
  }));

  function checkForHomebrew(list) {
    return list.some(item => item.source === "Homebrew");
  }

  function updateList(event) {
    selectedName = '';
    selectedList = [];
    lootableList = [];
    tableData = [];
    diceCount = 0;
    const name = event.target.value;
    selectedName = name;
    selectedList = lists[name];
    selectedList.sort(({name: a}, {name: b}) => {
      return a.localeCompare(b);
    });
    // attempt to find list in localstorage
    const storedList = getFromStorage(selectedName)?.filter(row => selectedList.map(sl => sl.name).includes(row.name));
    lootableList = storedList ? storedList : [...selectedList];
    tableData = Object.entries(lootTable.distribute([...lootableList]));
    diceCount = lootTable.getDiceCount(lootableList);
    selectedList = selectedList.map(item => ({
      ...item,
      checked: isInList(item)
    }));
    setStorage(selectedName, lootableList);
    hasHomebrew = checkForHomebrew(lootableList);
  }

  function isInList(item) {
    const names = lootableList.map(i => i.name);
    const included = names.includes(item.name);
    // console.log({names, included, item});
    return included;
  }

  function toggleItem(item) {
    // add or remove from lootableList
    if (isInList(item)) {
      // remove it
      const idx = lootableList.findIndex(li => li.name === item.name);
      lootableList.splice(idx, 1);
    } else {
      // add it
      lootableList.push(item);
    }
    setStorage(selectedName, lootableList);
    tableData = Object.entries(lootTable.distribute([...lootableList]));
    diceCount = lootTable.getDiceCount(lootableList);
    lootableList = lootableList;
    hasHomebrew = checkForHomebrew(lootableList);
  }
</script>

<h1>Fallout 2d20 Loot Tables</h1>
<div>
  <!-- select which list -->
  <select on:change={updateList}>
    <option disabled selected>Choose...</option>
    {#each listNames as li}
      <option value={li.value}>{li.name}</option>
    {/each}
  </select>
  <div class="columns">
    <div class="col1">
      <!-- checkboxes for each item in the list to add/remove from table -->
      {#each selectedList as li}
        <div key={selectedName + li.name}>
          <label>
            <input key={`checkbox${selectedName + li.name}`} type="checkbox" on:click={toggleItem(li)} bind:checked={li.checked} />
            {li.name}
          </label>
        </div>
      {/each}
    </div>
    <div class="col2">
      <!-- roll table -->
      {#if diceCount > 0}
        <table>
          <thead>
            <th>{diceCount}D20 Roll</th>
            <th>{camelToSpaces(selectedName)}</th>
            <th>Source</th>
          </thead>
          <tbody>
            {#each tableData as row}
              <tr>
                <td>{row[0]}</td>
                <td>{row[1].name}</td>
                <td>{row[1].source}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
      {#if hasHomebrew}
        <p>Check <a href="/homebrew">homebrew items</a> for details.</p>
      {/if}
    </div>
  </div>
</div>

<style>
  .columns {
    display: flex;
  }
  .columns>div {
    width: 45%;
  }
  .columns>div>* {
    width: 100%;
    column-count: 2;
  }
</style>