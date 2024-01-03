import style from "./MyOrders.module.scss";
import { Link } from "react-router-dom";
import { useGetDataAccountQuery } from "../../../redux/slices/createApi";

export default function MyOrders() {
  const { isLoading, data, error } = useGetDataAccountQuery(
    localStorage.getItem("token")
  );

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
        {isLoading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : !isLoading && data?.orders?.length ? (
          data.orders.map((el, i) => (
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
                  {el.items.map((el, i) => (
                    <div key={i} className={style.flower}>
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
        ) : (
          <div>
            <h1>Вы ничего не заказывали</h1>
          </div>
        )}
      </div>
    </section>
  );
}
