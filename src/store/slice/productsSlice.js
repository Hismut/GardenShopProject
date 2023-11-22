import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3333/products/all");
    const data = await response.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    priceFilter(state, { payload }) {
      state.list = state.list.map((elem) => {
        const discountedPrice =
          elem.discont_price && elem.discont_price < elem.price
            ? elem.discont_price
            : elem.price;

        return {
          ...elem,
          show: {
            ...elem.show,
            price:
              discountedPrice >= payload.min && discountedPrice <= payload.max,
            discounted:
              !payload.showDiscounted ||
              (payload.showDiscounted && elem.discont_price),
          },
        };
      });
    },

    sortFilter(state, { payload }) {
      if (payload === 1) {
        state.list.sort((a, b) => a.title.localeCompare(b.title));
      } else if (payload === 2) {
        state.list.sort((a, b) => b.title.localeCompare(a.title));
      } else if (payload === 3) {
        state.list.sort((a, b) => a.price - b.price);
      } else if (payload === 4) {
        state.list.sort((a, b) => b.price - a.price);
      }
    },

    search(state, { payload }) {
      state.list = state.list.map((elem) => ({
        ...elem,
        show: {
          ...elem.show,
          search: elem.title.toLowerCase().startsWith(payload.toLowerCase()),
        },
      }));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.status = "ready";
        const show = { price: true };
        state.list = payload.map((elem) => ({ ...elem, show }));
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { priceFilter, sortFilter, search } = productsSlice.actions;

export default productsSlice.reducer;
