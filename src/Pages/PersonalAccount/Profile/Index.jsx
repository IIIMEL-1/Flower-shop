import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./Profile.module.scss";

export default function Profile() {
  const totalPrice = useSelector((state) => state.addToCartSlice.totalPrice);

  const { userDetails, isLoading, error } = useSelector(
    (state) => state.authSlice
  );

  let percent = totalPrice / 1000;
  percent >= 100 ? (percent = 100) : percent;

  return (
    <section className={style.profileBlock}>
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link> {" > "}
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
          </span>
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
        </div>

        <form onClick={(event) => event.preventDefault()}>
          {isLoading ? (
            !localStorage.getItem("token") ? (
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
              <div>Loading...</div>
            )
          ) : (
            <>
              <div>
                <h5>Имя и фамилия</h5>
                <input type="text" readOnly value={userDetails.fullName} />
              </div>

              <div>
                <h5>Моб. номер</h5>
                <input type="tel" readOnly value={userDetails.phone} />
              </div>

              <div>
                <h5>Город</h5>
                <input type="text" readOnly value={userDetails.city} />
              </div>

              <div>
                <h5>Эл. почта</h5>
                <input type="email" readOnly value={userDetails.email} />
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
