import style from "./OpenPhotoReview.module.scss";

type TypePhotoReviewProps = {
  data: {
    name: string;
    date: string;
    time: string;
    city: string;
    photoUrl: string;
    estimation: number;
    review: string;
  };
};

export default function OpenPhotoReview({
  setIsOpen,
  data: { name, date, time, city, photoUrl, estimation, review },
}: TypePhotoReviewProps) {
  return (
    <div className={style.opacity} onClick={() => setIsOpen(false)}>
      <div className={style.modal}>
        <div className={style.reviewer}>
          <div>
            <p>{name}</p>
            <span>{date}</span>
            <span>{time}</span>

            <span>г. {city}</span>
          </div>
        </div>
        <img src={photoUrl} />
        <div className={style.reviewText}>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
}
