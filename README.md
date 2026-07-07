# 衡域策略顧問 EQUA — 官方網站

EQUA Strategy Consulting Co., Ltd. 的對外官方網站。純靜態站（HTML / CSS，無建置流程），由 GitHub Pages 部署。

## 網站結構

| 頁面 | 內容 |
|------|------|
| `index.html` | 首頁：主張、數字、關於摘要、六大服務、EQUA Framework™、品牌牆 |
| `about.html` | 關於：關於我們、我們相信、服務理念與 EQUA Framework™、創辦人 Alice Wu |
| `services.html` | 服務：六大服務細節、三種合作方案 |
| `contact.html` | 聯絡：聯繫資訊、FAQ |
| `assets/` | `style.css`、`logo.svg`、`logo-reversed.svg`、`nav.js` |

## 設計規範

依《衡域策略_品牌識別規範 v1.0》：

- 主色 靛藍 `#1E3A8A`、強調 電光藍 `#2E8FE6`、深底 墨藍 `#15264D`
- 暖中性：暖灰 `#6B665D`、米灰 `#BDB7AB`、亞麻白 `#F5F3EE`
- 字體：英數 Space Grotesk；中文 思源黑體 Noto Sans TC；引言 思源宋體
- 標誌：圍棋佈局印記（棋盤＝域，決勝子＝成長）

## 本機預覽

```bash
python3 -m http.server 8000
# 開啟 http://localhost:8000
```

## 部署

推送至 `main` 分支後，GitHub Pages 自動發佈。自訂網域 `equastrategy.com.tw` 可於
Settings → Pages 設定，並在 DNS 指向 GitHub Pages 後於本 repo 加入 `CNAME` 檔。
