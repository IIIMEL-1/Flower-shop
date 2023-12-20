import { useDispatch, useSelector } from "react-redux";
import style from "./TextReviews.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviews } from "../../../redux/slices/reviewsSlice";

export default function TextReviews() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const { reviews, totalPages } = useSelector((state) => state.reviewsSlice);

  useEffect(() => {
    dispatch(fetchReviews({ currentPage }));

    /* window.scrollTo(0, 0); */
  }, [currentPage]);

  return (
    <section id={style.reviews}>
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link>
          {" > "} <Link to={"/PersonalAccount/Profile"}>Отзывы</Link>
        </div>
      </div>
      <div className={style.textReviews}>
        {!reviews ? (
          <h1 className={style.loading}>Loading.....</h1>
        ) : (
          reviews.map((el) => (
            <div key={el.id} className={style.review}>
              <div className={style.reviewer}>
                <div>
                  <p>{el.name}</p>
                  <span>{el.date}</span>
                  <span>{el.time}</span>
                  <span>{el.city}</span>
                </div>
                <div>
                  {[...Array(5)].map((star, i) => (
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
                        fill={i + 1 <= el.estimation ? "#F2C94C" : "#E0E0E0"}
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p>{el.review}</p>
            </div>
          ))
        )}

        <div className="pageList">
          {[...Array(totalPages)].map((el, i) => (
            <button
              key={i}
              className={currentPage == i + 1 ? " active" : ""}
              onClick={() => {
                setCurrentPage(i + 1);
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className={style.leaveReview}>
        <form>
          <div>
            <input type="text" placeholder="Василий Петров" />
            <input type="email" placeholder="example@mail.com" />
            <input type="text" placeholder="Владивосток" />
          </div>
          <textarea name="" placeholder="Ваш комментарий"></textarea>
        </form>

        <div className={style.sendReviews}>
          <div>
            <p>Оцените нашу работу</p>
            {[...Array(5)].map((star, i) => (
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
                  fill="#F2C94C"
                />
              </svg>
            ))}
          </div>
          <button className="sendForm">Отправить</button>
        </div>
      </div>
    </section>
  );
}
