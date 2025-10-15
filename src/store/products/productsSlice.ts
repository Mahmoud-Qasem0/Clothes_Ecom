import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
import { TProduct } from "@customTypes/product";
interface IProducts {
  record: TProduct[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
}

const initialState: IProducts = {
  record: [],
  loading: "idle",
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUp: (state) => {
      state.record = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      // gaurd for insure state.record does not return undefind
      if (action.payload) {
        state.record = action.payload;
      }
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});
export const { cleanUp } = productsSlice.actions;
export { actGetProducts };
export default productsSlice.reducer;
