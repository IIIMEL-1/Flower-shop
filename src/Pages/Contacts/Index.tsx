import style from "./Contacts.module.scss";
import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <section className="sectionBack">
      <div className="container">
        <div className="pageName">
          <div>
            <Link to={"/"}>Главная</Link> {">"}{" "}
            <Link to={"/Contacts"}>Контакты</Link>
          </div>
          <h3>контактная информация</h3>
        </div>

        <div className={style.contactsBlock}>
          <div className={style.aboutUsBlock}>
            <div className={style.contactsInform}>
              <div>
                <h5>Моб. номер:</h5>
                <p>+ 7 808 353 53 35</p>
                <p>+ 7 888 888 88 88</p>
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
                <p>Пн-Сб с 8:00 до 22:00</p>
                <p>Вс — выходной</p>
              </div>
            </div>
            <div className={style.mapBlock}>
              <img src="/images/Map.png" alt="Map" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
