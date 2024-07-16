import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { TParams } from "../../../type";

const CheckOutFrom = () => {
  const [error, setError] = useState<string | undefined>("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  const { money } = useParams<TParams>();
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
          console.log(res.data.clientSecret);
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
        // const payment = {
        //   limit,
        //   email: user?.email,
        //   price: income,
        //   date: new Date(),
        //   Admin: "juniortricky.devloper@gmail.com",
        // };

        // axios.post("/payment-update", payment).then((res) => {
        //   if (res.data?.result?.insertedId) {
        //     Swal.fire({
        //       position: "top-end",
        //       icon: "success",
        //       title: "Thank you for your Payment",
        //       showConfirmButton: false,
        //       timer: 1500,
        //     });
        //     navigate("/");
        //   }
        // });
      }
    }
  };

  return (
    <div className=" w-11/12  md:w-10/12 lg:w-1/2 mx-auto bg-white mt-10 pt-10 lg:p2 md:p-10 h-[300px]">
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
            transaction : {transactionId ? "complete" : "Failed"}
          </h2>
        </div>
      </form>
    </div>
  );
};

export default CheckOutFrom;
