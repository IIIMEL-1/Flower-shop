import { useEffect, useState } from "react";
import style from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector((state) => state.addToCartSlice.items);

  const totalCount = items.reduce((sum, obj) => sum + obj.count, 0);

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(!isOpen);
  }, [location]);

  return (
    <div className="container">
      <input type="checkbox" id="menu" />
      <label htmlFor="menu">
        <img src="/static/images/menu.svg" alt="menu" />
      </label>

      <nav className={style.navbar}>
        <div>
          <Link to={"/"}>каталог</Link>
          <Link to={"/"}>скидки</Link>
          <Link to={"/"}>отзывы</Link>
          <Link to={"/Contacts"}>контакты</Link>
        </div>
        <div>
          <button>информация для клиента</button>
          <Link className={style.profile} to={"/PersonalAccount/Profile"}>
            <img src="/static/images/Profile-icon.svg" alt="profile" />
          </Link>
          <Link className={style.cart} to={"/Cart"}>
            <img src="/static/images/cart.svg" alt="profile" />
            <p>{totalCount}</p>
          </Link>
        </div>
      </nav>
    </div>

    /*     <div className={style.nav}>
      <div className="container">
        <ul className={isOpen ? "active" : ""}>
          {headerList.map((el, i) => (
            <li key={i}>
              <Link to={`${el.link}`}>{el.title}</Link>
            </li>
          ))}
          <li className={style.logotype}>
            <Link to={"/"}>
              <img src="../static/images/logo.svg" alt="#" />
            </Link>
          </li>
          <li className={style.inform}>информация для клиента</li>
          <li className={style.profile}>
            <Link to={"/PersonalAccount/Profile"}>
              <img src="/static/images/Profile-icon.svg" alt="" />
            </Link>
          </li>
        </ul>
        <div
          onClick={() => {
            isOpen ? setIsOpen(false) : setIsOpen(true);
          }}
          className={style.menu}
        >
          <p>меню</p>
        </div>
        <Link className={style.cart} to={"/Cart"}>
          {totalCount}
        </Link>
      </div>
    </div> */
  );
}
