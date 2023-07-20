// import {useState} from "react";
import './css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from "../UI/Card";
// function ExpenseItem(props) {
const ExpenseItem = (props) => {

    const expense = props.expense;

    // const [title, setTitle] = useState(expense.title);

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={expense.date}/>
                <div className="expense-item__description">
                    <h2>{expense.title}</h2>
                    <div className="expense-item__price">${expense.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem