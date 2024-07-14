import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectProducts } from "../../redux/features/auth/authSlice";

type TShoppingCard = {
  name: string;
  price: number;
  quantity: number;
};

const ShopingCard = () => {
  const products = useAppSelector(selectProducts);

  console.log(products);

  const [cart, setCart] = useState([
    {
      name: "Aloe Vera Tree",
      price: 30,
      quantity: 1,
    },
    {
      name: "TEAK Segun Tree",
      price: 30,
      quantity: 2,
    },
    {
      name: "Cycas Tree",
      price: 30,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
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
          {cart.map((item: TShoppingCard, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">৳ {item.price}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleQuantityChange(index, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => handleQuantityChange(index, item.quantity + 1)}
                >
                  +
                </button>
              </td>
              <td className="px-4 py-2">৳ {item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p className="text-lg font-bold">Subtotal:</p>
        <p className="text-xl font-bold">৳ {calculateSubtotal()}</p>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          View Cart
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShopingCard;
