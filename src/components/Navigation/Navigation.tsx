import React, { ChangeEvent } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";

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
                <CustomSelect
                    title="Completed?"
                    values={['true', 'false']}
                    contents={['True', 'False']}
                    changeCurrentPage={changeCurrentPage}
                    changeFunction={changeFilterByCompletedValue}
                />
            </div>
            <div className="row">
                <CustomSelect
                    title="Sort by"
                    values={['id', 'title']}
                    contents={['Id', 'Title']}
                    changeCurrentPage={changeCurrentPage}
                    changeFunction={changeSortValue}
                />
                <CustomSelect
                    title="Order"
                    values={['asc', 'desc']}
                    contents={['Ascending', 'Descending']}
                    changeCurrentPage={changeCurrentPage}
                    changeFunction={changeOrderValue}
                />
            </div>
        </div>
    )
}

export default Navigation