import React from "react";
import "./reset.css";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Main from "./components/Main/Index";

import PageError from "./Pages/Error/Index";
import PageCart from "./Pages/Cart/Index";
import PagePlaceAnOrder from "./Pages/PlaceAnOrder/Index";
import PageQuestion from "./Pages/Questions/Index";
import PageLogin from "./Pages/Login/Index";
import PageContacts from "./Pages/Contacts/Index";
import PageCardProduct from "./Pages/CardProduct/Index";

import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function Index() {
  const locate = useLocation();

  window.scrollTo(0, 0);

  return (
    <Provider store={store}>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </Provider>
  );
}

export const router = createBrowserRouter([
  {
    element: <Index />,
    children: [
      { path: "/", element: <Main /> },
      {
        path: "/flower/:id",
        element: <PageCardProduct />,
      },

      { path: "*", element: <PageError /> },
      { path: "/Questions", element: <PageQuestion /> },
      { path: "/Cart", element: <PageCart /> },
      { path: "/PlaceAnOrder", element: <PagePlaceAnOrder /> },
      { path: "/Login", element: <PageLogin /> },
      { path: "/Contacts", element: <PageContacts /> },
    ],
  },
]);
