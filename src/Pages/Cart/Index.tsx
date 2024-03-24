import { placeAnOrder } from "../../redux/slices/addToCartSlice";
import style from "./Cart.module.scss";
import CartItem from "./CartItem/Index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

type TypeCartItem = {
  id: number;
  title: string;
  image: string;
  size: string;
  price: number;
  count: number;
};

export default function Cart() {
  const items = useSelector((state) => state.addToCartSlice.items);
  const totalPrice = useSelector((state) => state.addToCartSlice.totalPrice);

  const dispatch = useDispatch();

  return (
    <section className="sectionBack">
      <div className="container">
        <div className={style.cartBlock}>
          <section className={style.cart}>
            <div className="pageName">
              <div>
                <Link to={"/"}>Главная</Link> {">"}{" "}
                <Link to={"/Cart"}>Корзина</Link>
              </div>
              <h3>Корзина</h3>
            </div>
            <div className={style.productsContainer}>
              {!items.length ? (
                <div className={style.cartEmpty}>
                  <h2>Корзина пуста...</h2>
                  <Link to={"/"} className="sendForm">
                    Перейти в каталог товаров
                  </Link>
                </div>
              ) : (
                items.map((el: TypeCartItem) => (
                  <CartItem
                    key={`${el.id}_${el.size}`}
                    id={el.id}
                    title={el.title}
                    image={el.image}
                    size={el.size}
                    price={el.price}
                    count={el.count}
                  />
                ))
              )}
            </div>
          </section>
          <section className={style.totalPriceBlock}>
            <div className={style.totalCostBlock}>
              <div className={style.totalPrice}>
                <h4>Итоговая стоимость:</h4>
                <p>{totalPrice.toLocaleString()} руб.</p>
              </div>
              <div className={style.discount}>
                Зайдите в{" "}
                <Link to={"/PersonalAccount/Profile"}>личный кабинет</Link>{" "}
                чтобы проверить вашу СКИДКУ!
              </div>
            </div>
            <Link
              to={"/PlaceAnOrder"}
              onClick={() => dispatch(placeAnOrder({ items, totalPrice }))}
              className={
                !items.length
                  ? style.placeAnOrder + " " + style.active
                  : style.placeAnOrder
              }
            >
              Оформить заказ
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
