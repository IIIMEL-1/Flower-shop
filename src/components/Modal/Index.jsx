import style from "./Modal.module.scss";
import { Link } from "react-router-dom";

export default function Modal(props) {
  function removeModal(e) {
    e.target.parentElement.parentElement.remove();
  }

  return (
    <div className={style.opacity}>
      <div className={style.modal}>
        {!props.buttonText ? (
          <div className={style.loading}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            <img src={props.img} alt="" />
            <p>{props.text}</p>
            <Link
              onClick={(e) => removeModal(e)}
              className="sendForm"
              to={props.link}
            >
              {props.buttonText}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
