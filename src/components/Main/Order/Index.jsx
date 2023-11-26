import style from "./Order.module.scss";

export default function Order() {
  return (
    <section id="order">
      <div className="container">
        <div className={style.orderLogo}>
          <p>
            <span>заказать</span> в 5 шагов
          </p>
        </div>
        <div className={style.orderBlock}>
          <div>
            <div className={style.orderItem}>
              <img src="static/images/1.webp" alt="" />
              <div>
                <h4>Выберите букет;</h4>
                <p>
                  В каталоге выберите <br />
                  понравившийся букет;
                </p>
              </div>
            </div>
            <div className={style.orderItem}>
              <img src="static/images/2.webp" alt="" />
              <div>
                <h4>Выберите размер и дополнение;</h4>
                <p>
                  На странице с описанием букета выберите
                  <br />
                  подходящий размер. По желанию, добавьте
                  <br />
                  к букету мягкую игрушку, сладости или
                  <br />
                  любой другой подарок;
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={style.orderItem}>
              <img src="static/images/3.webp" alt="" />
              <div>
                <h4>Укажите данные для доставки;</h4>
                <p>
                  Заполните форму доставки и оплатите
                  <br />
                  заказ удобным для вас способом;
                </p>
              </div>
            </div>
            <div className={style.orderItem}>
              <img src="static/images/4.webp" alt="" />
              <div>
                <h4>Букет готов!</h4>
                <p>
                  Букет будет собран из свежайших цветов и<br />
                  доставлен получателю к указанной дате и<br />
                  времени.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
