import React from "react";
import {useState} from 'react';
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    };
    props.onAddExpense(expenseData);
    setShowExpenseForm(!showExpenseForm);
  };
  const onCancelButton = ()=>{
    setShowExpenseForm(!showExpenseForm);
  }
  return (
    <div className="new-expense">
      {
        showExpenseForm ? 
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onClickCancel={onCancelButton} /> : 
        <button onClick={()=>setShowExpenseForm(!showExpenseForm)}>Add Expense</button>
      } 
    </div>
  );
};
export default NewExpense;