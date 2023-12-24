import { useState } from "react";
import style from "./PasswordChange.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/slices/changeDataSlice";

export default function PasswordChange() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  const { id, password } = useSelector((state) => state.authSlice.authRes.data);
  const { dataRes, status } = useSelector((state) => state.changeDataSlice);

  const dispatch = useDispatch();

  return (
    <section>
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link>
          {" > "} <Link to={"/PersonalAccount/Profile"}>Личный кабинет</Link>
          {" > "}{" "}
          <Link to={"/PersonalAccount/PasswordChange"}>Смена пароля</Link>
        </div>
      </div>
      <div>
        <div className={style.PasswordBlock}>
          {status === "success" ? (
            <div className="opacity">
              <div className="modal">
                <img src="/static/images/party-popper.webp" alt="" />
                <p>Вы успешно сменили пароль!</p>
                <Link className="sendForm" to={"/PersonalAccount/Profile"}>
                  Вернутся назад
                </Link>
              </div>
            </div>
          ) : status === "loading" ? (
            <div className="opacity">
              <div className="modal">
                <div className="loading">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <form onClick={(el) => el.preventDefault()} action="#">
            <div>
              <h5>Текущий пароль</h5>
              <input
                name="current-password"
                autoComplete="current-password"
                type="password"
                onChange={(el) => setCurrentPassword(el.target.value)}
                value={currentPassword}
              />
            </div>
            <div>
              <h5>Новый пароль</h5>
              <input
                type="password"
                onChange={(el) => setNewPassword(el.target.value)}
                value={newPassword}
                maxLength={18}
              />
            </div>
            <div>
              <h5>Повторите новый пароль</h5>
              <input
                type="password"
                onChange={(el) => setRepeatNewPassword(el.target.value)}
                value={repeatNewPassword}
              />
            </div>
            <button
              disabled={
                currentPassword === password &&
                newPassword.length >= 6 &&
                newPassword === repeatNewPassword
                  ? false
                  : true
              }
              onClick={() => dispatch(fetchData({ id, password: newPassword }))}
              className="sendForm"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
