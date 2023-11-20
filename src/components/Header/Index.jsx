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
    /*       <div className={style.contacts}>
        <div className="container">
          <div className={style.location}>
            <a
              target="_blank"
              href="https://www.google.ru/maps/place/Пушкинская+ул.,+17А,+Владивосток,+Приморский+край,+690091/@43.1154031,131.8984285,21z/data=!4m6!3m5!1s0x5fb3920a9431128f:0xdc56d0f59d6dc7ab!8m2!3d43.115437!4d131.898435!16s%2Fg%2F11c2658h32?entry=ttu"
            >
              <span>г. Владивосток,</span>
              <br /> ул. Пушкинская, 17 А
            </a>
          </div>
          <div className={style.number}>
            <p>+ 7 808 353 53 35</p>
          </div>
        </div>
      </div> */
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
              <img src="public/logo.svg" alt="#" />
            </Link>
          </li>
          <li className={style.inform}>информация для клиента</li>
          <li className={style.profile}>
            <Link to={"/Login"}>
              <img src="public/Profile-icon.svg" alt="" />
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
