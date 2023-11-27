import { useState } from "react";
import style from "./Login.module.scss";
import { auth, register } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const Res = useSelector((state) => state.authSlice.authRes);

  console.log(Res);

  return (
    <section className="sectionBack" style={{ padding: "75px 0" }}>
      <div className="container">
        <div className={style.loginBlock}>
          <div className={style.loginOrRegistration}>
            <button
              className={isLogin ? style.active : ""}
              onClick={() => (setIsLogin(true), setFullName(""))}
            >
              Войти
            </button>
            <button
              className={!isLogin ? style.active : ""}
              onClick={() => setIsLogin(false)}
            >
              Зарегистрироваться
            </button>
          </div>
          {isLogin ? (
            <form onClick={(el) => el.preventDefault()} className={style.login}>
              <div>
                <h3>Электронная почта:</h3>
                <input
                  type="email"
                  placeholder="Эл. почта"
                  onChange={(el) => setEmail(el.target.value)}
                  value={email}
                />
              </div>
              <div>
                <h3>Пароль:</h3>
                <input
                  type="password"
                  onChange={(el) => setPassword(el.target.value)}
                  value={password}
                  minLength={6}
                  maxLength={15}
                />
              </div>
              <button
                disabled={email && password ? false : true}
                onClick={() => dispatch(auth({ email, password }))}
                className="sendForm"
              >
                Войти
              </button>
            </form>
          ) : (
            <form
              onClick={(el) => el.preventDefault()}
              className={style.registration}
            >
              <div>
                <h3>Ваше имя:</h3>
                <input
                  type="text"
                  placeholder="Вася Пупкин"
                  onChange={(el) => setFullName(el.target.value)}
                  value={fullName}
                  minLength={2}
                />
              </div>
              <div>
                <h3>Электронная почта:</h3>
                <input
                  type="email"
                  placeholder="Эл. почта"
                  onChange={(el) => setEmail(el.target.value)}
                  value={email}
                />
              </div>
              <div>
                <h3>Пароль:</h3>
                <input
                  type="password"
                  onChange={(el) => setPassword(el.target.value)}
                  value={password}
                  minLength={6}
                  maxLength={18}
                />
              </div>
              <button
                disabled={fullName && email && password ? false : true}
                onClick={() =>
                  dispatch(register({ fullName, email, password }))
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
