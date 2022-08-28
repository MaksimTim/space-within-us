import React from "react";
import notFoundImg from "../assets/img/notFound.jpg";

const NotFound = () => {
  return (
    <div className="grid justify-items-center p-2 m-10 border-2 rounded-md shadow-md">
      <h1 className='text-2xl p-1'>Такой страницы не существует.</h1>
        <div>
        <img src={notFoundImg} alt={"notFoundImg"} />
      </div>
        <h1 className='p-2'>А существуешь ли ты?</h1>
    </div>
  );
};

export default NotFound;
