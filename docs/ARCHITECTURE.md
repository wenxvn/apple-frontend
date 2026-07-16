# 架构说明

最后更新：2026-07-16

## 项目目的

`apple-frontend` 是用于学习 React、Tailwind CSS、Three.js 和 GSAP 的前端项目。

## 技术栈

| 领域 | 选择 |
| --- | --- |
| 应用框架 | React 19 + Vite |
| 样式 | 通过 `@tailwindcss/vite` 接入 Tailwind CSS 4 |
| 客户端状态 | Zustand（按需用于跨组件交互状态） |
| 类名组合 | clsx（条件式 CSS 类名） |
| 响应式布局 | react-responsive（按媒体查询切换布局或内容） |
| 3D 渲染 | Three.js |
| 动画 | GSAP |
| 托管 | Vercel，按 Vite 项目配置 |

## 仓库结构

| 路径 | 职责 |
| --- | --- |
| `src/main.jsx` | React 应用启动和全局样式引入 |
| `src/App.jsx` | 当前的 Tailwind、Three.js、GSAP 学习示例 |
| `src/styles.css` | Tailwind 引入和全局 CSS 基线 |
| `vite.config.js` | React 与 Tailwind 的 Vite 插件配置 |
| `package.json` | 脚本和依赖声明 |
| `docs/STATE.md` | 新会话默认读取的精简当前状态 |
| `docs/PROJECT_LOG.md` | 仅追加的非敏感工作与工具记录 |
| `docs/TASK_TEMPLATE.md` | 非简单任务的范围、验收和收尾模板 |
| `docs/DECISIONS.md` | 难以反转的架构决策记录 |
| `skills/` | 本地工作流技能，不属于应用源码 |

## 边界规则

- 应用 UI 放在 `src/`；项目运行与协作文档放在 `docs/`。
- 可复用的 UI 模式稳定后再写入 `ui-registry.md`；不要为一次性的样式说明创建该文件。
- Three.js 渲染器和 GSAP 生命周期清理默认放在拥有该 Canvas 的 React 组件中；仅当场景逻辑需要复用时才抽取模块。
- 未先在本文档记录新增边界时，不要增加服务端、API、数据库或部署行为。

## 验证方式

- `npm run build` 是基础构建验证。
- 本地开发使用 `npm run dev`。
- 浏览器、部署或集成验证都要记录在 `docs/PROJECT_LOG.md`。
