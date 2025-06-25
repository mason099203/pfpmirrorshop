/**
 * SETTLERS SHOP JAVASCRIPT 功能模組
 * 處理所有網頁互動功能
 */

/**
 * 儲存所有物品的全域陣列
 * @type {Array<Object>}
 */
let allItems = [];

/**
 * 當前顯示的物品陣列
 * @type {Array<Object>}
 */
let filteredItems = [];

/**
 * 頁面載入完成後初始化
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeItems();
    updateItemCount();
    setupEventListeners();
});

/**
 * 初始化預設物品資料
 */
function initializeItems() {
    allItems = [
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
        }
        ,
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
            id: 5,
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
            id: 6,
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
// ,
// {
// id: 4,
// name: "Torment Shell Sacred Chainmail",
// mirrorFee: 20,
// category: "armor",
// type: "",
// tags: ["new"],
// owner: "福爾摩匹",
// contact: "福爾摩匹",
// itemData: `Item Class: Body Armours
// Rarity: Rare
// Torment Shell
// Sacred Chainmail
// `
//         }
    ];
    
    // 按 ID 由大到小排序，讓 ID 最大的在第一個，ID 1 在最後
    allItems.sort((a, b) => b.id - a.id);
    filteredItems = [...allItems];
    renderItems();
}

/**
 * 設置事件監聽器
 */
function setupEventListeners() {
    // 表單提交事件
    const postForm = document.getElementById('post-item-form');
    if (postForm) {
        postForm.addEventListener('submit', handleFormSubmit);
    }

    // 動作按鈕事件委派
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('pob-btn')) {
            handleCopyPoB(e);
        } else if (e.target.classList.contains('whisper-btn')) {
            handleWhisper(e);
        }
    });
}

/**
 * 顯示指定的區段
 * @param {string} sectionName - 區段名稱
 */
function showSection(sectionName) {
    // 隱藏所有區段
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 移除所有導航按鈕的 active 類別
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // 顯示選定的區段
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 為對應的導航按鈕添加 active 類別
    const activeBtn = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

/**
 * 根據分類篩選物品
 */
function filterItems() {
    const categorySelect = document.getElementById('category-select');
    const selectedCategory = categorySelect.value;

    if (selectedCategory === '') {
        filteredItems = [...allItems];
    } else {
        filteredItems = allItems.filter(item => item.category === selectedCategory);
    }

    renderItems();
    updateItemCount();
}

/**
 * 根據選定的方式分組物品 (由大到小排序)
 */
function groupItems() {
    const groupBySelect = document.getElementById('group-by');
    const groupBy = groupBySelect.value;

    switch (groupBy) {
        case 'price':
            // 價格由高到低排序
            filteredItems.sort((a, b) => b.mirrorFee - a.mirrorFee);
            break;
        case 'owner':
            // 擁有者名稱由 Z 到 A 排序
            filteredItems.sort((a, b) => {
                const ownerA = a.owner || a.contact;
                const ownerB = b.owner || b.contact;
                return ownerB.localeCompare(ownerA);
            });
            break;
        case 'type':
        default:
            // 類型由 Z 到 A 排序
            filteredItems.sort((a, b) => b.category.localeCompare(a.category));
            break;
    }

    renderItems();
}

/**
 * 渲染物品到網格中
 */
function renderItems() {
    const itemsGrid = document.getElementById('items-grid');
    if (!itemsGrid) return;

    itemsGrid.innerHTML = '';

    filteredItems.forEach(item => {
        const itemCard = createItemCard(item);
        itemsGrid.appendChild(itemCard);
    });
}

/**
 * 創建物品卡片元素
 * @param {Object} item - 物品資料
 * @returns {HTMLElement} 物品卡片元素
 */
function createItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.setAttribute('data-category', item.category);

    const tagsHtml = item.tags.map(tag => 
        `<span class="tag ${tag}">${getTagDisplayName(tag)}</span>`
    ).join('');

    const ownerInfo = item.owner 
        ? `<div>擁有者: <span class="owner">${item.owner}</span></div>`
        : '';

    const itemDetailsBtn = item.itemData ? 
        `<button class="action-btn item-details-btn" onclick="toggleItemDetails(this)">物品詳情</button>` : '';

    const itemDetailsSection = item.itemData ? 
        `<div class="item-details" style="display: none;">
            <div class="poe-item-display">
                ${itemParser.generateItemHtml(itemParser.parseItemData(item.itemData))}
            </div>
        </div>` : '';

    const itemImageUrl = getItemImageUrl(item.name);
    const itemTooltip = item.itemData ? 
        `<div class="item-tooltip">${itemParser.generateItemHtml(itemParser.parseItemData(item.itemData))}</div>` : '';

    card.innerHTML = `
        <div class="item-header">
            
            <div class="item-info">
                <h3 class="item-name">${item.name}</h3>
                <div class="mirror-fee">FEE: <span class="fee-amount">${item.mirrorFee}</span> DIVINE</div>
                <div class="item-type">${item.type}</div>
            </div>
        </div>
        <div class="item-tags">
            <div class="tags-row">${tagsHtml}</div>
            ${itemDetailsSection}
        </div>
                 <div class="item-image-container" ${item.itemData ? 'data-tooltip="true"' : ''}>
             <img src="${itemImageUrl}" class="item-image" alt="${item.name}">
             ${itemTooltip}
         </div>
        <div class="owner-info">
            ${ownerInfo}
            <div>聯絡: <span class="contact">${item.contact}</span></div>
        </div>
        <div class="item-actions">
            <button class="action-btn pob-btn" data-pob="${item.itemData}"><i class="bi bi-copy"></i>copy POB</button>
            <button class="action-btn whisper-btn" data-contact="${item.contact}" data-item-name="${item.name}"><i class="bi bi-chat-left-dots"></i>whisper</button>
        </div>
    `;

    return card;
}

