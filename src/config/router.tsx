import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Main from "@pages/Main/Main.tsx";
import PageError from "@pages/Error/Error.tsx";

// ProfilePage
import PageProfile from "@pages/PersonalAccount/Profile/Profile.tsx";
import PageMyOrders from "@pages/PersonalAccount/MyOrders/MyOrders.tsx";
import PagePasswordChange from "@pages/PersonalAccount/PasswordChange/PasswordChange.tsx";
import PagePersonalAccount from "@pages/PersonalAccount/PersonalAccount.tsx";

// ReviewsPage
import PageReviews from "@pages/Reviews/Reviews.tsx";
import PageTextReviews from "@pages/Reviews/TextReviews/TextReviews.tsx";
import PagePhotoReviews from "@pages/Reviews/PhotoReviews/PhotoReviews.tsx";

// AdminPanelPage
import PageAdminPanel from "@pages/AdminPanel/AdminPanel.tsx";
import PageChangeItems from "@pages/AdminPanel/ChangeItems/ChangeItems.tsx";
import PageChangeAdditional from "@pages/AdminPanel/ChangeAdditional/ChangeAdditional.tsx";
import PageChangeStocks from "@pages/AdminPanel/ChangeStocks/ChangeStocks.tsx";

// OthersPage
import PageCart from "@pages/Cart/Cart.tsx";
import PagePlaceAnOrder from "@pages/PlaceAnOrder/PlaceAnOrder.tsx";
import PageQuestion from "@pages/Questions/Questions.tsx";
import PagePaymentMethods from "@pages/PaymentMethods/PaymentMethods.tsx";
import PageLogin from "@pages/Login/Login.tsx";
import PageContacts from "@pages/Contacts/Contacts.tsx";
import PageCardProduct from "@pages/CardProduct/CardProduct.tsx";
import PageStocks from "@pages/Stocks/Stocks.tsx";

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
