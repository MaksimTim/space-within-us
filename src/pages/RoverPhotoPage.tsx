import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetRoverPhotosQuery } from "../store/nasa/nasa.api";
import RoverPhotoItem from "../components/Rover/RoverPhotoItem";
import { useSelector } from "react-redux";
import { selectRover } from "../store/nasa/nasa.slice";

const RoverPhotoPage = () => {
  //дата, взятая из инпута
  const [value, setValue] = useState("");
  const { name } = useParams();
  const rovers = useSelector(selectRover);
  const [fetchPhotos, { isLoading, isError, data: photos }] =
    useLazyGetRoverPhotosQuery();

  const onClickGetPhotos = () => {
    fetchPhotos({ name, value, page: 1 });
  };

  const currentRover = rovers.find((obj) => obj.name === name);

  return (
    <div className="grid justify-items-center p-2 m-10 border-2 rounded-md shadow-md">
      <div>
        <span className="text-2xl">Выбери дату:</span>
        <input
          className="text-lg bg-blue-100 rounded-md shadow-md py-1 px-2.5 m-1 transition duration-500 ease-in-out hover:bg-blue-200"
          type={"date"}
          name={"date-rover"}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          min={currentRover?.landing_date}
          max={currentRover?.max_date}
        />
      </div>
      <button
        className="text-lg bg-blue-500 rounded-lg shadow-md text-white py-3 px-2.5 m-1 transition duration-500 ease-in-out hover:bg-blue-800"
        onClick={onClickGetPhotos}
      >
        Показать фото
      </button>
      <div className="flex flex-wrap justify-center">
        {isLoading && <p className="text-2xl text-center">Loading...</p>}
        {isError && <p>Some error</p>}
        {photos &&
          photos.map((item) => <RoverPhotoItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default RoverPhotoPage;
