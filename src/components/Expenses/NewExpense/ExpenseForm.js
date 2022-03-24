import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [formState, setFormState] = useState(false);

  const formNewExpenseHandler = ()=>{
    setFormState(true);
  }
  
  const cancelHandler = ()=>{
    setFormState(false);
  }
  

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value)
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(event.target.value)
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(event.target.value)
  };

  // const [userInput, setUserInput]=useState(
  // {
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // }

  // )
  // const titleChangeHandler = (event)=>{
  //   setUserInput(prevState=>{
  //     return{
  //     ...prevState,
  //     enteredTitle : event.target.value
  //     // setEnteredTitle(event.target.value);
  //     // console.log(event.target.value)
  //   }})
  // };
  // const amountChangeHandler = (event)=>{
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount : event.target.value
  //   })
  //   // setEnteredAmount(event.target.value);
  //   // console.log(event.target.value)
  // };
  // const dateChangeHandler = (event)=>{
  //   setUserInput({
  //     ...userInput,
  //     enteredDate : event.target.value
  //   })
  //   // setEnteredDate(event.target.value);
  //   // console.log(event.target.value)
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setFormState(false);
  };

  return (<div>
    {formState===false &&  <div className="show-expense__actions">
          <button onClick={formNewExpenseHandler}>Add New Expense</button>
        </div>}
        {
          formState===true && <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
                placeholder="Title..."
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                value={enteredAmount}
                onChange={amountChangeHandler}
                min="0.01"
                step="0.01"
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={enteredDate}
                onChange={dateChangeHandler}
                min="2019/01/01"
                max="2022/12/31"
              />
            </div>
          </div>
            <div className="new-expense__actions">

              <button onClick={cancelHandler}>Cancel</button>
              <button type="submit">Add Expense</button>
            </div>
        </form>
        }
   
   
  </div>
    
  );
};

export default ExpenseForm;
