/* eslint-disable @typescript-eslint/no-explicit-any */
import { Toaster, toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  clearProducts,
  selectProducts,
} from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { aggregateProducts } from "../../utils/utils";
import { TProductCard } from "../../type";
import { useEffect } from "react";
import axios from "axios";

import { Button } from "../../components/ui/button";

const ShopingCard = () => {
  const products: any = useAppSelector(selectProducts);
  const aggregatedProducts = aggregateProducts(products);
  const dispatch = useAppDispatch();

  const calculateSubtotal = () => {
    const price = aggregatedProducts.reduce(
      (total, item) => total + item.price * item.QAT,
      0
    );

    return price.toFixed(2);
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (aggregatedProducts.length > 0) {
        event.preventDefault();
        event.returnValue =
          "You have items in your cart. Are you sure you want to leave or Reload?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [aggregatedProducts]);

  const productIDandQAT = aggregatedProducts.map((item: TProductCard) => ({
    _id: item._id,
    QAT: item.QAT,
  }));

  const handelSubmit = () => {
    axios
      .patch(
        `${import.meta.env.VITE_BK_URL_LINK}/product/payment-update`,
        productIDandQAT
      )
      .then((res) => {
        if (res.data?.success) {
          toast.success("Your product Cash on Delivery");
          dispatch(clearProducts());
        }
      });
  };

  return (
    <div className="container mx-auto p-4 pt-12">
      <Toaster position="top-center" />
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Item</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {aggregatedProducts.map((item: TProductCard, index: number) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{item.title}</td>
              <td className="px-4 py-2">{item.price}</td>
              <td className="px-4 py-2">{item.QAT}</td>
              <td className="px-4 py-2">{item.price * item.QAT}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p className="text-lg font-bold">Subtotal:</p>
        <p className="text-xl font-bold">{calculateSubtotal()}</p>
      </div>
      <div className="mt-4 flex justify-end gap-5">
        <Link
          to={`/checkout/${calculateSubtotal()}`}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl"
        >
          Checkout Card
        </Link>
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl"
          onClick={handelSubmit}
        >
          Cash on Delivery
        </Button>
      </div>
    </div>
  );
};

export default ShopingCard;
