import { useState, useEffect } from "react";
import Card from "./Card/Index.jsx";
import Skeleton from "./Card/Skeleton.jsx";
import style from "./Products.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlowers } from "../../../../redux/slices/flowerSlice.js";

export default function Index() {
  const dispatch = useDispatch();
  const { status, products, totalPages } = useSelector(
    (state) => state.flowerSlice
  );

  const [sortBy, setSortBy] = useState("title");

  const [isActive, setIsActive] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const list = [
    { title: "Новизне", sortBy: "title" },
    { title: "Цена по возрастанию", sortBy: "price" },
    { title: "Цена по убыванию", sortBy: "-price" },
    { title: "Популярности", sortBy: "rating" },
  ];

  useEffect(() => {
    dispatch(fetchFlowers({ sortBy, currentPage }));
  }, [sortBy, currentPage]);

  return (
    <div className={style.productBlock} id="catalog">
      <div className={style.sort} onClick={() => setIsOpen(!isOpen)}>
        <div className={style.sortBy}>
          <p>Сортировать по:</p>
        </div>
        <div>
          <div
            className={`${style.sortList}` + (isOpen ? ` ${style.active}` : "")}
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
            <img src="/static/images/arrow.svg" alt="" />
          </div>
        </div>
      </div>
      <div id={style.productsContainer}>
        {status === "error" ? (
          <div className={style.error}>Error</div>
        ) : status === "loading" ? (
          [...new Array(6)].map((_, i) => <Skeleton key={i} />)
        ) : (
          products.map((el) => (
            <Card
              key={el.id}
              id={el.id}
              title={el.title}
              description={el.description}
              image={el.image}
              price={el.price}
            />
          ))
        )}
      </div>
      <div className="pageList">
        {[...new Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage == i + 1 ? " active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
