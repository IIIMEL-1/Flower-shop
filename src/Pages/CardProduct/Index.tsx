import { useEffect, useState } from "react";
import style from "./CardProduct.module.scss";
import { useParams } from "react-router";
import axios from "axios";
import Skeleton from "./Skeleton.jsx";
import { addItem } from "../../redux/slices/addToCartSlice.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import RelatedProducts from "/src/components/RelatedProducts/Index";

type TypeProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: [
    {
      price: number;
      size: string;
      content: string[];
    }
  ];
  count: number;
};

export default function CardProduct() {
  const [product, setProduct] = useState<TypeProduct | null>(null);
  const [images, setImages] = useState([""]);
  const [currentImg, setCurrentImg] = useState(0);
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

        const standardSizeIndex = data.description.findIndex(
          (el: { size: string }) => el.size === "Стандартный"
        );
        setSize(standardSizeIndex !== -1 ? standardSizeIndex : 0);

        setImages([data.image, ...data.images]);
      } catch (error) {
        console.error(`${error.status} ${error.data.message}`);
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
      size: product.description[size].size,
      price: product.description[size].price,
      count,
    };

    dispatch(addItem(item));
    setCount(1);
  };

  return (
    <section>
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
              <img src={images[currentImg]} alt="" />
              <div>
                {images.map((img, i) => (
                  <div
                    key={i}
                    onClick={(e) => setCurrentImg(i)}
                    className={i === currentImg ? style.active : ""}
                  >
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
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
                        defaultChecked={
                          el.size === "Стандартный" ? true : false
                        }
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
                    Цветовая гамма букета и его оформление может отличаться
                    исходя из наличия в магазине.
                  </li>
                </ul>
                <div className={style.gradient}></div>
              </div>
              <div className={style.addToCartBlock}>
                <div className="counter">
                  <button
                    className="minus"
                    onClick={() => setCount(count < 2 ? 1 : count - 1)}
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
                  <button className="plus" onClick={() => setCount(count + 1)}>
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
                      {(
                        product.description[size].price * count
                      ).toLocaleString()}{" "}
                      руб.
                    </p>
                  </div>
                  <button className="sendForm" onClick={() => onClickAdd()}>
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts />
      <div id={style.placeAnOrder} className="container">
        <button className="sendForm">Оформить заказ</button>
      </div>
    </section>
  );
}
