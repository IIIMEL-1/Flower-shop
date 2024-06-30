import { IReview } from "@globalTypes/review.types";
import style from "./TextReview.module.scss";
import EstimationBlock from "@components/EstimationBlock/EstimationBlock";
import ReadMore from "./ReadMore/ReadMore";

export default function TextReview({
  id,
  name,
  date,
  time,
  city,
  estimation,
  review,
}: IReview) {
  return (
    <div key={id} className={style.review}>
      <div className={style.reviewer}>
        <div>
          <p>{name}</p>
          <span>{date}</span>
          <span>{time}</span>

          <span>г. {city}</span>
        </div>
        <EstimationBlock estimation={estimation} />
      </div>
      <div className={style.reviewText}>
        <ReadMore review={review} />
      </div>
    </div>
  );
}
