import React from 'react';
import styles from "./ProjecCard.module.scss";
import {IProject} from "../../models/ProjectModels";

const ManagementList = ({project}: {project: IProject}) => {
    return (
        <div className={styles.management}>
            <b className="text-2xl">Project Management</b>
            <ul>
                <b>Program Director: </b>
                {project.programDirectors.map((dir) => (
                    <li key={dir.contactId}>
                        <a href={"mailto:" + dir.primaryEmail}>{dir.fullName}</a>
                    </li>
                ))}
            </ul>
            <ul>
                <b>Program Manager:</b>
                {project.programManagers.map((manager) => (
                    <li key={manager.contactId}>
                        <a href={"mailto:" + manager.primaryEmail}>{manager.fullName}</a>
                    </li>
                ))}
            </ul>
            <ul>
                <b>Program Manager:</b>
                {project.projectManagers.map((manager) => (
                    <li key={manager.contactId}>
                        <a href={"mailto:" + manager.primaryEmail}>{manager.fullName}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManagementList;