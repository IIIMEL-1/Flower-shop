import style from "./CartItem.module.scss";
import {
  addItem,
  minusItem,
  removeItem,
} from "../../../redux/slices/addToCartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function CartItem({ id, title, image, description, count }) {
  const dispatch = useDispatch();

  return (
    <div className={style.cartItem}>
      <div className={style.description}>
        <img src={image} alt={title} />
        <div className={style.title}>
          <Link to={`/flower/${id}`}>{title}</Link>
          <div>
            <span>{description.size}</span>{" "}
            <span>({description.price} руб.)</span>
          </div>
        </div>
        <div
          className={style.removeBtn}
          onClick={() => dispatch(removeItem({ id, description }))}
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
          <button
            className={style.minus}
            onClick={() => dispatch(minusItem({ id, description }))}
            disabled={count < 2 ? true : false}
          >
            <svg
              width="9"
              height="2"
              viewBox="0 0 9 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="1" x2="9" y2="1" stroke="#5B4A58" strokeWidth="2" />
            </svg>
          </button>
          <p>{count} шт.</p>
          <button
            className={style.plus}
            onClick={() => dispatch(addItem({ id, description, count: 1 }))}
          >
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M0 4.5H9M4.5 9L4.5 0"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
        <div className={style.price}>
          <span>Сумма</span>
          <p>{(description.price * count).toLocaleString()} руб.</p>
        </div>
      </div>
    </div>
  );
}
