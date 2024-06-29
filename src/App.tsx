import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";

import { Outlet, useLocation } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function Index() {
  const locate = useLocation();

  window.scrollTo(0, 0);

  return (
    <Provider store={store}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Provider>
  );
}
