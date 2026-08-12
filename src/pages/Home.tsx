import React from "react";
import { Link } from "react-router-dom";
import { features } from "../data/features";
import { featureIcons, ArrowRightIcon } from "../components/Icons";
import { ComponentGallery } from "../components/ComponentGallery";

export const Home: React.FC = () => {
  return (
    <div className="rnp-home">
      {/* ===== Hero 区域 ===== */}
      <section className="rnp-hero">
        <div className="rnp-hero__bg" />
        <div className="container rnp-hero__inner">
          <div className="rnp-hero__content">
            <h1 className="rnp-hero__title">
              React Native 的
              <br />
              跨平台 Material Design
            </h1>
            <p className="rnp-hero__desc">
              Paper 是一套可定制、生产就绪的 React Native 组件库，遵循 Google 的 Material Design 设计规范。
            </p>
            <div className="rnp-hero__actions">
              <Link to="/guides" className="btn btn-primary rnp-hero__btn">
                快速开始
                <ArrowRightIcon size={16} />
              </Link>
              <a
                href="https://snack.expo.dev/@react-native-paper/react-native-paper-example_v5"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rnp-hero__btn"
              >
                在 Snack 中体验
              </a>
            </div>
          </div>

          {/* Hero 装饰 - Material 组件预览 */}
          <div className="rnp-hero__visual">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ===== 特性展示 ===== */}
      <section className="rnp-features">
        <div className="container">
          <div className="rnp-features__grid">
            {features.map((feature, i) => {
              const Icon = featureIcons[feature.icon];
              return (
                <div
                  key={feature.id}
                  className="rnp-feature-card"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="rnp-feature-card__icon">
                    {Icon && <Icon size={48} />}
                  </div>
                  <h3 className="rnp-feature-card__title">{feature.title}</h3>
                  <p className="rnp-feature-card__desc">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 组件画廊 ===== */}
      <section className="rnp-gallery-section">
        <div className="container">
          <div className="rnp-gallery-section__header">
            <h2 className="rnp-gallery-section__title">
              Material 组件、排版和控件
            </h2>
            <p className="rnp-gallery-section__desc">
              浏览组件在真实产品 UI 中的呈现方式，而非通用的文档页面。
            </p>
            <div className="rnp-gallery-section__links">
              <Link to="/components" className="rnp-gallery-section__link">
                浏览所有组件
                <ArrowRightIcon size={14} />
              </Link>
              <span className="rnp-gallery-section__sep">或查看演示应用</span>
              <a href="https://apps.apple.com/app/react-native-paper/id1548934513" target="_blank" rel="noopener noreferrer" className="rnp-gallery-section__store">
                iOS
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.callstack.reactnativepaperexample" target="_blank" rel="noopener noreferrer" className="rnp-gallery-section__store">
                Android
              </a>
            </div>
          </div>
          <ComponentGallery />
        </div>
      </section>
    </div>
  );
};

/* ===== Hero 装饰可视化 ===== */
const HeroVisual: React.FC = () => (
  <div className="rnp-hero-visual">
    <div className="rnp-hero-visual__card rnp-hero-visual__card--appbar">
      <div className="rnp-mock-appbar">
        <div className="rnp-mock-appbar__icon" />
        <div className="rnp-mock-appbar__title">我的应用</div>
        <div className="rnp-mock-appbar__actions">
          <div className="rnp-mock-appbar__action" />
          <div className="rnp-mock-appbar__action" />
        </div>
      </div>
    </div>

    <div className="rnp-hero-visual__card rnp-hero-visual__card--button">
      <div className="rnp-mock-button">
        <span>按我</span>
      </div>
    </div>

    <div className="rnp-hero-visual__card rnp-hero-visual__card--chip">
      <div className="rnp-mock-chip">
        <div className="rnp-mock-chip__dot" />
        <span>标签</span>
      </div>
    </div>

    <div className="rnp-hero-visual__card rnp-hero-visual__card--input">
      <div className="rnp-mock-input">
        <div className="rnp-mock-input__label">邮箱</div>
        <div className="rnp-mock-input__field">user@example.com</div>
      </div>
    </div>

    <div className="rnp-hero-visual__card rnp-hero-visual__card--typography">
      <div className="rnp-mock-typography">
        <div className="rnp-mock-typography__display">Display Large</div>
        <div className="rnp-mock-typography__body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>

    <div className="rnp-hero-visual__card rnp-hero-visual__card--fab">
      <div className="rnp-mock-fab">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </div>
    </div>

    <div className="rnp-hero-visual__card rnp-hero-visual__card--spinner">
      <div className="rnp-mock-spinner" />
    </div>
  </div>
);
