import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense=(props)=>{

  const saveExpenseDataHandler =(enteredExpenseData)=>{
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    };

    props.onGetExpenseHandler(expenseData);
  };

  return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData= {saveExpenseDataHandler}/>
  </div>)
}


export default NewExpense;