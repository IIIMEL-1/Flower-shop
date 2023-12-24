import { useEffect, useState } from "react";
import style from "./CardProduct.module.scss";
import { useParams } from "react-router";
import axios from "axios";
import Skeleton from "./Skeleton.jsx";
import { addItem } from "../../redux/slices/addToCartSlice.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function CardProduct() {
  const [product, setProduct] = useState();
  const [size, setSize] = useState(0);

  const [count, setCount] = useState(1);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchFlowers() {
      try {
        const { data } = await axios.get(
          `https://b6c487f79077af26.mokky.dev/items/${id}`
        );
        setProduct({ ...data, count: 1 });
        data.description.forEach((el, i) => {
          el.size === "Стандартный" ? setSize(i) : "";
        });
      } catch (error) {
        return <h2>Упс кажется что-то пошло не так...</h2>;
      }
    }

    fetchFlowers();
  }, []);

  if (!product) {
    return (
      <section className="sectionBack">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Skeleton />
        </div>
      </section>
    );
  }

  const onClickAdd = () => {
    const item = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description[size],
      count,
    };

    dispatch(addItem(item));
  };

  return (
    <section className="sectionBack">
      <div className="container">
        <div className="pageName">
          <div>
            <Link to={"/"}>Главная</Link> {">"}{" "}
            <Link to={"/Cart"}>Карточка товара</Link>
          </div>
        </div>
        <div className={style.productCard}>
          <div className={style.imgBlock}>
            <img src={product.image} alt="" />
          </div>
          <div className={style.descriptionBlock}>
            <p>{product.title}</p>
            <div className={style.sizeBlock}>
              <p>Размер:</p>
              <div className={style.changeSize}>
                {product.description.map((el, i) => (
                  <div key={i}>
                    <input
                      type="radio"
                      name="changeSize"
                      id={el.size}
                      defaultChecked={el.size === "Стандартный" ? true : false}
                      onClick={() => setSize(i)}
                    />
                    <label htmlFor={el.size}>
                      {el.size} <br />
                      {el.price.toLocaleString()} руб.
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className={style.description}>
              <ul className={style.compositionList}>
                {product.description[size].content.map((el, i) => (
                  <li key={i} className={style.compositionItem}>
                    {el}
                  </li>
                ))}
                <li>
                  Цветовая гамма букета и его оформление может отличаться исходя
                  из наличия в магазине.
                </li>
              </ul>
            </div>
            <div className={style.addToCartBlock}>
              <div className={style.counter}>
                <button
                  className={style.minus}
                  onClick={() => (count < 2 ? "" : setCount(count - 1))}
                  disabled={count < 2 ? true : false}
                >
                  <svg
                    width="9"
                    height="2"
                    viewBox="0 0 9 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="1"
                      x2="9"
                      y2="1"
                      stroke="#5B4A58"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <p>{count} шт.</p>
                <button
                  className={style.plus}
                  onClick={() => setCount(count + 1)}
                >
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M0 4.5H9M4.5 9L4.5 0"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
              <div className={style.addToCart}>
                <div className={style.price}>
                  <p>
                    {(product.description[size].price * count).toLocaleString()}{" "}
                    руб.
                  </p>
                </div>
                <button
                  className="sendForm"
                  onClick={() => (onClickAdd(), setCount(1))}
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
