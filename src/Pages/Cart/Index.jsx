import React from "react";
import style from "./Cart.module.scss";

import CartItem from "./CartItem/Index";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
  const cardList = useSelector((state) => state.addToCartSlice.items);
  const totalPrice = useSelector((state) => state.addToCartSlice.totalPrice);

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
              {!cardList.length ? (
                <h2>Корзина пуста...</h2>
              ) : (
                cardList.map((el, i) => (
                  <CartItem
                    key={i}
                    id={el.id}
                    title={el.title}
                    image={el.image}
                    price={el.price}
                    description={el.description}
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
                <p>{totalPrice} руб.</p>
              </div>
              <div className={style.discount}>
                Зайдите в <Link to={"/"}>личный кабинет</Link> чтобы проверить
                вашу СКИДКУ!
              </div>
            </div>
            <Link to={"/PlaceAnOrder"} className={style.placeAnOrder}>
              Оформить заказ
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
