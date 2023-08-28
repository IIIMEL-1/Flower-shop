import React from "react";
import style from "./Card.module.scss";

export default function Index(props) {
  console.log(props);

  return (
    <div className={style.product} id={props.id}>
      <img src={props.image} alt={props.title} />
      <div>
        <p>{props.title}</p>
        <div className={style.price}>
          <p>Стоимость:</p>
          <p>
            <span>от </span>
            {props.price} руб.
          </p>
        </div>
        <button className={style.addToCart}>В корзину</button>
      </div>
    </div>
  );
}
