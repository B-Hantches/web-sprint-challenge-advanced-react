import React, { Component } from 'react';

const initialMessage = '';
const initialEmail = '';
const initialSteps = 0;
const initialIndex = 4; // the index the "B" is at

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: initialIndex,
      steps: initialSteps,
      email: initialEmail,
      message: initialMessage,
    };
  }

  getXY() {
    const x = this.state.index % 3;
    const y = Math.floor(this.state.index / 3);
    return { x, y };
  }

  getXYMessage() {
    const { x, y } = this.getXY();
    return `Coordinates (${x + 1}, ${y + 1})`;
  }

  reset() {
    this.setState({
      index: initialIndex,
      steps: initialSteps,
      email: initialEmail,
      message: initialMessage,
    });
  }

  getNextIndex(direction) {
    const { index } = this.state;
    switch (direction) {
      case 'left':
        return index % 3 === 0 ? index : index - 1;
      case 'up':
        return index < 3 ? index : index - 3;
      case 'right':
        return index % 3 === 2 ? index : index + 1;
      case 'down':
        return index > 5 ? index : index + 3;
      default:
        return index;
    }
  }

  move(direction) {
    const newIndex = this.getNextIndex(direction);
    if (newIndex !== this.state.index) {
      this.setState((prevState) => ({
        index: newIndex,
        steps: prevState.steps + 1,
      }));
    }
  }

  onChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    // Implement POST request logic here
    console.log('Email submitted:', this.state.email);
  }

  render() {
    return (
      <div id="wrapper" className={this.props.className}>
        <div className="info">
          <h3 id="coordinates">{this.getXYMessage()}</h3>
          <h3 id="steps">You moved {this.state.steps} times</h3>
        </div>
        <div id="grid">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
            <div
              key={idx}
              className={`square${idx === this.state.index ? ' active' : ''}`}
            >
              {idx === this.state.index ? 'B' : null}
            </div>
          ))}
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={() => this.move('left')}>
            LEFT
          </button>
          <button id="up" onClick={() => this.move('up')}>
            UP
          </button>
          <button id="right" onClick={() => this.move('right')}>
            RIGHT
          </button>
          <button id="down" onClick={() => this.move('down')}>
            DOWN
          </button>
          <button id="reset" onClick={() => this.reset()}>
            reset
          </button>
        </div>
        <form onSubmit={(evt) => this.onSubmit(evt)}>
          <input
            id="email"
            type="email"
            placeholder="type email"
            value={this.state.email}
            onChange={(evt) => this.onChange(evt)}
          ></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    );
  }
}

export default AppClass;
