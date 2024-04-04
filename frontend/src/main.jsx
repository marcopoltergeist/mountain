import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forbidden from "./pages/Forbidden";
import CreateArticle from "./pages/CreateArticle";
import Articles from "./pages/Articles";

import { UserProvider } from "./services/UserContext";

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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
