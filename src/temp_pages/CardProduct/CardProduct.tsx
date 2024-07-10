import style from "./CardProduct.module.scss";
import { Link } from "react-router-dom";

import RelatedProducts from "@components/RelatedProducts/RelatedProducts";
import Product from "./Product/Product";

export default function CardProduct() {
  return (
    <section>
      <section className="sectionBack">
        <div className="container">
          <div className="pageName">
            <div>
              <Link to={"/"}>Главная</Link> {">"}{" "}
              <Link to={"/Cart"}>Карточка товара</Link>
            </div>
          </div>
          <div className={style.productCard}>
            <Product />
          </div>
        </div>
      </section>
      <RelatedProducts />
    </section>
  );
}
