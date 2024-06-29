import { useState } from "react";
import style from "./PasswordChange.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useChangeDataMutation } from "../../../redux/slices/createApi";
import { log } from "console";

export default function PasswordChange() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  const { password, id } = useSelector((state) => state.authSlice.userDetails);

  const [changePassword, { data, isLoading, status }] = useChangeDataMutation();

  const handleChangePassword = (event) => {
    event.preventDefault();

    changePassword({ id, password: newPassword });
  };

  return (
    <section id={style.passwordPage}>
      <div className="pageName">
        <div>
          <Link to={"/"}>Главная</Link>
          {" > "} <Link to={"/PersonalAccount/Profile"}>Личный кабинет</Link>
          {" > "}{" "}
          <Link to={"/PersonalAccount/PasswordChange"}>Смена пароля</Link>
        </div>
      </div>
      <div className={style.passwordBlock}>
        {status === "success" ? (
          <div className="opacity">
            <div className="modal">
              <img src="/images/party-popper.webp" alt="" />
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

        <form onSubmit={handleChangePassword}>
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
              /* currentPassword === password && */
              newPassword.length >= 6 && newPassword === repeatNewPassword
                ? false
                : true
            }
            className="sendForm"
          >
            Сохранить
          </button>
        </form>
      </div>
    </section>
  );
}
