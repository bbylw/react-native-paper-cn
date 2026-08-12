import React, { useState } from "react";
import { Link } from "react-router-dom";
import { componentCategories, totalComponents } from "../data/components";
import { ArrowRightIcon } from "../components/Icons";

export const Components: React.FC = () => {
  const [search, setSearch] = useState("");

  const filtered = componentCategories
    .map((cat) => ({
      ...cat,
      components: cat.components.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.nameCn.includes(search) ||
          c.description.includes(search)
      ),
    }))
    .filter((cat) => cat.components.length > 0);

  return (
    <div className="rnp-page rnp-components">
      <div className="container">
        <div className="rnp-page__header">
          <h1 className="rnp-page__title">组件</h1>
          <p className="rnp-page__desc">
            共 {totalComponents} 个 Material Design 组件，涵盖操作、输入、数据展示、导航和反馈。
          </p>
        </div>

        {/* 搜索栏 */}
        <div className="rnp-components__search">
          <div className="rnp-components__search-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="rnp-components__search-icon">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5S5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
            </svg>
            <input
              type="text"
              placeholder="搜索组件..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rnp-components__search-input"
            />
          </div>
        </div>

        {/* 组件分类 */}
        <div className="rnp-components__categories">
          {filtered.map((cat, i) => (
            <section key={i} className="rnp-components__category" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="rnp-components__category-header">
                <h2 className="rnp-components__category-title">
                  {cat.nameCn}
                  <span className="rnp-components__category-name-en">{cat.name}</span>
                </h2>
                <span className="rnp-components__category-count">
                  {cat.components.length} 个组件
                </span>
              </div>
              <div className="rnp-components__grid">
                {cat.components.map((comp, j) => (
                  <ComponentCard key={j} component={comp} />
                ))}
              </div>
            </section>
          ))}

          {filtered.length === 0 && (
            <div className="rnp-components__empty">
              <p>未找到匹配的组件</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ComponentCard: React.FC<{
  component: {
    name: string;
    nameCn: string;
    description: string;
  };
}> = ({ component }) => {
  const componentPreview = getComponentPreview(component.name);
  return (
    <div className="rnp-component-card mdc-card">
      <div className="rnp-component-card__preview">{componentPreview}</div>
      <div className="rnp-component-card__content">
        <h3 className="rnp-component-card__title">
          {component.nameCn}
          <span className="rnp-component-card__name">{component.name}</span>
        </h3>
        <p className="rnp-component-card__desc">{component.description}</p>
      </div>
    </div>
  );
};

function getComponentPreview(name: string): React.ReactNode {
  switch (name) {
    case "Button":
      return <div className="rnp-mock-button rnp-mock-button--contained rnp-mock-button--sm">按钮</div>;
    case "IconButton":
      return (
        <div className="rnp-mock-icon-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z" />
          </svg>
        </div>
      );
    case "FAB":
      return (
        <div className="rnp-mock-fab rnp-mock-fab--sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </div>
      );
    case "Chip":
      return <div className="rnp-mock-chip rnp-mock-chip--sm"><span>标签</span></div>;
    case "SegmentedButtons":
      return (
        <div className="rnp-mock-segmented">
          <div className="rnp-mock-segmented__item active">选项一</div>
          <div className="rnp-mock-segmented__item">选项二</div>
        </div>
      );
    case "TextInput":
      return (
        <div className="rnp-mock-input rnp-mock-input--sm">
          <div className="rnp-mock-input__label">输入框</div>
          <div className="rnp-mock-input__field">文本内容</div>
        </div>
      );
    case "Searchbar":
      return (
        <div className="rnp-mock-searchbar rnp-mock-searchbar--sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5S5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
          </svg>
          <span>搜索</span>
        </div>
      );
    case "Checkbox":
      return (
        <div className="rnp-mock-checkbox checked">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
      );
    case "RadioButton":
      return (
        <div className="rnp-mock-radio checked">
          <div className="rnp-mock-radio__dot" />
        </div>
      );
    case "Switch":
      return <div className="rnp-mock-switch on"><div className="rnp-mock-switch__thumb" /></div>;
    case "Slider":
      return (
        <div className="rnp-mock-slider">
          <div className="rnp-mock-slider__track">
            <div className="rnp-mock-slider__active" />
          </div>
          <div className="rnp-mock-slider__thumb" />
        </div>
      );
    case "Card":
      return (
        <div className="rnp-mock-card rnp-mock-card--sm">
          <div className="rnp-mock-card__media rnp-mock-card__media--sm" />
          <div className="rnp-mock-card__title">卡片标题</div>
        </div>
      );
    case "List":
      return (
        <div className="rnp-mock-list rnp-mock-list--sm">
          <div className="rnp-mock-list__item rnp-mock-list__item--sm">
            <div className="rnp-mock-list__icon rnp-mock-list__icon--sm" />
            <div className="rnp-mock-list__title">列表项</div>
          </div>
        </div>
      );
    case "ListAccordion":
      return (
        <div className="rnp-mock-list rnp-mock-list--sm">
          <div className="rnp-mock-list__item rnp-mock-list__item--sm rnp-mock-list__item--accordion">
            <div className="rnp-mock-list__icon rnp-mock-list__icon--sm" />
            <div className="rnp-mock-list__title">折叠项</div>
            <div className="rnp-mock-list__chevron rnp-mock-list__chevron--open" />
          </div>
        </div>
      );
    case "DataTable":
      return (
        <div className="rnp-mock-table">
          <div className="rnp-mock-table__row rnp-mock-table__row--header">
            <div className="rnp-mock-table__cell">列标题</div>
          </div>
          <div className="rnp-mock-table__row">
            <div className="rnp-mock-table__cell">数据值</div>
          </div>
        </div>
      );
    case "Avatar":
      return <div className="rnp-mock-avatar" />;
    case "Badge":
      return (
        <div className="rnp-mock-badge-wrapper">
          <div className="rnp-mock-badge-wrapper__icon" />
          <div className="rnp-mock-badge">8</div>
        </div>
      );
    case "Appbar":
      return (
        <div className="rnp-mock-appbar rnp-mock-appbar--sm">
          <div className="rnp-mock-appbar__icon rnp-mock-appbar__icon--sm" />
          <div className="rnp-mock-appbar__title">标题</div>
        </div>
      );
    case "BottomNavigation":
      return (
        <div className="rnp-mock-bottom-nav rnp-mock-bottom-nav--sm">
          <div className="rnp-mock-bottom-nav__item active">
            <div className="rnp-mock-bottom-nav__icon rnp-mock-bottom-nav__icon--sm" />
          </div>
          <div className="rnp-mock-bottom-nav__item">
            <div className="rnp-mock-bottom-nav__icon rnp-mock-bottom-nav__icon--sm" />
          </div>
        </div>
      );
    case "Drawer":
      return (
        <div className="rnp-mock-drawer">
          <div className="rnp-mock-drawer__item active">首页</div>
          <div className="rnp-mock-drawer__item">设置</div>
        </div>
      );
    case "Tabs":
      return (
        <div className="rnp-mock-tabs">
          <div className="rnp-mock-tabs__item active">标签一</div>
          <div className="rnp-mock-tabs__item">标签二</div>
        </div>
      );
    case "Snackbar":
      return (
        <div className="rnp-mock-snackbar rnp-mock-snackbar--sm">
          <span>消息提示</span>
        </div>
      );
    case "Dialog":
      return (
        <div className="rnp-mock-dialog">
          <div className="rnp-mock-dialog__title">对话框标题</div>
          <div className="rnp-mock-dialog__body">内容描述</div>
        </div>
      );
    case "ProgressBar":
      return (
        <div className="rnp-mock-progress-bar">
          <div className="rnp-mock-progress-bar__active" />
        </div>
      );
    case "ActivityIndicator":
      return <div className="rnp-mock-spinner rnp-mock-spinner--sm" />;
    case "Tooltip":
      return (
        <div className="rnp-mock-tooltip">
          <div className="rnp-mock-tooltip__icon" />
          <div className="rnp-mock-tooltip__bubble">提示文本</div>
        </div>
      );
    case "Text":
      return <div className="rnp-mock-typography__body">Text 组件</div>;
    case "Title":
      return <div className="rnp-mock-typography__display rnp-mock-typography__display--md">Title</div>;
    case "Paragraph":
      return <div className="rnp-mock-typography__body">段落文本示例...</div>;
    default:
      return <div className="rnp-mock-placeholder">{name}</div>;
  }
}
