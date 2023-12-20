import style from "./PhotoReviews.module.scss";
import { Link } from "react-router-dom";

export default function PhotoReviews() {
  return (
    <section>
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link>
          {" > "} <Link to={"/PersonalAccount/Profile"}>Отзывы</Link>
        </div>
      </div>
      <div></div>
    </section>
  );
}
