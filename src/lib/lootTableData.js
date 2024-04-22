export function getDiceCount(items) {
  const size = items.length;
  const count = Math.ceil(size/20)+(size%20 === 0 ? 1 : 0);
  return count;
}

export function distribute(items) {
  // split list by rarity
  items.sort(({rarity: a}, {rarity: b}) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  });

  // table range
  const size = items.length;
  const count = getDiceCount(items);
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
  const zeroes = items.filter(i => i.rarity === 0).length;
  let flipABit = true;
  let i = 0;
  let breaker = 0;
  while(Object.values(objTable).some(v => !v)) {
    const empty = Object.values(objTable).filter(v => !v).length;
    if (breaker++ > 500) {
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