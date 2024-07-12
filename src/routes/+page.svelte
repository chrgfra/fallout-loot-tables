<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import * as listsSource from '../lib/itemLists.js';
  import * as lootTable from '../lib/lootTableData.js';

  let selectedName = '';
  let selectedList = [];
  let lootableList = [];
  let tableData = [];
  let diceCount = 0;
  let hasHomebrew = false;
  let allowHomebrew = false;
  onMount(() => {
    allowHomebrew = $page.url.searchParams.has('homebrew');
  });

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

  // filter out homebrew or just individual homebrew set pieces
  const lists = Object.fromEntries(Object.entries(listsSource).map(([lName, aList]) => {
    return [lName, aList.filter(item => {
      if (item.source !== 'Homebrew') {
        return true;
      }
      const homebrew = allowHomebrew;
      if (!homebrew) {
        return false;
      }
      if (item.secondarySetPiece) {
        return false;
      }
      return true;
    }).map(item => ({
      ...item,
      name: item.setName ? `${item.setName} Piece` : item.name
    }))];
  }));

  const listNames = Object.keys(lists).map(k => ({
    value: k,
    name: camelToSpaces(k),
  }));

  function checkForHomebrew(list) {
    return list.some(item => item.source === "Homebrew");
  }

  function disableHomebrew(lootables) {
    while (checkForHomebrew(lootables)) {
      const homebrewIdx = lootables.findIndex(i => i.source === 'Homebrew');
      lootables.splice(homebrewIdx, 1);
    }
    return lootables;
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
    if (!storedList) {
      // Homebrew needs to be explicitly added
      disableHomebrew(lootableList);
    }
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
    return included;
  }

  function toggleItem(item) {
    let changed;
    // add or remove from lootableList
    if (isInList(item)) {
      // remove it
      const idx = lootableList.findIndex(li => li.name === item.name);
      lootableList.splice(idx, 1);
      changed = false;
    } else {
      // add it
      lootableList.push(item);
      changed = true;
    }
    setStorage(selectedName, lootableList);
    tableData = Object.entries(lootTable.distribute([...lootableList]));
    diceCount = lootTable.getDiceCount(lootableList);
    hasHomebrew = checkForHomebrew(lootableList);
    return changed;
  }

  function setListSource(books) {
    const isInBook = (n, source) => {
      if (!source) return true;
      if (source.startsWith("Wanderers") && n >= 3) return true;
      if (source.startsWith("Settlers") && n >= 2) return true;
      if (source.startsWith("Core")) return true;
      return false;
    };
    selectedList = selectedList.map(item => {
      if (
        (isInBook(books, item.source) && !isInList(item)) ||
        (!isInBook(books, item.source) && isInList(item))
      ) {
        item.checked = toggleItem(item);
      }
      return item;
    });
  }
  function clearCache() {
    if (browser) {
      window.localStorage.clear();
      window.location.reload();
    }
  };
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
  {#if selectedName}
  <span>
    <input type="button" on:click={() => setListSource(1)} value="Core Book Only" />
    <input type="button" on:click={() => setListSource(2)} value="Core and Settlers" />
    <input type="button" on:click={() => setListSource(3)} value="All Official" />
    <input type="button" on:click={clearCache} value="Clear Cache" />
  </span>
  {/if}
  <div class="columns">
    <div class="col1">
      <!-- checkboxes for each item in the list to add/remove from table -->
      {#each selectedList as li}
        <div key={selectedName + li.name + li.checked}>
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
        <table key={`${selectedName}-${selectedList.map(i => i.checked ? i.name.charAt(0) : '').filter(v => !!v)}`}>
          <thead>
            <th>{diceCount}D20 Roll</th>
            <th>{camelToSpaces(selectedName)}</th>
            <th>Source</th>
          </thead>
          <tbody>
            {#each tableData as row}
              <tr key={selectedName + row[1].name}>
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