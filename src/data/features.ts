export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: "components",
    icon: "grid",
    title: "生产级组件",
    description:
      "按钮、输入框、列表、卡片、菜单、对话框、导航和反馈模式，专为日常产品开发构建。",
  },
  {
    id: "theming",
    icon: "palette",
    title: "Material You 主题",
    description:
      "采用 Material 3 颜色、排版、海拔和状态层，主题系统专为真实应用设计。",
  },
  {
    id: "accessibility",
    icon: "accessibility",
    title: "默认无障碍",
    description:
      "常见的交互、对比度和状态处理已内置到组件层面，无需在每个页面中重复实现。",
  },
  {
    id: "cross-platform",
    icon: "devices",
    title: "跨平台一致性",
    description:
      "从同一套代码库保持 iOS、Android 和 React Native Web 的设计语言和组件行为一致。",
  },
  {
    id: "dark-mode",
    icon: "moon",
    title: "暗色模式支持",
    description:
      "使用相同的原语同时交付浅色和暗色体验，包括自适应表面和语义颜色角色。",
  },
  {
    id: "docs",
    icon: "versions",
    title: "迁移友好的文档",
    description:
      "通过一个版本选择器浏览稳定的 5.x、预览的 6.x 和旧版静态文档，无需分割文档体验。",
  },
];
