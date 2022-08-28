import React from 'react';
import TableFragment from "./TableFragment";
import {IProject} from "../../../models/ProjectModels";
import styles from './table.module.scss'

const Table = ({project}: {project: IProject}) => {
    return (
        <table className={styles.table}>
            <thead>
            <tr className={styles.heading}>
                <td className={styles.item}>Organizations Performing Work</td>
                <td className={styles.item}>Role</td>
                <td className={styles.item}>Type</td>
                <td className={styles.item}>Location</td>
            </tr>
            </thead>
            <tbody>
            <TableFragment
                key={project.leadOrganization.organizationId}
                organ={project.leadOrganization}
            />
            {project.supportingOrganizations.map((organ) => (
                <TableFragment key={organ.organizationId} organ={organ} />
            ))}
            </tbody>
        </table>
    );
};

export default Table;