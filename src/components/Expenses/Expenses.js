import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const expenses = props.expenses;
  const [selectedYear, setSelectedYear] = useState("2020");
  // const [years, setYears] = useState([]);
  const filteredExpenses = expenses.filter(item=> item.date.getFullYear().toString() === selectedYear);
  const onlyYears = [];
  expenses.map(ex=>{
    return onlyYears.push(parseInt(ex.date.getFullYear()))
  });
  const onSelectFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);  
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={selectedYear}
          onSelectYear={onSelectFilterHandler}
          minYear = {Math.min(...onlyYears)}
          maxYear = {Math.max(...onlyYears)}
        />
        {filteredExpenses.map((expenseItem) => {
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
