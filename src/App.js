import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.returnBudget = this.returnBudget(this)
    this.state = {
      input: 0,
      saved: 0,
      month: 500
    }
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      input: event.target.value
    })
  }

  returnBudget() {
    this.setState(state => ({
      month: (state.month - state.input)
    }))
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
                <form style={{ display: "flex", flexDirection: "column" }} onChange={this.handleChange} onSubmit={this.returnBudget}>
                  <input id="amount" placeholder='Amount'></input>
                  <input placeholder="Expense"></input>
                  <button type="submit" >Add Expense</button>
                </form>
                <h1>{this.state.input}</h1>
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
