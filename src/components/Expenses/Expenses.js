import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const expenses = props.expenses;
  const [selectedYear, setSelectedYear] = useState("2020");

  const onSelectFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log("displaying selected year in expenses JS", selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={selectedYear}
          onSelectYear={onSelectFilterHandler}
        />
        {expenses.map((expenseItem) => {
          return (
            <ExpenseItem
              key={expenseItem.id}
              title={expenseItem.title}
              amount={expenseItem.amount}
              date={expenseItem.date}
            />
          );
        })}
      </Card>
    </div>
  );
};
export default Expenses;
