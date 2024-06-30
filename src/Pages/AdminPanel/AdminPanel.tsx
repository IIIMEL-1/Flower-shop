import { Navigate, Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useTypedSelector } from "@hooks/useTypedSelector";

export default function AdminPanel() {
  const userDetails = useTypedSelector((state) => state.authSlice.userDetails);

  if (userDetails) {
    if (userDetails.admin) {
      return (
        <section className="sectionBack">
          <div className="container">
            <div className="generalBlock">
              <div className="asideBlock">
                <div className="pageName">
                  <h3>Админ панель</h3>
                </div>
                <div className="aside">
                  <Link to={"/Admin/ChangeItems"}>Товары</Link>
                  <Link to={"/Admin/ChangeAdditional"}>Доп. Товары</Link>
                  <Link to={"/Admin/ChangeStocks"}>Акции</Link>
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </section>
      );
    } else {
      return <Navigate to={"/*"} />;
    }
  } else {
    return <Navigate to={"/*"} />;
  }
}