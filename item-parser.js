/**
 * POE 物品解析和顯示模組
 * 專門處理 PATH OF EXILE 物品資料的解析、顯示和相關功能
 */

/**
 * POE 物品解析器類
 */
class POEItemParser {
    constructor() {
        this.rarityColors = {
            'normal': '#c8c8c8',
            'magic': '#8888ff',
            'rare': '#ffff77',
            'unique': '#af6025',
            'gem': '#1ba29b',
            'currency': '#aa9e82'
        };

        this.modColors = {
            'enchant': '#b4b4ff',
            'implicit': '#8888ff',
            'explicit': '#8888ff',
            'crafted': '#b4b4ff',
            'fractured': '#a29160',
            'synthesised': '#8e44ad',
            'influenced': '#74a9cf',
            'corrupted': '#d20000'
        };
    }

    /**
     * 解析 POE 物品資料
     * @param {string} itemText - 物品文字資料
     * @returns {Object} 解析後的物品物件
     */
    parseItemData(itemText) {
        const lines = itemText.split('\n').map(line => line.trim()).filter(line => line);
        const item = {
            itemClass: '',
            rarity: '',
            name: '',
            baseType: '',
            requirements: [],
            itemLevel: '',
            level: '', // 寶石等級
            quality: '', // 品質
            enchants: [],
            implicits: [],
            explicits: [],
            corrupted: false,
            synthesised: false,
            fractured: false,
            influenced: [],
            flavourText: '',
            properties: []
        };

        let currentSection = 'header';
        let separatorCount = 0;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            // 分隔線
            if (line === '--------') {
                separatorCount++;
                // 動態判斷下一個區塊的類型
                const nextLine = i + 1 < lines.length ? lines[i + 1] : '';
                if (nextLine === 'Requirements:') {
                    currentSection = 'requirements';
                } else if (separatorCount >= 3) {
                    currentSection = 'mods';
                } else {
                    currentSection = 'properties';
                }
                continue;
            }

            // 解析不同部分
            switch (currentSection) {
                case 'header':
                    this._parseHeader(line, item);
                    break;
                case 'requirements':
                    this._parseRequirements(line, item);
                    break;
                case 'properties':
                    this._parseProperties(line, item);
                    break;
                case 'mods':
                    this._parseMods(line, item);
                    break;
            }
        }

