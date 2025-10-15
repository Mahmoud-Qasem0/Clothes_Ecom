import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

// define data type for api response
type TProducts = TProduct[];

const actGetProducts = createAsyncThunk(
  "products/actGetProducts",
  async (prefix: string, thunkAPI) => {
    // destruct rejectWithValue from thunkAPI to handle error
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get<TProducts>(
        `http://localhost:8000/products?cat_prefix=${prefix}`
      );
      const data = res.data;
      return data;
    } catch (error) {
      // make sure error is from axios or not
      if (isAxiosError(error)) {
        rejectWithValue(error.response?.data.message || error.message);
      } else {
        rejectWithValue("Unexpected Error");
      }
    }
  }
);

export default actGetProducts;
