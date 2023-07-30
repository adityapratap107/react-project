import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

const Expenses = ({items}) => {
  // console.log('Expenses Items', props.items)
  return (
    <div>
        {/* MULTIPLE PROPS WAY */}
      <ExpenseItem title={items[0].title} amount={items[0].price} date={items[0].date} />
      <ExpenseItem title={items[1].title} amount={items[1].price} date={items[1].date} />
      <ExpenseItem title={items[2].title} amount={items[2].price} date={items[2].date} />
      <ExpenseItem title={items[3].title} amount={items[3].price} date={items[3].date} />

      {/* SINGLE PROP WAY */}
      {/* <ExpenseItem expense={items[0]} />
      <ExpenseItem expense={items[1]} />
      <ExpenseItem expense={items[2]} />
      <ExpenseItem expense={items[3]} /> */}

      {/* OBJECT DESTRUCTURING WAY */}
      {/* <ExpenseItem title={items[0].title} amount={items[0].price} date={items[0].date} />
      <ExpenseItem title={items[1].title} amount={items[1].price} date={items[1].date} />
      <ExpenseItem title={items[2].title} amount={items[2].price} date={items[2].date} />
      <ExpenseItem title={items[3].title} amount={items[3].price} date={items[3].date} /> */}
    </div>
  )
}

export default Expenses;