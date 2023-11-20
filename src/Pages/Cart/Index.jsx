import React from "react";
import style from "./Cart.module.scss";

import OrderRegistration from "./OrderRegistration/Index";
import CartItem from "./CartItem/Index";

import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const cardList = useSelector((state) => state.addToCartSlice.items);

  return (
    <section className="sectionBack">
      <div className="container">
        <div className={style.cartBlock}>
          <OrderRegistration />
          <section className={style.cart}>
            <div className="pageName">
              <h3>Корзина</h3>
            </div>
            <div className={style.productsContainer}>
              {cardList.map((el, i) => (
                <CartItem
                  key={i}
                  id={el.id}
                  title={el.title}
                  image={el.image}
                  price={el.price}
                  count={el.count}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
