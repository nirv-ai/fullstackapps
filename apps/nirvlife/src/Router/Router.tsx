import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { QueryClient } from "@tanstack/react-query";
import type { FC } from "react";

import { App, AppLandingScreen, NotFoundScreen } from "Components";

const router = (queryClient: QueryClient) => {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
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

export interface RouterInterface {
  queryClient: QueryClient;
}
export const Router: FC<RouterInterface> = ({ queryClient }) => (
  <RouterProvider router={router(queryClient)} />
);
