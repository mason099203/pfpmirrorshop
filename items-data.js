/**
 * 物品資料模組
 * 包含所有預設物品的資料定義
 */

/**
 * 預設物品資料陣列（英文版）
 * @type {Array<Object>}
 */
const defaultItems = [
    {
        id: 1,
        name: "Brimstone Knell Opal Sceptre",
        mirrorFee: 0,
        category: "weapon",
        type: "RF / Ignite build / CWS",
        tags: ["Hunter Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Sceptres
Rarity: Rare
Brimstone Knell
Opal Sceptre
--------
Sceptre
Quality: +30% (augmented)
Physical Damage: 49-73
Critical Strike Chance: 8.00%
Attacks per Second: 1.25
Weapon Range: 1.1 metres
--------
Requirements:
Level: 65
Str: 95
Int: 131
--------
Sockets: W-W-W 
--------
Item Level: 86
--------
Quality does not increase Physical Damage (enchant)
Grants 1% increased Elemental Damage per 2% Quality (enchant)
--------
40% increased Elemental Damage (implicit)
--------
+26% to Damage over Time Multiplier
+38% to Fire Damage over Time Multiplier
+1 to Level of all Spell Skill Gems
+1 to Level of all Fire Spell Skill Gems
Malevolence has 40% increased Aura Effect
60% increased Fire Damage (crafted)
20% chance to Ignite (crafted)
--------
Split
--------
Hunter Item
`
    },
    {
        id: 2,
        name: "Honour Ward Giantslayer Helmet",
        mirrorFee: 0,
        category: "armor",
        type: "Warcry cri /Volcanic Fissure of Snaking",
        tags: ["Searing Exarch Item","Eater of Worlds Item","Fractured Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Helmets
Rarity: Rare
Honour Ward
Giantslayer Helmet
--------
Quality: +30% (augmented)
Armour: 1739 (augmented)
--------
Requirements:
Level: 84
Str: 224
--------
Sockets: W-W-W-W 
--------
Item Level: 85
--------
12% increased Mana Reservation Efficiency of Skills (implicit)
26% reduced Mana Cost of Attacks (implicit)
--------
Skills have +3% to Critical Strike Chance for each Warcry Exerting them (fractured)
+2 to Level of Socketed AoE Gems
+58 to Intelligence
+536 to Accuracy Rating
100% increased Armour
+143 to maximum Life
9% increased Area of Effect
--------
Split
Searing Exarch Item
Eater of Worlds Item
--------
Fractured Item

`
    },
    {
        id: 3,
        name: "Torment Shell Sacred Chainmail",
        mirrorFee: 20,
        category: "armor",
        type: "Str Stacking Armour/Energy Enjoyer",
        tags: ["Searing Exarch Item","Eater of Worlds Item","Fractured Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Body Armours
Rarity: Rare
Torment Shell
Sacred Chainmail
--------
Quality: +30% (augmented)
Armour: 3598 (augmented)
Energy Shield: 725 (augmented)
--------
Requirements:
Level: 84
Str: 173
Int: 173
--------
Sockets: W-W-W-W-W-W 
--------
Item Level: 86
--------
12% increased Explicit Defence Modifier magnitudes (enchant)
50% reduced Explicit Resistance Modifier magnitudes (enchant)
--------
1% less Damage Taken per 180 Strength (implicit)
26% increased Arctic Armour Buff Effect (implicit)
--------
56% increased Global Defences (fractured)
+52 to Strength
You take 10% reduced Extra Damage from Critical Strikes per Endurance Charge
+417 to Armour
123% increased Armour and Energy Shield
+84 to maximum Energy Shield
8% additional Physical Damage Reduction
--------
Split
Searing Exarch Item
Eater of Worlds Item
--------
Fractured Item
`
    },
    {
        id: 4,
        name: "Vengeance Sanctuary Necrotic Armour",
        mirrorFee: 20,
        category: "armor",
        type: "Int Stacking Trickster",
        tags: ["Searing Exarch Item","Eater of Worlds Item","Fractured Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Body Armours
Rarity: Rare
Vengeance Sanctuary
Necrotic Armour
--------
Quality: +30% (augmented)
Evasion Rating: 3621 (augmented)
Energy Shield: 733 (augmented)
--------
Requirements:
Level: 84
Dex: 173
Int: 173
--------
Sockets: W-W-W-W-W-W 
--------
Item Level: 86
--------
12% increased Explicit Defence Modifier magnitudes (enchant)
50% reduced Explicit Resistance Modifier magnitudes (enchant)
--------
12% of Physical Damage from Hits taken as Chaos Damage (implicit)
+2% to all maximum Resistances (implicit)
--------
56% increased Global Defences (fractured)
+22% chance to Suppress Spell Damage
+58 to Intelligence
+418 to Evasion Rating
123% increased Evasion and Energy Shield
+86 to maximum Energy Shield
6% increased Attributes (crafted)
--------
Split
Searing Exarch Item
Eater of Worlds Item
--------
Fractured Item

Sacred Chainmail
`
    },
    {
        id: 5,
        name: "Victory Cowl Archdemon Crown",
        mirrorFee: 0,
        category: "armor",
        type: "Penance Brand / Blade vortex",
        tags: ["Shaper Item","Elder Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Helmets
Rarity: Rare
Victory Cowl
Archdemon Crown
--------
Quality: +20% (augmented)
Armour: 254 (augmented)
Energy Shield: 106 (augmented)
--------
Requirements:
Level: 75
Str: 79
Int: 79
--------
Sockets: W-W-W-W 
--------
Item Level: 84
--------
-2 to Level of Socketed Support Gems (implicit)
+2 to Level of Socketed Skill Gems (implicit)
--------
+2 to Level of Socketed AoE Gems
Socketed Gems are Supported by Level 25 Concentrated Effect
Socketed Gems are Supported by Level 25 Hypothermia
Socketed Gems deal 30% more Elemental Damage
Socketed Spells have +4% to Critical Strike Chance
10% increased Area of Effect
25% increased Area Damage
20% increased Effect of Cold Ailments
+45 to maximum Energy Shield (crafted)
--------
Split
--------
Shaper Item
Elder Item

`
    },
    {
        id: 6,
        name: "Miracle Gutter Synthesised Reaver Sword",
        mirrorFee: 60,
        category: "weapon",
        type: "Str Stacking Original Sin Molten Strike",
        tags: ["Synthesised Item","Split"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Two Hand Swords
Rarity: Rare
Miracle Gutter
Synthesised Reaver Sword
--------
Two Handed Sword
Quality: +30% (augmented)
Physical Damage: 62-104
Elemental Damage: 34-636 (augmented)
Critical Strike Chance: 5.00%
Attacks per Second: 2.07 (augmented)
Weapon Range: 1.3 metres
--------
Requirements:
Level: 65
Str: 82
Dex: 119
--------
Sockets: W-W-W-W-W-W 
--------
Item Level: 85
--------
Quality does not increase Physical Damage (enchant)
1% increased Attack Speed per 8% Quality (enchant)
--------
8% increased Attack Speed (implicit)
+1 to Maximum Endurance Charges (implicit)
Adds 3 to 5 Fire Damage to Attacks with this Weapon per 10 Strength (implicit)
Item sells for much more to vendors (implicit)
--------
+55 to Strength
144% increased Spell Damage
Adds 34 to 636 Lightning Damage
27% increased Attack Speed
Attacks with this Weapon Penetrate 16% Chaos Resistance
30% chance to deal Double Damage while Focused (crafted)
--------
Split
--------
Synthesised Item
`
    },
    {
        id: 7,
        name: "Dusk Whorl Synthesised Gold Ring",
        mirrorFee: 20,
        category: "accessory",
        type: "+1 frenzy +1 power / charge build / Int stacking Trickster",
        tags: ["new","Synthesised Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Rings
Rarity: Rare
Dusk Whorl
Synthesised Gold Ring
--------
Quality (Caster Modifiers): +20% (augmented)
--------
Requirements:
Level: 65
--------
Item Level: 100
--------
Your Chilling Towers freeze enemies for 0.2 seconds while they are affected by chilling beams (enchant)
--------
+1 to Maximum Frenzy Charges (implicit)
+1 to Maximum Power Charges (implicit)
7% increased Spell Damage per Power Charge (implicit)
--------
+55 to Intelligence
19% increased Cast Speed
+25% to Global Critical Strike Multiplier
+47 to maximum Energy Shield
+55 to maximum Mana
7% reduced Mana Cost of Skills
Non-Channelling Skills have -7 to Total Mana Cost (crafted)
--------
Synthesised Item
`
    }
];

/**
 * 預設物品資料陣列（中文版）
 * @type {Array<Object>}
 */
const defaultItems_ch = [
    {
        id: 1,
        name: "Brimstone Knell Opal Sceptre",
        mirrorFee: 0,
        category: "weapon",
        type: "RF / Ignite build / CWS",
        tags: ["Hunter Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Sceptres
Rarity: Rare
Brimstone Knell
Opal Sceptre
--------
Sceptre
Quality: +30% (augmented)
Physical Damage: 49-73
Critical Strike Chance: 8.00%
Attacks per Second: 1.25
Weapon Range: 1.1 metres
--------
Requirements:
Level: 65
Str: 95
Int: 131
--------
Sockets: W-W-W 
--------
Item Level: 86
--------
Quality does not increase Physical Damage (enchant)
Grants 1% increased Elemental Damage per 2% Quality (enchant)
--------
40% increased Elemental Damage (implicit)
--------
+26% to Damage over Time Multiplier
+38% to Fire Damage over Time Multiplier
+1 to Level of all Spell Skill Gems
+1 to Level of all Fire Spell Skill Gems
Malevolence has 40% increased Aura Effect
60% increased Fire Damage (crafted)
20% chance to Ignite (crafted)
--------
Split
--------
Hunter Item
`
    },
    {
        id: 2,
        name: "Honour Ward Giantslayer Helmet",
        mirrorFee: 0,
        category: "armor",
        type: "Warcry cri /Volcanic Fissure of Snaking",
        tags: ["Searing Exarch Item","Eater of Worlds Item","Fractured Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Helmets
Rarity: Rare
Honour Ward
Giantslayer Helmet
--------
Quality: +30% (augmented)
Armour: 1739 (augmented)
--------
Requirements:
Level: 84
Str: 224
--------
Sockets: W-W-W-W 
--------
Item Level: 85
--------
12% increased Mana Reservation Efficiency of Skills (implicit)
26% reduced Mana Cost of Attacks (implicit)
--------
Skills have +3% to Critical Strike Chance for each Warcry Exerting them (fractured)
+2 to Level of Socketed AoE Gems
+58 to Intelligence
+536 to Accuracy Rating
100% increased Armour
+143 to maximum Life
9% increased Area of Effect
--------
Split
Searing Exarch Item
Eater of Worlds Item
--------
Fractured Item

`
    },
    {
        id: 3,
        name: "Torment Shell Sacred Chainmail",
        mirrorFee: 20,
        category: "armor",
        type: "Str Stacking Armour/Energy Enjoyer",
        tags: ["Searing Exarch Item","Eater of Worlds Item","Fractured Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Body Armours
Rarity: Rare
Torment Shell
Sacred Chainmail
--------
Quality: +30% (augmented)
Armour: 3598 (augmented)
Energy Shield: 725 (augmented)
--------
Requirements:
Level: 84
Str: 173
Int: 173
--------
Sockets: W-W-W-W-W-W 
--------
Item Level: 86
--------
12% increased Explicit Defence Modifier magnitudes (enchant)
50% reduced Explicit Resistance Modifier magnitudes (enchant)
--------
1% less Damage Taken per 180 Strength (implicit)
26% increased Arctic Armour Buff Effect (implicit)
--------
56% increased Global Defences (fractured)
+52 to Strength
You take 10% reduced Extra Damage from Critical Strikes per Endurance Charge
+417 to Armour
123% increased Armour and Energy Shield
+84 to maximum Energy Shield
8% additional Physical Damage Reduction
--------
Split
Searing Exarch Item
Eater of Worlds Item
--------
Fractured Item
`
    },
    {
        id: 4,
        name: "Vengeance Sanctuary Necrotic Armour",
        mirrorFee: 20,
        category: "armor",
        type: "Int Stacking Trickster",
        tags: ["Searing Exarch Item","Eater of Worlds Item","Fractured Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Body Armours
Rarity: Rare
Vengeance Sanctuary
Necrotic Armour
--------
Quality: +30% (augmented)
Evasion Rating: 3621 (augmented)
Energy Shield: 733 (augmented)
--------
Requirements:
Level: 84
Dex: 173
Int: 173
--------
Sockets: W-W-W-W-W-W 
--------
Item Level: 86
--------
12% increased Explicit Defence Modifier magnitudes (enchant)
50% reduced Explicit Resistance Modifier magnitudes (enchant)
--------
12% of Physical Damage from Hits taken as Chaos Damage (implicit)
+2% to all maximum Resistances (implicit)
--------
56% increased Global Defences (fractured)
+22% chance to Suppress Spell Damage
+58 to Intelligence
+418 to Evasion Rating
123% increased Evasion and Energy Shield
+86 to maximum Energy Shield
6% increased Attributes (crafted)
--------
Split
Searing Exarch Item
Eater of Worlds Item
--------
Fractured Item

Sacred Chainmail
`
    },
    {
        id: 5,
        name: "Victory Cowl Archdemon Crown",
        mirrorFee: 0,
        category: "armor",
        type: "Penance Brand / Blade vortex",
        tags: ["Shaper Item","Elder Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Helmets
Rarity: Rare
Victory Cowl
Archdemon Crown
--------
Quality: +20% (augmented)
Armour: 254 (augmented)
Energy Shield: 106 (augmented)
--------
Requirements:
Level: 75
Str: 79
Int: 79
--------
Sockets: W-W-W-W 
--------
Item Level: 84
--------
-2 to Level of Socketed Support Gems (implicit)
+2 to Level of Socketed Skill Gems (implicit)
--------
+2 to Level of Socketed AoE Gems
Socketed Gems are Supported by Level 25 Concentrated Effect
Socketed Gems are Supported by Level 25 Hypothermia
Socketed Gems deal 30% more Elemental Damage
Socketed Spells have +4% to Critical Strike Chance
10% increased Area of Effect
25% increased Area Damage
20% increased Effect of Cold Ailments
+45 to maximum Energy Shield (crafted)
--------
Split
--------
Shaper Item
Elder Item

`
    },
    {
        id: 6,
        name: "Miracle Gutter Synthesised Reaver Sword",
        mirrorFee: 60,
        category: "weapon",
        type: "Str Stacking Original Sin Molten Strike",
        tags: ["Synthesised Item","Split"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Two Hand Swords
Rarity: Rare
Miracle Gutter
Synthesised Reaver Sword
--------
Two Handed Sword
Quality: +30% (augmented)
Physical Damage: 62-104
Elemental Damage: 34-636 (augmented)
Critical Strike Chance: 5.00%
Attacks per Second: 2.07 (augmented)
Weapon Range: 1.3 metres
--------
Requirements:
Level: 65
Str: 82
Dex: 119
--------
Sockets: W-W-W-W-W-W 
--------
Item Level: 85
--------
Quality does not increase Physical Damage (enchant)
1% increased Attack Speed per 8% Quality (enchant)
--------
8% increased Attack Speed (implicit)
+1 to Maximum Endurance Charges (implicit)
Adds 3 to 5 Fire Damage to Attacks with this Weapon per 10 Strength (implicit)
Item sells for much more to vendors (implicit)
--------
+55 to Strength
144% increased Spell Damage
Adds 34 to 636 Lightning Damage
27% increased Attack Speed
Attacks with this Weapon Penetrate 16% Chaos Resistance
30% chance to deal Double Damage while Focused (crafted)
--------
Split
--------
Synthesised Item
`
    },
    {
        id: 7,
        name: "Dusk Whorl Synthesised Gold Ring",
        mirrorFee: 20,
        category: "accessory",
        type: "+1 frenzy +1 power / charge build / Int stacking Trickster",
        tags: ["new","Synthesised Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        itemData: `Item Class: Rings
Rarity: Rare
Dusk Whorl
Synthesised Gold Ring
--------
Quality (Caster Modifiers): +20% (augmented)
--------
Requirements:
Level: 65
--------
Item Level: 100
--------
Your Chilling Towers freeze enemies for 0.2 seconds while they are affected by chilling beams (enchant)
--------
+1 to Maximum Frenzy Charges (implicit)
+1 to Maximum Power Charges (implicit)
7% increased Spell Damage per Power Charge (implicit)
--------
+55 to Intelligence
19% increased Cast Speed
+25% to Global Critical Strike Multiplier
+47 to maximum Energy Shield
+55 to maximum Mana
7% reduced Mana Cost of Skills
Non-Channelling Skills have -7 to Total Mana Cost (crafted)
--------
Synthesised Item
`
    }
];

/**
 * 取得所有預設物品資料（根據當前語言）
 * @returns {Array<Object>} 物品資料陣列的副本
 */
function getDefaultItems() {
    // 檢查是否有語言管理器並取得當前語言
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh-TW';
    
    // 根據語言返回對應的物品陣列
    if (currentLang === 'en-US') {
        return [...defaultItems];
    } else {
        return [...defaultItems_ch];
    }
}

/**
 * 根據分類取得物品（支援多語言）
 * @param {string} category - 物品分類
 * @returns {Array<Object>} 指定分類的物品陣列
 */
function getItemsByCategory(category) {
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh-TW';
    const items = currentLang === 'en-US' ? defaultItems : defaultItems_ch;
    return items.filter(item => item.category === category);
}

/**
 * 根據 ID 取得物品（支援多語言）
 * @param {number} id - 物品 ID
 * @returns {Object|null} 物品物件或 null
 */
function getItemById(id) {
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh-TW';
    const items = currentLang === 'en-US' ? defaultItems : defaultItems_ch;
    return items.find(item => item.id === id) || null;
} 