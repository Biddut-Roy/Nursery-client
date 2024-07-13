const HeroSection = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dbv2zv2ek/image/upload/v1720861630/SPR-houseplants-grown-in-water-_n9t1nk.jpg"
            alt="Background Image"
            className="bg-cover object-center min-h-screen "
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-svh text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4 text-blue-600">
            Welcome to Our Awesome Nursery
          </h1>
          <p className="text-lg text-white mb-8">
            Discover amazing features and services that await you.
          </p>
          <a
            href="#category"
            className="bg-blue-500 text-gray-900 hover:bg-blue-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Scroll down
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
