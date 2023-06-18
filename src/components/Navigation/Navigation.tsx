import React, { ChangeEvent } from "react";

interface INavigation {
    searchValue: string
    filteByCompletedValue: string
    changeSearchValue: (arg: string) => void
    changeCurrentPage: (arg: number) => void
    changeFilterByCompletedValue: (arg: string) => void
    changeSortValue: (arg: string) => void
    changeOrderValue: (arg: string) => void
}

const Navigation = ({ 
        searchValue,
        changeSearchValue, 
        changeCurrentPage, 
        changeFilterByCompletedValue,
        changeSortValue,
        changeOrderValue 
    }: INavigation) => {

    const handleSearch = (e: ChangeEvent<HTMLInputElement> ) => {
        changeSearchValue(e.target.value)
        changeCurrentPage(1)
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>, changeFunction: (arg: string) => void) => {
        changeFunction(e.target.value)
        changeCurrentPage(1)
    }

    return (
        <div className="container-m text-center">
            <div className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Title</span>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search" 
                            aria-label="Username" 
                            aria-describedby="basic-addon1"
                            value={searchValue} 
                            onChange={(e) => handleSearch(e)}
                        />
                    </div>
                </div>
                <div className="col">
                    <select 
                        className="form-select form-select mb-3" 
                        aria-label=".form-select-lg example"
                        onChange={(e) => handleSelectChange(e, changeFilterByCompletedValue)}
                    >
                        <option value='' defaultValue=''>Completed?</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <select 
                    className="form-select form-select mb-3" 
                    aria-label=".form-select-lg example"
                    onChange={(e) => handleSelectChange(e, changeSortValue)}
                    >
                        <option value='' defaultValue=''>Sort by</option>
                        <option value="id">Id</option>
                        <option value="title">Title</option>
                    </select>
                </div>
                <div className="col">
                    <select 
                    className="form-select form-select mb-3" 
                    aria-label=".form-select-lg example"
                    onChange={(e) => handleSelectChange(e, changeOrderValue)}
                    >
                        <option value='' defaultValue={''}>Order</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Navigation