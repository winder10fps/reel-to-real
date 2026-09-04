import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type React from "react";

import { HomePage } from "@/pages/home";
import { ContactsPage } from "@/pages/contacts";
import { NotFoundPage } from "@/pages/not-found";
import { Layout } from "@/app/layout";
import { ShopsPage } from "@/pages/shops";
import { CartPage } from "@/pages/cart";
import { OrderPage } from "@/pages/order";

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
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/order',
        element: <OrderPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
])

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}