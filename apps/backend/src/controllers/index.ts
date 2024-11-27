import { Router } from 'express';

export function registerRoutes(router: Router) {
  const routes = [
    './status.route.ts',
  ];
  routes.map((route: string) => register(route, router));
}

async function register(routePath: string, router: Router) {
  const fileUrl = new URL(routePath, import.meta.url)
  const route = await import(fileUrl.pathname);
  route.register(router);
}
