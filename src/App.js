import React, { Component } from 'react';
// import './App.css';
import result from './Text'
import Child from './test'


class App extends Component {
  constructor(){
    super()
    this.state = {
      text: '',
      value: 0
    }
  }

  handleText = (evt) => {
    evt.preventDefault();
    this.setState({
      text: result()
    })
  }

  handleChange =(evt)=> {
    this.setState({
      value: evt.target.value
    })
  }

  render() {
    const pargraphs = []
    for(let i = 0; i <= 5; i++){
      pargraphs.push(i)
    }
    const pargraphDropdown = pargraphs.map(pargraph => {
      return (
        <option key={pargraph} value={pargraph}>
          {pargraph}
        </option>
      )
    })

    const stateValue = []
    for(let i = 1; i <= this.state.value; i++){
      stateValue.push(i)
    }
    const text = stateValue.map(elem => {
      return (
        <div key={elem}>
          <p>{result(this.state.text)}</p>
        </div>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
        </header>
          <div className="container">
          <h2 className="center">Body Parts Ipsum</h2>
          <p className="center">How many paragraphs do you need?</p>
            <div className="input-field col s12">
            <select
              className="browser-default"
              value={this.state.value}
              onChange={this.handleChange}
            >
              {pargraphDropdown}
            </select>
              {text}
            </div>
            <button
              type="button"
              className="waves-effect teal lighten-3 btn-large"
              onClick={this.handleText}
              >
              Change Text
            </button>
            <button
              type="button"
              className="waves-effect pink accent-1 btn-large"
              >
              Add Surgery
            </button>
        </div>
      </div>
    );
  }
}

export default App;
