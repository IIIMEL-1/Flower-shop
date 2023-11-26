import { useState } from "react";
import style from "./Sort.module.scss";

import Skeleton from "./Skeleton.jsx";
{
  /* <Skeleton /> */
}

export default function Sort({ setSearch }) {
  const sortList = {
    bouquet: [
      { title: "Розами", sortBy: "Rose" },
      { title: "Тюльпанами", sortBy: "Tulip" },
      { title: "Хризантемами ", sortBy: "Chrysanthemum" },
      { title: "Гвоздика", sortBy: "Dianthus" },
      { title: "Лилия", sortBy: "Lily" },
    ],

    packed: [
      { title: "В бумаге", sortBy: "paper" },
      { title: "В коробке", sortBy: "box" },
      { title: "В корзине", sortBy: "basket" },
    ],

    colorScheme: [
      { title: "Белая", sortBy: "white" },
      { title: "Красная", sortBy: "red" },
      { title: "Желтая", sortBy: "yellow" },
      { title: "Розовая", sortBy: "pink" },
      { title: "Оранжевая", sortBy: "orange" },
    ],
  };

  return (
    <section id={style.sort}>
      <div className={style.searchBlock}>
        <input
          type="text"
          placeholder="Поиск"
          onInput={(el) => setSearch(el.target.value)}
        />
      </div>
      {/* <div className={style.cost}>
        <h3>Стоимость:</h3>
        <div>
          <input type="checkbox" name="s" id="sas" />
          <label htmlFor="sas">до 2500 руб.</label>
        </div>
        <div>
          <input type="checkbox" name="s" id="ssas" />
          <label htmlFor="ssas">до 3500 руб.</label>
        </div>
      </div> */}
      <div className={style.bouquet}>
        <h3>Букет с ...</h3>
        {sortList.bouquet.map((el, i) => (
          <div key={i}>
            <input type="checkbox" name="bouquet" id={el.sortBy} />
            <label htmlFor={el.sortBy}>{el.title}</label>
          </div>
        ))}
      </div>
      <div className={style.packed}>
        <h3>Цветы упаковано</h3>
        {sortList.packed.map((el, i) => (
          <div key={i}>
            <input type="checkbox" name="packed" id={el.sortBy} />
            <label htmlFor={el.sortBy}>{el.title}</label>
          </div>
        ))}
      </div>
      <div className={style.colorScheme}>
        <h3>Цветовая гамма</h3>
        {sortList.colorScheme.map((el, i) => (
          <div key={i}>
            <input type="checkbox" name="packed" id={el.sortBy} />
            <label htmlFor={el.sortBy}>{el.title}</label>
          </div>
        ))}
      </div>
    </section>
  );
}
