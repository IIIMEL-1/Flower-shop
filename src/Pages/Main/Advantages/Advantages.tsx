import style from "./Advantages.module.scss";

export default function Advantages() {
  return (
    <section id={style.advantages}>
      <div className="container">
        <div className={style.advantagesBlock}>
          <div>
            <img src="/images/delivery.webp" alt="#!" />
            <p>
              <span>Бесплатная</span> доставка по городу
            </p>
          </div>
          <div>
            <img src="/images/present.webp" alt="#!" />
            <p>
              Открытка в <span>подарок</span> и фото вручения
            </p>
          </div>
          <div>
            <img src="/images/clock.webp" alt="#!" />
            <p>
              <span>Круглосуточная</span> доставка
            </p>
          </div>
          <div>
            <img src="/images/discount.webp" alt="#!" />
            <p>
              Накопительная система <span>скидок</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
