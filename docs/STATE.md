# 当前项目状态

最后更新：2026-07-16

本文件只保存后续任务必须立即知道的最新状态，目标是让新会话快速恢复上下文。历史细节请按需在 `docs/PROJECT_LOG.md` 中定向查询。

## 当前状态

- React + Vite + Tailwind CSS 4 学习项目已初始化，`npm run build` 通过。
- `src/App.jsx` 包含 Tailwind、Three.js 和 GSAP 的组合示例。
- GitHub 仓库 `wenxvn/apple-frontend` 的 `main` 分支已配置并推送。
- Vercel 项目 `wenxvns-projects/apple-frontend` 已关联，框架为 Vite，构建命令为 `npm run build`，输出目录为 `dist`。
- 尚未创建生产部署。
- 工作流已使用“架构说明 + 当前状态 + 历史记录”分层，且具备任务模板与架构决策记录。

## 当前约定

- 新任务先读 `AGENTS.md`、`docs/ARCHITECTURE.md` 和本文件；只在需要历史时再定向查阅 `docs/PROJECT_LOG.md`。
- 非简单功能先规划，完成后验证并更新项目记录。
- 不记录或提交密钥、令牌、环境变量值和本地服务元数据。

## 下一步

- 由项目负责人确定第一个实际学习功能或页面，再按 `docs/TASK_TEMPLATE.md` 建立任务。

## 已知事项

- 生产构建会提示 Three.js 相关包使主包超过 500 kB；当前是学习示例，可在需要性能优化时再拆分代码。
