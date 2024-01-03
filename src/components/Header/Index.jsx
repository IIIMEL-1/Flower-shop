import { useEffect } from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetDataAccountQuery } from "../../redux/slices/createApi";
import { getData } from "../../redux/slices/authSlice";

export default function Header() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.addToCartSlice.items);

  const totalCount = items.reduce((sum, obj) => sum + obj.count, 0);

  const fetchDataAccount = () => {
    const token = localStorage.getItem("token");

    const { data, error, isLoading } = useGetDataAccountQuery(token);

    useEffect(() => {
      if (token) {
        if (!isLoading && !error) {
          dispatch(getData({ data, error, isLoading }));
        }
      }
    }, [data, isLoading, error]);
  };

  fetchDataAccount();

  return (
    <div className="container">
      <input type="checkbox" id="menu" />
      <label htmlFor="menu">
        <img src="/static/images/menu.svg" alt="menu" />
      </label>

      <nav className={style.navbar}>
        <div>
          <Link to={"/"}>каталог</Link>
          <Link to={"/"}>скидки</Link>
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
