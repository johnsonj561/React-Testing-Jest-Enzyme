import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
    error: '',
  };

  onIncrement = () => {
    const counter = this.state.counter + 1;
    this.setState({ counter, error: '' });
  }

  onDecrement = () => {
    const { counter } = this.state;
    if (counter === 0) {
      return this.setState({ error: 'Can\'t decrement below 0' })
    }
    this.setState({ counter: counter - 1 });
  }

  render() {
    const { counter, error } = this.state;
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {counter}</h1>
        <button data-test="increment-button" onClick={this.onIncrement}>Increment counter</button>
        <button data-test="decrement-button" onClick={this.onDecrement}>Decrement counter</button>
        {!!error &&
          <h2 style={{ color: 'red' }}>{error}</h2>
        }
      </div>
    )
  }
}

export default App;
