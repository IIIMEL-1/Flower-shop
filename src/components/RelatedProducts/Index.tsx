import { useState } from "react";
import style from "./RelatedProducts.module.scss";

import ProductItem from "./RelatedItem/Index";
import PageList from "../PageList/Index";
import { useGetAdditionalQuery } from "../../redux/slices/createApi";

type RelatedItemProps = {
  id: number;
  title: string;
  image: string;
  price: number;
};

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
            data.items.map((el: RelatedItemProps) => (
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
