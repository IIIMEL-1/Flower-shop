import { useState } from "react";
import style from "./Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  const [letter, setLetter] = useState(0);

  return (
    <>
      <section className={style.navFooter}>
        <div className="container">
          <ul className={style.navRowFooter}>
            <li>
              <Link to={"/"} className={style.navItemFooter}>
                Каталог
              </Link>
            </li>
            <li>
              <Link to={"*"} className={style.navItemFooter}>
                Скидки
              </Link>
            </li>
            <li>
              <Link to={"/Reviews/TextReviews"} className={style.navItemFooter}>
                Отзывы
              </Link>
            </li>
            <li>
              <Link to={"/Contacts"} className={style.navItemFooter}>
                Контакты
              </Link>
            </li>
            <li>
              <Link to={"*"} className={style.navItemFooter}>
                Оферта
              </Link>
            </li>
            <li>
              <Link to={"*"} className={style.navItemFooter}>
                Информация для клиента
              </Link>
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
                  <Link to={"*"}>Оформление заказа</Link>
                </li>
                <li>
                  <Link to={"/Questions"}>Вопросы и ответы</Link>
                </li>
                <li>
                  <Link to={"*"}>Изменение или отмена заказа</Link>
                </li>
                <li>
                  <Link to={"*"}>Способы доставки и оплаты</Link>
                </li>
              </ul>
            </div>
            <div className={style.footerQuestions}>
              <h5>Возникли вопросы? Свяжитесь с нами</h5>
              <form
                action=""
                className={style.contactUs}
                onClick={(el) => el.preventDefault()}
              >
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
                <button className="sendForm">Отправить</button>
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
    </>
  );
}
