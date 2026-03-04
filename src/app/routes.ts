import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import ArthaP2PPage from "./pages/ArthaP2PPage";
import ArthaMatchPage from "./pages/ArthaMatchPage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/products",
    Component: ProductsPage,
  },
  {
    path: "/products/arthap2p",
    Component: ArthaP2PPage,
  },
  {
    path: "/products/arthamatch",
    Component: ArthaMatchPage,
  },
  {
    path: "/services",
    Component: ServicesPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);