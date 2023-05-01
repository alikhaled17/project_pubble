import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { lazy } from "react";
import Design from "./modules/Design/Design.component";

const Builder = lazy(() => import("@/modules/Builder/Builder.component"));

const Routes = () => {
  // const { user } = useSelector((state: AppState) => state.Auth);
  // const isAuth = !!user;
  const routes = useRoutes([
    {
      path: "",
      element: <Builder />,
    },
  ]);

  return routes;
};

export default Routes;
