# Memory — MacBook Pro 产品探索页

Last updated: 2026-07-16 11:35 CST

## What was built

- `src/App.jsx` 现在展示可旋转的 Three.js MacBook Pro，支持银色/深空黑色和 14/16 英寸选择。
- `src/styles.css` 实现黑色产品探索布局、胶囊式控制器、键盘焦点和移动端规则。
- `ui-registry.md`、`docs/STATE.md` 与 `docs/PROJECT_LOG.md` 已记录页面模式、当前状态和验证结果。

## Decisions made

- 继续使用程序化 Three.js 模型，不引入外部 3D 资源；颜色驱动材质，尺寸驱动模型比例。
- 旋转仅在按住画布拖动时发生，并限制俯仰与偏航范围，保持可用的产品视角。

## Problems solved

- 修正显示器盖板朝向，确保默认镜头正面显示屏幕，同时在旋转时呈现键盘和机身。

## Current state

- `npm run build` 通过；本地浏览器已验证默认状态、颜色与尺寸切换、无障碍选中状态和拖拽旋转。
- Three.js 主包超过 500 kB 的构建提示仍存在，是已知的后续性能优化项。

## Next session starts with

- 如需继续，使用 `npm run dev` 在桌面与移动端微调相机取景、旋转灵敏度或显示器图案。

## Open questions

- 无。
