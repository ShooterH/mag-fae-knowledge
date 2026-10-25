# 磁编码器 FAE 知识库

[![部署状态](https://github.com/ShooterH/mag-fae-knowledge/actions/workflows/deploy.yml/badge.svg)](https://github.com/ShooterH/mag-fae-knowledge/actions/workflows/deploy.yml)

在线访问：**https://shooterh.github.io/mag-fae-knowledge/**

一套面向磁编码器现场支持、选型与磁路仿真的可追溯知识库。使用 Markdown 编写，MkDocs Material 构建，推送 `main` 后由 GitHub Actions 自动发布到 GitHub Pages。

## 本地预览

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

浏览器打开 `http://127.0.0.1:8000`。提交前执行严格构建：

```bash
mkdocs build --strict
```

## 发布到 GitHub Pages

1. 在 GitHub 创建仓库，建议名 `mag-fae-knowledge`，默认分支 `main`。
2. 在本目录初始化并推送：

   ```bash
   git init -b main
   git add .
   git commit -m "Initialize magnetic encoder FAE knowledge base"
   git remote add origin https://github.com/<你的用户名>/mag-fae-knowledge.git
   git push -u origin main
   ```

3. 打开仓库 **Settings → Pages**，将 **Source** 设为 **GitHub Actions**。
4. 首次 `Deploy knowledge base` 工作流结束后，访问
   `https://<你的用户名>.github.io/mag-fae-knowledge/`。

工作流会把当前仓库地址注入 `GITHUB_REPO_URL`，因此部署后的“编辑此页”链接会自动指向正确仓库。若在本地也想显示真实编辑链接：

```bash
GITHUB_REPO_URL=https://github.com/<你的用户名>/mag-fae-knowledge mkdocs serve
```

如果仓库不是这个名称，不需要改 `site_url`：站内链接是相对路径；只需保证 GitHub Pages 的访问路径与仓库名一致。

## 新增与修改

- 新文章：复制 `docs/authoring/article.md`，放到 `docs/subjects/` 或 `docs/fae/`。
- 新来源：复制 `docs/authoring/source.md`，登记到 `docs/sources/`。
- 客户案例：先复制 `docs/authoring/case.md` 到私有工作区，脱敏并获批准后才进入 `docs/cases/`。
- 导航：由各目录的 `.pages` 控制；新增文件后可显式加入，也可留给 `awesome-pages` 自动发现。

详细规范见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 目录

```text
.
├── mkdocs.yml
├── requirements.txt
├── docs/
│   ├── index.md                 # 首页：任务/学科双入口
│   ├── fae/                     # 选型、误差预算、仿真、排障
│   ├── subjects/                # 磁学、材料、传感、电机
│   ├── cases/                   # 脱敏案例
│   ├── sources/                 # 可追溯来源登记
│   ├── authoring/               # 文章/案例/来源模板
│   └── assets/                  # 样式、脚本、标志、静态图表
└── .github/workflows/deploy.yml # Pages 自动部署
```

## 内容边界

- 不提交受版权保护的整本教材、整页扫描或大段原文。
- 不提交客户名称、图纸、联系方式、生产参数或未经批准的日志。
- 器件典型值必须带型号和测试条件，不能写成行业保证值。
- 仿真建议必须说明输入、边界、网格、收敛、敏感性和实测相关性；求解成功不等于模型已验证。

教材与外部资料的登记见 `docs/sources/`。
