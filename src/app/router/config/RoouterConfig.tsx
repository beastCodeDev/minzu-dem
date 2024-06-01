import { RouteProps } from "react-router-dom";

import { AdminBio } from "~pages/admin/bio";
import { Home } from "~pages/home";

enum AppRoutes {
  Home = "home",
  AdminBio = "adminBio",
}
export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
  [AppRoutes.AdminBio]: "/admin/bio",


enum AppRoutes {
  Home = "home",
}
export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Home]: {
    path: routePaths.home,
    element: <Home />,
  },

  [AppRoutes.AdminBio]: {
    path: routePaths.adminBio,
    element: <AdminBio />,
  },

};
