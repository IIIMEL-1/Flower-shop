import style from "./Background.module.scss";

export default function Background() {
  return (
    <section className={style.background}>
      <div className="container">
        <div className={style.logo}>
          <p>
            <span>ДОСТАВКА</span> ЦВЕТОВ В ГОРОДЕ
          </p>
          <p>ВЛАДИВОСТОК</p>
        </div>
        <button>КАТАЛОГ</button>
      </div>
    </section>
  );
}
