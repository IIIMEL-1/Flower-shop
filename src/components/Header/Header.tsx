import { useEffect, useState } from "react";
import style from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import AuthFunc from "@utils/AuthFunc";
import { useTypedSelector } from "@hooks/useTypedSelector";

export default function Header() {
  AuthFunc();

  const items = useTypedSelector((state) => state.addToCartSlice.items);
  const theme = useTypedSelector((state) => state.themeSlice.theme);

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
            {!theme || theme === "light" ? (
              <img src={"/images/logo.svg"} alt="Logo" />
            ) : (
              <img src={"/images/logo-dark-th.svg"} alt="Logo" />
            )}
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
            <Link
              className={style.profile}
              to={
                localStorage.getItem("token")
                  ? "/PersonalAccount/Profile"
                  : "/Login"
              }
            >
              <svg
                width="25"
                height="25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x=".75"
                  y=".75"
                  width="23.386"
                  height="23.386"
                  rx="11.693"
                  stroke="#5B4A58"
                  stroke-width="1.5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.386 17.018a4.147 4.147 0 0 1 2.932-1.215h6.635A4.147 4.147 0 0 1 20.1 19.95v1.659a.83.83 0 1 1-1.659 0V19.95a2.488 2.488 0 0 0-2.488-2.488H9.318A2.488 2.488 0 0 0 6.83 19.95v1.659a.83.83 0 1 1-1.66 0V19.95c0-1.1.438-2.154 1.216-2.932zM12.636 7.51a2.488 2.488 0 1 0 0 4.976 2.488 2.488 0 0 0 0-4.977zM8.489 9.997a4.147 4.147 0 1 1 8.294 0 4.147 4.147 0 0 1-8.294 0z"
                  fill="#5B4A58"
                />
              </svg>
            </Link>
            <Link className={style.cart} to={"/Cart"}>
              <svg
                width="19"
                height="23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.956 9.216a.7.7 0 1 0 1.4 0h-1.4zM7.868 1.124v-.7.7zM3.38 9.216a.7.7 0 1 0 1.4 0h-1.4zM15.216 6.84a.7.7 0 0 0 1.4 0h-1.4zm.7-1.91h.7v-.01l-.7.01zM11.937.491a.7.7 0 1 0 0 1.4v-1.4zM6.694 13.16a.7.7 0 1 0 1.4 0h-1.4zm.7-6.319h.7a.7.7 0 0 0-.7-.7v.7zm-6.155 0v-.7a.7.7 0 0 0-.7.7h.7zm0 15.16h-.7a.7.7 0 0 0 .7.7V22zM9.695 6.14a.7.7 0 0 0 0 1.4v-1.4zM14.97 22v.7h.29l.205-.205L14.97 22zm.947-.947.495-.495-.495-.495-.495.495.495.495zm.947.947-.495.495.205.205h.29V22zm.474 0v.7h.7V22h-.7zm0-15.16h.7v-.7h-.7v.7zm-9.47 6.637.495-.495a.7.7 0 0 0-.495-.205v.7zm1.42 1.42h.7a.7.7 0 0 0-.205-.494l-.495.495zm0 3.789v.7a.7.7 0 0 0 .7-.7h-.7zm-3.787 0h-.7a.7.7 0 0 0 .7.7v-.7zm0-3.788-.495-.495a.7.7 0 0 0-.205.495h.7zm1.42-1.42v-.7a.7.7 0 0 0-.495.204l.495.495zM3.133 8.515a.7.7 0 1 0 0 1.4v-1.4zm1.894 1.4a.7.7 0 1 0 0-1.4v1.4zm5.68-1.4a.7.7 0 1 0 0 1.4v-1.4zm1.895 1.4a.7.7 0 1 0 0-1.4v1.4zm-.247-.7V4.912h-1.4v4.304h1.4zm0-4.304c0-1.19-.472-2.332-1.314-3.174l-.99.99c.58.58.905 1.365.905 2.184h1.4zm-1.314-3.174A4.488 4.488 0 0 0 7.868.424v1.4c.819 0 1.604.325 2.183.904l.99-.99zM7.868.424c-1.19 0-2.332.473-3.174 1.314l.99.99a3.088 3.088 0 0 1 2.184-.904v-1.4zM4.694 1.738A4.488 4.488 0 0 0 3.38 4.912h1.4c0-.82.325-1.605.904-2.184l-.99-.99zM3.38 4.912v4.304h1.4V4.912h-1.4zM16.616 6.84V4.93h-1.4v1.91h1.4zm0-1.92a4.514 4.514 0 0 0-.476-1.959l-1.253.626c.21.42.323.882.329 1.351l1.4-.018zM16.14 2.96a4.514 4.514 0 0 0-1.282-1.556l-.854 1.109c.371.286.674.653.883 1.073l1.253-.626zm-1.282-1.556a4.514 4.514 0 0 0-1.83-.843l-.287 1.37c.459.096.89.295 1.263.582l.854-1.11zm-1.83-.843c-.131-.028-.196-.044-.242-.055-.05-.011-.141-.034-.264-.031-.15.003-.11.016-.585.016v1.4c.423 0 .654-.018.613-.017-.069.002-.127-.015-.086-.005.043.01.125.03.277.062l.286-1.37zM8.093 13.159V6.84h-1.4v6.319h1.4zm-.7-7.019H1.239v1.4h6.155v-1.4zm-6.855.7V22h1.4V6.84h-1.4zm.7 15.86h13.257v-1.4H1.24v1.4zm13.957-.7V6.84h-1.4V22h1.4zm-.7-15.86H9.695v1.4h4.801v-1.4zm0 16.56h.474v-1.4h-.474v1.4zm.97-.205.946-.947-.99-.99-.947.947.99.99zm-.044-.947.947.947.99-.99-.947-.947-.99.99zm1.442 1.152h.474v-1.4h-.474v1.4zm1.174-.7V6.84h-1.4V22h1.4zm-.7-15.86h-2.842v1.4h2.842v-1.4zm-9.965 7.832 1.42 1.42.99-.99-1.42-1.42-.99.99zm1.215.926v3.788h1.4v-3.788h-1.4zm.7 3.088H5.501v1.4h3.787v-1.4zm-3.087.7v-3.788H4.8v3.788h1.4zm-.205-3.293 1.42-1.42-.99-.99-1.42 1.42.99.99zm.925-1.216h.947v-1.4h-.947v1.4zm-3.788-4.26h1.894v-1.4H3.133v1.4zm7.575 0h1.894v-1.4h-1.894v1.4z"
                  fill="white"
                />
              </svg>
              <p>{totalCount}</p>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
