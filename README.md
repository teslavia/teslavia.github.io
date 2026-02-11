# mikylee teslavia 的个人网站

这是我个人网站的源代码，使用 [Astro](https://astro.build) 构建，并部署在 [GitHub Pages](https://pages.github.com/) 上。

## 关于

我是 mikylee teslavia，一名 AI 开发者和开源贡献者。这个网站是我的个人博客和工作信息的发布平台。

## 项目结构

```text
├── public/               # 静态资源 (图片, 字体, favicon)
│   ├── assets/          # 博文图片
│   └── fonts/           # 网页字体
├── src/
│   ├── assets/          # 组件中使用的图标和图片
│   ├── components/      # 可复用的 UI 组件
│   │   └── ui/          # React 组件
│   ├── content/         # 内容集合
│   │   └── blog/        # Markdown 格式的博文 (按年份组织)
│   ├── layouts/         # 页面布局和模板
│   ├── pages/           # 路由和页面
│   ├── styles/          # 全局样式和 CSS
│   └── utils/           # 工具函数
├── astro.config.mjs     # Astro 配置文件
├── .github/workflows/   # GitHub Actions 部署工作流
├── package.json         # 项目依赖和脚本
├── tailwind.config.mjs  # Tailwind CSS 配置文件
└── LICENSE              # 双重许可证 (CC BY 4.0 + MIT)
```

## 命令

| 命令 | 操作 |
| :--------------------- | :------------------------------------------ |
| `npm install` | 安装依赖 |
| `npm run dev` | 在 `localhost:4321` 启动本地开发服务器 |
| `npm run build` | 构建生产版本的网站到 `./dist/` 目录 |
| `npm run preview` | 在部署前本地预览构建结果 |

## 部署

本项目已配置为通过 GitHub Actions 自动部署到 GitHub Pages。当改动被推送到 `main` 分支时，将自动触发构建和部署流程。

## 许可证

本仓库采用双重许可证：

- **文档与博文**: 基于 [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) 许可
- **代码与代码片段**: 基于 [MIT 许可证](LICENSE) 许可

详情请参阅 [LICENSE](LICENSE) 文件。

## 特别鸣谢

特别感谢 [Sat Naing](https://github.com/satnaing) 创作了优秀的 [AstroPaper 主题](https://astro-paper.pages.dev/)，它为本网站奠定了基础。其周到的设计和清晰的架构让二次开发成为一种享受。
