import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense";

function App() {
  const expenses = [
    {id: 1, title: "Car Insurance", price: 294.23, date: new Date(2023, 7, 22)},
    {id: 2, title: "Desktop", price: 100.23, date: new Date(2023, 6, 18)},
    {id: 3, title: "Bike", price: 300.23, date: new Date(2023, 6, 12)},
    {id: 4, title: "Car", price: 2000.23, date: new Date(2023, 5, 7)},
  ];
  return (
    <div className="App">
      <h2>Let's Start!</h2>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );

  // return React.createElement('div', {className: "App"}, React.createElement('h2', {}, React.createElement(Expenses, {items:expenses})))
  // return React.createElement('div',{className: "App"}, React.createElement('h2', {}, "Let's Start!"), React.createElement(Expenses, {items:expenses}))
}

export default App;




