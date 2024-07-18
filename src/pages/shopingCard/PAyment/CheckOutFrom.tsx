/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { TParams, TProductCard } from "../../../type";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  clearProducts,
  selectProducts,
} from "../../../redux/features/auth/authSlice";
import { aggregateProducts } from "../../../utils/utils";

const CheckOutFrom = () => {
  const [error, setError] = useState<string | undefined>("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  const { money } = useParams<TParams>();
  const products: any = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  const aggregatedProducts = aggregateProducts(products);
  const productIDandQAT = aggregatedProducts.map((item: TProductCard) => ({
    _id: item._id,
    price: item.QAT,
  }));

  useEffect(() => {
    const moneyAmount = money ? parseFloat(money) * 100 : NaN;

    if (!isNaN(moneyAmount) && moneyAmount > 0) {
      axios
        .post(
          `${import.meta.env.VITE_BK_URL_LINK}/payment/create-payment-intent`,

          {
            amount: moneyAmount,
            currency: "usd",
          }
        )
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error("Error creating payment intent:", error);
        });
    }
  }, [money]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: "NillRoy&558@gmail.com",
            name: "Nill Roy",
          },
        },
      });

    if (confirmError) {
      console.log(" payment error");
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        axios.patch("/product/payment-update", productIDandQAT).then((res) => {
          if (res.data?.result?.insertedId) {
            toast.success("Payment is Complete");
            dispatch(clearProducts());
            navigate("/");
          }
        });
      }
    }
  };

  return (
    <div className=" w-11/12  md:w-10/12 lg:w-1/2 mx-auto bg-white mt-10 pt-10 lg:p2 md:p-10 h-[300px]">
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className=" text-center">
          <button
            className="  mt-16 btn btn-primary btn-sm bg-blue-400 hover:bg-blue-600 p-2 rounded-xl"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
        <div className=" text-orange-500 text-center">
          {error}
          <h2 className=" text-cyan-500">
            transaction : {transactionId ? "complete" : "Loading..."}
          </h2>
        </div>
      </form>
    </div>
  );
};

export default CheckOutFrom;
