import { IReview } from "@globalTypes/review.types";
import style from "./EstimationBlock.module.scss";

type TypeEstimation = Pick<IReview, "estimation">;

export default function EstimationBlock({ estimation }: TypeEstimation) {
  return (
    <div className={style.estimation}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="15" viewBox="0 0 16 15">
          <path
            d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
            fill={i + 1 <= estimation ? "#e3d12b" : "#E0E0E0"}
          />
        </svg>
      ))}
    </div>
  );
}
