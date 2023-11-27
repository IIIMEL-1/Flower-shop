import React from "react";
import style from "./MyOrders.module.scss";
import { Link } from "react-router-dom";

export default function MyOrders() {
  return (
    <section>
      <div className="pageName">
        <div>
          <Link>Главная</Link>
          {" > "} <Link>Личный кабинет</Link>
          {" > "} <Link>Мои заказы</Link>
        </div>
      </div>
      <h1>My Orders</h1>
    </section>
  );
}
