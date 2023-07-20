import './css/ExpenseDate.css';
const ExpenseDate = (props) => {
    // console.log(dateProvided);
    const mm = props.date.toLocaleString('en-US', {month : 'long'});
    const dd = props.date.toLocaleString('en-US', {day : '2-digit'});
    const yyyy = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{mm}</div>
            <div className="expense-date__year">{yyyy}</div>
            <div className="expense-date__day">{dd}</div>
        </div>
    );
}

export default ExpenseDate;