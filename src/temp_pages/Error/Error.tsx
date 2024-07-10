import style from "./Error.module.scss";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="sectionBack">
      <div className="container">
        <div className={style.wrapper}>
          <img src="/images/Error.png" alt="Error" />
          <h3>Упс... Что-то пошло не так.</h3>
          <p>Перейдите на главную, а мы пока все починим.</p>
          <Link className="sendForm" to={"/"}>
            главная
          </Link>
        </div>
      </div>
    </section>
  );
}
