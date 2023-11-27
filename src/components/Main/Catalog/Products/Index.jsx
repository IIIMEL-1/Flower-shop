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
  const [page, setPage] = useState(1);

  const list = [
    { title: "Новизне", sortBy: "title" },
    { title: "Цена по возрастанию", sortBy: "price" },
    { title: "Цена по убыванию", sortBy: "-price" },
    { title: "Популярности", sortBy: "rating" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(fetchFlowers({ sortBy, page }));
    };

    fetchProducts();
  }, [sortBy, page, search]);

  const pages = [];

  function setCount() {
    let count = totalPages;

    for (let i = 1; i < count + 1; i++) {
      pages.push(i);
    }
  }

  setCount();
  return (
    <div className={style.productBlock} id="catalog">
      <div className={style.sort}>
        <p>Сортировать по:</p>
        {list.map((el, i) => (
          <button
            key={i}
            className={isActive === i ? "active" : ""}
            onClick={() => (
              setSortBy(el.sortBy),
              setOrder(el.order),
              setPage(1),
              setIsActive(i)
            )}
          >
            {el.title}
          </button>
        ))}
      </div>
      <div id={style.productsContainer}>
        {status === "error" ? (
          <div>Error</div>
        ) : status === "loading" ? (
          [...new Array(6)].map((_, i) => <Skeleton key={i} />)
        ) : (
          products.map((el) => (
            <Card
              key={el.id}
              id={el.id}
              title={el.title}
              price={el.price}
              description={el.description}
              image={el.image}
            />
          ))
        )}
      </div>
      <div className={style.pageList}>
        {pages.map((el, i) => (
          <button
            key={i}
            className={page == i + 1 ? " active" : ""}
            onClick={() => setPage(i + 1)}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}
