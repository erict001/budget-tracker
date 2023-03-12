import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.subtractBudget = this.subtractBudget.bind(this)
    this.state = {
      saved: 0,
      month: 500
    }
  }

  subtractBudget() {
    const amount = document.getElementById("amount")
    this.setState(state => {
      return month: (this.state.month - amount)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ display: 'flex', justifyContent: 'space-evenly', width: "100vw" }}>
            <div>
              <div>
                <h1>{this.state.month}</h1>
                <h3>Monthly Budget</h3>
              </div>
              <div>
                <form style={{display: "flex", flexDirection: "column"}} onSubmit={this.subtractBudget}>
                  <input id="amount" placeholder='Amount'></input>
                  <input placeholder="Expense"></input>
                  <button type="submit">Add Expense</button>
                </form>
              </div>
            </div>
            <div>
              <h1>{this.state.saved}</h1>
              <h3>Amount Saved</h3>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