        return item;
    }

    /**
     * 解析物品標題部分
     * @param {string} line - 當前行
     * @param {Object} item - 物品物件
     * @private
     */
    _parseHeader(line, item) {
        if (line.startsWith('Item Class:')) {
            item.itemClass = line.replace('Item Class:', '').trim();
        } else if (line.startsWith('Rarity:')) {
            item.rarity = line.replace('Rarity:', '').trim().toLowerCase();
        } else if (line && !item.name) {
            item.name = line;
        } else if (line && !item.baseType && item.name) {
            item.baseType = line;
        }
    }

    /**
     * 解析需求部分
     * @param {string} line - 當前行
     * @param {Object} item - 物品物件
     * @private
     */
    _parseRequirements(line, item) {
        if (line === 'Requirements:') {
            // 跳過標題行
            return;
        } else if (line.startsWith('Level:') && !item.level) {
            // 寶石等級（不包含在 requirements 中，而是作為獨立屬性）
            item.level = line;
        } else if (line.startsWith('Quality') && line.includes(':') && !item.quality) {
            // 確保 Quality 在詞綴區也能被正確識別 - 能識別所有 Quality 格式
            item.quality = line;
        } else if (line.includes('Str') || line.includes('Dex') || line.includes('Int')) {
            item.requirements.push(line);
        }
    }

    /**
     * 解析屬性部分
     * @param {string} line - 當前行
     * @param {Object} item - 物品物件
     * @private
     */
    _parseProperties(line, item) {
        if (line.startsWith('Item Level:')) {
            item.itemLevel = line;
        } else if (line.startsWith('Quality') && line.includes(':') && !item.quality) {
            // 處理品質（可能在屬性區塊中，但只設定一次）- 能識別所有 Quality 格式
            item.quality = line;
        } else if (line.includes('(enchant)')) {
            item.enchants.push(line);
        } else if (line.includes('Physical Damage:') || 
                   line.includes('Elemental Damage:') ||
                   line.includes('Critical Strike Chance:') ||
                   line.includes('Attacks per Second:') ||
                   line.includes('Weapon Range:')) {
            item.properties.push(line);
        }
    }

    /**
     * 解析詞綴部分
     * @param {string} line - 當前行
     * @param {Object} item - 物品物件
     * @private
     */
    _parseMods(line, item) {
        if (line.startsWith('Level:') && !item.level) {
            // 確保 Level 在詞綴區也能被正確識別
            item.level = line;
        } else if (line.startsWith('Quality') && line.includes(':') && !item.quality) {
            // 確保 Quality 在詞綴區也能被正確識別 - 能識別所有 Quality 格式
            item.quality = line;
        } else if (line.includes('(implicit)')) {
            item.implicits.push(line);
        } else if (line.includes('(enchant)')) {
            item.enchants.push(line);
        } else if (line.includes('(crafted)')) {
            // 為 crafted 詞綴添加特殊標記
            item.explicits.push({ text: line, type: 'crafted' });
        } else if (line.includes('(fractured)')) {
            // 為 fractured 詞綴添加特殊標記
            item.explicits.push({ text: line, type: 'fractured' });
        } else if (line === 'Corrupted') {
            item.corrupted = true;
        } else if (line === 'Synthesised Item') {
            item.synthesised = true;
        } else if (line === 'Fractured Item') {
            item.fractured = true;
        } else if (line.includes('Place into') || line.includes('Right click')) {
            item.flavourText = line;
        } else if (line && !line.includes('unmet') && !line.includes('--------')) {
            item.explicits.push({ text: line, type: 'explicit' });
        }
    }

    /**
     * 生成 POE 物品 HTML
     * @param {Object} item - 解析後的物品物件
     * @returns {string} HTML 字串
     */
    generateItemHtml(item) {
        let html = `<div class="poe-item ${item.rarity}">`;

        // 物品標題區域
        html += this._generateHeader(item);

        // 需求
        if (item.requirements.length > 0) {
            html += this._generateRequirements(item);
        }

        if (item.level) {
            html += `<div class="poe-level">${item.level}</div>`;
            html += '<div class="poe-separator"></div>';

        }

        // 品質
        if (item.quality) {
            const formattedQuality = this._formatQuality(item.quality);
            html += `<div class="poe-quality">${formattedQuality}</div>`;
        }

        // 如果有 level 或 quality，添加分隔線
        if (item.level || item.quality) {
            html += '<div class="poe-separator"></div>';
        }

        // 附魔
        if (item.enchants.length > 0) {
            html += this._generateEnchants(item);
            html += '<div class="poe-separator"></div>';
        }

        // 隱性詞綴
        if (item.implicits.length > 0) {
            html += this._generateImplicits(item);
            html += '<div class="poe-separator"></div>';
        }

        // 顯性詞綴
        if (item.explicits.length > 0) {
            html += this._generateExplicits(item);
        }

        // 特殊標記
        html += this._generateSpecialMarkers(item);

        // 描述文字
        if (item.flavourText) {
            html += '<div class="poe-separator"></div>';
            html += `<div class="poe-flavour">${item.flavourText}</div>`;
        }

        html += '</div>';
        return html;
    }

    /**
     * 生成物品標題 HTML
     * @param {Object} item - 物品物件
     * @returns {string} HTML 字串
     * @private
     */
    _generateHeader(item) {
        let html = '<div class="poe-header">';
        
        // if (item.itemClass) {
        //     html += `<div class="poe-item-class">${item.itemClass}</div>`;
        // }
        
        // if (item.rarity) {
        //     const rarityDisplay = item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1);
        //     html += `<div class="poe-rarity">Rarity: ${rarityDisplay}</div>`;
        // }
        
        if (item.name) {
            html += `<div class="poe-name ${item.rarity}">${item.name}</div>`;
        }
        
        if (item.baseType && item.baseType !== item.name) {
            html += `<div class="poe-base-type">${item.baseType}</div>`;
        }
        
        html += '</div>';
        return html;
    }

    /**
     * 生成需求 HTML
     * @param {Object} item - 物品物件
     * @returns {string} HTML 字串
     * @private
     */
    _generateRequirements(item) {
        let html = '<div class="poe-requirements">';
        html += 'Requirements:<br>';
        item.requirements.forEach(req => {
            html += `${req} &nbsp;`;
        });
        html += '</div>';
        return html;
    }

    /**
     * 生成屬性 HTML
     * @param {Object} item - 物品物件
     * @returns {string} HTML 字串
     * @private
     */
    _generateProperties(item) {
        let html = '';
        item.properties.forEach(prop => {
            html += `<div class="poe-mod-line poe-property">${prop}</div>`;
        });
        return html;
    }

    /**
     * 生成附魔 HTML
     * @param {Object} item - 物品物件
     * @returns {string} HTML 字串
     * @private
     */
    _generateEnchants(item) {
        let html = '';
        item.enchants.forEach(enchant => {
            const processedText = this._processModText(enchant);
            html += `<div class="poe-mod-line poe-enchant">${processedText}</div>`;
        });
        return html;
    }

    /**
     * 生成隱性詞綴 HTML
     * @param {Object} item - 物品物件
     * @returns {string} HTML 字串
     * @private
     */
    _generateImplicits(item) {
        let html = '';
        item.implicits.forEach(implicit => {
            const processedText = this._processModText(implicit);
            html += `<div class="poe-mod-line poe-implicit">${processedText}</div>`;
        });
        return html;
    }

    /**
     * 生成顯性詞綴 HTML
     * @param {Object} item - 物品物件
     * @returns {string} HTML 字串
     * @private
     */
    _generateExplicits(item) {
        let html = '';
        item.explicits.forEach(explicit => {
            let cssClass = 'poe-explicit';
            let text = explicit;
            
            // 處理新的物件格式
            if (typeof explicit === 'object' && explicit.text) {
                text = explicit.text;
                if (explicit.type === 'crafted') {
                    cssClass = 'poe-crafted';
                } else if (explicit.type === 'fractured') {
                    cssClass = 'poe-fractured';
                }
            }
            
            // 處理舊的邏輯（向後相容）
            if (item.fractured && typeof explicit === 'string') cssClass = 'poe-fractured';
            
            const processedText = this._processModText(text);
            html += `<div class="poe-mod-line ${cssClass}">${processedText}</div>`;
        });
        return html;
    }

    /**
     * 處理詞綴文字，移除標記
     * @param {string} text - 原始文字
     * @returns {string} 處理後的文字
     * @private
     */
    _processModText(text) {
        // 移除 (implicit), (crafted), (enchant), (fractured) 標記
        let processedText = text.replace(/\s*\((?:implicit|crafted|enchant|fractured)\)/g, '');
        // (augmented)
        // 移除系統標籤（從標籤開始到行尾）
        // 注意：不移除 Level: 和 Quality: 因為這些是需要顯示的屬性
        // processedText = processedText.replace(/^Rarity:.*$/g, '');
        // processedText = processedText.replace(/^Level:.*$/g, '');
        // processedText = processedText.replace(/^Quality:.*$/g, '');
        processedText = processedText.replace(/^Item Class:.*$/g, '');
        processedText = processedText.replace(/^Item Level:.*$/g, '');
        processedText = processedText.replace(/^Sockets:.*$/g, '');
        
        // 移除各種影響類型標籤
        const influenceTags = [
            'Searing Exarch Item',
            'Eater of Worlds Item', 
            'Shaper Item',
            'Elder Item',
            'Synthesised',
            'Redeemer Item',
            'Warlord Item', 
            'Hunter Item',
            'Crusader Item',
            'Synthesised Item',
            'Fractured Item',
            'Corrupted'
        ];
        
        // 移除影響類型標籤（完全匹配）
        influenceTags.forEach(tag => {
            processedText = processedText.replace(new RegExp(`^${tag}$`, 'g'), '');
        });
        
        // 移除前後空白
        return processedText.trim();
    }

    /**
     * 格式化品質顯示
     * @param {string} qualityText - 原始品質文字
     * @returns {string} 格式化後的品質文字
     * @private
     */
    _formatQuality(qualityText) {
        // 處理各種 Quality 格式：
        // Quality (Caster Modifiers): +20% (augmented) → Quality: +20% (Caster Modifiers)
        // Quality: +30% (augmented) → Quality: +30%
        
        let formatted = qualityText;
        
        // 移除 (augmented) 標記
        formatted = formatted.replace(/\s*\(augmented\)/g, '');
        
        // 檢查是否有特殊修飾詞，如 (Caster Modifiers)
        const modifierMatch = formatted.match(/Quality\s*(\([^)]+\)):\s*(.+)/);
        if (modifierMatch) {
            const modifier = modifierMatch[1]; // (Caster Modifiers)
            const value = modifierMatch[2];    // +20%
            formatted = `Quality: ${value} ${modifier}`;
        }
        
        return formatted;
    }

    /**
     * 生成特殊標記 HTML
     * @param {Object} item - 物品物件
     * @returns {string} HTML 字串
     * @private
     */
    _generateSpecialMarkers(item) {
        let html = '';
        
        if (item.corrupted) {
            html += '<div class="poe-separator"></div>';
            html += '<div class="poe-corrupted">Corrupted</div>';
        }

        if (item.synthesised) {
            html += '<div class="poe-separator"></div>';
            html += '<div class="poe-synthesised">Synthesised Item</div>';
        }

        if (item.fractured) {
            html += '<div class="poe-separator"></div>';
            html += '<div class="poe-fractured">Fractured Item</div>';
        }

        return html;
    }

    /**
     * 從物品資料自動填充表單
     * @param {Object} item - 解析後的物品物件
     */
    autoFillForm(item) {
        // 自動填充物品名稱
        if (item.name) {
            const nameField = document.getElementById('item-name');
            if (nameField) nameField.value = item.name;
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
                'Swords': 'weapon',
                'Axes': 'weapon',
                'Maces': 'weapon',
                'Body Armours': 'armor',
                'Helmets': 'armor',
                'Gloves': 'armor',
                'Boots': 'armor',
                'Shields': 'armor'
            };

            const category = categoryMap[item.itemClass] || '';
            const categoryField = document.getElementById('item-category');
            if (category && categoryField) {
                categoryField.value = category;
            }
        }

        // 自動填充描述
        if (item.baseType && item.baseType !== item.name) {
            const descField = document.getElementById('item-description');
            if (descField) descField.value = item.baseType;
        }

        // 根據物品屬性設定標籤
        this._autoSetTags(item);
    }

    /**
     * 自動設定標籤
     * @param {Object} item - 物品物件
     * @private
     */
    _autoSetTags(item) {
        const tagsCheckboxes = document.querySelectorAll('input[name="tags"]');
        tagsCheckboxes.forEach(checkbox => checkbox.checked = false);

        // 根據物品特性設定標籤
        if (item.synthesised) {
            const synthCheckbox = document.querySelector('input[name="tags"][value="synthesised"]');
            if (synthCheckbox) synthCheckbox.checked = true;
        }

        if (item.corrupted) {
            // 可以添加腐化標籤（如果有的話）
        }

        // 如果是稀有物品，標記為新物品
        if (item.rarity === 'rare') {
            const newCheckbox = document.querySelector('input[name="tags"][value="new"]');
            if (newCheckbox) newCheckbox.checked = true;
        }

        // 如果是傳奇物品
        if (item.rarity === 'unique') {
            // 可以添加傳奇標籤
        }
    }

    /**
     * 檢測物品的影響類型
     * @param {Object} item - 物品物件
     * @returns {Array} 影響類型陣列
     */
    detectInfluences(item) {
        const influences = [];
        const itemText = JSON.stringify(item);

        if (itemText.includes('Shaper')) influences.push('shaper');
        if (itemText.includes('Elder')) influences.push('elder');
        if (itemText.includes('Hunter')) influences.push('hunter');
        if (itemText.includes('Redeemer')) influences.push('redeemer');
        if (itemText.includes('Crusader')) influences.push('crusader');
        if (itemText.includes('Warlord')) influences.push('warlord');

        return influences;
    }

    /**
     * 獲取物品的估值信息（預留功能）
     * @param {Object} item - 物品物件
     * @returns {Object} 估值信息
     */
    getItemValue(item) {
        // 這裡可以添加與 POE API 或價格檢查服務的集成
        return {
            estimated: 0,
            currency: 'DIVINE',
            confidence: 'low',
            source: 'manual'
        };
    }
}

