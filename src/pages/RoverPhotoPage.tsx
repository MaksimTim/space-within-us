import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useGetRoverPhotosQuery} from "../store/nasa/nasa.api";
import RoverPhotoItem from "../components/Rover/RoverPhotoItem";

const RoverPhotoPage = () => {
    const [value, setValue] = useState('')
    const { name } = useParams()

    const {isLoading,isError,data: photos} = useGetRoverPhotosQuery({name, value}, {skip: value.length < 1})

    const onClickGetPhotos = (e) => {
        e.preventDefault()

    }

    useEffect(() => {

    },[value, name])

  return (
    <div className="grid justify-items-center p-2 m-10 border-2 rounded-md shadow-md">
      <div>
        <span className='text-2xl'>Выбери дату:</span>
        <input
            className="text-lg bg-blue-100 rounded-md shadow-md py-1 px-2.5 m-1 transition duration-500 ease-in-out hover:bg-blue-200"
          type={"date"}
          name={"date-rover"}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          min={"2014-01-01"}
          max={"2019-01-01"}
        />
      </div>
        <button className="text-lg bg-blue-500 rounded-lg shadow-md text-white py-3 px-2.5 m-1 transition duration-500 ease-in-out hover:bg-blue-800"
        onClick={onClickGetPhotos}
        >
            Показать фото
        </button>
        <div className='flex flex-wrap justify-center'>
            {photos?.map((item) => <RoverPhotoItem key={item.id} {...item}/>)}
        </div>
    </div>
  );
};

export default RoverPhotoPage;