/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../components/ui/button";
import {
  useAllProductQuery,
  useDeleteProductMutation,
} from "../../redux/api/baseApi";
import Swal from "sweetalert2";
import { Rating, ThinStar } from "@smastrom/react-rating";
import axios from "axios";

export interface TProduct {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  rating: number;
  category: string;
}

export interface TProducts {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  rating: number;
  category: string;
}

const ProductAndCategoryM = () => {
  const { data, isLoading } = useAllProductQuery({});
  const [deleteProduct] = useDeleteProductMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File | null | undefined>();
  const [rating, setRating] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const toggleModal = (item: TProduct) => {
    const prices = String(item.price);
    const QTA = String(item.quantity);
    setIsOpen(!isOpen);
    setTitle(item.title);
    setPrice(prices);
    setRating(item.rating);
    setSelectedValue(item.category);
    setDescription(item.description);
    setQuantity(QTA);
  };

  const toggleModal1 = () => {
    setIsOpen(!isOpen);
  };

  const handelDelete = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete this product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
      }
    });
  };

  const IMG_IMG_HOSTING = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_API_KEY_IMGBB
  }`;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    let image;

    if (file) {
      formData.append("image", file);
      const res = await axios.post(IMG_IMG_HOSTING, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      image = res.data.data.url;
    }

    try {
      const pri = parseInt(price, 10);

      const qta = parseInt(quantity, 10);

      const submittedData: TProduct = {
        _id: image,
        title,
        price: pri,
        image,
        rating,
        category: selectedValue,
        description,
        quantity: qta,
      };

      console.log("Form Data Submitted:", { submittedData });

      // Reset form fields
      setTitle("");
      setPrice("");
      setRating(0);
      setSelectedValue("All");
      setDescription("");
      setQuantity("");
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle the error accordingly
    }
  };

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return (
    <div
      className="relative overflow-x-auto shadow-md sm:rounded-lg"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-10">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item: TProduct, _id: number) => (
            <tr
              key={_id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="p-4">
                <img
                  src={item.image}
                  className="w-16 md:w-32 lg:w-32 lg:h-32 rounded-full"
                  alt={item.title}
                />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {item.title}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div>
                    <Button>
                      <p>{item.quantity}</p>
                    </Button>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {item.price}
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-5 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => toggleModal(item)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => handelDelete(item._id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <!-- Main modal --> */}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-md">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Update product
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={toggleModal1}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="Title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="quantity"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <option>Select category</option>
                    <option value="Flower">Flower Plants</option>
                    <option value="Fruits">Fruits Plants</option>
                    <option value="Bonsai">Bonsai Plants</option>
                    <option value="Bamboo">Bamboo Plants</option>
                    <option value="Cactus">Cactus Plants</option>
                    <option value="Rose ">Rose Plants</option>
                    <option value="Plants">Bamboo Plants</option>
                    <option value="Fertilizers">Fertilizers</option>
                    <option value="Mango">Mango Plants</option>
                    <option value="Gardening">Gardening Tools</option>
                    <option value="Pebbles">Pebbles</option>
                  </select>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                    onChange={(e) =>
                      setFile(e.target.files ? e.target.files[0] : null)
                    }
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="relative z-0 w-full mb-5 group">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={rating}
                      onChange={setRating}
                      itemStyles={{
                        itemShapes: ThinStar,
                        activeFillColor: "#ffb700",
                        inactiveFillColor: "#fbf1a9",
                      }}
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write product description here"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-2xl"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductAndCategoryM;
