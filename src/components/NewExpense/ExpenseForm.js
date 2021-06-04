import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const tomorrow = new Date();
  
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredTitle:event.target.value};
    // });
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredAmount:event.target.value};
    // }); 
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate:  event.target.value,
    // })
    // the below approach depends on the prev state, this is because
    //  state change is scheduled and some times when many states are updated at once the there might be some delays
    // due to which the wrong previous state is picked up. Hence we used this when the current state is dependent of the previous state

    // setUserInput((prevState)=>{
    //   return {...prevState, enteredDate:event.target.value};
    // });
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate)
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    // on change is invoked after the input is done as in the element is out of focus
    // on input checks every word, like word by word. Good for minute level of checking of input

    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} id="" />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input

            type="number"
            min="0"
            value={enteredAmount}
            onChange={amountChangeHandler}
            step="0.01"
            id=""
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            max={(tomorrow.getDate()+1).toString()+"-"+(tomorrow.getMonth()).toString()+"-"+(tomorrow.getFullYear()).toString()}
            id=""
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit" >
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
