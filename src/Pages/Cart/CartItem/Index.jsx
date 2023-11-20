import React from "react";
import style from "./CartItem.module.scss";
import {
  addItem,
  minusItem,
  removeItem,
} from "../../../redux/slices/addToCartSlice";
import { useDispatch } from "react-redux";

export default function CartItem({ id, title, image, price, count }) {
  const dispatch = useDispatch();

  return (
    <div className={style.cartItem}>
      <div className={style.description}>
        <img src={image} alt={title} />
        <div className={style.title}>
          <p>{title}</p>
          <span>Большой (1 800 руб.)</span>
        </div>
        <div
          className={style.removeBtn}
          onClick={() => dispatch(removeItem(id))}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M1.30217 1.3033L11.9088 11.9099M1.30217 11.9099L11.9088 1.3033"
              stroke="#BDBDBD"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
      <div className={style.priceBlock}>
        <div className={style.counter}>
          <button onClick={() => dispatch(minusItem(id))}>-</button>
          <p>{count} шт.</p>
          <button onClick={() => dispatch(addItem({ id }))}>+</button>
        </div>
        <div className={style.price}>
          <span>Сумма</span>
          <p>{price * count} руб.</p>
        </div>
      </div>
    </div>
  );
}
