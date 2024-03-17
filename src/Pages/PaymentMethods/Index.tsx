import { Link } from "react-router-dom";
import style from "./PaymentMethods.module.scss";

export default function PaymentMethods() {
  const PAYMENT_METHODS = [
    {
      name: "МИР",
      image: "/static/images/mir.png",
    },
    {
      name: "VISA International",
      image: "/static/images/visa.png",
    },
    {
      name: "Mastercard Worldwide",
      image: "/static/images/masterCard.png",
    },
    {
      name: "JCB",
      image: "/static/images/JCB.png",
    },
    {
      name: "Apple Pay",
      image: "/static/images/applePay.png",
    },
    {
      name: "Samsung Pay",
      image: "/static/images/samsungPay.png",
    },
    {
      name: "Google Pay",
      image: "/static/images/googlePay.png",
    },
  ];

  return (
    <section className="sectionBack">
      <div className="container">
        <div className="pageName">
          <div>
            <Link to={"/"}>Главная</Link> {">"}{" "}
            <Link to={"/Questions"}>Способы оплаты</Link>
          </div>
          <h3>Способы оплаты</h3>
        </div>
        <section className={style.paymentMethodBlock}>
          <div>
            <h4>Наличный расчёт</h4>
            <p>
              Если товар передается путем самовывоза из магазина по адресу ул.
              Жигура 2 стр 2, то оплата осуществляется наличными менеджеру в
              руки или с помощью банковской карты. При получении товара
              обязательно проверьте комплектацию товара.
            </p>
          </div>
          <div>
            <h4>Банковской картой</h4>
            <p>
              Для выбора оплаты товара с помощью банковской карты на
              соответствующей странице необходимо нажать кнопку Оплата заказа
              банковской картой. Оплата происходит через ПАО СБЕРБАНК с
              использованием банковских карт следующих платёжных систем:
            </p>
            <ul>
              {PAYMENT_METHODS.map(({ name, image }) => (
                <li key={name}>
                  <img src={image} alt={name} />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>
              Соединение с платёжным шлюзом и передача информации осуществляется
              в защищённом режиме с использованием протокола шифрования SSL. В
              случае если Ваш банк поддерживает технологию безопасного
              проведения интернет-платежей{" "}
              <strong>
                Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure
              </strong>{" "}
              для проведения платежа также может потребоваться ввод специального
              пароля. <br /> Настоящий сайт поддерживает 256-битное шифрование.
              Конфиденциальность сообщаемой персональной информации
              обеспечивается ПАО СБЕРБАНК. Введённая информация не будет
              предоставлена третьим лицам за исключением случаев,
              предусмотренных законодательством РФ. Проведение платежей по
              банковским картам осуществляется в строгом соответствии с
              требованиями платёжных систем{" "}
              <strong>МИР, Visa Int., MasterCard Europe Sprl, JCB</strong>.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
