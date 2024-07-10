import Footer from "../../Component/footer/Footer";
import ImgGallery from "../../Component/gallery/ImgGallery";
import HeroSection from "../../Component/hero/HeroSection";
import Navbar from "../../Component/navbar/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ImgGallery />
      <Footer />
    </div>
  );
};

export default LandingPage;
