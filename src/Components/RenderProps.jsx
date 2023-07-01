import React, { Component, useState } from "react";
// ES6 Modules or TypeScript
//import Swal from 'sweetalert2'

// CommonJS
const Swal = require("sweetalert2");

//React render props pattern
//The parent component passes a function to the child component as a render prop,
//and the child component calls the function rather than implementing its own logic.
//A render props pattern emerges when you have
//a component that dynamically renders element to the screen from its prop value.

//EXAMPLE 1

//the WrapperComponent component who passes the render prop
class WrapperComponent extends Component {
  render() {
    return <BaseComponent render={(name) => <h1>Hello, {name} </h1>} />;
  }
}

//the AnotherWrapper component who passes the render prop
class AnotherWrapper extends Component {
  render() {
    return (
      <BaseComponent
        render={(name) => <p style={{ marginTop: 30 }}>Hello Mister {name}!</p>}
      />
    );
  }
}

//the base component who has calls the render prop
//the BaseComponent can share its logic across many components
class BaseComponent extends Component {
  state = {
    name: "Danny",
  };

  render() {
    return this.props.render(this.state.name);
  }
}

export default function RenderProps() {
  return (
    <div style={{ marginTop: 100, marginLeft: 200 }}>
      <h1>RENDER PROPS - AN ADVANCED REACT PATTERN</h1>
      <p>
        The term “render prop” refers to a technique for sharing code between
        React components using a prop whose value is a function. In simple
        words, render props are simply props of a component where you can pass
        functions. These functions need to return elements, which will be used
        in rendering the components.
      </p>
      <h3>EXAMPLE 1</h3>
      <WrapperComponent />
      <AnotherWrapper />
      <CustomHookWrapperComponent />
      <CustomHookAnotherWrapper />
      <hr />
      <h3>EXAMPLE 2</h3>
      <p>
        Use of Render Props for Cross-Cutting Concerns We can encapsulate the
        behavior of one component and share the same state with another. Instead
        of hard-coding the component inside another, we can provide the
        component with a function prop, i.e., render props that dynamically
        determine what to render. <br />
        Let us understand this with the help of the following example: <br />
        Example We have a Mouse component that keeps track of the mouse's
        position. It encapsulates all behavior associated with listening to
        mouse events. <br />
        To get that behavior, we will render a Mouse with a render prop that
        determines what to render with the cursor's current (x, y). <br />
        The CircularImage component renders the image as the mouse moves around
        the screen. <br />
        We could use a CircularImage mouse = x, y prop to pass the mouse
        coordinates to the component.
        <br /> Therefore, it knows where to place the image on the screen.{" "}
        <br />
        Instead of hard-coding a CircularImage inside a Mouse component, we can
        provide Mouse with a render prop that dynamically determines what to
        render. <br />
        We do not need to create new components for different use cases.
      </p>
      <RenderPropsMouse />
    </div>
  );
}

//custom hook for the above functionality
function useName(initialValue = "Peter") {
  const [name, setName] = useState(initialValue);
  return [name, setName];
}

function CustomHookWrapperComponent() {
  const [name] = useName();

  return <h1>Good to see you today, {name}!</h1>;
}

function CustomHookAnotherWrapper() {
  const [name] = useName();

  return <p style={{ marginTop: 30 }}>Hello Mister {name}!</p>;
}

//EXAMPLE 2
//Use of Render Props for Cross-Cutting Concerns
//We can encapsulate the behavior of one component and
//share the same state with another. Instead of hard-coding
//the component inside another, we can provide the component
//with a function prop, i.e., render props that dynamically determine what to render.

// App component
class RenderPropsMouse extends Component {
  render() {
    return (
      <div>
        <h1>Render Props</h1>
        <MouseTracker />
      </div>
    );
  }
}

//Image Component
class CircularImage extends React.Component {
  render() {
    const mouse = this.props.mouse; // x=0,y=0
    const image =
      "https://www.kasandbox.org/programming-images/avatars/spunky-sam.png";
    return (
      <img
        src={image}
        alt={image}
        style={{
          position: "absolute",
          left: mouse.x, //0
          top: mouse.y, //0
          height: "30px",
          borderRadius: "100%",
        }}
      />
    );
  }
}

//Mouse Component
class Mouse extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/*
         Using the render prop to dynamically determine what to render in this component.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class Mouse1 extends Component {
  constructor(props) {
    super(props);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.state = { name: "" };
  }

  handleMouseClick() {
    Swal.fire({
      title: "Guess? Who am I!!!",
      icon: "question",
      html: `<input type="text" id="answer" class="swal2-input" placeholder="Answer me!!!">`,
      confirmButtonText: "Are you sure?",
      focusConfirm: false,
      preConfirm: () => {
        const answer = Swal.getPopup().querySelector("#answer").value;
        if (!answer && answer !== "Spunky Sam" ) {
          Swal.showValidationMessage(`Guess my name.....`);
        } else if (answer !== "Spunky Sam") {
          Swal.showValidationMessage(`Try again.....`);
        }
        return { answer: answer };
      },
    }).then((result) => {
      Swal.fire(
        `Answer: ${result.value.answer}`.trim(),
      );
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onClick={this.handleMouseClick}>
        {/*
           Using the render prop to dynamically determine what to render in this component.
          */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class Mouse2 extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.state = { name: "" };
  }

  handleMouseOver(event) {
    this.setState({
      name: "Spunky Sam",
    });
    alert("Spunky Sam here... Please don't disturb!!!!");
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseOver={this.handleMouseOver}>
        {/*
           Using the render prop to dynamically determine what to render in this component.
          */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends Component {
  render() {
    return (
      <div>
        <h2>Move the mouse.</h2>
        {/* <Mouse render={mouse => ( //MouseMove
          <CircularImage mouse={mouse} /> //x,y -> Mouse Component
        )}/> */}
        <br />
        <Mouse1 render={(mouse) => <CircularImage mouse={mouse} />} />
        {/* <Mouse2 render={(mouse) => <CircularImage mouse={mouse} />} /> */}
      </div>
    );
  }
}
