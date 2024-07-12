import { useGetCategoryQuery } from "../../redux/api/baseApi";

interface TCategory {
  title: string;
  image_url: string;
  _id: string;
}

const Product = () => {
  const { data, isLoading } = useGetCategoryQuery({});

  if (isLoading) {
    return <p>loading....</p>;
  }

  return (
    <div id="category">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Shop By Popular Categories</h2>
        <p className="text-gray-500 mb-8">Shop all Category</p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
          {data?.data.map((category: TCategory, index: number) => (
            <div key={index} className="rounded-lg p-4">
              <img
                src={category.image_url}
                alt={category.title}
                className="rounded-lg"
              />
              <h3 className="text-lg font-bold mt-2">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
