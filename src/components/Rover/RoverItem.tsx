import React from "react";
import { useGetRoverInfoQuery } from "../../store/nasa/nasa.api";
import {IRoverObj} from "../../models/models";
import {Link} from "react-router-dom";

const RoverItem: React.FC<IRoverObj> = ({ name, image }) => {
  const { isLoading, isError, data: rover } = useGetRoverInfoQuery(name);

  if (isLoading) {
    return <p className='text-2xl text-center'>Loading...</p>;
  }
  if (isError) {
    return <p>Some error</p>;
  }

  return (
    <div className="flex-auto text-center border-2 rounded-md shadow-md mx-2 my-2">
      <div className="text-2xl bg-blue-500 rounded-lg shadow-md text-white py-1 px-2.5 m-1">
        <h1>Марсоход {rover?.name}</h1>
        <div>Статус: {rover?.status}</div>
      </div>
      <div className="grid justify-items-center">
        <img
          className="rounded-md my-1"
          src={image}
          alt={"roverImage"}
          width={"400"}
        />
      </div>
      <div className="border-2 rounded-md text-lg underline mx-2 mb-3">
        Дата запуска: {rover?.launch_date}
        <span className="pl-4">
          Дата посадки на Марс: {rover?.landing_date}
        </span>
      </div>
      <div>
        Самая последняя дата Земли, с которой существуют фотографии:{" "}
        <span className="font-bold">{rover?.max_date}</span>
      </div>
      <div>
        Самый последний марсианский сол, с которого существуют фотографии:{" "}
        <span className="font-bold">{rover?.max_sol}</span>
      </div>
      <div className="text-2xl my-3">
        Всего сделано фото:{" "}
        <span className="bg-blue-800 rounded-lg shadow-md text-white py-1 px-2.5 m-1">
          {rover?.total_photos}
        </span>
      </div>
        <Link to={`/rovers/${rover?.name}`}>
      <div className="text-lg bg-blue-500 rounded-lg shadow-md text-white py-3 px-2.5 m-1 transition duration-500 ease-in-out hover:bg-blue-800">
        ПОСМОТРЕТЬ ФОТО
      </div></Link>
    </div>
  );
};

export default RoverItem;
