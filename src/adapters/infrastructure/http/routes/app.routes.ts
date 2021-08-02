import IRoute from "@adapters/infrastructure/http/contracts/IRoute";
import ComicPage from '@presentation/pages/ComicPage';
import HomePage from '@presentation/pages/HomePage';

const appRoutes: IRoute[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    exact: true,
  },
  {
    path: "/comic/:id",
    name: "show.comic",
    component: ComicPage,
    exact: true,
  },
];

export default appRoutes;
