import { Button } from "../../components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-500 md:order-1">
          <img src="/logo.webp" alt="" className=" h-10" />
        </div>
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 text-indigo-500">
              <a href="/">Home</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <a href="#product">Product</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <a href="#category">Category</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <a href="#">Gallery</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="order-2 md:order-3">
          <Button className="px-4 py-2 bg-indigo-400 hover:bg-indigo-500 text-gray-50 rounded-xl flex items-center gap-2">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/checkout.png"
              alt="checkout"
            />
            <span>Checkout</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
