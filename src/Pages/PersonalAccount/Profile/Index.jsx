import React from "react";
import { Link } from "react-router-dom";
import style from "./Profile.module.scss";
import { useSelector } from "react-redux";

export default function Profile() {
  const { data } = useSelector((state) => state.authSlice.authRes);

  return (
    <section className={style.profileBlock}>
      <div className="pageName">
        <div>
          <Link>Главная</Link> {" > "} <Link>Личный кабинет</Link> {" > "}
          <Link>Профиль</Link>
        </div>
      </div>

      <div className={style.discountBlock}></div>
      <div className={style.aboutMeBlock}>
        <h4>Информация обо мне</h4>
        <form onClick={(el) => el.preventDefault()}>
          {!data ? (
            <div className="opacity">
              <div className="modal">
                <img src="/static/images/as.png" alt="" />
                <p>
                  Похоже вы не вошли в свой аккаунт, или вы ещё не
                  зарегистрировались на нашем сайте
                </p>
                <Link className="sendForm" to={"/Login"}>
                  Войти в аккаунт
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div>
                <h5>Имя и фамилия</h5>
                <input type="text" readOnly value={data.fullName} />
              </div>

              <div>
                <h5>Моб. номер</h5>
                <input type="tel" readOnly value={data.phone} />
              </div>

              <div>
                <h5>Город</h5>
                <input type="text" readOnly value={data.city} />
              </div>

              <div>
                <h5>Эл. почта</h5>
                <input type="email" readOnly value={data.email} />
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
