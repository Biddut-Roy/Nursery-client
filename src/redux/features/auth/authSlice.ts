import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  category: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  image: string;
};

type TAuthState = {
  checkout: null | TUser;
};

const initialState: TAuthState = {
  checkout: null,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setCheckout: (state, action) => {
      const { checkout } = action.payload;
      console.log(checkout);

      state.checkout = checkout;
    },
    clearCheckout: (state) => {
      state.checkout = null;
    },
  },
});

export const { setCheckout } = storeSlice.actions;

export default storeSlice.reducer;
