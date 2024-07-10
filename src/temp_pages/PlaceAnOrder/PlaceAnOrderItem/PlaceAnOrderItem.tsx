import style from "./PlaceAnOrderItem.module.scss";
import { Link } from "react-router-dom";

type TypePlaceAnOrderItemProps = {
  id: number;
  title: string;
  image: string;
  size: string;
  price: number;
  count: number;
};

export default function PlaceAnOrderItem({
  id,
  title,
  image,
  size,
  price,
  count,
}: TypePlaceAnOrderItemProps) {
  return (
    <div className={style.placeAnOrderItem}>
      <div className={style.description}>
        <img src={image} alt={title} />
        <div className={style.title}>
          <Link to={`/flower/${id}`}>{title}</Link>
          <div>
            <span>{size}</span> <span>({count} шт.)</span>
          </div>
        </div>
      </div>
      <div className={style.priceBlock}>
        <div className={style.price}>
          <span>Сумма</span>
          <p>{(price * count).toLocaleString()} руб.</p>
        </div>
      </div>
    </div>
  );
}
