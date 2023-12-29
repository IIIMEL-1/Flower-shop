import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLogin = createAsyncThunk(
  "login/fetchLoginStatus",
  async (params) => {
    const { email, password, fullName, phone, city, orders, isLogin } = params;

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
        orders,
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
  reducers: {
    getData: (state, action) => {
      state.authRes = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
        state.authRes = "";
      })

      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.authRes = action.payload;
        localStorage.setItem("token", action.payload.token);

        state.status = "success";
      })

      .addCase(fetchLogin.rejected, (state) => {
        state.authRes = "";
        state.status = "error";
      });
  },
});

export const { getData } = authSlice.actions;
export default authSlice.reducer;
