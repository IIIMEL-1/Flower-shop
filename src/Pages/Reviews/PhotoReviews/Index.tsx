import { useEffect, useState } from "react";
import PhotoReview from "./PhotoReview/Index";
import LeaveReview from "./LeaveReview/Index";
import style from "./PhotoReviews.module.scss";
import { Link } from "react-router-dom";
import { useGetPhotoReviewsQuery } from "../../../redux/slices/createApi";
import PageList from "../../../components/PageList/Index";
import OpenPhotoReview from "./PhotoReview/OpenPhotoReview/Index";

type TypePhotoReviewProps = {
  id: number;
  name: string;
  date: string;
  time: string;
  city: string;
  photoUrl: string;
  estimation: number;
  review: string;
};

export default function PhotoReviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [dataPhotoReview, setDataPhotoReview] =
    useState<TypePhotoReviewProps | null>(null);

  const { isLoading, error, data } = useGetPhotoReviewsQuery({ currentPage });

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
          ) : (
            data.items.map((el) => (
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
                email={el.email}
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
        {isOpen && (
          <OpenPhotoReview setIsOpen={setIsOpen} data={dataPhotoReview} />
        )}

        <LeaveReview />
      </div>
    </section>
  );
}
