# Memory — MacBook Pro 性能展示

Last updated: 2026-07-17 14:10 CST

## What was built

- `src/App.jsx` 在产品探索器后增加性能展示章节，并将桌面“性能”导航连接至 `#performance`。
- 新章节使用抽象 M4 芯片视觉和三项静态性能指标；首次进入视口时由 `IntersectionObserver` 触发 GSAP 顺序动画。
- `src/styles.css` 增加桌面三栏和移动端纵向指标布局；`ui-registry.md`、`docs/STATE.md` 和 `docs/PROJECT_LOG.md` 已同步。

## Decisions made

- 延续现有黑色沉浸式产品叙事，以一个居中的性能产物替代卡片或仪表盘。
- 不接入真实基准数据、服务端或新增依赖；指标仅为前端静态展示。
- 减弱动态偏好下跳过 GSAP 初始动画，保证全部性能内容保持可见。

## Problems solved

- 收束芯片装饰线，使性能章节自身在 `390px` 移动视口不再产生横向溢出。

## Current state

- `npm run build` 与 `git diff --check` 通过；本地浏览器确认桌面锚点、性能动画和移动端性能布局，应用控制台无错误。
- 整页仍有既有探索器 `118vw` 舞台造成的移动端横向宽度，未在本次范围内修改。
- Three.js 相关主包超过 500 kB 的构建提示仍存在，尚未进行代码拆分。

## Next session starts with

- 如需扩展，优先为“显示屏”导航实现同等级的展示章节，并维持三段产品叙事的深色节奏。

## Open questions

- 无。
