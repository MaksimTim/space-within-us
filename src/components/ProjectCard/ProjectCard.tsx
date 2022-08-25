import React from "react";
import { IProject } from "../../models/ProjectModels";
import Table from "./Table/Table";
import styles from "./ProjecCard.module.scss";
import ManagementList from "./ManagementList";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        {project.title} <br />
        Status: <b>{project.statusDescription}</b>
      </div>
        <div className='text-center'>id: {project.projectId}</div>
      <div className={styles.heading}>
        <b className="text-2xl">Project Introduction</b>
        <br /> {project.description}
      </div>
      <div className={styles.heading}>
        <b className="text-2xl">Anticipated Benefits</b>
        <br /> {project.description}
      </div>

      <div className="flex justify-center">
        <Table project={project} />
      </div>
      <ManagementList project={project} />
      <div className="font-thin p-1 indent-8">
        <b className="text-2xl">Project Duration:</b> <br />
        <div>
          <span>
          <b>Start: </b>
          {project.startDateString}
        </span>
        <span className="ml-3">
          <b>End: </b>
          {project.endDateString}
        </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
