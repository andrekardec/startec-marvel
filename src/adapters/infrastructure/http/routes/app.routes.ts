import IRoute from "@adapters/infrastructure/http/contracts/IRoute";
import HomePage from '@presentation/pages/HomePage';

const appRoutes: IRoute[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    exact: true,
  }
];

export default appRoutes;
