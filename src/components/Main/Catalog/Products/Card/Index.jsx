import style from "./Card.module.scss";
import { Link } from "react-router-dom";

export default function Index({ id, title, image, price }) {
  return (
    <div className={style.product} id={id}>
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
          <Link to={`/flower/${id}`} className={style.addToCart}>
            Перейти к товару
          </Link>
        </div>
      </div>
    </div>
  );
}
