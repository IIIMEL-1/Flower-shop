import style from "./PageList.module.scss";

type TypePageListProps = {
  isLoading: boolean;
  error?: {};
  data: { meta: { total_pages: number }; items: number[] };
  state: { currentPage: number; setCurrentPage: (i: number) => void };
};

export default function PageList({
  isLoading,
  error,
  data,
  state: { currentPage, setCurrentPage },
}: TypePageListProps) {
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
        [...new Array(data.meta?.total_pages)].map((_, i) => (
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
