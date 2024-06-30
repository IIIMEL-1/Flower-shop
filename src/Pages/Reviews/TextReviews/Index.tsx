import style from "./TextReviews.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGetReviewsQuery } from "@redux/slices/createApi";
import PageList from "@components/PageList/Index";
import TextReview from "./TextReview/Index";
import LeaveReview from "./LeaveReview/Index";
import { IReview } from "@globalTypes/review.types";
import EstimationBlock from "@components/EstimationBlock/EstimationBlock";

export default function TextReviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, error, data } = useGetReviewsQuery({ currentPage });

  return (
    <section id={style.textReviewsPage}>
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link>
          {" > "} <Link to={"/PersonalAccount/Profile"}>Отзывы</Link>
        </div>
      </div>
      <div className={style.textReviewsBlock}>
        <div className={style.reviewsList}>
          {isLoading ? (
            <p className={style.loading}>Загрузка...</p>
          ) : error ? (
            <p className={style.loading}>Ошибка</p>
          ) : (
            data.items.map((el: IReview) => (
              <TextReview
                key={el.id}
                id={el.id}
                name={el.name}
                date={el.date}
                time={el.time}
                city={el.city}
                estimation={el.estimation}
                review={el.review}
              />
            ))
          )}
          <PageList
            isLoading={isLoading}
            error={error}
            data={data}
            state={{ currentPage, setCurrentPage }}
          />
        </div>
        <LeaveReview />
      </div>
    </section>
  );
}
