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
      element: <Navigate to="/design" />,
    },
    {
      path: "/design",
      element: <Builder />,
      children: [
        {
          index: true,
          element: <Navigate to="page" />,
        },
        {
          path: "page",
          element: <Design />,
        },
      ],
    },
  ]);

  return routes;
};

export default Routes;
