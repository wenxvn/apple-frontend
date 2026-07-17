# 当前项目状态

最后更新：2026-07-17

本文件只保存后续任务必须立即知道的最新状态，目标是让新会话快速恢复上下文。历史细节请按需在 `docs/PROJECT_LOG.md` 中定向查询。

## 当前状态

- React + Vite + Tailwind CSS 4 单页项目已初始化，`npm run build` 通过。
- `src/App.jsx` 已恢复为两段式 MacBook Pro 页面：首屏 Hero 通过锚点进入下方的产品探索区；探索区保留银色/深空黑色、14/16 英寸和拖拽旋转查看。
- 程序化 Three.js 笔记本已增强为可辨识的屏幕、键盘、触控板、扬声器、铰链与机身；屏幕使用深色渐变反射，不再使用环形装饰图案。
- `src/styles.css` 定义首屏导航、Hero、下方探索器、紧凑的胶囊式配置按钮、键盘可访问焦点和移动端响应式规则。
- `ui-registry.md` 已记录 Hero 与产品探索配置器的可复用视觉模式。
- 已安装 `zustand` 和 `clsx`，可用于后续动态交互与条件 CSS 类名。
- 已安装 `react-responsive`，可用于按媒体查询调整布局或内容；动画仍使用 GSAP。
- GitHub 仓库 `wenxvn/apple-frontend` 的 `main` 分支已配置 `origin` 上游、显式推送远程和显式 `origin.pushurl`；2026-07-16 已确认可直接推送且与远端同步。
- Vercel 项目 `wenxvns-projects/apple-frontend` 已连接 GitHub 仓库 `wenxvn/apple-frontend`；`main` 的后续推送会自动创建生产部署。框架为 Vite，构建命令为 `npm run build`，输出目录为 `dist`。
- 首次生产部署已就绪，生产验收地址为 `https://apple-frontend-eight.vercel.app`。
- 自动部署已由提交 `c23d86e` 验证为 `READY`。
- 工作流已使用“架构说明 + 当前状态 + 历史记录”分层，且具备任务模板与架构决策记录。

## 当前约定

- 新任务先读 `AGENTS.md`、`docs/ARCHITECTURE.md` 和本文件；只在需要历史时再定向查阅 `docs/PROJECT_LOG.md`。
- 非简单功能先规划，完成后验证并更新项目记录。
- 不记录或提交密钥、令牌、环境变量值和本地服务元数据。

## 下一步

- 如需继续，优先在真实桌面和移动设备上微调镜头角度与拖拽旋转手感；保持深色渐变屏幕，不要重新加入环形图案。

## 已知事项

- 生产构建会提示 Three.js 相关包使主包超过 500 kB；当前是学习示例，可在需要性能优化时再拆分代码。
