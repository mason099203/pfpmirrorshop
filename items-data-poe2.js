/**
 * POE 2 物品資料模組
 * 包含所有適合 Path of Exile 2 的物品資料定義
 */

/**
 * POE 2 物品資料陣列（英文版）
 * @type {Array<Object>}
 */
const poe2Items = [    
{
    id: 1,
    version: "poe2",
    league: "Mercenaries",
    name: "Honour Coat Twilight Regalia",
    mirrorFee: "20",
    category: "armor",
    type: "Armour stack / Energy Shield stack",
    tags: ["Searing Exarch Item","Eater of Worlds Item"],   
    owner: "Baned_BlueBin",
    contact: "十六鏡流派打得過123凋落嗎 ",
    imageUrl: "./image/BreachRing.webp",
    socketimageUrl: "./image/3sL.webp",
    itemData: `Item Class: Rings
Rarity: Rare
Hate Twirl
Breach Ring
--------
Quality (Mana Modifiers): +50% (augmented)
--------
Requirements:
Level: 61
--------
Item Level: 82
--------
Maximum Quality is 50% (implicit)
--------
27% increased Lightning Damage
+267 to maximum Mana
49% increased Rarity of Items found
24% increased Cast Speed
+33 to Intelligence`
}
];

/**
 * POE 2 物品資料陣列（中文版）
 * @type {Array<Object>}
 */
const poe2Items_ch = [
];

/**
 * 取得所有 POE 2 物品資料（根據當前語言）
 * @returns {Array<Object>} POE 2 物品資料陣列的副本
 */
function getPoe2Items() {
    // 檢查是否有語言管理器並取得當前語言
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh-TW';
    
    // 根據語言返回對應的物品陣列
    if (currentLang === 'en-US') {
        return [...poe2Items];
    } else {
        return [...poe2Items_ch];
    }
}

/**
 * 根據分類取得 POE 2 物品（支援多語言）
 * @param {string} category - 物品分類
 * @returns {Array<Object>} 指定分類的 POE 2 物品陣列
 */
function getPoe2ItemsByCategory(category) {
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh-TW';
    const items = currentLang === 'en-US' ? poe2Items : poe2Items_ch;
    return items.filter(item => item.category === category);
}

/**
 * 根據 ID 取得 POE 2 物品（支援多語言）
 * @param {number} id - 物品 ID
 * @returns {Object|null} POE 2 物品物件或 null
 */
function getPoe2ItemById(id) {
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh-TW';
    const items = currentLang === 'en-US' ? poe2Items : poe2Items_ch;
    return items.find(item => item.id === id) || null;
}
