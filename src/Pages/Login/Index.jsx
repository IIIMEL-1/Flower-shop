import { useEffect, useState } from "react";
import style from "./Login.module.scss";
import { useAuthAndLoginMutation } from "../../redux/slices/createApi";
import { getData } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import Modal from "../../components/Modal/Index";

export default function Login() {
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState("auth");

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const [createAcc, { isLoading, error, data }] = useAuthAndLoginMutation();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (isLogin === "auth") {
      createAcc({ email, password, isLogin });
    } else {
      createAcc({
        fullName,
        city,
        phone,
        email,
        password,
        isLogin,
        orders: [],
      });
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(getData({ data, error, isLoading }));
      localStorage.setItem("token", `${data.token}`);
    }
  }, [data]);

  return (
    <section className="sectionBack" style={{ padding: "75px 0" }}>
      <div className="container">
        <div className={style.loginBlock}>
          <div className={style.loginOrRegistration}>
            <button
              className={isLogin === "auth" ? style.active : ""}
              onClick={() => (setIsLogin("auth"), setFullName(""))}
            >
              Войти
            </button>
            <button
              className={isLogin === "register" ? style.active : ""}
              onClick={() => setIsLogin("register")}
            >
              Зарегистрироваться
            </button>
          </div>

          {data ? (
            <Modal
              img={"/static/images/party-popper.webp"}
              text={"Вы успешно вошли в аккаунт!"}
              buttonText={"Вернутся назад"}
              link={"/PersonalAccount/Profile"}
            />
          ) : isLoading ? (
            <Modal />
          ) : (
            ""
          )}

          {isLogin === "auth" ? (
            <form
              action="#"
              onSubmit={handleFormSubmit}
              className={style.login}
            >
              <div>
                <h3>Электронная почта:</h3>
                <input
                  id="username"
                  type="email"
                  name="username"
                  autoComplete="username"
                  placeholder="Эл. почта"
                  onChange={(el) => setEmail(el.target.value)}
                  value={email}
                />
              </div>
              <div>
                <h3>Пароль:</h3>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  onChange={(el) => setPassword(el.target.value)}
                  value={password}
                  minLength={6}
                  maxLength={15}
                />
              </div>

              {error ? (
                <div className={style.error}>{error.data.message}</div>
              ) : (
                ""
              )}

              <button
                disabled={email && password ? false : true}
                className="sendForm"
              >
                Войти
              </button>
            </form>
          ) : (
            <form
              action="#"
              onSubmit={handleFormSubmit}
              className={style.registration}
            >
              <div>
                <h3>Ваше имя:</h3>
                <input
                  id="username"
                  type="text"
                  name="username"
                  pattern="[Аа-Яя]{1,30}"
                  autoComplete="username"
                  placeholder="Вася Пупкин"
                  onChange={(el) => setFullName(el.target.value)}
                  value={fullName}
                  minLength={2}
                  maxLength={18}
                />
              </div>
              <div>
                <h3>Город:</h3>
                <input
                  type="text"
                  name="city"
                  pattern="[Аа-Яя]{1,30}"
                  placeholder="Владивосток"
                  onChange={(el) => setCity(el.target.value)}
                  value={city}
                  minLength={2}
                  maxLength={20}
                />
              </div>
              <div>
                <h3>Моб. номер:</h3>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="+_(___) ___-__-__"
                  onChange={(el) => setPhone(el.target.value)}
                  value={phone}
                  minLength={11}
                  maxLength={16}
                />
              </div>
              <div>
                <h3>Электронная почта:</h3>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  name="email"
                  placeholder="Эл. почта"
                  onChange={(el) => setEmail(el.target.value)}
                  value={email}
                />
              </div>
              <div>
                <h3>Пароль:</h3>
                <input
                  type="password"
                  id="password"
                  name="password"
                  security="none"
                  autoComplete="current-password"
                  placeholder="Пароль"
                  onChange={(el) => setPassword(el.target.value)}
                  value={password}
                  minLength={6}
                  maxLength={18}
                />
              </div>

              {error ? (
                <div className={style.error}>{error.data.message}</div>
              ) : (
                ""
              )}

              <button
                disabled={
                  fullName.length >= 3 &&
                  email.includes("@") &&
                  password.length >= 6 &&
                  city.length >= 3 &&
                  phone.length >= 11
                    ? false
                    : true
                }
                className="sendForm"
              >
                Зарегистрироваться
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
