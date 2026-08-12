import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../components/Icons";

const guides = [
  {
    title: "快速开始",
    description: "了解如何在新项目或现有项目中安装和配置 React Native Paper。",
    to: "/guides/getting-started",
    icon: "🚀",
  },
  {
    title: "主题定制",
    description: "学习如何自定义颜色、排版和形状，创建符合品牌设计语言的主题。",
    to: "/guides/theming",
    icon: "🎨",
  },
  {
    title: "Material You 适配",
    description: "使用 Material 3 颜色角色、海拔和状态层来适配最新的 Material 设计规范。",
    to: "/guides/material-you",
    icon: "✨",
  },
  {
    title: "暗色模式",
    description: "为你的应用添加浅色和暗色模式支持，包括自适应表面和语义颜色。",
    to: "/guides/dark-mode",
    icon: "🌙",
  },
  {
    title: "React Navigation 集成",
    description: "将 Paper 组件与 React Navigation 结合使用，实现完整的导航体验。",
    to: "/guides/navigation",
    icon: "🧭",
  },
  {
    title: "React Native Web 支持",
    description: "使用 Paper 构建跨平台应用，在 Web、iOS 和 Android 上保持一致体验。",
    to: "/guides/web",
    icon: "🌐",
  },
  {
    title: "自定义组件",
    description: "扩展现有组件或创建完全自定义的组件，保持 Material 设计一致性。",
    to: "/guides/custom-components",
    icon: "🧩",
  },
  {
    title: "无障碍最佳实践",
    description: "了解 Paper 组件内置的无障碍支持，以及如何进一步优化体验。",
    to: "/guides/accessibility",
    icon: "♿",
  },
  {
    title: "从 4.x 迁移到 5.x",
    description: "查看迁移指南，将你的项目从 React Native Paper 4.x 升级到 5.x。",
    to: "/guides/migration",
    icon: "📦",
  },
];

export const Guides: React.FC = () => {
  return (
    <div className="rnp-page rnp-guides">
      <div className="container">
        <div className="rnp-page__header">
          <h1 className="rnp-page__title">指南</h1>
          <p className="rnp-page__desc">
            从入门到进阶，全面了解 React Native Paper 的使用方式和最佳实践。
          </p>
        </div>

        {/* 快速开始卡片 */}
        <div className="rnp-guides__quickstart">
          <div className="rnp-guides__quickstart-content">
            <h2 className="rnp-guides__quickstart-title">只需几步即可开始</h2>
            <p className="rnp-guides__quickstart-desc">
              安装 React Native Paper，配置主题，即可开始构建出色的 Material Design 应用。
            </p>
            <div className="rnp-guides__quickstart-code">
              <div className="rnp-code-block">
                <div className="rnp-code-block__header">
                  <span>bash</span>
                  <button className="rnp-code-block__copy">复制</button>
                </div>
                <pre className="rnp-code-block__body">
                  <code>{`# 安装 React Native Paper
npm install react-native-paper

# 安装依赖
npm install react-native-vector-icons
npm install react-native-safe-area-context

# iOS 需要执行 pod install
cd ios && pod install`}</code>
                </pre>
              </div>
            </div>
            <Link to="/guides/getting-started" className="btn btn-primary">
              查看完整指南
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>

        {/* 指南列表 */}
        <div className="rnp-guides__grid">
          {guides.map((guide, i) => (
            <Link
              key={i}
              to={guide.to}
              className="rnp-guides__card mdc-card"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="rnp-guides__card-icon">{guide.icon}</div>
              <h3 className="rnp-guides__card-title">{guide.title}</h3>
              <p className="rnp-guides__card-desc">{guide.description}</p>
              <div className="rnp-guides__card-arrow">
                <ArrowRightIcon size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
