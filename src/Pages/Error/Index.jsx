import React from "react";
import style from "./Error.module.scss";
import { Link } from "react-router-dom";

export default function G() {
  return (
    <section className="sectionBack">
      <div className="container">
        <div className={style.wrapper}>
          <img src="public/Error.png" alt="" srcset="" />
          <h3>Упс... Что-то пошло не так.</h3>
          <p>Перейдите на главную, а мы пока все починим.</p>
          <Link to={"/"}>главная</Link>
        </div>
      </div>
    </section>
  );
}
