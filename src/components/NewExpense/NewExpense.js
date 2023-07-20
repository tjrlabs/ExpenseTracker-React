import './css/NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";
const NewExpense = (props) => {

    const [formShown,changeFormStatus] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onReceivedExpenseFormData(expenseData);
        changeFormStatus(false);
    }

    const cancelExpenseDataHandler = () => {
        changeFormStatus(false);
    }

    const addNewExpenseBtnHandler = () => {
        changeFormStatus(true);
    }

    if(!formShown){
        return (
            <div className="new-expense">
                <button onClick={addNewExpenseBtnHandler}>Add New Expense</button>
            </div>
        );
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={cancelExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;