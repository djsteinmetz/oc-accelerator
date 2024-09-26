import { RouteObject } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from './components/Dashboard';
import OrderConfirmation from "./components/cart/OrderConfirmation";
import { ShoppingCart } from "./components/cart/ShoppingCart";
import { ShoppingCart as TradeInShoppingCart } from "./components/trade-in-cart/ShoppingCart";
import CategoryList from "./components/category/CategoryList";
import ProductDetailWrapper from "./components/product/ProductDetailWrapper";
import ProductList from "./components/product/ProductList";
import TradeInProductList from "./components/trade-in/ProductList";
import TradeInProductDetailWrapper from "./components/trade-in/ProductDetailWrapper";
import { Confirmation } from "./components/trade-in/Confirmation";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/trade-in/cart",
        element: <TradeInShoppingCart />
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/shop/:catalogId/categories",
        element: <CategoryList />,
      },
      {
        path: "/shop/:catalogId/categories/:categoryId",
        element: <CategoryList />,
      },
      {
        path: "/shop/:catalogId/categories/:categoryId/products",
        element: <ProductList />,
      },
      {
        path: "/shop/:catalogId/products",
        element: <ProductList />,
      },
      {
        path: "/trade-in/:catalogId/products",
        element: <TradeInProductList />,
      },
      {
        path: "/trade-in/:productId",
        element: <TradeInProductDetailWrapper />,
      },
      {
        path: "/trade-in-confirmation",
        element: <Confirmation />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetailWrapper />,
      },
    ],
  },
  {
    path: "/order-confirmation",
    element: <OrderConfirmation />,
  },
];

export default routes;
