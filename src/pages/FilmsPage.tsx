import React from "react";
import { useGetSpaceFilmsQuery } from "../store/kinopoisk/kinopoisk.api";
import FilmsList from "../components/FilmsList/FilmsList";
import Categories from "../components/FilmsList/Sort";
import { useSelector } from "react-redux";
import { selectFilter } from "../store/kinopoisk/filterKino.slice";
import Pagination from "../components/Pagination/Pagination";

const FilmsPage = () => {
  const filters = useSelector(selectFilter);
  const { data } = useGetSpaceFilmsQuery(filters);
const totalCount = data?.totalPages || 1
  return (
    <div className="grid justify-items-center p-2 m-10 border-2 rounded-md shadow-md">
      <div className='p-2 m-1 border-2 rounded-md'>
        Сортировка:
        <Categories />
      </div>
      <div className="flex flex-col">
        {data &&
          data.items.map((item) => (
            <FilmsList key={item.kinopoiskId} item={item} />
          ))}
      </div>
        <div>
            <Pagination totalPages={totalCount} />
        </div>
    </div>
  );
};

export default FilmsPage;