/**
 * 取得標籤的顯示名稱
 * @param {string} tag - 標籤值
 * @returns {string} 顯示名稱
 */
function getTagDisplayName(tag) {
    const tagNames = {
        'new': '新物品',
        'Searing Exarch Item': '灼熱總督',
        'Eater of Worlds Item': '吞噬者',
        'Shaper Item': '塑者',
        'Elder Item': '尊師',
        'Redeemer Item': '救贖者',
        'Warlord Item': '總督軍',
        'Hunter Item': '狩獵者',
        'Crusader Item': '聖戰軍王',
        'Synthesised Item': '追憶',
        'Fractured Item': '破裂',
        'Split': '分化'

    };
    return tagNames[tag] || tag;
}

/**
 * 根據物品名稱獲取圖片URL
 * @param {string} itemName - 物品名稱
 * @returns {string} 圖片URL
 */
function getItemImageUrl(itemName) {
    // POE物品圖片映射表 - 使用本地圖片
    const itemImages = {
        // 武器類
        'Brimstone Knell Opal Sceptre': './image/Brimstone Knell Opal Sceptre.png',
        'Honour Ward Giantslayer Helmet': './image/Honour Ward Giantslayer Helmet.png',
        'Torment Shell Sacred Chainmail': './image/Torment Shell Sacred Chainmail.png',
        'Vengeance Sanctuary Necrotic Armour': './image/Vengeance Sanctuary Necrotic Armour.png',
        'Victory Cowl Archdemon Crown': './image/Victory Cowl Archdemon Crown.png',
        'Miracle Gutter Synthesised Reaver Sword': './image/Miracle Gutter Synthesised Reaver Sword.png',
        'Dusk Whorl Synthesised Gold Ring': './image/Dusk Whorl Synthesised Gold Ring.png'
    };

    // 如果找到對應的圖片，返回圖片URL，否則返回預設圖片
    return itemImages[itemName] || `https://via.placeholder.com/64x64/2a2a2a/d4af37?text=${encodeURIComponent(itemName.charAt(0))}`;
}

/**
 * 更新物品數量顯示
 */
function updateItemCount() {
    const itemCountElement = document.getElementById('item-count');
    if (itemCountElement) {
        itemCountElement.textContent = filteredItems.length;
    }
}

/**
 * 處理表單提交
 * @param {Event} e - 提交事件
 */
function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const tags = formData.getAll('tags');

    // 創建新物品物件
    const newItem = {
        id: allItems.length + 1,
        name: formData.get('itemName'),
        mirrorFee: parseInt(formData.get('mirrorFee')),
        category: formData.get('category'),
        type: formData.get('description') || '自定義物品',
        tags: tags,
        owner: formData.get('ownerName'),
        contact: formData.get('contactInfo'),
        pobLink: formData.get('pobLink') || '#',
        itemData: formData.get('itemData') || ''
    };

    // 驗證必填欄位
    if (!validateItem(newItem)) {
        showMessage('請填寫所有必填欄位', 'error');
        return;
    }

    // 添加到物品陣列
    allItems.push(newItem);
    filteredItems = [...allItems];
    
    // 重新渲染物品
    renderItems();
    updateItemCount();

    // 顯示成功訊息
    showMessage('物品成功張貼！', 'success');

    // 重置表單
    e.target.reset();

    // 切換到物品檢視
    showSection('items');
}

