
import { ITodo } from "../App"


export const getCompletedValue = (arg: boolean | string) => {
    if(arg === true) {
        return 'true'
    } else if (arg === false) {
        return 'false'
    } else {
        return arg
    }
}

export const getCurrentTodos = (todosPerPage: number, currentPage: number, todos: ITodo[]) => {
    const lastTodoIndex = currentPage * todosPerPage
    const firstTodoIndex = lastTodoIndex - todosPerPage
    return todos.slice(firstTodoIndex, lastTodoIndex)
}


export const calcPagesCount = (todosPerPage: number, totalTodos: number) => {
    const result = []
    for(let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
        result.push(i)
    }
    return result
}

export const getUrl = ( searchValue: string, isCompletedValue: string, sortValue: string, orderValue: string) => {
    let url = `https://jsonplaceholder.typicode.com/todos?`
    if(searchValue) {
        url += `&q=${searchValue}`
    }
    if(isCompletedValue) {
        url += `&completed=${isCompletedValue}`
    }
    if(sortValue) {
        url += `&_sort=${sortValue}`
    }
    if(orderValue) {
        url += `&_order=${orderValue}`
    }
    
    return url
}