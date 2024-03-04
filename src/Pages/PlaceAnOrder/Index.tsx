import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useChangeDataMutation } from "../../redux/slices/createApi";
import style from "./PlaceAnOrder.module.scss";
import { clearCart } from "../../redux/slices/addToCartSlice";

export default function OrderRegistration() {
  const items = useSelector((state) => state.addToCartSlice.items);
  const totalPrice = useSelector((state) => state.addToCartSlice.totalPrice);
  const { orders, id } = useSelector((state) => state.authSlice.userDetails);

  const dispatch = useDispatch();

  const currentDate = new Date()
    .toLocaleDateString("en-US", { timeZone: "Asia/Bangkok" })
    .replace(/\//g, "-");

  function generateOrderNumber() {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 8);

    return `${timestamp}-${randomString}`;
  }

  const orderNumber = generateOrderNumber();

  type TypeListItems = {
    title: string;
    count: number;
    size: string;
    price: number;
  };

  const listItems = items.map(
    ({ title, count, size, price }: TypeListItems) => ({
      title,
      count,
      size,
      price,
    })
  );

  const order = {
    items: listItems,
    date: currentDate,
    orderNumber,
    totalPrice,
    orderStatus: "Оплачен",
  };

  const [createOrder, { isLoading, error, isSuccess }] =
    useChangeDataMutation();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    createOrder({ orders: [...orders, order], id });

    dispatch(clearCart());
  };

  return (
    <section className="sectionBack">
      <div className="container">
        <div className="pageName">
          <div>
            <Link to={"/"}>Главная</Link> {">"}{" "}
            <Link to={"/Cart"}>Корзина</Link> {">"}{" "}
            <Link to={"/PlaceAnOrder"}>Оформление заказа</Link>
          </div>
          <h3>Оформление заказа</h3>
        </div>

        {items.length ? (
          <form className={style.form} onSubmit={handleFormSubmit}>
            <div className={style.deliveryMethod}>
              <h5>Способ доставки</h5>
              <div className={style.blockRadioInput}>
                <div>
                  <input
                    id="delivery"
                    name="delivery"
                    type="radio"
                    defaultChecked
                  />
                  <label htmlFor="delivery">
                    Доставка по
                    <br /> Владивостоку
                  </label>
                </div>
                <div>
                  <input id="deliveryAuto" name="delivery" type="radio" />
                  <label htmlFor="deliveryAuto">
                    Самовызов <br />
                    <span style={{ fontSize: "14px" }}>
                      г. Владивосток, ул. Пушкинская, 17 А
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className={style.dateAndTime}>
              <h5>Дата и время</h5>
              <div>
                <p>Дата</p>
                <input type="date" name="" id="" />
              </div>
              <div>
                <input id="time" name="time" type="radio" defaultChecked />
                <label htmlFor="time">Указать промежуток времени</label>
                <input type="time" name="" id="" />
              </div>
              <div>
                <input id="timeCheckbox" name="timeCheckbox" type="checkbox" />
                <label htmlFor="timeCheckbox">
                  По телефону не говорить что это цветы
                </label>
              </div>
            </div>
            <div className={style.recipient}>
              <h5>Получатель</h5>
              <div className={style.blockRadioInput}>
                <div>
                  <input
                    id="iGetter"
                    name="getter"
                    type="radio"
                    defaultChecked
                  />
                  <label htmlFor="iGetter">Я получатель</label>
                </div>
                <div>
                  <input id="getterAnotherPerson" name="getter" type="radio" />
                  <label htmlFor="getterAnotherPerson">
                    Получатель другой человек
                  </label>
                </div>
              </div>
              <div className={style.blockInput}>
                <div className={style.inputItem}>
                  <p>Имя и фамилия</p>
                  <input placeholder="Имя" type="text" name="" id="" />
                </div>
                <div className={style.inputItem}>
                  <p>Моб. номер</p>
                  <input
                    placeholder="+_(___) ___-__-__"
                    type="tel"
                    name=""
                    id=""
                  />
                </div>
                <div className={style.inputItem}>
                  <p>Город</p>
                  <input placeholder="Владивосток" type="text" name="" id="" />
                </div>
                <div className={style.inputItem}>
                  <p>Адрес</p>
                  <input
                    placeholder="г. Владивосток, ул. Фокина, 15"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className={style.textareaItem}>
                  <p>Примечание</p>
                  <textarea name="" id=""></textarea>
                </div>
              </div>
            </div>
            <div className={style.yourContacts}>
              <h5>Ваши контакты</h5>
              <div className={style.blockInput}>
                <div className={style.inputItem}>
                  <p>Имя и фамилия</p>
                  <input placeholder="Имя" type="text" name="" id="" />
                </div>
                <div className={style.inputItem}>
                  <p>Моб. номер</p>
                  <input
                    placeholder="+_(___) ___-__-__"
                    type="tel"
                    name=""
                    id=""
                  />
                </div>
                <div className={style.inputItem}>
                  <p>Город</p>
                  <input placeholder="Владивосток" type="text" name="" id="" />
                </div>
              </div>
            </div>
            <div className={style.paymentMethod}>
              <h5>Способ оплаты</h5>
              <div>
                <input
                  id="paymentGet"
                  name="payment"
                  type="radio"
                  defaultChecked
                />
                <label htmlFor="paymentGet">
                  Оплата наличными во время получения (самовызов)
                </label>
              </div>
              <div>
                <input id="paymentCourier" name="payment" type="radio" />
                <label htmlFor="paymentCourier">
                  Оплата наличными курьеру (только, если получатель — Вы)
                </label>
              </div>
              <div>
                <input id="paymentOnline" name="payment" type="radio" />
                <label htmlFor="paymentOnline">Онлайн оплата — Сбербанк</label>
              </div>
            </div>
            {!isLoading ? (
              !isSuccess ? (
                <button className="sendForm">Оформить заказ</button>
              ) : (
                <div>Заказ успешно оформлен</div>
              )
            ) : (
              <div>Загрузка...</div>
            )}
          </form>
        ) : (
          <div>В корзине отсутствуют товары!</div>
        )}
      </div>
    </section>
  );
}
