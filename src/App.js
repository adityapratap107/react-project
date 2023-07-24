import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

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
      
      {/* MULTIPLE PROPS WAY */}
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].price} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].price} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].price} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].price} date={expenses[3].date} /> */}

      {/* SINGLE PROP WAY */}
      {/* <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <ExpenseItem expense={expenses[3]} /> */}

      {/* OBJECT DESTRUCTURING WAY */}
      <ExpenseItem title={expenses[0].title} amount={expenses[0].price} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].price} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].price} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].price} date={expenses[3].date} />

    </div>
  );
}

export default App;
