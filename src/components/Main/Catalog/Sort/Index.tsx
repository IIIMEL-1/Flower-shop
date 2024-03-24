import style from "./Sort.module.scss";

import Skeleton from "./Skeleton.jsx";
import { useMemo, useState, useCallback, memo } from "react";
import { useGetSortDataQuery } from "../../../../redux/slices/createApi.js";
import SortCheckbox from "./SortCheckbox/Index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { clearData, parseData } from "../../../../redux/slices/sortSlice.js";

function Sort() {
  const dispatch = useDispatch();

  console.log("render-sort");

  const sortList = useSelector((state) => state.sortSlice.data);
  const sortParse = useSelector((state) => state.sortSlice.dataParse);

  const [result, setResult] = useState(false);

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
  };

  const resetFilters = () => {
    dispatch(clearData());
  };

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : error ? (
        (console.log(error),
        (
          <div>{`${error.status} ${error.data ? error.data.message : ""}`}</div>
        ))
      ) : result ? (
        <section id={style.sort}>
          <div className={style.searchBlock}>
            <input type="text" placeholder="Поиск" />
          </div>
          <SortCheckbox
            sortBy={result.flower}
            sortType={"flower"}
            title={"Букет с ..."}
          />
          <SortCheckbox
            sortBy={result.packing}
            sortType={"packing"}
            title={"Цветы упакованы"}
          />
          <SortCheckbox
            sortBy={result.color}
            sortType={"color"}
            title={"Цветовая гамма"}
          />
          {sortList.length ? (
            <div>
              <button className="sendForm" onClick={applyFilters}>
                Применить фильтры
              </button>
            </div>
          ) : (
            ""
          )}
          {sortParse ? (
            <div>
              <button className="sendForm" onClick={resetFilters}>
                Сбросить фильтры
              </button>
            </div>
          ) : (
            ""
          )}
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default memo(Sort);
