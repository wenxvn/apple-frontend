# 当前项目状态

最后更新：2026-07-16

本文件只保存后续任务必须立即知道的最新状态，目标是让新会话快速恢复上下文。历史细节请按需在 `docs/PROJECT_LOG.md` 中定向查询。

## 当前状态

- React + Vite + Tailwind CSS 4 单页项目已初始化，`npm run build` 通过。
- `src/App.jsx` 已实现 Apple 风格的 MacBook Pro Hero：Three.js 程序化笔记本、彩色灯光、GSAP 入场动画与指针视差。
- `src/styles.css` 定义该页面的深色沉浸式视觉、导航、渐变标题、CTA 和响应式规则。
- `ui-registry.md` 已记录首个 Hero 页面可复用的视觉模式。
- 已安装 `zustand` 和 `clsx`，可用于后续动态交互与条件 CSS 类名。
- GitHub 仓库 `wenxvn/apple-frontend` 的 `main` 分支已配置 `origin` 上游、显式推送远程和显式 `origin.pushurl`；2026-07-16 已确认可直接推送且与远端同步。
- Vercel 项目 `wenxvns-projects/apple-frontend` 已关联，框架为 Vite，构建命令为 `npm run build`，输出目录为 `dist`。
- 尚未创建生产部署。
- 工作流已使用“架构说明 + 当前状态 + 历史记录”分层，且具备任务模板与架构决策记录。

## 当前约定

- 新任务先读 `AGENTS.md`、`docs/ARCHITECTURE.md` 和本文件；只在需要历史时再定向查阅 `docs/PROJECT_LOG.md`。
- 非简单功能先规划，完成后验证并更新项目记录。
- 不记录或提交密钥、令牌、环境变量值和本地服务元数据。

## 下一步

- 如需继续，优先在真实设备上微调镜头角度、文案和导航链接的实际跳转目标。

## 已知事项

- 生产构建会提示 Three.js 相关包使主包超过 500 kB；当前是学习示例，可在需要性能优化时再拆分代码。
