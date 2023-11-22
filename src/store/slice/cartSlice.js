import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  list: savedCart || [],
  status: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, { payload }) {
      const target = state.list.find(({ id }) => id === payload);
      if (target) {
        target.count++;
      } else {
        state.list.push({ id: payload, count: 1 });
      }
      saveToLocalStorage(state.list);
    },
    incr(state, { payload }) {
      state.list.find(({ id }) => id === payload).count++;
      saveToLocalStorage(state.list);
    },
    decr(state, { payload }) {
      if (--state.list.find(({ id }) => id === payload).count === 0) {
        state.list = state.list.filter(({ id }) => id !== payload);
      }
      saveToLocalStorage(state.list);
    },
    clear(state) {
      state.list = [];
      saveToLocalStorage(state.list);
    },
    remove(state, { payload }) {
      state.list = state.list.filter(({ id }) => id !== payload);
      saveToLocalStorage(state.list);
    },
  },
});

const saveToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const { add, incr, decr, clear, remove } = cartSlice.actions;

export default cartSlice.reducer;
