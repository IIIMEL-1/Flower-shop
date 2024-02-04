import { Navigate, Outlet, redirect } from "react-router";
import { Link } from "react-router-dom";
import style from "./AdminPanel.module.scss";
import { useSelector } from "react-redux";

export default function AdminPanel() {
  const userDetails = useSelector((state) => state.authSlice.userDetails);

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
                  <Link to={"/Admin/ChangeItems"}>Изменение items</Link>
                  <Link to={"/Admin/ChangeAdditional"}>
                    Изменение additional
                  </Link>
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
