import ReactDOM from "react-dom/client";
import { router } from "./config/router";
import { RouterProvider } from "react-router-dom";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
