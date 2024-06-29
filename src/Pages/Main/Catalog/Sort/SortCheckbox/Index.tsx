import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSort } from "@redux/slices/sortSlice.js";

type SortCheckboxProps = {
  sortBy: [[string, number]];
  title: string;
  sortType: string;
  isReset: boolean;
};

function SortCheckbox({ sortBy, title, sortType, isReset }: SortCheckboxProps) {
  const dispatch = useDispatch();
  const [checkedStates, setCheckedStates] = useState({});

  useEffect(() => {
    if (isReset) {
      setCheckedStates({});
    }
  }, [isReset]);

  const getDataSort = (el) => {
    dispatch(getSort(`${sortType}[]=${el[0]}`));
    setCheckedStates((prevStates) => ({
      ...prevStates,
      [el[0]]: !prevStates[el[0]],
    }));
  };

  return (
    <div>
      <h3>{title}</h3>
      {sortBy.map((el, i) => (
        <div key={i}>
          <input
            type="checkbox"
            name={sortType}
            id={el[0]}
            checked={!!checkedStates[el[0]]}
            onChange={() => getDataSort(el)}
          />
          <label htmlFor={el[0]}>
            {el[0]}
            <span>{` (${el[1]})`}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default React.memo(SortCheckbox);