/**
 * 物品顯示管理器
 */
class ItemDisplayManager {
    constructor(parser) {
        this.parser = parser || new POEItemParser();
    }

    /**
     * 預覽物品功能
     */
    previewItem() {
        const itemDataField = document.getElementById('item-data');
        const previewContainer = document.getElementById('item-preview');
        const itemDisplay = document.getElementById('item-display');

        if (!itemDataField || !previewContainer || !itemDisplay) {
            console.error('無法找到必要的 DOM 元素');
            return;
        }

        const itemData = itemDataField.value.trim();

        if (!itemData) {
            previewContainer.style.display = 'none';
            return;
        }

        try {
            const parsedItem = this.parser.parseItemData(itemData);
            const itemHtml = this.parser.generateItemHtml(parsedItem);
            itemDisplay.innerHTML = itemHtml;
            previewContainer.style.display = 'block';

            // 自動填充表單欄位
            this.parser.autoFillForm(parsedItem);

            // 添加成功動畫
            this._addPreviewAnimation(previewContainer);
        } catch (error) {
            console.error('解析物品失敗:', error);
            this._showError('無法解析物品資料，請檢查格式是否正確');
        }
    }

    /**
     * 切換物品詳情顯示
     * @param {HTMLElement} button - 點擊的按鈕元素
     */
    toggleItemDetails(button) {
        const itemCard = button.closest('.item-card');
        const itemDetails = itemCard.querySelector('.item-details');
        
        if (!itemDetails) return;

        const isVisible = itemDetails.style.display !== 'none';
        itemDetails.style.display = isVisible ? 'none' : 'block';
        button.textContent = isVisible ? '物品詳情' : '隱藏詳情';
        
        // 添加動畫效果
        if (!isVisible) {
            this._addToggleAnimation(itemDetails);
        }
    }

