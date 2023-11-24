import { useState, useEffect } from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalPrice = useSelector((state) => state.addToCartSlice.totalPrice);

  const [isOpen, setIsOpen] = useState();

  const headerList = [
    { title: "каталог", link: "/" },
    { title: "скидки", link: "/" },
    { title: "отзывы", link: "/" },
    { title: "контакты", link: "/Contacts" },
  ];

  return (
    <div className={style.nav}>
      <div className="container">
        <ul className={isOpen ? "active" : ""}>
          {headerList.map((el, i) => (
            <li key={i}>
              <Link to={`${el.link}`}>{el.title}</Link>
            </li>
          ))}
          <li className={style.logotype}>
            <Link to={"/"}>
              <img src="/public/static/images/logo.svg" alt="#" />
            </Link>
          </li>
          <li className={style.inform}>информация для клиента</li>
          <li className={style.profile}>
            <Link to={"/Login"}>
              <img src="/public/static/images/Profile-icon.svg" alt="" />
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
          {totalPrice}
        </Link>
      </div>
    </div>
  );
}
