import { useGetCategoryQuery } from "../../redux/api/baseApi";

const Product = () => {
  const { data } = useGetCategoryQuery({});

  console.log(data);

  return (
    <div id="category">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Shop By Popular Categories</h2>
        <p className="text-gray-500 mb-8">Shop all</p>

        <div className="grid grid-cols-3 gap-4">
          <div className=" rounded-lg p-4">
            <img
              src="https://i.ibb.co/0ntHF48/Flower-Plants.webp"
              alt="Flower Plants"
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Flower Plants</h3>
          </div>
          <div className=" rounded-lg p-4">
            <img
              src="/fruits-plants.jpg"
              alt="Fruits Plants"
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Fruits Plants</h3>
          </div>
          <div className=" rounded-lg p-4">
            <img
              src="/bonsai-plants.jpg"
              alt="Bonsai Plants"
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Bonsai Plants</h3>
          </div>
          <div className=" rounded-lg p-4">
            <img
              src="/bamboo-plants.jpg"
              alt="Bamboo Plants"
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Bamboo Plants</h3>
          </div>
          <div className=" rounded-lg p-4">
            <img
              src="/cactus-plants.jpg"
              alt="Cactus Plants"
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Cactus Plants</h3>
          </div>
          <div className=" rounded-lg p-4">
            <img
              src="/rose-plants.jpg"
              alt="Rose Plants"
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Rose Plants</h3>
          </div>
          <div className=" rounded-lg p-4">
            <img
              src="/plants-pot.jpg"
              alt="Plants Pot"
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Plants Pot</h3>
          </div>
          <div className=" rounded-lg p-4">
            <img
              src="/fertilizers.jpg"
              alt="Fertilizers"
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Fertilizers</h3>
          </div>
          <div className=" rounded-lg p-4">
            <img
              src="/mango-plants.jpg"
              alt="Mango Plants"
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Mango Plants</h3>
          </div>
          <div className=" rounded-lg p-4">
            <img
              src="/gardening-tools.jpg"
              alt="Gardening Tools"
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Gardening Tools</h3>
          </div>
          <div className=" rounded-lg p-4">
            <img src="/soils.jpg" alt="Soils" className="rounded-lg" />
            <h3 className="text-lg font-bold mt-2">Soils</h3>
          </div>
          <div className=" rounded-lg p-4">
            <img src="/pebbles.jpg" alt="Pebbles" className="rounded-lg" />
            <h3 className="text-lg font-bold mt-2">Pebbles</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
