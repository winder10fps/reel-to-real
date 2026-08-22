import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import type React from "react";
import Layout from "../../pages/layout/Layout";

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
        path: '*',
        // 404 страницу вставить
        element: <div>404</div>
      }
    ]
  }
])

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}