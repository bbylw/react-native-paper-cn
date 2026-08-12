import React from "react";
import { GithubIcon, DiscordIcon, TwitterIcon } from "./Icons";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="rnp-footer">
      {/* CTA 区域 */}
      <div className="rnp-footer__cta">
        <div className="container">
          <div className="rnp-footer__cta-inner">
            <div className="rnp-footer__cta-content">
              <div className="rnp-footer__cta-icon">
                <AbstractAtomLogo />
              </div>
              <div>
                <h2 className="rnp-footer__cta-title">
                  需要值得信赖的 React 或 React Native 专业技术？
                </h2>
                <p className="rnp-footer__cta-desc">
                  我们多年来一直致力于构建全栈、跨平台应用，解决各种棘手的技术挑战。
                </p>
              </div>
            </div>
            <a
              href="https://www.callstack.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rnp-footer__cta-btn"
            >
              联系我们
            </a>
          </div>
        </div>
      </div>

      {/* 底部版权区域 */}
      <div className="rnp-footer__bottom">
        <div className="container">
          <div className="rnp-footer__bottom-inner">
            <Link to="/" className="rnp-footer__brand">
              <PaperLogoSmall />
              <span>React Native Paper</span>
            </Link>

            <div className="rnp-footer__links">
              <Link to="/guides" className="rnp-footer__link">指南</Link>
              <Link to="/components" className="rnp-footer__link">组件</Link>
              <Link to="/showcase" className="rnp-footer__link">案例</Link>
              <a
                href="https://github.com/callstack/react-native-paper"
                target="_blank"
                rel="noopener noreferrer"
                className="rnp-footer__link"
              >
                GitHub
              </a>
            </div>

            <div className="rnp-footer__social">
              <a href="https://github.com/callstack/react-native-paper" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href="https://discord.gg/zwR2Cdh" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <DiscordIcon size={18} />
              </a>
              <a href="https://twitter.com/rn_paper" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>

          <div className="rnp-footer__copyright">
            <span>© 2026 Callstack. 保留所有权利。</span>
            <span className="rnp-footer__copyright-sep">·</span>
            <span>本中文文档由社区翻译，仅供参考</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const PaperLogoSmall: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="var(--rnp-primary)" />
    <path d="M10 9h8.5c2.5 0 4.5 1 4.5 3.5c0 1.5-.8 2.5-2 3c1.5.5 2.5 1.5 2.5 3.5c0 2.5-2 4-4.8 4H10V9zm3 5.5h5c.8 0 1.5-.5 1.5-1.3s-.7-1.2-1.5-1.2h-5v2.5zm0 5.5h5.5c1 0 1.5-.5 1.5-1.3s-.5-1.2-1.5-1.2H13v2.5z" fill="white" />
  </svg>
);

const AbstractAtomLogo: React.FC = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="6" fill="var(--rnp-primary)" />
    <ellipse cx="28" cy="28" rx="24" ry="10" stroke="var(--rnp-primary)" strokeWidth="2" opacity="0.6" />
    <ellipse cx="28" cy="28" rx="24" ry="10" stroke="var(--rnp-primary)" strokeWidth="2" opacity="0.6" transform="rotate(60 28 28)" />
    <ellipse cx="28" cy="28" rx="24" ry="10" stroke="var(--rnp-primary)" strokeWidth="2" opacity="0.6" transform="rotate(120 28 28)" />
  </svg>
);
