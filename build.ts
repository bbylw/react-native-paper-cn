/**
 * 生产构建脚本
 * 使用 Bun.build() 打包 JS/CSS，并生成自包含的静态输出到 dist/
 */

import { join, basename, dirname } from "node:path";

const OUTDIR = "dist";

// 清理输出目录（跨平台）
const cleanDir = Bun.spawn(
  process.platform === "win32"
    ? ["cmd", "/c", "if", "exist", OUTDIR, "rmdir", "/s", "/q", OUTDIR]
    : ["rm", "-rf", OUTDIR]
);
await cleanDir.exited;

// 打包 JS
const result = await Bun.build({
  entrypoints: ["./src/entry.tsx"],
  outdir: OUTDIR,
  target: "browser",
  format: "esm",
  splitting: true,
  sourcemap: "none",
  minify: true,
  naming: "[name]-[hash].[ext]",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});

if (!result.success) {
  console.error("Build failed:");
  for (const log of result.logs) {
    console.error(log);
  }
  process.exit(1);
}

// 找到生成的 JS 和 CSS 文件名（只取文件名，不要完整路径）
const jsFile = result.outputs.find((o) => o.path.endsWith(".js"));
const cssFile = result.outputs.find((o) => o.path.endsWith(".css"));

if (!jsFile) {
  console.error("JS output not found");
  process.exit(1);
}

const jsName = basename(jsFile.path);
const cssName = cssFile ? basename(cssFile.path) : null;

console.log(`JS:  ${jsName}`);
if (cssName) console.log(`CSS: ${cssName}`);

// 读取 index.html 模板并修改引用
let html = await Bun.file("./index.html").text();

// 替换 JS 引用（开发路径 -> 生产路径）
html = html.replace(
  '<script type="module" src="/.dist/entry.js"></script>',
  `<script type="module" src="/${jsName}"></script>`
);

// 注入 CSS 链接
if (cssName) {
  const cssLink = `<link rel="stylesheet" href="/${cssName}" />`;
  if (!html.includes(cssName)) {
    html = html.replace("</head>", `  ${cssLink}\n  </head>`);
  }
}

// 写入 dist/index.html
await Bun.write(`${OUTDIR}/index.html`, html);

console.log(`HTML: index.html`);
console.log(`Done -> ${OUTDIR}/`);
