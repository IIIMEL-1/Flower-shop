import { Link } from "react-router-dom";
import style from "./ModalPlaceAnOrder.module.scss";
import { placeAnOrder } from "@redux/slices/addToCartSlice";
import { useDispatch } from "react-redux";
import { TypeShortProduct } from "@globalTypes/shortProduct.types";
import { IDescriptionProduct } from "@globalTypes/descriptionProduct.types";
import { IButtonModal } from "@globalTypes/buttonModal.types";

interface IModalPlaceAnOrder
  extends TypeShortProduct,
    IDescriptionProduct,
    IButtonModal {
  count: number;
}

export default function ModalPlaceAnOrder({
  setIsOpen,
  id,
  title,
  image,
  price,
  size,
  count,
  content,
}: IModalPlaceAnOrder) {
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
          {content.map((content, i) => (
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
