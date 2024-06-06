import { RouteProps } from 'react-router-dom';
import ContactForm from '~features/site/ContactMeView/ui/ContactMeView';

import { AdminBio } from '~pages/admin/bio';
import { PaintingsAdmin } from '~pages/admin/paintingsAdmin';
import { Home } from '~pages/site/home';

enum AppRoutes {
  Home = 'home',
  AdminBio = 'adminBio',
  AdminPaintings = 'adminPaintings',
  ContactForm = 'contactForm',
}
export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Home]: '/',
  [AppRoutes.AdminBio]: '/admin/bio',
  [AppRoutes.AdminPaintings]: '/admin/paintings',
  [AppRoutes.ContactForm]: '/contact/form'
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
  [AppRoutes.ContactForm]: {
    path: routePaths.contactForm,
    element: <ContactForm />,
  },
};
