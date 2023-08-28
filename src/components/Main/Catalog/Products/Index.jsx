import React, { useState } from "react";
import Card from "./Card/Index.jsx";
import style from "./Products.module.scss";

export default function Index() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://64ebe102e51e1e82c577b25b.mockapi.io/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className={style.productBlock}>
      <div className={style.sort}>
        <p>Сортировать по:</p>
        <button>Новизне</button>
        <button>Цена по возрастанию</button>
        <button>Цена по убыванию</button>
        <button>Популярности</button>
      </div>
      <div id={style.productsContainer}>
        {products.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            price={el.price}
            image={el.image}
          />
        ))}
      </div>
      <button className={style.showMore}>Показать ещё</button>
    </div>
  );
}
