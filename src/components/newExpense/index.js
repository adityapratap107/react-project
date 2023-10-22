import React from 'react';
import ExpenseForm from './ExpenseForm';
import "./index.css";
const  NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        console.log('hiidata', enteredExpenseData)
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log("myDataexpense___new", expenseData)
        props.onAddExpense(expenseData)
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;  