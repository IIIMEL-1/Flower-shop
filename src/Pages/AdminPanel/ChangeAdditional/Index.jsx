import style from "./ChangeAdditional.module.scss";
import { Link } from "react-router-dom";

export default function ChangeAdditional() {
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
      <div className={style.additionalBlock}></div>
    </section>
  );
}
