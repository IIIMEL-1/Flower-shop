import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function Reviews() {
  return (
    <section className="sectionBack">
      <div className="container">
        <div className="generalBlock">
          <div className="asideBlock">
            <div className="pageName">
              <h3>Отзывы</h3>
            </div>
            <div className="aside">
              <Link to={"/Reviews/TextReviews"}>Текстовые отзывы</Link>
              <Link to={"/Reviews/PhotoReviews"}>Фотоотзывы</Link>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}
