import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

export default function App() {
  // set the monthly budget to 500
  const [monthly, setMonthly] = useState(500);
  // allow input to take the value of input and set to 0
  const [input, setInput] = useState();
  const [expense, setExpense] = useState(" ");

  const handleChange = ({ target }) => {
    const inputValue = target.value
    setInput(inputValue)
    console.log(inputValue)
  }

  const returnBudget = (e) => {
    e.preventDefault()
    return setMonthly(monthly - input)
  }

  const styles = {
    mainDiv: {
      display: 'flex',
      justifyContent: 'space-evenly',
      width: "100vw"
    },
    form: {
      display: "flex",
      flexDirection: "column"
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.mainDiv}>
          <div>
            <div>
              <h1>Monthly Budget</h1>
              <h2>{monthly}</h2>
            </div>
            <div>
              <form style={styles.form} onSubmit={returnBudget}>
                <input id="amount" placeholder='Amount' onChange={handleChange}></input>
                <input placeholder="Expense" onChange={handleChange}></input>
                <input
                  onChange={handleChange}
                  type="date"
                  name="bday"
                />
                <button type="submit"  >Add Expense</button>
              </form>
            </div>
          </div>
          <div>
            <h1>Amount Saved</h1>
            <h3>{input}</h3>
          </div>
        </div>
      </header>
    </div>
  );
}