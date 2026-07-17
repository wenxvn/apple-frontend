# Memory — MacBook Pro 主界面与产品探索

Last updated: 2026-07-17 12:55 CST

## What was built

- `src/App.jsx` 恢复两段式页面：首屏 Hero 包含导航、产品文案和通往 `#explore` 的锚点；下方保留可配置的产品探索区。
- 程序化 Three.js 模型抽为可复用的 `MacBookCanvas`，加强屏幕、键盘、触控板、扬声器、铰链和机身的可见性。
- 屏幕已从三组环形几何体改为深色渐变反射纹理；探索器仍支持颜色、尺寸和拖拽旋转。
- `src/styles.css`、`ui-registry.md`、`docs/STATE.md` 与 `docs/PROJECT_LOG.md` 已同步更新。

## Decisions made

- 保持程序化 Three.js 模型，不增加外部产品图片或 3D 资源。
- 主界面始终作为首个视口；“近距离看看”是下方独立产品区，不再替代首屏。
- 屏幕维持无符号、无环形装饰的低调深色反射，以凸显笔记本本体。

## Problems solved

- 修复探索页面错误取代主界面的问题。
- 调整镜头、屏幕开合角度、材质和灯光，避免深空黑色模型与黑色背景混在一起。

## Current state

- `npm run build` 通过；本地浏览器验证了首屏、锚点进入探索区、银色切换的选中状态和无控制台错误。
- 已知的 Three.js 主包超过 500 kB 构建提示仍存在，未在本次扩展为性能优化。

## Next session starts with

- 如有新的视觉反馈，在桌面和移动设备上优先微调镜头角度、模型亮度和拖拽手感。

## Open questions

- 无。
