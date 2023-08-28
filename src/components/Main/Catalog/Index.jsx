import React from "react";
import Products from "./Products/Index.jsx";
import style from "./Catalog.module.scss";

export default function Index() {
  return (
    <section id={style.catalog}>
      <div className="container">
        <Products />
      </div>
    </section>
  );
}
