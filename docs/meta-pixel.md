# Meta Pixel

## 投放前技術門檻

網站需使用 HTTPS，具備隱私權與 Cookie 說明、合法的同意管理、可驗證的轉換流程及 Meta Business 權限。正式上線前將 Pixel ID `000000000000000` 替換為真實值。

## 事件

- `PageView`：基本碼載入頁面時送出一次。
- `Lead`：使用者完成有效名單動作後送出，不應只因看見表單就觸發。
- `Contact`：使用者主動開啟聯絡管道時使用；需先定義與 Lead 的差異。

```javascript
fbq('init', '000000000000000');
fbq('track', 'PageView');
fbq('track', 'Lead');
fbq('track', 'Contact');
```

不得送出 Email、電話等未適當處理的個資。本範例的 `generate_lead` 會映射至 Meta `Lead`。

## Domain verification

在 Meta Business 設定新增正式網域，依指示使用 DNS TXT（通常最穩定）、HTML 檔案或 meta-tag 驗證。確認資產擁有權及事件設定屬於正確 Business，DNS 變更可能需要時間生效。

## 測試與常見錯誤

安裝 Meta Pixel Helper，開啟測試頁並操作 CTA；同時在 Events Manager 的 Test Events 確認 Pixel、事件名稱、網址及次數。常見錯誤包括 placeholder 未替換、Pixel 初始化兩次、Lead 在頁面載入即觸發、事件綁錯按鈕、瀏覽器阻擋造成誤判、未取得同意即追蹤、驗證錯誤網域及正式／測試 Pixel 混用。
