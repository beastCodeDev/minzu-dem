import { RouteProps } from "react-router-dom";
import { Home } from "../../../pages/home";

enum AppRouters {
  Home = "home",
}
export const Path: Record<AppRouters, string> = {
  [AppRouters.Home]: "/",
};
export const RouterConfig: Record<AppRouters, RouteProps> = {
  [AppRouters.Home]: {
    path: Path.home,
    element: <Home />,
  },
};
