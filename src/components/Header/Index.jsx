import { useState } from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector((state) => state.addToCartSlice.items);

  const totalCount = items.reduce((sum, obj) => sum + obj.count, 0);

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
    </div>
  );
}
