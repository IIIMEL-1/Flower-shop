import style from "./Sort.module.scss";

import Skeleton from "./Skeleton.js";
import { useMemo, useState, useCallback, memo, useEffect } from "react";
import { useGetSortDataQuery } from "../../../../redux/slices/createApi.js";
import SortCheckbox from "./SortCheckbox/Index.js";
import { useDispatch, useSelector } from "react-redux";
import { clearData, parseData } from "../../../../redux/slices/sortSlice.js";

function Sort({ isOpen, setIsOpen }) {
  const dispatch = useDispatch();

  const sortList = useSelector((state) => state.sortSlice.data);
  const sortParse = useSelector((state) => state.sortSlice.dataParse);

  const [result, setResult] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const countAndMap = useCallback((arr, keys) => {
    const counts = keys.reduce((acc, key) => {
      acc[key] = arr.reduce((countAcc, item) => {
        const value = item[key];
        countAcc[value] = (countAcc[value] || 0) + 1;
        return countAcc;
      }, {});
      return acc;
    }, {});

    const arrays = keys.reduce((acc, key) => {
      acc[key] = Object.entries(counts[key]);
      return acc;
    }, {});

    return arrays;
  }, []);

  const { data, isLoading, error } = useGetSortDataQuery();

  useMemo(() => {
    if (data) {
      return setResult(countAndMap(data, ["flower", "color", "packing"]));
    }
  }, [data]);

  const applyFilters = () => {
    dispatch(parseData());
    setIsOpen(false);
  };

  const resetFilters = () => {
    dispatch(clearData());
    setIsReset(true);
  };

  useEffect(() => {
    dispatch(clearData());
  }, []);

  return (
    <section
      className={isOpen ? `${style.sort} ${style.active}` : `${style.sort}`}
    >
      {isLoading ? (
        <Skeleton />
      ) : error ? (
        <div>{`${error.status} ${error.data ? error.data.message : ""}`}</div>
      ) : (
        result && (
          <>
            <div className={style.closeSort}>
              <button onClick={() => setIsOpen(false)}>Фильтры</button>
            </div>
            <div className={style.searchBlock}>
              <input type="text" placeholder="Поиск" />
            </div>
            <SortCheckbox
              sortBy={result.flower}
              sortType={"flower"}
              title={"Букет с ..."}
              isReset={isReset}
            />
            <SortCheckbox
              sortBy={result.packing}
              sortType={"packing"}
              title={"Цветы упакованы"}
              isReset={isReset}
            />
            <SortCheckbox
              sortBy={result.color}
              sortType={"color"}
              title={"Цветовая гамма"}
              isReset={isReset}
            />

            <div>
              <button
                className="sendForm"
                disabled={!!!sortList.length}
                onClick={applyFilters}
              >
                Применить фильтры
              </button>
            </div>

            <div>
              <button
                className="sendForm"
                disabled={!!!sortParse}
                onClick={resetFilters}
              >
                Сбросить фильтры
              </button>
            </div>
          </>
        )
      )}
    </section>
  );
}

export default memo(Sort);
