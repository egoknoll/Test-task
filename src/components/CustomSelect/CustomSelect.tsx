import { nanoid } from "nanoid";
import React, { ChangeEvent } from "react";

interface ICustomSelect {
    title: string
    contents: string[]
    values: string[]
    changeFunction: (arg: string) => void
    changeCurrentPage: (arg: number) => void
}

const CustomSelect = ({ title, contents, values, changeCurrentPage, changeFunction }: ICustomSelect) => {

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        changeFunction(e.target.value)
        changeCurrentPage(1)
    }

    return (
        <div className="col">
        <select 
            className="form-select form-select mb-3" 
            aria-label=".form-select-lg example"
            onChange={(e) => handleSelectChange(e)}
        >
            <option value='' defaultValue='' key={2}>{title}</option>
            {contents.map((el, index) => <option key={index} value={values[index]}>{el}</option>)} 
        </select>
    </div>
    )
}

export default CustomSelect