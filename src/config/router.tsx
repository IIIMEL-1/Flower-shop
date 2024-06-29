import { createBrowserRouter } from "react-router-dom";

import Main from "@pages/Main/Index";

import PageError from "@pages/Error/Index";

// ProfilePage
import PageProfile from "@pages/PersonalAccount/Profile/Index";
import PageMyOrders from "@pages/PersonalAccount/MyOrders/Index";
import PagePasswordChange from "@pages/PersonalAccount/PasswordChange/Index";
import PagePersonalAccount from "@pages/PersonalAccount/Index";

// ReviewsPage
import PageReviews from "@pages/Reviews/Index";
import PageTextReviews from "@pages/Reviews/TextReviews/Index";
import PagePhotoReviews from "@pages/Reviews/PhotoReviews/Index";

// AdminPanelPage
import PageAdminPanel from "@pages/AdminPanel/Index";
import PageChangeItems from "@pages/AdminPanel/ChangeItems/Index";
import PageChangeAdditional from "@pages/AdminPanel/ChangeAdditional/Index";
import PageChangeStocks from "@pages/AdminPanel/ChangeStocks/Index";

// OthersPage
import PageCart from "@pages/Cart/Index";
import PagePlaceAnOrder from "@pages/PlaceAnOrder/Index";
import PageQuestion from "@pages/Questions/Index";
import PagePaymentMethods from "@pages/PaymentMethods/Index";
import PageLogin from "@pages/Login/Index";
import PageContacts from "@pages/Contacts/Index";
import PageCardProduct from "@pages/CardProduct/Index";
import PageStocks from "@pages/Stocks/Index";
import Index from "@/App";

export const router = createBrowserRouter([
  {
    element: <Index />,
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
