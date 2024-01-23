import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
  name: "sortSlice",
  initialState: {
    data: [],
    dataParse: "",
  },
  reducers: {
    getSort: (state, { payload }) => {
      const indexItem = state.data.indexOf(payload);

      if (indexItem >= 0) {
        state.data.splice(indexItem, 1);
      } else {
        state.data.push(payload);
      }
    },
    parseData: (state) => {
      state.dataParse = state.data.join("&");
    },
    clearData: (state) => {
      state.dataParse = "";
    },
  },
});

export const { getSort, parseData, clearData } = sortSlice.actions;
export default sortSlice.reducer;
