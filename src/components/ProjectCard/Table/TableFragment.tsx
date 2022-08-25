import React from 'react';
import {SupportingOrganization} from "../../../models/ProjectModels";
import styles from './table.module.scss'

const TableFragment = ({organ}: {organ: SupportingOrganization} ) => {
    return (
        <tr>
            <td className={styles.item}>
                {organ.organizationName} (
                {organ.acronym})
            </td>
            <td className={styles.item}>Supporting Organization</td>
            <td className={styles.item}>{organ.organizationTypePretty}</td>
            <td className={styles.item}>
                {organ.city},
                 {organ.stateTerritory?.name}
            </td>
        </tr>
    );
};

export default TableFragment;