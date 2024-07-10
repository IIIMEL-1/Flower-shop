import { useEffect, useState } from "react";
import style from "./Login.module.scss";
import { useAuthAndLoginMutation } from "@redux/slices/createApi";
import { getData } from "@redux/slices/authSlice";
import { useDispatch } from "react-redux";
import Modal from "@components/Modal/Modal";
import Authorization from "./Authorization/Authorization";
import Registration from "./Registration/Registration";

export default function Login() {
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState("auth");

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const [createAcc, { data, isLoading, error }] = useAuthAndLoginMutation();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (isLogin === "auth") {
      createAcc({
        email,
        password,
        isLogin,
      });
    } else {
      createAcc({
        fullName,
        city,
        phone,
        email,
        password,
        orders: [],
        isLogin,
      });
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(getData({ data: data.data, error, isLoading }));
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
              img={"/images/party-popper.webp"}
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
            <Authorization
              handleFormSubmit={handleFormSubmit}
              state={{ email, password }}
              setState={{ setEmail, setPassword }}
              error={error}
            />
          ) : (
            <Registration
              handleFormSubmit={handleFormSubmit}
              state={{ email, password, phone, city, fullName }}
              setState={{
                setEmail,
                setPassword,
                setPhone,
                setCity,
                setFullName,
              }}
              error={error}
            />
          )}
        </div>
      </div>
    </section>
  );
}
