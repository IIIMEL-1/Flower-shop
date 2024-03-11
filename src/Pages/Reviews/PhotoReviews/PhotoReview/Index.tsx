import style from "./PhotoReview.module.scss";

type TypeTextReviewProps = {
  id: number;
  name: string;
  date: string;
  time: string;
  city: string;
  photoUrl: string;
  estimation: number;
  review: string;
};

export default function TextReview({
  id,
  name,
  date,
  time,
  city,
  photoUrl,
  estimation,
  review,
  state: { setIsOpen, setDataPhotoReview },
}: TypeTextReviewProps) {
  return (
    <div key={id} className={style.review}>
      <div className={style.cardInner}>
        <div className={style.front}>
          <img src={photoUrl} alt="photo" />
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
        </div>
        <div
          className={style.back}
          onClick={() => (
            setDataPhotoReview({
              name,
              date,
              time,
              city,
              photoUrl,
              estimation,
              review,
            }),
            setIsOpen(true)
          )}
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
