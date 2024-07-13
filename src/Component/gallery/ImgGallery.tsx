const ImgGallery = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12 text-center">
              <h2 className="text-2xl font-bold text-black lg:text-3xl dark:text-white">
                Gallery
              </h2>
              <h1 className="animate-typing mx-auto overflow-hidden whitespace-nowrap border-r-2 border-r-gray-400  text-2xl lg:text-3xl text-black font-bold">
                Welcome to our Nursery
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://res.cloudinary.com/dbv2zv2ek/image/upload/v1720861630/SPR-houseplants-grown-in-water-_n9t1nk.jpg"
                loading="lazy"
                alt="Photo by plant"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                HousePlants VR
              </span>
            </a>

            <a
              href="/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://res.cloudinary.com/dbv2zv2ek/image/upload/v1720862331/unusual-houseplants_eskcpw.jpg"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Houseplants eskcpw
              </span>
            </a>

            <a
              href="/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://res.cloudinary.com/dbv2zv2ek/image/upload/v1720862323/low-light-houseplants-snake_su39ki.jpg"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Houseplants
              </span>
            </a>

            <a
              href="/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://res.cloudinary.com/dbv2zv2ek/image/upload/v1720862348/pothos-water-1-1024x683_nwrvap.jpg"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Nwrvap
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgGallery;
