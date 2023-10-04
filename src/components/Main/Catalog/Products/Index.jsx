import React, { useState } from "react";
import Card from "./Card/Index.jsx";
import Skeleton from "./Card/Skeleton.jsx";
import style from "./Products.module.scss";

export default function Index() {
  const [products, setProducts] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [sort, setSort] = React.useState("");
  const [isActive, setIsActive] = React.useState();

  const list = [
    { title: "Новизне", sorting: "sortBy=title" },
    { title: "Цена по возрастанию", sorting: "sortBy=price&order=asc" },
    { title: "Цена по убыванию", sorting: "sortBy=price&order=desc" },
    { title: "Популярности", sorting: "sortBy=rating" },
  ];

  React.useEffect(() => {
    setIsLoading(true);
    fetch("https://64ebe102e51e1e82c577b25b.mockapi.io/products?" + sort)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [sort]);

  return (
    <div className={style.productBlock} id="catalog">
      <div className={style.sort}>
        <p>Сортировать по:</p>
        {list.map((el, i) => (
          <button
            key={i}
            className={
              isActive === i ? "active" : ""
            } /* (так же как if else) условие ? true : false. */
            onClick={() => (setSort(el.sorting), setIsActive(i))}
          >
            {el.title}
          </button>
        ))}
      </div>
      <div id={style.productsContainer}>
        {isLoading
          ? [...new Array(9)].map((_, i) => <Skeleton key={i} />)
          : products.map((el) => (
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
