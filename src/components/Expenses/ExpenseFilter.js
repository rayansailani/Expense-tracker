import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  const years = [];
  // for(let i = props.minYear;i<=props.maxYear;i++){
    // years.push(<option value={i}>{i}</option>);
  // }
  console.log(years);
  const filterHandler = (event) => {
    props.onSelectYear(event.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.defaultYear} onChange={filterHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
        {/* <select value={props.defaultYear} onChange={filterHandler}>
          {years.map(option=>option)}
        </select> */}

        
      </div>
    </div>
  );
};

export default ExpensesFilter;