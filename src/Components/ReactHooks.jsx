import React, { useState,useMemo } from "react";
//useCallback()
import Callback from "./Callback";

//useState Hook
//The useState hook allows us to create state variables in a React function component.
export default function ReactHooks() {
  // const [language, setLanguage] = React.useState("React!!!");
  // const [projects, setProject] = React.useState(0);
  const [state, setState] = useState({
    language: "React",
    projects: 0,
  });
  function changeLanguage() {
    setState({ ...state, language: "React 18" });
  }
  function addProject() {
    setState((prev) => {
      return {
        ...prev,
        projects: prev.projects + 1,
      };
    });
  }
  return (
    <div style={{ marginTop: 100, marginLeft: 200 }}>
      <h1>React useState</h1>
      <h1 onClick={changeLanguage}>
        I've completed {state.projects} projects in {state.language}
      </h1>
      <button onClick={addProject} style={{ marginTop: 30, width: 100 }}>
        Add Project
      </button>
      <hr></hr>
      <Effect />
      <hr></hr>
      <Effect1 />
      <hr></hr>
      <Reference />
      <hr />
      <Context />
      <hr/>
      <Memo/>
      <hr/>
      <Callback/>
    </div>
  );
}

// /useEffect lets us perform side effects in function components.
function Effect() {
  var [color, setColor] = useState("");
  React.useEffect(() => {
    document.body.style.background = color;
    document.body.style.color = "black";
  });
  return (
    <div>
      <h1>React useEffect</h1>
      Enter color to change the background :
      <input
        type="text"
        onChange={(e) => setColor(e.target.value)}
        style={{
          marginTop: 30,
          width: 100,
          marginLeft: 50,
          borderStyle: "dashed",
          borderColor: "black",
        }}></input>
    </div>
  );
}

function Effect1() {
  const [user, setUser] = useState(null);
  React.useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  }, []);
  return (
    <div>
      Random user: <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  );
}

//Refs are a special attribute that are available on all React components.
//They allow us to create a reference to a given element / component when the component mounts.
function Reference() {
  const inputRef = React.useRef(null);
  const inputRef1 = React.useRef(null);
  function handleClearInput() {
    inputRef.current.value = "";
    inputRef1.current.value = "";
    inputRef1.current.focus();
  }
  function changeColor() {
    document.body.style.background = inputRef1.current.value;
  }

  return (
    <form>
      <h1>React useRef</h1>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter Text"
        style={{
          marginTop: 30,
          width: 100,
          marginLeft: 200,
          borderStyle: "dashed",
          borderColor: "black",
        }}
      />
      <button type="button" onClick={handleClearInput}>
        Clear Input
      </button>

      <input
        type="text"
        ref={inputRef1}
        placeholder="Enter Color"
        style={{
          marginTop: 30,
          width: 100,
          marginLeft: 100,
          borderStyle: "dashed",
          borderColor: "black",
        }}
      />

      <button type="button" onClick={changeColor}>
        Change background color
      </button>
    </form>
  );
}

//useContext
//useContext Helps Us Avoid Prop Drilling

// In React, we want to avoid the following problem of
// creating multiple props to pass data down two or more levels from a parent component.

// In some cases, it is fine to pass props through multiple components,
// but it is redundant to pass props through components which do not need it.
// Context is helpful for passing props down multiple levels of child
// components from a parent component and sharing state across our app component tree.

// The useContext hook removes the unusual-looking render props pattern that
// was required in consuming React Context before.

// Instead, useContext gives us a simple function to
// access the data we provided on the value prop of the Context Provider in any child component.


//Root->Parent->Child->Sub-child
const UserContext = React.createContext();
function Context() {
  const [user] = React.useState({ name: "John" });
  return (
    <UserContext.Provider value={user}>
      <Main />
    </UserContext.Provider>
  );
}
const Main = () => {
  return (
    <>
      <Header />
      <br />
      <div>Main app content...</div>
    </>
  );
};

const Header = () => {
  const user = React.useContext(UserContext);
  return (
    <>
      <h1>React useContext</h1>
      <h1 style={{ marginTop: 20 }}>Welcome, {user.name}!</h1>
    </>
  );
};

//Performance is an important aspect in programming, especially in large scale application. 
//The useMemo hook is one tool that can be used to improve the performance of react app.

// useMemo is one of the additional hooks that react provides. 
// What useMemo does is it memoize the return value of a function. 
// This means that I executes function that is passed to it and remembers its return value.
// When the application is initially renders all the functions executes and on every re-render all the functions again executes. 
// useMemo helps you to avoid the execution of functions on every render. 
// useMemo only executes the function passed to it when certain condition is met.
// When specified conditions are not met useMemo return the previous value of that function and avoids executing the function. 
// This can help you optimize your react application by avoiding expensive calculation every time component re-renders.

function Memo() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")
    //const result = expensiveFunction(count)
    //console.log("Result",result)

//without the useMemo(), count and name values will be memoized

// with useMemo include the below 3 lines which will memoize only the count value
    const result = useMemo(()=>{
    return expensiveFunction(count)
  },[count])

return (
    <div>
      <h1>React useMemo</h1>
        <input type="number" value = {count} onChange={({target:{value}})=>setCount(value)} style={{width:200}}/><br/><br/>
        <input type="text" value={name} onChange={({target:{value}})=>setName(value)} style={{width:200}}/>
    <div>{result}</div>
    </div>
)

}

function expensiveFunction (num) {
  console.log('Expensive Function',num)
    for (let i=0;i<100;i++) {} // Expensive function
    return num * 2
}

// The React useMemo hook can be useful when you look 
// for ways to improve performance of your React app. 
// It can help you optimize expensive computations by memoizing 
// output of these computations and avoiding needless executions. 

