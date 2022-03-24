import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [selectedYear,setSelectedYear]=useState('2022')
const filerExpensesByYearHandler = (event)=>{
  setSelectedYear(event);
}
const filteredYear = props.items.filter((expense)=>{
  return expense.date.getFullYear().toString() === selectedYear;
}

);


  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onFilterExpenses = {filerExpensesByYearHandler}/>
      <ExpenseChart expenses={filteredYear}/>
      <ExpensesList items={filteredYear}/>
      
    </Card>
  );
}

export default Expenses;
