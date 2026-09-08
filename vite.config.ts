// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages project sites are served under a subdirectory (e.g. /repo-name/).
// Set VITE_BASE_PATH in the workflow or to "/" for a custom domain/user site.
const basePath = process.env.VITE_BASE_PATH?.replace(/\/$/, "") || "/";
const base = basePath === "/" ? "/" : `${basePath}/`;

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender the site to static HTML so it can be deployed to GitHub Pages without SSR.
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
  // Disable the Nitro/Cloudflare server bundle so GitHub Pages receives a static site only.
  nitro: false,
  vite: {
    base,
    build: {
      // Keep the site self-contained for a static host.
      assetsDir: "assets",
      emptyOutDir: true,
    },
  },
});
