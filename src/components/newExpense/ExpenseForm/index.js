import React, { useState } from 'react';
import "./index.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState();
    const [enteredAmount, setEnteredAmount] = useState();
    const [enteredDate, setEnteredDate] = useState();

    // Alternate way to create only single state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const onTitleChange = (event) => {
        console.log("title changed", event.target.value)
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // setUserInput((prevState)=> {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value,
        //     }
        // })
    }
    const onAmountChange = (event) => {
        console.log("amount changed", event.target.value)
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }
    const onDateChange = (event) => {
        console.log("date changed", event.target.value)
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

    // change handler
    const inputChangeHandler = (identifier, value) => {
        if(identifier === 'title') {
            setEnteredTitle(value)
        } else if (identifier === 'date') {
            setEnteredDate(value)
        } else  {
            setEnteredAmount(value)
        }
    }

    // submit handler
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)    // parse date string and converted into date object
        }

        console.log(expenseData);
        props.onSaveExpenseData(expenseData)

        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={onTitleChange} />
                    {/* <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} value={enteredTitle}/> */}
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={onAmountChange} value={enteredAmount} />
                    {/* <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)} value={enteredAmount} /> */}
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min={"2023-05-01"} max={"2024-02-31"} onChange={onDateChange} value={enteredDate} />
                    {/* <input type="date" min={"2023-05-01"} max={"2024-02-31"} onChange={(event) => inputChangeHandler('date', event.target.value)} value={enteredDate} /> */}
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;



