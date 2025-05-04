import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./pages/Download-Page/Download.jsx";
import Trending from "./pages/Trending/Trending.jsx";
import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home.jsx";
import Sorted from "./pages/Genres/Sorted.jsx";
import NotFound from "./NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/categories/:genre",
    element: <Sorted />,
  },
  {
    path: "/download",
    element: <App />,
  },
  {
    path: "/trendinglist",
    element: <Trending />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
