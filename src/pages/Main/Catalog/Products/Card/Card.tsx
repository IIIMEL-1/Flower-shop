import { TypeShortProduct } from "@globalTypes/shortProduct.types";
import style from "./Card.module.scss";
import { Link } from "react-router-dom";

type TypeCardProps = TypeShortProduct & {
  mini: boolean;
};

export default function Card({ id, title, image, price, mini }: TypeCardProps) {
  return (
    <div className={mini ? `${style.product} ${style.active}` : style.product}>
      <img src={image} alt={title} />
      <div className={style.about}>
        <div className={style.title}>
          <p>{title}</p>
        </div>
        <div>
          <div className={style.price}>
            <p>Стоимость:</p>
            <p>{price.toLocaleString()} руб.</p>
          </div>
          <Link to={`/flower/${id}`} className="sendForm">
            Перейти к товару
          </Link>
        </div>
      </div>
    </div>
  );
}
