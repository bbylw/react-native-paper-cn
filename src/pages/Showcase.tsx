import React from "react";
import { ArrowRightIcon } from "../components/Icons";

const showcaseApps = [
  {
    name: "Callstack",
    description: "专业的 React Native 开发咨询公司，构建出色的跨平台应用。",
    category: "企业",
    color: "#6200ee",
  },
  {
    name: "Brick",
    description: "建筑行业的项目管理工具，帮助团队高效协作和追踪进度。",
    category: "工具",
    color: "#03a9f4",
  },
  {
    name: "Trailers",
    description: "电影预告片聚合平台，提供最新的影视资讯和个性化推荐。",
    category: "娱乐",
    color: "#ff5722",
  },
  {
    name: "Family-Core",
    description: "家庭日程共享应用，帮助家庭成员同步日程和活动安排。",
    category: "生活",
    color: "#4caf50",
  },
  {
    name: "Merlin Mission",
    description: "教育类互动游戏应用，让孩子在游戏中学习知识和技能。",
    category: "教育",
    color: "#ff9800",
  },
  {
    name: "PrinterOn",
    description: "移动打印解决方案，让用户随时随地从手机发送打印任务。",
    category: "工具",
    color: "#9c27b0",
  },
  {
    name: "Snapp",
    description: "打车出行平台，提供便捷的在线叫车和出行服务。",
    category: "出行",
    color: "#f44336",
  },
  {
    name: "BHG Digital",
    description: "数字营销分析平台，帮助企业追踪和优化营销效果。",
    category: "商业",
    color: "#00bcd4",
  },
  {
    name: "Charged",
    description: "电动车充电站查找和支付应用，覆盖全国充电网络。",
    category: "出行",
    color: "#3f51b5",
  },
];

const stats = [
  { label: "GitHub Stars", value: "12k+" },
  { label: "NPM 周下载量", value: "200k+" },
  { label: "组件数量", value: "30+" },
  { label: "活跃社区", value: "5k+" },
];

export const Showcase: React.FC = () => {
  return (
    <div className="rnp-page rnp-showcase">
      <div className="container">
        <div className="rnp-page__header">
          <h1 className="rnp-page__title">案例展示</h1>
          <p className="rnp-page__desc">
            了解使用 React Native Paper 构建的优秀应用，感受 Paper 在真实产品中的表现。
          </p>
        </div>

        {/* 统计数据 */}
        <div className="rnp-showcase__stats">
          {stats.map((stat, i) => (
            <div key={i} className="rnp-showcase__stat">
              <div className="rnp-showcase__stat-value">{stat.value}</div>
              <div className="rnp-showcase__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 应用列表 */}
        <div className="rnp-showcase__grid">
          {showcaseApps.map((app, i) => (
            <div
              key={i}
              className="rnp-showcase__card mdc-card"
              style={{
                animationDelay: `${i * 0.08}s`,
                "--card-accent": app.color,
              } as React.CSSProperties}
            >
              <div className="rnp-showcase__card-icon" style={{ background: app.color }}>
                {app.name.charAt(0)}
              </div>
              <div className="rnp-showcase__card-content">
                <div className="rnp-showcase__card-header">
                  <h3 className="rnp-showcase__card-name">{app.name}</h3>
                  <span className="rnp-showcase__card-tag">{app.category}</span>
                </div>
                <p className="rnp-showcase__card-desc">{app.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 提交你的应用 */}
        <div className="rnp-showcase__submit">
          <div className="rnp-showcase__submit-inner">
            <h2 className="rnp-showcase__submit-title">使用 Paper 构建了应用？</h2>
            <p className="rnp-showcase__submit-desc">
              欢迎提交你的应用案例，让更多人看到你的作品。
            </p>
            <a
              href="https://github.com/callstack/react-native-paper/edit/master/showcase.md"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              提交案例
              <ArrowRightIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
