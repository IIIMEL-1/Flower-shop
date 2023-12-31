import { useEffect, useState } from "react";
import style from "./Card.module.scss";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addItem } from "../../../../../redux/slices/addToCartSlice";

export default function Index({ id, title, image, description, price }) {
  const [size, setSize] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const foundIndex = description.findIndex((el) => el.size === "Стандартный");
    setSize(foundIndex !== -1 ? foundIndex : 0);
  }, []);

  const onClickAdd = () => {
    const item = {
      id,
      title,
      image,
      description: description[size],
      count: 1,
    };

    dispatch(addItem(item));
  };

  return (
    <div className={style.product} id={id}>
      <img src={image} alt={title} />
      <div className={style.about}>
        <Link to={`/flower/${id}`} className={style.title}>
          <p>{title}</p>
        </Link>
        <div>
          <div className={style.price}>
            <p>Стоимость:</p>
            <p>{price.toLocaleString()} руб.</p>
          </div>
          <button className={style.addToCart} onClick={onClickAdd}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
