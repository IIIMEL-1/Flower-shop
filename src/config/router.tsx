import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Main from "src/Pages/Main/Main";

import PageError from "src/Pages/Error/Error";

// ProfilePage
import PageProfile from "src/Pages/PersonalAccount/Profile/Profile";
import PageMyOrders from "src/Pages/PersonalAccount/MyOrders/MyOrders";
import PagePasswordChange from "src/Pages/PersonalAccount/PasswordChange/PasswordChange";
import PagePersonalAccount from "src/Pages/PersonalAccount/PersonalAccount";

// ReviewsPage
import PageReviews from "src/Pages/Reviews/Reviews";
import PageTextReviews from "src/Pages/Reviews/TextReviews/TextReviews";
import PagePhotoReviews from "src/Pages/Reviews/PhotoReviews/PhotoReviews";

// AdminPanelPage
import PageAdminPanel from "src/Pages/AdminPanel/AdminPanel";
import PageChangeItems from "src/Pages/AdminPanel/ChangeItems/ChangeItems";
import PageChangeAdditional from "src/Pages/AdminPanel/ChangeAdditional/ChangeAdditional";
import PageChangeStocks from "src/Pages/AdminPanel/ChangeStocks/ChangeStocks";

// OthersPage
import PageCart from "src/Pages/Cart/Cart";
import PagePlaceAnOrder from "src/Pages/PlaceAnOrder/PlaceAnOrder";
import PageQuestion from "src/Pages/Questions/Questions";
import PagePaymentMethods from "src/Pages/PaymentMethods/PaymentMethods";
import PageLogin from "src/Pages/Login/Login";
import PageContacts from "src/Pages/Contacts/Contacts";
import PageCardProduct from "src/Pages/CardProduct/CardProduct";
import PageStocks from "src/Pages/Stocks/Stocks";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      {
        path: "/flower/:id",
        element: <PageCardProduct />,
      },

      { path: "/Questions", element: <PageQuestion /> },
      { path: "/PaymentMethods", element: <PagePaymentMethods /> },
      { path: "/Cart", element: <PageCart /> },
      { path: "/PlaceAnOrder", element: <PagePlaceAnOrder /> },
      { path: "/Login", element: <PageLogin /> },
      { path: "/Contacts", element: <PageContacts /> },
      { path: "/Stocks", element: <PageStocks /> },

      {
        path: "/PersonalAccount",
        element: <PagePersonalAccount />,
        children: [
          { path: "/PersonalAccount/Profile", element: <PageProfile /> },
          { path: "/PersonalAccount/MyOrders", element: <PageMyOrders /> },
          {
            path: "/PersonalAccount/PasswordChange",
            element: <PagePasswordChange />,
          },
        ],
      },

      {
        path: "/Reviews",
        element: <PageReviews />,
        children: [
          { path: "/Reviews/PhotoReviews", element: <PagePhotoReviews /> },
          { path: "/Reviews/TextReviews", element: <PageTextReviews /> },
        ],
      },

      { path: "*", element: <PageError /> },

      {
        path: "/Admin",
        element: <PageAdminPanel />,
        children: [
          { path: "/Admin/ChangeItems", element: <PageChangeItems /> },
          {
            path: "/Admin/ChangeAdditional",
            element: <PageChangeAdditional />,
          },
          {
            path: "/Admin/ChangeStocks",
            element: <PageChangeStocks />,
          },
        ],
      },
    ],
  },
]);
