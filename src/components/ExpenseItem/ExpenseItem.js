import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../card/Card";
import React, { useState } from "react";

// function ExpenseItem({title, date, amount}) {
function ExpenseItem(props) {
    
    // const month = props.date.toLocaleString('en-US', {month: 'long'});
    // const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    // const year = props.date.getFullYear();

    
    
    // let title = props.title;
    // const clickHandler = () => {
    //   console.log("updated!!!");
    //   title = "Updated!"
    // };

    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
      setTitle("Updated")
      console.log(title);
    };

    

  return (
      // <div className="expense-item">
      //     <div className=''>{props.date.toISOString()}</div>
      //     <div className='expense-description'>
      //         <h2>{props.title}</h2>
      //         <div className='expense-price'>${props.amount}</div>
      //     </div>
      // </div>

    // Alternative way
    // <div className="expense-item">
    //     <div className=''>{props.expense.date.toISOString()}</div>
    //     <div className='expense-description'>
    //         <h2>{props.expense.title}</h2>
    //         <div className='expense-price'>${props.expense.price}</div>
    //     </div>
    // </div>

    // OBJECT DESTRUCTURING WAY
    // <div className="expense-item">
    //   <div className="">{date.toISOString()}</div>
    //   <div className="expense-description">
    //     <h2>{title}</h2>
    //     <div className="expense-price">${amount}</div>
    //   </div>
    // </div>

    // Adding normal javascript logic to component
    // <div className="expense-item">
    //   <div className="">
    //     <div>{month}</div>
    //     <div>{day}</div>
    //     <div>{year}</div>
    //   </div>
    //   <div className="expense-description">
    //     <h2>{props.title}</h2>
    //     <div className="expense-price">${props.amount}</div>
    //   </div>
    // </div>

    //  using multiple components
  //   <div className="expense-item">
  //   <ExpenseDate date={props.date}/>
  //   <div className="expense-description">
  //     <h2>{props.title}</h2>
  //     <div className="expense-price">${props.amount}</div>
  //   </div>
  // </div>

    // using card component
  <Card className="expense-item">
    <ExpenseDate date={props.date}/>
    <div className="expense-description">
      <h2>{title}</h2>
      <div className="expense-price">${props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
  </Card>
  );
}

export default ExpenseItem;





