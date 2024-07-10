import themeSlice from "@redux/slices/themeSlice";
import style from "./Background.module.scss";
import { useTypedSelector } from "@hooks/useTypedSelector";

export default function Background() {
  const theme = useTypedSelector((state) => state.themeSlice.theme);

  return (
    <section
      className={
        !theme || theme === "light"
          ? `${style.background}`
          : `${style.background} + ${style.dark}`
      }
    >
      <div className="container">
        <div className={style.logo}>
          <p>
            <span>ДОСТАВКА</span> ЦВЕТОВ В ГОРОДЕ
          </p>
          <p>ВЛАДИВОСТОК</p>
        </div>
      </div>
    </section>
  );
}
