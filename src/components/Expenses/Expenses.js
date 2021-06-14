import { useState } from "react";
import ExpenseList from './ExpenseList';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const expenses = props.expenses;
  const [selectedYear, setSelectedYear] = useState("2020");
  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );
  const onlyYears = [];
  expenses.map((ex) => {
    return onlyYears.push(parseInt(ex.date.getFullYear()));
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
          minYear={Math.min(...onlyYears)}
          maxYear={Math.max(...onlyYears)}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items = {filteredExpenses}/>
        
      </Card>
    </div>
  );
};
export default Expenses;
