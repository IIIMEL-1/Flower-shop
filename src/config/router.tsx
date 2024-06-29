import { createBrowserRouter } from "react-router-dom";

import Main from "../Pages/Main/Index";

import PageError from "../Pages/Error/Index";

// ProfilePage
import PageProfile from "../Pages/PersonalAccount/Profile/Index";
import PageMyOrders from "../Pages/PersonalAccount/MyOrders/Index";
import PagePasswordChange from "../Pages/PersonalAccount/PasswordChange/Index";
import PagePersonalAccount from "../Pages/PersonalAccount/Index";

// ReviewsPage
import PageReviews from "../Pages/Reviews/Index";
import PageTextReviews from "../Pages/Reviews/TextReviews/Index";
import PagePhotoReviews from "../Pages/Reviews/PhotoReviews/Index";

// AdminPanelPage
import PageAdminPanel from "../Pages/AdminPanel/Index";
import PageChangeItems from "../Pages/AdminPanel/ChangeItems/Index";
import PageChangeAdditional from "../Pages/AdminPanel/ChangeAdditional/Index";
import PageChangeStocks from "../Pages/AdminPanel/ChangeStocks/Index";

// OthersPage
import PageCart from "../Pages/Cart/Index";
import PagePlaceAnOrder from "../Pages/PlaceAnOrder/Index";
import PageQuestion from "../Pages/Questions/Index";
import PagePaymentMethods from "../Pages/PaymentMethods/Index";
import PageLogin from "../Pages/Login/Index";
import PageContacts from "../Pages/Contacts/Index";
import PageCardProduct from "../Pages/CardProduct/Index";
import PageStocks from "../Pages/Stocks/Index";
import Index from "../App";

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
