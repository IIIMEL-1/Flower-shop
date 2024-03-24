import { Link } from "react-router-dom";
import style from "./ModalPlaceAnOrder.module.scss";
import { placeAnOrder } from "../../../../redux/slices/addToCartSlice";
import { useDispatch } from "react-redux";

type TypeModalPlaceAnOrder = {
  data: {
    id: number;
    title: string;
    image: string;
    price: number;
    size: string;
    count: number;
    about: string[];
  };
};

export default function ModalPlaceAnOrder({
  setIsOpen,
  data: { id, title, image, price, size, count, about },
}: TypeModalPlaceAnOrder) {
  const dispatch = useDispatch();

  const items = [{ id, image, title, count, size, price }];

  const totalPrice: number = price * count;

  return (
    <div className={style.opacity}>
      <div className={style.modal}>
        <div className={style.buttonClose} onClick={() => setIsOpen(false)}>
          <span></span>
        </div>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p className={style.size}>
          Размер: <span>{size}</span>
        </p>
        <ul>
          {about.map((content, i) => (
            <li key={i}>{content}</li>
          ))}
        </ul>
        <div className={style.countAndPrice}>
          <span>{count} шт.</span>
          <p>{(price * count).toLocaleString()} руб.</p>
        </div>
        <Link
          to={"/PlaceAnOrder"}
          onClick={() => dispatch(placeAnOrder({ items, totalPrice }))}
          className="sendForm"
        >
          Перейти к оформлению заказа
        </Link>
      </div>
    </div>
  );
}
