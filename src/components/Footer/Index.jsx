import React, { useState } from "react";
import style from "./Footer.module.scss";
import { Logger, Value } from "sass";

export default function Footer() {
  const [letter, setLetter] = useState(0);

  return (
    <footer>
      <section className={style.navFooter}>
        <div className="container">
          <ul className={style.navRowFooter}>
            <li>
              <a className={style.navItemFooter} href="#catalog">
                Каталог
              </a>
            </li>
            <li>
              <a className={style.navItemFooter} href="#!">
                Скидки
              </a>
            </li>
            <li>
              <a className={style.navItemFooter} href="#!">
                Отзывы
              </a>
            </li>
            <li>
              <a className={style.navItemFooter} href="#!">
                Контакты
              </a>
            </li>
            <li>
              <a className={style.navItemFooter} href="#!">
                Оферта
              </a>
            </li>
            <li>
              <a className={style.navItemFooter} href="#!">
                Информация для клиента
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className={style.footer}>
        <div className="container">
          <div className={style.footerContent}>
            <div className={style.footerContacts}>
              <h5>Контактная информация</h5>
              <ul>
                <li>
                  <a href="https://www.google.ru/maps/place/Пушкинская+ул.,+17А,+Владивосток,+Приморский+край,+690091/@43.1154031,131.8984285,21z/data=!4m6!3m5!1s0x5fb3920a9431128f:0xdc56d0f59d6dc7ab!8m2!3d43.115437!4d131.898435!16s%2Fg%2F11c2658h32?entry=ttu">
                    г. Владивосток,
                    <br />
                    ул. Пушкинская, 17
                  </a>
                </li>
                <li>+ 7 888 888 88 88</li>
                <li>+ 7 888 888 88 88</li>
                <li>
                  Режим работы: <br />
                  Пн-Сб с 8:00 до 22:00
                </li>
              </ul>
            </div>
            <div className={style.footerForVisitor}>
              <h5>Для посетителей</h5>
              <ul>
                <li>
                  <a href="#!">Оформление заказа</a>
                </li>
                <li>
                  <a href="#!">Вопросы и ответы</a>
                </li>
                <li>
                  <a href="#!">Изменение или отмена заказа</a>
                </li>
                <li>
                  <a href="#!">Способы доставки и оплаты</a>
                </li>
              </ul>
            </div>
            <div className={style.footerQuestions}>
              <h5>Возникли вопросы? Свяжитесь с нами</h5>
              <form action="" className={style.contactUs}>
                <div>
                  <p>Ваше имя</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Моб. номер</p>
                  <input type="tel" />
                </div>
                <div className={style.askAQuestion}>
                  <textarea
                    maxLength={300}
                    onInput={(e) => setLetter(e.target.value.length)}
                  />
                  <div className={style.counter}>{letter}/300</div>
                </div>
                <button className={style.sendForm}>Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className={style.copyright}>
        <div>
          <p>© 2019 Цветочная лавка.</p>
        </div>
      </section>
    </footer>
  );
}
