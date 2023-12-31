// import {useState} from "react";
import './css/ExpenseFilter.css'

const ExpenseFilter = (props) => {
    //const [filterValue,changeFilterValue] = useState('');

    const filterChangeHandler = (event) => {
        //changeFilterValue(event.target.value);
        let value = event.target.value;
        props.onFilterChange(value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={filterChangeHandler} value={props.selectedFilter}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;