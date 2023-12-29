import { useEffect, useState } from "react";
import style from "./MyOrders.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchDataAccount } from "../../../redux/slices/getDataSlice";

export default function MyOrders() {
  const orders = useSelector(
    (state) => state.dataAccountSlice.dataAccount.orders
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(fetchDataAccount(token));
    }

    /* const fetchData = async () => {
      const response = await axios.get(
        `https://b6c487f79077af26.mokky.dev/users/${id}`
      );
      const data = response.data.orders;
      return data;
    };

    fetchData().then((result) => {
      setOrders(result);
    }); */
  }, []);

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
        {!orders ? (
          <h1>Вы ещё ничего не заказывали</h1>
        ) : (
          orders.map((el, i) => (
            <div key={i} className={style.order}>
              <div className={style.dateOrder}>
                <div>
                  <span>Дата заказа</span>
                  <p>{el.date}</p>
                </div>
                <div>
                  <span>Номер заказа</span>
                  <p>{el.orderNumber}</p>
                </div>
              </div>
              <div className={style.dataOfOrder}>
                <span>Наименование:</span>
                <div>
                  {el.items.map((el) => (
                    <div className={style.flower}>
                      <div className={style.title}>
                        <p>{el.title}</p>
                        <span>({el.description.size})</span>
                      </div>

                      <div>
                        <span>x{el.count}</span>
                        <p>{el.description.price.toLocaleString()} руб.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={style.amountAndPrice}>
                <div>
                  <span>Сумма</span>
                  <p>{el.totalPrice.toLocaleString()} руб.</p>
                </div>
                <div>
                  <span>Статус</span>
                  <p>{el.orderStatus}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
