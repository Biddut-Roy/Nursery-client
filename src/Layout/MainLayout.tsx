import Footer from "../Component/footer/Footer";
import Navbar from "../Component/navbar/Navbar";
import LandingPage from "./landingPage/LandingPage";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default MainLayout;
