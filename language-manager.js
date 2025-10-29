/**
 * 語言管理器
 * @description 處理語言切換和文本翻譯功能
 */

// 語言資料定義
const languages = {
    'zh-TW': {
        pageTitle: "PFP Mirror Shop",
        pageSubtitle: "由 老P 和聊天室們提供的免費低價複製裝備",
        
        twitchLabel: "poogf01",
        discordLabel: "渣P伺服器",
        shopLabel: "商店",

        versionLabel: "遊戲版本",
        allVersions: "所有版本",

        leagueLabel: "聯盟",
        allLeagues: "所有聯盟",
        mercenaries: "輿圖之奧秘",
        keepers:"黯焰看守者",
        
        categoryLabel: "物品分類",
        allCategories: "所有分類",
        weapon: "武器",
        armor: "護甲", 
        accessory: "飾品",
        itemCountLabel: "商店物品數量",
        
        feeLabel: "FEE",
        ownerLabel: "擁有者",
        itemDetailsLabel: "物品詳情",
        hideDetailsLabel: "隱藏詳情",
        
        tags: {
            free: "免費",
            cheap: "低價",
            expensive: "高價",
            popular: "熱門",
            new: "新品",
            hot: "火熱",
            recommended: "推薦"
        },
        
        copyPoB: "複製 PoB",
        whisper: "私訊",
        
        messages: {
            pobCopied: "PoB 已複製到剪貼簿",
            whisperCopied: "私訊內容已複製到剪貼簿",
            itemAdded: "物品已成功新增",
            itemError: "新增物品時發生錯誤"
        },
        
        footerText: "本產品未與 GRINDING GEAR GAMES 有任何關聯或認可，由饅頭寶包製作。",
        
        languageSwitch: {
            zh: "中文",
            en: "English"
        }
    },
    'en-US': {
        pageTitle: "PFP Mirror Shop",
        pageSubtitle: "Free & Low-cost Mirror Services by PFP and Community",
        
        twitchLabel: "poogf01",
        discordLabel: "PFP Server",
        shopLabel: "Shop",

        versionLabel: "Version",
        allVersions: "All Versions",
        
        leagueLabel: "League",
        allLeagues: "All Leagues",
        mercenaries: "Mercenaries",
        keepers:"Keepers",
        
        categoryLabel: "Item Category",
        allCategories: "All Categories",
        weapon: "Weapon",
        armor: "Armor",
        accessory: "Accessory",
        itemCountLabel: "Shop Items",
        
        feeLabel: "FEE",
        ownerLabel: "Owner",
        itemDetailsLabel: "Item Details",
        hideDetailsLabel: "Hide Details",
        
        tags: {
            free: "Free",
            cheap: "Cheap",
            expensive: "Expensive",
            popular: "Popular",
            new: "New",
            hot: "Hot",
            recommended: "Recommended"
        },
        
        copyPoB: "Copy PoB",
        whisper: "Whisper",
        
        messages: {
            pobCopied: "PoB copied to clipboard",
            whisperCopied: "Whisper message copied to clipboard",
            itemAdded: "Item added successfully",
            itemError: "Error adding item"
        },
        
        footerText: "This product is not affiliated with or endorsed by GRINDING GEAR GAMES. Made by 饅頭寶包.",
        
        languageSwitch: {
            zh: "中文",
            en: "English"
        }
    }
};

/**
 * 當前語言設定
 * @type {string}
 */
let currentLanguage = 'zh-TW';

/**
 * 初始化語言管理器
 */
