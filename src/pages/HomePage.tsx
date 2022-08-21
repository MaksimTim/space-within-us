import React from "react";
import { apiKey, usePicOfTheDayQuery } from "../store/nasa/nasa.api";

const HomePage: React.FC = () => {
  const { isLoading, isError, data } = usePicOfTheDayQuery();


  return (
    <div className="grid justify-items-center p-2 m-10 border-2 rounded-md shadow-md">
      <div className="font-bold">
        Фото дня!
      </div>
      <div className="text-2xl bg-blue-500 rounded-lg shadow-md text-white py-1 px-2.5 m-1">{data?.title}</div>
      <a href={data?.hdurl}>
        <img className="rounded-lg" src={data?.url} />
      </a>

      <div className='text-2xl'> {data?.date} </div>
      <div className='font-thin text-lg p-4 indent-8'>{data?.explanation}</div>
    </div>
  );
};

export default HomePage;
