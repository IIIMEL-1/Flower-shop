import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authRes: "",
  registerRes: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    auth(state, { payload }) {
      console.log({
        email: payload.email,
        password: payload.password,
      });

      /* const res = fetch("https://b6c487f79077af26.mokky.dev/auth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => (state.authRes = data)); */
    },

    register(state, { payload }) {
      console.log({
        fullName: payload.fullName,
        email: payload.email,
        password: payload.password,
      });

      /* const res = fetch("https://b6c487f79077af26.mokky.dev/register", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              fullName: payload.fullName,
              email: payload.email,
              password: payload.password
            })
          }); */
    },
  },
});

export const { auth, register } = authSlice.actions;

export default authSlice.reducer;
