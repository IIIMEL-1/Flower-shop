import React from "react";
import style from "./Header.module.scss";

export default function index() {
  return (
    <header>
      <div className={style.contacts}>
        <div className="container">
          <div className={style.location}>
            <a
              target="_blank"
              href="https://www.google.ru/maps/place/Пушкинская+ул.,+17А,+Владивосток,+Приморский+край,+690091/@43.1154031,131.8984285,21z/data=!4m6!3m5!1s0x5fb3920a9431128f:0xdc56d0f59d6dc7ab!8m2!3d43.115437!4d131.898435!16s%2Fg%2F11c2658h32?entry=ttu"
            >
              <span>г. Владивосток,</span> ул. Пушкинская, 17 А
            </a>
          </div>
          <div className={style.number}>
            <p>+ 7 808 353 53 35</p>
            <p>+ 7 888 888 88 88</p>
          </div>
        </div>
      </div>
      <div className={style.nav}>
        <div className="container">
          <ul>
            <li>
              <a href="#catalog">КАТАЛОГ</a>
            </li>
            <li>
              <a href="">скидки</a>
            </li>
            <li>
              <a href="">ОТЗЫВЫ</a>
            </li>
            <li>
              <a href="">КОНТАКТЫ</a>
            </li>
          </ul>
          <div className={style.logotype}>
            <a href="">
              <img src="src/assets/image/logo.svg" alt="#" />
            </a>
          </div>
          <ul>
            <li className={style.inform}>ИНФОРМАЦИЯ ДЛЯ КЛИЕНТА</li>
            <li>
              <a className={style.cart} href="">
                150 000
              </a>
            </li>
            <li>
              <a href="">
                <img src="src/assets/image/List-man.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
