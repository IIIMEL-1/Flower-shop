import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLogin = createAsyncThunk(
  "login/fetchLoginStatus",
  async (params) => {
    const { email, password, fullName, phone, city, items, isLogin } = params;

    const res = fetch(`https://b6c487f79077af26.mokky.dev/${isLogin}`, {
      method: "POST",
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
        items,
      }),
    });

    return res.then((response) => response.json());
  }
);

const initialState = {
  authRes: "",
  status: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchLogin.pending]: (state) => {
      state.status = "loading";
      state.authRes = "";
      console.log("loading");
    },

    [fetchLogin.fulfilled]: (state, action) => {
      state.authRes = action.payload;
      state.status = "success";
    },

    [fetchLogin.rejected]: (state, action) => {
      state.authRes = "";
      state.status = "error";
      console.error("error", action);
    },
  },
});

export default authSlice.reducer;
