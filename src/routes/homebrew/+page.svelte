<script>
  import * as lists from '../../lib/itemLists';
  
  const homebrewItems = Object.fromEntries(
    Object
      .entries(lists)
      .filter(
        ([listName, itemsInList]) => {
          return !['nukaCola', 'legendaryBaseItems'].includes(listName) && itemsInList.some(item => item.source === "Homebrew");
        }
      )
      .map(([listName, itemsInList]) => [listName, itemsInList.filter(i => i.source === "Homebrew" && !i.skip)])
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
    "Small Guns": [
      { key: "name", label: "Small Gun" },
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
    "Energy Weapons": [
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
    "Big Guns": [
      { key: "name", label: "Big Gun" },
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
    'Melee Weapons': [
      { key: "name", label: "Melee Weapon" },
      { key: "skill", label: "Weapon Type" },
      { key: "damage", label: "Damage Rating" },
      { key: "effects", label: "Damage Effects" },
      { key: "damageType", label: "Damage Type" },
      { key: "qualities", label: "Qualities" },
      { key: "weight", label: "Weight" },
      { key: "cost", label: "Cost" },
      { key: "rarity", label: "Rarity" },
    ],
    "Armor": [
      { key: "name", label: "Armor Piece" },
      { key: "pdr", label: 'Physical' },
      { key: 'edr', label: "Energy" },
      { key: 'rdr', label: "Radiaiton" },
      { key: 'hp', label: "Health Points" },
      { key: 'loc', label: "Locations Covered" },
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

  console.log(masterList);
</script>

<h1>Homebrew Items</h1>
<p>Back to <a href="/">loot tables</a>.</p>

{#each Object.keys(masterList) as category}
  <h2 key="{category}">{category}</h2>
  <table>
    <thead>
      <tr>
        {#each itemTableMap[category] as heading }
          <th key="{heading.label}-{category}">{heading.label}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each Object.keys(masterList[category]) as itemName}
        <tr key="row-{itemName}-{category}">
          {#each itemTableMap[category] as mapping}
            <td key="{mapping.key}-{itemName}-{category}">{Array.isArray(masterList[category][itemName][mapping.key]) ? masterList[category][itemName][mapping.key].join(", ") : masterList[category][itemName][mapping.key]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
  {#each Object.keys(masterList[category]) as itemName}
    {#if category === 'Armor'}
      {#if masterList[category][itemName].isSet && !masterList[category][itemName].secondarySetPiece}
        <h3 key="armor-entry-{itemName}-{category}">{masterList[category][itemName].setName}</h3>
        {@html masterList[category][itemName].description}
      {/if}
      {:else}
      <h3 key="entry-{itemName}-{category}">{masterList[category][itemName].name}</h3>
      {@html masterList[category][itemName].description}
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