function initializeLanguageManager() {
    // 從本地儲存取得語言設定
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && languages[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // 初始化語言切換按鈕
    setupLanguageSwitcher();
    
    // 套用當前語言
    applyLanguage(currentLanguage);
}

/**
 * 設置語言切換器
 */
function setupLanguageSwitcher() {
    const languageContainer = document.querySelector('.transform-laguage');
    if (!languageContainer) return;

    languageContainer.innerHTML = `
        <div class="language-switcher">
            <button class="language-btn ${currentLanguage === 'zh-TW' ? 'active' : ''}" 
                    onclick="switchLanguage('zh-TW')" 
                    data-lang="zh-TW">
                ${languages[currentLanguage].languageSwitch.zh}
            </button>
            <button class="language-btn ${currentLanguage === 'en-US' ? 'active' : ''}" 
                    onclick="switchLanguage('en-US')" 
                    data-lang="en-US">
                ${languages[currentLanguage].languageSwitch.en}
            </button>
        </div>
    `;
}

/**
 * 切換語言
 * @param {string} language - 要切換到的語言代碼
 */
function switchLanguage(language) {
    if (!languages[language]) {
        console.error('不支援的語言:', language);
        return;
    }

    currentLanguage = language;
    localStorage.setItem('selectedLanguage', language);
    
    // 套用新語言
    applyLanguage(language);
    
    // 更新語言切換按鈕狀態
    updateLanguageSwitcherButtons();
    
    // 重新載入物品資料並渲染（切換語言版本的物品）
    if (typeof initializeItems === 'function') {
        initializeItems();
    } else if (typeof renderItems === 'function') {
        renderItems();
    }
    
}

/**
 * 套用語言設定
 * @param {string} language - 語言代碼
 */
function applyLanguage(language) {
    const langData = languages[language];
    if (!langData) return;

    // 更新頁面標題
    document.title = langData.pageTitle;
    
    // 更新頁面元素
    updateElement('.subtitle', langData.pageSubtitle);
    updateElement('label[for="version-select"]', langData.versionLabel);
    updateElement('#version-select option[value=""]', langData.allVersions);

    updateElement('label[for="league-select"]', langData.leagueLabel);
    updateElement('#league-select option[value=""]', langData.allLeagues);
    updateElement('#league-select option[value="Mercenaries"]', langData.mercenaries);
    updateElement('#league-select option[value="Keepers"]', langData.keepers);
    updateElement('label[for="category-select"]', langData.categoryLabel);
    updateElement('#category-select option[value=""]', langData.allCategories);
    updateElement('#category-select option[value="weapon"]', langData.weapon);
    updateElement('#category-select option[value="armor"]', langData.armor);
    updateElement('#category-select option[value="accessory"]', langData.accessory);
    updateElement('.footer p', langData.footerText);
    
    // 更新物品數量標籤
    const itemCountElement = document.querySelector('.items-info p');
    if (itemCountElement) {
        const count = document.getElementById('item-count').textContent;
        itemCountElement.innerHTML = `${langData.itemCountLabel}: <span id="item-count">${count}</span>`;
    }
    
    // 更新頁面語言屬性
    document.documentElement.lang = language;
}

/**
 * 更新指定元素的文本內容
 * @param {string} selector - CSS選擇器
 * @param {string} text - 要設置的文本
 */
function updateElement(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

/**
 * 更新語言切換按鈕狀態
 */
function updateLanguageSwitcherButtons() {
    const languageButtons = document.querySelectorAll('.language-btn');
    languageButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        }
    });
    
    // 更新按鈕文字
    const langData = languages[currentLanguage];
    const zhBtn = document.querySelector('[data-lang="zh-TW"]');
    const enBtn = document.querySelector('[data-lang="en-US"]');
    
    if (zhBtn) zhBtn.textContent = langData.languageSwitch.zh;
    if (enBtn) enBtn.textContent = langData.languageSwitch.en;
}

/**
 * 取得當前語言的文本
 * @param {string} key - 文本鍵值 (支援點記法，如 'tags.free')
 * @returns {string} 翻譯後的文本
 */
function getText(key) {
    const langData = languages[currentLanguage];
    if (!langData) return key;
    
    // 支援點記法取值 (例如: 'tags.free')
    const keys = key.split('.');
    let value = langData;
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return key; // 如果找不到對應的鍵值，返回原始鍵值
        }
    }
    
    return typeof value === 'string' ? value : key;
}

/**
 * 取得當前語言代碼
 * @returns {string} 當前語言代碼
 */
function getCurrentLanguage() {
    return currentLanguage;
}

// 在頁面載入完成後初始化語言管理器
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageManager();
}); 