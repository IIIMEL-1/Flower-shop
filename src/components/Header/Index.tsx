import { useEffect, useState } from "react";
import style from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import AuthFunc from "@utils/AuthFunc";
import { useTypedSelector } from "@hooks/useTypedSelector";

export default function Header() {
  AuthFunc();

  const items = useTypedSelector((state) => state.addToCartSlice.items);

  const totalCount = items.reduce((sum, obj) => sum + obj.count, 0);

  const [menuIsActive, setMenuIsActive] = useState(false);
  const [infoIsActive, setInfoIsActive] = useState(false);

  const locate = useLocation();

  useEffect(() => {
    setMenuIsActive(false);
    setInfoIsActive(false);

    document.body.style.overflowY = "auto";
  }, [locate.key]);

  return (
    <header>
      <div className="container">
        <button
          className={
            menuIsActive
              ? style.burgerMenu + " " + style.active
              : style.burgerMenu
          }
          onClick={() => (
            setMenuIsActive(!menuIsActive),
            menuIsActive
              ? (document.body.style.overflowY = "auto")
              : (document.body.style.overflowY = "hidden")
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="40px"
            height="40px"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
          </svg>
        </button>

        <nav className={style.navbar}>
          <div>
            <Link to={"/"}>каталог</Link>
            <Link to={"/Stocks"}>скидки</Link>
            <Link to={"/Reviews/TextReviews"}>отзывы</Link>
            <Link to={"/Contacts"}>контакты</Link>
          </div>
          <div className={style.logo}>
            <img src="/images/logo.svg" alt="Logo" />
          </div>
          <div>
            <div
              className={
                infoIsActive
                  ? style.infoForClient + " " + style.active
                  : style.infoForClient
              }
            >
              <div onClick={() => setInfoIsActive(!infoIsActive)}>
                информация для клиента
              </div>
              <ul className={style.infoList}>
                <li>
                  <Link to={"/*"}>Оформление заказа</Link>
                </li>
                <li>
                  <Link to={"/Questions"}>Вопросы и ответы</Link>
                </li>
                <li>
                  <Link to={"/*"}>Изменение или отмена заказа</Link>
                </li>
                <li>
                  <Link to={"/PaymentMethods"}>Способы доставки и оплаты</Link>
                </li>
                <li>
                  <Link to={"/*"}>Оферта</Link>
                </li>
              </ul>
            </div>
            <Link className={style.profile} to={localStorage.getItem("token") ? "/PersonalAccount/Profile" : "/Login"}>
              <img src="/images/Profile-icon.svg" alt="profile" />
            </Link>
            <Link className={style.cart} to={"/Cart"}>
              <img src="/images/cart.svg" alt="profile" />
              <p>{totalCount}</p>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
