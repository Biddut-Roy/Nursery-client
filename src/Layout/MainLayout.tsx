import { Outlet } from "react-router-dom";
import Footer from "../Component/footer/Footer";
import Navbar from "../Component/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
