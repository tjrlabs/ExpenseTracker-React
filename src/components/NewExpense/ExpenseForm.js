import {useState} from "react";
import './css/ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    /*const [userInput, setUserInput] = useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : '',
    })*/

    const inputChangeHandler = (identifier,value) => {

        if(identifier === 'title'){
            setEnteredTitle(value);
        }else if(identifier === 'amount'){
            setEnteredAmount(value);
        }else if(identifier === 'date'){
            setEnteredDate(value);
        }
    }

    /*const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)

        /!*setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            }
        })*!/
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        /!*setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        })*!/
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        /!*setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            }
        })*!/
    }*/


    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }

        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');

        props.onSaveExpenseData(expenseData);
    }

    const cancelHandler = event => {
        props.onCancelExpenseData();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={(event) => inputChangeHandler('title',event.target.value)} value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount',event.target.value)} value={enteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-09-30" onChange={(event) => inputChangeHandler('date',event.target.value)} value={enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="cancel" onClick={cancelHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;