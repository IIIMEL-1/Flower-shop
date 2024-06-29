import React from "react";
import { Link } from "react-router-dom";
import style from "./Stocks.module.scss";
import Stock from "./Stock/Index";
import { useGetStocksQuery } from "@redux/slices/createApi";

export default function Stocks() {
  const { data, isLoading, error } = useGetStocksQuery();

  return (
    <section className="sectionBack">
      <div className="container">
        <div className="pageName">
          <div>
            <Link to={"/"}>Главная</Link>
            {" > "} <Link to={"/Stocks"}>Акции</Link>
          </div>
          <h3>Акции</h3>
        </div>
        <div className={style.stocksList}>
          {isLoading ? (
            <div className={style.error}>
              <p>Загрузка...</p>
            </div>
          ) : error ? (
            <p className={style.error}>Ошибка</p>
          ) : data.length ? (
            data.map((el) => (
              <Stock
                key={el.id}
                img={el.image}
                date={el.date}
                description={el.description}
                discount={el.discount}
              />
            ))
          ) : (
            <div className={style.error}>
              <p>Акций нет :(</p>
              <Link className="sendForm" to={"/"}>
                каталог
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
