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

## 2026-07-16 — GitHub 推送恢复

### 已完成步骤

1. 核对本地 `main` 分支、`origin` 推送地址和远端分支可达性。
2. 成功将待推送的工作流提交从本地 `main` 推送至 GitHub 远端 `main`。

### 验证

- `git diff --check` 通过。
- `git ls-remote --heads origin main` 成功返回远端 `main`。
- `git push --porcelain origin main` 成功，将远端从 `a1ba02c` 更新至 `dfa1e00`。

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| Git / GitHub | 核对远程配置并推送本地提交 | `origin` 指向 `wenxvn/apple-frontend`，推送成功 |

### 当前状态与下一步

- 本地 `main` 的既有提交已同步至 GitHub。
- 如 Codex 界面继续显示“未配置远程”，重新打开任务或项目以刷新其 Git 状态。

## 2026-07-16 — MacBook Pro 单页 3D Hero

### 已完成步骤

1. 将原有学习示例替换为 Apple 风格的深色单页 Hero。
2. 使用 Three.js 程序化组合笔记本底座、键盘、触控板、铰链与发光薄屏边缘，并加入多色点光源。
3. 使用 GSAP 添加内容入场、笔记本开合入场和指针驱动的轻微视差。
4. 新增该 Hero 的响应式 CSS、导航图标、渐变标题和 CTA 样式。
5. 建立 UI 模式注册表，供后续页面复用。

### 修改的文件

- `src/App.jsx`
- `src/styles.css`
- `ui-registry.md`
- `docs/STATE.md`
- `docs/PROJECT_LOG.md`

### 验证

- `npm run build` 通过。
- `git diff --check` 通过。
- 本地 Vite 页面已在浏览器完成桌面端首屏检查；应用控制台无错误或警告。

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| npm / Vite | 生产构建与本地页面预览 | 构建通过，本地页面正常渲染 |
| 本地浏览器自动化 | 检查 3D Hero 实际视觉与应用控制台 | 画面和交互渲染正常，无应用控制台错误 |

### 已做决策

- 笔记本由 Three.js 基础几何体与灯光程序化生成，不引入外部产品图片或品牌资产。
- 所有场景、动画和资源释放均保留在拥有 Canvas 的 `App` 组件中，符合现有架构边界。

### 当前状态与下一步

- 单页复刻已完成，保留 Three.js 主包体积提示，待性能需求明确后再拆分。

## 2026-07-16 — Git 推送远程诊断与显式配置

### 已完成步骤

1. 核对 `origin` 的 fetch/push URL、`main` 上游跟踪和 Git 配置来源。
2. 使用与 Codex 提示相同的 `git push --porcelain` 成功推送 `main`。
3. 为本地仓库显式配置 `branch.main.pushRemote=origin` 和 `remote.pushDefault=origin`，避免客户端解析默认推送远程时产生歧义。

### 修改的文件

- `.git/config`（本地 Git 元数据，不纳入提交）
- `docs/STATE.md`
- `docs/PROJECT_LOG.md`

### 验证

- `git push --porcelain` 成功将本地提交推送至 `origin/main`。
- `git push --porcelain --dry-run` 返回 `up to date`。
- `main` 已跟踪 `origin/main`，工作树修改保持未提交状态。

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| Git / GitHub | 诊断、推送并验证远程分支 | 推送成功，`origin/main` 已同步 |

### 当前状态与下一步

- Git 命令行推送路径正常；截图中的“未配置推送远程”属于 Codex 桌面端陈旧状态。
- 若界面仍显示旧错误，重新打开该项目或创建新的 Codex 任务以刷新其 Git 状态；不要重复添加远程。

## 2026-07-16 — 动态 UI 依赖安装

### 已完成步骤

1. 安装 `zustand`，供后续跨组件动态交互状态使用。
2. 安装 `clsx`，供后续条件式 CSS 类名组合使用。

### 修改的文件

- `package.json`
- `package-lock.json`
- `docs/ARCHITECTURE.md`
- `docs/STATE.md`
- `docs/PROJECT_LOG.md`

### 验证

- `npm run build` 通过。
- 构建仍提示 Three.js 相关主包超过 500 kB；该提示与本次小型依赖安装无关。

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| npm | 安装前端依赖并构建验证 | `zustand`、`clsx` 安装成功，构建通过 |

### 当前状态与下一步

- 项目已具备客户端状态管理和条件类名组合能力。
- 实现动态页面时，在实际需要共享状态时再创建 Zustand store，避免为局部状态过早全局化。
