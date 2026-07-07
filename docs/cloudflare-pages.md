# Cloudflare Pages 部署

## 目的與前置條件

將不需伺服器的靜態網站部署至全球 CDN，並取得預覽部署、HTTPS 與自訂網域。需有 Cloudflare 帳號、可部署的靜態檔案及 Node.js/npm；Wrangler 未安裝時可在專案內執行 `npm install --save-dev wrangler`，不需全域安裝。

## Direct Upload

先登入；瀏覽器授權後，建立一次專案，再部署內容：

```bash
wrangler login
cd /Users/wn.lin/vscode-git/cf-static-web-deploy-notes/examples/static-site
wrangler pages project create cf-static-web-demo
wrangler pages deploy . --project-name=cf-static-web-demo
```

後續更新只需再次執行 deploy。若使用本機安裝，將 `wrangler` 改成 `npx wrangler`。

## GitHub 自動部署

在 Cloudflare Dashboard 建立 Pages 專案、連結 GitHub repo 與 production branch，設定：

```text
Framework preset: None
Build command: 留空
Build output directory: examples/static-site
```

每次推送會產生部署；非 production branch 可作預覽。純靜態站不需 build command，輸出目錄直接指向站點根目錄。

## 自訂網域與 HTTPS

在 Pages 專案的 Custom domains 加入 `example.com`，依畫面建立或調整 DNS。先決定 root 與 `www` 何者為 canonical，另一者做 301 redirect。等待憑證啟用後確認 HTTPS，避免頁面載入 HTTP 資源；若網域已有特殊 CAA、代理或 SSL/TLS 規則，需一併檢查。

## `_headers`

`_headers` 由 Pages 讀取，用來設定安全標頭與靜態資源快取。本範例為有版本概念的 assets 設長快取；更新同名檔案時應改檔名或調整策略，避免使用者讀到舊版。

## 驗證

```bash
curl -I https://example.com/
curl -I https://example.com/assets/style.css
curl -s https://example.com/robots.txt
curl -s https://example.com/sitemap.xml
```

確認狀態碼、HTTPS、安全標頭、Cache-Control、canonical 與網址內容一致。
