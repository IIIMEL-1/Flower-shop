import { Navigate, Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useTypedSelector } from "@hooks/useTypedSelector";
import ThemeToggleButton from "@components/ThemeToggleButton/ThemeToggleButton";

export default function Profile() {
  const userDetails = useTypedSelector((state) => state.authSlice.userDetails);

  if (!userDetails) {
    return <Navigate to="/Login" />;
  }

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

              {userDetails && userDetails.admin && (
                <Link to={"/Admin/ChangeItems"}>Админ панель</Link>
              )}
              <ThemeToggleButton />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}
