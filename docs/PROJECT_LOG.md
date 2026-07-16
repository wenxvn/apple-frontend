# 项目记录

这是只追加、且不包含敏感信息的实质工作记录。每次实质变更都必须在同一任务中更新。

## 2026-07-16 — 项目初始化

### 已完成步骤

1. 创建 Vite + React 应用结构。
2. 通过 Vite 插件加入 Tailwind CSS 4，并创建基于 Tailwind 的示例。
3. 在学习示例中加入由 GSAP 驱动动画的 Three.js Canvas。
4. 使用本地提交邮箱 `1055602033@qq.com` 初始化 Git，并将 `main` 推送到 `wenxvn/apple-frontend`。
5. 创建并关联 Vercel 项目 `wenxvns-projects/apple-frontend`。
6. 将 Vercel 配置为 Vite，构建命令为 `npm run build`，输出目录为 `dist`。

### 修改的文件

- 应用初始化：`package.json`、`vite.config.js`、`index.html`、`src/main.jsx`、`src/App.jsx`、`src/styles.css`。
- 仓库保护：`.gitignore`，其中包含环境文件保护规则。

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| npm | 安装依赖并构建应用 | `npm run build` 通过 |
| Git / GitHub | 初始化仓库并推送源码 | `main` 跟踪 `origin/main` |
| Vercel CLI | 创建、关联并配置托管项目 | 项目已初始化，未创建生产部署 |
| 本地 Vite 服务 | 验证本地服务可用性 | 本地 HTTP 请求成功响应 |

### 已做决策

- 使用 `@tailwindcss/vite` 接入 Tailwind CSS 4，不使用 PostCSS 配置。
- 部署配置保存在 Vercel 项目设置中；初始化阶段不创建部署。

### 当前状态与下一步

- 构建已通过，源码已推送到 GitHub。
- 开始下一个功能前，先阅读 `docs/ARCHITECTURE.md`，再阅读本记录，随后使用五个本地工作流技能规划。

## 2026-07-16 — Agent 工作流基线

### 已完成步骤

1. 添加 `AGENTS.md`，作为后续任务的必读入口。
2. 添加 `docs/ARCHITECTURE.md`，作为定向定位项目边界的地图。
3. 将本文件设为实质操作、验证和外部工具的只追加记录。
4. 注册五个必须使用的本地工作流技能：architect、review、remember、recover、imprint。

### 修改的文件

- `AGENTS.md`
- `docs/ARCHITECTURE.md`
- `docs/PROJECT_LOG.md`

### 验证

- `git diff --check` 通过。

### 验证

- `git diff --check` 通过。

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| 本地工作流技能 | 规范规划、审查、恢复、记忆和 UI 一致性流程 | 已由 `AGENTS.md` 强制要求 |

### 当前状态与下一步

- 后续任务可恢复项目上下文，无须大范围扫描仓库。
- 每次实质任务都要同步更新本记录。

## 2026-07-16 — 文档中文化

### 已完成步骤

1. 将 Agent 工作约定、架构说明和项目记录改为中文，方便项目负责人检查。

### 修改的文件

- `AGENTS.md`
- `docs/ARCHITECTURE.md`
- `docs/PROJECT_LOG.md`

### 验证

- `git diff --check` 通过。

## 2026-07-16 — 工作流补强

### 已完成步骤

1. 新增精简的 `docs/STATE.md`，作为新会话默认读取的当前状态。
2. 新增 `docs/TASK_TEMPLATE.md`，统一任务范围、验收、验证和外部操作的说明方式。
3. 新增 `docs/DECISIONS.md`，记录长期有效的架构决定。
4. 调整 `AGENTS.md`：完整项目历史改为按需定向查询，并明确实质变更与任务完成标准。

### 修改的文件

- `AGENTS.md`
- `docs/STATE.md`
- `docs/TASK_TEMPLATE.md`
- `docs/DECISIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/PROJECT_LOG.md`

### 已做决策

- 使用“架构说明 + 当前状态 + 历史记录”三层上下文，兼顾连续性与 token 效率。
- 只对实质变更进行记录，避免日志被无价值的过程信息淹没。

### 当前状态与下一步

- 工作流文档已具备任务规划、状态恢复、决策沉淀和完成检查能力。
- 下一项非简单任务开始前，使用 `docs/TASK_TEMPLATE.md` 建立计划。
