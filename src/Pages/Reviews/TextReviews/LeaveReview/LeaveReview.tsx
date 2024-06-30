import style from "./LeaveReview.module.scss";
import { useState } from "react";
import { useTypedSelector } from "@hooks/useTypedSelector";
import { useAddReviewMutation } from "@redux/slices/createApi";
import { Link } from "react-router-dom";

export default function LeaveReview() {
  const userDetails = useTypedSelector((state) => state.authSlice.userDetails);
  const [addReview, { status }] = useAddReviewMutation();

  const [review, setReview] = useState("");
  const [estimation, setEstimation] = useState(5);

  function getCurrentTime() {
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const date = new Date()
    .toLocaleDateString("en-US", { timeZone: "Asia/Bangkok" })
    .replace(/\//g, "-");

  const time = getCurrentTime();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (review) {
      addReview({
        date,
        time,
        name: userDetails.fullName,
        email: userDetails.email,
        city: userDetails.city,
        review,
        estimation,
      });

      setReview("");
    }
  };

  return (
    <div className={style.leaveReview}>
      {userDetails === null ? (
        <div>
          <p>Зарегистрируйтесь чтобы оставить отзыв</p>
          <Link to={"/Login"} className="sendForm">
            Зарегистрироваться
          </Link>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <textarea
            placeholder="Ваш комментарий"
            onChange={(event) => setReview(event.target.value)}
            value={review}
          />

          <div className={style.sendReviews}>
            <div>
              <p>Оцените нашу работу:</p>
              <div>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    onClick={() => setEstimation(i + 1)}
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.12 9.88005C21.0781 9.74719 20.9996 9.62884 20.8935 9.53862C20.7873 9.4484 20.6579 9.38997 20.52 9.37005L15.1 8.58005L12.67 3.67005C12.6008 3.55403 12.5027 3.45795 12.3853 3.39123C12.2678 3.32451 12.1351 3.28943 12 3.28943C11.8649 3.28943 11.7322 3.32451 11.6147 3.39123C11.4973 3.45795 11.3991 3.55403 11.33 3.67005L8.89999 8.58005L3.47999 9.37005C3.34211 9.38997 3.21266 9.4484 3.10652 9.53862C3.00038 9.62884 2.92186 9.74719 2.87999 9.88005C2.83529 10.0124 2.82846 10.1547 2.86027 10.2907C2.89207 10.4268 2.96124 10.5512 3.05999 10.6501L6.99999 14.4701L6.06999 19.8701C6.04642 20.0091 6.06199 20.1519 6.11497 20.2826C6.16796 20.4133 6.25625 20.5267 6.36999 20.6101C6.48391 20.6912 6.61825 20.7389 6.75785 20.7478C6.89746 20.7566 7.03675 20.7262 7.15999 20.6601L12 18.1101L16.85 20.6601C16.9573 20.7189 17.0776 20.7499 17.2 20.7501C17.3573 20.7482 17.5105 20.6995 17.64 20.6101C17.7537 20.5267 17.842 20.4133 17.895 20.2826C17.948 20.1519 17.9636 20.0091 17.94 19.8701L17 14.4701L20.93 10.6501C21.0305 10.5523 21.1015 10.4283 21.1351 10.2922C21.1687 10.1561 21.1634 10.0133 21.12 9.88005Z"
                      fill={i + 1 <= estimation ? "#e3d12b" : "#E0E0E0"}
                    />
                  </svg>
                ))}
              </div>
            </div>
            <button disabled={review ? false : true} className="sendForm">
              Отправить
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
