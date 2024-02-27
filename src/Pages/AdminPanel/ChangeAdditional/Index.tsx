import style from "./ChangeAdditional.module.scss";
import { Link } from "react-router-dom";

export default function ChangeAdditional() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id={style.additionalPage}>
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link>
          {" > "} <Link to={"/Admin/ChangeItems"}>Панель администратора</Link>
          {" > "}{" "}
          <Link to={"/Admin/ChangeAdditional"}>Изменение Additional</Link>
        </div>
      </div>
      <div className={style.additionalBlock}>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <h3>Название</h3>
              <input type="text" placeholder="Название" />
            </div>
            <div>
              <h3>Цена товара</h3>
              <input type="tel" placeholder="Цена" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
