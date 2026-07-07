# cf-static-web-deploy-notes

Cloudflare Pages 靜態網站的部署紀錄與最小可部署範例，涵蓋 SEO／GEO／AEO、GA4、Google Ads、Meta Pixel、UTM 與上線檢查。

## 適用情境

- 不需建置流程的活動頁、品牌頁或服務 Landing Page
- 需要快速部署、版本控管及行銷成效追蹤的靜態網站
- 需要提供搜尋引擎與 AI 系統清楚、可引用內容的網站

## 目錄

- `docs/`：部署、內容最佳化及追蹤設定文件
- `checklists/`：上線前逐項檢查表
- `examples/static-site/`：純 HTML／CSS／JavaScript 範例站

## Quick Start

```bash
cd /Users/wn.lin/vscode-git/cf-static-web-deploy-notes/examples/static-site
python3 -m http.server 8000
```

開啟 `http://localhost:8000`。正式上線前，請先替換本文件末尾列出的 placeholder。

## Cloudflare Pages 部署

Direct Upload（未安裝 Wrangler 時可使用 `npm install --save-dev wrangler`，不要放入真實 token）：

```bash
cd /Users/wn.lin/vscode-git/cf-static-web-deploy-notes/examples/static-site
wrangler login
wrangler pages project create cf-static-web-demo
wrangler pages deploy . --project-name=cf-static-web-demo
```

GitHub 自動部署則在 Cloudflare Pages 連結 repo，設定 Framework preset 為 `None`、Build command 留空、Build output directory 為 `examples/static-site`。詳見 [Cloudflare Pages 文件](docs/cloudflare-pages.md)。

## 涵蓋範圍

- SEO：metadata、標題層級、canonical、robots、sitemap、Open Graph、結構化資料
- GEO／AEO：定義型段落、FAQ、可被搜尋或 AI 回答引用的內容結構
- 追蹤：GA4 `page_view`、CTA、名單、下載、電話事件；Google Ads 轉換；Meta Pixel
- 歸因：Google Ads、Meta Ads 與 Email 的 UTM 命名規則

## 上線前檢查

依 [上線檢查表](checklists/go-live-checklist.md) 驗證網域、HTTPS、SEO、事件、廣告與隱私資訊，並執行：

```bash
grep -R "G-XXXXXXXXXX\|000000000000000\|example.com" examples/static-site
grep -R -i "token\|secret\|password\|api_key\|apikey" .
```

## 後續需替換資訊

Google Ads Conversion ID／Label 與 Meta Pixel ID。正式網域、GA4 Measurement ID、品牌名稱、服務名稱、主要轉換目標及聯絡信箱已設定。
