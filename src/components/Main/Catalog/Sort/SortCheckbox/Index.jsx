import React from "react";
import { useDispatch } from "react-redux";
import { getSort } from "../../../../../redux/slices/sortSlice.js";

export default function SortCheckbox({ sortBy, title, sortType }) {
  const dispatch = useDispatch();

  const getDataSort = (el) => {
    dispatch(getSort(`${sortType}[]=${el[0]}`));
  };

  return (
    <div>
      <h3>{title}</h3>
      {sortBy.map((el, i) => (
        <div key={i}>
          <input type="checkbox" name={sortType} id={el[0]} />
          <label onClick={(e) => getDataSort(el)} htmlFor={el[0]}>
            {`${el[0]} (${el[1]})`}
          </label>
        </div>
      ))}
    </div>
  );
}
