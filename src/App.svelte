<script>
  import * as lists from './lib/itemLists';

  let selectedName = '';
  let selectedList = [];
  let lootableList = [];

  function camelToSpaces(camel) {
    return camel.charAt(0).toLocaleUpperCase() + camel.substring(1).replace(/([a-z0-9])([A-Z])/g, '$1 $2') 
  }

  const listNames = Object.keys(lists).map(k => ({
    value: k,
    name: camelToSpaces(k),
  }));

  function updateList(event) {
    let name = '';
    console.log(event);
    selectedName = name;
    selectedList = lists[name];
    lootableList = [...selectedList];
  }
</script>

<h1>Fallout 2d20</h1>
<div>
  <!-- select which list -->
  <select on:change={updateList}>
    {#each listNames as li}
      <option value={li.value}>{li.name}</option>
    {/each}
  </select>
  <div class="col1">
    <!-- checkboxes for each item in the list to add/remove from table -->
  </div>
  <div class="col2">
    <!-- roll table -->
  </div>
</div>