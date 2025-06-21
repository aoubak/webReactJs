import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";




const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: (
        <div className="flex items-center justify-center h-screen text-4xl">
          Page not found
        </div>
      ),
      children: [
        {
        index: true, // this means "/"
        element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        }
      ],
    },
  ],
  {
    basename: "/webReactJs", 
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
