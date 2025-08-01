# PFP Mirror Shop - POE 物品交易平台

基於 [PFP Mirror Shop](https://www.pfpmirror.shop/) 的現代化物品交易網頁，專為 Path of Exile 玩家設計的鏡像服務平台。

## 功能特色

### 🎮 物品展示
- **響應式設計** - 支援桌面、平板、手機等各種裝置
- **物品篩選** - 依分類（武器、護甲、飾品）篩選物品
- **排序功能** - 依類型、價格、擁有者排序
- **標籤系統** - 支援新物品、灼熱總督、世界吞噬者等標籤

### 📝 張貼物品
- **簡易表單** - 直觀的物品張貼介面
- **完整資訊** - 物品名稱、鏡像費用、分類、描述等
- **標籤選擇** - 多種遊戲內容標籤可選
- **即時驗證** - 自動檢查必填欄位

### 🔧 互動功能
- **一鍵複製** - 複製 POB 連結到剪貼簿
- **私聊功能** - 自動產生私聊訊息
- **即時更新** - 新增物品後立即顯示
- **視覺回饋** - 操作成功時的動畫效果

## 檔案結構

```
pfp/
├── index.html      # 主要 HTML 結構
├── styles.css      # CSS 樣式表
├── script.js       # 主要 JavaScript 功能
├── item-parser.js  # POE 物品解析和顯示模組
└── README.md       # 專案說明
```

## 使用方法

### 1. 開啟網頁
直接用瀏覽器開啟 `index.html` 即可使用。

### 2. 瀏覽物品
- 在「查看物品」頁面瀏覽現有物品
- 使用分類篩選找尋特定類型物品
- 點擊「複製 PoB」取得物品配置連結
- 點擊「私聊」複製聯絡訊息

### 3. 張貼物品
1. 點擊「張貼物品」切換到張貼頁面
2. 填寫物品資訊：
   - **物品名稱** (必填)
   - **鏡像費用** (必填)
   - **物品分類** (必填)
   - **擁有者名稱** (必填)
   - **聯絡資訊** (必填)
   - **物品描述** (選填)
   - **標籤** (選填)
   - **POB 連結** (選填)
3. 點擊「張貼物品」完成

## 技術特色

### 🎨 現代化設計
- **深色主題** - 適合長時間使用
- **金色強調** - 呼應 POE 遊戲風格
- **漸層效果** - 現代化視覺體驗
- **流暢動畫** - 提升用戶體驗

### 📱 響應式佈局
- **Grid 佈局** - 自適應螢幕大小
- **彈性設計** - 在各種裝置上都能完美顯示
- **觸控友善** - 針對行動裝置優化

### ⚡ JavaScript 功能
- **模組化架構** - 物品解析功能獨立成模組
- **類別導向設計** - 使用 ES6 類別組織程式碼
- **完整 JSDoc 註釋** - 詳細的程式碼文檔
- **事件委派** - 高效的事件處理
- **資料驗證** - 確保資料完整性
- **錯誤處理** - 友善的錯誤提示

## 模組說明

### 📦 `item-parser.js` - POE 物品解析模組
專門處理 Path of Exile 物品相關功能的獨立模組：

#### 🔧 主要類別：
- **`POEItemParser`** - 物品解析和 HTML 生成核心類別
  - `parseItemData()` - 解析遊戲內複製的物品資料
  - `generateItemHtml()` - 生成遊戲風格的物品顯示
  - `autoFillForm()` - 自動填充表單欄位
  - `detectInfluences()` - 檢測物品影響類型

- **`ItemDisplayManager`** - 物品顯示管理類別
  - `previewItem()` - 預覽物品功能
  - `toggleItemDetails()` - 切換物品詳情顯示
  - 動畫效果管理

#### 🎯 功能特色：
- **智慧解析** - 自動識別物品類型、稀有度、詞綴
- **完美還原** - 1:1 重現遊戲內物品外觀
- **模組化設計** - 易於擴展和維護
- **類型安全** - 完整的 JSDoc 類型註釋

### 📄 `script.js` - 主要應用邏輯
處理網站的核心功能：
- 物品列表管理
- 表單處理和驗證
- 導航和篩選
- 用戶互動功能

## 瀏覽器支援

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+

## 主要類別說明

### 物品標籤
- **新物品** - 最近新增的物品
- **灼熱總督** - Searing Exarch 物品
- **世界吞噬者** - Eater of Worlds 物品
- **塑者物品** - Shaper 物品
- **異界尊師物品** - Elder 物品
- **狩獵者物品** - Hunter 物品

### 物品分類
- **武器** - 各種武器類型
- **護甲** - 胸甲、頭盔、手套等
- **飾品** - 戒指、項鍊、腰帶等

## 自訂功能

### 新增更多標籤
在 `script.js` 的 `getTagDisplayName` 函數中新增：

```javascript
const tagNames = {
    'new': '新物品',
    'custom-tag': '自訂標籤',
    // 新增更多標籤...
};
```

### 修改樣式
編輯 `styles.css` 檔案：
- 修改色彩主題
- 調整間距和大小
- 新增動畫效果

## 技術支援

如有問題或建議，請聯繫開發團隊。

---

**免責聲明**: 本產品未與 Grinding Gear Games 有任何關聯或認可。 