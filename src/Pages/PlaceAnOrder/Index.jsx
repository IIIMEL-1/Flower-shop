import { useState } from "react";
import style from "./PlaceAnOrder.module.scss";
import { Link } from "react-router-dom";

export default function OrderRegistration() {
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

        <form action="" className={style.form}>
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
                <input id="iGetter" name="getter" type="radio" defaultChecked />
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
              <input id="paymentСourier" name="payment" type="radio" />
              <label htmlFor="paymentСourier">
                Оплата наличными курьеру (только, если получатель — Вы)
              </label>
            </div>
            <div>
              <input id="paymentOnline" name="payment" type="radio" />
              <label htmlFor="paymentOnline">Онлайн оплата — Сбербанк</label>
            </div>
          </div>
          <button className="sendForm">Оформить заказ</button>
        </form>
      </div>
    </section>
  );
}
