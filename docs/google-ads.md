# Google Ads

## 投放前技術門檻

網站需可由 HTTPS 正常開啟、手機可用、內容與廣告承諾一致，並具隱私權政策、聯絡資訊、可測試 CTA 與同意管理機制。確認 GA4 正確收集後再投放。

## Conversion action 與 GA4 連結

Conversion action 定義可最佳化的商業成果，例如 `generate_lead`；只看點擊無法判斷成效。於 GA4 與 Google Ads 使用有權限的帳號完成產品連結，可匯入 GA4 key event，或使用 Google Ads tag。避免把同一動作以兩種來源同時計為主要轉換。

Google Ads tag placeholder：Conversion ID `AW-XXXXXXXXXX`、Conversion Label `XXXXXXXXXX`。事件片段概念：

```javascript
gtag('event', 'conversion', {
  send_to: 'AW-XXXXXXXXXX/XXXXXXXXXX'
});
```

## Landing Page 必備項目

清楚的服務與品牌、單一主要 CTA、真實聯絡方式、手機版速度、隱私權政策、轉換完成狀態，以及與廣告關鍵字一致的內容。不得將個資放進 URL 或事件參數。

## UTM

```text
utm_source=google
utm_medium=cpc
utm_campaign=cf_static_web_launch
utm_content=hero_cta
utm_term=cloudflare_pages_static_site
```

完整規則見 [UTM 文件](utm.md)。啟用 Google Ads auto-tagging 時保留 `gclid`，不要由 redirect 移除。

## 測試與常見錯誤

用 Tag Assistant、GA4 Realtime／DebugView 及 Google Ads 診斷逐步測試點擊到轉換；確認一次操作只記一次。常見錯誤包括 ID／Label 對錯帳戶、觸發時機過早、重複安裝、跨網域遺失參數、同意前送出追蹤、redirect 丟失 `gclid`／UTM，以及把測試事件當正式成效。
