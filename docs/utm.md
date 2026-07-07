# UTM 命名規則

## 欄位

- `utm_source`：來源平台，如 `google`、`meta`、`newsletter`
- `utm_medium`：媒介，如 `cpc`、`paid_social`、`email`
- `utm_campaign`：活動，如 `cf_static_web_launch`
- `utm_content`：素材或版位，如 `hero_cta`
- `utm_term`：付費搜尋關鍵字或受控的受眾標記

## 範例

Google Ads：

```text
https://demo.wnlin.org/?utm_source=google&utm_medium=cpc&utm_campaign=cf_static_web_launch&utm_content=hero_cta&utm_term=cloudflare_pages_static_site
```

Meta Ads：

```text
https://demo.wnlin.org/?utm_source=meta&utm_medium=paid_social&utm_campaign=cf_static_web_launch&utm_content=video_a
```

Email：

```text
https://demo.wnlin.org/?utm_source=newsletter&utm_medium=email&utm_campaign=cf_static_web_launch&utm_content=primary_cta
```

## 規則

統一小寫英文、使用底線分隔、維護受控字典；活動名稱包含可辨識主題，必要時再加期間。素材名稱能回查廣告版本，不放姓名、Email 或其他個資。建立連結後保留一份活動對照表。

不建議混用 `Facebook`／`fb`／`meta`、空格與大小寫、用 `test1` 等無意義名稱、在 source 填 campaign，或把敏感資料寫入網址。

## 發布前檢查

- [ ] 目的網址為正式 HTTPS 網址
- [ ] source／medium 符合命名字典
- [ ] campaign 與活動表一致
- [ ] content 能區分素材或版位
- [ ] 網址沒有個資或秘密資訊
- [ ] redirect 後 UTM 與 `gclid` 仍保留
- [ ] GA4 Realtime 可看到正確流量來源
