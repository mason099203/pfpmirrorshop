/**
 * 繁體中文語言包
 * @description 包含所有繁體中文翻譯文本
 */

interface ILanguageData {
    // 頁面標題和描述
    pageTitle: string;
    pageSubtitle: string;
    
    // 導航和按鈕
    twitchLabel: string;
    discordLabel: string;
    shopLabel: string;
    
    // 控制面板
    categoryLabel: string;
    allCategories: string;
    weapon: string;
    armor: string;
    accessory: string;
    itemCountLabel: string;
    
    // 物品相關
    feeLabel: string;
    ownerLabel: string;
    itemDetailsLabel: string;
    
    // 標籤
    tags: {
        free: string;
        cheap: string;
        expensive: string;
        popular: string;
        new: string;
        hot: string;
        recommended: string;
    };
    
    // 按鈕文本
    copyPoB: string;
    whisper: string;
    
    // 訊息
    messages: {
        pobCopied: string;
        whisperCopied: string;
        itemAdded: string;
        itemError: string;
    };
    
    // 頁腳
    footerText: string;
    
    // 語言切換
    languageSwitch: {
        zh: string;
        en: string;
    };
}

export const zhTW: ILanguageData = {
    pageTitle: "PFP Mirror Shop",
    pageSubtitle: "由 老P 和聊天室們提供的免費低價複製裝備",
    
    twitchLabel: "poogf01",
    discordLabel: "渣P伺服器",
    shopLabel: "商店",
    
    categoryLabel: "物品分類",
    allCategories: "所有分類",
    weapon: "武器",
    armor: "護甲", 
    accessory: "飾品",
    itemCountLabel: "商店物品數量",
    
    feeLabel: "FEE",
    ownerLabel: "擁有者",
    itemDetailsLabel: "物品詳情",
    
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
};

export default zhTW; 