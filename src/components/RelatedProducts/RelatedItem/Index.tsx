import { useState } from "react";
import style from "./RelatedItem.module.scss";
import { addItem } from "../../../redux/slices/addToCartSlice";
import { useDispatch } from "react-redux";

type RelatedItemProps = {
  id: number;
  title: string;
  image: string;
  price: number;
};

export default function RelatedItem({
  id,
  title,
  image,
  price,
}: RelatedItemProps) {
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id,
      title,
      image,
      description: { price },
      count,
    };

    dispatch(addItem(item));
  };

  return (
    <div className={style.relatedItem}>
      <img src={image} alt={title} />
      <div className={style.description}>
        <p>{title}</p>
        <p className={style.price}>
          {(price * count).toLocaleString()} <span>руб.</span>
        </p>
        <div className="counter">
          <button
            className="minus"
            onClick={() => (count < 2 ? "" : setCount(count - 1))}
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
          <button className="plus" onClick={() => setCount(count + 1)}>
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
        <button className="sendForm" onClick={onClickAdd}>
          Добавить
        </button>
      </div>
    </div>
  );
}
