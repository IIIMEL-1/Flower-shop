import EstimationBlock from "@components/EstimationBlock/EstimationBlock";
import style from "./PhotoReview.module.scss";

import { IPhotoReview } from "@globalTypes/photoReview.types";

interface IPhotoReviewProps extends IPhotoReview {
  state: {
    setIsOpen: (state: boolean) => void;
    setDataPhotoReview: (state: IPhotoReview) => void;
  };
}

export default function PhotoReview({
  id,
  name,
  date,
  time,
  city,
  photoUrl,
  estimation,
  review,
  state: { setIsOpen, setDataPhotoReview },
}: IPhotoReviewProps) {
  return (
    <div key={id} className={style.review}>
      <div className={style.cardInner}>
        <div className={style.front}>
          <img src={photoUrl} alt="photo" />
          <EstimationBlock estimation={estimation} />
        </div>
        <div
          className={style.back}
          onClick={() => {
            setDataPhotoReview({
              name,
              date,
              time,
              city,
              photoUrl,
              estimation,
              review,
            }),
              setIsOpen(true);
          }}
        >
          <div className={style.reviewer}>
            <div>
              <p>{name}</p>
              <span>{date}</span>
              <span>{time}</span>

              <span>г. {city}</span>
            </div>
          </div>
          <div className={style.reviewText}>
            <p>{review}</p>
          </div>
          <div className={style.gradient}></div>
        </div>
      </div>
    </div>
  );
}
