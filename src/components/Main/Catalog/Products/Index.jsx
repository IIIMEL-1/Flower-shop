import { useState, useEffect } from "react";
import Card from "./Card/Index.jsx";
import Skeleton from "./Card/Skeleton.jsx";
import style from "./Products.module.scss";
import axios from "axios";

export default function Index() {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  const [isActive, setIsActive] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const list = [
    { title: "Новизне", sortBy: "title" },
    { title: "Цена по возрастанию", sortBy: "price", order: "asc" },
    { title: "Цена по убыванию", sortBy: "price", order: "desc" },
    { title: "Популярности", sortBy: "rating" },
  ];

  useEffect(() => {
    fetch("https://64ebe102e51e1e82c577b25b.mockapi.io/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTotalPages(data.length);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    async function fetchProducts() {
      try {
        const res = await axios.get(
          `https://64ebe102e51e1e82c577b25b.mockapi.io/products?limit=6&page=${page}&sortBy=${sortBy}&order=${order}`
        );

        setProducts(res.data);
        setIsLoading(false);
      } catch (error) {}
    }

    fetchProducts();
  }, [sortBy, order, page]);

  const pages = [];

  function setCount() {
    let count = Math.ceil(totalPages / 6);

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
