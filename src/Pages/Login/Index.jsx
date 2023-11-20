import React from "react";
import style from "./Login.module.scss";

export default function Login() {
  return (
    <section>
      <div className="container">
        <div className={style.loginBlock}>
          <div className={style.loginBack}>
            <img src="public/loginBack.png" alt="" />
          </div>
          <div className={style.login}></div>
        </div>
      </div>
    </section>
  );
}
