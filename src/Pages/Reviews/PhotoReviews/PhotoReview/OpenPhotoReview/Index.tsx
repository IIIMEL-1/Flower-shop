import { IPhotoReview } from "@globalTypes/photoReview.types";
import style from "./OpenPhotoReview.module.scss";
import EstimationBlock from "@components/EstimationBlock/EstimationBlock";

type TypePhotoReviewProps = {
  setIsOpen: (state: boolean) => void;
  data: IPhotoReview;
};

export default function OpenPhotoReview({
  setIsOpen,
  data: { name, date, time, city, photoUrl, estimation, review },
}: TypePhotoReviewProps) {
  return (
    <div className={style.opacity}>
      <div className={style.modal}>
        <div className={style.buttonClose} onClick={() => setIsOpen(false)}>
          <span></span>
        </div>
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
        <EstimationBlock estimation={estimation} />
      </div>
    </div>
  );
}
