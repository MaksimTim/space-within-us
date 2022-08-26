import React from "react";
import { usePicOfTheDayQuery } from "../store/nasa/nasa.api";

const HomePage: React.FC = () => {

  const { isLoading, isError, data } = usePicOfTheDayQuery();

    if (isLoading) {
        return <p className='text-2xl text-center'>Loading...</p>;
    }
    if (isError) {
        return <p>Some error</p>;
    }

  return (
    <div className="grid justify-items-center p-2 m-10 border-2 rounded-md shadow-md">
      <div className="font-bold">Фото дня!</div>
      <div className="text-2xl bg-blue-500 rounded-lg shadow-md text-white py-1 px-2.5 m-1">
        {data?.title}
      </div>
      {data?.media_type === "video" && (
        <iframe
          width="560"
          height="360"
          src={data?.url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {data?.media_type === "image" && (
        <a href={data?.hdurl}>
          <img className="rounded-lg" src={data?.url} alt={'photoOfDay'} />
        </a>
      )}
      <div className="text-2xl"> {data?.date} </div>
      <div className="font-thin text-lg p-4 indent-8">{data?.explanation}</div>
    </div>
  );
};

export default HomePage;
