import React, { useState } from "react";
import {apiKey, useCuriosityInfoQuery} from "../store/nasa/nasa.api";

const RoversPage = () => {
  const [value, setValue] = useState("");
const {isLoading, isError, data} = useCuriosityInfoQuery(value)
    console.log(data)

  return (
    <div className="grid justify-items-center p-2 m-10 border-2 rounded-md shadow-md">
      Выбери дату:
      <input
        className={"border-blue-500"}
        type={"date"}
        name={"date-rover"}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        min={"2014-01-01"}
        max={"2019-01-01"}
      />
      <div>

      </div>
    </div>
  );
};

export default RoversPage;
