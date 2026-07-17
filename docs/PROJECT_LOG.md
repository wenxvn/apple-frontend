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

## 2026-07-16 — Codex 推送远程兼容性补强

### 已完成步骤

1. 确认 `origin` 仅配置通用 URL，Git 会将其作为推送 URL 回退使用，但不存在显式 `remote.origin.pushurl`。
2. 添加与 `origin` URL 相同的显式 `remote.origin.pushurl`，供只识别该字段的 Git 客户端使用。
3. 成功将提交 `c1a1c93` 推送至 `origin/main`。

### 修改的文件

- `.git/config`（本地 Git 元数据，不纳入提交）
- `docs/STATE.md`
- `docs/PROJECT_LOG.md`

### 验证

- `git remote -v` 同时显示 `origin` 的 fetch 和 push 地址。
- `git push --porcelain --dry-run` 识别远端并通过。
- `git push --porcelain` 成功同步 `main` 到 `origin/main`。

### 当前状态与下一步

- 命令行和显式 push URL 均正常；关闭当前错误弹窗后重新打开项目，让 Codex 重新读取 `.git/config`。

## 2026-07-16 — Vercel 首次生产部署

### 已完成步骤

1. 确认本地 `.vercel` 关联到 `wenxvns-projects/apple-frontend`，但项目此前没有生产部署。
2. 使用 Vercel CLI 执行首次生产部署。
3. 访问 Vercel 分配的生产别名，等待首屏 GSAP 动画完成后检查页面与浏览器控制台。

### 修改的文件

- `docs/STATE.md`
- `docs/PROJECT_LOG.md`

### 验证

- Vercel 构建运行 `npm run build` 并成功完成。
- 部署状态为 `READY`，生产别名为 `https://apple-frontend-eight.vercel.app`。
- 生产 URL 可访问，3D Hero 正常渲染，浏览器控制台无应用错误或警告。

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| Vercel CLI | 创建首次生产部署 | 部署成功并分配生产别名 |
| Vercel 生产 URL | 验收实际公开页面 | 首屏与 3D 动画正常 |

### 当前状态与下一步

- 可直接使用生产别名进行验收。
- 后续 Git 推送不会自动部署，除非在 Vercel 控制台中连接 Git 仓库；当前可用 CLI 创建新的生产部署。

## 2026-07-16 — 连接 Vercel Git 自动部署

### 已完成步骤

1. 在 Vercel 项目 Git 设置中连接 GitHub 仓库 `wenxvn/apple-frontend`。
2. 保持 Vercel 默认的 `main` 生产分支，用后续提交验证自动生产部署。

### 修改的文件

- `docs/STATE.md`
- `docs/PROJECT_LOG.md`

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| Vercel 控制台 / GitHub 集成 | 为项目连接 Git 仓库 | 已连接，Vercel 将监听提交并创建部署 |

### 当前状态与下一步

- 连接完成；推送本次项目记录后，检查 Vercel 是否自动创建并完成新的生产部署。

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

## 2026-07-16 — 响应式布局依赖安装

### 已完成步骤

1. 安装 `react-responsive`，供后续通过媒体查询切换布局或内容。

### 修改的文件

- `package.json`
- `package-lock.json`
- `docs/ARCHITECTURE.md`
- `docs/STATE.md`
- `docs/PROJECT_LOG.md`

### 验证

- `npm run build` 通过。
- 构建仍提示 Three.js 相关主包超过 500 kB；该提示与本次依赖安装无关。

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| npm | 安装响应式布局依赖并构建验证 | `react-responsive` 安装成功，构建通过 |

### 当前状态与下一步

- 项目已可在需要时使用媒体查询条件渲染不同布局或内容。
- 动画继续使用 GSAP；不要将 `react-responsive` 作为动画库使用。

## 2026-07-16 — MacBook Pro 产品探索组件

### 已完成步骤

1. 将原有导航式 Hero 收束为参考图风格的黑色 MacBook Pro 产品探索页面。
2. 扩展 Three.js 程序化笔记本：保留键盘、触控板和显示器，并由状态驱动银色/深空黑色机身材质与 14/16 英寸显示比例。
3. 将轻微指针视差改为按住画布拖动的有限角度 3D 旋转，并为颜色和尺寸按钮提供键盘焦点、可访问名称与选中状态。
4. 登记产品配置器的视觉模式到 `ui-registry.md`。

### 修改的文件

- `src/App.jsx`
- `src/styles.css`
- `ui-registry.md`
- `docs/STATE.md`
- `docs/PROJECT_LOG.md`

### 验证

- 运行 `npm run build` 成功。
- 构建提示 Three.js 相关主包超过 500 kB；为既有学习项目的已知事项，未在本任务扩大为代码拆分工作。

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| npm | 运行生产构建验证 | `vite build` 成功完成 |
| 本地浏览器 | 检查 Three.js 首屏渲染、配置切换与拖拽旋转 | 深空黑色/16 英寸默认状态正确；银色/14 英寸切换与拖拽旋转通过 |

### 当前状态与下一步

- 产品探索功能已在本地实现并可构建。
- 如需视觉微调，启动本地开发服务器后重点检查桌面与移动端的模型取景和拖拽旋转手感。

## 2026-07-16 — Vercel Git 自动部署验证

### 已完成步骤

