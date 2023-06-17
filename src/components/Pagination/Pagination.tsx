import React from "react";
import { calcPagesCount } from "../../utils/utils";
import { nanoid } from "nanoid";

interface IPagination {
    todosPerPage: number
    totalTodos: number
    currentPage: number
    changeCurrentPage: (arg: number) => void
}

const Pagination = ({ todosPerPage, totalTodos, currentPage, changeCurrentPage }: IPagination) => {
    const pages = calcPagesCount(todosPerPage, totalTodos)
    return (
        <div className='d-flex mt-5 mb-5'>
            {pages.map(page => <button 
            type="button"
            key={nanoid()} 
            onClick={() => changeCurrentPage(page)}
            className={`btn btn-dark btn-sm m-1 ${page === currentPage ? 'disabled' : ''}`}>
                {page}
            </button>)}
        </div>
    )
}

export default Pagination