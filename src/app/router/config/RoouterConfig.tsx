import { RouteProps } from "react-router-dom";
import { Home } from "../../../pages/home";
import ContactMe from "~features/ContactForm";

enum AppRoutes {
  Home = "home",
  ContactMe = "contact_me"
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
  [AppRoutes.ContactMe]: "/contact"
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Home]: {
    path: routePaths.home,
    element: <Home />,
  },
  [AppRoutes.ContactMe]: {
    path: routePaths.contact_me,
    element: <ContactMe />,
  },
};

