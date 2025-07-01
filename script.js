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
    // 從物品資料模組載入預設物品
    allItems = getDefaultItems();
    
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

    // 工具提示位置計算
    document.addEventListener('mouseover', handleTooltipShow);
    document.addEventListener('mouseout', handleTooltipHide);
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
 * 根據聯盟和分類篩選物品
 */
function filterItems() {
    const categorySelect = document.getElementById('category-select');
    const leagueSelect = document.getElementById('league-select');
    const selectedCategory = categorySelect.value;
    const selectedLeague = leagueSelect.value;

    // 開始篩選所有物品
    filteredItems = [...allItems];

    // 根據聯盟篩選
    if (selectedLeague !== '') {
        filteredItems = filteredItems.filter(item => item.league === selectedLeague);
    }

    // 根據分類篩選
    if (selectedCategory !== '') {
        filteredItems = filteredItems.filter(item => item.category === selectedCategory);
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
        ? `<div>${typeof getText === 'function' ? getText('ownerLabel') : '擁有者'}: <span class="owner">${item.owner}</span></div>`
        : '';

    const itemDetailsBtn = item.itemData ? 
        `<button class="action-btn item-details-btn" onclick="toggleItemDetails(this)">${typeof getText === 'function' ? getText('itemDetailsLabel') : '物品詳情'}</button>` : '';

    const itemDetailsSection = item.itemData ? 
        `<div class="item-details" style="display: none;">
            <div class="poe-item-display">
                ${itemParser.generateItemHtml(itemParser.parseItemData(item.itemData))}
            </div>
        </div>` : '';

    const itemImageUrl = getItemImageUrl(item.name);
    const itemSocketImageUrl = getSocketImageUrl(item.name);

    card.innerHTML = `
        <div class="item-header">
            
            <div class="item-info">
                <h3 class="item-name">${item.name}</h3>
                <div class="mirror-fee">${typeof getText === 'function' ? getText('feeLabel') : 'FEE'}: <span class="fee-amount">${item.mirrorFee}</span> <img src="https://cdn.poedb.tw/image/Art/2DItems/Currency/CurrencyModValues.webp" alt="divine" style="height: 30px;"></div>
                <div class="item-type">${item.type}</div>
            </div>
        </div>
        <div class="item-tags">
            <div class="tags-row">${tagsHtml}</div>
            ${itemDetailsSection}
        </div>
        <div class="item-image-container" ${item.itemData ? 'data-tooltip="true"' : ''}>
            <img src="${item.imageUrl}" class="item-image" alt="${item.name}">
            <img src="${item.socketimageUrl}" class="item-socket-image" alt="${item.name}">
        </div>
        <div class="owner-info">
            ${ownerInfo}
            <div>聯絡: <span class="contact">${item.contact}</span></div>
        </div>
        <div class="item-actions">
            <button class="action-btn pob-btn" data-pob="${item.itemData}"><i class="bi bi-copy"></i>${typeof getText === 'function' ? getText('copyPoB') : '複製 PoB'}</button>
            <button class="action-btn whisper-btn" data-contact="${item.contact}" data-item-name="${item.name}"><i class="bi bi-chat-left-dots"></i>${typeof getText === 'function' ? getText('whisper') : '私訊'}</button>
            ${item.clip ? `<a href="${item.clip}" target="_blank" class="action-btn clip-btn"><i class="lp-icon"></i>${typeof getText === 'function' ? getText('clip') : '剪輯'}</a>` : ''}
        </div>
    `;

    // 如果有物品資料，創建工具提示並附加到 body
    if (item.itemData) {
        const tooltip = document.createElement('div');
        tooltip.className = 'item-tooltip';
        tooltip.innerHTML = itemParser.generateItemHtml(itemParser.parseItemData(item.itemData));
        tooltip.style.display = 'none';
        document.body.appendChild(tooltip);
        
        // 為圖片容器添加工具提示引用
        const imageContainer = card.querySelector('.item-image-container');
        imageContainer.setAttribute('data-tooltip-id', tooltip.id || 'tooltip-' + Date.now());
        imageContainer.tooltipElement = tooltip;
    }

    return card;
}

/**
 * 取得標籤的顯示名稱（支援多語言）
 * @param {string} tag - 標籤值
 * @returns {string} 顯示名稱
 */
function getTagDisplayName(tag) {
    // 使用語言管理器的getText函數
    if (typeof getText === 'function') {
        // 如果是標準標籤，使用多語言翻譯
        const standardTags = ['free', 'cheap', 'expensive', 'popular', 'new', 'hot', 'recommended'];
        if (standardTags.includes(tag)) {
            return getText(`tags.${tag}`);
        }
    }
    
    // 遊戲內容標籤翻譯（根據當前語言）
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh-TW';
    
    const gameTagNames = {
        'zh-TW': {
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
        },
        'en-US': {
            'new': 'New Item',
            'Searing Exarch Item': 'Searing Exarch',
            'Eater of Worlds Item': 'Eater of Worlds',
            'Shaper Item': 'Shaper',
            'Elder Item': 'Elder',
            'Redeemer Item': 'Redeemer',
            'Warlord Item': 'Warlord',
            'Hunter Item': 'Hunter',
            'Crusader Item': 'Crusader',
            'Synthesised Item': 'Synthesised',
            'Fractured Item': 'Fractured',
            'Split': 'Split'
        }
    };
    
    const langTagNames = gameTagNames[currentLang] || gameTagNames['zh-TW'];
    return langTagNames[tag] || tag;
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
        'Dusk Whorl Synthesised Gold Ring': './image/Dusk Whorl Synthesised Gold Ring.png',
        'Rapture Song Synthesised Spine Bow': './image/Rapture Song Synthesised Spine Bow.png',
        'Loath Shroud Sacrificial Garb': './image/Loath Shroud Sacrificial Garb.png',
        'Rage Saw Anarchic Spiritblade': './image/Rage Saw Anarchic Spiritblade.png',
        'Honour Coat Twilight Regalia': './image/Honour Coat Twilight Regalia.png',
        'Dread Jack Necrotic Armour': './image/Vengeance Sanctuary Necrotic Armour.png',
        '奇蹟 剖刃 追憶之 殘暴巨劍':'./image/Miracle Gutter Synthesised Reaver Sword.png',
        '復仇 殿堂 亡者護甲':'./image/Vengeance Sanctuary Necrotic Armour.png',
        '暮色 螺旋 追憶之 金光戒指':'./image/Dusk Whorl Synthesised Gold Ring.png',
        '硫石 喪儀 靈石權杖':'./image/Brimstone Knell Opal Sceptre.png',
        '責難 堅殼 神聖鎖甲':'./image/Torment Shell Sacred Chainmail.png',
        '勝利 護冠 罪魔邪冠':'./image/Victory Cowl Archdemon Crown.png',
        '榮耀 真實之衛 巨人殺手頭盔':'./image/Honour Ward Giantslayer Helmet.png',
        '惡行 幽影 祭禮束衣':'./image/Loath Shroud Sacrificial Garb.png',
        '奇蹟 戰角 追憶之 脊弓':'./image/Rapture Song Synthesised Spine Bow.png',
        '怒火 之鋸 翻天魂刃':'./image/Rage Saw Anarchic Spiritblade.png',
        '榮耀 神袍 暮光法衣':'./image/Honour Coat Twilight Regalia.png',
        '恐慌 保身 亡者護甲':'./image/Vengeance Sanctuary Necrotic Armour.png',

    };

    // 如果找到對應的圖片，返回圖片URL，否則返回預設圖片
    return itemImages[itemName] || `https://via.placeholder.com/64x64/2a2a2a/d4af37?text=${encodeURIComponent(itemName.charAt(0))}`;
}

