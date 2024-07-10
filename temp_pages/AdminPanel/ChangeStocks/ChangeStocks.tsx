import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./ChangeStocks.module.scss";
import {
  useAddStockMutation,
  useGetSortItemsMutation,
} from "@redux/slices/createApi";

import Card from "src/Pages/Main/Catalog/Products/Card/Card";

export default function ChangeStocks() {
  const [image, setImage] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");

  const [search, setSearch] = useState("");

  const [isActive, setIsActive] = useState(false);

  const [addStock] = useAddStockMutation();

  const [getSortItems, { isLoading, data, error }] = useGetSortItemsMutation();

  const addNewStock = () => {
    const stockData = {
      image,
      description,
      date,
      discount,
    };

    addStock({ stockData });

    setDate(new Date().toISOString().substr(0, 10));
    setDescription("");
    setDiscount("");
    setImage("");
  };

  const searchProductHandler = () => {
    getSortItems(search);

    setSearch("");
    setIsActive(false);
  };

  /*   const func = () => {
    fetch("https://0000000000000000.mokky.dev/items?rating[]=1&rating[]=2", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        discount: 15,
      }),
    });
  }; */

  return (
    <section className="sectionBack">
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link>
          {" > "} <Link to={"/Admin/ChangeItems"}>Панель администратора</Link>{" "}
          {" > "}
          <Link to={"/Admin/ChangeStocks"}>Акции</Link>
        </div>
      </div>
      <div className={style.changeStocksBlock}>
        <div>
          <h2>Добавить акцию</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <h3>Ссылка на изображение:</h3>
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                type="text"
                name="imageUrl"
                placeholder="https://example.com/img1.jpg"
              />
            </div>

            <div className={style.discountAndDate}>
              <div>
                <h3>Дата окончания акции:</h3>
                <input
                  type="date"
                  id="dateEnd"
                  name="dateEnd"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().substr(0, 10)}
                />
              </div>
              <div>
                <h3>Скидка:</h3>
                <input
                  type="tel"
                  name="discount"
                  placeholder="10"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <span>%</span>
              </div>
            </div>

            <div>
              <h3>Описание акции:</h3>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className={style.searchItem}>
              <div className={style.searchInput}>
                <input
                  type="text"
                  name="search"
                  placeholder="Поиск по товарам..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={searchProductHandler}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.29979 1.4C3.59368 1.4 1.39995 3.5938 1.39995 6.3C1.39995 9.00619 3.59368 11.2 6.29979 11.2C9.00589 11.2 11.1996 9.00619 11.1996 6.3C11.1996 3.5938 9.00589 1.4 6.29979 1.4ZM0 6.3C0 2.8206 2.82051 0 6.29979 0C9.77906 0 12.5996 2.8206 12.5996 6.3C12.5996 9.77939 9.77906 12.6 6.29979 12.6C2.82051 12.6 0 9.77939 0 6.3Z"
                      fill="white"
                    />
                    <path
                      d="M9.76017 9.76003C10.0335 9.48666 10.4767 9.48666 10.7501 9.76003L13.795 12.805C14.0683 13.0784 14.0683 13.5216 13.795 13.795C13.5216 14.0683 13.0784 14.0683 12.8051 13.795L9.76017 10.75C9.48681 10.4766 9.48681 10.0334 9.76017 9.76003Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={
                  isActive
                    ? `${style.documents} ${style.active}`
                    : style.documents
                }
              >
                <button
                  className="sendForm"
                  onClick={(e) => setIsActive(!isActive)}
                >
                  Документация
                </button>

                <div className={style.documentsList}>
                  <a
                    href="https://mokky.gitbook.io/welcome/obrashenie-k-resursam/filtraciya"
                    target="_blank"
                  >
                    MOKKY / Документация
                  </a>
                  <div onClick={(e) => setSearch(e.target.textContent)}>
                    category=0&price=0000&rating=0
                  </div>
                  <div onClick={(e) => setSearch(e.target.textContent)}>
                    year[]=0&year[]=0
                  </div>
                  <div onClick={(e) => setSearch(e.target.textContent)}>
                    price[from]=0000&price[to]=0000
                  </div>
                  <div onClick={(e) => setSearch(e.target.textContent)}>
                    details.category.id=0
                  </div>
                </div>
              </div>
              <div className={style.searchData}>
                <p>Найдено: {data?.length}</p>
                <button>Выбрать все</button>
              </div>
              <div className={style.listItems}>
                {isLoading ? (
                  <p>Загрузка...</p>
                ) : error ? (
                  <p>{error.message}</p>
                ) : data ? (
                  data.map((el) => (
                    <Card
                      key={el.id}
                      id={el.id}
                      title={el.title}
                      description={el.description}
                      image={el.image}
                      price={el.price}
                      mini={true}
                    />
                  ))
                ) : (
                  <p>Нет данных</p>
                )}
              </div>
            </div>
            <div>
              <button
                onClick={addNewStock}
                className="sendForm"
                disabled={!image | !description | !discount ? true : false}
              >
                Добавить акцию
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2>Изменить акцию:</h2>
          <form></form>
        </div>
        <div>
          <h2>Удалить акцию:</h2>
          <form></form>
        </div>
      </div>
    </section>
  );
}
