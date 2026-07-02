# midnight-escape 專案規格

## 1. 專案定位
這是一個手機優先的多人網頁遊戲專案，暫定名稱為《午夜逃殺場》。目標是做出可用手機和朋友一起玩的 2D 橫式多人合作／背刺／逃脫遊戲。

## 2. 核心目標
- 手機操作順暢
- UI 精緻，不廉價
- 支援多人房間
- 支援 Firebase Realtime Database 同步
- 支援部署到 Vercel
- 每次修改都保留 Git 可回復紀錄

## 3. 技術方向
- 前端：React + Vite
- 遊戲核心：Phaser 3
- 多人同步：Firebase Realtime Database
- 部署：Vercel
- 版本管理：Git + GitHub

## 4. 開發安全規則
- 不直接在 main 上做大型功能修改
- 功能開發使用 codex/ 開頭分支
- 不自動 push
- 不自動部署
- 不擅自改 .env、API key、Firebase config、Vercel environment variables
- 不擅自刪除原始檔
- 修改後必須回報修改檔案、影響範圍、測試結果與回復方式

## 5. 手機 UI 重點
- iPhone / iPad 皆需注意
- 橫式與直式要檢查
- 按鈕不可遮擋主要操作區
- 觸控區域要夠大
- 不該滑動的頁面不可亂滑
- 需要滑動的面板要明確可滑

## 6. 多人遊戲重點
- 房間建立與加入
- 玩家準備狀態
- 房主權限
- Firebase 路徑設計
- 玩家 HP、背包、道具不可被舊資料覆蓋
- 門、碰撞、怪物 AI、觀戰、結束流程不可互相破壞

## 7. 下一階段
先建立最小可行版本：
1. React + Vite 基礎專案
2. 首頁
3. 單人測試場景
4. Phaser 角色移動
5. 再加入 Firebase 多人房間
6. 最後部署 Vercel
