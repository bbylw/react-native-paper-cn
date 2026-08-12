export interface ComponentInfo {
  name: string;
  nameCn: string;
  category: string;
  description: string;
  icon: string;
}

export interface ComponentCategory {
  name: string;
  nameCn: string;
  icon: string;
  components: ComponentInfo[];
}

export const componentCategories: ComponentCategory[] = [
  {
    name: "Actions",
    nameCn: "操作",
    icon: "touch",
    components: [
      {
        name: "Button",
        nameCn: "按钮",
        category: "Actions",
        description: "可以触发操作的按钮，支持文本、图标和多种样式变体。",
        icon: "button",
      },
      {
        name: "IconButton",
        nameCn: "图标按钮",
        category: "Actions",
        description: "仅显示图标的紧凑按钮，适用于空间受限的场景。",
        icon: "icon-button",
      },
      {
        name: "FAB",
        nameCn: "浮动操作按钮",
        category: "Actions",
        description: "浮动操作按钮，用于页面中最主要的操作动作。",
        icon: "fab",
      },
      {
        name: "Chip",
        nameCn: "标签",
        category: "Actions",
        description: "用于输入、过滤或展示选择的紧凑元素。",
        icon: "chip",
      },
      {
        name: "SegmentedButtons",
        nameCn: "分段按钮",
        category: "Actions",
        description: "一组按钮，用于从多个选项中选择一个或多个。",
        icon: "segmented",
      },
    ],
  },
  {
    name: "Inputs",
    nameCn: "输入",
    icon: "edit",
    components: [
      {
        name: "TextInput",
        nameCn: "文本输入",
        category: "Inputs",
        description: "用于输入文本的表单组件，支持标签、错误提示等。",
        icon: "input",
      },
      {
        name: "Searchbar",
        nameCn: "搜索栏",
        category: "Inputs",
        description: "用于搜索输入的栏，带有搜索图标和清除按钮。",
        icon: "searchbar",
      },
      {
        name: "Checkbox",
        nameCn: "复选框",
        category: "Inputs",
        description: "允许用户从一组选项中选择多个项目。",
        icon: "checkbox",
      },
      {
        name: "RadioButton",
        nameCn: "单选按钮",
        category: "Inputs",
        description: "允许用户从一组选项中选择一个项目。",
        icon: "radio",
      },
      {
        name: "Switch",
        nameCn: "开关",
        category: "Inputs",
        description: "在两个状态之间切换的开关控件。",
        icon: "switch",
      },
      {
        name: "Slider",
        nameCn: "滑块",
        category: "Inputs",
        description: "用于从连续或离散值范围中选择值的控件。",
        icon: "slider",
      },
    ],
  },
  {
    name: "Data Display",
    nameCn: "数据展示",
    icon: "list",
    components: [
      {
        name: "Card",
        nameCn: "卡片",
        category: "Data Display",
        description: "用于展示内容的容器，带有边框和阴影效果。",
        icon: "card",
      },
      {
        name: "List",
        nameCn: "列表",
        category: "Data Display",
        description: "用于显示一组相关项目的可滚动列表。",
        icon: "list",
      },
      {
        name: "ListAccordion",
        nameCn: "列表折叠面板",
        category: "Data Display",
        description: "可展开/折叠的列表项，用于分层信息展示。",
        icon: "list-accordion",
      },
      {
        name: "DataTable",
        nameCn: "数据表格",
        category: "Data Display",
        description: "用于以表格形式展示数据集的组件。",
        icon: "table",
      },
      {
        name: "Avatar",
        nameCn: "头像",
        category: "Data Display",
        description: "用于展示用户头像或图片的组件。",
        icon: "avatar",
      },
      {
        name: "Badge",
        nameCn: "徽章",
        category: "Data Display",
        description: "用于显示计数或状态标记的小型组件。",
        icon: "badge",
      },
    ],
  },
  {
    name: "Navigation",
    nameCn: "导航",
    icon: "navigation",
    components: [
      {
        name: "Appbar",
        nameCn: "应用栏",
        category: "Navigation",
        description: "页面顶部的应用栏，包含标题和操作按钮。",
        icon: "appbar",
      },
      {
        name: "BottomNavigation",
        nameCn: "底部导航",
        category: "Navigation",
        description: "底部的标签栏导航，用于在主要页面间切换。",
        icon: "bottom-nav",
      },
      {
        name: "Drawer",
        nameCn: "抽屉导航",
        category: "Navigation",
        description: "从侧边滑出的面板，用于导航或设置。",
        icon: "drawer",
      },
      {
        name: "Tabs",
        nameCn: "选项卡",
        category: "Navigation",
        description: "用于在不同视图之间切换的选项卡组件。",
        icon: "tabs",
      },
    ],
  },
  {
    name: "Feedback",
    nameCn: "反馈",
    icon: "feedback",
    components: [
      {
        name: "Snackbar",
        nameCn: "消息条",
        category: "Feedback",
        description: "在屏幕底部显示的短暂消息通知。",
        icon: "snackbar",
      },
      {
        name: "Dialog",
        nameCn: "对话框",
        category: "Feedback",
        description: "模态对话框，用于重要信息确认或输入。",
        icon: "dialog",
      },
      {
        name: "ProgressBar",
        nameCn: "进度条",
        category: "Feedback",
        description: "用于显示任务进度的条形指示器。",
        icon: "progress-bar",
      },
      {
        name: "ActivityIndicator",
        nameCn: "活动指示器",
        category: "Feedback",
        description: "圆形加载动画，用于表示正在进行的操作。",
        icon: "spinner",
      },
      {
        name: "Tooltip",
        nameCn: "工具提示",
        category: "Feedback",
        description: "长按时显示的提示信息气泡。",
        icon: "tooltip",
      },
    ],
  },
  {
    name: "Typography",
    nameCn: "排版",
    icon: "text",
    components: [
      {
        name: "Text",
        nameCn: "文本",
        category: "Typography",
        description: "用于显示文本的基础组件，支持 Material 排版变体。",
        icon: "text",
      },
      {
        name: "Title",
        nameCn: "标题",
        category: "Typography",
        description: "Material Design 标题样式组件。",
        icon: "title",
      },
      {
        name: "Paragraph",
        nameCn: "段落",
        category: "Typography",
        description: "用于显示段落文本的组件。",
        icon: "paragraph",
      },
    ],
  },
];

export const totalComponents = componentCategories.reduce(
  (acc, cat) => acc + cat.components.length,
  0
);
