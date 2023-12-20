import style from "./Reviews.module.scss";

import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { fetchReviews } from "../../redux/slices/reviewsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Reviews() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, []);

  return (
    <section className="sectionBack">
      <div className="container">
        <div className={style.ReviewBlock}>
          <div className={style.asideBlock}>
            <div className="pageName">
              <h3>Отзывы</h3>
            </div>
            <div className={style.aside}>
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
