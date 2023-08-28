import React from "react";
import style from "./Advantages.module.scss";

export default function Index() {
  return (
    <section id="advantages">
      <div className="container">
        <div className={style.advantages}>
          <img src="src/assets/image/delivery.svg" alt="#!" />
          <img src="src/assets/image/present.svg" alt="#!" />
          <img src="src/assets/image/clock.svg" alt="#!" />
          <img src="src/assets/image/discount.svg" alt="#!" />
        </div>
      </div>
    </section>
  );
}
