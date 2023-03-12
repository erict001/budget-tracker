import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      saved: 0,
      month: 500
    }
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: 'flex', justifyContent: 'space-evenly', width: "100vw"}}>
          <div>
            <h1>{this.state.month}</h1>
            <h3>Monthly Budget</h3>
          </div>
          <div>
            <h1>{this.state.saved}</h1>
            <h3>Amount Saved</h3>
          </div>
        </div>
      </header>
    </div>
  );
}}

export default App;
