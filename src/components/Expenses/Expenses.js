import React, { useState } from 'react'
import Card from '../card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import ExpenseList from '../ExpenseList';
import ExpensesChart from '../ExpensesChart';
import ExpensesFilter from '../ExpensesFilter';
import './Expenses.css'

const Expenses = ({items}) => {
  console.log('ITEMS', items);
  // console.log('Expenses Items', props.items)

  const [filteredYear, setFilteredYear] = useState('2023');
  // const [filterInfoText, setFilterInfoText] = useState('2021, 2022 & 2024')

  let filterInfoText = '2021, 2022 & 2024'
   if(filteredYear === '2021') {
      filterInfoText = '2022, 2023 & 2024'
    } else if (filteredYear === '2022') {
      filterInfoText = '2021, 2023 & 2024'
    } else if (filteredYear === '2023') {
      filterInfoText = '2021, 2022 & 2024'
    } else if (filteredYear === '2024') {
      filterInfoText = '2021, 2022 & 2023'
    } 

  const filterChangeHandler = selectedYear => {
    console.log(selectedYear)
    setFilteredYear(selectedYear);
    // if(selectedYear === '2021') {
    //   setFilterInfoText('2022, 2023 & 2024')
    // } else  if (selectedYear === '2022') {
    //   setFilterInfoText('2021, 2023 & 2024')
    // } else if (selectedYear === '2023') {
    //   setFilterInfoText('2021, 2022 & 2024')
    // } else if (selectedYear === '2024') {
    //   setFilterInfoText('2021, 2022 & 2023')
    // } 
  };

  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  // let expensesContent = <p className='date-description'>No Expenses found.</p>;
  // if(filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses?.map((item) => {
  //     return (
  //         <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
  //     );
  //   }) 
  // }

  return (
    <div>
      <Card className='expenses'>

        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <p className='date-description'>Data for years {filterInfoText} is hidden.</p>
        {/* MULTIPLE PROPS WAY */}
      {/* <ExpenseItem title={items[0].title} amount={items[0].price} date={items[0].date} />
      <ExpenseItem title={items[1].title} amount={items[1].price} date={items[1].date} />
      <ExpenseItem title={items[2].title} amount={items[2].price} date={items[2].date} />
      <ExpenseItem title={items[3].title} amount={items[3].price} date={items[3].date} /> */}

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

      {/* Dynamic data */}
     {/* {expensesContent} */}

      <ExpensesChart expenses={filteredExpenses} />

      <ExpenseList items={filteredExpenses} />


      </Card>

    </div>
  )
}

export default Expenses;

