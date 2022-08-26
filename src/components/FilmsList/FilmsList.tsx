import React from "react";
import { IItem } from "../../models/FilmsModels";

const FilmsList = ({ item }: { item: IItem }) => {
  return (
    <div className="flex flex-row p-2 my-5 border-2 rounded-md shadow-md">
      <div className='basis-1/4'>
        <img src={item.posterUrlPreview} width={"300"} />
      </div>
      <div className='basis-1/2 px-3'>
        <div className='text-xl font-bold'>
          {item.nameRu} <span className='text-orange-400'>{item.year}</span>
        </div>
        <div className='text-gray-500'>{item.nameOriginal}</div>
        <div className='pt-6'>
          Страна:{" "}
          {item.countries.map((c) => (
            <span className='text-blue-800' key={c.country}>{c.country} </span>
          ))}
        </div>
        <div>
          Жанр:{" "}
          {item.genres.map((g) => (
            <span className='text-blue-800' key={g.genre}>{g.genre}</span>
          ))}
        </div>
      </div>
      <div className='basis-1/4 text-center text-2xl border-2 rounded-md'>
        <div className='pt-2'>Kinopoisk: <span className='bg-orange-400 p-1'>{item.ratingKinopoisk}</span></div>
        <div className='pt-3'>IMDb: <span className='bg-green-400 p-1'>{item.ratingImdb}</span></div>
      </div>
    </div>
  );
};

export default FilmsList;
