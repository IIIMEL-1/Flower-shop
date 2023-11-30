import React from "react";
import style from "./MyOrders.module.scss";
import { Link } from "react-router-dom";

export default function MyOrders() {
  return (
    <section>
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link>
          {" > "} <Link to={"/PersonalAccount"}>Личный кабинет</Link>
          {" > "} <Link to={"/PersonalAccount/MyOrders"}>Мои заказы</Link>
        </div>
      </div>
      <div className={style.ordersBlock}>
        <div className={style.order}>
          <div className={style.dateOrder}>
            <div>
              <span>Дата заказа</span>
              <p>26.09.19</p>
            </div>
            <div>
              <span>Номер заказа</span>
              <p>1N30325</p>
            </div>
          </div>
          <div className={style.dataOfOrder}>
            <span>Наименование:</span>
            <div>
              <div className={style.flower}>
                <div>Букет из разноцветных роз (малый)</div>
                {" | "}
                <p>x2 11 300 руб.</p>
              </div>
              <div className={style.flower}>
                <div>Букет из разноцветных роз (малый)</div>
                {" | "}
                <p>x2 11 300 руб.</p>
              </div>
            </div>
          </div>
          <div>
            <span>Сумма</span>
            <p>90 000 руб.</p>
          </div>
          <div>
            <span>Статус</span>
            <p>Доставлено</p>
          </div>
        </div>
      </div>
    </section>
  );
}
