import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SearchIcon,
  GithubIcon,
  DiscordIcon,
  TwitterIcon,
  SunIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
} from "./Icons";

const navLinks = [
  { to: "/guides", label: "指南" },
  { to: "/components", label: "组件" },
  { to: "/showcase", label: "案例" },
];

const versions = ["5.x", "6.x", "4.x", "3.x", "2.x", "1.x"];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [dark, setDark] = useState(false);
  const [versionOpen, setVersionOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("rnp-theme");
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : preferDark;
    setDark(isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setVersionOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem("rnp-theme", newDark ? "dark" : "light");
  };

  return (
    <>
      <header className={`rnp-nav ${scrolled ? "rnp-nav--scrolled" : ""}`}>
        <div className="rnp-nav__inner">
          {/* Logo */}
          <div className="rnp-nav__left">
            <Link to="/" className="rnp-nav__logo" aria-label="React Native Paper 首页">
              <PaperLogo />
            </Link>
          </div>

          {/* 导航链接 */}
          <nav className="rnp-nav__links">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rnp-nav__link ${location.pathname.startsWith(link.to) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}

            {/* 版本选择器 */}
            <div
              className={`rnp-nav__version ${versionOpen ? "open" : ""}`}
              onMouseEnter={() => setVersionOpen(true)}
              onMouseLeave={() => setVersionOpen(false)}
            >
              <button className="rnp-nav__version-btn" onClick={() => setVersionOpen(!versionOpen)}>
                5.x
                <ChevronDownIcon size={12} />
              </button>
              {versionOpen && (
                <ul className="rnp-nav__version-dropdown">
                  {versions.map((v) => (
                    <li key={v} className={v === "5.x" ? "active" : ""}>
                      <a href="#">{v}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>

          {/* 右侧操作 */}
          <div className="rnp-nav__right">
            <button className="rnp-nav__search" aria-label="搜索">
              <SearchIcon size={16} />
              <span className="rnp-nav__search-text">搜索</span>
              <kbd className="rnp-nav__search-kbd">Ctrl K</kbd>
            </button>

            <button className="rnp-nav__theme-toggle" onClick={toggleTheme} aria-label="切换主题">
              <SunIcon size={18} />
            </button>

            <div className="rnp-nav__social">
              <a
                href="https://github.com/callstack/react-native-paper"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rnp-nav__social-link"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://discord.gg/zwR2Cdh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="rnp-nav__social-link"
              >
                <DiscordIcon size={20} />
              </a>
              <a
                href="https://twitter.com/rn_paper"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="rnp-nav__social-link"
              >
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            className="rnp-nav__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="菜单"
          >
            {mobileOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </header>

      {/* 移动端抽屉 */}
      {mobileOpen && (
        <div className="rnp-nav__mobile-menu" onClick={() => setMobileOpen(false)}>
          <div className="rnp-nav__mobile-content" onClick={(e) => e.stopPropagation()}>
            <div className="rnp-nav__mobile-search">
              <SearchIcon size={16} />
              <span>搜索文档...</span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rnp-nav__mobile-link ${location.pathname.startsWith(link.to) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="rnp-nav__mobile-divider" />
            <div className="rnp-nav__mobile-version">
              <span>版本</span>
              <div className="rnp-nav__mobile-versions">
                {versions.map((v) => (
                  <a key={v} href="#" className={v === "5.x" ? "active" : ""}>
                    {v}
                  </a>
                ))}
              </div>
            </div>
            <div className="rnp-nav__mobile-divider" />
            <div className="rnp-nav__mobile-social">
              <a href="https://github.com/callstack/react-native-paper" target="_blank" rel="noopener noreferrer">
                <GithubIcon size={20} />
              </a>
              <a href="https://discord.gg/zwR2Cdh" target="_blank" rel="noopener noreferrer">
                <DiscordIcon size={20} />
              </a>
              <a href="https://twitter.com/rn_paper" target="_blank" rel="noopener noreferrer">
                <TwitterIcon size={20} />
              </a>
              <button onClick={toggleTheme} className="rnp-nav__mobile-theme">
                <SunIcon size={20} />
                <span>{dark ? "切换浅色" : "切换深色"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const PaperLogo: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="rnp-logo">
    <rect width="32" height="32" rx="8" fill="var(--rnp-primary)" />
    <path d="M10 9h8.5c2.5 0 4.5 1 4.5 3.5c0 1.5-.8 2.5-2 3c1.5.5 2.5 1.5 2.5 3.5c0 2.5-2 4-4.8 4H10V9zm3 5.5h5c.8 0 1.5-.5 1.5-1.3s-.7-1.2-1.5-1.2h-5v2.5zm0 5.5h5.5c1 0 1.5-.5 1.5-1.3s-.5-1.2-1.5-1.2H13v2.5z" fill="white" />
  </svg>
);
