import { watch } from "node:fs";
import { basename } from "node:path";

const isDev = process.env.NODE_ENV !== "production";
const OUTDIR = "dist";

// ============================================
// 构建函数
// ============================================
async function buildApp() {
  const result = await Bun.build({
    entrypoints: ["./src/entry.tsx"],
    outdir: OUTDIR,
    target: "browser",
    format: "esm",
    splitting: true,
    sourcemap: isDev ? "external" : "none",
    minify: !isDev,
    naming: "[name]-[hash].[ext]",
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    },
  });

  if (!result.success) {
    console.error("Build failed:");
    for (const log of result.logs) console.error(log);
    return null;
  }

  // 找到生成的文件名
  const jsFile = result.outputs.find((o) => o.path.endsWith(".js"));
  const cssFile = result.outputs.find((o) => o.path.endsWith(".css"));
  const jsName = jsFile ? basename(jsFile.path) : null;
  const cssName = cssFile ? basename(cssFile.path) : null;

  // 生成 index.html
  let html = await Bun.file("./index.html").text();
  if (jsName) {
    html = html.replace(
      '<script type="module" src="/.dist/entry.js"></script>',
      `<script type="module" src="/${jsName}"></script>`
    );
  }
  if (cssName) {
    const cssLink = `<link rel="stylesheet" href="/${cssName}" />`;
    if (!html.includes(cssName)) {
      html = html.replace("</head>", `  ${cssLink}\n  </head>`);
    }
  }
  await Bun.write(`${OUTDIR}/index.html`, html);

  // 复制 public/ 静态资源
  try {
    const publicFiles = await Array.fromAsync(
      new Bun.Glob("*").scan({ cwd: "public", absolute: false })
    );
    for (const file of publicFiles) {
      const content = await Bun.file(`public/${file}`).text();
      await Bun.write(`${OUTDIR}/${file}`, content);
    }
  } catch {}

  console.log(
    `Build: ${jsName}${cssName ? ", " + cssName : ""}, index.html`
  );
  return { jsName, cssName };
}

// ============================================
// 开发模式：构建 + 文件监听
// ============================================
if (isDev) {
  await buildApp();

  let rebuildTimeout: any = null;
  let isRebuilding = false;
  try {
    watch("./src", { recursive: true }, async () => {
      if (rebuildTimeout) clearTimeout(rebuildTimeout);
      rebuildTimeout = setTimeout(async () => {
        if (isRebuilding) return;
        isRebuilding = true;
        console.log("Rebuilding...");
        await buildApp();
        isRebuilding = false;
      }, 300);
    });
  } catch {}
}

// ============================================
// 内容类型
// ============================================
const contentTypes: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".map": "application/json; charset=utf-8",
};

// ============================================
// Bun.serve() — 同时用于开发和生产
// Vercel 通过此调用检测服务器并路由请求
// ============================================
Bun.serve({
  // port 在本地运行时生效，Vercel 上自动忽略
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    // 根路径 → index.html
    if (pathname === "/") {
      const html = await Bun.file(`./${OUTDIR}/index.html`).text();
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    // 静态文件（带扩展名的路径）
    if (pathname.includes(".")) {
      const file = Bun.file(`./${OUTDIR}${pathname}`);
      if (await file.exists()) {
        const ext = pathname.substring(pathname.lastIndexOf("."));
        return new Response(file, {
          headers: {
            "Content-Type": contentTypes[ext] || "application/octet-stream",
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      }
    }

    // SPA 路由 → 返回 index.html（React Router 处理）
    const html = await Bun.file(`./${OUTDIR}/index.html`).text();
    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
});

if (isDev) {
  console.log("🚀 React Native Paper 中文文档已启动");
  console.log("📍 地址: http://localhost:3000");
}
