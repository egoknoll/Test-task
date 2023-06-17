import { nanoid } from "nanoid";
import React from "react";
import TableCell from "../TableCell/TableCell";
import { ITodo } from "../../App";


interface ITable {
    todos: ITodo[]
}


const Table = ({ todos }: ITable) => {

    return (
        <div>
            <TableCell id={'id'} userId={'user'} title={'title'} completed={'completed'} />
            {todos ? todos.map(el => <TableCell
                key={nanoid()}
                id={el.id} 
                userId={el.userId}
                title={el.title}
                completed={el.completed}
                />) : null}
        </div>
    )
}

export default Table