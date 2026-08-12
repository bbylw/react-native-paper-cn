import React, { useState } from "react";

export const ComponentGallery: React.FC = () => {
  const [darkGallery, setDarkGallery] = useState(false);

  return (
    <div className="rnp-gallery">
      <div className="rnp-gallery__toggle">
        <button
          className={!darkGallery ? "active" : ""}
          onClick={() => setDarkGallery(false)}
        >
          浅色
        </button>
        <button
          className={darkGallery ? "active" : ""}
          onClick={() => setDarkGallery(true)}
        >
          深色
        </button>
      </div>

      <div className={`rnp-gallery__grid ${darkGallery ? "rnp-gallery__grid--dark" : ""}`}>
        {/* Button */}
        <GalleryItem label="Button / 按钮">
          <div className="rnp-mock-button rnp-mock-button--contained">按钮</div>
          <div className="rnp-mock-button rnp-mock-button--outlined">按钮</div>
          <div className="rnp-mock-button rnp-mock-button--text">按钮</div>
        </GalleryItem>

        {/* Input */}
        <GalleryItem label="TextInput / 文本输入">
          <div className="rnp-mock-input rnp-mock-input--gallery">
            <div className="rnp-mock-input__label">邮箱</div>
            <div className="rnp-mock-input__field">user@example.com</div>
          </div>
        </GalleryItem>

        {/* Card */}
        <GalleryItem label="Card / 卡片">
          <div className="rnp-mock-card">
            <div className="rnp-mock-card__media" />
            <div className="rnp-mock-card__content">
              <div className="rnp-mock-card__title">卡片标题</div>
              <div className="rnp-mock-card__body">这是一段卡片内容描述...</div>
            </div>
          </div>
        </GalleryItem>

        {/* Searchbar */}
        <GalleryItem label="Searchbar / 搜索栏">
          <div className="rnp-mock-searchbar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5S5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
            </svg>
            <span>搜索内容...</span>
          </div>
        </GalleryItem>

        {/* Appbar */}
        <GalleryItem label="Appbar / 应用栏">
          <div className="rnp-mock-appbar rnp-mock-appbar--gallery">
            <div className="rnp-mock-appbar__icon" />
            <div className="rnp-mock-appbar__title">应用栏</div>
            <div className="rnp-mock-appbar__action" />
            <div className="rnp-mock-appbar__action" />
          </div>
        </GalleryItem>

        {/* Snackbar */}
        <GalleryItem label="Snackbar / 消息条">
          <div className="rnp-mock-snackbar">
            <span>操作已完成</span>
            <button className="rnp-mock-snackbar__action">撤销</button>
          </div>
        </GalleryItem>

        {/* Chip */}
        <GalleryItem label="Chip / 标签">
          <div className="rnp-mock-chip rnp-mock-chip--selected">
            <div className="rnp-mock-chip__dot" />
            <span>已选标签</span>
          </div>
          <div className="rnp-mock-chip">
            <span>普通标签</span>
          </div>
        </GalleryItem>

        {/* List */}
        <GalleryItem label="List / 列表">
          <div className="rnp-mock-list">
            <div className="rnp-mock-list__item">
              <div className="rnp-mock-list__icon" />
              <div className="rnp-mock-list__content">
                <div className="rnp-mock-list__title">列表项标题</div>
                <div className="rnp-mock-list__subtitle">副标题描述</div>
              </div>
            </div>
            <div className="rnp-mock-list__item">
              <div className="rnp-mock-list__icon" />
              <div className="rnp-mock-list__content">
                <div className="rnp-mock-list__title">列表项标题</div>
                <div className="rnp-mock-list__subtitle">副标题描述</div>
              </div>
            </div>
          </div>
        </GalleryItem>

        {/* List Accordion */}
        <GalleryItem label="List.Accordion / 折叠列表">
          <div className="rnp-mock-list">
            <div className="rnp-mock-list__item rnp-mock-list__item--accordion">
              <div className="rnp-mock-list__icon" />
              <div className="rnp-mock-list__title">展开列表</div>
              <div className="rnp-mock-list__chevron rnp-mock-list__chevron--open" />
            </div>
            <div className="rnp-mock-list__item rnp-mock-list__item--child">
              <div className="rnp-mock-list__icon" />
              <div className="rnp-mock-list__title">子列表项</div>
            </div>
            <div className="rnp-mock-list__item rnp-mock-list__item--child">
              <div className="rnp-mock-list__icon" />
              <div className="rnp-mock-list__title">子列表项</div>
            </div>
          </div>
        </GalleryItem>

        {/* Typography */}
        <GalleryItem label="Typography / 排版">
          <div className="rnp-mock-typography rnp-mock-typography--gallery">
            <div className="rnp-mock-typography__display rnp-mock-typography__display--lg">Display Large</div>
            <div className="rnp-mock-typography__display rnp-mock-typography__display--md">Display Medium</div>
            <div className="rnp-mock-typography__body">
              这是一段正文文本，展示 Material Design 排版系统。
            </div>
          </div>
        </GalleryItem>

        {/* Bottom Navigation */}
        <GalleryItem label="BottomNavigation / 底部导航">
          <div className="rnp-mock-bottom-nav">
            <div className="rnp-mock-bottom-nav__item rnp-mock-bottom-nav__item--active">
              <div className="rnp-mock-bottom-nav__icon" />
              <span>首页</span>
            </div>
            <div className="rnp-mock-bottom-nav__item">
              <div className="rnp-mock-bottom-nav__icon" />
              <span>发现</span>
            </div>
            <div className="rnp-mock-bottom-nav__item">
              <div className="rnp-mock-bottom-nav__icon" />
              <span>消息</span>
            </div>
            <div className="rnp-mock-bottom-nav__item">
              <div className="rnp-mock-bottom-nav__icon" />
              <span>我的</span>
            </div>
          </div>
        </GalleryItem>

        {/* FAB */}
        <GalleryItem label="FAB / 浮动操作按钮">
          <div className="rnp-mock-fab rnp-mock-fab--gallery">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>
          <div className="rnp-mock-fab rnp-mock-fab--extended">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            <span>新建</span>
          </div>
        </GalleryItem>
      </div>
    </div>
  );
};

const GalleryItem: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="rnp-gallery__item">
    <div className="rnp-gallery__item-content">{children}</div>
    <div className="rnp-gallery__item-label">{label}</div>
  </div>
);
