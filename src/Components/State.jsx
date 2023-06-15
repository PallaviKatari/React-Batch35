import React, { Component, useState } from "react";

//State in Class Component
export default class State1 extends Component {
  constructor() {
    super();
    //this.state property
    this.state = {
      count: 0, //1 2
    };
    //bind(this) reflect the changes done by the setState() to this.state.count
    this.increment = this.increment.bind(this);
  }

  //method increment() to change the state of count property with the help of this.setState()
  increment() {
    //make changes in the state this.setState() method
    this.setState({ count: this.state.count + 1 }); // 1 -> 2 -> 3
    console.log(this.state.count); //0 1
  }
  render() {
    return (
      <div>
        <h1>State Management - Class</h1>
        {/* String Interpolation */}
        <p>Class Component - State Management - Count - {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <hr></hr>
        <State2/>
      </div>
    );
  }
}

//Functional Component
const State2 = () => {
    //State-useState-react
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h1>State Management - Functional</h1>
      {/* String Interpolation */}
      <p>Functional Component - State - Count - {count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
};
