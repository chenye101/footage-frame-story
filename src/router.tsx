import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // GitHub Pages project sites are served under a subdirectory.
    // Vite injects the configured base URL into import.meta.env.BASE_URL.
    basepath: import.meta.env.BASE_URL?.replace(/\/$/, "") || "/",
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
