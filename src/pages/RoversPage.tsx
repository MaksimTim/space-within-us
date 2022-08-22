import React from "react";
import RoverItem from "../components/Rover/RoverItem";
import CuriosityImg from "../assets/img/Curiosity.png";
import OpportunityImg from "../assets/img/Opportunity.png";
import SpiritImg from "../assets/img/Spirit.png";
import {IRoverObj} from "../models/models";

const rovers: IRoverObj[] = [
  { name: "curiosity", image: CuriosityImg },
  { name: "opportunity", image: OpportunityImg },
  { name: "spirit", image: SpiritImg },
];

const RoversPage: React.FC = () => {
  return (
    <div className="flex flex-wrap p-2 m-10 border-2 rounded-md shadow-md">
      {rovers.map((roverObj, i) => (
        <RoverItem key={i} name={roverObj.name} image={roverObj.image} />
      ))}
    </div>
  );
};



export default RoversPage;
