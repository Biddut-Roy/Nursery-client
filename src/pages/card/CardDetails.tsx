import { useParams } from "react-router-dom";
import { useSingleProductQuery } from "../../redux/api/baseApi";

import { TProduct } from "../Management/ProductAndCategoryM";
import { useAppDispatch } from "../../redux/hooks";
import { addProduct } from "../../redux/features/auth/authSlice";
import { Rating } from "@smastrom/react-rating";
import { toast, Toaster } from "sonner";

const CardDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleProductQuery(id);
  const dispatch = useAppDispatch();
  if (isLoading) {
    return <p>Loading....</p>;
  }

  const handleCardDetails = (product: TProduct) => {
    const success = dispatch(addProduct(product));
    if (success) {
      toast.success("Product added Successfully");
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <div className="antialiased bg-gray-200 font-sans">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="max-w-md md:max-w-2xl px-2 ">
            <div className="bg-white shadow-xl overflow-hidden md:flex rounded-xl">
              <div className="bg-cover bg-bottom h-56 md:h-auto md:w-56 pt-5">
                <img src={data?.data.image} alt={data?.data.title} />
              </div>
              <div>
                <div className="p-4 md:p-5">
                  <p className="font-bold text-xl md:text-2xl">
                    {data?.data.title}
                  </p>
                  <p className="text-gray-700 md:text-lg">
                    {data?.data.description}
                  </p>
                </div>
                <div className="p-4 md:p-5 bg-gray-100 rounded-tl-xl">
                  <div className="sm:flex sm:justify-between sm:items-center ">
                    <div>
                      <div className="text-lg text-gray-700">
                        <span className="text-gray-900 font-bold">
                          {data?.data.quantity}
                        </span>{" "}
                        Product
                      </div>

                      <div className="flex -mx-px">
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={data?.data.rating}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold">Price:</span>{" "}
                      {data?.data.price}
                    </div>
                    <button
                      className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-blue-400 hover:bg-blue-500 font-bold text-white md:text-lg rounded-2xl shadow-md"
                      onClick={() => handleCardDetails(data?.data)}
                    >
                      Add to Card
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 ">
                    {" "}
                    {""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
