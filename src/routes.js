import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage";
import ProductsPage from "./pages/ProductsPage";
import SalePage from "./pages/SalePage";
import CartPage from "./pages/CartPage";
import SingleProductPage from "./pages/SingleProductPage";
import CategoryProductsPage from "./pages/CategoryProductPage";
import ErrorPage from "./pages/ErrorPage";

export const routes = [
  { key: 1, element: <CatalogPage />, path: "/catalog" },
  { key: 2, element: <MainPage />, path: "" },
  { key: 3, element: <ProductsPage />, path: "/products" },
  { key: 4, element: <SalePage />, path: "/sale" },
  { key: 5, element: <CartPage />, path: "/cart" },
  { key: 6, element: <SingleProductPage />, path: "/products/:id" },
  { key: 7, element: <CategoryProductsPage />, path: "/categories/:id" },
  { key: 8, element: <ErrorPage />, path: "*" },
];
