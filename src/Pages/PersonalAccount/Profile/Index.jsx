import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./Profile.module.scss";
import Modal from "../../../components/Modal/Index";

export default function Profile() {
  const totalPrice = useSelector((state) => state.addToCartSlice.totalPrice);

  const { userDetails, isLoading, error } = useSelector(
    (state) => state.authSlice
  );

  let percent = totalPrice / 1000;
  percent >= 100 ? (percent = 100) : percent;

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <section id={style.profilePage}>
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link> {" > "}
          <Link to={"/PersonalAccount/Profile"}>Личный кабинет</Link> {" > "}
          <Link to={"/PersonalAccount/Profile"}>Профиль</Link>
        </div>
      </div>

      <div className={style.profileBlock}>
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
                <Modal
                  img={"/static/images/as.webp"}
                  text={
                    "Похоже вы не вошли в свой аккаунт, или ещё не зарегистрировались на нашем сайте"
                  }
                  buttonText={"Войти в аккаунт"}
                  link={"/Login"}
                />
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
        {!localStorage.getItem("token") ? (
          ""
        ) : (
          <div className={style.logOut}>
            <button className="sendForm">Удалить аккаунт</button>
            <button className="sendForm" onClick={logOut}>
              Выйти из аккаунта
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
