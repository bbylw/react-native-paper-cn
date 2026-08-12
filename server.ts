import { watch } from "node:fs";

const PORT = 3000;

// 使用 Bun.build 进行打包，解决 bare module imports
async function buildApp() {
  const result = await Bun.build({
    entrypoints: ["./src/entry.tsx"],
    outdir: "./.dist",
    target: "browser",
    format: "esm",
    splitting: true,
    sourcemap: "external",
    minify: false,
    define: {
      "process.env.NODE_ENV": JSON.stringify("development"),
    },
  });

  if (!result.success) {
    console.error("Build failed:");
    for (const log of result.logs) {
      console.error(log);
    }
    return false;
  }

  console.log(`✅ 构建成功 (${result.outputs.length} 个文件)`);
  return true;
}

// 初始构建
await buildApp();

// 监听文件变化并重新构建
let rebuildTimeout: any = null;
let isRebuilding = false;

try {
  watch("./src", { recursive: true }, async () => {
    if (rebuildTimeout) clearTimeout(rebuildTimeout);
    rebuildTimeout = setTimeout(async () => {
      if (isRebuilding) return;
      isRebuilding = true;
      console.log("🔄 重新构建...");
      await buildApp();
      isRebuilding = false;
      console.log("✅ 构建完成");
    }, 300);
  });
} catch (e) {
  console.log("文件监听不可用，请手动重启");
}

// 文件扩展名对应的 Content-Type
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

// 读取 HTML 并注入 CSS 链接
async function getIndexHtml(): Promise<string> {
  let html = await Bun.file("./index.html").text();
  const cssLink = '<link rel="stylesheet" href="/.dist/entry.css" />';
  if (!html.includes("entry.css")) {
    html = html.replace("</head>", `  ${cssLink}\n  </head>`);
  }
  return html;
}

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    let pathname = url.pathname;

    // 根路径返回 index.html
    if (pathname === "/") {
      const html = await getIndexHtml();
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    // SPA 路由 - 无扩展名的路径返回 index.html
    if (!pathname.includes(".") && !pathname.startsWith("/.dist")) {
      const html = await getIndexHtml();
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    // 从 .dist 目录提供打包后的文件
    const distFile = Bun.file(`.${pathname}`);
    if (await distFile.exists()) {
      const ext = pathname.substring(pathname.lastIndexOf("."));
      return new Response(distFile, {
        headers: {
          "Content-Type": contentTypes[ext] || "application/octet-stream",
          "Cache-Control": "no-cache",
        },
      });
    }

    // 404
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`🚀 React Native Paper 中文文档已启动`);
console.log(`📍 地址: http://localhost:${server.port}`);
