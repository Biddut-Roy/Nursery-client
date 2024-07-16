/* eslint-disable @typescript-eslint/no-unused-vars */

import { useAppSelector } from "../../redux/hooks";
import { selectProducts } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { aggregateProducts } from "../../utils/utils";
import { TProductCard } from "../../type";

const ShopingCard = () => {
  const products: TProductCard[] = useAppSelector(selectProducts);

  const aggregatedProducts = aggregateProducts(products);

  const calculateSubtotal = () => {
    const price = aggregatedProducts.reduce(
      (total, item) => total + item.price * item.QAT,
      0
    );

    return price.toFixed(2);
  };

  return (
    <div className="container mx-auto p-4 pt-12">
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
      <div className="mt-4 flex justify-end">
        <Link
          to={`/checkout/${calculateSubtotal()}`}
          className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default ShopingCard;
