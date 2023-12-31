import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense";

const DUMMY_EXPENSES =  [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 800, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 400,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expensesData, setExpensesData] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log('expense in app js', expense)
    // setExpensesData([...expensesData, expense])
    setExpensesData((prev) => {
      return [expense, ...prev]
    })
  }
 
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expensesData}/>
    </div>
  );

  // return React.createElement('div', {className: "App"}, React.createElement('h2', {}, React.createElement(Expenses, {items:expenses})))
  // return React.createElement('div',{className: "App"}, React.createElement('h2', {}, "Let's Start!"), React.createElement(Expenses, {items:expenses}))
}

export default App;




