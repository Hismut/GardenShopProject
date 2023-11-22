import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const response = await fetch("http://localhost:3333/categories/all");
    const data = await response.json();
    return data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.status = "ready";
        state.list = payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default categorySlice.reducer;
