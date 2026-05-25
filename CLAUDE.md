# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目简介

恰饭 (qiafan) — "中午吃什么" 随机选择器。基于 React 18 + Vite 的纯前端 SPA。

## 常用命令

```bash
npm install              # 安装依赖
npm run dev              # 启动开发服务器（已配置 --host，局域网可访问）
npm run build            # 生产构建，输出到 dist/
npm run preview          # 预览生产构建
```

## 架构概览

- **入口**: `src/main.jsx` → `src/App.jsx`
- **数据**: `src/data/foods.js` — 35 种食物，按 category 分 5 类（面食、米饭、火锅、小吃、西式）
- **组件**: 全部在 `src/components/`，均为无状态展示组件
  - `Header` — 标题 "中午吃什么？"
  - `FoodGrid` / `FoodCard` — 食物标签网格，通过 `isSpinning` / `isSelected` props 控制动画状态
  - `PickerButton` — 随机选择按钮，`isSpinning` 时禁用
  - `ResultModal` — 结果弹窗，2.5 秒自动关闭
- **样式**: `src/App.css` — 全局样式，CSS 变量定义主题色，响应式断点在 600px / 380px

## 核心交互流程

1. 用户点击 "帮我选一个" → `App.handlePick()` 触发
2. `isSpinning=true`，所有卡片闪烁动画（1.2 秒），`selectedFood` 保持 `null` 不在转圈期间锁定结果
3. 1.2 秒后 `setTimeout` 回调：`isSpinning=false`，设置 `selectedFood` 并弹出弹窗
4. 弹窗 2.5 秒自动关闭，或手动点 "再来一次"
5. 随机逻辑会排除上次结果，避免连续两次选到同一食物

## 样式约定

- CSS 变量定义在 `:root`，主色 `--color-primary: #e85d3a`
- 卡片选中态：红色边框 + 弹跳动画
- 弹窗：CSS `@keyframes` 驱动放大 + emoji 旋转动画
