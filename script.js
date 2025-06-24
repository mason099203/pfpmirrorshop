/**
 * Settlers Shop JavaScript 功能模組
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
            name: "Horror Mitts",
            mirrorFee: 0,
            category: "weapon",
            type: "Int Stack Trickster",
            tags: ["new", "searing-exarch", "eater-of-worlds"],
            owner: "Sushi",
            contact: "BIGSNAKESUCKER",
            pobLink: "#"
        },
        {
            id: 2,
            name: "Loath Splinter",
            mirrorFee: 60,
            category: "accessory",
            type: "Synthesised Small Cluster Jewel",
            tags: ["new", "synthesised"],
            owner: "abax0th",
            contact: "Unc",
            pobLink: "#",
            itemData: `Item Class: Jewels
Rarity: Rare
Loath Splinter
Synthesised Small Cluster Jewel
--------
Requirements:
Level: 67 (unmet)
--------
Item Level: 85
--------
Adds 3 Passive Skills (enchant)
Added Small Passive Skills grant: 6% increased Mana Reservation Efficiency of Skills (enchant)
--------
+5 to Strength (implicit)
+5 to Intelligence (implicit)
5% increased Area of Effect (implicit)
--------
Added Small Passive Skills also grant: +6 to All Attributes
Added Small Passive Skills also grant: +14 to Intelligence
Added Small Passive Skills also grant: +20 to Maximum Energy Shield
Added Small Passive Skills have 35% increased Effect
--------
Place into an allocated Small, Medium or Large Jewel Socket on the Passive Skill Tree. Added passives do not interact with jewel radiuses. Right click to remove from the Socket.
--------
Synthesised Item`
        },
        {
            id: 3,
            name: "Death Shroud",
            mirrorFee: 0,
            category: "armor",
            type: "Str stack chest",
            tags: ["searing-exarch", "eater-of-worlds"],
            owner: "",
            contact: "DefaultLogin",
            pobLink: "#"
        },
        {
            id: 4,
            name: "Dread Song",
            mirrorFee: 20,
            category: "weapon",
            type: "測試物品",
            tags: ["new", "shaper-item", "elder-item"],
            owner: "soti1",
            contact: "SotiSMITE / Exanallovermyface",
            pobLink: "#"
        },
        {
            id: 5,
            name: "Oblivion Butcher",
            mirrorFee: 10,
            category: "weapon",
            type: "Two Handed Phys Vaal Axe",
            tags: ["elder-item"],
            owner: "",
            contact: "HeinzGotBaited",
            pobLink: "#"
        }
    ];
    
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
 * 根據選定的方式分組物品
 */
function groupItems() {
    const groupBySelect = document.getElementById('group-by');
    const groupBy = groupBySelect.value;

    switch (groupBy) {
        case 'price':
            filteredItems.sort((a, b) => a.mirrorFee - b.mirrorFee);
            break;
        case 'owner':
            filteredItems.sort((a, b) => {
                const ownerA = a.owner || a.contact;
                const ownerB = b.owner || b.contact;
                return ownerA.localeCompare(ownerB);
            });
            break;
        case 'type':
        default:
            filteredItems.sort((a, b) => a.category.localeCompare(b.category));
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
                ${generatePoeItemHtml(parseItemData(item.itemData))}
            </div>
        </div>` : '';

    card.innerHTML = `
        <h3 class="item-name">${item.name}</h3>
        <div class="mirror-fee">鏡像費用: <span class="fee-amount">${item.mirrorFee}</span> Divine</div>
        <div class="item-type">${item.type}</div>
        <div class="item-tags">${tagsHtml}</div>
        <div class="owner-info">
            ${ownerInfo}
            <div>聯絡: <span class="contact">${item.contact}</span></div>
        </div>
        <div class="item-actions">
            <button class="action-btn pob-btn" data-pob="${item.pobLink}">複製 PoB</button>
            <button class="action-btn whisper-btn" data-contact="${item.contact}">私聊</button>
            ${itemDetailsBtn}
        </div>
        ${itemDetailsSection}
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
        'searing-exarch': '灼熱總督',
        'eater-of-worlds': '世界吞噬者',
        'shaper-item': '塑者物品',
        'elder-item': '異界尊師物品',
        'hunter-item': '狩獵者物品',
        'synthesised': '合成物品'
    };
    return tagNames[tag] || tag;
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
 * 處理複製 PoB 連結
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
            alert('PoB 連結: ' + pobLink);
        });
    } else {
        alert('此物品尚未提供 PoB 連結');
    }
}

