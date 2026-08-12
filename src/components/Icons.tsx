import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

export const SearchIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 16 16" className={className}>
    <path fill="currentColor" d="M14.667 14.666h-1.333v-1.333h1.332zm-1.333-1.333H12V12h1.333zm-4-1.333H4v-1.334h5.334zM12 12h-1.335v-1.334h1.335zm-8-1.334H2.665V9.333H4zm6.665 0H9.334V9.333h1.332zm-8-1.333H1.335V4h1.333zm9.335 0h-1.335V4h1.335zM4 4H2.665V2.666H4zm6.665 0H9.334V2.666h1.332zM9.334 2.666H4V1.333h5.334z" />
  </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const DiscordIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0a13 13 0 0 0-.617-1.25a.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.08.08 0 0 0 .084-.028a14 14 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13 13 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10 10 0 0 0 .372-.292a.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127a12.3 12.3 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028a19.8 19.8 0 0 0 6.002-3.03a.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418" />
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M18 22H8v-2h10zM8 20H6v-2h2zm12 0h-2v-2h2zM6 18H4v-2h2zm16 0h-2v-4h-2v-2h2v-2h2zM4 16H2V6h2zm14 0h-6v-2h6zm-6-2h-2v-2h2zm-2-2H8V6h2zM6 6H4V4h2zm8-2h-2v2h-2V4H6V2h8z" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ size = 12, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 12 13" className={className}>
    <path fill="currentColor" d="M6.5 8.5h1v1h-1v1h-1v-1h-1v-1h1v-6h1zm-2 0h-1v-1h1zm4 0h-1v-1h1zm-5-2v1h-1v-1zm6 1h-1v-1h1z" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" fillRule="evenodd" d="M1 9h6v6H1zm2 2v2h2v-2zm6-2h6v6H9zm2 2v2h2v-2zm6-2h6v6h-6zm2 2v2h2v-2z" clipRule="evenodd" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M14 5l-1.41 1.41L17.17 11H4v2h13.17l-4.58 4.59L14 19l7-7z" />
  </svg>
);

/* 特性区域图标 */
export const GridIcon: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <rect x="6" y="6" width="22" height="22" rx="4" fill="var(--icon-color, #6200ee)" opacity="0.85" />
    <rect x="36" y="6" width="22" height="22" rx="4" fill="var(--icon-color, #6200ee)" opacity="0.55" />
    <rect x="6" y="36" width="22" height="22" rx="4" fill="var(--icon-color, #6200ee)" opacity="0.55" />
    <rect x="36" y="36" width="22" height="22" rx="4" fill="var(--icon-color, #6200ee)" opacity="0.85" />
  </svg>
);

export const PaletteIcon: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 6C18 6 6 17 6 30c0 9 5 16 12 19 3 1 5-1 5-3v-3c0-2 1-3 3-3h6c2 0 4 1 4 3v3c0 3 4 5 8 3 7-4 14-12 14-22 0-15-12-24-26-24z" fill="var(--icon-color, #6200ee)" opacity="0.2" />
    <circle cx="16" cy="28" r="4" fill="#e91e63" />
    <circle cx="28" cy="16" r="4" fill="#ff9800" />
    <circle cx="44" cy="18" r="4" fill="#4caf50" />
    <circle cx="50" cy="32" r="4" fill="#2196f3" />
    <circle cx="42" cy="46" r="4" fill="#9c27b0" />
    <circle cx="22" cy="46" r="4" fill="#ff5722" />
  </svg>
);

export const AccessibilityIcon: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="14" r="6" fill="var(--icon-color, #6200ee)" />
    <path d="M32 24c-8 0-18 2-22 4v2c4-2 14-4 22-4s18 2 22 4v-2c-4-2-14-4-22-4z" fill="var(--icon-color, #6200ee)" opacity="0.7" />
    <path d="M32 26v8c0 6-2 12-4 18l-2 6h4l2-6c1-3 2-7 2-12 0 5 1 9 2 12l2 6h4l-2-6c-2-6-4-12-4-18v-8" stroke="var(--icon-color, #6200ee)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DevicesIcon: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <rect x="4" y="10" width="36" height="26" rx="3" fill="var(--icon-color, #6200ee)" opacity="0.3" />
    <rect x="4" y="10" width="36" height="26" rx="3" stroke="var(--icon-color, #6200ee)" strokeWidth="2" fill="none" />
    <rect x="44" y="18" width="16" height="30" rx="3" fill="var(--icon-color, #6200ee)" opacity="0.3" />
    <rect x="44" y="18" width="16" height="30" rx="3" stroke="var(--icon-color, #6200ee)" strokeWidth="2" fill="none" />
    <rect x="10" y="40" width="24" height="14" rx="2" fill="var(--icon-color, #6200ee)" opacity="0.2" />
    <rect x="10" y="40" width="24" height="14" rx="2" stroke="var(--icon-color, #6200ee)" strokeWidth="2" fill="none" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M42 6C26 6 14 18 14 32s12 26 28 26c3 0 6-1 9-2-12-2-21-13-21-25s9-23 21-25c-3-1-6-2-9-2z" fill="var(--icon-color, #6200ee)" opacity="0.85" />
    <circle cx="50" cy="18" r="2" fill="var(--icon-color, #6200ee)" />
    <circle cx="54" cy="30" r="1.5" fill="var(--icon-color, #6200ee)" />
    <circle cx="48" cy="42" r="1" fill="var(--icon-color, #6200ee)" />
  </svg>
);

export const VersionsIcon: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <rect x="10" y="8" width="44" height="12" rx="3" fill="var(--icon-color, #6200ee)" opacity="0.3" />
    <rect x="10" y="8" width="44" height="12" rx="3" stroke="var(--icon-color, #6200ee)" strokeWidth="2" fill="none" />
    <rect x="14" y="26" width="36" height="12" rx="3" fill="var(--icon-color, #6200ee)" opacity="0.4" />
    <rect x="14" y="26" width="36" height="12" rx="3" stroke="var(--icon-color, #6200ee)" strokeWidth="2" fill="none" />
    <rect x="18" y="44" width="28" height="12" rx="3" fill="var(--icon-color, #6200ee)" opacity="0.5" />
    <rect x="18" y="44" width="28" height="12" rx="3" stroke="var(--icon-color, #6200ee)" strokeWidth="2" fill="none" />
  </svg>
);

export const featureIcons: Record<string, React.FC<IconProps>> = {
  grid: GridIcon,
  palette: PaletteIcon,
  accessibility: AccessibilityIcon,
  devices: DevicesIcon,
  moon: MoonIcon,
  versions: VersionsIcon,
};
