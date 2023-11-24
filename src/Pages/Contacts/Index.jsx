import React from "react";
import style from "./Contacts.module.scss";

export default function Contacts() {
  return (
    <section className="sectionBack">
      <div className="container">
        <div className="pageName">
          <p>Главная {">"} Контакты</p>
          <h3>контактная информация</h3>
        </div>

        <div className={style.contactsBlock}>
          <div className={style.contactsInform}>
            <div>
              <h5>Моб. номер:</h5>
              <p>
                + 7 808 353 53 35 <br />+ 7 888 888 88 88
              </p>
            </div>
            <div>
              <h5>Эл. почта</h5>
              <p>flawka_vl@gmail.com</p>
            </div>
            <div>
              <h5>Адрес:</h5>
              <p>
                г. Владивосток, <br />
                ул. Пушкинская, 17 А
              </p>
            </div>
            <div>
              <h5>Режим работы:</h5>
              <p>
                Пн-Сб с 8:00 до 22:00 <br />
                Вс — выходной
              </p>
            </div>
          </div>
          <div>
            <img src="/public/static/images/map.png" alt="" />
          </div>
          <div className={style.contactsForm}>
            <h4>Остались вопросы? Свяжитесь с нами.</h4>
            <form action="">
              <div>
                <input type="text" placeholder="Имя фамилия" />
                <input type="email" placeholder="Эл. почта" />
                <input type="tel" placeholder="Моб. номер" />
              </div>

              <textarea placeholder="Возникший вопрос"></textarea>
              <button className="sendForm">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
