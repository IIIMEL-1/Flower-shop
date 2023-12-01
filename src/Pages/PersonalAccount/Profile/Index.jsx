import React from "react";
import { Link } from "react-router-dom";
import style from "./Profile.module.scss";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  let { data } = useSelector((state) => state.authSlice.authRes);
  const totalPrice = useSelector((state) => state.addToCartSlice.totalPrice);

  const dispatch = useDispatch();

  let percent = totalPrice / 1000;
  percent >= 100 ? (percent = 100) : percent;

  return (
    <section className={style.profileBlock}>
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link> {" > "}{" "}
          <Link to={"/PersonalAccount/Profile"}>Личный кабинет</Link> {" > "}
          <Link to={"/PersonalAccount/Profile"}>Профиль</Link>
        </div>
      </div>

      <div className={style.discountBlock}>
        <div className={style.discount}>
          Ваша скидка —{" "}
          <span>
            {percent < 25
              ? 0
              : percent < 65
              ? 3
              : percent < 100
              ? 5
              : percent === 100
              ? 7
              : ""}
            %
          </span>{" "}
        </div>
        <div className={style.range}>
          <span className={style.one}></span>
          <span className={style.five}></span>
          <span className={style.ten}></span>
          <div
            className={style.trackSuccess}
            style={{ width: percent ? `${percent}% ` : 0 }}
          ></div>
          <div
            className={style.point}
            style={{ left: percent ? `calc(${percent}% - 15px)` : 0 }}
          ></div>
        </div>
        <div className={style.priceBlock}>
          Сумма заказов — <span>{totalPrice.toLocaleString()} руб.</span>
        </div>
      </div>

      <div className={style.aboutMeBlock}>
        <div>
          <h4>Информация обо мне</h4>
          <Link
            to={"/Login"}
            onClick={() =>
              window.confirm("Вы точно хотите сменить аккаунт?")
                ? dispatch((data = ""))
                : ""
            }
            className="sendForm"
          >
            Сменить аккаунт
          </Link>
        </div>

        <form onClick={(el) => el.preventDefault()}>
          {!data ? (
            <div className="opacity">
              <div className="modal">
                <img src="/static/images/as.webp" alt="" />
                <p>
                  Похоже вы не вошли в свой аккаунт, или ещё не
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
