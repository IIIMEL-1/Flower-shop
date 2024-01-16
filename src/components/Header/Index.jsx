import { useEffect } from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetDataAccountMutation } from "../../redux/slices/createApi";
import { getData } from "../../redux/slices/authSlice";

export default function Header() {
  const dispatch = useDispatch();

  const [getDataUser, { data, error, isLoading }] = useGetDataAccountMutation();

  const items = useSelector((state) => state.addToCartSlice.items);

  const totalCount = items.reduce((sum, obj) => sum + obj.count, 0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const { data } = await getDataUser(token);
          dispatch(getData({ data, isLoading, error }));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
