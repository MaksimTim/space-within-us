import React from "react";
import { IProject } from "../../models/ProjectModels";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div className="flex-auto border-2 rounded-md shadow-md mx-2 my-2">
      <div className=" text-center text-2xl bg-blue-500 rounded-lg shadow-md text-white py-1 px-2.5 m-1">
        {project.title} <br />
        Status: <b>{project.statusDescription}</b>
      </div>
      <div className="font-thin p-1 indent-8">
        <b  className='text-2xl'>Project Introduction</b><br/> {project.description}
      </div>
      <div className="font-thin p-1 indent-8">
        <b className='text-2xl'>Anticipated Benefits</b><br/> {project.description}
      </div>
      <div>{project.projectId}</div>
    </div>
  );
};

export default ProjectCard;
