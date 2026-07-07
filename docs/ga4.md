# GA4 設定

GA4 用來衡量流量來源、內容互動與名單轉換。本網站使用 Measurement ID `G-J54H2JZ2RF`。

## 安裝 gtag.js

在所有頁面 `<head>` 加入非同步 Google tag，初始化 `dataLayer`、`gtag` 及 `config`。`config` 預設會送出 `page_view`；若自行控制頁面瀏覽事件，設定 `send_page_view: false`，避免重複。

```html
<script data-cfasync="false" async src="https://www.googletagmanager.com/gtag/js?id=G-J54H2JZ2RF"></script>
<script data-cfasync="false">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-J54H2JZ2RF');
</script>
```

`data-cfasync="false"` 可避免 Cloudflare Rocket Loader 改寫 Google tag 的執行順序；此屬性必須放在 `src` 前方。

## Consent Mode v2

網站在 Google tag 設定前先將 `analytics_storage`、`ad_storage`、`ad_user_data` 與 `ad_personalization` 設為 `denied`。使用者選擇後，再以 `gtag('consent', 'update', ...)` 更新狀態。選擇只儲存在本站的 `localStorage`，Cookie 橫幅不可預先勾選或以沉默視為同意。

## 建議事件

```javascript
trackEvent('click_cta', { location: 'hero' });
trackEvent('generate_lead', { method: 'email' });
trackEvent('file_download', { file_name: 'service-guide.pdf' });
trackEvent('phone_call_click', { location: 'contact' });
```

事件參數不要放姓名、Email、電話等個資。`page_view` 衡量頁面，`click_cta` 衡量 CTA、`generate_lead` 代表有效名單、`file_download` 代表檔案下載、`phone_call_click` 代表撥號意圖。

## 驗證與 Key event

開啟 GA4 Realtime 或 DebugView，再以無痕視窗逐一操作；確認事件只出現一次且參數正確。資料可能有短暫延遲。事件收到後，在 GA4 Admin 的 Events／Key events 將 `generate_lead` 標為 key event，命名必須完全一致。

## gtag.js 或 GTM

單一網站、少量固定追蹤可直接用 gtag.js，依賴較少。多平台、多標籤、行銷團隊需自行管理版本與觸發條件時用 Google Tag Manager。兩者勿重複安裝同一 GA4 設定，並依同意管理需求決定何時載入。
