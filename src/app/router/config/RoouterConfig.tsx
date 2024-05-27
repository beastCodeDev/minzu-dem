import { RouteProps } from "react-router-dom";
import { Home } from "../../../pages/home";

enum AppRoutes {
  Home = "home",
}
export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
};
export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Home]: {
    path: routePaths.home,
    element: <Home />,
  },
};
