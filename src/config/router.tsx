import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Main from "@pages/Main/Main";

import PageError from "@pages/Error/Error";

// ProfilePage
import PageProfile from "@pages/PersonalAccount/Profile/Profile";
import PageMyOrders from "@pages/PersonalAccount/MyOrders/MyOrders";
import PagePasswordChange from "@pages/PersonalAccount/PasswordChange/PasswordChange";
import PagePersonalAccount from "@pages/PersonalAccount/PersonalAccount";

// ReviewsPage
import PageReviews from "@pages/Reviews/Reviews";
import PageTextReviews from "@pages/Reviews/TextReviews/TextReviews";
import PagePhotoReviews from "@pages/Reviews/PhotoReviews/PhotoReviews";

// AdminPanelPage
import PageAdminPanel from "@pages/AdminPanel/AdminPanel";
import PageChangeItems from "@pages/AdminPanel/ChangeItems/ChangeItems";
import PageChangeAdditional from "@pages/AdminPanel/ChangeAdditional/ChangeAdditional";
import PageChangeStocks from "@pages/AdminPanel/ChangeStocks/ChangeStocks";

// OthersPage
import PageCart from "@pages/Cart/Cart";
import PagePlaceAnOrder from "@pages/PlaceAnOrder/PlaceAnOrder";
import PageQuestion from "@pages/Questions/Questions";
import PagePaymentMethods from "@pages/PaymentMethods/PaymentMethods";
import PageLogin from "@pages/Login/Login";
import PageContacts from "@pages/Contacts/Contacts";
import PageCardProduct from "@pages/CardProduct/CardProduct";
import PageStocks from "@pages/Stocks/Stocks";

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
