import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './styles.css';

const ExpenseList = (props) => {
    // let expensesContent = <p className='date-description'>No Expenses found.</p>;
    if(props.items.length === 0) {
        return <h2 className='expenses-list_fallback '>Found no expense.</h2>
    }
    return (<ul className='expenses-list'>
      {
        props.items?.map((item) => {
            return (
                <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
            )
          })
      }  
    </ul>
    )
}

export default ExpenseList;