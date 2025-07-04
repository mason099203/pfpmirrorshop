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
        league: "Mercenaries",
        name: "Brimstone Knell Opal Sceptre",
        mirrorFee: 0,
        category: "weapon",
        type: "RF / Ignite build / CWS",
        tags: ["Hunter Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Brimstone Knell Opal Sceptre.webp",
        socketimageUrl: "./image/3sL.webp",
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
    },{
        id: 2,
        league: "Mercenaries",
        name: "Honour Ward Giantslayer Helmet",
        mirrorFee: 0,
        category: "armor",
        type: "Warcry cri /Volcanic Fissure of Snaking",
        tags: ["Searing Exarch Item","Eater of Worlds Item","Fractured Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Honour Ward Giantslayer Helmet.webp",
        socketimageUrl: "./image/4s.webp",
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
    },{
        id: 3,
        league: "Mercenaries",
        name: "Torment Shell Sacred Chainmail",
        mirrorFee: 20,
        category: "armor",
        type: "Str Stacking Armour/Energy Enjoyer",
        tags: ["Searing Exarch Item","Eater of Worlds Item","Fractured Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Torment Shell Sacred Chainmail.webp",
        socketimageUrl: "./image/6s.webp",
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
    },{
        id: 4,
        league: "Mercenaries",
        name: "Vengeance Sanctuary Necrotic Armour",
        mirrorFee: 20,
        category: "armor",
        type: "Int Stacking Trickster",
        tags: ["Searing Exarch Item","Eater of Worlds Item","Fractured Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Vengeance Sanctuary Necrotic Armour.webp",
        socketimageUrl: "./image/6s.webp",
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
    },{
        id: 5,
        league: "Mercenaries",
        name: "Victory Cowl Archdemon Crown",
        mirrorFee: 0,
        category: "armor",
        type: "Penance Brand / Blade vortex",
        tags: ["Shaper Item","Elder Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Victory Cowl Archdemon Crown.webp",
        socketimageUrl: "./image/6s.webp",
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
    },{
        id: 6,
        league: "Mercenaries",
        name: "Miracle Gutter Synthesised Reaver Sword",
        mirrorFee: 60,
        category: "weapon",
        type: "Str Stacking Original Sin Molten Strike",
        tags: ["Synthesised Item","Split"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Miracle Gutter Synthesised Reaver Sword.webp",
        socketimageUrl: "./image/6s.webp",
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
    },{
        id: 7,
        name: "Dusk Whorl Synthesised Gold Ring",
        mirrorFee: 20,
        category: "accessory",
        type: "+1 frenzy +1 power / charge build / Int stacking Trickster",
        tags: ["Synthesised Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Dusk Whorl Synthesised Gold Ring.webp",
        socketimageUrl: "./image/ns.webp",
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
    },{
        id: 8,
        league: "Mercenaries",
        name: "Rapture Song Synthesised Spine Bow",
        mirrorFee: "60",
        category: "weapon",
        type: "Phy Bow / Tornado Shot (PDPS: 1464)",
        tags: ["Synthesised Item"],   
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Rapture Song Synthesised Spine Bow.webp",
        socketimageUrl: "./image/6s.webp",
        clip: "https://www.twitch.tv/poogf01/clip/GenerousHilariousRaccoonOSsloth-hT-lWR7B1GrbHr-B",
        itemData: `Item Class: Bows
Rarity: Rare
Miracle Horn
Synthesised Spine Bow
--------
Bow
Quality: +30% (augmented)
Physical Damage: 507-1139 (augmented)
Critical Strike Chance: 8.58% (augmented)
Attacks per Second: 1.78 (augmented)
--------
Requirements:
Level: 68
Dex: 212
--------
Sockets: W-W-W-W-W-W 
--------
Item Level: 86
--------
8% increased Explicit Physical Modifier magnitudes (enchant)
--------
25% increased Physical Damage (implicit)
Adds 9 to 13 Physical Damage (implicit)
8% increased Attack Speed (implicit)
Item sells for much more to vendors (implicit)
--------
+28 to Strength and Intelligence
277% increased Physical Damage
Adds 50 to 90 Physical Damage
19% increased Attack Speed
32% increased Critical Strike Chance
Bow Attacks fire 2 additional Arrows
+199 to Accuracy Rating
--------
Split
--------
Synthesised Item
`
    },{
        id: 9,
        league: "Mercenaries",
        name: "Loath Shroud Sacrificial Garb",
        mirrorFee: "60",
        category: "armor",
        type: " Explode /Increased effect of Non-Curse",
        tags: ["Crusader Item","Redeemer Item"],   
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Loath Shroud Sacrificial Garb.webp",
        socketimageUrl: "./image/6s.webp",
        clip: "https://www.twitch.tv/poogf01/clip/PlayfulSuccessfulSamosaLitty-h3x1gp5sxjFONc8o",
        itemData: `Item Class: Body Armours
Rarity: Rare
Loath Shroud
Sacrificial Garb
--------
Quality: +20% (augmented)
Armour: 454 (augmented)
Evasion Rating: 454 (augmented)
Energy Shield: 92 (augmented)
--------
Requirements:
Level: 76
Str: 66
Dex: 66
Int: 66
--------
Sockets: G-G-R-B-G-R 
--------
Item Level: 94
--------
15% increased Explicit Life Modifier magnitudes (enchant)
50% reduced Explicit Life Modifier magnitudes (enchant)
--------
+1 to Level of all Vaal Skill Gems (implicit)
--------
+22% chance to Suppress Spell Damage
+208 to maximum Life
12% increased Area of Effect
20% of Physical Damage from Hits taken as Cold Damage
Enemies you Kill have a 35% chance to Explode, dealing a tenth of their maximum Life as Physical Damage
30% increased effect of Non-Curse Auras from your Skills
11% of Cold Damage taken as Life
3% increased Physical Damage Reduction (crafted)
--------
Split
--------
Crusader Item
Redeemer Item

`
    },{
        id: 10,
        league: "Mercenaries",
        name: "Rage Saw Anarchic Spiritblade",
        mirrorFee: "60",
        category: "weapon",
        type: "Flicker Strike / 12L melee skill",
        tags: ["new","Shaper Item","Elder Item"],   
        owner: "Baned_BlueBin",
        contact: "福爾摩匹",
        imageUrl: "./image/Rage Saw Anarchic Spiritblade.webp",
        socketimageUrl: "./image/3sL.webp",
        itemData: `Item Class: One Hand Swords
Rarity: Rare
Rage Saw
Anarchic Spiritblade
--------
One Handed Sword
Quality: +20% (augmented)
Physical Damage: 79-146 (augmented)
Critical Strike Chance: 8.38% (augmented)
Attacks per Second: 1.97 (augmented)
Weapon Range: 1.1 metres
--------
Requirements:
Level: 70
Str: 121
Dex: 121
--------
Sockets: W-W-W 
--------
Item Level: 86
--------
Quality does not increase Physical Damage (enchant)
1% increased Attack Speed per 8% Quality (enchant)
--------
100% of Physical Damage from Hits with this Weapon is Converted to a random Element (implicit)
--------
Socketed Gems are Supported by Level 20 Increased Critical Strikes
Socketed Gems are Supported by Level 20 Ruthless
Socketed Gems are Supported by Level 20 Faster Attacks
Socketed Gems are supported by Level 20 Elemental Damage with Attacks
Socketed Skills deal 40% more Attack Damage
Socketed Movement Skills Cost no Mana
131% increased Physical Damage
21% increased Attack Speed
29% increased Critical Strike Chance
37% increased Elemental Damage with Attack Skills
--------
Shaper Item
Elder Item
`
    },{
        id: 11,
        league: "Mercenaries",
        name: "Honour Coat Twilight Regalia",
        mirrorFee: "20",
        category: "armor",
        type: "Armour stack / Energy Shield stack",
        tags: ["new","Searing Exarch Item","Eater of Worlds Item"],   
        owner: "Baned_BlueBin",
        contact: "福爾摩匹",
        imageUrl: "./image/Honour Coat Twilight Regalia.webp",
        socketimageUrl: "./image/6s.webp",
        itemData: `Item Class: Body Armours
Rarity: Rare
Honour Coat
Twilight Regalia
--------
Quality: +30% (augmented)
Energy Shield: 1162 (augmented)
--------
Requirements:
Level: 84
Int: 293
--------
Sockets: W-W-W-W-W-W 
--------
Item Level: 91
--------
8% increased Explicit Defence Modifier magnitudes (enchant)
--------
Grace has 30% increased Aura Effect (implicit)
20% increased effect of Non-Curse Auras from your Skills (implicit)
--------
Armour is increased by Overcapped Fire Resistance (fractured)
+58 to Intelligence
+108 to maximum Energy Shield
118% increased Energy Shield
+48% to Fire Resistance
+7 to maximum Fortification while Focused (crafted)
--------
Split
Searing Exarch Item
Eater of Worlds Item
--------
Fractured Item

`
    },{
        id: 12,
        league: "Mercenaries",
        name: "Dread Jack Necrotic Armour",
        mirrorFee: "20",
        category: "armor",
        type: "bow / Tornado Shot / Lightning Arrow",
        tags: ["new","Searing Exarch Item","Eater of Worlds Item"],   
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Vengeance Sanctuary Necrotic Armour.webp",
        socketimageUrl: "./image/6s.webp",
        itemData: `Item Class: Body Armours
Rarity: Rare
Dread Jack
Necrotic Armour
--------
Quality: +30% (augmented)
Evasion Rating: 2409 (augmented)
Energy Shield: 484 (augmented)
--------
Requirements:
Level: 84
Dex: 173
Int: 173
--------
Sockets: W-W-W-W-W-W 
--------
Item Level: 88
--------
12% increased Explicit Defence Modifier magnitudes (enchant)
50% reduced Explicit Resistance Modifier magnitudes (enchant)
--------
Hatred has 36% increased Aura Effect (implicit)
16% increased effect of Non-Curse Auras from your Skills (implicit)
--------
Adds 1 to 5 Lightning Damage for each Shocked Enemy you've Killed Recently (fractured)
+22% chance to Suppress Spell Damage
123% increased Evasion and Energy Shield
35% chance to Avoid Elemental Ailments
30% chance to Avoid being Stunned
10% increased Mana Reservation Efficiency of Skills
+25 to Dexterity and Intelligence (crafted)
--------
Split
Searing Exarch Item
Eater of Worlds Item
--------
Fractured Item
`
    },{
        id: 13,
        league: "Mercenaries",
        name: "Cataclysm Fist Warlock Gloves",
        mirrorFee: "Exploded 💣",
        category: "armor",
        type: "9Link spark gloves",
        tags: ["new","Shaper Item","Elder Item"],   
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Warlock Gloves.webp",
        socketimageUrl: "./image/bom.png",
        clip: "https://www.twitch.tv/poogf01/clip/UglyAdorableKoalaTheRinger-VBnRb4x5YIXB0rJl",
        itemData: `Item Class: Gloves
Rarity: Rare
Cataclysm Fist
Warlock Gloves
--------
Quality: +30% (augmented)
Energy Shield: 188 (augmented)
--------
Requirements:
Level: 84
Int: 144
--------
Sockets: W-W-W-W 
--------
Item Level: 94
--------
Socketed Gems are Supported by Level 20 Slower Projectiles
Socketed Gems are supported by Level 25 Faster Projectiles
Socketed Gems are Supported by Level 25 Faster Casting
Socketed Gems have +3.5% Critical Strike Chance
Socketed Spells have +90% to Critical Strike Multiplier
14% increased Cast Speed
30% increased Projectile Speed
25% increased Projectile Damage
74% increased Energy Shield (crafted)
--------
Split
--------
Shaper Item
Elder Item
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
        league: "Mercenaries",
        name: "硫石 喪儀 靈石權杖",
        mirrorFee: 0,
        category: "weapon",
        type: "正義之火 / 點燃流派 / 暈眩時施放",
        tags: ["Hunter Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Brimstone Knell Opal Sceptre.webp",
        socketimageUrl: "./image/3sL.webp",
        itemData: `Item Class: Sceptres
Rarity: Rare
硫石 喪儀 
靈石權杖
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
品質不會增加物理傷害 (enchant)
每增加2%品質，增加1%元素傷害 (enchant)
--------
增加40%元素傷害 (implicit)
--------
+26%持續傷害加成
+38%火傷持續傷害加成
全部法術技能等級+1
全部火焰法術技能等級+1
惡意增加40%光環效果
增加60%火焰傷害 (crafted)
20% 機率使用火焰傷害擊中造成點燃效果 (crafted)
--------
Split
--------
Hunter Item
`
    },
    {
        id: 2,
        league: "Mercenaries",
        name: "榮耀 真實之衛 巨人殺手頭盔",
        mirrorFee: 0,
        category: "armor",
        type: "戰吼/炎火脈動．蜿蜒",
        tags: ["Searing Exarch Item","Eater of Worlds Item","Fractured Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Honour Ward Giantslayer Helmet.webp",
        socketimageUrl: "./image/4s.webp",
        itemData: `Item Class: Helmets
Rarity: Rare
榮耀 真實之衛
巨人殺手頭盔
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
技能效果魔力保留效用提高12% (implicit)
減少26%攻擊的魔力消耗 (implicit)
--------
每有一個戰吼竭盡技能，其+3%暴擊率 (fractured)
插槽中範圍寶石等級+2
+58 智慧
+536 點命中
增加100%護甲
+143 最大生命
增加9%範圍效果
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
        league: "Mercenaries",
        name: "責難 堅殼 神聖鎖甲",
        mirrorFee: 20,
        category: "armor",
        type: "力量護甲人/能量護盾",
        tags: ["Searing Exarch Item","Eater of Worlds Item","Fractured Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Torment Shell Sacred Chainmail.webp",
        socketimageUrl: "./image/6s.webp",
        itemData: `Item Class: Body Armours
Rarity: Rare
責難 堅殼 
神聖鎖甲
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
增加 12% 變動防禦詞綴的大小 (enchant)
減少 50% 變動抗性詞綴的大小 (enchant)
--------
每 180 點力量，承受 1% 更少傷害 (implicit)
增加 26% 極地裝甲增益效果 (implicit)
--------
增加56%全域防禦 (fractured)
+52 力量
每個耐力球使你承受的暴擊傷害減少 10% 
+417 點護甲
增加 123% 護甲與能量護盾
+84 最大能量護盾
8% 額外物理傷害減免
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
        league: "Mercenaries",
        name: "復仇 殿堂 亡者護甲",
        mirrorFee: 20,
        category: "armor",
        type: "千智 詐欺師",
        tags: ["Searing Exarch Item","Eater of Worlds Item","Fractured Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Vengeance Sanctuary Necrotic Armour.webp",
        socketimageUrl: "./image/6s.webp",
        itemData: `Item Class: Body Armours
Rarity: Rare
復仇 殿堂 
亡者護甲
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
增加 12% 變動防禦詞綴的大小 (enchant)
減少 50% 變動抗性詞綴的大小 (enchant)
--------
承受 12% 的擊中物理傷害視為混沌傷害 (implicit)
+2% 最大全部抗性 (implicit)
--------
增加 56% 全域防禦 (fractured)
+22% 壓抑法術傷害率
+58 智慧
+418 點閃避值 
增加 123% 閃避與能量護盾 
+86 最大能量護盾 
增加 6% 所有屬性 (crafted)
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
        league: "Mercenaries",
        name: "勝利 護冠 罪魔邪冠",
        mirrorFee: 0,
        category: "armor",
        type: "贖罪烙印 / Bv 飛刃風暴",
        tags: ["Shaper Item","Elder Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Victory Cowl Archdemon Crown.webp",
        socketimageUrl: "./image/4s.webp",
        itemData: `Item Class: Helmets
Rarity: Rare
勝利 護冠 
罪魔邪冠
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
此物品插槽中輔助寶石等級 -2 (implicit)
此物品插槽中技能寶石等級 +2 (implicit)
--------
插槽中範圍效果寶石等級 +2
插槽中寶石被等級 25 的集中效應輔助
插槽中寶石被等級 25 的急凍輔助
插槽中的寶石造成 30% 更多元素傷害
插槽中的法術 +4% 暴擊率
增加 10% 範圍效果
增加 25% 範圍傷害
增加 20% 冰冷異常狀態效果
+45 最大能量護盾 (crafted)
--------
Split
--------
Shaper Item
Elder Item

`
    },
    {
        id: 6,
        league: "Mercenaries",
        name: "奇蹟 剖刃 追憶之 殘暴巨劍",
        mirrorFee: 60,
        category: "weapon",
        type: "力量 原罪 熔岩之擊",
        tags: ["Synthesised Item","Split"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Miracle Gutter Synthesised Reaver Sword.webp",
        socketimageUrl: "./image/6s.webp",
        itemData: `Item Class: Two Hand Swords
Rarity: Rare
奇蹟 剖刃 
追憶之 殘暴巨劍
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
品質不會增加物理傷害 (enchant)
每 8% 品質增加 1% 攻擊速度 (enchant)
--------
增加 8% 攻擊速度 (implicit)
+1 最大耐力球 (implicit)
使用此武器攻擊，每 10 點力量附加 3 至 5 火焰傷害 (implicit)
物品販售給商人更有價值 (implicit)
--------
+55 力量
增加 144% 法術傷害
附加 34 至 636 閃電傷害 
增加 27% 攻擊速度 
使用此武器攻擊穿透 16% 混沌抗性
專注時有 30% 機率造成 2 倍傷害 (crafted)
--------
Split
--------
Synthesised Item
`
    },
    {
        id: 7,
        league: "Mercenaries",
        name: "暮色 螺旋 追憶之 金光戒指",
        mirrorFee: 20,
        category: "accessory",
        type: "+1 狂怒球 +1 暴擊球 / 充能流派 / 千智 詐欺師",
        tags: ["Synthesised Item"],
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Dusk Whorl Synthesised Gold Ring.webp",
        socketimageUrl: "./image/ns.webp",
        itemData: `Item Class: Rings
Rarity: Rare
暮色 螺旋 
追憶之 金光戒指
--------
Quality (法術詞墜): +20% (augmented)
--------
Requirements:
Level: 65
--------
Item Level: 100
--------
當敵人被冰緩射線影響時，你的冰緩塔冰凍敵人 0.2 秒(enchant)
--------
+1 最大狂怒球 (implicit)
+1 最大暴擊球 (implicit)
每個暴擊球增加 7% 法術傷害 (implicit)
--------
+55 智慧
增加 19% 施放速度
+25% 全域暴擊加成
+47 最大能量護盾
+55 最大魔力
減少 7% 技能魔力消耗
非引導施放技能-7 總魔力消耗 (crafted)
--------
Synthesised Item
`
    },{
        id: 8,
        league: "Mercenaries",
        name: "奇蹟 戰角 追憶之 脊弓",
        mirrorFee: "60",
        category: "weapon",
        type: "物理弓 / 龍捲射擊 (PDPS: 1464)",
        tags: ["Synthesised Item"],   
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Rapture Song Synthesised Spine Bow.webp",
        socketimageUrl: "./image/6s.webp",
        clip: "https://www.twitch.tv/poogf01/clip/GenerousHilariousRaccoonOSsloth-hT-lWR7B1GrbHr-B",
        itemData: `Item Class: Bows
Rarity: Rare
奇蹟 戰角 
追憶之 脊弓
--------
Bow
Quality: +30% (augmented)
Physical Damage: 507-1139 (augmented)
Critical Strike Chance: 8.58% (augmented)
Attacks per Second: 1.78 (augmented)
--------
Requirements:
Level: 68
Dex: 212
--------
Sockets: W-W-W-W-W-W 
--------
Item Level: 86
--------
增加 8% 變動物理詞綴的大小 (enchant)
--------
增加 25% 物理傷害 (implicit)
附加 9 至 13 物理傷害 (implicit)
增加 8% 攻擊速度 (implicit)
物品販售給商人更有價值(implicit)
--------
+28 力量和智慧
增加 277% 物理傷害
附加 50 至 90 物理傷害
增加 19% 攻擊速度
增加 32% 暴擊率
弓攻擊發射 2 個額外箭矢
+199 命中值
--------
Split
--------
Synthesised Item
`
    },{
        id: 9,
        league: "Mercenaries",
        name: "惡行 幽影 祭禮束衣",
        mirrorFee: "60",
        category: "armor",
        type: "爆炸衣 非詛咒效果",
        tags: ["Crusader Item","Redeemer Item"],   
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Loath Shroud Sacrificial Garb.webp",
        socketimageUrl: "./image/6s.webp",
        clip: "https://www.twitch.tv/poogf01/clip/PlayfulSuccessfulSamosaLitty-h3x1gp5sxjFONc8o",
        itemData: `Item Class: Body Armours
Rarity: Rare
Loath Shroud
Sacrificial Garb
--------
Quality: +20% (augmented)
Armour: 454 (augmented)
Evasion Rating: 454 (augmented)
Energy Shield: 92 (augmented)
--------
Requirements:
Level: 76
Str: 66
Dex: 66
Int: 66
--------
Sockets: W-W-W-W-W-W 
--------
Item Level: 94
--------
增加 15% 變動生命詞綴的大小 (enchant)
減少 50% 變動抗性詞綴的大小 (enchant)
--------
+1 全部瓦爾技能寶石的等級 (implicit)
--------
+22% 壓抑法術傷害率
+208 最大生命
增加 12% 範圍效果
承受 20% 的擊中物理傷害視為冰冷傷害
你擊殺的敵人有 35% 機率爆炸，造成他們最大生命十分之一的物理傷害
增加 30% 你技能的非詛咒光環效果
11% 承受的冰冷傷害補償為生命
3% 額外物理傷害減免 (crafted)
--------
Split
--------
Crusader Item
Redeemer Item

`
    },{
        id: 10,
        league: "Mercenaries",
        name: "Rage Saw Anarchic Spiritblade",
        mirrorFee: "60",
        category: "weapon",
        type: "閃現打擊 / 12L 近戰技能",
        tags: ["new","Shaper Item","Elder Item"],   
        owner: "Baned_BlueBin",
        contact: "福爾摩匹",
        imageUrl: "./image/Rage Saw Anarchic Spiritblade.webp",
        socketimageUrl: "./image/3sL.webp",
        itemData: `Item Class: One Hand Swords
Rarity: Rare
Rage Saw
Anarchic Spiritblade
--------
One Handed Sword
Quality: +20% (augmented)
Physical Damage: 79-146 (augmented)
Critical Strike Chance: 8.38% (augmented)
Attacks per Second: 1.97 (augmented)
Weapon Range: 1.1 metres
--------
Requirements:
Level: 70
Str: 121
Dex: 121
--------
Sockets: W-W-W 
--------
Item Level: 86
--------
品質不會增加物理傷害 (enchant)
每 8% 品質增加 1% 攻擊速度 (enchant)
--------
使用此武器攻擊時 100% 物理傷害轉化為隨機元素傷害 (implicit)
--------
插槽中寶石被等級 20 的增加暴擊率輔助
插槽中寶石被等級 20 的殘暴輔助
插槽中寶石被等級 20 的快速攻擊輔助
此物品上寶石受到等級 20 的元素傷害攻擊輔助
插槽中的技能造成 40% 更多攻擊傷害
插槽中位移技能不消耗魔力
增加 131% 物理傷害
增加 21% 攻擊速度
增加 29% 暴擊率
攻擊技能增加 37% 元素傷害
--------
Shaper Item
Elder Item
`
    },{
        id: 11,
        league: "Mercenaries",
        name: "榮耀 神袍 暮光法衣",
        mirrorFee: "20",
        category: "armor",
        type: "護甲人 ",
        tags: ["Searing Exarch Item","Eater of Worlds Item"],   
        owner: "Baned_BlueBin",
        contact: "福爾摩匹",
        imageUrl: "./image/Honour Coat Twilight Regalia.webp",
        socketimageUrl: "./image/6s.webp",
        itemData: `Item Class: Body Armours
Rarity: Rare
Honour Coat
Twilight Regalia
--------
Quality: +30% (augmented)
Energy Shield: 1162 (augmented)
--------
Requirements:
Level: 84
Int: 293
--------
Sockets: W-W-W-W-W-W 
--------
Item Level: 91
--------
增加 8% 變動防禦詞綴的大小 (enchant)
--------
優雅增加 30% 光環效果 (implicit)
增加 20% 你技能的非詛咒光環效果 (implicit)
--------
護甲被超過上限的火焰抗性增加 (fractured)
+58 智慧
+108 最大能量護盾
增加 118% 能量護盾
+48% 火焰抗性
專注時 +7 最大護體 (crafted)
--------
Split
Searing Exarch Item
Eater of Worlds Item
--------
Fractured Item

`
    },{
        id: 12,
        league: "Mercenaries",
        name: "恐慌 保身 亡者護甲",
        mirrorFee: "20",
        category: "armor",
        type: "弓 / 龍捲射擊 / 閃電箭矢",
        tags: ["new","Searing Exarch Item","Eater of Worlds Item"],   
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Vengeance Sanctuary Necrotic Armour.webp",
        socketimageUrl: "./image/6s.webp",
        itemData: `Item Class: Body Armours
Rarity: Rare
恐慌 保身 
亡者護甲
--------
Quality: +30% (augmented)
Evasion Rating: 2409 (augmented)
Energy Shield: 484 (augmented)
--------
Requirements:
Level: 84
Dex: 173
Int: 173
--------
Sockets: W-W-W-W-W-W 
--------
Item Level: 88
--------
增加 12% 變動防禦詞綴的大小 (enchant)
減少 50% 變動抗性詞綴的大小 (enchant)
--------
憎恨增加 36% 光環效果 (implicit)
增加 16% 你技能的非詛咒光環效果 (implicit)
--------
近期內每擊殺一個感電怪物獲得 1 至 5 附加閃電傷害 (fractured)
+22% 壓抑法術傷害率
增加 123% 閃避與能量護盾
35% 機率避免元素異常狀態
30% 機率避免被暈眩
增加 10% 技能的魔力保留效用
+25 敏捷和智慧 (crafted)
--------
Split
Searing Exarch Item
Eater of Worlds Item
--------
Fractured Item
`
    },{
        id: 13,
        league: "Mercenaries",
        name: "Cataclysm Fist Warlock Gloves",
        mirrorFee: "爆炸 💣",
        category: "armor",
        type: "9L 電球手套",
        tags: ["new","Shaper Item","Elder Item"],   
        owner: "福爾摩匹",
        contact: "福爾摩匹",
        imageUrl: "./image/Warlock Gloves.webp",
        socketimageUrl: "./image/bom.png",
        clip: "https://www.twitch.tv/poogf01/clip/UglyAdorableKoalaTheRinger-VBnRb4x5YIXB0rJl",
        itemData: `Item Class: Gloves
Rarity: Rare
Cataclysm Fist
Warlock Gloves
--------
Quality: +30% (augmented)
Energy Shield: 188 (augmented)
--------
Requirements:
Level: 84
Int: 144
--------
Sockets: W-W-W-W 
--------
Item Level: 94
--------
插槽中寶石被等級 20 的投射物減速輔助
插槽中寶石被等級 25 的快速投射輔助
插槽中寶石被等級 25 的快速施放輔助
此物品插槽中寶石有 +3.5% 暴擊率
插槽中的法術 +90% 暴擊加成
增加 14% 施放速度
增加 30% 投射物速度
增加 25% 投射物傷害
R3增加 74% 能量護盾 (crafted)
--------
Split
--------
Shaper Item
Elder Item
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