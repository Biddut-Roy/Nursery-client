/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState, FormEvent } from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import { useAddProductMutation } from "../../redux/api/baseApi";
import { toast, Toaster } from "sonner";

interface TFormData {
  title: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  description: string;
  quantity: number;
}

const Added = () => {
  const IMG_IMG_HOSTING = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_API_KEY_IMGBB
  }`;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [rating, setRating] = useState(0);
  const [selectedValue, setSelectedValue] = useState("Flower Plants");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const [addProduct, { isSuccess }] = useAddProductMutation();

  if (isSuccess) {
    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ name: "Sonner" }), 2000)
      );

    toast.promise(promise, {
      loading: "Loading...",
      success: (data: any) => {
        return `${data.name} toast has been added`;
      },
      error: "Error",
    });
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);
        const res = await axios.post(IMG_IMG_HOSTING, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const image = res.data.data.url;

        const pri = parseInt(price, 10);

        const qta = parseInt(quantity, 10);

        const submittedData: TFormData = {
          title,
          price: pri,
          image,
          rating,
          category: selectedValue,
          description,
          quantity: qta,
        };

        // Handle form submission (e.g., send data to an API)
        addProduct(submittedData);

        // Reset form fields
        setTitle("");
        setPrice("");
        setFile(null);
        setRating(0);
        setSelectedValue("All");
        setDescription("");
        setQuantity("");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      toast.error("Please added a img File");
    }
  };

  return (
    <form className="max-w-xl mx-auto my-10 mt-15 " onSubmit={handleSubmit}>
      <Toaster position="top-center" />
      <div className="grid md:grid-cols-2 md:gap-6 pt-10">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="Title"
            id="Title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label
            htmlFor="Title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <label
            htmlFor="price"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            quantity
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="price"
            id="price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label
            htmlFor="price"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <Rating
            style={{ maxWidth: 200 }}
            value={rating}
            onChange={setRating}
            itemStyles={{
              itemShapes: ThinStar,
              activeFillColor: "#ffb700",
              inactiveFillColor: "#fbf1a9",
            }}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <select
            id="category"
            name="category"
            className="w-full h-10 border-2 text-gray-900  border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            value={selectedValue}
            onChange={handleChange}
          >
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
      </div>
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Product description
        </label>
        <textarea
          id="description"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-400 dark:focus:ring-blue-500 mt-2 md:mt-2 xl:mt-5"
      >
        Submit
      </button>
    </form>
  );
};

export default Added;
