import { useState } from "react";
import style from "../Login.module.scss";

export default function Authorization({
  handleFormSubmit,
  error,
  state: { email, password },
  setState: { setEmail, setPassword },
}) {
  const [inputType, setInputType] = useState("password");

  const clickOnEye = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  return (
    <form action="#" onSubmit={handleFormSubmit}>
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
      <div id={style.password}>
        <h3>Пароль:</h3>
        <input
          type={inputType}
          name="password"
          autoComplete="current-password"
          onChange={(el) => setPassword(el.target.value)}
          value={password}
          minLength={6}
          maxLength={15}
        />
        <span onClick={clickOnEye}>
          {
            <img
              src={
                inputType === "password"
                  ? "/images/hidden_eye.svg"
                  : "/images/eye_visible.svg"
              }
            />
          }
        </span>
      </div>

      {error ? (
        <div style={{ fontSize: "17px", textAlign: "center", color: "red" }}>
          {error.data.message}
        </div>
      ) : (
        ""
      )}

      <button disabled={email && password ? false : true} className="sendForm">
        Войти
      </button>
    </form>
  );
}
