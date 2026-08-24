import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import type React from "react";

import NotFound from "../../pages/NotFoundPage/NotFound";
import ShopsPage from "../../pages/ShopsPage/ShopsPage";
import Layout from "../../widgets/layout/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/contacts',
        element: <ContactsPage />
      },
      {
        path: '/shops',
        element: <ShopsPage />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}