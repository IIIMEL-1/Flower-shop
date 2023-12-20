import { useState, useEffect } from "react";
import Card from "./Card/Index.jsx";
import Skeleton from "./Card/Skeleton.jsx";
import style from "./Products.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlowers } from "../../../../redux/slices/flowerSlice.js";

export default function Index({ search }) {
  const dispatch = useDispatch();
  const { status, products, totalPages } = useSelector(
    (state) => state.flowerSlice
  );

  const [sortBy, setSortBy] = useState("");

  const [isActive, setIsActive] = useState();
  const [currentPage, setCurrentPage] = useState(1);

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
      <div className={style.sort}>
        <p>Сортировать по:</p>
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
            />
          ))
        )}
      </div>
      <div className="pageList">
        {[...new Array(totalPages)].map((el, i) => (
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
