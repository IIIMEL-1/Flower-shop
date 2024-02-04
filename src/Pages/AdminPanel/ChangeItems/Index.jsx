import style from "./ChangeItems.module.scss";
import { Link } from "react-router-dom";

export default function ChangeItems() {
  return (
    <section id={style.itemsPage}>
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link>
          {" > "} <Link to={"/Admin/ChangeItems"}>Панель администратора</Link>
          {" > "} <Link to={"/Admin/ChangeItems"}>Изменение Items</Link>
        </div>
      </div>
      <div className={style.itemsBlock}>
        <form onSubmit={() => console.log(1)} className={style.addItem}>
          <h2>Добавить новый Item:</h2>
          <div>
            <div className={style.dataCard}>
              <h3>Данные</h3>
              <div>
                <p>Ссылка на фото товара</p>
                <input type="text" name="url" placeholder="Ссылка" />
              </div>
              <div>
                <p>Название товара</p>
                <input type="text" name="title" placeholder="Название" />
              </div>
              <div>
                <p>Цена товара</p>
                <input type="text" name="price" placeholder="Цена" />
              </div>
              <div>
                <p>Букет с ...</p>
                <input type="text" name="bucket" placeholder="Букет с ..." />
              </div>
              <div>
                <p>Цветовая гамма</p>
                <input type="text" name="color" placeholder="Цветовая гамма" />
              </div>
              <div>
                <p>Упаковано</p>
                <select name="packed">
                  <option>Букетом</option>
                  <option>В коробке</option>
                  <option>В корзине</option>
                </select>
              </div>
              <div>
                <p>Рейтинг товара</p>
                <select name="rating">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className={style.detailedDataCard}>
              <h3>Детализация данных:</h3>
              <div>
                <p>Дополнительные фото</p>
                <div>
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <button className="sendForm">Добавить товар</button>
        </form>
        <form>
          <h2>Удалить существующий Item:</h2>
        </form>
        <form>
          <h2> Редактировать существующий Item:</h2>
        </form>
      </div>
    </section>
  );
}
