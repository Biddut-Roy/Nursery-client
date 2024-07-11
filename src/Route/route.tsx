import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../Layout/landingPage/LandingPage";
import CardDetails from "../pages/card/CardDetails";

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
        path: "/details",
        element: <CardDetails />,
      },
    ],
  },
]);

export default router;
