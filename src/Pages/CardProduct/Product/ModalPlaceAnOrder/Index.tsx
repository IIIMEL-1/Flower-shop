import style from "./ModalPlaceAnOrder.module.scss";

type TypeModalPlaceAnOrder = {
  data: {
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
  data: { title, image, price, size, count, about },
}: TypeModalPlaceAnOrder) {
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
        <button className="sendForm">Перейти к оформлению заказа</button>
      </div>
    </div>
  );
}
