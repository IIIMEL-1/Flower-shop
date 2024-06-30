import { useState } from "react";
import style from "./RelatedProducts.module.scss";

import ProductItem from "./RelatedItem/RelatedItem";
import PageList from "@components/PageList/PageList";
import { useGetAdditionalQuery } from "@redux/slices/createApi";
import { TypeShortProduct } from "@globalTypes/shortProduct.types";

export default function RelatedProducts() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useGetAdditionalQuery({
    currentPage,
  });

  return (
    <section className="sectionWhite">
      <div className="container">
        <div className="pageName">
          <h3 style={{ textAlign: "center" }}>
            <span>Дополнить</span> Заказ
          </h3>
        </div>
        <div className={style.relatedProductsList}>
          {data ? (
            data.items.map((el: TypeShortProduct) => (
              <ProductItem
                key={el.id}
                id={el.id}
                title={el.title}
                image={el.image}
                price={el.price}
              />
            ))
          ) : (
            <p>loading</p>
          )}
        </div>
        <PageList
          isLoading={isLoading}
          error={error}
          data={data}
          state={{ currentPage, setCurrentPage }}
        />
      </div>
    </section>
  );
}
