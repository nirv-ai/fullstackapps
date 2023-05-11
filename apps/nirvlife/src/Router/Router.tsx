import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { FC } from "react";
import type { QueryClient } from "@tanstack/react-query";

import { App, AppLandingScreen, NotFoundScreen } from "Components";

export interface RouterInterface {
  queryClient: QueryClient;
}

const createRouter = (queryClient: QueryClient) => {
  return createBrowserRouter([
    {
      path: "/",
      element: <App key="app" />,
      errorElement: <NotFoundScreen />,
      children: [
        {
          // pathless route enables NotFound to load within Outlet
          errorElement: <NotFoundScreen />,
          children: [
            {
              index: true,
              element: <AppLandingScreen />,
            },
          ],
        },
      ],
    },
  ]);
};

export const Router: FC<RouterInterface> = ({ queryClient }) => (
  <RouterProvider router={createRouter(queryClient)} />
);