/**
 * 處理私聊功能
 * @param {Event} e - 點擊事件
 */
function handleWhisper(e) {
    const contact = e.target.getAttribute('data-contact');
    const itemName = e.target.closest('.item-card').querySelector('.item-name').textContent;
    
    if (contact) {
        const whisperMessage = `@${contact} 你好，我對你的 ${itemName} 有興趣，可以私聊討論嗎？`;
        
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

/**
 * 預覽物品功能
 */
function previewItem() {
    const itemData = document.getElementById('item-data').value.trim();
    const previewContainer = document.getElementById('item-preview');
    const itemDisplay = document.getElementById('item-display');

    if (!itemData) {
        previewContainer.style.display = 'none';
        return;
    }

    try {
        const parsedItem = parseItemData(itemData);
        const itemHtml = generatePoeItemHtml(parsedItem);
        itemDisplay.innerHTML = itemHtml;
        previewContainer.style.display = 'block';

        // 自動填充表單欄位
        autoFillFormFromItemData(parsedItem);
    } catch (error) {
        console.error('解析物品失敗:', error);
        showMessage('無法解析物品資料，請檢查格式是否正確', 'error');
    }
}

/**
 * 解析 POE 物品資料
 * @param {string} itemText - 物品文字資料
 * @returns {Object} 解析後的物品物件
 */
function parseItemData(itemText) {
    const lines = itemText.split('\n').map(line => line.trim()).filter(line => line);
    const item = {
        itemClass: '',
        rarity: '',
        name: '',
        baseType: '',
        requirements: [],
        itemLevel: '',
        enchants: [],
        implicits: [],
        explicits: [],
        corrupted: false,
        synthesised: false,
        fractured: false,
        influenced: [],
        flavourText: ''
    };

    let currentSection = 'header';
    let separatorCount = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // 分隔線
        if (line === '--------') {
            separatorCount++;
            if (separatorCount === 1) currentSection = 'requirements';
            else if (separatorCount === 2) currentSection = 'properties';
            else if (separatorCount === 3) currentSection = 'mods';
            continue;
        }

        // 解析不同部分
        switch (currentSection) {
            case 'header':
                if (line.startsWith('Item Class:')) {
                    item.itemClass = line.replace('Item Class:', '').trim();
                } else if (line.startsWith('Rarity:')) {
                    item.rarity = line.replace('Rarity:', '').trim().toLowerCase();
                } else if (line && !item.name) {
                    item.name = line;
                } else if (line && !item.baseType && item.name) {
                    item.baseType = line;
                }
                break;

            case 'requirements':
                if (line.startsWith('Level:')) {
                    item.requirements.push(line);
                } else if (line.includes('Str') || line.includes('Dex') || line.includes('Int')) {
                    item.requirements.push(line);
                }
                break;

            case 'properties':
                if (line.startsWith('Item Level:')) {
                    item.itemLevel = line;
                } else if (line.includes('(enchant)')) {
                    item.enchants.push(line);
                }
                break;

            case 'mods':
                if (line.includes('(implicit)')) {
                    item.implicits.push(line);
                } else if (line.includes('(enchant)')) {
                    item.enchants.push(line);
                } else if (line === 'Corrupted') {
                    item.corrupted = true;
                } else if (line === 'Synthesised Item') {
                    item.synthesised = true;
                } else if (line.includes('Place into')) {
                    item.flavourText = line;
                } else if (line && !line.includes('unmet')) {
                    item.explicits.push(line);
                }
                break;
        }
    }

    return item;
}

/**
 * 生成 POE 物品 HTML
 * @param {Object} item - 解析後的物品物件
 * @returns {string} HTML 字串
 */
function generatePoeItemHtml(item) {
    let html = `<div class="poe-item ${item.rarity}">`;

    // 物品標題區域
    html += '<div class="poe-header">';
    if (item.itemClass) {
        html += `<div class="poe-item-class">${item.itemClass}</div>`;
    }
    if (item.rarity) {
        html += `<div class="poe-rarity">Rarity: ${item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}</div>`;
    }
    if (item.name) {
        html += `<div class="poe-name ${item.rarity}">${item.name}</div>`;
    }
    if (item.baseType && item.baseType !== item.name) {
        html += `<div class="poe-base-type">${item.baseType}</div>`;
    }
    html += '</div>';

    // 分隔線
    html += '<div class="poe-separator"></div>';

    // 需求
    if (item.requirements.length > 0) {
        html += '<div class="poe-requirements">';
        html += 'Requirements:<br>';
        item.requirements.forEach(req => {
            html += `${req}<br>`;
        });
        html += '</div>';
        html += '<div class="poe-separator"></div>';
    }

    // 物品等級
    if (item.itemLevel) {
        html += `<div class="poe-item-level">${item.itemLevel}</div>`;
        html += '<div class="poe-separator"></div>';
    }

    // 附魔
    if (item.enchants.length > 0) {
        item.enchants.forEach(enchant => {
            html += `<div class="poe-mod-line poe-enchant">${enchant}</div>`;
        });
        html += '<div class="poe-separator"></div>';
    }

    // 隱性詞綴
    if (item.implicits.length > 0) {
        item.implicits.forEach(implicit => {
            html += `<div class="poe-mod-line poe-implicit">${implicit}</div>`;
        });
        html += '<div class="poe-separator"></div>';
    }

    // 顯性詞綴
    if (item.explicits.length > 0) {
        item.explicits.forEach(explicit => {
            let cssClass = 'poe-explicit';
            if (item.synthesised) cssClass = 'poe-synthesised';
            html += `<div class="poe-mod-line ${cssClass}">${explicit}</div>`;
        });
    }

    // 腐化/合成標記
    if (item.corrupted) {
        html += '<div class="poe-separator"></div>';
        html += '<div class="poe-corrupted">Corrupted</div>';
    }

    if (item.synthesised) {
        html += '<div class="poe-separator"></div>';
        html += '<div class="poe-synthesised">Synthesised Item</div>';
    }

    // 描述文字
    if (item.flavourText) {
        html += '<div class="poe-separator"></div>';
        html += `<div class="poe-flavour">${item.flavourText}</div>`;
    }

    html += '</div>';
    return html;
}

/**
 * 從物品資料自動填充表單
 * @param {Object} item - 解析後的物品物件
 */
function autoFillFormFromItemData(item) {
    // 自動填充物品名稱
    if (item.name) {
        document.getElementById('item-name').value = item.name;
    }

    // 根據物品類型設定分類
    if (item.itemClass) {
        const categoryMap = {
            'Jewels': 'accessory',
            'Rings': 'accessory',
            'Amulets': 'accessory',
            'Belts': 'accessory',
            'One Hand Weapons': 'weapon',
            'Two Hand Weapons': 'weapon',
            'Bows': 'weapon',
            'Claws': 'weapon',
            'Daggers': 'weapon',
            'Wands': 'weapon',
            'Staves': 'weapon',
            'Body Armours': 'armor',
            'Helmets': 'armor',
            'Gloves': 'armor',
            'Boots': 'armor',
            'Shields': 'armor'
        };

        const category = categoryMap[item.itemClass] || '';
        if (category) {
            document.getElementById('item-category').value = category;
        }
    }

    // 自動填充描述
    if (item.baseType && item.baseType !== item.name) {
        document.getElementById('item-description').value = item.baseType;
    }

    // 根據物品屬性設定標籤
    const tagsCheckboxes = document.querySelectorAll('input[name="tags"]');
    tagsCheckboxes.forEach(checkbox => checkbox.checked = false);

    if (item.synthesised) {
        const synthCheckbox = document.querySelector('input[name="tags"][value="synthesised"]');
        if (!synthCheckbox) {
            // 如果沒有合成標籤，可以添加其他適當的標籤
        }
    }

    // 如果是稀有物品，標記為新物品
    if (item.rarity === 'rare') {
        const newCheckbox = document.querySelector('input[name="tags"][value="new"]');
        if (newCheckbox) newCheckbox.checked = true;
    }
}

/**
 * 切換物品詳情顯示
 * @param {HTMLElement} button - 點擊的按鈕元素
 */
function toggleItemDetails(button) {
    const itemCard = button.closest('.item-card');
    const itemDetails = itemCard.querySelector('.item-details');
    
    if (itemDetails) {
        const isVisible = itemDetails.style.display !== 'none';
        itemDetails.style.display = isVisible ? 'none' : 'block';
        button.textContent = isVisible ? '物品詳情' : '隱藏詳情';
        
        // 添加動畫效果
        if (!isVisible) {
            itemDetails.style.opacity = '0';
            itemDetails.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                itemDetails.style.transition = 'all 0.3s ease';
                itemDetails.style.opacity = '1';
                itemDetails.style.transform = 'translateY(0)';
            }, 10);
        }
    }
} 