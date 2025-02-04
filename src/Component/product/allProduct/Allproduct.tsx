/* eslint-disable @typescript-eslint/no-explicit-any */
import { Rating } from "@smastrom/react-rating";
import FilterSearch from "../FilterSearch";
import PaginationP from "../PaginationP";
// import { useGetProductQuery } from "../../../redux/api/baseApi";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { addProduct } from "../../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { TProduct, TProductCard } from "../../../type";
import { Toaster, toast } from "sonner";
import { debounce } from "../../../utils/debounce";

const Allproduct = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [data, setData] = useState<any>();

  // const { data } = useGetProductQuery({
  //   search: searchInput,
  //   filter: selectedValue,
  //   page: currentPage,
  // });

  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleCardDetails = (product: TProductCard) => {
    const result = dispatch(addProduct(product));
    if (result) {
      toast.success("Product Add to Card");
    }
  };

  useEffect(() => {
    const debouncedSearchTerm = debounce(
      (search: string, filter: string, page: number) => {
        const params = new URLSearchParams();
        if (search) params.append("search", search);
        if (filter) params.append("filter", filter);
        if (page) params.append("page", page.toString());

        fetch(
          `${import.meta.env.VITE_BK_URL_LINK}/product/get?${params.toString()}`
        )
          .then((response) => response.json())
          .then((data) => {
            setData(data.data);
          })
          .catch((error) => console.error("API call failed:", error));
      },
      300
    );

    debouncedSearchTerm(searchInput, selectedValue, currentPage);

    return () => {
      debouncedSearchTerm.cancel();
    };
  }, [searchInput, selectedValue, currentPage]);

  return (
    <div id="product">
      <Toaster position="top-center" />
      <div className="text-center p-10 ">
        <h1 className="font-bold text-4xl mb-4">Latest Product</h1>
        <div>
          <FilterSearch
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>

      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-5 mt-10 mb-5">
        {data?.map((item: TProduct, i: number) => (
          <div
            key={i}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a>
              <Link to={`/card/${item?._id}`}>
                <img
                  src={item?.image}
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
              </Link>

              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {item?.title}
                </p>
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={item?.rating}
                    readOnly
                  />
                </span>

                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {item?.price}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      {""}
                    </p>
                  </del>
                  {item?.quantity ? (
                    <div
                      onClick={() => handleCardDetails({ ...item, QAT: 1 })}
                      className="ml-auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
      <div className=" my-5 items-center">
        <PaginationP
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Allproduct;
