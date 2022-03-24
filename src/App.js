import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import {useState} from 'react';

function App() {
  const DUMMY_EXPENSE = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses,setExpenses]=useState( DUMMY_EXPENSE);

  const addExpenseHandler = (expense)=>{
    // console.log('In App.js');
    // console.log(expense);
    setExpenses((preExpense)=>{
      return [expense,...preExpense];
    })
  };
  console.log(expenses);
  return (
    <div>
      <NewExpense onGetExpenseHandler={addExpenseHandler} />
      <Expenses items={expenses} />
     
    </div>
  );
}

export default App;
