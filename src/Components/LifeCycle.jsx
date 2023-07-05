import React from "react";

//Initial Phase - invokes the constructor - default props and state
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = () => this.setState({ count: this.state.count + 1 });
    this.decrement = () => this.setState({ count: this.state.count - 1 });
  }

  //Mounting a Component

  //before render()
  componentWillMount() {
    console.log("Component will mount");
  }

  //after render()
  componentDidMount() {
    console.log("Component has mounted.");
  }

  //Updating Phase - multiple times
  //Updating a Component
  componentDidUpdate() {
    console.log("Component updated. Count is now " + this.state.count + ".");
  }

  //Rendering a Component
  render() {
    console.log("Rendering...");
    return (
      <React.Fragment>
        <h1 style={{ marginTop: 100, marginBottom: 30 }}>
          Count: {this.state.count}
        </h1>
        <button onClick={this.increment} style={{ padding: 5, marginRight: 5 }}>
          +
        </button>
        <button onClick={this.decrement} style={{ padding: 5 }}>
          -
        </button>
      </React.Fragment>
    );
  }
}

//Catching Errors in Components
class CounterThatThrowsError extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = () => this.setState({ count: this.state.count + 1 });
    this.decrement = () => this.setState({ count: this.state.count - 1 });
  }

  //Unmounting Phase
  componentWillUnmount() {
    console.log("Counter has been unmounted!");
    // Output: Counter has been unmounted!
  }

  render() {

    if (this.state.count === 3) throw new Error("Crashed!");

    return (
      <React.Fragment>
        <h1 style={{ marginTop: 100, marginBottom: 30 }}>
          Count: {this.state.count}
        </h1>
        <button onClick={this.increment} style={{ padding: 5, marginRight: 5 }}>
          +
        </button>
        <button onClick={this.decrement} style={{ padding: 5 }}>
          -
        </button>
      </React.Fragment>
    );
  }
}

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);

    //Catch errors
    this.state = {
      hasError: false,
      error: null,
    };
  }

  //   componentDidMount() {
  //     console.log("Component has mounted.");
  //   }

  //static getDerivedStateFromError(error) for returning an updated state to allow a render of fallback UI.
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    };
  }

  //componentDidCatch(error, errorInfo) for logging error information to the console,
  //including a component stack tracing back to the source of the error.
  componentDidCatch(error) {
    console.log(error.name + ": " + error.message);
    // Output: Error: Crashed!
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ marginTop: 100, marginLeft: 200 }}>
          <h1>Oh no! Something's gone wrong!</h1>
        </div>
      );
    }

    return (
      <div style={{ marginTop: 100, marginLeft: 200 }}>
        <h1>REACT LIFECYCLE</h1>
        {/* <Counter /> */}
        <CounterThatThrowsError />
        <hr></hr>
        <h1>SPREAD OPERATOR/SYNTAX ...</h1>
        <Spreadsyntax />
        <hr></hr>
        <h1>REACT FRAGMENTS</h1>
        <Table />
      </div>
    );
  }
}

//SPREAD SYNTAX ...
export function Spreadsyntax() {
  const originalImage = {
    src: "https://th.bing.com/th/id/OIP.yNOaibrXZ3bEEC8bfTkJtQHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.56&pid=1.7",
    alt: "This is a random image",
  };
  //The spread operator is very useful when you want to make an exact
  //copy of an existing array, you can use the spread operator to accomplish this quickly.
  const formattedImage = {
    ...originalImage,
    height: 100,
    width: 100,
  };
  return (
    <div style={{ marginTop: 100 }}>
      <Image {...formattedImage} />
    </div>
  );
}

function Image(props) {
  return (
    <div>
      <img {...props} />
    </div>
  );
}

//FRAGMENTS
class Table extends React.Component {
  render() {
    return (
      <table
        className="table"
        style={{
          color: "blue",
          marginTop: 20,
          marginLeft: 100,
          padding: 2,
          fontSize: 14,
          marginBottom: 100,
        }}>
        <thead>
          <tr>
            <Columns />
          </tr>
        </thead>
      </table>
    );
  }
}

class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <th>ID</th>
        <th>NAME</th>
      </React.Fragment>
    );
  }
}
