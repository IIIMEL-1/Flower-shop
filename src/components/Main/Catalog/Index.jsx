import React, { useState } from "react";
import Products from "./Products/Index";
import Sort from "./Sort/Index";
import style from "./Catalog.module.scss";

export default function Catalog() {
  const [search, setSearch] = useState("");

  return (
    <section className="sectionBack" id={style.catalog}>
      <div className="container">
        <Products search={search} />
        <Sort setSearch={setSearch} />
      </div>
    </section>
  );
}
