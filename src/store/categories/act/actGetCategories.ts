import { TCategory } from "@customTypes/category";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

// define data type for api response
type TCategories = TCategory[];

const actGetCategories = createAsyncThunk(
  // TypePrefix or name of Thunk consist of 2 parts 1st is name of slice and 2nd is name of action
  "categories/actGetCategories",
  async (
    _ /* payload if api method is post */,
    thunkAPI /* give you rejectWithValue to access current state */
  ) => {
    // destruct rejectWithValue from thunkAPI to handle error
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get<TCategories>(
        "http://localhost:8000/categories"
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

export default actGetCategories;
