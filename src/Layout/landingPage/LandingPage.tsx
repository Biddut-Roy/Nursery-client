import ImgGallery from "../../Component/gallery/ImgGallery";
import HeroSection from "../../Component/hero/HeroSection";
import Allproduct from "../../Component/product/allProduct/Allproduct";
import Product from "../../Component/product/Product";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Product />
      <Allproduct />
      <ImgGallery />
    </div>
  );
};

export default LandingPage;
