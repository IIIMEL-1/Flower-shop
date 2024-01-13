import style from "./TextReviews.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  useAddReviewMutation,
  useGetReviewsQuery,
} from "../../../redux/slices/createApi";
import { useSelector } from "react-redux";
import Modal from "../../../components/Modal/Index";

export default function TextReviews() {
  const email = useSelector((state) => state.authSlice.userDetails.email);

  const [currentPage, setCurrentPage] = useState(1);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [review, setReview] = useState("");

  const [estimation, setEstimation] = useState(1);

  const { isLoading, error, data } = useGetReviewsQuery({ currentPage });

  const [addReview, { status }] = useAddReviewMutation();

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
    addReview({
      date,
      time,
      name,
      email,
      city,
      review,
      estimation,
    });
    setName("");
    setCity("");
    setReview("");
  };

  return (
    <section id={style.textReviewsPage}>
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link>
          {" > "} <Link to={"/PersonalAccount/Profile"}>Отзывы</Link>
        </div>
      </div>
      <div className={style.textReviewsBlock}>
        <div className={style.reviewsList}>
          {isLoading ? (
            <h1 className={style.loading}>Loading.....</h1>
          ) : (
            data.items.map((el) => (
              <div key={el.id} className={style.review}>
                <div className={style.reviewer}>
                  <div>
                    <p>{el.name}</p>
                    <span>{el.date}</span>
                    <span>{el.time}</span>

                    <span>г. {el.city}</span>
                  </div>
                  <div>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                          fill={i + 1 <= el.estimation ? "#e3d12b" : "#E0E0E0"}
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <div
                  className={style.reviewText}
                  onClick={(e) => console.dir(e.target.offsetHeight)}
                >
                  <p>{el.review}</p>
                </div>
              </div>
            ))
          )}
          <div className="pageList">
            {isLoading ? (
              <h4>Loading...</h4>
            ) : (
              [...Array(data.meta.total_pages)].map((_, i) => (
                <button
                  key={i}
                  className={currentPage == i + 1 ? " active" : ""}
                  onClick={() => {
                    setCurrentPage(i + 1);
                  }}
                >
                  {i + 1}
                </button>
              ))
            )}
          </div>
        </div>

        <div className={style.leaveReview}>
          {status === "pending" ? (
            <Modal />
          ) : status === "fulfilled" ? (
            <Modal
              img={"/static/images/party-popper.webp"}
              text={"Отзыв успешно отправлен!"}
              buttonText={"Закрыть"}
            />
          ) : (
            ""
          )}
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                placeholder="Василий Петров"
                onChange={(el) => setName(el.target.value)}
                value={name}
              />
              <input
                type="text"
                placeholder="Владивосток"
                onChange={(el) => setCity(el.target.value)}
                value={city}
              />
            </div>
            <textarea
              placeholder="Ваш комментарий"
              onChange={(el) => setReview(el.target.value)}
              value={review}
            />

            <div className={style.sendReviews}>
              <div>
                <p>Оцените нашу работу</p>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      onMouseEnter={(e) => setEstimation(i + 1)}
                      key={i}
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                        fill={i + 1 <= estimation ? "#e3d12b" : "#E0E0E0"}
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <button className="sendForm">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
