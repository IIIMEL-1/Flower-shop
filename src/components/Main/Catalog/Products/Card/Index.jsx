import React from "react";
import style from "./Card.module.scss";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addItem } from "../../../../../redux/slices/addToCartSlice";

export default function Index(props) {
  const dispatch = useDispatch();

  return (
    <div className={style.product} id={props.id}>
      <img src={props.image} alt={props.title} />
      <div className={style.about}>
        <Link to={`/flower/${props.id}`} className={style.title}>
          <p>{props.title}</p>
        </Link>
        <div>
          <div className={style.price}>
            <p>Стоимость:</p>
            <p>{props.price} руб.</p>
          </div>
          <button
            className={style.addToCart}
            onClick={() => dispatch(addItem(props))}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
