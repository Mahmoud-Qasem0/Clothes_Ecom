import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { TLoading } from "@customTypes/shared";
import { TCategory } from "@customTypes/category";

interface ICategories {
  record: TCategory[];
  loading: TLoading;
  error: null | string;
}

const initialState: ICategories = {
  record: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      // gaurd for insure state.record does not return undefind
      if (action.payload) {
        state.record = action.payload;
      }
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      // gaurd for insure type of action.payload is string
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload as string;
      }
    });
  },
});

export { actGetCategories };
export default categoriesSlice.reducer;
