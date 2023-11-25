import React from "react";
import style from "./Advantages.module.scss";

export default function Advantages() {
  return (
    <section id="advantages">
      <div className="container">
        <div className={style.advantages}>
          {/* <img src="/public/static/images/delivery.svg" alt="#!" /> */}
          <img src="static/images/present.svg" alt="#!" />
          <img src="static/images/clock.svg" alt="#!" />
          <img src="static/images/discount.svg" alt="#!" />
        </div>
      </div>
    </section>
  );
}
