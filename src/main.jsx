import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContactPage, EntryPage, Home, LandingPage, NotFound } from "./components/pages";
import Contact from "./components/pages/Contact";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EntryPage />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
