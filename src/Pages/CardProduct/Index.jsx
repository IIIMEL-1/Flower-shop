import { useEffect, useRef, useState } from "react";
import style from "./CardProduct.module.scss";
import { useParams } from "react-router";
import axios from "axios";
import Skeleton from "./Skeleton.jsx";
import { addItem } from "../../redux/slices/addToCartSlice.js";
import { useDispatch } from "react-redux";

export default function CardProduct() {
  const [product, setProduct] = useState();
  const [isChecked, setIsChecked] = useState(0);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchFlowers() {
      try {
        const { data } = await axios.get(
          "https://64ebe102e51e1e82c577b25b.mockapi.io/products/" + id
        );
        setProduct(data);
      } catch (error) {}
    }

    fetchFlowers();
  }, []);

  if (!product) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Skeleton />
      </div>
    );
  }

  return (
    <section className="sectionBack">
      <div className="container">
        <div className="pageName">
          <p>Главная {">"} Карточка товара</p>
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
                      defaultChecked={product.price === el.price ? true : false}
                      onClick={() => setIsChecked(i)}
                    />
                    <label htmlFor={el.size}>
                      {el.size} <br />
                      {el.price} руб.
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className={style.description}>
              <ul className={style.compositionList}>
                {product.description[isChecked].content.map((el, i) => (
                  <li key={i} className={style.compositionItem}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.addToCartBlock}>
              <div className={style.counter}>
                <button className={style.minus}>
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
                <p> 1 шт.</p>
                <button className={style.plus}>
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
                  <p>{product.price} руб.</p>
                </div>
                <button
                  className="sendForm"
                  onClick={() => dispatch(addItem(product))}
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
