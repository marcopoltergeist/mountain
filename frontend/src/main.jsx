import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Mountain from "./pages/Nav/Mountain";
import Faq from "./pages/Nav/Faq";
import Contact from "./pages/Nav/Contact";
import Articles from "./pages/Nav/Articles";
import Forbidden from "./pages/Forbidden";
import CreateArticle from "./pages/CreateArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/articles",
    element: <Articles />,
    errorElement: <Forbidden />,
    loader: () =>
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/articles`, {
          withCredentials: true,
        })
        .then((response) => response.data)
        .catch((error) => console.error("ERROR", error)),
  },
  {
    path: "/create",
    element: <CreateArticle />,
  },
  {
    path: "/mountain",
    element: <Mountain />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
