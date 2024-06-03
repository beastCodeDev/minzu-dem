import { RouteProps } from "react-router-dom";
import { Home } from "../../../pages/home";
import { BioPages } from "~pages/BioPages";

enum AppRoutes {
  Home = "home",
  BioPages = "BioPages",
}
export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
  [AppRoutes.BioPages]: "/bio",
};
export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Home]: {
    path: routePaths.home,
    element: <Home />,
  },
  [AppRoutes.BioPages]: {
    path: routePaths.BioPages,
    element: <BioPages />,
  },
};
