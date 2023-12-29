import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "data/fetchDataStatus",
  async (params) => {
    const { email, password, fullName, phone, city, orders, id } = params;

    const res = fetch(`https://b6c487f79077af26.mokky.dev/users/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
        phone,
        city,
        orders,
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

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
        state.dataRes = "";
      })

      .addCase(fetchData.fulfilled, (state, action) => {
        state.dataRes = action.payload;
        state.status = "success";
      })

      .addCase(fetchData.rejected, (state) => {
        state.dataRes = "";
        state.status = "error";
      });
  },
});

export default dataSlice.reducer;
