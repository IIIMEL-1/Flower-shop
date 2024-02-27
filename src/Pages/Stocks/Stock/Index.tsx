import React from "react";
import style from "./Stock.module.scss";

export default function Stock({ img, date, description, discount }) {
  return (
    <div className={style.stock}>
      <img src={img} alt="photo" />
      <div className={style.discount}>-{discount}%</div>
      <div className={style.info}>
        <p>
          Акция до <span>{date}</span>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
