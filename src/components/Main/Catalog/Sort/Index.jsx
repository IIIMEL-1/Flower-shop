import style from "./Sort.module.scss";

import Skeleton from "./Skeleton.jsx";
import { useEffect, useState } from "react";

export default function Sort({ setSearch }) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const countAndMap = (arr, keys) => {
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
  };

  /*   useEffect(() => {
    fetch(
      "https://b6c487f79077af26.mokky.dev/items?_select=flower,color,packing"
    )
      .then((res) => res.json())
      .then((data) => {
        const keysToCountAndMap = ["flower", "color", "packing"];
        const result = countAndMap(data, keysToCountAndMap);
        setResult(result);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []); */

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : error ? (
        <div>Error loading data (error)</div>
      ) : (
        <section id={style.sort}>
          <div className={style.searchBlock}>
            <input
              type="text"
              placeholder="Поиск"
              onInput={(el) => setSearch(el.target.value)}
            />
          </div>
          <div className={style.bouquet}>
            <h3>Букет с ...</h3>
            {result.flower.map((el, i) => (
              <div key={i}>
                <input type="checkbox" name="bouquet" id={el[0]} />
                <label htmlFor={el[0]}>
                  {el[0]} ({el[1]})
                </label>
              </div>
            ))}
          </div>
          <div className={style.packed}>
            <h3>Цветы упаковано</h3>
            {result.packing.map((el, i) => (
              <div key={i}>
                <input type="checkbox" name="packed" id={el[0]} />
                <label htmlFor={el[0]}>
                  {el[0]} ({el[1]})
                </label>
              </div>
            ))}
          </div>
          <div className={style.colorScheme}>
            <h3>Цветовая гамма</h3>
            {result.color.map((el, i) => (
              <div key={i}>
                <input type="checkbox" name="color" id={el[0]} />
                <label htmlFor={el[0]}>
                  {el[0]} ({el[1]})
                </label>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
