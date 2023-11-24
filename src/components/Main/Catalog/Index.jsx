import React from "react";
import Products from "./Products/Index";
import Sort from "./Sort/Index";
import style from "./Catalog.module.scss";

export default function Catalog() {
  return (
    <section className="sectionBack" id={style.catalog}>
      <div className="container">
        <Products />
        <Sort />
      </div>
    </section>
  );
}
