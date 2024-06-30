import Products from "./Products/Products";
import Sort from "./Sort/Sort";
import style from "./Catalog.module.scss";
import { useState } from "react";

export default function Catalog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="sectionBack" id={style.catalog}>
      <div className="container">
        <Products setIsOpen={setIsOpen} />
        <Sort isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </section>
  );
}
