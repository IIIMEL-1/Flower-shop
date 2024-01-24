import style from "./PageList.module.scss";

export default function PageList({
  isLoading,
  error,
  data,
  state: { currentPage, setCurrentPage },
}) {
  return (
    <div className={style.pageList}>
      {isLoading ? (
        <div className={style.error}>
          <p>Загрузка...</p>
        </div>
      ) : error ? (
        <div className={style.error}>
          <p>Ошибка</p>
        </div>
      ) : (
        [...new Array(data.meta.total_pages)].map((_, i) => (
          <button
            key={i}
            className={currentPage == i + 1 ? `${style.active}` : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))
      )}
    </div>
  );
}
