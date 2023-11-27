import React from "react";
import style from "./PasswordChange.module.scss";
import { Link } from "react-router-dom";

export default function PasswordChange() {
  return (
    <section>
      <div className="pageName">
        <div>
          <Link>Главная</Link>
          {" > "} <Link>Личный кабинет</Link>
          {" > "} <Link>Смена пароля</Link>
        </div>
      </div>
      <h1>Password Change</h1>
    </section>
  );
}
