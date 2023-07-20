import {useState} from "react";
import './css/Expenses.css'
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const expenses = props.data;
    // console.log(expenses);
    // console.log("here");

    const [filteredYear, changeFilteredYear] = useState('2020');

    const filterChangeHandler = (filterSelected) => {
        changeFilteredYear(filterSelected);
    }

    let updatedExpenses = expenses.filter((obj) => {
        return (filteredYear === obj.date.getFullYear().toString());
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onFilterChange={filterChangeHandler} selectedFilter={filteredYear}/>
                <ExpensesChart expenses={updatedExpenses} />
                <ExpensesList expenses={updatedExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;