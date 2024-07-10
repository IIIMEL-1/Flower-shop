import { useState } from "react";
import style from "./ReadMore.module.scss";
import { IReview } from "@globalTypes/review.types";

type TypeReview = Pick<IReview, "review">

export default function ReadMore({ review }: TypeReview) {
  const [isFull, setIsFull] = useState<boolean>(false);

  return (
    <div className={style.readMore}>
      <p>
        {isFull
          ? review
          : review.length >= 280
          ? review.slice(0, 280) + "..."
          : review}
      </p>
      {review.length >= 280 && (
        <button className="sendForm" onClick={() => setIsFull(!isFull)}>
          {isFull ? "Показать меньше" : "Показать больше"}
        </button>
      )}
    </div>
  );
}
