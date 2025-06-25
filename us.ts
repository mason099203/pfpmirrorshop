/**
 * English Language Pack
 * @description Contains all English translation texts
 */

interface ILanguageData {
    // Page title and description
    pageTitle: string;
    pageSubtitle: string;
    
    // Navigation and buttons
    twitchLabel: string;
    discordLabel: string;
    shopLabel: string;
    
    // Control panel
    categoryLabel: string;
    allCategories: string;
    weapon: string;
    armor: string;
    accessory: string;
    itemCountLabel: string;
    
    // Item related
    feeLabel: string;
    ownerLabel: string;
    itemDetailsLabel: string;
    
    // Tags
    tags: {
        free: string;
        cheap: string;
        expensive: string;
        popular: string;
        new: string;
        hot: string;
        recommended: string;
    };
    
    // Button texts
    copyPoB: string;
    whisper: string;
    
    // Messages
    messages: {
        pobCopied: string;
        whisperCopied: string;
        itemAdded: string;
        itemError: string;
    };
    
    // Footer
    footerText: string;
    
    // Language switch
    languageSwitch: {
        zh: string;
        en: string;
    };
}

export const enUS: ILanguageData = {
    pageTitle: "PFP Mirror Shop",
    pageSubtitle: "Free & Low-cost Mirror Services by PFP and Community",
    
    twitchLabel: "poogf01",
    discordLabel: "PFP Server",
    shopLabel: "Shop",
    
    categoryLabel: "Item Category",
    allCategories: "All Categories",
    weapon: "Weapon",
    armor: "Armor",
    accessory: "Accessory",
    itemCountLabel: "Shop Items",
    
    feeLabel: "FEE",
    ownerLabel: "Owner",
    itemDetailsLabel: "Item Details",
    
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
};

export default enUS; 