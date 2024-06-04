import { RouteProps } from 'react-router-dom';

import { AdminBio } from '~pages/admin/bio';
import { PaintingsAdmin } from '~pages/admin/paintingsAdmin';
import { Home } from '~pages/site/home';

enum AppRoutes {
  Home = 'home',
  AdminBio = 'adminBio',
  AdminPaintings = 'adminPaintings',
}
export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Home]: '/',
  [AppRoutes.AdminBio]: '/admin/bio',
  [AppRoutes.AdminPaintings]: '/admin/paintings',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Home]: {
    path: routePaths.home,
    element: <Home />,
  },

  [AppRoutes.AdminBio]: {
    path: routePaths.adminBio,
    element: <AdminBio />,
  },

  [AppRoutes.AdminPaintings]: {
    path: routePaths.adminPaintings,
    element: <PaintingsAdmin />,
  },
};
