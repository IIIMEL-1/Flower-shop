import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import "./assets/style/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
