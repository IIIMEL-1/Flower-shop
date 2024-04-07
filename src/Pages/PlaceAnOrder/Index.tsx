import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useChangeDataMutation } from "../../redux/slices/createApi";
import style from "./PlaceAnOrder.module.scss";
import { clearCart } from "../../redux/slices/addToCartSlice";
import React, { useEffect, useState } from "react";
import PlaceAnOrderItem from "./PlaceAnOrderItem/Index";
import Modal from "../../components/Modal/Index";
import { changeUserOrders } from "../../redux/slices/authSlice";

type TypeListItems = {
  id: number;
  image: string;
  title: string;
  count: number;
  size: string;
  price: number;
};

type TypeStepsList = {
  step: number;
  name: string;
};

export default function OrderRegistration() {
  const items = useSelector((state) => state.addToCartSlice.placeAnOrder);
  const totalPrice = useSelector((state) => state.addToCartSlice.totalPrice);
  const user = useSelector((state) => state.authSlice.userDetails);

  const dispatch = useDispatch();

  const [currentStep, setCurrentStep] = useState(1);

  const STEPS_LIST: TypeStepsList[] = [
    {
      step: 1,
      name: "Вход или регистрация",
    },
    {
      step: 2,
      name: "Дата и время",
    },
    {
      step: 3,
      name: "Доставка",
    },
    {
      step: 4,
      name: "Контакты получателя",
    },
    {
      step: 5,
      name: "Способ оплаты",
    },
  ];

  const currentDate = new Date()
    .toLocaleDateString("en-US", { timeZone: "Asia/Bangkok" })
    .replace(/\//g, "-");

  function generateOrderNumber() {
    const timestamp = new Date().getTime().toString(36).substring(2, 8);
    const randomString = Math.random().toString(36).substring(2, 8);

    return `${timestamp}-${randomString}`;
  }

  const orderNumber = generateOrderNumber();

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

  const [createOrder, { isLoading, data, error }] = useChangeDataMutation();

  const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    createOrder({ orders: [...user.orders, order], id: user.id });

    dispatch(clearCart());
  };

  useEffect(() => {
    if (data) {
      if (data.orders) {
        dispatch(changeUserOrders({ orders: data.orders }));
      }
    }

    if (user && localStorage.getItem("token")) {
      setCurrentStep(2);
    }
  }, [data]);

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
        <div className={style.steps}>
          {STEPS_LIST.map(({ step, name }) => (
            <div
              key={step}
              className={
                currentStep === step
                  ? style.step + " " + style.active
                  : style.step
              }
              id={`step_${step}`}
            >
              <div>{step}</div>
              <p>{name}</p>
            </div>
          ))}
        </div>
        <div className={style.placeAnOrderBlock}>
          <form
            className={style.form}
            onSubmit={(event) => event.preventDefault()}
          >
            <div>
              {currentStep === 1 ? (
                user && localStorage.getItem("token") ? (
                  <div>Вы уже зарегистрированы</div>
                ) : (
                  <div className={style.LoginOrRegistration}>
                    <Link to={"/"} className="sendForm">
                      Вход
                    </Link>
                    <p>или</p>
                    <Link to={"/"} className="sendForm">
                      Регистрация
                    </Link>
                  </div>
                )
              ) : currentStep === 2 ? (
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
                    <input
                      id="timeCheckbox"
                      name="timeCheckbox"
                      type="checkbox"
                    />
                    <label htmlFor="timeCheckbox">
                      По телефону не говорить что это цветы
                    </label>
                  </div>
                </div>
              ) : currentStep === 3 ? (
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
                      <label htmlFor="delivery">Доставка по Владивостоку</label>
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
              ) : currentStep === 4 ? (
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
                      <input
                        id="getterAnotherPerson"
                        name="getter"
                        type="radio"
                      />
                      <label htmlFor="getterAnotherPerson">
                        Получатель другой человек
                      </label>
                    </div>
                  </div>
                  <div className={style.blockInput}>
                    <div className={style.inputItem}>
                      <p>Имя и фамилия</p>
                      <input placeholder="Имя" type="text" name="fullName" />
                    </div>
                    <div className={style.inputItem}>
                      <p>Моб. номер</p>
                      <input
                        placeholder="+_(___) ___-__-__"
                        type="tel"
                        name="telephone"
                      />
                    </div>
                    <div className={style.inputItem}>
                      <p>Город</p>
                      <input
                        placeholder="Владивосток"
                        type="text"
                        name="city"
                      />
                    </div>
                    <div className={style.inputItem}>
                      <p>Адрес</p>
                      <input
                        placeholder="г. Владивосток, ул. Фокина, 15"
                        type="text"
                        name="address"
                      />
                    </div>
                    <div className={style.textareaItem}>
                      <p>Примечание</p>
                      <textarea></textarea>
                    </div>
                  </div>
                </div>
              ) : (
                currentStep === 5 && (
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
                      <label htmlFor="paymentOnline">
                        Онлайн оплата — Сбербанк
                      </label>
                    </div>
                    <div>
                      <button onClick={handleFormSubmit} className="sendForm">
                        Оформить заказ
                      </button>
                    </div>
                  </div>
                )
              )}
              <div>
                <button
                  disabled={currentStep !== 1 ? false : true}
                  className="sendForm"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Назад
                </button>
                <button
                  disabled={currentStep === STEPS_LIST.length ? true : false}
                  className="sendForm"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Далее
                </button>
              </div>
            </div>
          </form>
          <div className={style.cardList}>
            {items.map((el: TypeListItems) => (
              <PlaceAnOrderItem
                key={`${el.id}_${el.size}`}
                id={el.id}
                title={el.title}
                image={el.image}
                size={el.size}
                price={el.price}
                count={el.count}
              />
            ))}
          </div>
        </div>
        {isLoading && <Modal />}
      </div>
    </section>
  );
}
