import { useEffect, useState } from "react";
import style from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector((state) => state.addToCartSlice.items);

  const totalCount = items.reduce((sum, obj) => sum + obj.count, 0);

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(!isOpen);
  }, [location]);

  return (
    <div className="container">
      <input
        type="checkbox"
        id="menu"
        onChange={(e) => console.log(e.target.checked)}
      />
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
