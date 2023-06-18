import React from "react";
import styles from './TableCell.module.css'
import { getCompletedValue } from "../../utils/utils";

interface ITableCell {
    id: number | string
    userId: number | string
    title: number | string
    completed: boolean | string
}

const TableCell = ({ id, userId, title, completed }: ITableCell) => {
    return(
        <div className={styles.container}>
            <div className={styles.todoId}>{id}</div>
            <div className={styles.todoId}>{userId}</div>
            <div className={styles.todoTitle}>{title}</div>
            <div className={styles.todoCompleted}>{getCompletedValue(completed)}</div>
        </div>
    )
}


export default TableCell