import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCartSlice",
  initialState: {
    totalPrice: 0,
    items: [],
  },
  reducers: {
    addItem(state, { payload }) {
      const findItem = state.items.find((obj) => {
        return (
          obj.id === payload.id &&
          obj.description.size === payload.description.size
        );
      });

      findItem
        ? payload.count === 1
          ? findItem.count++
          : (findItem.count += payload.count)
        : state.items.push({
            ...payload,
            count: payload.count,
          });

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.description.price * obj.count + sum;
      }, 0);
    },

    minusItem(state, { payload }) {
      const findItem = state.items.find((obj) => {
        return (
          obj.id === payload.id &&
          obj.description.size === payload.description.size
        );
      });

      findItem.count < 2 ? "" : findItem.count--;
      state.totalPrice -= findItem.description.price;
    },

    removeItem(state, { payload }) {
      state.items = state.items.filter((obj) => {
        return (
          obj.id !== payload.id ||
          obj.description.size !== payload.description.size
        );
      });

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.description.price * obj.count + sum;
      }, 0);
    },
  },
});

export const { addItem, minusItem, removeItem } = addToCartSlice.actions;

export default addToCartSlice.reducer;
