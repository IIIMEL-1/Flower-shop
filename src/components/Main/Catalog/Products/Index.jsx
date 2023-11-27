import { useState, useEffect } from "react";
import Card from "./Card/Index.jsx";
import Skeleton from "./Card/Skeleton.jsx";
import style from "./Products.module.scss";
import axios from "axios";

export default function Index({ search }) {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  const [isActive, setIsActive] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const list = [
    { title: "Новизне", sortBy: "title" },
    { title: "Цена по возрастанию", sortBy: "price" },
    { title: "Цена по убыванию", sortBy: "-price" },
    { title: "Популярности", sortBy: "rating" },
  ];

  useEffect(() => {
    setIsLoading(true);

    async function fetchProducts() {
      try {
        const res = await axios.get(
          `https://b6c487f79077af26.mokky.dev/items?limit=6&page=${page}&sortBy=${sortBy}` /* &search=${search} */
        );

        setProducts(res.data.items);
        setTotalPages(res.data.meta.total_pages);
        setIsLoading(false);
      } catch (error) {}
    }

    fetchProducts();
  }, [sortBy, order, page, search]);

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
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : products.map((el) => (
              <Card
                key={el.id}
                id={el.id}
                title={el.title}
                price={el.price}
                description={el.description}
                image={el.image}
              />
            ))}
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
