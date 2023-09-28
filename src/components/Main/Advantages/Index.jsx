import React from "react";
import style from "./Advantages.module.scss";

export default function Index() {
  return (
    <section id="advantages">
      <div className="container">
        <div className={style.advantages}>
          <img src="public/delivery.svg" alt="#!" />
          <img src="public/present.svg" alt="#!" />
          <img src="public/clock.svg" alt="#!" />
          <img src="public/discount.svg" alt="#!" />
        </div>
      </div>
    </section>
  );
}
