import { useEffect, useMemo, useState } from "react";
import style from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetDataAccountMutation } from "../../redux/slices/createApi";
import { getData } from "../../redux/slices/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.addToCartSlice.items);
  const totalCount = items.reduce((sum, obj) => sum + obj.count, 0);
  const token = localStorage.getItem("token");

  const [isActive, setIsActive] = useState(false);

  const [getDataUser] = useGetDataAccountMutation();

  const locate = useLocation();

  const userDataMemoize = useMemo(() => {
    const fetchData = async () => {
      try {
        const { data } = await getDataUser(token);
        dispatch(getData({ data }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (token) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    setIsActive(false);
  }, [locate.pathname]);

  return (
    <div className="container">
      <menu
        className={
          isActive ? style.burgerMenu + " " + style.active : style.burgerMenu
        }
        onClick={(el) => setIsActive(!isActive)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="40px"
          height="40px"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
        </svg>
      </menu>

      <nav className={style.navbar}>
        <div>
          <Link to={"/"}>каталог</Link>
          <Link to={"/Stocks"}>скидки</Link>
          <Link to={"/Reviews/TextReviews"}>отзывы</Link>
          <Link to={"/Contacts"}>контакты</Link>
        </div>
        <div>
          <button>информация для клиента</button>
          <Link className={style.profile} to={"/PersonalAccount/Profile"}>
            <img src="/static/images/Profile-icon.svg" alt="profile" />
          </Link>
          <Link className={style.cart} to={"/Cart"}>
            <img src="/static/images/cart.svg" alt="profile" />
            <p>{totalCount}</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
