import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Profile.module.scss";
import Modal from "../../../components/Modal/Index";
import { logoutUser } from "../../../redux/slices/authSlice";
import { useMemo } from "react";

export default function Profile() {
  const dispatch = useDispatch();

  const { userDetails, error } = useSelector((state) => state.authSlice);

  const totalPrice = useMemo(() => {
    if (userDetails) {
      return userDetails.orders.reduce((sum, obj) => {
        return sum + obj.totalPrice;
      }, 0);
    } else {
      return 0;
    }
  }, [userDetails]);

  const percent = Math.min(totalPrice / 1000, 100);

  const logOut = () => {
    localStorage.clear();
    dispatch(logoutUser());
  };

  const getDiscountPercentage = (percent: number) => {
    if (percent < 25) return 0;
    if (percent < 65) return 3;
    if (percent < 100) return 5;
    if (percent === 100) return 7;
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
            Ваша скидка — <span>{getDiscountPercentage(percent)}%</span>
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
            {!localStorage.getItem("token") ? (
              <Modal
                img={"/static/images/as.webp"}
                text={
                  "Похоже вы не вошли в свой аккаунт, или ещё не зарегистрировались на нашем сайте"
                }
                buttonText={"Войти в аккаунт"}
                link={"/Login"}
              />
            ) : error ? (
              <p>Ошибка при получении информации о пользователе :(</p>
            ) : userDetails ? (
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
            ) : (
              <p>Загрузка...</p>
            )}
          </form>
        </div>
        {localStorage.getItem("token") && (
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
