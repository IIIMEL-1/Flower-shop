import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "data/fetchDataStatus",
  async (params) => {
    const { email, password, fullName, phone, city, items, id } = params;

    const res = fetch(`https://b6c487f79077af26.mokky.dev/users/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        fullName,
        phone,
        city,
        items,
      }),
    });

    return res.then((response) => response.json());
  }
);

const initialState = {
  dataRes: "",
  status: "",
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "loading";
      state.dataRes = "";
      console.log("loading");
    },

    [fetchData.fulfilled]: (state, action) => {
      state.dataRes = action.payload;
      state.status = "success";
    },

    [fetchData.rejected]: (state, action) => {
      state.dataRes = "";
      state.status = "error";
      console.warn("error", action);
    },
  },
});

export default dataSlice.reducer;
