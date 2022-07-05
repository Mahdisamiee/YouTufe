import { useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import About from "./containers/About/About";
import Home from "./containers/Home/Home";
import BaseLayout from "./components/Layout/BaseLayout";
import NotFoundPage from "./containers/404/NotFoundPage";

export const routes: RouteObject[] = [
  {

    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

// https://www.youtube.com/watch?v=2aumoR0-jmQ
// https://ui.dev/react-router-route-config
// https://ui.dev/react-router-tutorial
// https://reactrouter.com/docs/en/v6/hooks/use-routes
