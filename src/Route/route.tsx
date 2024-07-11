import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../Layout/landingPage/LandingPage";
import ProductAndCategoryM from "../pages/Management/ProductAndCategoryM";

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
    ],
  },
]);

export default router;
