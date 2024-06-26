import { useEffect, useState } from "react";
import Card from "./Card/Card.js";
import Skeleton from "./Card/Skeleton.js";
import style from "./Products.module.scss";
import { useGetProductsQuery } from "@redux/slices/createApi.js";
import { useTypedSelector } from "@hooks/useTypedSelector";
import PageList from "@components/PageList/PageList.js";
import { TypeShortProduct } from "@globalTypes/shortProduct.types";
import { IButtonModal } from "@globalTypes/buttonModal.types.js";

export default function Products({ setIsOpen }: IButtonModal) {
  const sortList = useTypedSelector((state) => state.sortSlice.dataParse);

  const [sortBy, setSortBy] = useState("title");
  const [isActive, setIsActive] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenSort, setIsOpenSort] = useState(false);

  const list = [
    { title: "Новизне", sortBy: "title" },
    { title: "Цена по возрастанию", sortBy: "price" },
    { title: "Цена по убыванию", sortBy: "-price" },
    { title: "Популярности", sortBy: "rating" },
  ];

  const { data, error, isLoading } = useGetProductsQuery({
    currentPage,
    sortBy,
    sortList,
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [sortList]);

  return (
    <div className={style.productBlock} id="catalog">
      <div className={style.sortBlock}>
        <div
          className={style.sort}
          onClick={() => setIsOpenSort((prev) => !prev)}
        >
          <div className={style.sortBy}>
            <p>Сортировать по:</p>
          </div>
          <div>
            <div
              className={
                `${style.sortList}` + (isOpenSort ? ` ${style.active}` : "")
              }
            >
              {list.map((el, i) => (
                <button
                  key={i}
                  className={isActive === i ? "active" : ""}
                  onClick={() => (
                    setSortBy(el.sortBy), setCurrentPage(1), setIsActive(i)
                  )}
                >
                  {el.title}
                </button>
              ))}
            </div>
            <div className={style.currentSort}>
              {list[isActive].title}
              <img src="/images/arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <button
          className={style.filters}
          onClick={() => setIsOpen((prev: boolean) => !prev)}
        >
          Фильтры
        </button>
      </div>
      <div id={style.productsContainer}>
        {isLoading ? (
          [...new Array(6)].map((_, i) => <Skeleton key={i} />)
        ) : error ? (
          <div className={style.error}>
            <p>{`${error.status} ${error.data?.message}`}</p>
          </div>
        ) : data.items.length ? (
          data.items.map((el: TypeShortProduct) => (
            <Card
              key={el.id}
              id={el.id}
              title={el.title}
              image={el.image}
              price={el.price}
              mini={false}
            />
          ))
        ) : (
          <div className={style.error}>
            <p>Товары не найдены</p>
          </div>
        )}
      </div>
      <PageList
        isLoading={isLoading}
        error={error}
        data={data}
        state={{ currentPage, setCurrentPage }}
      />
    </div>
  );
}
