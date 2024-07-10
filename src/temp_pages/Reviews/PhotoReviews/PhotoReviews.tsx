import { useEffect, useState } from "react";
import PhotoReview from "./PhotoReview/PhotoReview";
import LeaveReview from "./LeaveReview/LeaveReview";
import style from "./PhotoReviews.module.scss";
import { Link } from "react-router-dom";
import { useGetPhotoReviewsQuery } from "@redux/slices/createApi";
import PageList from "@components/PageList/PageList";
import OpenPhotoReview from "./PhotoReview/OpenPhotoReview/OpenPhotoReview";
import { IPhotoReview } from "@globalTypes/photoReview.types";

export default function PhotoReviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [dataPhotoReview, setDataPhotoReview] = useState<IPhotoReview | null>(
    null
  );

  const { data, error, isLoading } = useGetPhotoReviewsQuery({ currentPage });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <section id={style.PhotoReviewsPage}>
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link>
          {" > "} <Link to={"/Reviews/TextReviews"}>Отзывы</Link>
        </div>
      </div>
      <div className={style.photoReviewsBlock}>
        <div className={style.photoReviewsList}>
          {isLoading ? (
            <p className={style.loading}>Загрузка...</p>
          ) : error ? (
            <p className={style.loading}>Ошибка</p>
          ) : (
            data.items.map((el: IPhotoReview) => (
              <PhotoReview
                key={el.id}
                id={el.id}
                name={el.name}
                date={el.date}
                time={el.time}
                city={el.city}
                photoUrl={el.photoUrl}
                estimation={el.estimation}
                review={el.review}
                state={{ setIsOpen, setDataPhotoReview }}
              />
            ))
          )}
        </div>
        <div>
          <PageList
            isLoading={isLoading}
            error={error}
            data={data}
            state={{ currentPage, setCurrentPage }}
          />
        </div>
        {isOpen && dataPhotoReview && (
          <OpenPhotoReview setIsOpen={setIsOpen} data={dataPhotoReview} />
        )}
        <LeaveReview />
      </div>
    </section>
  );
}
