const Footer = () => {
  return (
    <div className="bg-gray-100 w-full" id="footer">
      <div className="py-5 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r mt-5 lg:mt-10">
          <div className="text-sm uppercase text-blue-600 font-bold">Menu</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-blue-600" href="/">
                Home
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-blue-600" href="#category">
                Category
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-blue-600" href="#product">
                Products
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5 sm:w-7/12 border-r text-center">
          <h3 className="font-bold text-xl text-blue-600 mb-4">
            Nursery Online
          </h3>
          <p className="text-gray-500 text-sm mb-10">
            I will suggest you to join our team and create a nursery in your
            local area. There is a huge opportunity to build up a smart career.
            <br /> <br />
            If you need any help or have some questions then feel free to
            contact us. Please don’t forget to share this website with your
            nearest people.
          </p>
        </div>
        <div className="p-5 sm:w-3/12 mt-5 lg:mt-10">
          <div className="text-sm uppercase text-blue-600 font-bold">
            Contact Us
          </div>
          <ul>
            <li className="my-2">
              <a className="hover:text-blue-600" href="#">
                Parbatipur Floor 4 , Dinajpur, Bangladesh
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-blue-600" href="#">
                contact@nurseryonline.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex py-2 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="https://x.com/?mx=2" className="w-6 mx-1">
            <svg
              className="fill-current cursor-pointer text-gray-500 hover:text-blue-600"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <path
                id="Twitter"
                d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"
              ></path>
            </svg>
          </a>
          <a href="https://www.facebook.com" className="w-6 mx-1">
            <svg
              className="fill-current cursor-pointer text-gray-500 hover:text-blue-600"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <path
                id="Facebook"
                d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="m-5">
          © 2024 Nursery-online. All rights reserved. Customized By NIll
        </div>
      </div>
    </div>
  );
};

export default Footer;