1. 推送提交 `c23d86e` 到 `main`，验证连接后的 Git Webhook。
2. 在 Vercel Deployments 页面确认该提交自动创建了生产部署，并达到 `Ready` 状态。

### 验证

- 自动生产部署 URL 为 `https://apple-frontend-nm52tslow-wenxvns-projects.vercel.app`。
- 部署来源显示为 GitHub `main` 的提交 `c23d86e`。

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| Git / GitHub | 推送项目记录提交 | `main` 已同步到 `origin/main` |
| Vercel Git 集成 | 监听 GitHub 提交并创建生产部署 | 自动部署成功，状态 `Ready` |

### 当前状态与下一步

- Git 自动部署已验证。今后每次推送 `main`，Vercel 将自动部署；可继续用生产域名验收。

## 2026-07-16 — MacBook 产品探索提交与推送

### 已完成步骤

1. 确认产品探索实现已包含在本地提交 `86140c9`。
2. 覆盖 `memory.md` 为本次功能的无敏感续作上下文，并创建提交 `71ffcb9`。
3. 推送两个提交到 `origin/main`。

### 修改的文件

- `memory.md`
- `docs/PROJECT_LOG.md`

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| Git / GitHub | 提交会话交接并推送产品探索实现 | `origin/main` 已推进至 `71ffcb9` |

### 当前状态与下一步

- 产品探索实现与会话续作信息已同步到远端。
- Git 集成会为 `main` 上的新提交自动创建生产部署；如需发布验收，可等待部署完成后访问生产域名。

## 2026-07-17 — 恢复 MacBook Pro 主界面并优化产品模型

### 已完成步骤

1. 恢复含导航、产品标题和“近距离看看”锚点的首屏 Hero；产品探索器改为下方独立的滚动区。
2. 将 Three.js 模型抽为可供首屏和探索区复用的 Canvas 组件，并保留颜色、尺寸与拖拽旋转控制。
3. 调整相机、屏幕开合角度、机身材料与灯光，增强键盘、触控板、扬声器和机身轮廓的可见性。
4. 删除屏幕上的环形几何体，改为程序化深色渐变反射纹理。
5. 更新 Hero 与探索配置器的可复用视觉规则。

### 修改的文件

- `src/App.jsx`
- `src/styles.css`
- `ui-registry.md`
- `docs/STATE.md`
- `docs/PROJECT_LOG.md`

### 验证

- `npm run build` 成功。
- `git diff --check` 通过。
- 本地浏览器确认首屏可见、锚点可进入探索区、整机细节可见、银色选项切换后其 `aria-pressed` 为 `true`，且应用控制台无错误。
- 构建仍提示 Three.js 相关主包超过 500 kB；这是既有学习项目的已知事项，未在本任务扩大为代码拆分工作。

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| npm | 运行生产构建验证 | `vite build` 成功完成 |
| 本地浏览器 | 检查首屏、锚点滚动、产品可见性和颜色切换 | 页面与交互正确，控制台无错误 |

### 当前状态与下一步

- 主界面和探索区已恢复为顺序滚动关系，屏幕保持无环形图案的深色反射设计。
- 后续如需微调，应优先在真实移动设备上检查镜头和拖拽手感。

## 2026-07-17 — 主界面恢复提交与推送

### 已完成步骤

1. 创建提交 `8231e14`，包含主界面恢复、3D 模型优化、UI 登记和会话交接记录。
2. 推送该提交到 GitHub 的 `origin/main`。

### 修改的文件

- `memory.md`
- `docs/PROJECT_LOG.md`

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| Git / GitHub | 提交并推送本次 MacBook Pro 页面更新 | `8231e14` 已成功推送至 `origin/main` |

### 当前状态与下一步

- 页面实现与会话交接信息已同步到远端；Git 集成将为 `main` 创建后续生产部署。

## 2026-07-17 — 重塑 MacBook Pro 程序化模型

### 已完成步骤

1. 将盒状笔记本改为圆角、薄型的单体机身，并重新调整屏幕、刘海、铰链、键盘、触控板和双侧扬声器孔的比例。
2. 将深色冷光改为中性工作室布光，保证深空黑色和银色机身都能从黑色背景中清晰分离。
3. 用明亮的抽象渐变波纹屏幕壁纸替代暗屏，不引入任何环形或符号图案。
4. 更新 Hero 与探索器的视觉模式登记。

### 修改的文件

- `src/App.jsx`
- `src/styles.css`
- `ui-registry.md`
- `docs/STATE.md`
- `docs/PROJECT_LOG.md`

### 验证

- `npm run build` 成功。
- `git diff --check` 通过。
- 本地浏览器确认首屏与探索区模型均清晰可见；银色切换后其 `aria-pressed` 为 `true`，且应用控制台无错误。
- 构建仍提示 Three.js 相关主包超过 500 kB；这是既有学习项目的已知事项，未在本任务扩大为代码拆分工作。

### 使用的工具和服务

| 工具或服务 | 用途 | 结果 |
| --- | --- | --- |
| npm | 运行生产构建验证 | `vite build` 成功完成 |
| 本地浏览器 | 对比首屏与探索区的模型可见性、颜色切换和控制台 | 模型与交互正确，控制台无错误 |

### 当前状态与下一步

- 现有程序化模型具备可辨识的 MacBook Pro 轮廓和足够的明度；后续仅在真实设备上按视觉反馈微调。
