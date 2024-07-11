import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../Layout/landingPage/LandingPage";
import ProductAndCategoryM from "../pages/Management/ProductAndCategoryM";
import Added from "../pages/addProduct/Added";
import ShopingCard from "../pages/shopingCard/ShopingCard";

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
        path: "/d",
        element: <ProductAndCategoryM />,
      },
      {
        path: "/add",
        element: <Added />,
      },
      {
        path: "/card",
        element: <ShopingCard />,
      },
    ],
  },
]);

export default router;
