import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import ArthaP2PPage from "./pages/ArthaP2PPage";
import ArthaMatchPage from "./pages/ArthaMatchPage";
import AboutPage from "./pages/AboutPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import ZohoRolloutsPage from "./pages/ZohoPage";
import ArthaTaxPage from "./pages/ArthaEInovice";
import ArthaExpensePage from "./pages/ArthaEM";
import ArthaCollectPage from "./pages/ArthaAR";

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
    path: "/products/arthaAR",
    Component: ArthaCollectPage,
  },
  {
    path: "/products/arthaEM",
    Component: ArthaExpensePage,
  },
  {
    path: "/products/arthaEInvoice",
    Component: ArthaTaxPage,
  },
  {
    path: "/services",
    Component: ServicesPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/resources",
    Component: ResourcesPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/zoho",
    Component: ZohoRolloutsPage,
  },
]);