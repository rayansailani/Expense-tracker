import React from "react";
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback ">Found No expenses</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((expenseItem) => {
          return (
            <li>
              <ExpenseItem
                key={expenseItem.id}
                title={expenseItem.title}
                amount={expenseItem.amount}
                date={expenseItem.date}
              />
            </li>
          );
        })}
      </ul>
    );
  }
};

export default ExpensesList;
