const shuffle = () => Math.random() > Math.random() ? 1 : -1;
const addGuns = (baseList) => {
  const retArr = [];
  const max = Math.floor(baseList.length / 3);
  const randomAddMods = Math.floor(Math.random() * max);
  const pickAGun = [...baseList];
  for (let i = 0; i < randomAddMods; i++) {
    const mods = ['Receiver', 'Barrel', 'Magazine', 'Stock', 'Sight', 'Muzzle'];
    // add random base small gun with random amount of mods;
    pickAGun.sort(shuffle);
    const pickedGun = pickAGun.pop();
    const addMods = [];
    if (pickedGun.maxMods === 0) continue;
    const pickLimit = pickedGun.maxMods ?? 6;
    do {
      mods.sort(shuffle);
      addMods.push(mods.pop());
    } while(Math.random() > 0.5 && addMods.length < (pickLimit - 1));
    const item = {
      ...pickedGun,
    }
    item.name = `${pickedGun.name} (with ${addMods.length} random mod${addMods.length > 1 ? 's' : ''})`;
    item.rarity = pickedGun.rarity + addMods.length;
    retArr.push(item);
  }
  return retArr;
};
export const ammo = [
  { name: '.38', rarity: 0, source: 'Core, 91' },                 // 39
  { name: '10mm', rarity: 0, source: 'Core, 91' },                // 37
  { name: '.308', rarity: 1, source: 'Core, 91' },                // 17
  { name: 'Flare', rarity: 1, source: 'Core, 91' },               // 18
  { name: 'Shotgun Shell', rarity: 1, source: 'Core, 91' },       // 31
  { name: '.45', rarity: 2, source: 'Core, 91' },                 // 33
  { name: 'Flamer Fuel', rarity: 2, source: 'Core, 91' },
  { name: 'Fusion Cell', rarity: 2, source: 'Core, 91' },
  { name: 'Gamma Round', rarity: 2, source: 'Core, 91' },
  { name: 'Railway Spike', rarity: 2, source: 'Core, 91' },
  { name: 'Syringer Ammo', rarity: 2, source: 'Core, 91' },
  { name: '.44 Magnum', rarity: 3, source: 'Core, 91' },
  { name: '.50', rarity: 3, source: 'Core, 91' },
  { name: '5.56', rarity: 3, source: 'Core, 91' },
  { name: '5mm', rarity: 3, source: 'Core, 91' },
  { name: 'Fusion Core', rarity: 3, source: 'Core, 91' },
  { name: 'Missile', rarity: 3, source: 'Core, 91' },
  { name: 'Plasma Cartridge', rarity: 4, source: 'Core, 91' },
  { name: '2mm EC', rarity: 5, source: 'Core, 91' },
  { name: 'Mini-Nuke', rarity: 6, source: 'Core, 91' },
  { name: '40mm Grenade Round', rarity: 4, source: 'Settlers, 89' },
  { name: 'Acid Concentrate', rarity: 3, source: 'Settlers, 89' },
  { name: 'Alien Blaster Round', rarity: 6, source: 'Settlers, 89' },
  { name: 'Cannonball', rarity: 5, source: 'Settlers, 89' },
  { name: 'Cryo Cell', rarity: 5, source: 'Settlers, 89' },
  { name: 'Gas Grenade', rarity: 4, source: 'Settlers, 89' },
  { name: 'Harpoon', rarity: 4, source: 'Settlers, 89' },
  { name: '.357 Magnum', rarity: 1, source: 'Wanderers, 57' },
  { name: '12.7mm', rarity: 2, source: 'Wanderers, 57' },
  { name: '.50 Ball', rarity: 0, source: 'Wanderers, 57' },
  { name: '25mm Grenade', rarity: 4, source: 'Wanderers, 57' },
  { name: 'Alien Power Cells', rarity: 5, source: 'Wanderers, 57' },
  { name: 'Alien Power Module', rarity: 6, source: 'Wanderers, 57' },
  { name: 'Arrow', rarity: 1, source: 'Wanderers, 57' },
  { name: 'Crossbow Bolt', rarity: 2, source: 'Wanderers, 57' },
  { name: 'Plasma Core', rarity: 6, source: 'Wanderers, 57' },
];
const baseSmallGuns = [
  { name: '.44 Pistol', rarity: 2, source: 'Core, 95', maxMods: 4 },
  { name: '10mm Pistol', rarity: 1, source: 'Core, 95' },
  { name: 'Flare Gun', rarity: 1, source: 'Core, 95', maxMods: 0 },
  { name: 'Assault Rifle', rarity: 2, source: 'Core, 95' },
  { name: 'Combat Rifle', rarity: 2, source: 'Core, 95',  },
  { name: 'Gauss Rifle', rarity: 4, source: 'Core, 95', maxMods: 5 },
  { name: 'Hunting Rifle', rarity: 2, source: 'Core, 95' },
  { name: 'Submachine Gun', rarity: 1, source: 'Core, 95', maxMods: 5 },
  { name: 'Combat Shotgun', rarity: 2, source: 'Core, 95' },
  { name: 'Double-Barrel Shotgun', rarity: 1, source: 'Core, 95', maxMods: 5 },
  { name: 'Pipe Bolt-Action', rarity: 0, source: 'Core, 95' },
  { name: 'Pipe Gun', rarity: 0, source: 'Core, 95' },
  { name: 'Pipe Revolver', rarity: 0, source: 'Core, 95' },
  { name: 'Railway Rifle', rarity: 4, source: 'Core, 95', maxMods: 5 },
  { name: 'Syringer', rarity: 2, source: 'Core, 95', maxMods: 3 },
  { name: 'M79 Grenade Launcher', rarity: 3, source: 'Settlers, 90', maxMods: 2 },
  { name: '.357 Magnum Revolver', rarity: 2, source: 'Wanderers, 60', maxMods: 3 },
  { name: '12.7mm Pistol', rarity: 4, source: 'Wanderers, 60' },
  { name: '12.7mm SMG', rarity: 4, source: 'Wanderers, 60', maxMods: 5 },
  { name: '25mm Grenade APW', rarity: 4, source: 'Wanderers, 60', maxMods: 3 },
  { name: '9mm Pistol', rarity: 2, source: 'Wanderers, 60', maxMods: 5 },
  { name: 'Anti-Materiel Rifle', rarity: 4, source: 'Wanderers, 60', maxMods: 4 },
  { name: 'Battle Rifle', rarity: 3, source: 'Wanderers, 60', maxMods: 4 },
  { name: 'Black Powder Blunderbuss', rarity: 3, source: 'Wanderers, 60', maxMods: 0 },
  { name: 'Black Powder Pistol', rarity: 3, source: 'Wanderers, 60', maxMods: 0 },
  { name: 'Black Powder Rifle', rarity: 3, source: 'Wanderers, 60', maxMods: 1 },
  { name: 'Gauss Pistol', rarity: 5, source: 'Wanderers, 60', maxMods: 3 },
  { name: 'Gauss Shotgun', rarity: 5, source: 'Wanderers, 60', maxMods: 2 },
  { name: 'Lever-Action Rifle', rarity: 3, source: 'Wanderers, 60', maxMods: 5 },
  { name: 'Light Machine Gun', rarity: 3, source: 'Wanderers, 60' },
  { name: 'Pump-Action Shotgun', rarity: 1, source: 'Wanderers, 60', maxMods: 5 },
  { name: 'Radium Rifle', rarity: 3, source: 'Wanderers, 60' },
  { name: 'Sniper Rifle', rarity: 4, source: 'Wanderers, 60', maxMods: 3 },
  {
    name: "Crusader Pistol", 
    rarity: 5, 
    source: "Homebrew", 
    type: "Small Guns", 
    damage: 6, 
    effects: ['Piercing 1'], 
    damageType: "Physical", 
    fireRate: 1, 
    range: 'C', 
    qualities: ['Close Quarters', 'Reliable'], 
    weight: 4,
    cost: 500, 
    description: `
    <p><strong>Ammunition:</strong> 10mm</p>
    <p>Special pistol developed by the Brotherhood of Steel.</p>
    <ul>
      <li><strong>Receiver:</strong> Pyro Receiver, Cryo Receiver, Fusion Receiver, 5.56 Receiver</li>
      <li><strong>Barrel:</strong> Long Barrel</li>
      <li><strong>Grip:</strong> Sharpshooter's Grip</li>
      <li><strong>Magazine:</strong> Large Magazine</li>
      <li><strong>Sights:</strong> Reflex Sight, Short Scope</li>
      <li><strong>Muzzle:</strong> Suppressor</li>
    </ul>
    <p>The receiver mods for the Crusader Pistol are unique and presented below.</p>
    <table>
      <thead>
        <tr><th>Receiver Mod</th><th>Name Prefix</th><th>Effect</th><th>Weight</th><th>Cost</th><th>Perks</th></tr>
      </thead>
      <tbody>
        <tr><td>Pyro Receiver</td><td>Pyro</td><td>Adds Persistant (Energy) effect</td><td>+1</td><td>+250</td><td>Science! 2</td></tr>
        <tr><td>Cryo Receiver</td><td>Cryo</td><td>Adds Freezing effect</td><td>+1</td><td>+250</td><td>Science! 2</td></tr>
        <tr><td>Fusion Receiver</td><td>Fusion</td><td>Changes damage type to Energy; changes ammo to fusion cells.</td><td>+1</td><td>+200</td><td>Science! 1</td></tr>
        <tr><td>5.56 Receiver</td><td>5.56</td><td>+1 damage; changes ammo to 5.56.</td><td>+2</td><td>+150</td><td>Gun Nut 1</td></tr>
      </tbody>
    </table>
    <p>The recipes for these mods are below, and they can be crafted at a Weapons Workbench.</p>
    <table>
      <thead>
        <tr><th>Mod</th><th>Complexity</th><th>Perks</th><th>Skill</th><th>Rarity</th></tr>
      </thead>
      <tbody >
        <tr><td>Pyro Receiver</td><td>5</td><td>Science! 2</td><td>Science</td><td>Rare</td></tr>
        <tr><td>Cryo Receiver</td><td>5</td><td>Science! 2</td><td>Science</td><td>Rare</td></tr>
        <tr><td>Fusion Receiver</td><td>4</td><td>Science! 1</td><td>Science</td><td>Rare</td></tr>
        <tr><td>5.56 Receiver</td><td>4</td><td>Gun Nut 1</td><td>Repair</td><td>Rare</td></tr>
      </tbody>
    </table>
    `,
  }
];
export const smallGuns = [
  ...baseSmallGuns,
  { name: '10mm Auto Pistol (Automatic Receiver)', rarity: 2, source: 'Core, 95' },
  { name: 'Scoped Hunting Rifle (Long Barrel, Short Scope)', rarity: 3, source: 'Core, 95' },
  { name: 'Pipe Bolt-Action Rifle (Long Barrel, Standard Stock)', rarity: 0, source: 'Core, 95' },
  { name: 'Pipe Rifle (Long Barrel, Standard Stock)', rarity: 0, source: 'Core, 95' },
  { name: 'Auto Pipe Gun (Automatic Receiver)', rarity: 0, source: 'Core, 95' },
  ...addGuns(baseSmallGuns),
];
const baseEnergyWeapons = [
  { name: 'Institute Laser', rarity: 2, source: 'Core, 101', maxMods: 5 },
  { name: 'Laser Musket', rarity: 1, source: 'Core, 101', maxMods: 5 },
  { name: 'Laser Gun', rarity: 2, source: 'Core, 101', maxMods: 5 },
  { name: 'Plasma Gun', rarity: 3, source: 'Core, 101', maxMods: 4 },
  { name: 'Gamma Gun', rarity: 5, source: 'Core, 101', maxMods: 2 },
  { name: 'Acid Soaker', rarity: 3, source: 'Settlers, 91', maxMods: 2 },
  { name: 'Alien Blaster', rarity: 5, source: 'Settlers, 91', maxMods: 1 },
  { name: 'Assaultron Head', rarity: 3, source: 'Wanderers, 65', maxMods: 1 },
  { name: 'Mesmetron', rarity: 4, source: 'Settlers, 91', maxMods: 3 },
  { name: 'Alien Atomizer', rarity: 5, source: 'Wanderers, 65', maxMods: 0 },
  { name: 'Alien Disintegrator', rarity: 5, source: 'Wanderers, 65', maxMods: 0 },
  { name: 'Arc Welder', rarity: 4, source: 'Wanderers, 65', maxMods: 0 },
  { name: 'Microwave Emitter', rarity: 5, source: 'Wanderers, 65', maxMods: 0 },
  { name: 'Tesla Rifle', rarity: 4, source: 'Wanderers, 65', MaxMods: 2 },
  // Homebrew
  {
    name: "Enclave Plasma Gun", 
    rarity: 4, 
    source: "Homebrew", 
    type: "Energy Weapons", 
    damage: 7, 
    effects: [], 
    damageType: "Physical/Energy", 
    fireRate: 1, 
    range: 'C', 
    qualities: ['Accurate', 'Close Quarters'], 
    weight: 4, 
    cost: 246, 
    description: `
    <p><strong>Ammunition:</strong> Plasma Cartridge</p>
    <p>A specialized model of plasma gun developed by the Enclave. It has more precise and sophisticated construction than a run-of-the-mill plasma gun, giving it more damage potential but also making it more difficult to modify. Visibly, an Enclave plasma gun is distinguished by its darker color scheme. Any attempt to modify an Enclave plasma gun has +2 complication range. Mods for an Enclave plasma gun are incompatible with a standard plasma gun and vice versa, and all Enclave plasma gun mods are Rare.</p>
    <p>The default profile is for an Enclave plasma pistol. Any Stock mods change the weapon to an Enclave plasma rifle.</p>
    <ul>
      <li><strong>Capacitor:</strong> Photon Exciter, Beta Wave Tuner, Boosted Capacitor, Photon Agitator</li>
      <li><strong>Barrel:</strong> Splitter, Automatic Barrel, Sniper Barrel, Flamer Barrel</li>
      <li><strong>Stock:</strong> Standard Stock, Marksman's Stock, Recoil-Compensating Stock</li>
      <li><strong>Grip:</strong> Sharpshooter's Grip</li>
      <li><strong>Sights:</strong> Reflex Sight, Short Scope, Long Scope, Short Night Vision Scope, Long Night Vision Scope, Recon Scope</li>
    </ul>
    `,
  },
];
export const energyWeapons = [
  ...baseEnergyWeapons,
  { name: 'Institute Rifle (Long Barrel, Standard Stock)', rarity: 2, source: 'Core, 101' },
  { name: 'Laser Rifle (Long Barrel, Standard Stock)', rarity: 2, source: 'Core, 101' },
  { name: 'Plasma Rifle (Long Barrel, Standard Stock)', rarity: 3, source: 'Core, 101' },
  // { name: 'Assaultron Head Laser', rarity: 4, source: 'Settlers, 91' },
  // { name: 'Tesla Rifle', rarity: 4, source: 'Settlers, 91' },
  { name: "Enclave Plasma Rifle (Standard Stock)", rarity: 4, source: 'Homebrew', skip: true },
  { name: "Enclave Plasma Flamer (Beta Wave Tuner, Flamer Barrel, Standard Stock)", rarity: 5, source: 'Homebrew', skip: true },
  { name: "Enclave Tactical Plasma Thrower (Beta Wave Tuner, Reflex Sight, Flamer Barrel)", rarity: 6, source: 'Homebrew', skip: true },
  { name: "Automatic Enclave Plasma Rifle (Automatic Barrel, Standard Stock)", rarity: 6, source: 'Homebrew', skip: true },
  { name: "Enclave Plasma Sniper Rifle (Boosted Capacitor, Sniper Barrel, Marksman's Stock, Short Scope)", rarity: 7, source: 'Homebrew', skip: true },
  { name: "Recoil-Compensated Enclave Plasma Rifle (Photon Agitator, Automatic Barrel, Recoil-Compensating Stock, Reflex Sight)", rarity: 8, source: 'Homebrew', skip: true },
  { name: "Excited Enclave Plasma Pistol (Photon Exciter, Sharpshooter's Grip, Reflex Sight)", rarity: 7, source: 'Homebrew', skip: true },
  ...addGuns(baseEnergyWeapons),
];
const baseBigGuns = [
  { name: 'Fat Man', rarity: 4, source: 'Core, 106', maxMods: 0 },
  { name: 'Flamer', rarity: 3, source: 'Core, 106', maxMods: 4 },
  { name: 'Gatling Laser', rarity: 3, source: 'Core, 106', maxMods: 4 },
  { name: 'Heavy Incinerator', rarity: 4, source: 'Core, 106', maxMods: 0 },
  { name: 'Junk Jet', rarity: 3, source: 'Core, 106', maxMods: 4 },
  { name: 'Minigun', rarity: 2, source: 'Core, 106', maxMods: 3 },
  { name: 'Missile Launcher', rarity: 4, source: 'Core, 106', maxMods: 3 },
  { name: 'Broadsider', rarity: 5, source: 'Settlers, 94', maxMods: 2 },
  { name: 'Cryolator', rarity: 4, source: 'Settlers, 94', maxMods: 4 },
  { name: 'Harpoon Gun', rarity: 5, source: 'Settlers, 94', maxMods: 2 },
  { name: '.50 Cal Machine Gun', rarity: 3, source: 'Wanderers, 67', maxMods: 1 },
  { name: 'Auto Grenade Launcher', rarity: 4, source: 'Wanderers, 67', maxMods: 2 },
  { name: 'Drone Cannon', rarity: 5, source: 'Wanderers, 67', maxMods: 0 },
  { name: 'Gatling Gun', rarity: 1, source: 'Wanderers, 67' },
  { name: 'Gatling Plasma', rarity: 4, source: 'Wanderers, 67', maxMods: 4 },
  { name: 'Gauss Minigun', rarity: 6, source: 'Wanderers, 67', maxMods: 3 },
  { name: 'Plasma Caster', rarity: 5, source: 'Wanderers, 67', maxMods: 2 },
  { name: 'Tesla Cannon', rarity: 5, source: 'Wanderers, 67', maxMods: 0 },
  // Homebrew
  // Pepper Shaker, Cremator, Hellstorm Missile Launcher
  {
    name: "Pepper Shaker", 
    rarity: 5, 
    source: "Homebrew", 
    maxMods: 3,
    type: "Big Guns", 
    damage: 6, 
    effects: ['Vicious'], 
    damageType: "Physical", 
    fireRate: 3,
    range: 'C', 
    qualities: ['Gatling', 'Ammo-Hungry (4)', 'Two-Handed'], 
    weight: 18, 
    cost: 150, 
    description: `
    <p><strong>Ammunition:</strong> Shotgun Shells</p>
    <p>The Pepper Shaker is a heavy rotary barrel machine shotgun with four barrels. It takes one second to spin up before it begins automatically firing shotgun blasts of eight projectiles. It counts as both a shotgun and heavy gun, and as such will benefit from any perk within each weapon class.</p>
    <ul>
      <li><strong>Barrel:</strong> Dual, Hex, Single</li>
      <li><strong>Magazine:</strong> Laser, Plasma</li>
      <li><strong>Sights:</strong> Gunner Sight</li>
    </ul>
    <p>The barrel and magazine mods for the Pepper Shaker are unique and presented below.</p>
    <table>
    <tbody>
        <tr><th>Barrel Mod</th><th>Name Prefix</th><th>Effect</th><th>Weight</th><th>Cost</th><th>Perks</th></tr>
        <tr><td>Dual</td><td>Dual-Barreled</td><td> -1 fire rate, change Ammo-Hungry to 2. </td><td> -2 </td><td> +100 </td><td>Gun Nut 2</td></tr>
        <tr><td>Hex</td><td>Dual-Barreled</td><td> +4 fire rate, change Ammo-Hungry to 6. </td><td> +4 </td><td> +100 </td><td>Gun Nut 3</td></tr>
        <tr><td>Single</td><td>Single-Barreled</td><td> +1 damage, -2 fire rate, remove Ammo-Hungry </td><td> -4 </td><td> +100 </td><td>Gun Nut 2</td></tr>
        <tr><th>Magazine Mod</th><th>Name Prefix</th><th>Effect</th><th>Weight</th><th>Cost</th><th>Perks</th></tr>
        <tr><td>Laser</td><td>Fusion</td><td> Change damage type to Energy; Change ammo to fusion cells. </td><td> +4 </td><td> +200 </td><td>Science! 2</td></tr>
        <tr><td>Plasma</td><td>Plasma</td><td> Change damage type to Physical/Energy; Change ammo to plasma cartridges. </td><td> +4 </td><td> +300 </td><td>Science! 3</td></tr>
      </tbody>
    </table>
    <p>The recipes for these mods are below, and they can be crafted at a Weapons Workbench.</p>
    <table>
      <thead>
        <tr><th>Mod</th><th>Complexity</th><th>Perks</th><th>Skill</th><th>Rarity</th></tr>
      </thead>
      <tbody >
        <tr><td>Dual Barrel</td><td>3</td><td>Gun Nut 2</td><td>Repair</td><td>Rare</td></tr>
        <tr><td>Hex Barrel</td><td>4</td><td>Gun Nut 3</td><td>Repair</td><td>Rare</td></tr>
        <tr><td>Single Barrel</td><td>3</td><td>Gun Nut 2</td><td>Repair</td><td>Rare</td></tr>

        <tr><td>Laser</td><td>5</td><td>Science! 2</td><td>Science</td><td>Rare</td></tr>
        <tr><td>Plasma</td><td>7</td><td>Science! 3</td><td>Science</td><td>Rare</td></tr> 
      </tbody>
    </table>
    `,
  },
  {
    name: "Cremator", 
    rarity: 5, 
    source: "Homebrew", 
    maxMods: 3,
    type: "Big Guns", 
    damage: 10, 
    effects: ['Breaking', 'Persistent'],
    damageType: "Physical", 
    fireRate: 0,
    range: 'L', 
    qualities: ['Ammo-Hungry (10)', 'Blast', 'Debilitating', 'Inaccurate', 'Two-Handed'], 
    weight: 12, 
    cost: 400, 
    description: `
    <p><strong>Ammunition:</strong> Flamer Fuel</p>
    <p>It lobs fireballs.</p>
    <ul>
      <li><strong>Fuel:</strong> Napalm, Slow-Burning</li>
      <li><strong>Tank:</strong> Huge </li>
      <li><strong>Barrel:</strong> Double-shot, Heavy, Multi-Shot</li>
    </ul>
    <p>The mods for the Cremator are unique and presented below.</p>
    <table>
    <tbody>
        <tr><th>Fuel Mod</th><th>Name Prefix</th><th>Effect</th><th>Weight</th><th>Cost</th><th>Perks</th></tr>
        <tr><td>Napalm</td><td>Napalm</td><td> +1 damage rating. </td><td> +3 </td><td> +200 </td><td>-</td></tr>
        <tr><td>Slow-Burning</td><td>Slow-Burning</td><td> -2 damage rating. For the purposes of Persistent, count Effects twice. </td><td> - </td><td> - </td><td>-</td></tr>
        <tr><th>Tank Mod</th><th>Name Prefix</th><th>Effect</th><th>Weight</th><th>Cost</th><th>Perks</th></tr>
        <tr><td>Huge</td><td>-</td><td> +2 fire rate. </td><td> +3 </td><td> +200 </td><td>-</td></tr>
        <tr><th>Barrel Mod</th><th>Name Prefix</th><th>Effect</th><th>Weight</th><th>Cost</th><th>Perks</th></tr>
        <tr><td>Double-Shot</td><td>-</td><td> +1 fire rate, gain Vicious. </td><td> +4 </td><td> +300 </td><td>-</td></tr>
        <tr><td>Heavy</td><td>-</td><td> +2 damage rating. </td><td> +10 </td><td> +200 </td><td>-</td></tr>
        <tr><td>Multi-Shot</td><td>-</td><td> Change Blast quality to Bombard. </td><td> +4 </td><td> +200 </td><td>-</td></tr>
      </tbody>
    </table>
    <p>The recipes for these mods are below, and they can be crafted at a Weapons Workbench.</p>
    <table>
      <thead>
        <tr><th>Mod</th><th>Complexity</th><th>Perks</th><th>Skill</th><th>Rarity</th></tr>
      </thead>
      <tbody >
        <tr><td>Napalm</td><td>4</td><td>-</td><td>Science</td><td>Rare</td></tr>
        <tr><td>Slow-Burning</td><td>4</td><td>-</td><td>Science</td><td>Rare</td></tr>
        
        <tr><td>Huge Tank</td><td>3</td><td>-</td><td>Repair</td><td>Rare</td></tr>

        <tr><td>Double-Shot</td><td>5</td><td>-</td><td>Repair</td><td>Rare</td></tr>
        <tr><td>Heavy</td><td>5</td><td>-</td><td>Repair</td><td>Rare</td></tr> 
        <tr><td>Multi-Shot</td><td>6</td><td>-</td><td>Science</td><td>Rare</td></tr> 
      </tbody>
    </table>
    `,
  },
  {
    name: "Hellfire Missile Launcher", 
    rarity: 5, 
    source: "Homebrew", 
    maxMods: 2,
    type: "Big Guns", 
    damage: 10, 
    effects: [],
    damageType: "Physical", 
    fireRate: 3,
    range: 'L', 
    qualities: ['Blast', 'Two-Handed'], 
    weight: 13, 
    cost: 600, 
    description: `
    <p><strong>Ammunition:</strong> Missiles</p>
    <p>Automatic Missile Launcher</p>
    <ul>
      <li><strong>Payload:</strong> Napalm, Enhanced Blast, Plasma, Cryo</li>
      <li><strong>Sight:</strong> Recon Scope, Night Vision Scope </li>
    </ul>
    <p>The Payload mods for the Hellfire Missile Launcher are unique and presented below.</p>
    <table>
      <thead>
        <tr><th>Payload Mod</th><th>Name Prefix</th><th>Effect</th><th>Weight</th><th>Cost</th><th>Perks</th></tr>
      </thead>
      <tbody>
        <tr><td>Napalm</td><td>Napalm</td><td>Adds Persistant (Energy) effect</td><td> +10 </td><td>+200</td><td>-</td></tr>
        <tr><td>Enhanced Blast</td><td>Hex</td><td>+1 damage, +2 fire rate</td><td> +10 </td><td>+200</td><td>-</td></tr>
        <tr><td>Plasma</td><td>Plasma</td><td>Changes damage type to Physical/Energy.</td><td> +10 </td><td>+200</td><td>-</td></tr>
        <tr><td>Cryo</td><td>Cryo</td><td>Adds Freezing effect.</td><td> +10 </td><td>+200</td><td>-</td></tr>
      </tbody>
    </table>
    <p>The recipes for these mods are below, and they can be crafted at a Weapons Workbench.</p>
    <table>
      <thead>
        <tr><th>Mod</th><th>Complexity</th><th>Perks</th><th>Skill</th><th>Rarity</th></tr>
      </thead>
      <tbody >
        <tr><td>Napalm</td><td>5</td><td>-</td><td>Science</td><td>Rare</td></tr>
        <tr><td>Enhanced Blast</td><td>5</td><td>-</td><td>Repair</td><td>Rare</td></tr>
        <tr><td>Plasma</td><td>5</td><td>-</td><td>Science</td><td>Rare</td></tr>
        <tr><td>Cryo</td><td>5</td><td>-</td><td>Science</td><td>Rare</td></tr>
      </tbody>
    </table>
    `,
  },
];
export const bigGuns = [...baseBigGuns, ...addGuns(baseBigGuns)];
const bows = [
  { name: 'Bow', rarity: 1, source: 'Wanderers, 73' },
  { name: 'Crossbow', rarity: 2, source: 'Wanderers, 73' },
];
export const rangedWeapons = [ 
  ...smallGuns, ...energyWeapons, ...bigGuns, ...bows,
];
export const meleeWeapons = [
  { name: 'Sword', rarity: 2, source: 'Core, 111' },
  { name: 'Combat Knife', rarity: 1, source: 'Core, 111' },
  { name: 'Machete', rarity: 1, source: 'Core, 111' },
  { name: 'Ripper', rarity: 2, source: 'Core, 111' },
  { name: 'Shishkebab', rarity: 3, source: 'Core, 111' },
  { name: 'Switchblade', rarity: 0, source: 'Core, 111' },
  { name: 'Baseball Bat', rarity: 1, source: 'Core, 111' },
  { name: 'Aluminum Baseball Bat', rarity: 2, source: 'Core, 111' },
  { name: 'Board', rarity: 0, source: 'Core, 111' },
  { name: 'Lead Pipe', rarity: 0, source: 'Core, 111' },
  { name: 'Pipe Wrench', rarity: 1, source: 'Core, 111' },
  { name: 'Pool Cue', rarity: 0, source: 'Core, 111' },
  { name: 'Rolling Pin', rarity: 0, source: 'Core, 111' },
  { name: 'Baton', rarity: 1, source: 'Core, 111' },
  { name: 'Sledgehammer', rarity: 2, source: 'Core, 111' },
  { name: 'Super Sledge', rarity: 3, source: 'Core, 111' },
  { name: 'Tire Iron', rarity: 1, source: 'Core, 111' },
  { name: 'Walking Cane', rarity: 0, source: 'Core, 111' },
  { name: 'Boxing Glove', rarity: 1, source: 'Core, 111' },
  { name: 'Deathclaw Gauntlet', rarity: 3, source: 'Core, 111' },
  { name: 'Knuckles', rarity: 1, source: 'Core, 111' },
  { name: 'Power Fist', rarity: 2, source: 'Core, 111' },
  { name: 'Assaultron Blade', rarity: 3, source: 'Wanderers, 75' },
  { name: 'Auto-Axe', rarity: 3, source: 'Wanderers, 75' },
  { name: 'Ballistic Fist', rarity: 4, source: 'Wanderers, 75' },
  { name: 'Bumper Sword', rarity: 2, source: 'Wanderers, 75' },
  { name: 'Cattle Prod', rarity: 4, source: 'Wanderers, 75' },
  { name: 'Chainsaw', rarity: 3, source: 'Wanderers, 75' },
  { name: 'Death Tambo', rarity: 2, source: 'Wanderers, 75' },
  { name: 'Displacer Glove', rarity: 4, source: 'Wanderers, 75' },
  { name: 'Guitar Sword', rarity: 3, source: 'Wanderers, 75' },
  { name: 'Mr Handy Buzz Blade', rarity: 2, source: 'Wanderers, 75' },
  { name: 'Multi-Purpose Axe', rarity: 2, source: 'Wanderers, 75' },
  { name: 'Proton Axe', rarity: 5, source: 'Wanderers, 75' },
  { name: 'War Drum', rarity: 3, source: 'Wanderers, 75' },
  // Homebrew
  // baseball bat: 4 vs 55; multiply damage by 0.07 and round
  // Bone Club, plasma cutter, sheepsquatch club, sheepsquatch staff, warglaive, spear
  // bear arm
  {
    name: 'Bone Club',
    rarity: 2,
    source: 'Homebrew',
    type: "Melee Weapons", 
    skill: 'Melee Weapons',
    damage: 4,
    effects: ['Stun'],
    damageType: 'Physical',
    qualities: ['Unreliable'],
    weight: 3,
    cost: 15,
    description: `
      <p>Made from the bone of a scorchbeast.</p>
      <table>
        <thead>
          <tr><th>Mod</th><th>Name Prefix</th><th>Effects</th><th>Weight</th><th>Cost</th><th>Perks</th></tr>
        </thead>
        <tbody>
          <tr><td> Wounding </td><td> Wounding </td><td> Adds Persistant </td><td> - </td><td> - </td><td>-</td></tr>
        </tbody>
      </table>
      <p>The recipe for this mod is below, and it can be crafted at a Weapons Workbench.</p>
      <table>
        <thead>
          <tr><th>Mod</th><th>Complexity</th><th>Perks</th><th>Skill</th><th>Rarity</th></tr>
        </thead>
        <tbody >
          <tr><td>Wounding</td><td>3</td><td>-</td><td>Repair</td><td>Common</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    name: 'Plasma Cutter',
    rarity: 5,
    source: 'Homebrew',
    type: "Melee Weapons", 
    skill: 'Melee Weapons',
    damage: 5,
    effects: ['Piercing 1'],
    damageType: 'Physical/Energy',
    qualities: ['Debilitating'],
    weight: 3,
    cost: '-',
    // description: '<p>Tool for cutting metal, repurposed as a weapon.</p>',
    description: `
      <p>Tool for cutting metal, repurposed as a weapon.</p>
      <table>
        <thead>
          <tr><th>Mod</th><th>Name Prefix</th><th>Effects</th><th>Weight</th><th>Cost</th><th>Perks</th></tr>
        </thead>
        <tbody>
          <tr><td> Flaming Blade </td><td> Burning </td><td> Adds Persistant (Energy) </td><td> - </td><td> - </td><td>Blacksmith 1, Science! 1</td></tr>
          <tr><td> Shocking Blade </td><td> Shocking </td><td> Adds Stun </td><td> - </td><td> - </td><td>Blacksmith 1, Science! 1</td></tr>
          <tr><td> Cryo Blade </td><td> Cryo </td><td> Adds Freeze </td><td> - </td><td> - </td><td>Blacksmith 1, Science! 1</td></tr>
        </tbody>
      </table>
      <p>The recipes for these mods are below, and they can be crafted at a Weapons Workbench.</p>
      <table>
        <thead>
          <tr><th>Mod</th><th>Complexity</th><th>Perks</th><th>Skill</th><th>Rarity</th></tr>
        </thead>
        <tbody >
          <tr><td>Flaming Blade</td><td>4</td><td>Blacksmith 1, Science! 1</td><td>Science</td><td>Rare</td></tr>
          <tr><td>Shocking Blade</td><td>4</td><td>Blacksmith 1, Science! 1</td><td>Science</td><td>Rare</td></tr>
          <tr><td>Cryo Blade</td><td>4</td><td>Blacksmith 1, Science! 1</td><td>Science</td><td>Rare</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    name: 'Sheepsquatch Club',
    rarity: 3,
    source: 'Homebrew',
    type: "Melee Weapons", 
    skill: 'Melee Weapons',
    damage: 4,
    effects: ['Stun'],
    damageType: 'Physical',
    qualities: [],
    weight: 3,
    cost: 15,
    description: `
      <p>Made from the skull of a sheepsquatch.</p>
      <table>
        <thead>
          <tr><th>Mod</th><th>Name Prefix</th><th>Effects</th><th>Weight</th><th>Cost</th><th>Perks</th></tr>
        </thead>
        <tbody>
          <tr><td> Barbed </td><td> Barbed </td><td> +1 damage </td><td> +2 </td><td> - </td><td>Blacksmith 1</td></tr>
          <tr><td> Burning Barbed </td><td> Burning Barbed </td><td> +1 damage, adds Persistent (Energy) </td><td> +3 </td><td> - </td><td>Blacksmith 1, Science! 1</td></tr>
          <tr><td> Burning </td><td> Burning </td><td> Adds Persistent (Energy) </td><td> +2 </td><td> - </td><td>Science! 1</td></tr>
          <tr><td> Electrified </td><td> Electrified </td><td> Changes damage type to Energy. </td><td> +1 </td><td> - </td><td>Science! 2</td></tr>
          <tr><td> Heavy </td><td> Heavy </td><td> +2 damage, adds Debilitating </td><td> +4 </td><td> - </td><td>Blacksmith 2</td></tr>
          <tr><td> Poisoned </td><td> Poisoned </td><td> Adds Persistent (Poison) </td><td> - </td><td> - </td><td>Chemist</td></tr>
        </tbody>
      </table>
      <p>The recipes for these mods are below, and they can be crafted at a Weapons Workbench.</p>
      <table>
        <thead>
          <tr><th>Mod</th><th>Complexity</th><th>Perks</th><th>Skill</th><th>Rarity</th></tr>
        </thead>
        <tbody >
          <tr><td>Barbed</td><td>3</td><td>Blacksmith 1</td><td>Repair</td><td>Uncommon</td></tr>
          <tr><td>Burning Barbed</td><td>4</td><td>Blacksmith 1, Science! 1</td><td>Repair</td><td>Uncommon</td></tr>
          <tr><td>Burning</td><td>3</td><td>Science! 1</td><td>Science</td><td>Uncommon</td></tr>
          <tr><td>Electrified</td><td>3</td><td>Science! 2</td><td>Science</td><td>Uncommon</td></tr>
          <tr><td>Heavy</td><td>4</td><td>Blacksmith 2</td><td>Repair</td><td>Uncommon</td></tr>
          <tr><td>Poisoned</td><td>3</td><td>Chemist</td><td>Survival</td><td>Uncommon</td></tr> 
        </tbody>
      </table>
    `,
  },
  {
    name: 'Sheepsquatch Staff',
    rarity: 3,
    source: 'Homebrew',
    type: "Melee Weapons", 
    skill: 'Melee Weapons',
    damage: 5,
    effects: ['Stun'],
    damageType: 'Physical',
    qualities: ['Two-Handed'],
    weight: 12,
    cost: 40,
    description: `
      <p>Made from the skull of a sheepsquatch.</p>
      <table>
        <thead>
          <tr><th>Mod</th><th>Name Prefix</th><th>Effects</th><th>Weight</th><th>Cost</th><th>Perks</th></tr>
        </thead>
        <tbody>
          <tr><td> Barbed </td><td> Barbed </td><td> +1 damage </td><td> +2 </td><td> - </td><td>Blacksmith 1</td></tr>
          <tr><td> Burning Barbed </td><td> Burning Barbed </td><td> +1 damage, adds Persistent (Energy) </td><td> +3 </td><td> - </td><td>Blacksmith 1, Science! 1</td></tr>
          <tr><td> Burning </td><td> Burning </td><td> Adds Persistent (Energy) </td><td> +2 </td><td> - </td><td>Science! 1</td></tr>
          <tr><td> Electrified </td><td> Electrified </td><td> Changes damage type to Energy. </td><td> +1 </td><td> - </td><td>Science! 2</td></tr>
          <tr><td> Heavy </td><td> Heavy </td><td> +2 damage, adds Debilitating </td><td> +4 </td><td> - </td><td>Blacksmith 2</td></tr>
          <tr><td> Poisoned </td><td> Poisoned </td><td> Adds Persistent (Poison) </td><td> - </td><td> - </td><td>Chemist</td></tr>
        </tbody>
      </table>
      <p>The recipes for these mods are below, and they can be crafted at a Weapons Workbench.</p>
      <table>
        <thead>
          <tr><th>Mod</th><th>Complexity</th><th>Perks</th><th>Skill</th><th>Rarity</th></tr>
        </thead>
        <tbody >
          <tr><td>Barbed</td><td>3</td><td>Blacksmith 1</td><td>Repair</td><td>Uncommon</td></tr>
          <tr><td>Burning Barbed</td><td>4</td><td>Blacksmith 1, Science! 1</td><td>Repair</td><td>Uncommon</td></tr>
          <tr><td>Burning</td><td>3</td><td>Science! 1</td><td>Science</td><td>Uncommon</td></tr>
          <tr><td>Electrified</td><td>3</td><td>Science! 2</td><td>Science</td><td>Uncommon</td></tr>
          <tr><td>Heavy</td><td>4</td><td>Blacksmith 2</td><td>Repair</td><td>Uncommon</td></tr>
          <tr><td>Poisoned</td><td>3</td><td>Chemist</td><td>Survival</td><td>Uncommon</td></tr> 
        </tbody>
      </table>
    `,
  },
  {
    name: 'War Glaive',
    rarity: 4,
    source: 'Homebrew',
    type: "Melee Weapons", 
    skill: 'Melee Weapons',
    damage: 6,
    effects: ['Piercing 1'],
    damageType: 'Physical',
    qualities: ['Two-Handed'],
    weight: 9,
    cost: 250,
    description: '<p>On a similar idea as the Super Sledge, but more of a spear.</p>',
    description: `
      <p>On a similar idea as the Super Sledge, but more of a spear.</p>
      <table>
        <thead>
          <tr><th>Mod</th><th>Name Prefix</th><th>Effects</th><th>Weight</th><th>Cost</th><th>Perks</th></tr>
        </thead>
        <tbody>
          <tr><td> Shocking Blade </td><td> Electrified </td><td> Changes damage type to Energy. </td><td> - </td><td> - </td><td>Blacksmith 2, Science! 1</td></tr>
          <tr><td> Cryo Blade </td><td> Freezing </td><td> Adds Freezing. </td><td> - </td><td> - </td><td>Blacksmith 2, Science! 1</td></tr>
          <tr><td> Flaming Blade </td><td> Flaming </td><td> Adds Persistent (Energy). </td><td> - </td><td> - </td><td>Blacksmith 2, Science! 1</td></tr>
          <tr><td> Plasma Blade </td><td> Plasma </td><td> Changes damage type to Physical/Energy. </td><td> - </td><td> - </td><td>Blacksmith 2, Science! 3</td></tr>
        </tbody>
      </table>
      <p>The recipes for these mods are below, and they can be crafted at a Weapons Workbench.</p>
      <table>
        <thead>
          <tr><th>Mod</th><th>Complexity</th><th>Perks</th><th>Skill</th><th>Rarity</th></tr>
        </thead>
        <tbody >
          <tr><td>Shocking Blade</td><td> 4 </td><td>Blacksmith 2, Science 1</td><td>Repair</td><td>Rare</td></tr>
          <tr><td>Cryo Blade</td><td> 4 </td><td>Blacksmith 2, Science 1</td><td>Repair</td><td>Rare</td></tr>
          <tr><td>Flaming Blade</td><td> 4 </td><td>Blacksmith 2, Science 1</td><td>Repair</td><td>Rare</td></tr>
          <tr><td>Plasma Blade</td><td> 6 </td><td>Blacksmith 2, Science 3</td><td>Science</td><td>Rare</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    name: 'Spear',
    rarity: 1,
    source: 'Homebrew',
    type: "Melee Weapons", 
    skill: 'Melee Weapons',
    damage: 4,
    effects: [],
    damageType: 'Physical',
    qualities: ['Two-Handed', 'Thrown (M)'],
    weight: 2,
    cost: 40,
    description: '<p>It\'s a spear. Stab people with it. Or you can throw it, I guess. Pointy end out.</p>',
  },
  {
    name: 'Bear Arm',
    rarity: 4,
    source: 'Homebrew',
    type: "Melee Weapons", 
    skill: 'Unarmed',
    damage: 4,
    effects: ['Vicious'],
    damageType: 'Physical',
    qualities: [],
    weight: 10,
    cost: 75,
    description: '<p>A gauntlet made from the skull of a yao guai.</p>',
    description: `
      <p>A gauntlet made from the skull of a yao guai.</p>
      <table>
        <thead>
          <tr><th>Mod</th><th>Name Prefix</th><th>Effects</th><th>Weight</th><th>Cost</th><th>Perks</th></tr>
        </thead>
        <tbody>
          <tr><td> Heavy </td><td> Heavy </td><td> +2 damage, adds Stun and Breaking </td><td> +7 </td><td> +60 </td><td>Blacksmith 3</td></tr>
          <tr><td> Puncturing </td><td> Puncturing </td><td> +1 damage, adds Piercing 2. </td><td> +2 </td><td> +35 </td><td>Blacksmith 3</td></tr>
        </tbody>
      </table>
      <p>The recipes for these mods are below, and they can be crafted at a Weapons Workbench.</p>
      <table>
        <thead>
          <tr><th>Mod</th><th>Complexity</th><th>Perks</th><th>Skill</th><th>Rarity</th></tr>
        </thead>
        <tbody >
          <tr><td>Heavy</td><td>4</td><td>Blacksmith 3</td><td>Repair</td><td>Uncommon</td></tr>
          <tr><td>Puncturing</td><td>4</td><td>Blacksmith 3</td><td>Repair</td><td>Uncommon</td></tr>
        </tbody>
      </table>
    `,
  },
];
export const throwables = [
  { name: 'Throwing Knives', rarity: 1, source: 'Core, 119' },
  { name: 'Tomahawk', rarity: 2, source: 'Core, 119' },
  { name: 'Javelin', rarity: 1, source: 'Core, 119' },
  { name: 'Baseball Grenade', rarity: 1, source: 'Core, 120' },
  { name: 'Frag Grenade', rarity: 2, source: 'Core, 120' },
  { name: 'Molotov Cocktail', rarity: 1, source: 'Core, 120' },
  { name: 'Nuka Grenade', rarity: 4, source: 'Core, 120' },
  { name: 'Plasma Grenade', rarity: 3, source: 'Core, 120' },
  { name: 'Pulse Grenade', rarity: 3, source: 'Core, 120' },
  { name: 'Bottlecap Mine', rarity: 2, source: 'Core, 120' },
  { name: 'Frag Mine', rarity: 2, source: 'Core, 120' },
  { name: 'Nuka Mine', rarity: 4, source: 'Core, 120' },
  { name: 'Plasma Mine', rarity: 3, source: 'Core, 120' },
  { name: 'Pulse Mine', rarity: 3, source: 'Core, 120' },
  { name: 'Cryogenic Grenade', rarity: 3, source: 'Wanderers, 79' },
  { name: 'Cryo Mine', rarity: 3, source: 'Wanderers, 79' },
  { name: 'Detonator', rarity: 3, source: 'Wanderers, 79' },
  { name: 'Dynamite', rarity: 2, source: 'Wanderers, 79' },
  { name: 'Dynamite Bundle', rarity: 3, source: 'Wanderers, 79' },
  { name: 'Flash Bang', rarity: 2, source: 'Wanderers, 79' },
  { name: 'Frag Grenade MIRV', rarity: 4, source: 'Wanderers, 79' },
  { name: 'Plastic Explosive', rarity: 4, source: 'Wanderers, 79' },
  { name: 'Powder Charge', rarity: 1, source: 'Wanderers, 79' },
  { name: 'Smoke Grenade', rarity: 2, source: 'Wanderers, 79' },
];
export const clothing = [
  // clothing
  { name: 'Brotherhood of Steel Uniform', rarity: 2, source: 'Core, 124' },
  { name: 'Casual Clothing', rarity: 1, source: 'Core, 124' },
  { name: 'Harness', rarity: 0, source: 'Core, 124' },
  { name: 'Military Fatigues', rarity: 1, source: 'Core, 124' },
  { name: 'Road Leathers', rarity: 1, source: 'Core, 124' },
  { name: 'Tough Clothing', rarity: 1, source: 'Core, 124' },
  { name: 'Vault Jumpsuit', rarity: 2, source: 'Core, 124' },
  { name: 'Marine Wetsuit', rarity: 3, source: 'Wanderers, 85' },
  { name: 'Underarmor Suit', rarity: 2, source: 'Wanderers, 85' },
  // outfits
  { name: 'Brotherhood of Steel Fatigues', rarity: 3, source: 'Core, 124' },
  { name: 'Brotherhood Scribe\'s Armor', rarity: 2, source: 'Core, 124' },
  { name: 'Cage Armor', rarity: 3, source: 'Core, 124' },
  { name: 'Drifter Outfit', rarity: 1, source: 'Core, 124' },
  { name: 'Engineer\'s Armor', rarity: 1, source: 'Core, 124' },
  { name: 'Formal Clothing', rarity: 2, source: 'Core, 124' },
  { name: 'Hazmat Suit', rarity: 3, source: 'Core, 124' },
  { name: 'Heavy Coat', rarity: 1, source: 'Core, 124' },
  { name: 'Hides', rarity: 0, source: 'Core, 124' },
  { name: 'Lab Coat', rarity: 1, source: 'Core, 124' },
  { name: 'Spike Armor', rarity: 2, source: 'Core, 124' },
  { name: 'Utility Coveralls', rarity: 1, source: 'Core, 124' },
  { name: 'Brotherhood Armored Battlecoat', rarity: 4, source: 'Wanderers, 85' },
  { name: 'Brotherhood Bomber Jacket', rarity: 3, source: 'Wanderers, 85' },
  { name: 'Cleanroom Suit', rarity: 2, source: 'Wanderers, 85' },
  { name: 'Hunter\'s Pelt Coat', rarity: 2, source: 'Wanderers, 85' },
  { name: 'Spacesuit Costume', rarity: 4, source: 'Wanderers, 85' },
  // hats
  { name: 'Army Helmet', rarity: 1, source: 'Core, 124' },
  { name: 'Brotherhood of Steel Hood', rarity: 2, source: 'Core, 124' },
  { name: 'Brotherhood Scribe\'s Hat', rarity: 2, source: 'Core, 124' },
  { name: 'Casual Hat', rarity: 1, source: 'Core, 124' },
  { name: 'Formal Hat', rarity: 2, source: 'Core, 125' },
  { name: 'Gas Mask', rarity: 2, source: 'Core, 125' },
  { name: 'Hard Hat', rarity: 1, source: 'Core, 125' },
  { name: 'Hood/Cowl', rarity: 1, source: 'Core, 125' },
  { name: 'Sack Hood', rarity: 0, source: 'Core, 125' },
  { name: 'Welder\'s Visor', rarity: 2, source: 'Core, 125' },
  { name: 'Beer Hat', rarity: 2, source: 'Wanderers, 85' },
  { name: 'Marine Tactical Helmet', rarity: 3, source: 'Wanderers, 85' },
  { name: 'Spacesuit Helmet', rarity: 5, source: 'Wanderers, 85' },
  { name: 'Hunter\'s Hood', rarity: 2, source: 'Wanderers, 85' },
];
const armorPieces = [
  // armor pieces
  { name: 'Raider Armor Piece (Standard)', rarity: 0, source: 'Core, 130' },
  { name: 'Raider Armor Piece (Sturdy)', rarity: 1, source: 'Core, 130' },
  { name: 'Raider Armor Piece (Heavy)', rarity: 2, source: 'Core, 130' },
  { name: 'Leather Armor Piece (Standard)', rarity: 1, source: 'Core, 130' },
  { name: 'Leather Armor Piece (Sturdy)', rarity: 2, source: 'Core, 130' },
  { name: 'Leather Armor Piece (Heavy)', rarity: 3, source: 'Core, 130' },
  { name: 'Metal Armor Piece (Standard)', rarity: 1, source: 'Core, 131' },
  { name: 'Metal Armor Piece (Sturdy)', rarity: 2, source: 'Core, 131' },
  { name: 'Metal Armor Piece (Heavy)', rarity: 3, source: 'Core, 131' },
  { name: 'Combat Armor Piece (Standard)', rarity: 2, source: 'Core, 131' },
  { name: 'Combat Armor Piece (Sturdy)', rarity: 3, source: 'Core, 131' },
  { name: 'Combat Armor Piece (Heavy)', rarity: 4, source: 'Core, 131' },
  { name: 'Synth Armor Piece (Standard)', rarity: 3, source: 'Core, 132' },
  { name: 'Synth Armor Piece (Sturdy)', rarity: 4, source: 'Core, 132' },
  { name: 'Synth Armor Piece (Heavy)', rarity: 5, source: 'Core, 132' },
  { name: 'Legionary Armor Piece (Recruit)', rarity: 3, source: 'Wanderers, 89' },
  { name: 'Legionary Armor Piece', rarity: 4, source: 'Wanderers, 89' },
  { name: 'Legionary Armor Piece (Centurion)', rarity: 5, source: 'Wanderers, 89' },
  { name: 'Legatus Helmet', rarity: 5, source: 'Wanderers, 89' },
  { name: 'Marine Armor Piece', rarity: 4, source: 'Wanderers, 90' },
  { name: 'Scout Armor Piece', rarity: 4, source: 'Wanderers, 91' },
  { name: 'Robot Armor Piece (Standard)', rarity: 2, source: 'Wanderers, 92' },
  { name: 'Robot Armor Piece (Sturdy)', rarity: 3, source: 'Wanderers, 92' },
  { name: 'Robot Armor Piece (Heavy)', rarity: 4, source: 'Wanderers, 92' },
  { name: 'Wood Armor Piece', rarity: 0, source: 'Wanderers, 93' },
];
export const armor = [
  // dog
  { name: 'Dog Helmet', rarity: 2, source: 'Core, 123' },
  { name: 'Dog Armor (Light)', rarity: 1, source: 'Core, 123' },
  { name: 'Dog Armor (Medium)', rarity: 2, source: 'Core, 123' },
  { name: 'Dog Armor (Heavy)', rarity: 3, source: 'Core, 123' },
  ...armorPieces,
  { name: 'Vault-Tec Security Helmet', rarity: 1, source: 'Core, 132' },
  { name: 'Vault-Tec Security Armor', rarity: 1, source: 'Core, 132' },
  // whole armor
  { name: 'Chinese Stealth Armor', rarity: 6, source: 'Wanderers, 88' },
  { name: 'Diving Suit', rarity: 3, source: 'Wanderers, 88' },
  { name: 'Recon Armor', rarity: 4, source: 'Wanderers, 91' },
];
const powerArmorPieces = [
  { name: 'Raider Power Armor Piece', rarity: 2, source: 'Core, 137' },
  { name: 'T-45 Power Armor Piece', rarity: 2, source: 'Core, 137' },
  { name: 'T-51 Power Armor Piece', rarity: 3, source: 'Core, 137' },
  { name: 'T-60 Power Armor Piece', rarity: 4, source: 'Core, 137' },
  { name: 'X-01 Power Armor Piece', rarity: 5, source: 'Core, 137' },
  { name: 'Excavator Power Armor Piece', rarity: 3, source: 'Wanderers, 94' },
  { name: 'Hellcat Power Armor Piece', rarity: 3, source: 'Wanderers, 95' },
  { name: 'T-65 Power Armor Piece', rarity: 6, source: 'Wanderers, 89' },
  // Homebrew PA
  {
    name: 'Union Helmet',
    rarity: 4,
    source: 'Homebrew',
    type: "Armor",
    setName: 'Union Power Armor',
    isSet: true,
    secondarySetPiece: false,
    pdr: 8,
    edr: 4,
    rdr: 5,
    hp: 9,
    loc: 'Head',
    weight: 8,
    cost: 65,
    description: `
      <p>A post-war model of power armor created by the Pittsburg Union.</p>
    `,
  },
  {
    name: 'Union Chest Piece',
    rarity: 4,
    source: 'Homebrew',
    type: "Armor",
    setName: 'Union Power Armor',
    isSet: true,
    secondarySetPiece: true,
    pdr: 8,
    edr: 7,
    rdr: 6,
    hp: 11,
    loc: 'Torso',
    weight: 12,
    cost: 146,
    description: ``,
  },
  {
    name: 'Union Arm',
    rarity: 4,
    source: 'Homebrew',
    type: "Armor",
    setName: 'Union Power Armor',
    isSet: true,
    secondarySetPiece: true,
    pdr: 5,
    edr: 5,
    rdr: 5,
    hp: 8,
    loc: 'Arm',
    weight: 8,
    cost: 105,
    description: ``,
  },
  {
    name: 'Union Leg',
    rarity: 4,
    source: 'Homebrew',
    type: "Armor",
    setName: 'Union Power Armor',
    isSet: true,
    secondarySetPiece: true,
    pdr: 5,
    edr: 5,
    rdr: 5,
    hp: 8,
    loc: 'Leg',
    weight: 10,
    cost: 105,
    description: ``,
  },
  {
    name: 'Ultracite Helmet',
    rarity: 5,
    source: 'Homebrew',
    type: "Armor",
    setName: 'Ultracite Power Armor',
    isSet: true,
    secondarySetPiece: false,
    pdr: 7,
    edr: 5,
    rdr: 8,
    hp: 10,
    loc: 'Head',
    weight: 12,
    cost: 49,
    description: `
      <p>A modification on T-51 Power Armor developed by the Brotherhood of Steel to combat the Scorched.</p>
    `,
  },
  {
    name: 'Ultracite Chest Piece',
    rarity: 5,
    source: 'Homebrew',
    type: "Armor",
    setName: 'Ultracite Power Armor',
    isSet: true,
    secondarySetPiece: true,
    pdr: 8,
    edr: 10,
    rdr: 10,
    hp: 15,
    loc: 'Torso',
    weight: 20,
    cost: 259,
    description: ``,
  },
  {
    name: 'Ultracite Arm',
    rarity: 5,
    source: 'Homebrew',
    type: "Armor",
    setName: 'Ultracite Power Armor',
    isSet: true,
    secondarySetPiece: true,
    pdr: 4,
    edr: 8,
    rdr: 8,
    hp: 10,
    loc: 'Arm',
    weight: 13,
    cost: 81,
    description: ``,
  },
  {
    name: 'Ultracite Leg',
    rarity: 5,
    source: 'Homebrew',
    type: "Armor",
    setName: 'Ultracite Power Armor',
    isSet: true,
    secondarySetPiece: true,
    pdr: 4,
    edr: 8,
    rdr: 8,
    hp: 10,
    loc: 'Leg',
    weight: 15,
    cost: 81,
    description: ``,
  },
  {
    name: 'Strangler Heart Helmet',
    rarity: 6,
    source: 'Homebrew',
    type: "Armor",
    setName: 'Strangler Heart Power Armor',
    isSet: true,
    secondarySetPiece: false,
    pdr: 7,
    edr: 5,
    rdr: 10,
    hp: 10,
    loc: 'Head',
    weight: 12,
    cost: 60,
    description: `
      <p>Ultracite Power Armor that has been completely overrun by strangler vines and other flora.</p>
    `,
  },
  {
    name: 'Stranger Heart Chest Piece',
    rarity: 6,
    source: 'Homebrew',
    type: "Armor",
    setName: 'Strangler Heart Power Armor',
    isSet: true,
    secondarySetPiece: true,
    pdr: 8,
    edr: 10,
    rdr: 11,
    hp: 15,
    loc: 'Torso',
    weight: 20,
    cost: 320,
    description: ``,
  },
  {
    name: 'Strangler Heart Arm',
    rarity: 6,
    source: 'Homebrew',
    type: "Armor",
    setName: 'Strangler Heart Power Armor',
    isSet: true,
    secondarySetPiece: true,
    pdr: 4,
    edr: 8,
    rdr: 10,
    hp: 11,
    loc: 'Arm',
    weight: 13,
    cost: 100,
    description: ``,
  },
  {
    name: 'Strangler Heart Leg',
    rarity: 6,
    source: 'Homebrew',
    type: "Armor",
    setName: 'Strangler Heart Power Armor',
    isSet: true,
    secondarySetPiece: true,
    pdr: 4,
    edr: 8,
    rdr: 10,
    hp: 11,
    loc: 'Leg',
    weight: 15,
    cost: 100,
    description: ``,
  },
];
export const powerArmor = [
  { name: 'Power Armor Frame', rarity: 4, source: 'Core, 137' },
  ...powerArmorPieces,
];
export const allArmor = [
  ...armor,
  ...powerArmor,
];
export const rawMeat = [
  { name: 'Bloatfly Meat', rarity: 0, source: 'Core, 149' },
  { name: 'Bloodbug Meat', rarity: 1, source: 'Core, 149' },
  { name: 'Brahmin Meat', rarity: 1, source: 'Core, 149' },
  { name: 'Deathclaw Egg', rarity: 3, source: 'Core, 149' },
  { name: 'Deathclaw Meat', rarity: 3, source: 'Core, 149' },
  { name: 'Iguana Bits', rarity: 1, source: 'Core, 150' },
  { name: 'Mirelurk Egg', rarity: 2, source: 'Core, 150' },
  { name: 'Mirlurk Meat', rarity: 1, source: 'Core, 150' },
  { name: 'Mole Rat Meat', rarity: 0, source: 'Core, 150' },
  { name: 'Mongrel Dog Meat', rarity: 0, source: 'Core, 150' },
  { name: 'Mutant Hound Meat', rarity: 2, source: 'Core, 150' },
  { name: 'Queen Mirelurk Meat', rarity: 4, source: 'Core, 151' },
  { name: 'Radroach Meat', rarity: 0, source: 'Core, 151' },
  { name: 'Radscorpion Egg', rarity: 3, source: 'Core, 151' },
  { name: 'Radscorpion Meat', rarity: 2, source: 'Core, 151' },
  { name: 'Radstag Meat', rarity: 1, source: 'Core, 151' },
  { name: 'Softshell Mirelurk Meat', rarity: 2, source: 'Core, 151' },
  { name: 'Squirrel Bits', rarity: 1, source: 'Core, 151' },
  { name: 'Stingwing Meat', rarity: 1, source: 'Core, 151' },
  { name: 'Yao Guai Meat', rarity: 3, source: 'Core, 151' },
  { name: 'Angler Meat', rarity: 2, source: 'Wanderers, 114' },
  { name: 'Cave Cricket Meat', rarity: 1, source: 'Wanderers, 114' },
  { name: 'Cazador Egg', rarity: 2, source: 'Wanderers, 114' },
  { name: 'Gecko Meat', rarity: 1, source: 'Wanderers, 114' },
  { name: 'Giant Ant Meat', rarity: 0, source: 'Wanderers, 114' },
  { name: 'Giant Mantis Foreleg', rarity: 2, source: 'Wanderers, 114' },
  { name: 'Gulper Innards', rarity: 2, source: 'Wanderers, 114' },
  { name: 'Hermit Crab Meat', rarity: 3, source: 'Wanderers, 114' },
  { name: 'Mega Sloth Meat', rarity: 3, source: 'Wanderers, 114' },
  { name: 'Mega Sloth Mushroom', rarity: 2, source: 'Wanderers, 114' },
  { name: 'Radrat Meat', rarity: 0, source: 'Wanderers, 115' },
  { name: 'Scorchbeast Meat', rarity: 4, source: 'Wanderers, 115' },
  { name: 'Sheepsquatch Meat', rarity: 4, source: 'Wanderers, 115' },
  { name: 'Snallygaster Innards', rarity: 3, source: 'Wanderers, 115' },
];
export const cookedMeals = [
  { name: 'Baked Bloatfly', rarity: 1, source: 'Core, 149' },
  { name: 'Bloodbug Steak', rarity: 2, source: 'Core, 149' },
  { name: 'Cooked Softshell Meat', rarity: 3, source: 'Core, 149' },
  { name: 'Crispy Squirrel Bits', rarity: 2, source: 'Core, 149' },
  { name: 'Deathclaw Omelette', rarity: 4, source: 'Core, 150' },
  { name: 'Deathclaw Steak', rarity: 4, source: 'Core, 150' },
  { name: 'Grilled Radroach', rarity: 1, source: 'Core, 150' },
  { name: 'Grilled Radstag', rarity: 2, source: 'Core, 150' },
  { name: 'Iguana on a Stick', rarity: 2, source: 'Core, 150' },
  { name: 'Iguana Soup', rarity: 3, source: 'Core, 150' },
  { name: 'Mirelurk Cake', rarity: 3, source: 'Core, 150' },
  { name: 'Mirelurk Egg Omelette', rarity: 3, source: 'Core, 150' },
  { name: 'Mirelurk Queen Steak', rarity: 5, source: 'Core, 150' },
  { name: 'Mole Rat Chunks', rarity: 1, source: 'Core, 150' },
  { name: 'Mutant Hound Chops', rarity: 3, source: 'Core, 150' },
  { name: 'Mutt Chops', rarity: 1, source: 'Core, 150' },
  { name: 'Noodle Cup', rarity: 2, source: 'Core, 150' },
  { name: 'Potted Meat', rarity: 0, source: 'Core, 151' },
  { name: 'Radscorpion Egg Omelette', rarity: 4, source: 'Core, 151' },
  { name: 'Radscorpion Steak', rarity: 3, source: 'Core, 151' },
  { name: 'Radstag Stew', rarity: 3, source: 'Core, 151' },
  { name: 'Ribeye Steak', rarity: 2, source: 'Core, 151' },
  { name: 'Roasted Mirelurk Meat', rarity: 2, source: 'Core, 151' },
  { name: 'Squirrel on a Stick', rarity: 2, source: 'Core, 151' },
  { name: 'Squirrel Stew', rarity: 2, source: 'Core, 151' },
  { name: 'Stingwing Filet', rarity: 2, source: 'Core, 151' },
  { name: 'Vegetable Soup', rarity: 2, source: 'Core, 151' },
  { name: 'Yao Guai Ribs', rarity: 4, source: 'Core, 151' },
  { name: 'Yao Guai Roast', rarity: 4, source: 'Core, 151' },
  { name: 'Cazador Omelet', rarity: 3, source: 'Wanderers, 114' },
  { name: 'Crispy Cave Cricket', rarity: 2, source: 'Wanderers, 114' },
  { name: 'Gecko Kebab', rarity: 1, source: 'Wanderers, 114' },
  { name: 'Grilled Giant Mantis', rarity: 2, source: 'Wanderers, 114' },
  { name: 'Gulper Slurry', rarity: 2, source: 'Wanderers, 114' },
  { name: 'Hermit Crab Steak', rarity: 4, source: 'Wanderers, 114' },
  { name: 'Honey Cake', rarity: 4, source: 'Wanderers, 114' },
  { name: 'Lamb Chops', rarity: 4, source: 'Wanderers, 114' },
  { name: 'Mega Sloth Steak', rarity: 4, source: 'Wanderers, 114' },
  { name: 'Mega Sloth Mushroom Soup', rarity: 3, source: 'Wanderers, 115' },
  { name: 'Mongrel Ribs', rarity: 2, source: 'Wanderers, 115' },
  { name: 'Mutton Meat Pie', rarity: 4, source: 'Wanderers, 115' },
  { name: 'Poached Angler', rarity: 4, source: 'Wanderers, 115' },
  { name: 'Roasted Radrat', rarity: 1, source: 'Wanderers, 115' },
  { name: 'Scorchbeast Steak', rarity: 4, source: 'Wanderers, 115' },
  { name: 'Snallygaster Stew', rarity: 4, source: 'Wanderers, 115' },
];
export const food = [
  // Plant
  { name: 'Brain Fungus', rarity: 1, source: 'Core, 149' },
  { name: 'Carrot', rarity: 1, source: 'Core, 149' },
  { name: 'Carrot (non-irradiated)', rarity: 3, source: 'Core, 149' },
  { name: 'Corn', rarity: 1, source: 'Core, 149' },
  { name: 'Corn (non-irradiated)', rarity: 3, source: 'Core, 149' },
  { name: 'Gourd', rarity: 1, source: 'Core, 150' },
  { name: 'Melon', rarity: 1, source: 'Core, 150' },
  { name: 'Melon (non-irradiated)', rarity: 3, source: 'Core, 150' },
  { name: 'Mutfruit', rarity: 0, source: 'Core, 150' },
  { name: 'Mutfruit (non-irradiated)', rarity: 2, source: 'Core, 150' },
  { name: 'Razorgrain', rarity: 1, source: 'Core, 151' },
  { name: 'Silt Bean', rarity: 1, source: 'Core, 151' },
  { name: 'Tarberry', rarity: 3, source: 'Core, 151' },
  { name: 'Tato', rarity: 1, source: 'Core, 151' },
  { name: 'Honey', rarity: 3, source: 'Wanderers, 114' },
  { name: 'Honeycomb', rarity: 3, source: 'Wanderers, 114' },
  { name: 'Lure Weed', rarity: 1, source: 'Wanderers, 114' },
  // Pre-war
  { name: 'BlamCo Brand Mac and Cheese', rarity: 1, source: 'Core, 149' },
  { name: 'BlamCo Brand Mac and Cheese (preserved)', rarity: 3, source: 'Core, 149' },
  { name: 'Canned Dog Food', rarity: 0, source: 'Core, 149' },
  { name: 'Cram', rarity: 1, source: 'Core, 149' },
  { name: 'Dandy Boy Apples', rarity: 0, source: 'Core, 149' },
  { name: 'Fancy Lad Snack Cakes', rarity: 0, source: 'Core, 150' },
  { name: 'Fancy Lad Snack Cakes (preserved)', rarity: 2, source: 'Core, 150' },
  { name: 'Food Paste', rarity: 2, source: 'Core, 150' },
  { name: 'Gum Drops', rarity: 0, source: 'Core, 150' },
  { name: 'InstaMash', rarity: 0, source: 'Core, 150' },
  { name: 'InstaMash (preserved)', rarity: 2, source: 'Core, 150' },
  { name: 'Institute Food Packet', rarity: 2, source: 'Core, 150' },
  { name: 'Perfectly Preserved Pie', rarity: 3, source: 'Core, 150' },
  { name: 'Pork `n` Beans', rarity: 0, source: 'Core, 150' },
  { name: 'Potato Crisps', rarity: 0, source: 'Core, 150' },
  { name: 'Salisbury Steak', rarity: 0, source: 'Core, 151' },
  { name: 'Salisbury Steak (preserved)', rarity: 2, source: 'Core, 151' },
  { name: 'Sugar Bombs', rarity: 0, source: 'Core, 151' },
  { name: 'Sugar Bombs (preserved)', rarity: 2, source: 'Core, 151' },
  { name: 'Sweet Roll', rarity: 1, source: 'Core, 151' },
  { name: 'Yum-Yum Deviled Eggs', rarity: 0, source: 'Core, 151' },
];
export const beverages = [
  { name: 'Beer', rarity: 1, source: 'Core, 160' },
  { name: 'Blood Pack', rarity: 2, source: 'Core, 160' },
  { name: 'Bourbon', rarity: 2, source: 'Core, 160' },
  { name: 'Brahmin Milk', rarity: 2, source: 'Core, 160' },
  { name: 'Dirty Wastelander', rarity: 3, source: 'Core, 160' },
  { name: 'Dirty Water', rarity: 0, source: 'Core, 160' },
  { name: 'Glowing Blood Pack', rarity: 3, source: 'Core, 160' },
  { name: 'Irradiated Blood', rarity: 2, source: 'Core, 160' },
  { name: 'Melon Juice', rarity: 2, source: 'Core, 160' },
  { name: 'Moonshine', rarity: 2, source: 'Core, 160' },
  { name: 'Mutfruit Juice', rarity: 2, source: 'Core, 160' },
  { name: 'Nuka-Cherry', rarity: 3, source: 'Core, 160' },
  { name: 'Nuka-Cola', rarity: 2, source: 'Core, 160' },
  { name: 'Nuka-Cola Quantum', rarity: 5, source: 'Core, 160' },
  { name: 'Purified Water', rarity: 1, source: 'Core, 160' },
  { name: 'Refreshing Beverage', rarity: 5, source: 'Core, 160' },
  { name: 'Rum', rarity: 2, source: 'Core, 160' },
  { name: 'Tarberry Juice', rarity: 4, source: 'Core, 160' },
  { name: 'Tato Juice', rarity: 3, source: 'Core, 161' },
  { name: 'Vodka', rarity: 3, source: 'Core, 161' },
  { name: 'Whiskey', rarity: 3, source: 'Core, 161' },
  { name: 'Wine', rarity: 3, source: 'Core, 161' },
  // Homebrew
  {
    name: "Nuka-Cola Cranberry",
    rarity: 5,
    source: "Homebrew",
    type: "Beverages",
    hpHealed: 2,
    otherEffects: "Increase one skill by 1 for the remainder of the scene.",
    irradiated: 1,
    weight: 1,
    cost: 30,
    description: "<p>A flavored variant of Nuka-Cola using cranberries from Appalachia. The bright flavor makes you feel a bit sharper. Upon drinking Nuka-Cola Cranberry, choose a skill: that skill is considered 1 point higher for the rest of the scene.</p>"
  },
  {
    name: "Nuka-Cola Dark", 
    rarity: 5, 
    source: "Homebrew", 
    type: "Beverages",
    hpHealed: 0,
    otherEffects: "Alcoholic. Reroll 1d20 on all STR and END tests.",
    irradiated: '-',
    weight: 1,
    cost: 35,
    description: "<p>A variant made for adult demographics, Nuka-Cola Dark is a pre-mixed Nuka-Cola and Rum. APV is 35%.</p>"
  },
  { 
    name: "Nuka-Grape", 
    rarity: 5, 
    source: "Homebrew", 
    type: "Beverages",
    hpHealed: 7,
    otherEffects: "Heal 10 Rad damage. Gain 3 AP.",
    irradiated: '-',
    weight: 1,
    cost: 50,
    description: "<p>Originally sold overseas as Grape-Pearl Soda, it was rebranded as Nuka-Grape after the Nuka-Cola Corporation acquired the recipe. Unrealized before the war, the unique additives used to produce the grape flavor counteract the effects of radiation sickness.</p>"
  },
  { 
    name: "Nuka-Cola Orange", 
    rarity: 5, 
    source: "Homebrew", 
    type: "Beverages",
    hpHealed: 7,
    otherEffects: "+1 Rad DR. Gain 3 AP.",
    irradiated: '-',
    weight: 1,
    cost: 50,
    description: "<p>Another fruit-flavored variant, the artificial flavors used included trace quantities of arsenic and lead. The imbiber gets +1 Rad DR for the rest of the scene after drinking it.</p>"
  },
  // { name: "1 Nuka-Cola Quartz", rarity: 5, source: "" },
  // { name: "1 Nuka-Cola Victory", rarity: 5, source: "" },
  {
    name: "Nuka-Cola Wild", 
    rarity: 2, 
    source: "Homebrew", 
    type: "Beverages",
    hpHealed: 2,
    otherEffects: "Gain 2 AP.",
    irradiated: 1,
    weight: 1,
    cost: 20,
    description: "<p>The Nuka-Cola Corporation developed its Wild variant to compete with Sunset Sarsaparilla. While it never surpassed its competitor in the West, it was much more successful on the East Coast.</p>"
  },
  { 
    name: "Nuka-Cola Twist", 
    rarity: 4, 
    source: "Homebrew", 
    type: "Beverages",
    hpHealed: 2,
    otherEffects: "Gain 3 AP. See description.",
    irradiated: 1,
    weight: 1,
    cost: 25,
    description: "<p>A \"mystery flavor\" variant released to promote Nuka-World, Nuka-Cola Twist is actually 6 different flavors with the same label. There's no way to distinguish which flavor it is until opened and tasted. Upon drinking, for the remainder of the scene, reroll 1d20 on tests with a particular stat. Roll 1d6 to determine which stat is buffed. Drinking more Nuka-Cola Twist replaces the current bonus.</p>"
  },
  { 
    name: `Nuka-Cola ${(() => {
      const names = ["Vaccinated", "Scorched", "My Blood's In It"];
      names.sort(() => {
        const a = Math.random();
        const b = Math.random();
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
      });
      return names[0];
    })()}`, 
    rarity: 6, 
    source: "Homebrew", 
    type: "Beverages",
    hpHealed: 2,
    otherEffects: "+2 DR against all attacks from Scorched enemies.",
    irradiated: '-',
    weight: 1,
    cost: 20,
    description: "<p>A special formula designed in Appalachia after the War. The formula was synthesized from a sample of a Vault Dweller's blood to distribute a vaccine against the Scorched Plague. Drinking one makes someone permanantly immune to Scorched Plague, in addition to temporary resistance to attacks from the infected.</p>"
  },
];
export const chems = [
  { name: 'Addictol', rarity: 3, source: 'Core, 164' },
  { name: 'Antibiotics', rarity: 3, source: 'Core, 164' },
  { name: 'Berry Mentats', rarity: 3, source: 'Core, 164' },
  { name: 'Buffjet', rarity: 4, source: 'Core, 164' },
  { name: 'Buffout', rarity: 2, source: 'Core, 164' },
  { name: 'Bufftats', rarity: 4, source: 'Core, 164' },
  { name: 'Calmex', rarity: 4, source: 'Core, 164' },
  { name: 'Daddy-O', rarity: 2, source: 'Core, 164' },
  { name: 'Day Tripper', rarity: 3, source: 'Core, 165' },
  { name: 'Fury', rarity: 4, source: 'Core, 165' },
  { name: 'Grape Mentats', rarity: 3, source: 'Core, 165' },
  { name: 'Healing Salve', rarity: 1, source: 'Core, 165' },
  { name: 'Jet', rarity: 2, source: 'Core, 165' },
  { name: 'Jet Fuel', rarity: 3, source: 'Core, 165' },
  { name: 'Med-X', rarity: 2, source: 'Core, 165' },
  { name: 'Mentats', rarity: 2, source: 'Core, 165' },
  { name: 'Orange Mentats', rarity: 3, source: 'Core, 165' },
  { name: 'Overdrive', rarity: 3, source: 'Core, 165' },
  { name: 'Psycho', rarity: 2, source: 'Core, 165' },
  { name: 'Psycho Jet', rarity: 4, source: 'Core, 165' },
  { name: 'Psychobuff', rarity: 4, source: 'Core, 165' },
  { name: 'Psychotats', rarity: 4, source: 'Core, 165' },
  { name: 'Rad-X', rarity: 2, source: 'Core, 165' },
  { name: 'Rad-X (Diluted)', rarity: 1, source: 'Core, 165' },
  { name: 'RadAway', rarity: 2, source: 'Core, 165' },
  { name: 'RadAway (Diluted)', rarity: 1, source: 'Core, 165' },
  { name: 'Skeeto Spit', rarity: 2, source: 'Core, 165' },
  { name: 'Stimpak', rarity: 2, source: 'Core, 165' },
  { name: 'Stimpak (Diluted)', rarity: 1, source: 'Core, 165' },
  { name: 'Super Stimpak', rarity: 4, source: 'Core, 165' },
  // { name: 'Stimpak Diffuser', rarity: 5, source: 'Core, 165' },
  { name: 'Ultra Jet', rarity: 2, source: 'Core, 165' },
  { name: 'X-Cell', rarity: 4, source: 'Core, 165' },
];
export const forage = [
  { name: 'Brain Fungus', rarity: 1, source: 'Core, 149' },
  { name: 'Glowing Fungus', rarity: 1, source: 'Core, 149' },
  { name: 'Carrot', rarity: 1, source: 'Core, 149' },
  { name: 'Corn', rarity: 1, source: 'Core, 149' },
  { name: 'Gourd', rarity: 1, source: 'Core, 150' },
  { name: 'Melon', rarity: 1, source: 'Core, 150' },
  { name: 'Mutfruit', rarity: 0, source: 'Core, 150' },
  { name: 'Razorgrain', rarity: 1, source: 'Core, 151' },
  { name: 'Silt Bean', rarity: 1, source: 'Core, 151' },
  { name: 'Tato', rarity: 1, source: 'Core, 151' },
  { name: 'Hubflower', rarity: 1, source: '' },
  { name: 'Bloodleaf', rarity: 1, source: '' },
  { name: 'Honeycomb', rarity: 3, source: 'Wanderers, 114' },
  { name: 'Lure Weed', rarity: 1, source: 'Wanderers, 114' },
];
export const magazines = [
  { name: '¡La Fantoma!', rarity: 1, source: 'Core, 172' },
  { name: 'Astoundingly Awesome Tales', rarity: 1, source: 'Core, 172' },
  { name: 'Backwoodsman', rarity: 1, source: 'Core, 173' },
  { name: 'Boxing Times', rarity: 1, source: 'Core, 173' },
  { name: 'Duck and Cover!', rarity: 1, source: 'Core, 174' },
  { name: 'Fixing\' Things', rarity: 1, source: 'Core, 174' },
  { name: 'Future Weapons Today', rarity: 1, source: 'Core, 174' },
  { name: 'Grognak the Barbarian', rarity: 1, source: 'Core, 174' },
  { name: 'Guns and Bullets', rarity: 1, source: 'Core, 175' },
  { name: 'Live & Love', rarity: 1, source: 'Core, 176' },
  { name: 'Massachusetts Surgical Journal', rarity: 1, source: 'Core, 176' },
  { name: 'Meeting People', rarity: 1, source: 'Core, 176' },
  { name: 'Programmer\'s Digest', rarity: 1, source: 'Core, 176' },
  { name: 'Tales of a Junktown Jerky Vendor', rarity: 1, source: 'Core, 177' },
  { name: 'Tesla Science Magazine', rarity: 1, source: 'Core, 177' },
  { name: 'True Police Stories', rarity: 1, source: 'Core, 178' },
  { name: 'Tumblers Today', rarity: 1, source: 'Core, 178' },
  { name: 'Unstoppables', rarity: 1, source: 'Core, 178' },
  { name: 'U.S. Covert Operations Manual', rarity: 1, source: 'Core, 179' },
  { name: 'Wasteland Survival Guide', rarity: 1, source: 'Core, 180' },
  { name: '101 Heroic Last Stands', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Atomic Command (Holotape)', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Automatron (Holotape)', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Big Book of Science', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Chinese Army: Special Ops Training Manual', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Dress to Survive', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Duck and Cover Annual', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Grognak and the Ruby Ruins (Holotape)', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Guns and Bullets Annual', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Hot Summer Fashions', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Journal of Internal Medicine', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Nikola Tesla and You', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Pipfall (Holotape)', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Pugilism Illustrated', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Red Menace (Holotape)', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Scout Handbook', rarity: 5, source: 'Wanderers, 108' },
  { name: 'The Collected Adventures of Grognak the Barbarian', rarity: 5, source: 'Wanderers, 108' },
  { name: 'The Pointy End: A Guide to Swords', rarity: 5, source: 'Wanderers, 108' },
  { name: 'U.S. Army: 30 Handy Flamethrower Recipes', rarity: 5, source: 'Wanderers, 108' },
  { name: 'Zeta Invaders (Holotape)', rarity: 5, source: 'Wanderers, 108' },
];
export const nukaCola = [
  { name: "Empty", rarity: 0, source: "" },
  { name: "2CD + 1 glass bottles", rarity: 1, source: "" },
  { name: "1 Nuka-Cola", rarity: 2, source: "Core, 160" },  // HP 120, AP 30  - HP 2, AP 1
  { name: "2 Nuka-Cola", rarity: 3, source: "Core, 160" }, 
  { name: "1 Nuka-Cola, 1 Nuka-Cherry", rarity: 4, source: "Core, 160" },
  { name: "2 Nuka-Cola, 1 Nuka-Cherry", rarity: 5, source: "Core, 160" },
  { name: "1 Nuka-Cola Quantum", rarity: 6, source: "Core, 160" },  // HP 600, AP 300 - HP 10, AP 5
  { name: "1 Nuka-Cherry", rarity: 3, source: "Core, 160" }, // HP 300, AP 75 - HP 3, AP 2
  { name: "1 Nuka-Cola, 1 Nuka-Cherry, 1 Nuka Cola-Quantum", rarity: 8, source: "Core, 160" },
  // Other Variants (not in any book)
  { name: "1 Nuka-Cola Cranberry", rarity: 5, source: "Homebrew", type: "Beverage" },
  { name: "1 Nuka-Cola Dark", rarity: 5, source: "Homebrew", type: "Beverage" },
  { name: "1 Nuka-Grape", rarity: 5, source: "Homebrew", type: "Beverage" },
  { name: "1 Nuka-Cola Orange", rarity: 5, source: "Homebrew", type: "Beverage" },
  // { name: "1 Nuka-Cola Quartz", rarity: 5, source: "" },
  // { name: "1 Nuka-Cola Victory", rarity: 5, source: "" },
  { name: "1 Nuka-Cola Wild", rarity: 2.5, source: "Homebrew", type: "Beverage" },
  { name: "1 Nuka-Cola Twist", rarity: 4, source: "Homebrew", type: "Beverage" },
  { name: `1 Nuka-Cola ${(() => {
    const names = ["Vaccinated", "Scorched", "My Blood's In It"];
    names.sort(() => {
      const a = Math.random();
      const b = Math.random();
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
    return names[0];
  })()}`, rarity: 6, source: "Homebrew", type: "Beverage" },
];
export const oddities = [
  // Consumables
  { name: 'Robot Repait Kit', rarity: 2, source: 'Core, 170' },
  { name: 'Stealth Boy', rarity: 3, source: 'Core, 170' },
  { name: 'Stimpak Diffuser', rarity: 5, source: 'Core, 170' },
  // Robot Modules
  { name: 'Behavioral Analysis Mod', rarity: 3, source: 'Core, 185' },
  { name: 'Diagnosis Mod', rarity: 3, source: 'Core, 185' },
  { name: 'Hacking Module', rarity: 2, source: 'Core, 185' },
  { name: 'Hazard Detection Mod', rarity: 2, source: 'Core, 185' },
  { name: 'Integral Boiler Mod', rarity: 1, source: 'Core, 185' },
  { name: 'Lockpick Module', rarity: 2, source: 'Core, 185' },
  { name: 'Radiation Coils', rarity: 3, source: 'Core, 185' },
  { name: 'Recon Sensors', rarity: 3, source: 'Core, 185' },
  { name: 'Regernation Field', rarity: 5, source: 'Core, 185' },
  { name: 'Resistance Field', rarity: 4, source: 'Core, 185' },
  { name: 'Sensor Array', rarity: 3, source: 'Core, 185' },
  { name: 'Stealth Field', rarity: 3, source: 'Core, 185' },
  { name: 'Tesla Coils', rarity: 5, source: 'Core, 185' },
  // Tools and Utility
  { name: 'Large Backpack', rarity: 2, source: 'Core, 181' },
  { name: 'Small Backpack', rarity: 1, source: 'Core, 181' },
  { name: 'Deluxe Toolkit', rarity: 3, source: 'Core, 181' },
  { name: 'Doctor\'s Bag', rarity: 3, source: 'Core, 181' },
  { name: 'Electronic Lockpicker', rarity: 4, source: 'Core, 181' },
  { name: 'First Aid Kit', rarity: 2, source: 'Core, 181' },
  { name: 'Flashlight', rarity: 3, source: 'Core, 181' },
  { name: 'Geiger Counter', rarity: 3, source: 'Core, 181' },
  { name: 'Holotags', rarity: 2, source: 'Core, 181' },
  { name: 'Holotape Player', rarity: 2, source: 'Core, 181' },
  { name: 'Lantern', rarity: 2, source: 'Core, 181' },
  { name: 'Lock Pick Set', rarity: 2, source: 'Core, 181' },
  { name: 'Multi-Tool', rarity: 2, source: 'Core, 181' },
  { name: 'Radio', rarity: 2, source: 'Core, 181' },
  { name: 'Signal Flare', rarity: 1, source: 'Core, 181' },
  { name: 'Torch', rarity: 1, source: 'Core, 181' },

  // Other Lootables
  { name: "Pre-War Money Worth 5d20 Caps", rarity: 5, source: '' },
  { name: "Pre-War Money Worth 4d20 Caps", rarity: 4, source: '' },
  { name: "Pre-War Money Worth 3d20 Caps", rarity: 3, source: '' },
  { name: "5d20 Caps", rarity: 4, source: '' },
  { name: "4d20 Caps", rarity: 3, source: '' },
  { name: "3d20 Caps", rarity: 2, source: '' },
  { name: "2d20 Caps", rarity: 1, source: '' },
  { name: "1d20 Caps", rarity: 0, source: '' },
  { name: '2CD + 1 Bobby Pins', rarity: 0, source: 'Core, 181' },
  { name: '4CD + 2 Bobby Pins', rarity: 1, source: 'Core, 181' },
  { name: '6CD + 3 Bobby Pins', rarity: 2, source: 'Core, 181' },
  { name: '8CD + 4 Bobby Pins', rarity: 3, source: 'Core, 181' },
  { name: '10CD + 5 Bobby Pins', rarity: 4, source: 'Core, 181' },
  { name: 'Key', rarity: 4, source: '' },
  { name: 'Container', rarity: 2, source: '' },
  { name: 'Magazine', rarity: 3, source: '' },
  { name: 'Locked Container', rarity: 4, source: '' },
];
export const syringerAmmo = [
  { name: 'Berserk', rarity: 50, source: 'Core, 93' },
  { name: 'Bleed-Out', rarity: 17, source: 'Core, 93' },
  { name: 'Bloatfly Larva', rarity: 10, source: 'Core, 93' },
  { name: 'Endanerol', rarity: 60, source: 'Core, 93' },
  { name: 'Lock Joint', rarity: 40, source: 'Core, 93' },
  { name: 'Mind Cloud', rarity: 73, source: 'Core, 93' },
  { name: 'Pax', rarity: 39, source: 'Core, 93' },
  { name: 'Radscorpion Venom', rarity: 65, source: 'Core, 93' },
  { name: 'Yellow Belly', rarity: 55, source: 'Core, 93' },
  { name: 'Cazadores Sting', rarity: 75, source: 'Wanderers, 59' },
];
export const specialArrows = [
  { name: 'Cryo', rarity: 3, source: 'Wanderers, 59' },
  { name: 'Explosive', rarity: 2, source: 'Wanderers, 59' },
  { name: 'Flaming', rarity: 1, source: 'Wanderers, 59' },
  { name: 'Serrated', rarity: 1, source: 'Wanderers, 59' },
  { name: 'Plasma', rarity: 4, source: 'Wanderers, 59' },
  { name: 'Poison', rarity: 1, source: 'Wanderers, 59' },
];
const smallGunReceivers = [
  { name: "Small Gun Receiver: Hardend", rarity: 20, source: "Core, 100" },
  { name: "Small Gun Receiver: Powerful", rarity: 25, source: "Core, 100" },
  { name: "Small Gun Receiver: Advanced", rarity: 35, source: "Core, 100" },
  { name: "Small Gun Receiver: Calibrated", rarity: 25, source: "Core, 100" },
  { name: "Small Gun Receiver: Automatic", rarity: 30, source: "Core, 100" },
  { name: "Small Gun Receiver: Hair Trigger", rarity: 20, source: "Core, 100" },
  { name: "Small Gun Receiver: .38", rarity: 20, source: "Core, 100" },
  { name: "Small Gun Receiver: .308", rarity: 40, source: "Core, 100" },
  { name: "Small Gun Receiver: .45", rarity: 19, source: "Core, 100" },
  { name: "Small Gun Receiver: .50", rarity: 30, source: "Core, 100" },
  { name: "Small Gun Receiver: Automatic Piston", rarity: 75, source: "Core, 100" },
  { name: "Small Gun Capacitor: Full Capacitors", rarity: 37, source: "Core, 100" },
  { name: "Small Gun Capacitor: Capacitor-Boosting Coil", rarity: 82, source: "Core, 100" },
  { name: 'Small Gun Receiver: Armor Piercing Receiver', rarity: 3, source: 'Wanderers, 81' },
  { name: 'Small Gun Receiver: Armor Piercing Automatic Receiver', rarity: 40, source: 'Wanderers, 81' },
  { name: 'Small Gun Receiver: Hardened Automatic Receiver', rarity: 58, source: 'Wanderers, 81' },
  { name: 'Small Gun Receiver: Rapid Automatic Receiver', rarity: 63, source: 'Wanderers, 81' },
  { name: 'Small Gun Receiver: Calibrated Powerful Receiver', rarity: 68, source: 'Wanderers, 81' },
  { name: 'Small Gun Receiver: Powerful Automatic Receiver', rarity: 88, source: 'Wanderers, 81' },
  { name: 'Small Gun Receiver: Hardened Piercing Auto Receiver', rarity: 78, source: 'Wanderers, 81' },
  { name: 'Small Gun Receiver: 9mm Receiver', rarity: 10, source: 'Wanderers, 81' },
  { name: 'Small Gun Receiver: .357 Receiver', rarity: 35, source: 'Wanderers, 81' },
];
const smallGunBarrels = [
  { name: "Small Gun Barrel: Snubnose", rarity: 0, source: "Core, 100" },
  { name: "Small Gun Barrel: Bull", rarity: 10, source: "Core, 100" },
  { name: "Small Gun Barrel: Long", rarity: 20, source: "Core, 100" },
  { name: "Small Gun Barrel: Ported", rarity: 35, source: "Core, 100" },
  { name: "Small Gun Barrel: Vented", rarity: 36, source: "Core, 100" },
  { name: "Small Gun Barrel: Sawed-Off", rarity: 3, source: "Core, 100" },
  { name: "Small Gun Barrel: Shielded", rarity: 37, source: "Core, 100" },
  { name: "Small Gun Barrel: Finned", rarity: 15, source: "Core, 100" },
  { name: 'M79 Grenade Launcher Barrel: Long Barrel', rarity: 40, source: 'Settlers, 90' },
];
const smallGunMagazines = [
  { name: "Small Gun Magazine: Large Magazine", rarity: 8, source: "Core, 100" },
  { name: "Small Gun Magazine: Quick-Eject Mag", rarity: 8, source: "Core, 100" },
  { name: "Small Gun Magazine: Large Quick-Eject Mag", rarity: 23, source: "Core, 100" },
];
const smallGunGripsAndStocks = [
  // Grip
  { name: "Small Gun Grip: Comfort Grip", rarity: 6, source: "Core, 101" },
  { name: "Small Gun Grip: Sharpshooter's Grip", rarity: 10, source: "Core, 101" },
  // Stock
  { name: "Small Gun Stock: Full Stock", rarity: 10, source: "Core, 101" },
  { name: "Small Gun Stock: Marksman's Stock", rarity: 20, source: "Core, 101" },
  { name: "Small Gun Stock: Recoil-Compensating Stock", rarity: 3, source: "Core, 101" }, // Really? Cost: +3?
  { name: 'M79 Grenade Launcher Stock: Full Stock', rarity: 10, source: 'Settlers, 90' },
];
const smallGunSights = [
  { name: "Small Gun Sight: Reflex Sight", rarity: 14, source: "Core, 101" },
  { name: "Small Gun Sight: Short Scope", rarity: 11, source: "Core, 101" },
  { name: "Small Gun Sight: Long Scope", rarity: 29, source: "Core, 101" },
  { name: "Small Gun Sight: Short Night Vision Scope", rarity: 38, source: "Core, 101" },
  { name: "Small Gun Sight: Long Night Vision Scope", rarity: 50, source: "Core, 101" },
  { name: "Small Gun Sight: Recon Scope", rarity: 59, source: "Core, 101" },
];
const smallGunMuzzles = [
  { name: "Small Gun Muzzle: Bayonet", rarity: 10, source: "Core, 101" },
  { name: "Small Gun Muzzle: Compensator", rarity: 15, source: "Core, 101" },
  { name: "Small Gun Muzzle: Muzzle Break", rarity: 30, source: "Core, 101" },
  { name: "Small Gun Muzzle: Suppressor", rarity: 45, source: "Core, 101" },
];
export const smallGunMods = [
  ...smallGunReceivers,
  ...smallGunBarrels,
  ...smallGunMagazines,
  ...smallGunGripsAndStocks,
  ...smallGunSights,
  ...smallGunMuzzles
];
const energyWeaponCapacitors = [
  { name: "Laser Musket Capacitor: Three-Crank Capacitor", rarity: 4, source: "Core, 103" },
  { name: "Laser Musket Capacitor: Four-Crank Capacitor", rarity: 8, source: "Core, 103" },
  { name: "Laser Musket Capacitor: Five-Crank Capacitor", rarity: 12, source: "Core, 103" },
  { name: "Laser Musket Capacitor: Six-Crank Capacitor", rarity: 16, source: "Core, 103" },
  { name: "Energy Weapon Capacitor: Beta Wave Tuner", rarity: 30, source: "Core, 104" },
  { name: "Energy Weapon Capacitor: Boosted Capacitor", rarity: 35, source: "Core, 104" },
  { name: "Energy Weapon Capacitor: Photon Excitor", rarity: 30, source: "Core, 104" },
  { name: "Energy Weapon Capacitor: Photon Agitator", rarity: 35, source: "Core, 104" },
  { name: 'Acid Soaker Concentrate: Caustic', rarity: 30, source: 'Settlers, 91' },
  { name: 'Assaultron Head Capacitor: Mk III', rarity: 4, source: 'Settlers, 93' },
  { name: 'Assaultron Head Capacitor: MK IV', rarity: 8, source: 'Settlers, 93' },
  { name: 'Assaultron Head Capacitor: Mk V', rarity: 12, source: 'Settlers, 93' },
  { name: 'Assaultron Head Capacitor: Mk VI', rarity: 16, source: 'Settlers, 93' },
  { name: 'Energy Weapon Capacitor: Gamma Wave Emitter', rarity: 14, source: 'Wanderers, 83' },
  { name: 'Energy Weapon Capacitor: Maximized Capacitor', rarity: 17, source: 'Wanderers, 83' },
  { name: 'Energy Weapon Capacitor: Boosted Photon Agitator', rarity: 20, source: 'Wanderers, 83' },
  { name: 'Energy Weapon Capacitor: Boosted Gamma Wave Emitter', rarity: 23, source: 'Wanderers, 83' },
  { name: 'Energy Weapon Capacitor: Overcharged Capacitor', rarity: 42, source: 'Wanderers, 83' },
];
const energyWeaponMagazines = [
  { name: 'Alien Blaster Magazine: Fusion Mag', rarity: 21*6, source: 'Settlers, 92' },
  { name: 'Acid Soaker Container: Large Ampoule', rarity: 22, source: 'Settlers, 91' },
  { name: 'Acid Soaker Container: Large Vial', rarity: 40, source: 'Settlers, 91' },
];
const energyWeaponBarrels = [
  { name: "Gamma Gun Dish: Deep Dish", rarity: 72, source: "Core, 104" },
  { name: "Energy Weapon Barrel: Bracketed Short Barrel", rarity: 6, source: "Core, 104" },
  { name: "Energy Weapon Barrel: Long Barrel", rarity: 20, source: "Core, 104" },
  { name: "Energy Weapon Barrel: Splitter", rarity: 31, source: "Core, 104" },
  { name: "Energy Weapon Barrel: Automatic Barrel", rarity: 24, source: "Core, 104" },
  { name: "Energy Weapon Barrel: Bracketed Long Barrel", rarity: 25, source: "Core, 105" },
  { name: "Energy Weapon Barrel: Improved Barrel", rarity: 26, source: "Core, 105" },
  { name: "Energy Weapon Barrel: Sniper Barrel", rarity: 30, source: "Core, 105" },
  { name: "Energy Weapon Barrel: Flamer Barrel", rarity: 35, source: "Core, 105" },
  { name: 'Energy Weapon Barrel: Improved Long Barrel', rarity: 15, source: 'Wanderers, 83' },
  { name: 'Energy Weapon Barrel: Improved Automatic Barrel', rarity: 18, source: 'Wanderers, 83' },
  { name: 'Energy Weapon Barrel: Improved Sniper Barrel', rarity: 21, source: 'Wanderers, 83' },
  { name: 'Energy Weapon Barrel: Improved Splitter', rarity: 25, source: 'Wanderers, 83' },
];
const energyWeaponGripsAndStocks = [
  { name: "Energy Weapon Grip: Sharpshooter's Grip", rarity: 10, source: "Core, 105" },
  // Stock
  { name: "Energy Weapon Stock: Standard Stock", rarity: 10, source: "Core, 105" },
  { name: "Energy Weapon Stock: Full Stock", rarity: 15, source: "Core, 105" },
  { name: "Energy Weapon Stock: Marksman's Stock", rarity: 20, source: "Core, 105" },
  { name: "Energy Weapon Stock: Recoil-Compensating Stock", rarity: 3, source: "Core, 105" }, // Come now, cost +3 again?
];
const energyWeaponSights = [
  { name: "Energy Weapon Sight: Reflex Sight", rarity: 14, source: "Core, 105" },
  { name: "Energy Weapon Sight: Short Scope", rarity: 11, source: "Core, 105" },
  { name: "Energy Weapon Sight: Long Scope", rarity: 29, source: "Core, 105" },
  { name: "Energy Weapon Sight: Short Night Vision Scope", rarity: 38, source: "Core, 105" },
  { name: "Energy Weapon Sight: Long Night Vision Scope", rarity: 50, source: "Core, 105" },
  { name: "Energy Weapon Sight: Recon Scope", rarity: 59, source: "Core, 105" },
];
const energyWeaponMuzzles = [
  { name: "Gamma Gun Muzzle: Electric Signal Carrier Antennae", rarity: 30, source: "Core, 104" },
  { name: "Gamma Gun Muzzle: Signal Repeater", rarity: 60, source: "Core, 104" },
  { name: "Energy Weapon Muzzle: Beam Splitter", rarity: 15, source: "Core, 105" },
  { name: "Energy Weapon Muzzle: Beam Focuser", rarity: 20, source: "Core, 105" },
  { name: "Energy Weapon Muzzle: Gyro Compensating Lens", rarity: 25, source: "Core, 105" },
  { name: 'Energy Weapon Muzzle: Amplified Beam Splitter', rarity: 15, source: 'Wanderers, 83' },
  { name: 'Energy Weapon Muzzle: Fine-Tuned Beam Focuser', rarity: 18, source: 'Wanderers, 83' },
  { name: 'Energy Weapon Muzzle: Quantum Gyro-Compensating Lens', rarity: 21, source: 'Wanderers, 83' },
];
export const energyWeaponMods = [
  ...energyWeaponCapacitors,
  ...energyWeaponMagazines,
  ...energyWeaponBarrels,
  ...energyWeaponGripsAndStocks,
  ...energyWeaponSights,
  ...energyWeaponMuzzles,
];
const bigGunReceivers = [
  { name: "Flamer Fuel: Napalm", rarity: 59, source: "Core, 107" },
  { name: "Gatling Laser Capacitor: Photon Exciter", rarity: 19, source: "Core, 108" },
  { name: "Gatling Laser Capacitor: Beta Wave Tuner", rarity: 57, source: "Core, 108" },
  { name: "Gatling Laser Capacitor: Boosted Capacitor", rarity: 94, source: "Core, 108" },
  { name: "Gatling Laser Capacitor: Photon Agitator", rarity: 132, source: "Core, 108" },
  { name: 'Gatling Laser Capacitor: Gamma Wave Emitter', rarity: 169, source: 'Wanderers, 84' },
  { name: 'Gatling Laser Capacitor: Maximized Capacitor', rarity: 207, source: 'Wanderers, 84' },
  { name: 'Gatling Laser Capacitor: Boosted Photon Agitator', rarity: 244, source: 'Wanderers, 84' },
  { name: 'Gatling Laser Capacitor: Boosted Gamma Wave Emitter', rarity: 282, source: 'Wanderers, 84' },
  { name: 'Gatling Laser Capacitor: Overcharged Capacitor', rarity: 319, source: 'Wanderers, 84' },
  { name: 'Auto Grenade Launcher Receiver: 25mm Grenade Receiver', rarity: 135, source: 'Wanderers, 68' },
  { name: 'Gatling Gun Receiver: Speedy Receiver', rarity: 35, source: 'Wanderers, 69' },
  { name: 'Gauss Minigun Tesla Coil: Capacitor', rarity: 91, source: 'Wanderers, 71' },
  { name: 'Gauss Minigun Tesla Coil: Dynamo', rarity: 136, source: 'Wanderers, 71' },
  { name: 'Plasma Caster Capacitor: Calibrated Capacitor', rarity: 140, source: 'Wanderers, 72' },
  { name: 'Plasma Caster Capacitor: Pulse Capacitor', rarity: 70, source: 'Wanderers, 72' },
  { name: 'Plasma Caster Capacitor: High Speed Electrode', rarity: 105, source: 'Wanderers, 72' },
];
const bigGunMagazines = [
  { name: "Flamer Tank: Large Tank", rarity: 28, source: "Core, 107" },
  { name: "Flamer Tank: Huge Tank", rarity: 34, source: "Core, 107" },
  { name: 'Broadsider Cannister: Multi Shot Cannister', rarity: 45, source: 'Settlers, 94' },
  { name: 'Broadsider Cannister: M79 Launcher', rarity: 3, source: 'Settlers, 94' },
  { name: 'Cryolator Magazine: Fusion Mag', rarity: 21, source: 'Settlers, 95' },
  { name: 'Harpoon Gun Magazine: Barbed Harpoon', rarity: 21, source: 'Settlers, 96' },
  { name: 'Harpoon Gun Magazine: Flechette Darts', rarity: 15, source: 'Settlers, 96' },
  { name: 'Gatling Gun Magazine: Extra-Large Magazine', rarity: 28, source: 'Wanderers, 69' },
];
const bigGunBarrels = [
  { name: "Flamer Barrel: Long Barrel", rarity: 28, source: "Core, 107" },
  { name: "Gatling Laser Barrel: Charging Barrel", rarity: 357, source: "Core, 108" },
  { name: "Junk Jet Barrel: Long Barrel", rarity: 20, source: "Core, 109" },
  { name: "Minigun Barrel: Accelerated Barrel", rarity: 45, source: "Core, 109" },
  { name: "Minigun Barrel: Tri-Barrel", rarity: 75, source: "Core, 109" },
  { name: "Missile Launcher Barrel: Triple Barrel", rarity: 143, source: "Core, 110" },
  { name: "Missile Launcher Barrel: Quad Barrel", rarity: 218, source: "Core, 110" },
  { name: 'Broadsider Barrel: Long Barrel', rarity: 40, source: 'Settlers, 94' },
  { name: 'Broadsider Barrel: Light Barrel', rarity: 30, source: 'Settlers, 94' },
  { name: 'Cryolator Barrel: Crystallizing Barrel', rarity: 40, source: 'Settlers, 95' },
  { name: '.50 Cal Machine Gun Barrel: Heavy Barrel', rarity: 35, source: 'Wanderers, 68' },
  { name: 'Auto Grenade Launcher Barrel: Heavy Barrel', rarity: 135, source: 'Wanderers, 68' },
  { name: 'Auto Grenade Launcher Barrel: Long Barrel', rarity: 45, source: 'Wanderers, 68' },
  { name: 'Gatling Gun Barrel: Long Barrel', rarity: 158, source: 'Wanderers, 69' },
  { name: 'Gatling Plasma Barrel: Ported Barrel', rarity: 81, source: 'Wanderers, 70' },
  { name: 'Gauss Minigun Barrel: Tri-Barrel', rarity: 91, source: 'Wanderers, 71' },
  { name: 'Gauss Minigun Barrel: Penta-Barrel', rarity: 182, source: 'Wanderers, 71' },
  { name: 'Plasma Caster Barrel: Long Barrel', rarity: 128, source: 'Wanderers, 72' },
];
const bigGunGripsAndStocks = [
  { name: "Junk Jet Stock: Recoil Compensating Stock", rarity: 40, source: "Core, 109" },
  { name: 'Cryolator Stock: Recoil Compensating Stock', rarity: 45, source: 'Settlers, 95' },
  { name: 'Harpoon Gun Stock: Recoil Compensating Stock', rarity: 45, source: 'Settlers, 96' },
  { name: 'Gatling Gun Grip: Comfort Grip', rarity: 90, source: 'Wanderers, 69' },
  { name: 'Gatling Plasma Grip: Comfort Grip', rarity: 90, source: 'Wanderers, 70' },
];
const bigGunSights = [
  { name: "Gatling Laser Sight: Reflex Sight", rarity: 169, source: "Core, 108" },
  { name: "Junk Jet Sight: Gunner Sight", rarity: 5, source: "Core, 109" },
  { name: "Minigun Sight: Gunner Sight", rarity: 68, source: "Core, 109" },
  { name: "Missile Launcher Sight: Scope", rarity: 143, source: "Core, 110" },
  { name: "Missile Launcher Sight: Night Vision Scope", rarity: 248, source: "Core, 110" },
  { name: "Missile Launcher Sight: Targeting Computer", rarity: 293, source: "Core, 110" },
  { name: 'Cryolator Sight: Reflex', rarity: 17, source: 'Settlers, 95' },
  { name: 'Harpoon Gun Sight: Gunner Sight ', rarity: 17, source: 'Settlers, 96' },
  { name: 'Harpoon Gun Sight: Short Scope', rarity: 28, source: 'Settlers, 96' },
  { name: 'Gatling Gun Sight: Front Sight Ring', rarity: 158, source: 'Wanderers, 69' },
  { name: 'Gatling Plasma Sight: Reflex Sight', rarity: 50, source: 'Wanderers, 70' },
  { name: 'Gauss Minigun Sight: Gunner Sight', rarity: 5, source: 'Wanderers, 71' },
];
const bigGunMuzzles = [
  { name: "Flamer Nozzle: Compression Nozzle", rarity: 22, source: "Core, 107" },
  { name: "Flamer Nozzle: Vaporization Nozzle", rarity: 47, source: "Core, 107" },
  { name: "Gatling Laser Nozzle: Beam Focuser", rarity: 22, source: "Core, 108" },
  { name: "Junk Jet Muzzle: Electrification Module", rarity: 70, source: "Core, 109" },
  { name: "Junk Jet Muzzle: Ignition Module", rarity: 130, source: "Core, 109" },
  { name: "Minigun Muzzle: Shredder", rarity: 5, source: "Core, 109" }, // Really? 5?
  { name: "Missile Launcher Muzzle: Bayonet", rarity: 30, source: "Core, 110" },
  { name: "Missile Launcher Muzzle: Stabilizer", rarity: 60, source: "Core, 110" },
  { name: 'Gatling Gun Muzzle: Large Bayonet', rarity: 18, source: 'Wanderers, 69' },
  { name: 'Gatling Plasma Nozzle: Beam Splitter', rarity: 20, source: 'Wanderers, 70' },
  { name: 'Gatling Plasma Nozzle: Beam Focuser', rarity: 41, source: 'Wanderers, 70' },
];
export const bigGunMods = [
  ...bigGunReceivers,
  ...bigGunBarrels,
  ...bigGunMagazines,
  ...bigGunGripsAndStocks,
  ...bigGunSights,
  ...bigGunMuzzles,
];
const bowMods = [
  { name: 'Bow Frame: Compound Frame', rarity: 30, source: 'Wanderers, 74' },
  { name: 'Bow Sight: Iron Sights', rarity: 10, source: 'Wanderers, 74' },
  { name: 'Bow Sight: Glow Sights', rarity: 15, source: 'Wanderers, 74' },
  { name: 'Crossbow Sight: Iron Sights', rarity: 10, source: 'Wanderers, 74' },
  { name: 'Crossbow Sight: Glow Sights', rarity: 15, source: 'Wanderers, 74' },
  { name: 'Crossbow Frame: Heavy Frame', rarity: 30, source: 'Wanderers, 74' },
  { name: 'Crossbow Frame: Repeating Frame', rarity: 75, source: 'Wanderers, 74' },
  { name: 'Crossbow Frame: Multiple Launch Frame', rarity: 60, source: 'Wanderers, 74' },
];
export const meleeMods = [
  { name: "Sword: Serrated Blade", rarity: 25, source: "Core, 112" },
  { name: "Sword: Electrified Blade", rarity: 50, source: "Core, 112" },
  { name: "Sword: Electrified Serrated Blade", rarity: 75, source: "Core, 112" },
  { name: "Sword: Stun Pack", rarity: 100, source: "Core, 112" },
  { name: "Combat Knife: Serrated Blade", rarity: 12, source: "Core, 112" },
  { name: "Combat Knife: Stealth Blade", rarity: 18, source: "Core, 112" },
  { name: "Machete: Serrated Blade", rarity: 12, source: "Core, 113" },
  { name: "Ripper: Curved Blade", rarity: 15, source: "Core, 113" },
  { name: "Ripper: Extended Blade", rarity: 25, source: "Core, 113" },
  { name: "Shishkebab: Extra Flame Jets", rarity: 100, source: "Core, 113" },
  { name: "Switchblade: Serrated Blade", rarity: 10, source: "Core, 114" },
  { name: "Baseball Bat: Barbed", rarity: 5, source: "Core, 114" },
  { name: "Baseball Bat: Spiked", rarity: 7, source: "Core, 114" },
  { name: "Baseball Bat: Sharp", rarity: 7, source: "Core, 114" },
  { name: "Baseball Bat: Chain-Wrapped", rarity: 10, source: "Core, 114" },
  { name: "Baseball Bat: Bladed", rarity: 12, source: "Core, 114" },
  { name: "Board: Spiked", rarity: 6, source: "Core, 114" },
  { name: "Board: Puncturing", rarity: 9, source: "Core, 114" },
  { name: "Board: Bladed", rarity: 10, source: "Core, 114" },
  { name: "Lead Pipe: Spiked", rarity: 4, source: "Core, 115" },
  { name: "Lead Pipe: Heavy", rarity: 11, source: "Core, 115" },
  { name: "Pipe Wrench: Hooked", rarity: 9, source: "Core, 115" },
  { name: "Pipe Wrench: Heavy", rarity: 12, source: "Core, 115" },
  { name: "Pipe Wrench: Puncturing", rarity: 13, source: "Core, 115" },
  { name: "Pipe Wrench: Extra Heavy", rarity: 22, source: "Core, 115" },
  { name: "Pool Cue: Barbed", rarity: 2, source: "Core, 115" },
  { name: "Pool Cue: Sharp", rarity: 3, source: "Core, 115" },
  { name: "Rolling Pin: Spiked", rarity: 3, source: "Core, 116" },
  { name: "Rolling Pin: Sharp", rarity: 3, source: "Core, 116" },
  { name: "Baton: Electrified", rarity: 15, source: "Core, 116" },
  { name: "Baton: Stun Pack", rarity: 30, source: "Core, 116" },
  { name: "Sledgehammer: Puncturing", rarity: 18, source: "Core, 116" },
  { name: "Sledgehammer: Heavy", rarity: 30, source: "Core, 116" },
  { name: "Super Sledge: Heating Coil", rarity: 180, source: "Core, 117" },
  { name: "Super Sledge: Stun Pack", rarity: 360, source: "Core, 117" },
  { name: "Tire Iron: Bladed", rarity: 12, source: "Core, 117" },
  { name: "Walking Cane: Barbed", rarity: 3, source: "Core, 117" },
  { name: "Walking Cane: Spiked", rarity: 3, source: "Core, 117" },
  { name: "Boxing Glove: Spiked", rarity: 3, source: "Core, 118" },
  { name: "Boxing Glove: Puncturing", rarity: 4, source: "Core, 118" },
  { name: "Boxing Glove: Lead Lining", rarity: 7, source: "Core, 118" },
  { name: "Deathclaw Gauntlet: Extra Claw", rarity: 22, source: "Core, 118" },
  { name: "Knuckles: Sharp", rarity: 3, source: "Core, 118" },
  { name: "Knuckles: Spiked", rarity: 3, source: "Core, 118" },
  { name: "Knuckles: Puncturing", rarity: 4, source: "Core, 118" },
  { name: "Knuckles: Bladed", rarity: 5, source: "Core, 118" },
  { name: "Power Fist: Puncturing", rarity: 45, source: "Core, 119" },
  { name: "Power Fist: Heating Coil", rarity: 100, source: "Core, 119" },
  { name: 'Assaultron Blade: Electrified Blade', rarity: 50, source: 'Wanderers, 76' },
  { name: 'Auto Axe: Electrified', rarity: 50, source: 'Wanderers, 76' },
  { name: 'Auto Axe: Burning', rarity: 50, source: 'Wanderers, 76' },
  { name: 'Auto Axe: Poisoned', rarity: 50, source: 'Wanderers, 76' },
  { name: 'Auto Axe: Turbo', rarity: 50, source: 'Wanderers, 76' },
  { name: 'Chainsaw: Dual Bar', rarity: 30, source: 'Wanderers, 78' },
  { name: 'Chainsaw: Bow Bar', rarity: 45, source: 'Wanderers, 78' },
  { name: 'Chainsaw: Long Bow Bar', rarity: 60, source: 'Wanderers, 78' },
  { name: 'Chainsaw: Flaming', rarity: 90, source: 'Wanderers, 78' },
];
const clothingMods = [
  { name: 'Clothing: Ballistic Weave', rarity: 20, source: 'Core, 126' },
  { name: 'Clothing: Ballistic Weave Mk II', rarity: 30, source: 'Core, 126' },
  { name: 'Clothing: Ballistic Weave Mk III', rarity: 40, source: 'Core, 126' },
  { name: 'Clothing: Ballistic Weave Mk IV', rarity: 50, source: 'Core, 126' },
  { name: 'Clothing: Ballistic Weave Mk V', rarity: 60, source: 'Core, 126' },
  { name: 'Vault Suit: Insulated Lining', rarity: 10, source: 'Core, 129' },
  { name: 'Vault Suit: Treated Lining', rarity: 20, source: 'Core, 129' },
  { name: 'Vault Suit: Resistant Lining', rarity: 30, source: 'Core, 129' },
  { name: 'Vault Suit: Protective Lining', rarity: 40, source: 'Core, 129' },
  { name: 'Vault Suit: Shielded Lining', rarity: 50, source: 'Core, 129' },
  { name: 'Underarmor Suit: Treated Lining', rarity: 9, source: 'Wanderers, 87' },
  { name: 'Underarmor Suit: Resistant Lining', rarity: 15, source: 'Wanderers, 87' },
  { name: 'Underarmor Suit: Protective Lining', rarity: 24, source: 'Wanderers, 87' },
  { name: 'Underarmor Suit: Shielded Lining', rarity: 36, source: 'Wanderers, 87' },
];
const armorMaterialMods = [
  { name: 'Raider Armor Material: Welded', rarity: 3, source: 'Core, 133' },
  { name: 'Raider Armor Material: Tempered', rarity: 6, source: 'Core, 133' },
  { name: 'Raider Armor Material: Hardened', rarity: 9, source: 'Core, 133' },
  { name: 'Raider Armor Material: Buttressed', rarity: 12, source: 'Core, 133' },
  { name: 'Leather Armor Material: Boiled', rarity: 5, source: 'Core, 133' },
  { name: 'Leather Armor Material: Girded', rarity: 10, source: 'Core, 133' },
  { name: 'Leather Armor Material: Treated', rarity: 15, source: 'Core, 133' },
  { name: 'Leather Armor Material: Shadowed', rarity: 20, source: 'Core, 133' },
  { name: 'Leather Armor Material: Studded', rarity: 25, source: 'Core, 133' },
  { name: 'Metal Armor Material: Painted', rarity: 10, source: 'Core, 134' },
  { name: 'Metal Armor Material: Enameled', rarity: 20, source: 'Core, 134' },
  { name: 'Metal Armor Material: Shadowed', rarity: 25, source: 'Core, 134' },
  { name: 'Metal Armor Material: Alloyed', rarity: 30, source: 'Core, 134' },
  { name: 'Metal Armor Material: Polished', rarity: 40, source: 'Core, 134' },
  { name: 'Combat Armor Material: Reinforced', rarity: 15, source: 'Core, 134' },
  { name: 'Combat Armor Material: Shadowed', rarity: 15, source: 'Core, 134' },
  { name: 'Combat Armor Material: Fiberglass', rarity: 30, source: 'Core, 134' },
  { name: 'Combat Armor Material: Polymer', rarity: 45, source: 'Core, 134' },
  { name: 'Synth Armor Material: Laminated', rarity: 5, source: 'Core, 135' },
  { name: 'Synth Armor Material: Resin', rarity: 10, source: 'Core, 135' },
  { name: 'Synth Armor Material: Microcarbon', rarity: 15, source: 'Core, 135' },
  { name: 'Synth Armor Material: Nanofilament', rarity: 20, source: 'Core, 135' },
  { name: 'Legionary Armor Material: Reinforced', rarity: 6, source: 'Wanders, 90' },
  { name: 'Legionary Armor Material: Shadowed', rarity: 48, source: 'Wanders, 90' },
  { name: 'Legionary Armor Material: Treated', rarity: 15, source: 'Wanders, 90' },
  { name: 'Legionary Armor Material: Studded', rarity: 30, source: 'Wanders, 90' },
  { name: 'Marine Armor Material: Welded', rarity: 10, source: 'Wanders, 90' },
  { name: 'Marine Armor Material: Tempered', rarity: 30, source: 'Wanders, 90' },
  { name: 'Marine Armor Material: Hardened', rarity: 50, source: 'Wanders, 90' },
  { name: 'Marine Armor Material: Buttressed', rarity: 75, source: 'Wanders, 90' },
  { name: 'Scout Armor Material: Reinforced', rarity: 6, source: 'Wanders, 92' },
  { name: 'Scout Armor Material: Shadowed', rarity: 48, source: 'Wanders, 92' },
  { name: 'Scout Armor Material: Treated', rarity: 15, source: 'Wanders, 92' },
  { name: 'Scout Armor Material: Studded', rarity: 30, source: 'Wanders, 92' },
  { name: 'Robot Armor Material: Painted', rarity: 10, source: 'Wanders, 93' },
  { name: 'Robot Armor Material: Shadowed', rarity: 25, source: 'Wanders, 93' },
  { name: 'Robot Armor Material: Enameled', rarity: 20, source: 'Wanders, 93' },
  { name: 'Robot Armor Material: Alloyed', rarity: 30, source: 'Wanders, 93' },
  { name: 'Robot Armor Material: Polished', rarity: 40, source: 'Wanders, 93' },
  { name: 'Wood Armor Material: Shrouded', rarity: 10, source: 'Wanders, 93' },
];
const armorUpgradeMods = [
  { name: 'Armor Upgrade: Lighter Build', rarity: 1, source: 'Core, 136' },
  { name: 'Armor Upgrade: Pocketed', rarity: 1, source: 'Core, 136' },
  { name: 'Armor Upgrade: Deep Pocketed', rarity: 5, source: 'Core, 136' },
  { name: 'Armor Upgrade: Lead-Lined', rarity: 5, source: 'Core, 136' },
  { name: 'Armor Upgrade: Ultra-Light', rarity: 7, source: 'Core, 136' },
  { name: 'Armor Upgrade - Torso: Padded', rarity: 1, source: 'Core, 136' },
  { name: 'Armor Upgrade - Torso: Asbestos Lining', rarity: 3, source: 'Core, 136' },
  { name: 'Armor Upgrade - Torso: Dense', rarity: 7, source: 'Core, 136' },
  { name: 'Armor Upgrade - Torso: BioCommMesh', rarity: 9, source: 'Core, 136' },
  { name: 'Armor Upgrade - Torso: Pneumatic', rarity: 9, source: 'Core, 136' },
  { name: 'Armor Upgrade - Arm: Brawling', rarity: 1, source: 'Core, 136' },
  { name: 'Armor Upgrade - Arm: Braced', rarity: 1, source: 'Core, 136' },
  { name: 'Armor Upgrade - Arm: Stabilized', rarity: 1, source: 'Core, 136' },
  { name: 'Armor Upgrade - Arm: Aerodynamic', rarity: 1, source: 'Core, 136' },
  { name: 'Armor Upgrade - Arm: Weighted', rarity: 3, source: 'Core, 136' },
  { name: 'Armor Upgrade - Leg: Cushioned', rarity: 1, source: 'Core, 136' },
  { name: 'Armor Upgrade - Leg: Muffled', rarity: 2, source: 'Core, 136' },
];
const powerArmorMaterialMods = [
  { name: 'Power Armor Upgrade: Raider II', rarity: 5+10+7+7, source: 'Core, 139' },
  { name: 'Power Armor Upgrade: T-45b', rarity: 3+7+7+7, source: 'Core, 140' },
  { name: 'Power Armor Upgrade: T-45c', rarity: 6+14+10+10, source: 'Core, 140' },
  { name: 'Power Armor Upgrade: T-45d', rarity: 9+21+15+15, source: 'Core, 140' },
  { name: 'Power Armor Upgrade: T-45e', rarity: 12+28+20+20, source: 'Core, 140' },
  { name: 'Power Armor Upgrade: T-45f', rarity: 15+35+25+25, source: 'Core, 140' },
  { name: 'Power Armor Upgrade: T-51b', rarity: 4+9+6+6, source: 'Core, 141' },
  { name: 'Power Armor Upgrade: T-51c', rarity: 8+18+13+13, source: 'Core, 141' },
  { name: 'Power Armor Upgrade: T-51d', rarity: 12+27+19+19, source: 'Core, 141' },
  { name: 'Power Armor Upgrade: T-51e', rarity: 16+36+26+26, source: 'Core, 141' },
  { name: 'Power Armor Upgrade: T-51f', rarity: 20+45+32+32, source: 'Core, 141' },
  { name: 'Power Armor Upgrade: T-60b', rarity: 32+37+35+35, source: 'Core, 142' },
  { name: 'Power Armor Upgrade: T-60c', rarity: 64+74+70+70, source: 'Core, 142' },
  { name: 'Power Armor Upgrade: T-60d', rarity: 96+111+105+105, source: 'Core, 142' },
  { name: 'Power Armor Upgrade: T-60e', rarity: 128+148+140+140, source: 'Core, 142' },
  { name: 'Power Armor Upgrade: T-60f', rarity: 160+185+175+175, source: 'Core, 142' },
  { name: 'Power Armor Upgrade: X-01 Mk 2', rarity: 7+14+10+10, source: 'Core, 143' },
  { name: 'Power Armor Upgrade: X-01 Mk 3', rarity: 14+28+20+20, source: 'Core, 143' },
  { name: 'Power Armor Upgrade: X-01 Mk 4', rarity: 21+42+30+30, source: 'Core, 143' },
  { name: 'Power Armor Upgrade: X-01 Mk 5', rarity: 28+56+40+40, source: 'Core, 143' },
  { name: 'Power Armor Upgrade: X-01 Mk 6', rarity: 35+70+50+50, source: 'Core, 143' },
];
const powerArmorSystemMods = [
  { name: 'Power Armor Torso System: Raider Welded Rebar', rarity: 25, source: 'Core, 139' },
  { name: 'Power Armor Head System: Rad Scrubber', rarity: 100, source: 'Core, 144' },
  { name: 'Power Armor Head System: Sensor Array', rarity: 100, source: 'Core, 144' },
  { name: 'Power Armor Head System: Targeting HUD', rarity: 100, source: 'Core, 144' },
  { name: 'Power Armor Head System: Internal Database', rarity: 100, source: 'Core, 144' },
  { name: 'Power Armor Torso System: Core Assembly', rarity: 100, source: 'Core, 144' },
  { name: 'Power Armor Torso System: Blood Cleanser', rarity: 100, source: 'Core, 144' },
  { name: 'Power Armor Torso System: Emergency Protocols', rarity: 100, source: 'Core, 144' },
  { name: 'Power Armor Torso System: Motion-Assist Servos', rarity: 100, source: 'Core, 144' },
  { name: 'Power Armor Torso System: Kinetic Dynamo', rarity: 100, source: 'Core, 144' },
  { name: 'Power Armor Torso System: Medic Pump', rarity: 100, source: 'Core, 144' },
  { name: 'Power Armor Torso System: Reactive Plates', rarity: 100, source: 'Core, 144' },
  { name: 'Power Armor Torso System: Tesla Coils', rarity: 100, source: 'Core, 145' },
  { name: 'Power Armor Torso System: Stealth Boy', rarity: 100, source: 'Core, 145' },
  { name: 'Power Armor Torso System: Jetpack', rarity: 500, source: 'Core, 145' },
  { name: 'Power Armor Arm System: Rusty Knuckles', rarity: 25, source: 'Core, 145' },
  { name: 'Power Armor Arm System: Hydraulic Bracers', rarity: 100, source: 'Core, 145' },
  { name: 'Power Armor Arm System: Optimized Bracers', rarity: 100, source: 'Core, 145' },
  { name: 'Power Armor Arm System: Tesla Bracers', rarity: 150, source: 'Core, 145' },
  { name: 'Power Armor Leg System: Calibrated Shocks', rarity: 100, source: 'Core, 145' },
  { name: 'Power Armor Leg System: Explosive Vent', rarity: 100, source: 'Core, 145' },
  { name: 'Power Armor Leg System: Overdive Servos', rarity: 100, source: 'Core, 145' },
];
const powerArmorPlatingMods = [
  { name: 'Power Armor Plating: Titanium', rarity: 10, source: 'Core, 145' },
  { name: 'Power Armor Plating: Lead', rarity: 10, source: 'Core, 145' },
  { name: 'Power Armor Plating: Photovoltaic', rarity: 10, source: 'Core, 145' },
  { name: 'Power Armor Plating: Prism Shielding', rarity: 10, source: 'Core, 145' },
  { name: 'Power Armor Plating: Explosive Shielding', rarity: 10, source: 'Core, 145' },
  { name: 'Power Armor Plating: X-01 EMP Shielding', rarity: 20, source: 'Core, 143' },
];
export const armorMods = [
  ...clothingMods,
  ...armorMaterialMods,
  ...armorUpgradeMods,
];
export const powerArmorMods = [
  ...powerArmorMaterialMods,
  ...powerArmorSystemMods,
  ...powerArmorPlatingMods,
];
export const anyArmorMods = [
  ...armorMods,
  ...powerArmorMods,

];
const robotMods = [
  { name: 'Robot Factory Armor', rarity: 10*5, source: 'Core, 146' },
  { name: 'Robot Factory Storage Armor', rarity: 25, source: 'Core, 146' },
  { name: 'Robot Primal Plate', rarity: 10*5, source: 'Core, 146' },
  { name: 'Robot Serrated Plate', rarity: 15*5, source: 'Core, 146' },
  { name: 'Robot Noxious Plate', rarity: 15*5, source: 'Core, 146' },
  { name: 'Robot Toxic Plate', rarity: 15*5, source: 'Core, 146' },
  { name: 'Robot Actuated Frame', rarity: 15*5, source: 'Core, 146' },
  { name: 'Robot Voltaic Frame', rarity: 20*5, source: 'Core, 147' },
  { name: 'Robot Hydraulic Frame', rarity: 30*5, source: 'Core, 147' },
  // Robot parts
  { name: 'Robot Torso: Mister Handy', rarity: 5*4, source: 'Settlers, 79' },
  { name: 'Robot Torso: Protectron', rarity: 5*4, source: 'Settlers, 79' },
  { name: 'Robot Torso: Assaultron', rarity: 9*5, source: 'Settlers, 79' },
  { name: 'Robot Torso: Robobrain', rarity: 6*6, source: 'Settlers, 79' },
  { name: 'Robot Torso: Sentry Bot', rarity: 7*10, source: 'Settlers, 79' },
  
  { name: 'Robot Legs: Mister Handy Thruster', rarity: 4*5, source: 'Settlers, 80' },
  { name: 'Robot Legs: Protectron', rarity: 3*5, source: 'Settlers, 80' },
  { name: 'Robot Legs: Assaultron', rarity: 5*5, source: 'Settlers, 80' },
  { name: 'Robot Legs: Robobrain', rarity: 5*5, source: 'Settlers, 80' },
  { name: 'Robot Legs: Sentry Bot', rarity: 6*5, source: 'Settlers, 80' },
  
  { name: 'Robot Head: Mister Handy Eye Stalk', rarity: 4+5+2, source: 'Settlers, 81' },
  { name: 'Robot Head: Protectron', rarity: 4*7*3, source: 'Settlers, 81' },
  { name: 'Robot Head: Assaultron', rarity: 6*6*4, source: 'Settlers, 81' },
  { name: 'Robot Head: Assaultron Head Laser', rarity: 7*6*4, source: 'Settlers, 81' },
  { name: 'Robot Head: Robobrain', rarity: 6*7*3, source: 'Settlers, 81' },
  { name: 'Robot Head: Sentry Bot', rarity: 6*6*4, source: 'Settlers, 81' },
  
  { name: 'Robot Arm: Mister Handy', rarity: 4+2*2, source: 'Settlers, 82' },
  { name: 'Robot Arm: Protectron', rarity: 5+3*1, source: 'Settlers, 82' },
  { name: 'Robot Arm: Assaultron', rarity: 5+5*5, source: 'Settlers, 82' },
  { name: 'Robot Arm: Robobrain', rarity: 5+2*4, source: 'Settlers, 82' },
  { name: 'Robot Arm: Sentry Bot', rarity: 6+4*5, source: 'Settlers, 82' },

  { name: 'Robot Weapon: Buzz Saw', rarity: 33, source: 'Settlers, 83' },
  { name: 'Robot Weapon: Construction Claw', rarity: 33, source: 'Settlers, 83' },
  { name: 'Robot Weapon: Cryojet', rarity: 44, source: 'Settlers, 83' },
  { name: 'Robot Weapon: Drill', rarity: 33, source: 'Settlers, 83' },
  { name: 'Robot Weapon: Vice Grip', rarity: 44, source: 'Settlers, 83' },
  { name: 'Robot Weapon Claw: Shock', rarity: 15, source: 'Settlers, 83' },
  { name: 'Robot Weapon Claw: Stun', rarity: 30, source: 'Settlers, 83' },
  { name: 'Robot Weapon: Smoke Claws', rarity: 44, source: 'Settlers, 90' },
];
export const anyLooseMods = [
  ...smallGunMods,
  ...energyWeaponMods,
  ...bigGunMods,
  ...bowMods,
  ...meleeMods,
  ...anyArmorMods,
  ...robotMods
]
export const legendaryBaseItems = [
  ...baseSmallGuns,
  ...baseEnergyWeapons,
  ...baseBigGuns,
  ...bows,
  ...armorPieces,
  ...powerArmorPieces,
];
