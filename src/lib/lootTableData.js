export function getDiceCount(items) {
  const size = items.length;
  const count = Math.ceil(size/20)+(size%20 === 0 ? 1 : 0);
  return count;
}

function sortByRarity(a, b, desc = true) {
  if (a > b) {
    return desc ? -1 : 1;
  }
  if (a < b) {
    return desc ? 1 : -1;
  }
  return 0;
}

function determineWhichIndicesToRepeat(diff, range) {
  const rangeValues = [];
  for (let i = 0; i <= (range[1] - range[0]); i++) {
    rangeValues.push(i + range[0]);
  }
  const repeatKeys = [];
  const min = rangeValues[0];
  const max = rangeValues[rangeValues.length - 1];
  const mid = rangeValues[Math.floor((rangeValues.length - 1) / 2)];
  let added = 0;
  if (diff >= 2) {
    // add first and last first
    repeatKeys.push(min);
    repeatKeys.push(max);
    added += 2;
  }
  let flipABit = true;
  let idxCounter = 1;
  while (added < diff) {
    // if it reaches the outer bounds, reset to middle
    if (mid+idxCounter === max || mid-idxCounter === min) {
      idxCounter = 1;
    }
    // start from middle, go out
    repeatKeys.push(mid + idxCounter * (flipABit ? 1 : -1));
    added++;
    idxCounter++;
    flipABit = !flipABit;
  }
  return repeatKeys;
}

function singleDieTable(items) {
  let itemsToRepeat = 20 - items.length;
  // remove rarity gaps
  const rarityMap = new Map();
  let c = 0;
  const shallow = [...items];
  shallow.sort(({rarity: a}, {rarity: b}) => sortByRarity(a, b, false));
  const itemList = shallow.map(item => {
    const {rarity} = item;
    if (!rarityMap.has(rarity)) {
      rarityMap.set(rarity, c++);
    }
    return { ...item, rarity: rarityMap.get(rarity) };
  });
  itemList.sort(({rarity: a}, {rarity: b}) => sortByRarity(a, b, false));
  const itemsToReturn = [...itemList];
  let i = 0;
  let r = 0;
  while (itemsToRepeat > 0) {
    // should add all rarity 0 once, then all rarity 0-1, then 0-2, etc
    const itemsInRarity = itemList.filter(item => {
      return item.rarity <= r;
    });
    if (i === itemsInRarity.length) {
      i = 0;
      r++;
      continue;
    }
    const item = itemsInRarity[i++];
    itemsToReturn.push(item);
    itemsToRepeat--;
  }
  itemsToReturn.sort(({ name: a }, { name: b }) => {
    return String(a).localeCompare(b);
  });
  itemsToReturn.sort(({rarity: a}, {rarity: b}) => sortByRarity(a, b, false));
  return itemsToReturn.reduce((acc, item, idx) => {
    acc[idx+1] = item;
    return acc;
  }, {});
}

function newSingleDieTable(items) {
  const table = [...items];
  const maxRarityInList = items.map(i => i.rarity).reduce((acc, r) => {
    if (!acc.includes(r)) {
      acc.push(r);
    }
    return acc;
  }, []);
  let rarityMarker = 0;
  while (table.length < 20) {
    const commonItems = items.filter(i => i.rarity <= rarityMarker);
    // slot them in one at a time
    commonItems.sort((a, b) => {
      if (a.rarity < b.rarity) return -1;
      if (a.rarity > b.rarity) return 1;
      return Math.random() > Math.random() ? 1 : -1;
    });
    for (let i = 0; i < commonItems.length && table.length < 20; i++) {
      table.push(commonItems[i]);
    }
    rarityMarker += 1;
    if (rarityMarker > maxRarityInList) {
      // reset
      rarityMarker = 0;
    }
  }
  table.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
  return table.reduce((acc, item, idx) => {
    acc[idx+1] = item;
    return acc;
  }, {});
}

export function distribute(items) {
  // split list by rarity
  items.sort(({rarity: a}, {rarity: b}) => sortByRarity(a, b));

  // table range
  const count = getDiceCount(items);
  if (count === 1) {
    return newSingleDieTable(items);
    // return singleDieTable(items);
  }
  const range = [count, count*20];
  // find diff between number of possible die results versus length of item list
  // listDiff is number of repeated entries;
  let objTable = {};
  for (let i = range[0]; i <= range[1]; i++) {
    objTable[i] = false;
  }
  let listDiff = Object.keys(objTable).length - items.length;
  const repeatedKeys = determineWhichIndicesToRepeat(listDiff, range);

  // rarity 0 count
  let flipABit = true;
  let i = 0;
  let breaker = 0;
  while(Object.values(objTable).some(v => !v)) {
    const empty = Object.values(objTable).filter(v => !v).length;
    if (breaker++ > 5000) {
      console.log("Infinite loop detected, breaking.");
      break;
    }
    // go through lists in descending order; add each to ends of objTable;
    const item = items.shift();
    if (items.length === 0) {
      // hack to prevent middle undefined
      items.push(item);
    }
    if (!item) break;
    let key;
    if (flipABit) {
      // go from first -> last
      [key] = Object.entries(objTable).find(([k,v]) => !v);
    } else {
      // go from last -> first
      [key] = Object.entries(objTable).reverse().find(([k,v]) => !v);
    }
    // const key = flipABit ? Object.keys(objTable)[0] : Object.keys(objTable).reverse()[0];
    objTable[key] = item;
    let n = 1;
    let numKey = Number(key);
    while (repeatedKeys.includes(numKey)) {
      if (empty === 0) break;
      // repeat for this key
      // find nearest empty
      let repKey = 0;
      if (flipABit) {
        // asc
        const row = Object.entries(objTable).find(([k,v]) => !v);
        if (!row) break;
        repKey = row[0];
      } else {
        // desc
        const row = Object.entries(objTable).reverse().find(([k,v]) => !v);
        if (!row) break;
        repKey = row[0];
      }
      objTable[repKey] = item;
      let idx = repeatedKeys.findIndex(k => k === Number(key));
      repeatedKeys.splice(idx, 1);
      n++;
    }
    flipABit = !flipABit;
    i++;
  }
  return objTable;
}
