import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type Product = {
  category: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  image: string;
};

interface StoreState {
  products: Product[];
  checkout: Product | null;
}

const initialState: StoreState = {
  products: [],
  checkout: null,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    clearProducts: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, clearProducts } = storeSlice.actions;

export default storeSlice.reducer;

export const selectProducts = (state: RootState) => state.store.products;
