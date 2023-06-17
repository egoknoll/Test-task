import React, { useEffect, useState } from 'react';

import './App.css';
import Table from './components/Table/Table';
import { getCurrentTodos, getUrl } from './utils/utils';
import Pagination from './components/Pagination/Pagination';
import Navigation from './components/Navigation/Navigation';
export interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}


function App() {

  const [todos, setTodos] = useState<ITodo[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState('')
  const [filteByCompletedValue, setFilterByCompletedValue] = useState('')
  const [sortValue, setSortValue] = useState('')
  const [orderValue, setOrderValue] = useState('')

  const changeCurrentPage = (page: number) => setCurrentPage(page)
  const changeSearchValue = (value: string) => setSearchValue(value)
  const changeFilterByCompletedValue = (value: string) => setFilterByCompletedValue(value)
  const changeSortValue = (value: string) => setSortValue(value)
  const changeOrderValue = (value: string) => setOrderValue(value)

  const todosPerPage = 15
  const currentTodos = getCurrentTodos(todosPerPage, currentPage, todos)

  useEffect(() => {
    (async () => {
      const response = await fetch(getUrl(searchValue, filteByCompletedValue, sortValue, orderValue))
      const data = await response.json()
      setTodos(data)
    })()
  }, [searchValue, filteByCompletedValue, sortValue, orderValue])

  return (
          <div className="container">
            <Navigation
              searchValue={searchValue}
              filteByCompletedValue={filteByCompletedValue}
              changeSearchValue={changeSearchValue}
              changeCurrentPage={changeCurrentPage}
              changeSortValue={changeSortValue}
              changeFilterByCompletedValue={changeFilterByCompletedValue}
              changeOrderValue={changeOrderValue}
            />
            <Table todos={currentTodos} />
            <Pagination  
              todosPerPage={todosPerPage} 
              totalTodos={todos.length} 
              currentPage={currentPage}
              changeCurrentPage={changeCurrentPage}
            />
          </div>
  );
}

export default App;