/**
 * 驗證物品資料
 * @param {Object} item - 物品資料
 * @returns {boolean} 是否有效
 */
function validateItem(item) {
    return item.name && 
           item.category && 
           item.owner && 
           item.contact && 
           item.mirrorFee >= 0;
}

/**
 * 顯示訊息
 * @param {string} message - 訊息內容
 * @param {string} type - 訊息類型 ('success' 或 'error')
 */
function showMessage(message, type) {
    // 移除現有訊息
    const existingMessage = document.querySelector('.success-message, .error-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // 創建新訊息元素
    const messageElement = document.createElement('div');
    messageElement.className = type === 'success' ? 'success-message' : 'error-message';
    messageElement.textContent = message;

    // 插入到表單前
    const form = document.getElementById('post-item-form');
    if (form) {
        form.parentNode.insertBefore(messageElement, form);

        // 3秒後自動移除訊息
        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }
}

/**
 * 處理複製 POB 連結
 * @param {Event} e - 點擊事件
 */
function handleCopyPoB(e) {
    const pobLink = e.target.getAttribute('data-pob');
    
    if (pobLink && pobLink !== '#') {
        // 嘗試複製到剪貼簿
        navigator.clipboard.writeText(pobLink).then(() => {
            // 顯示視覺回饋
            const originalText = e.target.textContent;
            e.target.textContent = '已複製！';
            e.target.style.background = 'linear-gradient(145deg, #4CAF50, #45a049)';
            
            setTimeout(() => {
                e.target.textContent = originalText;
                e.target.style.background = '';
            }, 1500);
        }).catch(() => {
            alert('POB 連結: ' + pobLink);
        });
    } else {
        alert('此物品尚未提供 POB 連結');
    }
}

/**
 * 處理私聊功能
 * @param {Event} e - 點擊事件
 */
function handleWhisper(e) {
    const contact = e.target.getAttribute('data-contact');
    const itemCard = e.target.closest('.item-card');
    const itemName = itemCard.querySelector('.item-name').textContent;
    const mirrorFeeElement = itemCard.querySelector('.fee-amount');
    const mirrorFee = mirrorFeeElement ? mirrorFeeElement.textContent : '0';
    
    if (contact) {
        // 生成英文格式的私聊訊息（全大寫）
        let whisperMessage = `@${contact.toUpperCase()}  Hi, 老P like to mirror ${itemName.toUpperCase()}`;
        
        // 如果有費用且不為0，添加費用信息
        if (mirrorFee > 0) {
            whisperMessage += ` FOR ${mirrorFee} DIVINE`;
        }
        
        // 嘗試複製私聊訊息到剪貼簿
        navigator.clipboard.writeText(whisperMessage).then(() => {
            // 顯示視覺回饋
            const originalText = e.target.textContent;
            e.target.textContent = '已複製私聊訊息！';
            e.target.style.background = 'linear-gradient(145deg, #2196F3, #1976D2)';
            
            setTimeout(() => {
                e.target.textContent = originalText;
                e.target.style.background = '';
            }, 2000);
        }).catch(() => {
            // 如果複製失敗，顯示訊息
            alert('私聊訊息: ' + whisperMessage);
        });
    }
}

/**
 * 搜尋物品功能 (預留)
 * @param {string} searchTerm - 搜尋詞彙
 */
function searchItems(searchTerm) {
    if (!searchTerm) {
        filteredItems = [...allItems];
    } else {
        filteredItems = allItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.contact.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    renderItems();
    updateItemCount();
}

/**
 * 匯出物品資料為 JSON (預留功能)
 * @returns {string} JSON 字串
 */
function exportItemsAsJSON() {
    return JSON.stringify(allItems, null, 2);
}

/**
 * 匯入物品資料從 JSON (預留功能)
 * @param {string} jsonString - JSON 字串
 */
function importItemsFromJSON(jsonString) {
    try {
        const importedItems = JSON.parse(jsonString);
        allItems = importedItems;
        filteredItems = [...allItems];
        renderItems();
        updateItemCount();
    } catch (error) {
        console.error('匯入失敗:', error);
        showMessage('匯入失敗，請檢查檔案格式', 'error');
    }
}

// 物品相關功能已移至 item-parser.js 模組 