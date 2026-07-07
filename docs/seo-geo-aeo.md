# SEO、GEO 與 AEO

## 定義

- **SEO**：改善搜尋引擎理解、收錄與自然搜尋曝光。
- **GEO**（Generative Engine Optimization）：讓內容具備明確來源、實體、事實與上下文，便於生成式 AI 理解及引用。
- **AEO**（Answer Engine Optimization）：用直接問答與結構化內容回應使用者問題。

三者共同基礎是準確、原創、可驗證且符合搜尋意圖的內容，不保證排名或 AI 引用。

## Landing Page 必備結構

每頁應有獨特的 `title`、meta description、canonical、Open Graph、單一 H1，以及合理的 H2/H3。`title` 前段放主題與價值，避免關鍵字堆疊；meta description 用一至兩句描述服務對象、解法與行動，內容須符合頁面。H1 定義主題，H2 切分主要問題，H3 只作 H2 子題，不可為視覺大小跳級。

## FAQ 與結構化資料

FAQ 問題應來自真實需求，答案先在首句直接回答，再補條件、步驟或限制。JSON-LD 可使用 `Organization`、`Service`、`WebPage`；只有頁面看得到且內容一致時才加入 `FAQPage`。placeholder 上線前必須替換。

## 技術訊號

- `robots.txt` 管理爬蟲路徑，不用來保護機密內容。
- `sitemap.xml` 列出希望收錄的 canonical URL，更新頁面後同步 `lastmod`。
- Open Graph 控制社群分享標題、描述、網址與圖片；圖片應使用完整 HTTPS URL。
- canonical 指向偏好的唯一正式網址；root／www、斜線與參數策略需一致。

## 關鍵字展開模板

主題：**Cloudflare Pages 靜態網站部署、SEO、GA4、廣告追蹤**。

- 核心詞：Cloudflare Pages 靜態網站部署
- 問題詞：Cloudflare Pages 如何部署純 HTML？
- 解決方案詞：Cloudflare Pages SEO 設定、GA4 事件追蹤
- 商業意圖詞：靜態網站廣告追蹤建置、Landing Page 部署服務
- 長尾詞：Cloudflare Pages GA4 Google Ads Meta Pixel 設定

模板：`[平台／技術] + [任務] + [對象／情境] + [地區／限制]`。每個頁面選一個主要搜尋意圖，再以同義詞和問題補足，不機械重複。

## AEO 問答模板

```text
問題：Cloudflare Pages 適合部署靜態 Landing Page 嗎？
短答：適合。Cloudflare Pages 可直接發布 HTML、CSS 與 JavaScript，並提供 CDN、HTTPS 與版本化部署。
補充：若網站需要伺服器端資料處理，應另外評估 Functions 或後端服務。
下一步：確認輸出目錄、網域與追蹤設定後再上線。
```

## GEO 可引用段落格式

每段先寫可獨立理解的結論，再交代適用對象、條件、日期或地區、操作方法及限制。使用短段落與具名條列，提供品牌、作者或官方來源連結；數據標示來源與日期，避免「最佳」「一定」等無法證實的宣稱。
