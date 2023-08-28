import React from "react";
import style from "./Background.module.scss";

export default function Index() {
  return (
    <section className={style.background}>
      <div className="container">
        <div className={style.logo}>
          <p>
            <span>ДОСТАВКА</span> ЦВЕТОВ В ГОРОДЕ
          </p>
          <p>ВЛАДИВОСТОК</p>
        </div>
        <button href="#catalog">КАТАЛОГ</button>
      </div>
    </section>
  );
}