/**
 * 根據物品名稱獲取圖片URL
 * @param {string} itemName - 物品名稱
 * @returns {string} 圖片URL
 */
function getSocketImageUrl(itemName) {
    // POE物品圖片映射表 - 使用本地圖片
    const itemImages = {
        'Brimstone Knell Opal Sceptre': './image/3sL.png',
        'Honour Ward Giantslayer Helmet': './image/4s.png',
        'Torment Shell Sacred Chainmail': './image/4s.png',
        'Vengeance Sanctuary Necrotic Armour': './image/6s.png',
        'Victory Cowl Archdemon Crown': './image/4s.png',
        'Miracle Gutter Synthesised Reaver Sword': './image/6s.png',
        'Dusk Whorl Synthesised Gold Ring': './image/ns.png',
        'Rapture Song Synthesised Spine Bow': './image/6s.png',
        'Loath Shroud Sacrificial Garb': './image/6s.png',
        'Rage Saw Anarchic Spiritblade': './image/3sL.png',
        'Honour Coat Twilight Regalia': './image/6s.png',
        'Dread Jack Necrotic Armour': './image/6s.png',
        '奇蹟 剖刃 追憶之 殘暴巨劍':'./image/6s.png',
        '復仇 殿堂 亡者護甲':'./image/6s.png',
        '暮色 螺旋 追憶之 金光戒指':'./image/ns.png',
        '硫石 喪儀 靈石權杖':'./image/3sL.png',
        '責難 堅殼 神聖鎖甲':'./image/6s.png',
        '勝利 護冠 罪魔邪冠':'./image/4s.png',
        '榮耀 真實之衛 巨人殺手頭盔':'./image/4s.png',
        '惡行 幽影 祭禮束衣':'./image/6s.png',
        '奇蹟 戰角 追憶之 脊弓':'./image/6s.png',
        '怒火 之鋸 翻天魂刃':'./image/3sL.png',
        '榮耀 神袍 暮光法衣':'./image/6s.png',
        '恐慌 保身 亡者護甲':'./image/6s.png',
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
 * 切換物品詳情顯示
 * @param {HTMLElement} button - 點擊的按鈕元素
 */
function toggleItemDetails(button) {
    const itemCard = button.closest('.item-card');
    const itemDetails = itemCard.querySelector('.item-details');
    
    if (itemDetails) {
        if (itemDetails.style.display === 'none') {
            itemDetails.style.display = 'block';
            button.textContent = typeof getText === 'function' ? getText('hideDetailsLabel') : '隱藏詳情';
        } else {
            itemDetails.style.display = 'none';
            button.textContent = typeof getText === 'function' ? getText('itemDetailsLabel') : '物品詳情';
        }
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
        // 如果有費用且不為0，添加費用信息
        if (mirrorFee > 0) {
            whisperMessage = `@${contact.toUpperCase()}  Hi, I'd like to mirror ${itemName.toUpperCase()} FOR ${mirrorFee} DIVINE`;
        }else{
            whisperMessage = `@${contact.toUpperCase()}  Hi, I'd like to ${mirrorFee}`;
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

/**
 * 處理工具提示顯示
 * @param {MouseEvent} e - 滑鼠事件
 */
function handleTooltipShow(e) {
    const imageContainer = e.target.closest('.item-image-container[data-tooltip="true"]');
    if (!imageContainer) return;

    const tooltip = imageContainer.tooltipElement;
    if (!tooltip) return;

    const rect = imageContainer.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // 檢查是否為小螢幕（小於480px）
    if (windowWidth <= 480) {
        // 小螢幕：顯示在正上方
        let left = rect.left + (rect.width / 2) - 150; // 居中對齊，tooltip寬度約300px
        let top = rect.top - 20; // 圖片上方20px

        // 檢查左邊界
        if (left < 10) {
            left = 10;
        }

        // 檢查右邊界
        if (left + 300 > windowWidth) {
            left = windowWidth - 310;
        }

        // 檢查上邊界
        if (top < 10) {
            top = rect.bottom + 20; // 如果上方空間不夠，顯示在下方
        }

        // 檢查下邊界（如果顯示在下方）
        if (top > windowHeight - 100) {
            top = windowHeight - 110;
        }

        // 設置位置和顯示
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
        tooltip.style.transform = 'none';
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
        tooltip.style.display = 'block';
    } else {
        // 大螢幕：顯示在圖片右側
        let left = rect.right + 20; // 圖片右側20px
        let top = rect.top - 10; // 與圖片頂部對齊

        // 檢查右邊界
        if (left + 400 > windowWidth) { // 400px 是工具提示的最大寬度
            left = rect.left - 420; // 顯示在圖片左側
        }

        // 檢查下邊界
        if (top + 600 > windowHeight) { // 估計工具提示高度
            top = windowHeight - 620;
        }

        // 檢查上邊界
        if (top < 10) {
            top = 10;
        }

        // 設置位置和顯示
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
        tooltip.style.transform = 'none';
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
        tooltip.style.display = 'block';
    }
}

/**
 * 處理工具提示隱藏
 * @param {MouseEvent} e - 滑鼠事件
 */
function handleTooltipHide(e) {
    const imageContainer = e.target.closest('.item-image-container[data-tooltip="true"]');
    if (!imageContainer) return;

    const tooltip = imageContainer.tooltipElement;
    if (tooltip) {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
        tooltip.style.display = 'none';
    }
}

// 物品相關功能已移至 item-parser.js 模組 