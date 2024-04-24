<script>
  import * as lists from '../../lib/itemLists';
  
  const homebrewItems = Object.fromEntries(
    Object
      .entries(lists)
      .filter(
        ([listName, itemsInList]) => {
          return listName !== "nukaCola" && itemsInList.some(item => item.source === "Homebrew");
        }
      )
      .map(([listName, itemsInList]) => [listName, itemsInList.filter(i => i.source === "Homebrew")])
  );

  const masterList = {};

  for (let listName of Object.keys(homebrewItems)) {
    const list = homebrewItems[listName];
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (!masterList[item.type]) masterList[item.type] = {};
      masterList[item.type][item.name] = item;
    }
  }

  const itemTableMap = {
    "Energy Weapons": [
      // field: label
      { key: "name", label: "Energy Weapon" },
      { key: "type", label: "Weapon Type" },
      { key: "damage", label: "Damage Rating" },
      { key: "effects", label: "Damage Effects" },
      { key: "damageType", label: "Damage Type" },
      { key: "fireRate", label: "Fire Rate" },
      { key: "range", label: "Range" },
      { key: "qualities", label: "Qualities" },
      { key: "weight", label: "Weight" },
      { key: "cost", label: "Cost" },
      { key: "rarity", label: "Rarity" },
    ],
    "Beverages": [
      { key: "name", label: "Item" },
      { key: "hpHealed", label: "HP Healed" },
      { key: "otherEffects", label: "Other Effects" },
      { key: "irradiated", label: "Irradiated?" },
      { key: "weight", label: "Weight" },
      { key: "cost", label: "Cost" },
      { key: "rarity", label: "Rarity" },
    ]
  };
</script>

<h1>Homebrew Items</h1>
<p>Back to <a href="/">loot tables</a>.</p>

{#each Object.keys(masterList) as category}
  <h2>{category}</h2>
  <table>
    <thead>
      <tr>
        {#each itemTableMap[category] as heading }
          <th>{heading.label}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each Object.keys(masterList[category]) as itemName}
        <tr>
          {#each itemTableMap[category] as mapping}
            <td>{Array.isArray(masterList[category][itemName][mapping.key]) ? masterList[category][itemName][mapping.key].join(", ") : masterList[category][itemName][mapping.key]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
  {#each Object.keys(masterList[category]) as itemName}
    <h3>{masterList[category][itemName].name}</h3>
    <p>{masterList[category][itemName].description}</p>
    {#if masterList[category][itemName].modOptions}
      <p>{masterList[category][itemName].name} can accept one of each of the following mods:</p>
      <ul>
        {#each Object.keys(masterList[category][itemName].modOptions) as optionCategory}
          <li><strong>{optionCategory}:</strong> {masterList[category][itemName].modOptions[optionCategory].join(", ")}</li>
        {/each}
      </ul>
    {/if}
  {/each}
{/each}

<style>
  aside {
    float: right;
    border: 1px solid gray;
    background-color: #111;
    border-radius: 2em;
  }
  aside>table {
    margin: 1em 3em;
  }
  aside>h3 {
    text-align: center;
  }
  aside+*+* {
    clear: both;
  }
</style>