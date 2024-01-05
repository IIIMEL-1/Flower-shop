import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import style from "./PersonalAccount.module.scss";

export default function Profile() {
  return (
    <section className="sectionBack">
      <div className="container">
        <div className="generalBlock">
          <div className="asideBlock">
            <div className="pageName">
              <h3>Личный кабинет</h3>
            </div>
            <div className="aside">
              <Link to={"/PersonalAccount/Profile"}>Профиль</Link>
              <Link to={"/PersonalAccount/MyOrders"}>Мои заказы</Link>
              <Link to={"/PersonalAccount/PasswordChange"}>Смена пароля</Link>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}
