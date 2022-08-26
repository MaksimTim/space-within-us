import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  setCategory,
} from "../../store/kinopoisk/filterKino.slice";
import styles from "./FilmSort.module.scss";

const categories = [
  { name: "Все", type: "ALL" },
  { name: "Фильмы", type: "FILM" },
  { name: "Мини сериалы", type: "MINI_SERIES" },
  { name: "Тв сериалы", type: "TV_SERIES" },
  { name: "Тв шоу", type: "TV_SHOW" },
];

const Categories = () => {
  const { categoryType } = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((cat) => (
          <li
            className={categoryType === cat.type ? styles.liActive : ""}
            key={cat.type}
            onClick={() => dispatch(setCategory(cat.type))}
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
