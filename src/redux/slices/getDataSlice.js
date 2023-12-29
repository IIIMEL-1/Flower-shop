import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDataAccount = createAsyncThunk(
  "data/fetchDataAccountStatus",
  async (token) => {
    const res = fetch("https://b6c487f79077af26.mokky.dev/auth_me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.then((response) => response.json());
  }
);

const initialState = {
  dataAccount: {},
  status: "",
};

export const dataAccountSlice = createSlice({
  name: "dataAccountSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAccount.pending, (state) => {
        state.status = "loading";
        state.dataAccount = "";
      })

      .addCase(fetchDataAccount.fulfilled, (state, action) => {
        state.dataAccount = action.payload;
        state.status = "success";
      })

      .addCase(fetchDataAccount.rejected, (state) => {
        state.dataAccount = "";
        state.status = "error";
      });
  },
});

export default dataAccountSlice.reducer;