    /**
     * 為預覽添加動畫效果
     * @param {HTMLElement} container - 容器元素
     * @private
     */
    _addPreviewAnimation(container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            container.style.transition = 'all 0.3s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 10);
    }

    /**
     * 為切換添加動畫效果
     * @param {HTMLElement} element - 要動畫的元素
     * @private
     */
    _addToggleAnimation(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.3s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 10);
    }

    /**
     * 顯示錯誤訊息
     * @param {string} message - 錯誤訊息
     * @private
     */
    _showError(message) {
        // 這個函數應該與主應用的錯誤顯示系統集成
        if (typeof showMessage === 'function') {
            showMessage(message, 'error');
        } else {
            console.error(message);
            alert(message);
        }
    }
}

// 創建全域實例
const itemParser = new POEItemParser();
const itemDisplayManager = new ItemDisplayManager(itemParser);

// 全域函數，供 HTML 調用
function previewItem() {
    itemDisplayManager.previewItem();
}

function toggleItemDetails(button) {
    itemDisplayManager.toggleItemDetails(button);
}

function parseItemData(itemText) {
    return itemParser.parseItemData(itemText);
}

function generatePoeItemHtml(item) {
    return itemParser.generateItemHtml(item);
}

function autoFillFormFromItemData(item) {
    return itemParser.autoFillForm(item);
} 