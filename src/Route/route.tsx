import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../Layout/landingPage/LandingPage";
import ProductAndCategoryM from "../pages/Management/ProductAndCategoryM";
import Added from "../pages/addProduct/Added";
import ShopingCard from "../pages/shopingCard/ShopingCard";
import CardDetails from "../pages/card/CardDetails";
import Payment from "../pages/shopingCard/PAyment/Payment";
import Allproduct from "../Component/product/allProduct/Allproduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/management",
        element: <ProductAndCategoryM />,
      },
      {
        path: "/products",
        element: <Allproduct />,
      },
      {
        path: "/add",
        element: <Added />,
      },
      {
        path: "/shop",
        element: <ShopingCard />,
      },
      {
        path: "/checkout/:money",
        element: <Payment />,
      },
      {
        path: "/card/:id",
        element: <CardDetails />,
      },
    ],
  },
]);

export default router;
